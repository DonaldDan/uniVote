import { Card, CardContent } from "@/components/ui/card"

export default function ActivePolls() {
  const polls = [
    { title: "Presidential Election", status: "Ongoing" },
    { title: "Senate Primary", status: "Upcoming" },
  ]

  return (
    <section>
      <h3 className="text-lg font-semibold mb-2">Active Polls</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {polls.map((poll, idx) => (
          <Card key={idx}>
            <CardContent className="p-4">
              <h4 className="font-medium">{poll.title}</h4>
              <p className="text-sm text-muted-foreground">{poll.status}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
