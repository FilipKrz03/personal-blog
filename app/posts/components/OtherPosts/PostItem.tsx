import Image from 'next/image';
import { PostData } from '@/app/types/PostData';
import classes from './PostItem.module.scss';

const PostItem = ({fields , id , image}:PostData) => {

    return(
        <div className={classes.item}>
            <Image 
            src={'http:' + image.url}
            alt={image.title}
            width={0}
            height={0}
            sizes='32vw'
            style={{width:'32vw' , aspectRatio:'1.5/1' ,  height:'auto' , borderRadius:'25px'}}
              />
            <p>{fields.title}</p>
        </div>
    )

}

export default PostItem