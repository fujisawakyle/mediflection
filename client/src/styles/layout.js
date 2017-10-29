import styled from 'styled-components';
import media from './media';

export const ComponentBackground = styled.div`
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 100%;
  margin-bottom: 1em;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ComponentColumn = styled(FlexColumn)`
  width: 100%;
  display: flex;
  padding: 0 0.5em;
`;

export const ComponentColumn2 = styled(FlexColumn)`
  width: 100%;
  display: flex;
  padding: 0 0.5em;
  justify-content: space-between;
  align-items: stretch;
`;

export const ComponentButton = styled.button`
  border: none;
  background-color: #4a90e2;
  box-shadow: none;
  cursor: pointer;
  color: white;
  font-size: 0.875em;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
  margin: 1em 0;
`;

export const MediaFlex = styled(FlexColumn)`
  justify-content: space-evenly;
  width: 90vw;

  ${media.md`
    flex-direction:row;
    justify-content: space-evenly;
    align-items: stretch;
  `};
  ${media.lg`
    width: 40em;
  `};
`;

export const ComponentTitle = styled.h2`font-size: 1.5em;`;
