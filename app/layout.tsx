import Layout from "./_components/layout/layout";
import "./styles/globals.css";
import "./styles/theme.css";

import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";

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
  return <Layout font={SourceSans3}>{children}</Layout>;
}
