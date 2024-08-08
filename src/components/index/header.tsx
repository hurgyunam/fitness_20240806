import IconSearch from "@/icons/Seach.svg";
import IconNotification from "@/icons/Notifications.svg";
import IconUser from "@/icons/User.svg";

export interface MainHeaderProps {
    nickName: string;
}

export default function MainHeader(props: MainHeaderProps) {
  return (
    <div className="px-[35px]">
      <div className="flex justify-between mt-[40px]">
        <div className="font-title text-[20px] text-purple">
          Hi, {props.nickName}
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
    </div>
  );
}
