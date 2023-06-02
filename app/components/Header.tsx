import classes from "./Header.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { navLinks } from "../helpers/navLinks";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={classes.header}>
      <ul>
        {navLinks.map((link) => {
          return (
            <motion.li 
              key={link.title}
              className={link.path === pathname ? classes.active : ""}
              whileHover={{ scale: 1.3, filter: "blur(0.5px)" }}
              whileTap={{scale:0.85}}
              animate={{y:0}} initial={{y:-30}}
            >
              <Link href={link.path}>{link.title}</Link>
            </motion.li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
