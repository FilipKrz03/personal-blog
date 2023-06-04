"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Lottie , {LottieRefCurrentProps} from "lottie-react";
import welcome from '../../../../public/welcome.json';

const StartAnimation = () => {

    const welcomeRef = useRef<LottieRefCurrentProps>(null);

    return (
    <motion.div animate={{y:-30}} initial={{y:-340}} transition={{duration:0.2}}>
    <Lottie lottieRef={welcomeRef} onComplete={()=>{
      welcomeRef.current?.destroy()
    }} animationData={welcome} style={{width:'250px' , zIndex:20}} loop={false}  />
  </motion.div>
    )

}

export default StartAnimation;