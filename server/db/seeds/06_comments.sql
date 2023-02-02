INSERT INTO
  comments (
    resource_id,
    profile_id,
    comment_id,
    comment,
    is_private
  )
VALUES
  (1, 1, NULL, 'Great Video',false),
  (1, 2, 1, 'Yes, it is',false),
  (1, 2, NULL, 'I want more',true);