"use client"

import { ClipboardCheck, Brain, Sparkles } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

export function HowItWorksSection() {
  const steps = [
    {
      icon: ClipboardCheck,
      number: "01",
      title: "質問に回答",
      description: "12の質問に直感で答えるだけ。\n考えすぎず、ありのままの自分で。",
    },
    {
      icon: Brain,
      number: "02",
      title: "タイプ判定",
      description: "独自のアルゴリズムが、\nあなたの「思考のクセ」を分析。",
    },
    {
      icon: Sparkles,
      number: "03",
      title: "結果を確認",
      description: "あなたにぴったりの動物と、\n無理のない「もの減らし」アドバイス。",
    },
  ]

  return (
    <section className="px-4 py-24 bg-background">
      <div className="container mx-auto max-w-5xl">
        <FadeIn>
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs tracking-[0.2em] text-muted-foreground uppercase">Process</p>
            <h2 className="font-serif text-3xl font-medium text-foreground">診断の流れ</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-border/50 -z-10" />

          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.1}>
              <div className="flex flex-col items-center text-center group">
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center border border-border group-hover:scale-105 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-foreground/70" strokeWidth={1.5} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-sm">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
