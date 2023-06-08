import PostItem from './PostItem';
import {Suspense} from 'react';
import { PostData } from '@/app/types/PostData';
import classes from './OtherPosts.module.scss';
import LoadingState from '@/app/components/LoadingState';

const OtherPosts = ({posts}:{posts:PostData[]}) => {
    return(
      <Suspense fallback={<LoadingState />}>
       <section className={classes['posts-section']}>
        {posts.map(post => {
          return  <PostItem
        key={post.id}
        id={post.id} 
        fields={post.fields}
        image={post.image}
        />
        })}
       </section>
       </Suspense>
    )
}

export default OtherPosts