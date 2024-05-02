import Image from "next/image";
import { Tweet } from "./Tweets";
import { useContext } from "react";
import UserContext from "@/context/UserContext";

function Home() {
  const { token, updateToken } = useContext(UserContext);

  const handleLogout = () => {
    updateToken("");
  };

  return (
    <div className="flex h-screen font-verdana">
      <div className="bg-[#151d26] w-3/12 flex flex-col justify-between p-6 ">
        <Image
          src="/rettiwt.png"
          alt="logo Twitter"
          className=""
          width={50}
          height={40}
        />
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
          <Tweet></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>
        </div>
      </div>
      <div className="bg-[#151d26] text-white w-4/12 font-semibold ">
        <h4 className="p-5 text-xl">Trends</h4>
        <div className="bg-[#1b232c] m-4 px-4 py-1">
          <div className="my-4 py-2">
            <div className="text-base">#jesuistropchaud</div>
            <div className="text-xs text-[#65717e]">02 tweets</div>
          </div>
          <div>
            <div className="text-base">#jesuistropchaude</div>
            <div className="text-xs text-[#65717e]">18009 tweets</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
