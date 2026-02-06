import { useActiveBreakpoint } from "../hooks/useActiveBreakpoint";
import { Link } from "react-router-dom";

function LinksMobile({ dark }) {
  const textCls = dark ? 'text-white' : 'text-black';
  const hoverCls = dark ? 'hover:border-white' : 'hover:border-[#505050]';
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Links">
      <Link className="relative shrink-0" data-name="Nav link 1" to="/work">
        <div className="flex flex-row items-center justify-center size-full">
          <div className={`content-stretch flex items-center justify-center px-[5px] py-[3px] relative border-[0.5px] border-solid border-transparent ${hoverCls}`}>
            <p className={`font-['NATS:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[14px] ${textCls} text-right uppercase`}>Work</p>
          </div>
        </div>
      </Link>
      <Link className="relative shrink-0" data-name="Nav link 2" to="/about">
        <div className="flex flex-row items-center justify-center size-full">
          <div className={`content-stretch flex items-center justify-center px-[5px] py-[3px] relative border-[0.5px] border-solid border-transparent ${hoverCls}`}>
            <p className={`font-['NATS:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[14px] ${textCls} text-right uppercase`}>About</p>
          </div>
        </div>
      </Link>
      <a className="relative shrink-0" data-name="Nav link 3" href="https://api.whatsapp.com/message/PUEENB5DO4LLK1?autoload=1&app_absent=0&utm_source=ig" target="_blank" rel="noopener noreferrer">
        <div className="flex flex-row items-center justify-center size-full">
          <div className={`content-stretch flex items-center justify-center px-[5px] py-[3px] relative border-[0.5px] border-solid border-transparent ${hoverCls}`}>
            <p className={`cursor-pointer font-['NATS:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[14px] ${textCls} text-right uppercase`} role="link" tabIndex="0">
              contact
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

function HeaderNavigationMobile({ dark }) {
  const textCls = dark ? 'text-white' : 'text-black';
  return (
    <nav className="relative size-full" data-name="Header Navigation">
      <div className="content-stretch cursor-pointer flex items-start justify-between pb-[30px] pt-[20px] relative size-full">
        <Link className={`block font-['NATS:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] ${textCls} uppercase whitespace-nowrap`} to="/">
          <p className="leading-none text-[14px]">r.z</p>
        </Link>
        <LinksMobile dark={dark} />
      </div>
    </nav>
  );
}

function LinksTablet({ dark }) {
  const textCls = dark ? 'text-white' : 'text-black';
  const hoverCls = dark ? 'hover:border-white' : 'hover:border-[#505050]';
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Links">
      <Link className="relative shrink-0" data-name="Nav link 1" to="/work">
        <div className="flex flex-row items-center justify-center size-full">
          <div className={`content-stretch flex items-center justify-center px-[5px] py-[3px] relative border-[0.5px] border-solid border-transparent ${hoverCls}`}>
            <p className={`font-['NATS:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[16px] ${textCls} text-right uppercase`}>Work</p>
          </div>
        </div>
      </Link>
      <Link className="relative shrink-0" data-name="Nav link 2" to="/about">
        <div className="flex flex-row items-center justify-center size-full">
          <div className={`content-stretch flex items-center justify-center px-[5px] py-[3px] relative border-[0.5px] border-solid border-transparent ${hoverCls}`}>
            <p className={`font-['NATS:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[16px] ${textCls} text-right uppercase`}>About</p>
          </div>
        </div>
      </Link>
      <a className="relative shrink-0" data-name="Nav link 3" href="https://api.whatsapp.com/message/PUEENB5DO4LLK1?autoload=1&app_absent=0&utm_source=ig" target="_blank" rel="noopener noreferrer">
        <div className="flex flex-row items-center justify-center size-full">
          <div className={`content-stretch flex items-center justify-center px-[5px] py-[3px] relative border-[0.5px] border-solid border-transparent ${hoverCls}`}>
            <p className={`cursor-pointer font-['NATS:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[16px] ${textCls} text-right uppercase`} role="link" tabIndex="0">
              contact
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

function HeaderNavigationTablet({ dark }) {
  const textCls = dark ? 'text-white' : 'text-black';
  return (
    <nav className="relative size-full" data-name="Header Navigation">
      <div className="content-stretch cursor-pointer flex items-start justify-between pb-[30px] pt-[20px] relative size-full">
        <Link className={`block font-['NATS:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] ${textCls} uppercase whitespace-nowrap`} to="/">
          <p className="leading-none text-[16px]">r.z</p>
        </Link>
        <LinksTablet dark={dark} />
      </div>
    </nav>
  );
}

function LinksDesktop({ dark }) {
  const textCls = dark ? 'text-white' : 'text-black';
  const hoverCls = dark ? 'hover:border-white' : 'hover:border-[#505050]';
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Links">
      <Link className="cursor-pointer relative shrink-0" data-name="Nav link 1" to="/work">
        <div className="flex flex-row items-center justify-center size-full">
          <div className={`content-stretch flex items-center justify-center px-[5px] py-[3px] relative border-[0.5px] border-solid border-transparent ${hoverCls}`}>
            <p className={`font-['NATS:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[16px] ${textCls} text-right uppercase`}>Work</p>
          </div>
        </div>
      </Link>
      <Link className="cursor-pointer relative shrink-0" data-name="Nav link 2" to="/about">
        <div className="flex flex-row items-center justify-center size-full">
          <div className={`content-stretch flex items-center justify-center px-[5px] py-[3px] relative border-[0.5px] border-solid border-transparent ${hoverCls}`}>
            <p className={`font-['NATS:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[16px] ${textCls} text-right uppercase`}>About</p>
          </div>
        </div>
      </Link>
      <div className="relative shrink-0" data-name="Nav link 3">
        <div className="flex flex-row items-center justify-center size-full">
          <div className={`content-stretch flex items-center justify-center px-[5px] py-[3px] relative border-[0.5px] border-solid border-transparent ${hoverCls}`}>
            <a className={`block cursor-pointer font-['NATS:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[16px] ${textCls} text-right uppercase`} href="https://api.whatsapp.com/message/PUEENB5DO4LLK1?autoload=1&app_absent=0&utm_source=ig" target="_blank" rel="noopener noreferrer">
              contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderNavigationDesktop({ dark }) {
  const textCls = dark ? 'text-white' : 'text-black';
  return (
    <nav className="relative size-full" data-name="Header Navigation">
      <div className="content-stretch flex items-start justify-between pb-[30px] pt-[20px] relative size-full">
        <Link className={`block cursor-pointer font-['NATS:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] ${textCls} uppercase whitespace-nowrap`} to="/">
          <p className="leading-none text-[16px]">r.z</p>
        </Link>
        <LinksDesktop dark={dark} />
      </div>
    </nav>
  );
}

function HeaderNavigation({ dark = false }) {
  const { width } = useActiveBreakpoint();
  if (width < 800) {
    return <HeaderNavigationMobile dark={dark} />;
  }
  if (width < 1280) {
    return <HeaderNavigationTablet dark={dark} />;
  }
  return <HeaderNavigationDesktop dark={dark} />;
}

export default HeaderNavigation;
