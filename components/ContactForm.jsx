import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delayChildren: 0.1, staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const formData = new FormData(e.target);
    // Replace with your actual Google Apps Script Web App URL here:
    const googleAppsScriptURL = 'https://script.google.com/macros/s/AKfycbwDn0vWf5uhXK_SJQgMLwI-q9oG24-1yQHvwOMge-S134w0JeLfPYowvuPvRU_ajC2fOw/exec';

    try {
      const response = await fetch(googleAppsScriptURL, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Message sent!');
        e.target.reset();
      } else {
        alert('Failed to send message.');
        console.error('Response status:', response.status);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong.');
    }
    setIsSending(false);
  };

  return (
    <motion.form
      className="form"
      name="contact"
      method="POST"
      variants={container}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />

      <motion.label htmlFor="name" className="input-label" variants={item}>
        Name
        <input
          type="text"
          id="name"
          name="name"
          className="input-element"
          placeholder="John Doe"
          required
          disabled={isSending}
        />
      </motion.label>

      <motion.label htmlFor="email" className="input-label" variants={item}>
        Email
        <input
          type="email"
          id="email"
          name="email"
          className="input-element"
          placeholder="johndoe@example.com"
          required
          disabled={isSending}
        />
      </motion.label>

      <motion.label htmlFor="phone" className="input-label" variants={item}>
        Phone
        <input
          type="tel"
          id="phone"
          name="phone"
          className="input-element"
          placeholder="Phone Number"
          required
          disabled={isSending}
        />
      </motion.label>

      <motion.label htmlFor="message" className="input-label" variants={item}>
        Message
        <textarea
          id="message"
          name="message"
          className="input-element"
          placeholder="I have a project in mind..."
          required
          rows={4}
          disabled={isSending}
        />
      </motion.label>

      <input
        type="submit"
        className="btn btn--primary form__btn"
        value={isSending ? 'Sending...' : 'Send'}
        disabled={isSending}
      />
    </motion.form>
  );
}
