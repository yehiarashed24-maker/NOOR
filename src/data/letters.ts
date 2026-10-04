// ⏳ 365 DAYS — 365 LETTERS FOR NOOR
// Written in authentic, warm Egyptian Arabic from Yehia to Noor

export type LetterCategory = string

export interface Letter {
  day: number
  category: string
  categoryLabel: string
  categoryArabic?: string
  title: string
  message: string
  moodEmoji: string
  date: string
}

export const lettersData: Letter[] = [
  {
    "day": 1,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "حاجة في قلبي",
    "message": "عارفة يا نوري، ساعات ببقى مش عارف أقولك قد إيه وجودك فارق معايا.. بس الحقيقة إني بحبك أكتر ما الكلمات بتعرف تشرح.",
    "moodEmoji": "❤️",
    "date": "Day 001"
  },
  {
    "day": 2,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "أحلى صدفة",
    "message": "لو رجع بيا الوقت ألف مرة، هختار إن الصدفة تجمعني بيكي في كل مرة ومن غير تردد يا نور.",
    "moodEmoji": "❤️",
    "date": "Day 002"
  },
  {
    "day": 3,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "مكانك في قلبي",
    "message": "مكانك في قلبي محجوز ليكي لوحدك، ومفيش حد في الكون ده كله يقدر ياخد ربع المكان ده.",
    "moodEmoji": "❤️",
    "date": "Day 003"
  },
  {
    "day": 4,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "ضحكتك ونورك",
    "message": "ضحكتك بتعمل في يومي حاجات سحرية، أول ما بشوفك مبسوطة بحس إن الدنيا كلها رايقة وخفيفة على قلبي.",
    "moodEmoji": "❤️",
    "date": "Day 004"
  },
  {
    "day": 5,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "سر الأيام",
    "message": "معاكي حسيت إن الأيام العادية ممكن تبقى مميزة جدًا بمجرد إنك جزء منها يا نوني.",
    "moodEmoji": "❤️",
    "date": "Day 005"
  },
  {
    "day": 6,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "حب بدون شروط",
    "message": "بحب تفاصيلك، صوتك لما بتتكلمي بشغف، وعينيكي لما بتلمع.. بحب كل حاجة فيكي.",
    "moodEmoji": "❤️",
    "date": "Day 006"
  },
  {
    "day": 7,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "نجمتي الوحيدة",
    "message": "في وسط زحمة الناس ومليارات النجوم، عيني مبتقفش ومبتلمحش غير نجمة واحدة.. اللي هي إنتي.",
    "moodEmoji": "❤️",
    "date": "Day 007"
  },
  {
    "day": 8,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "أغلى ما عندي",
    "message": "مش بس بحبك، أنا ممتن للدنيا إنها جمعتني بيكي وخلتني أتعرف على أطيب وأجمل قلب.",
    "moodEmoji": "❤️",
    "date": "Day 008"
  },
  {
    "day": 9,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "نور أيامي",
    "message": "اسم على مسمى بجد.. إنتي جيتي ونورتي كل حاجة كانت مطفية في حياتي يا نوري.",
    "moodEmoji": "❤️",
    "date": "Day 009"
  },
  {
    "day": 10,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "الأمان",
    "message": "أكتر حاجة مريحاني إني معاكي بحس بالأمان، بحس إني مش محتاج أمثل أو أكون حد تاني غير نفسي.",
    "moodEmoji": "❤️",
    "date": "Day 010"
  },
  {
    "day": 11,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "هدية القدر",
    "message": "ساعات بقعد مع نفسي وأقول: أنا عملت إيه حلو في حياتي عشان ربنا يرزقني بحد جميل زيك يا نور؟",
    "moodEmoji": "❤️",
    "date": "Day 011"
  },
  {
    "day": 12,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "راحة بالي",
    "message": "حبك في قلبي مش بس مشاعر، حبك هو راحة البال اللي بدور عليها بعد يوم طويل ومتعب.",
    "moodEmoji": "❤️",
    "date": "Day 012"
  },
  {
    "day": 13,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "الدفء",
    "message": "صوتك دافي وكلامك دافي وحضورك بيملى المكان بالبهجة.. ربنا ما يحرمني منك يا نوني.",
    "moodEmoji": "❤️",
    "date": "Day 013"
  },
  {
    "day": 14,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "كل يوم زيادة",
    "message": "كل يوم بيعدي عليا بكتشف إني بحبك أكتر من اليوم اللي قبله، وكأن قلبي بيتجدد معاكي.",
    "moodEmoji": "❤️",
    "date": "Day 014"
  },
  {
    "day": 15,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "اختياري الدائم",
    "message": "إنتي اختياري الأول والأخير، اللي مهما شوفت ناس بيفضل قلبي يقول: مفيش زي نور.",
    "moodEmoji": "❤️",
    "date": "Day 015"
  },
  {
    "day": 16,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "تفاصيلك الصغيرة",
    "message": "بحب طريقتك لما تقوليلي حاجة وانتي مبسوطة، نبرة صوتك وتعبيرات وشك بتخطفني بجد.",
    "moodEmoji": "❤️",
    "date": "Day 016"
  },
  {
    "day": 17,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "العالم الصغير",
    "message": "الكون ده كله واسع وكبير، بس العالم الحقيقي بتاعي بيبدأ من عندك وبيخلص عندك.",
    "moodEmoji": "❤️",
    "date": "Day 017"
  },
  {
    "day": 18,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "حب من القلب",
    "message": "مش محتاج مناسبة عشان أقولك بحبك.. أنا بحبك النهاردة وبكرة وكل ثانية بتمر عليا.",
    "moodEmoji": "❤️",
    "date": "Day 018"
  },
  {
    "day": 19,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "يا قمري",
    "message": "لو القمر بيظهر بالليل بس، فانتي قمر منور في سمايا ليل ونهار من غير غياب يا نوري.",
    "moodEmoji": "❤️",
    "date": "Day 019"
  },
  {
    "day": 20,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "حكاية حلوة",
    "message": "كل لحظة عشتها معاكي سابت علامة حلوة، حكايتنا دي أغلى حكاية اتكتبت في حياتي.",
    "moodEmoji": "❤️",
    "date": "Day 020"
  },
  {
    "day": 21,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "نبض القلب",
    "message": "قلبي مبيفرحش قد ما بيفرح لما يسمع اسمك أو تيجي على بالي فكرة حلوة ليكي.",
    "moodEmoji": "❤️",
    "date": "Day 021"
  },
  {
    "day": 22,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "أنتي وبس",
    "message": "مفيش حد شبهك يا نوني، انتي حالة خاصة جدًا ومش ممكن تتكرر في العمر مرتين.",
    "moodEmoji": "❤️",
    "date": "Day 022"
  },
  {
    "day": 23,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "سر ابتسامتي",
    "message": "لو حد سألني ليه وشك مبتسم النهاردة؟ الإجابة في بالي دايماً بتكون: عشان نور موجودة.",
    "moodEmoji": "❤️",
    "date": "Day 023"
  },
  {
    "day": 24,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "عالمي الخاص",
    "message": "عملتلك الكون ده عشان تشوفي قد إيه انتي غالية عندي، وعشان تعرفي إنك نجمة سمائي الوحيدة.",
    "moodEmoji": "❤️",
    "date": "Day 024"
  },
  {
    "day": 25,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "حب حقيقي",
    "message": "الحب الحقيقي مش كلام في الهوا، الحب إني مستعد أعمل أي حاجة عشان أشوفك مرتاحة ومبسوطة.",
    "moodEmoji": "❤️",
    "date": "Day 025"
  },
  {
    "day": 26,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "سحر حضورك",
    "message": "مجرد وجودك بيلغي أي توتر أو زعل، حضورك فيه راحة عجيبة ومطمئنة.",
    "moodEmoji": "❤️",
    "date": "Day 026"
  },
  {
    "day": 27,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "يا أغلى نوني",
    "message": "يا نوني الجميلة، خليكي فاكرة دايماً إن في حد قلبه مليان بيكي وبيدعيلك من غير ما تشوفي.",
    "moodEmoji": "❤️",
    "date": "Day 027"
  },
  {
    "day": 28,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "سري الصغير",
    "message": "انتي السر الحلو اللي بخبيه في قلبي وبفرح بيه كل ما تيجي فرصة افتكرك.",
    "moodEmoji": "❤️",
    "date": "Day 028"
  },
  {
    "day": 29,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "وردة حياتي",
    "message": "زي الوردة اللي بتفتح في الربيع، حضورك بيخلي كل حاجة حواليا تورّد وتزهر.",
    "moodEmoji": "❤️",
    "date": "Day 029"
  },
  {
    "day": 30,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "قلب نقي",
    "message": "قلبك الأبيض ونقاء روحك هما السبب اللي خلاني أقع في حبك من أول لحظة.",
    "moodEmoji": "❤️",
    "date": "Day 030"
  },
  {
    "day": 31,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "حب مالوش نهاية",
    "message": "حبي ليكي ملوش نهاية ولا ليه سقف، كل ما بفتكر إني وصلت لآخره بلاقيه بيكبر أكتر.",
    "moodEmoji": "❤️",
    "date": "Day 031"
  },
  {
    "day": 32,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "أمنية اتحققت",
    "message": "كنت زمان بتمنى حاجات كتير، ومن يوم ما عرفتك حسيت إن أهم أمنية اتحققت خلاص.",
    "moodEmoji": "❤️",
    "date": "Day 032"
  },
  {
    "day": 33,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "معنى السعادة",
    "message": "السعادة بالنسبة ليا اتلخصت في كلمة واحدة، اتلخصت فيكي يا نور.",
    "moodEmoji": "❤️",
    "date": "Day 033"
  },
  {
    "day": 34,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "شمس أيامي",
    "message": "حتى في أكتر الأيام برودة، مجرد رسالة منك بتدفي قلبي وتديني طاقة أكمل.",
    "moodEmoji": "❤️",
    "date": "Day 034"
  },
  {
    "day": 35,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "روح روحي",
    "message": "انتي مش بس جزء من حياتي، انتي روحي اللي بتنفس بيها والدافع اللي مخليني عايز أكون أحسن.",
    "moodEmoji": "❤️",
    "date": "Day 035"
  },
  {
    "day": 36,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "لحظات متتنسيش",
    "message": "كل مرة بفتكر فيها ضحكتك بحس إن الوقت بيقف، وبتمنى اللحظة دي تفضل مكملة للأبد.",
    "moodEmoji": "❤️",
    "date": "Day 036"
  },
  {
    "day": 37,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "حب صافي",
    "message": "حبي ليكي صافي ومن غير أي غرض، بحبك عشان انتي انتي بطبيعتك وطيبتك وبراءتك.",
    "moodEmoji": "❤️",
    "date": "Day 037"
  },
  {
    "day": 38,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "يا نور العين",
    "message": "يا نور عيني، ربنا يديمك نعمة في حياتي ويبعد عنك أي زعل ممكن يقرب من قلبك الطيب.",
    "moodEmoji": "❤️",
    "date": "Day 038"
  },
  {
    "day": 39,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "حلاوة الدنيا",
    "message": "الدنيا بتبقى حلوة بس بالناس اللي بنحبهم.. وانتي حلاوة الدنيا كلها بالنسبة ليا.",
    "moodEmoji": "❤️",
    "date": "Day 039"
  },
  {
    "day": 40,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "وطني الصغير",
    "message": "حسيت معاكي بمعنى الوطن، المكان اللي برتاح فيه وبحس إني مش غريب ولا خايف.",
    "moodEmoji": "❤️",
    "date": "Day 040"
  },
  {
    "day": 41,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "حب يتعدى الكلام",
    "message": "ساعات بحس الكلمات عاجزة وظالمة، لأن اللي في قلبي أكبر بكتير من أي جملة ممكن تتكتب.",
    "moodEmoji": "❤️",
    "date": "Day 041"
  },
  {
    "day": 42,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "قربي منك",
    "message": "كل ما بقرب منك أكتر بتأكد إني لقيت الكنز اللي مش هفرط فيه أبداً يا نوني.",
    "moodEmoji": "❤️",
    "date": "Day 042"
  },
  {
    "day": 43,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "صوتك حياة",
    "message": "لما بكون مهموم، نبرة صوتك بس كفيلة تمسح كل التعب وترجع الضحكة لوشي.",
    "moodEmoji": "❤️",
    "date": "Day 043"
  },
  {
    "day": 44,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "حبيبتي ونجمتي",
    "message": "انتي النجمة اللي بتنورلي طريقي لما تضلم، وعمري ما هسمح لضوئك يبهت أبداً.",
    "moodEmoji": "❤️",
    "date": "Day 044"
  },
  {
    "day": 45,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "أجمل عيون",
    "message": "عيونك دول فيهم حكاية وسحر مش طبيعي، بلمح فيهم كل البراءة والجمال اللي في الدنيا.",
    "moodEmoji": "❤️",
    "date": "Day 045"
  },
  {
    "day": 46,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "دايماً في بالي",
    "message": "حتى وإنتي بعيدة، انتي معايا في تفكيري، في صلاتي، وفي كل خطوة بمشيها.",
    "moodEmoji": "❤️",
    "date": "Day 046"
  },
  {
    "day": 47,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "ملاكي الصغير",
    "message": "انتي الملاك اللي ربنا بعتهولي عشان يملى حياتي أمل وفرحة وطمأنينة.",
    "moodEmoji": "❤️",
    "date": "Day 047"
  },
  {
    "day": 48,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "يا سكرة",
    "message": "يا سكرة حياتي، كلامك بيحلي أي يوم مر، وبسمتك بتفتح ألف باب مقفول.",
    "moodEmoji": "❤️",
    "date": "Day 048"
  },
  {
    "day": 49,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "عهد عليا",
    "message": "عهد عليا إني أفضل سند ليكي، وأفضل أحبك وأخاف عليكي وأشوفك أسعد إنسانة.",
    "moodEmoji": "❤️",
    "date": "Day 049"
  },
  {
    "day": 50,
    "category": "love",
    "categoryLabel": "حب وعشق ❤️",
    "title": "أحبك للأبد",
    "message": "مهما مرت سنين وتغيرت أيام، هفضل أحبك بنفس اللهفة والشغف اللي بدأ بيهم حبنا يا نوري.",
    "moodEmoji": "❤️",
    "date": "Day 050"
  },
  {
    "day": 51,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "شكراً لوجودك",
    "message": "عارفة؟ وجودك في حياتي مخليني أحس إن لسه في حاجات حلوة تستاهل نعيش عشانها.. شكراً ليكي.",
    "moodEmoji": "🫶",
    "date": "Day 051"
  },
  {
    "day": 52,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "جدعنتك",
    "message": "بحب فيكي أصلك الطيب وجدعنتك اللي مبتتكررش.. انتي إنسانة نادرة بجد يا نور.",
    "moodEmoji": "🫶",
    "date": "Day 052"
  },
  {
    "day": 53,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "صبرك الجميل",
    "message": "بقدّر جداً صبرك عليا وطريقتك الهادية في فهم الأمور.. مفيش زيك والله.",
    "moodEmoji": "🫶",
    "date": "Day 053"
  },
  {
    "day": 54,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "قلبك النضيف",
    "message": "في زمن صعب تلاقي فيه قلوب نقية، لقيت قلبك أنقى وأبيض من أي حاجة شوفتها.",
    "moodEmoji": "🫶",
    "date": "Day 054"
  },
  {
    "day": 55,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "طاقتك الإيجابية",
    "message": "أول ما بتكلم معاكي بحس كل السلبية اتبخرت.. انتي بتنشري بهجة غريبة في كل مكان.",
    "moodEmoji": "🫶",
    "date": "Day 055"
  },
  {
    "day": 56,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "اهتمامك بالتفاصيل",
    "message": "بحب جداً إنك بتفتكري التفاصيل الصغيرة اللي أنا نفسي بنساها.. دي حاجة بتفرحني أوي.",
    "moodEmoji": "🫶",
    "date": "Day 056"
  },
  {
    "day": 57,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "طريقتك المميزة",
    "message": "طريقتك في التعامل وكلامك الموزون بيخليني فخور بيكي في كل لحظة.",
    "moodEmoji": "🫶",
    "date": "Day 057"
  },
  {
    "day": 58,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "سند بجد",
    "message": "حسيت معاكي بجد يعني إيه حد يبقى ضهر وسند للتاني.. تسلميلي يا أغلى الناس.",
    "moodEmoji": "🫶",
    "date": "Day 058"
  },
  {
    "day": 59,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "تسامحك",
    "message": "روحك السمحة وطيبة قلبك اللي مبتعرفش تشيل من حد دي نعمة كبيرة أوي.",
    "moodEmoji": "🫶",
    "date": "Day 059"
  },
  {
    "day": 60,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "نصايحك الغالية",
    "message": "كتير باخد برأيك وبحس إن كلامك بيفتحلي عيني على حاجات مكنتش واخد بالي منها.",
    "moodEmoji": "🫶",
    "date": "Day 060"
  },
  {
    "day": 61,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "ابتسامتك الصافية",
    "message": "ابتسامتك بتخليني أقدر معنى الجمال الحقيقي اللي بيطلع من الروح قبل الملامح.",
    "moodEmoji": "🫶",
    "date": "Day 061"
  },
  {
    "day": 62,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "تقديري ليكي",
    "message": "أنا مش بس معجب بيكي، أنا بحترم عقليتك وشخصيتك وبحترم كل قرار بتاخديه.",
    "moodEmoji": "🫶",
    "date": "Day 062"
  },
  {
    "day": 63,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "روحك الخفيفة",
    "message": "دمك الخفيف وروحك اللي تدخل القلب علطول بتخلي أي قعدة معاكي متخلصش.",
    "moodEmoji": "🫶",
    "date": "Day 063"
  },
  {
    "day": 64,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "تشجيعك ليا",
    "message": "كلمة واحدة منك بتشجعني وبتخليني أكسر أي خوف جوايا.. انتي مصدر إلهامي.",
    "moodEmoji": "🫶",
    "date": "Day 064"
  },
  {
    "day": 65,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "حنيتك",
    "message": "الحنية اللي في صوتك وفي تعاملك دي من أكتر الحاجات اللي بتخليني متمسك بيكي لأبعد حد.",
    "moodEmoji": "🫶",
    "date": "Day 065"
  },
  {
    "day": 66,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "احترامك",
    "message": "احترامك لنفسك وللناس اللي حواليكي بيخليني أرفع راسي وأقول دي نور أغلى حاجة عندي.",
    "moodEmoji": "🫶",
    "date": "Day 066"
  },
  {
    "day": 67,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "أصالتك",
    "message": "بنت أصول بجد، متربية وطيبة وعينك مليانة.. ربنا يحميكي من كل شر.",
    "moodEmoji": "🫶",
    "date": "Day 067"
  },
  {
    "day": 68,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "حضورك المؤثر",
    "message": "المكان اللي بتدخلي فيه بتسيبي فيه أثر طيب وذكرى حلوة.. دي كاريزما ربنا ادهالك.",
    "moodEmoji": "🫶",
    "date": "Day 068"
  },
  {
    "day": 69,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "صدقك",
    "message": "مبحبش اللف والدوران، وعشان كده صدقك ووضوحك معايا هما أكتر حاجة مريحاني.",
    "moodEmoji": "🫶",
    "date": "Day 069"
  },
  {
    "day": 70,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "بساطتك",
    "message": "بساطتك وعدم تكلفك بتخلي التعامل معاكي مريح لأقصى درجة ممكنة يا نوني.",
    "moodEmoji": "🫶",
    "date": "Day 070"
  },
  {
    "day": 71,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "عقلك الكبير",
    "message": "ساعات بتفاجئيني بحكمتك وطريقة تفكيرك اللي سابقة سنك بمراحل.",
    "moodEmoji": "🫶",
    "date": "Day 071"
  },
  {
    "day": 72,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "وفائك",
    "message": "الوفاء فيكي طبع مش تمثيل، وانتي من أوفى وأصدق الشخصيات اللي قابلتها.",
    "moodEmoji": "🫶",
    "date": "Day 072"
  },
  {
    "day": 73,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "رقتك",
    "message": "رقتك وهدوءك بيدوا إحساس بالسلام النفسي بمجرد ما أكون جنبك أو أسمعك.",
    "moodEmoji": "🫶",
    "date": "Day 073"
  },
  {
    "day": 74,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "عطائك",
    "message": "بتحبي تدي وتسعدي اللي حواليكي من قلبك ومن غير ما تستني مقابل.. دي صفة الملايكة.",
    "moodEmoji": "🫶",
    "date": "Day 074"
  },
  {
    "day": 75,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "تواضعك",
    "message": "رغم كل جمالك وتميزك، تواضعك مخليكي أجمل في عيون كل الناس وفي عيوني.",
    "moodEmoji": "🫶",
    "date": "Day 075"
  },
  {
    "day": 76,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "تفهمك ليا",
    "message": "بتفهميني من نظرة أو من كلمة صغيرة، ومبتخلينيش أحتاج أشرح كتير.",
    "moodEmoji": "🫶",
    "date": "Day 076"
  },
  {
    "day": 77,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "أثرك الطيب",
    "message": "من يوم ما دخلتي حياتي وأنا بتغير للأحسن، غيرتي فيا حاجات كنت فاكرها مستحيلة تتغير.",
    "moodEmoji": "🫶",
    "date": "Day 077"
  },
  {
    "day": 78,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "شجاعتك",
    "message": "بحب قوتك في المواقف الصعبة وإصرارك إنك تكوني قوية وتعدي أي أزمة.",
    "moodEmoji": "🫶",
    "date": "Day 078"
  },
  {
    "day": 79,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "ضحكتك اللي تفرح",
    "message": "ضحكتك مش عادية، ضحكتك بتعدي أي كآبة في الدنيا وتخلي الجو كله شمس.",
    "moodEmoji": "🫶",
    "date": "Day 079"
  },
  {
    "day": 80,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "كرم أخلاقك",
    "message": "كرم أخلاقك ولطفك مع الصغير والكبير بيخليني أكبرك وأقدرك أكتر وأكتر.",
    "moodEmoji": "🫶",
    "date": "Day 080"
  },
  {
    "day": 81,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "نضوجك",
    "message": "طريقتك في معالجة المشاكل بتخليني أثق فيكي ثقة عمياء ومطمن وأنا معاكي.",
    "moodEmoji": "🫶",
    "date": "Day 081"
  },
  {
    "day": 82,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "لمستك في كل حاجة",
    "message": "أي حاجة بتحطي إيدك فيها بتتحول لحاجة جميلة وليها طعم مختلف.",
    "moodEmoji": "🫶",
    "date": "Day 082"
  },
  {
    "day": 83,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "حلاوة روحك",
    "message": "الجمال بيبهت مع الوقت، بس حلاوة روحك بتزيد كل يوم عن اليوم اللي قبله.",
    "moodEmoji": "🫶",
    "date": "Day 083"
  },
  {
    "day": 84,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "وفائك بوعدك",
    "message": "كلمتك واحدة، ولما بتوعدي بحاجة بتنفذيها.. دي صفة أصيلة أوي.",
    "moodEmoji": "🫶",
    "date": "Day 084"
  },
  {
    "day": 85,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "طيبة لسانك",
    "message": "مبيطلعش من لسانك غير الكلمة الطيبة والذوق، وده مخليكي محبوبة من الكل.",
    "moodEmoji": "🫶",
    "date": "Day 085"
  },
  {
    "day": 86,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "اهتمامك الصادق",
    "message": "لما بتسأليني عامل إيه، بحس إن السؤال طالع من قلبك وخايفة عليا بجد.",
    "moodEmoji": "🫶",
    "date": "Day 086"
  },
  {
    "day": 87,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "ثقتك فيا",
    "message": "ثقتك فيا دي تاج فوق راسي، وبوعدك إني عمري ما هخيب ظنك فيا أبداً.",
    "moodEmoji": "🫶",
    "date": "Day 087"
  },
  {
    "day": 88,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "عفويتك الجميلة",
    "message": "عفويتك وكلامك التلقائي اللي من غير فلاتر ده أحلى حاجة فيكي والله.",
    "moodEmoji": "🫶",
    "date": "Day 088"
  },
  {
    "day": 89,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "نعمة في حياتي",
    "message": "أنا بشكر ربنا كل يوم على نعمة وجودك.. انتي حقيقي رزق وبركة في عمري.",
    "moodEmoji": "🫶",
    "date": "Day 089"
  },
  {
    "day": 90,
    "category": "appreciation",
    "categoryLabel": "تقدير وامتنان 🫶",
    "title": "كل الاحترام",
    "message": "لكِ مني كل الحب والتقدير والاحترام اللي في الدنيا.. انتي تستاهلي الأفضل دايماً يا نور.",
    "moodEmoji": "🫶",
    "date": "Day 090"
  },
  {
    "day": 91,
    "category": "memories",
    "categoryLabel": "ذكريات حلوة 💭",
    "title": "أول كلام",
    "message": "فاكرة أول مرة اتكلمنا فيها؟ كان كلام عادي جداً بس سبحان الله كان بداية لأعظم قصة في حياتي.",
    "moodEmoji": "✨",
    "date": "Day 091"
  },
  {
    "day": 92,
    "category": "memories",
    "categoryLabel": "ذكريات حلوة 💭",
    "title": "يوم 27 سبتمبر",
    "message": "يوم 27 سبتمبر هيفضل محفور في بالي للأبد.. اليوم اللي اتسمت فيه نجمة باسمك 'noni star' وبدأت حكايتنا.",
    "moodEmoji": "✨",
    "date": "Day 092"
  },
  {
    "day": 93,
    "category": "memories",
    "categoryLabel": "ذكريات حلوة 💭",
    "title": "أول لقاء 2 أكتوبر",
    "message": "يوم 2-10.. أول مرة عيني تلمحك فيها وجهاً لوجه، قلبي كان بيدق بسرعة مكنتش قادر أتحكم فيها.",
    "moodEmoji": "✨",
    "date": "Day 093"
  },
  {
    "day": 94,
    "category": "memories",
    "categoryLabel": "ذكريات حلوة 💭",
    "title": "اليوم التاني 3 أكتوبر",
    "message": "يوم 3-10 تاني يوم شفتك فيه.. وكان شكلك حلو أوي يا نوني، قمر ينوّر كل مكان وعمري ما هنسى اللحظة دي.",
    "moodEmoji": "✨",
    "date": "Day 094"
  },
  {
    "day": 95,
    "category": "memories",
    "categoryLabel": "ذكريات حلوة 💭",
    "title": "أول ضحكة من قلبك",
    "message": "فاكرة لما قولت نكتة بايخة وإنتي فضلتي تضحكي لدرجة إنك مكنتيش قادرة تتنفسي؟ الصورة دي مبتروحش من بالي 😂",
    "moodEmoji": "✨",
    "date": "Day 095"
  },
  {
    "day": 96,
    "category": "memories",
    "categoryLabel": "ذكريات حلوة 💭",
    "title": "مكالمة الفجر",
    "message": "المكالمة الطويلة اللي قعدنا نتكلم فيها للفجر من غير ما نحس بالوقت.. كانت من أهدى وأحلى الليالي.",
    "moodEmoji": "✨",
    "date": "Day 096"
  },
  {
    "day": 97,
    "category": "memories",
    "categoryLabel": "ذكريات حلوة 💭",
    "title": "لما كنتي متوترة",
    "message": "فاكرة لما كنتي متوترة وخايفة من حاجة وفضلت جنبك أطمنك؟ فرحتي بنجاحك ساعتها كانت أكبر من أي فرحة.",
    "moodEmoji": "✨",
    "date": "Day 097"
  },
  {
    "day": 98,
    "category": "memories",
    "categoryLabel": "ذكريات حلوة 💭",
    "title": "الصوت اللي بحبه",
    "message": "أول تسجيل صوتي بعتيهولي.. سمعته بتاع عشر مرات ورا بعض ومكنتش مصدق حلاوة نبرتك.",
    "moodEmoji": "✨",
    "date": "Day 098"
  },
  {
    "day": 99,
    "category": "memories",
    "categoryLabel": "ذكريات حلوة 💭",
    "title": "الزعلة التافهة",
    "message": "فاكرة الزعلة التافهة اللي زعلناها زمان ورجعنا ضحكنا عليها بعدها بنص ساعة؟ طلعت حاجات بتقربنا أكتر.",
    "moodEmoji": "✨",
    "date": "Day 099"
  },
  {
    "day": 100,
    "category": "memories",
    "categoryLabel": "ذكريات حلوة 💭",
    "title": "الرسالة اللي فرحتني",
    "message": "في رسالة بعتيهالي زمان وأنا كنت متضايق أوي، غيرت مودي 180 درجة ومحتفظ بيها لغاية دلوقتي.",
    "moodEmoji": "✨",
    "date": "Day 100"
  },
  {
    "day": 101,
    "category": "memories",
    "categoryLabel": "ذكريات حلوة 💭",
    "title": "اليوم اللي عرفتك فيه بجد",
    "message": "اليوم اللي فتحتيلي فيه قلبك وحكيتيلي عن طفولتك وأحلامك.. من ساعتها حسيتك جزء من لحمي ودمي.",
    "moodEmoji": "✨",
    "date": "Day 101"
  },
  {
    "day": 102,
    "category": "memories",
    "categoryLabel": "ذكريات حلوة 💭",
    "title": "أول مرة ناديتك يا نوني",
    "message": "فاكرة أول مرة قولتلك فيها 'يا نوني'؟ ابتسمتي بخجل وقولتيلي الاسم ده حلو أوي منك.",
    "moodEmoji": "✨",
    "date": "Day 102"
  },
  {
    "day": 103,
    "category": "memories",
    "categoryLabel": "ذكريات حلوة 💭",
    "title": "النظرة اللي فضلت في بالي",
    "message": "في نظرة معينة بصيتهالي وإحنا ماشيين، حسيت فيها بكمية حنية ودفء خلت قلبي يطير.",
    "moodEmoji": "✨",
    "date": "Day 103"
  },
  {
    "day": 104,
    "category": "memories",
    "categoryLabel": "ذكريات حلوة 💭",
    "title": "أغنيتنا الأولى",
    "message": "أول أغنية سمعناها وسألنا بعض عليها وبقت من ساعتها الأغنية الرسمية لذكرياتنا.",
    "moodEmoji": "✨",
    "date": "Day 104"
  },
  {
    "day": 105,
    "category": "memories",
    "categoryLabel": "ذكريات حلوة 💭",
    "title": "اليوم المطير",
    "message": "اليوم اللي الجو كان ساقع ومطر وفضلنا نحكي ونتشارك الدفء بكلامنا الجميل.",
    "moodEmoji": "✨",
    "date": "Day 105"
  },
  {
    "day": 106,
    "category": "memories",
    "categoryLabel": "ذكريات حلوة 💭",
    "title": "ساعة الصراحة",
    "message": "لما قعدنا وصارحنا بعض بكل اللي جوانا من غير أي قيود، اللحظة دي بنينا بيها ثقة متتهزش أبداً.",
    "moodEmoji": "✨",
    "date": "Day 106"
  },
  {
    "day": 107,
    "category": "memories",
    "categoryLabel": "ذكريات حلوة 💭",
    "title": "لما عاندتي معايا",
    "message": "لما أصريتي على رأيك وطلعتي في الآخر غلطانة بس عاندتي برضه عشان متقوليش آسفة 😂 بحب عنادك ده أوي.",
    "moodEmoji": "✨",
    "date": "Day 107"
  },
  {
    "day": 108,
    "category": "memories",
    "categoryLabel": "ذكريات حلوة 💭",
    "title": "المفاجأة البسيطة",
    "message": "المفاجأة الصغيرة اللي عملتهالك وفرحتك بيها زي الأطفال.. لمعة عينيكي ساعتها كانت أحسن مكافأة.",
    "moodEmoji": "✨",
    "date": "Day 108"
  },
  {
    "day": 109,
    "category": "memories",
    "categoryLabel": "ذكريات حلوة 💭",
    "title": "كلام العيون",
    "message": "أوقات كتير كنا بنبص لبعض من غير ولا كلمة، وكل واحد فينا فاهم التاني عايز يقول إيه بالظبط.",
    "moodEmoji": "✨",
    "date": "Day 109"
  },
  {
    "day": 110,
    "category": "memories",
    "categoryLabel": "ذكريات حلوة 💭",
    "title": "أول صورة",
    "message": "أول صورة شوفتها ليكي وانبهرت بجمالك الطبيعي اللي مفيش فيه أي تصنع.",
    "moodEmoji": "✨",
    "date": "Day 110"
  },
  {
    "day": 111,
    "category": "memories",
    "categoryLabel": "ذكريات حلوة 💭",
    "title": "اليوم اللي قولتلك فيه بحبك",
    "message": "اليوم اللي اتجمعت فيه كل المشاعر اللي في قلبي وقولتلك بحبك.. كان أجمل قرار خدته.",
    "moodEmoji": "✨",
    "date": "Day 111"
  },
  {
    "day": 112,
    "category": "memories",
    "categoryLabel": "ذكريات حلوة 💭",
    "title": "ضحكتنا وسط الناس",
    "message": "فاكرة لما بصينا لبعض وسط ناس كتير وضحكنا عشان بس افتكرنا حاجة سوا ومحدش فاهم إحنا بنضحك على إيه؟",
    "moodEmoji": "✨",
    "date": "Day 112"
  },
  {
    "day": 113,
    "category": "memories",
    "categoryLabel": "ذكريات حلوة 💭",
    "title": "يوم ما كنت مريض",
    "message": "لما كنت تعبان وسؤالك واهتمامك كل شوية خلاني أحس إني خفيت لمجرد إنك مهتمة بيا.",
    "moodEmoji": "✨",
    "date": "Day 113"
  },
  {
    "day": 114,
    "category": "memories",
    "categoryLabel": "ذكريات حلوة 💭",
    "title": "الأحلام المشتركة",
    "message": "لما فضلنا نرسم شكل المستقبل سوا ونقول هنعمل كذا وهنروح كذا.. يارب كل ده يتحقق قريب.",
    "moodEmoji": "✨",
    "date": "Day 114"
  },
  {
    "day": 115,
    "category": "memories",
    "categoryLabel": "ذكريات حلوة 💭",
    "title": "الاعتراف الصغير",
    "message": "لما اعترفتيلي إنك كنتي بتفرحي لما ببعتلك رسايل من قبل ما نبقى قريبين كده 🥰",
    "moodEmoji": "✨",
    "date": "Day 115"
  },
  {
    "day": 116,
    "category": "morning",
    "categoryLabel": "صباح الخير ☀️",
    "title": "صباح النور",
    "message": "صباح الخير يا نوري.. أتمنى يومك النهاردة يكون خفيف ورايق ومليان حاجات حلوة زيك.",
    "moodEmoji": "☀️",
    "date": "Day 116"
  },
  {
    "day": 117,
    "category": "morning",
    "categoryLabel": "صباح الخير ☀️",
    "title": "بداية يوم جميل",
    "message": "صباح الورد يا نوني.. فتحي عينيكي وانتي مبتسمة، وافتكري إن في حد هنا بيحبك وبيتمنالك كل خير.",
    "moodEmoji": "☀️",
    "date": "Day 117"
  },
  {
    "day": 118,
    "category": "morning",
    "categoryLabel": "صباح الخير ☀️",
    "title": "شمس يومي",
    "message": "الشمس طلعت خلاص، بس يومي بجد مبيبدأش غير لما أقولك صباح الخير يا أحلى حاجة في حياتي.",
    "moodEmoji": "☀️",
    "date": "Day 118"
  },
  {
    "day": 119,
    "category": "morning",
    "categoryLabel": "صباح الخير ☀️",
    "title": "طاقة حب للصبح",
    "message": "صباحك سكر.. خدي نفس عميق وافتكري إنك شاطرة وقوية وهتعدي أي حاجة النهاردة.",
    "moodEmoji": "☀️",
    "date": "Day 119"
  },
  {
    "day": 120,
    "category": "morning",
    "categoryLabel": "صباح الخير ☀️",
    "title": "يا صباح الجمال",
    "message": "صباح الضحكة الحلوة اللي بتنور الكون كله.. يومك لطيف وهادي بإذن الله.",
    "moodEmoji": "☀️",
    "date": "Day 120"
  },
  {
    "day": 121,
    "category": "morning",
    "categoryLabel": "صباح الخير ☀️",
    "title": "أول فكرة الصبح",
    "message": "أول ما فتحت عيني جيتي في بالي علطول، وقولت لازم أكون أول واحد يبعتلك صباح الخير ❤️",
    "moodEmoji": "☀️",
    "date": "Day 121"
  },
  {
    "day": 122,
    "category": "morning",
    "categoryLabel": "صباح الخير ☀️",
    "title": "صباح التفائل",
    "message": "صباح الأمل يا نور.. متخليش أي حاجة تضايقك النهاردة وركزي بس في الحاجات اللي بتسعدك.",
    "moodEmoji": "☀️",
    "date": "Day 122"
  },
  {
    "day": 123,
    "category": "morning",
    "categoryLabel": "صباح الخير ☀️",
    "title": "فنجان قهوة وحبك",
    "message": "صباحك رايق زي ريحة القهوة الصبح.. متنسيش تفطري كويس وتاخدي بالك من نفسك.",
    "moodEmoji": "☀️",
    "date": "Day 123"
  },
  {
    "day": 124,
    "category": "morning",
    "categoryLabel": "صباح الخير ☀️",
    "title": "صباح خاص",
    "message": "صباح مخصص لنجمتي الوحيدة.. يارب كل خطوة تخطيها النهاردة تكون متيسرة ومليانة بركة.",
    "moodEmoji": "☀️",
    "date": "Day 124"
  },
  {
    "day": 125,
    "category": "morning",
    "categoryLabel": "صباح الخير ☀️",
    "title": "ابتسامة الصباح",
    "message": "عايزك أول ما تقري الرسالة دي تبتسمي، عشان ابتسامتك دي هي اللي بتنور الكون كله.",
    "moodEmoji": "☀️",
    "date": "Day 125"
  },
  {
    "day": 126,
    "category": "morning",
    "categoryLabel": "صباح الخير ☀️",
    "title": "صباح النجاح",
    "message": "صباح الهمة والنشاط يا شطورة.. واثق فيكي وفي قدراتك ويومك هيكون مليان إنجازات.",
    "moodEmoji": "☀️",
    "date": "Day 126"
  },
  {
    "day": 127,
    "category": "morning",
    "categoryLabel": "صباح الخير ☀️",
    "title": "نور الصباح",
    "message": "الصبح مبيكونش ليه طعم من غير صوتك أو رسايلك.. صباحك فل وياسمين يا نوري.",
    "moodEmoji": "☀️",
    "date": "Day 127"
  },
  {
    "day": 128,
    "category": "morning",
    "categoryLabel": "صباح الخير ☀️",
    "title": "رسالة صباحية دافية",
    "message": "ببعتلك حضن صباحي دافي يدفيكي في الجو ده ويحسسك بوجودي جنبك طول اليوم.",
    "moodEmoji": "☀️",
    "date": "Day 128"
  },
  {
    "day": 129,
    "category": "morning",
    "categoryLabel": "صباح الخير ☀️",
    "title": "صباح الهدوء",
    "message": "أتمنى تلاقي النهاردة سلام وهدوء في كل مكان تروحي فيه، وتبعد عنك أي دوشة تعكر مزاجك.",
    "moodEmoji": "☀️",
    "date": "Day 129"
  },
  {
    "day": 130,
    "category": "morning",
    "categoryLabel": "صباح الخير ☀️",
    "title": "صباح السعادة",
    "message": "لو السعادة ليها اسم هيبقى اسمك انتي.. صباحك سعادة بتملى أركان قلبك الطيب.",
    "moodEmoji": "☀️",
    "date": "Day 130"
  },
  {
    "day": 131,
    "category": "morning",
    "categoryLabel": "صباح الخير ☀️",
    "title": "صباح الرضا",
    "message": "صباح الرضا بقضاء ربنا والأمل في اللي جاي.. صباحك خير لا ينقطع أبداً يا نور.",
    "moodEmoji": "☀️",
    "date": "Day 131"
  },
  {
    "day": 132,
    "category": "morning",
    "categoryLabel": "صباح الخير ☀️",
    "title": "صباح الشوق",
    "message": "صحيح لسه الصبح، بس وحشتيني من دلوقتي أوي والله.. يومك لطيف يا نوني.",
    "moodEmoji": "☀️",
    "date": "Day 132"
  },
  {
    "day": 133,
    "category": "morning",
    "categoryLabel": "صباح الخير ☀️",
    "title": "صباح البراءة",
    "message": "صباح الخير لروحك النقية ووشك الملائكي اللي يريح الأعصاب.. بحبك.",
    "moodEmoji": "☀️",
    "date": "Day 133"
  },
  {
    "day": 134,
    "category": "morning",
    "categoryLabel": "صباح الخير ☀️",
    "title": "يومك جميل",
    "message": "زي ما انتي بتخلي حياتي حلوة، بتمنى من كل قلبي يومك ده يبقى أحسن يوم في الأسبوع.",
    "moodEmoji": "☀️",
    "date": "Day 134"
  },
  {
    "day": 135,
    "category": "morning",
    "categoryLabel": "صباح الخير ☀️",
    "title": "صباح التوفيق",
    "message": "ربنا يوفقك في كل خطوة ويعوض تعبك خير ويفرح قلبك باللي بتتمنيه.. صباح النور.",
    "moodEmoji": "☀️",
    "date": "Day 135"
  },
  {
    "day": 136,
    "category": "morning",
    "categoryLabel": "صباح الخير ☀️",
    "title": "أشرقي يا نوري",
    "message": "الكون مستني نورك عشان ينور.. يلا قومي واشرقي على الدنيا بجمالك.",
    "moodEmoji": "☀️",
    "date": "Day 136"
  },
  {
    "day": 137,
    "category": "morning",
    "categoryLabel": "صباح الخير ☀️",
    "title": "صباح الأمل",
    "message": "كل صبح بيجي هو فرصة جديدة لحاجة حلوة، وخليكي واثقة إن بكره أحسن من امبارح.",
    "moodEmoji": "☀️",
    "date": "Day 137"
  },
  {
    "day": 138,
    "category": "morning",
    "categoryLabel": "صباح الخير ☀️",
    "title": "صباح العسل",
    "message": "صباح العسل يا عسل حياتي.. اتفائلي خير واليوم هيعدي خفيف ولذيذ.",
    "moodEmoji": "☀️",
    "date": "Day 138"
  },
  {
    "day": 139,
    "category": "morning",
    "categoryLabel": "صباح الخير ☀️",
    "title": "صباح الحب الدائم",
    "message": "حبي ليكي مبيخلصش بالليل، بيصحى معايا كل يوم الصبح أكبر وأقوى.. صباح الورد.",
    "moodEmoji": "☀️",
    "date": "Day 139"
  },
  {
    "day": 140,
    "category": "morning",
    "categoryLabel": "صباح الخير ☀️",
    "title": "صباح الحنية",
    "message": "صباح الحنية لأحن وأطيب قلب في الدنيا.. يا نوني الغالية.",
    "moodEmoji": "☀️",
    "date": "Day 140"
  },
  {
    "day": 141,
    "category": "night",
    "categoryLabel": "قبل النوم 🌙",
    "title": "تصبحي على خير",
    "message": "تصبحي على خير يا نوري.. غمضي عينيكي وسيبي كل تعب اليوم ورا ضهرك، أحلامك هادية وجميلة زيك.",
    "moodEmoji": "🌙",
    "date": "Day 141"
  },
  {
    "day": 142,
    "category": "night",
    "categoryLabel": "قبل النوم 🌙",
    "title": "نوم الهنا",
    "message": "نامي وانتي مطمنة إن في حد بيحبك ويدعيلك كل ليلة قبل ما ينام.. تصبحي على ألف هنا يا نوني.",
    "moodEmoji": "🌙",
    "date": "Day 142"
  },
  {
    "day": 143,
    "category": "night",
    "categoryLabel": "قبل النوم 🌙",
    "title": "هدوء الليل",
    "message": "الليل هادي والنجوم منورة.. روحي نامي وارتاحي عشان تصحي بكرة منورة دنيتي كالعادة.",
    "moodEmoji": "🌙",
    "date": "Day 143"
  },
  {
    "day": 144,
    "category": "night",
    "categoryLabel": "قبل النوم 🌙",
    "title": "أحلام سعيدة",
    "message": "أتمنى ليكي أحلام سعيدة مليانة ورد وحاجات تفرح قلبك.. ليلة هادية يا نور.",
    "moodEmoji": "🌙",
    "date": "Day 144"
  },
  {
    "day": 145,
    "category": "night",
    "categoryLabel": "قبل النوم 🌙",
    "title": "راحة لقلبك",
    "message": "سيبي هموم بكرة لبكرة، والنهاردة خلاص خلص.. ريحي جسمك وبالك ونامي بسلام.",
    "moodEmoji": "🌙",
    "date": "Day 145"
  },
  {
    "day": 146,
    "category": "night",
    "categoryLabel": "قبل النوم 🌙",
    "title": "تصبحي على جنة",
    "message": "تصبحي على فرحة تملى قلبك لما تصحي.. ليلة دافية وحضن دافي من بعيد بيحميكي.",
    "moodEmoji": "🌙",
    "date": "Day 146"
  },
  {
    "day": 147,
    "category": "night",
    "categoryLabel": "قبل النوم 🌙",
    "title": "نجمتي الساهرة",
    "message": "حتى وانتي نايمة، بحسك نجمة بتنور في سما روحي ومبتغيبش أبداً.. تصبحي على خير.",
    "moodEmoji": "🌙",
    "date": "Day 147"
  },
  {
    "day": 148,
    "category": "night",
    "categoryLabel": "قبل النوم 🌙",
    "title": "سلام الليل",
    "message": "يارب ليلتك تكون مليانة سكينة وأمان، ومفيش أي كابوس أو فكرة وحشة تقلق منامك.",
    "moodEmoji": "🌙",
    "date": "Day 148"
  },
  {
    "day": 149,
    "category": "night",
    "categoryLabel": "قبل النوم 🌙",
    "title": "نومي يا نوني",
    "message": "نومي يا نوني وارتاحي، انتي تعبتي النهاردة وتستاهلي نوم عميق ومريح للأعصاب.",
    "moodEmoji": "🌙",
    "date": "Day 149"
  },
  {
    "day": 150,
    "category": "night",
    "categoryLabel": "قبل النوم 🌙",
    "title": "رسالة قبل المنام",
    "message": "حبيت أكون آخر حد يكلمك النهاردة ويقولك: بحبك وتصبحي على خير يا سكرتي.",
    "moodEmoji": "🌙",
    "date": "Day 150"
  },
  {
    "day": 151,
    "category": "night",
    "categoryLabel": "قبل النوم 🌙",
    "title": "القمر وجماله",
    "message": "القمر في السما بيسلم عليكي وبيقولك انتي الأصل وهو بس مجرد مراية لجمالك.",
    "moodEmoji": "🌙",
    "date": "Day 151"
  },
  {
    "day": 152,
    "category": "night",
    "categoryLabel": "قبل النوم 🌙",
    "title": "سريري والراحة",
    "message": "وانتي بتغمضي عينك، افتكري إني دايماً في ضهرك وسند ليكي في أي وقت.. ليلة سعيدة.",
    "moodEmoji": "🌙",
    "date": "Day 152"
  },
  {
    "day": 153,
    "category": "night",
    "categoryLabel": "قبل النوم 🌙",
    "title": "وداع يوم طويل",
    "message": "يوم طويل خلص بتعبه ومجهوده، دلوقتي وقت الراحة التامة.. تصبحي على نور.",
    "moodEmoji": "🌙",
    "date": "Day 153"
  },
  {
    "day": 154,
    "category": "night",
    "categoryLabel": "قبل النوم 🌙",
    "title": "دعوة الليل",
    "message": "دعيت ربنا الليلة دي يحفظك ويسعدك ويبعد عنك كل شر.. نوم العوافي يا أغلى الناس.",
    "moodEmoji": "🌙",
    "date": "Day 154"
  },
  {
    "day": 155,
    "category": "night",
    "categoryLabel": "قبل النوم 🌙",
    "title": "أفكار هادية",
    "message": "صفي ذهنك من أي حاجة زعلتك النهاردة، بكرة يوم جديد وبداية جديدة أحلى.",
    "moodEmoji": "🌙",
    "date": "Day 155"
  },
  {
    "day": 156,
    "category": "night",
    "categoryLabel": "قبل النوم 🌙",
    "title": "ملائكة تحرسك",
    "message": "استودعتك عند الله الذي لا تضيع ودائعه.. تنامي في حفظ الله ورعايته يا نور.",
    "moodEmoji": "🌙",
    "date": "Day 156"
  },
  {
    "day": 157,
    "category": "night",
    "categoryLabel": "قبل النوم 🌙",
    "title": "حلم جميل",
    "message": "يارب أحلم بيكي النهاردة، وتكوني في منامي زي ما انتي في كل لحظة في صحياني.",
    "moodEmoji": "🌙",
    "date": "Day 157"
  },
  {
    "day": 158,
    "category": "night",
    "categoryLabel": "قبل النوم 🌙",
    "title": "تصبحي على واقع أحلى",
    "message": "تصبحي على واقع أحلى من أي حلم اتمنيتيه.. ليلة وردية وهادية.",
    "moodEmoji": "🌙",
    "date": "Day 158"
  },
  {
    "day": 159,
    "category": "night",
    "categoryLabel": "قبل النوم 🌙",
    "title": "دفء الليالي",
    "message": "اتغطي كويس ومتخليش البرد يلمسك.. تصبحي على دفء وحب مبيخلصش.",
    "moodEmoji": "🌙",
    "date": "Day 159"
  },
  {
    "day": 160,
    "category": "night",
    "categoryLabel": "قبل النوم 🌙",
    "title": "نهاية يوم",
    "message": "اليوم اللي بينتهي بصوتك أو بكلمة منك بيبقى أحسن ختام.. تصبحي على خير يا حبيبتي.",
    "moodEmoji": "🌙",
    "date": "Day 160"
  },
  {
    "day": 161,
    "category": "night",
    "categoryLabel": "قبل النوم 🌙",
    "title": "راحة البال",
    "message": "يارب يرزقك نوم هني وراحة بال مبتفارقش تفكيرك.. تصبحي على سعادة.",
    "moodEmoji": "🌙",
    "date": "Day 161"
  },
  {
    "day": 162,
    "category": "night",
    "categoryLabel": "قبل النوم 🌙",
    "title": "النجوم بتغنيلك",
    "message": "شوفي النجوم في السما كأنها بتغنيلك تهويدة لطيفة عشان تنامي في هدوء.",
    "moodEmoji": "🌙",
    "date": "Day 162"
  },
  {
    "day": 163,
    "category": "night",
    "categoryLabel": "قبل النوم 🌙",
    "title": "أمان قلبي",
    "message": "نامي يا أمان قلبي وراحتي.. بكرة هستناكي تنوري دنيتي من جديد.",
    "moodEmoji": "🌙",
    "date": "Day 163"
  },
  {
    "day": 164,
    "category": "night",
    "categoryLabel": "قبل النوم 🌙",
    "title": "غمضي عينك",
    "message": "غمضي عينيكي الجميلين دول واستمتعي بالظلام الهادي.. تصبحي على هنا وسرور.",
    "moodEmoji": "🌙",
    "date": "Day 164"
  },
  {
    "day": 165,
    "category": "night",
    "categoryLabel": "قبل النوم 🌙",
    "title": "همسة ليلية",
    "message": "همسة صغيرة في ودنك قبل النوم: انتي غالية أوي أوي على قلبي ومقدرش أستغنى عنك.",
    "moodEmoji": "🌙",
    "date": "Day 165"
  },
  {
    "day": 166,
    "category": "missing",
    "categoryLabel": "وحشتيني 🥺",
    "title": "وحشتيني أوي",
    "message": "وحشتيني النهاردة بطريقة مش عارف أوصفها.. في فراغ في يومي مبيتمليش غير بوجودك.",
    "moodEmoji": "💫",
    "date": "Day 166"
  },
  {
    "day": 167,
    "category": "missing",
    "categoryLabel": "وحشتيني 🥺",
    "title": "مكانك الفاضي",
    "message": "لما بتمشي أو لما منتكلمش شوية، بحس المكان حواليا بقى فاضي وبارد.. وحشتيني يا نوني.",
    "moodEmoji": "💫",
    "date": "Day 167"
  },
  {
    "day": 168,
    "category": "missing",
    "categoryLabel": "وحشتيني 🥺",
    "title": "شوق مبيخلصش",
    "message": "مش عارف ليه كل ما أكون مبسوط بحس إن فرحتي ناقصة حتة، والحتة دي هي إنتي.",
    "moodEmoji": "💫",
    "date": "Day 168"
  },
  {
    "day": 169,
    "category": "missing",
    "categoryLabel": "وحشتيني 🥺",
    "title": "صوتك وحشني",
    "message": "وحشني أسمع رنة صوتك وضحكتك لما بتطلع من قلبك.. متغيبيش عني كتير.",
    "moodEmoji": "💫",
    "date": "Day 169"
  },
  {
    "day": 170,
    "category": "missing",
    "categoryLabel": "وحشتيني 🥺",
    "title": "في كل ركن",
    "message": "بشوفك في كل حاجة حواليا، في كل فكرة وكل أغنية.. انتي حاضرة حتى وانتي غايبة.",
    "moodEmoji": "💫",
    "date": "Day 170"
  },
  {
    "day": 171,
    "category": "missing",
    "categoryLabel": "وحشتيني 🥺",
    "title": "نفسي أشوفك",
    "message": "نفسي الوقت يطير دلوقتي عشان أشوفك وأتكلم معاكي براحتي.. وحشتيني بجد يا نور.",
    "moodEmoji": "💫",
    "date": "Day 171"
  },
  {
    "day": 172,
    "category": "missing",
    "categoryLabel": "وحشتيني 🥺",
    "title": "رسالة شوق سريعة",
    "message": "بس حبيت أقولك إنك وحشتيني. كده وخلاص ومن غير أي مقدمات 🥰",
    "moodEmoji": "💫",
    "date": "Day 172"
  },
  {
    "day": 173,
    "category": "missing",
    "categoryLabel": "وحشتيني 🥺",
    "title": "الشوق الغالب",
    "message": "حاولت أشغل نفسي بحاجات كتير النهاردة عشان مأفكرش، بس لقيتك انتي اللي مسيطرة على بالي.",
    "moodEmoji": "💫",
    "date": "Day 173"
  },
  {
    "day": 174,
    "category": "missing",
    "categoryLabel": "وحشتيني 🥺",
    "title": "الغياب ده صعب",
    "message": "الغياب ده أصعب حاجة عليا، مبحبش اليوم اللي ميبقاش فيه كلام بينا كفاية.",
    "moodEmoji": "💫",
    "date": "Day 174"
  },
  {
    "day": 175,
    "category": "missing",
    "categoryLabel": "وحشتيني 🥺",
    "title": "شوق العين",
    "message": "عيني اشتاقت لملامحك الهادية والضحكة اللي بتطمن قلبي بمجرد ما أشوفها.",
    "moodEmoji": "💫",
    "date": "Day 175"
  },
  {
    "day": 176,
    "category": "missing",
    "categoryLabel": "وحشتيني 🥺",
    "title": "وحشتني تفاصيلك",
    "message": "وحشني أسمعك وانتي بتحكيلي تفاصيل يومك التافهة والمهمة.. كل حاجة منك بتبقى حلوة.",
    "moodEmoji": "💫",
    "date": "Day 176"
  },
  {
    "day": 177,
    "category": "missing",
    "categoryLabel": "وحشتيني 🥺",
    "title": "دقايق بتمر ببطء",
    "message": "الوقت وإنتي مش موجودة بيعدي كأنه سنين.. وحشتيني يا أغلى ما عندي.",
    "moodEmoji": "💫",
    "date": "Day 177"
  },
  {
    "day": 178,
    "category": "missing",
    "categoryLabel": "وحشتيني 🥺",
    "title": "قلبي بيندهلك",
    "message": "قلبي عمال يسألني عليكي ويقولي: هي فين نور النهاردة؟",
    "moodEmoji": "💫",
    "date": "Day 178"
  },
  {
    "day": 179,
    "category": "missing",
    "categoryLabel": "وحشتيني 🥺",
    "title": "شوق مع كل نفس",
    "message": "مع كل نفس باخده بحس إني محتاجلك جنبي.. ربنا يقرب المسافات وتفضلي دايماً قريبة.",
    "moodEmoji": "💫",
    "date": "Day 179"
  },
  {
    "day": 180,
    "category": "missing",
    "categoryLabel": "وحشتيني 🥺",
    "title": "لهفة اللقاء",
    "message": "عندي لهفة مش طبيعية لليوم اللي هشوفك فيه تاني وأقعد أتكلم معاكي بالساعات.",
    "moodEmoji": "💫",
    "date": "Day 180"
  },
  {
    "day": 181,
    "category": "missing",
    "categoryLabel": "وحشتيني 🥺",
    "title": "وحشتني عفويتك",
    "message": "وحشتني عفويتك وكلامك اللي مفيش فيه أي تكلف.. وحشتيني يا نوري.",
    "moodEmoji": "💫",
    "date": "Day 181"
  },
  {
    "day": 182,
    "category": "missing",
    "categoryLabel": "وحشتيني 🥺",
    "title": "فراغ في الروح",
    "message": "في غيابك بحس إن روحي ناقصة حاجة أساسية، انتي الأكسجين اللي بيخليني عايش.",
    "moodEmoji": "💫",
    "date": "Day 182"
  },
  {
    "day": 183,
    "category": "missing",
    "categoryLabel": "وحشتيني 🥺",
    "title": "حكاية الشوق",
    "message": "الشوق ليكي ده مش اختيار، ده حاجة بتصحى وتنام معايا في كل لحظة.",
    "moodEmoji": "💫",
    "date": "Day 183"
  },
  {
    "day": 184,
    "category": "missing",
    "categoryLabel": "وحشتيني 🥺",
    "title": "مستنيكي",
    "message": "قاعد مستني رنتك أو رسالتك عشان قلبي يرجع يدق طبيعي تاني.",
    "moodEmoji": "💫",
    "date": "Day 184"
  },
  {
    "day": 185,
    "category": "missing",
    "categoryLabel": "وحشتيني 🥺",
    "title": "يا ترى بتفكري فيا؟",
    "message": "ساعات بسأل نفسي: هل أنا باجي في بالك في اللحظة دي زي ما انتي في بالي ليل نهار؟",
    "moodEmoji": "💫",
    "date": "Day 185"
  },
  {
    "day": 186,
    "category": "missing",
    "categoryLabel": "وحشتيني 🥺",
    "title": "شوق لا يوصف",
    "message": "لو كتبت مجلدات عن قد إيه وحشتيني، مش هيكفي ولا هيعبر عن جزء صغير من اللي جوايا.",
    "moodEmoji": "💫",
    "date": "Day 186"
  },
  {
    "day": 187,
    "category": "missing",
    "categoryLabel": "وحشتيني 🥺",
    "title": "نقص في السكر",
    "message": "حاسس بيومي ناقصه سكر وناقصه حلاوة.. وحشتيني يا سكرتي.",
    "moodEmoji": "💫",
    "date": "Day 187"
  },
  {
    "day": 188,
    "category": "missing",
    "categoryLabel": "وحشتيني 🥺",
    "title": "أيام ناقصة",
    "message": "الأيام اللي بتعدي من غير ما أسمعك بتبقى أيام ممسوحة من عمري وبحسها مش محسوبة.",
    "moodEmoji": "💫",
    "date": "Day 188"
  },
  {
    "day": 189,
    "category": "missing",
    "categoryLabel": "وحشتيني 🥺",
    "title": "نداء القلب",
    "message": "يا نوني.. انتي وحشاني أوي لدرجة توجع بس في نفس الوقت ممتعة عشان بحبك.",
    "moodEmoji": "💫",
    "date": "Day 189"
  },
  {
    "day": 190,
    "category": "missing",
    "categoryLabel": "وحشتيني 🥺",
    "title": "بفتكرك وببتسم",
    "message": "قاعد بفتكر مواقفنا سوا وببتسم لوحدي زي المجنون من كتر ما وحشتيني.",
    "moodEmoji": "💫",
    "date": "Day 190"
  },
  {
    "day": 191,
    "category": "funny",
    "categoryLabel": "ضحك وفرفشة 😂",
    "title": "الزعلة المشهورة",
    "message": "بالمناسبة، أنا لسه عند رأيي إنك بتعرفي تزعلي الواحد بطريقة محدش في الكوكب يعرف يعملها 😂 بس بحبك برضو!",
    "moodEmoji": "😂",
    "date": "Day 191"
  },
  {
    "day": 192,
    "category": "funny",
    "categoryLabel": "ضحك وفرفشة 😂",
    "title": "أنا مش قصير",
    "message": "فاكرة لما قعدتي تتنمري على طولي وقولتلك أنا طولي طيران حربي؟ لسه فاكرها ومش ناسيها ها 😒😂",
    "moodEmoji": "😂",
    "date": "Day 192"
  },
  {
    "day": 193,
    "category": "funny",
    "categoryLabel": "ضحك وفرفشة 😂",
    "title": "النوم سلطان",
    "message": "لو في بطولة في العالم للنوم في 3 ثواني، انتي هتاخدي الميدالية الذهبية بامتياز بدون منافس 😂",
    "moodEmoji": "😂",
    "date": "Day 193"
  },
  {
    "day": 194,
    "category": "funny",
    "categoryLabel": "ضحك وفرفشة 😂",
    "title": "الدراما كوين",
    "message": "ساعات بحسك بتتقمصي من حاجات خيالية وبتعملي سيناريو فيلم هندي كامل في دماغك 😂 بس سكرة في كل حالاتك.",
    "moodEmoji": "😂",
    "date": "Day 194"
  },
  {
    "day": 195,
    "category": "funny",
    "categoryLabel": "ضحك وفرفشة 😂",
    "title": "مين بيحب مين أكتر؟",
    "message": "بلاش ندخل في نقاش مين بيحب التاني أكتر عشان انتي عارفة كويس إني كسبان من قبل ما نبدأ 😌",
    "moodEmoji": "😂",
    "date": "Day 195"
  },
  {
    "day": 196,
    "category": "funny",
    "categoryLabel": "ضحك وفرفشة 😂",
    "title": "الأكل أولاً",
    "message": "بحس إن مكانتي في قلبك بتتهز شوية أول ما ريحة الأكل الحلو تطلع قدامك.. مفيش أمان ليكي 😂",
    "moodEmoji": "😂",
    "date": "Day 196"
  },
  {
    "day": 197,
    "category": "funny",
    "categoryLabel": "ضحك وفرفشة 😂",
    "title": "الرد المتأخر",
    "message": "بتردي بعد خمس ساعات وتقوليلي 'كنت نايمة ومعلش التليفون كان سايلنت'.. حافظ السيناريو ده صم 😂",
    "moodEmoji": "😂",
    "date": "Day 197"
  },
  {
    "day": 198,
    "category": "funny",
    "categoryLabel": "ضحك وفرفشة 😂",
    "title": "لما تعملي مش زعلانة",
    "message": "أحلى حاجة لما تقوليلي 'براحتك' أو 'أنا تمام مفيش حاجة'.. ساعتها بعرف إن في مصيبة هتحصل بعد ثواني 😂",
    "moodEmoji": "😂",
    "date": "Day 198"
  },
  {
    "day": 199,
    "category": "funny",
    "categoryLabel": "ضحك وفرفشة 😂",
    "title": "ضحكتك اللي تفضح",
    "message": "ضحكتك لما بتطلع بصوت عالي بتفضحنا في أي مكان، بس والله العظيم دي أحلى فضيحة في حياتي 😂",
    "moodEmoji": "😂",
    "date": "Day 199"
  },
  {
    "day": 200,
    "category": "funny",
    "categoryLabel": "ضحك وفرفشة 😂",
    "title": "اختياراتك في الأفلام",
    "message": "أفلام الرعب اللي بتختاريها وبعد دقيقتين تخبي وشك وتقوليلي اطفي التلفزيون.. طب اختارتيها ليه من الأول؟ 😂",
    "moodEmoji": "😂",
    "date": "Day 200"
  },
  {
    "day": 201,
    "category": "funny",
    "categoryLabel": "ضحك وفرفشة 😂",
    "title": "العند طبع فيكي",
    "message": "العند ده متربي فيكي وواخد راحته ع الآخر، بس الصراحة حتى وانتي بتعاندي بتبقي قمر.",
    "moodEmoji": "😂",
    "date": "Day 201"
  },
  {
    "day": 202,
    "category": "funny",
    "categoryLabel": "ضحك وفرفشة 😂",
    "title": "التصوير اللانهائي",
    "message": "بتاخدي 400 صورة عشان تختاري صورة واحدة بس ومترديش توريني الباقي بحجة إنك مش عاجباكي فيهم 😂",
    "moodEmoji": "😂",
    "date": "Day 202"
  },
  {
    "day": 203,
    "category": "funny",
    "categoryLabel": "ضحك وفرفشة 😂",
    "title": "مشاكل التفكير الكتير",
    "message": "بتفكري في حاجات ممكن تحصل سنة 2045 ومقلقة منها من دلوقتي.. هدي اللعب شوية يا نوني 😂",
    "moodEmoji": "😂",
    "date": "Day 203"
  },
  {
    "day": 204,
    "category": "funny",
    "categoryLabel": "ضحك وفرفشة 😂",
    "title": "لو سيبتك جعانة",
    "message": "أهم نصيحة اتعلمتها في حياتي: اوعى تسيب نور جعانة.. بتتحولي لكائن تاني خالص 😂",
    "moodEmoji": "😂",
    "date": "Day 204"
  },
  {
    "day": 205,
    "category": "funny",
    "categoryLabel": "ضحك وفرفشة 😂",
    "title": "الميكب اللي مخلصش",
    "message": "خمس دقايق وأكون جاهزة.. الجملة دي بتعني في قاموسك ساعة ونص بالتمام والكمال ⏱️😂",
    "moodEmoji": "😂",
    "date": "Day 205"
  },
  {
    "day": 206,
    "category": "funny",
    "categoryLabel": "ضحك وفرفشة 😂",
    "title": "الشر المبطن",
    "message": "بتعملي نفسك بريئة وانتي مدبرة نص المقالب اللي بتحصل، بس قلبي مبيعرفش يزعل منك.",
    "moodEmoji": "😂",
    "date": "Day 206"
  },
  {
    "day": 207,
    "category": "funny",
    "categoryLabel": "ضحك وفرفشة 😂",
    "title": "التسوق العجيب",
    "message": "بتنزلي عشان تشتري توكة شعر وترجعي بشنطتين هدوم ومبتشتريش التوكة أصلاً 😂",
    "moodEmoji": "😂",
    "date": "Day 207"
  },
  {
    "day": 208,
    "category": "funny",
    "categoryLabel": "ضحك وفرفشة 😂",
    "title": "النكتة البايخة",
    "message": "لما بقول نكتة بايخة وتعملي وش القرف بس في الآخر بتضحكي غصب عنك.. شوفتك وقفشتك!",
    "moodEmoji": "😂",
    "date": "Day 208"
  },
  {
    "day": 209,
    "category": "funny",
    "categoryLabel": "ضحك وفرفشة 😂",
    "title": "لما تفصلي",
    "message": "بحب اللحظة اللي بتفصلي فيها شحن فجأة وتبقى عينك هتقفل ومش قادرة تركبي جملتين على بعض 😂",
    "moodEmoji": "😂",
    "date": "Day 209"
  },
  {
    "day": 210,
    "category": "funny",
    "categoryLabel": "ضحك وفرفشة 😂",
    "title": "حرب الشات",
    "message": "الستيكرز والرياكشنات اللي بتبعتيها في الشات بتعبر عن مدى جنانك اللطيف اللي بحبه.",
    "moodEmoji": "😂",
    "date": "Day 210"
  },
  {
    "day": 211,
    "category": "funny",
    "categoryLabel": "ضحك وفرفشة 😂",
    "title": "مين الصح؟",
    "message": "حتى لما تطلعي غلطانة بتعرفي تقلبي الطربيزة وتطلعيني أنا اللي غلطان.. موهبة تحسدي عليها الصراحة 😂",
    "moodEmoji": "😂",
    "date": "Day 211"
  },
  {
    "day": 212,
    "category": "funny",
    "categoryLabel": "ضحك وفرفشة 😂",
    "title": "الكسوف المفاجئ",
    "message": "فجأة تبقي بتتكلمي وشجاعة وفجأة وشك يحمر وتتكسفي من كلمة بسيطة.. بجد كيوت أوي.",
    "moodEmoji": "😂",
    "date": "Day 212"
  },
  {
    "day": 213,
    "category": "funny",
    "categoryLabel": "ضحك وفرفشة 😂",
    "title": "صوتك وانتي صاحية",
    "message": "صوتك أول ما تصحي من النوم بيبقى كأنك طالعة من معركة حربية، بس برضه بحبه يا نوني 😂",
    "moodEmoji": "😂",
    "date": "Day 213"
  },
  {
    "day": 214,
    "category": "funny",
    "categoryLabel": "ضحك وفرفشة 😂",
    "title": "حكاية الدايت",
    "message": "دايت هيبدأ من يوم السبت.. السبت ده بقاله 3 سنين مجاش لسه تقريباً 😂",
    "moodEmoji": "😂",
    "date": "Day 214"
  },
  {
    "day": 215,
    "category": "funny",
    "categoryLabel": "ضحك وفرفشة 😂",
    "title": "الزهايمر المبكر",
    "message": "بتنسي حاجتك في كل حتة وتفضلي تدوري عليها وهي في إيدك أصلاً.. قمة التركيز ماشاء الله 😂",
    "moodEmoji": "😂",
    "date": "Day 215"
  },
  {
    "day": 216,
    "category": "deep",
    "categoryLabel": "كلام من القلب 🧠",
    "title": "فلسفة الوجود",
    "message": "يمكن أكتر حاجة فهمتها بعد ما عرفتك إن وجود شخص واحد بس ممكن يغير معنى الحياة وشكل الأيام كاملة.",
    "moodEmoji": "🤍",
    "date": "Day 216"
  },
  {
    "day": 217,
    "category": "deep",
    "categoryLabel": "كلام من القلب 🧠",
    "title": "الروح اللي بترتاح",
    "message": "في أرواح لما بتتقابل بتحس إنها كانت عارضة بعض من آلاف السنين.. روحي لقت راحتها معاكي انتي يا نور.",
    "moodEmoji": "🤍",
    "date": "Day 217"
  },
  {
    "day": 218,
    "category": "deep",
    "categoryLabel": "كلام من القلب 🧠",
    "title": "النضج معاكي",
    "message": "الحب الحقيقي مش إننا نبقى متطابقين، الحب إننا نكبر سوا ونتعلم نتقبل اختلافاتنا بحب وصبر.",
    "moodEmoji": "🤍",
    "date": "Day 218"
  },
  {
    "day": 219,
    "category": "deep",
    "categoryLabel": "كلام من القلب 🧠",
    "title": "العالم وزحمته",
    "message": "وسط الدوشة والسباق اللي الناس عايشة فيه، وجودك بيمثل الواحة الهادية اللي بهرب ليها عشان أسترد نفسي.",
    "moodEmoji": "🤍",
    "date": "Day 219"
  },
  {
    "day": 220,
    "category": "deep",
    "categoryLabel": "كلام من القلب 🧠",
    "title": "قيمة البساطة",
    "message": "اتعلمت معاكي إن السعادة مش في الحاجات الكبيرة والخيالية، السعادة في فنجان قهوة ومكالمة صادقة وضحكة من القلب.",
    "moodEmoji": "🤍",
    "date": "Day 220"
  },
  {
    "day": 221,
    "category": "deep",
    "categoryLabel": "كلام من القلب 🧠",
    "title": "الأثر اللي مبيتمسحش",
    "message": "في ناس بتعدي في حياتنا وتختفي، وفي ناس بيحفروا مكانهم في الروح ومفيش قوة في الأرض تقدر تمسح أثرهم.",
    "moodEmoji": "🤍",
    "date": "Day 221"
  },
  {
    "day": 222,
    "category": "deep",
    "categoryLabel": "كلام من القلب 🧠",
    "title": "الصدق فوق كل شيء",
    "message": "أكبر نعمة بين اتنين هي الصدق المطلق.. إني أقدر أكون ضعيف قدامك من غير ما أخاف إنك تقللي مني.",
    "moodEmoji": "🤍",
    "date": "Day 222"
  },
  {
    "day": 223,
    "category": "deep",
    "categoryLabel": "كلام من القلب 🧠",
    "title": "نضوج المشاعر",
    "message": "حبي ليكي اتعدى مرحلة الإعجاب السطحي، بقى جزء من هويتي وطريقتي في رؤية كل شيء حواليا.",
    "moodEmoji": "🤍",
    "date": "Day 223"
  },
  {
    "day": 224,
    "category": "deep",
    "categoryLabel": "كلام من القلب 🧠",
    "title": "الزمن والذكريات",
    "message": "الزمن بيمر بسرعة، بس اللحظات اللي بنقضيها بحب هي الحاجة الوحيدة اللي بتفضل ثابتة ومبتتأثرش بالوقت.",
    "moodEmoji": "🤍",
    "date": "Day 224"
  },
  {
    "day": 225,
    "category": "deep",
    "categoryLabel": "كلام من القلب 🧠",
    "title": "القوة في اللطف",
    "message": "اكتشفت فيكي إن قمة القوة في قمة اللطف والرحمة، وإن القلب الطيب مش نقطة ضعف أبداً ده قمة الشجاعة.",
    "moodEmoji": "🤍",
    "date": "Day 225"
  },
  {
    "day": 226,
    "category": "deep",
    "categoryLabel": "كلام من القلب 🧠",
    "title": "المرآة",
    "message": "انتي بتعكسي أحسن نسخة مني، بتخليني أشوف حاجات حلوة في نفسي مكنتش واخد بالي منها زمان.",
    "moodEmoji": "🤍",
    "date": "Day 226"
  },
  {
    "day": 227,
    "category": "deep",
    "categoryLabel": "كلام من القلب 🧠",
    "title": "معنى البيت",
    "message": "البيت مش جدران وسقف، البيت هو الشخص اللي بتحس معاه إنك في أمان وإنك مش محتاج تدافع عن نفسك.",
    "moodEmoji": "🤍",
    "date": "Day 227"
  },
  {
    "day": 228,
    "category": "deep",
    "categoryLabel": "كلام من القلب 🧠",
    "title": "رحلة الحياة",
    "message": "الحياة رحلة صعبة وطويلة، ومفيش رفيق أحسن ولا أوفى منك أكمل معاه الطريق ده كله.",
    "moodEmoji": "🤍",
    "date": "Day 228"
  },
  {
    "day": 229,
    "category": "deep",
    "categoryLabel": "كلام من القلب 🧠",
    "title": "الصمت المريح",
    "message": "أعلى درجات التفاهم لما نقعد ساكتين سوا وكل واحد فينا حاسس بالراحة ومش محتاج يملى الفراغ بكلام ملوش لازمة.",
    "moodEmoji": "🤍",
    "date": "Day 229"
  },
  {
    "day": 230,
    "category": "deep",
    "categoryLabel": "كلام من القلب 🧠",
    "title": "سر الطمأنينة",
    "message": "الطمأنينة دي أغلى عملة في الوجود، وانتي بنك الطمأنينة بتاعي اللي بلجأ له كل ما الدنيا تهزني.",
    "moodEmoji": "🤍",
    "date": "Day 230"
  },
  {
    "day": 231,
    "category": "deep",
    "categoryLabel": "كلام من القلب 🧠",
    "title": "المستقبل كفكرة",
    "message": "المستقبل كان بيخوفني زمان وكنت شايل همه، بس دلوقتي بوجودك بقى عندي أمل وشغف أشوف إيه اللي هيحصل.",
    "moodEmoji": "🤍",
    "date": "Day 231"
  },
  {
    "day": 232,
    "category": "deep",
    "categoryLabel": "كلام من القلب 🧠",
    "title": "أبعاد الحب",
    "message": "الحب الحقيقي مش أنانية، الحب هو إنك تفرح لنجاح اللي بتحبه حتى لو كان واخد من وقته معاك.",
    "moodEmoji": "🤍",
    "date": "Day 232"
  },
  {
    "day": 233,
    "category": "deep",
    "categoryLabel": "كلام من القلب 🧠",
    "title": "صفاء النية",
    "message": "صفاء نيتك وطهارة سريرتك هما اللي مخلين ربنا يوفقك ويحبب فيكي خلقه.. خليكي دايماً زي ما انتي.",
    "moodEmoji": "🤍",
    "date": "Day 233"
  },
  {
    "day": 234,
    "category": "deep",
    "categoryLabel": "كلام من القلب 🧠",
    "title": "معنى الاختيار",
    "message": "الحب مش مجرد مشاعر غصب عننا، الحب قرار واختيار واعي إننا نفضل متمسكين ببعض كل يوم.",
    "moodEmoji": "🤍",
    "date": "Day 234"
  },
  {
    "day": 235,
    "category": "deep",
    "categoryLabel": "كلام من القلب 🧠",
    "title": "التوازن النفسي",
    "message": "انتي التوازن اللي كان ناقص حياتي، الميزان اللي رجع كل حاجة لمكانها الطبيعي في عقلي وقلبي.",
    "moodEmoji": "🤍",
    "date": "Day 235"
  },
  {
    "day": 236,
    "category": "deep",
    "categoryLabel": "كلام من القلب 🧠",
    "title": "الحب الحقيقي يبني",
    "message": "الحب اللي بيبني ويزود ويضيف للشخص هو ده الحب اللي يستاهل، وده بالظبط اللي لقيتي معاكي.",
    "moodEmoji": "🤍",
    "date": "Day 236"
  },
  {
    "day": 237,
    "category": "deep",
    "categoryLabel": "كلام من القلب 🧠",
    "title": "العطاء المتبادل",
    "message": "أجمل ما في علاقتنا هو العطاء المتبادل اللي من غير حساب ولا من ولا تمنن.. حاجة نقية جداً.",
    "moodEmoji": "🤍",
    "date": "Day 237"
  },
  {
    "day": 238,
    "category": "deep",
    "categoryLabel": "كلام من القلب 🧠",
    "title": "قوة المسامحة",
    "message": "قدرتك على التسامح وتفويت الصغائر بتثبتلي كل يوم إنك صاحبة قلب كبير وروح واعية ونادرة.",
    "moodEmoji": "🤍",
    "date": "Day 238"
  },
  {
    "day": 239,
    "category": "deep",
    "categoryLabel": "كلام من القلب 🧠",
    "title": "تكامل الأرواح",
    "message": "حاسس إننا بنكمل نواقص بعض، في الحتة اللي أنا بضعف فيها بلاقيكي قوية، والحتة اللي بتتوهي فيها بتلاقيني دليلك.",
    "moodEmoji": "🤍",
    "date": "Day 239"
  },
  {
    "day": 240,
    "category": "deep",
    "categoryLabel": "كلام من القلب 🧠",
    "title": "نعمة الإحساس",
    "message": "إن الإنسان يلاقي حد يحس بيه من غير ما يتكلم دي نعمة متتقدرش بتمن، وانتي النعمة دي.",
    "moodEmoji": "🤍",
    "date": "Day 240"
  },
  {
    "day": 241,
    "category": "future",
    "categoryLabel": "لبكرة وللجاي 💌",
    "title": "حلم بكرة",
    "message": "نفسي بعد وقت طويل وسنين كتير نفتكر الأيام دي ونضحك ونقول: فاكرة لما كنا بنحلم بده؟ وحققناه سوا.",
    "moodEmoji": "🚀",
    "date": "Day 241"
  },
  {
    "day": 242,
    "category": "future",
    "categoryLabel": "لبكرة وللجاي 💌",
    "title": "بيتنا الصغير",
    "message": "شايف بكرة بيتنا الصغير اللي مليان دفء وضحك وتفاصيلنا الحلوة، وكل ركن فيه معمول بحب.",
    "moodEmoji": "🚀",
    "date": "Day 242"
  },
  {
    "day": 243,
    "category": "future",
    "categoryLabel": "لبكرة وللجاي 💌",
    "title": "رحلاتنا الجاية",
    "message": "مجهز لستة أماكن نفسي نسافرها سوا، ونلف العالم وإيدي في إيدك ونتصور صور هبلة في كل بلد.",
    "moodEmoji": "🚀",
    "date": "Day 243"
  },
  {
    "day": 244,
    "category": "future",
    "categoryLabel": "لبكرة وللجاي 💌",
    "title": "عيلة سوا",
    "message": "شايف مستقبلنا عيلة جميلة متفاهمة، بنكبر سوا وبنعيش كل لحظة بحلوها ومرها متماسكين.",
    "moodEmoji": "🚀",
    "date": "Day 244"
  },
  {
    "day": 245,
    "category": "future",
    "categoryLabel": "لبكرة وللجاي 💌",
    "title": "شيبنا سوا",
    "message": "نفسي نكبر مع بعض وشعرنا يبيض وملامحنا تتغير، وتفضل نفس النظرة ونفس الحب في عيوننا.",
    "moodEmoji": "🚀",
    "date": "Day 245"
  },
  {
    "day": 246,
    "category": "future",
    "categoryLabel": "لبكرة وللجاي 💌",
    "title": "أهدافك ونجاحك",
    "message": "شايفك في المستقبل القريب ناجحة ومحققة كل اللي حلمتي بيه، وهكون أول واحد واقف وراكي بيسقف ودموعه في عينه من الفرحة.",
    "moodEmoji": "🚀",
    "date": "Day 246"
  },
  {
    "day": 247,
    "category": "future",
    "categoryLabel": "لبكرة وللجاي 💌",
    "title": "سنين مكملة",
    "message": "الـ 365 يوم دول مجرد بداية، أنا ناوي أجدد حبي ليكي 365 يوم تانية وتالتة ورابعة لآخر العمر.",
    "moodEmoji": "🚀",
    "date": "Day 247"
  },
  {
    "day": 248,
    "category": "future",
    "categoryLabel": "لبكرة وللجاي 💌",
    "title": "تحديات الجاي",
    "message": "عارف إن الطريق مش دايماً مفروش ورد، بس واثق إننا وإحنا سوا هنكسر أي صخر يقابلنا.",
    "moodEmoji": "🚀",
    "date": "Day 248"
  },
  {
    "day": 249,
    "category": "future",
    "categoryLabel": "لبكرة وللجاي 💌",
    "title": "بكرة أحلى بيكي",
    "message": "طول ما إنتي في خططي للمستقبل، أنا متطمن وببص لبكرة بشغف وفرحة مش بخوف.",
    "moodEmoji": "🚀",
    "date": "Day 249"
  },
  {
    "day": 250,
    "category": "future",
    "categoryLabel": "لبكرة وللجاي 💌",
    "title": "تفاصيل البيت",
    "message": "عايزك تختاري ديكور وألوان كل حاجة على ذوقك، عشان البيت يكون شبهك ومنور بنورك.",
    "moodEmoji": "🚀",
    "date": "Day 250"
  },
  {
    "day": 251,
    "category": "future",
    "categoryLabel": "لبكرة وللجاي 💌",
    "title": "أيام جاية",
    "message": "شايف أيام جاية فيها نجاحات وأفراح هتعوضنا عن أي تعب عيشناه في الفترات اللي فاتت.",
    "moodEmoji": "🚀",
    "date": "Day 251"
  },
  {
    "day": 252,
    "category": "future",
    "categoryLabel": "لبكرة وللجاي 💌",
    "title": "خطوة بخطوة",
    "message": "هنمشي سوا خطوة بخطوة، مش مستعجلين بس واثقين في طريقنا وبندعي ربنا يبارك في كل خطوة.",
    "moodEmoji": "🚀",
    "date": "Day 252"
  },
  {
    "day": 253,
    "category": "future",
    "categoryLabel": "لبكرة وللجاي 💌",
    "title": "ذكريات المستقبل",
    "message": "متحمس أوي للذكريات اللي لسه معملناهاش، وللضحكات اللي لسه مضحكناهاش سوا.",
    "moodEmoji": "🚀",
    "date": "Day 253"
  },
  {
    "day": 254,
    "category": "future",
    "categoryLabel": "لبكرة وللجاي 💌",
    "title": "فرحتنا الكبيرة",
    "message": "مستني اليوم اللي هلبسك فيه الخاتم ونبقى سوا قدام الدنيا كلها ونقفل باب واحد علينا.",
    "moodEmoji": "🚀",
    "date": "Day 254"
  },
  {
    "day": 255,
    "category": "future",
    "categoryLabel": "لبكرة وللجاي 💌",
    "title": "سند للمستقبل",
    "message": "بوعدك في المستقبل إني أكون السند اللي عمره ما يميل، والكتف اللي ترتاحي عليه وانتي متطمنة.",
    "moodEmoji": "🚀",
    "date": "Day 255"
  },
  {
    "day": 256,
    "category": "future",
    "categoryLabel": "لبكرة وللجاي 💌",
    "title": "أحلام متجددة",
    "message": "كل ما نحقق حلم هنخترع حلم جديد، عشان نفضل دايماً بنجري سوا ونعيش الحياة بشغف.",
    "moodEmoji": "🚀",
    "date": "Day 256"
  },
  {
    "day": 257,
    "category": "future",
    "categoryLabel": "لبكرة وللجاي 💌",
    "title": "سفرية بالليل",
    "message": "نفسي في يوم نسوق بالعربية بالليل على طريق فاضي وموسيقى هادية ونقعد نحكي في كل حاجة.",
    "moodEmoji": "🚀",
    "date": "Day 257"
  },
  {
    "day": 258,
    "category": "future",
    "categoryLabel": "لبكرة وللجاي 💌",
    "title": "أمان ولادنا",
    "message": "شايفك أحن وأجمل أم في الدنيا، بتربي ولادنا على نفس القيم والقلب الأبيض اللي عندك.",
    "moodEmoji": "🚀",
    "date": "Day 258"
  },
  {
    "day": 259,
    "category": "future",
    "categoryLabel": "لبكرة وللجاي 💌",
    "title": "مفاجآت لسه جاية",
    "message": "مجهزلك مفاجآت كتير في المستقبل هتفرحك، وكل يوم هفكر إزاي أسعدك بطريقة جديدة.",
    "moodEmoji": "🚀",
    "date": "Day 259"
  },
  {
    "day": 260,
    "category": "future",
    "categoryLabel": "لبكرة وللجاي 💌",
    "title": "شروق الشمس سوا",
    "message": "نفسي نقعد على البحر الصبح بدري ونتفرج على شروق الشمس وإحنا ساكتين وساندين على بعض.",
    "moodEmoji": "🚀",
    "date": "Day 260"
  },
  {
    "day": 261,
    "category": "future",
    "categoryLabel": "لبكرة وللجاي 💌",
    "title": "استقرار نفسي",
    "message": "المستقبل معاكي يعني استقرار، يعني حياة هادية بعيدة عن الصراعات ومبنية على التفاهم.",
    "moodEmoji": "🚀",
    "date": "Day 261"
  },
  {
    "day": 262,
    "category": "future",
    "categoryLabel": "لبكرة وللجاي 💌",
    "title": "عمر طويل بحب",
    "message": "بدعي ربنا يطول في عمرنا على طاعته ويبارك في حبنا ويفضل دايماً في ازدهار.",
    "moodEmoji": "🚀",
    "date": "Day 262"
  },
  {
    "day": 263,
    "category": "future",
    "categoryLabel": "لبكرة وللجاي 💌",
    "title": "نجاحنا المشترك",
    "message": "أجمل ما في بكرة إننا مش بنفكر في نجاح فردي، بنفكر في نجاحنا إحنا الاتنين كفريق واحد.",
    "moodEmoji": "🚀",
    "date": "Day 263"
  },
  {
    "day": 264,
    "category": "future",
    "categoryLabel": "لبكرة وللجاي 💌",
    "title": "وعد بكرة",
    "message": "وعد مني ليكي في المستقبل إني أفضل أحترمك وأقدرك وأشوفك أهم أولوياتي مهما كترت المشاغل.",
    "moodEmoji": "🚀",
    "date": "Day 264"
  },
  {
    "day": 265,
    "category": "future",
    "categoryLabel": "لبكرة وللجاي 💌",
    "title": "لبكرة وبعده",
    "message": "لبكرة، وللسنة الجاية، ولعشرين سنة قدام.. قلبي ليكي ونبضي ليكي وملكك لوحدك يا نوري.",
    "moodEmoji": "🚀",
    "date": "Day 265"
  },
  {
    "day": 266,
    "category": "cute",
    "categoryLabel": "حركات لطيفة 🥰",
    "title": "خدودك الحلوة",
    "message": "عارفة لما بتضحكي وعينيكي تضيق كده؟ بتبقى حتة سكرة والله وعايز أقرص خدودك دول 🥰",
    "moodEmoji": "🌸",
    "date": "Day 266"
  },
  {
    "day": 267,
    "category": "cute",
    "categoryLabel": "حركات لطيفة 🥰",
    "title": "الدلع ليكي",
    "message": "الدلع ده ميتعملش غير ليكي انتي، مخلوقة عشان تتدلعي وتتعتني بيكي زي الأميرة.",
    "moodEmoji": "🌸",
    "date": "Day 267"
  },
  {
    "day": 268,
    "category": "cute",
    "categoryLabel": "حركات لطيفة 🥰",
    "title": "نبرة صوتك",
    "message": "نبرة صوتك لما بتكوني بتطلبي حاجة بتبقى لطيفة أوي ومفيش أي حد في الدنيا يقدر يقولك لأ.",
    "moodEmoji": "🌸",
    "date": "Day 268"
  },
  {
    "day": 269,
    "category": "cute",
    "categoryLabel": "حركات لطيفة 🥰",
    "title": "يا كتكوتة",
    "message": "ساعات بحسك كتكوتة صغيرة محتاجة اللي ياخد باله منها ويحميها من الهوا الطاير.",
    "moodEmoji": "🌸",
    "date": "Day 269"
  },
  {
    "day": 270,
    "category": "cute",
    "categoryLabel": "حركات لطيفة 🥰",
    "title": "عطسة صغيرة",
    "message": "حتى طريقتك وانتي بتعطسي كيوت أوي وبتضحكني في سري كل مرة 😂",
    "moodEmoji": "🌸",
    "date": "Day 270"
  },
  {
    "day": 271,
    "category": "cute",
    "categoryLabel": "حركات لطيفة 🥰",
    "title": "غمزتك الخفيفة",
    "message": "حركات وشك العفوية وانتي بتشرحي حاجة بحماس دي أكتر حاجة ممتعة في اليوم.",
    "moodEmoji": "🌸",
    "date": "Day 271"
  },
  {
    "day": 272,
    "category": "cute",
    "categoryLabel": "حركات لطيفة 🥰",
    "title": "نجمة كيوت",
    "message": "انتي ألطف كائن ربنا خلقه على وجه الأرض، بجد مفيش في لطافتك ورقتك دي.",
    "moodEmoji": "🌸",
    "date": "Day 272"
  },
  {
    "day": 273,
    "category": "cute",
    "categoryLabel": "حركات لطيفة 🥰",
    "title": "يا فراشة",
    "message": "زي الفراشة اللي بتتنقل بخفة وتفرح كل اللي يشوفها.. دي انتي يا نوني.",
    "moodEmoji": "🌸",
    "date": "Day 273"
  },
  {
    "day": 274,
    "category": "cute",
    "categoryLabel": "حركات لطيفة 🥰",
    "title": "حركات إيدك",
    "message": "بحب جداً حركات إيديكي وانتي بتتكلمي وتعبيرات صوابعك.. بتأملك وأنا ساكت.",
    "moodEmoji": "🌸",
    "date": "Day 274"
  },
  {
    "day": 275,
    "category": "cute",
    "categoryLabel": "حركات لطيفة 🥰",
    "title": "الأرنوبة",
    "message": "ساعات بتعملي حركات شبه الأرانب الصغيرة كده وبتخليني أموت فيكي من الضحك والجمال.",
    "moodEmoji": "🌸",
    "date": "Day 275"
  },
  {
    "day": 276,
    "category": "cute",
    "categoryLabel": "حركات لطيفة 🥰",
    "title": "رسالة روقان",
    "message": "ببعتلك وردة افتراضية 🌹 وحتة شيكولاتة 🍫 وبوسة على راسك عشان تروقي وتبقي مبسوطة.",
    "moodEmoji": "🌸",
    "date": "Day 276"
  },
  {
    "day": 277,
    "category": "cute",
    "categoryLabel": "حركات لطيفة 🥰",
    "title": "لبسك الشيك",
    "message": "ذوقك في لبسك واختيارك للألوان دايماً راقي وشيك ومخليكي مختلفة عن أي حد.",
    "moodEmoji": "🌸",
    "date": "Day 277"
  },
  {
    "day": 278,
    "category": "cute",
    "categoryLabel": "حركات لطيفة 🥰",
    "title": "طريقتك في الأكل",
    "message": "حتى وانتي بتاكلي وبتقولي 'اممم حلوة أوي دي' بتبقي طفلة صغيرة بتكتشف الدنيا.",
    "moodEmoji": "🌸",
    "date": "Day 278"
  },
  {
    "day": 279,
    "category": "cute",
    "categoryLabel": "حركات لطيفة 🥰",
    "title": "التكشيرة الكيوت",
    "message": "حتى وانتي مكشرة وبتبوزي شفايفك بتبقي كيوت أوي لدرجة إني ببقى عايز أضحكك غصب.",
    "moodEmoji": "🌸",
    "date": "Day 279"
  },
  {
    "day": 280,
    "category": "cute",
    "categoryLabel": "حركات لطيفة 🥰",
    "title": "قلب نونو",
    "message": "انتي نونو قلبي وحبيبتي وبنوتي الصغيرة اللي ملهاش في الدنيا غيري يدللها.",
    "moodEmoji": "🌸",
    "date": "Day 280"
  },
  {
    "day": 281,
    "category": "cute",
    "categoryLabel": "حركات لطيفة 🥰",
    "title": "يا لوزة",
    "message": "يا لوزة مقشرة ويا قمر منور.. يومك جميل وسكر زيك بالظبط.",
    "moodEmoji": "🌸",
    "date": "Day 281"
  },
  {
    "day": 282,
    "category": "cute",
    "categoryLabel": "حركات لطيفة 🥰",
    "title": "ضحكتك علاج",
    "message": "ضحكتك دي بالنسبة ليا علاج لأي ضغط نفسي وصداع، بتصفي نيتي وترجعلي طاقتي.",
    "moodEmoji": "🌸",
    "date": "Day 282"
  },
  {
    "day": 283,
    "category": "cute",
    "categoryLabel": "حركات لطيفة 🥰",
    "title": "سحر البساطة",
    "message": "من غير ميكب ومن غير أي إضافات، بتبقي قمر 14 ونور وشك بيكفي وينور.",
    "moodEmoji": "🌸",
    "date": "Day 283"
  },
  {
    "day": 284,
    "category": "cute",
    "categoryLabel": "حركات لطيفة 🥰",
    "title": "الدباديب",
    "message": "بحس إني عايز أجبلك محل دباديب كامل وأحطه في أوضتك عشان تبقي محاصرة بالحاجات الكيوت زيك.",
    "moodEmoji": "🌸",
    "date": "Day 284"
  },
  {
    "day": 285,
    "category": "cute",
    "categoryLabel": "حركات لطيفة 🥰",
    "title": "نظرة الأطفال",
    "message": "في نظرة معينة بتلمع في عينيكي لما بتشوفي حاجة عاجباكي، نظرة طفلة بريئة جداً.",
    "moodEmoji": "🌸",
    "date": "Day 285"
  },
  {
    "day": 286,
    "category": "cute",
    "categoryLabel": "حركات لطيفة 🥰",
    "title": "يا بسكوتة",
    "message": "انتي بسكوتة مقرمشة محشية سكر وعسل.. خلي بالك لتدوبي في الشاي الصبح 😂",
    "moodEmoji": "🌸",
    "date": "Day 286"
  },
  {
    "day": 287,
    "category": "cute",
    "categoryLabel": "حركات لطيفة 🥰",
    "title": "الحنية الزايدة",
    "message": "طريقتك لما تطبطبي عليا أو تقوليلي 'معلش يا يحيى' دي بتدوب كل جبال التعب جوايا.",
    "moodEmoji": "🌸",
    "date": "Day 287"
  },
  {
    "day": 288,
    "category": "cute",
    "categoryLabel": "حركات لطيفة 🥰",
    "title": "عطرك المفضل",
    "message": "ريحة البرفان بتاعك لما بيعلق في هدومي بفضل شامه طول اليوم وكأنك قاعدة جنبي.",
    "moodEmoji": "🌸",
    "date": "Day 288"
  },
  {
    "day": 289,
    "category": "cute",
    "categoryLabel": "حركات لطيفة 🥰",
    "title": "خطوتك الخفيفة",
    "message": "مشيتك وخطوتك الخفيفة الهادية بتدل على رقة ونعومة متتوصفش.",
    "moodEmoji": "🌸",
    "date": "Day 289"
  },
  {
    "day": 290,
    "category": "cute",
    "categoryLabel": "حركات لطيفة 🥰",
    "title": "كتلة لطافة",
    "message": "في النهاية.. انتي كتلة لطافة ودلع وحلاوة متنقلة على الأرض، وربنا يخليكي ليا يا نوني 🥰",
    "moodEmoji": "🌸",
    "date": "Day 290"
  },
  {
    "day": 291,
    "category": "difficult_days",
    "categoryLabel": "في الأيام الصعبة 🫂",
    "title": "أنا هنا جنبك",
    "message": "لو حسيتي في يوم إن كل حاجة تقيلة والدنيا كلها جاية عليكي، افتكري إن في كتف ثابت هنا مستنيكي تسندي عليه ومستحيل يميل.",
    "moodEmoji": "🕊️",
    "date": "Day 291"
  },
  {
    "day": 292,
    "category": "difficult_days",
    "categoryLabel": "في الأيام الصعبة 🫂",
    "title": "حقك تزعلي",
    "message": "حقك تتضايقي وتعيطي وتطلعي كل اللي جواكي.. مش لازم تبقي قوية طول الوقت، وأنا هنا عشان أسمعك.",
    "moodEmoji": "🕊️",
    "date": "Day 292"
  },
  {
    "day": 293,
    "category": "difficult_days",
    "categoryLabel": "في الأيام الصعبة 🫂",
    "title": "هتعدي والله",
    "message": "الأيام الصعبة دي بتعدي ومبتفضلش.. زي ما عدينا حاجات أصعب زمان، هنعدي دي سوا بإذن الله.",
    "moodEmoji": "🕊️",
    "date": "Day 293"
  },
  {
    "day": 294,
    "category": "difficult_days",
    "categoryLabel": "في الأيام الصعبة 🫂",
    "title": "متشيلش الهم لوحدك",
    "message": "متشيلش الهم لوحدك يا نور، اقسمي الحمل معايا وخليني أشيل عنك شوية من التعب ده.",
    "moodEmoji": "🕊️",
    "date": "Day 294"
  },
  {
    "day": 295,
    "category": "difficult_days",
    "categoryLabel": "في الأيام الصعبة 🫂",
    "title": "حضن من بعيد",
    "message": "ببعتلك أدفى حضن في العالم يلم كل كسرة جواكي ويطمنك إن كل حاجة هترجع أحسن من الأول.",
    "moodEmoji": "🕊️",
    "date": "Day 295"
  },
  {
    "day": 296,
    "category": "difficult_days",
    "categoryLabel": "في الأيام الصعبة 🫂",
    "title": "انتي مش لوحدك",
    "message": "طول ما فيا نفس في الدنيا دي، اوعي تحسي في لحظة إنك لوحدك في معركة.. إحنا فيها سوا.",
    "moodEmoji": "🕊️",
    "date": "Day 296"
  },
  {
    "day": 297,
    "category": "difficult_days",
    "categoryLabel": "في الأيام الصعبة 🫂",
    "title": "أنا فخور بيكي",
    "message": "فخور بصبرك ومحاولاتك، وعارف إن الضغط عليكي كبير.. انتي بطلة وهتتغلبي على ده.",
    "moodEmoji": "🕊️",
    "date": "Day 297"
  },
  {
    "day": 298,
    "category": "difficult_days",
    "categoryLabel": "في الأيام الصعبة 🫂",
    "title": "راحة إجبارية",
    "message": "ساعات التعب بيكون رسالة من جسمك إنك محتاجة توقفي شوية وترتاحي.. ريحي النهاردة وبكرة نحارب تاني.",
    "moodEmoji": "🕊️",
    "date": "Day 298"
  },
  {
    "day": 299,
    "category": "difficult_days",
    "categoryLabel": "في الأيام الصعبة 🫂",
    "title": "نورك مبيطفيش",
    "message": "يمكن نورك يبهت شوية بسبب الزعل، بس عمري ما هسمح له يطفي.. هفضل أنفخ في شمعتك لغاية ما تشتعل تاني.",
    "moodEmoji": "🕊️",
    "date": "Day 299"
  },
  {
    "day": 300,
    "category": "difficult_days",
    "categoryLabel": "في الأيام الصعبة 🫂",
    "title": "مستعد أسمعك بالساعات",
    "message": "لو عايزة ترغي وتفضفضي بالساعات أنا هنا، ولو عايزة نسكت ومنتكلمش خالص برضه أنا هنا جنبك.",
    "moodEmoji": "🕊️",
    "date": "Day 300"
  },
  {
    "day": 301,
    "category": "difficult_days",
    "categoryLabel": "في الأيام الصعبة 🫂",
    "title": "دموعك غالية",
    "message": "دموعك دي غالية عليا أوي ومقدرش أشوفها، بتمنى لو أقدر أخد كل زعلك وأديكي كل راحتي.",
    "moodEmoji": "🕊️",
    "date": "Day 301"
  },
  {
    "day": 302,
    "category": "difficult_days",
    "categoryLabel": "في الأيام الصعبة 🫂",
    "title": "العاصفة بتنتهي",
    "message": "أقوى العواصف لازم في الآخر بتخلص وبيطلع بعدها قوس قزح وشمس دافية.. اصبري وهتشوفي.",
    "moodEmoji": "🕊️",
    "date": "Day 302"
  },
  {
    "day": 303,
    "category": "difficult_days",
    "categoryLabel": "في الأيام الصعبة 🫂",
    "title": "أنا سندك الثابت",
    "message": "الناس ممكن تتغير والأيام ممكن تقلب، بس أنا وعدتك وهفضل دايماً الأمان والسند اللي ترجعيله.",
    "moodEmoji": "🕊️",
    "date": "Day 303"
  },
  {
    "day": 304,
    "category": "difficult_days",
    "categoryLabel": "في الأيام الصعبة 🫂",
    "title": "متجلديش نفسك",
    "message": "انتي عملتي اللي عليكي وزيادة، فمتجلديش نفسك على حاجات مش بإيدك.. روقي يا حبيبتي.",
    "moodEmoji": "🕊️",
    "date": "Day 304"
  },
  {
    "day": 305,
    "category": "difficult_days",
    "categoryLabel": "في الأيام الصعبة 🫂",
    "title": "أزمة وتعدي",
    "message": "دي مجرد أزمة صغيرة في صفحة من كتاب حياتنا، بكرة نعديها ونقلب الصفحة ونضحك عليها.",
    "moodEmoji": "🕊️",
    "date": "Day 305"
  },
  {
    "day": 306,
    "category": "difficult_days",
    "categoryLabel": "في الأيام الصعبة 🫂",
    "title": "قوتك بتلهمني",
    "message": "حتى في أضعف حالاتك، بشوف فيكي قوة وإصرار مش موجود عند حد.. متيأسيش.",
    "moodEmoji": "🕊️",
    "date": "Day 306"
  },
  {
    "day": 307,
    "category": "difficult_days",
    "categoryLabel": "في الأيام الصعبة 🫂",
    "title": "دعوة من قلبي",
    "message": "دعيت ربنا في صلاتي يفك كربك ويشيل عنك الهم وينزل السكينة على قلبك الأبيض.",
    "moodEmoji": "🕊️",
    "date": "Day 307"
  },
  {
    "day": 308,
    "category": "difficult_days",
    "categoryLabel": "في الأيام الصعبة 🫂",
    "title": "افتكري النعم",
    "message": "لما تحسي بضيق، افتكري إن ربنا شايلك الأجمل دايماً وإن المحنة وراها منحة كبيرة.",
    "moodEmoji": "🕊️",
    "date": "Day 308"
  },
  {
    "day": 309,
    "category": "difficult_days",
    "categoryLabel": "في الأيام الصعبة 🫂",
    "title": "أنا فداكي",
    "message": "لو أقدر أشتريلك راحة البال بكنوز الأرض كنت عملتها، بس اللي أقدر عليه إني أكون جنبك بروحي وقلبي.",
    "moodEmoji": "🕊️",
    "date": "Day 309"
  },
  {
    "day": 310,
    "category": "difficult_days",
    "categoryLabel": "في الأيام الصعبة 🫂",
    "title": "صباح الفرج",
    "message": "بعد كل ليل طويل ومظلم في صبح بيطلع ينور الدنيا كلها.. فرج ربنا قريب أوي يا نوري وخليكي واثقة فيه.",
    "moodEmoji": "🕊️",
    "date": "Day 310"
  },
  {
    "day": 311,
    "category": "open_when",
    "categoryLabel": "افتحيها لما... ⏳",
    "title": "افتحيها لما تكوني متضايقة",
    "message": "افتحي دي لما تكوني متضايقة: خدي نفس عميق وافتكري إن مفيش حاجة في الدنيا تستاهل دموعك ولا زعل قلبك الحلو ده.. أنا بحبك.",
    "moodEmoji": "💌",
    "date": "Day 311"
  },
  {
    "day": 312,
    "category": "open_when",
    "categoryLabel": "افتحيها لما... ⏳",
    "title": "افتحيها لما توحشيني",
    "message": "افتحي دي لما أوحشك: افتكري إني في نفس اللحظة دي بفكر فيكي وقلبي معاكي وبتمنى أكون قدامك دلوقتي حالا.",
    "moodEmoji": "💌",
    "date": "Day 312"
  },
  {
    "day": 313,
    "category": "open_when",
    "categoryLabel": "افتحيها لما... ⏳",
    "title": "افتحيها لما تحسي بالوحدة",
    "message": "افتحي دي لما تحسي بالوحدة: بصي في السما وافتكري إن ليكي نجمة مسجلة باسمك 'noni star' وإن يحيى بيحبك من سابع سما.",
    "moodEmoji": "💌",
    "date": "Day 313"
  },
  {
    "day": 314,
    "category": "open_when",
    "categoryLabel": "افتحيها لما... ⏳",
    "title": "افتحيها لما تشكي في نفسك",
    "message": "افتحي دي لما تشكي في قدراتك: انتي أذكى وأشطر وأجمل واحدة أنا عرفتها، قادرة توصلي لكل اللي عايزاه ومحدش يقدر يوقفك.",
    "moodEmoji": "💌",
    "date": "Day 314"
  },
  {
    "day": 315,
    "category": "open_when",
    "categoryLabel": "افتحيها لما... ⏳",
    "title": "افتحيها لما تضحكي",
    "message": "افتحي دي لما تكوني مبسوطة: ثبتي اللحظة دي وكملي ضحك، عشان ضحكتك دي هي مصدر الطاقة والبهجة لكل اللي حواليكي.",
    "moodEmoji": "💌",
    "date": "Day 315"
  },
  {
    "day": 316,
    "category": "open_when",
    "categoryLabel": "افتحيها لما... ⏳",
    "title": "افتحيها لما تزهقي",
    "message": "افتحي دي لما تزهقي من كل حاجة: يلا نكسر الروتين، اعملي فنجان قهوة وشغلي أغنية بنحبها وكلميني نهزر سوا.",
    "moodEmoji": "💌",
    "date": "Day 316"
  },
  {
    "day": 317,
    "category": "open_when",
    "categoryLabel": "افتحيها لما... ⏳",
    "title": "افتحيها لما تكوني خايفة",
    "message": "افتحي دي لما تكوني خايفة من امتحان أو مقابلة: أنا واثق فيكي ثقة عمياء، وعارف إنك هتكسري الدنيا.. ادخلي وسمي الله.",
    "moodEmoji": "💌",
    "date": "Day 317"
  },
  {
    "day": 318,
    "category": "open_when",
    "categoryLabel": "افتحيها لما... ⏳",
    "title": "افتحيها لما نكون زعلانين سوا",
    "message": "افتحي دي لما نكون متخانقين: مهما اتخانقنا ومهما زعقت أو زعلتي، ده مش هيغير ذرة واحدة من حبي ليكي.. حقك عليا لو زعلتك.",
    "moodEmoji": "💌",
    "date": "Day 318"
  },
  {
    "day": 319,
    "category": "open_when",
    "categoryLabel": "افتحيها لما... ⏳",
    "title": "افتحيها لما تكوني مش عارفة تنامي",
    "message": "افتحي دي لما الأرق يمسك فيكي: شغلي صوت مطر أو موسيقى هادية، وافتكري كل الذكريات الحلوة اللي مرينا بيها لغاية ما عينك تغفل.",
    "moodEmoji": "💌",
    "date": "Day 319"
  },
  {
    "day": 320,
    "category": "open_when",
    "categoryLabel": "افتحيها لما... ⏳",
    "title": "افتحيها لما تنجحي في حاجة",
    "message": "افتحي دي لما تحققي إنجاز: مبرووووك يا بطلة! أنا أكتر واحد فخور بيكي في العالم ده، وشايف تعبك اللي ربنا كافأك عليه.",
    "moodEmoji": "💌",
    "date": "Day 320"
  },
  {
    "day": 321,
    "category": "open_when",
    "categoryLabel": "افتحيها لما... ⏳",
    "title": "افتحيها في يوم بارد",
    "message": "افتحي دي والجو تلج ومطر: ببعتلك كل الدفء اللي في الكون، اشربي حاجة دافية وادفي كويس ومتقلقيش أنا في ضهرك.",
    "moodEmoji": "💌",
    "date": "Day 321"
  },
  {
    "day": 322,
    "category": "open_when",
    "categoryLabel": "افتحيها لما... ⏳",
    "title": "افتحيها وأنتي في مشوار طويل",
    "message": "افتحي دي وانتي في الطريق وزهقانة: بصي من الشباك وتخيلي إننا راكبين سوا وبنحكي وبنسمع أغاني وبنضحك.",
    "moodEmoji": "💌",
    "date": "Day 322"
  },
  {
    "day": 323,
    "category": "open_when",
    "categoryLabel": "افتحيها لما... ⏳",
    "title": "افتحيها لما تفتكري ذكرياتنا",
    "message": "افتحي دي لما تفتكري أيامنا الأولى: كل ثانية عدت بينا كانت رزق، والقادم أجمل وأعظم بكتير من اللي فات.",
    "moodEmoji": "💌",
    "date": "Day 323"
  },
  {
    "day": 324,
    "category": "open_when",
    "categoryLabel": "افتحيها لما... ⏳",
    "title": "افتحيها لما تفطري الصبح",
    "message": "افتحي دي على الفطار: بالهنا والشفا على قلبك يا سكر، كلي كويس ومتسيبيش أكلك عشان تركزي في يومك.",
    "moodEmoji": "💌",
    "date": "Day 324"
  },
  {
    "day": 325,
    "category": "open_when",
    "categoryLabel": "افتحيها لما... ⏳",
    "title": "افتحيها لما تحسي بكسل",
    "message": "افتحي دي لما الكسل يمسكك: قومي يلا يا شطورة ورانا أحلام عايزين نحققها وعالم بنبنيه سوا!",
    "moodEmoji": "💌",
    "date": "Day 325"
  },
  {
    "day": 326,
    "category": "open_when",
    "categoryLabel": "افتحيها لما... ⏳",
    "title": "افتحيها لما تحسي إنك وحيدة وسط الناس",
    "message": "افتحي دي لما تحسي بالغربة وسط ناس كتير: قفلي ودانك عن أي دوشة وافتكري إنك عندي بالدنيا وما فيها.",
    "moodEmoji": "💌",
    "date": "Day 326"
  },
  {
    "day": 327,
    "category": "open_when",
    "categoryLabel": "افتحيها لما... ⏳",
    "title": "افتحيها لما تشتري حاجة جديدة",
    "message": "افتحي دي لما تجيبي طقم جديد: متأكد إنه طالع عليكي قمر ويجنن زي العادة، مبروك يا فاشونيستا قلبي.",
    "moodEmoji": "💌",
    "date": "Day 327"
  },
  {
    "day": 328,
    "category": "open_when",
    "categoryLabel": "افتحيها لما... ⏳",
    "title": "افتحيها لما تصحي بدري أوي",
    "message": "افتحي دي وانتي صاحية بدري قبل الدنيا: صباح السكينة والهدوء، استمتعي بالبدايات النقية دي.",
    "moodEmoji": "💌",
    "date": "Day 328"
  },
  {
    "day": 329,
    "category": "open_when",
    "categoryLabel": "افتحيها لما... ⏳",
    "title": "افتحيها لما تقابلي موقف غريب",
    "message": "افتحي دي لما يحصلك موقف غريب في الشارع أو الشغل: تعالي احكيلي ومستني أسمع التفاصيل عشان نضحك سوا 😂",
    "moodEmoji": "💌",
    "date": "Day 329"
  },
  {
    "day": 330,
    "category": "open_when",
    "categoryLabel": "افتحيها لما... ⏳",
    "title": "افتحيها وانتي مش عارفة تقولي إيه",
    "message": "افتحي دي لما تكوني محتارة: مش محتاجة تقولي حاجة.. مجرد وجودك كفاية وواصل لقلبي من غير ولا حرف.",
    "moodEmoji": "💌",
    "date": "Day 330"
  },
  {
    "day": 331,
    "category": "special",
    "categoryLabel": "رسائل خاصة 🌟",
    "title": "يوم ميلاد الصدفة",
    "message": "النهارده يوم خاص جداً.. زي اليوم ده اتغيرت حياتي وبقت أجمل لما نورتيها بدخولك فيها.",
    "moodEmoji": "🌟",
    "date": "Day 331"
  },
  {
    "day": 332,
    "category": "special",
    "categoryLabel": "رسائل خاصة 🌟",
    "title": "رسالة الـ 100 يوم",
    "message": "عدينا 100 يوم سوا في عالمنا ده، وكل يوم فيهم بيثبتلي إني أسعد راجل في الدنيا بوجودك.",
    "moodEmoji": "🌟",
    "date": "Day 332"
  },
  {
    "day": 333,
    "category": "special",
    "categoryLabel": "رسائل خاصة 🌟",
    "title": "نجمتي الرسمية",
    "message": "بفكرك إن في نجمة مسجلة في الفضاء الخارجي في كوكبة القوس باسم 'noni star'.. النجوم بتشهد على حبنا.",
    "moodEmoji": "🌟",
    "date": "Day 333"
  },
  {
    "day": 334,
    "category": "special",
    "categoryLabel": "رسائل خاصة 🌟",
    "title": "سر لا يعلمه إلا إحنا",
    "message": "الرابط اللي بينا مش مجرد كلام أو رسايل، ده حبل سري ممتد بين روحين اتخلقوا لبعض.",
    "moodEmoji": "🌟",
    "date": "Day 334"
  },
  {
    "day": 335,
    "category": "special",
    "categoryLabel": "رسائل خاصة 🌟",
    "title": "رسالة منتصف الليل",
    "message": "الساعة 12 بالتمام.. واليوم الجديد بيبدأ بنفس الحقيقة الثابتة: بحبك يا نور.",
    "moodEmoji": "🌟",
    "date": "Day 335"
  },
  {
    "day": 336,
    "category": "special",
    "categoryLabel": "رسائل خاصة 🌟",
    "title": "اليوم العالمي لجمالك",
    "message": "النهارده قررت أعلنه اليوم العالمي لجمال نور.. مفيش أي زعل مسموح بيه، بس دلع وفرحة.",
    "moodEmoji": "🌟",
    "date": "Day 336"
  },
  {
    "day": 337,
    "category": "special",
    "categoryLabel": "رسائل خاصة 🌟",
    "title": "رسالة امتنان خاصة",
    "message": "ممتن لكل لحظة تعبتي فيها علشاني، ولكل تنازل عملتيه عشان المركب تمشي.. انتي أصيلة أوي.",
    "moodEmoji": "🌟",
    "date": "Day 337"
  },
  {
    "day": 338,
    "category": "special",
    "categoryLabel": "رسائل خاصة 🌟",
    "title": "وعد شرف",
    "message": "وعد شرف مني قدام ربنا وقدامك: عمري ما هكون سبب في كسرة خاطرك، وهفضل حاميكي لأخر يوم.",
    "moodEmoji": "🌟",
    "date": "Day 338"
  },
  {
    "day": 339,
    "category": "special",
    "categoryLabel": "رسائل خاصة 🌟",
    "title": "عيد الصداقة والحب",
    "message": "انتي مش بس حبيبتي، انتي صاحبتي الجدعة وأختي وسندي وكل عيلتي في شخص واحد.",
    "moodEmoji": "🌟",
    "date": "Day 339"
  },
  {
    "day": 340,
    "category": "special",
    "categoryLabel": "رسائل خاصة 🌟",
    "title": "فرحة متتكررش",
    "message": "الفرحة اللي حسيتها لما سمعت صوتك أول مرة كانت فرحة طفل لقى ألعابه المفقودة.",
    "moodEmoji": "🌟",
    "date": "Day 340"
  },
  {
    "day": 341,
    "category": "special",
    "categoryLabel": "رسائل خاصة 🌟",
    "title": "اليوم اللي اختارتك فيه",
    "message": "كل يوم بختارك من جديد وبكامل إرادتي ورغبتي وشغفي.. انتي اختياري الدائم.",
    "moodEmoji": "🌟",
    "date": "Day 341"
  },
  {
    "day": 342,
    "category": "special",
    "categoryLabel": "رسائل خاصة 🌟",
    "title": "رسالة خاصة جداً",
    "message": "الكلام ده لعينيكي انتي بس: انتي نوري في الظلمة، وضحكتي في الحزن، وأملي لما الدنيا تضيق.",
    "moodEmoji": "🌟",
    "date": "Day 342"
  },
  {
    "day": 343,
    "category": "special",
    "categoryLabel": "رسائل خاصة 🌟",
    "title": "نجمة القوس",
    "message": "كوكبة القوس مش بس نجوم في السما، دي البيت اللي شايل نجمتنا 'noni star' للأبد.",
    "moodEmoji": "🌟",
    "date": "Day 343"
  },
  {
    "day": 344,
    "category": "special",
    "categoryLabel": "رسائل خاصة 🌟",
    "title": "سر استمراري",
    "message": "كل ما بتعب أو بحس إني عايز أستسلم، بفتكر إني عايز أعملك مستقبل يليق بيكي فبقوم وأعافر من جديد.",
    "moodEmoji": "🌟",
    "date": "Day 344"
  },
  {
    "day": 345,
    "category": "special",
    "categoryLabel": "رسائل خاصة 🌟",
    "title": "جوهرة نادرة",
    "message": "انتي مش مجرد شخص عادي، انتي جوهرة نادرة اتلقت وسط ركام كتير.. ربنا يحفظك لقلبي.",
    "moodEmoji": "🌟",
    "date": "Day 345"
  },
  {
    "day": 346,
    "category": "final",
    "categoryLabel": "رسائل ختامية 💫",
    "title": "قربنا على الختام",
    "message": "الرحلة قربت تكمل سنتها الأولى، بس رحلة حبي ليكي لسه في أول خطوة ومكملة للأبد.",
    "moodEmoji": "💎",
    "date": "Day 346"
  },
  {
    "day": 347,
    "category": "final",
    "categoryLabel": "رسائل ختامية 💫",
    "title": "حصاد الأيام",
    "message": "لما ببص على كل الرسايل اللي فاتت، بشوف قد إيه كبرنا سوا وقد إيه حبنا اتجذر وبقى قوي.",
    "moodEmoji": "💎",
    "date": "Day 347"
  },
  {
    "day": 348,
    "category": "final",
    "categoryLabel": "رسائل ختامية 💫",
    "title": "شاهد على العشق",
    "message": "عالم نور ده مش مجرد موقع على النت، ده وثيقة حب حقيقية هتفضل عايشة وشاهدة على غلاوتك عندي.",
    "moodEmoji": "💎",
    "date": "Day 348"
  },
  {
    "day": 349,
    "category": "final",
    "categoryLabel": "رسائل ختامية 💫",
    "title": "أجمل سنة",
    "message": "كانت أجمل سنة في حياتي عشان بس كنتي فيها.. ويارب الجاي كله يكون أحلى وأعظم.",
    "moodEmoji": "💎",
    "date": "Day 349"
  },
  {
    "day": 350,
    "category": "final",
    "categoryLabel": "رسائل ختامية 💫",
    "title": "كلماتي ليكي",
    "message": "كتبتلك 365 رسالة، ومستعد أكتبلك 365 ألف رسالة تانية عشان بس ألمح الابتسامة على وشك.",
    "moodEmoji": "💎",
    "date": "Day 350"
  },
  {
    "day": 351,
    "category": "final",
    "categoryLabel": "رسائل ختامية 💫",
    "title": "أنتي كل شيء",
    "message": "اختصرت كل أحلامي فيكي، ولقيت فيكي كل المعاني اللي كنت بدور عليها في الدنيا.",
    "moodEmoji": "💎",
    "date": "Day 351"
  },
  {
    "day": 352,
    "category": "final",
    "categoryLabel": "رسائل ختامية 💫",
    "title": "عالمنا المستمر",
    "message": "العالم ده مفتوح ليكي دايماً، كل ما توحشيني أو تحسي بضيق ادخلي وافتكري مكانتك عندي.",
    "moodEmoji": "💎",
    "date": "Day 352"
  },
  {
    "day": 353,
    "category": "final",
    "categoryLabel": "رسائل ختامية 💫",
    "title": "حب لا ينتهي",
    "message": "الشهور بتخلص والسنين بتجري، بس الحب الصادق بيفضل ثابت ومبيتأثرش بأي وقت.",
    "moodEmoji": "💎",
    "date": "Day 353"
  },
  {
    "day": 354,
    "category": "final",
    "categoryLabel": "رسائل ختامية 💫",
    "title": "قبل الرسالة الأخيرة",
    "message": "قبل ما نختم الرسايل اليومية، عايزك تعرفي إن كل كلمة اتكتبت هنا كانت طالعة من صميم قلبي وروحي.",
    "moodEmoji": "💎",
    "date": "Day 354"
  },
  {
    "day": 355,
    "category": "final",
    "categoryLabel": "رسائل ختامية 💫",
    "title": "العهد الأبدي",
    "message": "إلى نور عيني ونبض قلبي ونجمتي 'نوني'.. هفضل أحبك لآخر نفس في عمري. — يحيى ❤️",
    "moodEmoji": "💎",
    "date": "Day 355"
  },
  {
    "day": 356,
    "category": "surprise",
    "categoryLabel": "مفاجآت نوني 🎁",
    "title": "مفاجأة 1: سر النجمة",
    "message": "عارفة ليه سميتها noni star؟ عشان لما تبصي في السما بالليل تفتكري إن ليكي حتة مضيئة باسمك وسط الكون!",
    "moodEmoji": "🎁",
    "date": "Day 356"
  },
  {
    "day": 357,
    "category": "surprise",
    "categoryLabel": "مفاجآت نوني 🎁",
    "title": "مفاجأة 2: صندوق الهدايا",
    "message": "خبيتلِك حاجة حلوة في مكان مش هتتوقعيه.. بس مش هقولك عليها غير لما تطلبيها بدلع وتضحكي 😂",
    "moodEmoji": "🎁",
    "date": "Day 357"
  },
  {
    "day": 358,
    "category": "surprise",
    "categoryLabel": "مفاجآت نوني 🎁",
    "title": "مفاجأة 3: أغنية مخصوص",
    "message": "الأغنية اللي شغالة في الخلفية دي تم اختيارها بعناية عشان تفكرنا بكل نغمة حب عشناها سوا.",
    "moodEmoji": "🎁",
    "date": "Day 358"
  },
  {
    "day": 359,
    "category": "surprise",
    "categoryLabel": "مفاجآت نوني 🎁",
    "title": "مفاجأة 4: اللحظة اللي جاية",
    "message": "استعدي للمفاجأة الكبيرة في نهاية استكشاف الكون.. في كلام مخصص ليكي هيخلي قلبك يطير من الفرحة.",
    "moodEmoji": "🎁",
    "date": "Day 359"
  },
  {
    "day": 360,
    "category": "surprise",
    "categoryLabel": "مفاجآت نوني 🎁",
    "title": "مفاجأة 5: طلب أكلة حلوة",
    "message": "النهارده العزومة عليا! اطلبي أحلى أكلة بتحبيها وهتكون واصلة لعندك في أسرع وقت يا نوني 🍕🍣",
    "moodEmoji": "🎁",
    "date": "Day 360"
  },
  {
    "day": 361,
    "category": "surprise",
    "categoryLabel": "مفاجآت نوني 🎁",
    "title": "مفاجأة 6: صورة مخفية",
    "message": "في صورة نادرة ليكي من أول أيامنا محتفظ بيها ومخبيها زي حتة أثرية غالية جداً عليا.",
    "moodEmoji": "🎁",
    "date": "Day 361"
  },
  {
    "day": 362,
    "category": "surprise",
    "categoryLabel": "مفاجآت نوني 🎁",
    "title": "مفاجأة 7: كود سري",
    "message": "جربي تفتحي الكوكب السري برمز 'noni'.. هتلاقي رسالة سرية مفيش مخلوق في الأرض يعرفها غيرنا.",
    "moodEmoji": "🎁",
    "date": "Day 362"
  },
  {
    "day": 363,
    "category": "surprise",
    "categoryLabel": "مفاجآت نوني 🎁",
    "title": "مفاجأة 8: دعوة فرح",
    "message": "دعوة خاصة ليكي النهاردة إنك تكوني أسعد بنوتة في العالم، ومفيش أي زعل مسموح بيه إطلاقاً.",
    "moodEmoji": "🎁",
    "date": "Day 363"
  },
  {
    "day": 364,
    "category": "surprise",
    "categoryLabel": "مفاجآت نوني 🎁",
    "title": "مفاجأة 9: تذكرة خروج",
    "message": "تذكرة مجانية لخروجة رايقة في المكان اللي تختاريه في الويك إند الجاي على حسابي الخاص ✨",
    "moodEmoji": "🎁",
    "date": "Day 364"
  },
  {
    "day": 365,
    "category": "surprise",
    "categoryLabel": "مفاجآت نوني 🎁",
    "title": "مفاجأة 10: حب بلا حدود",
    "message": "أكبر مفاجأة هي إن حبي ليكي النهاردة أكبر من امبارح، وبكرة هيكون أكبر من النهاردة.. مفاجأة مستمرة كل يوم!",
    "moodEmoji": "🎁",
    "date": "Day 365"
  }
];
