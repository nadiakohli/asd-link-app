# ASD link app 

<a name="top"></a>

Get the short link as you go &#128075; <img src="./ui/src/assets/images/webp/withBgLogo.webp" align="right" />
<br />
<br />
This API allows you to reduce long links that will make your life easier during further interaction with them :wink:

___
## Table of Contents
- [Installing / Getting started :pushpin:](#install)
  - [Different ways to start this app :gear:](#ways-start-app)
- [Developing :pushpin:](#developing)
  - [Built With :hammer_and_wrench:](#built-with)
- [Dependencies :pushpin:](#dependencies)
  - [Frontend and Backend :repeat:](#frontend-and-backend)
    - [Concurrently :couple:](#concurrently)
    - [EditorConfig checker :clipboard:](#editorconfig)
    - [Eslint](#eslint)
    - [Husky :dog:](#husky)
    - [Lint staged :no_entry_sign: :poop:](#lint-staged)
  - [Frontend :desktop_computer:](#frontend)
    - [Styled components :nail_care:](#styled-components)
  - [Backend :minidisc:](#backend)
    - [Nodemon](#nodemon)
    - [Dotenv](#dotenv)
    - [Cors](#cors)
    - [Body parser](#body-parser)
- [Diving into husky 🐶 and lint-staged 🚫 💩](#husky-and-lint-staged)
- [Managing environment variables in React and Node.js with dotenv :pushpin:](#usage-dotenv)
- [Api Reference :pushpin:](#api-reference)
   - [Swagger](#swagger)
   - [API Documentation](#docs)
- [Database :pushpin:](#database)
   - [Sequelize](#sequelize)
   - [SQLite](#sqlite)
- [Licensing :pushpin:](#licensing)

___
## Installing / Getting started :pushpin: <a name="install"></a>
- Firstly, you need run `npm i` to install the dependencies in the local node_modules folder.

### Different ways to start this app :gear: <a name="ways-start-app"></a>
- Concurrently.
You can run multiple commands concurrently. Like `npm run server` and `npm run client` but concurrently better.
  - For getting started concurrently you need run this command `npm run dev`
- Separately.
You can run commands in turn.
  - For getting started separately you need:
    - the first one run _client_:
    </ br>
    ```
    cd ui
    npm run start
    ```
      - and the second one run _server_:
    ```
    cd api
    npm run start
    ```
___
## Developing :pushpin: <a name="developing"></a>
#### Built With :hammer_and_wrench: <a name="built-with"></a>
:round_pushpin: Ui | React JS <img src="./ui/src/assets/images/webp/reactLogo.webp" alt="logo" style="width: 25px;"/> <a name="reactjs"></a>
>React JS is a JavaScript library for building user interfaces.

- In this app were used library like React JS 

- Library version in this app --- ^18.2.0

- More information about _**react js**_ [here](https://reactjs.org/).

:round_pushpin: Api | Node JS <img src="./ui/src/assets/images/webp/nodejsLogo.webp" alt="logo" style="width: 35px;"/> <a name="nodejs"></a>
>As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.

> Node.js is an open source server environment.

> Node.js allows you to run JavaScript on the server.

- Node.js version in this app --- v16.13.2

- More information about _**node.js**_ [here](https://nodejs.org/uk/).

:round_pushpin: Api | Express.js or Express <img src="./ui/src/assets/images/webp/expressLogo.webp" alt="logo" style="width: 95px;"/> <a name="expressjs"></a>
>Fast, unopinionated, minimalist web framework for Node.js
- Express.js version in this app --- ^4.18.1

- _**Express features**_:

  - Web Aplications
      - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
  - APIs
      - With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.
  - Performance
    - Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.
  - Frameworks
    - Many [popular frameworks](http://expressjs.com/en/resources/frameworks.html) are based on Express. 

- More information about _**express**_ [here](http://expressjs.com/).
___
## Dependencies :pushpin: <a name="dependencies"></a>
### Frontend and Backend :repeat: <a name="frontend-and-back"></a>
#### Concurrently :couple: <a name="concurrently"></a>

>I like task automation with npm but the usual way to run multiple commands concurrently is `npm run client && npm run server`. That's fine but it's hard to keep on track of different outputs. Also if one process fails, others still keep running and you won't even notice the difference.

```
{
  "scripts": {
    "client": "cd ui && npm start",
    "server": "cd api && npm start",
    "dev": "concurrently \"npm run server\" \"npm run client\"",
  },
}
```
:round_pushpin: You need run only one command to start your frontend and backend side of this app like `npm run dev`.

Another option would be to just run all commands in separate terminals. 

- _**Features run concurrently**_:

    - Cross platform (including Windows)
    - Output is easy to follow with prefixes
    - With --kill-others switch, all commands are killed if one dies
    - Spawns commands with spawn-command

- More information about _**concurrently**_ [here](https://github.com/open-cli-tools/concurrently).
 
#### EditorConfig checker :clipboard: <a name="editorconfig"></a>

>This is a tool to check if your files consider your .editorconfig-rules. Most tools - like linters for example - only test one filetype and need an extra configuration. This tool only needs your .editorconfig to check all files.

If you don't know about _**editorconfig**_ already you can read about it here: [editorconfig.org](https://editorconfig.org/).

- _**Currently implemented editorconfig features are**_:

  - end_of_line
  - insert_final_newline
  - trim_trailing_whitespace
  - indent_style
  - indent_size
  - max_line_length

- _**Unsupported features are**_:
  - charset

#### Eslint <img src="./ui/src/assets/images/webp/eslintLogo.webp" alt="logo" style="width: 15px;"/> <a name="eslint"></a>

>ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline.

- _**ESlint features**_:
    - Robust set of default rules covering all of the rules that exist in JSLint and JSHint, making a migration to this tool fairly easy.
    - Configurable rules - including error levels, allowing you to decide what is a warning, error, or simply disabled.
    - Rules for style checking, which can help keep the code format consistent across teams.
    - The ability to write your own plugins and rules.

- More information about _**eslint**_ [here](https://eslint.org/).

#### Husky :dog: <a name="husky"></a>
>Modern native git hooks made easy.

Husky improves your commits and more 🐶 woof!

You can use it to lint your commit messages, run tests, lint code, etc... when you commit or push. Husky supports [all Git hooks](https://git-scm.com/docs/githooks).

- More information about _**husky**_ [here](https://www.npmjs.com/package/husky).

- _**Husky features**_:

    - Zero dependencies and lightweight (6 kB)
    - Powered by modern new Git feature (core.hooksPath)
    - Follows npm and Yarn best practices regarding autoinstall
    - User-friendly messages
    - Optional install
    - Like husky 4, supports:
      - macOS, Linux and Windows
      - Git GUIs
      - Custom directories
      - Monorepos

#### Lint staged :no_entry_sign: :poop: <a name="lint-staged"></a>
>Run linters against staged git files and don't let :poop: slip into your code base!

Linting makes more sense when run before committing your code. By doing so you can ensure no errors go into the repository and enforce code style. But running a lint process on a whole project is slow, and linting results can be irrelevant. Ultimately you only want to lint files that will be committed.

- More information about _**lint-staged**_ [here](https://www.npmjs.com/package/lint-staged).
___
### Frontend :desktop_computer: <a name="frontend"></a>
#### Styled components :nail_care: <a name="styled-components"></a>
>Visual primitives for the component age.
>Use the best bits of ES6 and CSS to style your apps without stress :nail_care:

Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!

- More information about _**styled-components**_ [here](https://styled-components.com/).
___
### Backend :minidisc: <a name="backend"></a>
#### Nodemon <img src="./ui/src/assets/images/webp/nodemonLogo.webp" alt="logo" style="width: 15px;"/> <a name="nodemon"></a>
>Nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

Nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node. To use nodemon, replace the word node on the command line when executing your script.

- For example in _package.json_:
```
"scripts": {
    "start": "nodemon index",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```
- in terminal run this command:
```
npm run start
```

- _**Nodemon features**_:
  - Automatic restarting of application.
  - Detects default file extension to monitor.
  - Default support for node but easy to run any executable, such as python, ruby, make, etc
  - Ignoring specific files or directories.
  - Watch specific directories.
  - Works with server applications or one time run utilities and REPLs.
  - Scriptable through node require statements.
  - Open source and available on github.

- More information about _**nodemon**_ [here](https://nodemon.io/).

#### Dotenv <img src="./ui/src/assets/images/webp/dotenvLogo.webp" alt="logo" style="width: 20px;"/> <a name="dotenv"></a>

>Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

- More information about _**dotenv**_ [here](https://www.npmjs.com/package/dotenv).

#### Cors <img src="./ui/src/assets/images/webp/corsLogo.webp" alt="logo" style="width: 60px;"/> <a name="cors"></a>

>CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

- More information about _**cors**_ [here](https://www.npmjs.com/package/cors).

#### Body parser <a name="body-parser"></a>

>Node.js body parsing middleware.

Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

- More information about _**body-parser**_ [here](https://www.npmjs.com/package/body-parser).
____
## Diving into _**husky**_ :dog: and _**lint-staged**_ :no_entry_sign: :poop: <a name="husky-and-lint-staged"></a>
- _**Lint-staged:**_

```
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "npm run lint",
      "git add"
    ],
  },
}
```
_**Lint-staged**_ is configured in your package.json file.

As seen in the above example, you can use a glob pattern to tell lint-staged which files to run against. Additionally, you can give lint-staged a command to execute against those files. In many cases, you'll want more than one command, which lint-staged supports. In this case, you'll run _ESLint_.

So how does lint-staged work? It's specifically designed to work on "staged" files, thus the name. This means files you've changed or created but haven't yet committed to your project. Working on staged files limits the number of files you need to lint at any given time and makes the workflow faster. The commands you configure will run "pre-commit". As you're attempting to commit files to your project you'll see ESLint run in your terminal. Once it's done you may have successfully committed or find yourself with linting errors you need to fix before you're able to commit the code.

However, what you may not realize, is that lint-staged is not the only tool working under the hood. Lint-staged is designed to work with another tool called _**husky**_.
- _**Husky:**_

You may have come across _**husky**_ before without noticing. For many years it was configured via a few lines of code in your package.json file. Something like this.
```
{
  "husky": {
    "pre-commit": "lint-staged"
  },
}
```
However, the latest version of _**husky**_, v6, has changed this approach. Now, _**husky**_ uses distinct bash files with filenames that match the workflow step they correspond to, e.g. **"pre-commit"**. Luckily you don't have to set this up yourself and husky has a nice CLI command to do it for you.
```
npx husky-init && npm install
npx husky add .husky/pre-commit "npm test"
```
The first line of the command is a one-time initialization script that ensures all your coworkers will have husky installed on their machine before they try to commit files.

The second line creates the `pre-commit` file inside the `.husky` directory. If you look at the file you'll notice it's running a `husky.sh` script prior to whatever commands you initialized it with. This can technically be removed, but I'd recommend keeping it. The script allows for a few things, including the use of a `--no-verify` flag that bypasses the checks.

Once you've initialized the directory and associated file you can add whatever commands you want to it. In my case, I replaced `npm test` with `npm run lint`.
___
## Managing environment variables in React and Node.js with dotenv :pushpin: <a name="usage-dotenv"></a>
Deploying an application requires developers to put thought and consideration into how it is configured. Many apps are deployed in a development environment before being deployed to the production environment. We need to ensure each environment is configured correctly, it could be disastrous if our production application was using our development database, for example.

Environment variables allow us to manage the configuration of our applications separate from our codebase. Separating configurations make it easier for our application to be deployed in different environments.

Large applications tend to have many environment variables. To better manage them we can use the dotenv library, which allows us to load environment variables from a file.

>_**Environment variables**_ are variables external to our application which reside in the OS or the container of the app is running in. An environment variable is simply a name mapped to a value.

- Data which changes depending on the environment your app is running on should be set as environment variables. Some common examples are:

  - HTTP Port and Address
  - Database, cache, and other storage connection information
  - Location of static files/folders
  - Endpoints of external services
    - For example, on a development environment your app will point to a test API URL, whereas in a production environment your app will point to the live API URL.

 :no_entry_sign: Sensitive data like API keys _**should not be in the source code**_, or known to persons who do not need access to those external services.

 _**Usage dotenv in this app**_:
  - _node.js_: 
  1. file `.env` in _api folder_:
  ```
  PORT=5000
  HOST=localhost
  ALLOWED_ORIGINS=['http://localhost:3000', 'http://localhost:3001', 'http://localhost:5000']
  API_DOCUMENTATION_ROOT='/api-docs'
  ```
  2. file `.env` in '_api/config/sequelize.js_':
  ```
  {
    storage: `db/${process.env.NODE_ENV || 'local'}.sqlite`,
  }
  ```
  - _react js_:
  1. file `.env` in _ui folder_:
  ```
  REACT_APP_API_URL=http://localhost:5000
  ```
  2. file `.env` in '_ui/src/config/axios.js_':
  ```
  {
    baseURL: process.env.REACT_APP_API_URL,
  }
  ```
- _**Conclusion**_:
  - Environment variables exist outside our application's code, they are available where our application is running. They can be used to decouple our application's configuration from its code, which allows our apps to be easily deployed across different environments.

  - To use `dotenv` in a React project, we create our React project with Create React App. Then we can access environment variables from process.env. 

  - With Node.js apps, environment variables are available through the `process.env` global variable. We can set the environment variables before we run the `node` command, or we can use the `dotenv` library which allows us to define our environment variables in a `.env` file.

:no_entry_sign: The `.env` file should never be in the source code repository.

___
## Api Reference :pushpin: <a name="api-reference"></a>
### Swagger <img src="./ui/src/assets/images/webp/swaggerLogo.webp" alt="logo" style="width: 15px;"/> <a name="swagger"></a>

>Swagger takes the manual work out of API documentation, with a range of solutions for generating, visualizing, and maintaining API docs.

- _**Documentation From Your API Design**_
    - The evolution of your API’s functionality is inevitable, but the headache of maintaining API docs doesn’t have to be. Swagger tools takes the hard work out of generating and maintaining your API docs, ensuring your documentation stays up-to-date as your API evolves.
- More information about _**swagger**_ read in these site:
  - [https://swagger.io/](https://swagger.io/)
  - [https://dev.to/kabartolo/how-to-document-an-express-api-with-swagger-ui-and-jsdoc-50do](https://dev.to/kabartolo/how-to-document-an-express-api-with-swagger-ui-and-jsdoc-50do)
  - [https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#infoObject](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#infoObject)
  - [https://github.com/Surnet/swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc)
___
- [ASD link app - API Documentation](http://localhost:5000/api-docs) :open_file_folder: <a name="docs"></a>
___

## DataBase :pushpin: <a name="database"></a>
### Sequelize <img src="./ui/src/assets/images/webp/sequelizeLogo.webp" alt="logo" style="width: 15px;"/> <a name="sequelize"></a>

>Sequelize is a promise-based, Node.js ORM (Object-relational mapping) for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication, and more.

A great thing about Sequelize is that it does not care about your underlying database. You can easily switch databases by adjusting the configuration file, and your code will mostly remain the same.

- More information about _**sequelize**_ [here](https://sequelize.org/).

### SQLite <img src="./ui/src/assets/images/webp/sqliteLogo.webp" alt="logo" style="width: 20px;"/> <a name="sqlite"></a>

>SQLite is an in-process library that implements a self-contained, serverless, zero-configuration, transactional SQL database engine. The code for SQLite is in the public domain and is thus free for use for any purpose, commercial or private. SQLite is the most widely deployed database in the world with more applications than we can count, including several high-profile projects.

SQLite is an embedded SQL database engine. Unlike most other SQL databases, SQLite does not have a separate server process. SQLite reads and writes directly to ordinary disk files. A complete SQL database with multiple tables, indices, triggers, and views, is contained in a single disk file. The database file format is cross-platform - you can freely copy a database between 32-bit and 64-bit systems or between big-endian and little-endian architectures. These features make SQLite a popular choice as an Application File Format. SQLite database files are a recommended storage format by the US Library of Congress.

- More information about _**sqlite**_ [here](https://www.sqlite.org/docs.html).

___
## Licensing :pushpin: <a name="licensing"></a>

asd.link&#174;
___
[back to the top](#top) :arrow_up:
