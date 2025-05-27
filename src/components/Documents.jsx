
import React from 'react';
import { FaDownload, FaFileAlt, FaBook, FaClipboardList, FaFileContract, FaTasks, FaPenFancy } from 'react-icons/fa';

const documents = [
  {
    title: 'Project Charter',
    description: 'The document gives the information regarding the statement of scope, objectives overview, an outline of scope, an approximate schedule and people who are participating in a project',
    icon: <FaFileContract className="text-4xl text-blue-500" />,
    link: 'https://drive.google.com/file/d/1JoD2wuO69eGVYkPLUrxpQOYNzeLM2etT/view',
  },
  {
    title: 'Project Proposal',
    description: 'The document contains details like goals, objectives, important dates, milestones and requirements needed to start and complete the project.',
    icon: <FaPenFancy className="text-4xl text-purple-500" />,
    link: 'https://drive.google.com/drive/folders/1L-HO_XvOGKqnrXWaNjA9DxrVb8A5_7Mf',
  },
  {
    title: 'Research Paper',
    description: 'A research paper contains writing that provides Literature review, Research methodology, analysis, interpretation, and argument based on in-depth independent research',
    icon: <FaBook className="text-4xl text-green-600" />,
    link: 'https://drive.google.com/file/d/1OVqXiYeyiGk62NgeVk5ZMALIWf5p8pDj/view',
  },
  {
    title: 'Final Report',
    description: 'The document contains the Proposed solution to the research question, which was finalized after completing the research',
    icon: <FaClipboardList className="text-4xl text-indigo-600" />,
    link: 'https://drive.google.com/drive/folders/1nHwJHmAGoMbNrLbET9qDt6B7n59_QcU3',
  },
  {
    title: 'Status Document',
    description: 'The document describes the progress of the project within the specific time period and compares it against the project plan checklist',
    icon: <FaTasks className="text-4xl text-yellow-500" />,
    link: 'https://drive.google.com/your-status-doc-link',
  },
  {
    title: 'Research Logbook',
    description: 'The document describes the progress of the project within the specific time period and compares it against the project plan checklist',
    icon: <FaFileAlt className="text-4xl text-red-500" />,
    link: 'https://drive.google.com/drive/folders/17QJcnn1dmQaUXhxbu0YBqvtWbutlgO0E?usp=sharing',
  },
];

const Documents = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="documents">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-left">
          <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-wider">Documents</h2>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Project Documents</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all transform hover:scale-105 text-center overflow-hidden"
            >
              <div className="p-6 space-y-2 flex flex-col items-center">
                <div className="mb-4">{item.icon}</div>
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

export default Documents;
