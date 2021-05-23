# App React with Typescript Webpack and Tailwind css

Init project

```javascript
npm init
```

Init Git

```javascript
git init
```

Install Typescript

```javascript
yarn add typescript
```

Add **tsconfig.json** file

```javascript
touch tsconfig.json
```

Install React and React DOM

```javascript
yarn add react react-dom
```

Install React and React DOM types as a dev dependency

```javascript
yarn add @types/react @types/react-dom -D
```

Install Webpack as a dev dependency

```javascript
yarn add webpack webpack-cli webpack-dev-server -D
```

Install Webpack plugins as a dev dependency

```javascript
yarn add html-webpack-plugin copy-webpack-plugin css-minimizer-webpack-plugin terser-webpack-plugin dotenv-webpack clean-webpack-plugin mini-css-extract-plugin postcss-loader node-polyfill-webpack-plugin css-loader style-loader html-loader file-loader -D
```

Install Eslint and Prettier as a dev dependency

```javascript
yarn add eslint eslint-config-airbnb eslint-config-prettier eslint-config-react-app eslint-import-resolver-node eslint-import-resolver-webpack eslint-plugin-flowtype eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react  eslint-plugin-react-hooks prettier prettier-miscellaneous babel-eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb-typescript eslint-plugin-jest -D
```

Update script section

```javascript
"scripts": {
    "start": "webpack serve --config webpack.config.dev.js",
    "build": "webpack --config webpack.config.js",
    "build:watch": "webpack --watch --config webpack.config.js",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "format": "prettier --write '{*.js,src/**/*.{js,jsx,ts,tsx}}'",
    "lint": "eslint \"src/**/*.{js,jsx,ts,tsx}\"",
    "lint:fix": "eslint \"src/**/*.{js,jsx,ts,tsx}\" --fix"
  }
```

Create **webpack.config.dev.js** and **webpack.config.js** files

Install Babel as a dev dependency

```javascript
yarn add babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/cli @babel/plugin-transform-runtime @babel/plugin-syntax-class-properties -D
```

Add **.babelrc** file

```javascript
touch .babelrc
```

Install Tailwind CSS as a dev dependency

```javascript
yarn add tailwindcss autoprefixer postcss-cli -D
```

Generate a **tailwind.config.js** file

```javascript
./node_modules/.bin/tailwind init tailwind.config.js
```

Add **postcss.config.js** file

```javascript
touch postcss.config.js
```

Install Husky as a dev dependency

```javascript
yarn add husky -D
```