/**
 * Crops logo to the visible white frame bounds.
 * This removes outer black canvas so all sides match.
 */
import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";

const path = "public/brand/influcity-logo.png";
const BRIGHT_THRESHOLD = 230;

function lum(r, g, b) {
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

const buf = readFileSync(path);
const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
const stride = channels;

/** Pixel is part of white frame/text. */
function isBrightPixel(r, g, b, a) {
  return a > 24 && lum(r, g, b) >= BRIGHT_THRESHOLD;
}

/** Find bounds of bright logo content (frame/text/line). */
let minX = width;
let minY = height;
let maxX = -1;
let maxY = -1;

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * stride;
    if (!isBrightPixel(data[i], data[i + 1], data[i + 2], data[i + 3])) continue;
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
  }
}

// Fallback to safe trim when detection fails.
if (maxX < minX || maxY < minY) {
  const fallback = await sharp(buf).trim({ threshold: 20 }).png().toBuffer();
  writeFileSync(path, fallback);
  console.log("Fallback trim only:", path, fallback.length, "bytes");
  process.exit(0);
}

const left = Math.max(0, minX);
const top = Math.max(0, minY);
const extractW = Math.min(width - left, maxX - minX + 1);
const extractH = Math.min(height - top, maxY - minY + 1);

const out = await sharp(buf)
  .extract({ left, top, width: extractW, height: extractH })
  .png()
  .toBuffer();

writeFileSync(path, out);
console.log("Frame crop:", `${width}x${height} -> ${extractW}x${extractH} @ (${left},${top})`, out.length, "bytes");
