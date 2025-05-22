import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardCards } from "@/components/dashboard/dashboard-cards"
import { RecentLeads } from "@/components/dashboard/recent-leads"
import { LeadsByStatus } from "@/components/dashboard/leads-by-status"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <DashboardHeader />
      <DashboardCards />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <RecentLeads />
        <LeadsByStatus />
      </div>
    </div>
  )
}
