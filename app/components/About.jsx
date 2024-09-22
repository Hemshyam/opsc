"use client"
import React from 'react'
import { VelocityScroll } from '@/components/magicui/scroll-based-velocity'
import Particles from "@/components/magicui/particles";
import Image from 'next/image';
import { Youtube, Instagram } from 'lucide-react';
import YTLogo from '../public/yt_logo.svg'
import LinkedInLogo from '../public/linkedin_logo.svg'
import WhatsappLogo from '../public/whatsapp_logo.svg'
import InstagramLogo from '../public/instalogo.svg'
import DiscordLogo from '../public/discord_logo.svg'
import TextReveal from "@/components/magicui/text-reveal";
import { abtmsg } from '@/Schema';

const About = () => {
    return (
        <section id='about'>
            <span className='sectionhead '>About Us</span>
            <div className="aboutcontainer ">
                {abtmsg.map(abt =>
                    <div key={abt.id} className='abtcard'>
                        <p className='abtcardtitle'>{abt.title}</p>
                        <p className='abtcardmsg'>{abt.msg}</p>
                    </div>
                )}

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

export default About