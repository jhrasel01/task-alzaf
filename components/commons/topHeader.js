"use client";

import Link from "next/link";
import { CustomContainer, CustomSelect } from "../UI";

const options = [
  { value: "English", label: "English" },
  { value: "Bangla", label: "Bangla" },
];

export default function TopHeader() {
  return (
    <header className="bg-custom-bg-1 py-1.5">
      <CustomContainer>
        <div className="flex items-center justify-between">
          {/* left */}
          <div className="">
            <ul className="flex items-center gap-3 laptop:gap-8 text-xs">
              <li>
                <CustomSelect
                  options={options}
                  onSelect={(option) => console.log("Selected option:", option)}
                  actionButtonCss="hover:text-custom-orang"
                  className="w-24 top-7"
                />
              </li>
              <li className="hidden tab:block">
                <Link href="/help-center" className="hover:text-custom-orang">
                  Help Center
                </Link>
              </li>

              <li className="hidden tab:block">
                <Link href="tel:0964781656" className="hover:text-custom-orang">
                  Helpline: 0964781656
                </Link>
              </li>
            </ul>
          </div>

          {/* right */}
          <div className="">
            <div className="">
              <ul className="flex items-center gap-3 laptop:gap-8 text-xs">
                <li className="hidden tab:block">
                  <Link href="/help-center" className="hover:text-custom-orang">
                    Become a Seller
                  </Link>
                </li>

                <li>
                  <Link
                    href="tel:0964781656"
                    className="hover:text-custom-orang"
                  >
                    Order Track
                  </Link>
                </li>

                <li>
                  <Link href="/help-center" className="hover:text-custom-orang">
                    Sign up / Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CustomContainer>
    </header>
  );
}
