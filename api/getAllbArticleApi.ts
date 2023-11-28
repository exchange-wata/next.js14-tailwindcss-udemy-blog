import { Article } from "../app/types";

// TODO: エラーハンドリング
// TODO: useなんとかの方？
export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch(`${process.env.JSON_SERVER}`, {
    cache: "no-store", // SSR
  });

  if (!res.ok) throw new Error("全てのデータ取得に失敗しました。");

  // loadingの挙動確認のための遅延措置
  // await new Promise((resolve) => setTimeout(resolve, 1500))

  return res.json();
};
