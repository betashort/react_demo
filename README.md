# react_demo
1. [環境](#環境)
   1. [docker](#docker)
   2. [Project](#project)
      1. [create react app](#create-react-app)
      2. [Axios](#axios)
      3. [uuid](#uuid)
      4. [tailwind css](#tailwind-css)
2. [アプリ説明](#アプリ説明)
   1. [my-todo-app](#my-todo-app)
   2. [note-app](#note-app)
   3. [weather-app](#weather-app)
   4. [note-app](#note-app-1)
   5. [bulletin-board-redux](#bulletin-board-redux)

## 環境

### docker

```bash
docker-compose build
docker-compose up -d
docker-compose exec node bash
docker-compose down
```

### Project

#### create react app

```bash
npx create-react-app . --template typescript
```

#### Axios

```bash
npm install axios
```

#### uuid

```bash
npm i uuid
```

#### tailwind css

```bash
npm i -D tailwindcss
npx tailwindcss init
```

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

index.cssの編集

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## アプリ説明

### my-todo-app

### note-app

### weather-app

### note-app

### bulletin-board-redux

