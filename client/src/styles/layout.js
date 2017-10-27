import styled from 'styled-components';
import media from './media';

export const ComponentBackground = styled.div`
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 1em;
  ${media.sm`
  color:orange;
`};
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 35em;
`;

export const ComponentButton = styled.button`
  border: none;
  background-color: #4a90e2;
  box-shadow: none;
  cursor: pointer;
  color: white;
  font-size: 0.875em;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
`;

export const MediaFlex = styled(FlexColumn)`\
  ${media.md`
    flex-direction:row;
    justify-content: space-evenly;
  `}
`;
