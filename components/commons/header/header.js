import { CustomContainer, CustomImage } from "../../UI";

import cloud from "@/public/images/cloud.png";
import logo from "@/public/images/logo.png";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

import Link from "next/link";
import { Search } from "./search";

export default function Header() {
  return (
    <header className="py-3">
      <CustomContainer>
        <div className="flex items-center justify-between gap-8">
          {/* logo */}
          <Link href="/" className="w-40">
            <CustomImage
              src={logo}
              alt="logo"
              width="160"
              height="80"
              className="w-full"
            />
          </Link>

          {/* search */}
          <div className="hidden tab:block w-full max-w-[680px]">
            <Search />
          </div>

          {/* right */}
          <div className="flex items-center gap-6">
            <ul className="flex items-center gap-3">
              <li>
                <Link
                  href="/"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-base bg-custom-bg-1 hover:bg-custom-orang hover:text-white text-custom--light-text"
                >
                  <FaRegUser />
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-base bg-custom-bg-1 hover:bg-custom-orang hover:text-white text-custom--light-text"
                >
                  <FaRegHeart />
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-base bg-custom-bg-1 hover:bg-custom-orang hover:text-white text-custom--light-text"
                >
                  <IoCartOutline />
                </Link>
              </li>
            </ul>

            {/* cloud */}
            <div className="hidden laptop:block w-48">
              <CustomImage
                src={cloud}
                alt="logo"
                width="180"
                height="50"
                className="w-44"
              />
            </div>
          </div>
        </div>
      </CustomContainer>
    </header>
  );
}
