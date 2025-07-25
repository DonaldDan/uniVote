// components/RepresentativeCard.jsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function RepresentativeCard({ rep }) {
  return (
    <Card className="w-full max-w-md shadow-md">
      <CardHeader>
        <CardTitle>{rep.name}</CardTitle>
        <p className="text-sm text-muted-foreground">{rep.party} - {rep.ward}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{rep.manifesto}</p>
      </CardContent>
    </Card>
  )
}
