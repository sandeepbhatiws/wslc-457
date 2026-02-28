import React, { useState } from 'react'
import FormData from './FormData'
import TableData from './TableData'

export default function HomePage() {

  var getData = localStorage.getItem('userInfo');
  var getData = JSON.parse(getData);

  const [userData, setUserData] = useState(getData ? getData : []);


  return (
    <>
      <div className='container-fluid p-5'>
        <div className='container'>
          <div className='row text-center mb-4'>
            <h1>User Enquiry</h1>
          </div>
          
          <FormData userData={userData} setUserData={setUserData}/>
        </div>
      </div>

      <div className='container-fluid'>
        <div className='container'>
          <div className='row text-center mb-4'>
            <h1>User Details</h1>
          </div>
          
          <TableData userData={userData}/>
        </div>
      </div>
    </>
  )
}
