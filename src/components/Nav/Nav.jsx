import React from "react";
import Style from "./Nav.module.css";
import Link from "next/link";
import Image from "next/image";
import { navDesktop } from "@/data/links";
import { logo } from "@/data/alt";

import { Montserrat } from "next/font/google";
const mosnstreat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

import Logo from "../../../public/assets/logo/logo.svg";

const Nav = () => {
  return (
    <nav className={Style.navcontainer}>
      <div>
        <Image alt={logo} src={Logo} />
      </div>

      <ul className={Style.ul}>
        {navDesktop.map((el, index) => (
          <li className={Style.li}>
            <Link href={el.link}>{el.name}</Link>
          </li>
        ))}
      </ul>
      <div>
        {" "}
        <Link href="#" className={Style.btn}>
          Időpontot foglalok
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
