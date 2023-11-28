import Image from "next/image";
import Link from "next/link";

type HrefProp = {
  articleId: string;
};

// TODO: 画像部分の処理
// TODO: 画像サイズ問題ないかどうか
const ShowImage = ({ articleId }: HrefProp) => {
  return (
    <Link href={`articles/${articleId}`} className="hover:opacity-75">
      <Image
        src={"https://source.unsplash.com/collection/1346951/1000*150?sig=1"}
        alt={""}
        width={1280}
        height={300}
      />
    </Link>
  );
};

export default ShowImage;
