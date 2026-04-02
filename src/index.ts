// Memer - AI-powered meme matching
// Takes user input (meme idea or news event) and matches it to the best meme templates

import { memeLibrary, buildCatalogPrompt } from "./memes";

interface Env {
  AI: Ai;
}

// System prompt that tells the LLM how to match memes
const SYSTEM_PROMPT = `You are a meme expert. Given a user's request (either a specific meme idea or a news event/situation), pick the 3-5 best meme templates from the catalog and write the text for each one.

MEME CATALOG:
${buildCatalogPrompt()}

RULES:
- Pick 3-5 memes that best fit the user's input
- Write the actual text that should go on each meme
- Match the tone and format of each meme template
- For alternating case memes (Mocking SpongeBob), write in aLtErNaTiNg CaSe
- For multi-panel memes, write text for EACH panel/slot
- Be funny. Be culturally aware. Match the meme's vibe.
- If the input is a news event, find the humor angle first, then match memes

Respond in this exact JSON format (no markdown, no code blocks, just raw JSON):
{
  "memes": [
    {
      "id": "meme-id-from-catalog",
      "name": "Meme Name",
      "text": {
        "slot-name": "text for this slot"
      },
      "explanation": "Brief note on why this meme fits (1 sentence)"
    }
  ]
}`;

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // API endpoint for meme matching
    if (url.pathname === "/api/generate" && request.method === "POST") {
      return handleGenerate(request, env);
    }

    // Health check
    if (url.pathname === "/api/health") {
      return Response.json({ status: "ok", memeCount: memeLibrary.length });
    }

    // Everything else is served by the static assets (public/ folder)
    return new Response("Not found", { status: 404 });
  },
};

async function handleGenerate(request: Request, env: Env): Promise<Response> {
  try {
    const body = (await request.json()) as { prompt?: string };

    if (!body.prompt || body.prompt.trim().length === 0) {
      return Response.json(
        { error: "Please provide a prompt", code: "MISSING_PROMPT" },
        { status: 400 }
      );
    }

    if (body.prompt.length > 1000) {
      return Response.json(
        { error: "Prompt too long (max 1000 chars)", code: "PROMPT_TOO_LONG" },
        { status: 400 }
      );
    }

    // Call Llama 4 Scout via Workers AI (fast, 131K context, vision-capable)
    const response = await env.AI.run("@cf/meta/llama-4-scout-17b-16e-instruct" as BaseAiTextGenerationModels, {
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: body.prompt },
      ],
      temperature: 0.8,
      max_tokens: 2048,
    });

    // Workers AI returns { response: string } or the parsed object directly
    const aiResult = response as { response?: string | object };
    let parsed: { memes?: unknown[] };

    if (typeof aiResult.response === "object" && aiResult.response !== null) {
      // Model returned structured JSON directly
      parsed = aiResult.response as { memes?: unknown[] };
    } else if (typeof aiResult.response === "string") {
      // Model returned a string, parse it
      try {
        const cleaned = aiResult.response.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
        parsed = JSON.parse(cleaned);
      } catch {
        console.error("Failed to parse AI response:", aiResult.response);
        return Response.json(
          { error: "AI returned invalid format", code: "AI_PARSE_ERROR" },
          { status: 500 }
        );
      }
    } else {
      return Response.json(
        { error: "No response from AI", code: "AI_EMPTY" },
        { status: 500 }
      );
    }

    // Enrich the response with full meme template data
    const enriched = parsed.memes?.map((match: { id: string; name: string; text: Record<string, string>; explanation: string }) => {
      const template = memeLibrary.find((m) => m.id === match.id);
      return {
        ...match,
        type: template?.type ?? "image",
        format: template?.format,
        templateUrl: template?.templateUrl,
      };
    });

    return Response.json({ prompt: body.prompt, memes: enriched ?? parsed.memes });
  } catch (err) {
    console.error("Generate failed:", err);
    return Response.json(
      { error: "Internal error", code: "INTERNAL_ERROR" },
      { status: 500 }
    );
  }
}
