'use client';

import { createArticle } from '@/app/lib/articles/create';
import { useFormState } from 'react-dom';
import CreateSubmitButton from '../component/CreateSubmitButton';

const initialState = {
  error: {
    title: [],
    content: [],
  },
  message: '',
};

const CreateArticlePage = () => {
  const [state, formActions] = useFormState(createArticle, initialState);
  return (
    <div className='min-h-screen py-8 px-4 md:px-12'>
      <h2 className='text-2xl font-bold mb-4'>ブログ新規作成</h2>
      <form className='bg-slate-200 p-6 rounded shadow-lg' action={formActions}>
        <div className='mb-4'>
          <label className='text-gray-700 text-sm font-bold mb-2'>
            タイトル
          </label>
          <input
            type='text'
            className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:line-none'
            name='title'
            required
            defaultValue={''}
            aria-describedby='title-error'
          />
          {state?.error?.title &&
            state.error?.title.map((error, index) => (
              <div
                className='text-red-600 text-sm'
                id='title-error'
                aria-live='polite'
                key={index}
              >
                {error}
              </div>
            ))}
        </div>
        <div className='mb-4'>
          <label className='text-gray-700 text-sm font-bold mb-2'>本文</label>
          <textarea
            className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:line-none'
            name='content'
            defaultValue={''}
            required
            aria-describedby='content-error'
          />
          {state?.error?.content &&
            state.error?.content.map((error, index) => (
              <div
                className='text-red-600 text-sm'
                id='content-error'
                aria-live='polite'
                key={index}
              >
                {error}
              </div>
            ))}
        </div>
        <CreateSubmitButton />

        {/* エラーメッセージがあれば表示する */}
        {state.message && (
          <div className='text-red-600 text-sm' aria-live='polite'>
            {state.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default CreateArticlePage;
