import classes from './Header.module.scss';

const Header = () => {

    return(
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>My Posts</li>
                    <li>Technology</li>
                    <li>Funny</li>
                    <li>Curiosities</li>
                </ul>
            </nav>
        </header>
    )

}

export default Header;