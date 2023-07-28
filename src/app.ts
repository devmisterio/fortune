import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

// __filename and __dirname are not available in ES6 modules
// Convert the import.meta.url to a file path and store it in __filename
const __filename: string = fileURLToPath(import.meta.url);

// Get the directory name from the __filename
const __dirname: string = path.dirname(__filename);

// The aim is to get a random file from the "texts" folder
function getRandomFilePath(): string {
  // Get all the filenames from the "texts" folder
  const filenames: string[] = fs.readdirSync(path.join(__dirname, "texts"));

  // Get a random index from the filenames array (0 to length - 1)
  const randomFileIndex: number = Math.floor(Math.random() * filenames.length);

  // Return the file path by joining the directory name and the randomly selected filename
  return path.join(__dirname, "texts", filenames[randomFileIndex]);
}

// Function to read the content of a file asynchronously and return it as a Promise
function readFileContent(filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    // Create a read stream for the file at the given filePath, using UTF-8 encoding
    const stream: fs.ReadStream = fs.createReadStream(filePath, "utf-8");

    // Initialize a variable to store the file content as it is read
    let fileContent: string = "";

    // Event handler for 'data' event, which is emitted when a chunk of data is read from the file
    stream.on("data", (chunk: string) => {
      // Append the data chunk to the fileContent variable
      fileContent += chunk;
    });

    // Event handler for 'end' event, which is emitted when the entire file has been read
    stream.on("end", () => {
      // Resolve the Promise with the complete file content
      resolve(fileContent);
    });

    // Event handler for 'error' event, which is emitted if there is an error while reading the file
    stream.on("error", (err: Error) => {
      // Reject the Promise with the encountered error
      reject(err);
    });
  });
}

// Function to get a random quote from the file content
function getRandomQuote(fileContent: string): string {
  // Split the file content into an array of quotes based on the "%" delimiter.
  const quotes: string[] = fileContent.split("%");

  // Generate a random index to select a quote from the quotes array.
  const randomIndex: number = Math.floor(Math.random() * quotes.length);

  // Get the quote at the randomly selected index.
  const randomQuote: string = quotes[randomIndex];

  // Return the random quote.
  return randomQuote;
}

// Immediately invoked async function expression (IIFE) to read a random file and log its content
(async () => {
  try {
    // Get a random file path
    const filePath: string = getRandomFilePath();

    // Read the content of the file asynchronously using the readFileContent function
    const fileContent: string = await readFileContent(filePath);

    // Get a random quote from the file content and log it
    const randomQuote: string = getRandomQuote(fileContent);

    console.log(randomQuote);
  } catch (err) {
    console.log("Error reading file: ", err);
  }
})();
