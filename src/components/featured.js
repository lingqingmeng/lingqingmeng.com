import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import Img from 'gatsby-image';
// import ScrollReveal from 'scrollreveal';
// import { srConfig } from '../config';
import { IconGithub, IconExternal } from './icons';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '../styles';
import { srConfig } from '../config';
const { colors_option_b, fontSizes, fonts } = theme;

const FeaturedContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;
const FeaturedGrid = styled.div`
  position: relative;
`;
const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  grid-column: 1 / 7;
  grid-row: 1 / -1;
  ${media.thone`
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
  `};
  ${media.phablet`padding: 30px 25px 20px;`};
`;
const FeaturedLabel = styled.h4`
  font-size: ${fontSizes.xsmall};
  font-weight: normal;
  color: ${colors_option_b.lightestSlate};
  font-family: ${fonts.SFMono};
  margin-top: 10px;
  padding-top: 0;
`;
const ProjectName = styled.h5`
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 20px;
  color: ${colors_option_b.lightestSlate};
  ${media.tablet`font-size: 24px;`};
  a {
    ${media.tablet`display: block;`};
  }
`;
const ProjectDescription = styled.div`
  background-color: ${colors_option_b.lightNavy};
  color: ${colors_option_b.lightSlate};
  padding: 25px;
  border-radius: ${theme.borderRadius};
  font-size: ${fontSizes.large};
  ${media.thone`
    background-color: transparent;
    padding: 20px 0;
  `};
  p {
    margin: 0;
  }
  a {
    ${mixins.inlineLink};
    color: ${colors_option_b.white};
  }
`;
const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 25px 0 10px;
  li {
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.smallish};
    color: ${colors_option_b.lightSlate};
    margin-right: ${theme.margin};
    margin-bottom: 7px;
    white-space: nowrap;
    &:last-of-type {
      margin-right: 0;
    }
    ${media.thone`
      color: ${colors_option_b.lightestSlate};
      margin-right: 10px;
    `};
  }
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
  a {
    padding: 10px;
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;
const Project = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  margin-bottom: 100px;
  ${media.thone`margin-bottom: 70px;`};
  &:last-of-type {
    margin-bottom: 0;
  }
  &:nth-of-type(odd) {
    ${ContentContainer} {
      grid-column: 7 / -1;
      text-align: left;
      ${media.thone`
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
      `};
      ${media.phablet`padding: 30px 25px 20px;`};
    }
    ${TechList} {
      justify-content: flex-end;
      li {
        margin-left: ${theme.margin};
        margin-right: 0;
      }
    }
    ${Links} {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
    }
  }
`;

class Featured extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.revealRefs = [];
  }

  componentDidMount() {
    import('scrollreveal').then(({ default: ScrollReveal }) => {
      ScrollReveal().reveal(this.featured, srConfig());
      this.revealRefs.forEach(ref => ScrollReveal().reveal(ref, srConfig()));
    });
  }

  render() {
    const { data } = this.props;
    const featuredProjects = data.filter(({ node }) => node.frontmatter.show === 'true');

    const info = {
      title: 'User visited blogs section',
      source: 'Decentral Portal',
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
      <FeaturedContainer id="projects">
        <Heading ref={el => (this.featured = el)}>Join the community</Heading>
        <FeaturedGrid>
          {featuredProjects &&
            featuredProjects.map(({ node }, i) => {
              const { frontmatter, html } = node;
              const { external, title, tech, github } = frontmatter;

              return (
                <Project key={i} ref={el => (this.revealRefs[i] = el)}>
                  <ContentContainer>
                    <FeaturedLabel>Feature</FeaturedLabel>
                    <ProjectName>
                      {external ? (
                        <a
                          href={external}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          aria-label="External Link">
                          {title}
                        </a>
                      ) : (
                        title
                      )}
                    </ProjectName>
                    <ProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
                    {tech && (
                      <TechList>
                        {tech.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </TechList>
                    )}
                    <Links>
                      {github && (
                        <a
                          href={github}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          aria-label="Github Link">
                          <IconGithub />
                        </a>
                      )}
                      {external && (
                        <a
                          href={external}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          aria-label="External Link">
                          <IconExternal />
                        </a>
                      )}
                    </Links>
                  </ContentContainer>
                </Project>
              );
            })}
        </FeaturedGrid>
      </FeaturedContainer>
    );
  }
}

export default Featured;
