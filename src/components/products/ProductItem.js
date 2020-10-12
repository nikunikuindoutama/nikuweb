import React, { Component } from "react"

const ProductItem = props => {
  let p = props.product;

  return (
    <li class="product">
      <div class="product-outer">
        <div class="product-inner">
          <div class="product-image-wrapper">
            <a
              href={"#"}
              class="woocommerce-LoopProduct-link"
            >
              <img
                src={p.thumbnail}
                class="img-responsive"
                alt=""
              />
              {p.redLabel && <span className="black-label">{p.redLabel}</span>}
            </a>
          </div>
          <div class="product-content-wrapper">
            <a
              href={"#"}
              class="woocommerce-LoopProduct-link"
            >
              <h3>{p.name}</h3>
              <div itemprop="description">
                <p style={{ maxHeight: "none" }}>
                 {p.description}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </li>
  )
}

export default ProductItem
