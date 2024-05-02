import { Trends } from "./Trends";
import { Tweet } from "./Tweets";
import Image from "next/image";
import Link from "next/link";
export function Search() {
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
          <button className="w-24 h-9 bg-transparent text-xs text-white rounded-2xl border-2 font-semibold">
            Logout
          </button>
        </div>
      </div>
      <div className="bg-[#151d26] w-5/12 border-2 border-[#39414b]">
        <div className="p-5 h-1/5 border-[#39414b] flex flex-col">
          <h4 className=" text-xl font-semibold text-white self-start">
            Hashtag
          </h4>
          <input
            className="mx-6 mt-5 bg-[#1b232c] p-2 rounded-full text-white"
            placeholder="Search Hashtag?"
          ></input>
        </div>
        <div className="text-white h-4/5 border-t-2 border-[#39414b] flex flex-col overflow-y-scroll ">
          <Tweet></Tweet>
        </div>
      </div>
      <Trends />
    </div>
  );
}
