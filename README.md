<h1>Bex React Boilerplate</h1>

A sleek, modern starter for React projects with TypeScript, Vite, TailwindCSS, and shadcn/ui components.

<p align="center"> <img src="https://img.shields.io/badge/React-19-cyan?style=flat-square" alt="React 19" /> <img src="https://img.shields.io/badge/Vite-6-purple?style=flat-square" alt="Vite 6" /> <img src="https://img.shields.io/badge/TypeScript-5-blue?style=flat-square" alt="TypeScript 5" /> <img src="https://img.shields.io/badge/Tailwind-4-indigo?style=flat-square" alt="TailwindCSS 4" /> </p>

🚀 Features
Fast Dev: Powered by Vite and SWC for blazing HMR.
Modern Stack: React 19, TypeScript, TailwindCSS.
Pretty UI: shadcn/ui components with a clean gradient vibe.
Ready to Go: Optimized for production builds.

🛠️ Setup
Clone this repo:
git clone https://github.com/Beki-D/ReactTS-Tailwind-shad-Boilerplate.git
cd reactts-tailwind-shad-boilerplate
Install dependencies:
npm install
Start the dev server:
npm run dev
Build for production:
npm run build

📦 What's Included
Vite with @vitejs/plugin-react-swc for fast refresh ⚡
TailwindCSS with animation support 🎨
shadcn/ui components (Button, Card, Avatar, etc.) 🧩
Lucide Icons for clean, modern icons ✨
ESLint with basic React rules 🧹

Project Structure
├── src/
│ ├── assets/ # Static files (e.g., pp.jpg)
│ ├── components/ # shadcn/ui components and others
│ ├── App.tsx # Main app component
│ └── main.tsx # Entry point
├── eslint.config.js # ESLint config
├── vite.config.ts # Vite config
└── package.json # Dependencies & scripts

🎨 Customization
Colors: Tweak the gradient in App.tsx (from-gray-900 via-purple-900 to-slate-900).
Components: Add more shadcn/ui components with npx shadcn-ui@latest add <component>.
Icons: Swap Lucide icons in features array.

🔧 ESLint Setup
Basic linting is included. For stricter rules, update eslint.config.js:

// eslint.config.js
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config({
extends: [
js.configs.recommended,
...tseslint.configs.recommendedTypeChecked,
],
languageOptions: {
parserOptions: {
project: ["./tsconfig.node.json", "./tsconfig.app.json"],
tsconfigRootDir: import.meta.dirname,
},
},
});

For React-specific rules, add:
npm install --save-dev eslint-plugin-react-x eslint-plugin-react-dom

Then update the config:
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
// ...other config
plugins: {
"react-x": reactX,
"react-dom": reactDom,
},
rules: {
...reactX.configs["recommended-typescript"].rules,
...reactDom.configs.recommended.rules,
},
});

🌟 Why This Boilerplate?
Minimal setup.
Cool gradient aesthetic out of the box.
Built by me (Beki), with the help of Bolt for quick starts on projects.

📝 Notes
Uses React 19—check docs for latest features.
SWC replaces Babel for faster builds (see @vitejs/plugin-react-swc).

<p align="center"> Built with ⚡️ by Beki · 2025 · Open source forever </p>
