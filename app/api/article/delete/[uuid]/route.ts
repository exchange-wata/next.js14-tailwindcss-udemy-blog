import { supabase } from "@/database/supabase/createClient";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, res: NextApiResponse) {
  // TODO: 他にやり方ありそうかも
  const id = req.url?.split("/api/article/delete/")[1];

  const { error: deleteError } = await supabase
    .from(`${process.env.DB_NAME}`)
    .delete()
    .eq("id", id);

  if (deleteError) return NextResponse.json(deleteError);

  return NextResponse.json({ status: 200 });
}
