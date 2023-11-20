import Link from "next/link";
import React from "react";

const Header = () => (
  <header className="py-5 px-10 border-b flex justify-between items-center">
    <div>
      <h1 className="text-2xl font-extrabold">
        <Link href="/">Next.js14 Blog</Link>
      </h1>
    </div>
    <div>
      <nav className="text-sm font-mediums">
        <Link href="/articles/new" className="bg-pink-600 px-3 py-3 rounded-md">
          記事を書く
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
