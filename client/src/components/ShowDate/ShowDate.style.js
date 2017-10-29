import styled from 'styled-components';

const DateComponent = styled.div`
  font-size: 1.4em;
  padding: 1em;
`;

export const DayBorder = styled(DateComponent)`border: 2.5px solid white;`;

export const TodayBorder = styled(DateComponent)`
  border: 2.5px solid rgba(4, 199, 255, 0.89);
`;
