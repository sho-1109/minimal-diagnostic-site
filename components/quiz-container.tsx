"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft } from "lucide-react"
import { QuizResult } from "@/components/quiz-result"
import { cn } from "@/lib/utils"

// 4 axes:
// 1. Decision: Fast vs Slow
// 2. Value: Rational vs Emotional
// 3. Action: Batch vs Steady
// 4. Mindset: Minimalist vs Keeper

type Question = {
  id: number
  question: string
  axis: 'decision' | 'value' | 'action' | 'mindset'
  positiveLabel: string // Score 1 (Fast, Rational, Batch, Minimalist)
  negativeLabel: string // Score 0 (Slow, Emotional, Steady, Keeper)
}

const questions: Question[] = [
  // Decision (Fast vs Slow)
  {
    id: 1,
    question: "欲しいものを見つけた時、どうしますか？",
    axis: 'decision',
    positiveLabel: "即決する",
    negativeLabel: "じっくり考える"
  },
  {
    id: 2,
    question: "使わなくなったモノを手放す決断は？",
    axis: 'decision',
    positiveLabel: "早いほうだ",
    negativeLabel: "時間がかかる"
  },
  {
    id: 3,
    question: "レストランでのメニュー選びは？",
    axis: 'decision',
    positiveLabel: "すぐ決まる",
    negativeLabel: "迷ってしまう"
  },
  // Value (Rational vs Emotional)
  {
    id: 4,
    question: "モノを残すか決める基準は？",
    axis: 'value',
    positiveLabel: "使えるかどうか",
    negativeLabel: "思い出があるか"
  },
  {
    id: 5,
    question: "人からのプレゼント、好みじゃない場合は？",
    axis: 'value',
    positiveLabel: "手放せる",
    negativeLabel: "申し訳なくて残す"
  },
  {
    id: 6,
    question: "壊れてしまった愛用品は？",
    axis: 'value',
    positiveLabel: "買い替える",
    negativeLabel: "修理して使い続けたい"
  },
  // Action (Batch vs Steady)
  {
    id: 7,
    question: "片付けをする時のスタイルは？",
    axis: 'action',
    positiveLabel: "一気にまとめて",
    negativeLabel: "毎日少しずつ"
  },
  {
    id: 8,
    question: "夏休みの宿題は？",
    axis: 'action',
    positiveLabel: "短期集中で終わらせた",
    negativeLabel: "計画的に毎日やった"
  },
  {
    id: 9,
    question: "やる気スイッチが入ると？",
    axis: 'action',
    positiveLabel: "徹底的にやる",
    negativeLabel: "普段通り淡々と"
  },
  // Mindset (Minimalist vs Keeper)
  {
    id: 10,
    question: "理想の部屋の状態は？",
    axis: 'mindset',
    positiveLabel: "何もない空間",
    negativeLabel: "好きなモノに囲まれた空間"
  },
  {
    id: 11,
    question: "日用品のストックは？",
    axis: 'mindset',
    positiveLabel: "必要最低限",
    negativeLabel: "多めに確保したい"
  },
  {
    id: 12,
    question: "「もったいない」と感じるのは？",
    axis: 'mindset',
    positiveLabel: "使わずに持っていること",
    negativeLabel: "捨ててしまうこと"
  }
]

type Answers = {
  [key: number]: number // 0 or 1
}

export function QuizContainer() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [showResult, setShowResult] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleAnswer = (value: number) => {
    setAnswers({ ...answers, [currentQuestion]: value })
    setIsTransitioning(true)
  }

  useEffect(() => {
    if (isTransitioning && answers[currentQuestion] !== undefined) {
      const timer = setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1)
        } else {
          setShowResult(true)
        }
        setIsTransitioning(false)
      }, 400)
      return () => clearTimeout(timer)
    }
  }, [isTransitioning, answers, currentQuestion])

  const calculateResult = () => {
    let scoreDecision = 0;
    let scoreValue = 0;
    let scoreAction = 0;
    let scoreMindset = 0;

    questions.forEach((q, index) => {
      const ans = answers[index];
      // ans is 1 (Positive) or 0 (Negative)
      if (q.axis === 'decision') scoreDecision += ans;
      if (q.axis === 'value') scoreValue += ans;
      if (q.axis === 'action') scoreAction += ans;
      if (q.axis === 'mindset') scoreMindset += ans;
    });

    // Threshold is 2 out of 3. If >= 2, then Positive trait. Else Negative trait.
    // Decision: Fast (F) vs Slow (S)
    const decision = scoreDecision >= 2 ? 'F' : 'S';
    // Value: Rational (R) vs Emotional (E)
    const value = scoreValue >= 2 ? 'R' : 'E';
    // Action: Batch (B) vs Steady (S)
    const action = scoreAction >= 2 ? 'B' : 'S';
    // Mindset: Minimalist (M) vs Keeper (K)
    const mindset = scoreMindset >= 2 ? 'M' : 'K';

    return `${decision}${value}${action}${mindset}`;
  }

  if (showResult) {
    return <QuizResult type={calculateResult()} />
  }

  const question = questions[currentQuestion]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="px-4 py-4">
        <div className="container mx-auto max-w-3xl flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-xs">戻る</span>
          </Link>
          <span className="font-serif text-xs text-foreground">手放しタイプ診断</span>
          <div className="w-12" />
        </div>
      </header>

      <div className="px-4 py-4">
        <div className="container mx-auto max-w-xl">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
            <span>
              {currentQuestion + 1} / {questions.length}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-1 bg-secondary" />
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-xl">
          <div
            className={cn(
              "transition-all duration-300",
              isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0",
            )}
          >
            <p className="text-center text-xs text-muted-foreground mb-6">Q{currentQuestion + 1}</p>
            <h2 className="text-center font-serif text-xl md:text-2xl text-foreground mb-12 leading-relaxed px-4">
              {question.question}
            </h2>

            <div className="space-y-4">
              {/* Option 1: Positive Label (Score 1) */}
              <button
                onClick={() => handleAnswer(1)}
                className={cn(
                  "w-full p-6 text-center rounded-2xl transition-all duration-200 border",
                  "hover:scale-[1.02] active:scale-[0.98]",
                  answers[currentQuestion] === 1
                    ? "bg-foreground text-background border-foreground shadow-lg"
                    : "bg-card hover:bg-card/80 border-border shadow-sm text-foreground"
                )}
              >
                <span className="text-sm md:text-base font-medium block">{question.positiveLabel}</span>
              </button>

              {/* Option 2: Negative Label (Score 0) */}
              <button
                onClick={() => handleAnswer(0)}
                className={cn(
                  "w-full p-6 text-center rounded-2xl transition-all duration-200 border",
                  "hover:scale-[1.02] active:scale-[0.98]",
                  answers[currentQuestion] === 0
                    ? "bg-foreground text-background border-foreground shadow-lg"
                    : "bg-card hover:bg-card/80 border-border shadow-sm text-foreground"
                )}
              >
                <span className="text-sm md:text-base font-medium block">{question.negativeLabel}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-8 text-center bg-background/50 backdrop-blur-sm fixed bottom-0 w-full z-10 md:static md:bg-transparent">
        <p className="text-[10px] text-muted-foreground">直感でお答えください</p>
      </div>
    </div>
  )
}
