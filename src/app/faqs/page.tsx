// path: src/app/faqs/page.tsx
"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    id: 1,
    question: "How do I place a custom order?",
    answer:
      "You can place a custom order by contacting us through our website's contact form, phone, or email. We will then schedule a consultation to discuss your design, measurements, and fabric preferences.",
  },
  {
    id: 2,
    question: "What is your typical turnaround time?",
    answer:
      "Our turnaround time for a custom piece is typically 2-4 weeks, depending on the complexity of the design and our current workload. We will provide a more accurate timeline during your initial consultation.",
  },
  {
    id: 3,
    question: "Do you offer international shipping?",
    answer:
      "Yes, we do. We offer international shipping to most countries. Shipping costs and delivery times vary based on the destination. We will provide a detailed quote upon request.",
  },
  {
    id: 4,
    question: "What types of fabrics do you work with?",
    answer:
      "We work with a wide range of high-quality fabrics, including traditional Nigerian textiles, cotton, linen, silk, and other premium materials. We can help you select the perfect fabric for your garment during the consultation.",
  },
  {
    id: 5,
    question: "Can I provide my own fabric?",
    answer:
      "Absolutely! We are happy to work with fabric that you provide. We will inspect the material during your consultation to ensure it is suitable for your desired design.",
  },
  {
    id: 6,
    question: "What is your return or exchange policy?",
    answer:
      "Since each garment is a custom, made-to-order piece, we do not accept returns or exchanges. However, we are committed to your satisfaction and will work with you to make any necessary adjustments or alterations to ensure a perfect fit.",
  },
];

const FaqsPage = () => {
  // State to manage the open/closed status of each FAQ item
  const [openId, setOpenId] = useState<number | null>(null);

  // Function to toggle the open status of an FAQ item
  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gray-900 py-24 sm:py-32 text-center">
        <div className="absolute inset-0 z-0 bg-gray-900 opacity-90"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">
            Find quick answers to the most common questions about our services,
            orders, and products.
          </p>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="mx-auto max-w-3xl px-6 lg:px-8 py-16">
        <div className="divide-y divide-gray-200">
          {faqs.map((faq) => (
            <div key={faq.id} className="py-6">
              <button
                className="flex w-full items-center justify-between text-left focus:outline-none"
                onClick={() => toggleFaq(faq.id)}
              >
                <span className="text-xl font-semibold text-gray-900">
                  {faq.question}
                </span>
                <ChevronDownIcon
                  className={`h-6 w-6 transform transition-transform duration-200 ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              {openId === faq.id && (
                <div className="mt-4 text-lg text-gray-600 pr-10">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqsPage;
