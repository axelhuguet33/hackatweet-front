import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Trends({ trendsRefresh }) {
  const [hashtags, setHashtags] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getHashtags = async () => {
      const data = await fetch("http://localhost:3000/tweets/hashtags")
        .then((r) => r.json())
        .then((data) => data.hashtags);
      setHashtags(data.slice(0, 6));
    };
    getHashtags();
  }, [trendsRefresh]);

  return (
    <>
      <div className="bg-[#151d26] text-white w-4/12 font-semibold hidden md:block">
        <h4 className="p-5 text-xl">Trends</h4>
        <div className="bg-[#1b232c] m-4 rounded-lg">
          {hashtags.map((hashtag, i, arr) => {
            return (
              <div
                key={i}
                onClick={() => router.push(`/tag/%23${hashtag.tag}`)}
                className={`py-4 px-4 hover:bg-[#232d3b] cursor-pointer ${
                  i === 0 && "rounded-t-lg"
                } ${i === arr.length - 1 && "rounded-b-lg"}`}
              >
                <div className="text-base">#{hashtag.tag}</div>
                <div className="text-xs text-[#65717e]">
                  {hashtag.count} tweets
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
