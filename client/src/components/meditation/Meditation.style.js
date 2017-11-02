import styled from 'styled-components';

import { ComponentBackground } from '../../styles/layoutStyles';

export const Container = styled(ComponentBackground)`flex: 1;`;

export const Input = styled.input`
  background-color: rgba(255, 255, 255, 0.8);
  font-family: 'Bungee Hairline', cursive;
  font-size: 2em;
  height: 1em;
  width: 2.5em;
  text-align: right;
  margin: 0.5em;
`;

export const TimeRemaining = styled.div`font-size: 2.1em;`;
