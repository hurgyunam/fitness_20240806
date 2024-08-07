import ImageVideo1 from "@/images/recommendation_video_1.png";
import { StaticImageData } from "next/image";
import Image from 'next/image';

export interface MainRecommendationVideoProps {
    thumbnail: StaticImageData;
}

export default function MainRecommendationVideo() {
    console.log(typeof(ImageVideo1));
  return (
    <>
      <div className="flex flex-col">
        <Image src={ImageVideo1} alt="thumbnail" />
      </div>
    </>
  );
}
