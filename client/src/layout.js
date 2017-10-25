import styled from 'styled-components';
import media from './theme/media';

export const Container = styled.div`
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  ${media.md`
    color:red;
  `};
`;

export const Header = styled.div`background: #4a90e2;`;
