import React from 'react';
import { FaDownload } from 'react-icons/fa';

const presentations = [
  {
    title: 'Proposal presentation',
    description: 'Initial Presentation with Overview of Research Problem',
    icon: '💡📄',
    link: 'https://drive.google.com/drive/folders/1Vqmxp5oxcm7QfIIraXKRpwSt1JSapgCK',
  },
  {
    title: 'Progress presentation-1',
    description: '50% Project Completion',
    icon: '📊 1️⃣',
    link: 'https://drive.google.com/drive/folders/16Bcv5LyfbdxzUIYWWdaPx2kgFUmyEy5-',
  },
  {
    title: 'Progress presentation-2',
    description: '90% Project Completion',
    icon: '📈 2️⃣',
    link: 'https://drive.google.com/drive/folders/14VDvGBlX3ESCekfgp38agZdOINMKp0Lp',
  },
  {
    title: 'Final presentation',
    description: '100% Completion with deployed Solution',
    icon: '🚩💹',
    link: 'https://drive.google.com/your-final-link',
  },
];

const Presentations = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="presantations">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-left">
            <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-wider">Presentations</h2>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Project Presentations</h2>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {presentations.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all transform hover:scale-102 text-center overflow-hidden"
          >
            <div className="p-6 space-y-2 flex flex-col items-center">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-2 text-sm text-blue-600 border border-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 transition-all"
              >
                <FaDownload /> Download
              </a>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Presentations;
