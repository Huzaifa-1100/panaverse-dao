import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.png";
import Link from "next/link";
import Wrapper from "../shared/wrapper";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white">
      <Wrapper>
        <div className="flex justify-between items-center py-4 ">
          {/* Logo */}
          <div>
            {/* <h2 className="text-xl font-bold text-red-600">Panaverse DAO</h2> */}
            <Image src={logo} alt="panaverse" />
          </div>
          {/* Navigation Bar */}
          <ul className="flex space-x-8 font-medium">
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/courses"}>
              <li>Courses</li>
            </Link>
          </ul>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
