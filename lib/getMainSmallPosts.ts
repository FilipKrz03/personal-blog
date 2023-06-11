import { client } from "./client";
import { PostData } from "@/app/types/PostData";

const getMainSmallPosts = async () => {
  const request = await client.getEntries({ content_type: "myBlogMainMd" });
  const posts: PostData[] = [
    {
      fields: request.items[0].fields,
      image: {
        title: request.includes.Asset[0].fields.title,
        url: request.includes.Asset[0].fields.file.url,
      },
      id: request.items[0].sys.id,
    },
    {
      fields: request.items[1].fields,
      image: {
        title: request.includes.Asset[1].fields.title,
        url: request.includes.Asset[1].fields.file.url,
      },
      id: request.items[1].sys.id,
    },
  ];

  return posts;
};

export default getMainSmallPosts;
