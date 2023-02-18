INSERT INTO
  likes (
    resource_id,
    profile_id,
    comment_id,
    is_liked
  )
VALUES

  (1, 1, NULL, false),
  (2, 1, NULL, false),

  (1, 2, NULL, true),
  (2, 2, NULL, false),

  (1, 3, NULL, true),
  (2, 3, NULL, true);

