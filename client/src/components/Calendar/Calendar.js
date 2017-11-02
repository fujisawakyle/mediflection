import React from 'react';
import DayPicker from 'react-day-picker';

import { ComponentBackground } from '../../styles/layoutStyles';

export default ({ calendarDaysArray, clickCalendarDate }) => {
  return (
    <ComponentBackground>
      <DayPicker
        enableOutsideDays
        todayButton="current month"
        selectedDays={calendarDaysArray}
        onDayClick={date => clickCalendarDate(date)}
      />
    </ComponentBackground>
  );
};
