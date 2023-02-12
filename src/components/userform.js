import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import { srConfig } from '../config';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading, Button } from '../styles';
const { colors_option_b } = theme;

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

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: DarkSlateGrey;
  color: ${colors_option_b.lightestSlate};
  border: 2px solid palevioletred;
  border-radius: 3px;
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

  handleInputChange(k, event) {
    this.setState = {
      [k]: event.target.value,
    };
  }

  render() {
    const { data, location } = this.props;
    const { frontmatter, html } = data[0].node;
    const { title, firstname, lastname, email, company, industry } = frontmatter;

    return (
      <UserFormContainer id="userform" ref={el => (this.userform = el)}>
        <Title>{title}</Title>

        <form method="post" action="#TODO">
          <div>
            <label>
              {firstname}
              <Input
                defaultValue=""
                type="text"
                onChange={e => this.handleInputChange('firstname', e)}
              />
            </label>
          </div>

          <div>
            <label>
              {lastname}
              <Input
                defaultValue=""
                type="text"
                onChange={e => this.handleInputChange('lastname', e)}
              />
            </label>
          </div>

          <div>
            <label>
              {company}
              <Input
                defaultValue=""
                type="text"
                onChange={e => this.handleInputChange('company', e)}
              />
            </label>
          </div>

          <div>
            <label>
              {email}
              <Input
                defaultValue=""
                type="text"
                onChange={e => this.handleInputChange('email', e)}
              />
            </label>
          </div>

          <div>
            <label>
              {industry}
              <Input
                defaultValue=""
                type="text"
                onChange={e => this.handleInputChange('industry', e)}
              />
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
