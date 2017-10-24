import { css } from 'styled-components';

const sizes = {
  sm: 376,
  md: 768,
  lg: 992,
  xl: 1170
};

const media = Object.keys(sizes).reduce((finalMedia, size) => {
  return {
    ...finalMedia,
    [size]: function(...args) {
      return css`
        @media (max-width: ${sizes[size]}px) {
          ${css(...args)};
        }
      `;
    }
  };
});

export default media;
