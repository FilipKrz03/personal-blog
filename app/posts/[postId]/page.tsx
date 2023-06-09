import getSinglePost from "@/lib/getSinglePost";
import { PostData } from "@/app/types/PostData";
import Article from "./components/Article";
import getMainSmallPosts from "@/lib/getMainSmallPosts";
import getMainPost from "@/lib/getMainPost";
import getOtherPosts from "@/lib/getOtherPosts";

type Params = {
  params: {
    postId: string;
  };
};

export const revalidate = 60;

export async function generateMetadata({ params: { postId } }: Params) {
  const postData: PostData = await getSinglePost(postId);

  return {
    title: postData.image.title,
  };
}

export default async function postDetail({ params: { postId } }: Params) {
  const postData: PostData = await getSinglePost(postId);
  return <Article data={postData} />;
}

export async function generateStaticParams() {
  const smallPosts: PostData[] = await getMainSmallPosts();
  const mainPost: PostData = await getMainPost();
  const otherPosts: PostData[] = await getOtherPosts();

  const posts = [mainPost, ...smallPosts, ...otherPosts];

  return posts.map((post) => {
    return post.id;
  });
}
