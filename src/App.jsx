import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import AddEntry from './components/AddEntry'
import View from './components/View'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/add-lab' element={<AddEntry/>} />
          <Route path='/view-lab' element={<View/>} />


        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
