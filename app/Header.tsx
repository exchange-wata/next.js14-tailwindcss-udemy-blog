import Link from "next/link";
import React from "react";
import LinkForBlog from "./component/LinkForBlog";

const Header = () => (
  <header className="py-5 px-10 border-b flex justify-between items-center">
    <div>
      <h1 className="text-2xl font-extrabold">
        <LinkForBlog content={"Next.js14 Blog"} clazzName={null} link={null} />
      </h1>
    </div>
    <div>
      <nav className="text-sm font-mediums">
        <LinkForBlog
          content={"記事を書く"}
          clazzName={["bg-pink-600", "px-3", "py-3", "rounded-md"]}
          link={"/articles/new"}
        />
      </nav>
    </div>
  </header>
);

export default Header;
