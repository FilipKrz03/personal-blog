import { client } from "./client";
import { PostData } from "@/app/types/PostData";

const getOtherPosts = async () => {

  const request:{
    items:any[] , 
    includes:{Asset:any},
  } = await client.getEntries({ content_type: "myBlogOthers" });
  
 let iterationCount = -1
 const posts:PostData[] = 
 request.items.map(item => {
    iterationCount ++;
    return{
        image : {title:request.includes.Asset[iterationCount].fields.title , url:request.includes.Asset[iterationCount].fields.file.url } , 
        fields: item.fields , 
        id : item.sys.id , 
    }
 })

  return posts;
};

export default getOtherPosts;
