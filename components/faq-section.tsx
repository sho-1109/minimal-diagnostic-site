import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "ラブタイプ診断とは何ですか？",
    answer:
      "ラブタイプ診断は、MBTI理論に基づいて恋愛における性格や行動パターンを16タイプに分類する診断テストです。あなたの恋愛スタイルや相性の良いパートナータイプを科学的に分析します。",
  },
  {
    question: "16タイプ診断はどのように機能しますか？",
    answer:
      "心理学的な質問に答えることで、あなたの恋愛における性格特性を4つの軸で分析し、16のタイプに分類します。それぞれのタイプには固有の恋愛傾向と相性パターンがあります。",
  },
  {
    question: "ラブタイプ診断は無料ですか？",
    answer: "はい、基本的なラブタイプ診断は完全無料でご利用いただけます。登録も不要で、すぐに診断を開始できます。",
  },
  {
    question: "診断結果の精度はどの程度ですか？",
    answer:
      "ラブタイプ診断は心理学的研究に基づいており、多くの恋愛関係の分析データから構築されています。ただし、人間関係は複雑なため、参考として活用することをお勧めします。",
  },
  {
    question: "複数回診断を受けても結果は同じですか？",
    answer:
      "人の性格や価値観は時間と経験により変化するため、時期によって診断結果が変わる可能性があります。定期的にラブタイプ診断を受けることで、現在の恋愛傾向を把握できます。",
  },
]

export function FaqSection() {
  return (
    <section className="bg-rose-50 px-4 py-20">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">よくある質問</h2>
          <p className="mx-auto max-w-2xl text-gray-600">ラブタイプ診断についてのご質問にお答えします</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-rose-200">
              <AccordionTrigger className="text-left text-gray-900 hover:text-rose-500">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
