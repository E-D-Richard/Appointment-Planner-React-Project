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
  
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <ContactPicker
        contacts={contacts}
        name="contact"
        value={contact}
        onChange={({target}) => setContact(target.value)}
      />
      <input 
        required
        type="text"
        name="title"
        value={title}
        placeholder="Appointment Title"
        onChange={({target}) => setTitle(target.value)}
      />
      <input
        required
        type="date"
        name="date"
        value={date}
        min={getTodayString()}
        onChange={({target}) => setDate(target.value)}
      />
      <input
        required
        type="time"
        name="time"
        value={time}
        onChange={({target}) => setTime(target.value)}
      />
      <input type="submit" value="Add Appointment" />
    </form>
  );
};
