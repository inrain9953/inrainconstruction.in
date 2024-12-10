import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar/navbar";
import { Main1 } from "@/components/main/main1";
import { Main2 } from "@/components/main/main2";
import { Main3 } from "@/components/main/main3";
import { Footer } from "@/components/footer/footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>
        Modular Rainwater Harvesting System in India | Rooftop Rainwater Harvesting System | InRain® Construction Pvt. Ltd.
        </title>
        <meta
          name="description"
          content="Are you searching for a modular rainwater harvesting system in india? InRain Construction, A rainwater harvesting company that provides modular based rainwater harvesting system. Contact us today for a free consultation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Modular Rainwater Harvesting in India, Rooftop Rainwater Harvesting System, modular rainwater harvesting for warehouses, modular rainwater harvesting for industries"
        />
        <meta name="canonical" content="https://www.inrainconstruction.in/" />
        <meta
          property="og:title"
          content=" Modular Rainwater Harvesting System in India | Rooftop Rainwater Harvesting System | InRain® Construction Pvt. Ltd."
        />
        <meta
          property="og:description"
          content="Are you looking for a modular rainwater harvesting system in india? InRain® Construction Pvt. Ltd. offers Modular based Rainwater Harvesting System. Contact us today for a free consultation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.inrainconstruction.in/" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:site_name"
          content="InRain® Construction Pvt. Ltd."
        />
        <meta
          name="google-site-verification"
          content="f5HmR_XHPeBiTtIA27g5bBonwT1sdqQD_u7cP3tQIV4"
        />
      </Head>
      <Navbar />
      <Main1 />
      <Main2 />
      <Main3 />
      <Footer />
    </>
  );
}
