import React, {useState, useEffect} from "react";
import {TileList} from '../../components/tileList/TileList';
import { ContactForm } from "../../components/contactForm/ContactForm";
import "./ContactPage.css";

export const ContactsPage = ({contacts, addContact}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [nameIsTaken, setNameIsTaken] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!nameIsTaken){
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  /* nameIsDuplicate checks for contact name in the contacts array 
  - search is case sensitive and ignores space differences */
  useEffect(()=>{
    const inputName = name.toLowerCase().split(/\s+/).join('');
    const nameIsDuplicate = contacts.some(contact =>
      contact.name.toLowerCase().split(/\s+/).join('') === inputName
    );
    
    nameIsDuplicate ? setNameIsTaken(true) : setNameIsTaken(false);
  }, [name, contacts, nameIsTaken]);


  return (
    <div>
      <section className="form-section">
        <h2>Add Contact</h2>
        {nameIsTaken && <h3 className="alert-duplicate">Contact Name Already in Use!</h3>}
        <ContactForm 
         handleSubmit={handleSubmit}
         nameIsTaken={nameIsTaken} 
         name = {name} setName = {setName}
         email={email} setEmail = {setEmail} 
         phone={phone} setPhone = {setPhone} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={contacts} />
      </section>
    </div>
  );
};
