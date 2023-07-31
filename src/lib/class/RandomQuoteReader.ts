import * as fs from "fs";
import * as path from "path";

/**
 * Helper class to read a random file from the "texts" folder and get a random quote from it.
 */
export class RandomQuoteReader {
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

  /**
   * Gets a random file path from the "texts" folder.
   * @returns {string} The randomly selected file path.
   */
  private getRandomFilePath(): string {
    const filenames: string[] = fs.readdirSync(
      path.join(__dirname, "../texts"),
      "utf8"
    );
    const randomFileIndex: number = Math.floor(
      Math.random() * filenames.length
    );
    return path.join(__dirname, "../texts", filenames[randomFileIndex]);
  }

  /**
   * Reads the content of a file asynchronously and returns it as a Promise.
   * @param {string} filePath - The path of the file to read.
   * @returns {Promise<string>} A Promise that resolves to the file content as a string.
   */
  private async readFileContent(filePath: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const stream: fs.ReadStream = fs.createReadStream(filePath, "utf8");
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
}
