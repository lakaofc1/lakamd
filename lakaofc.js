const fs = require("fs");
const path = require("path");
const { File } = require("megajs");
const AdmZip = require("adm-zip");
const axios = require("axios");

const base64Link = "aHR0cHM6Ly9naXRodWIuY29tL2xha2FkYi9tL3Jhdy9tYWluL3ppcC5qc29u";

const downloadAndExtractMegaZip = async (megaLink) => {
  try {
    console.log("📥 Downloading Bot file...");

    const megaFile = File.fromURL(megaLink);
    const currentDirectory = process.cwd();
    const zipFilePath = path.join(currentDirectory, "lakaofc.zip");

    const stream = await megaFile.download();
    const chunks = [];

    for await (const chunk of stream) {
      chunks.push(chunk);
    }

    const fileBuffer = Buffer.concat(chunks);
    fs.writeFileSync(zipFilePath, fileBuffer);

    console.log("🧩 Extracting zip...");
    const zip = new AdmZip(zipFilePath);
    zip.extractAllTo(currentDirectory, true);
    fs.unlinkSync(zipFilePath);

    console.log("✅ Extraction complete.");
  } catch (err) {
    throw new Error("MEGA download or extraction failed: " + err.message);
  }
};

const main = async () => {
  try {
    console.log("📚 Fetching LAKA-MD update info...");

    const decodedUrl = Buffer.from(base64Link, "base64").toString("utf-8");

    const response = await axios.get(decodedUrl);
    const { update } = response.data;

    if (!update || typeof update !== "string" || !update.includes("mega.nz")) {
      throw new Error("Invalid or missing MEGA link in JSON.");
    }

    await downloadAndExtractMegaZip(update);

    const indexPath = path.join(process.cwd(), "index.js");
    if (fs.existsSync(indexPath)) {
      console.log("🟢 Starting LAKA MD Bot...");
      require(indexPath);
    } else {
      console.error("❌ index.js not found after extraction.");
    }
  } catch (error) {
    console.error("🚨 An error occurred:", error.message);
  }
};

main().catch((err) => {
  console.error("❗ Unhandled error in main:", err.message);
});