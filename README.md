# LearnThis!

A bookmarking, organizational and learning tool built for the developer community.

Keep your resource bookmarks all in one convenient location while having a quick organizational system and a built in learning program to actually study from your saved materials!

![Screen Shot of app](./screenshots/title.jpg)

---
## Contents...
1. [Getting Started](#getting-started)
2. [Features](#features)
3. [Future Plans](#future-plans)
4. [Known Bugs](#known-bugs)
5. [Attributions](#attributions)
6. [Updates](#updates)
7. [The Team](#the-team)
---
## Getting Started
Clone the repository to your computer.
You'll also need the server and SQL data that is available within this same github repository.

## SERVER Getting Started
1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information 
  - username: `development` 
  - password: `development` 
  - database: `finals`
3. Install dependencies: `npm i`
4. Create database finals using 
  - `psql -U development`
  - `create databaase finals;`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
6. Create account in `screenshotapi.net` and get the `API KEY`
7. Add TOKEN=`API KEY` in .env. See `.env.example`
8. Run the server without nodemon: `npm start`
9. Run the server with nodemon: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
10. Visit `http://localhost:8080/`
11. login: `12345@test.com` password: `1234`  
[( back to top 🔺)](#learnthis)
---
## Features...
- ### Learning Component:  
  - We've included a built in lesson planning system in LearnThis! that intelligently develops a suggested learning process based on the lesson topic(s) you are interested in.  Using an algorithm to determine ideal placements, you can start at the first displayed resource and work your way to the final resource in order of complexity and suggested order.
![Screen Shot of lesson planner component](./screenshots/lessons.png)


- ### API and Data Structure
  - ![All api and data structure](./z-planning/z-data-structure.md)

- replace this as necessary
![Screen Shot of main feature component](./screenshots/edit.png)

[( back to top 🔺)](#learnthis)
## Bonus features...

- LearnThis! also includes a helpful resource clipping browser extension tool.  One click grabs the title and description of the page you're on and lets you save it quickly into the LearnThis! database!
![Screen Shot of Resource Clipper](./screenshots/webclipper.png)     
[( back to top 🔺)](#learnthis)
---
## Future Plans...
- streamlining React state
- twitter DM to app bookmarks
- improve resource 'note-taking' systems to allow for code blocks
- add user general comments (public)
- making database more efficient  
[( back to top 🔺)](#learnthis)
---
## Known Bugs...
- none known
- be sure to report any found bugs on Github!  
[( back to top 🔺)](#learnthis)
---
## Attributions...
- [conColors library](https://github.com/ej8899/conColors) (modals & misc animations)
- MaterialUI for React
- Node.js
- PostgreSQL
- Express
- SCSS (CSS)
- ReactJS  
- ChatGPT for some minor helper functions  
![Screen Shot of About App](./screenshots/about.png)    
[( back to top 🔺)](#learnthis)
---
## Updates...
- Get the latest of our version of LearnThis! on [Github here](https://github.com/ej8899/lhlfinals)
.  
[( back to top 🔺)](#learnthis)  
---
## The Team...
- Atsuyuki Yoshimatsu  
(back end API developer)  
- Gene Tenorlas  
(back end API, database schema developer)  
- Ernie Johnson  
(front end, back end interface developer)  
.  
[( back to top 🔺)](#learnthis)
---
