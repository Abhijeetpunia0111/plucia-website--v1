/**
 * "Everything Your Team Needs in One Platform" — Figma 2877:21244.
 * The left card is a "svg motion section" (connected lines + channel icons);
 * light-pulse animation gets layered on later — see design.md.
 */
export default function PlatformSection() {
  return (
    <section className="flex flex-col lg:flex-row gap-[48px] lg:gap-[60px] xl:gap-[110px] items-center mt-[100px] lg:mt-[175px] mx-auto px-[20px] xl:px-0 relative w-full max-w-[1093px] xl:max-w-[1053px]">
      <div
        data-motion-section="platform"
        className="border-2 border-solid border-white flex h-[354px] items-center justify-center px-[76.376px] py-[30.55px] relative rounded-[18px] shrink-0 w-[385px] max-w-full"
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[18px] size-full" src="/assets/images/platform-motion-bg.png" />
        <div className="h-[197.518px] relative shrink-0 w-[291.131px]">
          {/* connected lines */}
          <div className="absolute h-[59.485px] left-[23.91px] top-[109.74px] w-[122.819px]">
            <div className="absolute inset-[0_-0.39%]">
              <img alt="" className="block max-w-none size-full" src="/assets/icons/platform-lines-left.svg" />
            </div>
          </div>
          <div className="absolute flex h-[59.485px] items-center justify-center left-[151.46px] top-[109.74px] w-[122.819px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[59.485px] relative w-[122.819px]">
                <div className="absolute inset-[0_-0.39%]">
                  <img alt="" className="block max-w-none size-full" src="/assets/icons/platform-lines-right.svg" />
                </div>
              </div>
            </div>
          </div>
          {/* channel icon bubbles */}
          {[
            { left: "5.09px", icon: "/assets/icons/channel-slack.svg", inset: true },
            { left: "52.3px", icon: "/assets/icons/channel-gmail.svg" },
            { left: "99.52px", icon: "/assets/icons/channel-whatsapp.svg" },
            { left: "160.04px", icon: "/assets/icons/channel-gmail.svg" },
            { left: "207.26px", icon: "/assets/icons/channel-messenger.svg" },
            { left: "254.47px", icon: "/assets/icons/channel-instagram.svg" },
          ].map((b, i) => (
            <div
              key={i}
              className="absolute bg-[#f4f4f4] border-[1.528px] border-solid border-white drop-shadow-[0px_1.528px_4.583px_rgba(0,0,0,0.1)] flex items-center justify-center p-[1.528px] rounded-[763.758px] size-[36.66px] top-[160.86px]"
              style={{ left: b.left }}
            >
              <div className="relative shrink-0 size-[18.33px]">
                {b.inset ? (
                  <div className="overflow-clip relative rounded-[inherit] size-full">
                    <div className="absolute inset-[15.02%_0.05%_15.05%_0]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={b.icon} />
                    </div>
                  </div>
                ) : (
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={b.icon} />
                )}
              </div>
            </div>
          ))}
          {/* mini prompt card */}
          <div className="absolute bg-[#f1f1f1] border-[1.528px] border-solid border-white flex flex-col gap-[5.872px] h-[86px] items-start left-[17.14px] overflow-clip p-[5.872px] rounded-[11.743px] shadow-[0px_2.936px_8.807px_0px_rgba(0,0,0,0.15)] top-[43.64px] w-[262px]">
            <div className="bg-[#fcfcfc] flex flex-[1_0_0] items-start min-h-px overflow-clip p-[5.872px] relative rounded-[7.046px] w-full">
              <p className="flex-[1_0_0] font-inter font-normal h-full leading-[normal] min-w-px relative text-[8.22px] text-black">
                Handle my WhatsApp leads for me. Just talk to them like I would, answer their questions, and help move them toward a meeting or a sale.
              </p>
            </div>
            <div className="flex items-start justify-between relative shrink-0 w-full">
              <div className="flex gap-[9.395px] items-start relative shrink-0">
                <div className="bg-white flex items-center justify-center overflow-clip p-[5.872px] relative rounded-[14.092px] shrink-0">
                  <div className="overflow-clip relative shrink-0 size-[8.22px]">
                    <div className="absolute inset-[2.66%_0_2.67%_0]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/icons/clip.svg" />
                    </div>
                  </div>
                </div>
                <div className="bg-white flex gap-[5.872px] items-center justify-center overflow-clip px-[5.872px] py-[3.819px] relative rounded-[14.092px] self-stretch shrink-0">
                  <div className="flex gap-[2.936px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[11.456px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/icons/whatsapp-mini.svg" />
                    </div>
                    <p className="font-worksans font-semibold leading-[normal] relative shrink-0 text-[7.046px] text-black whitespace-nowrap">
                      WhatsApp
                    </p>
                  </div>
                  <svg className="shrink-0" width="7" height="7" viewBox="0 0 10 10" fill="none">
                    <path d="M2 3.5L5 6.5L8 3.5" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="flex items-start relative shrink-0">
                <div className="bg-[#202020] flex items-center justify-center overflow-clip p-[5.872px] relative rounded-[14.092px] shrink-0">
                  <div className="relative shrink-0 size-[8.22px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/icons/arrow-up-mini.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[20px] lg:gap-[28px] items-start leading-[normal] relative w-full lg:min-w-0 max-w-[558px]">
        <p className="font-manrope font-semibold relative shrink-0 text-[clamp(32px,5vw,50px)] text-black tracking-[-0.05em] w-full">
          Everything Your Team Needs in One Platform
        </p>
        <p className="font-inter font-normal relative shrink-0 text-[17px] sm:text-[21px] text-[#202020] tracking-[-0.05em] w-full">
          Type a simple instruction in natural language, and Plucia instantly understands your intent, connects every relevant channel, gathers customer context, and begins executing the work—just like an experienced business operator.
        </p>
      </div>
    </section>
  );
}
