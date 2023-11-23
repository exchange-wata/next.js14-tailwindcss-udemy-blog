import React from "react";
import Link from "next/link";

type Props = {
  content: string;
  clazzName: string[] | null;
  link: string | null;
};

const LinkForBlog = ({ content, clazzName, link }: Props) => {
  const transitionLink = link === null ? "#" : link;
  const formattedClazzName = clazzName === null ? "" : clazzName.join(" ");

  return (
    <Link href={transitionLink} className={formattedClazzName}>
      {content}
    </Link>
  );
};

export default LinkForBlog;
