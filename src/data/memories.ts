// ✨ OUR MEMORIES CONSTELLATION DATA
// Easily editable constellation stars for Noor & Yehia

export interface Memory {
  id: string
  date: string
  title: string
  arabicTitle: string
  description: string
  imagePlaceholder?: string
  starPosition: [number, number, number] // 3D coordinates in the constellation
  highlight?: boolean
}

export const memoriesData: Memory[] = [
  {
    id: "mem-1",
    date: "27 September 2026",
    title: "The First Spark • أول صدفة",
    arabicTitle: "أول صدفة جمعتنا ونجمتك اتسمت",
    description: "اليوم اللي اتسجلت فيه نجمة باسم 'noni star' في كوكبة القوس وبدأت منه حكايتنا. صدفة عادية جابتلي أعز وأجدع إنسانة في الدنيا. [اكتب هنا تفاصيل أول مرة اتكلمنا فيها].",
    imagePlaceholder: "/images/memory-01.jpg",
    starPosition: [-2.5, 1.8, -1.2],
    highlight: true,
  },
  {
    id: "mem-2",
    date: "02 October 2026",
    title: "First Glimpse • أول مرة شفتك",
    arabicTitle: "أول مرة عيني شافتك فيها",
    description: "يوم 2-10.. اللحظة اللي شوفتك فيها لأول مرة، نبضات قلبي اللي كانت سريعة وملامحك الهادية اللي خلت اليوم ده محفور في روحي. [اكتب هنا أول مكان اتقابلنا فيه].",
    imagePlaceholder: "/images/memory-02.jpg",
    starPosition: [-1.2, 0.6, 1.5],
    highlight: true,
  },
  {
    id: "mem-3",
    date: "03 October 2026",
    title: "Looking Gorgeous • تاني يوم",
    arabicTitle: "تاني يوم شفتك.. وكان شكلك حلو أوي يا نوني",
    description: "تاني يوم شفتك فيه، وكنتِ قمر وخاطفة للأنظار بضحكتك ونورك اللي ينور أي مكان. شكلك في اليوم ده خطف قلبي بجد وعمري ما هنسى تفاصيله.",
    imagePlaceholder: "/images/memory-03.jpg",
    starPosition: [1.5, 1.2, 0.8],
    highlight: true,
  },
  {
    id: "mem-4",
    date: "[تاريخ مهم]",
    title: "The Heartfelt Laugh • الضحكة اللي من القلب",
    arabicTitle: "أول ضحكة من قلبك",
    description: "لما قولت نكتة عفوية وفضلتي تضحكي من قلبك لدرجة إن وشك احمر.. الضحكة دي بالنسبة ليا كانت كفيلة تدوب أي تعب في الكون. [اكتب هنا الموقف اللي ضحكتوا فيه أوي].",
    imagePlaceholder: "/images/memory-04.jpg",
    starPosition: [2.8, -0.8, -1.0],
  },
  {
    id: "mem-5",
    date: "[تاريخ سهرة الفجر]",
    title: "Late Night Talks • مكالمة الفجر",
    arabicTitle: "الكلام اللي بيخلصش لحد ما الفجر طلع",
    description: "المكالمة اللي استمرت لساعات من غير ما نحس بالوقت.. لما حكينا عن أحلامنا وطفولتنا ومخاوفنا وحسيت إنك أقرب حد لقلبي. [اكتب هنا موضوع المكالمة المميزة].",
    imagePlaceholder: "/images/memory-05.jpg",
    starPosition: [-0.5, -2.1, 1.2],
  },
  {
    id: "mem-6",
    date: "[تاريخ الأغنية]",
    title: "Our Melody • نغمتنا الخاصة",
    arabicTitle: "أول أغنية سمعناها سوا",
    description: "الأغنية اللي اشتغلت بالصدفة ومن ساعتها وبقت تفكرنا ببعض أول ما تسمعي أول نغمة فيها. [اكتب هنا اسم الأغنية المفضلة ليكوا].",
    imagePlaceholder: "/images/memory-06.jpg",
    starPosition: [0.8, -1.5, -2.0],
  },
  {
    id: "mem-7",
    date: "[تاريخ اليوم المميز]",
    title: "The Moment I Realized • اللحظة اللي اتأكدت فيها",
    arabicTitle: "لما اتأكدت إنك مختلفة عن كل الناس",
    description: "في لحظة عفوية جداً، وقفت وبصيتلك واكتشفت قد إيه انتي نقية وصادقة، وإني خلاص قلبي اختارك ومش عايز غيرك. [اكتب هنا الموقف ده بالظبط].",
    imagePlaceholder: "/images/memory-07.jpg",
    starPosition: [2.2, 2.0, 1.1],
    highlight: true,
  },
]
