import { useState, useEffect } from "react";
import Tweet from "@/components/Tweet";

export default function TweetContainer({
  tweetRefresh,
  setTrendsRefresh,
  setTweetRefresh,
  tag,
}) {
  const [tweetsData, setTweetsData] = useState([]);

  useEffect(() => {
    const getTweetsData = async () => {
      const data = await fetch(
        "https://hackatweet-back-theta.vercel.app/tweets"
      )
        .then((response) => response.json())
        .then((data) => data.allTweets);
      data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setTweetsData(data);
    };
    getTweetsData();
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
    .filter((data) => !tag || data.hashtags.includes(tag))
    .map((data, i) => {
      return (
        <Tweet
          key={i}
          {...data}
          borderTop={i === 0}
          deleteTweet={deleteTweet}
          setTweetRefresh={setTweetRefresh}
        />
      );
    });

  return (
    <div
      className={`text-white ${
        tag ? "h-[80%]" : "h-[70%]"
      } flex flex-col overflow-y-auto `}
    >
      {tweetsList}
    </div>
  );
}
