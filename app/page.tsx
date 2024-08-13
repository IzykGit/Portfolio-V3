"use client"

import Image from "next/image"

import React, { useEffect, useState } from 'react'

import HomeStyles from "./page.module.css"

import background from "../public/abstractbackground.jpg"
import Taskbar from "./components/Taskbar"

const Home = () => {

    return (
        <main className={HomeStyles.main}>

            <div className={HomeStyles.back_color}></div>

            <div className={HomeStyles.background_container}>
                <Image src={background} className={HomeStyles.background} alt=""/>
            </div>


            <div className={HomeStyles.content_container}>

                <Start />

                <Taskbar />

            </div>


        </main>
    )
}

export default Home