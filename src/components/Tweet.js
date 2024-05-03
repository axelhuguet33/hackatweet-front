import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrashCan, faUser } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import UserContext from "@/context/UserContext";

export default function Tweet(props) {
  const [timePassed, setTimePassed] = useState("");
  const { token } = useContext(UserContext);

  function msToTime(duration) {
    let time = [
      Math.floor((duration / (1000 * 60 * 60 * 24)) % 24),
      Math.floor((duration / (1000 * 60 * 60)) % 24),
      Math.floor((duration / (1000 * 60)) % 60),
      Math.floor((duration / 1000) % 60),
    ];
    const timeFrame = ["day", "hour", "minute", "second"];
    const displayTime = time.find((e) => e !== 0);
    return `${displayTime} ${
      timeFrame[time.findIndex((e) => e === displayTime)]
    }${displayTime > 1 ? "s" : ""} `;
  }

  useEffect(() => {
    setTimePassed(msToTime(Date.now() - Date.parse(props.createdAt)));
  }, []);

  const handleLike = async () => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: props._id, token }),
    };
    await fetch("http://localhost:3000/tweets/likes", options);
    props.setTrigger((prev) => !prev);
  };

  const content = props.content.split(/(#\w+)/g).map((fragment) => {
    if (fragment[0] === "#") {
      return <span className="text-blue-500">{fragment}</span>;
    } else {
      return fragment;
    }
  });

  return (
    <>
      <div className="text-white bg-transparent flex font-semibold border-b-2 border-[#39414b] p-3 flex-col">
        <div className="flex flex-row">
          <div className="size-14 rounded-full bg-sky-900 flex items-center justify-center">
            {props.user ? (
              <Image
                src={props.user.imageUrl}
                alt="Profil picture"
                className="size-11"
                width={150}
                height={150}
              />
            ) : (
              <FontAwesomeIcon icon={faUser} className="size-8" />
            )}
          </div>
          <div className="p-2 flex flex-row text-xs">
            <p>
              {props.user ? props.user.firstName : "Utilisateur Hackatweet"}
            </p>
            <p className="text-xs text-[#65717e]">
              @{props.user ? props.user.username : "Utilisateur Hackatweet"}
              <span> · {timePassed}</span>
            </p>
          </div>
        </div>
        <div className="text-xs">{content}</div>
        <div className="flex text-xs p-2 gap-2 items-center">
          <FontAwesomeIcon
            icon={faHeart}
            className={`size-4 cursor-pointer ${
              props.likes.includes(token) ? "text-[#f71671]" : null
            }`}
            onClick={() => handleLike()}
          />
          <span
            className={`${
              props.likes.includes(token) ? "text-[#f71671]" : null
            }`}
          >
            {props.likes.length}
          </span>
          {props.user && token === props.user.token ? (
            <FontAwesomeIcon
              icon={faTrashCan}
              className="size-4 cursor-pointer"
              onClick={() => props.deleteTweet(props._id)}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}
