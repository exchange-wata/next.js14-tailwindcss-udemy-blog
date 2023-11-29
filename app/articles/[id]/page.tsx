import { getDetailArticle } from "@/api/getDetailArticle";
import ShowImage from "../component/Image";

const Article = async ({ params }: { params: { id: string } }) => {
  // RSCでやっている
  const detailArticle = await getDetailArticle(params.id);

  return (
    <div className="max-w-3xl mx-auto p-5">
      <ShowImage articleId={params.id} />
      <h1 className="text-4xl text-center mb-10 mt-10">
        {detailArticle.title}
      </h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>{detailArticle.content}</p>
      </div>
    </div>
  );
};

export default Article;
