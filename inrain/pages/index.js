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
          InRain® Construction Pvt. Ltd. - Rainwater Harvesting System in Delhi
        </title>
        <meta
          name="description"
          content="Are you searching for a rain water harvesting system in Delhi? InRain Construction, A rain water harvesting company that provides modular based rain water harvesting system. Contact us today for a free consultation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="rainwater harvesting, modular rainwater harvesting, roof top rainwater harvesting, rainwater harvesting in delhi, rainwater harvesting for industries"
        />
        <meta name="canonical" content="https://www.inrainconstruction.in/" />
        <meta
          property="og:title"
          content="Rainwater Harvesting System in Delhi | InRain® Construction Pvt. Ltd"
        />
        <meta
          property="og:description"
          content="Are you looking for a rainwater harvesting system? InRain® Construction Pvt. Ltd. offers Modular based Rainwater Harvesting System. Contact us today for a free consultation."
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
