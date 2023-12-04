import DeleteButton from "../component/DeleteButton";
import ShowImage from "../component/Image";

const Article = async ({ params }: { params: { uuid: string } }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}api/article/get/${params.uuid}`,
    {
      method: "GET",
      next: {
        revalidate: 10, // ISR
      },
    }
  );
  const detailArticle = await res.json();

  return (
    <div className="max-w-3xl mx-auto p-5">
      <ShowImage articleId={detailArticle.id} />
      <h1 className="text-4xl text-center mb-10 mt-10">
        {detailArticle.title}
      </h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>{detailArticle.content}</p>
      </div>
      <div className="text-right mt-3">
        <DeleteButton id={detailArticle.id} />
      </div>
    </div>
  );
};

export default Article;
