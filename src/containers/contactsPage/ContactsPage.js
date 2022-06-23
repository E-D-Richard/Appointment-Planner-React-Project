import React, {useState, useEffect} from "react";
import {TileList} from '../../components/tileList/TileList';
import { ContactForm } from "../../components/contactForm/ContactForm";

export const ContactsPage = ({contacts, addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [nameIsTaken, setNameIsTaken] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Add contact info and clear data if the contact name is not a duplicate */
    
    
    if(!nameIsTaken){
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    } else {
      alert('contact name already exists!!!')
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(()=>{
    const nameIsDuplicate = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
    if(nameIsDuplicate){
      setNameIsTaken(true);
    } else {
      setNameIsTaken(false)
    }
  }, [name, contacts]);

    
  

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm handleSubmit={handleSubmit} 
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
