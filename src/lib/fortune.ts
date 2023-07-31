import { RandomQuoteReader } from "./class/RandomQuoteReader";

/**
 * Gets a random quote using the RandomQuoteReader.
 * @returns {Promise<string>} A Promise that resolves to a random quote as a string.
 */
export async function getFortune(): Promise<string> {
  const randomQuoteReader: RandomQuoteReader = new RandomQuoteReader();

  try {
    // Get a random quote from a file using the getRandomQuoteFromFile method
    const randomQuote: string =
      await randomQuoteReader.getRandomQuoteFromFile();

    // Return the random quote
    return randomQuote;
  } catch (err) {
    // Log and rethrow any errors that occur during the process
    console.error("Error getting fortune: ", err);
    throw err;
  }
}
