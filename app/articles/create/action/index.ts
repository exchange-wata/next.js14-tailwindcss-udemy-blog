'use server';

import { supabase } from '@/database/supabase/createClient';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

export const createArticle = async (formData: FormData) => {
  console.log('formData', formData);
  console.log('env', process.env.DB_NAME);
  const { error } = await supabase.from(`${process.env.DB_NAME}`).insert([
    {
      id: uuidv4(),
      title: formData.get('title'),
      content: formData.get('content'),
      createdAt: new Date().toISOString(),
    },
  ]);

  if (error) throw error;

  revalidatePath('/');
  redirect('/');
};
