import BottomNavigator from "@/components/bottom_navigator";
import CommonHeader from "@/components/common/CommonHeader";
import MainArticles from "@/components/index/articles";
import MainRecommendations from "@/components/index/recommendations";
import MainTopMenu from "@/components/index/topMenu";
import MainWeeklyChallenge from "@/components/index/weekly";
import ImageWeeklyChallenge from "@/images/weekly_challenge.png";

export default function Home() {
  return (
    <main className="bg-[#212020] w-[393px] h-[852px]">
      <CommonHeader>
        <div className="font-title text-[20px] text-purple">
          Hi, Madiso2
        </div>
      </CommonHeader>
      <MainTopMenu />
      <MainRecommendations />
      <MainWeeklyChallenge image={ImageWeeklyChallenge} title="Plank With Hip Twist" />
      <MainArticles />
      <BottomNavigator />
    </main>
  );
}
