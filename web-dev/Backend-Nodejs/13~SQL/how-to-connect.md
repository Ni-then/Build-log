1> create a users tables in the SQL Editor of neon db
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password TEXT NOT NULL
);

2>Create a user and connect with the neon db with {pg}

curl -X POST http://localhost:3000/create-user -H "Content-Type: application/json" -d "{\"username\":\"nithen\",\"password\":\"1234\"}"

3> Fetch a user from the db
curl -s http://localhost:3000/get-user/nithen