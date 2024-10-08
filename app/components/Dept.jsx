import React from 'react'

import ShineBorder from "@/components/magicui/shine-border";
const Dept = ({ props }) => {
    return (
        <div className='depls'>
            <div
                className="dep" key={props.id}
                color={["#1a759f", "#0000", "#34a0a4"]}
            >
                <span style={{ scale: 1.25 }}>{props.icon}</span>
                <span style={{ fontSize: 22, color: "rgb(132, 237, 255)" }}>{props.name}</span>
                <span style={{ width: 300, flexWrap: 'wrap', textAlign: 'center' }} className='h-48 text-wrap text-blue-400'> {props.description}</span>

            </div>
        </div >
    )
}

export default Dept
