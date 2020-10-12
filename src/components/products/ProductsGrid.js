import React, { Component } from "react"
import ProductItem from "./ProductItem"

const ProductsGrid = props => {
  console.log('frid ' + props.id, props.products)

  // Query products based on id

  return (
    <div class={"tab-pane" + (props.active ? ' active' : '')} id={props.id}>
      <div class="section-products">
        <div class="woocommerce columns-3">
          <div class="columns-3" style={{marginBottom: "2rem"}}>
            {props.products.length > 0 ?
            <ul class="products">
            {props.products.map((product, index) => {
                product = product.node.frontmatter;
                console.log(product, product.blackLabel)
                return (
                  <ProductItem
                    key={index}
                    product={product}
                  />
                )
            })}
              {/* <ProductItem
                label={"Shaburi Seto " + props.id}
                description={"Extra-virgin olive oil, garlic, mozzarella, mushrooms and olivesa."}
                url={"#"}
                imgSrc={"assets/images/products/p1.jpg"}
              />
              <ProductItem
                label={"Shaburi Seto" + props.id}
                description={"Extra-virgin olive oil, garlic, mozzarella, mushrooms and olivesb."}
                url={"#"}
                imgSrc={"assets/images/products/p1.jpg"}
              />
              <ProductItem
                label={"Shaburi Seto" + props.id}
                description={"Extra-virgin olive oil, garlic, mozzarella, mushrooms and olivesc."}
                url={"#"}
                imgSrc={"assets/images/products/p1.jpg"}
              />
              <ProductItem
                label={"Shaburi Seto" + props.id}
                description={"Extra-virgin olive oil, garlic, mozzarella, mushrooms and olivesd."}
                url={"#"}
                imgSrc={"assets/images/products/p1.jpg"}
              />
              <ProductItem
                label={"Shaburi Seto" + props.id}
                description={"Extra-virgin olive oil, garlic, mozzarella, mushrooms and olivese."}
                url={"#"}
                imgSrc={"assets/images/products/p1.jpg"}
              />
              <ProductItem
                label={"Shaburi Seto" + props.id}
                description={"Extra-virgin olive oil, garlic, mozzarella, mushrooms and olivesf."}
                url={"#"}
                imgSrc={"assets/images/products/p1.jpg"}
              /> */}
            </ul> :
            <p style={{textAlign: 'center'}}>No items available</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsGrid
