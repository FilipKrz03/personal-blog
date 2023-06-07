import StartAnimation from './components/StartAnimation/StartAnimation';
import getMainPost from '@/lib/getMainPost';
import getMainSmallPosts from '@/lib/getMainSmallPosts';
import getOtherPosts from '@/lib/getOtherPosts';
import { PostData } from '../types/PostData';
import MainPosts from './components/MainPosts/MainPosts';
import classes from './page.module.scss';
import OtherPosts from './components/OtherPosts/OtherPosts';


export default async function MyPosts() {


  const mainPost:PostData = await getMainPost();
  const mainSmallPosts:PostData[] = await getMainSmallPosts()
  const otherPosts:PostData[] = await getOtherPosts();
  
  return (
    <div className={classes.page}>
      <StartAnimation />
      <MainPosts params={{mainPost , mainSmallPosts}} />
      <OtherPosts posts={otherPosts} />
    </div>
  )
}
