import styled from 'styled-components';
import { FlexColumn } from './layoutStyles';

export const LoginScreenContainer = styled.div`
  width: 90%;
  height: 70vh;
  display: flex;
  align-item: center;
  flex-direction: column;
  justify-content: center;
  max-width: 40em;
  margin: 0 auto;
  svg {
    width: 5em;
  }
`;

export const Loading = styled(FlexColumn)`
  font-size: 2em;
`;

export const GoogleLogo = styled.img`
  padding-top: 1em;
`;
