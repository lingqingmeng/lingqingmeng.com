import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import ScrollReveal from 'scrollreveal';
import styled from 'styled-components';
import { mixins, media, Section } from '../styles';

const ContactContainer = styled(Section)`
  max-width: 900px;
  margin: 0 auto 150px;

  body{
    line-height: 1.5;
  }

  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  ul {
    list-style: none;
  }

  a {
    ${mixins.inlineLink};
  }

  footer {
    background-color: #24262b;
    padding: 70px 0;  
  }
  

  .container {
    max-width: 1170px;
    margin:auto;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
  }

  .footer-col{
    width: 25%
    padding: 0 15px;
  }

  .footer-col h4{
    font-size: 18px;
    color: #ffffff;
    text-transform: capitalize;
    margin-bottom: 35px;
    font-weight: 500;
    position: relative;
  }

  .footer-col h4::before{
    content: '';
    position: absolute;
    left:0;
    bottom: -10px;
    background-color: #e91e63;
    height: 2px;
    box-sizing: border-box;
    width: 70px;
  }
  .footer-col ul li:not(:last-child){
    margin-bottom: 10px;
  }
  
  
  .footer-col ul li a{
    width: 300px;
    font-size: 18px;
    text-transform: capitalize;
    color: #ffffff;
    text-decoration: none;
    font-weight: 300;
    color: #bbbbbb;
    display: block;
    transition: all 0.3s ease;
  }
  .footer-col ul li a:hover{
    color: #ffffff;
    padding-left: 8px;
  }


  .footer-col .social-links a{
    display: inline-block;
    height: 40px;
    width: 40px;
    background-color: rgba(255,255,255,0.2);
    margin:0 10px 10px 0;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: #ffffff;
    transition: all 0.5s ease;
  }
  .footer-col .social-links a:hover{
    color: #24262b;
    background-color: #ffffff;
  }

  /*responsive*/
  @media(max-width: 767px){
    .footer-col{
      width: 50%;
      margin-bottom: 30px;
    }
  }

  @media(max-width: 574px){
    .footer-col{
      width: 100%;
  }
  }


`;

const Title = styled.h4`
  margin: 0 0 20px;
  font-size: 60px;
  ${media.desktop`font-size: 50px;`};
  ${media.tablet`font-size: 40px;`};
`;

class Contact extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  // componentDidMount() {
  //   ScrollReveal().reveal(this.contact, srConfig());
  // }

  render() {
    const { data } = this.props;
    const { frontmatter } = data[0].node;
    const { title } = frontmatter;

    return (
      <ContactContainer id="contact" ref={el => (this.contact = el)}>
        <Title>{title}</Title>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="footer-col">
                <h4>build</h4>
                <ul>
                  <li>
                    <a href="https://luciaprotocol.com">solutions</a>
                  </li>
                  <li>
                    <a href="https://luciaprotocol.com">developer docs</a>
                  </li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>company</h4>
                <ul>
                  <li>
                    <a href="https://luciaprotocol.com">about us</a>
                  </li>
                  <li>
                    <a href="https://luciaprotocol.com">careers</a>
                  </li>
                  <li>
                    <a href="https://luciaprotocol.com">news</a>
                  </li>
                  <li>
                    <a href="https://luciaprotocol.com">brand kit</a>
                  </li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Discover</h4>
                <ul>
                  <li>
                    <a href="https://luciaprotocol.com">Ecosystem</a>
                  </li>
                  <li>
                    <a href="https://luciaprotocol.com">Blog</a>
                  </li>
                  <li>
                    <a href="https://luciaprotocol.com">Events</a>
                  </li>
                  <li>
                    <a href="https://luciaprotocol.com">payment options</a>
                  </li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Socials</h4>
                <ul>
                  <li>
                    <a href="https://luciaprotocol.com">discord</a>
                  </li>
                  <li>
                    <a href="https://luciaprotocol.com">telegram</a>
                  </li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>misc</h4>
                <ul>
                  <li>
                    <a href="https://luciaprotocol.com">privacy</a>
                  </li>
                  <li>
                    <a href="https://luciaprotocol.com">contributor terms of service</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </ContactContainer>
    );
  }
}

export default Contact;
