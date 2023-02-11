// this herlper makes queries for POST /api/resouces/withAddition
const postResourcesQueryHelper = (data, resourceId) => {
  const queries = [];

  const commentsQuery = `
  INSERT INTO
    comments
    (
      resource_id,
      profile_id,
      comment,
      is_private
    )
    VALUES
      ($1, $2, $3, $4) RETURNING *;`;
  if (data.user.myComments_private !== undefined) {
    const privateCommentsParams = [
      resourceId,
      data.user.profile_id,
      data.user.myComments_private,
      true,
    ];
    queries.push({
      query: commentsQuery,
      params: privateCommentsParams,
    } );
  }
  if (data.user.myComments_public !== undefined) {
    const publicCommentsParams = [
      resourceId,
      data.user.profile_id,
      data.user.myComments_public,
      false
    ];
    queries.push({
      query: commentsQuery,
      params: publicCommentsParams,
    });
  }

  if (data.user.myRating !== undefined) {
    const raitingQuery = `
    INSERT INTO
      ratings
        (resource_id, profile_id, rate)
      VALUES
        ($1, $2, $3) RETURNING *;`;
    const ratingParams = [
      resourceId,
      data.user.profile_id,
      data.user.myRating
    ];
    queries.push({
      query: raitingQuery,
      params: ratingParams,
    })
  }

  if (data.user.myRanking !== undefined) {
    const rankingQuery = `
    INSERT INTO
      rankings
        (resource_id, profile_id, scale)
      VALUES
        ($1, $2, $3) RETURNING *;`;
    const rankingParams = [
      resourceId,
      data.user.profile_id,
      data.user.myRanking,
    ];
    queries.push({
      query: rankingQuery,
      params: rankingParams,
    })
  }

  const categoriesQuery = `
  INSERT INTO
    categories
      (resource_id, profile_id, name, index)
    VALUES
      ($1, $2, $3, $4) RETURNING *;`;
  if (data.user.myCategories !== undefined){
    for (const [index, category] of data.user.myCategories.entries()) {
      const categoriesParams = [
        resourceId,
        data.user.profile_id,
        category,
        index + 1
      ];
      queries.push({
        query: categoriesQuery,
        params: categoriesParams,
      });
    }
  }

  if (data.user.is_liked !== undefined) {
    const likesQuery = `
    INSERT INTO
      likes
        (resource_id, profile_id, is_liked)
      VALUES
        ($1, $2, $3) RETURNING *;`
    const likesParams = [
      resourceId,
      data.user.profile_id,
      data.user.is_liked,
    ];
    queries.push({
      query:likesQuery,
      params: likesParams,
    })
  }

  if (data.user.is_favourite !== undefined) {
    const favouritesQuery = `
    INSERT INTO
    favourites
      (resource_id, profile_id, is_favourite)
    VALUES
      ($1, $2, $3) RETURNING *;`
    const favouritesParams = [
      resourceId,
      data.user.profile_id,
      data.user.is_favourite,
    ];
    queries.push({
      query: favouritesQuery,
      params: favouritesParams,
    })
  }

  if (data.user.is_bookmarked !== undefined) {
    const bookmarksQuery = `
    INSERT INTO
    bookmarks
      (resource_id, profile_id, is_bookmarked)
    VALUES
      ($1, $2, $3) RETURNING *;`
    const bookmarksParams = [
      resourceId,
      data.user.profile_id,
      data.user.is_bookmarked,
    ];
    queries.push({
      query: bookmarksQuery,
      params: bookmarksParams,
    })
  }

  if (data.user.is_playlist !== undefined) {
    const playlistsQuery = `
    INSERT INTO
    playlists
      (resource_id, profile_id, is_playlist)
    VALUES
      ($1, $2, $3) RETURNING *;`
    const playlistsParams = [
      resourceId,
      data.user.profile_id,
      data.user.is_playlist,
    ];
    queries.push({
      query: playlistsQuery,
      params: playlistsParams,
    })
  }

  if (data.user.is_recommended !== undefined) {
    const recommendsQuery = `
    INSERT INTO
    recommends
      (resource_id, profile_id, is_recommended)
    VALUES
      ($1, $2, $3) RETURNING *;`
    const recommendsParams = [
      resourceId,
      data.user.profile_id,
      data.user.is_recommended,
    ];
    queries.push({
      query: recommendsQuery,
      params: recommendsParams,
    })
  }

  return queries;
};

module.exports = { postResourcesQueryHelper };