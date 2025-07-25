export default function DashboardHeader() {
  return (
    <header className="flex items-center justify-between p-4 border-b bg-white">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground">Admin</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  )
}
