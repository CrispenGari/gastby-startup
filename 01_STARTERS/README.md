### Hello World starter.

This project was bootstraped fom [this repository.](https://github.com/gatsbyjs/gatsby-starter-hello-world)

### Setting up `sass` in our project

First we need to install the `gatsby-plugin-sass` by running the following command:

```shell
npm install sass gatsby-plugin-sass
```

For this to work we also need to install `node-sass` as follows:

```shell
npm install sass node-sass
```

Finally we need to go to our `gatsby-config.js` and add the following under plugins:

```js
plugins: [`gatsby-plugin-sass`]
```

After that we will be able to import `sass` and `scss` files to style our components for example in the `components/Header/Header.jsx` we can style it import styles as follows:

```js
import { Link } from "gatsby"
import React from "react"

import { header, header__link__active } from "./Header.module.scss"
const Header = () => {
  return <div className={header}>...</div>
}

export default Header
```

### Dynamic data with Gatsby and GraphQL

Let's start by creating a dummy data, we can go to the `gatsby-config.js` and add a `siteMetadata`.

```js
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "my app",
    languages: ["css", "js", "css", "ts"],
  },
  plugins: ["gatsby-plugin-sass"],
}
```

Now you can go to http://localhost:8000/\_\_\_graphql and start making some queries. If we run the following query in a graphiQL playground:

```gql
{
  site {
    siteMetadata {
      description
      languages
      title
    }
  }
}
```

We get the following response:

```json
{
  "data": {
    "site": {
      "siteMetadata": {
        "description": null,
        "languages": ["css", "js", "css", "ts"],
        "title": "my app"
      }
    }
  },
  "extensions": {}
}
```

Now let's move on and try to make the same query in a React component.

We need to import the following from the `useStaticQuery` hook and `graphql` from gatsby.

```js
import { Link, graphql, useStaticQuery } from "gatsby"
...
const Header = () => {
  const data = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            languages
            title
          }
        }
      }
    `
  )
  console.log(data)
  ...
}
```

Now we have the data queried inside a react component and next to us. We can use it if we want.

### Using the GraphQL Playground instead of the default graphiql playground.

1. create a `.env.development` in the root folder
2. add the following in the file

```env
GATSBY_GRAPHQL_IDE=playground
```

3. Next we are going to install the `env-cmd` as a dev dependence using npm.

```shell
npm i --save-dev env-cmd
```

4. We are going to the `package.json` and change the develop script to load the environment variables in the files we have created as:

```json
"scripts": {
    "build": "gatsby build",
    "develop": "env-cmd .env.development gatsby develop"
    ...
}
```

Then now if we go to [http://localhost:8000/___graphql ] we will be able to see the graphql playground.

### References

- [plugins](https://www.gatsbyjs.com/plugins/)
- [starters](https://www.gatsbyjs.com/docs/starters/)
- [docs](https://www.gatsbyjs.com/docs)
