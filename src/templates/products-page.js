import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import unified from 'unified'
import markdown from 'remark-parse'
import html from 'remark-html'
import Layout from "../components/layout"
import ProductListitem from "../components/ProductListItem"
import ProductModal from "../components/ProductModal"

const ProductsPageTemplate = ({ data, pageContext, location }) => {
  const [modal, setModal] = useState({
    name: 'x',
    price: '',
    isInStock: false,
    descShort: '',
    descAll: '',
    tag:'',
    thumbnail: '',
    images: []
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const products = data.allMarkdownRemark.edges
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  console.log('products', products)

  useEffect(() => {
    console.log('testomani', window.$('#prodect-modal'))
  })

  return (
    <Layout location={location} title={siteTitle}>
      <div class="breadcrumb-area">
          <div class="container">
              <div class="row">
                  <div class="col-12">
                      <div class="row breadcrumb_box  align-items-center">
                          <div class="col-lg-6 col-md-6 col-sm-6 text-center text-sm-left">
                              <h2 class="breadcrumb-title">Products</h2>
                          </div>
                          <div class="col-lg-6  col-md-6 col-sm-6">
                              <ul class="breadcrumb-list text-center text-sm-right">
                                  <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                                  <li class="breadcrumb-item active">Products</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="site-wrapper-reveal border-bottom">

      <div class="product-wrapper section-space--ptb_120">
          <div class="container">

              <div class="tab-content">
                  <div class="tab-pane fade show active" id="tab_columns_02">
                      <div class="row">
                          {products.map((product, index) => {
                            product = product.node.frontmatter;
                            console.log(product, product.blackLabel)
                            return (
                              <ProductListitem
                                name={product.name}
                                price={product.price}
                                redLabel={product.redLabel}
                                blackLabel={product.blackLabel}
                                imageSrc={product.thumbnail}
                                key={index}
                                onClick={async () => {
                                  let descShort = await unified().use(markdown).use(html).process(product.description.substring(0, 400) + '...')
                                  let descAll = await unified().use(markdown).use(html).process(product.description)

                                  setModal({
                                    name: product.name,
                                    price: product.price,
                                    isInStock: product.isInStock,
                                    descShort: String(descShort),
                                    descAll: String(descAll),
                                    tag: product.tag,
                                    images: product.images,
                                    thumbnail: product.thumbnail
                                  })
                                  setIsModalOpen(true)
                                }}
                              />
                            )
                          })}
                          {/* <ProductListitem
                            name="Orochimaru 120mm"
                            price="Rp. 23.000.000"
                            redLabel="-14%"
                            imageSrc="/assets/images/cms/products-all.jpg"
                          />
                          <ProductListitem
                            name="Orochimaru 120mm"
                            price="Rp. 23.000.000"
                            blackLabel="Out of Stock"
                            imageSrc="/assets/images/cms/products-all.jpg"
                          /> */}
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
    <ProductModal
      name={modal.name}
      price={modal.price}
      isInStock={modal.isInStock}
      descShort={modal.descShort}
      descAll={modal.descAll}
      tag={modal.tag}
      images={modal.images}
      thumbnail={modal.thumbnail}
      isOpen={isModalOpen}
      toggle={() => setIsModalOpen(!isModalOpen)}
    />
    {/* <div class="product-modal-box modal fade" id="prodect-modal" tabindex="-1" role="dialog">
      <div class="modal-dialog  modal-dialog-centered" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span class="icon-cross" aria-hidden="true"></span></button>
              </div>
              <div class="modal-body container">
                  <div class="row align-items-center">
                      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                          <div class="quickview-product-active mr-lg-5">
                              <a href="#" class="images">
                                  <img src="/assets/images/cms/products-all.jpg" class="img-fluid" alt=""/>
                              </a>
                              <a href="#" class="images">
                                  <img src="/assets/images/cms/products-all.jpg" class="img-fluid" alt=""/>
                              </a>
                              <a href="#" class="images">
                                  <img src="/assets/images/cms/products-all.jpg" class="img-fluid" alt=""/>
                              </a>
                          </div>

                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                          <div class="product-details-content quickview-content-wrap ">

                              <h5 class="font-weight--reguler mb-20">Shinjuku Knife 13mm</h5>
                              <h3 class="price">Rp. 1.998.000</h3>

                              <div class="stock in-stock mt-10">
                                  <p>Available: <span>In stock</span></p>
                              </div>

                              <div class="quickview-peragraph mt-10">
                                  <p>At vero accusamus et iusto odio dignissimos blanditiis praesntiums dolores molest.</p>
                              </div>

                              <div class="product_meta mt-30">
                                <div class="tagged_as item_meta">
                                    <span class="label mr-1">Tag: </span><a href="#">Pottery</a>
                                </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div> */}
    </Layout>
  )
}

export default ProductsPageTemplate

export const pageQuery = graphql`
  query ProductsListQuery {
    site {
      siteMetadata {
        title
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
