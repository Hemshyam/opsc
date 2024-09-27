import React from 'react'
import './navbar.css'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import Logo from '../public/OSPC_logo.jpeg-removebg-preview.png'

const navbar = () => {
    return (

        <nav className='flex justify-center fixed'>
            <div className='navbar' >
                <Image src={Logo} height={50} width={50} />
                <ul className='flex justify-center self-center snap-center align-middle' >

                    <li><Link href="#Home" >Home</Link></li>
                    <li><Link href="#about">About</Link></li>
                    <li><Link href="#departments">Departments</Link></li>
                    <li><Link href="#projects">Projects</Link></li>

                </ul>


            </div>
        </nav>
    )
}

export default navbar