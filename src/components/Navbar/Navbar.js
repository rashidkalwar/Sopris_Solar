import ThemeToggler from 'src/components/theme/Toggler';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import { Popover, Transition, Menu } from '@headlessui/react';
import {
  HiOutlineHome as HomeIcon,
  HiOutlineBookmarkAlt as BookmarkAltIcon,
  HiOutlineCalendar as CalendarIcon,
  HiOutlineViewGrid as ViewGridIcon,
  HiOutlineSupport as SupportIcon,
  HiOutlineMenu as MenuIcon,
  HiOutlineChevronRight as ChevronRightIcon,
  HiOutlineChevronDown as ChevronDownIcon,
  HiOutlineX as XIcon,
  HiOutlineOfficeBuilding as BuildingIcon,
  HiOutlineBriefcase as BriefcaseIcon,
} from 'react-icons/hi';
import { RiHandHeartLine } from 'react-icons/ri';

import UserDropdownMenu from 'src/components/Navbar/UserDropdownMenu';
import { UserAuth } from 'src/firebase/Context/auth.context';
import { logOut } from 'src/firebase/Context/authOptions';

const services = [
  {
    name: 'Residential',
    description: 'This is a place holder text.',
    href: '#',
    icon: HomeIcon,
  },
  {
    name: 'Commercial',
    description: 'This is a place holder text.',
    href: '#',
    icon: BuildingIcon,
  },
  {
    name: 'Non-Profit',
    description: 'This is a place holder text.',
    href: '#',
    icon: RiHandHeartLine,
  },
  {
    name: 'HOA',
    description: 'This is a place holder text.',
    href: '#',
    icon: ViewGridIcon,
  },
];
const technologies = [
  {
    name: 'SunStyle',
    description: 'this is place holder text.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'SunPower',
    description: 'this is place holder text.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'SunFlare',
    description: 'this is place holder text.',
    href: '#',
    icon: CalendarIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Dropdown = ({ ...props }) => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <Popover className="relative group">
      {() => (
        <>
          <Popover.Button
            className="flex justify-center items-center px-3 py-3 font-medium  group-hover:text-orange-600 text-orange-500 dark:text-orange-400 dark:group-hover:text-orange-500 rounded-lg text-base"
            onMouseEnter={() => setIsShowing(true)}
            onMouseLeave={() => setIsShowing(false)}
          >
            <span>{props.buttonName}</span>
            <ChevronDownIcon
              className="ml-2 text-orange-500 group-hover:text-orange-600"
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            show={isShowing}
            onMouseEnter={() => setIsShowing(true)}
            onMouseLeave={() => setIsShowing(false)}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="scale-0 translate-y-1"
            enterTo="scale-1 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="scale-1 translate-y-0"
            leaveTo="scale-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 -ml-4 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
              <div className="rounded-lg border-y-2 border-orange-400 shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-6 bg-white dark:bg-slate-800 px-4 py-6 sm:gap-8 sm:p-8">
                  {props.list.map((item) => (
                    <Link href={item.href}>
                      <a
                        key={item.name}
                        className="-m-2 p-2 flex items-start rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700"
                      >
                        <item.icon
                          className="flex-shrink-0 h-6 w-6 text-orange-500"
                          aria-hidden="true"
                        />
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900 dark:text-gray-100">
                            {item.name}
                          </p>
                          <p className="mt-1 text-sm text-gray-500 dark:text-gray-200">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default function MainNavbar() {
  const router = useRouter();
  const { user } = UserAuth();
  const logout = () => {
    logOut()
      .then(() => router.push('/'))
      .catch(console.error);
  };

  return (
    <Popover className="relative z-[2] bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a rel="noopener">
                <span className="text-3xl font-bold">SOPRIS SOLAR</span>
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white dark:bg-slate-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 border-2 border-orange-400">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-2">
            <Dropdown buttonName="Services" list={services} />
            <Dropdown buttonName="Technologies" list={technologies} />
            <Link href="/blog">
              <a className="px-3 py-3 font-medium dark:hover:text-orange-500 hover:text-orange-600 text-orange-500 dark:text-orange-400 rounded-lg text-base">
                Blog
              </a>
            </Link>
            <Link href="/contact">
              <a className="px-3 py-3 font-medium dark:hover:text-orange-500 hover:text-orange-600 text-orange-500 dark:text-orange-400 rounded-lg text-base">
                Contact
              </a>
            </Link>
          </Popover.Group>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <div className="flex justify-between items-center">
              <ThemeToggler className="mr-5" />
              {!user ? (
                <Link href="/login">
                  <a className="inline-flex items-center justify-center h-12 px-4 font-medium tracking-wide text-white dark:text-black transition duration-200 bg-slate-800 dark:bg-slate-100 rounded-md hover:bg-slate-700 dark:hover:bg-slate-200 focus:shadow-outline focus:outline-none">
                    Sign in
                  </a>
                </Link>
              ) : (
                <UserDropdownMenu user={user} logout={logout} />
              )}
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-slate-800 divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <a rel="noopener">
                    <span className="text-3xl font-bold">SOPRIS SOLAR</span>
                  </a>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-gray-300 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Menu as="div" className="relative inline-block text-left">
                    <div className="group flex justify-start items-center -m-3 p-3 rounded-md hover:bg-gray-50 dark:hover:bg-slate-700">
                      <BriefcaseIcon
                        className="flex-shrink-0 h-6 w-6 text-orange-600"
                        aria-hidden="true"
                      />
                      <Menu.Button className="flex w-full text-left justify-start items-center ml-3 text-base font-medium text-gray-900 dark:text-gray-100">
                        Options
                        <ChevronRightIcon
                          className="ml-2 flex-shrink-0 h-5 w-5 text-gray-600 dark:text-gray-200"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className=" mt-4 w-full bg-transparent focus:outline-none">
                        <div className="">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? 'bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-gray-200'
                                    : 'text-gray-700 dark:text-gray-200',
                                  'block px-4 py-2 text-md'
                                )}
                              >
                                Account settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? 'bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-gray-200'
                                    : 'text-gray-700 dark:text-gray-200',
                                  'block px-4 py-2 text-md'
                                )}
                              >
                                Support
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? 'bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-gray-200'
                                    : 'text-gray-700 dark:text-gray-200',
                                  'block px-4 py-2 text-md'
                                )}
                              >
                                License
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  {services.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-slate-700"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-orange-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-100">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  Pricing
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  Docs
                </a>
                {technologies.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-600 hover:bg-orange-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500 dark:text-gray-300">
                  Existing customer?{' '}
                  <a href="#" className="text-orange-600 hover:text-orange-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
