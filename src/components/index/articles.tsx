

import ImageArticle1 from "@/images/article1.png";
import ImageArticle2 from "@/images/article2.png";
import Image from 'next/image';

export default function MainArticles() {
    return (
        <div className="px-[35px] mt-[14px]">
            <div className="text-limegreen">
                Articles & Tips
            </div>
            <div className="grid grid-rows-2 grid-flow-col gap-[12px]">
                <Image src={ImageArticle1} alt="thumbnail" className="w-[157px] h-[134px]" />
                <div className="text-white flex-wrap text-[12px]">Supplement Guide...</div>
                <Image src={ImageArticle2} alt="thumbnail" className="w-[157px] h-[134px]" />
                <div className="text-white flex-wrap text-[12px]">15 Quick & Effective Daily Routines...</div>
            </div>
        </div>
    )
}