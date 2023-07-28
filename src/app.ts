import { RandomFileReader } from "./class/RandomFileReader.js";

/**
 * The main entry point of the application.
 * Calls the getRandomQuoteFromFile method of RandomFileReader to get a random quote from a file and logs it to the console.
 * @returns {void}
 */
async function main(): Promise<void> {
  // Create an instance of the RandomFileReader class
  const randomFileReader = new RandomFileReader();

  // Get a random quote from a file using the getRandomQuoteFromFile method
  const randomQuote: string = await randomFileReader.getRandomQuoteFromFile();

  // Log the random quote to the console
  console.log(randomQuote);
}

main();
