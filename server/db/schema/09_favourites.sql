DROP TABLE IF EXISTS favourites CASCADE;

CREATE TABLE favourites (
  id SERIAL PRIMARY KEY NOT NULL,
  resource_id INTEGER REFERENCES resource_id(id) ON DELETE CASCADE,
  profile_id INTEGER REFERENCES profile_id(id) ON DELETE CASCADE,
  is_favourite BOOLEAN,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP,
  deleted_at TIMESTAMP
);