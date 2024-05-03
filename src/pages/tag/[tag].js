import { useRouter } from "next/router";
import Trends from "../../components/Trends";
import LeftBar from "../../components/LeftBar";
import Tweet from "../../components/Tweet";
import { useEffect, useState } from "react";
export default function Hashtag() {
  const [tweetsData, setTweetsData] = useState([]);
  const router = useRouter();
  const { tag } = router.query;

  useEffect(() => {
    fetch("http://localhost:3000/tweets")
      .then((r) => r.json())
      .then((data) => setTweetsData(data.allTweets));
  }, []);
  console.log(tweetsData);
  const tweetsList = tweetsData.map((data, i) => {
    if (data.hashtags.includes(tag)) {
      return <Tweet key={i} {...data} />;
    }
  });
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
            value={`#${tag}`}
          />
        </div>
        <div className="text-white h-4/5 border-t-2 border-[#39414b] flex flex-col overflow-y-scroll ">
          {tweetsList}
        </div>
      </div>
      <Trends />
    </div>
  );
}
