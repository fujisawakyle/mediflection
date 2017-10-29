import styled from 'styled-components';
import media from '../../styles/media';

export const Text = styled.textarea`
  height: 32vw;
  width: 68vw;
  ${media.md`
    width: 32vw;
  `};
`;
