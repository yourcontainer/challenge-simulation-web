This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
using the [NativeBase.io template](https://docs.nativebase.io/install-next).

# Challenge Project Web

For your first assignment, we need to ensure you can be successful on our team.

Below is a set of 3 [Exercises](#exercises) to complete within this starting repo.

Please **DO NOT** fork this repo, but clone it locally.
Specifically you need to:

1. Clone this repo locally
2. Solve the challenge locally
3. Create a new repo in your GitHub account and note the git url
4. Set your local origin to the new git url: git remote set-url origin ${git url}
5. Push your solution to the newly set origin

You must follow these steps for your solution to be accepted -- forks or other methods will not be considered.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### References to Technologies used

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [NativeBase Documentation](https://docs.nativebase.io/) - learn about how to use the NativeBase component library.

## Exercises

Please complete all 3 of the following exercises in the current repo. You should follow
the instructions as they are written and have at least one commit for each exercise, and
include in the commit message that it is the completion of an exercise.

### Exercise 1: Add Desktop View to the Product Catalog Page

The current Product Catalog Page is built to be Mobile-first so it only shows a single
column of the products. However, we want to add a version of this view that is able to
present more to a user coming from a Desktop Web Browser.

Please add the following so that it appears in the browser window when viewed
on a wider screen without changing the current mobile view:

- At least 3 column view in the Product Catalog list
- Expanded menu navigation
- Expanded list item card to show up to 30 characters of the description

The new view should:

- not make any changes to existing Mobile View
- exist in the same page using breakpoints and media queries
- do **not use** `styled-components`

### Exercise 2: Call API to fetch Product Details Data

The app already has a page defined for handling [Product Details](pages/products/%5Bpid%5D.js]).

Somewhere in this page you need to use the incoming `pid` available from the `router.query`
(already immplemented in the page) to fetch the data from the API.

The API endpoint to call is:

```
/api/products/[pid]
```

### Exercise 3: Display Product Details

From the data returned by the API for a Product in [Exercise 2](#exercise-2-call-api-to-fetch-product-details-data),
you need to build the content of the Details Page.

It must display:

- Product Name
- Product Year
- Product Description
- Product Images
