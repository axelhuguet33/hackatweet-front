import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import UserContext from "@/context/UserContext";

export default function LeftBar() {
  const { token, updateToken } = useContext(UserContext);

  const handleLogout = () => {
    updateToken("");
  };
  return (
    <>
      <div className="bg-[#151d26] w-3/12 flex flex-col justify-between p-6 ">
        <Link href="/">
          <Image
            src="/rettiwt.png"
            alt="logo Twitter"
            className="hover:cursor-pointer"
            width={50}
            height={40}
          />
        </Link>
        <div className="flex flex-col gap-y-3">
          <div className="text-white bg-transparent flex font-semibold">
            <Image
              src="/mrvalbass.png"
              alt="Profil picture"
              className="rounded-full bg-white"
              width={50}
              height={40}
            />
            <div className="p-2">
              <p>Chaton</p>
              <p className="text-xs text-[#65717e]">@ChatonCena</p>
            </div>
          </div>
          <button
            className="w-24 h-9 bg-transparent text-xs text-white rounded-2xl border-2 font-semibold"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
