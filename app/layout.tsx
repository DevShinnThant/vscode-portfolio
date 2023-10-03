import "tailwindcss/tailwind.css";
import "./globals.css";

// Utils
import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import Head from "next/head";

// Provider
import { TabProvider } from "../lib/store/client/TabContext";

// Components
import Sidebar from "../components/sidebar/sidebar";
import Explorer from "../components/explorer/explorer";
import TabBar from "../components/tab-bar/tabBar";
import BottomBar from "../components/bottom-bar/bottomBar";
import Header from "../components/header/Header";

const SourceSans3 = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Vscode Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Shinn Thant</title>
        <meta
          name="description"
          content="Shinn Thant is a front end developer building websites and applications you'd love to use"
        />
        <meta
          name="keywords"
          content="shinn thant, web developer,vscode portfolio, nextjs, shinn thant portfolio, vscode-portfolio"
        />
        <meta
          property="og:description"
          content="A front-end developer building websites that you'd like to use."
        />
        <meta property="og:title" content="Shinn Thant's Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://devshinnthant.vercel.app/" />
        <meta
          property="og:description"
          content="A front-end developer building websites that you'd like to use."
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/Sx4TkjqW/devshinn-portforlio.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://devshinnthant.vercel.app/"
        />
        <meta property="twitter:title" content="Shinn Thant | FrontEnd Dev" />
        <meta
          property="twitter:description"
          content="Experienced front-end developer skilled in building robust web applications."
        />
        <meta
          property="twitter:image"
          content="https://i.postimg.cc/Sx4TkjqW/devshinn-portforlio.png"
        />
      </head>
      <TabProvider>
        <body className={SourceSans3.className}>
          <div className="h-screen">
            <div className="h-full flex flex-col">
              <Header />

              <div className="flex h-[calc(100%_-_17px_-_38px)]">
                <Sidebar />
                <Explorer />
                <div className="max-width flex flex-col">
                  <TabBar />
                  <div className="max-width h-full bg-main overflow-scroll">
                    {children}
                  </div>
                </div>
              </div>
              <BottomBar />
            </div>
          </div>
        </body>
      </TabProvider>
    </html>
  );
}
