# react_shadcn_ts_usm_boilerplate

A React + TypeScript starter on Vite with shadcn/ui and usm-redux state — every shadcn component already installed, so you skip the setup and start building.

## What's included

- **Vite + React + TypeScript** — fast dev server, `tsc` on build
- **shadcn/ui components already installed** on Tailwind + Radix
- **usm-redux** state via a `StatesController` class — no action/reducer boilerplate
- **Tailwind** configured with the shadcn CSS variables
- **ESLint** with zero-warning enforcement on `npm run lint`

## Project layout

```
src/main.tsx             entry, mounts the app
src/App.tsx              the app shell
lib/StatesController.ts  the usm-redux state
lib/utils.ts             the cn() helper
components/ui/           the shadcn components
styles/globals.css       Tailwind + shadcn CSS variables
```

## Getting started

```bash
git clone https://github.com/p32929/react_shadcn_ts_usm_boilerplate.git
cd react_shadcn_ts_usm_boilerplate
yarn
yarn dev           # http://localhost:5173

yarn build
yarn lint
```

## Adding more shadcn components

The component set was installed with:

```bash
yarn shadcn-ui add accordion alert alert-dialog aspect-ratio avatar badge button calendar card checkbox collapsible command context-menu table dialog dropdown-menu hover-card input label menubar navigation-menu popover progress radio-group scroll-area select separator sheet skeleton slider switch table tabs textarea toast toggle tooltip

yarn add @tanstack/react-table
```

Use the same command (with today's `shadcn` CLI) to add anything that's missing.

## Related boilerplates

- [nextjs_shadcn_usm_ts_boilerplate](https://github.com/p32929/nextjs_shadcn_usm_ts_boilerplate) — the Next.js app-router version
- [react_typescript_materialui_usm_boilerplate](https://github.com/p32929/react_typescript_materialui_usm_boilerplate) — usm-redux with Material-UI instead
- [electron-shadcn-typescript](https://github.com/p32929/electron-shadcn-typescript) — the same UI stack as a desktop app

## Contributing

Contributions are warmly welcomed and greatly appreciated! Whether it's a bug fix, new feature, or improvement, your input helps make this project better for everyone.

Before submitting a pull request, please:

1. Create an issue describing the feature or bug fix you'd like to work on
2. Wait for discussion and approval to ensure alignment with project goals
3. Fork the repository and create your feature branch
4. Submit your pull request with a clear description of changes

This approach helps avoid duplicate efforts and ensures smooth collaboration. Thank you for considering contributing!

## Share

Sharing this repository with your friends is just one click away from here

[![facebook](https://user-images.githubusercontent.com/6418354/179013321-ac1d1452-0689-493f-9066-940cf2302b6e.png)](https://www.facebook.com/sharer/sharer.php?u=https://github.com/p32929/react_shadcn_ts_usm_boilerplate/)
[![twitter](https://user-images.githubusercontent.com/6418354/179013351-7d8d6d1c-4ce2-46ab-bef8-4c4765a1b888.png)](https://twitter.com/intent/tweet?url=https://github.com/p32929/react_shadcn_ts_usm_boilerplate/)
[![tumblr](https://user-images.githubusercontent.com/6418354/179013343-3111f55a-3b90-40c7-8487-9777348672b0.png)](https://www.tumblr.com/share?v=3&u=https://github.com/p32929/react_shadcn_ts_usm_boilerplate/)
[![pocket](https://user-images.githubusercontent.com/6418354/179013334-b095c45f-becf-49f4-9ee1-5a731a9b1f85.png)](https://getpocket.com/save?url=https://github.com/p32929/react_shadcn_ts_usm_boilerplate/)
[![pinterest](https://user-images.githubusercontent.com/6418354/179013331-44cd9206-11b1-4b65-becb-5863b61c828f.png)](https://pinterest.com/pin/create/button/?url=https://github.com/p32929/react_shadcn_ts_usm_boilerplate/)
[![reddit](https://user-images.githubusercontent.com/6418354/179013338-7416ae3f-73ba-4522-86e1-1374d7082d22.png)](https://www.reddit.com/submit?url=https://github.com/p32929/react_shadcn_ts_usm_boilerplate/)
[![linkedin](https://user-images.githubusercontent.com/6418354/179013327-ca7b7102-1da8-4b1c-858f-1a6e5f21bd70.png)](https://www.linkedin.com/shareArticle?mini=true&url=https://github.com/p32929/react_shadcn_ts_usm_boilerplate/)
[![whatsapp](https://user-images.githubusercontent.com/6418354/179013353-f477fa0b-3e6f-4138-a357-c9991b23ff88.png)](https://api.whatsapp.com/send?text=https://github.com/p32929/react_shadcn_ts_usm_boilerplate/)
