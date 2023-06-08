"use client";
import { useRef } from "react";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { PostData } from "@/app/types/PostData";
import classes from "./PostItem.module.scss";


type Parmas = {
  postData: PostData;
  isEven: boolean;
};

const PostItem = ({ postData: { id, image, fields }, isEven }: Parmas) => {

  const router = useRouter();
  const postRef = useRef<HTMLDivElement|null>(null)
  const entry = useIntersectionObserver(postRef , {});
  const isVisible = !!entry?.isIntersecting;

  const appearClass = isEven === true ? 'hidden-left' : 'hidden-right';

  return (
    <div
      className={`${classes.item} ${isVisible? classes.active : classes[appearClass]}`}
      ref={postRef}
      onClick={() => {
        router.push("/posts/" + id);
      }}
    >
      <Image
        src={"http:" + image.url}
        alt={image.title}
        width={0}
        height={0}
        sizes="32vw"
        style={{
          width: "32vw",
          aspectRatio: "1.5/1",
          height: "auto",
          borderRadius: "25px",
        }}
      />
      <p>{fields.title}</p>
    </div>
  );
};

export default PostItem;
