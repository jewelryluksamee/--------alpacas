"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Layout from "@/components/layout/Layout";

// ─── Hero Search Bar ─────────────────────────────────────────────────────────
function HeroSection() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("Oct 12 - Oct 18");

  const handleSearch = () => {
    router.push(`/search?destination=${encodeURIComponent(destination)}&dates=${encodeURIComponent(dates)}`);
  };

  return (
    <section className="mx-4 md:mx-10 mt-10 rounded-2xl overflow-hidden relative min-h-[520px] flex flex-col items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/a5d9cc446f9892ae9c4c1e6070c2ca0fb025c578?width=2400"
          alt="Travel destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-6 px-4 py-28">
        <h1 className="text-white font-extrabold text-4xl md:text-5xl lg:text-[60px] leading-tight tracking-tight max-w-[750px]">
          Escape to Your Perfect Paradise
        </h1>
        <p className="text-white/90 font-medium text-lg md:text-xl max-w-[672px] leading-7">
          Unlock exclusive prices on over 2 million properties and flights across the globe.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-[768px] bg-white rounded-xl p-2 flex flex-col sm:flex-row items-stretch gap-2 shadow-2xl">
          {/* Destination Input */}
          <div className="flex items-center gap-2 flex-1 bg-[#E9E9E9] rounded-lg px-3 py-3 border border-[#6B7FC6]">
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
              <path d="M10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C12.4333 0 14.5625 0.7625 16.3875 2.2875C18.2125 3.8125 19.35 5.725 19.8 8.025H17.75C17.4333 6.80833 16.8625 5.72083 16.0375 4.7625C15.2125 3.80417 14.2 3.08333 13 2.6V3C13 3.55 12.8042 4.02083 12.4125 4.4125C12.0208 4.80417 11.55 5 11 5H9V7C9 7.28333 8.90417 7.52083 8.7125 7.7125C8.52083 7.90417 8.28333 8 8 8H6V10H8V13H7L2.2 8.2C2.15 8.5 2.10417 8.8 2.0625 9.1C2.02083 9.4 2 9.7 2 10C2 12.1833 2.76667 14.0583 4.3 15.625C5.83333 17.1917 7.73333 17.9833 10 18V20ZM19.1 19.5L15.9 16.3C15.55 16.5 15.175 16.6667 14.775 16.8C14.375 16.9333 13.95 17 13.5 17C12.25 17 11.1875 16.5625 10.3125 15.6875C9.4375 14.8125 9 13.75 9 12.5C9 11.25 9.4375 10.1875 10.3125 9.3125C11.1875 8.4375 12.25 8 13.5 8C14.75 8 15.8125 8.4375 16.6875 9.3125C17.5625 10.1875 18 11.25 18 12.5C18 12.95 17.9333 13.375 17.8 13.775C17.6667 14.175 17.5 14.55 17.3 14.9L20.5 18.1L19.1 19.5ZM13.5 15C14.2 15 14.7917 14.7583 15.275 14.275C15.7583 13.7917 16 13.2 16 12.5C16 11.8 15.7583 11.2083 15.275 10.725C14.7917 10.2417 14.2 10 13.5 10C12.8 10 12.2083 10.2417 11.725 10.725C11.2417 11.2083 11 11.8 11 12.5C11 13.2 11.2417 13.7917 11.725 14.275C12.2083 14.7583 12.8 15 13.5 15Z" fill="#727784"/>
            </svg>
            <input
              type="text"
              placeholder="Where to next?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="flex-1 bg-transparent text-brand-dark text-base outline-none placeholder-[#6B7280]"
            />
          </div>

          {/* Date Input */}
          <div className="flex items-center gap-2 flex-1 bg-[#E9E9E9] rounded-lg px-3 py-3 border border-[#6B7FC6]">
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
              <path d="M2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4C0 3.45 0.195833 2.97917 0.5875 2.5875C0.979167 2.19583 1.45 2 2 2H3V0H5V2H13V0H15V2H16C16.55 2 17.0208 2.19583 17.4125 2.5875C17.8042 2.97917 18 3.45 18 4V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H2ZM2 18H16V8H2V18ZM2 6H16V4H2V6Z" fill="#727784"/>
            </svg>
            <input
              type="text"
              value={dates}
              onChange={(e) => setDates(e.target.value)}
              className="flex-1 bg-transparent text-brand-dark text-base outline-none"
            />
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="flex items-center justify-center gap-2 px-8 py-3 bg-brand-blue text-white font-bold text-lg rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z" fill="white"/>
            </svg>
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Why Choose Us ────────────────────────────────────────────────────────────
function WhyChooseUs() {
  const features = [
    {
      icon: (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.25 15.3125L15.3125 24.25C15.0625 24.5 14.7812 24.6875 14.4688 24.8125C14.1562 24.9375 13.8438 25 13.5312 25C13.2188 25 12.9062 24.9375 12.5938 24.8125C12.2812 24.6875 12 24.5 11.75 24.25L0.71875 13.2188C0.489583 12.9896 0.3125 12.724 0.1875 12.4219C0.0625 12.1198 0 11.8021 0 11.4688V2.5C0 1.8125 0.244792 1.22396 0.734375 0.734375C1.22396 0.244792 1.8125 0 2.5 0H11.4688C11.8021 0 12.125 0.0677083 12.4375 0.203125C12.75 0.338542 13.0208 0.520833 13.25 0.75L24.25 11.7812C24.5 12.0312 24.6823 12.3125 24.7969 12.625C24.9115 12.9375 24.9688 13.25 24.9688 13.5625C24.9688 13.875 24.9115 14.1823 24.7969 14.4844C24.6823 14.7865 24.5 15.0625 24.25 15.3125ZM13.5312 22.5L22.4688 13.5625L11.4375 2.5H2.5V11.4375L13.5312 22.5ZM5.625 7.5C6.14583 7.5 6.58854 7.31771 6.95312 6.95312C7.31771 6.58854 7.5 6.14583 7.5 5.625C7.5 5.10417 7.31771 4.66146 6.95312 4.29688C6.58854 3.93229 6.14583 3.75 5.625 3.75C5.10417 3.75 4.66146 3.93229 4.29688 4.29688C3.93229 4.66146 3.75 5.10417 3.75 5.625C3.75 6.14583 3.93229 6.58854 4.29688 6.95312C4.66146 7.31771 5.10417 7.5 5.625 7.5Z" fill="#005CBD"/>
        </svg>
      ),
      iconBg: "bg-[rgba(83,146,249,0.20)]",
      title: "Best Price Guarantee",
      description: "Find a lower price? We'll match it and give you a voucher for your next trip.",
    },
    {
      icon: (
        <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.25 22.5V20H21.25V11.125C21.25 8.6875 20.401 6.61979 18.7031 4.92188C17.0052 3.22396 14.9375 2.375 12.5 2.375C10.0625 2.375 7.99479 3.22396 6.29688 4.92188C4.59896 6.61979 3.75 8.6875 3.75 11.125V18.75H2.5C1.8125 18.75 1.22396 18.5052 0.734375 18.0156C0.244792 17.526 0 16.9375 0 16.25V13.75C0 13.3125 0.109375 12.901 0.328125 12.5156C0.546875 12.1302 0.854167 11.8229 1.25 11.5938L1.34375 9.9375C1.51042 8.52083 1.92188 7.20833 2.57812 6C3.23438 4.79167 4.05729 3.73958 5.04688 2.84375C6.03646 1.94792 7.17188 1.25 8.45312 0.75C9.73438 0.25 11.0833 0 12.5 0C13.9167 0 15.2604 0.25 16.5312 0.75C17.8021 1.25 18.9375 1.94271 19.9375 2.82812C20.9375 3.71354 21.7604 4.76042 22.4062 5.96875C23.0521 7.17708 23.4688 8.48958 23.6562 9.90625L23.75 11.5312C24.1458 11.7188 24.4531 12 24.6719 12.375C24.8906 12.75 25 13.1458 25 13.5625V16.4375C25 16.8542 24.8906 17.25 24.6719 17.625C24.4531 18 24.1458 18.2812 23.75 18.4688V20C23.75 20.6875 23.5052 21.276 23.0156 21.7656C22.526 22.2552 21.9375 22.5 21.25 22.5H11.25ZM8.75 13.75C8.39583 13.75 8.09896 13.6302 7.85938 13.3906C7.61979 13.151 7.5 12.8542 7.5 12.5C7.5 12.1458 7.61979 11.849 7.85938 11.6094C8.09896 11.3698 8.39583 11.25 8.75 11.25C9.10417 11.25 9.40104 11.3698 9.64062 11.6094C9.88021 11.849 10 12.1458 10 12.5C10 12.8542 9.88021 13.151 9.64062 13.3906C9.40104 13.6302 9.10417 13.75 8.75 13.75ZM16.25 13.75C15.8958 13.75 15.599 13.6302 15.3594 13.3906C15.1198 13.151 15 12.8542 15 12.5C15 12.1458 15.1198 11.849 15.3594 11.6094C15.599 11.3698 15.8958 11.25 16.25 11.25C16.6042 11.25 16.901 11.3698 17.1406 11.6094C17.3802 11.849 17.5 12.1458 17.5 12.5C17.5 12.8542 17.3802 13.151 17.1406 13.3906C16.901 13.6302 16.6042 13.75 16.25 13.75ZM5.03125 11.8125C4.88542 9.60417 5.55208 7.70833 7.03125 6.125C8.51042 4.54167 10.3542 3.75 12.5625 3.75C14.4167 3.75 16.0469 4.33854 17.4531 5.51562C18.8594 6.69271 19.7083 8.19792 20 10.0312C18.1042 10.0104 16.3594 9.5 14.7656 8.5C13.1719 7.5 11.9479 6.14583 11.0938 4.4375C10.7604 6.10417 10.0573 7.58854 8.98438 8.89062C7.91146 10.1927 6.59375 11.1667 5.03125 11.8125Z" fill="#B61B4A"/>
        </svg>
      ),
      iconBg: "bg-[rgba(255,86,125,0.20)]",
      title: "24/7 Global Support",
      description: "Our world-class support team is here to help you anywhere, anytime in 40+ languages.",
    },
    {
      icon: (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.5 25V21.25H13.75V18.75H17.5V15H20V18.75H23.75V21.25H20V25H17.5ZM2.5 22.5C1.8125 22.5 1.22396 22.2552 0.734375 21.7656C0.244792 21.276 0 20.6875 0 20V5C0 4.3125 0.244792 3.72396 0.734375 3.23438C1.22396 2.74479 1.8125 2.5 2.5 2.5H3.75V0H6.25V2.5H13.75V0H16.25V2.5H17.5C18.1875 2.5 18.776 2.74479 19.2656 3.23438C19.7552 3.72396 20 4.3125 20 5V12.625C19.5833 12.5625 19.1667 12.5312 18.75 12.5312C18.3333 12.5312 17.9167 12.5625 17.5 12.625V10H2.5V20H11.25C11.25 20.4167 11.2812 20.8333 11.3438 21.25C11.4062 21.6667 11.5208 22.0833 11.6875 22.5H2.5ZM2.5 7.5H17.5V5H2.5V7.5Z" fill="#8A5100"/>
        </svg>
      ),
      iconBg: "bg-[rgba(212,127,0,0.20)]",
      title: "Flexible Booking",
      description: "Life happens. Most of our properties offer free cancellation for peace of mind.",
    },
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-10 pt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-[#E9E9E9] rounded-xl p-6 flex flex-col items-center gap-3 text-center"
          >
            <div className={`w-12 h-12 flex items-center justify-center rounded-full ${f.iconBg}`}>
              {f.icon}
            </div>
            <h3 className="text-xl font-bold text-brand-dark">{f.title}</h3>
            <p className="text-sm text-brand-body leading-5">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Trending Destinations ────────────────────────────────────────────────────
function TrendingDestinations() {
  const router = useRouter();
  const destinations = [
    {
      city: "Bangkok",
      country: "Thailand",
      price: "$120",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/2457fe5af253c527febd5afbd786e3d17d0c1dda?width=564",
      topRated: true,
    },
    {
      city: "Tokyo",
      country: "Japan",
      price: "$250",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/96c400e34f39db9e9ec08d6e552719b254dfbb80?width=564",
    },
    {
      city: "Paris",
      country: "France",
      price: "$180",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/874ddc9f8a1d9b4d18a60b06fe12038835515945?width=564",
    },
    {
      city: "London",
      country: "UK",
      price: "$210",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/bd1503d180bfcc67c1b4ce55fc5347dfc3240f3b?width=564",
    },
  ];

  return (
    <section className="px-4 md:px-10 py-12">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-brand-dark">Trending Destinations</h2>
            <p className="text-brand-body mt-1">Handpicked favorites for your next adventure</p>
          </div>
          <button
            onClick={() => router.push("/search")}
            className="text-brand-blue font-bold text-base hover:underline"
          >
            View all
          </button>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <button
              key={dest.city}
              onClick={() => router.push(`/search?destination=${dest.city}`)}
              className="text-left group"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mb-3">
                <img
                  src={dest.image}
                  alt={`${dest.city}, ${dest.country}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {dest.topRated && (
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 text-brand-dark text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase">
                      TOP RATED
                    </span>
                  </div>
                )}
              </div>
              <h4 className="text-xl font-bold text-brand-dark">
                {dest.city}, {dest.country}
              </h4>
              <p className="text-sm text-brand-body mt-0.5">
                Starting from <span className="font-bold text-brand-blue">{dest.price}</span>
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Promotional Banner ───────────────────────────────────────────────────────
function PromoBanner() {
  return (
    <section className="px-4 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="relative bg-brand-pink rounded-3xl overflow-hidden flex flex-col md:flex-row items-center justify-between px-8 md:px-12 py-10 md:py-12 gap-8">
          {/* Background Pattern */}
          <svg
            className="absolute right-0 top-0 opacity-20 hidden md:block"
            width="600"
            height="416"
            viewBox="0 0 600 416"
            fill="none"
          >
            <path d="M242.5 153.125L153.125 242.5C150.625 245 147.812 246.875 144.688 248.125C141.562 249.375 138.438 250 135.312 250C132.188 250 129.062 249.375 125.938 248.125C122.812 246.875 120 245 117.5 242.5L7.1875 132.188C4.89583 129.896 3.125 127.24 1.875 124.219C0.625 121.198 0 118.021 0 114.688V25C0 18.125 2.44792 12.2396 7.34375 7.34375C12.2396 2.44792 18.125 0 25 0H114.688C118.021 0 121.25 0.677083 124.375 2.03125C127.5 3.38542 130.208 5.20833 132.5 7.5L242.5 117.812C245 120.312 246.823 123.125 247.969 126.25C249.115 129.375 249.688 132.5 249.688 135.625C249.688 138.75 249.115 141.823 247.969 144.844C246.823 147.865 245 150.625 242.5 153.125ZM56.25 75C61.4583 75 65.8854 73.1771 69.5312 69.5312C73.1771 65.8854 75 61.4583 75 56.25C75 51.0417 73.1771 46.6146 69.5312 42.9688C65.8854 39.3229 61.4583 37.5 56.25 37.5C51.0417 37.5 46.6146 39.3229 42.9688 42.9688C39.3229 46.6146 37.5 51.0417 37.5 56.25C37.5 61.4583 39.3229 65.8854 42.9688 69.5312C46.6146 73.1771 51.0417 75 56.25 75Z" fill="#191C22" opacity="0.2"/>
          </svg>

          {/* Text Content */}
          <div className="flex flex-col gap-4 max-w-xl z-10">
            <h2 className="text-white font-black text-4xl md:text-5xl leading-tight">
              Summer Sales: Up to 40% Off!
            </h2>
            <p className="text-white/80 text-lg leading-7">
              Exclusive member deals on flights and luxury hotels for your next summer getaway. Valid until Oct 31st.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-3.5 bg-white text-brand-pink font-bold text-lg rounded-xl hover:bg-gray-100 transition-colors">
                Explore Deals
              </button>
              <button className="px-8 py-3.5 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-colors">
                Join Club T-Goda
              </button>
            </div>
          </div>

          {/* Promo Image */}
          <div className="z-10 flex-shrink-0">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl rotate-3">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/df2478cb1c05977d1bb0e73e592456b0a9dc8de6?width=640"
                alt="Summer deals"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Newsletter ───────────────────────────────────────────────────────────────
function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="px-4 md:px-10 py-12">
      <div className="max-w-[1280px] mx-auto">
        <div className="bg-brand-newsletter-bg rounded-3xl px-6 md:px-16 py-16 flex flex-col items-center text-center gap-4">
          {/* Mail Icon */}
          <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 32C2.9 32 1.95833 31.6083 1.175 30.825C0.391667 30.0417 0 29.1 0 28V4C0 2.9 0.391667 1.95833 1.175 1.175C1.95833 0.391667 2.9 0 4 0H36C37.1 0 38.0417 0.391667 38.825 1.175C39.6083 1.95833 40 2.9 40 4V28C40 29.1 39.6083 30.0417 38.825 30.825C38.0417 31.6083 37.1 32 36 32H4ZM20 18L4 8V28H36V8L20 18ZM20 14L36 4H4L20 14ZM4 8V4V8V28V8Z" fill="#005CBD"/>
          </svg>

          <h2 className="text-3xl font-bold text-brand-dark">Get Travel Deals Directly</h2>
          <p className="text-brand-body text-lg leading-7 max-w-lg">
            Subscribe to our newsletter and get early access to hidden gems and seasonal discounts.
            No spam, only adventure.
          </p>

          {/* Form */}
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-[672px] mt-2">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-xl border border-[#6B7FC6] bg-white text-base text-brand-dark placeholder-[#6B7280] outline-none focus:ring-2 focus:ring-brand-blue"
            />
            <button className="px-8 py-4 bg-brand-blue text-white font-bold text-base rounded-xl hover:bg-blue-700 transition-colors whitespace-nowrap">
              Subscribe Now
            </button>
          </div>

          <p className="text-xs text-brand-body mt-1">
            By subscribing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Main Index Page ──────────────────────────────────────────────────────────
export default function IndexPage() {
  return (
    <Layout>
      <HeroSection />
      <WhyChooseUs />
      <TrendingDestinations />
      <PromoBanner />
      <Newsletter />
    </Layout>
  );
}
