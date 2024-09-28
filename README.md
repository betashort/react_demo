# react_demo
docker-compose exec node bash
## 環境

### typescript

```bash
npx create-react-app . --template typescript
```

### Axios

```bash
npm install axios
```

### tailwind css

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