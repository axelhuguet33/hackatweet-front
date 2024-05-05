import Image from "next/image";
import { useContext } from "react";
import UserContext from "@/context/UserContext";
import { useRouter } from "next/router";

export default function LeftBar() {
  const router = useRouter();
  const { updateUser, userData } = useContext(UserContext);

  const handleLogout = () => {
    updateUser(null);
  };

  return (
    <div className="bg-[#151d26] h-[10%] md:h-auto md:w-3/12 flex md:flex-col justify-between p-6 ">
      <Image
        src="/rettiwt.png"
        alt="logo Hackatweet"
        className="cursor-pointer w-[50px]"
        width={529}
        height={448}
        priority
        onClick={() => router.push("/")}
      />
      <div className="flex items-center md:items-stretch  gap-2 md:flex-col md:gap-7  text-white font-semibold">
        <div className="flex items-center">
          <div className="size-14 rounded-full bg-sky-900 flex items-center justify-center">
            <Image
              src={userData ? userData.imageUrl : "/chad.jpg"}
              alt="Profil picture"
              className="size-11"
              width={150}
              height={150}
            />
          </div>
          <div className="p-2">
            <p className="md:mb-2">{userData && userData.firstName}</p>
            <p className="text-xs text-[#65717e]">
              @{userData && userData.username}
            </p>
          </div>
        </div>
        <button
          className="w-24 h-7 bg-transparent text-xs rounded-2xl border-[#39414b] border-2 "
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
