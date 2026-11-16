# react_shadcn_ts_usm_boilerplate

A starter template for React and TypeScript on Vite, with shadcn/ui and usm-redux state. Setting up shadcn/ui and adding every component one by one takes a while. Here they are all installed already, so you clone it and start building your app.

## What's included

1. **Vite, React and TypeScript:** a fast dev server, with a type check on build.
2. **All the shadcn/ui components, installed,** on Tailwind and Radix.
3. **usm-redux state** in one `StatesController` class, with no actions or reducers to write.
4. **Tailwind,** set up with the shadcn colour variables.
5. **ESLint,** which fails on any warning when you run `yarn lint`.

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

To add anything that is missing, use the same command with today's `shadcn` CLI.

## Related boilerplates

1. [nextjs_shadcn_usm_ts_boilerplate](https://github.com/p32929/nextjs_shadcn_usm_ts_boilerplate): the same idea for Next.js (app router).
2. [react_typescript_materialui_usm_boilerplate](https://github.com/p32929/react_typescript_materialui_usm_boilerplate): usm-redux with Material-UI instead.
3. [electron-shadcn-typescript](https://github.com/p32929/electron-shadcn-typescript): the same UI stack as a desktop app.

## Contributing

Contributions are very welcome, thank you! Before you start on a pull request, please open an issue and tell me what you would like to add or change. That way we can agree on it first, and your time is not wasted on something that might not fit. Thanks for helping make react_shadcn_ts_usm_boilerplate better.

## Share

<a href="https://p32929.github.io/share/?repo=react_shadcn_ts_usm_boilerplate"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/share-dark.svg"><img src="https://p32929.github.io/readme/share-light.svg" alt="Share this with your friends in just a click" width="420"></picture></a>

## Support

<a href="https://p32929.github.io/support/"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/support-dark.svg"><img src="https://p32929.github.io/readme/support-light.svg" alt="If you like my works and want to support me, feel free to support" width="420"></picture></a>
