import Login from "./Login";
import Image from "next/image";
function Home() {
  return (
    <div className="flex h-screen">
      <div className="bg-[#151d26] w-3/12 flex flex-col justify-between p-9 ">
        <Image
          src="/rettiwt.png"
          alt="logo Twitter"
          className=""
          width={50}
          height={40}
        />
        <div className="flex flex-col gap-y-3">
          <div className="text-white border-white border-2 bg-transparent h-20">
            John Doe
          </div>
          <button className="w-32 h-9 bg-transparent text-white rounded-2xl border-2">
            Logout
          </button>
        </div>
      </div>
      <div className="bg-green-700 w-5/12">Home</div>
      <div className="bg-pink-700 w-4/12">Trends</div>
    </div>
  );
}

export default Home;
