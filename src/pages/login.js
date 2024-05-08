import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import UserContext from "@/context/UserContext";
import Image from "next/image";
import Modal from "@/components/Modal";

export default function LoginPage() {
  const router = useRouter();
  const { userData } = useContext(UserContext);

  useEffect(() => {
    if (userData) router.push("/");
  }, [userData]);

  return (
    <div className="h-[100svh] flex flex-col md:flex-row">
      <div className="relative h-1/5 md:w-2/5 md:h-full">
        <Image
          src="/fondLogin.jpeg"
          alt="fondLogin"
          className=" h-full md:h-full object-cover"
          width={3225}
          height={2160}
          priority //charge l'image en amont, empêche le chargement différé
        />
        <Image
          src="/rettiwt.png"
          alt="logo Twitter"
          className="w-[100px] md:w-[250px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-2/4"
          width={529}
          height={448}
        />
      </div>
      <div className="h-4/5 bg-[#151d27] text-white p-9 font-verdana md:w-3/5 md:h-full">
        <Image
          src="/rettiwt.png"
          alt="logo Twitter"
          width={529}
          height={448}
          className="hidden md:block md:w-[50px]"
        />
        <h1 className=" text-5xl text-center md:text-start md:text-7xl my-14 leading-snug font-montheavy">
          See what's <br /> happening
        </h1>
        <p className="text-center md:text-start text-2xl mb-20 md:mb-6 font-montheavy">
          Join Hackatweet today.
        </p>
        <Modal type="Sign up" />
        <p className=" mt-16 mb-8 md:my-4 text-center  md:text-start">
          Already have an account?
        </p>
        <Modal type="Sign in" />
      </div>
    </div>
  );
}
