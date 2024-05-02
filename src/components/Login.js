import Image from "next/image";
import Modal from "./Modal";
function Login() {
  return (
    <>
      <div className="h-screen flex">
        <div className="relative w-2/5">
          <Image
            src="/fondLogin.jpeg"
            alt="fondLogin"
            className="h-full object-cover "
            width={3225}
            height={2160}
          />

          <Image
            src="/rettiwt.png"
            alt="logo Twitter"
            className=" absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-2/4"
            width={250}
            height={250}
          />
        </div>
        <div className="bg-[#151d27] text-white w-3/5 p-9 font-verdana">
          <Image
            src="/rettiwt.png"
            alt="logo Twitter"
            className=""
            width={50}
            height={40}
          />
          <h1 className="text-7xl my-14 leading-snug">
            See what's <br /> happening
          </h1>
          <p className="text-3xl mb-6">Join Hackatweet today.</p>
          <Modal />
          <p className="my-3">Already have an account?</p>
          <button className="w-52 h-9 bg-transparent text-sky-500 rounded-2xl border-2 hover:bg-black font-semibold">
            Sign in
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
