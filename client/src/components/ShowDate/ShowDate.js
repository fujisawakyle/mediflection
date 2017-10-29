import React from 'react';
import { ComponentBackground } from '../../styles/layout';
import { DayBorder, TodayBorder } from './ShowDate.style';

export default ({ date, today }) => {
  let showDate;
  if (today) {
    showDate = <TodayBorder>{date}</TodayBorder>;
  } else {
    showDate = <DayBorder>{date}</DayBorder>;
  }
  return <ComponentBackground>{showDate}</ComponentBackground>;
};
