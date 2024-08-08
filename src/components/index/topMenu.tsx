import IconWorkout from "@/icons/Workout.svg";
import IconProgress from "@/icons/Progress.svg";
import IconNutrition from "@/icons/Nutrition.svg";
import IconCommunity from "@/icons/Community.svg";


export default function MainTopMenu() {
  return (
    <>
      <div className="flex justify-between items-center mt-[12px] px-[35px]">
        <div className="flex flex-col items-center">
          <IconWorkout/>
          <div className="font-body font-light mt-[2px] text-limegreen">Workout</div>
        </div>
        <div className="w-[0.75px] h-[40px] bg-lightpurple">
        </div>
        <div className="flex flex-col items-center">
          <IconProgress />
          <div className="font-body font-light text-lightpurple">Progress</div>
          <div className="font-body font-light mt-[2px] text-lightpurple leading-[8px]">Tracking</div>
        </div>
        <div className="w-[0.75px] h-[40px] bg-lightpurple">
        </div>
        <div className="flex flex-col items-center">
          <IconNutrition />
          <div className="font-body font-light mt-[2px] text-lightpurple">Nutrition</div>
        </div>
        <div className="w-[0.75px] h-[40px] bg-lightpurple">
        </div>
        <div className="flex flex-col items-center">
          <IconCommunity />
          <div className="font-body font-light mt-[2px] text-lightpurple">Community</div>
        </div>
      </div>
    </>
  );
}
