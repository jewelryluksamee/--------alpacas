"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Layout from "@/components/layout/Layout";

// ─── Star Rating ──────────────────────────────────────────────────────────────
function Stars({ count, size = 20 }: { count: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size * 0.95} viewBox="0 0 20 19" fill="none">
          <path
            d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
            fill={i < count ? "#FACC15" : "#D1D5DB"}
          />
        </svg>
      ))}
    </div>
  );
}

// ─── Rating Bar ───────────────────────────────────────────────────────────────
function RatingBar({ label, value, max = 10 }: { label: string; value: number; max?: number }) {
  const pct = (value / max) * 100;
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-center">
        <span className="text-base text-brand-dark">{label}</span>
        <span className="text-base text-brand-dark">{value}</span>
      </div>
      <div className="h-2 rounded-full bg-[#E7E8F1] overflow-hidden">
        <div className="h-full bg-brand-blue rounded-full" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

// ─── Amenity Item ─────────────────────────────────────────────────────────────
function Amenity({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-brand-blue">{icon}</div>
      <span className="text-base text-brand-dark">{label}</span>
    </div>
  );
}

// ─── Review Card ──────────────────────────────────────────────────────────────
function ReviewCard({ quote, name, country, date, stars, initials, avatarBg, avatarText }: {
  quote: string;
  name: string;
  country: string;
  date: string;
  stars: number;
  initials: string;
  avatarBg: string;
  avatarText: string;
}) {
  return (
    <div className="bg-white border border-[rgba(194,198,213,0.30)] rounded-2xl shadow-sm p-6 flex flex-col justify-between gap-4">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <Stars count={stars} size={17} />
          <span className="text-base text-brand-body">{date}</span>
        </div>
        <p className="text-base text-brand-dark italic leading-6">"{quote}"</p>
      </div>
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${avatarBg}`}>
          <span className={`text-base font-bold ${avatarText}`}>{initials}</span>
        </div>
        <div>
          <div className="text-base text-brand-dark">{name}</div>
          <div className="text-xs text-brand-body">{country}</div>
        </div>
      </div>
    </div>
  );
}

// ─── Room Row ─────────────────────────────────────────────────────────────────
function RoomRow({ name, desc, sleeps, originalPrice, price, options, highlight, urgent }: {
  name: string;
  desc: string;
  sleeps: number;
  originalPrice: string;
  price: string;
  options: string[];
  highlight?: boolean;
  urgent?: string;
}) {
  const router = useRouter();

  return (
    <div className={`flex flex-col md:flex-row gap-4 p-6 border-t border-[rgba(194,198,213,0.30)] ${highlight ? "border-l-4 border-l-brand-blue bg-blue-50/50" : ""}`}>
      <div className="flex-1">
        <div className="flex flex-wrap items-start gap-3 mb-2">
          <h3 className="text-base font-semibold text-brand-dark">{name}</h3>
          {highlight && (
            <span className="bg-brand-pink text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">
              LIMITED TIME OFFER
            </span>
          )}
        </div>
        <p className="text-sm text-brand-body mb-2">{desc}</p>
        <button className="flex items-center gap-1 text-brand-blue text-sm font-semibold hover:underline">
          Room details
        </button>
      </div>
      <div className="flex items-center gap-1 md:w-24">
        {Array.from({ length: sleeps }).map((_, i) => (
          <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 8C6.9 8 5.95833 7.60833 5.175 6.825C4.39167 6.04167 4 5.1 4 4C4 2.9 4.39167 1.95833 5.175 1.175C5.95833 0.391667 6.9 0 8 0C9.1 0 10.0417 0.391667 10.825 1.175C11.6083 1.95833 12 2.9 12 4C12 5.1 11.6083 6.04167 10.825 6.825C10.0417 7.60833 9.1 8 8 8ZM0 16V13.2C0 12.6333 0.145833 12.1125 0.4375 11.6375C0.729167 11.1625 1.11667 10.8 1.6 10.55C2.63333 10.0333 3.68333 9.64583 4.75 9.3875C5.81667 9.12917 6.9 9 8 9C9.1 9 10.1833 9.12917 11.25 9.3875C12.3167 9.64583 13.3667 10.0333 14.4 10.55C14.8833 10.8 15.2708 11.1625 15.5625 11.6375C15.8542 12.1125 16 12.6333 16 13.2V16H0Z" fill="#191C22"/>
          </svg>
        ))}
      </div>
      <div className="flex flex-col md:w-44">
        <span className="text-base text-brand-body line-through">{originalPrice}</span>
        <span className={`text-2xl font-bold ${highlight ? "text-brand-pink" : "text-brand-dark"}`}>
          {price}
        </span>
        <span className="text-sm text-brand-body">Includes taxes & fees</span>
      </div>
      <div className="flex flex-col gap-2 md:w-52">
        {options.map((opt) => (
          <div key={opt} className="flex items-center gap-2">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M6.45 10.95L11.7375 5.6625L10.6875 4.6125L6.45 8.85L4.3125 6.7125L3.2625 7.7625L6.45 10.95ZM7.5 15C6.4625 15 5.4875 14.8031 4.575 14.4094C3.6625 14.0156 2.86875 13.4812 2.19375 12.8062C1.51875 12.1312 0.984375 11.3375 0.590625 10.425C0.196875 9.5125 0 8.5375 0 7.5C0 6.4625 0.196875 5.4875 0.590625 4.575C0.984375 3.6625 1.51875 2.86875 2.19375 2.19375C2.86875 1.51875 3.6625 0.984375 4.575 0.590625C5.4875 0.196875 6.4625 0 7.5 0C8.5375 0 9.5125 0.196875 10.425 0.590625C11.3375 0.984375 12.1312 1.51875 12.8062 2.19375C13.4812 2.86875 14.0156 3.6625 14.4094 4.575C14.8031 5.4875 15 6.4625 15 7.5C15 8.5375 14.8031 9.5125 14.4094 10.425C14.0156 11.3375 13.4812 12.1312 12.8062 12.8062C12.1312 13.4812 11.3375 14.0156 10.425 14.4094C9.5125 14.8031 8.5375 15 7.5 15Z" fill="#16A34A"/>
            </svg>
            <span className="text-base text-green-600">{opt}</span>
          </div>
        ))}
        {urgent && (
          <span className="text-base font-bold text-brand-pink">{urgent}</span>
        )}
        <button
          onClick={() => router.push("/search")}
          className={`mt-2 px-6 py-2 text-white text-base font-semibold rounded-lg transition-colors ${
            highlight ? "bg-brand-pink hover:bg-rose-700" : "bg-brand-blue hover:bg-blue-700"
          }`}
        >
          Select
        </button>
      </div>
    </div>
  );
}

// ─── Main Hotel Detail Page ───────────────────────────────────────────────────
export default function HotelDetailPage() {
  return (
    <Layout>
      <div className="max-w-[1280px] mx-auto px-6 pt-8 pb-16">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-base text-brand-body mb-6">
          <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
          <svg width="5" height="8" viewBox="0 0 5 8" fill="none"><path d="M3.06667 4L0 0.933333L0.933333 0L4.93333 4L0.933333 8L0 7.06667L3.06667 4Z" fill="#424753"/></svg>
          <Link href="/search?destination=Greece" className="hover:text-brand-blue transition-colors">Greece</Link>
          <svg width="5" height="8" viewBox="0 0 5 8" fill="none"><path d="M3.06667 4L0 0.933333L0.933333 0L4.93333 4L0.933333 8L0 7.06667L3.06667 4Z" fill="#424753"/></svg>
          <Link href="/search?destination=Crete" className="hover:text-brand-blue transition-colors">Crete Hotels</Link>
          <svg width="5" height="8" viewBox="0 0 5 8" fill="none"><path d="M3.06667 4L0 0.933333L0.933333 0L4.93333 4L0.933333 8L0 7.06667L3.06667 4Z" fill="#424753"/></svg>
          <span className="font-semibold text-brand-dark">Grand Azure Resort & Spa</span>
        </nav>

        {/* Hotel Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <Stars count={5} />
              <span className="bg-brand-blue text-white text-base px-2 py-0.5 rounded">RESORT</span>
            </div>
            <p className="text-base text-brand-dark">Grand Azure Resort & Spa, Elounda</p>
            <div className="flex items-center gap-2">
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                <path d="M8 10C8.55 10 9.02083 9.80417 9.4125 9.4125C9.80417 9.02083 10 8.55 10 8C10 7.45 9.80417 6.97917 9.4125 6.5875C9.02083 6.19583 8.55 6 8 6C7.45 6 6.97917 6.19583 6.5875 6.5875C6.19583 6.97917 6 7.45 6 8C6 8.55 6.19583 9.02083 6.5875 9.4125C6.97917 9.80417 7.45 10 8 10ZM8 17.35C10.0333 15.4833 11.5417 13.7875 12.525 12.2625C13.5083 10.7375 14 9.38333 14 8.2C14 6.38333 13.4208 4.89583 12.2625 3.7375C11.1042 2.57917 9.68333 2 8 2C6.31667 2 4.89583 2.57917 3.7375 3.7375C2.57917 4.89583 2 6.38333 2 8.2C2 9.38333 2.49167 10.7375 3.475 12.2625C4.45833 13.7875 5.96667 15.4833 8 17.35ZM8 20C5.31667 17.7167 3.3125 15.5958 1.9875 13.6375C0.6625 11.6792 0 9.86667 0 8.2C0 5.7 0.804167 3.70833 2.4125 2.225C4.02083 0.741667 5.88333 0 8 0C10.1167 0 11.9792 0.741667 13.5875 2.225C15.1958 3.70833 16 5.7 16 8.2C16 9.86667 15.3375 11.6792 14.0125 13.6375C12.6875 15.5958 10.6833 17.7167 8 20Z" fill="#005CBD"/>
              </svg>
              <span className="text-base text-brand-body">Elounda Bay, Crete, 72053, Greece</span>
              <button className="text-brand-blue font-semibold text-base hover:underline ml-2">Show on map</button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#C2C6D5] text-brand-dark hover:bg-gray-50 transition-colors">
              Share
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#C2C6D5] text-brand-dark hover:bg-gray-50 transition-colors">
              Save
            </button>
            <button className="px-8 py-3 bg-brand-pink text-white font-semibold text-base rounded-lg hover:bg-rose-700 transition-colors shadow-sm">
              Book Now
            </button>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[500px] mb-8">
          <div className="col-span-4 md:col-span-2 row-span-2 rounded-xl overflow-hidden">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a22e8637dff3754b663bab8913b499ab85b347fa?width=1216"
              alt="Hotel main view"
              className="w-full h-full object-cover"
            />
          </div>
          {[
            "https://api.builder.io/api/v1/image/assets/TEMP/006632d5f9b9e1e90b02607af7e83609b5e45f0a?width=592",
            "https://api.builder.io/api/v1/image/assets/TEMP/0c10f29dfe8d6e1da4f0f10897932cd04164ef3a?width=592",
            "https://api.builder.io/api/v1/image/assets/TEMP/bb06f8f7feb0b90d0e97460eb985dfbc721c097a?width=592",
          ].map((src, i) => (
            <div key={i} className="hidden md:block rounded-xl overflow-hidden relative">
              <img src={src} alt={`Hotel view ${i + 2}`} className="w-full h-full object-cover" />
            </div>
          ))}
          <div className="hidden md:block rounded-xl overflow-hidden relative">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/bb2f69dd1232e1abb38ed795bca09a65b52cd099?width=592"
              alt="Hotel view 5"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white text-base">+124 photos</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 flex flex-col gap-12">
            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-4">Overview</h2>
              <p className="text-base text-brand-body leading-relaxed">
                Experience unparalleled luxury at the Grand Azure Resort & Spa, nestled on the pristine shores
                of Elounda Bay. This architectural masterpiece blends traditional Cretan charm with ultra-modern
                design, offering guests breathtaking panoramic views of the Mediterranean.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-brand-dark mb-6">Popular Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <Amenity label="3 Outdoor Pools" icon={<svg width="24" height="21" viewBox="0 0 24 21" fill="none"><path d="M0 21V18.6667C0.738889 18.6667 1.29306 18.4722 1.6625 18.0833C2.03194 17.6944 2.76111 17.5 3.85 17.5C4.93889 17.5 5.6875 17.6944 6.09583 18.0833C6.50417 18.4722 7.05833 18.6667 7.75833 18.6667C8.45833 18.6667 9.0125 18.4722 9.42083 18.0833C9.82917 17.6944 10.5778 17.5 11.6667 17.5C12.7556 17.5 13.5042 17.6944 13.9125 18.0833C14.3208 18.4722 14.875 18.6667 15.575 18.6667C16.275 18.6667 16.8292 18.4722 17.2375 18.0833C17.6458 17.6944 18.3944 17.5 19.4833 17.5C20.5722 17.5 21.3014 17.6944 21.6708 18.0833C22.0403 18.4722 22.5944 18.6667 23.3333 18.6667V21C22.1861 21 21.4326 20.8056 21.0729 20.4167C20.7132 20.0278 20.1833 19.8333 19.4833 19.8333C18.7833 19.8333 18.2292 20.0278 17.8208 20.4167C17.4125 20.8056 16.6639 21 15.575 21C14.4861 21 13.7375 20.8056 13.3292 20.4167C12.9208 20.0278 12.3667 19.8333 11.6667 19.8333C10.9667 19.8333 10.4125 20.0278 10.0042 20.4167C9.59583 20.8056 8.84722 21 7.75833 21C6.66944 21 5.92083 20.8056 5.5125 20.4167C5.10417 20.0278 4.55 19.8333 3.85 19.8333C3.15 19.8333 2.62014 20.0278 2.26042 20.4167C1.90069 20.8056 1.14722 21 0 21Z" fill="#005CBD"/></svg>} />
                <Amenity label="Full-service Spa" icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11.6667 23.3333C10.2472 23.1583 8.8375 22.7743 7.4375 22.1812C6.0375 21.5882 4.78819 20.7375 3.68958 19.6292C2.59097 18.5208 1.70139 17.1208 1.02083 15.4292C0.340278 13.7375 0 11.7056 0 9.33333V8.16667H1.16667C2.15833 8.16667 3.17917 8.29306 4.22917 8.54583C5.27917 8.79861 6.26111 9.17778 7.175 9.68333C7.40833 8.01111 7.93819 6.29514 8.76458 4.53542C9.59097 2.77569 10.5583 1.26389 11.6667 0C12.775 1.26389 13.7424 2.77569 14.5688 4.53542C15.3951 6.29514 15.925 8.01111 16.1583 9.68333C17.0722 9.17778 18.0542 8.79861 19.1042 8.54583C20.1542 8.29306 21.175 8.16667 22.1667 8.16667H23.3333V9.33333C23.3333 11.7056 22.9931 13.7375 22.3125 15.4292C21.6319 17.1208 20.7424 18.5208 19.6437 19.6292C18.5451 20.7375 17.3007 21.5882 15.9104 22.1812C14.5201 22.7743 13.1056 23.1583 11.6667 23.3333Z" fill="#005CBD"/></svg>} />
                <Amenity label="Free High-speed Wi-Fi" icon={<svg width="28" height="20" viewBox="0 0 28 20" fill="none"><path d="M14 19.8333C13.1833 19.8333 12.4931 19.5514 11.9292 18.9875C11.3653 18.4236 11.0833 17.7333 11.0833 16.9167C11.0833 16.1 11.3653 15.4097 11.9292 14.8458C12.4931 14.2819 13.1833 14 14 14C14.8167 14 15.5069 14.2819 16.0708 14.8458C16.6347 15.4097 16.9167 16.1 16.9167 16.9167C16.9167 17.7333 16.6347 18.4236 16.0708 18.9875C15.5069 19.5514 14.8167 19.8333 14 19.8333ZM7.40833 13.2417L4.95833 10.7333C6.10556 9.58611 7.45208 8.67708 8.99792 8.00625C10.5437 7.33542 12.2111 7 14 7C15.7889 7 17.4562 7.34028 19.0021 8.02083C20.5479 8.70139 21.8944 9.625 23.0417 10.7917L20.5917 13.2417C19.7361 12.3861 18.7444 11.7153 17.6167 11.2292C16.4889 10.7431 15.2833 10.5 14 10.5C12.7167 10.5 11.5111 10.7431 10.3833 11.2292C9.25556 11.7153 8.26389 12.3861 7.40833 13.2417ZM2.45 8.28333L0 5.83333C1.78889 4.00556 3.87917 2.57639 6.27083 1.54583C8.6625 0.515278 11.2389 0 14 0C16.7611 0 19.3375 0.515278 21.7292 1.54583C24.1208 2.57639 26.2111 4.00556 28 5.83333L25.55 8.28333C24.0528 6.78611 22.3174 5.61458 20.3438 4.76875C18.3701 3.92292 16.2556 3.5 14 3.5C11.7444 3.5 9.62986 3.92292 7.65625 4.76875C5.68264 5.61458 3.94722 6.78611 2.45 8.28333Z" fill="#005CBD"/></svg>} />
                <Amenity label="Private Beach" icon={<svg width="21" height="22" viewBox="0 0 21 22" fill="none"><path d="M19.3667 21.0292L11.9583 13.6208L13.5917 11.9875L21 19.3958L19.3667 21.0292Z" fill="#005CBD"/></svg>} />
                <Amenity label="Gym & Fitness" icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13.1833 23.1L11.55 21.4667L15.6917 17.325L5.775 7.40833L1.63333 11.55L0 9.91667L1.63333 8.225L0 6.59167L2.45 4.14167L0.816667 2.45L2.45 0.816667L4.14167 2.45L6.59167 0L8.225 1.63333L9.91667 0L11.55 1.63333L7.40833 5.775L17.325 15.6917L21.4667 11.55L23.1 13.1833L21.4667 14.875L23.1 16.5083L20.65 18.9583L22.2833 20.65L20.65 22.2833L18.9583 20.65L16.5083 23.1L14.875 21.4667L13.1833 23.1Z" fill="#005CBD"/></svg>} />
                <Amenity label="5 Restaurants" icon={<svg width="18" height="24" viewBox="0 0 18 24" fill="none"><path d="M3.5 23.3333V12.6583C2.50833 12.3861 1.67708 11.8417 1.00625 11.025C0.335417 10.2083 0 9.25556 0 8.16667V0H2.33333V8.16667H3.5V0H5.83333V8.16667H7V0H9.33333V8.16667C9.33333 9.25556 8.99792 10.2083 8.32708 11.025C7.65625 11.8417 6.825 12.3861 5.83333 12.6583V23.3333H3.5ZM15.1667 23.3333V14H11.6667V5.83333C11.6667 4.21944 12.2354 2.84375 13.3729 1.70625C14.5104 0.56875 15.8861 0 17.5 0V23.3333H15.1667Z" fill="#005CBD"/></svg>} />
              </div>
              <button className="flex items-center gap-2 mt-6 text-brand-blue font-semibold text-base hover:underline">
                See all 45 amenities
              </button>
            </section>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl border border-[rgba(194,198,213,0.30)] shadow-sm p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-base text-brand-dark">Excellent</div>
                  <div className="text-base text-brand-body">1,248 verified reviews</div>
                </div>
                <div className="w-14 h-14 bg-brand-blue rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">9.2</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <RatingBar label="Cleanliness" value={9.5} />
                <RatingBar label="Service" value={9.2} />
                <RatingBar label="Location" value={8.9} />
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-[rgba(194,198,213,0.30)] shadow-sm overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/667fa27b033d0e102b0fa2a60ab2f8e05ce362d4?width=753"
                alt="Hotel location map"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="text-base font-medium text-brand-dark">Near Spinalonga Island</div>
                <div className="text-base text-brand-body">15 min walk to city center</div>
              </div>
            </div>
          </div>
        </div>

        {/* Room Selection */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Select Your Room</h2>
          <div className="bg-white rounded-2xl border border-[rgba(194,198,213,0.30)] shadow-sm overflow-hidden">
            <div className="bg-[#F2F3FC] grid grid-cols-4 gap-0 hidden md:grid">
              {["Room Type", "Sleeps", "Today's Price", "Options"].map((h) => (
                <div key={h} className="px-6 py-4 text-base font-bold text-brand-body">{h}</div>
              ))}
            </div>
            <RoomRow
              name="Presidential Sea Front Suite"
              desc="85m² • Panoramic Sea View • Infinity Pool Access"
              sleeps={4}
              originalPrice="$1,295"
              price="$862"
              options={["Free Airport Transfer", "All-Inclusive Premium"]}
              urgent="Only 1 room left!"
              highlight
            />
            <RoomRow
              name="Deluxe Garden View Room"
              desc="32m² • Balcony • Garden View • 1 King Bed"
              sleeps={2}
              originalPrice="$345"
              price="$264"
              options={["Free Cancellation", "Breakfast Included"]}
            />
            <RoomRow
              name="Junior Suite with Private Pool"
              desc="45m² • Private Pool • Sea View • King Bed"
              sleeps={3}
              originalPrice="$626"
              price="$445"
              options={["Free Cancellation", "All-Inclusive"]}
              urgent="Only 2 rooms left!"
            />
          </div>
        </section>

        {/* Guest Reviews */}
        <section className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-brand-dark">Guest Reviews</h2>
            <button className="text-brand-blue font-semibold text-base hover:underline">
              Read all 1,248 reviews
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ReviewCard
              quote="An absolute paradise. The views from the Presidential Suite are unmatched. The service was impeccable from start to finish."
              name="Sophia Martinez"
              country="United Kingdom"
              date="May 12, 2024"
              stars={5}
              initials="SM"
              avatarBg="bg-[#D7E2FF]"
              avatarText="text-[#001A40]"
            />
            <ReviewCard
              quote="Excellent facilities and great breakfast selection. The private beach is beautiful, though the city center is a bit of a walk."
              name="James Wilson"
              country="United States"
              date="Apr 28, 2024"
              stars={4}
              initials="JW"
              avatarBg="bg-[#FFD9DD]"
              avatarText="text-[#400013]"
            />
            <ReviewCard
              quote="The spa treatments were heavenly. Truly a five-star experience. We will definitely be coming back next summer."
              name="Anna Kowalski"
              country="Germany"
              date="Apr 15, 2024"
              stars={5}
              initials="AK"
              avatarBg="bg-[#FFDCBD]"
              avatarText="text-[#2C1600]"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
}
