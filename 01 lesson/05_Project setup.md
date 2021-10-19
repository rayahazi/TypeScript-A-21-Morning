# Project setup:

### Install globally:

- Open CMD/terminal, and install globally using NPM:

```
npm install --global typescript

npm i -g typescript
```

- Check if installed and see the version:

```
tsc -v
```

### Create new folder `first project`

1. Create the configuration file `tsconfig.json`

```json
// ctrl + space - gives snippet
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "sourceMap": true
  },
  "exclude": ["node_modules"]
}
```

> Note: we can create sample tsconfig.json file using `tsc --init`

2. Create HTML file: `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head> </head>
  <body>
    <script src="script.js"></script>
  </body>
</html>
```

3. Create TypeScript file `script.ts`

```ts
console.log("Hello users");
```

4. Compile the ts file - in terminal:

```
tsc script.ts
```

5. See that new file `script.js` was added.
6. Open the `index.html` in the browser and see that it works!
