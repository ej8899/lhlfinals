select
  *
from
  categories
where
  resource_id = 1
ORDER BY
  index;

/*
 GET Categories by Profile Id
 */
SELECT
  resources.profile_id,
  categories.*
FROM
  categories
  JOIN resources ON categories.resource_id = resources.id
WHERE
  categories.deleted_at IS NULL
  AND resources.profile_id = 1;

/*ARRAY OF CATEGORIES */
SELECT
  DISTINCT name
FROM
  categories
WHERE
  resource_id = 1
  AND deleted_at IS NULL
  AND profile_id IS NULL;