"use client";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";

const items = [
  {
    title: "Home",
    href: "/home",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Space",
    href: "/space",
  },
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function NavMenu() {
  return (
    <div className="fixed bottom-8 ">
      <Tab.Group as={"div"} className={""}>
        <Tab.List
          as="div"
          className={
            "flex items-center gap-4 justify-center bg-gray-900 w-fit rounded-md px-6 py-2 text-white"
          }
        >
          {items.map((item, key) => (
            <Tab key={key} as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={`${
                    selected
                      ? "bg-white text-gray-900"
                      : "bg-gray-900 text-white"
                  } flex-shrink-0 p-1.5 rounded-md font-medium  `}
                >
                  {item.title}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
}
