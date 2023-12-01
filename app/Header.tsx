import LinkForArticle from "./articles/component/LinkForArticle";

const Header = () => (
  <header className="py-5 px-10 border-b flex justify-between items-center">
    <div>
      <h1 className="text-2xl font-extrabold">
        <LinkForArticle
          content={"Next.js14 Blog"}
          clazzName={null}
          articleId={null}
        />
      </h1>
    </div>
    <div>
      <nav className="text-sm font-mediums">
        <LinkForArticle
          content={"記事を書く"}
          clazzName={["bg-pink-600", "px-3", "py-3", "rounded-md"]}
          articleId={"create"}
        />
      </nav>
    </div>
  </header>
);

export default Header;
