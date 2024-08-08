import IconArrow from "@/icons/Arrow.svg";
import MainRecommendationVideo from "./recommendation_video";
import ImageVideo1 from "@/images/recommendation_video_1.png";
import ImageVideo2 from "@/images/recommendation_video_2.png";

export default function MainRecommendations() {
  return (
    <>
      <div className="flex flex-col mt-[24px] px-[35px]">
        <div className="flex justify-between">
          <div className="text-limegreen">
            Recommendations
          </div>
          <div className="flex items-center">
            <div className="mr-[6px]">
              See All
            </div>
            <IconArrow />
          </div>
        </div>
        <div className="grid grid-rows-1 grid-flow-col gap-[10px] mt-[8px]">
          <MainRecommendationVideo 
            thumbnail={ImageVideo1}
            title="Squat Exercise"
            minutes={12}
            kcalories={128}
            bookmarked={false}
            />
          <MainRecommendationVideo 
            thumbnail={ImageVideo2}
            title="Full Body stretching"
            minutes={12}
            kcalories={128}
            bookmarked={true}
            />
        </div>
      </div>
    </>
  );
}
