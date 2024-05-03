import Tweet from "./Tweet";
import LeftBar from "./LeftBar";
import Trends from "./Trends";
import TweetInput from "./TweetInput";
import { useState, useEffect } from "react";
function Home() {
  const [tweetsData, setTweetsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tweets")
      .then((response) => response.json())
      .then((data) => {
        setTweetsData(data.allTweets);
      });
  }, []);
  // console.log("date du tweets", tweetsData[0].createdAt);

  const tweetsList = tweetsData.map((data, i) => {
    return <Tweet key={i} {...data} />;
  });
  return (
    <div className="flex h-screen font-verdana">
      <LeftBar></LeftBar>
      <div className="bg-[#151d26] w-5/12 border-2 border-[#39414b]">
        <TweetInput />
        <div className="text-white h-3/4 border-t-2 border-[#39414b] flex flex-col overflow-y-auto ">
          {tweetsList}
        </div>
      </div>
      <Trends />
    </div>
  );
}

export default Home;
