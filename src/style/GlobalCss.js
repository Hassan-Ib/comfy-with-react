import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
:root {
  --scale: $scale;
  --color-white-primary: #fff;
  --color-black-primary: #333;
  --color-dark-primary: #892628;
  --color-secondary-1: #e99453;
  --color-secondary-1-light: #eb8536;

  --transition-1: all 200ms ease-out;
  --transition-with-delay: all 300ms ease-out 100ms;
  --opacity-trans: opacity 200ms ease-out;

  --media-smallest: 31.25em;

  --scale: 0.8;
  --scale-md: 1;
  --scale-lg: 1.2;
  --margin-bottom: 1.2rem;
  --margin-big: 1.8rem;
  --padding-button: 0.5rem 1.5rem;
  --letter-spacing: 1px;
  --border-radius: 10px;

  --breakPoint-tab: 600px;
  --breakPoint-big: 900px;
  --breakPoint-large: 1200px;
}

*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
  font-size: calc(100% * #{$scale});
  @include response(big) {
    font-size: calc(100% * #{$scale-md});
  }
  @include response(lg) {
    font-size: calc(100% * #{$scale-md});
  }
}

body {
  font-family: "Nunito sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: var(--color-white-primary);
}
ul,
ol {
  list-style: none;
}
`;

export default Global;
