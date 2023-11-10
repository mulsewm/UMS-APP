import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "#/", current: true },
  { name: "Courses", href: "#courses", current: false },
  { name: "Subjects", href: "#subjects", current: false },
  { name: "Grades", href: "/#grades", current: false },
  { name: "Analytics", href: "#analytics", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const CustomLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} passHref>
      <span onClick={onClick} className="px-3 py-4 text-lg font-normal">
        {children}
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const [currentLink, setCurrentLink] = useState("/");
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLinkClick = (href: string) => {
    setCurrentLink(href);
  };

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="relative flex h-12 md:h-20 items-center justify-between">
            <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
              {/* LOGO */}

              <div className="flex flex-shrink-0 items-center">
                <div className="flex flex-shrink-0 items-center">
                  <span className="text-black font-bold text-xl uppercase">
                    XY COLLEGE
                  </span>
                </div>
              </div>

              {/* LINKS */}

              <div className="hidden lg:block m-auto">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <CustomLink
                      key={item.name}
                      href={item.href}
                      onClick={() => handleLinkClick(item.href)}
                    >
                      <span
                        className={classNames(
                          item.href === currentLink
                            ? "underline-links"
                            : "text-slategray",
                          "px-3 py-4 text-lg font-normal opacity-75 hover:opacity-100"
                        )}
                        aria-current={item.href ? "page" : undefined}
                      >
                        {item.name}
                      </span>
                    </CustomLink>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <span
                className="text-slategray px-3 py-4 text-lg font-normal opacity-75 hover:opacity-100"
                aria-current={selectedLanguage === "en" ? "page" : undefined}
              >
                {/* Language Dropdown */}
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="ml-2 px-3 py-2 text-slategray bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="en">EN</option>
                  <option value="am">AM</option>
                  <option value="or">OR</option>
                </select>
              </span>
            </div>

            <div className="block lg:hidden">
              <Bars3Icon
                className="block h-6 w-6"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
