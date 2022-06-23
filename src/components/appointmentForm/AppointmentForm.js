import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  
  //try to understand this func for future usage
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const minDate = getTodayString()
  

  const handleTitleChange =({target})=>{
    setTitle(target.value);
  };
  const handleDateChange =({target})=>{
    setDate(target.value);
  };
  const handleTimeChange =({target})=>{
    setTime(target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ContactPicker
        contacts={contacts}
        name="contact"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        placeholder="Appointment With" 
      />
      <input 
        required
        value={title}
        placeholder="title"
        onChange={handleTitleChange}
        type="text"
      />
      <input
        required
        type="date"
        value={date}
        min={minDate}
        onChange={handleDateChange}
        
        
      />
      <input
        required
        value={time}
        onChange={handleTimeChange}
        type="time"
      />
    <input type="submit" value="Submit" />
    </form>
  );
};
