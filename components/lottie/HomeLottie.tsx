"use client";

import Lottie from "lottie-react";
import animationData from "@/public/lottie.json";

export default function HomeLottie() {
  return (
    <Lottie
      animationData={animationData}
      className="w-[450px] h-[450px] flex justify-center items-center"
      loop={true}
    />
  );
}
