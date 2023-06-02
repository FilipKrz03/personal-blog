import Link from "next/link";
import { NavLinks } from "@/app/types/NavLinks";
import { usePathname } from 'next/navigation';;
import classes from "./Header.module.scss";


const Header = () => {

  const pathname = usePathname();

  const navLinks:NavLinks = [
    {title:'Home' , path:'/'} , 
    {title:'My Posts' , path:'/posts'} , 
    {title:'Technology' , path:'/technology'} , 
    {title:'Funny' , path:'/funny'} , 
    {title:'Curiosites' , path:'/couriosites'} , 
  ]
  

  return (
    <header className={classes.header}>
        <ul>
        {navLinks.map(link => {
          return(
           <li key={link.title} className={link.path === pathname ? classes.active : ''}>
            <Link href={link.path}>{link.title}</Link>
           </li>
          )
        })}
        </ul>
    </header>
  );
};

export default Header;
