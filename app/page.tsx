import Image from "next/image"

import HomeStyles from "./page.module.css"

import backGif from "../public/35_224191,138.gif"

const page = () => {



    return (
        <main className={HomeStyles.main}>

            <div className={HomeStyles.back_color}></div>

            <div className={HomeStyles.backgif_container}>
                <Image src={backGif} className={HomeStyles.backgif} alt=""/>
                <span>Image by waneella</span>
            </div>

            

        </main>
    )
}

export default page