import React from "react";
import Link from "next/link";

type Props = {
  articleId: string | null;
  clazzName: string[] | null;
  contents: string | null;
};

const TOP_PAGE = "/";

const LinkForArticle = ({ articleId, clazzName, contents }: Props) => {
  const articlePath = articleId !== null ? `articles/${articleId}` : TOP_PAGE;

  const formattedClassName = clazzName === null ? "" : clazzName.join(" ");

  if (contents === null) return;

  return (
    <Link href={articlePath} className={formattedClassName}>
      {contents}
    </Link>
  );
};

export default LinkForArticle;
