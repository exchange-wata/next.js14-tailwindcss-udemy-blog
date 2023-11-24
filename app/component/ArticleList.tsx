import { Article } from "../types";
import ShowImage from "./ArticleList/Image";
import Link from "next/link";
import Image from "next/image";
import LinkForBlog from "./ArticleList/LinkForBlog";

type ArticleListProp = {
  articles: Article[];
};

const ArticleList = ({ articles }: ArticleListProp) => {
  return (
    <>
      {articles.map((article) => {
        return (
          <article className="shadow my-4 flex flex-col" key={article.id}>
            <ShowImage articleId={article.id} />

            <div className="bg-white flex flex-col justify-start p-6">
              console.log("===============================")
              console.log(article.title)
              <LinkForBlog
                transition={"#"}
                clazzName={["text-blue-700 pb-4 font-bold"]}
                text={article.title}
              ></LinkForBlog>
              <p className="text-sm pb-3b text-slate-900 pb-4">
                published on {article.createdAt}
              </p>
              <LinkForBlog
                transition={"#"}
                clazzName={["text-slate-900 pb-6"]}
                text={article.cntents}
              ></LinkForBlog>
              <LinkForBlog
                transition={"#"}
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
