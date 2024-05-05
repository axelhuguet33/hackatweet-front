import { useState, useEffect } from "react";
import Tweet from "@/components/Tweet";

export default function TweetContainer({
  tweetRefresh,
  setTrendsRefresh,
  setTweetRefresh,
}) {
  console.log("TweetContainer render");
  const [tweetsData, setTweetsData] = useState([]);

  useEffect(() => {
    fetch("https://hackatweet-back-theta.vercel.app/tweets")
      .then((response) => response.json())
      .then((data) => {
        setTweetsData(data.allTweets);
      });
  }, [tweetRefresh]);

  const deleteTweet = async (id) => {
    const options = {
      method: "DELETE",
    };
    await fetch(
      `https://hackatweet-back-theta.vercel.app/tweets/${id}`,
      options
    );
    setTrendsRefresh((prev) => !prev);
    setTweetRefresh((prev) => !prev);
  };

  const tweetsList = tweetsData
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .map((data, i) => {
      return (
        <Tweet
          key={i}
          {...data}
          className={i === 0 ? "" : "border-t-2"}
          deleteTweet={deleteTweet}
          setTweetRefresh={setTweetRefresh}
        />
      );
    });

  return (
    <div className="text-white h-[70%] flex flex-col overflow-y-auto ">
      {tweetsList}
    </div>
  );
}
