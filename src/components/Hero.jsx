import { useActiveBreakpoint } from "../hooks/useActiveBreakpoint";
import imgRight from "/images/hero-right.png";
import imgLeft from "/images/hero-left.png";

function HeroSectionMobile() {
  return (
    <header className="content-stretch flex flex-col items-center mt-[20px] relative shrink-0 w-full" data-name="Hero section">
      <div className="relative w-[65%] aspect-square self-end" data-name="Image right">
        <img alt="Bridal portrait" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRight} />
        <div className="min-h-[inherit] min-w-[inherit] size-full" />
      </div>
      <div className="font-['NATS:Regular',sans-serif] leading-[1.2] not-italic text-center text-black uppercase whitespace-nowrap py-[40px]">
        <h1 className="block font-normal leading-[1.2] m-0 text-[18px] tracking-[0.05rem] whitespace-pre text-center">
          ROTÉM ZIV
        </h1>
      </div>
      <div className="relative h-[250px] w-[50%] self-start" data-name="Image left">
        <img alt="Couple portrait" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLeft} />
        <div className="min-h-[inherit] min-w-[inherit] size-full" />
      </div>
    </header>
  );
}

function HeroSectionTablet() {
  return (
    <header className="content-stretch flex flex-col gap-[8px] items-center justify-center py-[200px] mt-[20px] relative shrink-0 size-full" data-name="Hero section">
      <div className="absolute h-[393px] right-0 top-0 w-[414px]" data-name="Image right">
        <img alt="Bridal portrait" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRight} />
        <div className="min-h-[inherit] min-w-[inherit] size-full" />
      </div>
      <div className="absolute bottom-[-24px] h-[279px] left-0 w-[215.488px]" data-name="Image left">
        <img alt="Couple portrait" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLeft} />
        <div className="min-h-[inherit] min-w-[inherit] size-full" />
      </div>
      <div className="absolute font-['NATS:Regular',sans-serif] leading-[1.2] not-italic shrink-0 text-center text-black uppercase whitespace-nowrap z-[100]" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
        <h1 className="block font-normal leading-[1.2] m-0 text-[20px] tracking-[0.08rem] whitespace-pre text-center">
          ROTÉM ZIV
        </h1>
      </div>
    </header>
  );
}

function HeroSectionDesktop() {
  return (
    <header className="content-stretch flex flex-col gap-[8px] items-center justify-center py-[300px] mt-[20px] relative shrink-0 size-full" data-name="Hero section">
      <div className="absolute h-[498px] right-0 top-[14px] w-[524.597px]" data-name="Image right">
        <img alt="Bridal portrait" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRight} />
        <div className="min-h-[inherit] min-w-[inherit] size-full" />
      </div>
      <div className="absolute bottom-[-24px] h-[369px] left-0 w-[285px]" data-name="Image left">
        <img alt="Couple portrait" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLeft} />
        <div className="min-h-[inherit] min-w-[inherit] size-full" />
      </div>
      <div className="absolute font-['NATS:Regular',sans-serif] leading-[1.2] not-italic shrink-0 text-center text-black uppercase whitespace-nowrap z-[100]" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
        <h1 className="block font-normal leading-[1.2] m-0 text-[22px] tracking-[0.1rem] whitespace-pre text-center">
          ROTÉM ZIV
        </h1>
      </div>
    </header>
  );
}

function Hero() {
  const { width } = useActiveBreakpoint();
  if (width < 800) {
    return <HeroSectionMobile />;
  }
  if (width < 1280) {
    return <HeroSectionTablet />;
  }
  return <HeroSectionDesktop />;
}

export default Hero;
