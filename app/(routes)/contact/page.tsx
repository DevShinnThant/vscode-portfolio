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
                  <div className="mb-4">
                    <label htmlFor="name" className="text-gray-400 text-sm ">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="block mt-2 tracking-[1px] px-3 py-2 w-full text-sm text-gray-400 bg-transparent rounded border border-gray-300 appearance-none focus:outline-none focus:ring-0"
                      placeholder="Enter Name"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="text-gray-400 text-sm ">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="block tracking-[1px] mt-2 px-3 py-2 w-full text-sm text-gray-400 bg-transparent rounded border border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                      placeholder="Enter Email"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="text-gray-400 text-sm ">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="mt-3 block p-3 tracking-[1px] h-20 w-full text-sm bg-transparent rounded-md border text-gray-400 leading-tight border-gray-300 focus:outline-none peer"
                      placeholder="Enter message"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 cursor-pointer w-full h-10 bg-accentColor backdrop-contrast-200 font-semibold tracking-[1px] rounded-md text-white"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-span-6 cursor-pointer pt-24">
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
                <Link
                  aria-label="Navigate to shinnthant's facebook profile"
                  href="/facebook.com/Shinn Thant"
                >
                  <BsFacebook color="white" />
                </Link>
                <Link
                  aria-label="Navigate to shinnthant's instagram profile"
                  href="/instagram.com/Shinn Thant Jr"
                >
                  <BsInstagram color="white" />
                </Link>
                <Link
                  aria-label="Navigate to shinnthant's linkedin profile"
                  href="https://www.linkedin.com/in/shinn-thant-b90533231/"
                  target="_blank"
                >
                  <BsLinkedin color="white" />
                </Link>
                <Link
                  aria-label="Navigate to shinnthant's github profile"
                  href="https://github.com/shinnTNT/"
                  target="_blank"
                >
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
