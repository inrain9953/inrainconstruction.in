import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";
import { blogHomepage } from "@/components/blogs/blog";
import Link from "next/link";
import Head from "next/head";

const Blog5 = () => {
  const title =
    "Bengaluru Architect's Sustainable Home: Rainwater Harvesting, Greywater Recycling, and Zero Waste";
  const desc =
    "Discover how Bengaluru architect Jaya Rayaprolu designed a self-sufficient, zero-waste home that harvests 1.3 lakh litres of rainwater annually, recycles greywater, and uses solar power. Learn about her innovative sustainable living practices.";
  const keyword =
    "rainwater harvesting, sustainable living, greywater recycling, solar power, eco-friendly home, green architecture, Jaya Rayaprolu, water purification, mud home";
  const canonical =
    "https://www.inrainconstruction.in/blogs/a-bengaluru-architect's-blueprint-for-sustainable-living";
  const ogUrl =
    "https://www.inrainconstruction.in/blogs/a-bengaluru-architect's-blueprint-for-sustainable-living";
  const ogTitle =
    "Bengaluru Architect's Sustainable Home: Rainwater Harvesting, Greywater Recycling, and Zero Waste";
  const ogDescription =
    "Explore the inspiring story of a Bengaluru architect, Jaya Rayaprolu, who created a self-sufficient home with rainwater harvesting, greywater recycling, and solar power.";
  const twittertitle =
    "Bengaluru Architect's Sustainable Home: Rainwater Harvesting, Greywater Recycling, and Zero Waste";
  const twitterdescription =
    "Learn how Jaya Rayaprolu's Bengaluru home achieves self-sufficiency through rainwater harvesting, greywater recycling, and solar energy.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="description" content={desc} />
        <meta name="keywords" content={keyword} />
        <meta name="canonical" content={canonical} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:url" content={ogUrl} />
        <meta name="twitter:title" content={twittertitle} />
        <meta name="twitter:description" content={twitterdescription} />
        <meta
          property="og:site_name"
          content="InRain® Construction Pvt. Ltd."
        />
      </Head>
      <Navbar />
      <div className="md:flex">
        <div className="md:w-[85%]">
          <div data-aos="fade-up" className="m-5">
            <img
              className="shadow-2xl rounded-2xl md:h-[60vh]"
              alt="A Bengaluru Architect's Blueprint for Sustainable Living"
              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog5.2d2a51d3.jpg&w=3840&q=75"
            />
          </div>
          <div className="m-5 text-justify">
            <div data-aos="fade-up" className="">
              <h1 className="text-2xl md:text-3xl font-semibold">
                Stepping into the Future: A Bengaluru Architect's Blueprint for
                Sustainable Living
              </h1>
              <p className="mt-3 text-lg">
                In the bustling metropolis of Bengaluru, amidst the concrete
                jungle, stands a testament to harmonious co-existence with
                nature. The home of architect Jaya Rayaprolu isn't just a
                dwelling; it's a living, breathing example of how thoughtful
                design and eco-conscious practices can transform our daily
                lives. For the past two years, Jaya and her family have embraced
                a truly sustainable way of living within these walls, proving
                that self-sufficiency and zero waste are not just ideals but
                achievable realities.
              </p>
            </div>
            <div data-aos="fade-up" className="mt-7">
              <h2 className="text-xl md:text-2xl font-semibold">
                Harnessing Nature's Bounty: Impressive Rainwater Harvesting
              </h2>
              <p className="mt-3 text-lg">
                One of the most impressive feats of this eco-friendly haven is
                its ingenious{" "}
                <Link
                  className="font-semibold text-green-500 hover:text-sky-500"
                  target="_blank"
                  href="https://www.inrainconstruction.com/rainwater-harvesting-system"
                >
                  Rainwater Harvesting System
                </Link>
                . Standing atop what appears to be a simple part of the
                landscape, Jaya reveals a massive 30,000-liter underground tank.
                This is the heart of their water independence, diligently
                collecting a staggering 1.3 lakh liters of rainwater annually.
                This precious resource caters to all their needs, from the
                simple act of drinking a glass of water to preparing meals and
                keeping the home clean, significantly diminishing their reliance
                on external water sources.
              </p>
            </div>
            <div data-aos="fade-up" className="mt-7">
              <h2 className="text-xl md:text-2xl font-semibold">
                The Magic of Greywater Recycling: A Natural Purification Process
              </h2>
              <p className="mt-3 text-lg">
                But Jaya's commitment to sustainability flows much deeper than
                just rainwater harvesting. Every day, a remarkable 800 liters of
                greywater—wastewater from the kitchen and bathrooms — is
                meticulously recycled. The journey begins in a baffle tank,
                where the initial stage of treatment takes place. From there,
                the water embarks on a natural purification process within a
                beautifully designed reed bed. Here, carefully selected aquatic
                plants work their magic, filtering and cleaning the water. The
                final stage involves a polishing tank, where the power of
                sunlight acts as a natural disinfectant, eliminating any
                remaining pathogens. This revitalized water then finds a new
                purpose, nourishing the vibrant garden and efficiently flushing
                toilets.
              </p>
            </div>
            <div data-aos="fade-up" className="mt-7">
              <h3 className="text-xl md:text-2xl font-semibold">
                Zero Sewage Waste: An Innovative Biodigester Solution
              </h3>
              <p className="mt-3 text-lg">
                The concept of zero waste extends beyond water conservation in
                Jaya's innovative home. Remarkably, the property generates
                absolutely no sewage waste. This is thanks to a compact, yet
                powerful, biodigester developed by the DRDO. Measuring a mere
                three by four feet, this system utilizes bioenzymes to break
                down sewage, transforming it into 95% pure water. This treated
                water can then be used to further nurture the garden or even be
                released back into the soil, contributing to the vital process
                of groundwater recharge.
              </p>
            </div>
            <div data-aos="fade-up" className="mt-7">
              <h3 className="text-xl md:text-2xl font-semibold">
                Sustainable Construction: A Naturally Cool and Energy-Efficient
                Home
              </h3>
              <p className="mt-3 text-lg">
                The very structure of the house speaks volumes about sustainable
                construction. Built using sun-dried bricks crafted from the
                earth excavated during construction, the mud walls possess an
                inherent ability to regulate temperature. This, coupled with
                smart ventilation strategies, ensures a naturally cool and
                comfortable living environment, even during Bengaluru's intense
                summer months. Adding another layer of eco-consciousness, the
                home's power needs are entirely met by 3kW solar panels,
                resulting in the enviable reality of zero electricity bills.
              </p>
            </div>
            <div data-aos="fade-up" className="mt-7">
              <h3 className="text-xl md:text-2xl font-semibold">
                A Blueprint for the Future: Embracing Eco-Conscious Living
              </h3>
              <p className="mt-3 text-lg">
                Jaya Rayaprolu's home is more than just an architectural
                achievement; it's a powerful statement about the potential of
                sustainable living. "With zero electricity bills and zero
                wastewater, this house isn’t just sustainable – it’s the
                future," she rightly proclaims. It serves as an inspiring
                blueprint, demonstrating that by embracing innovative
                technologies and respecting natural processes, we can create
                homes that are not only environmentally responsible but also
                offer a higher quality of life. This Bengaluru architect hasn't
                just built a house; she has cultivated a vision for a greener,
                more self-sufficient future, one that we can all learn from and
                strive towards.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-96">
          {blogHomepage.map((items) => (
            <div
              data-aos="fade-up"
              className="shadow-xl rounded-lg m-5 flex items-center gap-3 p-3"
            >
              <div>
                <img
                  className="rounded-lg w-52"
                  src={items.image}
                  alt={items.title}
                />
              </div>
              <div className="">
                <p className="text-sm text-gray-600">{items.date}</p>
                <Link href={items.url}>
                  <p className="font-semibold underline hover:text-green-500">
                    {items.title}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog5;
