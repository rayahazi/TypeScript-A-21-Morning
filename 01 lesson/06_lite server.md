# Lite server:

https://www.npmjs.com/package/lite-server

- In our `first project` folder, create new node project for development only.
  in terminal

```
> npm init
> npm i lite-server
```

- Add to `package.json` - "start": "lite-server"

```json
{
  "name": "06_first-project",
  "version": "1.0.0",
  "description": "",
  "main": "script.js",
  "scripts": {
    "start": "lite-server"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "lite-server": "^2.6.1"
  }
}
```

- run the project:

```
npm start
```

- If we change the script.ts file, and compile it using `tsc script.ts` it will automatically reload.
- This is a basic setup for TypeScript projects. We will use them later in the course.
