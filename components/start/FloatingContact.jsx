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

export const FloatingContact = () => {
  return (
    <DropdownMenu className="p-4 ">
      <DropdownMenuTrigger asChild>
        {/* <Button variant="ghost" className="text-white-600 "> */}
        <p> Contact</p>
        {/* </Button> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96 bg-gray-700 mb-4 p-4 absolute bottom-10 right-20 ">
        <DropdownMenuGroup>
          <DropdownMenuItem className="hover:bg-white hover:bg-opacity-20  cursor-pointer rounded-md p-2">
            <div className="space-y-2">
              <span className="text-white text-xl font-semibold">Contact</span>
              <p className="text-white">info@rawlab.com</p>
              <p className="text-white">instagram</p>
              <p className="text-white">Linkedin</p>
              <p className="text-white">TikTok</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-white hover:bg-opacity-20  cursor-pointer rounded-md p-2">
            <div className="space-y-2">
              <span className="text-white text-xl font-semibold">
                Start a project
              </span>
              <p className="text-white">
                The questions will help us determine the scop,scale and estimate
                the project budget. Lets make it happen
              </p>
            </div>
            <ArrowRight className="w-8 h-8 text-white" />
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-white hover:bg-opacity-20  cursor-pointer rounded-md p-2">
            <div className="space-y-2">
              <span className="text-white text-xl font-semibold">
                .raw talent
              </span>
              <p className="text-white">
                Join our .raw community. We are always on the look out for new
                talent and would love to get to know you better
              </p>
            </div>
            <ArrowRight className="w-8 h-8 text-white" />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
