/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter } from "next/navigation";
import { PostData } from "@/app/types/PostData";
import classes from "./MainPosts.module.scss";
import { motion } from "framer-motion";

type Params = {
  params: {
    mainPost: PostData;
    mainSmallPosts: PostData[];
  };
};

const MainPosts = ({ params: { mainPost, mainSmallPosts } }: Params) => {
    
  const router = useRouter();

  return (
    <div className={classes.post}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className={classes.left}
        id={mainPost.id}
        onClick={() => {
          router.push("posts/" + mainPost.id);
        }}
      >
        <img src={"http:" + mainPost.image.url} alt={mainPost.image.title} />
        <p>{mainPost.fields.title}</p>
      </motion.div>
      <div className={classes.right}>
        <motion.div
          className={classes["right-item"]}
          whileHover={{ scale: 1.1 }}
          id={mainSmallPosts[0].id}
          onClick={() => {
            router.push("posts/" + mainSmallPosts[0].id);
          }}
        >
          <img
            src={"http:" + mainSmallPosts[0].image.url}
            alt={mainPost.image.title}
          />
          <p>{mainSmallPosts[0].fields.title}</p>
        </motion.div>
        <motion.div
          className={classes["right-item"]}
          whileHover={{ scale: 1.1 }}
          id={mainSmallPosts[1].id}
          onClick={() => {
            router.push("posts/" + mainSmallPosts[1].id);
          }}
        >
          <img
            src={"http:" + mainSmallPosts[1].image.url}
            alt={mainPost.image.title}
          />
          <p>{mainSmallPosts[1].fields.title}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default MainPosts;
