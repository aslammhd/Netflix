'use client';
import { useState } from 'react';
import faqData from '../../db/faqData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="p-10 max-w-[1600px] mx-auto text-white">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

      {faqData.map((item, index) => (
        <div key={index} className="mb-2">
          <button
            onClick={() => setOpenIndex(index === openIndex ? null : index)}
            className="w-full bg-[#303030] text-white text-left px-6 py-5 text-lg flex justify-between items-center hover:bg-[#444]"
          >
            {item.question}
            <span className="text-2xl">{openIndex === index ? '✕' : '+'}</span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 bg-[#303030] text-white ${
              openIndex === index ? 'max-h-[500px] px-6 py-5' : 'max-h-0 px-6'
            }`}
          >
            <p className="text-lg leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
