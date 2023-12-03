import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { srConfig } from '../config';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '../styles';
const { colors_option_b, fontSizes, fonts } = theme;

const AboutContainer = styled(Section)`
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

const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  margin-top: 20px;
`;
const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smallish};
  color: ${colors_option_b.white};
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${colors_option_b.lightestSlate};
    font-size: ${fontSizes.small};
    line-height: 12px;
  }
`;
const PicContainer = styled.div`
  position: relative;
  width: 40%;
  max-width: 300px;
  margin-left: 60px;
  ${media.tablet`margin: 60px auto 0;`};
  ${media.phablet`width: 70%;`};
`;
const Avatar = styled(Img)`
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1);
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
`;
const AvatarContainer = styled.div`
  width: 100%;
  position: relative;
  border-radius: ${theme.borderRadius};
  background-color: ${colors_option_b.lightestSlate};
  margin-left: -20px;
  &:hover,
  &:focus {
    background: transparent;
    &:after {
      top: 15px;
      left: 15px;
    }
    ${Avatar} {
      filter: none;
      mix-blend-mode: normal;
    }
  }
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${theme.borderRadius};
    transition: ${theme.transition};
  }
  &:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors_option_b.navy};
    mix-blend-mode: screen;
  }
  &:after {
    border: 2px solid ${colors_option_b.lightestSlate};
    top: 20px;
    left: 20px;
    z-index: -1;
  }
`;

const EmailLink = styled.a`
  ${mixins.bigButton};
  font-size: ${fontSizes.smallish};
  margin-top: 50px;
`;

class About extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  componentDidMount() {
    import('scrollreveal').then(({ default: ScrollReveal }) => {
      ScrollReveal().reveal(this.about, srConfig());
    });
  }

  render() {
    const { data } = this.props;
    const { frontmatter, html } = data[0].node;
    const { title, skills, avatar } = frontmatter;

    return (
      <AboutContainer id="about" ref={el => (this.about = el)}>
        <Heading>{title}</Heading>
        <FlexContainer>
          <ContentContainer>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <SkillsContainer>
              {skills && skills.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
            </SkillsContainer>
          </ContentContainer>
          <PicContainer>
            <AvatarContainer>
              <Avatar fluid={avatar.childImageSharp.fluid} alt="Avatar" />
            </AvatarContainer>
          </PicContainer>
        </FlexContainer>
        <FlexContainer>
          <div>
            Do you feel overwhelmed with the lack of cash when launching a startup? Are you fed up
            being stuck in your startup not getting the revenue numbers you need to close your next
            round? This is the holy grail of finding product market fit: A must read for any startup
          </div>
        </FlexContainer>
        <div style={{ transitionDelay: '2500ms' }}>
          <EmailLink href={`/MarketingUserForm`}>Access the One-Pager</EmailLink>
        </div>
      </AboutContainer>
    );
  }
}

export default About;
