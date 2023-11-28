import React from "react";
import Link from "next/link";
import { text } from "stream/consumers";

type Props = {
  articleId: string | null;
  clazzName: string[] | null;
  contents: string | null;
};

const TOP_PAGE = "/";

const LinkForBlog = ({ articleId, clazzName, contents }: Props) => {
  const articlePath = articleId !== null ? `articles/${articleId}` : TOP_PAGE;

  const formattedClassName = clazzName === null ? "" : clazzName.join(" ");

  // FIXME: undefinedの方いらんかも？
  if (contents === null) return;

  return (
    <Link href={articlePath} className={formattedClassName}>
      {contents}
    </Link>
  );
};

export default LinkForBlog;
