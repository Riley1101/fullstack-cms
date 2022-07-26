# Full stack development task with Next.js and Express backend

Full stack CMS platform development for a toy shop

## What's inside?

Inside this repo

- [apps/backend](https://github.com/Riley1101/fullstack-cms/tree/main/apps/backend) (Backend for cms using Express and Mongoose)
- [apps/web](https://github.com/Riley1101/fullstack-cms/tree/main/apps/web) ( Frontend using Next.js)

### Apps and Packages

- `backend`: a [express.js](https://expressjs.com/) app
- `web`: another [Next.js](https://nextjs.org) app

## Setup

This repository is used in the `npx create-turbo` command, and selected when choosing which package manager you wish to use with your monorepo (Yarn).

### Build

To build all apps and packages, run the following command:

```
cd fullstack-cms
yarn run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd fullstack-cms
yarn workspace web install
yarn workspace backend install
yarn run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

```
npx turbo link
```
