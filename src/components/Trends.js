export default function Trends() {
  return (
    <>
      <div className="bg-[#151d26] text-white w-4/12 font-semibold ">
        <h4 className="p-5 text-xl">Trends</h4>
        <div className="bg-[#1b232c] m-4 rounded-lg">
          <div className="py-4 cursor-pointer hover:bg-[#232d3b] px-3 ">
            <div className="text-base">#jesuistropchaud</div>
            <div className="text-xs text-[#65717e]">02 tweets</div>
          </div>
          <div className="py-4 cursor-pointer hover:bg-[#232d3b] px-3">
            <div className="text-base">#jesuistropchaude</div>
            <div className="text-xs text-[#65717e]">18009 tweets</div>
          </div>
        </div>
      </div>
    </>
  );
}
