import classes from './Header.module.scss';
import Link from 'next/link';
import {motion} from 'framer-motion';


const Header = () => {

    
   
    return(
        <header className={classes.header}>
            <nav>
                <ul>
                   <Link href='/posts'><motion.li whileHover={{scale:1.3 , filter : 'blur(0.5px)'}}>My Posts</motion.li></Link>
                    <motion.li whileHover={{scale:1.3 , filter : 'blur(0.5px)'}}>Technology </motion.li>
                    <motion.li whileHover={{scale:1.3, filter : 'blur(0.5px)' }}>Funny</motion.li>
                    <motion.li whileHover={{scale:1.3, filter : 'blur(0.5px)'}}>Curiosities</motion.li>
                </ul>
            </nav>
        </header>
    )

}

export default Header;