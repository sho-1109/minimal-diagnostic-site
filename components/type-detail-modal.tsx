"use client"

import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { diagnosticTypes, DiagnosticType } from "@/lib/data"
import Image from "next/image"
import { Sparkles, Heart, Zap, Brain, Share2, ArrowRight } from "lucide-react"
import Link from "next/link"

// Helper component for trait bars
function TraitBar({ label, leftLabel, rightLabel, value }: { label: string, leftLabel: string, rightLabel: string, value: 'Left' | 'Right' }) {
    return (
        <div className="mb-3">
            <div className="flex justify-between text-[10px] text-muted-foreground mb-1 uppercase tracking-wider">
                <span>{leftLabel}</span>
                <span className="font-bold text-foreground">{label}</span>
                <span>{rightLabel}</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden relative">
                <div
                    className={`absolute top-0 bottom-0 w-1/2 bg-primary transition-all duration-500 rounded-full ${value === 'Left' ? 'left-0' : 'right-0'}`}
                />
            </div>
        </div>
    )
}

export function TypeDetailContent({ type }: { type: DiagnosticType }) {
    const partner = diagnosticTypes.find(t => t.id === type.partner)

    return (
        <div className="animate-in fade-in zoom-in-95 duration-300">
            {/* Header */}
            <div className="text-center mb-6">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
                    {type.id} TYPE
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">{type.name}</h2>
                <p className="text-primary font-medium text-sm">"{type.catchphrase}"</p>
            </div>

            {/* Image */}
            <div className="flex justify-center mb-8">
                <div className="relative w-48 h-48">
                    <Image
                        src={type.image}
                        alt={type.animal}
                        fill
                        className="object-contain drop-shadow-lg"
                    />
                </div>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-8 text-center bg-card/50 p-4 rounded-xl border border-border/50">
                {type.description}
            </p>

            {/* Trait Chart (Visual) */}
            <div className="mb-8 p-5 bg-card rounded-2xl border border-border/50">
                <h3 className="text-xs font-bold text-center mb-4 uppercase tracking-widest text-muted-foreground">Personality Chart</h3>
                <TraitBar
                    label="決断"
                    leftLabel="即決 (Fast)"
                    rightLabel="熟考 (Slow)"
                    value={type.traits.decision === 'Fast' ? 'Left' : 'Right'}
                />
                <TraitBar
                    label="価値観"
                    leftLabel="合理 (Rational)"
                    rightLabel="感情 (Emotional)"
                    value={type.traits.value === 'Rational' ? 'Left' : 'Right'}
                />
                <TraitBar
                    label="行動"
                    leftLabel="一気 (Batch)"
                    rightLabel="コツコツ (Steady)"
                    value={type.traits.action === 'Batch' ? 'Left' : 'Right'}
                />
                <TraitBar
                    label="思考"
                    leftLabel="ミニマル (Minimalist)"
                    rightLabel="キープ (Keeper)"
                    value={type.traits.mindset === 'Minimalist' ? 'Left' : 'Right'}
                />
            </div>

            {/* Advise & Strengths/Weaknesses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-green-50/50 dark:bg-green-900/10 rounded-xl border border-green-100 dark:border-green-900/20">
                    <h4 className="flex items-center gap-2 text-xs font-bold text-green-700 dark:text-green-400 uppercase mb-3">
                        <Sparkles className="w-3 h-3" /> 強み
                    </h4>
                    <ul className="space-y-1">
                        {type.strengths.map((s, i) => <li key={i} className="text-xs text-foreground/80">• {s}</li>)}
                    </ul>
                </div>
                <div className="p-4 bg-orange-50/50 dark:bg-orange-900/10 rounded-xl border border-orange-100 dark:border-orange-900/20">
                    <h4 className="flex items-center gap-2 text-xs font-bold text-orange-700 dark:text-orange-400 uppercase mb-3">
                        <Brain className="w-3 h-3" /> 弱み
                    </h4>
                    <ul className="space-y-1">
                        {type.weaknesses.map((w, i) => <li key={i} className="text-xs text-foreground/80">• {w}</li>)}
                    </ul>
                </div>
            </div>

            {/* Mission */}
            <div className="mb-6 p-5 bg-gradient-to-br from-primary/5 to-secondary/30 rounded-2xl border border-primary/10 text-center">
                <h3 className="flex items-center justify-center gap-2 text-xs font-bold text-primary uppercase mb-3">
                    <Zap className="w-4 h-4" /> 今日のミッション
                </h3>
                <p className="text-sm font-medium text-foreground">
                    {type.mission}
                </p>
            </div>

            {/* Partner */}
            {partner && (
                <div className="mb-8 flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border/50">
                    <div className="relative w-12 h-12 flex-shrink-0">
                        <Image src={partner.image} alt={partner.name} fill className="object-contain" />
                    </div>
                    <div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">Best Partner</p>
                        <p className="text-xs font-bold text-foreground">{partner.name}</p>
                    </div>
                    <Button variant="ghost" size="sm" asChild className="ml-auto text-xs h-8">
                        <Link href={`/types#${partner.id}`}>詳細</Link>
                    </Button>
                </div>
            )}

            {/* Advice Text */}
            <div className="text-center p-6 border-t border-border/50">
                <p className="text-sm italic text-muted-foreground">"{type.advice}"</p>
            </div>
        </div>
    )
}

export function TypeDetailModal({
    type,
    children
}: {
    type: DiagnosticType,
    children: React.ReactNode
}) {
    return (
        <Dialog>
            <DialogTrigger asChild className="cursor-pointer">
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto sm:rounded-3xl p-6 md:p-8">
                <DialogTitle className="sr-only">{type.name}の詳細</DialogTitle>
                <TypeDetailContent type={type} />
            </DialogContent>
        </Dialog>
    )
}
