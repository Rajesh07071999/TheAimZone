import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { motion } from 'framer-motion';
import 'react-datepicker/dist/react-datepicker.css';
import './DateTimePicker.css';

function DateTimePicker() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <motion.div
      className="datetime-box shadow-lg"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8, type: 'spring' }}
    >
      <h5 className="text-center mb-3">📅 Schedule Something Cool</h5>

      <div className="picker-block">
        <label>Date</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Select date"
          className="styled-picker"
          dateFormat="MMMM d, yyyy"
        />
      </div>

      <div className="picker-block">
        <label>Time</label>
        <DatePicker
          selected={selectedTime}
          onChange={(time) => setSelectedTime(time)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
          placeholderText="Select time"
          className="styled-picker"
        />
      </div>

      <motion.button
        className="schedule-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        🚀 Schedule
      </motion.button>
    </motion.div>
  );
}

export default DateTimePicker;
