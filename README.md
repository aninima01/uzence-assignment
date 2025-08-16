 📚 Storybook Components

This repository contains reusable **React + TypeScript** components documented with **Storybook**.  

Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation. It's open source and free.

It currently includes two main components:  

- **InputField** → A flexible input component with multiple states & variants  
- **DataTable** → A sortable, selectable table with loading/empty states  

The project is deployed with **Chromatic**, making it easy to preview components online. 

## 🚀 Live Preview
👉 [View Storybook on Chromatic](https://68a0c561b7dea9f765862102-gbfmgsoqqr.chromatic.com/)


## 📂 Folder Structure

```bash
uzence-assignment/
├─ .storybook/                  
│  ├─ main.ts
│  ├─ preview.ts
│  └─ tsconfig.json
│
├─ src/
│  ├─ components/
│  │ 
│  │   ├─ InputField.tsx
│  │   ├─ InputField.stories.tsx
│  │   ├─ DataTable.tsx
│  │   ├─ DataTable.stories.tsx
│  │               
│  │
│  ├─ App.tsx                 
│  ├─ main.tsx                 
│  ├─ index.css                 
│  └─ vite-env.d.ts
│
├─ public/
│  └─ favicon.svg
│
├─ .gitignore
├─ package.json
├─ tsconfig.json
├─ tsconfig.node.json
├─ tailwind.config.js
├─ postcss.config.js
└─ README.md



## 🛠️ Setup Instructions

Follow these steps to set up the project locally and deploy it.

### 1. Clone the repository

git clone https://github.com/aninima01/uzence-assignment.git

### 2. Install dependencies

Make sure you have Node.js (>=16) installed.

npm install

### 3. Run Storybook locally

Start Storybook on http://localhost:6006
npm run storybook

### 4. Build Storybook

npm run build-storybook

### 5. Deploy with Chromatic
Chromatic automatically builds and hosts your Storybook.
Get your Project Token from Chromatic setup.
Add it to your local environment:

npx chromatic --project-token=<YOUR_PROJECT_TOKEN>

Or add a script in package.json for convenience:

"scripts": {
  "chromatic": "chromatic --project-token=<YOUR_PROJECT_TOKEN>"
}
Now run:
npm run chromatic
Chromatic will return a unique shareable URL for your Storybook.
```
