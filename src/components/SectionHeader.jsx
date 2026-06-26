import { Link } from "react-router-dom";

const SectionHeader = ({
  badge,
  icon,
  heading,
  ctaLabel,
  ctaLink,
  ctaOnClick,
}) => {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

      {/* Left */}
      <div className="flex flex-col gap-4">
        {badge && (
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-black/10 bg-white pl-1 pr-3 py-1 shadow-sm">
            {icon && (
              <span className="flex items-center justify-center rounded-full bg-black p-1.5 text-white">
                {icon}
              </span>
            )}
            <span className="font-mono text-xs uppercase tracking-wide text-black">
              {badge}
            </span>
          </span>
        )}
        <h2 className="font-display text-4xl font-medium leading-tight text-black sm:text-5xl">
          {heading}
        </h2>
      </div>

      {/* Right — CTA */}
      {ctaLabel && (
        ctaLink ? (
          <Link
            to={ctaLink}
            className="inline-flex shrink-0 items-center self-end rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            {ctaLabel}
          </Link>
        ) : (
          <button
            onClick={ctaOnClick}
            className="inline-flex shrink-0 items-center self-end rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            {ctaLabel}
          </button>
        )
      )}

    </div>
  );
};

export default SectionHeader;