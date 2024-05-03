import UserContext from "@/context/UserContext";
import { useContext, useState } from "react";

export default function TweetInput({ setTrigger }) {
  const { token } = useContext(UserContext);
  const [count, setCount] = useState(0);
  const [content, setContent] = useState("");

  const handleClick = async () => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, content }),
    };
    await fetch("https://hackatweet-back-theta.vercel.app/tweets", options);
    setContent("");
    setCount(0);
    setTrigger((prevTrigger) => !prevTrigger);
  };

  return (
    <div className="p-5 flex flex-col h-1/5">
      <h4 className=" text-xl font-semibold text-white self-start">Home</h4>
      <textarea
        className="mx-6 bg-transparent border-b-2 p-2 rounded border-[#5d6671] text-white"
        placeholder="What's up?"
        onChange={(e) => {
          if (e.target.value.length <= 280) {
            setCount(e.target.value.length);
            setContent(e.target.value);
          }
        }}
        value={content}
      ></textarea>
      <div className="flex text-white text-xs items-center self-end">
        <p className="">{count}/280</p>
        <button
          className="w-20 h-6 m-3 bg-sky-500  text-white rounded-2xl hover:bg-sky-600 font-semibold"
          onClick={handleClick}
        >
          Tweet
        </button>
      </div>
    </div>
  );
}
