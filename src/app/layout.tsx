"use client"
import "./globals.css";
import { Inter } from "next/font/google";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import Navigation from "./components/organisms/Navigation";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body  className={inter.className}>
        
        <CacheProvider>
          
          <ChakraProvider>
            <Navigation />
            {children}
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
