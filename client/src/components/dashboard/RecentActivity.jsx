import { Card, CardContent } from "@/components/ui/card"

export default function RecentActivity() {
  const activities = [
    "User John Doe voted in Presidential Election",
    "New poll 'Youth Council' added",
    "Admin updated voter list",
  ]

  return (
    <section>
      <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
      <Card>
        <CardContent className="p-4 space-y-2">
          {activities.map((activity, idx) => (
            <div key={idx} className="text-sm text-muted-foreground">
              • {activity}
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
