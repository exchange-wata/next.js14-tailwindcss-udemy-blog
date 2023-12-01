import { supabase } from "@/database/supabase/createClient";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, title, content, createdAt } = req.body;
  // TODO: TBL名を管理する
  const { data, error } = await supabase
    .from("posts")
    .insert([{ id, title, content, createdAt }]);

  if (error) res.status(500).json({ error });

  return res.status(200).json(data);
};

export default handler;
