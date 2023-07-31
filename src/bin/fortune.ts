#!/usr/bin/env node
import { getFortune } from "../lib/fortune";

/**
 * Print the fortune to the console.
 * @param {string} fortune - The fortune to print.
 */
function printFortune(fortune: string): void {
  console.log(fortune);
}

/**
 * Main entry point of the application.
 */
async function main(): Promise<void> {
  try {
    // Get the fortune using the getFortune function
    const fortune: string = await getFortune();

    // Print the fortune to the console
    printFortune(fortune);
  } catch (err) {
    // Log and handle any errors that occur during the process
    console.error("Error getting fortune: ", err);
    process.exit(1);
  }
}

// Call the main function
main();
