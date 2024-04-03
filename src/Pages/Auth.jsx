import React from 'react'
import { Link } from 'react-router-dom'


function Auth({register}) {
  return (
    <div>
      <div className='row'>
        <div className="col-lg-6">
<img src="https://pastorsline.com/wp-content/uploads/2020/03/keeping_relevant_600x600.png" alt="" width={'100%'}
className='p-4'/>
        
        </div>
        <div className="col-lg-6">
          <form className='shadow bg-black' action="">
            <h2 className='text-center m-5'>Project Fair</h2>
            <h4 className='text-center'>
            {
              register?'Register Here':'Login Here...'
            }
            </h4>
            <div className='m-5 p-5'>
              {
                register &&
                <input className='form-control mb-2' type="text" placeholder='Username' />
              }
              <input className='form-control mb-2' type="email" placeholder='email' />
                <input className='form-control mb-2' type="password" placeholder='password' />
            </div>
            <div>
              {
                register ?
                <div className='text-center m-4'>
                  <button className='btn btn-dark m-4'>Register </button>
                  <p>Already registered <Link to={'/login'}>Login Here...</Link></p>
                </div>
                  :
                <div  className='text-center m-4'>
                  <button className='btn btn-dark m-4'>Login </button>
                  <p>New to here?<Link to={'/register'}>Register Here...</Link></p>
                </div>
            
              }
              
            </div>
          </form>

        </div>

      </div>
    </div>
  )
}

export default Auth