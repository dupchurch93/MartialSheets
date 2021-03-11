# MartialSheets

## What is it?

MartialSheets is an original application that is designed for a streamlined character creation process for the most popular role playing game in the world, Dungeons and Dragons 5th Edition.

## Developing

To run this application locally, you'll need to:

1. `git clone` this repo
2. `cd` into the local repo
3. `pipenv install` to install the backend dependencies
4. Create a `.env` file based on the `.env.example` file included in the repo with your own values
5. Create a user on your local machine with the username and password specified in your `.env` file in PostgreSQL
6. Create a database on your local machine with the name specified in your `.env` file in PostgreSQL
7. Go into the pipenv shell with `pipenv shell`
8. Run `flask db upgrade` to run the migrations
9. Run `flask seed all` to seed the database
10. Open another terminal and cd into the `react-app` directory and run `npm install` to install frontend dependencies
11. Create your own `.env` file in the `react-app` directory based on the `.env.example` there
12. Start your Flask backend in the terminal that's in the root of the local project with `flask run`
13. Finally, start the frontend server with `npm start` inside the `react-app` directory. The application should automatically open in your default web browser.
14. If you desire further modifications simply create a new branch and `git push` your changes to Github.

## Technologies Used

- Python
- PostgreSQL
- SQLAlchemy
- Flask
- WTForms
- React
- Redux
- JavaScript
- Tailwind CSS
- Node.js
- AWS S3
- Docker
- Heroku

## Live Site

[Here's](https://martialsheets.herokuapp.com/) a live link to the application.

## Documentation

[Here's](https://github.com/dupchurch93/MartialSheets/wiki) the link to the Wiki.

## Core Features

Users can:

- Create and store character sheets that dynamically show changes based on class, race, and background selections
- Edit their character sheets
- Level up characters in a streamlined process
- Search the Dungeons and Dragons 5th Edition API for spells, abilities, and equipment information
- Add custom tags to sort characters

## Best Code Snippets

<!--

```js
// filter for all messages from or to logged in user
const msgsArray = Object.values(allMsgs);
const allMsgsLgdInUser = msgsArray.filter(
  (message) =>
    message.senderId === lgdInUser.id || message.receiverId === lgdInUser.id
);

// filter again for all messages between logged in user and other user (chosen user)
const allMsgsWOtherUser = allMsgsLgdInUser.filter((message) => {
  const idToCheck = otherUser.id;
  return message.senderId === idToCheck || message.receiverId === idToCheck;
});
``` -->
