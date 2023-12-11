import { useFormState } from 'react-dom';

const CreateSubmitButton = () => {
  // FIXME: 警告がでるのなんとかしたい
  const { pending } = useFormState();
  return (
    <button
      type='submit'
      className={`py-2 px-4 border rounded-md ${
        pending
          ? ' bg-pink-400 cursor-not-allowed'
          : ' bg-pink-300 hover:bg-pink-400'
      }`}
      disabled={pending}
    >
      投稿
    </button>
  );
};

export default CreateSubmitButton;
