/**
 * Footer — Figma 2877:22925.
 * The pastel gradient background is a full-bleed layer that stretches to the
 * actual viewport width; foreground content stays pixel-exact inside a
 * centered 1440px canvas on top of it (same pattern as Hero).
 */
export default function Footer() {
  return (
    <footer className="bg-white relative w-full overflow-hidden">
      <img alt="" className="absolute inset-0 h-full w-full object-cover pointer-events-none" src="/assets/images/footer-gradient-bg.png" />

      <div className="relative mx-auto flex gap-[40px] lg:gap-0 lg:h-[632px] max-w-[1440px] flex-col items-center justify-between pb-[24px] pt-[40px] px-[16px] sm:px-[40px]">
        {/* giant background wordmark */}
        <div className="absolute hidden lg:flex gap-[81.842px] items-center left-[167.75px] top-[210px]">
          <div className="relative shrink-0 size-[272.807px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/icons/plucia-logo-xl.svg" />
          </div>
          <div className="flex flex-col items-start relative shrink-0">
            <div className="flex flex-col font-geist font-medium justify-center leading-[0] relative shrink-0 text-[#202020] text-[272.807px] tracking-[-6.8202px] whitespace-nowrap">
              <p className="leading-[381.93px]">Plucia</p>
            </div>
          </div>
        </div>

        {/* top card */}
        <div className="bg-white flex flex-col gap-[48px] lg:gap-[96px] items-start overflow-clip px-[20px] sm:px-[40px] py-[32px] relative rounded-[16px] shrink-0 w-full">
        <div className="flex flex-col md:flex-row gap-[32px] md:gap-[16px] items-start relative shrink-0 w-full">
          <div className="flex flex-col items-start relative shrink-0 w-full md:flex-1 md:max-w-[403px]">
            <div className="flex gap-[11.822px] items-center relative shrink-0">
              <div className="relative shrink-0 size-[39.408px]">
                <img alt="Plucia" className="absolute block inset-0 max-w-none size-full" src="/assets/icons/plucia-logo-lg.svg" />
              </div>
              <div className="flex flex-col items-start relative shrink-0">
                <div className="flex flex-col font-geist font-medium justify-center leading-[0] relative shrink-0 text-[#202020] text-[39.408px] tracking-[-0.9852px] whitespace-nowrap">
                  <p className="leading-[55.171px]">Plucia</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 text-[#1b1819] w-full md:w-[442px]">
            <div className="flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative">
              <p className="font-inter font-medium opacity-60 relative shrink-0 text-[10px] tracking-[0.4px] uppercase w-full">
                Information
              </p>
              <div className="flex flex-col font-inter font-normal gap-[4px] items-start relative shrink-0 text-[16px] w-full">
                <p className="relative shrink-0 w-full">Privacy</p>
                <p className="relative shrink-0 w-full">FAQ</p>
                <p className="relative shrink-0 w-full">Partners</p>
                <p className="relative shrink-0 w-full">Contacts</p>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative">
              <p className="font-inter font-medium opacity-60 relative shrink-0 text-[10px] tracking-[0.4px] uppercase w-full">
                Menu
              </p>
              <div className="flex flex-col font-inter font-normal gap-[4px] items-start relative shrink-0 text-[16px] w-full">
                <p className="relative shrink-0 w-full">For a couple</p>
                <p className="relative shrink-0 w-full">For him</p>
                <p className="relative shrink-0 w-full">For her</p>
              </div>
            </div>
          </div>
          <div className="flex w-full md:w-auto md:flex-[1_0_0] flex-col gap-[16px] items-start md:items-end md:min-w-px relative">
            <button className="bg-[#1b1819] flex items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0 cursor-pointer">
              <p className="font-inter font-semibold leading-[1.4] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
                Request a call
              </p>
            </button>
            <div className="flex flex-col font-inter font-semibold items-end leading-[1.3] not-italic relative shrink-0 text-[#1b1819] text-[12px] whitespace-nowrap">
              <p className="relative shrink-0">+1 (999) 999-99-99</p>
              <p className="relative shrink-0">info@logoipsum.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-[24px] sm:gap-[16px] items-start sm:items-center relative shrink-0 w-full">
          <div className="flex w-full sm:w-auto sm:flex-[1_0_0] gap-[8px] items-center sm:min-w-px relative">
            <a href="#" className="bg-[#1b1819] flex flex-col items-center justify-center relative rounded-[40px] shrink-0 size-[40px]">
              <div className="relative shrink-0 size-[18px]">
                <img alt="Mail" className="absolute block inset-0 max-w-none size-full" src="/assets/icons/mail-01.svg" />
              </div>
            </a>
            <a href="#" className="bg-[#1b1819] flex items-center justify-center relative rounded-[40px] shrink-0 size-[40px]">
              <div className="relative shrink-0 size-[16px]">
                <img alt="LinkedIn" className="absolute block inset-0 max-w-none size-full" src="/assets/icons/linkedin-02.svg" />
              </div>
            </a>
            <a href="#" className="relative shrink-0 size-[40px]">
              <img alt="WhatsApp" className="absolute block inset-0 max-w-none size-full" src="/assets/icons/social-whatsapp.svg" />
            </a>
            <a href="#" className="bg-[#1b1819] flex items-center justify-center relative rounded-[40px] shrink-0 size-[40px]">
              <div className="relative shrink-0 size-[16px]">
                <img alt="Instagram" className="absolute block inset-0 max-w-none size-full" src="/assets/icons/instagram-footer.svg" />
              </div>
            </a>
            <a href="#" className="bg-[#1b1819] flex items-center justify-center relative rounded-[40px] shrink-0 size-[40px]">
              <div className="relative shrink-0 size-[16px]">
                <img alt="X" className="absolute block inset-0 max-w-none size-full" src="/assets/icons/new-twitter.svg" />
              </div>
            </a>
          </div>
          <div className="flex items-start justify-start sm:justify-end relative shrink-0 w-auto sm:w-[442px]">
            <div className="font-inter font-semibold leading-[0] not-italic relative shrink-0 text-[#1b1819] text-[12px] whitespace-nowrap">
              <p className="leading-[1.3] mb-0">1901 Thornridge Cir. Shiloh,</p>
              <p className="leading-[1.3]">Hawaii 81063</p>
            </div>
          </div>
        </div>
      </div>

        {/* bottom bar */}
        <div className="flex font-inter font-normal items-start justify-between leading-[1.4] not-italic relative shrink-0 text-[#202020] text-[10px] w-full whitespace-nowrap">
          <p className="relative shrink-0">© 2026 — Copyright</p>
          <p className="relative shrink-0 text-right">Privacy</p>
        </div>
      </div>
    </footer>
  );
}
