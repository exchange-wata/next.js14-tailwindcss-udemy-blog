import Link from "next/link";

type Props = {
  articleId: string | null;
  clazzName: string[] | null;
  content: string | null;
};

const TOP_PAGE = "/";

const LinkForArticle = ({ articleId, clazzName, content }: Props) => {
  // TODO: trueの時のがきもいので修正したい(暫定対応)
  const articlePath = articleId !== null ? `articles/${articleId}` : TOP_PAGE;

  const formattedClassName = clazzName === null ? "" : clazzName.join(" ");

  if (content === null) return;

  return (
    <Link href={articlePath} className={formattedClassName}>
      {content}
    </Link>
  );
};

export default LinkForArticle;
