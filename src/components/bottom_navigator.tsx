import IconHome from "@/icons/Home.svg";
import IconResources from "@/icons/Resources.svg";
import IconStar from "@/icons/Star.svg";
import IconSupport from "@/icons/Support.svg";

export default function BottomNavigator() {
    return (
      <div className="fixed w-screen h-[59px] left-0 bottom-0 bg-lightpurple flex justify-around items-center">
        <IconHome className="fill-white" width={28} height={28} />
        <IconResources className="fill-white" width={28} height={28} />
        <IconStar className="fill-white" width={28} height={28} />
        <IconSupport className="fill-white" width={28} height={28} />
      </div>
    );
  }
  