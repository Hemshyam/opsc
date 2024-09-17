import React from 'react'

import ShineBorder from "@/components/magicui/shine-border";
const Dept = ({ props }) => {
    return (
        <div className='depls'>
            <ShineBorder
                className="dep" key={props.id}
                color={["#1a759f", "#0000", "#34a0a4"]}
                duration={20}
                borderWidth={2}
                borderRadius={20}
            >
                <span style={{ scale: 1.25 }}>{props.icon}</span>
                <span style={{ fontSize: 22 }}>{props.name}</span>
                <span style={{ width: 300, flexWrap: 'wrap', textAlign: 'center' }} className='h-48 text-wrap text-blue-400'> {props.description}</span>

            </ShineBorder>
        </div >
    )
}

export default Dept
