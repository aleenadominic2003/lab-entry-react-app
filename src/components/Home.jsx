import React from 'react'
import NavigationBar from './NavigationBar'

const Home = () => {
  return (
    <>
    <NavigationBar />

    <div className="container mt-5">
      <h1 className="text-center">LAB ENTRY APP</h1>

      <h2 className="text-center mt-4">
        Welcome to Our Lab Entry App
      </h2>

      <p className="mt-3 text-center">
       Lab Entry App Description

The Lab Entry App is a web-based application developed to manage and maintain student laboratory entry records efficiently. It enables users to record and store details such as the student's name, department, semester, course, system number, login time, logout time, and date. The application provides APIs to add new lab entry records and retrieve all existing records from the database.

The backend is built using Node.js, Express.js, and MongoDB with Mongoose for database management. The application uses RESTful APIs to perform data insertion and retrieval, making it easy to integrate with a frontend application.
      </p>
    </div>
    </>
  )
}

export default Home