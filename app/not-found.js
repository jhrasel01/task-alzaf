import { CustomImage } from "@/components/UI";
import Link from "next/link";

import errorImg from "@/public/images/error.jpg";

export default function NotFound() {
  return (
    <section className="w-screen h-[calc(100vh-200px)] flex items-center justify-center">
      <div className="text-center">
        <div className="w-full">
          <CustomImage
            src={errorImg}
            alt="not-found"
            width="1920"
            height="500"
            className="w-auto h-[500px]"
          />
        </div>

        <Link href="/" className="inline-block mt-4 bg-custom-orang hover:bg-custom-dark-orang text-white py-2 px-5 rounded-md">
          Return Home
        </Link>
      </div>
    </section>
  );
}
