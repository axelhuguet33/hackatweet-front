import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Tweet(props) {
  const [timePassed, setTimePassed] = useState("");

  function msToTime(duration) {
    let newTab = [
      (duration / (1000 * 60 * 60 * 24)) % 24,
      (duration / (1000 * 60 * 60)) % 24,
      (duration / (1000 * 60)) % 60,
      (duration / 1000) % 60,
    ];
    newTab = newTab.map((e) => Math.floor(e));
    let index = newTab.findIndex((e) => e !== 0);
    let time = "";
    switch (index) {
      case 0:
        time = `${newTab[index]} day(s)`;
        break;
      case 1:
        time = `${newTab[index]} hour(s)`;
        break;
      case 2:
        time = `${newTab[index]} minute(s)`;
        break;
      case 3:
        time`a few seconds`;
        break;
    }
    return time;
  }
  useEffect(() => {
    let dateNow = Date.now();
    console.log("avant le parse ", dateNow);
    console.log("aujourd'hui en millisecondes :", dateNow);

    let tweetDate = Date.parse(props.createdAt);

    console.log("hier en millisecondes :", tweetDate);
    console.log("temps écoulé en mms : ", msToTime(dateNow - tweetDate));
    setTimePassed(msToTime(dateNow - tweetDate));
  }, []);

  return (
    <>
      <div className="text-white bg-transparent flex font-semibold border-b-2 border-[#39414b] p-3 flex-col">
        <div className="flex flex-row">
          <Image
            src={props.user ? props.user.imageUrl : "/mrvalbass.png"}
            alt="Profil picture"
            className="rounded-full bg-white"
            width={50}
            height={40}
          />
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
        <div className="text-xs">{props.content}</div>
        <div className="flex text-xs p-2 gap-2 items-center">
          <FontAwesomeIcon icon={faHeart} className="size-4 cursor-pointer" />
          <span>0</span>
          <FontAwesomeIcon
            icon={faTrashCan}
            className="size-4 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}
