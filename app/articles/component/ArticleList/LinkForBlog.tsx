import React from "react";
import Link from "next/link";

type Props = {
  articleId: number | null;
  path: string
  clazzName: string[] | null;
  text: string | null;
};

const TOP_PAGE = '/';

const LinkForBlog = ({ articleId, path, clazzName, text }: Props) => {
  const articlePath = path === null ? TOP_PAGE : articleId !== null ? `articles/${articleId}` : TOP_PAGE;
  const formattedClassName = clazzName === null ? "" : clazzName.join(" ");

  // FIXME: undefinedの方いらんかも？
  if (text === null || text === undefined) return;

  return (
    <Link href={articlePath} className={formattedClassName}>
      {text}
    </Link>
  );
};

export default LinkForBlog;
