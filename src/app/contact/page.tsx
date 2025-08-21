// path: src/app/contact/page.tsx
"use client";

import React from "react";
import {
  AtSymbolIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const ContactPage = () => {
  // This component no longer needs a handleSubmit function
  // because the form will be submitted directly to a Formspree endpoint.
  // The 'action' attribute on the form handles the submission.

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gray-900 py-24 sm:py-32 text-center">
        <div className="absolute inset-0 z-0 bg-gray-900 opacity-90"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Send us a message and we&apos;ll
            get back to you as soon as possible.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:space-x-16">
          {/* Contact Form Section */}
          <div className="w-full md:w-2/3 mb-12 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h2>
            {/* The form now uses a Formspree endpoint for submission.
              1. Go to https://formspree.io/ and sign up.
              2. Create a new form and enter your email address (abdulkareemson@gmail.com).
              3. Formspree will give you a unique endpoint URL. Replace 'your_formspree_id' below with your actual ID.
              Formspree will then securely send the form data to your email address. */}
            <form
              action="https://formspree.io/f/xvgqjyrg"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex justify-center rounded-full border border-transparent bg-gray-900 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-transform duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Details Section */}
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Contact Details
            </h2>
            <div className="space-y-6 text-gray-700">
              <div className="flex items-center space-x-3">
                <AtSymbolIcon
                  className="h-6 w-6 flex-shrink-0 text-gray-900"
                  aria-hidden="true"
                />
                <p>info@aamayaki.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon
                  className="h-6 w-6 flex-shrink-0 text-gray-900"
                  aria-hidden="true"
                />
                <p>07014125050| 07010621326</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPinIcon
                  className="h-6 w-6 flex-shrink-0 text-gray-900"
                  aria-hidden="true"
                />
                <p>
                  Address: NO. 9 ANGUWAN NA&apos;INNA, LAYIN ZOMO, Opp. NCAT,
                  Samaru Zaria, Kaduna State.
                </p>
              </div>
            </div>
            {/* Functional Map for Anguwan Na'inna, Samaru Zaria */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.6300481230074!2d7.653457175892882!3d11.163456889240366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1053075d5e548231%3A0x1d5440c9ae77e263!2sANGUWAN%20NA&#39;INNA%2C%20LAYIN%20ZOMO%2C%20Opp.%20NCAT%2C%20Samaru%20Zaria%2C%20Kaduna%20State!5e0!3m2!1sen!2sng!4v1714576856754!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Anguwan Na'inna, Samaru Zaria Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
