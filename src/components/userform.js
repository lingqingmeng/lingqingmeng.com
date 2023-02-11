import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { srConfig } from '../config';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading, Button } from '../styles';

const UserFormContainer = styled.main`
  position: relative;
`;

const FlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  ${media.tablet`display: block;`};
`;
const ContentContainer = styled.div`
  width: 60%;
  max-width: 480px;
  ${media.tablet`width: 100%;`};
  a {
    ${mixins.inlineLink};
  }
`;

const Title = styled.h1`
  margin: 0 0 20px;
  font-size: 60px;
  ${media.desktop`font-size: 50px;`};
  ${media.tablet`font-size: 40px;`};
`;

const SendButton = styled(Button)``;

class InformationForm {}

class UserForm extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    const { frontmatter, html } = data[0].node;
    const { title, firstname, lastname, email, company, industry } = frontmatter;

    return (
      <UserFormContainer id="userform" ref={el => (this.userform = el)}>
        <Title>{title}</Title>

        <form method="post" action="#TODO">
          <div>
            <label>
              {firstname}
              <div>
                <input type="text" name="name" id="firstname" />
              </div>
            </label>
          </div>

          <div>
            <label>
              {lastname}
              <div>
                <input type="text" name="name" id="lastname" />
              </div>
            </label>
          </div>

          <div>
            <label>
              {company}
              <div>
                <input type="text" name="subject" id="subject" />
              </div>
            </label>
          </div>

          <div>
            <label>
              {email}
              <div>
                <input type="email" name="email" id="emailaddress" />
              </div>
            </label>
          </div>

          <div>
            <label>
              {industry}
              <div>
                <input type="text" name="subject" id="subject" />
              </div>
            </label>
          </div>

          <div>
            <SendButton>
              <button type="submit">Access our One-Pager!</button>
            </SendButton>
          </div>
        </form>
      </UserFormContainer>
    );
  }
}

export default UserForm;
