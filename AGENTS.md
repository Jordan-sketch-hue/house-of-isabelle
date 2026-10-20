# House of Isabel — AGENTS.md
## Higgsfield API SOP (Soul V2 + Wan 3.0)

### Auth
Authorization header: `Key KEY_ID:KEY_SECRET`
Credentials env var: `HF_CREDENTIALS = "KEY_ID:KEY_SECRET"`
Key ID: ce333b0c-cdf3-48c9-8c09-b4d07c1820d9

### Base URL
`https://api.higgsfield.ai`

### Image generation (Soul V2 — $0.0032/img)
```
POST /higgsfield-ai/soul/v2/standard
Authorization: Key ID:SECRET
Content-Type: application/json

{
  "prompt": "...",
  "aspect_ratio": "1:1",
  "enhance_prompt": true,
  "batch_size": 1
}
```
Response: `{ request_id: "..." }`

### Poll for result
```
GET /requests/{request_id}/status
```
Poll every 3s until `status === "completed"`.
Image URL: `response.images[0].url` or `response.image.url`

### VALID aspect ratios (Soul V2)
ONLY these work — NEVER use 4:5 or 3:2 (returns HTTP 400):
- `1:1`  — square (product shots, portraits)
- `4:3`  — landscape (labeled "4:5" in SDK but API value is 4:3)
- `16:9` — widescreen (hero, banners)
- `9:16` — vertical (Reels, Stories)
- `3:4`  — portrait (category cards, campaigns)

### Video generation (Wan 3.0 — $0.020/s)
```
POST /alibaba/wan-3.0/text-to-video
{
  "prompt": "...",
  "duration": 5,
  "aspect_ratio": "16:9",
  "generate_audio": true
}
```
Video URL: `response.video.url`

### Anti-slop rules
- NEVER use: Kling 3, Seedance 2.5, GPT Image 2, Flux, recraft/v4.1/pro
- Always add quality suffix to prompts
- enhance_prompt = true always
- Use direct REST API — NEVER wait for MCP or say MCP not available

### Brand context — House of Isabel
```
Subject: Beautiful Black women, luxurious hair extensions, Jamaican beauty
Lighting: warm gold key light, dramatic split studio lighting
Background: dark obsidian black, champagne/gold accents
Style: luxury beauty editorial, aspirational, magazine-quality
Quality suffix: "ultra premium photography, cinematic studio lighting, sharp focus, 8K, editorial luxury brand"
```

### Generation scripts (project root)
- `hoi-generate.mjs` — all 11 images (hero, portraits, categories)
- `hoi-generate-retry.mjs` — retry portrait shots with 1:1 ratio
- Run: `node <script>.mjs` from `house-of-isabelle/`

### Images needed
| File | Ratio | Content |
|------|-------|---------|
| hero-poster.jpg | 16:9 | Hero background wide shot |
| founder.jpg | 1:1 | Isabel founder portrait |
| vietnamese-straight.jpg | 1:1 | Straight hair product |
| burmese-curly.jpg | 1:1 | Curly hair product |
| body-wave.jpg | 1:1 | Body wave product |
| hd-lace-closure.jpg | 1:1 | HD lace closure |
| full-lace-wig.jpg | 1:1 | Full lace wig |
| cat-bundles.jpg | 3:4 | Category card |
| cat-closures.jpg | 3:4 | Category card |
| cat-wigs.jpg | 3:4 | Category card |
| cat-raw.jpg | 3:4 | Category card |