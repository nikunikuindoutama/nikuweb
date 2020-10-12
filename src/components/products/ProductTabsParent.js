import React, { Component } from "react"
import Shabu from "./Shabu"
import Yakiniku from "./Yakiniku"
import ProductsGrid from "./ProductsGrid"

const ProductTabsParent = props => {
  return (
    <div class="stretch-full-width products-with-gallery-tabs section-tabs product-tabs-parent" id="menu-section">
      <div class="section-tabs">
        <ul class="nav nav-tabs pizzaro-nav-tabs">
          <li class="nav-item active">
            <a class="nav-link active" href="#tab-parent-shabu" data-toggle="tab">
            <img width="45" style={{transform: "translateX(22px)", marginBottom: "3px"}} src="/assets/images/menu-icons/shabu-menu-tab-icon.png"></img>Shabu-Shabu
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#tab-parent-yaki"
              data-toggle="tab"
            >
              <img width="45" style={{transform: "translateX(6px)", marginBottom: "3px"}} src="/assets/images/menu-icons/yakiniku-menu-tab-icon.png"></img>Yakiniku
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#tab-parent-agemono" data-toggle="tab">
            <img width="45" style={{transform: "translateX(10px)", marginBottom: "3px"}} src="/assets/images/menu-icons/agemono-menu-tab-icon.png"></img>Agemono
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#tab-parent-ala-carte" data-toggle="tab">
            <img width="45" style={{transform: "translateX(12px)", marginBottom: "3px"}} src="/assets/images/menu-icons/ala-carte-menu-tab-icon.png"></img>Ala Carte
            </a>
          </li>
        </ul>

        <div class="tab-content">
          <div class="tab-pane child active" id="tab-parent-shabu">
            <Shabu products={props.products}/>
          </div>
          <div class="tab-pane child" id="tab-parent-yaki">
            <Yakiniku products={props.products} />
          </div>
          <ProductsGrid id="tab-parent-agemono" products={props.products.filter(e => e.node.frontmatter.tag === "tab-parent-agemono")}/>
          <ProductsGrid id="tab-parent-ala-carte" products={props.products.filter(e => e.node.frontmatter.tag === "tab-parent-ala-carte")}/>
        </div>
      </div>
    </div>
  )
}

export default ProductTabsParent
