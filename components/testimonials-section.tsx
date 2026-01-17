import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "田中 美咲",
    handle: "@tanakamisaki",
    content:
      "無料のラブタイプ診断で、自分の恋愛スタイルを深く理解できました。相性診断の精度にも驚かされ、パートナーとの関係改善に役立っています。",
  },
  {
    name: "佐藤 レスリー",
    handle: "@satouleslie",
    content:
      "MBTIラブタイプ診断の結果が非常に的確で、恋愛における自分の傾向を初めて明確に理解できました。相性マッチング機能も素晴らしいです。",
  },
  {
    name: "陳 サラ",
    handle: "@chensarah",
    content:
      "16タイプ診断を通じて、今まで気づかなかった恋愛パターンを発見。恋愛アドバイスが具体的で実践しやすく、恋愛関係が大きく改善しました。",
  },
  {
    name: "呉 ジェシカ",
    handle: "@gojessica",
    content:
      "ラブタイプ診断を友人と一緒に受けて、お互いの恋愛相性を知ることができて楽しかったです。理想のパートナータイプも参考になりました。",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">お客様の声</h2>
          <p className="mx-auto max-w-2xl text-gray-600">数千人の方々にご利用いただいています</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.handle} className="border-rose-100">
              <CardContent className="pt-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-4 text-gray-600">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-sm font-bold text-rose-500">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.handle}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
