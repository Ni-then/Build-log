import fs from "fs"

const filePath = process.argv[2];

if (!filePath) {
    console.log("Usage: node index.js <file-path>");
    process.exit(1);
}

fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
        console.log("Error: file read nahi ho payi ->", err.message);
        process.exit(1);
    }

    const trimmed = data.trim();
    const count = trimmed === "" ? 0 : trimmed.split(/\s+/).length;
    console.log(`You have ${count} words in this file`);
});