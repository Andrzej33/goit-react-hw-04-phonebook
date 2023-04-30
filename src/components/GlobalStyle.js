import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
  padding: 0;
  margin: 0;
//    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  line-height: 1.6;
  font-size: 18px;
}

* {
  box-sizing: border-box;
}

a {
  color: #0070f3;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

img {
  max-width: 100%;
  display: block;
}

p {
    margin: 0;
}

ul,ol{
    margin: 0;
    padding: 0;
    list-style: none
}


`;
