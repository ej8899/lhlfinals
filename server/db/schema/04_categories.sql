DROP TABLE IF EXISTS categories CASCADE;

CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  resource_id INTEGER REFERENCES resources(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  index INT NOT NULL,
  description VARCHAR(255),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP,
  deleted_at TIMESTAMP
);
