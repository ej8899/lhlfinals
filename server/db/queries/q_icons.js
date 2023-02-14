const query = require('./common');
const { postStatusesQueryHelper } = require("../../helper/query/postStatuses");

/**
* Get icons status from the profile id.
* @param {id: string} The profile id.
* @return {Promise<{}>} A promise of the status.
*/
const getIconsStatusWithProfileId = function(id) {
  return query(
    `SELECT
      p.id AS profile_id,
      r.id AS resource_id,
      l.is_liked,
      l.comment_id,
      f.is_favourite,
      b.is_bookmarked,
      pl.is_playlist,
      re.is_reported,
      rec.is_recommended
    FROM profiles AS p
    LEFT JOIN resources AS r ON p.id=r.profile_id
    LEFT JOIN likes AS l ON l.profile_id=p.id AND l.resource_id=r.id
    LEFT JOIN favourites AS f ON f.profile_id=p.id AND f.resource_id=r.id
    LEFT JOIN bookmarks AS b ON b.profile_id=p.id AND b.resource_id=r.id
    LEFT JOIN playlists AS pl ON pl.profile_id=p.id AND pl.resource_id=r.id
    LEFT JOIN reports AS re ON re.profile_id=p.id AND re.resource_id=r.id
    LEFT JOIN recommends AS rec ON rec.profile_id=p.id AND rec.resource_id=r.id
    WHERE p.id=$1 AND p.deleted_at IS NULL AND r.deleted_at IS NULL;`,
    [id], result => result.rows
  );
};
exports.getIconsStatusWithProfileId = getIconsStatusWithProfileId;

/**
* Post icons statuses from the profile id.
* @param {data{}} The statuses data.
* @return {Promise<{}>} A promise of the statuses.
*/
const postIconsStatuses = async function(data) {
  try {
    const statuses = {};
    await query('BEGIN', undefined, undefined);
    const postHelper = postStatusesQueryHelper(data);
    for (const helper of postHelper) {
      const savedData = await query(helper.query, helper.params, result => result.rows[0]);
      statuses[helper.status] = savedData[helper.status];
    }
    await query('COMMIT', undefined, undefined);
    return {
      profile_id: data.profile_id,
      resource_id: data.resource_id,
      ...statuses,
    };
  } catch (err) {
    await query('ROLLBACK', undefined, undefined);
    throw err;
  }

};
exports.postIconsStatuses = postIconsStatuses;