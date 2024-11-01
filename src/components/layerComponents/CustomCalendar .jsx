import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CustomCalendar = () => {
  const [markedDates] = useState([
    new Date(2024, 9, 31), 
    new Date(2024, 10, 15) 
  ]);

  const tileClassName = ({ date, view }) => {
  
    if (view === 'month' && markedDates.some(d => d.getTime() === date.getTime())) {
      return 'highlight'; 
    }
  };

  return (
    <div className='border-hidden rounded-lg m-3 shadow-current  ' style={{width:"40%"}}>
      <Calendar tileClassName={tileClassName} />
    </div>
  );
};

export default CustomCalendar;
