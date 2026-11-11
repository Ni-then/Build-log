import fs from "fs"

import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "data.txt");

// async reading ==> means first control reach to the line no 8 and node js will start reading the file in the bg , so now control reach to the line no 17 where for loop is printing the numbers from 1 to 1000 after completing this control again reach to the line no 8 and then print the content of the file after reading it from the disk

// I/O bounded task : limited by the system’s input/output capabilities
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});

// cpu bounded task : limited by the speed and power of the CPU
for(let i = 1; i <= 1000; i++) {
  console.log(`Processing item ${i}`);
}
// sync file reading ==> means when control reach to the line no 23 , so other taks will be blocked until the file is read
fs.readFileSync(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }   
})

console.log("control reach at the line no 30")
