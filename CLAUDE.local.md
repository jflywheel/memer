# Memer - Personal Project

## Context
- Personal project (not FWP)
- Cloudflare account: "Helms Deep" (2eb61107a9e04227ec819c2984a94029)
- Uses Workers AI (Kimi K2.5) for meme matching, no API key needed (billed through Workers AI)

## Architecture
- Cloudflare Worker with static assets
- Workers AI binding for LLM (Kimi K2.5)
- Meme template catalog in src/memes.ts
- Frontend in public/index.html
