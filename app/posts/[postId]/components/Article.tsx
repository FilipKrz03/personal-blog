/* eslint-disable @next/next/no-img-element */
import { PostData } from '@/app/types/PostData';
import classes from './Article.module.scss';

type postData = {
    data:PostData , 
}

const Article = ({data}:postData) => {

    return(
        <article className={classes.article}>
            <img src={data.image.url} alt={data.image.title} />
            <h2>{data.fields.title}</h2>
            <p className={classes.desc}>{data.fields.shortDescription}</p>
            <p>{data.fields.article}</p>
        </article>
    )

}

export default Article;