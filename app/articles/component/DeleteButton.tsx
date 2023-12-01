"use client";

import { deleteArticle } from "@/app/articles/[uuid]/deleteArticle";
import { useRouter } from "next/navigation";

type Props = {
  id: string; // FIXME: uuid型あったっけ？
};

const DeleteButton = async ({ id }: Props) => {
  const router = useRouter();
  const handleDelete = async () => {
    await deleteArticle(id);

    router.push("/");
    router.refresh();
  };

  return (
    <div
      className="bg-red-500 hover:bg-red-600 rounded-md py-2 px-5 inline cursor-pointer"
      onClick={handleDelete}
    >
      削除
    </div>
  );
};

export default DeleteButton;
