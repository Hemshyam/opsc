"use client";
import React from 'react'
import { projects } from '../../Schema/indexproj'
import { useEffect, useState } from "react";
import Particles from "@/components/magicui/particles";
import Proj from "./proj"
import DotPattern from "@/components/magicui/dot-pattern";
import BlurIn from "@/components/magicui/blur-in";

const Projects = () => {
    return (
        <section id='projects'>

            <span className='sectionhead '>Our Projects</span>
            <div className='projls text-black h-48 text-wrap '>

                {projects.map(proj => (
                    <Proj props={proj}></Proj>
                ))}

            </div>
            <Particles
                className="particlebg z-50"
                quantity={50}
                ease={80}
                color={'#fffff'}
            />
        </section >
    )
}

export default Projects;