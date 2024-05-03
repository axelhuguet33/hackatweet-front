import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Trends({ trigger }) {
  const [hashtags, setHashTags] = useState({});
  const router = useRouter();

  useEffect(() => {
    fetch("http://localhost:3000/tweets/hashtags")
      .then((r) => r.json())
      .then((data) => setHashTags(data.hashtags));
  }, [trigger]);

  return (
    <>
      <div className="bg-[#151d26] text-white w-4/12 font-semibold ">
        <h4 className="p-5 text-xl">Trends</h4>
        <div className="bg-[#1b232c] m-4">
          {Object.keys(hashtags).map((hashtag, i) => {
            return (
              <div
                key={i}
                onClick={() => router.push(`/tag/${hashtag}`)}
                className=" py-4 px-4 hover:bg-[#232d3b] cursor-pointer"
              >
                <div className="text-base">#{hashtag}</div>
                <div className="text-xs text-[#65717e]">
                  {hashtags[hashtag]} tweets
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
