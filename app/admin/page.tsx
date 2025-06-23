import { buttonVariants } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import Link from "next/link";

export default async function Admin() {
  //   await new Promise((resolve) => setTimeout(resolve, 1000));

  //   throw new Error("Error");

  return (
    <Card>
      <CardHeader>
        <CardTitle>URL : /admin</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Link
          href="/admin/citations/new"
          className={buttonVariants({ size: "lg", variant: "outline" })}
        >
          Create Citation
        </Link>
      </CardContent>
    </Card>
  );
}
