# Getting started with NFX React-NextJs Boilerplate

This project was bootstrapped with [Create Next App](https://nextjs.org/docs/getting-started).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### Few other environment run scripts

| Run Script                                           | Description                 |
| ---------------------------------------------------- | --------------------------- |
| <span style="color:brown">**npm run qa**</span>    | Runs in QA environment      |
| <span style="color:brown">**npm run staging**</span> | Runs in Staging environment |

## About the boilerplace

This boilerplate is created in the interest of developers to make the basic development process easy. This template has various architectural and environment setups.

### Environments

| Run Script | Env file |
| ---------- | -------- |
| dev        | .dev     |
| qa         | .qa      |
| staging    | .staging |
| prod       | .prod    |

# Structure

```
📦Project
 ┣ 📂environments
 ┃ ┣ 📜.env.dev
 ┃ ┣ 📜.env.prod
 ┃ ┣ 📜.env.qa
 ┃ ┗ 📜.env.staging
 ┣ 📂public
 ┃ ┣ 📜favicon.ico
 ┃ ┗ 📜vercel.svg
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┣ 📂helpers
 ┃ ┣ 📂layouts
 ┃ ┃ ┣ 📜privateLayout.js
 ┃ ┃ ┗ 📜publicLayout.js
 ┃ ┣ 📂network
 ┃ ┃ ┣ 📂core
 ┃ ┃ ┃ ┣ 📜apiModel.js
 ┃ ┃ ┃ ┣ 📜endpoints.js
 ┃ ┃ ┃ ┣ 📜httpMethods.js
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┣ 📜networkManager.js
 ┃ ┃ ┃ ┣ 📜responseParser.js
 ┃ ┃ ┃ ┣ 📜serverConfig.js
 ┃ ┃ ┃ ┗ 📜tokenRefresher.js
 ┃ ┃ ┣ 📜authService.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜package.json
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂api
 ┃ ┃ ┃ ┗ 📜hello.js
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┗ 📂signup
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂user
 ┃ ┃ ┃ ┣ 📂dashboard
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┃ ┗ 📂settings
 ┃ ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📜_app.js
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂redux
 ┃ ┃ ┣ 📂actions
 ┃ ┃ ┃ ┗ 📜appActions.js
 ┃ ┃ ┣ 📂dispatchers
 ┃ ┃ ┃ ┗ 📜appDispatcher.js
 ┃ ┃ ┣ 📂reducers
 ┃ ┃ ┃ ┗ 📜appReducer.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜package.json
 ┃ ┃ ┗ 📜store.js
 ┃ ┣ 📂session_manager
 ┃ ┃ ┗ 📜cookie.js
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📜Home.module.css
 ┃ ┃ ┗ 📜globals.css
 ┃ ┣ 📂themes
 ┃ ┃ ┗ 📜defaultTheme.js
 ┃ ┗ 📜.DS_Store
 ┣ 📜.DS_Store
 ┣ 📜README.md
 ┣ 📜jsconfig.json
 ┣ 📜next.config.js
 ┣ 📜package-lock.json
 ┗ 📜package.json
```

## Some basic instructions

- All the url facing components should be placed in `pages` directory
- All the sharable components should be placed inside `components` directory
- Themes can be managed in `themes` directory
- This boilerplate is already set with Material-UI v5. You need not to update anything.
- This boilerplate is also set with Redux and authentication flow. So all the routing can be managed accordingly.
- All the private routes should be declared in `pages/user/` and all the public routes should be declared in `pages/auth/` or `pages/common/` directory.
- If you need to update theme and colors, please make those changes in `src/themes/defaultTheme.js` file or create a new one in the same directory.
- Theme should be loaded in `src/pages/_app.js` `createTheme()` function

## Imports

All the imports in this project are being managed by [Absolute Imports and Module path aliases](https://nextjs.org/docs/advanced-features/module-path-aliases). The config file for all the directory routes is `jsconfig.json` located at the root of the project.

### How to import modules

To import modules, just place `@` before the name of directory followed by the file name.
For example, If I want to import `AppLoader` from `src/components/Loader/AppLoader.js` then the import would look like

```js
import AppLoader from "@components/Loader/AppLoader";
```

You need not to write long import paths for most of the times.

**If you need to add any other directory in this import, add the path to `jsconfig.json`**

## Some other important points

- This boilerplate is set with `js-cookie` and you need not set values explicitly in localStorage, maintain all the session related data in cookie only.
- All you need to do is dispatch the action to redux and set/read the values from redux.
- All the API calls will be done by `NetworkManage.js` using fetch API.

### Network call Example

#### Step 1

Setup the API url in `.env.dev` or related environment file

```bash
NEXT_PUBLIC_API_URL=https://dev.example.com
```

#### Step 2

Open `src/network/core/endpoints.js` and place the endpoint for the call. For example, If we want to add `/login` endpoint, then we will add like this

```js
export const API = {
  AUTH: {
    LOGIN: new Endpoint("/auth", HTTP_METHODS.POST)
  }
};
```

Though the call is related to authentication, we'll put this under the `AUTH` property. \
The second parameter in the Endpoint Class is `HTTP` method. This will be one of `HTTP_METHODS.`

- POST
- GET
- PUT
- DEL
- PATCH

#### Step 3

Now create a new service file in `network/` directory. We'll create `authService.js` file for our case.

```js
// Sample service to make network call

import { API, NetworkManager } from "./core";

export class AuthService {
  static async loginByEmail(payload) {
    const instance = new NetworkManager(API.AUTH.LOGIN, payload);
    return await instance.httpRequest(false);
  }
}
```

First you need to create a new instance of the `NetworkManager` by passing the Endpoint and the body parameter.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
