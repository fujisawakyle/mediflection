import styled from 'styled-components';
import media from './media';

export const ComponentBackground = styled.div`
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  ${media.md`
    color:red;
  `};
`;

export const ComponentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
