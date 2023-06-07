import { PostData } from '@/app/types/PostData';
import classes from './OtherPosts.module.scss';

type Params = {
    posts:PostData[]
}

const OtherPosts = ({posts}:Params) => {



    return(
        <div>
            Hello
        </div>
    )

}

export default OtherPosts