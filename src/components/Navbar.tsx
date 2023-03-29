import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className={"nav"}>
        <Link href="\">
          <Image
            src="/images/topLogo.png"
            alt="top logo"
            width={108.75}
            height={30}
          />
        </Link>
        <div className={"navContainer"}>
          <ul>
            <li>
              <Link className="navItems" href="\">
                Invest
              </Link>
            </li>
            <li>
              <Link className="navItems" href="\">
                Blogs
              </Link>
            </li>
            <li>
              <Link className="navItems" href="\">
                About
              </Link>
            </li>
          </ul>
        </div>

        <button className={"navBarButton"}>Best Investment Options</button>
      </nav>
    </>
  );
};

export default Navbar;
