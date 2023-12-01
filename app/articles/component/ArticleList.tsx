import Link from "next/link";
import { Article } from "../../types";
import ShowImage from "./Image";
import LinkForArticle from "./LinkForArticle";

type ArticleListProp = {
  articles: Article[];
};

const ArticleList = ({ articles }: ArticleListProp) => {
  return (
    <>
      {articles.map(async (article) => {
        return (
          <article className="shadow my-4 flex flex-col" key={article.id}>
            <Link href={`articles/${article.id}`} className="hover:opacity-75">
              <ShowImage articleId={article.id} />
            </Link>

            <div className="bg-white flex flex-col justify-start p-6">
              <LinkForArticle
                articleId={article.id}
                clazzName={["text-blue-700 pb-4 font-bold"]}
                content={article.title}
              />
              <p className="text-sm pb-3b text-slate-900 pb-4">
                published on {new Date(article.createdAt).toLocaleString()}
              </p>
              <LinkForArticle
                articleId={article.id}
                clazzName={["text-slate-900 pb-6"]}
                content={
                  article.content.length > 70
                    ? article.content.substring(0, 70) + "..."
                    : article.content
                }
              />
              <LinkForArticle
                articleId={article.id}
                clazzName={["text-pink-800 hover:text-black"]}
                content={"続きを読む"}
              />
            </div>
          </article>
        );
      })}
    </>
  );
};

export default ArticleList;
