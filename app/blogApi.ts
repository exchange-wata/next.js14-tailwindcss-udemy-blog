import { Article } from "./types";

// TODO: エラーハンドリング
// TODO: useなんとかの方？
// TODO: envにしたい
export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch("http://localhost:3001/posts", {
    cache: "no-store", // SSR
  });

  if (!res.ok) throw new Error("データ取得に失敗しました。");

  return res.json();
};
