import * as React from 'react'
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import UserForm from '../components/userform';

const MarketingUserForm = ({ data}) => {
  return (
    <UserForm data={data.userform.edges} />
  )
};

MarketingUserForm.propTypes = {
    data: PropTypes.object.isRequired,
    location: PropTypes.object,
  };


export default MarketingUserForm;


export const query = graphql`
  query aQuery {
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