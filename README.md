# Angular Webpack2 @ngtools/webpack AOT



## Create a new project

Clone this repo into new project folder (e.g., `my-proj`).
```bash
git clone  https://github.com/kunl/Angular-webpack-AOT.git  my-proj
cd my-proj
```

## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```bash
npm install
npm run dev
```

The `npm run dev` command first compiles the application and run webpack-dev-server, 
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.

You're ready to write your application.

Open browser at http://localhost:9000.

### npm scripts

npm scripts defined in the `package.json`:

* `npm build` - runs the ngc and webpack compiler to build the program.
* `npm run dev` - runs the webpack-dev-server and watch all files

