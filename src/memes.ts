// Meme template catalog - each entry describes a meme, what it's good for,
// and how text should be placed on it

export interface MemeTemplate {
  id: string;
  name: string;
  type: "image" | "gif";
  // How text goes on this meme
  format: TextFormat;
  // What this meme is good for - used by the LLM to match
  tags: string[];
  description: string;
  // Where to find the template image/gif (we'll populate these with actual URLs later)
  templateUrl: string;
}

export type TextFormat =
  | { style: "top-bottom"; slots: ["top", "bottom"] }
  | { style: "two-panel"; slots: string[] }
  | { style: "multi-panel"; slots: string[]; panelCount: number }
  | { style: "caption-above"; slots: ["caption"] }
  | { style: "label"; slots: string[] }
  | { style: "reaction"; slots: ["caption"] }
  | { style: "speech-bubble"; slots: string[] };

// ============================================================
// COMPARISON / PREFERENCE MEMES
// ============================================================

const comparisonMemes: MemeTemplate[] = [
  {
    id: "drake",
    name: "Drake Hotline Bling",
    type: "image",
    format: { style: "two-panel", slots: ["reject", "approve"] },
    tags: ["preference", "comparison", "reject-approve", "better-option", "upgrade"],
    description: "Two panels. Top: Drake recoiling (the bad option). Bottom: Drake pointing and smiling (the preferred option).",
    templateUrl: "",
  },
  {
    id: "distracted-boyfriend",
    name: "Distracted Boyfriend",
    type: "image",
    format: { style: "label", slots: ["boyfriend", "other-woman", "girlfriend"] },
    tags: ["temptation", "disloyalty", "abandoning", "new-shiny-thing", "priorities"],
    description: "Stock photo of a man walking with girlfriend while turning to check out another woman. Three labels: boyfriend, other woman, girlfriend.",
    templateUrl: "",
  },
  {
    id: "tuxedo-pooh",
    name: "Tuxedo Winnie the Pooh",
    type: "image",
    format: { style: "two-panel", slots: ["basic", "fancy"] },
    tags: ["classy", "upgrade", "sophisticated", "fancy-version", "elevated"],
    description: "Top: regular Pooh with the basic version. Bottom: Pooh in a tuxedo with the fancy version.",
    templateUrl: "",
  },
  {
    id: "buff-doge-cheems",
    name: "Buff Doge vs. Cheems",
    type: "image",
    format: { style: "two-panel", slots: ["strong", "weak"] },
    tags: ["past-vs-present", "strong-vs-weak", "decline", "nostalgia", "comparison"],
    description: "Left: muscular Shiba Inu (the strong/good version). Right: small sad Shiba Inu (the weak/bad version).",
    templateUrl: "",
  },
  {
    id: "two-buttons",
    name: "Two Buttons",
    type: "image",
    format: { style: "label", slots: ["button-1", "button-2", "person"] },
    tags: ["dilemma", "impossible-choice", "decision", "conflicted", "choosing"],
    description: "Sweating man agonizing over which of two big red buttons to press.",
    templateUrl: "",
  },
  {
    id: "same-picture",
    name: "They're The Same Picture",
    type: "image",
    format: { style: "label", slots: ["image-1", "image-2"] },
    tags: ["identical", "no-difference", "sarcasm", "comparison", "corporate"],
    description: "Pam from The Office holds up two photos and declares 'They're the same picture.' Label the two things being compared.",
    templateUrl: "",
  },
  {
    id: "epic-handshake",
    name: "Epic Handshake",
    type: "image",
    format: { style: "label", slots: ["left-arm", "right-arm", "handshake"] },
    tags: ["agreement", "common-ground", "unity", "unlikely-allies", "shared-interest"],
    description: "Two muscular arms clasping in a handshake (from Predator). Each arm labeled, handshake labeled with what they agree on.",
    templateUrl: "",
  },
  {
    id: "bell-curve",
    name: "Bell Curve / IQ Curve",
    type: "image",
    format: { style: "label", slots: ["low-iq", "mid-iq", "high-iq"] },
    tags: ["horseshoe-theory", "extremes-agree", "overthinking", "simple-answer", "irony"],
    description: "Bell curve with three figures. Low and high IQ ends agree on something simple, while the middle overthinks it.",
    templateUrl: "",
  },
];

// ============================================================
// REACTION MEMES (IMAGES)
// ============================================================

const reactionMemes: MemeTemplate[] = [
  {
    id: "surprised-pikachu",
    name: "Surprised Pikachu",
    type: "image",
    format: { style: "caption-above", slots: ["caption"] },
    tags: ["surprise", "predictable-outcome", "obvious", "shocked", "feigned-surprise"],
    description: "Pikachu with mouth wide open in shock. Used when something totally predictable happens and someone acts surprised.",
    templateUrl: "",
  },
  {
    id: "monkey-puppet",
    name: "Monkey Puppet Side Eye",
    type: "image",
    format: { style: "caption-above", slots: ["caption"] },
    tags: ["awkward", "guilty", "caught", "pretending", "side-eye", "uncomfortable"],
    description: "Puppet monkey from a Japanese show glancing sideways nervously then looking away.",
    templateUrl: "",
  },
  {
    id: "hide-the-pain-harold",
    name: "Hide the Pain Harold",
    type: "image",
    format: { style: "caption-above", slots: ["caption"] },
    tags: ["pain", "hiding-feelings", "fake-smile", "suffering", "pretending-fine"],
    description: "Stock photo of older man smiling at camera with visibly pained eyes. Hiding emotional pain behind a smile.",
    templateUrl: "",
  },
  {
    id: "disaster-girl",
    name: "Disaster Girl",
    type: "image",
    format: { style: "caption-above", slots: ["caption"] },
    tags: ["evil", "sinister", "chaos", "arson", "mischief", "satisfaction"],
    description: "Young girl smirking at the camera with a house on fire behind her.",
    templateUrl: "",
  },
  {
    id: "woman-yelling-at-cat",
    name: "Woman Yelling at Cat",
    type: "image",
    format: { style: "two-panel", slots: ["woman", "cat"] },
    tags: ["argument", "misunderstanding", "irrational-anger", "confused", "accusation"],
    description: "Left: angry woman pointing/yelling. Right: confused white cat (Smudge) at a dinner table.",
    templateUrl: "",
  },
  {
    id: "mocking-spongebob",
    name: "Mocking SpongeBob",
    type: "image",
    format: { style: "caption-above", slots: ["caption"] },
    tags: ["mocking", "sarcasm", "ridicule", "mimicking", "alternating-case"],
    description: "SpongeBob in a weird bent-over pose, mimicking someone. Text is repeated in aLtErNaTiNg CaSe.",
    templateUrl: "",
  },
  {
    id: "laughing-leo",
    name: "Laughing Leo",
    type: "image",
    format: { style: "caption-above", slots: ["caption"] },
    tags: ["smug", "laughing", "pointing", "recognition", "i-knew-it", "vindication"],
    description: "Leonardo DiCaprio from Django Unchained, holding a drink and laughing/pointing.",
    templateUrl: "",
  },
  {
    id: "absolute-cinema",
    name: "Absolute Cinema",
    type: "image",
    format: { style: "caption-above", slots: ["caption"] },
    tags: ["masterpiece", "dramatic", "epic", "appreciation", "absurd-elevation"],
    description: "Martin Scorsese raising both hands in reverent appreciation. Declares something 'absolute cinema.'",
    templateUrl: "",
  },
  {
    id: "megamind-peeking",
    name: "Megamind Peeking",
    type: "image",
    format: { style: "caption-above", slots: ["caption"] },
    tags: ["curious", "interested", "scheming", "opportunity", "nosy", "suspicious"],
    description: "Animated character Megamind leaning and peeking around a corner with a curious expression.",
    templateUrl: "",
  },
  {
    id: "squidward-window",
    name: "Squidward Window",
    type: "image",
    format: { style: "caption-above", slots: ["caption"] },
    tags: ["fomo", "jealousy", "missing-out", "lonely", "excluded", "longing"],
    description: "Squidward looking out his window sadly while SpongeBob and Patrick play outside.",
    templateUrl: "",
  },
  {
    id: "thinking-about-other-women",
    name: "I Bet He's Thinking About Other Women",
    type: "image",
    format: { style: "two-panel", slots: ["woman-thinks", "man-thinks"] },
    tags: ["random-thoughts", "absurd", "overthinking", "nighttime", "assumptions"],
    description: "Couple in bed. Woman: 'I bet he's thinking about other women.' Man is actually thinking about something absurd.",
    templateUrl: "",
  },
  {
    id: "chill-guy",
    name: "Chill Guy",
    type: "image",
    format: { style: "caption-above", slots: ["caption"] },
    tags: ["unbothered", "relaxed", "calm", "chaos", "laid-back", "indifferent"],
    description: "Anthropomorphic brown dog in grey sweater and jeans, hands in pockets, smirking. 'I'm just a chill guy.'",
    templateUrl: "",
  },
];

// ============================================================
// ESCALATION / MULTI-PANEL MEMES
// ============================================================

const escalationMemes: MemeTemplate[] = [
  {
    id: "expanding-brain",
    name: "Expanding Brain",
    type: "image",
    format: { style: "multi-panel", slots: ["basic", "smart", "genius", "galaxy-brain"], panelCount: 4 },
    tags: ["escalation", "levels", "galaxy-brain", "ascending", "increasingly-absurd"],
    description: "4+ panels with increasingly glowing brains. Each level escalates from normal to cosmically enlightened.",
    templateUrl: "",
  },
  {
    id: "clown-makeup",
    name: "Clown Applying Makeup",
    type: "image",
    format: { style: "multi-panel", slots: ["step-1", "step-2", "step-3", "step-4"], panelCount: 4 },
    tags: ["bad-decisions", "self-sabotage", "foolish", "clown", "regret", "denial"],
    description: "4 panels of a person applying clown makeup step by step. Each panel is another bad decision leading to a bad outcome.",
    templateUrl: "",
  },
  {
    id: "grus-plan",
    name: "Gru's Plan",
    type: "image",
    format: { style: "multi-panel", slots: ["step-1", "step-2", "step-3", "realization"], panelCount: 4 },
    tags: ["plan-backfire", "unexpected-consequence", "realization", "horror", "own-plan"],
    description: "Gru presents plan on whiteboard. Steps 1-3 confidently, then panel 4 he's shocked re-reading the bad last step.",
    templateUrl: "",
  },
  {
    id: "anakin-padme",
    name: "Anakin Padme 4 Panel",
    type: "image",
    format: { style: "multi-panel", slots: ["statement", "response", "follow-up", "silence"], panelCount: 4 },
    tags: ["ominous", "concerning", "implications", "red-flag", "right?", "uncomfortable-truth"],
    description: "Anakin says something. Padme responds positively. Padme asks follow-up. Anakin stares silently. 'Right...?'",
    templateUrl: "",
  },
  {
    id: "panik-kalm-panik",
    name: "Panik Kalm Panik",
    type: "image",
    format: { style: "multi-panel", slots: ["panik-1", "kalm", "panik-2"], panelCount: 3 },
    tags: ["emotional-rollercoaster", "panic", "relief", "worse", "twist", "anxiety"],
    description: "3 panels: cartoon face panicking, then calm, then panicking again. Situation gets bad, then better, then worse.",
    templateUrl: "",
  },
  {
    id: "inhaling-seagull",
    name: "Inhaling Seagull",
    type: "image",
    format: { style: "multi-panel", slots: ["calm", "inhale", "more", "scream"], panelCount: 4 },
    tags: ["escalation", "screaming", "frustration", "buildup", "rage", "excitement"],
    description: "4 photos of a seagull progressively opening its mouth wider, culminating in a full scream.",
    templateUrl: "",
  },
  {
    id: "american-chopper",
    name: "American Chopper Argument",
    type: "image",
    format: { style: "multi-panel", slots: ["person-1a", "person-2a", "person-1b", "person-2b", "person-1c"], panelCount: 5 },
    tags: ["argument", "debate", "heated", "back-and-forth", "fighting", "yelling"],
    description: "5 panels of father and son from American Chopper screaming at each other with furniture thrown.",
    templateUrl: "",
  },
];

// ============================================================
// SITUATIONAL / SELF-DEPRECATING MEMES
// ============================================================

const situationalMemes: MemeTemplate[] = [
  {
    id: "this-is-fine",
    name: "This Is Fine",
    type: "image",
    format: { style: "caption-above", slots: ["caption"] },
    tags: ["denial", "disaster", "coping", "everything-is-fine", "fire", "acceptance"],
    description: "Dog sitting in a room on fire, sipping coffee. 'This is fine.' Pretending everything is okay when it clearly isn't.",
    templateUrl: "",
  },
  {
    id: "change-my-mind",
    name: "Change My Mind",
    type: "image",
    format: { style: "label", slots: ["sign-text"] },
    tags: ["hot-take", "controversial-opinion", "debate", "challenge", "bold-claim"],
    description: "Steven Crowder at a folding table with a sign: '[opinion]. Change my mind.'",
    templateUrl: "",
  },
  {
    id: "uno-draw-25",
    name: "UNO Draw 25",
    type: "image",
    format: { style: "label", slots: ["reasonable-thing", "person"] },
    tags: ["stubbornness", "refusal", "avoidance", "consequences", "rather-suffer"],
    description: "UNO card: 'do [thing]' or 'Draw 25.' Person holds massive stack of cards. They'd rather suffer than do the obvious.",
    templateUrl: "",
  },
  {
    id: "bike-fall",
    name: "Bike Fall",
    type: "image",
    format: { style: "multi-panel", slots: ["riding", "stick-in-spokes", "blame"], panelCount: 3 },
    tags: ["self-sabotage", "blaming-others", "own-fault", "hypocrisy", "caused-own-problem"],
    description: "Person on bike puts stick in own spokes, falls, then blames the stick. Self-inflicted problems blamed on something else.",
    templateUrl: "",
  },
  {
    id: "running-away-balloon",
    name: "Running Away Balloon",
    type: "image",
    format: { style: "label", slots: ["person", "floating-balloon", "ground-balloon"] },
    tags: ["missed-opportunity", "held-back", "obligations", "want-vs-have", "distracted"],
    description: "Person reaches for balloon floating away (thing they want) while another thing on the ground holds them back.",
    templateUrl: "",
  },
  {
    id: "sad-pablo",
    name: "Sad Pablo Escobar",
    type: "image",
    format: { style: "caption-above", slots: ["caption"] },
    tags: ["waiting", "boredom", "lonely", "nothing-to-do", "empty", "patience"],
    description: "3 panels of Pablo Escobar standing alone, sitting alone, looking out a window in his empty mansion.",
    templateUrl: "",
  },
  {
    id: "waiting-skeleton",
    name: "Waiting Skeleton",
    type: "image",
    format: { style: "caption-above", slots: ["caption"] },
    tags: ["waiting-forever", "never-happening", "patience", "died-waiting", "slow"],
    description: "Plastic skeleton sitting on a park bench, implying it waited so long it died.",
    templateUrl: "",
  },
  {
    id: "boardroom-meeting",
    name: "Boardroom Meeting Suggestion",
    type: "image",
    format: { style: "multi-panel", slots: ["question", "bad-answer-1", "bad-answer-2", "good-answer-thrown-out"], panelCount: 4 },
    tags: ["corporate", "good-idea-rejected", "absurd", "management", "thrown-out-window"],
    description: "Boss asks question. Two bad answers accepted. Person with the right answer gets thrown out the window.",
    templateUrl: "",
  },
];

// ============================================================
// REACTION GIFs
// ============================================================

const reactionGifs: MemeTemplate[] = [
  {
    id: "michael-scott-no",
    name: "Michael Scott 'No'",
    type: "gif",
    format: { style: "reaction", slots: ["caption"] },
    tags: ["refusal", "horror", "no", "absolute-rejection", "dramatic"],
    description: "Michael Scott from The Office screaming 'NO! God! No!' with escalating panic.",
    templateUrl: "",
  },
  {
    id: "oprah-you-get-a",
    name: "Oprah 'You Get A'",
    type: "gif",
    format: { style: "reaction", slots: ["caption"] },
    tags: ["generosity", "everyone-gets-one", "abundance", "giveaway", "sarcastic-generosity"],
    description: "Oprah excitedly pointing at her audience. 'You get a [thing]! And you get a [thing]!'",
    templateUrl: "",
  },
  {
    id: "picard-facepalm",
    name: "Picard Facepalm",
    type: "gif",
    format: { style: "reaction", slots: ["caption"] },
    tags: ["disappointment", "exasperation", "stupidity", "facepalm", "frustration"],
    description: "Captain Picard from Star Trek pressing his hand to his face in frustration.",
    templateUrl: "",
  },
  {
    id: "confused-math-lady",
    name: "Confused Math Lady",
    type: "gif",
    format: { style: "reaction", slots: ["caption"] },
    tags: ["confusion", "math", "processing", "trying-to-understand", "calculating", "overwhelmed"],
    description: "Woman looking around confusedly with complex math equations floating around her head.",
    templateUrl: "",
  },
  {
    id: "spongebob-head-out",
    name: "SpongeBob 'Ight Imma Head Out'",
    type: "image",
    format: { style: "caption-above", slots: ["caption"] },
    tags: ["leaving", "nope", "done", "exit", "had-enough", "uncomfortable"],
    description: "SpongeBob standing up from his chair with a blank expression, ready to leave.",
    templateUrl: "",
  },
  {
    id: "roll-safe",
    name: "Roll Safe (Think About It)",
    type: "image",
    format: { style: "caption-above", slots: ["caption"] },
    tags: ["bad-logic", "clever-stupid", "loophole", "galaxy-brain", "technically-correct"],
    description: "Man smirking and tapping his temple knowingly. Used for bad logic that technically makes sense.",
    templateUrl: "",
  },
  {
    id: "here-we-go-again",
    name: "Ah Shit, Here We Go Again",
    type: "image",
    format: { style: "caption-above", slots: ["caption"] },
    tags: ["recurring", "repetition", "cycle", "again", "monday", "resigned"],
    description: "CJ from GTA San Andreas walking down a street. 'Ah shit, here we go again.' Recurring bad situations.",
    templateUrl: "",
  },
  {
    id: "leo-cheers",
    name: "Leonardo DiCaprio Cheers",
    type: "image",
    format: { style: "reaction", slots: ["caption"] },
    tags: ["cheers", "toast", "congratulations", "salute", "respect", "well-played"],
    description: "Leo as Gatsby raising a champagne glass with a slight smile.",
    templateUrl: "",
  },
  {
    id: "slow-clap",
    name: "Slow Clap",
    type: "gif",
    format: { style: "reaction", slots: ["caption"] },
    tags: ["sarcastic-approval", "well-played", "impressed", "building-applause"],
    description: "Person slowly clapping, building to faster applause. Sarcastic or genuine appreciation.",
    templateUrl: "",
  },
  {
    id: "mind-blown",
    name: "Mind Blown",
    type: "gif",
    format: { style: "reaction", slots: ["caption"] },
    tags: ["amazed", "revelation", "mind-blown", "shocking", "plot-twist", "epiphany"],
    description: "Person miming their head exploding with rainbow effects. Tim and Eric style.",
    templateUrl: "",
  },
];

// ============================================================
// TIMELESS CLASSICS
// ============================================================

const classicMemes: MemeTemplate[] = [
  {
    id: "one-does-not-simply",
    name: "One Does Not Simply",
    type: "image",
    format: { style: "top-bottom", slots: ["top", "bottom"] },
    tags: ["difficult", "impossible", "underestimated", "warning", "harder-than-it-looks"],
    description: "Boromir from Lord of the Rings gesturing while speaking. 'One does not simply [do difficult thing].'",
    templateUrl: "",
  },
  {
    id: "futurama-fry",
    name: "Futurama Fry (Not Sure If)",
    type: "image",
    format: { style: "top-bottom", slots: ["top", "bottom"] },
    tags: ["uncertainty", "suspicion", "not-sure", "squinting", "ambiguous"],
    description: "Fry from Futurama squinting suspiciously. 'Not sure if [thing] or [other thing].'",
    templateUrl: "",
  },
  {
    id: "success-kid",
    name: "Success Kid",
    type: "image",
    format: { style: "top-bottom", slots: ["top", "bottom"] },
    tags: ["small-win", "victory", "triumph", "accomplishment", "nailed-it"],
    description: "Toddler on a beach clenching his fist triumphantly. Minor wins that feel great.",
    templateUrl: "",
  },
  {
    id: "evil-kermit",
    name: "Evil Kermit",
    type: "image",
    format: { style: "two-panel", slots: ["rational-self", "dark-side"] },
    tags: ["temptation", "inner-voice", "devil-on-shoulder", "self-destructive", "treat-yourself"],
    description: "Regular Kermit (rational self) facing hooded dark Kermit (inner voice tempting you to be bad).",
    templateUrl: "",
  },
  {
    id: "batman-slapping-robin",
    name: "Batman Slapping Robin",
    type: "image",
    format: { style: "speech-bubble", slots: ["robin-says", "batman-says"] },
    tags: ["shut-down", "correction", "interruption", "slap", "wrong-take", "forceful-correction"],
    description: "Robin says something (speech bubble), Batman slaps him and corrects him. Shutting down a bad take.",
    templateUrl: "",
  },
];

// All memes combined into one catalog
export const memeLibrary: MemeTemplate[] = [
  ...comparisonMemes,
  ...reactionMemes,
  ...escalationMemes,
  ...situationalMemes,
  ...reactionGifs,
  ...classicMemes,
];

// Build a compact version of the catalog for the LLM prompt
// (we don't need to send templateUrls or full format objects)
export function buildCatalogPrompt(): string {
  return memeLibrary
    .map(
      (m) =>
        `[${m.id}] ${m.name} (${m.type}) - ${m.description} Tags: ${m.tags.join(", ")}`
    )
    .join("\n");
}
