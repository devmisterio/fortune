#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';
import { RandomQuoteReader } from "../lib/class/RandomQuoteReader";

const randomQuoteReader: RandomQuoteReader = new RandomQuoteReader();
console.log(randomQuoteReader.getRandomFilePath());

const textsFiles: string[] = fs.readdirSync(path.join(__dirname, "../lib/texts"), 'utf8');
const randomFileIndex: number = Math.floor(Math.random() * textsFiles.length);
const randomTextFilePath: string = path.join(__dirname, "../lib/texts", textsFiles[randomFileIndex]);

const text: string = fs.readFileSync(randomTextFilePath, 'utf8');

const quotes: string[] = text.split("%");
const randomIndex: number = Math.floor(Math.random() * quotes.length);
console.log(quotes[randomIndex]);


