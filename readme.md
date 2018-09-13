
Все автоматом


Или создамем все руками
```
git init
echo 'node_modules\ndist\n.DS_Store' > .gitignore
npm init -y
npm i react react-dom redux react-redux reselect @types/react @types/react-dom @types/redux @types/react-redux @types/reselect
npm i -D typescript webpack webpack-cli webpack-dev-server ts-loader html-webpack-plugin
npx tsc --init
```


Создаем webpack.config.js
```
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist/"
  },
  devServer: {
    contentBase: __dirname + "/dist/"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [{test: /\.tsx?$/, loader: "ts-loader"}]
  },
  plugins: [new HtmlWebpackPlugin()]
};

```

Добавляем в tsconfig.json

```
{
  "compilerOptions": {
    "sourceMap": true,
    "jsx": "react"
  }
}
```

Добавляем в package.json
```
  "scripts": {
    "devserver": "webpack-dev-server",
    "build": "webpack"
  },

```



Запускаем девсервер с вотчем
```
npm run devserver
```

Либо просто собрать в dist
```
npm run build
```

Open http://localhost:8080
