import { supabase } from '@/database/supabase/createClient';
import { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function POST(req: Request, res: NextApiResponse) {
  const { id, title, content, createdAt } = await req.json();
  const { data, error } = await supabase
    .from(`${process.env.DB_NAME}`)
    .insert([{ id, title, content, createdAt }]);

  if (!error) JSON.stringify(error);
  return NextResponse.json(data);
}
