import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import Hero from '../components/hero';
import About from '../components/about';
import Product from '../components/product';
import Projects from '../components/projects';
import Team from '../components/team';
import Contact from '../components/contact';
import styled from 'styled-components';
import { mixins, Main } from '../styles';

const MainContainer = styled(Main)`
  ${mixins.sidePadding};
  counter-reset: section;
`;

const IndexPage = ({ data, location }) => {
  // try {
  //   fetch('https://api.founderskit.org' + '/mixpanel', {
  //     //fetch('http://localhost:3000' + '/mixpanel', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     body: new URLSearchParams(info),
  //   });
  // } catch (err) {
  //   //console.log(err);
  // }

  return (
    <Layout location={location}>
      <MainContainer id="content">
        <Hero data={data.hero.edges} />
        <About data={data.about.edges} />
        <Product data={data.product.edges} />
        <Projects data={data.projects.edges} location={location} />
        <Team data={data.team.edges} />
        <Contact data={data.contact.edges} />
      </MainContainer>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object,
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            title
            name
            subtitle
            contactText
          }
          html
        }
      }
    }
    about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            integrations
          }
          html
        }
      }
    }
    product: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/product/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            company
            location
            range
            url
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
    team: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/team/" } }) {
      edges {
        node {
          frontmatter {
            name
            role
            show
            url
            cover {
              childImageSharp {
                fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          html
        }
      }
    }
    contact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contact/" } }) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
    userform: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/userform/" } }) {
      edges {
        node {
          frontmatter {
            firstname
            lastname
            company
            email
            industry
          }
          html
        }
      }
    }
  }
`;
