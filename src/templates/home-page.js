import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import homeStyles from '../styles/home.module.css'
import HomeCarouselV1 from '../components/HomeCarouselV1'
import '../styles/home.css'
import FeatureList from "../components/FeatureList"
import ProductTabsParent from "../components/products/ProductTabsParent"

const HomePageTemplate = ({ data, pageContext, location }) => {
  const page = data.markdownRemark.frontmatter
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  const products = data.allMarkdownRemark.edges
  console.log(products)

  return (
    <Layout location={location} title={siteTitle}>
      <HomeCarouselV1/>
      <ProductTabsParent products={products}/>

      <InstaFeed />
      <FeatureList />
      <div class="gmap-container full-width"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8675022125162!2d106.9075327505293!3d-6.148491261960401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5132958c58d%3A0x21a72eb7ae56a6b6!2sNiku%20Niku%20Kelapa%20Gading!5e0!3m2!1sen!2sus!4v1600552431413!5m2!1sen!2sus" width="100%" height="450" allowfullscreen="true" className="full-width"></iframe></div>
    </Layout>
  )
}

export default HomePageTemplate;

const InstaFeed = () => {
  return (
<div id="instagramFeed" className="full-width">
      <div class="instagram_gallery">
          <a href="https://www.instagram.com/p/Bh-P3IoDxyB" rel="noopener" target="_blank">
              <img src="..." alt="instagram instagram image 0" />
          </a>
          ...
      </div>
      </div>
  )
}

export const pageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: {id: {eq: "home"}}) {
      frontmatter {
        templateKey
        messageParagraph {
          messageBody
          messageHeader
        }
        heroSlider {
          slide1 {
            brandname
            image
            itemname_one
            itemname_two
          }
          slide2 {
            brandname
            image
            itemname_one
            itemname_two
          }
        }
        id
        videoUrl
      }
    }
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "product"}}}) {
      edges {
        node {
          frontmatter {
            name
            price
            date(locale: "id")
            description
            thumbnail
            isInStock
            images {
              image
            }
            tag
            redLabel
            blackLabel
          }
        }
      }
    }
  }
`
