import BgImage from "@/public/Novelist writing-bro.svg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full flex items-center bg-main">
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-[500px] h-[500px] flex flex-col justify-center items-start">
          <p className="text-accentColor font-semibold text-[14px]">
            Hello, my name is
          </p>
          <p className="text-white h-[30px] mt-4 font-semibold text-[28px] leading-[1px]">
            Shinn Thant.
          </p>
          <p className="mt-3 h-[30px] text-gray-500 font-semibold text-[30px] leading-[1px]">
            I love exploring new things!
          </p>
          <p className="mt-[4px] text-[14px] tracking-[1px]  text-gray-500 ">
            🚀 &#160;&#160; I specialize in transforming ideas into
            pixel-perfect, user-friendly websites that not only look stunning
            but also function flawlessly. With a strong foundation in HTML, CSS,
            and JavaScript, I bring creativity and technical expertise to every
            project.
          </p>
          <p className="mt-[6px] text-[14px] text-gray-500">
            I enjoy learning new skills and implementing them in real life.
          </p>
          <button className="mt-[50px] rounded-sm border-2 border-accentColor w-[120px] h-[30px] flex justify-center items-center bg-transparent p-[20px] cursor-pointer">
            <p className="text-sm text-accentColor">Get In Touch</p>
          </button>
        </div>
      </div>
      <div className="flex justify-center pl-12 w-full h-full">
        <Image
          className="text-white"
          width={320}
          height={300}
          src={BgImage}
          alt="Image"
        />
      </div>
    </div>
  );
}
