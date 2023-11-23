import Image from "next/image";
import Link from "next/link";

// TODO:画像部分の処理
// TODO: リンク先設定
// TODO: 画像サイズ問題ないかどうか
const ShowImage = () => {
  return (
    <Link href={"#"} className="hover:opacity-75">
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
