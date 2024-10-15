import "@/styles/globals.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Script
        id="organization-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "InRain® Construction Pvt. Ltd",
          url: "https://www.inrainconstruction.in/",
          logo: "https://www.inrainconstruction.in/public/logo.png",
          sameAs: [
            "https://www.facebook.com/p/InRain-Construction-Pvt-Ltd-100084454944911/?_rdr",
            "https://x.com/InrainC",
            "https://www.instagram.com/inrainconstruction_/",
            "https://in.pinterest.com/inrainc0212/",
          ],
        })}
      </Script>

      {/* Website JSON-LD */}
      <Script
        id="website-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "WebSite",
          name: "InRain® Construction Pvt. Ltd",
          url: "https://www.inrainconstruction.in/",
          potentialAction: {
            "@type": "SearchAction",
            target:
              "https://www.inrainconstruction.in/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        })}
      </Script>

      {/* Local Business JSON-LD */}
      <Script
        id="localbusiness-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "InRain® Construction Pvt. Ltd",
          image: "https://www.inrainconstruction.in/public/logo.png",
          "@id": "",
          url: "https://www.inrainconstruction.in/",
          telephone: "011-35823511",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Plot No 06, khasra No-431, 1st floor, above Union Bank of India, Satbari - Chattarpur Main Road, Satbari,",
            addressLocality: "New Delhi",
            postalCode: "110074",
            addressCountry: "IN",
          },
          sameAs: [
            "https://www.facebook.com/InRain-Construction-Pvt-Ltd-100084454944911/?_rdr",
            "https://x.com/InrainC",
            "https://www.instagram.com/inrainconstruction_/",
            "https://in.pinterest.com/inrainc0212/",
          ],
        })}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
