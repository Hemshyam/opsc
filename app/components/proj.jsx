import React from 'react'


import ShineBorder from "@/components/magicui/shine-border";
const Proj = ({ props }) => {
    return (
        <div className='deps'>
            <div className='dep'>
                <span style={{ scale: 1.25 }}>{props.icon}</span>
                <span style={{ fontSize: 22 }}>{props.name}</span>
                <span style={{ width: 300, flexWrap: 'wrap', textAlign: 'center' }} className='h-48 text-wrap text-blue-400'> {props.description}</span>
            </div>
        </div >
    )
}

export default Proj
