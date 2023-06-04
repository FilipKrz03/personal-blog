"use client";
import React , {useRef} from 'react'
import getMainPost from '@/lib/getMainPost';
import getMainSmallPosts from '@/lib/getMainSmallPosts';
import Lottie , {LottieRefCurrentProps} from "lottie-react";
import welcome from '../../public/welcome.json';
import { motion } from "framer-motion";
import classes from './page.module.scss';


export default async function MyPosts() {

  const welcomeRef = useRef<LottieRefCurrentProps>(null);
  const data = await getMainSmallPosts();
  console.log(data);

  return (
    <div className={classes.page}>
    <motion.div animate={{y:-30}} initial={{y:-340}} transition={{duration:0.2}} className={classes.animation}>
      <Lottie lottieRef={welcomeRef} onComplete={()=>{
        welcomeRef.current?.destroy()
      }} animationData={welcome} style={{width:'250px' , zIndex:20}} loop={false}  />
    </motion.div>
    </div>
  )
}
