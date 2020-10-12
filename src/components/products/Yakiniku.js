import React, { useState, useEffect } from "react"
import ProductsGrid from "./ProductsGrid"

const Yakiniku = props => {
  return (
    <>
      <ul class="nav-tabs nav tab-child">
        <li class="nav-item active">
          <a class="nav-link" href="#tab-yaki-beef" data-toggle="tab">
            Beef
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#tab-yaki-tori" data-toggle="tab">
            Yakitori
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#tab-yaki-other" data-toggle="tab">
            Others
          </a>
        </li>
      </ul>

      <div class="tab-content">
        <ProductsGrid id="tab-yaki-beef" active={true} products={props.products.filter(e => e.node.frontmatter.tag === "tab-yaki-beef")}/>
        <ProductsGrid id="tab-yaki-tori" products={props.products.filter(e => e.node.frontmatter.tag === "tab-yaki-tori")}/>
        <ProductsGrid id="tab-yaki-other" products={props.products.filter(e => e.node.frontmatter.tag === "tab-yaki-other")}/>
      </div>
    </>
  )
}

export default Yakiniku
