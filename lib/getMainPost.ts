import { client } from "./client";
import { PostData } from "@/app/types/PostData";

const getMainPost = async () => {
  const request = await client.getEntries({ content_type: "myBlogMainLg" });
  if (!request.items) {
    throw new Error("Failed to fetch data !");
  }
  const data: PostData = {
    fields: request.items[0].fields,
    image: {
      title: request.includes.Asset[0].fields.title,
      url: request.includes.Asset[0].fields.file.url,
    },
    id: request.items[0].sys.id,
  };

  return data;
};

export default getMainPost;
