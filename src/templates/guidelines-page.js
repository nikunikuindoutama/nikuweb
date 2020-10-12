import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'

const GuidelinesPageTemplate = ({ data, pageContext, location }) => {
    const page = data.markdownRemark.frontmatter
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout location={location} title={siteTitle}>
        <div
            className="container"
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            style={{marginTop: '10rem', marginBottom: '15rem'}}
        />

        </Layout>
    )
}

export default GuidelinesPageTemplate

export const pageQuery = graphql`
    query GuidelinesPageQuery {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(frontmatter: { id: { eq: "guidelines" } }) {
            frontmatter {
                id
            }
            html
        }
    }
`