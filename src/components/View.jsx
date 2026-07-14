import React, { useEffect, useState } from 'react'

import axios from 'axios'
import NavigationBar from './NavigationBar'

const View = () => {

    const[data,changData]=useState(

        [

            
        ]

    )
    const fetchData = () => {

        axios.get("http://localhost:3000/view-lab").then(

            (response) => {

                changData(response.data)

            }

        ).catch()

    }
    useEffect(

        () => {

            fetchData()

        },[]

    )
  return (
    <div>
        <NavigationBar />
<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <div className="row g-3">
           

          <div className="table-responsive">
  <table className="table table-bordered table-striped table-hover">
    <thead className="table-dark">
      <tr>
        
        <th>Name</th>
        <th>department</th>
        <th>Semester</th>
        <th>Course</th>
        <th>System NO</th>
        <th>Login time</th>
        <th>Logout Time</th>
        <th>Date</th>
        
        
      </tr>
    </thead>
    <tbody>
      {data.map((value, index) => (
        <tr key={index}>
          
          <td>{value.name}</td>
          <td>{value.department}</td>
          <td>{value.sem}</td>
          <td>{value.course}</td>
          <td>{value.systemNo}</td>
          <td>{value.loginTime}</td>
          <td>{value.logoutTime}</td>
          <td>{value.date}</td>
         
          <td>
            <button className="btn btn-primary btn-sm">
              View Details
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

            
           
        </div>

        </div>
    </div>
</div>


    </div>
  )
}

export default View