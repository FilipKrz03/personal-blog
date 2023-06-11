import { client } from "./client";
import { PostData } from "@/app/types/PostData";

const getSinglePost = async (id: string) => {
  const request = await client.getEntry(id);
  const data: PostData = {
    fields: request.fields,
    image: {
      title: request.fields.postImage.fields.title,
      url: request.fields.postImage.fields.file.url,
    },
    id: request.sys.id,
  };

  return data;
};

export default getSinglePost;
