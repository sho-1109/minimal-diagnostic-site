"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Share2, RotateCcw, ArrowRight } from "lucide-react"
import { diagnosticTypes } from "@/lib/data"
import { TypeDetailContent } from "@/components/type-detail-modal"
import { FadeIn } from "@/components/ui/fade-in"

export function QuizResult({ type }: { type: string }) {
  const result = diagnosticTypes.find((t) => t.id === type) || diagnosticTypes[0]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="px-4 py-4">
        <div className="container mx-auto max-w-3xl flex items-center justify-center">
          <span className="font-serif text-xs text-foreground">診断結果</span>
        </div>
      </header>

      {/* Result Content (Reusing TypeDetailContent for consistency) */}
      <div className="px-4 py-8 pb-20">
        <div className="container mx-auto max-w-lg">

          <FadeIn>
            <div className="text-center mb-6">
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-3">Your Type</p>
            </div>

            {/* The Rich Content */}
            <TypeDetailContent type={result} />
          </FadeIn>

          {/* Action Buttons */}
          <FadeIn delay={0.2} className="flex flex-col gap-3 mt-10">
            <Button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: `私は「${result.name}」タイプ！ | もの減らし動物診断`,
                    text: `あなたのもの減らしタイプは？\n結果: ${result.name}\n${result.catchphrase}`,
                    url: window.location.origin,
                  })
                }
              }}
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full py-6 shadow-lg hover:shadow-xl transition-all"
            >
              <Share2 className="mr-2 h-4 w-4" />
              結果をシェアする
            </Button>
            <Button
              onClick={() => window.location.href = '/quiz'}
              variant="outline"
              className="rounded-full py-6 border-2 hover:bg-muted/50"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              もう一度診断する
            </Button>
          </FadeIn>

          {/* Back to home */}
          <div className="mt-8 text-center">
            <Link
              href="/types"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors py-2 px-4 rounded-full hover:bg-muted/50"
            >
              全タイプを見る
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
