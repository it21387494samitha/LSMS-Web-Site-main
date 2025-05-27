
import { Features } from 'tailwindcss'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
// import Technology from './components/Technology'
import FeatureSection from './components/FeatureSection'
import Getintouch from './components/Getintouch'
import Domain from './components/Domain'
import Milestones from './components/Milestones'
import About from './components/About'
import Presentations from './components/Presentations'
import Documents from './components/Documents'



function App() {


  return (
    // <main className='relative min-h-screen overflow-x-hidden'>
    //   <div className='absolute -top-28 -left-28 w-[900px] h-[900px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10'>
    //   </div>
    //   <div className='overflow-hidden'>
    //     <Navbar />
    //     <Hero />
    //   </div>
    // </main>

    <main className='relative min-h-screen overflow-x-hidden'>
      {/* Left Gradient Blob */}
      <div className='absolute -top-28 -left-28 w-[900px] h-[900px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10'></div>

      {/* Right Gradient Blob */}
      <div className='absolute -top-28 -right-28 w-[900px] h-[900px] bg-gradient-to-tr from-pink-500/20 to-indigo-500/20 rounded-full blur-[80px] -z-10'></div>

      <div className='overflow-hidden'>
        <Navbar />
        <Hero />
        <Domain />
        <Milestones />
        <Documents />
        <Presentations />
        <About />        
        <FeatureSection />
        <Getintouch />
      </div>
    </main>

  )
}

export default App
