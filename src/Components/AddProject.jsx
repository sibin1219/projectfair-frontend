import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddProject() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <Button onClick={handleShow} className='btn btn-light text-dark m-5'>Add</Button>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='row'>
            <div className='col-6 mt-4 p-5'>
        <label >
          
          <input type="file" style={{display:'none'}} />
          
          <img width={'200px'}  src="https://th.bing.com/th/id/OIP.F5GE1m5a2Ei8wY8loW-3AgHaHa?rs=1&pid=ImgDetMain" alt="" />
        </label>
        
        </div>

        
        <div className='col-6 text-center' >
          <input type="text" placeholder='Project title' className='form-control mb-3 ' />
          <input type="text" placeholder='Language Used' className='form-control mb-3' />
          <input type="text" placeholder='Github Link' className='form-control mb-3' />
          <input type="text" placeholder='Live Link' className='form-control mb-3' />
          <input type="text" placeholder='Overview' className='form-control mb-3' />
          
        </div>
        </div>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="light">Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProject