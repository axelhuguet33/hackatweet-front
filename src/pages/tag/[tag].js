import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import UserContext from "@/context/UserContext";
import Trends from "@/components/Trends";
import LeftBar from "@/components/LeftBar";
import TweetContainer from "@/components/TweetContainer";
import TagInput from "@/components/TagInput";

export default function Hashtag() {
  const router = useRouter();
  const { tag } = router.query;
  const [tagInput, setTagInput] = useState(tag);
  const { userData, loading } = useContext(UserContext);
  const [trendsRefresh, setTrendsRefresh] = useState(true);
  const [tweetRefresh, setTweetRefresh] = useState(true);

  useEffect(() => {
    if (!userData && !loading) {
      router.push("/login");
    } else {
      setTagInput(tag);
    }
  }, [loading, tag]);

  return (
    <div className="flex flex-col h-[100svh] md:flex-row font-verdana">
      <LeftBar></LeftBar>
      <div className="bg-[#151d26] h-[90%] md:h-auto md:w-5/12 md:border-2 border-[#39414b]">
        <TagInput tag={tagInput} />
        <TweetContainer
          tag={tagInput}
          tweetRefresh={tweetRefresh}
          setTrendsRefresh={setTrendsRefresh}
          setTweetRefresh={setTweetRefresh}
        />
      </div>
      <Trends trendsRefresh={trendsRefresh} />
    </div>
  );
}
