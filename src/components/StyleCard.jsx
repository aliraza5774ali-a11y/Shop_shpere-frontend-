import { useState } from "react";
import { motion } from "framer-motion";

const StyleCard = ({ card }) => {
  const { style01, style02, title, description, features } = card;
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="bg-white flex-1 rounded-xl overflow-hidden flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image area */}
      <div className="relative h-[260px]  flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute w-[130px] h-[170px] rounded-2xl overflow-hidden border-2 border-white"
          animate={{
            rotate: hovered ? -14 : -10,
            scale: hovered ? 1.05 : 1,
            y: hovered ? -6 : 0,
            x: -50,
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.13)", zIndex: 2 }}
        >
          <img src={style01} alt="" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          className="absolute w-[130px] h-[170px] rounded-2xl overflow-hidden border-2 border-white"
          animate={{
            rotate: hovered ? 14 : 10,
            scale: hovered ? 1.05 : 1,
            y: hovered ? -6 : 0,
            x: 50,
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.13)", zIndex: 1 }}
        >
          <img src={style02} alt="" className="w-full h-full object-cover" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6">
        <h3 className="text-base text-[24px] border-b border-black/10 font-semibold text-black">
          {title}
        </h3>
        <p className="text-[16px] max-w-[380px] text-black/70  leading-relaxed">
          {description}
        </p>
        <div className="flex items-center flex-wrap gap-2">
          {features.map(({ icon: Icon, content }, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-0.5  bg-[#f0f0f0] font-semibold text-black/90 text-[13px] font-medium px-2 py-1 rounded-full"
            >
              <Icon size={12} />
              {content}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StyleCard;
