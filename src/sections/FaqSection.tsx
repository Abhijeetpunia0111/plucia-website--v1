"use client";

import { useState } from "react";

/** "General Question asked by Everyone" — Figma 2877:22869 */

const FAQS = [
  {
    q: "Our team is always here to help you with quick clear and reliable answers wherever needed?",
    a: "Our team is always here to help you with quick clear and reliable answers wherever needed",
  },
  {
    q: "Our team is always here to help you with quick clear and reliable answers wherever needed?",
    a: "Our team is always here to help you with quick clear and reliable answers wherever needed",
  },
  {
    q: "Our team is always here to help you with quick clear and reliable answers wherever needed?",
    a: "Our team is always here to help you with quick clear and reliable answers wherever needed",
  },
  {
    q: "Our team is always here to help you with quick clear and reliable answers wherever needed?",
    a: "Our team is always here to help you with quick clear and reliable answers wherever needed",
  },
];

export default function FaqSection() {
  // Which item is open (single-open accordion). Click an open item to close it.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="flex flex-col lg:flex-row gap-[48px] lg:gap-[32px] items-start lg:justify-between mt-[120px] lg:mt-[212px] mx-auto px-[20px] xl:px-0 relative w-full max-w-[1283px] xl:max-w-[1243px]">
      <div className="flex flex-col gap-[40px] lg:gap-0 lg:h-[609px] items-start lg:justify-between relative w-full lg:flex-1 lg:max-w-[580px]">
        <div className="flex flex-col gap-[32px] items-start relative shrink-0 w-full">
          <div className="flex items-center relative shrink-0">
            <div className="flex flex-col font-urbanist font-semibold justify-center leading-[0] relative shrink-0 text-[#626262] text-[20px] whitespace-nowrap">
              <p className="leading-[24px]">FAQ&rsquo;s</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center relative shrink-0 w-full">
            <div className="flex flex-col font-manrope font-semibold justify-center leading-[0] relative shrink-0 text-[#1d1d1d] text-[clamp(30px,5vw,48px)] tracking-[-0.031em] w-full">
              <p className="leading-[1]">General Question asked by Everyone</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[15px] items-start relative shrink-0 w-full max-w-[454.691px]">
          <div className="flex flex-col font-manrope font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#5c5c5c] text-[18px] tracking-[-0.6px] w-[min-content]">
            <p className="leading-[24px]">Our team is always here to help you with quick clear and reliable answers wherever needed</p>
          </div>
          <button className="group flex items-center overflow-clip px-[24px] py-[12px] relative rounded-[8px] shadow-[0px_0px_0px_0.8px_#161616,0px_6.866px_6.866px_-2.333px_rgba(0,0,0,0.16),0px_13.647px_13.647px_-2.917px_rgba(0,0,0,0.16),0px_30px_30px_-3.5px_rgba(0,0,0,0.08)] shrink-0 cursor-pointer transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0px_0px_0px_0.8px_#161616,0px_10px_10px_-3px_rgba(0,0,0,0.22),0px_18px_18px_-3px_rgba(0,0,0,0.2),0px_36px_34px_-4px_rgba(0,0,0,0.12)]">
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none rounded-[8px]"
              style={{ backgroundImage: "linear-gradient(-5.41419deg, rgb(7, 7, 7) 12.103%, rgb(47, 46, 49) 87.897%)" }}
            />
            {/* light sweep — glides left→right across the button on hover */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-[45%] -translate-x-[160%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[260%]"
            />
            <div className="flex flex-col font-manrope font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
              <p className="leading-[normal]">Contact Sales</p>
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0.8px_0px_0px_rgba(255,255,255,0.16)]" />
          </button>
        </div>
      </div>

      {/* Accordion — one answer open at a time; click an open item to close it. */}
      <div className="flex flex-col gap-[21px] items-start relative w-full lg:flex-1 lg:max-w-[590px]">
        {FAQS.map((faq, i) => {
          const open = openIndex === i;
          return (
            <div key={i} className="bg-[#f2f2f2] overflow-clip relative rounded-[16px] shrink-0 w-full">
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? null : i)}
                className={`flex items-start px-[32px] pt-[32px] text-left w-full cursor-pointer transition-[padding] duration-300 ease-out ${open ? "pb-[13px]" : "pb-[32px]"}`}
              >
                <p className="font-manrope font-bold leading-[normal] text-[#202020] text-[20px] tracking-[-0.6px] w-full">
                  {faq.q}
                </p>
              </button>
              <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <p className="font-manrope font-medium leading-[24px] px-[32px] pb-[32px] text-[#5c5c5c] text-[16px] w-full">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
