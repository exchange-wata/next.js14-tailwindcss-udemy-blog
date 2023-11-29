import { Article } from "@/app/types";
import { v4 as uuidv4 } from "uuid";

export const createArticle = async ({
  title,
  content,
}: Pick<Article, "title" | "content">): Promise<Article> => {
  const id = uuidv4();
  const crtDateTime = new Date().toISOString();

  // FIXME: envを使うと動かない
  const res = await fetch(`http://localhost:3001/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      title,
      content,
      createdAt: crtDateTime,
    }),
  });
  if (!res.ok) throw new Error("記事作成中にエラーが発生しました。");

  await new Promise((resolve) => setTimeout(resolve, 1000));
  const newArticle = await res.json();
  return newArticle;
};
