import PostItem from './PostItem';
import { PostData } from '@/app/types/PostData';
import classes from './OtherPosts.module.scss';

const OtherPosts = ({posts}:{posts:PostData[]}) => {
    return(
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
    )
}

export default OtherPosts