import { supabase } from "@/database/supabase/createClient";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextApiResponse) {
  const { data, error } = await supabase
    .from(`${process.env.DB_NAME}`)
    .select("*");

  if (!error) JSON.stringify(error);
  return NextResponse.json(data);
}
