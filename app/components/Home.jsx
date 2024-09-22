"use client"
import React from 'react'
import Particles from '@/components/magicui/particles'
// import HyperText from '@/components/magicui/hyper-text'
import GradualSpacing from '@/components/magicui/gradual-spacing'
import { motion } from 'framer-motion'
import NumberTicker from '@/components/magicui/number-ticker'
import Image from 'next/image'
import Image1 from '../public/vlc.svg'
import Image2 from '../public/blender.svg'
import Image3 from "../public/gimp.svg"
import Image4 from '../public/linux.svg'
import IconCloud from "@/components/magicui/icon-cloud";
const slugs = [
    "gimp",
    "linux",
    "firefox",
    "android",
    "java",
    "wordpress",
    "blender",
    "ubuntu",
    "libreoffice",
    "odoo",
    "joomla",
    "obs-studio",
    "apache",
    "CAD",
    "eda",
    "thunderbird",
    "kubernetes",
    "docker",
    "opensuse",
    "postgresql",
    "mysql",
    "audacity",
    "inkscape",
    "kdenlive",
    "vlc"
];


const Home = () => {
    return (
        <section className='hcontainer' id="home">
            <GradualSpacing
                className="homegreet1 homegreet sm:text-2xl"
                text="WELCOME TO"
            />
            <GradualSpacing
                className="homegreet2 homegreet"
                text="OPEN SOURCE PROGRAMMING CLUB"
            />
            {/* <div className='img'>
                <Image src={Image1} alt='hello' height={50} />
                <Image src={Image2} alt='hello' height={50} />
                <Image src={Image3} alt='hello' height={50} />
                <Image src={Image4} alt='hello' height={50} />
            </div> */}
            <motion.div initial={{ opacity: 0, backdropFilter: "blur(10px)", scale: 0.9 }} whileInView={{ opacity: 1, backdropFilter: "blur(0)", scale: 1 }} className='goal'>"Empowering innovation through open-source software, building impactful projects that serve society, and sharing knowledge for a better tomorrow."</motion.div>

            <div className='hometickers'>
                <div className='hometick'>Projects <NumberTicker value={20} className='text-3xl' color="blue" />+</div>
                <div className='hometick'>Members <NumberTicker value={30} />+</div>
            </div>

            <div className="absolute flex items-center justify-center h-screen w-screen" style={{ zIndex: '5', opacity: '0.3' }}>
                <IconCloud iconSlugs={slugs} freezeDecel="true" maxSpeed={0.01} />
            </div>

            <Particles
                className="particlebg z-50"
                quantity={100}
                ease={80}
                color={'#fffff'}
            />
        </section>
    )
}

export default Home