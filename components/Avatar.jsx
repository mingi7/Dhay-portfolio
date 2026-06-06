import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      <Image
        src="/dodi.png"
        alt ="dodi"
        width={600}
        height={550}
        className="translate-z-0 w-full h-full ml-32 mt-32"
      />
    </div>
  );
};

export default Avatar;
Ff