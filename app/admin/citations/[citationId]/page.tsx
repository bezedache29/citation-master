import { Card, CardHeader, CardTitle } from "@/src/components/ui/card";

export default async function Page(props: {
  params: Promise<{
    citationId: string;
  }>;
  searchParams: URLSearchParams;
}) {
  const params = await props.params;
  const searchParams = props.searchParams;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{params.citationId}</CardTitle>
        <CardTitle>{JSON.stringify(searchParams, null, 2)}</CardTitle>
      </CardHeader>
    </Card>
  );
}
