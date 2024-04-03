import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  import { LiaLaptopSolid } from "react-icons/lia";


function Header() {
  return (
    <div > <MDBNavbar id='hed'>
    <MDBContainer fluid>
      <MDBNavbarBrand href='/' id='nav'>
      <LiaLaptopSolid id='lapicon' />
       Project Fair
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar></div>
  )
}

export default Header