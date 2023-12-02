import { supabase } from "@/database/supabase/createClient";
import { NextApiRequest, NextApiResponse } from "next";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";
import { match } from "ts-pattern";

// TODO: 他にやり方ありそうかも
type HTTP_METHOD = "GET" | "DELETE";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  // TODO: 他にやり方ありそうかも
  const id = req.url?.split("/article/")[1];

  return match(req.method as HTTP_METHOD)
    .with("GET", async () => {
      const { data, error } = await supabase
        .from(`${process.env.DB_NAME}`)
        .select("*")
        .eq("id", id)
        .single();
      if (error) JSON.stringify(error);

      if (!data) notFound();

      return NextResponse.json(data);
    })
    .with("DELETE", async () => {
      const { error: deleteError } = await supabase
        .from(`${process.env.DB_NAME}`)
        .delete()
        .eq("id", id);
      if (deleteError)
        return res.status(500).json({ error: deleteError.message });
      return res.status(200).json({ message: "削除成功" });
    })
    .exhaustive();
}
