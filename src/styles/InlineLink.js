import styled from 'styled-components';
import theme from './theme';
const { colors_option_b } = theme;

const InlineLink = styled.a`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  transition: ${theme.transition};
  cursor: pointer;
  color: ${colors_option_b.vanillaLeetcode};
  &:hover,
  &:focus,
  &:active {
    color: ${colors_option_b.vanillaLeetcode};
    outline: 0;
    &:after {
      width: 100%;
    }
  }
  &:after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    position: relative;
    bottom: 0.37em;
    background-color: ${colors_option_b.vanillaLeetcode};
    transition: ${theme.transition};
  }
`;

export default InlineLink;
