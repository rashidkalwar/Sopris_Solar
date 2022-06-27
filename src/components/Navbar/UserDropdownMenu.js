import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  HiOutlineUser,
  HiOutlineLogout,
  HiOutlineDesktopComputer,
} from 'react-icons/hi';

export default function UserDropdownMenu(props) {
  const email = props.user.email;
  const username = props.user.displayName;
  const userImage = props.user.photoURL;
  const logout = props.logout;

  return (
    <div className="text-right h-10 w-10 flex justify-center items-center z-[2]">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="h-10 w-10 flex justify-center items-center rounded-full ring-2 ring-orange-400 focus:outine-none focus:ring-2">
          {userImage ? (
            <>
              <Image
                className="w-10 h-10 rounded-full cursor-pointer"
                src={userImage}
                height={40}
                width={40}
                alt="User image"
              />
            </>
          ) : (
            <div className="bg-gray-100 dark:bg-slate-700 flex justify-center items-center h-10 w-10 hover:bg-gray-200 dark:hover:bg-slate-800 rounded-full p-1">
              <HiOutlineUser className="h-6 w-6 text-slate-500 dark:text-gray-200" />
            </div>
          )}
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-1 w-56 origin-top-right divide-y divide-gray-100 dark:divide-gray-600 rounded-md bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black dark:ring-gray-600 ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <div className="text-gray-900 dark:text-white w-full overflow-x-auto text-left rounded-md px-2 py-2 text-sm">
                    <p className="text-xstext-gray-700 text-xs">Signed in as</p>
                    {username ? username : email}
                  </div>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <div>
                    <Link href="/">
                      <a
                        rel="noopener"
                        className={`${
                          active
                            ? 'bg-orange-500 text-white '
                            : 'text-gray-900 dark:text-white'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {active ? (
                          <HiOutlineDesktopComputer
                            className="mr-2 h-5 w-5 text-orange-300"
                            aria-hidden="true"
                          />
                        ) : (
                          <HiOutlineDesktopComputer
                            className="mr-2 h-5 w-5 text-orange-400"
                            aria-hidden="true"
                          />
                        )}
                        Dashboard
                      </a>
                    </Link>
                  </div>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={logout}
                    className={`${
                      active
                        ? 'bg-orange-500 text-white'
                        : 'text-gray-900 dark:text-white'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <HiOutlineLogout
                        className="mr-2 h-5 w-5 text-orange-300"
                        aria-hidden="true"
                      />
                    ) : (
                      <HiOutlineLogout
                        className="mr-2 h-5 w-5 text-orange-400"
                        aria-hidden="true"
                      />
                    )}
                    logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
