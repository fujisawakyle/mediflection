import styled from 'styled-components';
import { FlexColumn } from './layoutStyles';

export const LoginScreenContainer = styled.div`
  width: 90%;
  max-width: 40em;
  svg {
    width: 5em;
  }
`;

export const Loading = styled(FlexColumn)`font-size: 2em;`;

export const GoogleLogo = styled.img`padding-top: 1em;`;
