import React from 'react';
import { ComponentBackground } from '../../styles/layoutStyles';
import { DayBorder, TodayBorder } from './ShowDate.style';

export default ({ date, today }) => {
  let showDate;
  today
    ? (showDate = <TodayBorder>{date}</TodayBorder>)
    : (showDate = <DayBorder>{date}</DayBorder>);

  return <ComponentBackground>{showDate}</ComponentBackground>;
};
