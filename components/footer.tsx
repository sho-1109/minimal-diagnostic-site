import Link from "next/link"

export function Footer() {
  return (
    <footer className="px-4 py-10">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-6">
          <span className="font-serif text-sm text-foreground">もの減らし動物診断</span>
          <nav className="flex gap-6 text-xs">
            <Link href="/quiz" className="text-muted-foreground transition-colors hover:text-foreground">
              診断を受ける
            </Link>
            <Link href="/types" className="text-muted-foreground transition-colors hover:text-foreground">
              タイプ一覧
            </Link>
          </nav>
          <p className="text-xs text-muted-foreground">© 2026 もの減らし動物診断</p>
        </div>
      </div>
    </footer>
  )
}
