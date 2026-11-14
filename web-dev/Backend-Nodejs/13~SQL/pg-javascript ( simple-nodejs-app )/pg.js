import dotenv from "dotenv"
dotenv.config()
import { Pool } from "pg";
import express from "express";
const app = express()
app.use(express.json());
import bcrypt from "bcrypt";
// create - user
app.post("/create-user", async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: "username and password required" });
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        if (process.env.DATABASE_URL === undefined) {
            console.error("DATABASE_URL is not defined in the environment variables.");
            process.exit(1);
        }
        const client = new Pool({ connectionString: process.env.DATABASE_URL });
        await client.connect();
        console.log("Connected!");
        const result = await client.query("INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *", [username, hashedPassword]);
        // $1 aur $2 placeholders (parameters) hain. Ye query ke andar values ki jagah “khali dabbe” ki tarah kaam karte hain, aur actual values alag array [username, hashedPassword] se aati hain.

        // $1 → array ka pehla item(username)
        // $2 → array ka doosra item(hashedPassword)

        // Purpose: user ka data SQL code se alag rakhna, taaki database ko pata rahe ki kya command hai aur kya sirf data.

        res.status(201).json(result.rows[0]);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
})
// get - user
app.get("/get-user/:username", async (req, res) => {
    const { username } = req.params;
    if (!username) {
        return res.status(400).json({ error: "username required" });
    }
    try {
        if (process.env.DATABASE_URL === undefined) {
            console.error("DATABASE_URL is not defined in the environment variables.");
            process.exit(1);
        }
        const client = new Pool({ connectionString: process.env.DATABASE_URL });
        await client.connect();
        console.log("Connected!");
        const result = await client.query("SELECT id , username FROM users WHERE username = $1", [username]);
        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
