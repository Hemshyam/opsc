"use client";
import React from 'react'
import Home from "./components/Home"
import Departments from './components/Departments'
import Projects from './components/projects'
import Navbar from './components/navbar'
import About from './components/About'
import Image from 'next/image'
import Logo from '../app/public/open_source_logo_v2.2-removebg-preview.png'
import Footer from './components/Footer'
import './globals.css'
import Load from './components/load'
import { useState, useEffect } from 'react'

const page = () => {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    const fetchLoad = () => {
      setTimeout(() => {
        setLoader(true);
      }, 3000)
    }
    fetchLoad();
  }, [])
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
        else {
          entry.target.classList.remove('show');
        }
      })
    })
    const hiddenElement = document.querySelectorAll('.hidden');
    hiddenElement.forEach((el) => observer.observe(el));
  });
  return (
    <>{
      loader ?
        <main>

          < Navbar />
          <Home />
          <About />
          <Departments />
          <Projects />
          <Footer />
        </main > : <Load />
    }
    </>
  )
}

export default page
