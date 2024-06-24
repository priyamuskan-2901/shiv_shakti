// src/WhatsAppButton.jsx
import React from 'react';

const WhatsAppButton = ({ phoneNumber, message }) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 flex items-center justify-center px-4 py-2 bg-green-500 text-white font-bold rounded-full shadow-lg hover:bg-green-600 transition duration-300"
    >
      <svg
        className="w-6 h-6 mr-2"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.8 1.5 5.5L2 22l4.5-1.5C8.2 21.5 10 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.7 0-3.3-.5-4.7-1.4l-.3-.2-3 .8.8-3-.2-.3C4.5 15.3 4 13.7 4 12 4 7.6 7.6 4 12 4s8 3.6 8 8-3.6 8-8 8z" />
        <path d="M16.1 14.3c-.2-.1-1.1-.5-1.3-.6s-.3-.1-.5.1c-.1.2-.5.6-.6.7s-.2.2-.4.1c-.1 0-.8-.3-1.6-.8-.6-.3-1.1-.9-1.2-1.1-.1-.2 0-.3.1-.4.1-.1.2-.3.4-.4.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3.1-.1.1-.2 0-.3s-.5-1.2-.6-1.5c-.2-.4-.3-.3-.5-.3s-.3 0-.4 0-.4.1-.6.4-.7.7-.7 1.6.8 1.9 1 2.1c.1.1 1.5 2.3 3.7 3.2.6.2 1.1.3 1.4.2.4 0 1.1-.4 1.3-.8.2-.4.2-.7.1-.8z" />
      </svg>
      Chat on WhatsApp
    </a>
  );
};

export default WhatsAppButton;
