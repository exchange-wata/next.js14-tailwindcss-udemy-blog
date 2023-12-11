'use client';

import { createArticle } from '@/app/actions/articles/create';
import { useFormState } from 'react-dom';
import CreateSubmitButton from '../component/CreateSubmitButton';

const initialState = {
  title: null,
  content: null,
};

const CreateArticlePage = async () => {
  const [state, formActions] = useFormState(createArticle, initialState);
  // console.log('===================1==============-');
  // console.log(state);

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
            {...state.title}
            required
          />
        </div>
        <div className='mb-4'>
          <label className='text-gray-700 text-sm font-bold mb-2'>本文</label>
          <textarea
            className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:line-none'
            name='content'
            {...state.content}
            required
          />
        </div>
        <CreateSubmitButton />
      </form>
    </div>
  );
};

export default CreateArticlePage;
