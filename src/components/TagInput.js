import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function TagInput({ tag }) {
  const router = useRouter();
  const [tagInput, setTagInput] = useState(`#${tag}`);

  useEffect(() => {
    setTagInput(tag);
  }, [tag]);

  return (
    <div className="p-5 h-[20%] border-[#39414b] border-b-2 flex flex-col">
      <h4 className=" text-xl font-semibold text-white self-start">Hashtag</h4>
      <input
        className="mx-6 mt-5 bg-[#1b232c] p-2 rounded-full text-white"
        placeholder="Search Hashtag?"
        value={`#${tagInput}`}
        onChange={(e) => {
          e.target.value.slice(1)
            ? router.push(`/tag/${e.target.value.slice(1)}`)
            : router.push("/");
        }}
      />
    </div>
  );
}
