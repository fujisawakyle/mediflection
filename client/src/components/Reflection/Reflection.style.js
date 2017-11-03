import styled from 'styled-components';
import media from '../../styles/media';
import { ComponentBackground } from '../../styles/layoutStyles';

export const ReflectionComponent = styled(ComponentBackground)`
  position: relative;
`;

export const Text = styled.textarea`
  height: 32vw;
  width: 77vw;
  margin: 1em 0;
  background-color: rgba(255, 255, 255, 0.8);
  font-family: 'Saira', sans-serif;
  ${media.md`
    width: 32vw;
    margin: 1em;
  `};
  ${media.lg`
    height: 18.8em;
    width: 19.5em;
  `};
`;

export const Message = styled.div`
  position: absolute;
  bottom: 2.5em;
`;
