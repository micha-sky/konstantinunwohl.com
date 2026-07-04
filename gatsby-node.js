/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Templates per content collection (content/blog, content/konzerte, content/lyrics)
const templates = {
  blog: path.resolve(`./src/templates/blog-post.js`),
  konzerte: path.resolve(`./src/templates/konzerte.js`),
  lyrics: path.resolve(`./src/templates/lyrics.js`),
}

/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    // "blog" | "konzerte" | "lyrics" — set in gatsby-config.js
    const collection = getNode(node.parent).sourceInstanceName
    const filePath = createFilePath({ node, getNode })

    createNodeField({
      node,
      name: `slug`,
      value: `/${collection}${filePath}`,
    })
    createNodeField({
      node,
      name: `collection`,
      value: collection,
    })
  }
}

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: ASC } }, limit: 1000) {
        nodes {
          id
          fields {
            slug
            collection
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your markdown content`,
      result.errors
    )
    return
  }

  const nodes = result.data.allMarkdownRemark.nodes

  // Create pages per collection so previous/next links stay within it
  for (const collection of Object.keys(templates)) {
    const posts = nodes.filter(node => node.fields.collection === collection)

    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: templates[collection],
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }
}

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
      instagram: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      type: String
      description: String
      date: Date @dateformat
      tags: [String]
      image: File @fileByRelativePath
    }

    type Fields {
      slug: String
      collection: String
    }
  `)
}
