import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import homeStyles from '../styles/home.module.css'
import '../styles/home.css'

const AboutPageTemplate = ({ data, pageContext, location }) => {
  const page = data.markdownRemark.frontmatter
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  console.log('about page data', page)

  return (
    <Layout location={location} title={siteTitle}>
      <div class="breadcrumb-area">
          <div class="container">
              <div class="row">
                  <div class="col-12">
                      <div class="row breadcrumb_box  align-items-center">
                          <div class="col-lg-6 col-md-6 col-sm-6 text-center text-sm-left">
                              <h2 class="breadcrumb-title">About Us</h2>
                          </div>
                          <div class="col-lg-6  col-md-6 col-sm-6">
                              <ul class="breadcrumb-list text-center text-sm-right">
                                  <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                                  <li class="breadcrumb-item active">About Us</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="site-wrapper-reveal border-bottom">
          <div class="about-us-pages-area">
              <div class="banner-video-area overflow-hidden section-space--pt_90">
                  <div class="container">
                      <div class="row">
                          <div class="col-lg-12">
                              <div class="video-container">
                                  <iframe class="video" src={page.videoUrl} allowFullScreen></iframe>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="our-customer-suppoer-area">
                  <div class="container">
                      <div class="row">
                          <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                              <div class="single-support-item">
                                  <div class="header-support">
                                      <div class="icon">
                                          <i class="icon-bag2"></i>
                                      </div>
                                      <h6><a href="#">{page.coreValues.one.header}</a></h6>
                                  </div>
                                  <div class="iconbox-desc">
                                      <p>{page.coreValues.one.body}</p>
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                              <div class="single-support-item">
                                  <div class="header-support">
                                      <div class="icon">
                                          <i class="icon-cash-dollar"></i>
                                      </div>
                                      <h6><a href="#">{page.coreValues.two.header}</a></h6>
                                  </div>
                                  <div class="iconbox-desc">
                                      <p>{page.coreValues.two.body}</p>
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                              <div class="single-support-item">
                                  <div class="header-support">
                                      <div class="icon">
                                          <i class="icon-paper-plane"></i>
                                      </div>
                                      <h6><a href="#">{page.coreValues.three.header}</a></h6>
                                  </div>
                                  <div class="iconbox-desc">
                                      <p>{page.coreValues.three.body}</p>
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                              <div class="single-support-item">
                                  <div class="header-support">
                                      <div class="icon">
                                          <i class="icon-history"></i>
                                      </div>
                                      <h6><a href="#">{page.coreValues.four.header}</a></h6>
                                  </div>
                                  <div class="iconbox-desc">
                                      <p>{page.coreValues.four.body}</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="perfection-area section-space--pt_90">
                  <div class="container">
                      <div class="row">
                          <div class="col-lg-6">
                              <div class="perfection-dec mr-lg-5 mt-3">
                                  <h5 class="mb-10" style={{ "textAlign": "center" }}>{page.messageOne.header}</h5>
                                  <p style={{ "textAlign": "center" }}> {page.messageOne.body}</p>
                              </div>
                          </div>
                          <div class="col-lg-6">
                              <div class="perfection-dec mr-lg-5 mt-3">
                                  <h5 class="mb-10" style={{ "textAlign": "center" }}>{page.messageTwo.header}</h5>
                                  <p style={{ "textAlign": "center" }}>{page.messageTwo.body}</p>
                              </div>
                              {/* <div class="perfection-dec mr-lg-5">
                                  <h5
                                    class="mb-10"
                                    style={{ "textAlign": "end" }}
                                  >
                                    Functionality meets perfection
                                  </h5>
                                  <p style={{ "textAlign": "end" }}>
                                    But I must explain to you how all this mistaken idea of denouncing sure and praising pain was born and I will give you a complete at the system, expound the actual teachings of the great of the truth, the human happiness was born. teachings of the great of the truth.
                                  </p>
                              </div> */}
                          </div>
                      </div>
                  </div>
              </div>

              <div class="banner-preduct-wrapper section-space--pt_90">
                  <div class="container">
                      <h3 class="mb-10">{page.gallery.label}</h3>
                      <div class="row row--6">
                          <div class="col-lg-8 col-md-8">
                              <div class="banner-product-image mt-10">
                                  <a href="#">
                                      <img src={page.gallery.image_one} class="img-fluid" alt="Banner images"/>
                                  </a>
                              </div>
                          </div>
                          <div class="col-lg-4 col-md-4">
                              <div class="banner-product-image mt-10">
                                  <a href="#">
                                      <img src={page.gallery.image_two} class="img-fluid" alt="Banner images"/>
                                  </a>
                              </div>
                              <div class="banner-product-image mt-10">
                                  <a href="#">
                                      <img src={page.gallery.image_three} class="img-fluid" alt="Banner images"/>
                                  </a>
                              </div>
                          </div>
                          <div class="col-lg-4">
                              <div class="banner-product-image mt-10">
                                  <a href="#">
                                      <img src={page.gallery.image_four} class="img-fluid" alt="Banner images"/>
                                  </a>
                              </div>
                          </div>
                          <div class="col-lg-8">
                              <div class="banner-product-image mt-10">
                                  <a href="#">
                                      <img src={page.gallery.image_five} class="img-fluid" alt="Banner images"/>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </Layout>
  )
}

export default AboutPageTemplate

export const pageQuery = graphql`
  query AboutPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: {id: {eq: "about"}}) {
      frontmatter {
        id
        messageOne {
          body
          header
        }
        messageTwo {
          body
          header
        }
        gallery {
          image_five
          image_four
          image_one
          image_three
          image_two
          label
        }
        coreValues {
          four {
            body
            header
          }
          one {
            body
            header
          }
          three {
            body
            header
          }
          two {
            body
            header
          }
        }
        videoUrl
      }
    }
  }
`
