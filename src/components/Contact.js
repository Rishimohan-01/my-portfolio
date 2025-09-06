import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
