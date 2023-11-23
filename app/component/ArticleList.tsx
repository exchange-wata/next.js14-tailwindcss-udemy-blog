import Image from "next/image";
import Link from "next/link";
import React from "react";

function ArticleList() {
  return (
    <div>
      <article className="shadow my-4">
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
            Tecnology
          </Link>
          <Link
            href="#"
            className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
          >
            Next.js 14の勉強中
          </Link>
          <p className="text-sm pb-3b text-slate-900">
            published on 2023/11/23
          </p>
          <Link href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            esse eaque cupiditate iure illum, necessitatibus corrupti voluptates
            tempora in et quia ducimus maiores temporibus minima sint quae
            exercitationem accusantium expedita!
          </Link>
          {/* TODO: 色変えたい */}
          <Link href={"#"} className="text-pink-800 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
      <article className="shadow my-4">
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
            Tecnology
          </Link>
          <Link
            href="#"
            className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
          >
            Next.js 14の勉強中
          </Link>
          <p className="text-sm pb-3b text-slate-900">
            published on 2023/11/23
          </p>
          <Link href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            esse eaque cupiditate iure illum, necessitatibus corrupti voluptates
            tempora in et quia ducimus maiores temporibus minima sint quae
            exercitationem accusantium expedita!
          </Link>
          {/* TODO: 色変えたい */}
          <Link href={"#"} className="text-pink-800 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  );
}

export default ArticleList;
