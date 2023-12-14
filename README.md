# LivroLume

<!--toc:start-->

- [LivroLume](#livrolume)
  - [Jest + React Testing Library](#jest-react-testing-library)
  - [Recommended IDE Setup](#recommended-ide-setup)
  - [File Structure](#file-structure)
  - [Quick Start](#quick-start)
    - [Start Project](#start-project)
    - [Build Project](#build-project)
  - [Redux 2.0](#redux-20)
  <!--toc:end-->

This template should help get you started developing with Tauri, React and
Typescript in Vite.

## Jest + React Testing Library

[how to setup](https://zaferayan.medium.com/how-to-setup-jest-and-react-testing-library-in-vite-project-2600f2d04bdd)
[jest](https://jestjs.io/docs/getting-started)
[react testing library](https://testing-library.com/docs/react-testing-library/example-intro/)

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
- [Neovim](https://neovim.io/) + [LunarVim](https://www.lunarvim.org/)

## File Structure

- src-tauri/
  - icons/
  - src/
  - tauri.conf.json
- src/
  - main.tsx
  - app.tsx
  - store.ts
  - features/
    - settings/
      - settings-reducer
      - index.tsx
    - library/
      - library-reducer
      - index.tsx
    - book/
      - book-reducer
      - index.tsx
  - components/
    - about-project.tsx
    - layout.tsx
    - section.tsx
    - article.tsx
    - book/
        index.tsx
        book-overlay.tsx
    - button/
      - bookmark-button.tsx
    - menu-bar.tsx
    - side-bar/
      - index.tsx
      - side-bar-brand.tsx
      - side-bar-nav.tsx
      - side-bar-nav-link.tsx
  - constants
    - routes/
      - root.ts
      - library.ts
      - book.ts
  - hooks
    - use-theme.ts
  - routes/
    - root-page.tsx
    - library-page.tsx
    - book-page.tsx
    - error-page.tsx
  - controllers
    - library-controller.tsx
    - book-controller.tsx
  - themes
    - colors
    - components
    - fonts
    - index.ts
    - global-css.ts
  - lib
    - luma-api.ts
    - local-storage.ts
    - to-title-case.ts

## Quick Start

- [Quick Start](https://tauri.app/v1/guides/getting-started/setup/)
- [Prerequisites](https://tauri.app/v1/guides/getting-started/prerequisites)

### Start Project

```bash
yarn && yarn tauri dev
```

### Build Project

```bash
yarn tauri build
```

## Redux 2.0

- [migrating](https://github.com/reduxjs/redux-toolkit/blob/master/docs/usage/migrating-rtk-2.md)
- [modern redux](https://github.com/reduxjs/redux-toolkit/blob/master/docs/usage/migrating-to-modern-redux.mdx)
