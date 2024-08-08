
import Image from 'next/image';
import IconStar from "@/icons/Star.svg";
import IconPlay from "@/icons/Play.svg";
import IconTime from "@/icons/Time.svg";
import IconCalories from "@/icons/Calories.svg";
import { StaticImageData } from "next/image";

export interface MainRecommendationVideoProps {
    thumbnail: StaticImageData;
    title: string;
    minutes: number;
    kcalories: number;
    bookmarked: boolean;
}

export default function MainRecommendationVideo(props: MainRecommendationVideoProps) {
  return (
    <>
      <div className="flex flex-col">
        <div className="relative">
          <Image src={props.thumbnail} alt="thumbnail" />
          <div className="absolute right-[8px] top-[4px]">
            <IconStar className={props.bookmarked? "fill-limegreen" : "fill-white"}/>
          </div>
          <div className="absolute right-[8px] bottom-[-12px]">
            <IconPlay />
          </div>
        </div>
        <div className="rounded-b-[16px] border-white border-b-[1px] border-x-[1px] p-[8px]">
          <div className="font-body text-limegreen font-normal text-[12px]">
            {props.title}
          </div>
          <div className="flex justify-between mt-[4px]">
            <div className="flex items-center">
              <div>
                <IconTime />
              </div>
              <div className="font-body font-light text-[12px] ml-[4px] leading-3">
                {props.minutes} Minutes
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <IconCalories />
              </div>
              <div className="font-body font-light text-[12px] ml-[4px] leading-3">
                {props.kcalories} Kcal
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
