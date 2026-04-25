"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Layout from "@/components/layout/Layout";

// ─── Star Rating ──────────────────────────────────────────────────────────────
function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M2.23125 11.0833L3.17917 6.98542L0 4.22917L4.2 3.86458L5.83333 0L7.46667 3.86458L11.6667 4.22917L8.4875 6.98542L9.43542 11.0833L5.83333 8.91042L2.23125 11.0833Z"
            fill={i < count ? "#EAB308" : "#D1D5DB"}
          />
        </svg>
      ))}
    </div>
  );
}

// ─── Sidebar Filters ──────────────────────────────────────────────────────────
function SidebarFilters() {
  const [priceRange, setPriceRange] = useState([0, 600]);
  const [propertyTypes, setPropertyTypes] = useState<string[]>([]);
  const [starRating, setStarRating] = useState<string[]>([]);
  const [facilities, setFacilities] = useState<string[]>([]);
  const [reviewScore, setReviewScore] = useState<string[]>([]);

  const toggleFilter = (list: string[], setList: (l: string[]) => void, value: string) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const FilterCheckbox = ({
    label,
    checked,
    onChange,
  }: {
    label: string;
    group: string;
    checked: boolean;
    onChange: () => void;
  }) => (
    <label className="flex items-center gap-3 cursor-pointer">
      <div
        className={`w-5 h-5 rounded border flex-shrink-0 flex items-center justify-center transition-colors ${
          checked ? "bg-brand-blue border-brand-blue" : "bg-white border-[#C2C6D5]"
        }`}
        onClick={onChange}
      >
        {checked && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <span className="text-sm text-brand-dark">{label}</span>
    </label>
  );

  return (
    <aside className="w-64 flex-shrink-0 flex flex-col gap-8">
      <div className="bg-white rounded-xl border border-[rgba(194,198,213,0.20)] shadow-sm p-4 flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center gap-2">
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
            <path d="M7 12V10H11V12H7ZM3 7V5H15V7H3ZM0 2V0H18V2H0Z" fill="#005CBD"/>
          </svg>
          <span className="text-lg font-semibold text-brand-dark">Filters</span>
        </div>

        {/* Price Range */}
        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold text-brand-dark">Price Range</span>
          <div className="flex justify-between text-xs font-medium text-brand-body">
            <span>$0</span><span>$1000+</span>
          </div>
          <input
            type="range"
            min={0}
            max={1000}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
            className="w-full accent-brand-blue"
          />
          <span className="text-xs text-brand-body">Up to ${priceRange[1]}/night</span>
        </div>

        {/* Property Type */}
        <div className="flex flex-col gap-3 pt-2">
          <span className="text-sm font-semibold text-brand-dark">Property Type</span>
          <div className="flex flex-col gap-2">
            {["Hotels", "Resorts", "Apartments", "Villas"].map((t) => (
              <FilterCheckbox
                key={t} label={t} group="property"
                checked={propertyTypes.includes(t)}
                onChange={() => toggleFilter(propertyTypes, setPropertyTypes, t)}
              />
            ))}
          </div>
        </div>

        {/* Star Rating */}
        <div className="flex flex-col gap-3 pt-2">
          <span className="text-sm font-semibold text-brand-dark">Star Rating</span>
          <div className="flex flex-col gap-2">
            {[5, 4].map((n) => (
              <label key={n} className="flex items-center gap-3 cursor-pointer">
                <div
                  className={`w-5 h-5 rounded border flex-shrink-0 flex items-center justify-center transition-colors ${
                    starRating.includes(String(n)) ? "bg-brand-blue border-brand-blue" : "bg-white border-[#C2C6D5]"
                  }`}
                  onClick={() => toggleFilter(starRating, setStarRating, String(n))}
                >
                  {starRating.includes(String(n)) && (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <StarRating count={n} />
              </label>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div className="flex flex-col gap-3 pt-2">
          <span className="text-sm font-semibold text-brand-dark">Facilities</span>
          <div className="flex flex-col gap-2">
            {["Free Wi-Fi", "Swimming Pool", "Fitness Center", "Spa", "Parking", "Pet Friendly"].map((f) => (
              <FilterCheckbox
                key={f} label={f} group="facility"
                checked={facilities.includes(f)}
                onChange={() => toggleFilter(facilities, setFacilities, f)}
              />
            ))}
          </div>
        </div>

        {/* Review Score */}
        <div className="flex flex-col gap-3 pt-2">
          <span className="text-sm font-semibold text-brand-dark">Review Score</span>
          <div className="flex flex-col gap-2">
            {["Superb 9+", "Very Good 8+", "Good 7+"].map((r) => (
              <FilterCheckbox
                key={r} label={r} group="review"
                checked={reviewScore.includes(r)}
                onChange={() => toggleFilter(reviewScore, setReviewScore, r)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Map CTA */}
      <div className="rounded-xl overflow-hidden relative h-40 shadow-sm">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/d5ff1892bcf038254107e39af66a1761c29e3e6c?width=512"
          alt="Map"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-blue/20 backdrop-blur-[1px] flex items-center justify-center">
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg text-brand-blue font-semibold text-sm hover:shadow-xl transition-shadow">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 13.5L4.5 11.925L1.0125 13.275C0.7625 13.375 0.53125 13.3469 0.31875 13.1906C0.10625 13.0344 0 12.825 0 12.5625V2.0625C0 1.9 0.046875 1.75625 0.140625 1.63125C0.234375 1.50625 0.3625 1.4125 0.525 1.35L4.5 0L9 1.575L12.4875 0.225C12.7375 0.125 12.9688 0.153125 13.1812 0.309375C13.3937 0.465625 13.5 0.675 13.5 0.9375V11.4375C13.5 11.6 13.4531 11.7437 13.3594 11.8687C13.2656 11.9937 13.1375 12.0875 12.975 12.15L9 13.5Z" fill="#005CBD"/>
            </svg>
            View on Map
          </button>
        </div>
      </div>
    </aside>
  );
}

// ─── Flash Deals Banner ───────────────────────────────────────────────────────
function FlashDeals() {
  const deals = [
    {
      name: "Mandala Sky Luxury Villas",
      location: "Uluwatu, Bali • Cliff-top view",
      discount: "60% OFF",
      originalPrice: "$1,200",
      price: "$480",
      stars: 5,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/3786ca6a3402a2a015cbb836f7ed38347e4ec454?width=512",
    },
    {
      name: "Emerald Jungle Retreat",
      location: "Ubud, Bali • Private Sanctuary",
      discount: "45% OFF",
      originalPrice: "$450",
      price: "$247",
      stars: 4,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/16c776fece0f6351f386043edb8a0a6ced0ded4b?width=512",
    },
    {
      name: "Seminyak Shores Club",
      location: "Seminyak, Bali • Beachfront Bliss",
      discount: "35% OFF",
      originalPrice: "$680",
      price: "$442",
      stars: 5,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/4fc306093b3ddf4921092d7b48339257029a6b37?width=512",
    },
  ];

  return (
    <div className="rounded-2xl overflow-hidden border border-brand-blue/20 bg-gradient-to-br from-brand-blue to-[#004591] shadow-xl p-1">
      <div className="rounded-[14px] bg-white overflow-hidden">
        <div className="flex items-center justify-between px-6 py-3 bg-brand-pink/10">
          <div className="flex items-center gap-3">
            <svg width="16" height="19" viewBox="0 0 16 19" fill="none">
              <path d="M2 11C2 11.8667 2.175 12.6875 2.525 13.4625C2.875 14.2375 3.375 14.9167 4.025 15.5C4.00833 15.4167 4 15.3417 4 15.275C4 15.2083 4 15.1333 4 15.05C4 14.5167 4.1 14.0167 4.3 13.55C4.5 13.0833 4.79167 12.6583 5.175 12.275L8 9.5L10.825 12.275C11.2083 12.6583 11.5 13.0833 11.7 13.55C11.9 14.0167 12 14.5167 12 15.05C12 15.1333 12 15.2083 12 15.275C12 15.3417 11.9917 15.4167 11.975 15.5C12.625 14.9167 13.125 14.2375 13.475 13.4625C13.825 12.6875 14 11.8667 14 11C14 10.1667 13.8458 9.37917 13.5375 8.6375C13.2292 7.89583 12.7833 7.23333 12.2 6.65C11.8667 6.86667 11.5167 7.02917 11.15 7.1375C10.7833 7.24583 10.4083 7.3 10.025 7.3C8.99167 7.3 8.09583 6.95833 7.3375 6.275C6.57917 5.59167 6.14167 4.75 6.025 3.75C5.375 4.3 4.8 4.87083 4.3 5.4625C3.8 6.05417 3.37917 6.65417 3.0375 7.2625C2.69583 7.87083 2.4375 8.49167 2.2625 9.125C2.0875 9.75833 2 10.3833 2 11ZM8 12.3L6.575 13.7C6.39167 13.8833 6.25 14.0917 6.15 14.325C6.05 14.5583 6 14.8 6 15.05C6 15.5833 6.19583 16.0417 6.5875 16.425C6.97917 16.8083 7.45 17 8 17C8.55 17 9.02083 16.8083 9.4125 16.425C9.80417 16.0417 10 15.5833 10 15.05C10 14.7833 9.95 14.5375 9.85 14.3125C9.75 14.0875 9.60833 13.8833 9.425 13.7L8 12.3Z" fill="#B61B4A"/>
            </svg>
            <span className="text-lg font-semibold text-brand-pink">Flash Deals for You</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-brand-body">Ends in:</span>
            <div className="flex items-center gap-1 bg-brand-pink px-3 py-1 rounded-md">
              <span className="font-bold text-sm text-white font-mono">08</span>
              <span className="font-bold text-sm text-white">:</span>
              <span className="font-bold text-sm text-white font-mono">45</span>
              <span className="font-bold text-sm text-white">:</span>
              <span className="font-bold text-sm text-white font-mono">12</span>
            </div>
          </div>
        </div>
        {deals.map((deal, i) => (
          <div
            key={deal.name}
            className={`flex items-center gap-0 ${i > 0 ? "border-t border-[rgba(194,198,213,0.10)]" : ""}`}
          >
            <div className="relative w-64 h-48 flex-shrink-0 overflow-hidden">
              <img src={deal.image} alt={deal.name} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 bg-brand-pink px-3 py-1 rounded-lg">
                <span className="text-white text-xs font-black">{deal.discount}</span>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-between px-5 py-4">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-brand-dark">{deal.name}</span>
                  <StarRating count={deal.stars} />
                </div>
                <span className="text-xs text-brand-body">{deal.location}</span>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-xs text-brand-body line-through">{deal.originalPrice}</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-semibold text-brand-pink">{deal.price}</span>
                  <span className="text-xs text-brand-body">/night</span>
                </div>
                <button className="px-4 py-1.5 bg-brand-pink text-white text-xs font-bold rounded-lg hover:bg-rose-700 transition-colors">
                  Claim
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Hotel Card ───────────────────────────────────────────────────────────────
interface HotelCardProps {
  id: string;
  name: string;
  location: string;
  stars: number;
  rating: number;
  ratingLabel: string;
  reviews: string;
  price: string;
  originalPrice?: string;
  note: string;
  tags: string[];
  image: string;
  topChoice?: boolean;
}

function HotelCard({ id, name, location, stars, rating, ratingLabel, reviews, price, originalPrice, note, tags, image, topChoice }: HotelCardProps) {
  const router = useRouter();

  return (
    <article className="flex flex-col sm:flex-row h-auto sm:h-64 bg-white rounded-xl border border-[rgba(194,198,213,0.20)] shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative w-full sm:w-80 flex-shrink-0 h-48 sm:h-full overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        {topChoice && (
          <div className="absolute top-4 left-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
            <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
              <path d="M6.63333 9.36667L10.4 5.6L9.46667 4.63333L6.63333 7.46667L5.2 6.06667L4.26667 7L6.63333 9.36667ZM7.33333 14L5.06667 14L3.8 11.8667L1.4 11.3333L1.63333 8.86667L0 7L1.63333 5.13333L1.4 2.66667L3.8 2.13333L5.06667 0L7.33333 0.966667L9.6 0L10.8667 2.13333L13.2667 2.66667L13.0333 5.13333L14.6667 7L13.0333 8.86667L13.2667 11.3333L10.8667 11.8667L9.6 14L7.33333 13.0333L5.06667 14Z" fill="#005CBD"/>
            </svg>
            <span className="text-xs font-bold text-brand-blue">Top Choice</span>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between flex-1 p-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-xl font-semibold text-brand-dark">{name}</h3>
                <StarRating count={stars} />
              </div>
              <span className="text-sm text-brand-body">{location}</span>
            </div>
            <div className="bg-brand-blue/10 px-3 py-1.5 rounded-lg flex-shrink-0 text-right">
              <div className="text-sm font-bold text-brand-blue">{rating} {ratingLabel}</div>
              <div className="text-xs text-brand-body">{reviews} reviews</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="bg-brand-input-bg text-brand-dark text-xs px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-end justify-between pt-4 border-t border-brand-border/50">
          <span className="text-xs text-brand-body italic">{note}</span>
          <div className="flex flex-col items-end gap-1">
            {originalPrice && (
              <span className="text-xs text-brand-body line-through">{originalPrice}</span>
            )}
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-semibold text-brand-pink">{price}</span>
              <span className="text-xs text-brand-body">/night</span>
            </div>
            <button
              onClick={() => router.push(`/hotel/${id}`)}
              className="px-6 py-2 bg-brand-pink text-white text-base font-semibold rounded-lg hover:bg-rose-700 transition-colors"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

// ─── Search Summary Bar ───────────────────────────────────────────────────────
function SearchSummaryBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const destination = searchParams.get("destination") || "Bali, Indonesia";

  return (
    <div className="bg-white border-b border-[rgba(194,198,213,0.30)] shadow-sm py-4 px-6">
      <div className="max-w-[1280px] mx-auto flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-3 flex-1 min-w-[200px] bg-brand-input-bg rounded-xl px-4 py-3 border border-[rgba(194,198,213,0.50)]">
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
            <path d="M8 10C8.55 10 9.02083 9.80417 9.4125 9.4125C9.80417 9.02083 10 8.55 10 8C10 7.45 9.80417 6.97917 9.4125 6.5875C9.02083 6.19583 8.55 6 8 6C7.45 6 6.97917 6.19583 6.5875 6.5875C6.19583 6.97917 6 7.45 6 8C6 8.55 6.19583 9.02083 6.5875 9.4125C6.97917 9.80417 7.45 10 8 10ZM8 17.35C10.0333 15.4833 11.5417 13.7875 12.525 12.2625C13.5083 10.7375 14 9.38333 14 8.2C14 6.38333 13.4208 4.89583 12.2625 3.7375C11.1042 2.57917 9.68333 2 8 2C6.31667 2 4.89583 2.57917 3.7375 3.7375C2.57917 4.89583 2 6.38333 2 8.2C2 9.38333 2.49167 10.7375 3.475 12.2625C4.45833 13.7875 5.96667 15.4833 8 17.35ZM8 20C5.31667 17.7167 3.3125 15.5958 1.9875 13.6375C0.6625 11.6792 0 9.86667 0 8.2C0 5.7 0.804167 3.70833 2.4125 2.225C4.02083 0.741667 5.88333 0 8 0C10.1167 0 11.9792 0.741667 13.5875 2.225C15.1958 3.70833 16 5.7 16 8.2C16 9.86667 15.3375 11.6792 14.0125 13.6375C12.6875 15.5958 10.6833 17.7167 8 20Z" fill="#005CBD"/>
          </svg>
          <div>
            <div className="text-xs text-brand-body font-medium">Destination</div>
            <div className="text-sm font-semibold text-brand-dark">{destination}</div>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-brand-input-bg rounded-xl px-4 py-3 border border-[rgba(194,198,213,0.50)]">
          <div>
            <div className="text-xs text-brand-body font-medium">Dates</div>
            <div className="text-sm font-semibold text-brand-dark">Oct 12 - Oct 19, 2024</div>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-brand-input-bg rounded-xl px-4 py-3 border border-[rgba(194,198,213,0.50)]">
          <div>
            <div className="text-xs text-brand-body font-medium">Travelers</div>
            <div className="text-sm font-semibold text-brand-dark">2 Adults, 1 Room</div>
          </div>
        </div>
        <button
          onClick={() => router.push("/")}
          className="px-8 py-3 bg-brand-blue text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-brand-blue/20"
        >
          Update Search
        </button>
      </div>
    </div>
  );
}

// ─── Hotels Data ──────────────────────────────────────────────────────────────
const hotels: HotelCardProps[] = [
  {
    id: "1",
    name: "The Azure Serenity Resort",
    location: "Ubud, Bali • 2.5 km from center",
    stars: 5,
    rating: 8.9,
    ratingLabel: "Excellent",
    reviews: "1,240",
    price: "$284",
    originalPrice: "$320",
    note: "Only 2 rooms left at this price!",
    tags: ["Free Wi-Fi", "Pool", "Breakfast"],
    image: "https://api.builder.io/api/v1/image/assets/TEMP/09376cdba6a2d78b401f61ea88ec0dce4beff971?width=640",
    topChoice: true,
  },
  {
    id: "2",
    name: "Lumina Beach Villas",
    location: "Seminyak, Bali • Beachfront",
    stars: 4,
    rating: 9.2,
    ratingLabel: "Exceptional",
    reviews: "856",
    price: "$415",
    note: "Free cancellation before Oct 10",
    tags: ["Private Beach", "Spa"],
    image: "https://api.builder.io/api/v1/image/assets/TEMP/b44721bf290384afe47b4e4da5b98ece7232508a?width=640",
  },
  {
    id: "3",
    name: "The Palms Sanctuary",
    location: "Nusa Dua, Bali • 0.8 km from beach",
    stars: 4,
    rating: 8.4,
    ratingLabel: "Great",
    reviews: "2,102",
    price: "$189",
    note: "Breakfast + Dinner deal available",
    tags: ["Airport Shuttle", "Gym"],
    image: "https://api.builder.io/api/v1/image/assets/TEMP/138d81635b0e68f039b01370da98fe7d0a51159d?width=640",
  },
];

// ─── Search Results Content ───────────────────────────────────────────────────
function SearchResultsContent() {
  const searchParams = useSearchParams();
  const destination = searchParams.get("destination") || "Bali";

  return (
    <Layout>
      <SearchSummaryBar />
      <div className="max-w-[1280px] mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="hidden lg:block">
            <SidebarFilters />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-brand-dark">
                {hotels.length * 80} properties in {destination}
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-brand-body">Sort by:</span>
                <select className="text-brand-blue font-semibold text-sm border border-[#C2C6D5] rounded-lg px-3 py-1.5 outline-none focus:ring-2 focus:ring-brand-blue bg-white">
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating</option>
                </select>
              </div>
            </div>
            <FlashDeals />
            {hotels.map((hotel) => (
              <HotelCard key={hotel.id} {...hotel} />
            ))}
            <div className="flex items-center justify-center gap-2 py-8">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#C2C6D5] hover:bg-gray-50 transition-colors">
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                  <path d="M6 12L0 6L6 0L7.4 1.4L2.8 6L7.4 10.6L6 12Z" fill="#191C22"/>
                </svg>
              </button>
              {[1, 2, 3].map((p) => (
                <button
                  key={p}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg font-semibold text-sm transition-colors ${
                    p === 1 ? "bg-brand-blue text-white" : "border border-[#C2C6D5] text-brand-dark hover:bg-gray-50"
                  }`}
                >
                  {p}
                </button>
              ))}
              <span className="w-10 h-10 flex items-center justify-center text-brand-dark">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#C2C6D5] text-brand-dark hover:bg-gray-50 transition-colors">
                12
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#C2C6D5] hover:bg-gray-50 transition-colors">
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                  <path d="M4.6 6L0 1.4L1.4 0L7.4 6L1.4 12L0 10.6L4.6 6Z" fill="#191C22"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default function SearchPage() {
  return (
    <Suspense>
      <SearchResultsContent />
    </Suspense>
  );
}
