# Template for C4G CS-6150 Class Projects

## Introduction

The purpose of this repository is to proved a template for a base starting point for C4G course projects. This template is not mandatory, but it captures the needs of a typical C4G project that uses a website and a database. A team that uses the template for building their project can also use it to meet course reporting requirements. Features include:

- Authentication using google with 2 provided test accounts
- CI/CD which will deploy the application and DB to the [c4g.dev](https://c4g.dev) server using your applications sub-domain.
- A user management page for `ADMIN` users. Base roles are `ADMIN` and `STAFF`.
- Project specific deliverable pages to quickly update as we progress through the course. Found by clicking the `Team` link in the footer of the application.
- More to come as we add common features we find useful across applications. We welcome student pull requests to add features!

  Our goal is to make this template easy to use for any student in the class, so feedback to improve the template or this readme are most welcome!

## Getting Started

1. Make sure you have the following setup and configured on your computer:
   - [git](https://docs.github.com/en/get-started/getting-started-with-git/set-up-git) or [Github Desktop](https://desktop.github.com/download/)
   - [NodeJS](https://nodejs.org/en/download) - install with [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
   - [Docker](https://www.docker.com/get-started/)
2. Clone the repo using either SSH, HTTPS, or Github Desktop

- SSH

```bash
git clone git@github.gatech.edu:cs-6150-computing-for-good/template.git
```

- HTTPS

```bash
git clone https://github.gatech.edu/cs-6150-computing-for-good/template.git
```

3. Get the `.env` file from Microsoft teams or ask a TA for the file. This file will be specific to your project once this repo is cloned and must be created by a TA as we have to setup the github action secrets.
4. Install all of the node dependencies with the following command

```bash
npm i
```

5. Make sure you have docker running and run the following command to initialize the database, apply all database schema, and seed some test users:

```bash
npm run init
```

6. If all is well up to this point your terminal should look like this:
   ![Initialization Successful](/documentation/init_success.png?raw=true 'Initialization Successful')
7. Next, run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

8. You may login with either of the accounts below or with your own gmail account

| Username              | Password         | Role  |
| --------------------- | ---------------- | ----- |
| c4gdevad@gmail.com    | EHdqcGJajTAnSy$8 | ADMIN |
| c4gdevstaff@gmail.com | JCbSk3&&JF!h#m@x | STAFF |

9. To access the database you can run the following command in a new terminal:

```bash
npx prisma studio
```

It should open the browser automatically or you can open [http://localhost:5555/](http://localhost:5555/) to see the database tables.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## c4g.dev Server Used Ports

### Application Ports

| Port | Application             | Note                 |
| ---- | ----------------------- | -------------------- |
| 3001 | template                | prod web application |
| 3002 | paladin                 | prod web application |
| 3003 | va-springboard          | prod web application |
| 3004 | atlanta-food-consortium | prod web application |

### Database Ports

| Port | Application             | Note          |
| ---- | ----------------------- | ------------- |
| 5430 | template                | prod database |
| 5431 | va-springboard          | prod database |
| 5432 | metro-atlanta-saves     | ci database   |
| 5433 | paladin                 | prod database |
| 5434 | atlanta-food-consortium | prod database |

## Manual Updates after cloning the template (by C4G staff)

1. Update the docker-compose and replace `template` with the application name on line 2.
2. Update the ci/cd github workflows (replace APP_NAME, TARGET_DIR, and NEXTAUTH_URL : `template` and port: `3001`)
3. Setup oauth settings in [GCP](https://console.cloud.google.com/apis/credentials?project=c4g-template)
4. Setup database, nginx configuration, and re-run SSL cert on [C4G Server](https://c4g.dev).

## Technologies Used

- [Nextjs](https://nextjs.org/) - framework
- [Typescript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/) - css atomic classes
- [Prisma](https://www.prisma.io/) - db type ORM system
- [Prettier](https://prettier.io/) - formatter
- [ESLint](https://eslint.org/) - enforce rules / policies for maintable code
- [Husky](https://typicode.github.io/husky/) - allows for code changes during local commit
- [Lint-Staged](https://github.com/lint-staged/lint-staged) - lints code on only staged files with auto-fix
- [Docker](https://www.docker.com/) - containers
- [Postgres](https://www.postgresql.org/) - database
- [Github Actions](https://github.com/features/actions) - ci/cd process
- [Nginx](https://nginx.org/) - server hosting configuration / routing
- [Shadcn](https://ui.shadcn.com/) - UI component library
- [RadixUI](https://www.radix-ui.com/) - UI component library
- [Lucide-React](https://lucide.dev/guide/packages/lucide-react) - UI icons
- [Next-Auth](https://authjs.dev/) - authentication with google
- [Ag-Grid](https://www.ag-grid.com/) - grid / table component

If you want to contribute to this template for future projects please work with the teaching staff. We welcome any technologies that could benefit the partners and speed to delivery for features.
