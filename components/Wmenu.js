import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

export default function Wmenu({ account, disconnect }) {
  return (
    <Menu as="div" className="relative z-10 inline-block text-left">
      <div>
        <Menu.Button className="inline-flex items-center px-2.5 py-2 rounded-md text-sm font-medium bg-green-200 text-[#008036] w-32 cursor-pointer">
          <span className="w-12 h-3 mr-1 bg-[#008036] rounded-full"></span>
          <p className="text-ellipsis overflow-hidden">{account}</p>
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
        <Menu.Items className="origin-top-right absolute z-100 top-[10] py-1 px-2  mt-2 w-[130px] rounded-md shadow-lg bg-white ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {
                <a
                  onClick={disconnect}
                  className={" text-gray-900"}
                >
                  Log Out
                </a>
              }
            </Menu.Item>
         
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
