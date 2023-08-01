# 👋 Hello ISRO - ISRO-API + React

This app is consuming the public API created by Indian Space Research Organization (ISRO).

Through this app, we extend our heartfelt gratitude to the brilliant minds at ISRO for their invaluable contributions, elevating  India's presence in space research.

Also, this app will serve a learning for working with React, Redux, TypeScript, Vite, TailwindCSS, DaisyUI.
___

Check out the CodeOmelet blog post for this project.

Link: 
___

## Run App

```
npm run dev
```

## Initial Setup

```
npm create vite@latest

> Give your project a name: react-isro-app
> Select React + TypeScript option

cd react-isro-app
npm i
npm run dev
```

## Add Dependencies

Add below dependencies to work with TailwindCSS, DaisyUI, Redux, React Icons, React Routed and Axios.

### Adding TailwindCSS

Install TailwindCSS:
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Open `tailwind.config.js` and update with below code:
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Then add these dependencies to your `index.css` file:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Adding DaisyUI

Install daisyUI:
```
npm i -D daisyui@latest
```

Then add daisyUI to your `tailwind.config.js` files:
```
module.exports = {
  //...
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}
```

### Adding TailwindCSS Typography

Install `@tailwindcss/typography`:
```
npm install -D @tailwindcss/typography
```

Then add daisyUI to your `tailwind.config.js` files:
```
module.exports = {
  //...
  plugins: [require('@tailwindcss/typography'), require("daisyui")],
  //...
}
```

### Adding RTK

Install Redux Toolkit:

```
npm i @reduxjs/toolkit
npm i react-redux

npm i @types/react-redux -D
```

### Adding Axios

Install Axios:

```
npm i axios
```

### Adding React Router

Install React Router:

```
npm i react-router-dom
```

### Adding React Router

Install React Icons:

```
npm i react-icons
```