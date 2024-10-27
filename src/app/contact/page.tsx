
"use client";
import React from 'react';

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-200">
      <div className="container mx-auto px-6 py-12 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
          Get in Touch
        </h2>
        <form className="bg-white p-8 md:p-12 rounded-lg shadow-md max-w-md mx-auto">
          <div className="mb-6">
            <label htmlFor="name" className="block text-black font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-black font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-black font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
