"use client";
import getSinglePost from "@/lib/getSinglePost"

export default async function postDetail({params}:{params:{postId:string}}) {

  const postData = await getSinglePost(params.postId);
  console.log(postData);

  return (
    <div>{params.postId}</div>
  )
}
