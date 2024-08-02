import HomeLottie from "@/components/lottie/HomeLottie";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-full flex items-center">
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-[500px] pl-4 h-[500px] flex flex-col justify-center items-start">
          <p className="text-gray-300 font-semibold text-[14px]">
            Hello, my name is
          </p>
          <p className="text-accentColor h-[30px] mt-8 font-semibold text-4xl leading-[1px]">
            Shinn Thant.
          </p>
          <p className="mt-3 h-[30px] text-gray-300 font-semibold text-4xl leading-[1px]">
            I love exploring new things!
          </p>
          <p className="mt-4 text-[14px] tracking-[1px] text-gray-400">
            🚀 &#160;&#160; I specialize in transforming ideas into
            pixel-perfect, user-friendly websites that not only look stunning
            but also function flawlessly. With a strong foundation in HTML, CSS,
            and JavaScript, I bring creativity and technical expertise to every
            project.
          </p>
          <p className="mt-6 text-[14px] text-gray-400">
            I enjoy learning new skills and implementing them in real life.
          </p>
          <Link
            href="/contact"
            className="transition-all mt-[50px] group hover:bg-accentColor rounded-sm border-2 border-accentColor w-[120px] h-[30px] flex justify-center items-center bg-transparent p-[20px] cursor-pointer"
          >
            <div className="text-sm group-hover:text-white text-accentColor">
              Get In Touch
            </div>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center pl-12 w-full h-full">
        <HomeLottie />
      </div>
    </main>
  );
}
