import Image from "next/image";
import { Tweet } from "./Tweets";
import { useContext } from "react";
import UserContext from "@/context/UserContext";

import { Trends } from "./Trends";
import Link from "next/link";
function Home() {
  const { token, updateToken } = useContext(UserContext);

  const handleLogout = () => {
    updateToken("");
  };

  return (
    <div className="flex h-screen font-verdana">
      <div className="bg-[#151d26] w-3/12 flex flex-col justify-between p-6 ">
        <Link href="/home">
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
      <div className="bg-[#151d26] w-5/12 border-2 border-[#39414b]">
        <div className="p-5 h-1/4 border-[#39414b] flex flex-col">
          <h4 className=" text-xl font-semibold text-white self-start">Home</h4>
          <textarea
            className="mx-6 bg-transparent border-b-2 p-2 rounded border-[#5d6671] text-white"
            placeholder="What's up?"
          ></textarea>
          <div className="flex text-white text-xs items-center self-end">
            <p className="">0/280</p>
            <button className="w-20 h-6 m-3 bg-sky-500  text-white rounded-2xl hover:bg-sky-600 font-semibold">
              Tweet
            </button>
          </div>
        </div>
        <div className="text-white h-3/4 border-t-2 border-[#39414b] flex flex-col overflow-y-scroll ">
          <Tweet></Tweet>
        </div>
      </div>
      <Trends />
    </div>
  );
}

export default Home;
