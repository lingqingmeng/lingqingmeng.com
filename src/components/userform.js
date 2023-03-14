import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme, mixins, media } from '../styles';
const { fontSizes } = theme;
// import React, { useRef } from 'react';

const UserFormContainer = styled.main`
  position: relative;
  margin: 0 auto 100px;
  padding: 150px 0 0px 0;
  text-align: center;
  display:flex,
  flex-direction: column,
  align-item:center,
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
    this.userform = React.createRef();
    this.state = {};
  }

  handleInputChange(k, event) {
    this.setState({
      ...this.state,
      [k]: event.target.value,
    });
  }

  handleOnClick() {
    const uform = this.userform.current;

    const info = {
      firstname: uform['firstname'].value,
      lastname: uform['lastname'].value,
      email: uform['email'].value,
      company: uform['company'].value,
      industry: uform['industry'].value,
    };

    fetch(`https://api.founderskit.org' + '/marketing`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(info),
    })
      .then(response => response.json())
      .then(alert(`Thank you for contacting us, you will receive an email soon`))
      .catch(error => console.error(error));
  }

  render() {
    const { data } = this.props;
    const { frontmatter } = data[0].node;
    const { title } = frontmatter;
    // const { title, firstname, lastname, email, company, industry } = frontmatter;

    const info = {
      title: 'User visited free marketing page',
      source: 'Decentral Portal',
    };

    const contact_description = {
      width: '80%',
      'margin-left': '10%',
      'margin-top': '25px',
      'margin-bottom': '60px',
    };

    const userform_cont = {
      width: '80%',
      'margin-left': '10%',
      display: 'flex',
      'margin-top': '0px',
      background: '#2b2824',
    };

    const form_container = {
      width: '65%',
      display: 'flex',
    };

    const Learnaboutcont = {
      width: '35%',
      height: '100%',
      'text-align': 'Left',
      display: 'flex',
      padding: '100px 50px',
      'flex-direction': 'column',
      'justify-content': 'center',
      'border-left': '2px solid red ',
    };
    const learnabout_subheads = {
      'margin-left': '15px',
      'list-style': '',
    };

    const input_contains = {
      width: '100%',
      'margin-top': '80px',
    };
    const input_sub_container = {
      width: '100%',
      display: 'flex',
      'flex-direction': 'column',
      'justify-content': 'center',
    };
    const input_arrange = {
      width: '60%',
      height: '100%',
      'margin-left': '10%',
      margin: '0.4em',
      marginLeft: '0',
      marginRight: '0px',
      background: 'DarkSlateGrey',
      borderRadius: '10px',
      border: 'none',
      padding: '15px 20px',
      textAlign: 'center',
    };

    const formbtns = {
      'margin-top': '15px',
    };

    const userbody = {
      // 'position':'absolute',
      // 'margin-top':'0'
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
      <div style={userbody}>
        <UserFormContainer id="userform" ref={el => (this.userform = el)}>
          <Title>{title}</Title>
          <h5 style={contact_description}>
            Startups need cashflow more than ever. They need to manage their back office more
            effectively. Easier said than done. The status quo is that startups often get buried in
            the upkeep. They cannot scale nor delegate quickly enough to reach operational
            scalability.
          </h5>

          <h4>Download this One pager</h4>
          <br />

          <div style={userform_cont}>
            <div style={form_container}>
              <form ref={this.userform} style={input_contains}>
                <div style={input_sub_container}>
                  <label>
                    <input
                      style={input_arrange}
                      defaultValue=""
                      type="text"
                      onChange={e => this.handleInputChange('firstname', e)}
                      name={'firstname'}
                      placeholder="firstname"
                    />
                  </label>
                </div>

                <div style={input_sub_container}>
                  <label>
                    <input
                      style={input_arrange}
                      defaultValue=""
                      type="text"
                      onChange={e => this.handleInputChange('lastname', e)}
                      name={'lastname'}
                      placeholder="lastname"
                    />
                  </label>
                </div>

                <div style={input_sub_container}>
                  <label>
                    <input
                      style={input_arrange}
                      defaultValue=""
                      type="text"
                      onChange={e => this.handleInputChange('company', e)}
                      name={'company'}
                      placeholder="company name"
                    />
                  </label>
                </div>

                <div style={input_sub_container}>
                  <label>
                    <input
                      style={input_arrange}
                      defaultValue=""
                      type="text"
                      onChange={e => this.handleInputChange('email', e)}
                      name={'email'}
                      placeholder="email"
                    />
                  </label>
                </div>

                <div style={input_sub_container}>
                  <label>
                    <input
                      style={input_arrange}
                      defaultValue=""
                      type="text"
                      onChange={e => this.handleInputChange('industry', e)}
                      name={'industry'}
                      placeholder="industry"
                    />
                  </label>
                </div>

                <div style={formbtns}>
                  <ButtonLink
                    onClick={e => this.handleOnClick(e)}
                    href="#"
                    rel="nofollow noopener noreferrer">
                    Access our One Pager!
                  </ButtonLink>
                </div>
              </form>
            </div>

            <div style={Learnaboutcont}>
              <h1>Learn About</h1>
              <h5 style={learnabout_subheads}># How to calculate options</h5>
              <h5 style={learnabout_subheads}>
                # How to find product market fit with the lowest possible budget
              </h5>
              <h5 style={learnabout_subheads}>
                # How these methods have been used by industry incumbents and have been hid from the
                general public
              </h5>
            </div>
          </div>
        </UserFormContainer>
      </div>
    );
  }
}

export default UserForm;
