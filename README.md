# ⚡ Solana dApp UI Template  

A modern **UI boilerplate for Solana decentralized applications (dApps)** built with **React, TypeScript, TailwindCSS, and [@solana/wallet-adapter](https://github.com/solana-labs/wallet-adapter)**.  
This template provides wallet integration (Phantom, Solflare, etc.), developer tooling, and a production-ready setup for building scalable **Web3 frontends** on Solana.  

---

## 🚀 Tech Stack  

- [create-react-app](https://create-react-app.dev/) (v5.0.0)  
- [TypeScript](https://www.typescriptlang.org/) (v^4.6.3)  
- [@solana/wallet-adapter](https://github.com/solana-labs/wallet-adapter) for Solana wallet integration  
- [TailwindCSS](https://tailwindcss.com/) for modern styling  
- ESLint (`eslint-config-google`) for linting  
- `husky`, `lint-staged`, and `@commitlint` for Git hooks & commit quality  
- [Storybook](https://storybook.js.org/) for UI component development  

---

## 📚 References  

- [@solana/wallet-adapter](https://github.com/solana-labs/wallet-adapter)  
- [@solana/wallet-adapter-example](https://github.com/solana-labs/wallet-adapter/tree/master/packages/starter/example)  
- [The Complete Guide to Full Stack Solana Development with React, Anchor, Rust, and Phantom](https://dev.to/edge-and-node/the-complete-guide-to-full-stack-solana-development-with-react-anchor-rust-and-phantom-3291)  

---

## ⚙️ Getting Started  

Clone the repository and install dependencies:  

```bash
yarn install
```

Run the project in development mode:

```bash
yarn start
```

Build for production:

```bash
yarn build
```

## 📝 TODOs

- Fix suppressed type errors currently handled with @ts-expect-error.

  - Reference: [Solana web3 Program constructor is expecting a json as one of params](https://stackoverflow.com/questions/70655700/solana-web3-program-constructor-is-expecting-a-json-as-one-of-params)

- Address state persistence across refreshes.

  - See: [Naive Keypair persistence approach](https://gist.github.com/dabit3/7cbd18b8bc4b495c4831f8674902eb42)

- Update React entrypoint to use `createRoot` for React 18 compatibility.

  - Related warning: `Warning: ReactDOM.render is no longer supported in React 18`.

## 🎯 Purpose

This repository serves as a starter kit for Solana developers who want to:

- Quickly bootstrap a React + TypeScript Solana dApp

- Integrate Phantom, Solflare, and other wallets with ease

- Follow best practices in linting, commits, and component-driven development

## 📄 License

MIT — free to use, modify, and share.