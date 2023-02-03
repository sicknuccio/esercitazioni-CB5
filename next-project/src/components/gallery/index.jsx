import { Righteous } from "@next/font/google";
import Image from "next/image";
import { useRef } from "react";
import styles from "./styles.module.scss";

export default function Gallery() {
  const gallery = useRef(null);
  const images = [
    {
      id: 0,
      original: "https://picsum.photos/id/1018/1280/720/",
    },
    {
      id: 1,
      original: "https://picsum.photos/id/1015/1280/720/",
    },
    {
      id: 2,
      original: "https://picsum.photos/id/1019/1280/720/",
    },
  ];

  const moveRight = () => {
    gallery.current.scrollBy({
      top: 0,
      left: 1280 + 20,
      behavior: "smooth",
    });
  };

  const moveLeft = () => {
    gallery.current.scrollBy({
      top: 0,
      left: -1280 - 20,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.main}>
      <div ref={gallery}>
        {images.map((image) => (
          <Image
            src={image.original}
            width={1280}
            height={720}
            key={images.id}
          />
        ))}
      </div>
      <button className={styles.prev} onClick={() => moveLeft()}>
        prev
      </button>
      <button className={styles.next} onClick={() => moveRight()}>
        next
      </button>
    </div>
  );
}
