# ⚡️ Another React Component Library

![npm (scoped)](https://img.shields.io/npm/v/another-react-component-library)
![CI](https://github.com/casvil/another-react-component-library/actions/workflows/ci.yml/badge.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Tailwind](https://img.shields.io/badge/TailwindCSS-4.0-38bdf8?logo=tailwindcss)
[![Storybook](https://img.shields.io/badge/Storybook-Online-blueviolet?logo=storybook)](https://casvil.github.io/another-react-component-library/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

> A sleek, blazing-fast React 19 component kit — typed, styled, tested, documented, and ready to ship. 🚀

---

## 📖 See It in Action — Explore the Storybook

👉 [View Storybook Live](https://casvil.github.io/another-react-component-library/)

Interactive playground for every component. Try props, test styles, and preview in real-time.
🆕 Always updated with the latest published components.

---

## 🧠 Why?

- 🧠 Built with **React 19**, **TypeScript 5**, **Tailwind CSS v4**
- ⚡️ Lightning-fast dev experience with **Vite**
- ✨ Zero-config styles with automatic CSS—no setup needed
- 📚 Interactive docs via **Storybook v9**
- 🧪 Fully testable with **Vitest** & **Testing Library**
- ♿️ Accessible components
- ⚙️ Tree-shakable and ESM-ready
- 🔄 Continuous Integration via **GitHub Actions**

## ✨ Quickstart

### 📦 Install

```bash
npm i another-react-component-library
```

### 🚀 Quick Example

```typescript
import { Button } from "another-react-component-library";

function App() {
  return <Button label="Launch" onClick={() => alert("Boom!")} />;
}
```

---

## 🧰 Tech Stack

| Feature             | Tool/Lib                 |
| ------------------- | ------------------------ |
| 💻 Framework        | React 19                 |
| 🧠 Typed            | TypeScript 5             |
| 🎨 Styling          | TailwindCSS v4           |
| ⚡️ Build Tool      | Vite 6                   |
| 📖 Docs             | Storybook 9              |
| ✅ Testing          | Vitest + Testing Library |
| 🚀 Deployment Ready | Rollup output, UMD/ESM   |

---

## 🛠️ Inside the Box

<details>
<summary>⚛️ atoms/ — Basic building blocks</summary>

```plaintext
├── atoms/
│   ├── Alert/               # Alert/notification component
│   ├── Avatar/              # User profile image
│   ├── Badge/               # Status indicator
│   ├── Button/              # Interactive button
│   ├── Card/                # Content container with variants
│   ├── Checkbox/            # Checkbox input
│   ├── Divider/             # Visual separator
│   ├── ErrorMessage/        # Error display
│   ├── HelperText/          # Form helper text
│   ├── Icon/                # Icon component
│   ├── IconButton/          # Button with icon
│   ├── Image/               # Accessible image
│   ├── Input/               # Basic input
│   ├── Label/               # Form label
│   ├── Link/                # Navigation link
│   ├── ProgressBar/         # Progress indicator
│   ├── Radio/               # Radio input
│   ├── Spinner/             # Loading spinner
│   ├── Switch/              # Toggle switch
│   ├── Text/                # Typography component
│   ├── TextArea/            # Multi-line input
│   ├── TimeDisplay/         # Time formatter
│   └── Tooltip/             # Tooltip element
```

</details>

<details> 
<summary>🧬 molecules/ — Composed components</summary>

```plaintext
├── molecules/
│   ├── BadgeAvatar/ # Avatar with badge overlay
│   ├── CheckboxGroup/ # Group of checkboxes
│   ├── Clock/ # Live-updating time
│   ├── CreditCardForm/ # Credit card input form with validation
│   ├── CreditCardPreview/ # Editable credit card preview
│   ├── Form/ # Advanced form component with validation
│   ├── FormField/ # Complete form field with label and validation
│   ├── InputField/ # Input with label and validation
│   ├── RadioGroup/ # Group of radio buttons
│   ├── Search/ # Search input with functionality
│   ├── Select/ # Dropdown select
│   └── UserPreview/ # User information display
```

</details>

---

```
📦 another-react-component-library
├── lib/                     # All UI components and supporting files
│   ├── @types/              # Custom type declarations
│   ├── assets/              # Static assets like images or SVGs
│   ├── atoms/               # Atomic components (basic building blocks)
│   ├── molecules/           # Composed components (built from atoms)
│   ├── hooks/               # Custom React hooks
│   ├── index.ts             # Library entry point
│   ├── index.css            # Global styles
│   └── vite-env.d.ts        # Vite environment types
├── .storybook/              # Storybook configuration
├── vitest.setup.ts          # Vitest test environment
├── vite.config.ts           # Vite bundler config
├── vitest.config.ts         # Vitest configuration
├── vitest.shims.d.ts        # Type shim for tests
├── tsconfig.json            # Base TS config
├── tsconfig.app.json        # TS config for app build
├── tsconfig.node.json       # TS config for node tools
├── .gitignore               # Git ignored files
├── .prettierrc              # Code formatter config
├── eslint.config.js         # Linter configuration
├── lefthook.yml             # Git hooks (via Lefthook)
├── package.json             # Project manifest
├── package-lock.json        # Dependency lockfile
└── README.md                # Project overview
```

---

## 🤘 Contribute

Have an idea or want to improve a component? PRs welcome!

## 🪪 License

[MIT](./LICENSE)
