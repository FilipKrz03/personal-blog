"use client";
import { useState } from "react";
import classes from "./Header.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { navLinks } from "../helpers/navLinks";

const Header = () => {
  const pathname = usePathname();

  const [isMobileMenuActive , setIsMobileMenuActive] = useState<boolean>(false);

  return (
    <header className={classes.header}>
      <ul className={`${isMobileMenuActive ? classes.active : ''}`}>
        {navLinks.map((link) => {
          return (
            <motion.li 
              key={link.title}
              className={link.path === pathname ? classes['active-link'] : ""}
              whileHover={{ scale: 1.3, filter: "blur(0.5px)" }}
              whileTap={{scale:0.85}}
              animate={{scale:1}} initial={{scale:0}}
            >
              <Link href={link.path}>{link.title}</Link>
            </motion.li>
          );
        })}
      </ul>
      <button className={`${classes.burger} ${isMobileMenuActive ? classes.active : ''} `} onClick={()=>{
        setIsMobileMenuActive(prevState => !prevState);
      }}>
        <div className={classes.line}/>
        <div className={classes.line}/>
        <div className={classes.line}/>
      </button>
    </header>
  );
};

export default Header;
