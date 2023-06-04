import  {useRef} from 'react'
import StartAnimation from './components/StartAnimation/StartAnimation';
import getMainPost from '@/lib/getMainPost';
import getMainSmallPosts from '@/lib/getMainSmallPosts';

import classes from './page.module.scss';


export default async function MyPosts() {


  const data = await getMainSmallPosts();
  console.log(data);

  return (
    <div className={classes.page}>
      <StartAnimation />
    </div>
  )
}
