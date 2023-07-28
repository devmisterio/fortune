import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

// __filename and __dirname are not available in ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// aim is to get a random file from the texts folder
const filenames = fs.readdirSync(path.join(__dirname, "texts"));

// get a random index from the filenames array (0 to length - 1)
const randomFileIndex = Math.floor(Math.random() * filenames.length) + 1;

// get the file path
const filePath = path.join(__dirname, "texts", filenames[randomFileIndex]);

// read the file with readStream
const fileContent = fs.readFileSync(filePath, "utf-8");

console.log(fileContent);
