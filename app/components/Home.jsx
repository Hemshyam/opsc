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
const Home = () => {
    return (
        <section className='hcontainer' id="home">
            <GradualSpacing
                className="homegreet1 homegreet max-sm:text-lg"
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
                <div className='hometick'>Projects <NumberTicker value={20} className='text-3xl' />+</div>
                <div className='hometick'>Members <NumberTicker value={30} />+</div>

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