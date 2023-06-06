"use client";
import getSinglePost from "@/lib/getSinglePost"
import classes from './page.module.scss';
import { PostData } from "@/app/types/PostData";
import Article from "./components/Article";

export default async function postDetail({params}:{params:{postId:string}}) {

  const postData:PostData = await getSinglePost(params.postId);
  console.log(postData);

  return (
     <div>
      <Article data={postData} />
     </div>
  )
}
