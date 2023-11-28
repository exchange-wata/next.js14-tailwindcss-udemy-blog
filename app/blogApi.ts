import { notFound } from "next/navigation";
import { Article } from "./types";

// TODO: エラーハンドリング
// TODO: useなんとかの方？
// TODO: envにしたい
export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch("http://localhost:3001/posts", {
    cache: "no-store", // SSR
  });

  if (!res.ok) throw new Error("全てのデータ取得に失敗しました。");

  // loadingの挙動確認のための遅延措置
  // await new Promise((resolve) => setTimeout(resolve, 1500))

  return res.json();
};

// TODO: エラーハンドリング
// TODO: useなんとかの方？
// TODO: envにしたい
export const getDetailArticle = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    next: { revalidate: 60 }, // ISR
  });

  if (res.status === 404) notFound();
  if (!res.ok) throw new Error(`記事識別値${id}の取得に失敗しました。`);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return res.json();
};
