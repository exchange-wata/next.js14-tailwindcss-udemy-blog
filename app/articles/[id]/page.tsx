import React from "react";
import Image from "next/image";
import { getDetailArticle } from "@/app/blogApi";

type Props = {
  uuid: string;
};

const Articles = async ({ uuid }: Props) => {
  const detailArticle = await getDetailArticle(uuid);
  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        src={"https://source.unsplash.com/collection/1346951/1000*150?sig=1"}
        alt={""}
        width={1280}
        height={300}
      />
      <h1 className="text-4xl text-center mb-10">ここがタイトルです。</h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>ここが本文です</p>
      </div>
    </div>
  );
};

export default Articles;
