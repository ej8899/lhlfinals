## POST api/extract
description: retrieve title, description, thumbnail of a url

```json
body: 
{
   "url": "https://www.youtube.com/watch?v=t_ispmWmdjY"
}

returned:
{
    "title": "Ruby Programming Language - Full Course - YouTube",
    "description": "Learn the Ruby programming language in this full course / tutorial. The course is designed for new programmers, and will introduce common programming topics ...",
    "thumbnail": "https://storage.screenshotapi.net/www_youtube_com_watch_v_t_ispmwmdjy_983a438ee7b2.png",
    "url": "https://www.youtube.com/watch?v=t_ispmWmdjY"
}
```

## POST api/user
description: create/save a new user

```json
body: 
{
	"email":"123456@test.com",
	"password":"1234"
}

returned:
{
    "success": "User created",
    "user": {
        "id": 5,
        "email": "123456@test.com"
    }
}
```

## POST api/user/login
description: login a user

```json
body: 
{
	"email":"123456@test.com",
	"password":"1234"
}

returned:
{
    "success": "Logged in",
    "user": {
        "id": 5,
        "email": "123456@test.com"
    }
}
```

## POST api/user/logout
description: logout a user

```json
body: N/A

returned:
{
    "success": "Logged out"
}
```

## POST api/profiles
description: create/save a new profile

```json
body: 
{
	"user_id": 3,
	"first_name": "George",
	"last_name": "Lucas",
	"avatar": "My avatar url"
}

returned:
{
    "success": "Profile created",
    "createdProfile": {
        "id": 6,
        "user_id": 3,
        "first_name": "George",
        "last_name": "Lucas",
        "avatar": "My avatar url",
        "created_at": "2023-02-07T01:47:34.558Z",
        "updated_at": null,
        "deleted_at": null
    }
}
```

## GET api/profiles/user/[user_id]
description: retrieve profile by user id

```json
returned:
{
    "success": "Profiles found",
    "profiles": [
        {
            "id": 6,
            "user_id": 3,
            "first_name": "Georgy",
            "last_name": "Luck",
            "avatar": "My avatar url",
            "created_at": "2023-02-07T01:47:34.558Z",
            "updated_at": "2023-02-07T01:52:25.897Z",
            "deleted_at": null,
            "email": "123435@test.com"
        }
    ]
}
```

## GET api/profiles/[profile_id]
description: retrieve profile by profile id

```json
returned:
{
    "success": "Profile found",
    "profile": {
        "id": 6,
        "user_id": 3,
        "first_name": "Georgy",
        "last_name": "Luck",
        "avatar": "My avatar url",
        "created_at": "2023-02-07T01:47:34.558Z",
        "updated_at": "2023-02-07T01:52:25.897Z",
        "deleted_at": null,
        "email": "123435@test.com"
    }
}
```

## UPDATE api/profiles/6
description: create/save a new profile

```json
body: 
{
    "id": 6,
    "user_id": 3,
	"first_name": "Georgy",
	"last_name": "Luck",
	"avatar": "My avatar url"
}

returned:
{
    "success": "Profile updated",
    "updatedProfile": {
        "id": 6,
        "user_id": 3,
        "first_name": "Georgy",
        "last_name": "Luck",
        "avatar": "My avatar url",
        "created_at": "2023-02-07T01:47:34.558Z",
        "updated_at": "2023-02-07T01:52:25.897Z",
        "deleted_at": null
    }
}
```

## GET api/resources
description: retrieve all resources from all users

```json
returned:
[
  {
    "id": 1,
    "profile_id": 1,
    "url": "https://www.youtube.com/watch?v=t_ispmWmdjY",
    "title": "Ruby Programming Language - Full Course",
    "description": "Learn the Ruby programming language in this full course / tutorial. The course is designed for new programmers, and will introduce common programming topics using the ruby language.\nWant more from Mike? He ISs starting a coding RPG/Bootcamp",
    "thumbnail": "https://i0.wp.com/www.alphr.com/wp-content/uploads/2021/11/How-to-Make-YouTube-Thumbnails-1.png?resize=738%2C320&ssl=1",
    "created_at": "2023-01-31T13:54:46.365Z",
    "updated_at": null,
    "deleted_at": null
  },
  {
    "id": 2,
    "profile_id": 1,
    "url": "https://www.youtube.com/watch?v=_y9oxzTGERs",
    "title": "Introduction to JavaScript",
    "description": "This course introduces you to JavaScript, the most popular programming language for web development. You can also try the interactive version of the course here: https://scrimba.com/g/gintrotojavascript\n\n  The course contains 14 lessons and 7 challenges. In the challenges, you will be encourage to jump into the code and get your hands dirty. This is both fun and great for making the knowledge stick.",
    "thumbnail": "",
    "created_at": "2023-01-31T13:54:46.365Z",
    "updated_at": null,
    "deleted_at": null
  }
]
```

## GET api/resources/withAddition
description: retrieve all resources from all Users with details

```json
returned:
[
    {
        "id": 1,
        "profile_id": 1,
        "url": "https://www.youtube.com/watch?v=t_ispmWmdjY",
        "title": "Ruby Programming Language - Full Course",
        "description": "Learn the Ruby programming language in this full course / tutorial. The course is designed for new programmers, and will introduce common programming topics using the ruby language.\nWant more from Mike? He ISs starting a coding RPG/Bootcamp",
        "thumbnail": "https://i0.wp.com/www.alphr.com/wp-content/uploads/2021/11/How-to-Make-YouTube-Thumbnails-1.png?resize=738%2C320&ssl=1",
        "created_at": "2023-02-09T04:55:52.720Z",
        "updated_at": null,
        "deleted_at": null,
        "total_likes": "2",
        "categories": [
            "Node.js",
            "Ruby",
            "VS Code"
        ],
        "avg_ranking": "7.0000000000000000",
        "avg_rating": "4.0000000000000000"
    },
    {
        "id": 2,
        "profile_id": 1,
        "url": "https://www.youtube.com/watch?v=_y9oxzTGERs",
        "title": "Introduction to JavaScript",
        "description": "This course introduces you to JavaScript, the most popular programming language for web development. You can also try the interactive version of the course here: https://scrimba.com/g/gintrotojavascript\n\n  The course contains 14 lessons and 7 challenges. In the challenges, you will be encourage to jump into the code and get your hands dirty. This is both fun and great for making the knowledge stick.",
        "thumbnail": "",
        "created_at": "2023-02-09T04:55:52.720Z",
        "updated_at": null,
        "deleted_at": null,
        "total_likes": "1",
        "categories": [
            "JavaScript"
        ],
        "avg_ranking": "3.0000000000000000",
        "avg_rating": "1.5000000000000000"
    }
]
```

## GET api/resources/keyword/[keyword_to_search]
description: retrieve all resources from all Users with details that title or description has the keyword being searched

```json
returned:
[
    {
        "id": 2,
        "profile_id": 1,
        "url": "https://www.youtube.com/watch?v=_y9oxzTGERs",
        "title": "Introduction to JavaScript",
        "description": "This course introduces you to JavaScript, the most popular programming language for web development. You can also try the interactive version of the course here: https://scrimba.com/g/gintrotojavascript\n\n  The course contains 14 lessons and 7 challenges. In the challenges, you will be encourage to jump into the code and get your hands dirty. This is both fun and great for making the knowledge stick.",
        "thumbnail": "",
        "created_at": "2023-02-09T04:55:52.720Z",
        "updated_at": null,
        "deleted_at": null,
        "total_likes": "1",
        "categories": [
            "JavaScript"
        ],
        "avg_ranking": "3.0000000000000000",
        "avg_rating": "1.5000000000000000"
    }
]
```

## DELETE api/resources/[resource_id]
description: delete a resource

```json
body: N/A

returned:
{
    "id": 5,
    "profile_id": 1,
    "url": "https://www.youtube.com/watch?v=_y9oxzTGERs",
    "title": "Introduction to JavaScript",
    "description": "This course introduces you to JavaScript, the most popular programming language for web development. You can also try the interactive version of the course here: https://scrimba.com/g/gintrotojavascript\n\n  The course contains 14 lessons and 7 challenges. In the challenges, you will be encourage to jump into the code and get your hands dirty. This is both fun and great for making the knowledge stick.",
    "thumbnail": "",
    "created_at": "2023-01-31T16:14:18.972Z",
    "updated_at": null,
    "deleted_at": "2023-01-31T16:57:51.808Z"
}
```

## UPDATE api/resources/[resource_id]
description: update a resource

```json
body:
{
    "id": 5,
    "profile_id": 1,
    "url": "https://www.youtube.com/watch?v=_y9oxzTGERs",
    "title": "Introduction to JavaScript",
    "description": "This course introduces you to JavaScript, the most popular programming language for web development. You can also try the interactive version of the course here: https://scrimba.com/g/gintrotojavascript\n\n  The course contains 14 lessons and 7 challenges. In the challenges, you will be encourage to jump into the code and get your hands dirty. This is both fun and great for making the knowledge stick.",
    "thumbnail": "",
}

:returned:
{
    "id": 5,
    "profile_id": 1,
    "url": "https://www.youtube.com/watch?v=_y9oxzTGERs",
    "title": "Introduction to JavaScript",
    "description": "This course introduces you to JavaScript, the most popular programming language for web development. You can also try the interactive version of the course here: https://scrimba.com/g/gintrotojavascript\n\n  The course contains 14 lessons and 7 challenges. In the challenges, you will be encourage to jump into the code and get your hands dirty. This is both fun and great for making the knowledge stick.",
    "thumbnail": "",
    "created_at": "2023-01-31T16:14:18.972Z",
    "updated_at": "2023-01-31T16:51:37.651Z",
    "deleted_at": null
}
```

## POST api/resources
description: create/save a resource

```json
body: 
{
    "profile_id": 1,
    "url": "https://www.youtube.com/watch?v=_y9oxzTGERs",
    "title": "Introduction to JavaScript",
    "description": "This course introduces you to JavaScript, the most popular programming language for web development. You can also try the interactive version of the course here: https://scrimba.com/g/gintrotojavascript\n\n  The course contains 14 lessons and 7 challenges. In the challenges, you will be encourage to jump into the code and get your hands dirty. This is both fun and great for making the knowledge stick.",
    "thumbnail": "location of the image file",
}

returned:
{
    "id": 5,
    "profile_id": 1,
    "url": "https://www.youtube.com/watch?v=_y9oxzTGERs",
    "title": "Introduction to JavaScript",
    "description": "This course introduces you to JavaScript, the most popular programming language for web development. You can also try the interactive version of the course here: https://scrimba.com/g/gintrotojavascript\n\n  The course contains 14 lessons and 7 challenges. In the challenges, you will be encourage to jump into the code and get your hands dirty. This is both fun and great for making the knowledge stick.",
    "thumbnail": "location of the image file",
    "created_at": "2023-01-31T16:14:18.972Z",
    "updated_at": null,
    "deleted_at": null
}
```

## POST api/resources/options
description: retrieve resources using options/filtration
order_by values:
"most_liked" -> order descending from highest liked to lowest
"top_rated" -> order descending from highest rated to lowest
"top_ranked" -> order descending from highest ranked to lowest
"lowest_ranked" -> order ascending from lowest ranked to highest
"newest" -> order descending from most recent created to lastest
"alpha_a-z" -> order ascending by title
"alpha_z-a" -> order descending by title

```json
body: 
{
  "resource" : {
		"is_deleted":false,
		"created_by":1,
		"created_last_num_hours":36,
		"limit": 35,
		"order_by": "newest",
		"categories" : ["Ruby", "JavaScript", "CSS"],
		"minimum_average_rating": 2,
		"minimum_likes": 2,
		"minimum_is_recommended": 2,
		"minimum_average_ranking" : 1,
		"maximum_average_ranking" : 8,
		"excluded_minimum_average_ranking" : 8,
		"excluded_maximum_average_ranking" : 5
   },
  "user": {
  	"profile_id" : 1,
    "is_liked" : true,
    "is_favourite": true,
    "is_bookmarked":true,
    "is_playlist" : true,
    "is_reported": true,
    "is_recommended" : true,
    "minimum_myRating" : 2,
    "maximum_myRating" : 5,
    "minimum_myRanking" : 4,
    "maximum_myRanking" : 7
  }
}

returned:
[
    {
        "resource": {
            "id": 1,
            "profile_id": 1,
            "url": "https://www.youtube.com/watch?v=t_ispmWmdjY",
            "title": "Ruby Programming Language - Full Course",
            "description": "Learn the Ruby programming language in this full course / tutorial. The course is designed for new programmers, and will introduce common programming topics using the ruby language.\nWant more from Mike? He ISs starting a coding RPG/Bootcamp",
            "thumbnail": "https://i0.wp.com/www.alphr.com/wp-content/uploads/2021/11/How-to-Make-YouTube-Thumbnails-1.png?resize=738%2C320&ssl=1",
            "created_at": "2023-02-09T04:55:52.720Z",
            "updated_at": null,
            "deleted_at": null,
            "avg_rating": "4.0000000000000000",
            "total_likes": "2",
            "total_recommends": "2",
            "avg_ranking": "7.0000000000000000",
            "categories": [
                "Ruby",
                "VS Code"
            ]
        },
        "user": {
            "profile_id": 1,
            "is_liked": true,
            "is_favourite": true,
            "is_bookmarked": true,
            "is_playlist": true,
            "is_reported": true,
            "is_recommended": true,
            "my_rating": 4,
            "my_ranking": 7,
            "my_categories": [
                "Node.js"
            ],
            "my_comments_private": "Great Video",
            "my_comments_public": null
        }
    }
]
```

## GET api/categories/resources/[resource_id]
description: retrieve all categories for a specific resource

```json
returned:
[
    {
        "id": 1,
        "resource_id": 1,
        "profile_id": null,
        "name": "Ruby",
        "index": 1,
        "description": null,
        "created_at": "2023-02-08T15:41:48.752Z",
        "updated_at": null,
        "deleted_at": null
    },
    {
        "id": 2,
        "resource_id": 1,
        "profile_id": null,
        "name": "VS Code",
        "index": 2,
        "description": null,
        "created_at": "2023-02-08T15:41:48.752Z",
        "updated_at": null,
        "deleted_at": null
    }
]
```

## GET api/categories/profiles/[profile_id]
description: retrieve all categories that user created for all the resources that they added. 

```json
returned:
[
    {
        "resource_profile_id": 1,
        "id": 1,
        "resource_id": 1,
        "profile_id": null,
        "name": "Ruby",
        "index": 1,
        "description": null,
        "created_at": "2023-02-08T15:41:48.752Z",
        "updated_at": null,
        "deleted_at": null
    },
    {
        "resource_profile_id": 1,
        "id": 2,
        "resource_id": 1,
        "profile_id": null,
        "name": "VS Code",
        "index": 2,
        "description": null,
        "created_at": "2023-02-08T15:41:48.752Z",
        "updated_at": null,
        "deleted_at": null
    },
    {
        "resource_profile_id": 1,
        "id": 3,
        "resource_id": 2,
        "profile_id": null,
        "name": "JavaScript",
        "index": 1,
        "description": null,
        "created_at": "2023-02-08T15:41:48.752Z",
        "updated_at": null,
        "deleted_at": null
    },
    {
        "resource_profile_id": 1,
        "id": 4,
        "resource_id": 1,
        "profile_id": 2,
        "name": "Node.js",
        "index": 3,
        "description": null,
        "created_at": "2023-02-08T15:41:48.752Z",
        "updated_at": null,
        "deleted_at": null
    }
]
```

## GET api/categories/profiles/[profile_id]/resources/[resource_id]
description: retrieve all categories that profile/user created for personal purpose

```json
returned:
[
    {
        "id": 4,
        "resource_id": 1,
        "profile_id": 2,
        "name": "Node.js",
        "index": 3,
        "description": null,
        "created_at": "2023-02-08T15:41:48.752Z",
        "updated_at": null,
        "deleted_at": null
    }
]
```

## POST api/categories
description: create/save a category

```json
body: 
  {
    "resource_id": 2,
    "name":"Java",
    "index":4
  }

returned:
{
    "id": 5,
    "resource_id": 2,
    "name": "Java",
    "index": 4,
    "description": null,
    "created_at": "2023-01-31T21:48:04.700Z",
    "updated_at": null,
    "deleted_at": null
}
```

## UPDATE api/categories/[category_id]
description: update a category

```json
body: 
    {
        "id": 6,
        "name":"Rails",
        "index":3
    }

returned:
{
    "id": 6,
    "resource_id": 2,
    "name": "Rails",
    "index": 3,
    "description": null,
    "created_at": "2023-01-31T21:56:53.664Z",
    "updated_at": "2023-01-31T21:57:12.271Z",
    "deleted_at": null
}
```

## DELETE api/categories/[category_id]
description: delete a category

```json
body: N/A

returned:
{
    "id": 6,
    "resource_id": 2,
    "name": "Rails",
    "index": 3,
    "description": null,
    "created_at": "2023-01-31T21:56:53.664Z",
    "updated_at": "2023-01-31T21:57:12.271Z",
    "deleted_at": "2023-01-31T22:02:54.760Z"
}
```

## GET api/ratings/resources/[resource_id]
description: retrieve all ratings for a specific resource

```json
returned:
[
    {
        "id": 2,
        "resource_id": 2,
        "profile_id": 1,
        "rate": 2,
        "created_at": "2023-02-01T14:28:21.410Z",
        "updated_at": null,
        "deleted_at": null
    },
    {
        "id": 3,
        "resource_id": 2,
        "profile_id": 1,
        "rate": 1,
        "created_at": "2023-02-01T14:28:21.410Z",
        "updated_at": null,
        "deleted_at": null
    }
]
```

## GET api/ratings/average/resources/[resource_id]
description: retrieve the average ratings for a specific resource

```json
returned:
{
    "resource_id": 2,
    "average": "1.5000000000000000"
}
```

## POST api/ratings
description: create/save a rating

```json
body: 
    {
        "resource_id": 1,
        "profile_id": 2,
        "rate":5
    }

returned:
{
    "id": 4,
    "resource_id": 1,
    "profile_id": 2,
    "rate": 5,
    "created_at": "2023-02-01T16:02:33.648Z",
    "updated_at": null,
    "deleted_at": null
}
```

## UPDATE api/ratings/[rating_id]
description: update a rating

```json
body: 
    {
    	"id": 4,
        "resource_id": 1,
        "profile_id": 2,
        "rate":4
    }

returned:
{
    "id": 4,
    "resource_id": 1,
    "profile_id": 2,
    "rate": 4,
    "created_at": "2023-02-01T16:02:33.648Z",
    "updated_at": "2023-02-01T16:46:20.541Z",
    "deleted_at": null
}
```

## DELETE api/ratings/[rating_id]
description: delete a rating

```json
body: N/A

returned:
{
    "id": 4,
    "resource_id": 1,
    "profile_id": 2,
    "rate": 4,
    "created_at": "2023-02-01T16:02:33.648Z",
    "updated_at": "2023-02-01T16:46:20.541Z",
    "deleted_at": "2023-02-01T16:52:29.494Z"
}
```

## GET api/comments/resources/[resource_id]
description: retrieve all comments for a specific resource

```json
returned:
[
    {
        "id": 1,
        "resource_id": 1,
        "profile_id": 1,
        "comment_id": null,
        "comment": "Great Video",
        "is_private": false,
        "created_at": "2023-02-02T14:11:16.557Z",
        "updated_at": null,
        "deleted_at": null
    },
    {
        "id": 2,
        "resource_id": 1,
        "profile_id": 2,
        "comment_id": 1,
        "comment": "Yes, it is",
        "is_private": false,
        "created_at": "2023-02-02T14:11:16.557Z",
        "updated_at": null,
        "deleted_at": null
    },
    {
        "id": 3,
        "resource_id": 1,
        "profile_id": 2,
        "comment_id": null,
        "comment": "I want more",
        "is_private": true,
        "created_at": "2023-02-02T14:11:16.557Z",
        "updated_at": null,
        "deleted_at": null
    }
]
```

## POST api/comments
description: create/save a comment

```json
body: 
{
    "resource_id": 2,
    "profile_id": 1,
    "comment_id": null,
    "comment": "Please add more videos",
    "is_private": false
}

returned:
{
    "id": 4,
    "resource_id": 2,
    "profile_id": 1,
    "comment_id": null,
    "comment": "Please add more videos",
    "is_private": false,
    "created_at": "2023-02-02T14:15:55.207Z",
    "updated_at": null,
    "deleted_at": null
}
```

## UPDATE api/comments/[comment_id]
description: update a comment

```json
body: 
{
	"id": 4,
    "resource_id": 2,
    "profile_id": 1,
    "comment_id": null,
    "comment": "It is pretty amazing.",
    "is_private": false
}

returned:
{
    "id": 4,
    "resource_id": 2,
    "profile_id": 1,
    "comment_id": null,
    "comment": "It is pretty amazing.",
    "is_private": false,
    "created_at": "2023-02-02T14:15:55.207Z",
    "updated_at": "2023-02-02T14:19:55.068Z",
    "deleted_at": null
}
```

## DELETE api/comments/[comment_id]
description: delete a comment

```json
body: N/A

returned:
{
    "id": 4,
    "resource_id": 2,
    "profile_id": 1,
    "comment_id": null,
    "comment": "It is pretty amazing.",
    "is_private": false,
    "created_at": "2023-02-02T14:15:55.207Z",
    "updated_at": "2023-02-02T14:19:55.068Z",
    "deleted_at": "2023-02-02T14:21:56.902Z"
}
```

## GET api/favourites/resources/[resource_id]
description: retrieve all favourites for a specific resource

```json
returned:
[
    {
        "id": 1,
        "resource_id": 1,
        "profile_id": 1,
        "is_favourite": true,
        "created_at": "2023-02-06T22:34:36.572Z",
        "updated_at": null,
        "deleted_at": null
    },
    {
        "id": 2,
        "resource_id": 1,
        "profile_id": 2,
        "is_favourite": false,
        "created_at": "2023-02-06T22:34:36.572Z",
        "updated_at": null,
        "deleted_at": null
    }
]
```

## POST api/favourites
description: create/save a favourite

```json
body: 
{
    "resource_id": 2,
    "profile_id": 6,
    "is_favourite": false
}

returned:
{
    "id": 5,
    "resource_id": 2,
    "profile_id": 6,
    "is_favourite": false,
    "created_at": "2023-02-07T01:57:47.278Z",
    "updated_at": null,
    "deleted_at": null
}
```

## PUT api/favourites/[favourite_id]
description: update a favourite

```json
body: 
{
    "id": 5,
    "resource_id": 2,
    "profile_id": 6,
    "is_favourite": true
}

returned:
{
    "id": 5,
    "resource_id": 2,
    "profile_id": 6,
    "is_favourite": true,
    "created_at": "2023-02-07T01:57:47.278Z",
    "updated_at": "2023-02-07T02:02:02.344Z",
    "deleted_at": null
}
```

## DELETE api/favourites/[favourite_id]
description: delete a favourite

```json
body: N/A

returned:
{
    "id": 5,
    "resource_id": 2,
    "profile_id": 6,
    "is_favourite": true,
    "created_at": "2023-02-07T01:57:47.278Z",
    "updated_at": "2023-02-07T02:02:02.344Z",
    "deleted_at": "2023-02-07T02:03:03.164Z"
}
```

## GET api/playlists/resources/[resource_id]
description: retrieve all playlists for a specific resource

```json
returned:
[
    {
        "id": 1,
        "resource_id": 1,
        "profile_id": 1,
        "is_playlist": true,
        "created_at": "2023-02-07T13:54:43.881Z",
        "updated_at": null,
        "deleted_at": null
    },
    {
        "id": 2,
        "resource_id": 1,
        "profile_id": 2,
        "is_playlist": false,
        "created_at": "2023-02-07T13:54:43.881Z",
        "updated_at": null,
        "deleted_at": null
    }
]
```

## POST api/playlists
description: create/save a playlist

```json
body: 
{
    "resource_id": 1,
    "profile_id": 2,
    "is_playlist": true
}

returned:
{
    "id": 3,
    "resource_id": 1,
    "profile_id": 2,
    "is_playlist": true,
    "created_at": "2023-02-07T14:15:52.745Z",
    "updated_at": null,
    "deleted_at": null
}
```

## PUT api/playlists/[playlist_id]
description: update a playlist

```json
body: 
{
    "id": 3,
    "resource_id": 1,
    "profile_id": 2,
    "is_playlist": false
}

returned:
{
    "id": 3,
    "resource_id": 1,
    "profile_id": 2,
    "is_playlist": false,
    "created_at": "2023-02-07T14:15:52.745Z",
    "updated_at": "2023-02-07T14:17:20.899Z",
    "deleted_at": null
}
```

## DELETE api/playlists/[playlist_id]
description: delete a playlist

```json
body: N/A

returned:
{
    "id": 3,
    "resource_id": 1,
    "profile_id": 2,
    "is_playlist": false,
    "created_at": "2023-02-07T14:15:52.745Z",
    "updated_at": "2023-02-07T14:17:20.899Z",
    "deleted_at": "2023-02-07T14:18:29.452Z"
}
```

## GET api/recommends/resources/[resource_id]
description: retrieve all recommends for a specific resource

```json
returned:
[
    {
        "id": 1,
        "resource_id": 1,
        "profile_id": 1,
        "is_recommended": true,
        "created_at": "2023-02-07T17:15:54.281Z",
        "updated_at": null,
        "deleted_at": null
    },
    {
        "id": 2,
        "resource_id": 1,
        "profile_id": 2,
        "is_recommended": false,
        "created_at": "2023-02-07T17:15:54.281Z",
        "updated_at": null,
        "deleted_at": null
    }
]
```

## POST api/recommends
description: create/save a recommend

```json
body: 
{
    "resource_id": 2,
    "profile_id": 2,
    "is_recommended": true
}

returned:
{
    "id": 3,
    "resource_id": 2,
    "profile_id": 2,
    "is_recommended": true,
    "created_at": "2023-02-07T17:19:34.882Z",
    "updated_at": null,
    "deleted_at": null
}
```

## PUT api/recommends/[recommend_id]
description: update a recommend

```json
body: 
{
    "id": 3,
    "resource_id": 2,
    "profile_id": 2,
    "is_recommended": false
}

returned:
{
    "id": 3,
    "resource_id": 2,
    "profile_id": 2,
    "is_recommended": false,
    "created_at": "2023-02-07T17:19:34.882Z",
    "updated_at": "2023-02-07T17:21:06.438Z",
    "deleted_at": null
}
```

## DELETE api/recommends/[recommend_id]
description: delete a recommend

```json
body: N/A

returned:
{
    "id": 3,
    "resource_id": 2,
    "profile_id": 2,
    "is_recommended": false,
    "created_at": "2023-02-07T17:19:34.882Z",
    "updated_at": "2023-02-07T17:21:06.438Z",
    "deleted_at": "2023-02-07T17:22:03.014Z"
}
```

## GET api/bookmarks/resources/[resource_id]
description: retrieve all bookmarks for a specific resource

```json
returned:
[
    {
        "id": 1,
        "resource_id": 1,
        "profile_id": 1,
        "is_bookmarked": true,
        "created_at": "2023-02-07T16:32:32.821Z",
        "updated_at": null,
        "deleted_at": null
    },
    {
        "id": 2,
        "resource_id": 1,
        "profile_id": 2,
        "is_bookmarked": false,
        "created_at": "2023-02-07T16:32:32.821Z",
        "updated_at": null,
        "deleted_at": null
    }
]
```

## POST api/bookmarks
description: create/save a bookmark

```json
body: 
{
    "resource_id": 1,
    "profile_id": 2,
    "is_bookmarked": true
}

returned:
{
    "id": 3,
    "resource_id": 1,
    "profile_id": 2,
    "is_bookmarked": true,
    "created_at": "2023-02-07T16:35:51.203Z",
    "updated_at": null,
    "deleted_at": null
}
```

## PUT api/bookmarks/[bookmark_id]
description: update a bookmark

```json
body: 
{
    "id": 3,
    "resource_id": 1,
    "profile_id": 2,
    "is_bookmarked": true
}

returned:
{
    "id": 3,
    "resource_id": 1,
    "profile_id": 2,
    "is_bookmarked": true,
    "created_at": "2023-02-07T16:35:51.203Z",
    "updated_at": "2023-02-07T16:52:44.380Z",
    "deleted_at": null
}
```

## DELETE api/bookmarks/[bookmark_id]
description: delete a bookmark

```json
body: N/A

returned:
{
    "id": 3,
    "resource_id": 1,
    "profile_id": 2,
    "is_bookmarked": true,
    "created_at": "2023-02-07T16:35:51.203Z",
    "updated_at": "2023-02-07T16:52:44.380Z",
    "deleted_at": "2023-02-07T16:54:34.563Z"
}
```

## GET api/reports/resources/[resource_id]
description: retrieve all reports for a specific resource

```json
returned:
[
    {
        "id": 1,
        "resource_id": 1,
        "profile_id": 1,
        "is_reported": true,
        "created_at": "2023-02-08T14:43:15.090Z",
        "updated_at": null,
        "deleted_at": null
    },
    {
        "id": 2,
        "resource_id": 1,
        "profile_id": 2,
        "is_reported": false,
        "created_at": "2023-02-08T14:43:15.090Z",
        "updated_at": null,
        "deleted_at": null
    }
]
```

## POST api/reports
description: create/save a report

```json
body: 
{
    "resource_id": 1,
    "profile_id": 2,
    "is_reported": true
}

returned:
{
    "id": 3,
    "resource_id": 1,
    "profile_id": 2,
    "is_reported": true,
    "created_at": "2023-02-08T14:55:47.641Z",
    "updated_at": null,
    "deleted_at": null
}
```

## PUT api/reportes/[report_id]
description: update a report

```json
body: 
{
    "id": 3,
    "resource_id": 1,
    "profile_id": 2,
    "is_reported": false
}

returned:
{
    "id": 3,
    "resource_id": 1,
    "profile_id": 2,
    "is_reported": false,
    "created_at": "2023-02-08T14:55:47.641Z",
    "updated_at": "2023-02-08T14:57:41.877Z",
    "deleted_at": null
}
```

## DELETE api/reports/[report_id]
description: delete a report

```json
body: N/A

returned:
{
    "id": 3,
    "resource_id": 1,
    "profile_id": 2,
    "is_reported": false,
    "created_at": "2023-02-08T14:55:47.641Z",
    "updated_at": "2023-02-08T14:57:41.877Z",
    "deleted_at": "2023-02-08T14:58:29.160Z"
}
```