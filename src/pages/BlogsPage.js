import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import Featured from '../components/featured';
import styled from 'styled-components';
import { mixins, Main } from '../styles';

const MainContainer = styled(Main)`
  ${mixins.sidePadding};
  counter-reset: section;
`;

const BlogsPage = ({ data, location }) => {
  const info = {
    title: 'Blogs',
    source: 'Decentral Portal',
  };
  try {
    fetch('https://api.founderskit.org' + '/mixpanel', {
      //fetch('http://localhost:3000' + '/mixpanel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(info),
    });
  } catch (err) {
    //console.log(err);
  }

  return (
    <Layout location={location}>
      <MainContainer id="blogs">
        <Featured data={data.featured.edges} />
      </MainContainer>
    </Layout>
  );
};

BlogsPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object,
};

export default BlogsPage;

export const query = graphql`
  query blogsQuery {
    featured: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/featured/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            cover {
              childImageSharp {
                fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            tech
            github
            external
            show
          }
          html
        }
      }
    }
  }
`;
