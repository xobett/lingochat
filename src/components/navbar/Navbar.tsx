import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full border-b border-separator bg-background/70">
      <header className="flex h-16 items-center justify-between px-6">
        <div >
          LINGOCHAT
        </div>
        <ul className="flex items-center gap-4">
          <li>Sign in</li>
          <li>Chat</li>
        </ul>
      </header>
    </nav>
  )
}