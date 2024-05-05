import UserContext from "@/context/UserContext";
import { useContext, useState } from "react";

export default function TweetInput({ setTrendsRefresh, setTweetRefresh }) {
  const { userData } = useContext(UserContext);
  const [count, setCount] = useState(0);
  const [content, setContent] = useState("");

  const handleClick = async () => {
    if (content) {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: userData && userData.token,
          content,
        }),
      };
      await fetch("https://hackatweet-back-theta.vercel.app/tweets", options);
      setContent("");
      setCount(0);
    }
    setTrendsRefresh((prev) => !prev);
    setTweetRefresh((prev) => !prev);
  };

  return (
    <div className="p-5 flex flex-col text-white justify-between h-[20%] md:h-[30%] border-[#39414b] border-y-2 md:border-b-2">
      <h4 className="text-xl font-semibold ">Home</h4>
      <textarea
        className="mx-6 bg-transparent border-b-2 p-2 border-[#5d6671] "
        placeholder="What's up?"
        onChange={(e) => {
          if (e.target.value.length <= 280) {
            setCount(e.target.value.length);
            setContent(e.target.value);
          }
        }}
        value={content}
      ></textarea>
      <div className="flex text-xs items-center self-end">
        <p className="">{count}/280</p>
        <button
          className="w-20 h-6 m-3 bg-sky-500 rounded-2xl hover:bg-sky-600 font-semibold"
          onClick={handleClick}
        >
          Tweet
        </button>
      </div>
    </div>
  );
}
