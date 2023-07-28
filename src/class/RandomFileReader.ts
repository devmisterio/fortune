import { ReadStream, readdirSync, createReadStream } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

/**
 * Helper class to read a random file from the "texts" folder and get a random quote from it.
 */
export class RandomFileReader {
  private readonly __dirname: string;

  /**
   * Creates an instance of RandomFileReader.
   * It initializes the "__dirname" property to the directory name of the current file.
   */
  constructor() {
    const __filename: string = fileURLToPath(import.meta.url);
    this.__dirname = dirname(__filename);
  }

  /**
   * Gets a random file path from the "texts" folder.
   * @returns {string} The randomly selected file path.
   */
  private getRandomFilePath(): string {
    const filenames: string[] = readdirSync(join(this.__dirname, "../texts"));
    const randomFileIndex: number = Math.floor(
      Math.random() * filenames.length
    );
    return join(this.__dirname, "../texts", filenames[randomFileIndex]);
  }

  /**
   * Reads the content of a file asynchronously and returns it as a Promise.
   * @param {string} filePath - The path of the file to read.
   * @returns {Promise<string>} A Promise that resolves to the file content as a string.
   */
  private async readFileContent(filePath: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const stream: ReadStream = createReadStream(filePath, "utf-8");
      let fileContent: string = "";

      stream.on("data", (chunk: string) => {
        fileContent += chunk;
      });

      stream.on("end", () => {
        resolve(fileContent);
      });

      stream.on("error", (err: Error) => {
        reject(err);
      });
    });
  }

  /**
   * Gets a random quote from the given file content.
   * @param {string} fileContent - The content of the file to extract quotes from.
   * @returns {string} A randomly selected quote.
   */
  private getRandomQuote(fileContent: string): string {
    const quotes: string[] = fileContent.split("%");
    const randomIndex: number = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  /**
   * Gets a random quote from a randomly selected file in the "texts" folder.
   * @returns {Promise<string>} A Promise that resolves to a random quote as a string.
   */
  public async getRandomQuoteFromFile(): Promise<string> {
    try {
      const filePath: string = this.getRandomFilePath();
      const fileContent: string = await this.readFileContent(filePath);
      const randomQuote: string = this.getRandomQuote(fileContent);
      return randomQuote;
    } catch (err) {
      console.error("Error reading file: ", err);
      throw err;
    }
  }
}