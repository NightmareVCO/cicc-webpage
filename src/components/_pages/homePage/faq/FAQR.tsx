import { useState } from 'react';
import type { Question } from './FAQ.astro';

export type FAQProps = {
  questions: Question[];
};

export default function FAQR({ questions }: FAQProps) {
  // Para abrir todas las preguntas
  // const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  // const toggleAccordion = (index: number) => {
  //   if (openIndexes.includes(index)) {
  //     setOpenIndexes(openIndexes.filter(i => i !== index));
  //   } else {
  //     setOpenIndexes([...openIndexes, index]);
  //   }
  // };

  // Para abrir solo una pregunta
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div>
      {questions?.map((item, index) => {
        // Para abrir todas las preguntas
        // const isOpen = openIndexes.includes(index)

        // Para abrir solo una pregunta
        const isOpen = openIndex === index;
        return (
          <div key={index} className='px-4'>
            <h2 className="text-xl">
              <button
                type="button"
                className={`${index === 0 && "rounded-t-3xl"} border-b-0 flex items-center justify-between w-full p-5 font-medium rtl:text-right text-primary border border-gray-200 focus:ring-1 focus:ring-gray-200 hover:bg-gray-100 gap-3`}
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.question}</span>
                <svg
                  className={`size-3 mt-1 transform ${isOpen ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l4 4 4-4"
                  />
                </svg>
              </button>
            </h2>
            {isOpen && (
              <div className="p-5 border border-b-0 border-gray-200">
                <p className="mb-2 text-black">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}