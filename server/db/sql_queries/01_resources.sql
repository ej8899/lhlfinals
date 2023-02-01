UPDATE
  resources
SET
  url = '',
  title = '',
  description = '',
  thumbnail = '',
  updated_at = NOW()
WHERE
  id = 1 RETURNING *;