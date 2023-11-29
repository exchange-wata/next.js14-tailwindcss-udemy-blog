import { notFound } from "next/navigation";
import { Article } from "../app/types";

export const getDetailArticle = async (id: string): Promise<Article> => {
  const res = await fetch(`${process.env.JSON_SERVER}${id}`, {
    next: { revalidate: 60 }, // ISR
  });

  if (res.status === 404) notFound();
  if (!res.ok) throw new Error(`記事識別値${id}の取得に失敗しました。`);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return res.json();
};
