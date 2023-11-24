import React from "react";
import Link from "next/link";

type Props = {
  articleId: string;
  clazzName: string[] | null;
  text: string | null;
};

const LinkForBlog = ({ articleId, clazzName, text }: Props) => {
  // TODO:書き方きもい
  const path = articleId === undefined ? "#" : `articles/${articleId}`;
  const formattedClassName = clazzName === null ? "" : clazzName.join(" ");

  // undefinedの方いらんかも？
  if (text === null || text === undefined) return;

  // console.log(articleId, path, clazzName, text);
  // console.log(typeof path, typeof clazzName);
  return (
    <Link href={path} className={formattedClassName}>
      {text}
    </Link>
  );
};

export default LinkForBlog;
