# 🚀 Bex React Boilerplate

A sleek, modern starter for **React 19**, **TypeScript**, **Vite**, **TailwindCSS**, and **shadcn/ui** components.

<p  align="center">
<img  src="https://img.shields.io/badge/React-19-cyan?style=for-the-badge&logo=react&logoColor=white"  alt="React 19"  />
<img  src="https://img.shields.io/badge/Vite-6-purple?style=for-the-badge&logo=vite&logoColor=white"  alt="Vite 6"  />
<img  src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript&logoColor=white"  alt="TypeScript 5"  />
<img  src="https://img.shields.io/badge/Tailwind-4-indigo?style=for-the-badge&logo=tailwindcss&logoColor=white"  alt="TailwindCSS 4"  />
</p>
  
## ⚡ Features
✅ **Fast Dev:** Powered by **Vite** + **SWC** for blazing-fast HMR.

🎨 **Modern Stack:** React 19, TypeScript, TailwindCSS.

✨ **Pretty UI:**  **shadcn/ui** components with a clean gradient vibe.

🚀 **Production-Ready:** Optimized build process out of the box.
 
 ----
## 🛠️ Setup
  
Clone this repo:

```bash
git  clone  https://github.com/Beki-D/ReactTS-Tailwind-shad-Boilerplate.git
cd  reactts-tailwind-shad-boilerplate
```

Install dependencies:

```bash
npm  install
```

Start the dev server:

```bash
npm  run  dev
```

Build for production:

```bash
npm  run  build
```

---

## 📦 What's Included

✅ Vite with @vitejs/plugin-react-swc for fast refresh ⚡

✅ TailwindCSS with animation support 🎨

✅ shadcn/ui components (Button, Card, Avatar, etc.) 🧩

✅ Lucide Icons for clean, modern visuals ✨

✅ ESLint with basic React rules 🧹

---

## 📂 Project Structure

📦 reactts-tailwind-shad-boilerplate

├── 📂 src/

│ ├── 📂 assets/ # Static files (e.g., images)

│ ├── 📂 components/ # shadcn/ui components & custom ones

│ ├── 📄 App.tsx # Main app component

│ └── 📄 main.tsx # Entry point

├── 📄 eslint.config.js # ESLint config

├── 📄 vite.config.ts # Vite config

└── 📄 package.json # Dependencies & scripts

---

## 🎨 Customization

🌈 Colors: Adjust the gradient in App.tsx:

```jsx
className = "bg-gradient-to-br from-gray-900 via-purple-900 to-slate-900";
```

🛠️ Components: Add new shadcn/ui components:

```bash
npx shadcn-ui@latest add <component>
```

🖼️ Icons: Swap Lucide icons for your favorite ones!

🔧 ESLint Setup
Basic linting is included. For stricter rules, update eslint.config.js:

```js
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config({
  extends: [js.configs.recommended, ...tseslint.configs.recommendedTypeChecked],

  languageOptions: {
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

For React-specific rules:

```bash
npm install --save-dev eslint-plugin-react-x eslint-plugin-react-dom
```

Then update the config:

```js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    "react-x": reactX,
    "react-dom": reactDom,
  },

  rules: {
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

---

## 🌟 Why This Boilerplate?
🔥 Minimal setup – Start coding right away.

🎨 Cool gradient aesthetic – Looks great by default.

⚡ Built by Beki – Ready for production use.

---

## 📝 Notes
Uses React 19 – Check the docs for the latest features.

SWC replaces Babel for faster builds (@vitejs/plugin-react-swc).


<p align="center"> Built with ⚡️ by <b>Beki</b> · 2025 · Free Open-source </p>
