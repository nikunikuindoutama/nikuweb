const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions


  // Query blog posts pages.
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allMarkdownRemark.edges

  // Create blog post pages
  posts.forEach((post, index) => {
    console.log('slug', post.node.frontmatter.templateKey, post.node.fields.slug)
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    if(post.node.frontmatter.templateKey != "none")
      createPage({
        path: post.node.fields.slug, //specifies the path in the url
        component: path.resolve(`./src/templates/${post.node.frontmatter.templateKey}.js`),
        context: {
          slug: post.node.fields.slug, // this is used as the parameter to pass into the graphql query
          previous,
          next,
        },
      })
  })

}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    // create file path
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value, //set it here
    })
  }
  // slugs will be available under allMarkdownRemark.edges.node.fields.slug
}
