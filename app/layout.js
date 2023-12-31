"use client";

import { Header } from "@/components/start/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/start/Footer";
import NavMenu from "@/components/NavMenu";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className={`${inter.className} min-h-screen`}>
          <Header />
          <main>{children}</main>
          <div className="w-screen flex items-center justify-center">
            <NavMenu />
          </div>
          <Footer />
        </body>
      </QueryClientProvider>
    </html>
  );
}
