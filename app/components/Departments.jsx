"use client";
import React from 'react'
import { depar } from '../../Schema/index'
import { useEffect, useState } from "react";
import Particles from "@/components/magicui/particles";
import Dept from "./Dept"
import DotPattern from "@/components/magicui/dot-pattern";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { Target } from 'lucide-react';

const Departments = () => {

  return (
    <section id='departments'>

      <span className='grad1'></span>
      <span className='grad2'></span>
      <span className='grad3'></span>
      <span className='grad4'></span>

      <span className='sectionhead '>Our Departments</span>

      <div className='depls text-black h-48 text-wrap'>
        {depar.map(dep => (
          <Dept props={dep}></Dept>
        ))}
      </div>
      <Particles
        className="particlebg z-50"
        quantity={100}
        ease={80}
        color={'#fffff'}
      />
    </section >
  )
}

export default Departments;