import { useForm, ValidationError } from '@formspree/react';
import '../styles/Contact.css';

function Contact() {
  const [state, handleSubmit] = useForm('xjvqknpz');

  if (state.succeeded) {
    return <p>Thanks for your message! I will get back to you shortly</p>;
  }

  return (
    <div className="contact">
      <p>Want to get in touch?</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-section">
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" name="name" required />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div className="form-section">
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" name="email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="form-section">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <button type="submit" disabled={state.submitting}>
          Send message
        </button>
      </form>
    </div>
  );
}

export default Contact;
