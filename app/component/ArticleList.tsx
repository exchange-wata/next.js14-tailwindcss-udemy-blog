import Image from "next/image";
import Link from "next/link";
import { Article } from "../types";

type ArticleListProp = {
  articles: Article[];
};

const ArticleList = ({ articles }: ArticleListProp) => {
  return (
    <>
      {articles.map((article) => {
        return (
          <article className="shadow my-4 flex flex-col" key={article.id}>
            <Link href={"#"} className="hover:opacity-75">
              <Image
                src={
                  "https://source.unsplash.com/collection/1346951/1000*150?sig=1"
                }
                alt={""}
                width={1280}
                height={300}
              />
            </Link>

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
