'use server';

import { supabase } from '@/database/supabase/createClient';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

const schema = z.object({
  title: z.string().max(20, { message: '最大文字数は20文字です' }),
});

export const createArticle = async (formData: FormData) => {
  console.log('============2===============');
  console.log(formData);

  const validateTitle = schema.safeParse({ title: formData.get('title') });
  if (!validateTitle.success) {
    revalidatePath('/article/create');
    throw validateTitle.error.flatten().fieldErrors;
  }

  const { error } = await supabase.from(`${process.env.DB_NAME}`).insert([
    {
      id: uuidv4(),
      title: formData.get('title'),
      content: formData.get('content'),
      createdat: new Date().toISOString(),
    },
  ]);

  if (error) throw error;

  revalidatePath('/');
  redirect('/');
};
