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

## DELETE api/resouces/[resource_id]
description: delete a resource

```json
body:
{
    "id": 5
}

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

## UPDATE api/resouces/[resource_id]
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

## POST api/resouces/[resource_id]
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