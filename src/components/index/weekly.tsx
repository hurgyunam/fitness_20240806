
import { StaticImageData } from "next/image";
import Image from 'next/image';

export interface MainWeeklyChallengeProps {
    title: string;
    image: StaticImageData;
}

export default function MainWeeklyChallenge(props: MainWeeklyChallengeProps) {
    return (
      <div className="flex justify-center items-center h-[181px] px-[35px] mt-[24px] bg-lightpurple">
        <div className="flex justify-between w-[324px] h-[121px] bg-[#212120] rounded-[20px]">
            <div className="flex flex-1 flex-col items-center leading-7 justify-center">
                <div className="text-limegreen text-[24px]">
                    Weekly
                </div>
                <div className="text-limegreen text-[24px]">
                    Challenge
                </div>
                <div className="text-white font-normal text-[12px]">
                    {props.title}
                </div>
            </div>
            <Image 
                src={props.image} alt={props.title} />
        </div>
      </div>
    );
  }
  