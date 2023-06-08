"use client";
import Image from 'next/image';
import Link from 'next/link';
import { PostData } from '@/app/types/PostData';
import classes from './PostItem.module.scss';
import {motion} from 'framer-motion';

const PostItem = ({fields , id , image}:PostData) => {

    return(
        <Link href={'/posts/' + id}>
        <motion.div className={classes.item} whileHover={{scale:1.15 , zIndex:2}} >
            <Image 
            src={'http:' + image.url}
            alt={image.title}
            width={0}
            height={0}
            sizes='32vw'
            style={{width:'32vw' , aspectRatio:'1.5/1' ,  height:'auto' , borderRadius:'25px'}}
              />
            <p>{fields.title}</p>
        </motion.div>
        </Link>
    )

}

export default PostItem