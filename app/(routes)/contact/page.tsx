import { FiMapPin } from "react-icons/fi";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTelephone,
} from "react-icons/bs";
import { GoMail } from "react-icons/go";
import Link from "next/link";
import GithubIcon from "@/app/icons/GithubIcon";

export default function Contact() {
  return (
    <main className="w-full h-full py-14">
      <div className="flex flex-col gap-10 items-center">
        <div className="w-36">
          <div className="text-2xl border-b border-b-accentColor transition-all font-semibold tracking-[1px] text-accentColor">
            Get In Touch
          </div>
        </div>

        <div className="grid w-4/5 grid-cols-12 gap-6">
          <div className="col-span-6 flex flex-col gap-3">
            <div className="text-md text-gray-400 tracking-[1px]">
              Leave me a message
              <div className="w-3/4 py-8">
                <form>
                  <div className="relative mb-8">
                    <input
                      type="text"
                      className="block px-3 py-2 w-full text-sm text-gray-400 bg-transparent rounded border border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                      placeholder=""
                    />
                    <label className="text-gray-400 bg-main text-sm mb-2 duration-300 absolute top-2 left-1 px-2 transform origin-[0] peer-focus:top-2 peer-focus:scale-90 peer-focus:-translate-y-5">
                      Name
                    </label>
                  </div>

                  <div className="relative mb-8">
                    <input
                      type="email"
                      className="block px-3 py-2 w-full text-sm text-gray-400 bg-transparent rounded border border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                      placeholder=""
                    />
                    <label className="text-gray-400 bg-main text-sm mb-2 duration-300 absolute top-2 left-1 px-2 transform origin-[0] peer-focus:top-2 peer-focus:scale-90 peer-focus:-translate-y-5">
                      Email
                    </label>
                  </div>

                  <div className="relative mb-8">
                    <textarea
                      className="mt-3 block p-3 tracking-[1px] h-20 w-full text-xs bg-transparent rounded-md border text-gray-400 leading-tight border-gray-300 focus:outline-none peer"
                      placeholder=""
                    />
                    <label className="text-gray-400 bg-main text-sm mb-2 duration-300 absolute top-2 left-1 px-2 transform origin-[0] peer-focus:top-2 peer-focus:scale-90 peer-focus:-translate-y-5">
                      Message
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 hover:opacity-50 cursor-pointer w-full h-10 bg-accentColor font-semibold tracking-[1px] rounded-md text-white"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-span-6 cursor-pointer  py-16">
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <FiMapPin color="white" />
                <div className="text-gray-400  text-sm tracking-[1px]">
                  Myanmar {"(Yangon)"}, North Okkalapa
                </div>
              </div>

              <div className="mt-6 flex gap-3 items-center">
                <BsTelephone color="white" />
                <div className="text-gray-400  text-sm tracking-[1px]">
                  +959 761653208
                </div>
              </div>

              <div className="mt-3 flex gap-4 items-center">
                <GoMail color="white" />
                <div className="text-gray-400 text-sm tracking-[1px]">
                  shinthantequi@gmail.com
                </div>
              </div>

              <div className="mt-3 flex gap-4 items-center">
                <GithubIcon color="white" />
                <div className="text-gray-400 text-sm tracking-[1px]">
                  ShinnTNT
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Link href="/facebook.com/Shinn Thant">
                  <BsFacebook color="white" />
                </Link>
                <Link href="/instagram.com/Shinn Thant Jr">
                  <BsInstagram color="white" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/shinn-thant-b90533231/"
                  target="_blank"
                >
                  <BsLinkedin color="white" />
                </Link>
                <Link href="https://github.com/shinnTNT/" target="_blank">
                  <BsGithub color="white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
