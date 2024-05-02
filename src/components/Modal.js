import Image from "next/image";

function Modal() {
  return (
    <div>
      <button
        className="w-52 h-9 bg-sky-500 rounded-2xl hover:bg-sky-600 font-semibold"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Sign up
      </button>
      <dialog
        id="my_modal_3"
        className="modal bg-[#151d27] text-white rounded-2xl"
      >
        <div className="modal-box">
          <form
            method="dialog"
            className="flex flex-col items-center gap-4 p-12"
          >
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <Image
              src="/rettiwt.png"
              alt="logo Twitter"
              className=""
              width={50}
              height={40}
            />
            <h3 className="font-bold text-2xl my-4">
              Create your Hackatweet account
            </h3>
            <input
              className="w-60 bg-transparent border-2 p-2 rounded border-[#5d6671]"
              placeholder="Firstname"
            ></input>
            <input
              className=" w-60 bg-transparent border-2 p-2 rounded border-[#5d6671]"
              placeholder="Username"
            ></input>
            <input
              className="w-60 bg-transparent border-2 p-2 rounded border-[#5d6671]"
              placeholder="Password"
            ></input>
            <button className="w-60 h-8 bg-white text-black rounded-2xl border-2 font-semibold">
              Sign up
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Modal;
