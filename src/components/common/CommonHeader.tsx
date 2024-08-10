import IconSearch from "@/icons/Seach.svg";
import IconNotification from "@/icons/Notifications.svg";
import IconUser from "@/icons/User.svg";

export interface CommonHeaderProps {
  children: React.ReactNode;
}

export default function CommonHeader({children} : CommonHeaderProps) {
    return (
      <div className="px-[35px]">
        <div className="flex justify-between mt-[40px]">
          {children}
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