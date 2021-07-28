## Not finished

![aplication image](https://github.com/GersonDantas/img/blob/main/testFeedLogin.gif)



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Tecnologies

    "@hookform/resolvers": "^2.6.0",
    "@material-ui/core": "^4.11.4",
    "@material-ui/icons": "^4.11.2",
    "@material-ui/lab": "^4.0.0-alpha.60",
    "axios": "^0.21.1",
    "date-fns": "^2.22.1",
    "next": "11.0.1",
    "nookies": "^2.5.2",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "react-hook-form": "^7.10.1",
    "sass": "^1.35.1",
    "tsconfig-paths": "^3.9.0",
    "yup": "^0.32.9"


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.tsx`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

In this application, I used cookies to save user token and paging information, which gives me the ease of using them on client-side and server-side. I use the server side to request registered people and go through a logic I created to divide the content into static pages.

### Logic used to produce static paging

    let tempArray2: Array<Array<iunicPerson>> = [];
      for (let i = 0; i < allPersonsTable.length - 1; i++) {
        //temporary Array
        let tempArray: iunicPerson[] = [];
        for (let j = i; j <= i + sizePage; j++) {
          //test  if the next is undefined
          if (allPersonsTable[j + 2] === undefined) {
            tempArray.push(allPersonsTable[j + 2]);
            tempArray2.push(tempArray);
            i = j + 1;
            break;
          }
          //test if the next is the last of this loop
          if (j + 1 == i + sizePage) {
            i = j;
            tempArray.push(allPersonsTable[j]);
            tempArray2.push(tempArray);
            break;
          }
          tempArray.push(allPersonsTable[j]);
        }
      }
      setArrayPersons(tempArray2); //Araay in state

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
