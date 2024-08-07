import IconArrow from "@/icons/Arrow.svg";
import MainRecommendationVideo from "./recommendation_video";

export default function MainRecommendations() {
  return (
    <>
      <div className="flex flex-col mt-[24px]">
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
        <div className="flex">
          <MainRecommendationVideo />
        </div>
      </div>
    </>
  );
}
