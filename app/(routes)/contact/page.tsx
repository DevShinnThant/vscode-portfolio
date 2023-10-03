// Icons
import { FiMapPin } from "react-icons/fi";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTelephone,
} from "react-icons/bs";
import { GoMail } from "react-icons/go";
import GithubIcon from "@/app/icons/GithubIcon";

// Components
import Link from "next/link";
import ContactForm from "@/components/form/ContactForm";

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
                <ContactForm />
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
                <div
                  // aria-label="Navigate to shinnthant's facebook profile"

                  className="cursor-not-allowed"
                >
                  <BsFacebook color="white" />
                </div>
                <div
                  className="cursor-not-allowed"
                  // aria-label="Navigate to shinnthant's instagram profile"
                  // href="/"
                >
                  <BsInstagram color="white" />
                </div>
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
