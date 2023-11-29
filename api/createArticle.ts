import { Article } from "@/app/types";

export const createArticle = async ({
  id,
  title,
  content,
}: Omit<Article, "createdAt">): Promise<Article> => {
  const crtDateTime = new Date().toISOString();

  const res = await fetch(`${process.env.JSON_SERVER}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, title, content, createdAt: crtDateTime }),
  });

  if (!res.ok) throw new Error("記事作成中にエラーが発生しました。");

  await new Promise((resolve) => setTimeout(resolve, 1000));
  const newArticle = await res.json();
  return newArticle;
};
