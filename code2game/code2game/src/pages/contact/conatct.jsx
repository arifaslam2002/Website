import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons'
import './contact.css';
const Contact = () => {
  return (
    <div>
    <div className='contact-container'>
      <h1 className='contact-title'>Get In Touch With Us</h1>
      <div className='contact-form'>
      <div className='co-left-panel'>
      <h2>Message Us</h2>
      <form>
        <div className='co-right-panel'>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        <button type="submit">Send Message</button>
        </div>
      </form>
      </div>
      </div>
      <div className='con-main-container'>
      <div className='con-main'>
        <div className='contact-social'>
        <p>For inquiries, please email us at <a href="mailto:info@example.com">info@example.com</a></p>
        <p>Follow us on social media:</p>
        <ul>
            <li>
                <a href="https://twitter.com/example">
                    <FontAwesomeIcon icon={faTwitter} />
                    Twitter
                </a>
            </li>
            <li>
                <a href="https://facebook.com/example">
                    <FontAwesomeIcon icon={faFacebook} />
                    Facebook
                </a>
            </li>
            <li>
                <a href="https://instagram.com/example">
                    <FontAwesomeIcon icon={faInstagram} />
                    Instagram
                </a>
            </li>
        </ul>
        </div>
        <div className='contact-details'>
        <p>Address: 123 Game Dev Lane, Code City, CA 12345</p>
        <p>Phone: (123) 456-7890</p>
        <p>Business Hours: Mon-Fri, 9 AM - 5 PM</p>
        <p>For support, please visit our <a href="https://support.example.com">Support Center</a>.</p>
      </div>
      </div>
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789012!2d-122.12345678901234!3d37.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085801234567890%3A0x1234567890123456!2sGame%20Dev%20Company!5e0!3m2!1sen!2sus!4v1612345678901"
            width="980"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Contact
