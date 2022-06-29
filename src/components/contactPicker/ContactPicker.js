import React from "react";


/* fix console error - possibly refactor using react docs suggested approach  */
export const ContactPicker = ({contacts, onChange, name}) => {
  return (
    <select required name={name} onChange={onChange}>
      <option value={""} key={-1} selected="selected">Select Contact</option>
      
      {contacts.map((contact) => 
        <option value={contact.name} key={contact.name}>
          {contact.name}
        </option>
      )}
      
    </select>
  );
};
