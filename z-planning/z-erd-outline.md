
table: main
id
video id
URL (would only be used if it's not a youtube video id)
video name (original from yt)
video name/title
video description
video main subject (ie javascript, css, html, ruby, sql, etc)
video secondary subject (ie react)
date added to system library


table: users
id
user id
email
password (hashed)


table: notes
id
owner id
video id
is private
owner note (aka comments)


table: rankings
id
videoid
ownerid
video rank - beginner / intermediate / advanced / other
ranking notes (why the user is ranking it this level)


table: ratings
id
videoid
ownerid
video rating (set by each user) 1 to 5 stars
rating notes (why the user rated it this)



- We also need to track all videos/items that any particular user adds to the system, so a table and sql join for that information
- for more, see the user stories file - might need more tables built based on that info