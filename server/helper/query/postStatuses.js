// helper for POST /api/icons
const postStatusesQueryHelper = (data) => {
  const queries = [];

  if (data.is_liked !== undefined) {
    const likesQuery = `
    INSERT INTO likes 
        (resource_id, profile_id, is_liked)
      VALUES
        ($1, $2, $3)
      ON CONFLICT
        (resource_id, profile_id)
      DO UPDATE SET
        is_liked = EXCLUDED.is_liked
      RETURNING *;`;
    const likesParams = [
      data.resource_id,
      data.profile_id,
      data.is_liked,
    ];
    queries.push({
      query: likesQuery,
      params: likesParams,
      status: 'is_liked',
    })
  }

  if (data.is_favourite !== undefined) {
    const favouritesQuery = `
    INSERT INTO favourites
      (resource_id, profile_id, is_favourite)
    VALUES
      ($1, $2, $3)
    ON CONFLICT
      (resource_id, profile_id)
    DO UPDATE SET
      is_favourite = EXCLUDED.is_favourite
    RETURNING *;`;
    const favouritesParams = [
      data.resource_id,
      data.profile_id,
      data.is_favourite,
    ];
    queries.push({
      query: favouritesQuery,
      params: favouritesParams,
      status: 'is_favourite',
    })
  }

  if (data.is_bookmarked !== undefined) {
    const bookmarksQuery = `
    INSERT INTO bookmarks
      (resource_id, profile_id, is_bookmarked)
    VALUES
      ($1, $2, $3)
    ON CONFLICT
      (resource_id, profile_id)
    DO UPDATE SET
      is_bookmarked = EXCLUDED.is_bookmarked
    RETURNING *;`;
    const bookmarksParams = [
      data.resource_id,
      data.profile_id,
      data.is_bookmarked,
    ];
    queries.push({
      query: bookmarksQuery,
      params: bookmarksParams,
      status: 'is_bookmarked',
    })
  }

  if (data.is_playlist !== undefined) {
    const playlistsQuery = `
    INSERT INTO playlists
      (resource_id, profile_id, is_playlist)
    VALUES
      ($1, $2, $3)
    ON CONFLICT
      (resource_id, profile_id)
    DO UPDATE SET
      is_playlist = EXCLUDED.is_playlist
    RETURNING *;`;
    const playlistsParams = [
      data.resource_id,
      data.profile_id,
      data.is_playlist,
    ];
    queries.push({
      query: playlistsQuery,
      params: playlistsParams,
      status: 'is_playlist',
    })
  }

  if (data.is_reported !== undefined) {
    const reportsQuery = `
    INSERT INTO reports
      (resource_id, profile_id, is_reported)
    VALUES
      ($1, $2, $3)
    ON CONFLICT
      (resource_id, profile_id)
    DO UPDATE SET
      is_reported = EXCLUDED.is_reported
    RETURNING *;`;
    const reportsParams = [
      data.resource_id,
      data.profile_id,
      data.is_reported,
    ];
    queries.push({
      query: reportsQuery,
      params: reportsParams,
      status: 'is_reported',
    })
  }

  if (data.is_recommended !== undefined) {
    const recommendsQuery = `
    INSERT INTO recommends
      (resource_id, profile_id, is_recommended)
    VALUES
      ($1, $2, $3)
    ON CONFLICT
      (resource_id, profile_id)
    DO UPDATE SET
      is_recommended = EXCLUDED.is_recommended
    RETURNING *;`;
    const recommendsParams = [
      data.resource_id,
      data.profile_id,
      data.is_recommended,
    ];
    queries.push({
      query: recommendsQuery,
      params: recommendsParams,
      status: 'is_recommended',
    })
  }

  return queries;
};

module.exports = { postStatusesQueryHelper };