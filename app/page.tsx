import { Button, buttonVariants } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link
        href="/admin"
        className={buttonVariants({ size: "lg", variant: "outline" })}
      >
        Admin
      </Link>
      <Button>Hello</Button>
      <Input />
    </div>
  );
}
