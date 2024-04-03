import React from 'react'




function Profile() {
  const updateuser =()=>{
   
  } 


  return (
    <div>
      <div className='text-center'>
        <label >
          
          <input type="file" style={{display:'none'}} />
          <h1>My Profile</h1>
          <img width={'200px'}  src="https://th.bing.com/th/id/OIP.DXv2Ji1Gmx-TswhR7x2fgAHaHS?w=670&h=660&rs=1&pid=ImgDetMain" alt="" />
        </label>
        <div className='mx-5-px-5' style={{width:'700px'}}>
          <input type="text" placeholder='Name' className='form-control mb-2 mt-2' />
          <input type="text" placeholder='Github' className='form-control mb-2' />
          <input type="text" placeholder='Live Link' className='form-control mb-2' />
          <button  className='btn btn-dark m-4' >Update</button>
        </div>
      </div>
    </div>
  )
}

export default Profile