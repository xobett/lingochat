import RippleEffect from "@/components/RippleEffect";
import { Button } from "@heroui/react";

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl text-red-600">Hello and welcome to lingochat!</h2>
      <Button variant="primary"><RippleEffect/>Click me</Button>
    </div>
  );
}
