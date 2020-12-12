import emailjs from 'emailjs-com';
import './Contact.scss';
import contact1 from '../img/contact1.png';
import contact2 from '../img/contact2.png';
import contact3 from '../img/contact3.png';

const Contact = () => {
  // const animate = (element) => element.classList.add('animate');
  // const isAnimated = (element) => element.classList.contains('animate');

  // const intersectionObserver = new IntersectionObserver((entries, observer) => {
  //   entries.forEach((entry) => {
  //     if (entry.intersectionRatio > 0) {
  //       animate(entry.target);
  //     }
  //     observer.unobserve(entry.target);
  //   });
  // });

  // const elements = [].filter.call(
  //   document.querySelectorAll('.contact'),
  //   (element) => !isAnimated(element)
  // );

  // elements.forEach((element) => intersectionObserver.observe(element));

  const sendEmail = (e: any) => {
    e.preventDefault();
    console.log(e.target);
    emailjs
      .sendForm(
        'service_6xol4if',
        'template_tc8tky9',
        e.target,
        'user_JKOCBGm7UCr4mlAN9IH1z'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="Contact section" id="contact">
      <div className="Contact-info">
        <div className="Contact-info-img">
          <img src={contact1} alt="contactImage" className="contact" />
          <img src={contact2} alt="contactImage" className="contact" />
          <img src={contact3} alt="contactImage" className="contact" />
        </div>
        <h1>Let's Talk!</h1>
        <div>
          <p>I will get back to you within one to two days through email.</p>
          <p>
            Also please don't forget to check your spam account just in case!
          </p>
        </div>
      </div>
      <form className="Contact-form" onSubmit={(event) => sendEmail(event)}>
        <input
          required
          type="text"
          placeholder="What’s your name?"
          name="name"
        />
        <input
          required
          type="email"
          placeholder="What’s your email?"
          name="email"
        />
        <input required type="text" placeholder="Subject?" name="subject" />
        <textarea required placeholder="Write your message" name="message" />
        <button type="submit" className="Contact-form-btn animated">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
