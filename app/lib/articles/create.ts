'use server';

import { supabase } from '@/database/supabase/createClient';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

type CreateArticleState = {
  errors?: {
    title?: string[] | undefined;
    content?: string[] | undefined;
  };
  message: string | null;
};

const TITLE_MAX_LENGTH_VALID_MESSAGE = '最大文字数は20文字です。';
const CONTENT_MIN_LENGTH_VALID_MESSAGE = '10文字程度は入力してください。';
const CONTENT_MAX_LENGTH_VALID_MESSAGE = '最大文字数は200文字です。';

const schema = z.object({
  title: z
    .string({
      invalid_type_error: 'Please enter a title.',
    })
    .max(20, { message: TITLE_MAX_LENGTH_VALID_MESSAGE }),
  content: z
    .string({
      invalid_type_error: 'Please enter a content.',
    })
    .min(10, { message: CONTENT_MIN_LENGTH_VALID_MESSAGE })
    .max(200, { message: CONTENT_MAX_LENGTH_VALID_MESSAGE }),
});

export const createArticle = async (
  _: CreateArticleState,
  formData: FormData
) => {
  const validatedData = validate(formData);

  if (validatedData.error === undefined)
    await save(validatedData.title, validatedData.content);

  revalidatePath('/');
  redirect('/');
};

const validate = (formData: FormData) => {
  const validatedField = schema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
  });

  if (!validatedField.success) {
    return {
      error: validatedField.error.flatten().fieldErrors,
      message: '投稿に失敗しました',
    };
  }

  const { title, content } = validatedField.data;
  return { title, content };
};

const save = async (title: string, content: string) => {
  const { error } = await supabase.from(`${process.env.DB_NAME}`).insert([
    {
      id: uuidv4(),
      title: title,
      content: content,
      createdAt: new Date().toISOString(),
    },
  ]);

  if (error) return error;
};
