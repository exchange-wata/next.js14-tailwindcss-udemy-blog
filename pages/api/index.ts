import { supabase } from "@/database/supabase/createClient";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // TODO: TBL名を管理する
  const { data, error } = await supabase
    .from(`${process.env.DB_NAME}`)
    .select("*");
  if (error) res.status(500).json({ error });

  return res.status(200).json(data);
};

export default handler;
