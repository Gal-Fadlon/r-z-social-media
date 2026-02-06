import { useActiveBreakpoint } from "../hooks/useActiveBreakpoint";
import imgRotem from "/public/Rotem.png";
import Header from "./Header";
import Footer from "./Footer";

/* ── Title Section ── */

function TitleMobile() {
  return (
    <header className="content-stretch flex flex-col items-center justify-center py-[300px] relative size-full" data-name="Header">
      <h1 className="block font-['NATS:Regular',sans-serif] leading-[0.95] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[-0.48px] uppercase">Rotém Ziv</h1>
    </header>
  );
}

function TitleTablet() {
  return (
    <header className="content-stretch flex flex-col items-center justify-center py-[300px] relative size-full" data-name="Header">
      <h1 className="block font-['NATS:Regular',sans-serif] leading-[0.95] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[-0.48px] uppercase">Rotém Ziv</h1>
    </header>
  );
}

function TitleDesktop() {
  return (
    <header className="content-stretch flex flex-col items-center justify-center py-[250px] relative size-full" data-name="Header">
      <h1 className="block font-['NATS:Regular',sans-serif] leading-[0.95] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[-0.48px] uppercase">Rotém Ziv</h1>
    </header>
  );
}

/* ── Main Content ── */

function TextMobile() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['NATS:Regular',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[-0.36px] w-full whitespace-pre-wrap">{`Rotém Ziv had always possessed an innate sense of style, but her journey to becoming Tel Aviv's latest fashion sensation was anything but effortless. Born in a modest suburb, Rotém spent her childhood sketching designs in the corners of her school notebooks and stitching her own outfits from leftover fabrics her mother collected. After enrolling in a prestigious design academy, her talent quickly caught the eye of influential mentors. Rotém's breakthrough came during Tel Aviv Fashion Week when she unveiled her debut collection, a masterful blend of flowing silks, bold metallic accents, and understated details that seemed to whisper elegance. The fashion world was captivated not only by her designs but also by Rotém herself—a striking figure who carried herself with effortless grace, turning every sidewalk into her personal runway.`}</p>
    </div>
  );
}

function ImageAndBioMobile() {
  return (
    <div className="content-stretch flex flex-col gap-[118px] items-start pb-[150px] relative shrink-0 w-full" data-name="Image and bio">
      <div className="h-[300px] relative shrink-0 w-full" data-name="Image">
        <img alt="Portrait of Rotém Ziv" className="absolute inset-0 max-w-none object-cover object-top pointer-events-none size-full" src={imgRotem} />
      </div>
      <TextMobile />
    </div>
  );
}

function ContactCtaMobile() {
  return (
    <div className="relative shrink-0 w-full" data-name="Contact CTA">
      <div aria-hidden="true" className="absolute border-[#505050] border-solid border-t inset-x-[20%] top-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[40px] py-[300px] relative w-full">
          <h2 className="block font-['NATS:Regular',sans-serif] leading-[0.95] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[-0.48px] uppercase w-full whitespace-pre-wrap">Rotém is available for select bookings. For availability and rates, please email rotem@email.com</h2>
        </div>
      </div>
    </div>
  );
}

function MainContentMobile() {
  return (
    <main className="content-stretch flex flex-col items-start relative size-full" data-name="Main" tabIndex="-1">
      <ImageAndBioMobile />
      <ContactCtaMobile />
    </main>
  );
}

function TextTablet() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Text">
      <p className="flex-[1_0_0] font-['NATS:Regular',sans-serif] leading-[1.1] min-h-px min-w-px not-italic relative text-[18px] text-center text-white tracking-[-0.36px] whitespace-pre-wrap">{`Rotém Ziv had always possessed an innate sense of style, but her journey to becoming Tel Aviv's latest fashion sensation was anything but effortless. Born in a modest suburb, Rotém spent her childhood sketching designs in the corners of her school notebooks and stitching her own outfits from leftover fabrics her mother collected. After enrolling in a prestigious design academy, her talent quickly caught the eye of influential mentors. Rotém's breakthrough came during Tel Aviv Fashion Week when she unveiled her debut collection, a masterful blend of flowing silks, bold metallic accents, and understated details that seemed to whisper elegance. The fashion world was captivated not only by her designs but also by Rotém herself—a striking figure who carried herself with effortless grace, turning every sidewalk into her personal runway.`}</p>
    </div>
  );
}

function ImageAndBioTablet() {
  return (
    <div className="relative shrink-0 w-full" data-name="Image and bio">
      <div className="content-stretch flex flex-col gap-[118px] items-start pb-[150px] px-[100px] relative w-full">
        <div className="h-[400px] relative shrink-0 w-full" data-name="Image">
          <img alt="Portrait of Rotém Ziv" className="absolute inset-0 max-w-none object-cover object-top pointer-events-none size-full" src={imgRotem} />
        </div>
        <TextTablet />
      </div>
    </div>
  );
}

function ContactCtaTablet() {
  return (
    <div className="relative shrink-0 w-full" data-name="Contact CTA">
      <div aria-hidden="true" className="absolute border-[#505050] border-solid border-t inset-x-[20%] top-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[80px] py-[300px] relative w-full">
          <h2 className="block font-['NATS:Regular',sans-serif] leading-[0.95] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[-0.48px] uppercase w-full whitespace-pre-wrap">Rotém is available for select bookings. For availability and rates, please email rotem@email.com</h2>
        </div>
      </div>
    </div>
  );
}

function MainContentTablet() {
  return (
    <main className="content-stretch flex flex-col items-start relative size-full" data-name="Main" tabIndex="-1">
      <ImageAndBioTablet />
      <ContactCtaTablet />
    </main>
  );
}

function TextDesktop() {
  return (
    <div className="relative" data-name="Text">
      <p className="font-['NATS:Regular',sans-serif] leading-[20.7px] not-italic relative text-[18px] text-left text-white tracking-[-0.0648px] whitespace-pre-wrap w-[361px] break-words">{`Rotém Ziv had always possessed an innate sense of style, but her journey to becoming Tel Aviv's latest fashion sensation was anything but effortless. Born in a modest suburb, Rotém spent her childhood sketching designs in the corners of her school notebooks and stitching her own outfits from leftover fabrics her mother collected. After enrolling in a prestigious design academy, her talent quickly caught the eye of influential mentors. Rotém's breakthrough came during Tel Aviv Fashion Week when she unveiled her debut collection, a masterful blend of flowing silks, bold metallic accents, and understated details that seemed to whisper elegance. The fashion world was captivated not only by her designs but also by Rotém herself—a striking figure who carried herself with effortless grace, turning every sidewalk into her personal runway.`}</p>
    </div>
  );
}

function ImageAndBioDesktop() {
  return (
    <div className="relative shrink-0 w-full" data-name="Image and bio">
      <div className="content-stretch flex gap-[60px] items-start justify-center pb-[150px] relative w-full">
        <div className="h-[420px] w-[420px] shrink-0 relative" data-name="Image">
          <img alt="Portrait of Rotém Ziv" className="absolute inset-0 max-w-none object-cover object-top pointer-events-none size-full" src={imgRotem} />
        </div>
        <TextDesktop />
      </div>
    </div>
  );
}

function ContactCtaDesktop() {
  return (
    <div className="relative shrink-0 w-full" data-name="Contact CTA">
      <div aria-hidden="true" className="absolute border-[#505050] border-solid border-t inset-x-[20%] top-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[80px] py-[300px] relative w-full">
          <h2 className="block flex-[1_0_0] font-['NATS:Regular',sans-serif] leading-[0.8] min-h-px min-w-px not-italic relative text-[16px] text-center text-white tracking-[-0.32px] uppercase whitespace-pre-wrap">Rotém is available for select bookings. For availability and rates, please email rotem@email.com</h2>
        </div>
      </div>
    </div>
  );
}

function MainContentDesktop() {
  return (
    <main className="content-stretch flex flex-col items-start relative size-full" data-name="Main" tabIndex="-1">
      <ImageAndBioDesktop />
      <ContactCtaDesktop />
    </main>
  );
}

/* ── About Page ── */

function AboutMobile() {
  return (
    <div className="min-h-screen flex flex-col bg-black px-[20px]">
      <Header dark />
      <TitleMobile />
      <MainContentMobile />
      <Footer variant="light" />
    </div>
  );
}

function AboutTablet() {
  return (
    <div className="min-h-screen flex flex-col bg-black px-[20px]">
      <Header dark />
      <TitleTablet />
      <MainContentTablet />
      <Footer variant="light" />
    </div>
  );
}

function AboutDesktop() {
  return (
    <div className="min-h-screen flex flex-col bg-black px-[20px]">
      <Header dark />
      <TitleDesktop />
      <MainContentDesktop />
      <Footer variant="light" />
    </div>
  );
}

function About() {
  const { width } = useActiveBreakpoint();
  if (width < 800) {
    return <AboutMobile />;
  }
  if (width < 1280) {
    return <AboutTablet />;
  }
  return <AboutDesktop />;
}

export default About;
