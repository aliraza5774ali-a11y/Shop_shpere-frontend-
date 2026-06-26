import { useState } from "react";
import { MessageCircleDashed } from "lucide-react";
import { LiaStarSolid } from "react-icons/lia";
import review01 from "../../assets/review_01.avif";
import review11 from "../../assets/review_02.avif";
import review21 from "../../assets/review_03.avif";
import review31 from "../../assets/review_04.avif";
import review41 from "../../assets/review_05.avif";
import review02 from "../../assets/review-01.svg";
import review12 from "../../assets/review-02.svg";
import review22 from "../../assets/review-03.svg";
import review32 from "../../assets/review-04.svg";
import review42 from "../../assets/review-05.svg";

const REVIEWS = [
  {
    avatar: review01,
    logo: review02,
    name: "James Carter",
    role: "Creative Director",
    text: "The premium quality of the men's collection is truly unmatched lately. The fabrics feel incredibly premium and soft. This specific tailored fit is perfect for my busy office. A very sharp look. I love it every day.",
    bold: [
      "The fabrics feel incredibly premium and soft.",
      "A very sharp look.",
    ],
    rating: 4.9,
    reviewCount: 1,
  },
  {
    avatar: review11,
    logo: review12,
    name: "Sofia Mendes",
    role: "Fashion Blogger",
    text: "I am obsessed with the elegant modern daily wear. The tailoring is exceptionally modern and sharp. Every piece feels curated for my professional life. Beautiful and versatile style. Truly great quality.",
    bold: [
      "The tailoring is exceptionally modern and sharp.",
      "Every piece feels curated for my professional life.",
    ],
    rating: 4.8,
    reviewCount: 5,
  },
  {
    avatar: review21,
    logo: review22,
    name: "Liam Brooks",
    role: "Photographer",
    text: "Finding clothes that last through many washes is hard. These pieces are exceptionally durable and strong. They hold their deep color and original shape.They hold their deep color and original shape.  Very reliable brand.",
    bold: [
      "These pieces are exceptionally durable and strong.",
      "A great weekend choice.",
    ],
    rating: 4.9,
    reviewCount: 10,
  },
  {
    avatar: review31,
    logo: review32,
    name: "Aisha Noor",
    role: "Art Director",
    text: "The children's line is a lifesaver for growing kids. The styles are fresh and very cool. It handles every playground adventure with total ease. Soft and gentle fabric. Best for kids.",
    bold: ["The styles are fresh and very cool.", "Soft and gentle fabric."],
    rating: 4.9,
    reviewCount: 8,
  },
  {
    avatar: review41,
    logo: review42,
    name: "Marcus Lee",
    role: "Architect",
    text: "I appreciate the structured design of the new coats. The silhouette is professional and very clean. It provides a sophisticated look for my meetings. A true staple piece. Highly recommend this.",
    bold: [
      "The silhouette is professional and very clean.",
      "A true staple piece.",
    ],
    rating: 4.8,
    reviewCount: 25,
  },
];

const highlightText = (text, boldPhrases) => {
  let result = text;
  boldPhrases.forEach((phrase) => {
    result = result.replace(phrase, `<strong>${phrase}</strong>`);
  });
  return result;
};

const ReviewSection = () => {
  const [active, setActive] = useState(0);
  const review = REVIEWS[active];

  return (
    <section className="bg-[#f8f8f8] px-38 pt-10 pb-18 flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white text-xs font-medium text-black shadow-sm overflow-hidden">
          <p className="bg-black rounded-full p-2 text-white">
            <MessageCircleDashed size={13} />
          </p>
          <span className="pr-3">Customer Reviews</span>
        </span>
        <h2 className="text-4xl font-semibold leading-tight tracking-wide text-black">
          The voice of quality
        </h2>
        <p className="text-sm text-black/50 leading-relaxed">
          Experience the difference through the words of customers <br />
          who value premium fabrics and timeless design.
        </p>
      </div>

      <div className="bg-white rounded-3xl overflow-hidden flex flex-col">
        {/* Top rating bar */}
        <div className="px-4 pt-6">
          <div className="inline-flex items-center gap-3 bg-[#f8f8f8] rounded-xl px-2 py-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <LiaStarSolid
                  key={i}
                  size={16}
                  className={
                    i < Math.round(review.rating)
                      ? "text-[#ff6a00]"
                      : "text-black/10"
                  }
                />
              ))}
            </div>
            <span className="text-[14px] font-medium text-black/70">
              {review.rating}/5 from {review.reviewCount}k+ reviews
            </span>
          </div>
        </div>

        {/* Review content */}
        <div className="flex flex-col items-center text-center gap-8 px-16 py-12">
          <img
            src={review.logo}
            alt="brand logo"
            className="h-6 object-contain"
          />
          <p
            className="text-[18px] leading-relaxed text-black/80 max-w-[700px] transition-all duration-300"
            dangerouslySetInnerHTML={{
              __html: highlightText(review.text, review.bold),
            }}
          />
          <div className="flex items-center gap-3 py-2">
            <div className="h-11 w-11 rounded-full overflow-hidden flex-shrink-0">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-black">{review.name}</p>
              <p className="text-xs text-black/40">{review.role}</p>
            </div>
          </div>
        </div>

        {/* Logo selector — full width */}
        <div className="flex items-stretch rounded-b-xl">
          {REVIEWS.map((r, i) => (
            <div key={i} className="flex items-stretch flex-1 gap-2">
              <button
                onClick={() => setActive(i)}
                className={`flex-1 flex items-center justify-center py-10 transition-all duration-300 ${
                  i === active ? "bg-black" : "bg-[#eeeeee] hover:bg-black/5"
                }`}
              >
                <img
                  src={r.logo}
                  alt={r.name}
                  className={`h-5 object-contain transition-all duration-300 ${
                    i === active ? " invert" : "bg-[#f8f8f8]"
                  }`}
                />
              </button>
              {i < REVIEWS.length - 1 && (
                <div className="w-px bg-black/[0.06] flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
