// import Image from "next/image";
import { Article } from "../types";
import ShowImage from "./Form/Image";
import Link from "next/link";

type ArticleListProp = {
  articles: Article[];
};

const ArticleList = ({ articles }: ArticleListProp) => {
  return (
    <>
      {articles.map((article) => {
        return (
          <article className="shadow my-4 flex flex-col" key={article.id}>
            <ShowImage />

            <div className="bg-white flex flex-col justify-start p-6">
              <Link href="#" className="text-blue-700 pb-4 font-bold">
                {article.title}
              </Link>

              <p className="text-sm pb-3b text-slate-900 pb-4">
                published on {article.createdAt}
              </p>

              <Link href="#" className="text-slate-900 pb-6">
                {article.cntents}
              </Link>

              <Link href={"#"} className="text-pink-800 hover:text-black">
                続きを読む
              </Link>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default ArticleList;
