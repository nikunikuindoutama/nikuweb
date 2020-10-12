import React, { useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import SEO from "./seo"
// require('../assets/js/vendor/vendor.min.js')
// require('../assets/js/plugins/plugins.js')
// require('../assets/js/main.js')
import Header from "./Header"
// if (typeof window !== "undefined") {
//   // eslint-disable-next-line global-require
//   require("smooth-scroll")('a[href*="#"]')
// }

const Layout = ({ location, title, children }) => {
  useEffect(() => {
    const script = document.createElement("script")
    // script.async = true;
    script.src = "/assets/js/scripts.js"
    script.className = "main-script"
    // if(document.body.getElementsByClassName('main-script').length == 0){
    //   document.body.appendChild(script);
    // }
    document.querySelectorAll(".main-script").forEach(function (a) {
      a.remove()
    })
    document.body.appendChild(script)
  })

  // const data = useStaticQuery(graphql`
  //   query LayoutQuery {
  //     markdownRemark(frontmatter: { id: { eq: "home" } }) {
  //       frontmatter {
  //         logo
  //         id
  //       }
  //     }
  //   }
  // `)
  // const layout = data.markdownRemark.frontmatter.layout

  const data = useStaticQuery(graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: {id: {eq: "contact"}}) {
      frontmatter {
        zomatoLink
        id
        instagramLink
        whatsappLink
        whatsappNumber
        companyName
        address
        phoneNumber
      }
    }
    layout:markdownRemark(frontmatter: { id: { eq: "home" } }) {
      frontmatter {
        logo
        id
      }
    }
  }
`)
console.log('data', data)

  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <>
      <SEO />
      <Header
        waUrl={data.markdownRemark.frontmatter.whatsappLink}
        waNumber={data.markdownRemark.frontmatter.whatsappNumber}
        pathname={location.pathname}
        logoSrc={data.layout.frontmatter.logo}
      />
      <div id="content" class="site-content" tabindex="-1">
        <div class="col-full">
          <div id="primary" class="content-area">
            <main id="main" class="site-main">
              {children}
            </main>
          </div>
        </div>
      </div>
      <Footer
        info={data.markdownRemark.frontmatter}
        logoSrc={data.layout.frontmatter.logo}
      />
    </>
  )
}

const Footer = props => {
  return (
    <footer id="colophon" class="site-footer footer-v1">
      <div class="col-full">
        <div class="footer-social-icons">
          <span class="social-icon-text">Follow us</span>
          <ul class="social-icons list-unstyled">
            <li>
              <a class="fa fa-whatsapp" href={props.info.whatsappLink}></a>
            </li>
            <li>
              <a class="fa fa-spoon" href={props.info.zomatoLink}></a>
            </li>
            {/* <li>
              <a class="fa fa-twitter" href="#"></a>
            </li> */}
            <li>
              <a class="fa fa-instagram" href={props.info.instagramLink}></a>
            </li>
            {/* <li>
              <a class="fa fa-youtube" href="#"></a>
            </li>
            <li>
              <a class="fa fa-dribbble" href="#"></a>
            </li> */}
          </ul>
        </div>
        <div class="footer-logo">
          <a href="index.html" class="custom-logo-link" rel="home">
            <img src={props.logoSrc} />
          </a>
        </div>
        <div class="site-address">
          <ul class="address">
            <li>{props.info.companyName}</li>
            <li>{props.info.address}</li>
            <li>Telephone: {props.info.phoneNumber}</li>
          </ul>
        </div>
        <div class="site-info">
          <p class="copyright">
            {`Copyright © ${(new Date()).getFullYear()} ${props.info.companyName}. All rights reserved.`}
          </p>
        </div>
        <a
          target="_blank"
          class="footer-action-btn"
          href="https://g.page/niku-niku-shabu-house?share"
        >
          <i class="po po-map-marker"></i>Find us on Map
        </a>
        {/* <div class="pizzaro-handheld-footer-bar">
          <ul class="columns-3">
            <li class="my-account">
              <a href="login-and-register.html">My Account</a>
            </li>
            <li class="search">
              <a href="">Search</a>
              <div class="site-search">
                <div class="widget woocommerce widget_product_search">
                  <form
                    role="search"
                    method="get"
                    class="woocommerce-product-search"
                  >
                    <label class="screen-reader-text">Search for:</label>
                    <input
                      type="search"
                      id="woocommerce-product-search-field"
                      class="search-field"
                      placeholder="Search Products&hellip;"
                      value=""
                      name="s"
                      title="Search for:"
                    />
                    <input type="submit" value="Search" />
                    <input type="hidden" name="post_type" value="product" />
                  </form>
                </div>
              </div>
            </li>
            <li class="cart">
              <a
                class="footer-cart-contents"
                href="cart.html"
                title="View your shopping cart"
              >
                <span class="count">2</span>
              </a>
            </li>
          </ul>
        </div> */}

      </div>
    </footer>
  )
}

export default Layout
