import React from 'react'
import AddProject from './AddProject'
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

function MyProject() {
  return (
    <div>
        <div className='d-flex justify-content-between'>
            <h3 className='ms-5'>My Projects</h3>
            <AddProject/>
        </div>
        <div className='row shadow  m-4 border'>
            <div className='col-6'>
                <h4>Project Title</h4>
            </div>
            <div className='col-6 d-flex '>
                <button className='btn'><FaGithub /></button>
                <button className='btn'> <FaLink /></button>
                <button className='btn'></button>
            </div>
        </div>
    </div>
  )
}

export default MyProject