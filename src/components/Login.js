import Image from "next/image";
import Modal from "./Modal";

export default function Login() {
  return (
    <div className="h-screen flex">
      <div className="relative w-2/5">
        <Image
          src="/fondLogin.jpeg"
          alt="fondLogin"
          className="h-full object-cover "
          width={3225}
          height={2160}
          priority="high"
        />
        <Image
          src="/rettiwt.png"
          alt="logo Twitter"
          className=" w-[250px] h-auto absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-2/4"
          width={529}
          height={448}
        />
      </div>
      <div className="bg-[#151d27] text-white w-3/5 p-9 font-verdana">
        <Image
          src="/rettiwt.png"
          alt="logo Twitter"
          width={529}
          height={448}
          className="w-[50px] h-auto"
        />
        <h1 className="text-7xl my-14 leading-snug">
          See what's <br /> happening
        </h1>
        <p className="text-3xl mb-6">Join Hackatweet today.</p>
        <Modal type="Sign up" />
        <p className="my-3">Already have an account?</p>
        <Modal type="Sign in" />
      </div>
    </div>
  );
}
