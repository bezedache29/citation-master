import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Citation</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          action="/api/citations"
          method="post"
          className="flex flex-col gap-2"
        >
          <Label htmlFor="citation">Citation</Label>
          <Input id="citation" name="citation" />

          <Label htmlFor="author">Author</Label>
          <Input id="author" name="author" />

          <Button type="submit">Submit</Button>
        </form>{" "}
      </CardContent>
    </Card>
  );
}
