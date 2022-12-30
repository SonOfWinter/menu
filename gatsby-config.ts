import type { GatsbyConfig } from 'gatsby'
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const config: GatsbyConfig = {
  siteMetadata: {
    title: `Menu`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY, // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `Ingredient`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `Plat`
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `Adjectif`
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `Pre`
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `Post`
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `Lien`
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `Menu`
          }
        ]
      }
    }
  ],
}

export default config
