/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
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
        className={classes.posts}
        animate={{ scale: 1 , filter: "blur(0px)"  }}
        initial={{ scale: 0 , filter: "blur(4px)"}}
        transition={{ duration: 0.5, delay: 0.25 , filter:{delay:0.7 , duration:0.3} }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className={classes.left}
          id={mainPost.id}
          onClick={() => {
            router.push("posts/" + mainPost.id);
          }}
        >
          <Image
            src={"http:" + mainPost.image.url}
            alt={mainPost.image.title}
            width={0}
            height={0}
            sizes="37vw"
            priority={true}
            style={{ aspectRatio: "1/0.975", width: "37vw", height: "auto" }}
          />
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
            <Image
              src={"http:" + mainSmallPosts[0].image.url}
              alt={mainPost.image.title}
              width={0}
              height={0}
              sizes="35vw"
              style={{ aspectRatio: "2.4/1", width: "35vw", height: "auto" }}
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
            <Image
              src={"http:" + mainSmallPosts[1].image.url}
              alt={mainPost.image.title}
              width={0}
              height={0}
              sizes="35vw"
              style={{ aspectRatio: "2.4/1", width: "36vw", height: "auto" }}
            />
            <p>{mainSmallPosts[1].fields.title}</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default MainPosts;
