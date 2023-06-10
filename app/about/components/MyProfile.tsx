"use client";
import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import myImage from "../../../public/img/[removal.ai]_tmp-64822d70be201_FDQPM6.png";
import classes from "./MyProfile.module.scss";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const MyProfile = () => {
  return (
    <div className={classes.info}>
        <p>Hello ! 🖐️ if you are like my site you can visit my medias , especially i invite to visit my GitHub to see my projects ! </p>
      <div className={classes.icons}>
      <motion.div
          animate={{ scale: 1.5 }}
          initial={{ scale: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link href={"https://github.com/FilipKrz03"}>
            <GitHubIcon fontSize="large" color="secondary" />
          </Link>
        </motion.div>
        <motion.div
          animate={{ scale: 1.5 }}
          initial={{ scale: 0 , }}
          transition={{ delay: 0.5 }}
        >
          <Link href={"https://www.facebook.com/"}>
            <FacebookIcon fontSize="large" color="secondary" />
          </Link>
        </motion.div>
        <motion.div
          animate={{ scale: 1.5  }}
          initial={{ scale: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Link href={"https://www.facebook.com/"}>
            <InstagramIcon fontSize="large" color="secondary" />
          </Link>
        </motion.div>
        <motion.div
          animate={{ scale: 1.5}}
          initial={{ scale: 0 }}
          transition={{ delay: 0.9 }}
          
        >
          <Link href={"https://www.facebook.com/"}>
            <TwitterIcon fontSize="large" color="secondary" />
          </Link>
        </motion.div>
      </div>
      <div className={classes.more}>
      <Image src={myImage} width={300} height={400} alt="My Image" />
      <TypeAnimation
      className={classes.gradient}
      speed={25}
      style={{ whiteSpace: 'pre-line', height: '360px', display: 'block' , width:'300px' , fontSize:'50px',}}
      sequence={[
        `My Skills:\n` , 2200 , 
        `HTML\nCSS/SCSS\nJavascript\nReact/Redux\nTypescript\nNext.js`
      ]}
      />
      </div>
    </div>
  );
};

export default MyProfile;
