import Image from "next/image";

type HrefProp = {
  articleId: string;
};

// TODO: 画像部分の処理
// TODO: 画像サイズ問題ないかどうか
const ShowImage = ({ articleId }: HrefProp) => {
  return (
    <Image
      src={`https://source.unsplash.com/collection/1346951/1000*150?sig=${articleId}`}
      alt={""}
      width={1280}
      height={300}
    />
  );
};

export default ShowImage;
