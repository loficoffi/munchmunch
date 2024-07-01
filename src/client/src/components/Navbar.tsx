import {NavLink, useNavigate} from "react-router-dom";
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
import {useEffect, useState} from "react";
import {fetchUserData} from "../services/accountService.ts";
import api, {setAuthToken} from "../utils/api.ts";
import {Account} from "../models/datamodels/Account.ts";
import {Meal} from "../models/datamodels/Meal.ts";

const navigation = [
  { name: "Home", href: "/"},
  { name: "Meine Rezepte", href: "/myrecipes"},
  { name: "Über", href: "/about"},
  { name: <FontAwesomeIcon icon={faSearch} />},
  { name: "Zufällige Empfehlung", href: "/recipe", special: "randomMeal"},
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavigatonBar() {

  const [current, setCurrent] = useState(window.location.pathname);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userData, setUserData] = useState<Account | null>(null);
  const [userInitials, setUserInitials] = useState<string | null>(null);

  const navigate = useNavigate();

  //get userdata if token exists
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthToken(token);
      fetchUserData().then(userData => {
        setUserData(userData);

        const userInitials = userData.profile.firstName.charAt(0).toUpperCase() + userData.profile.lastName.charAt(0).toUpperCase();
        setUserInitials(userInitials);

        setLoading(false);

      }).catch(err => {
        setError('No user is logged in.');
        setLoading(false);
      });
    }
  }, []);

  const handleClick = async (item) => {
    if (item.special && item.special === "randomMeal") {
      const meal : Meal = (await api.get("/meal/random")).data;
      setCurrent("/recipe");
      navigate(`/recipe/${meal.id}/${meal.name}`);
    } else {
      setCurrent(item.href);
      navigate(item.href);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem('token');
  };

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
                            onClick={() => handleClick(item)}  // Passing the entire item to the handler
                            className={classNames(
                                current === item.href
                                    ? "text-munch-orange underline underline-offset-8"
                                    : "text-white hover:border border-munch-orange hover:text-white",
                                "rounded-md px-3 py-2 text-sm font-regular cursor-pointer"
                            )}
                            aria-current={current === item.href ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                    ))}
                  </div>
                </div>
              </div>
              {/*Login Button*/}
              {!userData ? (
                  <div
                      className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <div>
                      <div className="flex space-x-4">
                        <a
                            href={"/login"}
                            className={"rounded-lg border border-munch-orange bg-munch-orange px-3 py-1 text-black font-medium"}
                        >
                        Login
                        </a>
                      </div>
                    </div>
                  </div>
              ) : (
                  <div
                      className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <div>
                      <div className="flex space-x-4">
                        <p
                            className={"text-munch-orange font-medium"}
                        >
                          Hallo {userData.profile.firstName}!
                        </p>
                      </div>
                    </div>
                  </div>
              )}
              {userData &&
                <div
                    className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-1">
                    <div>
                      <MenuButton
                          className="relative flex items-center justify-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5"/>
                        <span className="sr-only">Open user menu</span>
                        {userData && (
                            <p
                                className="flex items-center justify-center h-8 w-8 rounded-full bg-munch-orange font-semibold"
                            >
                              {userInitials}
                            </p>
                        )}
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
                              onClick={logoutUser}
                              href="/"
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
              }
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item, index) => (
                <DisclosureButton
                  key={index}
                  onClick={() => handleClick(item)}
                  className={classNames(
                      current === item.href
                      ? "text-munch-orange"
                      : "text-white hover:text-munch-orange",
                    "block rounded-md px-3 py-2 text-base font-regular"
                  )}
                  aria-current={current === item.href ? "page" : undefined}
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
