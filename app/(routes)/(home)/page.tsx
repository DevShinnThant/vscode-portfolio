"use client";

import Lottie from "lottie-react";

import animationData from "@/public/animation_lmlkdwc5.json";

export default function Home() {
  return (
    <div className="w-full h-full flex items-center bg-main">
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-[500px] h-[500px]">
          <p className="text-accentColor font-semibold text-[14px]">
            Hello, my name is
          </p>
          <p className="text-white font-semibold text-2xl leading-[1px]">
            Shinn Thant.
          </p>
        </div>
      </div>
      <div className="flex w-full h-full"></div>
    </div>
  );
}

// {<div className="w-full h-full flex items-center bg-main">
//   <div className="w-full h-full flex justify-center items-center">
//     <div className="w-[500px] h-[500px] flex flex-col">
//       <p className="text-accentColor h-[40px] font-semibold text-[14px]">
//         Hello, my name is
//       </p>
//       <div className="mt-[20px]">
//         <p className="text-white font-semibold text-[40px] leading-[1px]">
//           Shinn Thant.
//         </p>
//       </div>
//       <p className="mt-[10px] text-gray-500 font-semibold text-[14px] leading-[1px] h-min">
//         I love exploring new things!
//       </p>

//       <p className="mt-[25px] text-[14px] text-gray-500 h-min">
//         🚀 I specialize in transforming ideas into pixel-perfect,
//         user-friendly websites that not only look stunning but also function
//         flawlessly. With a strong foundation in HTML, CSS, and JavaScript, I
//         bring creativity and technical expertise to every project.
//       </p>
//       <p className="mt-[25px] text-[14px] text-gray-500 h-min">
//         I enjoy learning new skills and implementing them in real life.
//       </p>

//       <button className="mt-[60px] border-2 border-accentColor w-[120px] h-[30px] flex justify-center items-center bg-transparent p-[20px] cursor-pointer">
//         <p className="h-fit text-accentColor">Get In Touch</p>
//       </button>
//     </div>
//   </div>
//   <div className="w-full h-full flex justify-center items-center">
//     {/* <Lottie
//       animationData={animationData}
//       loop={true}
//       autoplay={true}
//       color="white"
//       style={{ width: "420px", height: "420px" }}
//     /> */}
//   </div>
// </div>
// }
