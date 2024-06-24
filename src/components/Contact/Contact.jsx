import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
      .then(
        () => {
          toast.success('Message sent successfully!');
          form.current.reset(); // Reset the form after successful submission
          setIsSubmitting(false); // Reset the submitting state
        },
        (error) => {
          toast.error('Failed to send message.');
          console.log('FAILED...', error.text);
          setIsSubmitting(false); // Reset the submitting state in case of an error
        },
      );
  };

  return (
    <section id="contact" className="py-6 bg-white w-full">
      <div className="w-full px-6">
        <div className="bg-brown-900 py-8">
          <div className="flex justify-center items-center">
            <div className="w-24 h-24 bg-white mx-2 rounded-lg"></div>
            <div className="w-24 h-24 bg-white mx-2 rounded-lg"></div>
            <div className="w-24 h-24 bg-white mx-2 rounded-lg"></div>
            <div className="w-24 h-24 bg-white mx-2 rounded-lg"></div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start p-8 w-full">
          <div className="flex-1 lg:mr-8">
            <h2 className="text-4xl mb-2">Get In Touch!</h2>
            <p className=" py-4 text-xl text-black-700">
              We'd love to hear from you! At Shiv Shakti Hatcheries, we provide top-quality broiler chicken farming services and products. Whether you have questions about our COBB 430 broiler eggs, breeding and incubation services, premium chick feed, or custom packaging solutions, our team is here to assist you. Contact us today for exceptional service and support!
            </p>
          </div>
          <form ref={form} onSubmit={sendEmail} className="flex-1 max-w-lg mt-8 lg:mt-0 w-full">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-bold">Name</label>
              <input type="text" id="name" name="user_name" placeholder="Type your name" className="w-full p-2 border border-brown-800 rounded" autoComplete="name" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-bold">Email</label>
              <input type="email" id="email" name="user_email" placeholder="Type your email" className="w-full p-2 border border-brown-800 rounded" autoComplete="email" />
            </div>
            <div className="mb-4">
              <label htmlFor="contact" className="block mb-2 font-bold">Contact</label>
              <input type="text" id="contact" name="user_contact" placeholder="Type your contact number" className="w-full p-2 border border-brown-800 rounded" autoComplete="tel" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 font-bold">Message</label>
              <textarea id="message" name="message" placeholder="Type your message for us" className="w-full p-2 border border-brown-800 rounded h-24 resize-y" autoComplete="off"></textarea>
            </div>
            <button
              type="submit"
              className={`w-full p-2 font-bold rounded ${isSubmitting ? 'bg-gray-600' : 'bg-brown-900 text-white'}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
