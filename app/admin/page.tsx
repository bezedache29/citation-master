import { Card, CardHeader, CardTitle } from "@/src/components/ui/card";

export default async function Admin() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  //   throw new Error("Error");

  return (
    <Card>
      <CardHeader>
        <CardTitle>URL : /admin</CardTitle>
      </CardHeader>
    </Card>
  );
}
