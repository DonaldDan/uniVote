import { Separator } from "@/components/ui/separator";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="mt-16 w-full border-t bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-3">About UniVote</h3>
            <p className="text-muted-foreground">
              UniVote is a modern digital voting platform built to deliver real-time, transparent, and secure elections for decision-making in communities and organizations.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Navigation</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/" className="hover:text-foreground hover:underline">Home</a></li>
              <li><a href="/login" className="hover:text-foreground hover:underline">Login</a></li>
              <li><a href="/register" className="hover:text-foreground hover:underline">Register</a></li>
              <li><a href="/dashboard" className="hover:text-foreground hover:underline">Dashboard</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <FaLinkedin className="text-blue-500" />
                <a
                  href="https://www.linkedin.com/in/maisiba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaTwitter className="text-sky-400" />
                <a
                  href="https://twitter.com/maisiba_donald"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground hover:underline"
                >
                  @maisiba_donald
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaGithub className="text-muted-foreground" />
                <a
                  href="https://github.com/DonaldDan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground hover:underline"
                >
                  github.com/DonaldDan
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-6 bg-muted" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} UniVote. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with SAD</p>
        </div>
      </div>
    </footer>
  );
}
