import { supabase } from "@/database/supabase/createClient";
import { NextApiRequest, NextApiResponse } from "next";
import { notFound } from "next/navigation";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.uuid;
  // TODO: TBL名を管理する
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) res.status(500).json({ error });
  if (!data) notFound();

  return res.status(200).json(data);
};

export default handler;
