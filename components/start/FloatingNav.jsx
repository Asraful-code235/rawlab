"use client";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  ArrowLeft,
  Users,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
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

export const FloatingNavServices = () => {
  return (
    <DropdownMenu className="p-4">
      <DropdownMenuTrigger asChild>
        {/* <Button variant="ghost" className="text-white-600 "> */}
        <p> Services</p>
        {/* </Button> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96 bg-gray-700 mb-4 p-4 absolute bottom-10 left-20 ">
        <DropdownMenuGroup>
          <DropdownMenuItem className="hover:bg-white hover:bg-opacity-20  cursor-pointer rounded-md p-2">
            <div className="space-y-2">
              <span className="text-white text-xl font-semibold">Design</span>
              <p className="text-white">
                We design the entire thing. Just sit back, relax and get ready
                for lift-off. Full digital experiences, clear messaging, and
                plain common sense.
              </p>
            </div>
            <ArrowRight className="w-8 h-8 text-white" />
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-white hover:bg-opacity-20  cursor-pointer rounded-md p-2">
            <div className="space-y-2">
              <span className="text-white text-xl font-semibold">Build</span>
              <p className="text-white">
                We bridge the gap between marketing and design. We disrupt
                common communication and create strong bonds with your customers
              </p>
            </div>
            <ArrowRight className="w-8 h-8 text-white" />
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-white hover:bg-opacity-20  cursor-pointer rounded-md p-2">
            <div className="space-y-2">
              <span className="text-white text-xl font-semibold">Grow</span>
              <p className="text-white">
                We use the latest tools and tehniques in no-code to develop
                highly functional products on all devices. Your idea, Your
                business, Your future.
              </p>
            </div>
            <ArrowRight className="w-8 h-8 text-white" />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
