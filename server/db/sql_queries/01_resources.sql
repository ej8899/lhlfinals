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

/*
 PRIORITY #3
 SELECT RESOURCES BASED ON RESOURCE BODY
 */
SELECT
  resources.*,
  count(likes.id) as total_likes,
  AVG(ratings.rate) as avg_rating,
  count(recommends.id) as total_recommends,
  AVG(rankings.scale) as avg_ranking
FROM
  resources
  LEFT JOIN likes ON resources.id = likes.resource_id
  LEFT JOIN ratings ON resources.id = ratings.resource_id
  LEFT JOIN recommends ON resources.id = recommends.resource_id
  LEFT JOIN rankings ON resources.id = rankings.resource_id
WHERE
  resources.profile_id = 1
  AND resources.deleted_at IS NULL
  AND resources.created_at >= current_timestamp - interval '36 hours'
  AND likes.is_liked = true
  AND recommends.is_recommended = true
GROUP BY
  resources.id
HAVING
  COUNT(likes.id) >= 2
  AND AVG(ratings.rate) >= 2
  AND COUNT(recommends.id) >= 2
  AND AVG(rankings.scale) >= 1
  AND AVG(rankings.scale) <= 50
  AND NOT (
    AVG(rankings.scale) >= 2
    AND AVG(rankings.scale) <= 6
  )
ORDER BY
  resources.created_at
LIMIT
  35;

/*
 GET LIKES
 */
SELECT
  resource_id,
  COUNT(*) as total_likes
FROM
  likes
WHERE
  is_liked = true
GROUP BY
  resource_id
HAVING
  COUNT(*) >= 2;

/*
 PRIORITY #3
 SELECT RESOURCES BASED ON RESOURCE BODY + USER
 */
SELECT
  resources.*,
  count(likes.id) AS total_likes,
  AVG(ratings.rate) AS avg_rating,
  count(recommends.id) AS total_recommends,
  AVG(rankings.scale) AS avg_ranking,
  likes.profile_id AS user_profile_id,
  likes.is_liked,
  favourites.is_favourite,
  bookmarks.is_bookmarked,
  playlists.is_playlist,
  recommends.is_recommended,
  ratings.rate AS my_rating
FROM
  resources
  LEFT JOIN likes ON resources.id = likes.resource_id
  LEFT JOIN ratings ON resources.id = ratings.resource_id
  LEFT JOIN recommends ON resources.id = recommends.resource_id
  LEFT JOIN rankings ON resources.id = rankings.resource_id
  LEFT JOIN favourites ON resources.id = favourites.resource_id
  LEFT JOIN bookmarks ON resources.id = bookmarks.resource_id
  LEFT JOIN playlists ON resources.id = playlists.resource_id
WHERE
  resources.profile_id = 1
  AND resources.deleted_at IS NULL
  AND resources.created_at >= current_timestamp - interval '36 hours'
  AND likes.is_liked = true
  AND recommends.is_recommended = true
  /*USER FILTER */
  AND (
    likes.is_liked = true
    AND likes.profile_id = 1
  )
  AND (
    favourites.is_favourite = true
    AND favourites.profile_id = 1
  )
  AND (
    bookmarks.is_bookmarked = true
    AND bookmarks.profile_id = 1
  )
  AND (
    playlists.is_playlist = true
    AND playlists.profile_id = 1
  )
   AND (
    recommends.is_recommended = true
    AND recommends.profile_id = 1
  )
GROUP BY
  resources.id,
  likes.profile_id,
  likes.is_liked,
  favourites.is_favourite,
  bookmarks.is_bookmarked,
  playlists.is_playlist,
  recommends.is_recommended,
  ratings.rate
HAVING
  COUNT(likes.id) >= 2
  AND AVG(ratings.rate) >= 2
  AND COUNT(recommends.id) >= 2
  AND AVG(rankings.scale) >= 1
  AND AVG(rankings.scale) <= 50
  AND NOT (
    AVG(rankings.scale) >= 2
    AND AVG(rankings.scale) <= 6
  )
  /* USER FILTER */
  AND AVG(ratings.rate) >= 2
  AND AVG(ratings.rate) <= 5
ORDER BY
  resources.created_at
LIMIT
  35;