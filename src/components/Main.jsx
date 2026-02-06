import svgPaths from "./svg-paths";
const gridImages = Array.from({ length: 21 }, (_, i) => `/images/grid-${String(i + 1).padStart(2, '0')}.png`);
import { useActiveBreakpoint } from "../hooks/useActiveBreakpoint";

function HeaderMobile() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center pt-[132px] pb-[100px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#505050] border-solid border-t-[0.5px] top-[45px] left-0 right-0 bottom-0 pointer-events-none" />
      <h2 className="block font-['NATS:Regular',sans-serif] leading-[0.8] min-w-full not-italic relative shrink-0 text-[16px] text-black text-center tracking-[-0.32px] uppercase w-[min-content] whitespace-pre-wrap">
        21 PROJECTS
        <br aria-hidden="true" />
        DISCOVER MORE
      </h2>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="scale-y-100 flex-none">
          <div className="h-[6px] relative w-[8px]">
            <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.9282 4.5">
                <path d={svgPaths.p1709db80} fill="var(--fill-0, #505050)" id="Down" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DiscoverMoreMobile() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Discover more">
      <HeaderMobile />
    </div>
  );
}

function ImagesMobile() {
  return (
    <div className="content-center cursor-pointer flex flex-wrap gap-[16px_8px] items-center justify-center pb-[10px] relative shrink-0 w-full" data-name="Images">
      {Array.from({ length: 21 }, (_, i) => (
        <a key={i} className="block min-h-[140px] min-w-[140px] relative shrink-0 size-[158.857px]" data-name={`Image ${String(i + 1).padStart(2, '0')}`} href="https://www.instagram.com/rz.social.media/" target="_blank" rel="noopener noreferrer">
          <img alt={`Click for more details on project ${i + 1} of 21`} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={gridImages[i]} />
          <div className="min-h-[inherit] min-w-[inherit] size-full" />
        </a>
      ))}
    </div>
  );
}

function MainMobile() {
  return (
    <main className="content-stretch flex flex-col gap-[0px] items-start mt-[8px] relative size-full" data-name="Main" tabIndex="-1">
      <DiscoverMoreMobile />
      <ImagesMobile />
    </main>
  );
}

function HeaderTablet() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center pt-[132px] pb-[100px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#505050] border-solid border-t-[0.5px] top-[45px] left-0 right-0 bottom-0 pointer-events-none" />
      <h2 className="block font-['NATS:Regular',sans-serif] leading-[0.8] min-w-full not-italic relative shrink-0 text-[16px] text-black text-center tracking-[-0.32px] uppercase w-[min-content] whitespace-pre-wrap">
        21 PROJECTS
        <br aria-hidden="true" />
        DISCOVER MORE
      </h2>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="scale-y-100 flex-none">
          <div className="h-[6px] relative w-[8px]" data-name="Down">
            <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.9282 4.5">
                <path d={svgPaths.p1709db80} fill="var(--fill-0, #505050)" id="Down" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DiscoverMoreTablet() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Discover more">
      <HeaderTablet />
    </div>
  );
}

function ImagesTablet() {
  return (
    <div className="content-center cursor-pointer flex flex-wrap gap-[16px_8px] items-center justify-center pb-[10px] relative shrink-0 w-full" data-name="Images">
      {Array.from({ length: 21 }, (_, i) => (
        <a key={i} className="block min-h-[140px] min-w-[140px] relative shrink-0 size-[158.857px]" data-name={`Image ${String(i + 1).padStart(2, '0')}`} href="https://www.instagram.com/rz.social.media/" target="_blank" rel="noopener noreferrer">
          <img alt={`Click for more details on project ${i + 1} of 21`} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={gridImages[i]} />
          <div className="min-h-[inherit] min-w-[inherit] size-full" />
        </a>
      ))}
    </div>
  );
}

function MainTablet() {
  return (
    <main className="content-stretch flex flex-col gap-[0px] items-start mt-[8px] relative size-full" data-name="Main" tabIndex="-1">
      <DiscoverMoreTablet />
      <ImagesTablet />
    </main>
  );
}

function HeaderDesktop() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center pt-[132px] pb-[100px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#505050] border-solid border-t-[0.5px] top-[45px] left-0 right-0 bottom-0 pointer-events-none" />
      <h2 className="block font-['NATS:Regular',sans-serif] leading-[0.8] min-w-full not-italic relative shrink-0 text-[16px] text-black text-center tracking-[-0.32px] uppercase w-[min-content] whitespace-pre-wrap">
        21 PROJECTS
        <br aria-hidden="true" />
        DISCOVER MORE
      </h2>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="scale-y-100 flex-none">
          <div className="h-[6px] relative w-[7px]">
            <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.06218 4.5">
                <path d={svgPaths.p31857480} fill="var(--fill-0, #505050)" id="Polygon 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DiscoverMoreDesktop() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Discover more">
      <HeaderDesktop />
    </div>
  );
}

function ImagesDesktop() {
  return (
    <div className="content-center cursor-pointer flex flex-wrap gap-[16px_8px] items-center justify-center pb-[10px] relative shrink-0 w-full" data-name="Images">
      {Array.from({ length: 21 }, (_, i) => (
        <a key={i} className="block min-h-[140px] min-w-[140px] relative shrink-0 size-[158.857px]" data-name={`Image ${String(i + 1).padStart(2, '0')}`} href="https://www.instagram.com/rz.social.media/" target="_blank" rel="noopener noreferrer">
          <img alt={`Click for more details on project ${i + 1} of 21`} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={gridImages[i]} />
          <div className="min-h-[inherit] min-w-[inherit] size-full" />
        </a>
      ))}
    </div>
  );
}

function MainDesktop() {
  return (
    <main className="content-stretch flex flex-col gap-[0px] items-start mt-[8px] relative size-full" data-name="Main" tabIndex="-1">
      <DiscoverMoreDesktop />
      <ImagesDesktop />
    </main>
  );
}

function Main() {
  const { width } = useActiveBreakpoint();
  if (width < 800) {
    return <MainMobile />;
  }
  if (width < 1280) {
    return <MainTablet />;
  }
  return <MainDesktop />;
}

export default Main;
