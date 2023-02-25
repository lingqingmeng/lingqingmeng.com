import * as React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import UserForm from '../components/userform';
import styled from 'styled-components';
import Layout from '../components/layout';
import { mixins, Main } from '../styles';
const MainContainer = styled(Main)`
  ${mixins.sidePadding};
  counter-reset: section;
`;

const MarketingUserForm = ({ data, location }) => {
  return (
    <Layout location={location}>
      <MainContainer id="resources">
        <UserForm data={data.userform.edges} location={location} />
      </MainContainer>
    </Layout>
  );
};

MarketingUserForm.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object,
};

export default MarketingUserForm;

export const query = graphql`
  query aQuery {
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
            title
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
