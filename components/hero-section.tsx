"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

export function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* Background Decor - Calm & Minimal */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background opacity-70" />

      <div className="relative z-10 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground mb-8">
              <Leaf className="w-3.5 h-3.5" />
              <span className="text-xs font-medium tracking-wide">心地よい暮らしのために</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground text-center leading-tight mb-8 font-medium">
              なぜ、あなたの部屋は
              <br className="md:hidden" />
              片付かないのか？
              <br />
              <span className="text-lg md:text-2xl lg:text-3xl mt-6 block text-muted-foreground font-normal">
                性格でわかる、
                <br className="md:hidden" />
                あなただけの
                <span className="text-primary font-bold">「もの減らし」</span>法
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mx-auto mb-12 max-w-lg text-base leading-loose text-muted-foreground">
              「捨てられない」には理由があります。<br />
              16タイプの動物診断で、<br className="hidden sm:block" />
              あなたの心が軽くなる手放し方を見つけましょう。
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="rounded-full px-10 py-7 text-base shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all bg-primary text-primary-foreground border-none"
              >
                <Link href="/quiz">
                  診断を始める
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-7 text-base border-border bg-transparent hover:bg-secondary/50 text-foreground"
              >
                <Link href="/types">
                  動物たちを見る
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
