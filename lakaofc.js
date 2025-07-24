/*
@This Project Laka Md v3 Whatsapp Bot
@Created By LakaOfc - Lashmitha
#don't change or editing this codes...❗
# මෙක වෙනස් කරන්න යන්න එපා බොටා වැඩ කරන්නෙ නැතුව යයි...❗
*/
const fs = require("fs");
const path = require("path");
const { File } = require("megajs");
const AdmZip = require("adm-zip");
const axios = require("axios");
const puka = "aHR0cHM6Ly9naXRodWIuY29tL2xha2FkYi9tL3Jhdy9tYWluL3ppcC5qc29u";
const lakadel = ["file", "data", "lib", "media", "plugins"/*, "session"*/];
const filesToDelete = ["index.js"];
function lakadelall() {
for (const folder of lakadel) {
const folderPath = path.join(process.cwd(), folder);
if (fs.existsSync(folderPath)) {
fs.rmSync(folderPath, { recursive: true, force: true });
//console.log(`🗑️ Deleted folder: ${folder}`);
}}
for (const file of filesToDelete) {
const filePath = path.join(process.cwd(), file);
if (fs.existsSync(filePath)) {
fs.unlinkSync(filePath);
//    console.log(`🗑️ Bs Sudu Bye Umma Umma: ${file}`);
}}}
async function lakaofcdlandet(lakabotlink) {
try {
console.log("📥 Downloading Bot Files...");
const megaFile = File.fromURL(lakabotlink);
const zipFilePath = path.join(process.cwd(), "lakaofc.zip");
const stream = await megaFile.download();
const chunks = [];
for await (const chunk of stream) {
chunks.push(chunk);
}
const fileBuffer = Buffer.concat(chunks);
fs.writeFileSync(zipFilePath, fileBuffer);
console.log("File downloaded Complete..!!.✔️");
lakadelall();
console.log("Instaling Bot file..🧩.");
const zip = new AdmZip(zipFilePath);
zip.extractAllTo(process.cwd(), true);
fs.unlinkSync(zipFilePath);
console.log("Extraction complete...!!😙");
} catch (err) {
throw new Error("ඇය යන්න ගියා මැකිලා..😒:" + err.message);
}}
async function main() {
try {
console.log("Fetching Laka-Md v3 update info...🔑");
   const hutta = Buffer.from(puka, "base64").toString("utf-8");
const response = await axios.get(hutta);
      const { update } = response.data;
/*if (!update || typeof update !== "string" || !update.includes("mega.nz")) {     
throw new Error("ලින්ක් එක නැ සුදු ආාය් බලන්න...🥲");
}*/
await lakaofcdlandet(update);
const indexPath = path.join(process.cwd(), "index.js");
if (fs.existsSync(indexPath)) {
console.log("Starting Laka-Md v3 Bot...🟢");
require(indexPath);
} else {
 console.error("බඩු නැනේ සුදු.. Tye Agen...🥀.");
}
 } catch (error) {
console.error("ERORR...👁️", error.message);
}}
main().catch((err) => {
console.error("ERORR...❗", err.message);
});