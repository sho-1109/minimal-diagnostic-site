import { Sparkles, Grid3X3, Lightbulb, Heart } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "直感的な質問",
    description: "深く考えず、感じたまま答えるだけ",
  },
  {
    icon: Grid3X3,
    title: "16のタイプ",
    description: "あなたに合った分類で理解が深まる",
  },
  {
    icon: Lightbulb,
    title: "具体的なヒント",
    description: "タイプ別の片付けアドバイスをお届け",
  },
  {
    icon: Heart,
    title: "自分らしく",
    description: "無理のないミニマルライフを応援",
  },
]

export function FeaturesSection() {
  return (
    <section className="px-4 py-20">
      <div className="container mx-auto max-w-4xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="text-center p-6 rounded-2xl bg-card/50 border border-border/50">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-foreground/10">
                <feature.icon className="h-5 w-5 text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-sm font-medium text-foreground">{feature.title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
