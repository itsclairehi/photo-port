import React, { useState } from "react";

function ContactForm() {
//hook- formstate is the current state, steformstate is the change that will be applied
//argument in useState is setting the initial state
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    //destructuring properties from formState object to reference more simply later (instead of formState.name etc.)
    const { name, email, message } = formState;
    //using spread operator to keep all properties the same except [formState.property] (the form element being changed), which is updated with user input. formState is updated by setFormState every time a letter is changed in the form. handleChange is the event handler, onChange is event listener 
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
      }

      function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }
      
      
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )

}

export default ContactForm;