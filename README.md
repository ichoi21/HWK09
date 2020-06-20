# HWK 09 (11) Express Homework: Note Taker

## Description

This is a web application that can be used to write, save, and delete notes written with express while it saves and retrieves note data from a JSON file.

```
AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

#### Author(s)

![user's avatar](https://avatars3.githubusercontent.com/u/58826890?v=4 = 50%)<br>
user: [ichoi21](https://github.com/ichoi21) | email: ic@g.co | repos: [Click Here](https://github.com/ichoi21?tab=repositories)

---

### Contents

- The following HTML routes should be created:

  - GET `/notes` - Should return the `notes.html` file.

  - GET `*` - Should return the `index.html` file

- The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

- The following API routes should be created:

  - GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  - POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  - DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

#### Languages Used

- HTML
- CSS
- [Bootstrap](https://getbootstrap.com/)
- JavaScript
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/) "^4.17.1

### Minimum Requirements

- Application should allow users to create and save notes.
- Application should allow users to view previously saved notes.
- Application should allow users to delete previously saved notes.

### How to install

Perform the following: npm start

### Intended Usage

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.
