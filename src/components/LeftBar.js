import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import UserContext from "@/context/UserContext";

export default function LeftBar() {
  const { updateToken, userData } = useContext(UserContext);

  const handleLogout = () => {
    updateToken(null);
  };

  return (
    Object.keys(userData).length && (
      <>
        <div className="bg-[#151d26] w-3/12 flex flex-col justify-between p-6 ">
          <Link href="/">
            <Image
              src="/rettiwt.png"
              alt="logo Twitter"
              className="hover:cursor-pointer w-[50px] h-auto"
              width={529}
              height={448}
            />
          </Link>
          <div className="flex flex-col gap-y-7">
            <div className="text-white flex font-semibold items-center">
              <div className="size-14 rounded-full bg-sky-900 flex items-center justify-center">
                <Image
                  src={!!userData && userData.imageUrl}
                  alt="Profil picture"
                  className="size-11"
                  width={150}
                  height={150}
                />
              </div>
              <div className="p-2">
                <p className="mb-1">{userData.firstName}</p>
                <p className="text-xs text-[#65717e]">@{userData.username}</p>
              </div>
            </div>
            <button
              className="w-24 h-7 bg-transparent text-xs text-white rounded-2xl border-[#39414b] border-2 font-semibold"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </>
    )
  );
}
