import MyProfile from "./components/MyProfile";
import classes from './page.module.scss';

export default function About() {
  return (
    <div className={classes.container}>
        <MyProfile />
    </div>
  )
}
