import AvatarGroup from "@/components/AvatarGroup";
import HeroComposer from "@/components/HeroComposer";
import TryYourselfLabel from "@/components/TryYourselfLabel";
import DashboardShowcase from "@/components/DashboardShowcase";

/**
 * Hero — Figma "Background" (2877:21184) + headline + dashboard image.
 * The pastel gradient backdrop is the "svg motion section" frame (light-pulse
 * animation to be added later — see design.md).
 *
 * The backdrop is a full-bleed layer that stretches to the actual viewport
 * width. The foreground content flows inside a centered, padded canvas that
 * matches the Figma 1440px frame on desktop and reflows fluidly below it.
 *
 * The navbar itself is rendered as a sticky <header> one level up (HomePage);
 * this section is pulled up underneath it with a negative top margin so the
 * gradient backdrop keeps sitting behind the floating navbar card.
 */
export default function Hero() {
  return (
    <section className="relative w-full overflow-clip -mt-[82px] sm:-mt-[94px]">
      {/* Full-bleed background canvas — stretches with the viewport */}
      <div className="absolute inset-x-[8px] sm:inset-x-[14.5px] top-[8px] sm:top-[13.6px] h-[640px] sm:h-[780px] lg:h-[942px] overflow-clip rounded-[24px] bg-[#eaeaea]">
        <img
          data-motion-section="hero"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-80 pointer-events-none"
          src="/assets/images/hero-motion-bg.png"
        />
      </div>

      {/* Content canvas (matches the Figma 1440px frame on desktop).
          Top padding clears the sticky navbar that floats above this section. */}
      <div className="relative mx-auto w-full max-w-[1440px] px-[20px] sm:px-[48px] xl:px-[152px] pt-[150px] sm:pt-[178px] lg:pt-[clamp(150px,17vh,218px)]">
        {/* Headline */}
        <div className="flex flex-col gap-[24px] items-center mx-auto w-full max-w-[725px]">
          <div className="flex flex-col gap-[4px] items-center relative shrink-0 w-full">
            <AvatarGroup />
            <p className="font-manrope font-semibold leading-[normal] relative shrink-0 text-[clamp(34px,6vw,50px)] text-black text-center tracking-[-0.05em] w-full">
              Meet Your AI Business Operator.
            </p>
          </div>
          <div className="font-inter font-normal leading-[0] relative shrink-0 text-[#202020] text-[16px] sm:text-[18px] text-center tracking-[-0.05em] w-full max-w-[544px]">
            <p className="leading-[normal] mb-0">Understands buyer intent, detects opportunities, engages.</p>
            <p className="leading-[normal]">and your sales pipeline keeps moving.</p>
          </div>
        </div>

        {/* prompt input field + "Try Yourself" handwriting label.
            max-w is 30px wider than the composer's resting 553px so it has room
            to grow on focus (see HeroComposer focus-within:max-w). */}
        <div className="relative z-20 mx-auto mt-[56px] lg:mt-[clamp(48px,7vh,84px)] w-full max-w-[583px]">
          <HeroComposer />
          <TryYourselfLabel />
        </div>

        {/* Dashboard screenshot — scroll-linked pan/zoom-in */}
        <DashboardShowcase />

        {/* Caption under the dashboard */}
        <div className="font-inter font-normal leading-[0] mx-auto mt-[40px] lg:mt-[68px] pb-[8px] text-[#202020] text-[16px] sm:text-[18px] text-center tracking-[-0.05em] w-full max-w-[544px]">
          <p className="leading-[normal] mb-0">Understands buyer intent, detects opportunities, engages.</p>
          <p className="leading-[normal]">and your sales pipeline keeps moving.</p>
        </div>
      </div>
    </section>
  );
}
