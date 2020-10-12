import React, { Component } from 'react';
import { Link, graphql, useStaticQuery } from "gatsby"

const HomeCarouselV1 = (props) => {
   const data = useStaticQuery(graphql`
      query BannerQuery {
         markdownRemark(frontmatter: {id: {eq: "home"}}) {
            frontmatter {
              templateKey
              heroSlider {
                slide1 {
                  image
                  itemname_one
                  itemname_two
                }
                slide2 {
                  image
                  itemname_one
                  itemname_two
                }
                slide3 {
                  image
                  itemname_one
                  itemname_two
                }
                slide4 {
                  image
                  itemname_one
                  itemname_two
                }
              }
              id
            }
          }
      }
   `)
   const sliderInfo = data.markdownRemark.frontmatter.heroSlider
   console.log('banner data', data.markdownRemark.frontmatter.heroSlider)

  return (
<div class="home-v1-slider">
  <div id="owl-main" class="owl-carousel owl-inner-nav owl-ui-sm">
     <div class="item slider-1" style={{backgroundImage: `url(${sliderInfo.slide1.image})`}}>
        <div class="caption fadeIn">
           <div class="title">{sliderInfo.slide1.itemname_one}</div>
           <div class="sub-title">{sliderInfo.slide1.itemname_two}</div>
        </div>
     </div>
     <div class="item slider-1" style={{backgroundImage: `url(${sliderInfo.slide2.image})`}}>
     <div class="caption fadeIn">
           <div class="title">{sliderInfo.slide2.itemname_one}</div>
           <div class="sub-title">{sliderInfo.slide2.itemname_two}</div>
        </div>
     </div>
     <div class="item slider-1" style={{backgroundImage: `url(${sliderInfo.slide3.image})`}}>
     <div class="caption fadeIn">
           <div class="title">{sliderInfo.slide3.itemname_one}</div>
           <div class="sub-title">{sliderInfo.slide3.itemname_two}</div>
        </div>
     </div>
     <div class="item slider-1" style={{backgroundImage: `url(${sliderInfo.slide4.image})`}}>
     <div class="caption fadeIn">
           <div class="title">{sliderInfo.slide4.itemname_one}</div>
           <div class="sub-title">{sliderInfo.slide4.itemname_two}</div>
        </div>
     </div>
  </div>
</div>
 );
}

export default HomeCarouselV1;