import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Trends from "@/components/Trends";
import LeftBar from "@/components/LeftBar";
import TweetContainer from "@/components/TweetContainer";
import TagInput from "@/components/TagInput";
export default function Hashtag() {
  const router = useRouter();
  const { tag } = router.query;
  const [tagInput, setTagInput] = useState(tag);
  const [trendsRefresh, setTrendsRefresh] = useState(true);
  const [tweetRefresh, setTweetRefresh] = useState(true);

  useEffect(() => {
    setTagInput(tag);
  }, [tag]);

  return (
    <div className="flex flex-col h-screen md:flex-row font-verdana">
      <LeftBar></LeftBar>
      <div className="bg-[#151d26] h-[90%] md:h-auto md:w-5/12 border-2 border-[#39414b]">
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
