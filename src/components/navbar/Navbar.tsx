import { buttonVariants } from "@heroui/styles";
import Link from "next/link";
import { cn } from "@heroui/styles";
import { HiMiniLanguage } from "react-icons/hi2";
import Navlink from "./Navlink";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-400 to-indigo-800 top-0 w-full">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="text-3xl font-semibold">
          <Link className="flex items-center gap-2" href={"/"}>
            <HiMiniLanguage size={34} fill="white" />
            <span className="text-white">LINGOCHAT</span>
          </Link>
        </div>
        <ul className=" hidden md:flex items-center gap-4 text-white font-semibold text-xl">
          <Navlink href="/learners" label="Learners" />
          <Navlink href="/lists" label="Lists" />
          <Navlink href="/messages" label="Messages" />
        </ul>
        <ul className="hidden md:flex items-center gap-4 sm:hidden">
          <li>
            <Link
              href={"/login"}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "text-white",
              )}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href={"/register"}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "text-white",
              )}
            >
              Register
            </Link>
          </li>
        </ul>
        <div className="md:hidden">
          <RxHamburgerMenu size={24}></RxHamburgerMenu>
        </div>
      </header>
    </nav>
  );
}
