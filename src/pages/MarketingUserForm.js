import * as React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Contact from '../components/contact';
import UserForm from '../components/userform';
import styled from 'styled-components';
import Layout from '../components/layout';
import { mixins, Main, Nav, theme } from '../styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
const { colors_option_b, fontSizes, fonts } = theme;
const MainContainer = styled(Main)`
  ${mixins.sidePadding};
  counter-reset: section;
`;

const Navbar = styled(Nav)`
  ${mixins.flexBetween};
  font-family: ${fonts.SFMono};
  color: ${colors_option_b.lightestSlate};
  counter-reset: item 0;
  position: relative;
  z-index: 12;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavList = styled.ol`
  div {
    ${mixins.flexBetween};
  }
`;

const ButtonLink = styled.a`
  ${mixins.smallButton};
  margin-left: 10px;
  font-size: ${fontSizes.smallish};
`;

import { nav } from '../config';

const MarketingUserForm = ({ data, location }) => {
  return (
    <Layout location={location}>
      <div>A child</div>
      <Navbar>
        <NavLinks>
          <TransitionGroup>
            {
              <CSSTransition classNames="fadedown" timeout={3000}>
                <div style={{ transitionDelay: `600ms` }}>
                  <ButtonLink
                    href={`https://google.com`}
                    target="_blank"
                    rel="nofollow noopener noreferrer">
                    Relations
                  </ButtonLink>
                </div>
              </CSSTransition>
            }
          </TransitionGroup>
        </NavLinks>
      </Navbar>
      <MainContainer id="resources">
        <Contact data={data.contact.edges} />
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
