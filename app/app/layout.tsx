import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Pocket OS",
    description: "我的专属虚拟手机",
    };

    export default function RootLayout({
      children,
      }: Readonly<{
        children: React.ReactNode;
        }>) {
          return (
              <html lang="zh-CN">
                    <body>{children}</body>
                        </html>
                          );
                          }