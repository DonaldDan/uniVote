import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="mt-16 w-full border-t bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About VoteSmart</h3>
            <p className="text-muted-foreground">
              VoteSmart is a modern digital voting platform built to deliver real-time, transparent, and secure decision-making tools for communities and organizations.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Navigation</h3>
            <ul className="space-y-1">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/login" className="hover:underline">Login</a></li>
              <li><a href="/register" className="hover:underline">Register</a></li>
              <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <ul className="space-y-1 text-muted-foreground">
              <li>Email: support@votesmart.app</li>
              <li>Twitter: @votesmartapp</li>
              <li>GitHub: github.com/votesmart</li>
            </ul>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} VoteSmart. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with SAD</p>
        </div>
      </div>
    </footer>
  )
}
