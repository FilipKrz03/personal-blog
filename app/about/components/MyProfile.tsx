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

const MyProfile = () => {
  return (
    <div className={classes.info}>
        <p>Hello ! 🖐️ if you are like my site you can visit my medias , especially i invite to visit my GitHub to see my projects ! </p>
      <div className={classes.icons}>
        <motion.div
          animate={{ scale: 1 }}
          initial={{ scale: 0 , }}
          transition={{ delay: 0.1 }}
  
        >
          <Link href={"https://www.facebook.com/"}>
            <FacebookIcon fontSize="large" />
          </Link>
        </motion.div>
        <motion.div
          animate={{ scale: 1  }}
          initial={{ scale: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{scale:1.3 , opacity:0.9}}
        >
          <Link href={"https://www.facebook.com/"}>
            <InstagramIcon fontSize="large" />
          </Link>
        </motion.div>
        <motion.div
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{scale:1.3 , opacity:0.9}}
        >
          <Link href={"https://www.facebook.com/"}>
            <GitHubIcon fontSize="large" />
          </Link>
        </motion.div>
        <motion.div
          animate={{ scale: 1}}
          initial={{ scale: 0 }}
          transition={{ delay: 0.7 }}
          whileHover={{scale:1.3 , opacity:0.9}}
        >
          <Link href={"https://www.facebook.com/"}>
            <TwitterIcon fontSize="large" />
          </Link>
        </motion.div>
      </div>
      <Image src={myImage} width={300} height={400} alt="My Image" />
    </div>
  );
};

export default MyProfile;
