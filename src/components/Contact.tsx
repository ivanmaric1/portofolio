import React from 'react';
import './Contact.scss';
import contact1 from '../img/contact1.png';
import contact2 from '../img/contact2.png';
import contact3 from '../img/contact3.png';

const Contact = () => {
  return (
    <div className="Contact">
      <div className="Contact-info">
        <div className="Contact-info-img">
          <img src={contact1} alt="" />
          <img src={contact2} alt="" />
          <img src={contact3} alt="" />
        </div>
        <h1>Let's Talk!</h1>
        <p>I will get back to you within one to two days through email.</p>
        <p>Also please don't forget to check your spam account just in case!</p>
      </div>
      <form className="Contact-form">
        <input required type="text" placeholder="What’s your name?" />
        <input required type="email" placeholder="What’s your email?" />
        <input required type="text" placeholder="Subject?" />
        <textarea required placeholder="Write your message" />
        <button type="submit" className="Contact-form-btn">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
