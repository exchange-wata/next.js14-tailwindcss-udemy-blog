import { Article } from "../../types";
import ShowImage from "./ArticleList/Image";
import LinkForBlog from "./ArticleList/LinkForBlog";

type ArticleListProp = {
  articles: Article[];
};

const ArticleList = ({ articles }: ArticleListProp) => {
  // console.log("============================");
  // console.log(articles);
  return (
    <>
      {articles.map((article) => {
        return (
          <article className="shadow my-4 flex flex-col" key={article.id}>
            <ShowImage articleId={article.id} />

            <div className="bg-white flex flex-col justify-start p-6">
              <LinkForBlog
                articleId={"#"}
                clazzName={["text-blue-700 pb-4 font-bold"]}
                text={"Tecnology"}
              ></LinkForBlog>
              <LinkForBlog
                articleId={article.id}
                clazzName={["text-blue-700 pb-4 font-bold"]}
                text={article.title}
              ></LinkForBlog>
              <p className="text-sm pb-3b text-slate-900 pb-4">
                published on {article.createdAt}
              </p>
              <LinkForBlog
                articleId={article.id}
                clazzName={["text-slate-900 pb-6"]}
                text={article.cntents}
              ></LinkForBlog>
              <LinkForBlog
                articleId={article.id}
                clazzName={["text-pink-800 hover:text-black"]}
                text={"続きを読む"}
              ></LinkForBlog>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default ArticleList;
