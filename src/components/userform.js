import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme, mixins, media } from '../styles';
const { colors_option_b, fontSizes } = theme;

const UserFormContainer = styled.main`
  position: relative;
  margin: 0 auto 100px;
  padding: 150px 0;
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

const ButtonLink = styled.a`
  ${mixins.smallButton};
  margin-left: 10px;
  font-size: ${fontSizes.smallish};
`;

class UserForm extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleInputChange(k, event) {
    this.setState({
      ...this.state,
      [k]: event.target.value,
    });
  }

  handleOnClick() {}

  render() {
    const { data } = this.props;
    const { frontmatter } = data[0].node;
    const { title, firstname, lastname, email, company, industry } = frontmatter;

    return (
      <UserFormContainer id="userform" ref={el => (this.userform = el)}>
        <Title>{title}</Title>
        <h3>
          {' '}
          Startups need cashflow more than ever. They need to manage their back office more
          effectively. Easier said than done.{' '}
        </h3>
        <h4>
          {' '}
          The status quo is that startups often get buried in the upkeep. They cannot scale nor
          delegate quickly enough to reach operational scalability{' '}
        </h4>
        <h4>Download this One pager to learn about:</h4>
        <br />
        <h5>How to calculate options</h5>
        <h5>How to find product market fit with the lowest possible budget</h5>
        <h5>
          How these methods have been used by industry incumbents and have been hid from the general
          public
        </h5>

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
            <ButtonLink onClick={e => this.handleOnClick(e)} rel="nofollow noopener noreferrer">
              Access our One Pager!
            </ButtonLink>
          </div>
        </form>
      </UserFormContainer>
    );
  }
}

export default UserForm;
