import { Home, BarChart, Users, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DashboardSidebar() {
  return (
    <aside className="w-64 bg-white border-r shadow-sm p-4 space-y-4">
      <h1 className="text-xl font-bold">VoteSmart</h1>
      <nav className="space-y-2">
        <Button variant="ghost" className="w-full justify-start">
          <Home className="mr-2" /> Dashboard
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <BarChart className="mr-2" /> Analytics
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Users className="mr-2" /> Voters
        </Button>
      </nav>
      <Button variant="destructive" className="w-full mt-6">
        <LogOut className="mr-2" /> Logout
      </Button>
    </aside>
  )
}
