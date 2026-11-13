CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Id : unique identifier of each row , similar to the _id in mongodb
-- SERIAL : auto-incrementing integer ,  Every time a new row is inserted, this value automatically increments, ensuring each user has a unique id.
-- PRIMARY KEY: This constraint specifies that the id column is the primary key for the table, meaning it uniquely identifies each row. Values in this column must be unique and not null.