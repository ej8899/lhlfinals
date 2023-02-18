// --------------------------------------------------------
// React Imports

// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Imports

// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Icon Imports

// --------------------------------------------------------

// --------------------------------------------------------
// Import Manual Field Functions
// --------------------------------------------------------


// --------------------------------------------------------
// Import Helper Functions
// --------------------------------------------------------


// --------------------------------------------------------
// Import Icons Functions
// --------------------------------------------------------



// --------------------------------------------------------
POST api/user/login
description: to login a user

body:
{
  "email":"123456@test.com",
  "password":"1234"
}

returned:
{
  "success": "Logged in",
  "user": {
      "profile_id": 5,
      "email": "123456@test.com",
      "first_name" : "John",
      "last_name" : "Doe",
      "avatar" : 'https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819__340.png'
  }
}
// --------------------------------------------------------



// --------------------------------------------------------
POST api/user
description: to create a new user

body:
{
  "email":"123456@test.com",
  "password":"1234",
  "first_name" : "John",
  "last_name" : "Doe",
  "avatar" : 'https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819__340.png'
}

returned:
{
  "success": "Logged in",
  "user": {
      "profile_id": 5,
      "email": "123456@test.com",
      "first_name" : "John",
      "last_name" : "Doe",
      "avatar" : 'https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819__340.png',
      "created_at": "2023-01-31T13:54:46.365Z",
      "updated_at" : null,
      "deleted_at" : null
  }
}
// --------------------------------------------------------



// --------------------------------------------------------
GET api/icons/:id
description: to get all icon status a profile_id for all resources

returned:
[
  {
    "profile_id": 1,
    "resource_id": 1,
    "is_liked" : true,
    "is_favourite" : true,
    "is_bookmarked" : false,
    "is_playlist" : false,
    "is_reported" : false,
    "is_playlist" : true,
    "is_recommended" : false,
  },
  {
    "profile_id": 1,
    "resource_id": 2,
    "is_liked" : true,
    "is_favourite" : true,
    "is_bookmarked" : false,
    "is_playlist" : false,
    "is_reported" : false,
    "is_playlist" : true,
    "is_recommended" : false,
  },
  {
    /* Sample of a return when there's no status for any icon */
    "profile_id": 1,
    "resource_id": 3,
    "is_liked" : false,
    "is_favourite" : false,
    "is_bookmarked" : false,
    "is_playlist" : false,
    "is_reported" : false,
    "is_playlist" : false,
    "is_recommended" : false,
  }
]
// --------------------------------------------------------



// --------------------------------------------------------
POST api/icons/
description: post and update the icon status from a user for a resource_id

body: 
{
	"profile_id" : 1,
  "resource_id": 2,
  "is_liked" : true,
  "is_favourite" : true,
  "is_bookmarked" : false,
  "is_playlist" : false,
  "is_reported" : false,
  "is_playlist" : true,
  "is_recommended" : false,
}

returned:
  {
    "profile_id": 1,
    "resource_id": 2,
    "is_liked" : true,
    "is_favourite" : true,
    "is_bookmarked" : false,
    "is_playlist" : false,
    "is_reported" : false,
    "is_playlist" : true,
    "is_recommended" : false,
  }
// --------------------------------------------------------

// --------------------------------------------------------
GET api/resources/
description: get all resources and all user information associated with resource

/*All items maked with an * are optional for the GET request*/

body: 
  resource : {
    /* All are optional */
    "minimum_average_rating": 3,
    "minimum_likes": 8,
    "minimum_is_recommended": 5, /*calculated overall from all users */
    "minimum_average_ranking" : 34,
    "maximum_average_ranking" : 66,
    "created_last_num_hours" : 36, /* resources created in the last 36 hours */
    "is_deleted" : false, /*To show reasources created by specific profile_id */
    "categories" : ["Ruby", "JavaScript", "CSS"], /* return resources meat any of the categories -> [] for all uncategorized resources*/
    "created_by" : 1, /*resources created by profile_id :1*/
    "limit" : 35,
    
    /* Section is based on profile_id for user specific stats*/
    "profile_id" : 5, /*for user information */
    "is_liked" : true,
    "is_favourite" : true,
    "is_bookmarked" : true,
    "is_reported" : true,
    "is_playlist" : true,
    "is_recommended" : true,
    "minimum_myRating" : 3,
    "minimum_myRanking" : 23,
    "maximum_myRanking" : 45,
  }


returned:

  [
    {
      resource: {
        "resource_id" : 1,
        "profile_id" : 2, /*resource creator */
        "url": "https://www.youtube.com/watch?v=t_ispmWmdjY",
        "title": "Ruby Programming Language - Full Course",
        "description": "Learn the Ruby programming language in this full course / tutorial. The course is designed for new programmers, and will introduce common programming topics using the ruby language.\nWant more from Mike? He ISs starting a coding RPG/Bootcamp",
        "thumbnail": "https://i0.wp.com/www.alphr.com/wp-content/uploads/2021/11/How-to-Make-YouTube-Thumbnails-1.png?resize=738%2C320&ssl=1",
        "created_at": "2023-02-06T08:54:46.365Z",
        "updated_at": null,
        "deleted_at": null,
        /*Next items are based on overall user data*/
        "category" : ["Ruby"], /*All categories assigned by all users*/
        "avg_rating" : 3, /* Average of all users that have rated the resource - null or underfined should not be counted */
        "avg_ranking" : 34, /* Average of all users that have ranked the resource - null or underfined should not be counted */
        "total_likes" : "23" /*Sum of all users that have liked the resource */
      },
      user: {
        "profile_id": 5,
        "resource_id": 1,
        "myComments_public" : "Check out this video",
        "myComments_private" : "Neat resource",
        "myRating": 5,
        "myRanking": 67,
        "myCategories": ["React", "CSS"],
        "is_liked" : true,
        "is_favourite" : true,
        "is_bookmarked" : false,
        "is_playlist" : false,
        "is_reported" : false,
        "is_playlist" : true,
        "is_recommended" : false,
      }
    },
    {
      resource: {
        "resource_id" : 2,
        "profile_id" : 3, /*resource creator */
        "url": "https://www.youtube.com/watch?v=_y9oxzTGERs",
        "title": "Introduction to JavaScript",
        "description": "This course introduces you to JavaScript, the most popular programming language for web development. You can also try the interactive version of the course here: https://scrimba.com/g/gintrotojavascript\n\n  The course contains 14 lessons and 7 challenges. In the challenges, you will be encourage to jump into the code and get your hands dirty. This is both fun and great for making the knowledge stick.",
        "thumbnail": "",
        "created_at": "2023-02-06T13:54:46.365Z",
        "updated_at": null,
        "deleted_at": null,
        /*Next items are based on overall user data*/
        "category" : ["JavaScript", "CSS"], /*All categories assigned by all users*/
        "avg_rating" : 4, /* Average of all users that have rated the resource - null or underfined should not be counted */
        "avg_ranking" : 63, /* Average of all users that have ranked the resource - null or underfined should not be counted */
        "total_likes" : "20" /*Sum of all users that have liked the resource */
      },
      user: {
        "profile_id": 5,
        "resource_id": 2,
        "myComments_public" : "I like this resource",
        "myComments_private" : "Worth the watch",
        "myRating": 3,
        "myRanking": 23,
        "myCategories": ["JavaScript"],
        "is_liked" : false,
        "is_favourite" : true,
        "is_bookmarked" : true,
        "is_playlist" : false,
        "is_reported" : true,
        "is_playlist" : true,
        "is_recommended" : false,
      }
    },
    /* Example of a resource with profile_id = null*/
    {
      resource: {
        "resource_id" : 2,
        "profile_id" : 3, /*resource creator */
        "url": "https://www.youtube.com/watch?v=_y9oxzTGERs",
        "title": "Introduction to JavaScript",
        "description": "This course introduces you to JavaScript, the most popular programming language for web development. You can also try the interactive version of the course here: https://scrimba.com/g/gintrotojavascript\n\n  The course contains 14 lessons and 7 challenges. In the challenges, you will be encourage to jump into the code and get your hands dirty. This is both fun and great for making the knowledge stick.",
        "thumbnail": "",
        "created_at": "2023-02-05T13:54:46.365Z",
        "updated_at": null,
        "deleted_at": null,
        /*Next items are based on overall user data*/
        "category" : ["JavaScript", "CSS"], /*All categories assigned by all users*/
        "avg_rating" : 5, /* Average of all users that have rated the resource - null or underfined should not be counted */
        "avg_ranking" : 50, /* Average of all users that have ranked the resource - null or underfined should not be counted */
        "total_likes" : "9" /*Sum of all users that have liked the resource */
      },
      user: {
        "profile_id": null,
        "resource_id": 2,
        "myComments_public" : "",
        "myComments_private" : "",
        "myRating": null,
        "myRanking": null,
        "myCategories": [],
        "is_liked" : false,
        "is_favourite" : false,
        "is_bookmarked" : false,
        "is_playlist" : false,
        "is_reported" : false,
        "is_playlist" : false,
        "is_recommended" : false,
      }
    }
  ]
// --------------------------------------------------------

// --------------------------------------------------------
POST api/resources/
description: create new resource

body: 
{
  resource: {
    "profile_id" : 2,
    "url": "https://www.youtube.com/watch?v=t_ispmWmdjY",
    "title": "Ruby Programming Language - Full Course",
    "description": "Learn the Ruby programming language in this full course / tutorial. The course is designed for new programmers, and will introduce common programming topics using the ruby language.\nWant more from Mike? He ISs starting a coding RPG/Bootcamp",
    "thumbnail": "https://i0.wp.com/www.alphr.com/wp-content/uploads/2021/11/How-to-Make-YouTube-Thumbnails-1.png?resize=738%2C320&ssl=1",
  },
  user: {
    "profile_id": 2,
    "myComments_public" : "Check out this video",
    "myComments_private" : "Neat resource",
    "myRating": 3,
    "myRanking": 34,
    "myCategories": ["Ruby"],
    "is_liked" : true,
    "is_favourite" : true,
    "is_bookmarked" : false,
    "is_playlist" : false,
    "is_reported" : false,
    "is_playlist" : true,
    "is_recommended" : false,
  }
}


returned:
  [
    {
      resource: {
        "resource_id" : 3,
        "profile_id" : 2, /*resource creator */
        "url": "https://www.youtube.com/watch?v=t_ispmWmdjY",
        "title": "Ruby Programming Language - Full Course",
        "description": "Learn the Ruby programming language in this full course / tutorial. The course is designed for new programmers, and will introduce common programming topics using the ruby language.\nWant more from Mike? He ISs starting a coding RPG/Bootcamp",
        "thumbnail": "https://i0.wp.com/www.alphr.com/wp-content/uploads/2021/11/How-to-Make-YouTube-Thumbnails-1.png?resize=738%2C320&ssl=1",
        "created_at": "2023-02-06T08:54:46.365Z",
        "updated_at": null,
        "deleted_at": null,

        "category" : ["Ruby"], 
        "avg_rating" : 3,
        "avg_ranking" : 34, 
        "total_likes" : "1" 
      },
      user: {
        "resource_id": 3,
        "profile_id": 2,
        "myComments_public" : "Check out this video",
        "myComments_private" : "Neat resource",
        "myRating": 3,
        "myRanking": 34,
        "myCategories": ["Ruby"],
        "is_liked" : true,
        "is_favourite" : true,
        "is_bookmarked" : false,
        "is_playlist" : false,
        "is_reported" : false,
        "is_playlist" : true,
        "is_recommended" : false,
      }
    },
  ]
// --------------------------------------------------------

// --------------------------------------------------------
POST api/resources/:id
description: update existing resource

body: 
{
  resource: {
    "resource_id": 3
    "profile_id" : 1,
    "url": "https://www.youtube.com/watch?v=t_ispmWmdjY",
    "title": "Ruby Programming Language - Full Course",
    "description": "Learn the Ruby programming language in this full course / tutorial. The course is designed for new programmers, and will introduce common programming topics using the ruby language.\nWant more from Mike? He ISs starting a coding RPG/Bootcamp",
    "thumbnail": "https://i0.wp.com/www.alphr.com/wp-content/uploads/2021/11/How-to-Make-YouTube-Thumbnails-1.png?resize=738%2C320&ssl=1",
  },
  user: {
    "resource_id": 3
    "profile_id": 2,
    "myComments_public" : "Check out this video",
    "myComments_private" : "Neat resource",
    "myRating": 3,
    "myRanking": 34,
    "myCategories": ["JavaScript"],
    "is_liked" : true,
    "is_favourite" : true,
    "is_bookmarked" : false,
    "is_playlist" : false,
    "is_reported" : false,
    "is_playlist" : true,
    "is_recommended" : false,
  }
}


returned:
  [
    {
      resource: {
        "resource_id" : 3,
        "profile_id" : 2, /*resource creator */
        "url": "https://www.youtube.com/watch?v=t_ispmWmdjY",
        "title": "Ruby Programming Language - Full Course",
        "description": "Learn the Ruby programming language in this full course / tutorial. The course is designed for new programmers, and will introduce common programming topics using the ruby language.\nWant more from Mike? He ISs starting a coding RPG/Bootcamp",
        "thumbnail": "https://i0.wp.com/www.alphr.com/wp-content/uploads/2021/11/How-to-Make-YouTube-Thumbnails-1.png?resize=738%2C320&ssl=1",
        "created_at": "2023-02-06T08:54:46.365Z",
        "updated_at": "2023-02-06T13:54:46.365Z",
        "deleted_at": null,

        "category" : ["JavaScript"], 
        "avg_rating" : 4.2,
        "avg_ranking" : 54, 
        "total_likes" : "22"
      },
      user: {
        "resource_id": 3,
        "profile_id": 2,
        "myComments_public" : "Check out this video",
        "myComments_private" : "Neat resource",
        "myRating": 3,
        "myRanking": 34,
        "myCategories": ["Ruby"],
        "is_liked" : true,
        "is_favourite" : true,
        "is_bookmarked" : false,
        "is_playlist" : false,
        "is_reported" : false,
        "is_playlist" : true,
        "is_recommended" : false,
      }
    },
  ]
// --------------------------------------------------------


// --------------------------------------------------------
GET api/resources/search
description: get all resources and all user information associated with search criteria

/*All items maked with an * are optional for the GET request*/

body: 
{
  "search": program /*with wildcard search*/ 
}


returned:

  [
    {
      resource: {
        "resource_id" : 1,
        "profile_id" : 2, /*resource creator */
        "url": "https://www.youtube.com/watch?v=t_ispmWmdjY",
        "title": "Ruby Programming Language - Full Course",
        "description": "Learn the Ruby programming language in this full course / tutorial. The course is designed for new programmers, and will introduce common programming topics using the ruby language.\nWant more from Mike? He ISs starting a coding RPG/Bootcamp",
        "thumbnail": "https://i0.wp.com/www.alphr.com/wp-content/uploads/2021/11/How-to-Make-YouTube-Thumbnails-1.png?resize=738%2C320&ssl=1",
        "created_at": "2023-02-06T08:54:46.365Z",
        "updated_at": null,
        "deleted_at": null,
        /*Next items are based on overall user data*/
        "category" : ["Ruby"], /*All categories assigned by all users*/
        "avg_rating" : 3, /* Average of all users that have rated the resource - null or underfined should not be counted */
        "avg_ranking" : 34, /* Average of all users that have ranked the resource - null or underfined should not be counted */
        "total_likes" : "23" /*Sum of all users that have liked the resource */
      },
      user: {
        "profile_id": 5,
        "resource_id": 1,
        "myComments_public" : "Check out this video",
        "myComments_private" : "Neat resource",
        "myRating": 5,
        "myRanking": 67,
        "myCategories": ["React", "CSS"],
        "is_liked" : true,
        "is_favourite" : true,
        "is_bookmarked" : false,
        "is_playlist" : false,
        "is_reported" : false,
        "is_playlist" : true,
        "is_recommended" : false,
      }
    },
  ]
// --------------------------------------------------------



// --------------------------------------------------------
// Profile Routes
  // Get a user
  // Create a user
  // Update a user
  // Delete a user
  // Login
  // Logout
// --------------------------------------------------------

// --------------------------------------------------------
// Profile Routes
  // Get profiles with user id
  // Get a profile with profile id
  // Create a profile
  // Update a profile
  // Delete a Profile
// --------------------------------------------------------
