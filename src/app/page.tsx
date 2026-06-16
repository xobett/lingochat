import { Button, buttonVariants } from "@heroui/react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl text-red-600">Hello and welcome to lingochat!</h2>
      <Link href={'/members'} className={buttonVariants({variant:'primary'})}>Go to members</Link>
    </div>
  );
}
