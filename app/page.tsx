"use client";
import * as React from "react";
import { Parallax , ParallaxLayer } from "@react-spring/parallax"



import classes from './page.module.scss';


export default function Home() {





  return (
    <main className={classes.main}>
     <Parallax pages={2.2}>
     <ParallaxLayer
          offset={0}
          speed={2.5}
          factor={2}
          style={{
            backgroundImage: `url(/img/night.jpg)`,
            backgroundSize: 'cover',
            filter : 'grayscale(100%)' ,
          }}
        />
        <ParallaxLayer sticky={{start:0 , end:0.82}}>
        <article className={classes.article}>
              <h2>What is this about ? </h2>
              <p>This is my blog page where you will find articles covered by me some will be mine some will be articles that i like  </p>
        </article>
        </ParallaxLayer>
        <ParallaxLayer sticky={{start:0.94 , end:0.95}}>
        <article className={`${classes.article} ${classes.second}`}>
              <h2>Who am i ? </h2>
              <p>20 year old student of cumputer science who is intrestend in Front-end development</p>
        </article>
        </ParallaxLayer>
        <ParallaxLayer sticky={{start:1.13 , end:2.3}}>
        <article className={`${classes.article} ${classes.third}`}>
              <h2>What to do ? </h2>
              <p>Choose te blog topic from header ! I hope you will like my page</p>
        </article>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.999}
          speed={1}
          factor={2.5}
          style={{
            backgroundImage: `url(/img/dark.jpeg)`,
            backgroundSize: 'cover',
            filter : 'grayscale(100%)' ,
          }}
        ></ParallaxLayer>
     </Parallax>
    </main>
  )
}
