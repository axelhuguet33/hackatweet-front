import { Trends } from "./Trends";
import { Tweet } from "./Tweet";
import { LeftBar } from "./LeftBar";
export function Search() {
  return (
    <div className="flex h-screen font-verdana">
      <LeftBar></LeftBar>
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
