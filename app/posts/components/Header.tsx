import Link from "next/link";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
        <ul>
          <Link href="/"><li>Home</li></Link>
          <li>My Posts</li>
          <li>Technology</li>
          <li>Funny</li>
          <li>Curiosites</li>
        </ul>
    </header>
  );
};

export default Header;
