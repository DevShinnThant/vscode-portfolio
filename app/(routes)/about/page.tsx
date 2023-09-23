import { cn } from "@/app/lib/utils/style";
import React, { HTMLAttributes } from "react";

const Code = ({ children, className }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "px-[10px] w-full flex items-center cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
};

export default function About() {
  return (
    <div className="w-full h-full flex items-center">
      <div className="w-full">
        <p className="text-gray-500 text-[14px] leading-[1px] p-[10px]">
          About {"/>"}
        </p>
        {/* <div className="absolute left-[40px] bg-gray-500 w-[1px]  bottom-0" /> */}
        <div className="mt-[20px] flex flex-col items-start">
          <Code>
            <p className="lineNumberCode mr-5 mt-1 pr-[10px]">01.</p>
            <div className="ml-[10px] flex items-center">
              <p className="declareCode mt-1 mr-[14px]">class </p>
              <p className="methodCode mt-1">Shinn Thant &#160;&#160;{"{"}</p>
            </div>
          </Code>

          <Code className="mt-1">
            <p className="lineNumberCode mr-5 mt-1 pr-[10px]">02.</p>
            <div className="ml-[10px] flex items-center">
              <p className="slash mt-1 mr-[10px]">··//</p>
              <p className="slashCode">I can, because I did.</p>
            </div>
          </Code>

          <Code>
            <p className="lineNumberCode mr-5 mt-1 pr-[10px]">03.</p>
            <div className="ml-[10px] flex items-center">
              <p className="slash mt-1 mr-[10px]">··//</p>
              <p className="slashCode">
                My vast variety of skills is continuously expanding.
              </p>
            </div>
          </Code>

          <Code>
            <p className="lineNumberCode mr-5 mt-1 pr-[10px]">04.</p>
            <div className="ml-[10px] flex items-center">
              <p className="declareCode mt-1 mr-[14px]">contructor</p>
              <p className="methodCode mt-1">
                {`(`}&#160;{")"} &#160;&#160; {"{"}
              </p>
            </div>
          </Code>

          <Code>
            <p className="lineNumberCode mr-5 mt-1 pr-[10px]">05.</p>
            <div className="ml-[10px] flex items-center">
              <p className="slash mt-1 mr-[10px]">····</p>
              <p className="flex items-center">
                <p className="methodCode mt-1">this.</p>
                <p className="declareCode mt-1 mr-[14px]">name</p>
                <p className="methodCode mt-1">=&#160;&#160; 'Shinn Thant'</p>
              </p>
            </div>
          </Code>

          <Code>
            <p className="lineNumberCode mr-5 mt-1 pr-[10px]">06.</p>
            <div className="ml-[10px] flex items-center">
              <p className="slash mt-1 mr-[10px]">····</p>
              <p className="flex items-center">
                <p className="methodCode mt-1">this.</p>
                <p className="declareCode mt-1 mr-[14px]">
                  dayOfBirthTimestamp
                </p>
                <p className="methodCode mt-1">=&#160;&#160; 602745592</p>
              </p>
            </div>
          </Code>

          <Code>
            <p className="lineNumberCode mr-5 mt-1 pr-[10px]">07.</p>
            <div className="ml-[10px] flex items-center">
              <p className="slash mt-1 mr-[10px]">····</p>
              <p className="flex items-center">
                <p className="methodCode mt-1">this.</p>
                <p className="declareCode mt-1 mr-[14px]">email</p>
                <p className="methodCode mt-1">
                  =&#160;&#160; 'shinthantequi@gmail.com'
                </p>
              </p>
            </div>
          </Code>

          <Code>
            <p className="lineNumberCode mr-5 mt-1 pr-[10px]">08.</p>
            <div className="ml-[10px] flex items-center">
              <p className="slash mt-1 mr-[10px]">··</p>
              <p className="methodCode mt-1">{`}`}</p>
            </div>
          </Code>

          <Code>
            <p className="lineNumberCode mr-5 mt-1 pr-[10px]">04.</p>
            <div className="ml-[10px] flex items-center">
              <p className="slash mt-1 mr-[10px]">··</p>
              <p className="declareCode mt-1 mr-[14px]">workExperience</p>
              <p className="methodCode mt-1">
                {`(`}&#160;{")"} &#160;&#160; {"{"}
              </p>
            </div>
          </Code>

          <Code>
            <p className="lineNumberCode mr-5 mt-1 pr-[10px]">09.</p>
            <div className="ml-[10px] flex items-center">
              <p className="slash mt-1 mr-[10px]">····</p>
              <p className="declareCode mt-1 mr-[14px]">return</p>
              <p className="methodCode mt-1">{"["}</p>
            </div>
          </Code>

          <Code>
            <p className="lineNumberCode mr-5 mt-1 pr-[10px]">10.</p>
            <div className="ml-[10px] flex items-center">
              <p className="slash mt-1 mr-[10px]">······</p>
              <p className="methodCodeLight mt-1">
                {"{"} '2022 May - 2022 Sep' : 'Full-stack Developer Intern at
                Creative Coder Myanmar' {"}"}
              </p>
            </div>
          </Code>

          <Code>
            <p className="lineNumberCode mr-5 mt-1 pr-[10px]">11.</p>
            <div className="ml-[10px] flex items-center">
              <p className="slash mt-1 mr-[10px]">······</p>
              <p className="methodCodeLight mt-1">
                {"{"} '2022 Sep - 2022 December' : 'Volunteer Front-End
                Developer at Tee Htwin' {"}"}
              </p>
            </div>
          </Code>

          <Code>
            <p className="lineNumberCode mr-5 mt-1 pr-[10px]">12.</p>
            <div className="ml-[10px] flex items-center">
              <p className="slash mt-1 mr-[10px]">······</p>
              <p className="methodCodeLight mt-1">
                {"{"} '2023 January - now' : 'Front-End Developer at Xsphere'{" "}
                {"}"}
              </p>
            </div>
          </Code>

          <Code>
            <p className="lineNumberCode mr-5 mt-1 pr-[10px]">13.</p>
            <div className="ml-[10px] flex items-center">
              <p className="slash mt-1 mr-[10px]">····</p>
              <p className="methodCode mt-1">{"]"}</p>
            </div>
          </Code>

          <Code>
            <p className="lineNumberCode mr-5 mt-1 pr-[10px]">14.</p>
            <div className="ml-[10px] flex items-center">
              <p className="slash mt-1 mr-[10px]">··</p>
              <p className="methodCode mt-1">{`}`}</p>
            </div>
          </Code>

          <Code>
            <p className="lineNumberCode mr-5 mt-1 pr-[10px]">15.</p>
            <div className="ml-[10px] flex items-center">
              <p className="slash mt-1 mr-[10px]">··</p>
              <p className="declareCode mt-1 mr-[14px]">certificates</p>
              <p className="methodCode mt-1">
                {`(`}&#160;{")"} &#160;&#160; {"{"}
              </p>
            </div>
          </Code>

          <Code>
            <p className="lineNumberCode mr-5 mt-1 pr-[10px]">16.</p>
            <div className="ml-[10px] flex items-center">
              <p className="slash mt-1 mr-[10px]">····</p>
              <p className="declareCode mt-1 mr-[14px]">return</p>
              <p className="methodCode mt-1">{"["}</p>
            </div>
          </Code>

          <Code>
            <p className="lineNumberCode mr-5 mt-1 pr-[10px]">13.</p>
            <div className="ml-[10px] flex items-center">
              <p className="slash mt-1 mr-[10px]">····</p>
              <p className="methodCode mt-1">{"]"}</p>
            </div>
          </Code>

          <Code>
            <p className="lineNumberCode mr-5 mt-1 pr-[10px]">12.</p>
            <div className="ml-[10px] flex items-center">
              <p className="slash mt-1 mr-[10px]">······</p>
              <p className="methodCodeLight mt-1">
                {"{"} 'Udemy' : 'The Complete JavaScript Course.' {"}"}
              </p>
            </div>
          </Code>

          <Code>
            <p className="lineNumberCode mr-5 mt-1 pr-[10px]">12.</p>
            <div className="ml-[10px] flex items-center">
              <p className="slash mt-1 mr-[10px]">······</p>
              <p className="methodCodeLight mt-1">
                {"{"} 'Udemy' : 'The Complete NextJS Course.' {"}"}
              </p>
            </div>
          </Code>

          <Code>
            <p className="lineNumberCode mr-5 mt-1 pr-[10px]">12.</p>
            <div className="ml-[10px] flex items-center">
              <p className="slash mt-1 mr-[10px]">······</p>
              <p className="methodCodeLight mt-1">
                {"{"} 'Udemy' : 'The Complete ReactJs Developer.' {"}"}
              </p>
            </div>
          </Code>

          <Code>
            <p className="lineNumberCode mr-5 mt-1 pr-[10px]">12.</p>
            <div className="ml-[10px] flex items-center">
              <p className="slash mt-1 mr-[10px]">······</p>
              <p className="methodCodeLight mt-1">
                {"{"} 'CreativeCoder MM: Certificate of internship' {"}"}
              </p>
            </div>
          </Code>

          <Code>
            <p className="lineNumberCode mr-5 mt-1 pr-[10px]">14.</p>
            <div className="ml-[10px] flex items-center">
              <p className="slash mt-1 mr-[10px]">··</p>
              <p className="methodCode mt-1">{`}`}</p>
            </div>
          </Code>

          <Code>
            <p className="lineNumberCode mr-5 mt-1 pr-[10px]">15.</p>
            <div className="ml-[10px] flex items-center">
              <p className="slash mt-1 mr-[10px]">··</p>
              <p className="declareCode mt-1 mr-[14px]">skills</p>
              <p className="methodCode mt-1">
                {`(`}&#160;{")"} &#160;&#160; {"{"}
              </p>
            </div>
          </Code>

          <Code>
            <p className="lineNumberCode mr-5 mt-1 pr-[10px]">16.</p>
            <div className="ml-[10px] flex items-center">
              <p className="slash mt-1 mr-[10px]">····</p>
              <p className="declareCode mt-1 mr-[14px]">return</p>
              <p className="methodCode mt-1">
                {"["}
                &#160;'&#160;HTML&#160;'&#160;,&#160;'&#160;CSS&#160;'&#160;,&#160;'&#160;JS&#160;&#160;'&#160;,&#160;'&#160;TypeScript&#160;&#160;'&#160;,&#160;'&#160;ReactJS&#160;&#160;'&#160;,&#160;&#160;'&#160;NextJS&#160;&#160;'&#160;,&#160;'&#160;React
                Query&#160;&#160;'&#160;,&#160;'&#160;Redux&#160;'&#160;
                {"]"}
              </p>
            </div>
          </Code>

          <Code>
            <p className="lineNumberCode mr-5 mt-1 pr-[10px]">17.</p>
            <div className="ml-[10px] flex items-center">
              <p className="slash mt-1 mr-[10px]">··</p>
              <p className="methodCode mt-1">{`}`}</p>
            </div>
          </Code>

          <Code>
            <p className="lineNumberCode mr-5 mt-1 pr-[10px]">18.</p>
            <div className="ml-[10px] flex items-center">
              <p className="methodCode mt-1">{`}`}</p>
            </div>
          </Code>
        </div>
      </div>
    </div>
  );
}
