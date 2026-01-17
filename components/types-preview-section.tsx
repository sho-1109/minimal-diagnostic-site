import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { diagnosticTypes } from "@/lib/data"
import Image from "next/image"

export function TypesPreviewSection() {
  // Select 3 representative types to show diversity
  // e.g., Cheetah (Fast/Minimalist), Bear (Slow/Keeper), Wolf (Fast/Emotional/Steady - unique)
  // Let's pick:
  // 1. Cheetah (The Speedster) - FRBM
  // 2. Bear (The Curator) - SEBK
  // 3. Turtle (The Zen Master) - SRSM
  const featuredIDs = ['FRBM', 'SEBK', 'SRSM']
  const featuredTypes = diagnosticTypes.filter(t => featuredIDs.includes(t.id))

  return (
    <section className="px-4 py-24 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs tracking-[0.2em] text-muted-foreground uppercase">16 Animal Characters</p>
          <h2 className="font-serif text-3xl font-medium text-foreground mb-4">個性豊かな16種類の動物たち</h2>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto">
            性格や行動パターンによって、ものの持ち方・手放し方は人それぞれ。<br />
            自分に近い動物を見つけてみましょう。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredTypes.map((type) => (
            <Link
              key={type.id}
              href={`/types#${type.id}`}
              className="flex flex-col items-center p-8 rounded-2xl bg-card border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="relative w-32 h-32 mb-6">
                <Image
                  src={type.image}
                  alt={type.animal}
                  fill
                  className="object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="text-center">
                <span className="block text-[10px] font-bold tracking-widest text-primary uppercase mb-2">
                  {type.id}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-2">{type.name}</h3>
                <p className="text-xs text-muted-foreground mb-4">"{type.catchphrase}"</p>
                <span className="text-xs font-medium text-primary flex items-center justify-center gap-1 group-hover:underline decoration-primary/50 underline-offset-4">
                  詳細を見る <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground hover:bg-transparent text-base">
            <Link href="/types" className="flex items-center gap-2">
              すべての動物を見る
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
