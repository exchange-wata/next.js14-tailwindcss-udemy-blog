import { supabase } from "@/database/supabase/createClient";
import { NextApiRequest, NextApiResponse } from "next";
import { notFound } from "next/navigation";
import { match } from "ts-pattern";

// TODO: 他にやり方ありそうかも
type HTTP_METHOD = "GET" | "DELETE";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.uuid;
  return match(req.method as HTTP_METHOD)
    .with("GET", async () => {
      // TODO: TBL名を管理する
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id)
        .single();

      if (error) res.status(500).json({ error });
      if (!data) notFound();

      return res.status(200).json(data);
    })
    .with("DELETE", async () => {
      const { error: deleteError } = await supabase
        .from("posts")
        .delete()
        .eq("id", id);
      if (deleteError)
        return res.status(500).json({ error: deleteError.message });
      return res.status(200).json({ message: "削除成功" });
    })
    .exhaustive();
};

export default handler;
