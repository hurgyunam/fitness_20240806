import IconSearch from "@/icons/Seach.svg";
import IconNotification from "@/icons/Notifications.svg";
import IconUser from "@/icons/User.svg";

export default function Home() {
  return (
    <main className="bg-[#212020] w-[393px] h-[852px] px-[35px]">
      <div className="flex justify-between mt-[40px]">
        <div className="font-title text-[20px] text-purple">
          Hi, Madiso
        </div>
        <div className="grid grid-rows-1 grid-flow-col gap-[21px]">
          <IconSearch />
          <IconNotification />
          <IconUser />
        </div>
      </div>
      <div className="font-body text-[13px] text-white">
        It's time to challenge your limits.
      </div>
      <div></div>
      <div></div>
      <div></div>
    </main>
  );
}
