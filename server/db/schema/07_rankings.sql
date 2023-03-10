DROP TABLE IF EXISTS rankings CASCADE;

CREATE TABLE rankings (
  id SERIAL PRIMARY KEY NOT NULL,
  resource_id INTEGER REFERENCES resources(id) ON DELETE CASCADE,
  profile_id INTEGER REFERENCES profiles(id) ON DELETE CASCADE,
  name VARCHAR(255),
  SCALE INTEGER NOT NULL,
  note VARCHAR(255),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP,
  deleted_at TIMESTAMP,
  unique(resource_id, profile_id)
);