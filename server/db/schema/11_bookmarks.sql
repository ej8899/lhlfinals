DROP TABLE IF EXISTS bookmarks CASCADE;

CREATE TABLE bookmarks (
  id SERIAL PRIMARY KEY NOT NULL,
  resource_id INTEGER REFERENCES resources(id) ON DELETE CASCADE,
  profile_id INTEGER REFERENCES profiles(id) ON DELETE CASCADE,
  is_bookmarked BOOLEAN,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP,

  deleted_at TIMESTAMP,
  unique(resource_id, profile_id)

);