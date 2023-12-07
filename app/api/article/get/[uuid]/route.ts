import { supabase } from '@/database/supabase/createClient';
import { NextApiResponse } from 'next';
import { notFound } from 'next/navigation';
import { NextResponse } from 'next/server';

export async function GET(req: Request, res: NextApiResponse) {
  // TODO: 他にやり方ありそうかも
  const id = req.url?.split('/api/article/get/')[1];

  const { data, error } = await supabase
    .from(`${process.env.DB_NAME}`)
    .select('*')
    .eq('id', id)
    .single();

  if (error) error?.message;
  if (!data) notFound();

  return NextResponse.json(data);
}
