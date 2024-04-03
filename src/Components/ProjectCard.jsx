import React from 'react'

import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>    <Card style={{ width: '300px',height:'400px' }} onClick={handleShow}>
    <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/002/248/232/original/programmer-computer-expert-chalk-white-icon-on-black-background-vector.jpg"
    width={'100%'} height={'300px'} />
    <Card.Body>
      <Card.Title className='text-center'>Project Title</Card.Title>
     
    </Card.Body>
  </Card>
  <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-6'>
              <img width={'100%'} src="https://static.vecteezy.com/system/resources/previews/002/248/232/original/programmer-computer-expert-chalk-white-icon-on-black-background-vector.jpg" alt="" />
            </div>
    
          <div className='col-6 text-center'>
            <h2>Project Title</h2>
            <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto perferendis reiciendis excepturi a laboriosam minima atque animi. Repudiandae dolorem, veniam veritatis quaerat, consectetur impedit ullam recusandae atque, ipsam sunt in.</p>
          <p>Technology used : <b>React,Node</b></p>
          
          </div>
          </div>
          
        </Modal.Body>
        <Modal.Footer>
          
          <div className='d-flex justify-content-between'>
            <Button className='me-5'><a href=""><FaGithub /></a></Button>
            <Button className='me-5'><a href=""><FaLink /></a></Button>
            
            
          </div>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  
  </div>
  )
}

export default ProjectCard