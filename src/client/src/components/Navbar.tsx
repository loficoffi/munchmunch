import { NavLink } from "react-router-dom";
import MunchLogo from "../assets/munchlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

const navigation = [
  { name: "Home", href: "dashboard", current: true },
  { name: "Meine Rezepte", href: "myrecipes", current: false },
  { name: "Kategorien", href: "#", current: false },
  { name: <FontAwesomeIcon icon={faSearch} />, href: "searchpage", current: false },
  { name: "Zufällige Empfehlung", href: "/recipe", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavigatonBar() {
  return (
    <Disclosure as="nav" className="bg-black navbar">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-munch-orange hover:border border-munch-orange hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FontAwesomeIcon icon={faBars} />
                  ) : (
                    <FontAwesomeIcon icon={faBars} />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 mt-2 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <NavLink to="/">
                    <img
                      alt="MunchMunch Logo"
                      className="h-12 w-auto"
                      src={MunchLogo}
                    ></img>
                  </NavLink>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-munch-orange underline underline-offset-8"
                            : "text-white hover:border border-munch-orange hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-regular"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-1">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </MenuButton>
                  </div>
                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-black py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="/login"
                            className={classNames(
                              focus ? "text-munch-orange" : "",
                              "block px-4 py-2 text-sm text-white hover:text-munch-orange"
                            )}
                          >
                            Dein Profil
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(
                              focus ? "text-munch-orange" : "",
                              "block px-4 py-2 text-sm text-white hover:text-munch-orange"
                            )}
                          >
                            Einstellungen
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(
                              focus ? "text-munch-orange" : "",
                              "block px-4 py-2 text-sm text-white hover:text-munch-orange"
                            )}
                          >
                            Ausloggen
                          </a>
                        )}
                      </MenuItem>
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item, index) => (
                <DisclosureButton
                  key={index}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-munch-orange"
                      : "text-white hover:text-munch-orange",
                    "block rounded-md px-3 py-2 text-base font-regular"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
