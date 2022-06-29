import React from "react";


export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        type="text"
        name="name"
        placeholder="Contact Name"
        value={name}
        onChange={({target})=>{setName(target.value)}}
      />
      <input
        required
        type="tel"
        name="phone"
        placeholder="Phone"
        value={phone}
        onChange={({target})=>{setPhone(target.value)}}
        //pattern is set for USA numbers
        pattern="(1|001|)[1-9][0-9]{2}(-| |)[1-9][0-9]{2}(-| |)[0-9]{4}"
      />
      <input
        required
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={({target})=>{setEmail(target.value)}}
      />
      <input type="submit" value="Add Contact" />
    </form>
  );
};
