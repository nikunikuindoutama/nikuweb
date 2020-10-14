import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import homeStyles from "../styles/home.module.css"
import "../styles/home.css"

const ContactPageTemplate = ({ data, pageContext, location }) => {
  const page = data.markdownRemark.frontmatter
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  console.log("Contact page data", page)

  return (
    <Layout location={location} title={siteTitle}>
      <body class="page-template-template-contactpage">
        <div id="content" class="site-content" tabindex="-1">
          {/* <div class="col-full"> */}
          <div id="primary" class="content-area">
            <main id="main" class="site-main">
              <div class="contact-map full-width">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8675022125162!2d106.9075327505293!3d-6.148491261960401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5132958c58d%3A0x21a72eb7ae56a6b6!2sNiku%20Niku%20Kelapa%20Gading!5e0!3m2!1sen!2sus!4v1600552431413!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  allowfullscreen="true"
                  className="full-width"
                ></iframe>
              </div>
              <header class="contact-header">
                <h1 class="entry-title">Contact Us</h1>
                {/* <p class="description">
                    We are a second-generation family business established in
                    1972
                  </p> */}
              </header>
              <div class="contact-form-with-address">
                <div class="row">
                  <div class="col-md-9 col-sm-9 col-xs-12">
                    <div class="contact-form">
                      <h2 id="areserve">Make a Reservation</h2>
                      <p>
                        Anda bisa melakukan reservasi dengan mengisi form dibawah. Kami akan menghubungi anda untuk mengkonfirmasi reservasi anda.
                      </p>
                      <div
                        role="form"
                        class="wpcf7"
                        id="wpcf7-f425-o1"
                        lang="en-US"
                        dir="ltr"
                      >
                        <div class="screen-reader-response"></div>
                        <form
                          name="reservation"
                          method="POST"
                          data-netlify="true"
                          // data-netlify-recaptcha="true"
                          // novalidate="novalidate"
                        >
                          <input
                            type="hidden"
                            name="form-name"
                            value="reservation"
                          />
                          {/* <div style={{ display: "none" }}>
                              <input type="hidden" name="_wpcf7" value="425" />
                              <input
                                type="hidden"
                                name="_wpcf7_version"
                                value="4.5.1"
                              />
                              <input
                                type="hidden"
                                name="_wpcf7_locale"
                                value="en_US"
                              />
                              <input
                                type="hidden"
                                name="_wpcf7_unit_tag"
                                value="wpcf7-f425-o1"
                              />
                              <input
                                type="hidden"
                                name="_wpnonce"
                                value="e6363d91dd"
                              />
                            </div> */}
                          <div class="form-group row">
                            <div class="col-xs-12 col-md-6">
                              <label>Name*</label> <br />
                              <span class="wpcf7-form-control-wrap name">
                                <input
                                  type="text"
                                  name="name"
                                  size="40"
                                  aria-required="true"
                                  aria-invalid="false"
                                />
                              </span>
                            </div>
                            <div class="col-xs-12 col-md-6">
                              <label>Phone Number*</label>
                              <br />
                              <span class="">
                                <input
                                  type="text"
                                  name="phone-number"
                                  size="40"
                                  aria-required="true"
                                  aria-invalid="false"
                                />
                              </span>
                            </div>
                          </div>
                          <div class="form-group row">
                            <div class="col-xs-12 col-md-6">
                              <label>Time*</label> <br />
                              <span class="wpcf7-form-control-wrap name">
                                <select
                                  id="time"
                                  className="input-text"
                                  name="time"
                                >
                                  <option value="10.00">10.00</option>
                                  <option value="10.30">10.30</option>
                                  <option value="11.00">11.00</option>
                                  <option value="11.30">11.30</option>
                                  <option value="12.00">12.00</option>
                                  <option value="12.30">12.30</option>
                                  <option value="13.00">13.00</option>
                                  <option value="13.30">13.30</option>
                                  <option value="14.00">14.00</option>
                                  <option value="14.30">14.30</option>
                                  <option value="15.00">15.00</option>
                                  <option value="15.30">15.30</option>
                                  <option value="16.00">16.00</option>
                                  <option value="16.30">16.30</option>
                                  <option value="17.00">17.00</option>
                                  <option value="17.30">17.30</option>
                                  <option value="18.00">18.00</option>
                                  <option value="18.30">18.30</option>
                                  <option value="19.00">19.00</option>
                                  <option value="19.30">19.30</option>
                                  <option value="20.00">20.00</option>
                                  <option value="20.30">20.30</option>
                                  <option value="21.00">21.00</option>
                                  <option value="21.30">21.30</option>
                                </select>
                              </span>
                            </div>
                            <div class="col-xs-12 col-md-6">
                              <label>Number of People in Group*</label>
                              <br />
                              <span class="">
                                <input
                                  type="number"
                                  min="2"
                                  max="20"
                                  class="group-size"
                                  name="phone-number"
                                  size="40"
                                  aria-required="true"
                                  aria-invalid="false"
                                />
                              </span>
                            </div>
                          </div>
                          {/* <div class="form-group">
                              <label>Subject</label>
                              <br />
                              <span class="wpcf7-form-control-wrap subject">
                                <input
                                  type="text"
                                  name="subject"
                                  size="40"
                                  class="wpcf7-form-control wpcf7-text input-text"
                                  aria-invalid="false"
                                />
                              </span>
                            </div> */}
                          <div class="form-group">
                            <label>Additional Message</label>
                            <br />
                            <span class="wpcf7-form-control-wrap additional-message">
                              <textarea
                                name="additional-message"
                                cols="40"
                                rows="6"
                                class="wpcf7-form-control wpcf7-textarea"
                                aria-invalid="false"
                              ></textarea>
                            </span>
                          </div>
                          {/* <div data-netlify-recaptcha="true"></div> */}
                          <div class="form-group clearfix">
                            <p>
                              <button
                                type="submit"
                                value="Send"
                                style={{ marginTop: "1rem" }}
                                class="wpcf7-form-control wpcf7-submit"
                              >
                                {" "}
                                Send{" "}
                              </button>
                            </p>
                          </div>
                          <div class="wpcf7-response-output wpcf7-display-none"></div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-3 col-xs-12">
                    <div class="store-info">
                      <h2>Our Address</h2>
                      <p>
                        {page.address}
                        <br />
                        {`Tel: ${page.phoneNumber}`}
                        <br />
                        {`WA: ${page.whatsappNumber}`}
                      </p>
                      <div class="address">
                        <h3>Opening Hours</h3>
                        <div class="address-info">
                          <ul>
                            <li class="clearfix">
                              <span class="day">Monday</span>
                              <span class="pull-right flip hours">
                                10.00 - 22.00
                              </span>
                            </li>
                            <li class="clearfix">
                              <span class="day">Tuesday</span>
                              <span class="pull-right flip hours">
                                10.00 - 22.00
                              </span>
                            </li>
                            <li class="clearfix">
                              <span class="day">Wednesday</span>
                              <span class="pull-right flip hours">
                                10.00 - 22.00
                              </span>
                            </li>
                            <li class="clearfix">
                              <span class="day">Thursday</span>
                              <span class="pull-right flip hours">
                                10.00 - 22.00
                              </span>
                            </li>
                            <li class="clearfix">
                              <span class="day">Friday</span>
                              <span class="pull-right flip hours">
                                10.00 - 22.00
                              </span>
                            </li>
                            <li class="clearfix">
                              <span class="day">Saturday</span>
                              <span class="pull-right flip hours">
                                10.00 - 22.00
                              </span>
                            </li>
                            <li class="clearfix">
                              <span class="day">Sunday</span>
                              <span class="pull-right flip hours">
                                10.00 - 22.00
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* <div class="address">
                          <h3>Careers.</h3>
                          <div class="address-info">
                            <p class="inner-right-md">
                              If you are interested in employment opportunities
                              at Pizzaro, please email us:{" "}
                              <a href="mailto:contact@yourstore.com">
                                contact@yourstore.com
                              </a>
                            </p>
                          </div>
                        </div> */}
                      <div class="footer-social-icons contact-page-social-icons">
                      <h3>Follow Us</h3>
                        <ul class="social-icons list-unstyled">
                          <li>
                            <a
                              class="fa fa-whatsapp"
                              href={page.whatsappLink}
                            > <span className="contact-social-icon-label">Whatsapp</span></a>
                          </li>
                          <li>
                            <a class="fa fa-spoon" href={page.zomatoLink}><span style={{marginLeft: '1.12rem'}}className="contact-social-icon-label">Zomato</span></a>
                          </li>
                          {/*<li>
              <a class="fa fa-twitter" href="#"></a>
            </li> */}
                          <li>
                            <a
                              class="fa fa-instagram"
                              href={page.instagramLink}
                            ><span className="contact-social-icon-label">Instagram</span></a>
                          </li>
                          {/* <li>
              <a class="fa fa-youtube" href="#"></a>
            </li>
            <li>
              <a class="fa fa-dribbble" href="#"></a>
            </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            {/* </div> */}
          </div>
        </div>
      </body>
    </Layout>
  )
}

export default ContactPageTemplate

export const pageQuery = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { id: { eq: "contact" } }) {
      frontmatter {
        id
        whatsappLink
        whatsappNumber
        zomatoLink
        phoneNumber
        address
        instagramLink
      }
    }
  }
`
