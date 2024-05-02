import Tweet from "./Tweets";
import LeftBar from "./LeftBar";
import Trends from "./Trends";
import TweetInput from "./TweetInput";

function Home() {
  return (
    <div className="flex h-screen font-verdana">
      <LeftBar></LeftBar>
      <div className="bg-[#151d26] w-5/12 border-2 border-[#39414b]">
        <TweetInput />
        <div className="text-white h-3/4 border-t-2 border-[#39414b] flex flex-col overflow-y-scroll ">
          <Tweet></Tweet>
        </div>
      </div>
      <Trends />
    </div>
  );
}

export default Home;
