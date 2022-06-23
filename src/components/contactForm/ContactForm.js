import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  
  const handleNameChange = ({target}) => {
    setName(target.value)
  }
  const handlePhoneChange = ({target}) => {
    setPhone(target.value)
  }
  const handleEmailChange = ({target}) => {
    setEmail(target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        placeholder="name"
        value={name}
        onChange={handleNameChange}
        type="text"
      />
      <input
        required
        placeholder="phone number"
        value={phone}
        onChange={handlePhoneChange}
        type="tel"
        pattern="(1|001|)[0-9]{3}(-| |)[0-9]{3}(-| |)[0-9]{4}"
      />
      <input
        required
        placeholder="email"
        value={email}
        onChange={handleEmailChange}
        type="email"
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
