import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { srConfig } from '../config';
import { IconGithub, IconExternal, IconFolder } from './icons';
import styled from 'styled-components';
import { theme, mixins, ModalStyle, media, Section, Button } from '../styles';
const { colors_option_b, fontSizes, fonts } = theme;

const ProjectsContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;
const ProjectsTitle = styled.h4`
  margin: 0 auto 50px;
  font-size: ${fontSizes.h3};
  ${media.tablet`font-size: 24px;`};
  a {
    display: block;
  }
`;
const ProjectsGrid = styled.div`
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    ${media.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
  }
`;
const ProjectInner = styled.div`
  ${mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 25px;
  height: 100%;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  background-color: ${colors_option_b.shadowNavy};
`;
const Project = styled.div`
  transition: ${theme.transition};
  &:hover,
  &:focus {
    outline: 0;
    ${ProjectInner} {
      transform: translateY(-5px);
      box-shadow: 0 2px 4px ${colors_option_b.shadowNavy};
      box-shadow: 0 19px 38px ${colors_option_b.darkestNavy} 0 15px 12px
        ${colors_option_b.shadowNavy};
    }
  }
`;
const ProjectHeader = styled.div`
  ${mixins.flexBetween};
  align-items: flex-end;
  margin-bottom: 30px;
`;
const Folder = styled.div`
  color: ${colors_option_b.red};
  svg {
    width: 40px;
    height: 40px;
  }
`;
const Links = styled.div`
  margin-right: -10px;
  color: ${colors_option_b.lightSlate};
`;
const IconLink = styled.a`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const ProjectName = styled.h5`
  margin: 0 0 10px;
  font-size: ${fontSizes.xxlarge};
  color: ${colors_option_b.lightestSlate};
`;
const ProjectDescription = styled.div`
  font-size: 17px;
  a {
    ${mixins.inlineLink};
  }
`;
const TechList = styled.ul`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 20px;
  li {
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.xsmall};
    color: ${colors_option_b.lightSlate};
    line-height: 1.75;
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;
const ShowMoreButton = styled(Button)`
  margin: 100px auto 0;
`;

const ModalSt = styled.div`
  color: ${colors_option_b.white};
`;

const Xdiv = styled(ModalStyle)`
  padding-top: 30px;
  padding-bottom: 30px;
  padding-right: 30px;
  padding-left: 30px;
  margin: 100px auto 0;
  button.align_right {
    float: right;
  }
`;

function toUrlEncoded(title) {
  return title
    .split(' ')
    .map(word => word.toLowerCase())
    .join('-');
}

// posts is postsToShow
// @returns -1 if not found
function findElement(posts, hash) {
  const endpoint = hash.slice(1);
  const filtered = posts.filter(({ node }) => {
    return endpoint === node.frontmatter.endpoint;
  });
  if (typeof filtered === 'undefined') {
    return undefined;
  }
  if (filtered.length === 1) {
    const pop = filtered.pop();
    return pop;
  } else if (filtered.length === 0) {
    return undefined;
  }
}

class Projects extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    location: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.revealRefs = [];
    this.restRefs = [];
  }

  state = {
    showMore: false,
    showModal: false,
    ele: -1,
    hasUrlMatch: false,
  };

  componentDidMount() {
    const GRID_LIMIT = 6;
    const { showMore } = this.state;
    const { data } = this.props;
    const projects = data.filter(({ node }) => node.frontmatter.show === 'true');

    const { location } = this.props;
    const { hash } = location;

    // first we must lower case all the posts aka projects to show
    const firstSix = projects.slice(0, GRID_LIMIT);
    const projectsToShow = showMore ? projects : firstSix;
    const postsToShow = projectsToShow.map(({ node }, curr_i) => {
      const { frontmatter, html } = node;
      const { github, external, title, tech } = frontmatter;
      const endpoint = toUrlEncoded(title);
      node = {
        frontmatter: {
          github,
          external,
          title,
          tech,
          endpoint,
          curr_i,
        },
        html,
      };
      return { node };
    });
    // if there is a location like /#zk-proof-demo
    const found = findElement(postsToShow, hash);
    let postIndex;
    if (hash === '#day-one-mentality') {
      postIndex = 0; //find index
    } else if (hash === '#zk-proof-demo') {
      postIndex = 1; //find index
    } else if (hash === '#about-our-firm') {
      postIndex = 2; //find index
    }

    // if not found can either do nothing or set the location hash back to empty string
    // else if found turn state.showModal and at the same time identify the ele

    if (found) {
      this.setHasUrlMatch(true, postIndex);
    }

    import('scrollreveal').then(({ default: ScrollReveal }) => {
      ScrollReveal().reveal(this.projects, srConfig());
      this.revealRefs.forEach((ref, i) => ScrollReveal().reveal(ref, srConfig(i * 100)));
    });
  }

  showMoreToggle = () => this.setState({ showMore: !this.state.showMore });
  showModal = index => {
    this.setState({ showModal: !this.state.showModal, ele: index });
  };

  setHasUrlMatch = (value, ind) => {
    this.setState({ hasUrlMatch: value, ele: ind });
  };

  render() {
    const GRID_LIMIT = 6;
    const { showMore } = this.state;
    const { data } = this.props;

    const projects = data.filter(({ node }) => node.frontmatter.show === 'true');
    const firstSix = projects.slice(0, GRID_LIMIT);
    const projectsToShow = showMore ? projects : firstSix;
    const postsToShow = projectsToShow.map(({ node }, curr_i) => {
      const { frontmatter, html } = node;
      const { github, external, title, tech } = frontmatter;
      const endpoint = toUrlEncoded(title);
      node = {
        frontmatter: {
          github,
          external,
          title,
          tech,
          endpoint,
          curr_i,
        },
        html,
      };
      return { node };
    });

    return (
      <>
        <ProjectsContainer id={'publications'}>
          <ProjectsTitle ref={el => (this.projects = el)}>Publications</ProjectsTitle>
          <ProjectsGrid>
            <TransitionGroup className="projects">
              {postsToShow &&
                postsToShow.map(({ node }, i) => {
                  const { frontmatter, html } = node;
                  const { github, external, title, tech } = frontmatter;
                  return (
                    <>
                      {this.state.showModal ? (
                        <Xdiv>
                          <button
                            className="align_right"
                            onClick={() => {
                              {
                                const url = new URL(window.location);
                                const { origin } = url;
                                window.history.pushState({}, '', origin);
                                this.showModal(i);
                              }
                            }}>
                            🅇
                          </button>
                          <ModalSt
                            dangerouslySetInnerHTML={{
                              __html: postsToShow[this.state.ele].node.html,
                            }}
                          />
                        </Xdiv>
                      ) : null}
                      {this.state.hasUrlMatch ? (
                        <Xdiv>
                          <button
                            className="align_right"
                            onClick={() => {
                              {
                                const url = new URL(window.location);
                                const { origin } = url;
                                window.history.pushState({}, '', origin);
                                this.setHasUrlMatch(false, -1);
                              }
                            }}>
                            Y
                          </button>
                          <ModalSt
                            dangerouslySetInnerHTML={{
                              __html: postsToShow[this.state.ele].node.html,
                            }}
                          />
                        </Xdiv>
                      ) : null}
                      <CSSTransition
                        key={i}
                        classNames="fadeup"
                        timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                        exit={false}>
                        <Project
                          key={i}
                          ref={el => (this.revealRefs[i] = el)}
                          tabIndex="0"
                          style={{
                            transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                          }}>
                          <ProjectInner>
                            <div>
                              <ProjectHeader>
                                <Folder
                                  onClick={() => {
                                    {
                                      window.history.pushState(
                                        {},
                                        '',
                                        `#${postsToShow[i].node.frontmatter.endpoint}`,
                                      );
                                      this.showModal(i);
                                    }
                                  }}>
                                  <IconFolder />
                                </Folder>
                                <Links>
                                  {github && (
                                    <IconLink
                                      href={github}
                                      target="_blank"
                                      rel="nofollow noopener noreferrer"
                                      aria-label="Github Link">
                                      <IconGithub />
                                    </IconLink>
                                  )}
                                  {external && (
                                    <IconLink
                                      href={external}
                                      target="_blank"
                                      rel="nofollow noopener noreferrer"
                                      aria-label="External Link">
                                      <IconExternal />
                                    </IconLink>
                                  )}
                                </Links>
                              </ProjectHeader>
                              <ProjectName>
                                {external ? (
                                  <a
                                    href={external}
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                    aria-label="Visit Website">
                                    {title}
                                  </a>
                                ) : (
                                  title
                                )}
                              </ProjectName>
                              <ProjectDescription
                                onClick={() => {
                                  {
                                    const url = new URL(window.location);
                                    const { origin } = url;
                                    window.history.pushState({}, '', origin);
                                    this.showModal(i);
                                  }
                                }}
                                dangerouslySetInnerHTML={{ __html: html }}
                              />
                            </div>
                            <div>
                              <TechList>
                                {tech.map((tech, i) => (
                                  <li key={i}>{tech}</li>
                                ))}
                              </TechList>
                            </div>
                          </ProjectInner>
                        </Project>
                      </CSSTransition>
                    </>
                  );
                })}
            </TransitionGroup>
          </ProjectsGrid>

          <ShowMoreButton onClick={this.showMoreToggle}>
            {showMore ? 'Fewer' : 'More'} Projects
          </ShowMoreButton>
        </ProjectsContainer>
      </>
    );
  }
}

export default Projects;
