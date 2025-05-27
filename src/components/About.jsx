// import React from 'react';
// import linkedinIcon from '../assets/linkedin.png';
// import emailIcon from '../assets/email.png';

// const teamMembers = [
//   {
//     name: 'Ms. Thamali Kelegama',
//     role: 'Supervisor',
//     institution: 'Sri Lanka Institute of Information Technology',
//     department: 'Lecturer - Information Technology',
//     gscholar: 'https://scholar.google.com/citations?hl=en&authuser=1&user=iboExbsAAAAJ',
//     email: 'mailto:thamali.k@sliit.lk',
//     image: '/src/assets/thamalik.jpg',
//   },
//   {
//     name: 'Ms. Poorna Panduwawala',
//     role: 'Co-Supervisor',
//     institution: 'Sri Lanka Institute of Information Technology',
//     department: 'Assistant Lecturer - Information Technology',
//     gscholar: 'https://scholar.google.ca/citations?hl=en&view_op=list_works&gmla=AJsN-F7VN1iN0wgI6jwF6KgkPIdPZNfG506pdFZTVi-cRpTKf67NGL78jphpsosIKVSWQRcgXSSaDAcmeH9JPR3yGDHuXWyx8w&user=QuqSf5oAAAAJ',
//     email: 'mailto:poorna.p@sliit.lk',
//     image: '/src/assets/poornap.jpeg',
//   },
//   {
//     name: 'Dr. Bandularathne',
//     role: 'External Supervisor',
//     institution: 'District Hospital - Weligama',
//     department: 'Doctor',
//     // gscholar: '#',
//     email: 'mailto:bandula@example.com',
//     image: '/src/assets/doctor.png',
//   },
//   {
//     name: 'Hasamal M.A.P.',
//     role: 'Group Member',
//     image: '/src/assets/pawara.jpg',
//     linkedin: 'http://www.linkedin.com/in/pawara-hasamal-258609218',
//     email: 'mailto:pawarahasamal22@gmail.com',
//   },
//   {
//     name: 'Jayathissa K.A.D.S.S.',
//     role: 'Group Member',
//     image: '/src/assets/shakya.jpg',
//     linkedin: 'http://www.linkedin.com/in/shakya-sithumini-98aa79217',
//     email: 'mailto:shakyasithumini2@gmail.com',
//   },
//   {
//     name: 'Dasanayaka D.M.U.H.',
//     role: 'Group Member',
//     image: '/src/assets/Uresha.jpg',
//     linkedin: '#',
//     email: 'mailto:akalanka@example.com',
//   },
//   {
//     name: 'Dhananjaya A.K.G.S.',
//     role: 'Group Member',
//     image: '/src/assets/samitha.jpg',
//     linkedin: 'https://www.linkedin.com/in/samitha-dhananjaya-039823273/ ',
//     email: 'mailto:dhananjayasamitha68@gmail.com  ',
//   },
// ];

// const About = () => {
//   return (
//     <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-12 text-left">
//           <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-wider">About Us</h2>
//           <h2 className="text-3xl md:text-4xl font-bold mt-2">Meet Our Team</h2>
//         </div>

//         {/* Supervisors */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//           {teamMembers.slice(0, 3).map((member, idx) => (
//             <div key={idx} className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all overflow-hidden text-center">
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-full h-80 object-cover"
//               />
//               <div className="p-6 space-y-2">
//                 <h3 className="text-lg font-semibold">{member.name}</h3>
//                 <span className="inline-block bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
//                   {member.role}
//                 </span>
//                 <p className="text-sm text-gray-600 mt-2">{member.institution}</p>
//                 <p className="text-sm text-gray-600">{member.department}</p>
//                 <div className="flex justify-center gap-4 mt-4">
//                   <a
//                     href={member.gscholar}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="border border-purple-600 text-purple-600 px-4 py-2 rounded-full hover:bg-purple-50 transition-transform transform hover:scale-105"
//                   >
//                     G-Scholar
//                   </a>
//                   <a
//                     href={member.email}
//                     className="flex items-center gap-2 border border-green-600 text-green-600 px-4 py-2 rounded-full hover:bg-green-50 transition-transform transform hover:scale-105"
//                   >
//                     <img src={emailIcon} alt="Email" className="w-5 h-5" />
//                     E-Mail
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Group Members */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {teamMembers.slice(3).map((member, idx) => (
//             <div key={idx} className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all overflow-hidden text-center">
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-full h-80 object-cover"
//               />
//               <div className="p-6 space-y-2">
//                 <h3 className="text-lg font-semibold">{member.name}</h3>
//                 <span className="inline-block bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
//                   {member.role}
//                 </span>
//                 <p className="text-sm text-gray-600 mt-2">Undergraduate</p>
//                 <p className="text-sm text-gray-600">Sri Lanka Institute of Information Technology</p>
//                 <p className="text-sm text-gray-600">Department of Information Technology</p>
//                 <div className="flex justify-center gap-4 mt-4">
//                   <a
//                     href={member.linkedin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 transition-transform transform hover:scale-105"
//                   >
//                     <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
//                     LinkedIn
//                   </a>
//                   <a
//                     href={member.email}
//                     className="flex items-center gap-2 border border-green-600 text-green-600 px-4 py-2 rounded-full hover:bg-green-50 transition-transform transform hover:scale-105"
//                   >
//                     <img src={emailIcon} alt="Email" className="w-5 h-5" />
//                     E-Mail
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;





import React from 'react';
import linkedinIcon from '../assets/linkedin.png';
import emailIcon from '../assets/email.png';

const teamMembers = [
  {
    name: 'Ms. Thamali Kelegama',
    role: 'Supervisor',
    institution: 'Sri Lanka Institute of Information Technology',
    department: 'Lecturer - Information Technology',
    gscholar: 'https://scholar.google.com/citations?hl=en&authuser=1&user=iboExbsAAAAJ',
    email: 'mailto:thamali.k@sliit.lk',
    image: '/src/assets/thamalik.jpg',
  },
  {
    name: 'Ms. Poorna Panduwawala',
    role: 'Co-Supervisor',
    institution: 'Sri Lanka Institute of Information Technology',
    department: 'Assistant Lecturer - Information Technology',
    gscholar: 'https://scholar.google.ca/citations?hl=en&view_op=list_works&gmla=AJsN-F7VN1iN0wgI6jwF6KgkPIdPZNfG506pdFZTVi-cRpTKf67NGL78jphpsosIKVSWQRcgXSSaDAcmeH9JPR3yGDHuXWyx8w&user=QuqSf5oAAAAJ',
    email: 'mailto:poorna.p@sliit.lk',
    image: '/src/assets/poornap.jpeg',
  },
  {
    name: 'Dr. Bandularathne',
    role: 'External Supervisor',
    institution: 'District Hospital - Weligama',
    department: 'Doctor',
    // gscholar: '#',
    email: 'mailto:bandula@example.com',
    image: '/src/assets/doctor.png',
  },
  {
    name: 'Hasamal M.A.P.',
    role: 'Group Member',
    image: '/src/assets/pawara.jpg',
    linkedin: 'http://www.linkedin.com/in/pawara-hasamal-258609218',
    email: 'mailto:pawarahasamal22@gmail.com',
  },
  {
    name: 'Jayathissa K.A.D.S.S.',
    role: 'Group Member',
    image: '/src/assets/shakya.jpg',
    linkedin: 'http://www.linkedin.com/in/shakya-sithumini-98aa79217',
    email: 'mailto:shakyasithumini2@gmail.com',
  },
  {
    name: 'Dasanayaka D.M.U.H.',
    role: 'Group Member',
    image: '/src/assets/Uresha.jpg',
    linkedin: '#',
    email: 'mailto:ureshahansani3@gmail.com',
  },
  {
    name: 'Dhananjaya A.K.G.S.',
    role: 'Group Member',
    image: '/src/assets/samitha.jpg',
    linkedin: 'https://www.linkedin.com/in/samitha-dhananjaya-039823273/',
    email: 'mailto:dhananjayasamitha68@gmail.com',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-left">
          <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-wider">About Us</h2>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Meet Our Team</h2>
        </div>

        {/* Supervisors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.slice(0, 3).map((member, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all overflow-hidden text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <span className="inline-block bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
                  {member.role}
                </span>
                <p className="text-sm text-gray-600 mt-2">{member.institution}</p>
                <p className="text-sm text-gray-600">{member.department}</p>
                <div className="flex justify-center gap-4 mt-4">
                  {/* Remove G-Scholar button for Dr. Bandularathne */}
                  {member.name !== 'Dr. Bandularathne' && (
                    <a
                      href={member.gscholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-purple-600 text-purple-600 px-4 py-2 rounded-full hover:bg-purple-50 transition-transform transform hover:scale-105"
                    >
                      G-Scholar
                    </a>
                  )}
                  <a
                    href={member.email}
                    className="flex items-center gap-2 border border-green-600 text-green-600 px-4 py-2 rounded-full hover:bg-green-50 transition-transform transform hover:scale-105"
                  >
                    <img src={emailIcon} alt="Email" className="w-5 h-5" />
                    E-Mail
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Group Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.slice(3).map((member, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all overflow-hidden text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <span className="inline-block bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
                  {member.role}
                </span>
                <p className="text-sm text-gray-600 mt-2">Undergraduate</p>
                <p className="text-sm text-gray-600">Sri Lanka Institute of Information Technology</p>
                <p className="text-sm text-gray-600">Department of Information Technology</p>
                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 transition-transform transform hover:scale-105"
                  >
                    <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
                    LinkedIn
                  </a>
                  <a
                    href={member.email}
                    className="flex items-center gap-2 border border-green-600 text-green-600 px-4 py-2 rounded-full hover:bg-green-50 transition-transform transform hover:scale-105"
                  >
                    <img src={emailIcon} alt="Email" className="w-5 h-5" />
                    E-Mail
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
