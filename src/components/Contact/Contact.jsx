// src/components/Contact.jsx
import React from "react";

export const Contact = () => {
  return (
    <section id="contact" className="py-6 bg-white w-full ">
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
            <h2 className="text-2xl mb-2">Get In Touch!</h2>
            <p className="text-base text-gray-700">
              Lorem ipsum dolor sit amet consectetur. Scelerisque arcu eu velit
              scelerisque in. Tellus ut sem tristique viverra arcu neque
              suscipit.
            </p>
          </div>
          <form className="flex-1 max-w-lg mt-8 lg:mt-0 w-full">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-bold">Name</label>
              <input type="text" id="name" placeholder="Type your name" className="w-full p-2 border border-brown-800 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-bold">Email</label>
              <input type="email" id="email" placeholder="Type your email" className="w-full p-2 border border-brown-800 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 font-bold">Message</label>
              <textarea id="message" placeholder="Type your message for us" className="w-full p-2 border border-brown-800 rounded h-24 resize-y"></textarea>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
