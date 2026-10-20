import axios from "../j-supreme-conglomerate/node_modules/axios/index.js";
import { createWriteStream, mkdirSync } from "fs";
import https from "https";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const HF_KEY = "ce333b0c-cdf3-48c9-8c09-b4d07c1820d9";
const HF_SECRET = "eb0c1356f4e81211b32af7a099ec90e43e97cad2d0ec304c5196e1ee880dbbd9";
const BASE_URL = "https://api.higgsfield.ai";
const AUTH = `Key ${HF_KEY}:${HF_SECRET}`;
const OUT_DIR = path.join(__dirname, "public", "images");
const POLL_MS = 3000;
const MAX_POLL_MS = 200000;

const client = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: AUTH, "Content-Type": "application/json" },
  timeout: 30000,
});

async function generate(prompt, aspect_ratio, filename) {
  console.log(`\n[${filename}] submitting (ratio: ${aspect_ratio})...`);
  let res;
  try {
    res = await client.post("/higgsfield-ai/soul/v2/standard", {
      prompt, aspect_ratio, enhance_prompt: true, batch_size: 1,
    });
  } catch(e) {
    console.error(`  400 detail:`, JSON.stringify(e.response?.data).slice(0,400));
    throw e;
  }
  const requestId = res.data?.request_id;
  if (!requestId) { console.error("no request_id:", JSON.stringify(res.data).slice(0,300)); return null; }
  console.log(`  id: ${requestId}`);
  const start = Date.now();
  while (Date.now() - start < MAX_POLL_MS) {
    await new Promise(r => setTimeout(r, POLL_MS));
    const poll = await client.get(`/requests/${requestId}/status`);
    const s = poll.data?.status;
    process.stdout.write(`  ${s}\r`);
    if (s === "completed") {
      const url = poll.data?.images?.[0]?.url || poll.data?.image?.url;
      console.log(`\n  done: ${url}`);
      return url;
    }
    if (s === "failed" || s === "nsfw") { console.error(`\n  ${s}:`, JSON.stringify(poll.data).slice(0,300)); return null; }
  }
  console.error("\n  timeout"); return null;
}

async function download(url, filename) {
  const dest = path.join(OUT_DIR, filename);
  return new Promise((resolve, reject) => {
    const ws = createWriteStream(dest);
    https.get(url, res => { res.pipe(ws); ws.on("finish", () => { console.log(`  saved: ${dest}`); resolve(); }); ws.on("error", reject); }).on("error", reject);
  });
}

const Q = "ultra premium photography, cinematic studio lighting, sharp focus, 8K, editorial luxury brand";

// Fixed: use 1:1 for portrait product shots (4:5 not supported)
const JOBS = [
  { filename:"founder.jpg", aspect_ratio:"1:1", prompt:`Elegant portrait of beautiful confident Black Jamaican woman entrepreneur, luxury brand founder, sophisticated dark clothing, warm gold key light, soft bokeh background, strong and graceful, beauty brand founder editorial, ${Q}` },
  { filename:"vietnamese-straight.jpg", aspect_ratio:"1:1", prompt:`Beautiful Black woman with long bone-straight Vietnamese hair extensions, ultra-silky shiny flowing straight texture, studio white lighting, luxury hair beauty campaign, ${Q}` },
  { filename:"burmese-curly.jpg", aspect_ratio:"1:1", prompt:`Beautiful Black woman with lush voluminous Burmese curly hair extensions, tight natural 3C curl pattern, warm golden studio light, luxury natural hair editorial, bouncy and full, ${Q}` },
  { filename:"body-wave.jpg", aspect_ratio:"1:1", prompt:`Beautiful Black woman with long body wave hair extensions, loose flowing S-wave pattern, natural movement high shine, warm editorial beauty lighting, dark background, luxury hair campaign, ${Q}` },
  { filename:"hd-lace-closure.jpg", aspect_ratio:"1:1", prompt:`Close-up beauty shot Black woman with flawless HD lace frontal, invisible undetectable hairline, silky straight hair, transparent lace detail, luxury hair product photography, ${Q}` },
  { filename:"full-lace-wig.jpg", aspect_ratio:"1:1", prompt:`Beautiful Black woman wearing glamorous full lace wig with long straight raw Vietnamese hair, natural hairline, luxury wig editorial, obsidian background, dramatic lighting, ${Q}` },
];

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  console.log("Retrying 6 failed images with 1:1 ratio...\n");
  for (const job of JOBS) {
    try {
      const url = await generate(job.prompt, job.aspect_ratio, job.filename);
      if (url) await download(url, job.filename);
    } catch (err) { console.error(`  error ${job.filename}: ${err.message}`); }
    await new Promise(r => setTimeout(r, 500));
  }
  console.log("\nDone!");
}
main().catch(console.error);