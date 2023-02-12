DROP TABLE IF EXISTS recommends CASCADE;

CREATE TABLE recommends (
  id SERIAL PRIMARY KEY NOT NULL,
  resource_id INTEGER REFERENCES resources(id) ON DELETE CASCADE,
  profile_id INTEGER REFERENCES profiles(id) ON DELETE CASCADE,
  is_recommended BOOLEAN,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP,
  deleted_at TIMESTAMP,
  unique(resource_id, profile_id)
);