import React, { useState, useEffect } from "react"
import ProductsGrid from "./ProductsGrid"

const Shabu = props => {
  return (
    <>
      <ul class="nav-tabs nav tab-child">
        <li class="nav-item active">
          <a class="nav-link" href="#tab-shabu-beef" data-toggle="tab">
            Beef
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#tab-shabu-soup" data-toggle="tab">
            Soup
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#tab-shabu-veggie-fish-cake" data-toggle="tab">
            <span>Vegetables & Fish Cake</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#tab-shabu-sauce" data-toggle="tab">
            <span>Sauce</span>
          </a>
        </li>
      </ul>

      <div class="tab-content">
        <ProductsGrid id="tab-shabu-beef" active={true} products={props.products.filter(e => e.node.frontmatter.tag === "tab-shabu-beef")}/>
        <ProductsGrid id="tab-shabu-soup" products={props.products.filter(e => e.node.frontmatter.tag === "tab-shabu-soup")}/>
        <ProductsGrid id="tab-shabu-veggie-fish-cake" products={props.products.filter(e => e.node.frontmatter.tag === "tab-shabu-veggie-fish-cake")}/>
        <ProductsGrid id="tab-shabu-sauce" products={props.products.filter(e => e.node.frontmatter.tag === "tab-shabu-sauce")}/>
      </div>
    </>
  )
}

export default Shabu
