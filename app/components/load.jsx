"use client"
import React, { useEffect, useState } from 'react'

const Load = () => {
    const [disappear, setDisappear] = useState(false);
    useEffect(() => {
        const fetchLoad = () => {
            setTimeout(() => {
                setDisappear(true);
            }, 1000)
        }
        fetchLoad();
    }, [])
    return (
        <div className="loadsrc">
            <div className="loadcon">
                <div className="vechicle">
                    {disappear ? <span style={{ fontWeight: "700" }}>O</span> : <span className='veh'>O</span>}
                    {disappear ? null : <span className='icle'>PEN</span>}
                </div>
                <div className="vechicle">
                    {disappear ? <span style={{ fontWeight: "700" }}>S </span> : <span className='veh'>S</span>}
                    {disappear ? null : <span className='icle'>OURCE</span>}
                </div>
                <div className="vechicle">
                    {disappear ? <span style={{ fontWeight: "700" }}>P</span> : <span className='veh'>P</span>}
                    {disappear ? null : <span className='icle'>ROGRAMMING</span>}
                </div>
                <div className="vechicle">
                    {disappear ? <span style={{ fontWeight: "700" }}>C</span> : <span className='veh'>C</span>}
                    {disappear ? null : <span className='icle'>LUB</span>}
                </div>
            </div>
        </div>
    )
}

export default Load