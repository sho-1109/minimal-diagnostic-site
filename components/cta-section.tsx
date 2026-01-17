"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

export function CtaSection() {
  return (
    <section className="px-4 py-32 bg-secondary/20">
      <div className="container mx-auto max-w-3xl text-center">
        <FadeIn>
          <div className="mb-6 inline-flex p-3 rounded-2xl bg-background border border-border shadow-sm">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>

          <h2 className="mb-6 font-serif text-3xl md:text-4xl font-medium text-foreground leading-tight">
            あなたの「心地よい暮らし」を<br />
            ここから始めましょう。
          </h2>
          <p className="mx-auto mb-10 max-w-md text-muted-foreground leading-loose">
            診断は無料、登録も不要です。<br />
            1分でわかる、あなただけの片付けのヒント。
          </p>

          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-7 text-lg rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <Link href="/quiz" className="flex items-center gap-3">
              無料で診断する
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
