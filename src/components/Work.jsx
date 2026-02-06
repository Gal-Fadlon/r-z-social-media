import imgWork01 from "/images/work-01.png";
import imgWork02 from "/images/work-02.png";
import imgWork03 from "/images/work-03.png";
import imgWork04 from "/images/work-04.png";
import imgWork05 from "/images/work-05.png";
import imgWork06 from "/images/work-06.png";
import imgWork07 from "/images/work-07.png";
import imgWork08 from "/images/work-08.png";
import imgWork09 from "/images/work-09.png";
import { useActiveBreakpoint } from "../hooks/useActiveBreakpoint";
import { useRef, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function useScrollReveal() {
  const ref = useRef();

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const children = container.children;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });
    for (const child of children) {
      child.classList.add('fade-in-section');
      observer.observe(child);
    }
    return () => observer.disconnect();
  }, []);

  return ref;
}

/* ── Title ── */

function TitleMobile() {
  return (
    <header className="content-stretch flex flex-col items-center justify-center py-[250px] relative size-full" data-name="Header">
      <h1 className="block font-['NATS:Regular',sans-serif] leading-[0.95] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.48px] uppercase">Rotém Ziv</h1>
    </header>
  );
}

function TitleDesktop() {
  return (
    <header className="content-stretch flex flex-col items-center justify-center py-[250px] relative size-full" data-name="Header">
      <h1 className="block font-['NATS:Regular',sans-serif] leading-[0.95] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.48px] uppercase">Rotém Ziv</h1>
    </header>
  );
}

/* ── Mobile Project Items ── */

function TextContainerMobile() {
  return (
    <section className="content-stretch flex flex-col font-['NATS:Regular',sans-serif] items-end leading-[0.8] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.32px] uppercase w-full whitespace-pre-wrap" data-name="Text container">
      <p className="relative shrink-0 w-full">01</p>
      <div className="relative shrink-0 w-full">
        <p className="mb-0">{`Jacquemus `}</p>
        <p>2025 Spring/Summer</p>
      </div>
    </section>
  );
}

function ProjectItem01Mobile() {
  return (
    <section aria-label="Rotém Ziv project 1" className="content-stretch flex flex-col gap-[50px] items-start pb-[90px] relative shrink-0 w-full" data-name="Project item 01">
      <div className="aspect-[572/543] relative shrink-0 w-full" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Jacquemus project" className="absolute h-[160.12%] left-[-0.51%] max-w-none top-[-52.28%] w-[100.68%]" src={imgWork01} />
        </div>
      </div>
      <TextContainerMobile />
    </section>
  );
}

function TextContainerMobile1() {
  return (
    <section className="content-stretch flex flex-col font-['NATS:Regular',sans-serif] items-end leading-[0.8] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.32px] uppercase w-full whitespace-pre-wrap" data-name="Text container">
      <p className="relative shrink-0 w-full">02</p>
      <div className="relative shrink-0 w-full">
        <p className="mb-0">acne studios</p>
        <p>2024 autumn/fall</p>
      </div>
    </section>
  );
}

function ProjectItem02Mobile() {
  return (
    <section aria-label="Rotém Ziv project 2" className="content-stretch flex flex-col gap-[50px] items-start pb-[90px] relative shrink-0 w-full" data-name="Project item 02">
      <div className="h-[487.681px] relative shrink-0 w-full" data-name="Image">
        <img alt="Acne Studios project" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWork02} />
      </div>
      <TextContainerMobile1 />
    </section>
  );
}

function TextContainerMobile2() {
  return (
    <section className="content-stretch flex flex-col font-['NATS:Regular',sans-serif] items-end leading-[0.8] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.32px] uppercase w-full whitespace-pre-wrap" data-name="Text container">
      <p className="relative shrink-0 w-full">03</p>
      <div className="relative shrink-0 w-full">
        <p className="mb-0">{`celine `}</p>
        <p>2022 Spring/Summer</p>
      </div>
    </section>
  );
}

function ProjectItem10Mobile() {
  return (
    <section aria-label="Rotém Ziv project 3" className="content-stretch flex flex-col gap-[50px] items-start pb-[90px] relative shrink-0 w-full" data-name="Project item 10">
      <div className="h-[487.681px] relative shrink-0 w-full" data-name="Image">
        <img alt="Celine project" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWork03} />
      </div>
      <TextContainerMobile2 />
    </section>
  );
}

function TextContainerMobile3() {
  return (
    <section className="content-stretch flex font-['NATS:Regular',sans-serif] items-start justify-between leading-[0.8] not-italic pb-[90px] relative shrink-0 text-[16px] text-black tracking-[-0.32px] uppercase w-full" data-name="Text container">
      <p className="relative shrink-0">04</p>
      <p className="relative shrink-0 text-center">our legacy</p>
      <p className="relative shrink-0 text-right">2022 spring</p>
    </section>
  );
}

function ProjectItem04Mobile() {
  return (
    <section aria-label="Rotém Ziv project 4" className="content-stretch flex flex-col gap-[50px] items-start pb-[90px] relative shrink-0 w-full" data-name="Project item 04">
      <div className="h-[543px] relative shrink-0 w-full" data-name="Image">
        <img alt="Our Legacy project" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWork04} />
      </div>
      <TextContainerMobile3 />
    </section>
  );
}

function TextContainerMobile4() {
  return (
    <section className="content-stretch flex flex-col font-['NATS:Regular',sans-serif] items-end leading-[0.8] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.32px] uppercase w-full whitespace-pre-wrap" data-name="Text container">
      <p className="relative shrink-0 w-full">05</p>
      <div className="relative shrink-0 w-full">
        <p className="mb-0">our legacy</p>
        <p>2025 autumn fall</p>
      </div>
    </section>
  );
}

function ProjectItem05Mobile() {
  return (
    <section aria-label="Rotém Ziv project 5" className="content-stretch flex flex-col gap-[50px] items-start pb-[90px] relative shrink-0 w-full" data-name="Project item 05">
      <div className="aspect-[570/543] relative shrink-0 w-full" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Our Legacy project 2" className="absolute h-[158.48%] left-0 max-w-none top-[-37.91%] w-full" src={imgWork05} />
        </div>
      </div>
      <TextContainerMobile4 />
    </section>
  );
}

function TextContainerMobile5() {
  return (
    <section className="content-stretch flex flex-col font-['NATS:Regular',sans-serif] items-end leading-[0.8] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.32px] uppercase w-full whitespace-pre-wrap" data-name="Text container">
      <p className="relative shrink-0 w-full">06</p>
      <div className="relative shrink-0 w-full">
        <p className="mb-0">the row</p>
        <p>2023 accessories</p>
      </div>
    </section>
  );
}

function ProjectItem06Mobile() {
  return (
    <section aria-label="Rotém Ziv project 6" className="content-stretch flex flex-col gap-[50px] items-start pb-[90px] relative shrink-0 w-full" data-name="Project item 06">
      <div className="h-[487.681px] relative shrink-0 w-full" data-name="Image">
        <img alt="The Row project" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWork06} />
      </div>
      <TextContainerMobile5 />
    </section>
  );
}

function ImageMobile() {
  return (
    <div className="h-[543px] relative shrink-0 w-full" data-name="Image">
      <img alt="Burberry project" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWork07} />
    </div>
  );
}

function TextContainerMobile6() {
  return (
    <section className="content-stretch flex font-['NATS:Regular',sans-serif] items-start justify-between leading-[0.8] not-italic pb-[90px] relative shrink-0 text-[16px] text-black tracking-[-0.32px] uppercase w-full" data-name="Text container">
      <p className="relative shrink-0">07</p>
      <p className="relative shrink-0 text-center">burberry</p>
      <p className="relative shrink-0 text-right">2022 fall</p>
    </section>
  );
}

function ProjectItem07Mobile() {
  return (
    <section aria-label="Rotém Ziv project 7" className="content-stretch flex flex-col gap-[50px] items-start pb-[90px] relative shrink-0 w-full" data-name="Project item 07">
      <ImageMobile />
      <TextContainerMobile6 />
    </section>
  );
}

function TextContainerMobile7() {
  return (
    <section className="content-stretch flex flex-col font-['NATS:Regular',sans-serif] items-end leading-[0.8] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.32px] uppercase w-full whitespace-pre-wrap" data-name="Text container">
      <p className="relative shrink-0 w-full">08</p>
      <div className="relative shrink-0 w-full">
        <p className="mb-0">jilsander</p>
        <p>2021 autumn/fall</p>
      </div>
    </section>
  );
}

function ProjectItem08Mobile() {
  return (
    <section aria-label="Rotém Ziv project 8" className="content-stretch flex flex-col gap-[50px] items-center pb-[90px] relative shrink-0 w-full" data-name="Project item 08">
      <div className="h-[543px] relative shrink-0 w-full" data-name="Image">
        <img alt="Jil Sander project" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWork08} />
      </div>
      <TextContainerMobile7 />
    </section>
  );
}

function TextContainerMobile8() {
  return (
    <section className="content-stretch flex flex-col font-['NATS:Regular',sans-serif] items-end leading-[0.8] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.32px] uppercase w-full whitespace-pre-wrap" data-name="Text container">
      <p className="relative shrink-0 w-full">09</p>
      <div className="relative shrink-0 w-full">
        <p className="mb-0">gucci</p>
        <p>2022 Spring/Summer</p>
      </div>
    </section>
  );
}

function ProjectItem09Mobile() {
  return (
    <section aria-label="Rotém Ziv project 9" className="content-stretch flex flex-col gap-[50px] items-start pb-[90px] relative shrink-0 w-full" data-name="Project item 09">
      <div className="aspect-[414/543] relative shrink-0 w-full" data-name="Image">
        <img alt="Gucci project" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWork09} />
      </div>
      <TextContainerMobile8 />
    </section>
  );
}

function MainMobile() {
  const mainRef = useScrollReveal();
  return (
    <main ref={mainRef} className="content-stretch flex flex-col items-start relative size-full" data-name="Main" tabIndex="-1">
      <ProjectItem01Mobile />
      <ProjectItem02Mobile />
      <ProjectItem10Mobile />
      <ProjectItem04Mobile />
      <ProjectItem05Mobile />
      <ProjectItem06Mobile />
      <ProjectItem07Mobile />
      <ProjectItem08Mobile />
      <ProjectItem09Mobile />
    </main>
  );
}

/* ── Desktop Project Items ── */

function TextContainerDesktop() {
  return (
    <section className="content-stretch flex flex-[1_0_0] flex-col font-['NATS:Regular',sans-serif] h-[543px] items-end justify-between leading-[0.8] min-h-px min-w-px not-italic relative text-[16px] text-black tracking-[-0.32px] uppercase whitespace-pre-wrap" data-name="Text container">
      <p className="relative shrink-0 w-full">01</p>
      <div className="relative shrink-0 w-full">
        <p className="mb-0">{`Jacquemus `}</p>
        <p>2025 Spring/Summer</p>
      </div>
    </section>
  );
}

function ProjectItem01Desktop() {
  return (
    <section aria-label="Rotém Ziv project 1" className="content-stretch flex gap-[50px] items-start pb-[90px] relative shrink-0 w-full" data-name="Project item 01">
      <TextContainerDesktop />
      <div className="aspect-[572/543] flex-[1_0_0] min-h-px min-w-px relative" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Jacquemus project" className="absolute h-[160.12%] left-[-0.51%] max-w-none top-[-52.28%] w-[100.68%]" src={imgWork01} />
        </div>
      </div>
    </section>
  );
}

function TextContainerDesktop1() {
  return (
    <section className="content-stretch flex flex-[1_0_0] flex-col font-['NATS:Regular',sans-serif] h-[543px] items-end justify-between leading-[0.8] min-h-px min-w-px not-italic relative text-[16px] text-black tracking-[-0.32px] uppercase whitespace-pre-wrap" data-name="Text container">
      <p className="relative shrink-0 w-full">02</p>
      <div className="relative shrink-0 w-full">
        <p className="mb-0">acne studios</p>
        <p>2024 autumn/fall</p>
      </div>
    </section>
  );
}

function ProjectItem02Desktop() {
  return (
    <section aria-label="Rotém Ziv project 2" className="content-stretch flex gap-[50px] items-start pb-[90px] relative shrink-0 w-full" data-name="Project item 02">
      <div className="flex-[1_0_0] h-[543px] min-h-px min-w-px relative" data-name="Image">
        <img alt="Acne Studios project" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWork02} />
      </div>
      <TextContainerDesktop1 />
    </section>
  );
}

function TextContainerDesktop2() {
  return (
    <section className="content-stretch flex flex-[1_0_0] flex-col font-['NATS:Regular',sans-serif] h-[543px] items-end justify-between leading-[0.8] min-h-px min-w-px not-italic relative text-[16px] text-black tracking-[-0.32px] uppercase whitespace-pre-wrap" data-name="Text container">
      <p className="relative shrink-0 w-full">03</p>
      <div className="relative shrink-0 w-full">
        <p className="mb-0">{`celine `}</p>
        <p>2022 Spring/Summer</p>
      </div>
    </section>
  );
}

function ProjectItem10Desktop() {
  return (
    <section aria-label="Rotém Ziv project 3" className="content-stretch flex gap-[50px] items-start pb-[90px] relative shrink-0 w-full" data-name="Project item 10">
      <TextContainerDesktop2 />
      <div className="flex-[1_0_0] h-[543px] min-h-px min-w-px relative" data-name="Image">
        <img alt="Celine project" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWork03} />
      </div>
    </section>
  );
}

function TextContainerDesktop3() {
  return (
    <section className="content-stretch flex font-['NATS:Regular',sans-serif] items-start justify-between leading-[0.8] not-italic pb-[90px] relative shrink-0 text-[16px] text-black tracking-[-0.32px] uppercase w-full" data-name="Text container">
      <p className="relative shrink-0">04</p>
      <p className="relative shrink-0 text-center">our legacy</p>
      <p className="relative shrink-0 text-right">2022 spring</p>
    </section>
  );
}

function ProjectItem04Desktop() {
  return (
    <section aria-label="Rotém Ziv project 4" className="content-stretch flex flex-col gap-[50px] items-start pb-[90px] relative shrink-0 w-full" data-name="Project item 04">
      <div className="h-[543px] relative shrink-0 w-full" data-name="Image">
        <img alt="Our Legacy project" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWork04} />
      </div>
      <TextContainerDesktop3 />
    </section>
  );
}

function TextContainerDesktop4() {
  return (
    <section className="content-stretch flex flex-[1_0_0] flex-col font-['NATS:Regular',sans-serif] h-[543px] items-end justify-between leading-[0.8] min-h-px min-w-px not-italic relative text-[16px] text-black tracking-[-0.32px] uppercase whitespace-pre-wrap" data-name="Text container">
      <p className="relative shrink-0 w-full">05</p>
      <div className="relative shrink-0 w-full">
        <p className="mb-0">our legacy</p>
        <p>2025 autumn fall</p>
      </div>
    </section>
  );
}

function ProjectItem05Desktop() {
  return (
    <section aria-label="Rotém Ziv project 5" className="content-stretch flex gap-[50px] items-start pb-[90px] relative shrink-0 w-full" data-name="Project item 05">
      <div className="aspect-[570/543] flex-[1_0_0] min-h-px min-w-px relative" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Our Legacy project 2" className="absolute h-[158.48%] left-0 max-w-none top-[-37.91%] w-full" src={imgWork05} />
        </div>
      </div>
      <TextContainerDesktop4 />
    </section>
  );
}

function TextContainerDesktop5() {
  return (
    <section className="content-stretch flex flex-[1_0_0] flex-col font-['NATS:Regular',sans-serif] h-[543px] items-end justify-between leading-[0.8] min-h-px min-w-px not-italic relative text-[16px] text-black tracking-[-0.32px] uppercase whitespace-pre-wrap" data-name="Text container">
      <p className="relative shrink-0 w-full">06</p>
      <div className="relative shrink-0 w-full">
        <p className="mb-0">the row</p>
        <p>2023 accessories</p>
      </div>
    </section>
  );
}

function ProjectItem06Desktop() {
  return (
    <section aria-label="Rotém Ziv project 6" className="content-stretch flex gap-[50px] items-start pb-[90px] relative shrink-0 w-full" data-name="Project item 06">
      <TextContainerDesktop5 />
      <div className="flex-[1_0_0] h-[543px] min-h-px min-w-px relative" data-name="Image">
        <img alt="The Row project" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWork06} />
      </div>
    </section>
  );
}

function ImageDesktop() {
  return (
    <div className="h-[543px] relative shrink-0 w-full" data-name="Image">
      <img alt="Burberry project" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWork07} />
    </div>
  );
}

function TextContainerDesktop6() {
  return (
    <section className="content-stretch flex font-['NATS:Regular',sans-serif] items-start justify-between leading-[0.8] not-italic pb-[90px] relative shrink-0 text-[16px] text-black tracking-[-0.32px] uppercase w-full" data-name="Text container">
      <p className="relative shrink-0">07</p>
      <p className="relative shrink-0 text-center">burberry</p>
      <p className="relative shrink-0 text-right">2022 fall</p>
    </section>
  );
}

function ProjectItem07Desktop() {
  return (
    <section aria-label="Rotém Ziv project 7" className="content-stretch flex flex-col gap-[50px] items-start pb-[90px] relative shrink-0 w-full" data-name="Project item 07">
      <ImageDesktop />
      <TextContainerDesktop6 />
    </section>
  );
}

function TextContainerDesktop7() {
  return (
    <section className="content-stretch flex flex-[1_0_0] flex-col font-['NATS:Regular',sans-serif] h-[543px] items-end justify-between leading-[0.8] min-h-px min-w-px not-italic relative text-[16px] text-black tracking-[-0.32px] uppercase whitespace-pre-wrap" data-name="Text container">
      <p className="relative shrink-0 w-full">08</p>
      <div className="relative shrink-0 w-full">
        <p className="mb-0">jilsander</p>
        <p>2021 autumn/fall</p>
      </div>
    </section>
  );
}

function ProjectItem08Desktop() {
  return (
    <section aria-label="Rotém Ziv project 8" className="content-stretch flex gap-[50px] items-center pb-[90px] relative shrink-0 w-full" data-name="Project item 08">
      <div className="flex flex-row items-center self-stretch">
        <div className="h-full relative shrink-0 w-[375px]" data-name="Image">
          <img alt="Jil Sander project" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWork08} />
        </div>
      </div>
      <TextContainerDesktop7 />
    </section>
  );
}

function TextContainerDesktop8() {
  return (
    <section className="content-stretch flex flex-[1_0_0] flex-col font-['NATS:Regular',sans-serif] h-[543px] items-end justify-between leading-[0.8] min-h-px min-w-px not-italic relative text-[16px] text-black tracking-[-0.32px] uppercase whitespace-pre-wrap" data-name="Text container">
      <p className="relative shrink-0 w-full">09</p>
      <div className="relative shrink-0 w-full">
        <p className="mb-0">gucci</p>
        <p>2022 Spring/Summer</p>
      </div>
    </section>
  );
}

function ProjectItem09Desktop() {
  return (
    <section aria-label="Rotém Ziv project 9" className="content-stretch flex gap-[50px] items-start pb-[90px] relative shrink-0 w-full" data-name="Project item 09">
      <TextContainerDesktop8 />
      <div className="h-[543px] relative shrink-0 w-[414px]" data-name="Image">
        <img alt="Gucci project" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWork09} />
      </div>
    </section>
  );
}

function MainDesktop() {
  const mainRef = useScrollReveal();
  return (
    <main ref={mainRef} className="content-stretch flex flex-col items-center relative size-full" data-name="Main" tabIndex="-1">
      <ProjectItem01Desktop />
      <ProjectItem02Desktop />
      <ProjectItem10Desktop />
      <ProjectItem04Desktop />
      <ProjectItem05Desktop />
      <ProjectItem06Desktop />
      <ProjectItem07Desktop />
      <ProjectItem08Desktop />
      <ProjectItem09Desktop />
    </main>
  );
}

/* ── Work Page ── */

function WorkMobile() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0EEDE] px-[20px]">
      <Header />
      <TitleMobile />
      <MainMobile />
      <Footer variant="black" />
    </div>
  );
}

function WorkDesktop() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0EEDE] px-[20px]">
      <Header />
      <TitleDesktop />
      <MainDesktop />
      <Footer variant="black" />
    </div>
  );
}

function Work() {
  const { width } = useActiveBreakpoint();
  if (width < 1280) {
    return <WorkMobile />;
  }
  return <WorkDesktop />;
}

export default Work;
