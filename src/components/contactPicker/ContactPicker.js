import React from "react";

export const ContactPicker = ({contacts, contact, onChange, name}) => {
  return (
    <select required name={name} onChange={onChange} value={contact} >
      <option value="" key="default" >Select Contact</option>

      {contacts.map((contact) => 
        <option value={contact.name} key={contact.name}>
          {contact.name}
        </option>
      )}
      
    </select>
  );
};
