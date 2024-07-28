import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar/navbar";
import { Main1 } from "@/components/main/main1";
import { Main2 } from "@/components/main/main2";
import { Main3 } from "@/components/main/main3";
import { Footer } from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Main1 />
      <Main2 />
      <Main3 />
      <Footer />
    </>
  );
}
