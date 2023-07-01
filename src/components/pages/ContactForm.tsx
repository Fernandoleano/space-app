import './ContactForm.css';
import Header from '../Header';

const ContactForm = () => {
  return (
    <div className="space-page">
      <Header />
      <div className="contact-form-container">
        <h2 className="contact-form-title">Contact Us</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" className="contact-form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="contact-form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" className="contact-form-input contact-form-textarea" />
          </div>
          <button type="submit" className="contact-form-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;