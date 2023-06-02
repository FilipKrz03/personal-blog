import classes from './Header.module.scss';
import Link from 'next/link';

const Header = () => {

    return(
        <header className={classes.header}>
            <nav>
                <ul>
                   <Link href='/posts'><li>My Posts</li></Link>
                    <li>Technology</li>
                    <li>Funny</li>
                    <li>Curiosities</li>
                </ul>
            </nav>
        </header>
    )

}

export default Header;