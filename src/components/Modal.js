import UserContext from "@/context/UserContext";
import Image from "next/image";
import { useContext, useState } from "react";

function Modal({ type }) {
  const [firstName, setFirstName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { updateUser } = useContext(UserContext);

  const handleClick = async () => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, username, password }),
    };
    const response = await fetch(
      `http://localhost:3000/users/${type === "Sign up" ? "signup" : "signin"}`,
      options
    ).then((r) => r.json());
    if (response.result) {
      updateUser(response.token);
    } else {
      alert(response.error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div className="flex justify-center md:justify-start">
      <button
        className={`w-72 md:w-52 h-9 rounded-2xl font-semibold  ${
          type === "Sign up"
            ? "bg-sky-500 hover:bg-sky-600"
            : "border-2 bg-transparent text-sky-500  hover:bg-black"
        }`}
        onClick={() => document.getElementById(`${type}-modal`).showModal()}
      >
        {type}
      </button>
      <dialog
        id={`${type}-modal`}
        className="modal bg-[#151d27] text-white rounded-2xl backdrop:bg-black/50"
        onKeyDown={(e) => handleKeyDown(e)}
      >
        <div className="modal-box">
          <form
            id={`${type}-form`}
            method="dialog"
            className="flex flex-col items-center gap-4 p-12"
          >
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <Image
              src="/rettiwt.png"
              alt="logo Twitter"
              className="w-[50px] h-auto"
              width={529}
              height={448}
            />
            <h3 className="font-bold text-2xl my-4">
              {type === "Sign up"
                ? "Create your Hackatweet account"
                : "Connect to Hackatweet"}
            </h3>
            {type === "Sign up" ? (
              <input
                autoFocus
                type="text"
                className="w-60 bg-transparent border-2 p-2 rounded border-[#5d6671]"
                placeholder="Firstname"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              ></input>
            ) : null}
            <input
              autoFocus
              type="text"
              className=" w-60 bg-transparent border-2 p-2 rounded border-[#5d6671]"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></input>
            <input
              type="password"
              className="w-60 bg-transparent border-2 p-2 rounded border-[#5d6671]"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <button
              className="w-60 h-8 bg-white text-black rounded-2xl border-2 font-semibold"
              onClick={handleClick}
            >
              {type}
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Modal;
