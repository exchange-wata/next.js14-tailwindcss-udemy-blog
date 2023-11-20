import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <div>
        <h1 className="text-2xl font-extrabold">
          <Link href="/">Next.js14 Blog</Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
