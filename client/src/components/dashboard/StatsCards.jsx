import { Card, CardContent } from "@/components/ui/card"
import { BarChart2, Users, CheckCircle } from "lucide-react"

export default function StatsCards() {
  const stats = [
    { icon: BarChart2, label: "Total Votes", value: "8,243" },
    { icon: Users, label: "Registered Voters", value: "1,540" },
    { icon: CheckCircle, label: "Active Campaigns", value: "3" },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map(({ icon: Icon, label, value }) => (
        <Card key={label}>
          <CardContent className="flex items-center justify-between p-4">
            <div>
              <h4 className="text-sm text-muted-foreground">{label}</h4>
              <p className="text-xl font-bold">{value}</p>
            </div>
            <Icon className="text-muted-foreground w-6 h-6" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
