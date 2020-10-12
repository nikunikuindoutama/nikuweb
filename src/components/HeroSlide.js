import React, { Component } from "react"
import { Link, graphql } from "gatsby"

const HeroSlide = (props) => {
  return (
    <div class="single-hero-slider-7">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="hero-content-wrap">
              <div class="hero-text-7 mt-lg-5">
                <h6 class="mb-20">{props.brandName}</h6>
                <h1>
                  {props.itemNameOne} <br /> {props.itemNameTwo}
                </h1>

                <div class="button-box section-space--mt_60">
                  {/* <a
                    href="#"
                    class="text-btn-normal font-weight--reguler font-lg-p"
                  >
                    Discover now
                  </a> */}
                </div>
              </div>
              <div class="inner-images">
                <div class="image-one">
                  <img
                    src={props.imageSrc}
                    class="img-fluid"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSlide
