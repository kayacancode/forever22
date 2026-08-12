// On Vercel, keep the downloaded Chrome inside node_modules/.cache so the
// build cache preserves it between deploys (the default ~/.cache location is
// not part of Vercel's cache). Locally, use puppeteer's default cache.
const { join } = require("path");

module.exports = process.env.VERCEL
  ? { cacheDirectory: join(__dirname, "node_modules", ".cache", "puppeteer") }
  : {};
