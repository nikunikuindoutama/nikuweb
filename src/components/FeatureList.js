import React, { useState, useEffect } from "react"

const FeatureList = props => {
  return (
    <div class="features-list">
      <div class="row">
        <div class="feature col-xs-12 col-sm-3">
          <div class="feature-icon">
            <i class="po po-best-quality"></i>
          </div>
          <div class="feature-label">
            <h4>Best Quality</h4>
            <p>
              We source the best ingredients
              <br />
              fresh from the best suppliers.
            </p>
          </div>
        </div>
        <div class="feature col-xs-12 col-sm-3">
          <div class="feature-icon">
            <i class="po po-on-time"></i>
          </div>
          <div class="feature-label">
            <h4>On Time</h4>
            <p>
              We believe that your time is valuable so we strive to serve you
              timely.
            </p>
          </div>
        </div>
        <div class="feature col-xs-12 col-sm-3">
          <div class="feature-icon">
            <i class="po po-master-chef"></i>
          </div>
          <div class="feature-label">
            <h4>MasterChefs</h4>
            <p>
              With great people from our kitchen, we aim to serve you delicious
              food everyday.
            </p>
          </div>
        </div>
        <div class="feature col-xs-12 col-sm-3">
          <div class="feature-icon">
            <i class="po po-ready-delivery"></i>
          </div>
          <div class="feature-label">
            <h4>Variety</h4>
            <p>We offer a variety of food to satisfy your hunger.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureList
