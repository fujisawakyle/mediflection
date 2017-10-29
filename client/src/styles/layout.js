import styled from 'styled-components';
import media from './media';

export const ComponentBackground = styled.div`
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ComponentColumn = styled(FlexColumn)`
  justify-content: space-evenly;
  flex: 1;
  border: 5px solid orange;
  display: flex;
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

export const MediaFlex = styled(FlexColumn)`
  flex: 20;
  justify-content: space-evenly;
  border: 5px solid red;
  ${media.md`
    flex-direction:row;
    justify-content: space-evenly;
  `};
`;

export const MainWrapper = styled(FlexColumn)`
  height: 100vh;
  justify-content: flex-start;
`;

export const ComponentWrapper = styled(FlexColumn)`
  height: 100%;
  width: 100%;
  border: 5px solid orange;
`;
