import { Article } from "./types";

// TODO: エラーハンドリング
export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch("http://localhost:3001/posts", { cache: "no-store" }); // SSR
  return res.json();
};
