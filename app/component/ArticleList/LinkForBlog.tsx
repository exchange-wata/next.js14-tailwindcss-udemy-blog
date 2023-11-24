import React from "react";
import Link from "next/link";

type Props = {
  articleId: string | null;
  clazzName: string[] | null;
  text: string | null;
};

const LinkForBlog = ({ articleId, clazzName, text }: Props) => {
  const path = articleId === null ? "#" : articleId;
  const formattedClassName = clazzName === null ? "" : clazzName.join(" ");

  if (text === null || text === undefined) return;

  return (
    <Link href={`articles/${path}`} className={formattedClassName}>
      {text}
    </Link>
  );
};

export default LinkForBlog;
