import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"

import { PiGearSixLight } from "react-icons/pi";

import { taskOptionsVariants } from "../data/framerMotion"

import TaskStyles from "../styles/Taskbar.module.css"

const Taskbar = () => {

    const [timeString, setTimeString] = useState("");

    const [openOptions, setOpenOptions] = useState(false)

    useEffect(() => {
        const intervalId = setInterval(() => {
            const time = new Date();
            setTimeString(time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }));
        }, 100);

        const time = new Date();
        setTimeString(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));



        return () => clearInterval(intervalId);
    }, [])

    return (
        <div className={TaskStyles.taskbar}>
            
            <div className={TaskStyles.options_tabs}>

                <motion.div animate={openOptions ? "open" : "closed"} variants={taskOptionsVariants}>

                </motion.div>

                <button type='button' className={TaskStyles.options_button} onClick={() => setOpenOptions(!openOptions)}>
                    <PiGearSixLight />
                </button>


            </div>

            <div className={TaskStyles.time_author}>
                <span className={TaskStyles.time}>{timeString}</span>
                {/* <span>Image from wallspic</span> */}
            </div>
        </div>
    )
}

export default Taskbar