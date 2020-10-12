import React from "react"
import PropTypes from "prop-types"
import { Helmet } from 'react-helmet'
import { withPrefix, Link } from "gatsby"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <link rel="stylesheet" type="text/css" href={"/assets/css/bootstrap.min.css"} media="all" />
        <link rel="stylesheet" type="text/css" href={"/assets/css/font-awesome.min.css"} media="all" />
        <link rel="stylesheet" type="text/css" href={"/assets/css/animate.min.css"} media="all" />
        <link rel="stylesheet" type="text/css" href={"/assets/css/font-pizzaro.css"} media="all" />
        <link rel="stylesheet" type="text/css" href={"/assets/css/style.css"} media="all" />
        <link rel="stylesheet" type="text/css" href={"/assets/css/colors/red.css"} media="all" />
        <link rel="stylesheet" type="text/css" href={"/assets/css/jquery.mCustomScrollbar.min.css"} media="all" />
        <link rel="stylesheet" type="text/css" href="/assets/css/colors/red.css"></link>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800%7CYanone+Kaffeesatz:200,300,400,700" rel="stylesheet"/>
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
 
        <Helmet><script src={"/test.js"}/></Helmet>
        {/* <script src={"/assets/js/vendor/jquery-3.3.1.min.js"}/>
        <script src={"/assets/js/vendor/vendor.min.js"}/>
        <script src={"/assets/js/plugins/plugins.js"}/> */}
        <script type="text/javascript" src="/assets/js/jquery.min.js"></script>
        <script type="text/javascript" src="/assets/js/tether.min.js"></script>
        <script type="text/javascript" src="/assets/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="/assets/js/owl.carousel.min.js"></script>
        <script type="text/javascript" src="/assets/js/social.share.min.js"></script>
        <script type="text/javascript" src="/assets/js/jquery.mCustomScrollbar.concat.min.js"></script>
        <script type="text/javascript" src="/assets/js/jquery.instagramfeed.min.js"></script>
        {/* <script type="text/javascript" src="/assets/js/scripts.min.js"></script> */}

        {/* <script
  dangerouslySetInnerHTML={{
    __html: `
            var name = 'world';
            console.log('Hello ' + name);
        `,
  }}
/> */}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
