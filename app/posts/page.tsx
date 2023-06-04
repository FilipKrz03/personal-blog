import StartAnimation from './components/StartAnimation/StartAnimation';
import getMainPost from '@/lib/getMainPost';
import getMainSmallPosts from '@/lib/getMainSmallPosts';
import { PostData } from '../types/PostData';
import classes from './page.module.scss';
import MainPosts from './components/MainPosts/MainPosts';


export default async function MyPosts() {


  const mainPost:PostData = await getMainPost();
  const mainSmallPosts:PostData[] = await getMainSmallPosts()
  

  return (
    <div className={classes.page}>
      <StartAnimation />
      <MainPosts params={{mainPost , mainSmallPosts}} />
    </div>
  )
}
