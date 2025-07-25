import DashboardSidebar from "@/components/dashboard/DashboardSidebar"
import DashboardHeader from "@/components/dashboard/DashboardHeader"
import StatsCards from "@/components/dashboard/StatsCards"
import ActivePolls from "@/components/dashboard/ActivePolls"
import RecentActivity from "@/components/dashboard/RecentActivity"
import RepresentativeForm from "../components/dashboard/RepresentativeForm";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col bg-muted/40">
        <DashboardHeader />
        <main className="p-6 space-y-6">
          <StatsCards />
          <ActivePolls />
          <RecentActivity />
          <RepresentativeForm />
        </main>
      </div>
    </div>
  )
}
