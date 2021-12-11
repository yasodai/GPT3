import React from "react";
import tw from "tailwind-styled-components";
import { Icon } from "./index";
import { Menu, Transition } from "@headlessui/react";
import { clsx } from "./../utils";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "What is GPT?", href: "#wgt3" },
  { name: "Open AI", href: "#possibility" },
  { name: "Case Studies", href: "#features" },
  { name: "Library", href: "#blog" },
];
function Dropdown() {
  return (
    <Menu as="div" className="relative text-left lg:hidden">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="text-white align-middle focus:outline-none">
              {open ? (
                <Icon.X className="w-7 stroke-2" />
              ) : (
                <Icon.Menu className="w-7" />
              )}
            </Menu.Button>
          </div>

          <Transition
            enter="transition ease-out duration-100"
            enterFrom=" opacity-0 scale-95"
            enterTo=" opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom=" opacity-100 scale-100"
            leaveTo=" opacity-0 scale-95"
          >
            <Menu.Items
              className={clsx(
                "absolute right-0 origin-top-right",
                "flex flex-col items-end",
                "text-white text-xl bg-bg p-5 w-52 gap-2",
                "rounded-none focus:outline-none"
              )}
            >
              {navItems.map((item, index) => (
                <Menu.Item key={item + index}>
                  <a href={item.href} className="font-medium whitespace-nowrap">
                    {item.name}
                  </a>
                </Menu.Item>
              ))}
              <div className="sm:hidden">
                <Menu.Item>
                  <button className="">Sign In</button>
                </Menu.Item>
                <Menu.Item>
                  <button className="bg-red-500  px-3 py-1.5 rounded">
                    Sign Up
                  </button>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}

export function Navbar() {
  return (
    <nav className="wrapper">
      <Nav>
        <Icon.Logo className="w-16 mr-10" />
        <div className={clsx(" hidden lg:inline-flex")}>
          {navItems.map((item, index) => (
            <a
              href={item.href}
              key={item.name + index}
              className="p-2 font-medium whitespace-nowrap"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex-1  justify-end gap-4 hidden sm:flex">
          <button className="">Sign In</button>
          <button className="bg-red-500  px-3 py-1.5 rounded">Sign Up</button>
        </div>
        <Dropdown />
      </Nav>
    </nav>
  );
}

const Nav = tw.div`
  flex justify-between items-center 
  text-lg gap-4 text-white 
  lg:justify-start
`;
