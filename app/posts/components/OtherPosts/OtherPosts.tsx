import PostItem from './PostItem';
import {Suspense} from 'react';
import { PostData } from '@/app/types/PostData';
import classes from './OtherPosts.module.scss';
import LoadingState from '@/app/components/LoadingState';

const OtherPosts = ({posts}:{posts:PostData[]}) => {

  let isEven:boolean = false;

    return(
      <Suspense fallback={<LoadingState />}>
       <section className={classes['posts-section']}>
        {posts.map(post => {
          isEven =!isEven;
          return  <PostItem
        key={post.id}
        postData={{id:post.id , fields:post.fields , image:post.image}}
        isEven = {isEven}
        />
        })}
       </section>
       </Suspense>
    )
}

export default OtherPosts