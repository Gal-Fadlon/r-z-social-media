import { useActiveBreakpoint } from "../hooks/useActiveBreakpoint";
import { useRef, useEffect, useState } from "react";

function UpperLinksMobile() {
  return (
    <div className="content-stretch flex items-start justify-between leading-none pb-[100px] relative shrink-0 text-[16px] uppercase w-full" data-name="Upper links">
      <p className="relative shrink-0">Rotém Ziv</p>
      <p className="relative shrink-0 text-right">Tel Aviv, Israel</p>
    </div>
  );
}

function SocialsMobile() {
  return (
    <div className="content-stretch flex h-[13px] items-center justify-between leading-[0] relative shrink-0 w-full whitespace-nowrap" data-name="Socials">
      <a className="block relative shrink-0" href="mailto:rotemziv262@gmail.com">
        <p className="cursor-pointer leading-none">EMAIL</p>
      </a>
      <a className="block relative shrink-0 text-center" href="https://www.instagram.com/rz.social.media/" target="_blank" rel="noopener noreferrer">
        <p className="cursor-pointer leading-none">INSTA</p>
      </a>
      <a className="block relative shrink-0 text-right" href="http://linkedin.com/company/figma" target="_blank" rel="noopener noreferrer">
        <p className="cursor-pointer leading-none">LINKEDIN</p>
      </a>
    </div>
  );
}

function MiddleLinksMobile() {
  return (
    <div className="content-stretch flex flex-col gap-[120px] items-center relative shrink-0 text-[16px] uppercase w-full" data-name="Middle Links">
      <SocialsMobile />
      <p className="leading-none relative shrink-0 text-center w-full whitespace-pre-wrap">MADE BY</p>
    </div>
  );
}

function InitialsMobile() {
  return (
    <a className="content-stretch cursor-pointer flex items-center justify-between leading-[0.6] overflow-clip relative shrink-0 text-[200px] tracking-[-4px] w-full whitespace-pre-wrap" data-name="Initials" href="/">
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-left">R</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-center">.</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-right">Z</p>
    </a>
  );
}

function FooterMobile({ variant }) {
  const bgCls = variant === 'light' ? 'bg-[#F0EEDE]' : variant === 'black' ? 'bg-black' : 'bg-[#6f6e63]';
  const textCls = variant === 'light' ? 'text-black' : 'text-white';
  return (
    <footer className={`${bgCls} relative size-full`} data-name="Footer">
      <div className="flex flex-col items-center size-full">
        <div className={`content-stretch flex flex-col font-['NATS:Regular',sans-serif] gap-[20px] items-center not-italic px-[40px] py-[30px] relative size-full ${textCls}`}>
          <UpperLinksMobile />
          <MiddleLinksMobile />
          <InitialsMobile />
        </div>
      </div>
    </footer>
  );
}

function UpperLinksTablet() {
  return (
    <div className="content-stretch flex items-start justify-between leading-none pb-[100px] relative shrink-0 text-[16px] uppercase w-full" data-name="Upper links">
      <p className="relative shrink-0">Rotém Ziv</p>
      <p className="relative shrink-0 text-center">Couture Production</p>
      <p className="relative shrink-0 text-right">Tel Aviv, Israel</p>
    </div>
  );
}

function SocialsTablet() {
  return (
    <div className="content-stretch flex h-[13px] items-center justify-between leading-[0] relative shrink-0 w-full whitespace-nowrap" data-name="Socials">
      <a className="block relative shrink-0" href="mailto:rotemziv262@gmail.com">
        <p className="cursor-pointer leading-none">EMAIL</p>
      </a>
      <a className="block relative shrink-0 text-center" href="https://www.instagram.com/rz.social.media/" target="_blank" rel="noopener noreferrer">
        <p className="cursor-pointer leading-none">INSTA</p>
      </a>
      <a className="block relative shrink-0 text-right" href="http://linkedin.com/company/figma" target="_blank" rel="noopener noreferrer">
        <p className="cursor-pointer leading-none">LINKEDIN</p>
      </a>
    </div>
  );
}

function MiddleLinksTablet() {
  return (
    <div className="content-stretch flex flex-col gap-[120px] items-center relative shrink-0 text-[16px] uppercase w-full" data-name="Middle Links">
      <SocialsTablet />
      <p className="leading-none relative shrink-0 text-center w-full whitespace-pre-wrap">MADE BY</p>
    </div>
  );
}

function InitialsTablet() {
  return (
    <a className="content-stretch cursor-pointer flex items-center justify-between leading-[0.6] overflow-clip relative shrink-0 text-[400px] tracking-[-8px] w-full whitespace-pre-wrap" data-name="Initials" href="/">
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-left">R</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-center">.</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-right">Z</p>
    </a>
  );
}

function FooterTablet({ variant }) {
  const bgCls = variant === 'light' ? 'bg-[#F0EEDE]' : variant === 'black' ? 'bg-black' : 'bg-[#6f6e63]';
  const textCls = variant === 'light' ? 'text-black' : 'text-white';
  return (
    <footer className={`${bgCls} relative size-full`} data-name="Footer">
      <div className="flex flex-col items-center size-full">
        <div className={`content-stretch flex flex-col font-['NATS:Regular',sans-serif] gap-[20px] items-center not-italic px-[40px] py-[30px] relative size-full ${textCls}`}>
          <UpperLinksTablet />
          <MiddleLinksTablet />
          <InitialsTablet />
        </div>
      </div>
    </footer>
  );
}

function UpperLinksDesktop() {
  return (
    <div className="content-stretch flex items-start justify-between leading-none pb-[100px] relative shrink-0 text-[16px] uppercase w-full" data-name="Upper links">
      <p className="relative shrink-0">Rotém Ziv</p>
      <p className="relative shrink-0 text-center">Couture Production</p>
      <p className="relative shrink-0 text-right">Tel Aviv, Israel</p>
    </div>
  );
}

function SocialsDesktop() {
  return (
    <div className="content-stretch flex h-[13px] items-center justify-between leading-[0] relative shrink-0 w-full whitespace-nowrap" data-name="Socials">
      <a className="block relative shrink-0" href="mailto:rotemziv262@gmail.com">
        <p className="cursor-pointer leading-none">EMAIL</p>
      </a>
      <a className="block relative shrink-0 text-center" href="https://www.instagram.com/rz.social.media/" target="_blank" rel="noopener noreferrer">
        <p className="cursor-pointer leading-none">INSTA</p>
      </a>
      <a className="block relative shrink-0 text-right" href="http://linkedin.com/company/figma" target="_blank" rel="noopener noreferrer">
        <p className="cursor-pointer leading-none">LINKEDIN</p>
      </a>
    </div>
  );
}

function MiddleLinksDesktop() {
  return (
    <div className="content-stretch flex flex-col gap-[120px] items-center relative shrink-0 text-[16px] uppercase w-full" data-name="Middle Links">
      <SocialsDesktop />
      <p className="leading-none relative shrink-0 text-center w-full whitespace-pre-wrap">MADE BY</p>
    </div>
  );
}

function InitialsDesktop() {
  return (
    <a className="content-stretch cursor-pointer flex items-center justify-between leading-[0.6] overflow-clip relative shrink-0 text-[605px] tracking-[-12.1px] w-full whitespace-pre-wrap" data-name="Initials" href="/">
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-left">R</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-center">.</p>
      <p className="flex-[1_0_0] min-h-px min-w-px relative text-right">Z</p>
    </a>
  );
}

function FooterDesktop({ variant }) {
  const bgCls = variant === 'light' ? 'bg-[#F0EEDE]' : variant === 'black' ? 'bg-black' : 'bg-[#6f6e63]';
  const textCls = variant === 'light' ? 'text-black' : 'text-white';
  return (
    <footer className={`${bgCls} relative size-full`} data-name="Footer">
      <div className="flex flex-col items-center size-full">
        <div className={`content-stretch flex flex-col font-['NATS:Regular',sans-serif] gap-[20px] items-center not-italic px-[40px] py-[30px] relative size-full ${textCls}`}>
          <UpperLinksDesktop />
          <MiddleLinksDesktop />
          <InitialsDesktop />
        </div>
      </div>
    </footer>
  );
}

function Footer({ variant = 'dark' }) {
  const { width } = useActiveBreakpoint();
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const el = domRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  let content;
  if (width < 800) {
    content = <FooterMobile variant={variant} />;
  } else if (width < 1280) {
    content = <FooterTablet variant={variant} />;
  } else {
    content = <FooterDesktop variant={variant} />;
  }

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      {content}
    </div>
  );
}

export default Footer;
