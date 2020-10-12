import React, { Component } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Header = props => {
  let pathname = props.pathname;

  // const data = useStaticQuery(graphql`
  //   query HeaderQuery {
  //     markdownRemark(frontmatter: id)
  //   }
  // `)

  return (
    <header
      id="masthead"
      class="site-header header-v1"
      style={{ backgroundImage: "none" }}
    >
      <div class="col-full">
        <a class="skip-link screen-reader-text" href="#site-navigation">
          Skip to navigation
        </a>
        <a class="skip-link screen-reader-text" href="#content">
          Skip to content
        </a>
        <div class="header-wrap">
          <div class="site-branding">
            <Link to="/" class="custom-logo-link" rel="home">
              {/* <img src="/assets/images/nookijunk.png" /> */}
              <img src={props.logoSrc} />
            </Link>
          </div>
          <nav
            id="site-navigation"
            class="main-navigation"
            aria-label="Primary Navigation"
          >
            <button
              class="menu-toggle"
              aria-controls="site-navigation"
              aria-expanded="false"
            >
              <span class="close-icon">
                <i class="po po-close-delete"></i>
              </span>
              <span class="menu-icon">
                <i class="po po-menu-icon"></i>
              </span>
              <span class=" screen-reader-text">Menu</span>
            </button>
            <div class="primary-navigation">
              <ul
                id="menu-main-menu-left"
                class="menu nav-menu"
                aria-expanded="false"
              >
                {pathname == '/' && <li class="menu-item">
                  <Link to="/#menu-section">Menu</Link>
                </li>}
                {pathname !== '/' && <li class="menu-item">
                  <Link to="/">Home</Link>
                </li>}
                <li class="menu-item">
                  <Link href="/contact#areserve">Reservation</Link>
                </li>
                {/* <li class="menu-item">
                  <Link to="/contact">Contact Us</Link>
                </li> */}
                <li class="menu-item">
                  <Link to="/guidelines">Guidelines</Link>
                </li>
                <li class="menu-item phone-number">
                  <a href={props.waUrl} target="_blank">
                    <i class="fa fa-whatsapp" aria-hidden="true"></i>{props.waNumber}
                  </a>
                </li>
              </ul>
              {/* <ul id="menu-main-menu-right" class="menu nav-menu" aria-expanded="false"><li class="menu-item"><a href="store-locator.html"><i class="fa fa-whatsapp" aria-hidden="true"></i>08163283746</a></li></ul> */}
            </div>
            <div class="handheld-navigation">
              <span class="phm-close" id="inner-close-btn">Close</span>
              <img src={props.logoSrc} style={{margin: "1rem"}}/>
              <ul class="menu">
                {/* <li class="menu-item "><a href="shop-grid-3-column.html"><i class="po po-pizza"></i>Pizza</a></li>
                   <li class="menu-item "><a href="shop-grid-3-column.html"><i class="po po-burger"></i>Burgers</a></li>
                   <li class="menu-item "><a href="shop-grid-3-column.html"><i class="po po-salads"></i>Salads</a></li>
                   <li class="menu-item "><a href="shop-grid-3-column.html"><i class="po po-tacos"></i>Tacos</a></li>
                   <li class="menu-item "><a href="shop-grid-3-column.html"><i class="po po-wraps"></i>Wraps</a></li>
                   <li class="menu-item "><a href="shop-grid-3-column.html"><i class="po po-fries"></i>Fries</a></li>
                   <li class="menu-item "><a href="shop-grid-3-column.html"><i class="po po-salads"></i>Salads</a></li>
                   <li class="menu-item "><a href="shop-grid-3-column.html"><i class="po po-drinks"></i>Drinks</a></li> */}

                {pathname == '/' && <li class="menu-item">
                  <Link href="/#menu-section"><i class="fa fa-book"></i>Menu</Link>
                </li>}
                {pathname !== '/' && <li class="menu-item">
                  <Link to="/"><i class="fa fa-home"></i>Home</Link>
                </li>}
                <li class="menu-item">
                  <Link href="/contact#areserve"><i class="fa fa-pencil"></i>Reservation</Link>
                </li>
                {/* <li class="menu-item">
                  <Link href="/contact"><i class="fa fa-phone"></i>Contact Us</Link>
                </li> */}
                <li class="menu-item">
                  <Link href="/guidelines"><i class="fa fa-check-circle"></i>Guidelines</Link>
                </li>
                <li class="menu-item phone-number">
                  <Link href="/">
                    <i class="fa fa-whatsapp" aria-hidden="true"></i>08163283746
                  </Link>
                </li>

              </ul>
            </div>
          </nav>
          {/* <div class="header-info-wrapper">
             <ul class="site-header-cart-v2 menu">
                <li class="cart-content ">
                   <a href="cart.html" title="View your shopping cart">
                   <i class="fa fa-whatsapp" aria-hidden="true"></i>
                   <span>081634348243</span>
                   </a>
                </li>
             </ul>
          </div> */}
        </div>
        {/* <div class="pizzaro-secondary-navigation">
          <nav class="secondary-navigation"  aria-label="Secondary Navigation">
             <ul  class="menu">
                <li class="menu-item"><a href="shop-grid-3-column.html"><i class="po po-pizza"></i>Pizza</a></li>
                <li class="menu-item"><a href="shop-grid-3-column.html"><i class="po po-burger"></i>Burgers</a></li>
                <li class="menu-item"><a href="shop-grid-3-column.html"><i class="po po-salads"></i>Salads</a></li>
                <li class="menu-item"><a href="shop-grid-3-column.html"><i class="po po-tacos"></i>Tacos</a></li>
                <li class="menu-item"><a href="shop-grid-3-column.html"><i class="po po-wraps"></i>Wraps</a></li>
                <li class="menu-item"><a href="shop-grid-3-column.html"><i class="po po-fries"></i>Fries</a></li>
                <li class="menu-item"><a href="shop-grid-3-column.html"><i class="po po-salads"></i>Salads</a></li>
                <li class="menu-item"><a href="shop-grid-3-column.html"><i class="po po-drinks"></i>Drinks</a></li>
             </ul>
          </nav>
       </div> */}
      </div>
    </header>
  )
}

export default Header
