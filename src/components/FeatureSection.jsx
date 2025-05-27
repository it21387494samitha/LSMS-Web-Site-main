// import React from 'react'

// //Feature Sections

// const features = [
//     {
//         icon: "🩺",
//         title: "Identify Diseases",
//         description: "we can predict your diseases risk level using your blood report data"
//     },
//     {
//         icon: "🍴",
//         title: "Diet Plan",
//         description: "we can suggest dieat plan match for your health level"
//     },
//     {
//         icon: "🏃🏻",
//         title: "Exercise Shecdule",
//         description: "we provide exercise shedule and we can track your daily exercise rooting"
//     },
//     {
//         icon: "🤕",
//         title: "Stress Management",
//         description: "we can identify your Stress level and suggest activities for manage your stress"
//     },
// ]

// const FeatureSection = () => {
//   return (
//     <section className='max-w-7xl mx-auto px-4 py-16'>
//         {/* heading text */}
//         <div className='text-center mb-12'>
//             <h2 className='text-3xl font-bold mb-4'>How can we help your Health?</h2>
//             <p className='text-gray-600'>We are track your health level individually </p>
//         </div>

//         {/* feature boxes */}
//         <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
//             {features.map((feature, index) => (
//                 <div key={index} className='flex flex-col text-center items-center p-6'>
//                     <div className='w-24 h-24 rounded-full mb-6 flex items-center justify-center' style={{
//                         backgroundColor: index === 0? "#4E7EE6FF" : index === 1 ? "#DA3D3DFF" : index === 2 ? "#A1845FFF" : "#F5AC54FF"
//                     }}>
//                         <div className='text-3xl'>{feature.icon}</div>
//                     </div>

//                     <h3 className='text-2xl font-medium mb-3'>{feature.title}</h3>
//                     <p className='text-gray-500 text-center'>{feature.description}</p>
//                 </div>
//             ))}
//         </div>

//         {/* button */}
//         <div className='text-center mt-12'>
//             <button className='bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full font-medium
//              hover:bg-blue-700 transition-colors relative'>Become a Partner
             
//                 <div className='absolute -z-10 w-full rounded-full bg-blue-600/50 blur-xl top-0 left-0'></div>
//              </button>
//         </div>

//     </section>
//   )
// }

// export default FeatureSection



import React from 'react'

// Feature Sections
const features = [
    {
        icon: "🩺", // Medical stethoscope for "Identify Diseases"
        title: "Identify Diseases",
        description: "We can predict your disease risk level using your blood report data",
        bgColor: "#4E7EE6FF", // calming blue
    },
    {
        icon: "🥗", // Salad bowl for "Diet Plan"
        title: "Diet Plan",
        description: "We can suggest a diet plan matched to your health level",
        bgColor: "#3CB371", // medium sea green
    },
    {
        icon: "🏋️‍♂️", // Weightlifting for "Exercise Schedule"
        title: "Exercise Schedule",
        description: "We provide exercise schedules and track your daily exercise routine",
        bgColor: "#DAA520", // goldenrod
    },
    {
        icon: "🧘‍♀️", // Person meditating for "Stress Management"
        title: "Stress Management",
        description: "We identify your stress level and suggest activities to manage it",
        bgColor: "#FF6347", // tomato red
    },
]

const FeatureSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16'>
      {/* heading text */}
      <div className='text-center mb-12'>
        <h2 className='text-3xl font-bold mb-4'>How can we help your Health?</h2>
        <p className='text-gray-600'>We track your health level individually</p>
      </div>

      {/* feature boxes */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
        {features.map((feature, index) => (
          <div
            key={index}
            className='flex flex-col text-center items-center p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer'
          >
            <div
              className='w-24 h-24 rounded-full mb-6 flex items-center justify-center'
              style={{ backgroundColor: feature.bgColor }}
            >
              <div className='text-3xl'>{feature.icon}</div>
            </div>

            <h3 className='text-2xl font-medium mb-3'>{feature.title}</h3>
            <p className='text-gray-500 text-center'>{feature.description}</p>
          </div>
        ))}
      </div>

      {/* button */}
      <div className='text-center mt-12'>
        <button className='bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full font-medium
          hover:bg-blue-700 transition-colors relative'>
          Become a Partner
          <div className='absolute -z-10 w-full rounded-full bg-blue-600/50 blur-xl top-0 left-0'></div>
        </button>
      </div>
    </section>
  )
}

export default FeatureSection
