import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrashCan } from "@fortawesome/free-solid-svg-icons";
export function Tweet() {
  return (
    <>
      <div className="text-white bg-transparent flex font-semibold border-b-2 border-[#39414b] p-3 flex-col">
        <div className="flex flex-row">
          <Image
            src="/mrvalbass.png"
            alt="Profil picture"
            className="rounded-full bg-white"
            width={50}
            height={40}
          />
          <div className="p-2 flex flex-row text-xs">
            <p>Chaton</p>
            <p className="text-xs text-[#65717e]">
              @ChatonCena <span>· a few seconds</span>
            </p>
          </div>
        </div>
        <div className="text-xs">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo iusto
          nam ullam consectetur officia dignissimos ipsam eligendi quibusdam
          neque, voluptatum expedita optio quam numquam possimus ut. Quia earum
          consequuntur impedit!
        </div>
        <div className="flex text-xs p-2 gap-2 items-center">
          <FontAwesomeIcon icon={faHeart} />
          <span>0</span>
          <FontAwesomeIcon icon={faTrashCan} />
        </div>
      </div>
    </>
  );
}
