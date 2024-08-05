import { useState } from 'react'
import './App.css'
import Signin from './Components/Signin'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Components/Main'
import NewsDetails from './Components/NewsDetails'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
<Route path='/signin' element={<Signin/>} />
<Route path='/' element={<Main/>} />
<Route path='/details' element={<NewsDetails/>} />

    </Routes>
    </BrowserRouter>
    {/* <Signin/> */}
    
    </>
  )
}

export default App
