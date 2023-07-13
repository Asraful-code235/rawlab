"use client";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import { FloatingNavServices } from "./start/FloatingNav";
import { Button } from "./ui/button";

const items = [
  {
    title: "Home",
    href: "/home",
  },
  {
    // title: "Services",
    title: <FloatingNavServices />,
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
            "flex items-center gap-4 justify-center bg-gray-900 w-fit rounded-md px-4 py-2 text-white"
          }
        >
          {items.map((item, key) => (
            <Tab key={key} as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <Button variant="ghost">
                  {item.component && item.component}
                  {item.title}
                </Button>
              )}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
}
