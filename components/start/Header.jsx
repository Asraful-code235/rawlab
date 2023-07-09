import Image from "next/image";
import { SwitchBox } from "../switch/Switch";

export const Header = () => {
  return (
    <header className="flex items-center justify-between gap-8 w-full px-10 py-8">
      <Image
        width={260}
        height={150}
        src={"/svg/logo.svg"}
        alt="logo"
        className="w-[19vmax]"
      />
      <SwitchBox />
    </header>
  );
};
