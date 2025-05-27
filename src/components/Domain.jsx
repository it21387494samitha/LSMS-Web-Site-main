
import React, { useState } from 'react';
import python from '../assets/python.png';
import colab from '../assets/colab.png';
import vscode from '../assets/vscodeLogo.png';
import firebase from '../assets/firebase.png';
import fastapilogo from '../assets/fastApi.png';
import googlevisioapi from '../assets/googleVision.jpg';
import github from '../assets/github.png';
import android from '../assets/Android Studio.png';
import dart from '../assets/Dart.jpeg';

import objectives from '../assets/ResearchObjective.png';
import gap from '../assets/ResearchGap.png';
import problem from '../assets/ResearchProblem.png';
import survey from '../assets/LiteratureSurvey.jpg';
import methodology from '../assets/Methodology.png';

// ✅ Define TechLogo component
const TechLogo = ({ src, label }) => (
  <div className="flex flex-col items-center space-y-2">
    <img src={src} alt={label} className="h-12 object-contain" />
    <span className="text-sm text-center text-gray-700">{label}</span>
  </div>
);

// ✅ Technologies content
const technologiesContent = (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 place-items-center">
    <TechLogo src={vscode} label="Visual Studio Code" />
    <TechLogo src={python} label="Python" />
    <TechLogo src={colab} label="Google Colaboratory" />
    <TechLogo src={firebase} label="Firebase" />
    <TechLogo src={fastapilogo} label="Fast API" />
    <TechLogo src={googlevisioapi} label="Google Vision API" />
    <TechLogo src={github} label="Git Hub" />
    <TechLogo src={android} label="Android Studio" />
    <TechLogo src={dart} label="Dart" />
  </div>
);

// ✅ Section data
const sections = [
  {
    label: 'Literature Survey',
    key: 'literature',
    content: (
      <div className="space-y-6">
        <img src={survey} alt="Literature Survey" className="mx-auto rounded-md max-w-sm" />
        <p>
          This section reviews existing work related to the development of Lifestyle Management Systems (LMS) that integrate disease risk prediction, personalized diet and exercise plans, and stress detection. Traditional methods focused on health education, but modern LMS solutions are more data-driven due to mobile apps and wearable technology.
          <br /><br />
          With the rise in lifestyle-related diseases, early detection is vital. Conditions like diabetes, heart disease, and anemia cause many deaths, often due to late diagnosis. WHO projects a 24.5% increase in cardiovascular-related mortality by 2030. Early-stage prediction systems using machine learning methods such as logistic regression, SVM, KNN, decision trees, and random forests have been developed, though many face limitations in accuracy and performance.
          <br /><br />
          Mobile health technologies have enhanced disease prediction by incorporating data from wearables and electronic health records. However, most systems require manual input of medical data like blood test results. OCR has been tested for automating data extraction from medical reports, but challenges remain, especially with low-quality or handwritten inputs.
          <br /><br />
          Personalized meal planning systems use data such as weight, height, and preferences to generate diet plans. While useful, most lack real-time health data integration. Exercise scheduling has improved with machine learning and wearables, boosting user adherence through personalized routines. Similarly, stress management benefits from smartwatches that track heart rate variability, though current solutions often function in isolation.
          <br /><br />
          The proposed LMS seeks to combine disease prediction, diet, exercise, and stress management into one platform. Challenges include ensuring data privacy, user trust, and addressing digital literacy and accessibility issues. Strong security and transparent policies are crucial for adoption and trust in digital health tools.
        </p>
      </div>
    )
  },
  {
    label: 'Research Problem',
    key: 'problem',
    content: (
      <div className="space-y-6">
        <img src={problem} alt="Research Problem" className="mx-auto rounded-md max-w-sm" />
        <p>
          In today’s fast-paced world, many people, especially young adults aged 18–40, neglect their health due to busy lifestyles, leading to a rise in chronic conditions like diabetes, heart disease, anemia, and stress-related disorders. In countries like Sri Lanka, healthcare still relies heavily on manual data entry and in-person visits, causing delays and reducing personalization.
          <br /><br />
          Existing health apps often offer only generic advice without incorporating personal health data such as blood test results. They lack dynamic feedback and adaptation to users’ changing health conditions. A key gap is the absence of integrated systems that use Optical Character Recognition (OCR) and machine learning to extract and analyze key health indicators like glucose, cholesterol, hemoglobin, and BMI from scanned blood reports.
          <br /><br />
          Most current solutions also require manual data entry, have poor user interfaces, and fail to integrate diet, exercise, and stress management, making it hard for users to follow a consistent health plan.
          <br /><br />
          This research proposes an intelligent Lifestyle Management System (LMS) that combines OCR, disease prediction, and AI-driven personalization. Users can upload blood reports via a mobile app, which automatically extracts data and uses it along with physical metrics like height and weight to generate personalized meal plans, fitness routines, and stress management tips. This system aims to improve accessibility, engagement, and preventive healthcare for young adults by offering a holistic, real-time, and user-friendly solution.
        </p>
      </div>
    )
  },
  {
    label: 'Research Gap',
    key: 'gap',
    content: (
      <div className="space-y-6">
        <img src={gap} alt="Research Gap" className="mx-auto rounded-md max-w-sm" />
        <p>
          Despite advancements in digital health, current systems still lack true personalization and efficiency. Most mobile apps depend on manual data entry, offer generic advice, and don’t utilize crucial health data like blood test results for accurate disease prediction.
          <br /><br />
          A key technological gap is the limited use of OCR to extract data from scanned reports. Most apps don’t support automated extraction, making the process slow and error-prone. Additionally, many systems only focus on one disease, ignoring the need for multi-disease risk prediction for conditions like anemia and heart disease.
          <br /><br />
          Current platforms also fail to adapt to users’ changing health data and rarely integrate diet, exercise, and stress management into one solution. This leads to fragmented care and poor user engagement, especially for young adults aged 18–40, who are at growing risk due to stress and unhealthy habits yet remain underserved.
          <br /><br />
          Other issues include poor UI design, lack of real-time feedback, minimal accessibility, weak privacy measures, and limited healthcare integration.
          <br /><br />
          The proposed Lifestyle Management System (LMS) addresses these issues by combining OCR, machine learning, and user-focused design. It extracts and analyzes blood report data, predicts multiple health risks, and generates personalized diet, exercise, and stress plans in real-time—specifically designed for young adults seeking a complete, adaptive health solution.
        </p>
      </div>
    )
  },
  {
    label: 'Research Objective',
    key: 'objective',
    content: (
      <div className="space-y-6">
        <img src={objectives} alt="Research Objective" className="mx-auto rounded-md max-w-sm" />
        <div className="space-y-4">
          <p><strong><u>Main Objective</u></strong></p>
          <p>
            The main objective of this research is to develop an intelligent <strong>Lifestyle Management System (LMS)</strong> that helps individuals predict disease risks and manage their health more effectively using personal data such as blood test results, height, and weight.
          </p>

          <p><strong><u>Specific Objectives</u></strong></p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong><u>Identifying Diseases:</u></strong> Blood test data is used to inform users about disease risks (e.g., cholesterol, sugar, hemoglobin).</li>
            <li><strong><u>Getting an Exercise Schedule:</u></strong> Personalized workout plans based on BMI and calorie burn.</li>
            <li><strong><u>Get a Meal Plan Recipe:</u></strong> Customized meal plans using user preferences, weight, and height.</li>
            <li><strong><u>Managing Stress:</u></strong> Stress level detection using biometric data with helpful tips and routines.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    label: 'Methodology',
    key: 'methodology',
    content: (
      <div className="space-y-6">
        <img src={methodology} alt="Methodology" className="mx-auto rounded-md max-w-sm" />
        <p>
          This project developed a mobile app that uses machine learning and OCR to predict disease risk, generate personalized meal recipe and exercise plans, and support stress management. Built with an MVC architecture, the app ensures scalability and ease of maintenance. 
          <br /><br />
          Public datasets on diabetes, heart disease, and anemia were used. Data preprocessing included normalization and feature selection. The Random Forest model was selected for deployment based on performance. OCR with Google Cloud Vision API extracts data from blood reports.
          <br /><br />
          The frontend was developed using Flutter, backend with Python FastAPI, and Firebase for real-time data storage. The system combines user data and health metrics to give tailored insights with visual reports to track health trends and encourage preventive care.
        </p>
      </div>
    )
  },
  {
    label: 'Technology',
    key: 'technology',
    content: technologiesContent
  }
];

// ✅ Main Component
const ProjectDomain = () => {
  const [activeTab, setActiveTab] = useState('literature');

  return (
    <section id="domain" className="px-4 sm:px-6 lg:px-20 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-left">
          <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-wider">Domain</h2>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Project Domain</h2>
        </div>

        {/* ✅ Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
          {sections.map((section) => (
            <button
              key={section.key}
              onClick={() => setActiveTab(section.key)}
              className={`px-6 py-3 text-sm sm:text-base rounded-xl transition-all duration-200 ${
                activeTab === section.key
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-gray-100 hover:bg-blue-100 text-gray-800'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* ✅ Content Display */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-md">
          {sections.find((section) => section.key === activeTab)?.content}
        </div>
      </div>
    </section>
  );
};

export default ProjectDomain;



