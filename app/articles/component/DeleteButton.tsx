"use client";

import { useRouter } from "next/navigation";

type Props = {
  id: string; // FIXME: uuid型あったっけ？
};

const DeleteButton = async ({ id }: Props) => {
  const router = useRouter();

  const handleDelete = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/article/delete/${id}`, {
      method: "DELETE",
    });

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
