import React from 'react';
import { PostData } from '@/app/types/PostData';
import classes from './MainPosts.module.scss';

type Params = {
    params:{
        mainPost:PostData ,
        mainSmallPosts:PostData[]
    }
}


const MainPosts  = ({params : {mainPost , mainSmallPosts}}:Params) => {
    return(
        <div className={classes.post}>
            Hello
        </div>
    )

}


export default MainPosts;