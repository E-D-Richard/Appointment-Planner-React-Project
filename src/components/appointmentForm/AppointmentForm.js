import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

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
  handleSubmit,
  clearOnSubmit,
  getTodayString,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label aria-label="appointment with">
        Contacts
        <ContactPicker
          contacts={contacts}
          name="contact"
          value={contact}
          onChange={({ target }) => setContact(target.value)}
          clearOnSubmit={clearOnSubmit}
          contact={contact}
        />
      </label>

      <label aria-label="appointment title">
        Title
        <input
          required
          type="text"
          name="title"
          value={title}
          placeholder="Appointment Title"
          onChange={({ target }) => setTitle(target.value.replace(/\s+/g, " "))}
        />
      </label>

      <div className="time-date-container">
        <label aria-label="date">
          Date
          <input
            required
            type="date"
            name="date"
            id="datePicker"
            value={date}
            min={getTodayString()}
            onChange={({ target }) => setDate(target.value)}
          />
        </label>

        <label aria-label="time">
          Time
          <input
            required
            type="time"
            name="time"
            id="timePicker"
            value={time}
            onChange={({ target }) => setTime(target.value)}
          />
        </label>
      </div>

      <input type="submit" value="Add Appointment" aria-label="submit button" />
    </form>
  );
};
