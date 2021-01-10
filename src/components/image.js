import React from "react"
import { StaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"
import styled from "styled-components"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

 //credit: https://stackoverflow.com/a/56508865
const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 270, maxHeight: 270) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) {
        return <div>Image not found</div>;
      }

      //const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
      return <StyledImg alt={props.alt} fluid={image.node.childImageSharp.fluid} />;
    }}
  />
);

const StyledImg=styled(Img)` 
  border-radius: 20px;
`

export default Image
