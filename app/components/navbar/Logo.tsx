"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/")}
      className="cursor-pointer hidden md:block w-auto h-auto"
      alt="Logo"
      height="100"
      width="100"
      priority={true}
      src="/images/logo.png"
    />
  );
};
export default Logo;
