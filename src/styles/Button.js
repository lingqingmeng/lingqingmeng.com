import styled from 'styled-components';
import theme from './theme';
const { colors_option_b, fontSizes, fonts } = theme;

const Button = styled.button`
  color: ${colors_option_b.red};
  background-color: transparent;
  border: 1px solid ${colors_option_b.red};
  border-radius: ${theme.borderRadius};
  font-size: ${fontSizes.smallish};
  font-family: ${fonts.SFMono};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${theme.transition};
  padding: 18px 23px;

  &:hover,
  &:focus,
  &:active {
    background-color: ${colors_option_b.yellow};
    outline: none;
  }
  &:after {
    display: none !important;
  }
`;

export default Button;
