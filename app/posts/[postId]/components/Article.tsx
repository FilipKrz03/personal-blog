/* eslint-disable @next/next/no-img-element */
"use client";
import { PostData } from "@/app/types/PostData";
import classes from "./Article.module.scss";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";

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
      <img src={data.image.url} alt={data.image.title} />
      <h2>{data.fields.title}</h2>
      <p className={classes.desc}>{data.fields.shortDescription}</p>
      <ReactMarkdown>{data.fields.article}</ReactMarkdown>
    </article>
  );
};

export default Article;
