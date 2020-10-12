import React, { Component } from 'react';

const ProductListitem = (props) => {
  return (
    <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="single-product-item text-center">
            <div class="products-images">
                {/* <a href="#" class="product-thumbnail"> */}
                <a href="#" class="product-thumbnail" data-toggle="modal" data-target="#prodect-modal"
                  onClick={props.onClick}
                >
                    <img src={props.imageSrc} class="img-fluid" alt="Product Images"/>
                    {props.redLabel != "" && <span class="ribbon onsale">
                      {props.redLabel}
                    </span>}
                    {props.blackLabel != "" && <span class="ribbon out-of-stock">
                      {props.blackLabel}
                    </span>}
                </a>
                {/* <div class="product-actions">
                    <a href="#" data-toggle="modal" data-target="#prodect-modal"><i class="p-icon icon-plus"></i><span class="tool-tip">Quick View</span></a>
                    <a href="#"><i class="p-icon icon-bag2"></i> <span class="tool-tip">Add to cart</span></a>
                    <a href="#"><i class="p-icon icon-heart"></i> <span class="tool-tip">Browse Wishlist</span></a>
                </div> */}
            </div>
            <div class="product-content">
                <h6 class="prodect-title"><a href="#">{props.name}</a></h6>
                <div class="prodect-price">
                    <span class="new-price">{props.price}</span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ProductListitem;