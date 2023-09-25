import { cn } from "@/app/lib/utils/style";
import React, { HTMLAttributes } from "react";

const Code = ({ children, className }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "px-[10px] w-full hover:bg-sidebarHover flex items-center cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
};

export default function About() {
  return (
    <main className="w-full h-full flex flex-col items-center">
      <div className="w-full h-full">
        <div className="text-gray-500 text-[14px] leading-[1px] p-[10px]">
          About {"/>"}
        </div>
        {/* <div className="absolute left-[40px] bg-gray-500 w-[1px]  bottom-0" /> */}
        <div className="mt-[20px] flex flex-col items-start">
          <Code>
            <div className="lineNumberCode mr-5 mt-[4px] pr-[10px]">01.</div>
            <div className="ml-[10px] flex items-center">
              <div className="declareCode mt-[4px] mr-[14px]">class</div>
              <div className="methodCode mt-[4px]">
                Shinn Thant &#160;&#160;{"{"}
              </div>
            </div>
          </Code>

          <Code className="mt-[4px]">
            <div className="lineNumberCode mr-5 mt-[4px] pr-[10px]">02.</div>
            <div className="ml-[10px] flex items-center">
              <div className="slash mt-[4px] mr-[10px]">··//</div>
              <div className="slashCode">I can, because I did.</div>
            </div>
          </Code>

          <Code>
            <div className="lineNumberCode mr-5 mt-[4px] pr-[10px]">03.</div>
            <div className="ml-[10px] flex items-center">
              <div className="slash mt-[4px] mr-[10px]">··//</div>
              <div className="slashCode">
                My vast variety of skills is continuously expanding.
              </div>
            </div>
          </Code>

          <Code>
            <div className="lineNumberCode mr-5 mt-[4px] pr-[10px]">04.</div>
            <div className="ml-[10px] flex items-center">
              <div className="declareCode mt-[4px] mr-[14px]">contructor</div>
              <div className="methodCode mt-[4px]">
                {`(`}&#160;{")"} &#160;&#160; {"{"}
              </div>
            </div>
          </Code>

          <Code>
            <div className="lineNumberCode mr-5 mt-[4px] pr-[10px]">05.</div>
            <div className="ml-[10px] flex items-center">
              <div className="slash mt-[4px] mr-[10px]">····</div>
              <div className="flex items-center">
                <div className="methodCode mt-[4px]">this.</div>
                <div className="declareCode mt-[4px] mr-[14px]">name</div>
                <div className="methodCode mt-[4px]">
                  =&#160;&#160; 'Shinn Thant'
                </div>
              </div>
            </div>
          </Code>

          <Code>
            <div className="lineNumberCode mr-5 mt-[4px] pr-[10px]">06.</div>
            <div className="ml-[10px] flex items-center">
              <div className="slash mt-[4px] mr-[10px]">····</div>
              <div className="flex items-center">
                <div className="methodCode mt-[4px]">this.</div>
                <div className="declareCode mt-[4px] mr-[14px]">
                  dayOfBirthTimestamp
                </div>
                <div className="methodCode mt-[4px]">
                  =&#160;&#160; 602745592
                </div>
              </div>
            </div>
          </Code>

          <Code>
            <div className="lineNumberCode mr-5 mt-[4px] pr-[10px]">07.</div>
            <div className="ml-[10px] flex items-center">
              <div className="slash mt-[4px] mr-[10px]">····</div>
              <div className="flex items-center">
                <div className="methodCode mt-[4px]">this.</div>
                <div className="declareCode mt-[4px] mr-[14px]">email</div>
                <div className="methodCode mt-[4px]">
                  =&#160;&#160; 'shinthantequi@gmail.com'
                </div>
              </div>
            </div>
          </Code>

          <Code>
            <div className="lineNumberCode mr-5 mt-[4px] pr-[10px]">08.</div>
            <div className="ml-[10px] flex items-center">
              <div className="slash mt-[4px] mr-[10px]">··</div>
              <div className="methodCode mt-[4px]">{`}`}</div>
            </div>
          </Code>

          <Code>
            <div className="lineNumberCode mr-5 mt-[4px] pr-[10px]">04.</div>
            <div className="ml-[10px] flex items-center">
              <div className="slash mt-[4px] mr-[10px]">··</div>
              <div className="declareCode mt-[4px] mr-[14px]">
                workExperience
              </div>
              <div className="methodCode mt-[4px]">
                {`(`}&#160;{")"} &#160;&#160; {"{"}
              </div>
            </div>
          </Code>

          <Code>
            <div className="lineNumberCode mr-5 mt-[4px] pr-[10px]">09.</div>
            <div className="ml-[10px] flex items-center">
              <div className="slash mt-[4px] mr-[10px]">····</div>
              <div className="declareCode mt-[4px] mr-[14px]">return</div>
              <div className="methodCode mt-[4px]">{"["}</div>
            </div>
          </Code>

          <Code>
            <div className="lineNumberCode mr-5 mt-[4px] pr-[10px]">10.</div>
            <div className="ml-[10px] flex items-center">
              <div className="slash mt-[4px] mr-[10px]">······</div>
              <div className="methodCodeLight mt-[4px]">
                {"{"} '2022 May - 2022 Sep' : 'Full-stack Developer Intern at
                Creative Coder Myanmar' {"}"}
              </div>
            </div>
          </Code>

          <Code>
            <div className="lineNumberCode mr-5 mt-[4px] pr-[10px]">11.</div>
            <div className="ml-[10px] flex items-center">
              <div className="slash mt-[4px] mr-[10px]">······</div>
              <div className="methodCodeLight mt-[4px]">
                {"{"} '2022 Sep - 2022 December' : 'Volunteer Front-End
                Developer at Tee Htwin' {"}"}
              </div>
            </div>
          </Code>

          <Code>
            <div className="lineNumberCode mr-5 mt-[4px] pr-[10px]">12.</div>
            <div className="ml-[10px] flex items-center">
              <div className="slash mt-[4px] mr-[10px]">······</div>
              <div className="methodCodeLight mt-[4px]">
                {"{"} '2023 January - now' : 'Front-End Developer at Xsphere'{" "}
                {"}"}
              </div>
            </div>
          </Code>

          <Code>
            <div className="lineNumberCode mr-5 mt-[4px] pr-[10px]">13.</div>
            <div className="ml-[10px] flex items-center">
              <div className="slash mt-[4px] mr-[10px]">····</div>
              <div className="methodCode mt-[4px]">{"]"}</div>
            </div>
          </Code>

          <Code>
            <div className="lineNumberCode mr-5 mt-[4px] pr-[10px]">14.</div>
            <div className="ml-[10px] flex items-center">
              <div className="slash mt-[4px] mr-[10px]">··</div>
              <div className="methodCode mt-[4px]">{`}`}</div>
            </div>
          </Code>

          <Code>
            <div className="lineNumberCode mr-5 mt-[4px] pr-[10px]">15.</div>
            <div className="ml-[10px] flex items-center">
              <div className="slash mt-[4px] mr-[10px]">··</div>
              <div className="declareCode mt-[4px] mr-[14px]">certificates</div>
              <div className="methodCode mt-[4px]">
                {`(`}&#160;{")"} &#160;&#160; {"{"}
              </div>
            </div>
          </Code>

          <Code>
            <div className="lineNumberCode mr-5 mt-[4px] pr-[10px]">16.</div>
            <div className="ml-[10px] flex items-center">
              <div className="slash mt-[4px] mr-[10px]">····</div>
              <div className="declareCode mt-[4px] mr-[14px]">return</div>
              <div className="methodCode mt-[4px]">{"["}</div>
            </div>
          </Code>

          <Code>
            <div className="lineNumberCode mr-5 mt-[4px] pr-[10px]">13.</div>
            <div className="ml-[10px] flex items-center">
              <div className="slash mt-[4px] mr-[10px]">····</div>
              <div className="methodCode mt-[4px]">{"]"}</div>
            </div>
          </Code>

          <Code>
            <div className="lineNumberCode mr-5 mt-[4px] pr-[10px]">12.</div>
            <div className="ml-[10px] flex items-center">
              <div className="slash mt-[4px] mr-[10px]">······</div>
              <div className="methodCodeLight mt-[4px]">
                {"{"} 'Udemy' : 'The Complete JavaScript Course.' {"}"}
              </div>
            </div>
          </Code>

          <Code>
            <div className="lineNumberCode mr-5 mt-[4px] pr-[10px]">12.</div>
            <div className="ml-[10px] flex items-center">
              <div className="slash mt-[4px] mr-[10px]">······</div>
              <div className="methodCodeLight mt-[4px]">
                {"{"} 'Udemy' : 'The Complete NextJS Course.' {"}"}
              </div>
            </div>
          </Code>

          <Code>
            <div className="lineNumberCode mr-5 mt-[4px] pr-[10px]">12.</div>
            <div className="ml-[10px] flex items-center">
              <div className="slash mt-[4px] mr-[10px]">······</div>
              <div className="methodCodeLight mt-[4px]">
                {"{"} 'Udemy' : 'The Complete ReactJs Developer.' {"}"}
              </div>
            </div>
          </Code>

          <Code>
            <div className="lineNumberCode mr-5 mt-[4px] pr-[10px]">12.</div>
            <div className="ml-[10px] flex items-center">
              <div className="slash mt-[4px] mr-[10px]">······</div>
              <div className="methodCodeLight mt-[4px]">
                {"{"} 'CreativeCoder MM: Certificate of internship' {"}"}
              </div>
            </div>
          </Code>

          <Code>
            <div className="lineNumberCode mr-5 mt-[4px] pr-[10px]">14.</div>
            <div className="ml-[10px] flex items-center">
              <div className="slash mt-[4px] mr-[10px]">··</div>
              <div className="methodCode mt-[4px]">{`}`}</div>
            </div>
          </Code>

          <Code>
            <div className="lineNumberCode mr-5 mt-[4px] pr-[10px]">15.</div>
            <div className="ml-[10px] flex items-center">
              <div className="slash mt-[4px] mr-[10px]">··</div>
              <div className="declareCode mt-[4px] mr-[14px]">skills</div>
              <div className="methodCode mt-[4px]">
                {`(`}&#160;{")"} &#160;&#160; {"{"}
              </div>
            </div>
          </Code>

          <Code>
            <div className="lineNumberCode mr-5 mt-[4px] pr-[10px]">16.</div>
            <div className="ml-[10px] flex items-center">
              <div className="slash mt-[4px] mr-[10px]">····</div>
              <div className="declareCode mt-[4px] mr-[14px]">return</div>
              <div className="methodCode mt-[4px]">
                {"["}
                &#160;'&#160;HTML&#160;'&#160;,&#160;'&#160;CSS&#160;'&#160;,&#160;'&#160;JS&#160;&#160;'&#160;,&#160;'&#160;TypeScript&#160;&#160;'&#160;,&#160;'&#160;ReactJS&#160;&#160;'&#160;,&#160;&#160;'&#160;NextJS&#160;&#160;'&#160;,&#160;'&#160;React
                Query&#160;&#160;'&#160;,&#160;'&#160;Redux&#160;'&#160;
                {"]"}
              </div>
            </div>
          </Code>

          <Code>
            <div className="lineNumberCode mr-5 mt-[4px] pr-[10px]">17.</div>
            <div className="ml-[10px] flex items-center">
              <div className="slash mt-[4px] mr-[10px]">··</div>
              <div className="methodCode mt-[4px]">{`}`}</div>
            </div>
          </Code>

          <Code>
            <div className="lineNumberCode mr-5 mt-[4px] pr-[10px]">18.</div>
            <div className="ml-[10px] flex items-center">
              <div className="methodCode mt-[4px]">{`}`}</div>
            </div>
          </Code>
        </div>
      </div>
    </main>
  );
}
