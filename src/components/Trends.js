import { useEffect, useState } from "react";

export default function Trends({ trigger }) {
  const [hashtags, setHashTags] = useState({});

  useEffect(() => {
    const getHashtags = async () => {
      const hashtagsData = await fetch("http://localhost:3000/tweets/hashtags")
        .then((r) => r.json())
        .then((data) => data.hashtags);
      setHashTags(hashtagsData);
    };
    getHashtags();
  }, [trigger]);

  return (
    <>
      <div className="bg-[#151d26] text-white w-4/12 font-semibold ">
        <h4 className="p-5 text-xl">Trends</h4>
        <div className="bg-[#1b232c] m-4 px-4 py-1">
          {Object.keys(hashtags).map((hashtag) => {
            return (
              <div className="my-4 py-2">
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
