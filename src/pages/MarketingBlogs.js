import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import Featured from '../components/featured';
import Projects from '../components/projects';
import styled from 'styled-components';
import { mixins, Main } from '../styles';

const MainContainer = styled(Main)`
  ${mixins.sidePadding};
  counter-reset: section;
`;

const MarketingBlogs = ({ data, location }) => {
  const info = {
    title: 'Decentral Home Page',
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
        <Projects data={data.projects.edges} location={location} />
      </MainContainer>
    </Layout>
  );
};

MarketingBlogs.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object,
};

export default MarketingBlogs;

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
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            image
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
