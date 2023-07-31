import * as fs from "fs";
import * as path from "path";

/**
 * Copy files from source to destination directory.
 * @param {string} src - The source directory path.
 * @param {string} dest - The destination directory path.
 */
const copyFiles = (src: string, dest: string) => {
  try {
    // Get the absolute paths of the source and destination directories
    const srcResolvePath = path.resolve(src);
    const destResolvePath = path.resolve(dest);

    // Check if the destination directory exists, if not, create it
    if (!fs.existsSync(destResolvePath)) {
      fs.mkdirSync(destResolvePath, { recursive: true });
    }

    // Read the files in the source directory
    const files = fs.readdirSync(srcResolvePath);

    // Copy each file from source to destination
    files.forEach((file: string) => {
      const filePath = path.join(srcResolvePath, file);
      const destPath = path.join(destResolvePath, file);

      // Copy the file synchronously
      fs.copyFileSync(filePath, destPath);
    });
  } catch (err) {
    // Log and handle any errors that occur during the process
    console.error("Error copying files: ", err);
    throw err;
  }
};

// Get the command-line arguments
const args = process.argv.slice(2);

// Check if both src and dest arguments are provided
if (args.length !== 2) {
  console.error("Usage: node copyFiles.js <src> <dest>");
  process.exit(1);
}

// Extract the src and dest paths from the command-line arguments
const srcPath = args[0];
const destPath = args[1];

// Call the copyFiles function with the provided src and dest paths
copyFiles(srcPath, destPath);
