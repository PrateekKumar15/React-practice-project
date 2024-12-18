import { useLocation } from "react-router-dom";
import { disablePageScroll , enablePageScroll } from "scroll-lock";
import { brainwave } from "../assets";
import { navigation } from "../Constants";
import Button from "./Button";
import MenuSvg from '../assets/svg/MenuSvg'
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
function Header() {
  const pathName = useLocation();
  const [openNavigation,setOpenNavigation] = useState(false)

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation)
    if(openNavigation){
      enablePageScroll()
    }
    else{
      disablePageScroll()
      }
  }
  const handleClick = () => {
    if(!openNavigation) return;
    enablePageScroll()
    setOpenNavigation(false)

  }

  return (
    <div className= { `fixed top-0 left-0 w-full z-50   ${openNavigation ? 'bg-n-8':'bg-n-8/90 backdrop-blur-sm'}`}>
      <div className=" flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 ">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} alt="brainwave" width={190} height={40} />
        </a>
        <nav className={`${openNavigation ? 'flex': 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:m-auto lg:bg-transparent`}>
          <div className="relative flex flex-col z-2 justify-center items-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                className={`block cursor-pointer relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.onlyMobile ? "lg:hidden" : ""
                } ${
                  pathName.hash === item.url
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50 "
                }
                            lg:leading-5 lg:hover:text-n-1 xl:px-12}`}
                            onClick={handleClick}
                key={item.id}
                href={item.href}
              >
                {item.title}
              </a>
            ))}
          </div>
            <HamburgerMenu/>
        </nav>
        <a
          href="#signup"
          className="hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block lg:text-xs"
        >
          New Account
        </a>
        <Button className="hidden lg:flex" href="#login">
          {" "}
          Sign in
        </Button>
        <Button className='ml-auto lg:hidden px="px-3"' onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation}/>
        </Button>
      </div>
    </div>
  );
}

export default Header;
