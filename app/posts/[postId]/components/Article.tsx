"use client";
import { PostData } from "@/app/types/PostData";
import classes from "./Article.module.scss";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";
import Image from "next/image";


type postData = {
  data: PostData;
};

const Article = ({ data }: postData) => {
  const router = useRouter();

  return (
    <article className={classes.article}>
      <ArrowBackIcon
        fontSize="large"
        style={{
          position: "absolute",
          left: 50,
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => {
          router.push("/posts");
        }}
      />
      <Image
        src={"http:" + data.image.url}
        alt={data.image.title}
        width={0}
        height={0}
        sizes="50vw"
        style={{ width: "50vw", height: "auto" }}
      />
      <h2>{data.fields.title}</h2>
      <p className={classes.desc}>{data.fields.shortDescription}</p>
      <ReactMarkdown>{data.fields.article}</ReactMarkdown>
    </article>
  );
};

export default Article;
