import React from "react";
import Link from "next/link";

type Props = {
  transition: string | null;
  clazzName: string[] | null;
  text: string | null;
};

const LinkForBlog = ({ transition, clazzName, text }: Props) => {
  const articleTransition =
    transition === null || transition === undefined ? "#" : transition;
  const formattedClassName = clazzName === null ? "" : clazzName.join(" ");

  if (text === null || text === undefined) return;

  console.log(articleTransition, formattedClassName);
  return (
    <Link href={articleTransition} className={formattedClassName}>
      {text}
    </Link>
  );
};

export default LinkForBlog;
