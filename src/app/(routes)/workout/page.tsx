import CommonHeader from "@/components/common/CommonHeader";
import ImageTrianingOfTheDay from "@/images/training_of_the_day.png";
import Image from 'next/image';


export default function WorkoutPage() {
    return (
        <main className="bg-[#212020] w-[393px] h-[852px]">
            <CommonHeader>
                <div className="font-title text-[20px] text-purple">
                    Hi, Madiso2
                </div>
            </CommonHeader>
            <div className="px-[35px] flex items-center">
                <div className="text-black bg-limegreen rounded-[100px] px-[10px] py-[8px] mr-[4px]">
                    Beginner
                </div>
                <div className="text-black bg-limegreen rounded-[100px] px-[10px] py-[8px] mr-[4px]">
                    Intermediate
                </div>
                <div className="text-black bg-white rounded-[100px] px-[10px] py-[8px] mr-[4px]">
                    Advanced
                </div>
            </div>
            <div className="bg-lightpurple h-[242px] w-screen mt-[24px] flex justify-center items-center">
                <Image src={ImageTrianingOfTheDay} alt="training of the day"
                        className="w-[323px] h-[198px]"/>
            </div>
        </main>

    )
}