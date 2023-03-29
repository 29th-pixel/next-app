import React from "react";
import Image from "next/image";
import Link from "next/link";
import announceData from "../pages/api/announceData.json";

const Announcement = () => {
  return (
    <div className={"announcement-bar"}>
      <Image
        src="/images/megaphone.png"
        alt="top logo"
        width={29.5}
        height={22.27}
      />
      <p>{announceData[0].announce.text}</p>
      <Link style={{ textDecoration: "none" }} href={announceData[0].announce.href}>
        Take Action
      </Link>
    </div>
  );
};

export default Announcement;
