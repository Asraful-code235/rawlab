"use client";
import { ArrowRight, ChevronDown } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tab } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { FloatingNavServices } from "./start/FloatingNav";
import { Button } from "./ui/button";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { FloatingContact } from "./start/FloatingContact";

const items = [
  {
    title: "Home",
    href: "/",
  },
  {
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
    title: <FloatingContact />,
    href: "/contact",
  },
];

export default function NavMenu() {
  const router = usePathname();

  const [clicked, setClicked] = useState(false);

  const isSelected = (href) => {
    const rootPath = router.split("/")[1]; // Declare rootPath inside isSelected
    return rootPath === href.split("/")[1];
  };

  return (
    <div
      className={`fixed bottom-8 ${
        clicked ? "w-full px-4 flex items-center justify-center" : ""
      }  `}
    >
      <Tab.Group as={"div"} className={"hidden md:block"}>
        <Tab.List
          as="div"
          className={
            "flex items-center gap-4 justify-center bg-gray-900 w-fit rounded-md px-4 py-2 text-white"
          }
        >
          {items.map((item, key) => (
            <Tab key={key} as={Fragment}>
              {({ selected }) => (
                <Button
                  variant="ghost"
                  className={`${isSelected(item.href) ? "bg-gray-700" : ""}`}
                >
                  <Link href={`${item.href}`}>{item.title}</Link>
                </Button>
              )}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
      <Tab.Group as={"div"} className={"block md:hidden "}>
        <Tab.List
          as="div"
          className={`${
            clicked ? "min-w-[90vw] mx-auto" : ""
          } flex  gap-4 items-center justify-between md:justify-center bg-gray-900 rounded-md px-4 py-2 text-white`}
        >
          {items.map((item, key) => (
            <Tab key={key} as={Fragment}>
              {({ selected }) => (
                <span
                  variant="ghost"
                  className={`flex items-center gap-4 ${
                    isSelected(item.href) ? " flex " : "hidden"
                  } ${clicked ? "" : ""}`}
                >
                  {item?.title}
                </span>
              )}
            </Tab>
          ))}

          <DropdownMenu className="p-4 ">
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-white ">
                <AlignJustify
                  onClick={() => setClicked(!clicked)}
                  className="h-4 w-4 mr-1"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[90vw] -ml-10 mr-5 bg-gray-900 mb-4 p-4 block md:hidden">
              <DropdownMenuGroup>
                <DropdownMenuItem className="hover:bg-white hover:bg-opacity-20  cursor-pointer rounded-md p-2">
                  <div className="space-y-2">
                    <Link
                      href={"/"}
                      className="text-white text-xl font-semibold"
                    >
                      Home
                    </Link>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-white hover:bg-opacity-20 flex items-center justify-between  cursor-pointer rounded-md p-2">
                  {/* <div className="space-y-2">
                    <span className="text-white text-xl font-semibold">
                      Services
                    </span>
                  </div> */}
                  <Accordion
                    type="single"
                    collapsible
                    onClick={(e) => e.stopPropagation()}
                    className="w-full text-white bg-transparent"
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="border-none text-xl ">
                        Services
                      </AccordionTrigger>

                      <AccordionContent>
                        <div className="flex flex-col gap-4">
                          <div className="space-y-2 flex items-center gap-4 justify-between">
                            <div>
                              <span className="text-white text-xl font-semibold">
                                Design
                              </span>
                              <p className="text-white">
                                We design the entire thing. Just sit back, relax
                                and get ready for lift-off. Full digital
                                experiences, clear messaging, and plain common
                                sense.
                              </p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-white" />
                          </div>
                          <div className="space-y-2 flex items-center gap-4 justify-between">
                            <div>
                              <span className="text-white text-xl font-semibold">
                                Design
                              </span>
                              <p className="text-white">
                                We design the entire thing. Just sit back, relax
                                and get ready for lift-off. Full digital
                                experiences, clear messaging, and plain common
                                sense.
                              </p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-white" />
                          </div>

                          <div className=" flex items-center gap-4 justify-between">
                            <div>
                              <span className="text-white text-xl font-semibold">
                                Design
                              </span>
                              <p className="text-white">
                                We design the entire thing. Just sit back, relax
                                and get ready for lift-off. Full digital
                                experiences, clear messaging, and plain common
                                sense.
                              </p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-white hover:bg-opacity-20  cursor-pointer rounded-md p-2">
                  <div className="space-y-2">
                    <Link
                      href={"/work"}
                      className="text-white text-xl font-semibold"
                    >
                      Work
                    </Link>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-white hover:bg-opacity-20  cursor-pointer rounded-md p-2">
                  <div className="space-y-2">
                    <span className="text-white text-xl font-semibold">
                      Pricing
                    </span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-white hover:bg-opacity-20  cursor-pointer rounded-md p-2">
                  <div className="space-y-2">
                    <span className="text-white text-xl font-semibold">
                      Space
                    </span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-white hover:bg-opacity-20  cursor-pointer rounded-md p-2">
                  <div className="space-y-2">
                    <span className="text-white text-xl font-semibold">
                      About us
                    </span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-white hover:bg-opacity-20 flex items-center justify-between  cursor-pointer rounded-md p-2">
                  {/* <div className="space-y-2">
                    <span className="text-white text-xl font-semibold">
                      Services
                    </span>
                  </div> */}
                  <Accordion
                    type="single"
                    collapsible
                    onClick={(e) => e.stopPropagation()}
                    className="w-full text-white bg-transparent"
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="border-none text-xl ">
                        Contact
                      </AccordionTrigger>

                      <AccordionContent>
                        <div className="flex flex-col gap-4">
                          <div className="space-y-2 flex flex-col  gap-4 justify-between">
                            <p className="text-white text-sm">info@rawlab.co</p>
                            <p className="text-white text-sm">Instagram</p>
                            <p className="text-white text-sm">Linkedin</p>
                            <p className="text-white text-sm">TikTok</p>
                          </div>
                          <div className="space-y-2 flex items-center gap-4 justify-between">
                            <div>
                              <span className="text-white text-xl font-semibold">
                                Start a project
                              </span>
                              <p className="text-white text-sm">
                                The questions will help us determine the
                                scop,scale and estimate the project budget. Lets
                                make it happen
                              </p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-white" />
                          </div>

                          <div className=" flex items-center gap-4 justify-between">
                            <div>
                              <span className="text-white text-xl font-semibold">
                                .raw talent
                              </span>
                              <p className="text-white">
                                Join our .raw community. We are always on the
                                look out for new talent and would love to get to
                                know you better
                              </p>
                            </div>
                            <ArrowRight className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </Tab.List>
      </Tab.Group>
    </div>
  );
}
