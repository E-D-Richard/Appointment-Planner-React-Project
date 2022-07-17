import React, { useState } from "react";
import {AppointmentForm} from "../../components/appointmentForm/AppointmentForm";
import {TileList} from "../../components/tileList/TileList"
import { getCurrentTime, getTodayString, formatDate, formatTime } from "../../helpers/helpers";

export const AppointmentsPage = ({appointments, contacts, addAppointment, setAppointments}) => {
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState(getTodayString());
  const [time, setTime] = useState(getCurrentTime());

  const handleSubmit = (e) => {
    e.preventDefault();
    //prevents submitting spaces as title value
    if(title.trim().length === 0) return;
    addAppointment(title, contact, formatDate(date), formatTime(time, date));
    setTitle('');
    setContact('');
    setDate(getTodayString());
    setTime(getCurrentTime());
  };

  const handleDelete = ({ target }) => {
    let revisedAppointments = appointments.filter(
      (index) => Number(target.id) !== index
    );
    setAppointments(revisedAppointments);
  };

  return (
    <div>
      <section className="appointments-form-section">
        <h2>Add Appointment</h2>
        <AppointmentForm 
          contacts={contacts}
          title={title} setTitle={setTitle}
          contact={contact} setContact={setContact} 
          date={date} setDate={setDate} 
          time={time} setTime={setTime}
          handleSubmit={handleSubmit} 
          getTodayString={getTodayString}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList list={appointments} handleDelete={handleDelete} />
      </section>
    </div>
  );
};
