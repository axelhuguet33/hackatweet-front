import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import UserContext from "@/context/UserContext";
import Link from "next/link";

export default function Tweet({ deleteTweet, setTweetRefresh, ...props }) {
  const [timePassed, setTimePassed] = useState("");
  const { userData } = useContext(UserContext);

  function msToTime(duration) {
    let time = [
      {
        unit: "day",
        value: Math.floor((duration / (1000 * 60 * 60 * 24)) % 24),
      },
      { unit: "hour", value: Math.floor((duration / (1000 * 60 * 60)) % 24) },
      { unit: "minute", value: Math.floor((duration / (1000 * 60)) % 60) },
    ];
    const displayTime = time.find((e) => e.value !== 0);
    return displayTime
      ? `${displayTime.value} ${displayTime.unit}${
          displayTime.value > 1 ? "s" : ""
        } `
      : "a few seconds";
  }

  useEffect(() => {
    setTimePassed(msToTime(new Date() - Date.parse(props.createdAt)));
  }, []);

  const handleLike = async () => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        _id: props._id,
        token: userData && userData.token,
      }),
    };
    await fetch("http://localhost:3000/tweets/likes", options);
    setTweetRefresh((prev) => !prev);
  };

  const content = props.content.split(/(#\w+)/g).map((fragment, i) => {
    if (fragment[0] === "#") {
      return (
        <Link
          key={i}
          className="text-blue-500"
          href={`/tag/%23${fragment.slice(1)}`}
        >
          {fragment}
        </Link>
      );
    } else {
      return fragment;
    }
  });

  const isLiked = userData && props.likes.includes(userData.token);

  return (
    <div
      className={`text-white bg-transparent flex ${
        props.borderTop ? "" : "border-t-2"
      } border-[#39414b] p-5 flex-col gap-4`}
    >
      <div className="flex flex-row items-center">
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
            <Image
              src="/chad.jpg"
              alt="Profil picture"
              className="size-11"
              width={150}
              height={150}
            />
          )}
        </div>
        <div className="p-2 flex flex-row text-[0.8rem] font-semibold">
          <p className="font-montheavy pr-1">
            {props.user ? props.user.firstName : "Utilisateur Hackatweet"}
          </p>
          <p className="text-xs text-[#65717e]">
            @{props.user ? props.user.username : "Utilisateur Hackatweet"}
            <span> · {timePassed}</span>
          </p>
        </div>
      </div>
      <div className="text-xs">{content}</div>
      <div className="flex text-xs gap-2 items-center justify-end md:justify-start">
        <FontAwesomeIcon
          icon={faHeart}
          className={`size-4 cursor-pointer ${
            isLiked ? "text-[#f71671]" : null
          }`}
          onClick={() => handleLike()}
        />
        <span className={`${isLiked ? "text-[#f71671]" : null}`}>
          {props.likes.length}
        </span>
        {userData && props.user && userData.token === props.user.token ? (
          <FontAwesomeIcon
            icon={faTrashCan}
            className="size-4 cursor-pointer"
            onClick={() => deleteTweet(props._id)}
          />
        ) : null}
      </div>
    </div>
  );
}
