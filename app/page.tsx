import React from 'react'
import Home from "./components/Home"
import Departments from './components/Departments'
import Projects from './components/projects'
import Navbar from './components/navbar'
import About from './components/About'
import Image from 'next/image'
import Logo from '../app/public/open_source_logo_v2.2-removebg-preview.png'
const page = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Departments />
      <Projects />
      <About />
    </>
  )
}

export default page
