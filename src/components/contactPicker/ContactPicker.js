import React from "react";



export const ContactPicker = ({contacts, onChange, name}) => {
  return (
    <select required name={name} onChange={onChange}>
        <option value={""} key={-1} selected="selected">Please Selected Contact</option>
      {contacts && contacts.map((contactObj, index) => 
        <option value={contactObj.name} key={index}>{contactObj.name}</option>
      )}
       
    </select>
  );
};
