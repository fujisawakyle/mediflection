import { css } from 'styled-components';

const sizes = {
  xl: 1200,
  lg: 992,
  md: 700,
  sm: 550,
  xs: 420
};

const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

// const media = Object.keys(sizes).reduce((finalMedia, size) => {
//   return {
//     ...finalMedia,
//     [size]: function(...args) {
//       return css`
//         @media (min-width: ${sizes[size]}px) {
//           ${css(...args)};
//         }
//       `;
//     }
//   };
// });

export default media;
