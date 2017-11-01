import React from 'react';
import DayPicker from 'react-day-picker';

import { ComponentBackground } from '../../styles/layout';

export default ({ daysArray, clickDay }) => {
  console.log('daysArray in Cal', daysArray);
  return (
    <ComponentBackground>
      <DayPicker
        enableOutsideDays
        todayButton="current month"
        selectedDays={daysArray}
        onDayClick={date => clickDay(date)}
      />
    </ComponentBackground>
  );
};
