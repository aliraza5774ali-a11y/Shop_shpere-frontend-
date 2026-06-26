import { useState } from "react";
import HeroSection from "../components/sections/HeroSection";
import hero01 from '../assets/contactHero.avif';
import contactSide from '../assets/contactSide.avif';
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const FAQS = [
  { q: "How long does shipping take?",           a: "Standard shipping takes 5–7 business days. Express shipping (2–3 days) is available at checkout."         },
  { q: "What is your return policy?",            a: "We offer a 30-day hassle-free return policy. Items must be unworn and in original packaging."             },
  { q: "Do you ship internationally?",           a: "Yes, we ship to over 40 countries. International delivery takes 10–14 business days."                     },
  { q: "How do I find my size?",                 a: "Each product page includes a detailed size guide. When in doubt, size up for an oversized fit."            },
  { q: "Can I modify or cancel my order?",       a: "Orders can be modified or cancelled within 12 hours of placement. Contact us immediately if needed."      },
  { q: "Are your fabrics sustainably sourced?",  a: "Every fabric we use is ethically sourced and tested for sustainability before it reaches our collections." },
];

const INFO = [
  { icon: <Mail size={18} strokeWidth={1.5} />,   label: "Email Us", value: "hello@velour.com",  sub: "We reply within 24 hours" },
  { icon: <Phone size={18} strokeWidth={1.5} />,  label: "Call Us",  value: "+92 300 000 0000",  sub: "Mon–Fri, 9am to 6pm"       },
  { icon: <MapPin size={18} strokeWidth={1.5} />, label: "Visit Us", value: "Lahore, Pakistan",  sub: "By appointment only"       },
];

// Editorial section header — kicker + oversized serif heading, used in place of a generic badge/title pattern
const EditorialHeader = ({ kicker, heading, aside }) => (
  <div className="flex items-end justify-between gap-10 mb-14 flex-wrap">
    <div>
      <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#7A2331]">{kicker}</span>
      <h2 className="font-display text-[40px] md:text-[54px] leading-[1.05] text-black mt-3 font-medium">
        {heading}
      </h2>
    </div>
    {aside && <p className="max-w-xs text-sm text-black/50 leading-relaxed pb-2">{aside}</p>}
  </div>
);

// Order-form style field — numbered label, underline input, no box
const FormField = ({ index, label, ...props }) => (
  <div className="flex flex-col gap-2 border-b border-black/10 pb-3 focus-within:border-[#7A2331] transition-colors duration-300">
    <label className="flex items-baseline gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-black/35">
      <span className="text-[#7A2331]">{index}</span>{label}
    </label>
    <input {...props} className="w-full bg-transparent outline-none text-base text-black placeholder:text-black/25 py-1" />
  </div>
);

const FormArea = ({ index, label, ...props }) => (
  <div className="flex flex-col gap-2 border-b border-black/10 pb-3 focus-within:border-[#7A2331] transition-colors duration-300 flex-1">
    <label className="flex items-baseline gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-black/35">
      <span className="text-[#7A2331]">{index}</span>{label}
    </label>
    <textarea {...props} className="w-full h-full bg-transparent outline-none text-base text-black placeholder:text-black/25 py-1 resize-none" />
  </div>
);

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div>

      <HeroSection
        images={[hero01]}
        badge={{ label: "Contact", text: "Here to help you" }}
        heading={<>Helping you define<br />your personal style</>}
        subtext="Contact us today for refined service designed for our discerning Velour fashion community."
        primaryLabel="Browse Collections"
        secondaryLabel="About us"
        primaryLink="/shops"
        secondaryLink="/about"
        isHero={false}
      />

      {/* Contact Info + Form */}
      <section className="bg-[#FAFAF7] px-28 pt-20 pb-20">

        <EditorialHeader
          kicker="Velour — Get in touch"
          heading={<>Let's start a<br />conversation.</>}
          aside="Questions about an order, a fitting, or a future collection — our studio replies within a day."
        />

        <div className="grid grid-cols-2 gap-10">

          {/* Left — tagged portrait image */}
          <div className="relative min-h-[640px]">
            <div className="absolute inset-0 rounded-[28px] overflow-hidden">
              <img
                src={contactSide}
                alt="Get in touch with Velour"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/0 to-black/5" />
            </div>

            {/* Signature element — a hanging swing tag, like the one stitched into a garment */}
            <div className="absolute -top-3 left-8 flex flex-col items-center z-10">
              <div className="w-px h-3 bg-black/30" />
              <div className="flex items-center gap-2 bg-[#FAFAF7] pl-3 pr-4 py-2 rounded-sm shadow-md border border-black/10">
                <span className="w-2 h-2 rounded-full border border-black/40" />
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/70">
                  VELOUR · Lahore, PK
                </span>
              </div>
            </div>

            {/* Socials */}
            <div className="absolute top-8 right-6 flex flex-col gap-2 z-10">
              {[BsInstagram, BsTwitter, BsFacebook].map((Icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 rounded-full border border-white/30 bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  <Icon size={16} strokeWidth={1.5} />
                </button>
              ))}
            </div>

            {/* Info cards */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3 z-10">
              {INFO.map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/95 backdrop-blur rounded-2xl p-4 border border-black/6">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-mono text-[10px] text-black/30 tracking-widest uppercase">{item.label}</span>
                    <span className="text-sm font-semibold text-black">{item.value}</span>
                    <span className="text-xs text-black/40">{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — order-form style contact form */}
          <div className="bg-white rounded-[28px] p-10 border border-black/6 flex flex-col gap-7">
            <FormField index="01" label="Your name"     name="name"    value={form.name}    onChange={handleChange} placeholder="First & last name" />
            <FormField index="02" label="Email address" name="email"   value={form.email}   onChange={handleChange} placeholder="your@email.com" />
            <FormField index="03" label="Subject"        name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" />
            <FormArea  index="04" label="Message"        name="message" value={form.message} onChange={handleChange} placeholder="Tell us more..." rows={3} />

            <button className="group flex items-center justify-between w-full pt-5 mt-1 border-t border-black/10">
              <span className="font-display text-2xl text-black font-medium">Send message</span>
              <span className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-[#7A2331] transition-colors duration-300">
                <Send size={16} />
              </span>
            </button>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-28 pt-16 pb-20 flex flex-col gap-10">

        <EditorialHeader
          kicker="Frequently asked"
          heading={<>Questions we get<br />asked often.</>}
        />

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="bg-[#FAFAF7] rounded-2xl border border-black/6 overflow-hidden cursor-pointer"
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <div className="flex items-center justify-between px-6 py-4">
                <span className="text-sm font-semibold text-black">{faq.q}</span>
                <span className={`text-[#7A2331] transition-transform duration-300 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
              </div>
              {openFaq === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-black/50 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default Contact;