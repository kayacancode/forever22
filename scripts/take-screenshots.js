const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const projects = [
  { name: "tenken", url: "https://tenken.co" },
  { name: "i-hear-you", url: "https://genai-app-ihearyou-1-1773514999423-59133691749.us-central1.run.app/?key=l4qZzDJ1gjz6IMObQiRo7DIK7Wg3iI3Y" },
  { name: "moonstruck", url: "https://moonstruck.vercel.app" },
  { name: "checkpoint", url: "https://github.com/namanpandey13/game-maker" },
  { name: "chipaws", url: "https://chi-paws.vercel.app" },
  { name: "carecompass", url: "https://care-compass-sooty.vercel.app/" },
  { name: "chiquest", url: "https://deepmind-hackathon-psi.vercel.app/" },
  { name: "block-x-block", url: "https://chicago-mosaic-stories.lovable.app" },
  { name: "jasper", url: "https://carlosjmarin.github.io/jasper" },
  { name: "cider", url: "https://cider.build" },
  { name: "hollis", url: "https://genai-app-hollis-1-1773516082617-679995383283.us-central1.run.app/?key=OPM3vYz2ItzgLnyGULjPKqGJyY0yebdL" },
  { name: "towing-busters", url: "https://ai.studio/apps/355d190a-fe65-439e-8ce6-2acf5cd06641?fullscreenApplet=true" },
  { name: "art-lens", url: "https://github.com/J9ylee/ARTLENS/tree/main" },
];

const outputDir = path.join(__dirname, '../public/hackathon-screenshots');

async function takeScreenshots() {
  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const project of projects) {
    try {
      console.log(`Taking screenshot of ${project.name}...`);
      const page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 960 });
      await page.goto(project.url, { waitUntil: 'networkidle2', timeout: 30000 });
      await page.screenshot({
        path: path.join(outputDir, `${project.name}.png`),
        type: 'png'
      });
      await page.close();
      console.log(`  ✓ ${project.name}.png saved`);
    } catch (error) {
      console.log(`  ✗ Failed for ${project.name}: ${error.message}`);
    }
  }

  await browser.close();
  console.log('Done!');
}

takeScreenshots();
