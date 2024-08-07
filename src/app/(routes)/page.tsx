import MainHeader from "@/components/index/header";
import MainRecommendations from "@/components/index/recommendations";
import MainTopMenu from "@/components/index/topMenu";

export default function Home() {
  return (
    <main className="bg-[#212020] w-[393px] h-[852px] px-[35px]">
      <MainHeader nickName="Madiso"/>
      <MainTopMenu />
      <MainRecommendations />
      <div></div>
      <div></div>
      <div></div>
    </main>
  );
}
