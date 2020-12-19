import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';


function ContactForm() {

    const [errorMessage, setErrorMessage] = useState('');


    //hook- formstate is the current state of the form, steformstate is the change that will be applied
    //argument in useState is setting the initial state
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    //destructuring properties from formState object to reference more simply later (instead of formState.name etc.)
    const { name, email, message } = formState;

    function handleChange(e) {
        //email validation
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
            //validation for msg and name that it's not left blank
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        //using spread operator to keep all properties the same except [formState.property] (the form element being changed), which is updated with user input. formState is updated by setFormState every time a letter is changed in the form. handleChange is the event handler, onChange is event listener
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }

        console.log('errorMessage', errorMessage)
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
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    )

}

export default ContactForm;