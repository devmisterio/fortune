import * as fs from 'fs';
import * as path from 'path';

export class RandomQuoteReader {
    public getRandomFilePath(): string {
        const filenames: string[] = fs.readdirSync(path.join(__dirname, "../texts"), 'utf8');
        const randomFileIndex: number = Math.floor(Math.random() * filenames.length);
        return path.join(__dirname, "../texts", filenames[randomFileIndex]);
    }
}