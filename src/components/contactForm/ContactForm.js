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
      <label htmlFor="name" aria-label="contact name">
        Name
      </label>

      <input
        required
        type="text"
        id="name"
        name="name"
        placeholder="Contact Name"
        value={name}
        onChange={({ target }) => {
          setName(target.value.replace(/\s+/g, " "));
        }}
      />

      <label aria-label="phone number">
        Phone
        <input
          required
          type="tel"
          name="phone"
          placeholder="Phone Number (USA)"
          value={phone}
          onChange={({ target }) => {
            setPhone(target.value);
          }}
          //pattern is set for USA numbers
          pattern="(1|001|)[1-9][0-9]{2}(-| |)[1-9][0-9]{2}(-| |)[0-9]{4}"
        />
      </label>
      <label aria-label="email">
        Email
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={({ target }) => {
            setEmail(target.value);
          }}
        />
      </label>
      <input type="submit" value="Add Contact" aria-label="submit button" />
    </form>
  );
};
