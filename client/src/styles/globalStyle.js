import { createGlobalStyle } from 'styled-components';
import { link } from './helpers';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.pageBackground};
    color: ${props => props.theme.normalText};
  }
  a {
    ${link}
  }
`;

export default GlobalStyle;
