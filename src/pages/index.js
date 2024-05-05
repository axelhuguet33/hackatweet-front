import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import UserContext from "@/context/UserContext";
import LeftBar from "@/components/LeftBar";
import Trends from "@/components/Trends";
import TweetInput from "@/components/TweetInput";
import TweetContainer from "@/components/TweetContainer";

export default function HomePage() {
  const router = useRouter();
  const { userData, loading } = useContext(UserContext);
  const [trendsRefresh, setTrendsRefresh] = useState(true);
  const [tweetRefresh, setTweetRefresh] = useState(true);

  useEffect(() => {
    if (!userData && !loading) {
      router.push("/login");
    }
  }, [loading]);

  return loading && userData ? (
    <div className="h-[100svh] bg-[#151d26] flex justify-center items-center">
      <h1>Loading...</h1>
    </div>
  ) : (
    <div className="flex flex-col md:flex-row h-screen font-verdana">
      <LeftBar></LeftBar>
      <div className="bg-[#151d26] h-[90%] md:w-5/12 md:h-screen md:border-2 border-[#39414b]">
        <TweetInput
          setTrendsRefresh={setTrendsRefresh}
          setTweetRefresh={setTweetRefresh}
        />
        <TweetContainer
          tweetRefresh={tweetRefresh}
          setTrendsRefresh={setTrendsRefresh}
          setTweetRefresh={setTweetRefresh}
        />
      </div>
      <Trends trendsRefresh={trendsRefresh} />
    </div>
  );
}
