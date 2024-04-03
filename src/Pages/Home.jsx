import React from 'react'
import { Link } from 'react-router-dom'
import ooo from '../assets/ooo.webp'
import ProjectCard from '../Components/ProjectCard'


function Home() {
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <h1 className='text-center mt-5'>Project Fair</h1>
          <p style={{textAlign:'justify'}} className='mx-5'>A project is a series of structured tasks, activities, and deliverables that are carefully executed to achieve a desired outcome. They are temporary efforts to create value through unique products, services and processes.Each aspect of a project must go through the phases of the project lifecycle before reaching an end goal. This lifecycle allows project managers to execute each phase of their project effectively. It enables them to plan each task and activity meticulously, ensuring the highest chances of a project’s success.</p>
        </div>
        <div className='col-md-6'>
        <img src={ooo} alt="" />
      </div>
        <div className="text-center">
          <Link to={'/login'}><button href="/auth" className='btn btn-dark m-5'>Get Started </button></Link>
          
        </div>
      </div>
<div className="row">
  <div className="col-12">
    <h1 className='text-center m-5'>Explore Our Projects</h1>
    <marquee width="100%" direction="left" height="500px">
        <ProjectCard/>
</marquee>
  </div>
</div>



<div className='row mx-5'>
  <div className="col-md-4">
    <div className='card shadow p-5'>
      <h1>Web Designing</h1>
      <p className=''>Web design is the creation of websites and pages to reflect a company’s brand and information and ensure a user-friendly experience. Appearance and design are incorporated as vital elements whether you’re designing a website, mobile app or maintaining content on a web page.</p>


    </div>
  </div>
  <div className="col-md-4">
  <div className='card shadow p-5'>
      <h1>Single Page Application</h1>
      <p className=''>Web design is the creation of websites and pages to reflect a company’s brand and information and ensure a user-friendly experience. Appearance and design are incorporated as vital elements whether you’re designing a website, mobile app or maintaining content on a web page.</p>

    </div>
  </div>
  <div className="col-md-4">
  <div className='card shadow p-5'>
      <h1>Our Services</h1>
      <p className=''>Web design is the creation of websites and pages to reflect a company’s brand and information and ensure a user-friendly experience. Appearance and design are incorporated as vital elements whether you’re designing a website, mobile app or maintaining content on a web page.</p>

    </div>
  </div>
</div>




     
    </div>
  )
}

export default Home