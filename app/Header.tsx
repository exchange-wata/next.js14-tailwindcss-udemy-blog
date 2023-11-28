import React from "react";
import LinkForBlog from "./articles/component/ArticleList/LinkForBlog";

const Header = () => (
  <header className="py-5 px-10 border-b flex justify-between items-center">
    <div>
      <h1 className="text-2xl font-extrabold">
        <LinkForBlog text={"Next.js14 Blog"} clazzName={null} path={"/"} articleId={null} />
      </h1>
    </div>
    <div>
      <nav className="text-sm font-mediums">
        <LinkForBlog
          text={"記事を書く"}
          clazzName={["bg-pink-600", "px-3", "py-3", "rounded-md"]}
          path={"articles/new"} 
          articleId={1} // TODO: 数値は動的に設定する
        />
      </nav>
    </div>
  </header>
);

export default Header;
