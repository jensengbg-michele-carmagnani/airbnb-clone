"use client";

interface AvatarProps {
  src: string | null | undefined;
}

import Image from "next/image";
const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      className="rounded-full "
      alt="Avatar"
      height={30}
      width={30}
      src={src || "/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
