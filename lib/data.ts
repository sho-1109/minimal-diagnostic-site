export type DiagnosticType = {
  id: string
  name: string
  animal: string
  catchphrase: string
  description: string
  strengths: string[]
  weaknesses: string[]
  advice: string
  image: string
  traits: {
    decision: 'Fast' | 'Slow'
    value: 'Rational' | 'Emotional'
    action: 'Batch' | 'Steady'
    mindset: 'Minimalist' | 'Keeper'
  }
  partner: string
  mission: string
}

export const diagnosticTypes: DiagnosticType[] = [
  // 1. Fast, Rational, Batch, Minimalist
  {
    id: 'FRBM',
    name: 'スピードスター・チーター',
    animal: 'Cheetah',
    catchphrase: '「迷う時間は無駄！即決・即断・即手放し」',
    description: '決断が早く、合理的に物事を考え、一気に片付けるのが得意なタイプ。モノへの執着も薄く、常に身軽でいたいと考えています。',
    strengths: [
      '迷いなく決断できる圧倒的なスピード感',
      '常に空間を最適化し続ける維持能力',
      '思い立ったら即行動に移せる実行力'
    ],
    weaknesses: [
      '共有スペースにある家族のモノまで捨ててしまう',
      '「余韻」や「思い出」に浸る時間を無駄と感じがち',
      '効率を求めすぎて冷たい印象を与えてしまう'
    ],
    advice: 'そのスピード感は素晴らしい才能ですが、周りの人はついていけないことも。共有スペースでは少しペースを落としてみて。',
    image: '/images/characters/cheetah.png',
    traits: { decision: 'Fast', value: 'Rational', action: 'Batch', mindset: 'Minimalist' },
    partner: 'SRBM',
    mission: '「迷っている家族」を急かさず、3分だけ見守ってみる。'
  },
  // 2. Fast, Rational, Batch, Keeper
  {
    id: 'FRBK',
    name: '効率的コレクター・リス',
    animal: 'Squirrel',
    catchphrase: '「これは使える！合理的ストックの達人」',
    description: '決断は早いが、「これは将来役に立つ」と判断して大量に保管するタイプ。整理整頓が得意で、大量のモノも管理下に置いています。',
    strengths: [
      '必要な在庫を完璧に把握する高い管理能力',
      '急なトラブルや要望にも即座に対応できる準備力',
      '安物買いの銭失いをしない、賢い買い物選択'
    ],
    weaknesses: [
      '「いつか使う」が積み重なり、スペースが圧迫される',
      '管理のための収納グッズ自体が増えてしまう',
      '他人の「持っていない」状態を見ると貸したくなる'
    ],
    advice: '管理できているうちはOKですが、スペースには限りがあります。定期的に「本当に必要か」の基準を見直してみましょう。',
    image: '/images/characters/squirrel.png',
    traits: { decision: 'Fast', value: 'Rational', action: 'Batch', mindset: 'Keeper' },
    partner: 'FRBM',
    mission: 'ストックの中から「賞味期限が近いもの」を1つ消費する。'
  },
  // 3. Fast, Rational, Steady, Minimalist
  {
    id: 'FRSM',
    name: 'カチコチ・キツツキ',
    animal: 'Woodpecker',
    catchphrase: '「毎日コツコツ、無駄を削ぎ落とす」',
    description: '毎日少しずつ、合理的に不要なものを手放していけるタイプ。ルーティン化が得意で、常に最適な量を維持できます。',
    strengths: [
      '一度決めたルールを確実に実行する習慣化スキル',
      '小さな乱れもその都度直すためリバウンド知らず',
      '機能美を追求し、常に最適化された空間を作る'
    ],
    weaknesses: [
      '突発的な予定変更や例外対応にストレスを感じる',
      '他人のズボラさが目につき、許せなくなる',
      '機能性を重視しすぎて、面白味や遊び心が減りがち'
    ],
    advice: '完璧なルーティンは素晴らしいですが、時には例外を許容する心の余裕を持つと、より生きやすくなりますよ。',
    image: '/images/characters/woodpecker.png',
    traits: { decision: 'Fast', value: 'Rational', action: 'Steady', mindset: 'Minimalist' },
    partner: 'FESM',
    mission: 'あえて「何もしない時間」を5分だけ作ってみる。'
  },
  // 4. Fast, Rational, Steady, Keeper
  {
    id: 'FRSK',
    name: '几帳面ビーバー',
    animal: 'Beaver',
    catchphrase: '「計画的に積み上げ、強固な城を築く」',
    description: '合理的な判断で、毎日コツコツと必要なものを集め、整理するタイプ。自分の城（空間）を作り上げることに喜びを感じます。',
    strengths: [
      '複雑な構造も理解し整える、建築家のような構成力',
      '目標に向かってコツコツ積み上げられる努力の才能',
      'テトリスのように隙間なく収める収納テクニック'
    ],
    weaknesses: [
      '一度完成した「城」の配置を変えるのを極端に嫌う',
      'モノが増え続けても、工夫で詰め込もうとする',
      'こだわりが強すぎて、他人が手を出しにくい'
    ],
    advice: '素晴らしい城ですが、入り口が塞がっていませんか？新しい風を入れるために、古い枝を手放す勇気も持ちましょう。',
    image: '/images/characters/beaver.png',
    traits: { decision: 'Fast', value: 'Rational', action: 'Steady', mindset: 'Keeper' },
    partner: 'SRSM',
    mission: '「1年以上使っていないモノ」を1つだけ、箱から出してみる。'
  },
  // 5. Fast, Emotional, Batch, Minimalist
  {
    id: 'FEBM',
    name: '気まぐれネコ',
    animal: 'Cat',
    catchphrase: '「気分が乗ったら一気にやるの。今は放っておいて」',
    description: '気分屋ですが、やる気になった時の爆発力は凄いタイプ。直感で「要らない！」と思ったら、思い出の品でもスパッと手放せます。',
    strengths: [
      '「今」の自分に必要なものだけを見抜く鋭い直感力',
      'スイッチが入った時の驚異的な短期集中スピード',
      '過去のモノに縛られず、常に新しい自分になれる'
    ],
    weaknesses: [
      'やる気のムラが激しく、散らかる時はとことん散らかる',
      '勢いで捨てすぎて、後で「あれどこ？」と探すハメに',
      '整理整頓のルール作りや維持継続が苦手'
    ],
    advice: '直感で動くのはあなたの魅力。でも、大切な書類まで勢いで捨てないように、一度深呼吸する癖をつけると安心です。',
    image: '/images/characters/cat.png',
    traits: { decision: 'Fast', value: 'Emotional', action: 'Batch', mindset: 'Minimalist' },
    partner: 'SEBM',
    mission: '捨てる前に、そのモノに「ありがとう」と声に出して言ってみる。'
  },
  // 6. Fast, Emotional, Batch, Keeper
  {
    id: 'FEBK',
    name: 'お祭りカササギ',
    animal: 'Magpie',
    catchphrase: '「わぁ、これ素敵！とりあえず全部とっておこう！」',
    description: '「好き！」という感情で即決し、一気に集めるタイプ。キラキラしたものや感情を揺さぶるものに囲まれていると幸せを感じます。',
    strengths: [
      'モノの魅力を瞬時に発見できる豊かな感受性',
      '好きなモノに囲まれているだけで幸せになれる才能',
      '収集そのものをイベントのように楽しめるポジティブさ'
    ],
    weaknesses: [
      '手に入れた瞬間に満足し、未開封のまま放置しがち',
      '「好き」の範囲が広すぎて、物理的整理が追いつかない',
      '感情で即決してしまい、衝動買いで後悔することがある'
    ],
    advice: '「好き」の感度は素晴らしいです。でも、埋もれてしまっては輝きません。「展示スペース」を決めて、そこに入る分だけ愛でるようにしてみては？',
    image: '/images/characters/magpie.png',
    traits: { decision: 'Fast', value: 'Emotional', action: 'Batch', mindset: 'Keeper' },
    partner: 'FRBK',
    mission: '「一番のお気に入り」を一番目立つ場所に飾り直す。'
  },
  // 7. Fast, Emotional, Steady, Minimalist
  {
    id: 'FESM',
    name: 'さすらいのオオカミ',
    animal: 'Wolf',
    catchphrase: '「群れず、持たず、ただ己の道を行く」',
    description: '感情に従って生きていますが、モノへの執着はなく、身軽な旅人のようなタイプ。日々、自分にとって本当に大切か問い続けています。',
    strengths: [
      '流行に流されず、自分の価値観だけで生きる独自の美学',
      'モノがなくても精神的に満たされている心の豊かさ',
      'いつでもどこへでも行ける究極のフットワークの軽さ'
    ],
    weaknesses: [
      '協調性に欠け、共同生活のルールを窮屈に感じる',
      '周りから「冷たい」「変わり者」と誤解されやすい',
      '生活感がなさすぎて、温かみに欠ける部屋になりがち'
    ],
    advice: '孤高のミニマリストであるあなた。時には誰かの思い出の品を受け取ることで、心の豊かさがさらに広がるかもしれません。',
    image: '/images/characters/wolf.png',
    traits: { decision: 'Fast', value: 'Emotional', action: 'Steady', mindset: 'Minimalist' },
    partner: 'SESM',
    mission: '誰かのために、自分ができることを1つ探して実行する。'
  },
  // 8. Fast, Emotional, Steady, Keeper
  {
    id: 'FESK',
    name: '愛のハムスター',
    animal: 'Hamster',
    catchphrase: '「これも思い出、あれも宝物。全部頬張っちゃう」',
    description: '日々の小さな出来事にも感動し、その証としてモノを残すタイプ。テリトリーの中を思い出でいっぱいにすることに安心感を覚えます。',
    strengths: [
      '小さなモノや出来事にも深い愛情を注げる優しさ',
      '日常の中に「幸せの種」を見つける発見力',
      '自分だけの居心地の良い「巣」を作る空間演出力'
    ],
    weaknesses: [
      '全てのモノに感情移入してしまい、ゴミさえ捨てられない',
      'モノが増えすぎて、自分自身の居場所（巣）が狭くなる',
      '過去の思い出に浸りすぎて、未来へ進む足かせになる'
    ],
    advice: '思い出を大切にする心は素敵です。でも、新しい思い出が入る隙間も必要。古い種は食べて消化（心に刻む）して、殻は手放しましょう。',
    image: '/images/characters/hamster.png',
    traits: { decision: 'Fast', value: 'Emotional', action: 'Steady', mindset: 'Keeper' },
    partner: 'SESK',
    mission: '思い出の品を写真に撮り、実物は「お疲れ様」と箱にしまう。'
  },
  // 9. Slow, Rational, Batch, Minimalist
  {
    id: 'SRBM',
    name: '戦略家フクロウ',
    animal: 'Owl',
    catchphrase: '「計画完了。これより大規模な断捨離作戦を開始する」',
    description: '慎重に計画を立て、最も効率的なタイミングで一気に実行するタイプ。論理的で無駄がなく、一度手放すと決めたら揺らぎません。',
    strengths: [
      'ゴールを見据えて逆算し、確実に実行する高い計画性',
      '一度システムを作れば、効率的に維持管理できる論理思考',
      '感情に流されず、冷静に要・不要を判断できる'
    ],
    weaknesses: [
      '「完璧な計画」を練ることに時間を使いすぎ、着手が遅れる',
      '想定外の事態が起きると、計画全体がストップしてしまう',
      '準備運動だけで疲れてしまい、実行せずに終わることも'
    ],
    advice: '完璧な計画よりも、まずは一つ手放してみる。その小さな一歩が、あなたの素晴らしい計画を加速させるスイッチになります。',
    image: '/images/characters/owl.png',
    traits: { decision: 'Slow', value: 'Rational', action: 'Batch', mindset: 'Minimalist' },
    partner: 'FRBM',
    mission: '財布の中のレシートを、今すぐ全部出して仕分ける。'
  },
  // 10. Slow, Rational, Batch, Keeper
  {
    id: 'SRBK',
    name: '図書館長クジラ',
    animal: 'Whale',
    catchphrase: '「全ての知識と歴史を、この広大な海に保存しよう」',
    description: '膨大な情報を整理・保存することに長けたタイプ。動きはゆっくりですが、一度動くと大量のモノを整理・分類・保管します。',
    strengths: [
      '膨大なモノや情報を体系化して整理するデータベース能力',
      '歴史や背景まで深く理解している「歩く百科事典」',
      'どんなモノでも受け入れる、海のような広い包容力'
    ],
    weaknesses: [
      '動き出しが遅く、整理を始めるまでに長い助走が必要',
      '保管場所を確保するために、居住スペースが侵食される',
      '「使う」ことよりも「保存」することが目的になりがち'
    ],
    advice: 'あなたは知識の守り手です。しかし、情報は活用されてこそ価値があります。死蔵されているモノは、必要な誰かに譲るのも一つの「保存」です。',
    image: '/images/characters/whale.png',
    traits: { decision: 'Slow', value: 'Rational', action: 'Batch', mindset: 'Keeper' },
    partner: 'SRBM',
    mission: 'スマホのカメラロールから、不要なスクリーンショットを3枚消す。'
  },
  // 11. Slow, Rational, Steady, Minimalist
  {
    id: 'SRSM',
    name: '禅の精神カメ',
    animal: 'Turtle',
    catchphrase: '「一歩一歩、確実に。必要なものだけを背負って」',
    description: '非常に慎重ですが、確実に毎日不要なものを減らしていくタイプ。ゆっくりとした歩みで、最終的には悟りの境地（完全なミニマリズム）に達します。',
    strengths: [
      'どんなに小さな一歩でも、決して止めずに続ける忍耐強さ',
      '派手さはなくとも、気がつけば大きな成果を出している',
      'モノに振り回されず、常に心が凪のように穏やか'
    ],
    weaknesses: [
      'ペースがゆっくりなため、短期間での劇的な変化は苦手',
      '急激な環境の変化や、新しい片付け法を恐れてしまう',
      '周りからは「何もしていない」ように見えてしまうことも'
    ],
    advice: 'あなたの歩みは確実です。周りのスピードに焦る必要はありません。ただ、時には立ち止まって、減らしたことで得られた景色を楽しんでください。',
    image: '/images/characters/turtle.png',
    traits: { decision: 'Slow', value: 'Rational', action: 'Steady', mindset: 'Minimalist' },
    partner: 'FRSK',
    mission: '今日使ったペンを、必ず元の場所に戻す。'
  },
  // 12. Slow, Rational, Steady, Keeper
  {
    id: 'SRSK',
    name: '研究熱心なゾウ',
    animal: 'Elephant',
    catchphrase: '「記憶は消えない。モノもまた、記憶の一部なのだ」',
    description: '慎重に、かつ着実にモノを集め、それを大切に守り続けるタイプ。一度手に入れたモノの価値を深く理解し、決して粗末に扱いません。',
    strengths: [
      '一度手にしたモノやご縁を、生涯大切にする誠実さ',
      'モノの背景にあるストーリーまで正確に記憶する力',
      'どっしりと構えていて、周りに安心感を与える存在感'
    ],
    weaknesses: [
      'モノへの執着が強く、手放すことを「裏切り」と感じる',
      '変化を嫌い、何十年も同じ環境・同じモノを使い続ける',
      '物理的にも精神的にも荷物が重くなり、動きが鈍くなる'
    ],
    advice: 'モノを大切にする姿勢は尊敬に値します。ですが、背負いすぎて動けなくなってはいけません。本当に大切な「核心」だけを選び取る練習をしましょう。',
    image: '/images/characters/elephant.png',
    traits: { decision: 'Slow', value: 'Rational', action: 'Steady', mindset: 'Keeper' },
    partner: 'SRSM',
    mission: 'カバンの中身を全部出し、ゴミだけを捨てる。'
  },
  // 13. Slow, Emotional, Batch, Minimalist
  {
    id: 'SEBM',
    name: '涙の断捨離パンダ',
    animal: 'Panda',
    catchphrase: '「寂しいけど...えいっ！やっぱりスッキリ！」',
    description: '感情的になりやすく決断に時間はかかりますが、やる時は一気にやるタイプ。手放す痛みを知っている分、残ったものを大切にできます。',
    strengths: [
      'モノの痛みも喜びも深く理解できる豊かな感受性',
      'ダラダラ悩む時期と、一気にやる時期のメリハリがある',
      'その愛嬌あるキャラクターで、周りに助けてもらえる'
    ],
    weaknesses: [
      '決断するたびに感情を消耗し、ひどく疲れてしまう',
      '一つ捨てるのに思い出に浸り、涙ながらの作業になる',
      '感情エネルギー切れを起こすと、何も手につかなくなる'
    ],
    advice: '手放す痛みは、あなたが優しさを持っている証拠。無理に感情を殺す必要はありません。「ありがとう」と声に出して手放すと、心が軽くなりますよ。',
    image: '/images/characters/panda.png',
    traits: { decision: 'Slow', value: 'Emotional', action: 'Batch', mindset: 'Minimalist' },
    partner: 'FEBM',
    mission: 'クローゼットを開けて「一番着ていない服」をハンガーから外してみる。'
  },
  // 14. Slow, Emotional, Batch, Keeper
  {
    id: 'SEBK',
    name: '博物館キュレーター・クマ',
    animal: 'Bear',
    catchphrase: '「冬眠の前には、大好物を沢山ため込まないとね」',
    description: '不安や愛着から、時間をかけて大量のモノを溜め込むタイプ。ですが、大掃除の時などは感情を奮い立たせて一気に整理しようと試みます。',
    strengths: [
      '万が一の事態にも備えがある、圧倒的な安心感',
      '好きなモノに囲まれた、温かみのある空間を作る才能',
      '時間をかけて熟成された、深い味わいのあるコレクション'
    ],
    weaknesses: [
      '不安から過剰に溜め込み、スペースが圧迫される',
      '「捨てる」＝「失う」という恐怖心が強く、動けない',
      '一気にやろうとしすぎて、途中で力尽きて寝てしまう'
    ],
    advice: '不安からモノを集めていませんか？大丈夫、あなたはもう十分持っています。モノではなく、あなたの経験やスキルを信じて、少し身軽になってみませんか。',
    image: '/images/characters/bear.png',
    traits: { decision: 'Slow', value: 'Emotional', action: 'Batch', mindset: 'Keeper' },
    partner: 'SEBM',
    mission: '「もし明日引っ越すなら持っていくか？」と自分に問いかける。'
  },
  // 15. Slow, Emotional, Steady, Minimalist
  {
    id: 'SESM',
    name: '優しい羊',
    animal: 'Sheep',
    catchphrase: '「ふんわり、柔らかく。いらないものは風に乗せて」',
    description: '穏やかに、少しずつ身の回りを整えるタイプ。ガツガツ捨てるのではなく、自然と手放せるようになるのを待つ、優しいミニマリストです。',
    strengths: [
      'そこにいるだけで場が和む、癒しのオーラと雰囲気',
      '無理をせず、自分のペースを守りながら整えられる',
      '他人にも自分にも優しく、ギスギスした空間を作らない'
    ],
    weaknesses: [
      '優柔不断で、誰かの後押しがないと手放せない',
      '周りの意見に流されやすく、自分の軸がぶれがち',
      '劇的な変化は望めず、片付けの進みが遅く感じる'
    ],
    advice: 'その優しさは宝物です。でも、自分軸も大切に。「なんとなく」で残しているモノがあれば、それはあなたの優しさを濁らせているかもしれません。',
    image: '/images/characters/sheep.png',
    traits: { decision: 'Slow', value: 'Emotional', action: 'Steady', mindset: 'Minimalist' },
    partner: 'FESM',
    mission: '好きな音楽を聴きながら、テーブルの上だけ拭いてみる。'
  },
  // 16. Slow, Emotional, Steady, Keeper
  {
    id: 'SESK',
    name: 'マイペース・コアラ',
    animal: 'Koala',
    catchphrase: '「この木（モノ）が一番落ち着くんだ。動きたくないなぁ」',
    description: '一つの場所に留まり、お気に入りのモノだけに囲まれていたいタイプ。変化を好まず、慣れ親しんだモノを手放すことには大きな抵抗があります。',
    strengths: [
      '一度気に入った場所やモノを、長く大切にする忍耐強さ',
      '流行に左右されない、自分だけの確固たるこだわり',
      '争いを好まず、平和で穏やかな空間を維持する力'
    ],
    weaknesses: [
      '現状維持バイアスが強く、新しいモノや変化を受け入れない',
      '動くのが億劫で、手の届く範囲にモノを置きがち',
      '自分の世界に閉じこもり、視野が狭くなってしまう'
    ],
    advice: '居心地の良さは大切ですね。でも、たまには違う木に登ってみると、もっと美味しい葉っぱが見つかるかも。小さな「入れ替え」から始めてみませんか。',
    image: '/images/characters/koala.png',
    traits: { decision: 'Slow', value: 'Emotional', action: 'Steady', mindset: 'Keeper' },
    partner: 'FESK',
    mission: '引き出しを一つ開けて、中身を眺めてから閉める。'
  }
]
