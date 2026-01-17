import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { diagnosticTypes } from "@/lib/data"
import { TypeDetailModal } from "@/components/type-detail-modal"
import { FadeIn } from "@/components/ui/fade-in"

export default function TypesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="px-4 py-4 sticky top-0 bg-background/80 backdrop-blur-md z-10 border-b border-border/10">
        <div className="container mx-auto max-w-4xl flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-xs">戻る</span>
          </Link>
          <span className="font-serif text-xs text-foreground">16動物もの減らし診断</span>
          <div className="w-12" />
        </div>
      </header>

      {/* Content */}
      <div className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs tracking-[0.2em] text-muted-foreground uppercase">All Types</p>
            <h1 className="font-serif text-3xl font-medium text-foreground">16のキャラクター</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {diagnosticTypes.map((type, index) => (
              <FadeIn key={type.id} delay={index * 0.05}>
                <TypeDetailModal type={type}>
                  <div
                    id={type.id}
                    className="flex items-center gap-4 p-4 bg-card/50 rounded-2xl border border-border/50 hover:bg-card transition-all hover:scale-[1.02] hover:shadow-md cursor-pointer group"
                  >
                    <div className="relative w-16 h-16 flex-shrink-0 bg-background rounded-xl overflow-hidden border border-border/50">
                      <Image
                        src={type.image}
                        alt={type.animal}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary uppercase font-bold tracking-wider group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          {type.id}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-foreground mb-1">{type.name}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-1">{type.catchphrase}</p>
                    </div>
                  </div>
                </TypeDetailModal>
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 px-10 rounded-full py-7"
            >
              <Link href="/quiz" className="flex items-center gap-3">
                診断を受ける
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
