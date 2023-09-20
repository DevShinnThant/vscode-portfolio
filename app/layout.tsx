import "tailwindcss/tailwind.css";
import "./globals.css";
import "./theme.css";

import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import Head from "next/head";
import { TabProvider } from "./lib/store/client/TabContext";
import Sidebar from "./components/sidebar/sidebar";
import Explorer from "./components/explorer/explorer";
import TabBar from "./components/tab-bar/tabBar";
import BottomBar from "./components/bottom-bar/bottomBar";

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
  // return <Layout font={SourceSans3}>{children}</Layout>;
  return (
    <html lang="en">
      <CustomHead />
      <body className={SourceSans3.className}>
        {/* {openedThemeBar ? <ThemeBar /> : <Header />} */}
        <div className="w-full h-[calc(100% - 53px)] flex items-center">
          <TabProvider>
            <Sidebar />
            <Explorer />
            <div className="w-full relative h-full flex flex-col">
              <TabBar />
              <div className="mt-[36px]">{children}</div>
            </div>
          </TabProvider>
        </div>
        <BottomBar />
      </body>
    </html>
  );
}

const CustomHead = () => {
  return (
    <Head>
      <title>Shinn Thant</title>
      <meta
        name="description"
        content="Shinn Thant is a front end developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="shinn thant, web developer,vscode portfolio, nextjs, shinn thant portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Shinn Thant's Portfolio" />
      <meta
        property="og:description"
        content="A front-end developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};
