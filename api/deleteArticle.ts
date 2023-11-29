import { Article } from "@/app/types";

export const deleteArticle = async (id: string): Promise<Article> => {
  // FIXME: envを使うと動かない
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("記事削除中にエラーが発生しました。");

  await new Promise((resolve) => setTimeout(resolve, 1000));
  const deleteArticle = await res.json();
  return deleteArticle;
};
