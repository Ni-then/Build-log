const fs = require("fs");
const path = require("path");

const FILE = path.join(__dirname, "todos.json");

function load() {
    if (!fs.existsSync(FILE)) return [];
    try {
        return JSON.parse(fs.readFileSync(FILE, "utf8"));
    } catch {
        return [];
    }
}

function save(todos) {
    fs.writeFileSync(FILE, JSON.stringify(todos, null, 2));
}

const [, , command, ...rest] = process.argv;
const todos = load();

switch (command) {
    case "add": {
        const title = rest.join(" ").trim();
        if (!title) {
            console.log('Usage: node todo.js add "todo text"');
            break;
        }
        const id = todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
        todos.push({ id, title, done: false });
        save(todos);
        console.log(`Added #${id}: ${title}`);
        break;
    }

    case "delete": {
        const id = Number(rest[0]);
        const index = todos.findIndex((t) => t.id === id);
        if (index === -1) {
            console.log(`Todo #${rest[0]} nahi mila`);
            break;
        }
        const [removed] = todos.splice(index, 1);
        save(todos);
        console.log(`Deleted #${id}: ${removed.title}`);
        break;
    }

    case "done": {
        const id = Number(rest[0]);
        const todo = todos.find((t) => t.id === id);
        if (!todo) {
            console.log(`Todo #${rest[0]} nahi mila`);
            break;
        }
        todo.done = true;
        save(todos);
        console.log(`Marked done #${id}: ${todo.title}`);
        break;
    }

    case "list": {
        if (!todos.length) {
            console.log("Koi todo nahi hai");
            break;
        }
        todos.forEach((t) => console.log(`${t.done ? "[x]" : "[ ]"} #${t.id} ${t.title}`));
        break;
    }

    default:
        console.log("Usage:");
        console.log('  node todo.js add "todo text"');
        console.log("  node todo.js delete <id>");
        console.log("  node todo.js done <id>");
        console.log("  node todo.js list");
}