import React, {useState, useEffect} from "react";
import {TileList} from '../../components/tileList/TileList';
import { ContactForm } from "../../components/contactForm/ContactForm";
import "./ContactPage.css";

export const ContactsPage = ({contacts, addContact, setContacts}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [nameIsTaken, setNameIsTaken] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //prevents submitting spaces as name value
    if(name.trim().length === 0) return;
    if(!nameIsTaken){
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };


  useEffect(()=>{
    const nameIsDuplicate = contacts.some(contact =>
      contact.name.toLowerCase().trim() === name.toLowerCase().trim());
    nameIsDuplicate ? setNameIsTaken(true) : setNameIsTaken(false);
  }, [name, contacts, nameIsTaken]);

  const handleDelete = ({ target }) => {
    let revisedContacts = contacts.filter(
      (contact, index) => Number(target.id) !== index
    );
    setContacts(revisedContacts);
  };

  return (
    <div>
      <section className="contacts-form-section">
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
        <TileList list={contacts} handleDelete={handleDelete} />
      </section>
    </div>
  );
};
