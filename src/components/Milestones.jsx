import React from 'react';
import { motion } from 'framer-motion';
import circle from '../assets/Circle.jpg';

const timelineData = [
  {
    title: 'Project Proposal (Presentation + Proposal Report)',
    // date: '2023 - 2024',
    company: 'August 2024',
    description:
      'Mark Allocation - 12%',
    image: circle,
    color: 'border-orange-800',
    textColor: 'text-orange-500',
  },
  {
    title: 'Progress Presentation – 1',
    // date: '2023 - 2024',
    company: 'December 2024',
    description:
      'Mark Allocation - 15%',
    image: circle,
    color: 'border-yellow-800',
    textColor: 'text-yellow-800',
  },
  {
    title: 'Final Reports (Thesis)',
    // date: '2023 - 2024',
    company: 'April 2025',
    description:
      'Mark Allocation - 19%',
    image: circle,
    color: 'border-cyan-600',
    textColor: 'text-cyan-600',
  },
  {
    title: 'Progress Presentation - 2',
    // date: '2023 - 2024',
    company: 'March 2025',
    description:
      'Mark Allocation - 18%',
    image: circle,
    color: 'border-lime-600',
    textColor: 'text-lime-600',
  },
  {
    title: 'Final Presentation + Viva',
    // date: '2023 - 2024',
    company: 'May 2025',
    description:
      'Mark Allocation - 20%',
    image: circle,
    color: 'border-red-500',
    textColor: 'text-red-500',
  },
  {
    title: 'Website Development',
    // date: '2023 - 2024',
    company: 'May 2025',
    description:
      'Mark Allocation - 2%',
    image: circle,
    color: 'border-green-600',
    textColor: 'text-green-600',
  },
  {
    title: 'Research Log Book',
    // date: '2023 - 2024',
    company: 'June 2025',
    description:
      'Mark Allocation - 2%',
    image: circle,
    color: 'border-indigo-700',
    textColor: 'text-indigo-700',
  },
];

const Milestones = () => {
  return (
    <section id="milestones" className="px-4 sm:px-6 lg:px-20 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-left">
            <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-wider">milestones</h2>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Project Milestones</h2>
        </div>
        <div className="relative">
          {/* Vertical center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>

          <div className="flex flex-col gap-16">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } items-center md:items-start`}
              >
                {/* Line dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-500 z-10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>

                {/* Content Box */}
                <div
                  className={`w-full md:w-1/2 mt-10 md:mt-0 md:px-6 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <div
                    className={`bg-white border-l-4 ${item.color} rounded-lg shadow-lg p-6`}
                  >
                    <h3 className={`text-xl font-bold mb-1 ${item.textColor}`}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      <span className="text-blue-600 font-semibold">{item.company}</span>{' '}
                      {item.date}
                    </p>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;