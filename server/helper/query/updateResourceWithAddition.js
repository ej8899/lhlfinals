// helper for update /api/resouces/withAddition
const updateResourceQueryHelper = (data, resourceId) => {
  console.log('data', data);
  const queries = [];

  const commentsQuery = `
  UPDATE
    comments
  SET
    (comment, is_private, updated_at) = ($1, $2, NOW())
  WHERE resource_id=$3 AND profile_id=$4 RETURNING *;`;
  if (data.user.myComments_private !== undefined) {
    const privateCommentsParams = [
      data.user.myComments_private,
      true,
      resourceId,
      data.user.profile_id,
    ];
    queries.push({
      query: commentsQuery,
      params: privateCommentsParams,
    } );
  }
  if (data.user.myComments_public !== undefined) {
    const publicCommentsParams = [
      data.user.myComments_public,
      false,
      resourceId,
      data.user.profile_id,
    ];
    queries.push({
      query: commentsQuery,
      params: publicCommentsParams,
    });
  }

  if (data.user.myRating !== undefined) {
    const raitingQuery = `
    UPDATE
      ratings
    SET
      (rate, updated_at) = ($1, NOW())
    WHERE resource_id=$2 AND profile_id=$3 RETURNING *;`;
    const ratingParams = [
      data.user.myRating,
      resourceId,
      data.user.profile_id,
    ];
    queries.push({
      query: raitingQuery,
      params: ratingParams,
    })
  }

  if (data.user.myRanking !== undefined) {
    const rankingQuery = `
    UPDATE
      rankings
    SET
      (scale, updated_at) = ($1, NOW())
    WHERE resource_id=$2 AND profile_id=$3 RETURNING *;`;
    const rankingParams = [
      data.user.myRanking,
      resourceId,
      data.user.profile_id,
    ];
    queries.push({
      query: rankingQuery,
      params: rankingParams,
    })
  }

  if (data.user.myCategories !== undefined){
    const deleteCategoriesQuery = `
    DELETE FROM
      categories
    WHERE resource_id=$1 AND profile_id=$2 RETURNING *;`;
    const deleteCategoriesParams = [
      resourceId,
      data.user.profile_id,
    ];
    queries.push({
      query: deleteCategoriesQuery,
      params: deleteCategoriesParams,
    });

    if (data.user.myCategories.length !== 0) {
      const categoriesQuery = `
      INSERT INTO
        categories
          (resource_id, profile_id, name, index, updated_at)
        VALUES
          ($1, $2, $3, $4, NOW()) RETURNING *;`;
      for (const [index, category] of data.user.myCategories.entries()) {
        const categoriesParams = [
          resourceId,
          data.user.profile_id,
          category,
          index + 1,
        ];
        queries.push({
          query: categoriesQuery,
          params: categoriesParams,
        });
      }
    }
  }

  if (data.user.is_liked !== undefined) {
    const likesQuery = `
    UPDATE
      likes
    SET
      (is_liked, updated_at) = ($1, NOW())
    WHERE resource_id=$2 AND profile_id=$3 RETURNING *;`;
    const likesParams = [
      data.user.is_liked,
      resourceId,
      data.user.profile_id,
    ];
    queries.push({
      query:likesQuery,
      params: likesParams,
    })
  }

  if (data.user.is_favourite !== undefined) {
    const favouritesQuery = `
    UPDATE
      favourites
    SET
      (is_favourite, updated_at) = ($1, NOW())
    WHERE resource_id=$2 AND profile_id=$3 RETURNING *;`;
    const favouritesParams = [
      data.user.is_favourite,
      resourceId,
      data.user.profile_id,
    ];
    queries.push({
      query: favouritesQuery,
      params: favouritesParams,
    })
  }

  if (data.user.is_bookmarked !== undefined) {
    const bookmarksQuery = `
    UPDATE
      bookmarks
    SET
    (is_bookmarked, updated_at) = ($1, NOW())
    WHERE resource_id=$2 AND profile_id=$3 RETURNING *;`;
    const bookmarksParams = [
      data.user.is_bookmarked,
      resourceId,
      data.user.profile_id,
    ];
    queries.push({
      query: bookmarksQuery,
      params: bookmarksParams,
    })
  }

  if (data.user.is_playlist !== undefined) {
    const playlistsQuery = `
    UPDATE
      playlists
    SET
    (is_playlist, updated_at) = ($1, NOW())
    WHERE resource_id=$2 AND profile_id=$3 RETURNING *;`;
    const playlistsParams = [
      data.user.is_playlist,
      resourceId,
      data.user.profile_id,
    ];
    queries.push({
      query: playlistsQuery,
      params: playlistsParams,
    })
  }

  if (data.user.is_recommended !== undefined) {
    const recommendsQuery = `
    UPDATE
      recommends
    SET
    (is_recommended, updated_at) = ($1, NOW())
    WHERE resource_id=$2 AND profile_id=$3 RETURNING *;`;
    const recommendsParams = [
      data.user.is_recommended,
      resourceId,
      data.user.profile_id,
    ];
    queries.push({
      query: recommendsQuery,
      params: recommendsParams,
    })
  }

  return queries;
};

module.exports = { updateResourceQueryHelper };
