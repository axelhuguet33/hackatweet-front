export default function TweetInput() {
  return (
    <div className="p-5 h-1/4 border-[#39414b] flex flex-col">
      <h4 className=" text-xl font-semibold text-white self-start">Home</h4>
      <textarea
        className="mx-6 bg-transparent border-b-2 p-2 rounded border-[#5d6671] text-white"
        placeholder="What's up?"
      ></textarea>
      <div className="flex text-white text-xs items-center self-end">
        <p className="">0/280</p>
        <button className="w-20 h-6 m-3 bg-sky-500  text-white rounded-2xl hover:bg-sky-600 font-semibold">
          Tweet
        </button>
      </div>
    </div>
  );
}
