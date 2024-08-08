import MainArticles from "@/components/index/articles";
import MainHeader from "@/components/index/header";
import MainRecommendations from "@/components/index/recommendations";
import MainTopMenu from "@/components/index/topMenu";
import MainWeeklyChallenge from "@/components/index/weekly";
import ImageWeeklyChallenge from "@/images/weekly_challenge.png";

export default function Home() {
  return (
    <main className="bg-[#212020] w-[393px] h-[852px]">
      <MainHeader nickName="Madiso"/>
      <MainTopMenu />
      <MainRecommendations />
      <MainWeeklyChallenge image={ImageWeeklyChallenge} title="Plank With Hip Twist" />
      <MainArticles />
      <div></div>
      <div></div>
      <div></div>
    </main>
  );
}
