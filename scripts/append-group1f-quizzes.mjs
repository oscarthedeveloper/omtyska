import fs from 'fs';

const g1fQuizzes = {
  // G04: Betoning, rytm och satsmelodi
  '/docs/grunder/betoning-och-satsmelodi': {
    lessonId: 'G04',
    href: '/docs/grunder/betoning-och-satsmelodi',
    title: 'Snabbkoll: Betoning, rytm och satsmelodi',
    questions: [
      {
        id: 'g04-q1',
        context: 'Grundregeln för betoning i inhemska tyska ord.',
        prompt: 'Var ligger huvudbetoningen i regelbundna germanska/tyska ord?',
        options: [
          'På ordets rotstam (t.ex. \'arbeiten, ge\'fährlich).',
          'Alltid på den allra sista stavelsen.',
          'Alltid på böjningsändelsen.',
          'På ett slumpmässigt ställe som varierar från dag till dag.'
        ],
        answer: 0,
        explanation: 'Inhemska tyska ord har rotbetoning; böjningsändelser och grammatiska prefix är obetonade.',
        feedback: [
          'Rätt! Rotstammen bär trycket.',
          'Fel. Slutbetoning tillhör lånord (som Station, Musik).',
          'Fel. Böjningsändelser är obetonade.',
          'Fel. Betoning följer strikta regler.'
        ]
      },
      {
        id: 'g04-q2',
        context: 'Betoning i sammansatta substantiv.',
        prompt: 'Var hamnar huvudbetoningen i sammansatta ord som "Haustür" och "Kugelschreiber"?',
        options: [
          'Alltid på det första ordledet (\'Haustür, \'Kugelschreiber).',
          'Alltid på det sista ordledet.',
          'Mitt emellan de två orden.',
          'Lika starkt på alla stavelser.'
        ],
        answer: 0,
        explanation: 'Tyska sammansättningar har ett starkt huvudtryck på det första ledet: \'Haustür, \'Hauptbahnhof.',
        feedback: [
          'Rätt! Första ledet bär huvudtrycket.',
          'Fel. Sista ledet får bara bibetoning.',
          'Fel. Trycket ligger på första stavelsen.',
          'Fel. Tyskan har tydlig dynamisk accent.'
        ]
      },
      {
        id: 'g04-q3',
        context: 'Betoning av verbprefix.',
        prompt: 'Hur vet man utifrån uttalet om ett tyskt verbprefix är löstagbart eller fast?',
        options: [
          'Löstagbara prefix är BETONADE (\'aufstehen); fasta prefix är OBETONADE (be\'zahlen).',
          'Fasta prefix är betonade och löstagbara är obetonade.',
          'Alla prefix är alltid helt trycklösa.',
          'Betoningen beror på om meningen är en fråga.'
        ],
        answer: 0,
        explanation: 'Hör du trycket på prefixet (\'einkaufen) är det löstagbart; är prefixet obetonat (ver\'stehen) är det fast.',
        feedback: [
          'Rätt! Betonat = löstagbart; obetonat = fast.',
          'Fel. Ordningen är den rakt motsatta.',
          'Fel. Löstagbara prefix har starkt tryck.',
          'Fel. Satstypen ändrar inte ordaccenten.'
        ]
      },
      {
        id: 'g04-q4',
        context: 'Satsmelodi i frågor med frågeord (W-frågor).',
        prompt: 'Hur rör sig tonhöjden (melodin) i slutet av en tysk fråga som inleds med ett frågeord ("Wohin fährst du?")?',
        options: [
          'Tonen faller i slutet (fallande intonation).',
          'Tonen stiger kraftigt i slutet.',
          'Tonen förblir ett monotont enstonigt surr.',
          'Tonen växlar i falsett.'
        ],
        answer: 0,
        explanation: 'I tyskan har påståenden och frågor med frågeord fallande intonation i slutet. Bara ja/nej-frågor stiger.',
        feedback: [
          'Rätt! W-frågor har fallande slutmelodi på tyska.',
          'Fel. Stigande melodi gäller bara ja/nej-frågor.',
          'Fel. Tyskan har naturlig intonationskurva.',
          'Fel. Absolut inte.'
        ]
      },
      {
        id: 'g04-q5',
        context: 'Lånord med slutbetoning.',
        prompt: 'Vilken stavelse betonas i orden "Universität", "Station" och "Student"?',
        options: [
          'Den sista stavelsen (Universi\'tät, Sta\'tion, Stu\'dent).',
          'Den första stavelsen.',
          'Den näst första stavelsen.',
          'Ingen stavelse har tryck.'
        ],
        answer: 0,
        explanation: 'Lånord på -tät, -tion, -ent har bevarat sin klassiska slutbetoning.',
        feedback: [
          'Rätt! Slutbetoning på sista stavelsen.',
          'Fel. Dessa lånord har inte rotbetoning.',
          'Fel. Trycket ligger längst bak.',
          'Fel. Varje ord har en betonad stavelse.'
        ]
      },
      {
        id: 'g04-q6',
        context: 'Verb på -ieren.',
        prompt: 'Var ligger betoningen i tyska verb som slutar på "-ieren" (studieren, telefonieren)?',
        options: [
          'Alltid på stavelsen -ier- (stu\'dieren, telefo\'nieren).',
          'På verbets allra första stavelse.',
          'På ändelsen -en.',
          'På böjningsprefixet.'
        ],
        answer: 0,
        explanation: 'Verb på -ieren har alltid betoningen på den långa vokalen i stavelsen -ier-.',
        feedback: [
          'Helt rätt! Alltid tryck på -ier-.',
          'Fel. Första stavelsen är obetonad.',
          'Fel. -en är en trycklös ändelse.',
          'Fel. -ieren-verb saknar böjningsprefix i infinitiv.'
        ]
      }
    ]
  },

  // G07: Komma och skrivregler
  '/docs/grunder/komma-och-skrivregler': {
    lessonId: 'G07',
    href: '/docs/grunder/komma-och-skrivregler',
    title: 'Snabbkoll: Komma och skrivregler',
    questions: [
      {
        id: 'g07-q1',
        context: 'Kommatecken mellan huvudsats och bisats.',
        prompt: 'Vad gäller för kommatecken mellan huvudsats och bisats (t.ex. med dass, weil, wenn) på tyska?',
        options: [
          'Kommatecken är ALLTID obligatoriskt; att utelämna det räknas som ett klart grammatiskt fel.',
          'Kommatecken är helt frivilligt och används bara om man vill ta en paus.',
          'Kommatecken är förbjudet.',
          'Kommatecken sätts bara om meningen är längre än tio ord.'
        ],
        answer: 0,
        explanation: 'I tysk rättskrivning är gränsen mellan huvudsats och bisats strikt obligatorisk: Ich weiß, dass...',
        feedback: [
          'Rätt! Komma vid bisatsgräns är alltid obligatoriskt.',
          'Fel. Det är inte valfritt som i svenskan.',
          'Fel. Kommat är påbjudet.',
          'Fel. Längden har ingen betydelse.'
        ]
      },
      {
        id: 'g07-q2',
        context: 'Regeln för ß kontra ss.',
        prompt: 'När skrivs bokstaven "ß" i stället för "ss" i modern tysk rättskrivning?',
        options: [
          'Efter lång vokal och diftonger (groß, Fuß, weiß, heiß).',
          'Efter korta vokaler (dass, Fluss).',
          'Bara i början av ett ord.',
          'Bara i substantiv, aldrig i adjektiv.'
        ],
        answer: 0,
        explanation: 'Efter stavningsreformen skrivs ß enbart efter långa vokaler och diftonger; efter korta vokaler skrivs ss.',
        feedback: [
          'Rätt! Lång vokal/diftong = ß; kort vokal = ss.',
          'Fel. Efter kort vokal skrivs ss (Fluss, Kuss).',
          'Fel. Tyska ord börjar aldrig på ß.',
          'Fel. Regeln gäller alla ordklasser.'
        ]
      },
      {
        id: 'g07-q3',
        context: 'Komma vid infinitivgrupper med zu.',
        prompt: 'I vilket fall är kommatecken obligatoriskt vid en infinitiv med zu?',
        options: [
          'När infinitivgruppen inleds med "um zu", "ohne zu" eller "anstatt zu".',
          'Aldrig någonsin.',
          'Bara om verbet är oregelbundet.',
          'Bara på söndagar.'
        ],
        answer: 0,
        explanation: 'Infinitivgrupper med um/ohne/anstatt zu avgränsas alltid obligatoriskt med kommatecken.',
        feedback: [
          'Rätt! um zu, ohne zu och anstatt zu kräver alltid komma.',
          'Fel. Komma är påbjudet här.',
          'Fel. Verbtypen spelar ingen roll.',
          'Fel. Absolut inte.'
        ]
      },
      {
        id: 'g07-q4',
        context: 'Stor bokstav i brev och tilltal.',
        prompt: 'Hur stavas det artiga tilltalsordet "Ni / Er / Ert" (Sie, Ihnen, Ihr) i tyska brev och mejl?',
        options: [
          'Alltid med stor begynnelsebokstav (Sie, Ihnen, Ihr, Ihre).',
          'Alltid med liten bokstav.',
          'Bara om mottagaren är äldre än talaren.',
          'Med versaler i hela ordet.'
        ],
        answer: 0,
        explanation: 'I artigt tilltal skrivs samtliga former av Sie alltid med stor bokstav: Wie geht es Ihnen?, Ihr Brief.',
        feedback: [
          'Rätt! Alltid stor bokstav vid artigt tilltal.',
          'Fel. Liten bokstav syftar på "hon" eller "de".',
          'Fel. Ålder påverkar inte regeln.',
          'Fel. Bara första bokstaven ska vara versal.'
        ]
      },
      {
        id: 'g07-q5',
        context: 'Stora bokstäver på substantiv.',
        prompt: 'Vilka ord skrivs alltid med stor begynnelsebokstav i tyskan?',
        options: [
          'Alla substantiv och ord som används som substantiv (das Haus, die Freiheit, das Lesen).',
          'Bara egennamn på personer och länder.',
          'Alla adjektiv och adverb.',
          'Bara det första ordet i varje stycke.'
        ],
        answer: 0,
        explanation: 'Tyskan är unik med att skriva samtliga substantiv och substantiveringar med stor bokstav.',
        feedback: [
          'Helt rätt! Samtliga substantiv får stor begynnelsebokstav.',
          'Fel. Även vanliga substantiv (Brot, Tisch) får stor bokstav.',
          'Fel. Adjektiv och adverb skrivs med liten bokstav.',
          'Fel. Gäller alla substantiv i löpande text.'
        ]
      },
      {
        id: 'g07-q6',
        context: 'Komma vid uppräkning med und.',
        prompt: 'Sätts det kommatecken framför "und" vid en vanlig uppräkning ("Äpfel, Birnen und Orangen")?',
        options: [
          'Nej, vid enkla uppräkningar sätts inget kommatecken framför det sista und.',
          'Ja, det kallas Oxford-komma och är obligatoriskt i tysk grammatik.',
          'Bara om frukterna är importerade.',
          'Ja, alltid två kommatecken.'
        ],
        answer: 0,
        explanation: 'Framför und sätts inget kommatecken vid enkla ordlistor: Äpfel, Birnen und Orangen.',
        feedback: [
          'Rätt! Inget komma framför und vid vanlig uppräkning.',
          'Fel. Oxford-komma används inte i tysk standardkommatering.',
          'Fel. Frukternas ursprung saknar grammatisk relevans.',
          'Fel. Absolut inte.'
        ]
      }
    ]
  },

  // V06: Oseparerbara prefix och betydelseskiften
  '/docs/verb/oseparerbara-och-betoning': {
    lessonId: 'V06',
    href: '/docs/verb/oseparerbara-och-betoning',
    title: 'Snabbkoll: Oseparerbara prefix och betydelseskiften',
    questions: [
      {
        id: 'v06-q1',
        context: 'De oseparerbara prefixens ramsa.',
        prompt: 'Vilka är de åtta fasta oseparerbara prefixen i tyskan?',
        options: [
          'be-, ge-, er-, ver-, zer-, ent-, emp-, miss-',
          'ab-, an-, auf-, aus-, bei-, mit-, nach-, vor-',
          'in-, un-, dis-, re-, pro-, ex-, sub-, post-',
          'der-, die-, das-, den-, dem-, des-, ein-, kein-'
        ],
        answer: 0,
        explanation: 'be-, ge-, er-, ver-, zer-, ent-, emp-, miss- är de 8 fasta prefixen som aldrig delas och inte tar ge-.',
        feedback: [
          'Rätt! be-, ge-, er-, ver-, zer-, ent-, emp-, miss-.',
          'Fel. Detta är vanliga löstagbara prefix.',
          'Fel. Dessa är latinska prefix i andra språk.',
          'Fel. Dessa är artiklar och pronomen.'
        ]
      },
      {
        id: 'v06-q2',
        context: 'Partizip II vid oseparerbara verb.',
        prompt: 'Hur bildas perfekt av verbet "bezahlen" (att betala)?',
        options: [
          'Er hat bezahlt. (inget ge- läggs till)',
          'Er hat gebezahlt.',
          'Er hat bezahltet.',
          'Er ist gebezahlen.'
        ],
        answer: 0,
        explanation: 'Oseparerbara verb får ALDRIG prefixet ge- i Partizip II: bezahlt, verstanden, zerstört.',
        feedback: [
          'Rätt! bezahlt – fasta prefix förbjuder ge-.',
          'Fel. "gebezahlt" är ett allvarligt fel.',
          'Fel. Felaktig ändelse.',
          'Fel. Hjälpverbet är hat och ge- är fel.'
        ]
      },
      {
        id: 'v06-q3',
        context: 'Prefixet ver- och misstag.',
        prompt: 'Vad betyder verbet "sich verlaufen" jämfört med grundverbet "laufen"?',
        options: [
          'Att gå vilse (ver- signalerar att handlingen går snett eller blir fel).',
          'Att springa mycket snabbt.',
          'Att sälja sina skor.',
          'Att gå på bio.'
        ],
        answer: 0,
        explanation: 'Prefixet ver- signalerar ofta misstag (sich verlaufen = gå vilse; sich verschlafen = försova sig).',
        feedback: [
          'Rätt! gå vilse – ver- visar att man gått fel.',
          'Fel. Snabbhet uttrycks med adverb.',
          'Fel. Sälja heter verkaufen.',
          'Fel. Inte alls.'
        ]
      },
      {
        id: 'v06-q4',
        context: 'Prefixet zer- och förstörelse.',
        prompt: 'Vilken gemensam innebörd har prefixet "zer-" i verb som zerbrechen, zerreißen och zerstören?',
        options: [
          'Förstörelse och sönderfall i bitar.',
          'Att bygga upp något från grunden.',
          'Att göra något långsamt.',
          'Att måla något i färg.'
        ],
        answer: 0,
        explanation: 'Zer- betecknar alltid sönderfall, krossande eller total förstörelse: zerbrechen (gå i kras).',
        feedback: [
          'Rätt! Förstörelse och sönderfall i bitar.',
          'Fel. Motsatsen till förstörelse.',
          'Fel. Sättsadverb visar tempo.',
          'Fel. Ingen koppling till målning.'
        ]
      },
      {
        id: 'v06-q5',
        context: 'Delbarhet i huvudsats.',
        prompt: 'Hur böjs verbet "verstehen" i presens huvudsats ("Jag förstår frågan")?',
        options: [
          'Ich verstehe die Frage. (prefixet sitter fast)',
          'Ich stehe die Frage ver.',
          'Ich vergestehe die Frage.',
          'Ich verstehen die Frage.'
        ],
        answer: 0,
        explanation: 'Oseparerbara verb delas aldrig: Ich verstehe die Frage.',
        feedback: [
          'Rätt! verstehe sitter fast.',
          'Fel. Oseparerbara prefix får aldrig flyttas till slutet.',
          'Fel. ge- hör hemma i particip, inte presens.',
          'Fel. Kräver 1:a person-ändelsen -e.'
        ]
      },
      {
        id: 'v06-q6',
        context: 'Växelprefixet übersetzen.',
        prompt: 'Vilken skillnad är det mellan betonade "\'über-setzen" och obetonade "über-\'setzen"?',
        options: [
          '\'über-setzen (betonat) är löstagbart och betyder "åka färja över"; über-\'setzen (obetonat) är fast och betyder "översätta text".',
          'Det finns ingen skillnad; de stavas bara olika.',
          'Båda betyder översätta.',
          'Betoningen ändras bara i Schweiz.'
        ],
        answer: 0,
        explanation: 'Betonat prefix är konkret och löstagbart (fährt über); obetonat prefix är bildligt och fast (übersetzt ein Buch).',
        feedback: [
          'Helt rätt! Betoningen avgör delbarhet och innebörd.',
          'Fel. De har helt olika grammatik och betydelse.',
          'Fel. Betydelserna skiljer sig markant.',
          'Fel. Detta gäller hela tyska språket.'
        ]
      }
    ]
  },

  // D01: Adverb och adverbiellt använda adjektiv
  '/docs/adverb/adjektiv-och-adverb': {
    lessonId: 'D01',
    href: '/docs/adverb/adjektiv-och-adverb',
    title: 'Snabbkoll: Adverb och adverbiellt använda adjektiv',
    questions: [
      {
        id: 'd01-q1',
        context: 'Hur adjektiv fungerar som adverb.',
        prompt: 'Hur bildas ett sättsadverb från ett adjektiv på tyska (t.ex. från schnell, schön)?',
        options: [
          'Man använder helt enkelt adjektivets oböjda grundform utan extra ändelse (Er läuft schnell).',
          'Man lägger alltid till ändelsen -lich.',
          'Man måste alltid lägga till ändelsen -e.',
          'Man sätter alltid prepositionen mit framför.'
        ],
        answer: 0,
        explanation: 'Tyskan har ingen motsvarighet till engelskans -ly eller svenskans -t: adjektivets grundform fungerar direkt som adverb.',
        feedback: [
          'Rätt! Ren grundform utan ändelse.',
          'Fel. -lich är ett avledningssuffix för adjektiv, inte en adverbbildare.',
          'Fel. -e är en adjektivböjningsändelse.',
          'Fel. Preposition behövs inte.'
        ]
      },
      {
        id: 'd01-q2',
        context: 'Äkta adverb.',
        prompt: 'Vilket av följande ord är ett äkta adverb som ALDRIG kan böjas som adjektiv?',
        options: [
          'gern (gärna)',
          'gut',
          'schön',
          'schnell'
        ],
        answer: 0,
        explanation: 'Gern är ett äkta adverb; man kan inte säga *ein gerner Mann.',
        feedback: [
          'Rätt! gern är ett äkta adverb som aldrig böjs.',
          'Fel. gut är ett adjektiv (ein gutes Buch).',
          'Fel. schön är ett adjektiv (eine schöne Stadt).',
          'Fel. schnell är ett adjektiv (ein schnelles Auto).'
        ]
      },
      {
        id: 'd01-q3',
        context: 'Suffixet -weise.',
        prompt: 'Vad motsvaras det tyska suffixes "-weise" i ord som "normalerweise" och "teilweise" bäst av på svenska?',
        options: [
          'Det svenska suffixet -vis (vanligtvis, delvis).',
          'Det svenska suffixet -het.',
          'Det svenska suffixet -bar.',
          'Prepositionen under.'
        ],
        answer: 0,
        explanation: '-weise motsvarar svenskans -vis: glücklicherweise (lyckligtvis), beispielsweise (exempelvis).',
        feedback: [
          'Rätt! -weise motsvarar svenskans -vis.',
          'Fel. -het bildar substantiv (-heit/-keit).',
          'Fel. -bar bildar adjektiv.',
          'Fel. Ingen koppling till prepositioner.'
        ]
      },
      {
        id: 'd01-q4',
        context: 'Komparation av gern.',
        prompt: 'Vad heter komparativ- och superlativformerna av adverbet "gern"?',
        options: [
          'lieber -> am liebsten',
          'gerner -> am gernsten',
          'besser -> am besten',
          'mehr gern -> am meisten gern'
        ],
        answer: 0,
        explanation: 'Gern kompareras helt oregelbundet: gern -> lieber -> am liebsten.',
        feedback: [
          'Rätt! gern - lieber - am liebsten.',
          'Fel. Dessa regelbundna former finns inte i tyskan.',
          'Fel. besser/am besten hör till gut.',
          'Fel. mehr/meist används inte på detta sätt.'
        ]
      },
      {
        id: 'd01-q5',
        context: 'Skillnad mellan attribut och adverb.',
        prompt: 'I vilken av följande meningar används ordet "laut" som ADVERB?',
        options: [
          'Er spricht sehr laut. (beskriver hur han talar)',
          'Das ist ein lauter Knall.',
          'Die laute Musik stört die Nachbarn.',
          'Ich mag keine lauten Konzerte.'
        ],
        answer: 0,
        explanation: 'I "Er spricht laut" modifierar laut verbet spricht och är därför ett adverb.',
        feedback: [
          'Rätt! Beskriver verbhandlingen = adverb.',
          'Fel. Här är det ett böjt attributivt adjektiv (lauter Knall).',
          'Fel. Attributivt adjektiv framför Musik.',
          'Fel. Attributivt adjektiv i plural.'
        ]
      },
      {
        id: 'd01-q6',
        context: 'Superlativ av adverb i satsen.',
        prompt: 'Vilken form väljs för att uttrycka "Han sprang snabbast av alla"?',
        options: [
          'Er lief am schnellsten von allen.',
          'Er lief das schnellste von allen.',
          'Er lief schnellsten von allen.',
          'Er lief der schnellste von allen.'
        ],
        answer: 0,
        explanation: 'Fristående adverbial superlativ bildas alltid med formen am ...-(e)sten: am schnellsten.',
        feedback: [
          'Helt rätt! am schnellsten för adverbial superlativ.',
          'Fel. das schnellste kräver ett substantiv (das schnellste Auto).',
          'Fel. am kan inte utelämnas.',
          'Fel. der schnellste är maskulint attribut.'
        ]
      }
    ]
  },

  // D02: Erst, schon, noch, gerade och wieder
  '/docs/adverb/tidsadverb': {
    lessonId: 'D02',
    href: '/docs/adverb/tidsadverb',
    title: 'Snabbkoll: Erst, schon, noch, gerade och wieder',
    questions: [
      {
        id: 'd02-q1',
        context: 'Den stora fällan med ordet erst.',
        prompt: 'Vad betyder meningen "Der Zug kommt erst um 20 Uhr"?',
        options: [
          'Tåget anländer inte förrän kl. 20 (senare än önskat/väntat).',
          'Tåget anländer först kl. 20 och sedan åker bussen.',
          'Tåget anländer redan kl. 20.',
          'Tåget ställs in kl. 20.'
        ],
        answer: 0,
        explanation: 'Erst vid tidpunkter betyder "inte förrän / bara": Der Zug kommt erst um 20 Uhr = inte förrän kl 20.',
        feedback: [
          'Rätt! erst = inte förrän.',
          'Fel. Turordningen "först... sedan" heter zuerst... dann på tyska.',
          'Fel. "Redan" heter schon.',
          'Fel. Det finns ingen inställelse.'
        ]
      },
      {
        id: 'd02-q2',
        context: 'Ordningsföljd först ... sedan.',
        prompt: 'Hur säger man korrekt: "Först äter vi, sedan går vi ut"?',
        options: [
          'Zuerst essen wir, dann gehen wir aus.',
          'Erst essen wir, damals gehen wir aus.',
          'Schon essen wir, noch gehen wir aus.',
          'Gerade essen wir, wieder gehen wir aus.'
        ],
        answer: 0,
        explanation: 'Ordningsföljden först... sedan uttrycks med paret zuerst... dann.',
        feedback: [
          'Rätt! Zuerst... dann är den korrekta sekvensen.',
          'Fel. damals betyder på den tiden och passar inte.',
          'Fel. Betydelserna är helt förvanskade.',
          'Fel. Inte alls.'
        ]
      },
      {
        id: 'd02-q3',
        context: 'Fortsatt tillstånd med noch.',
        prompt: 'Vad betyder meningen "Schläfst du noch?"?',
        options: [
          'Sover du fortfarande?',
          'Har du redan sovit?',
          'Sover du inte förrän nu?',
          'Sover du igen?'
        ],
        answer: 0,
        explanation: 'Noch uttrycker ett fortsatt tillstånd som ännu inte upphört: fortfarande.',
        feedback: [
          'Rätt! noch = fortfarande.',
          'Fel. "Redan" heter schon.',
          'Fel. Det vore erst.',
          'Fel. "Igen" heter wieder.'
        ]
      },
      {
        id: 'd02-q4',
        context: 'Pågående handling med gerade.',
        prompt: 'Hur uttrycker man på naturlig tyska att man håller på att laga mat just i detta ögonblick?',
        options: [
          'Ich koche gerade das Abendessen.',
          'Ich bin kochend das Abendessen.',
          'Ich halte zu kochen das Abendessen.',
          'Ich koche schon wieder das Abendessen.'
        ],
        answer: 0,
        explanation: 'Tyskan saknar pågående verbform och använder presens + gerade för att signalera att handlingen pågår nu.',
        feedback: [
          'Rätt! Ich koche gerade.',
          'Fel. Engelsk progressiv interferens (I am cooking) som är felaktig på tyska.',
          'Fel. Halten kan inte användas så här.',
          'Fel. schon wieder betyder "nu igen".'
        ]
      },
      {
        id: 'd02-q5',
        context: 'Skillnad mellan wieder och wider.',
        prompt: 'Vilket ord betyder "igen / återigen" och stavas med "-ie-"?',
        options: [
          'wieder (med -ie-)',
          'wider (med enkelt -i-)',
          'weiter',
          'weder'
        ],
        answer: 0,
        explanation: 'Wieder (med -ie-) betyder igen. Wider (med enkelt -i-) betyder mot (som i Widerstand).',
        feedback: [
          'Rätt! wieder = igen.',
          'Fel. wider betyder mot/emot.',
          'Fel. weiter betyder vidare.',
          'Fel. weder paras ihop med noch (varken... eller).'
        ]
      },
      {
        id: 'd02-q6',
        context: 'Betydelsen av schon wieder.',
        prompt: 'Vad uttrycker det vanliga vardagsutropet "Nicht schon wieder!"?',
        options: [
          'Inte nu igen! (en irriterad reaktion på en upprepad händelse)',
          'Inte vackert igen!',
          'Redan färdig!',
          'Aldrig någonsin!'
        ],
        answer: 0,
        explanation: 'Schon wieder betyder "nu igen" och uttrycker ofta lätt irritation över en upprepning.',
        feedback: [
          'Helt rätt! Nicht schon wieder! = Inte nu igen!',
          'Fel. Förväxling mellan schon (redan) och schön (vacker).',
          'Fel. Inte alls.',
          'Fel. Aldrig någonsin heter noch nie / niemals.'
        ]
      }
    ]
  },

  // D03: Hier, dort, hin och her
  '/docs/adverb/plats-och-riktning': {
    lessonId: 'D03',
    href: '/docs/adverb/plats-och-riktning',
    title: 'Snabbkoll: Hier, dort, hin och her',
    questions: [
      {
        id: 'd03-q1',
        context: 'Grundregeln för hin och her.',
        prompt: 'Hur avgör man om man ska använda "hin" eller "her"?',
        options: [
          'hin rör sig bort från talaren; her rör sig mot talaren.',
          'hin rör sig mot talaren; her rör sig bort från talaren.',
          'hin används bara i dåtid och her i presens.',
          'hin används för kvinnor och her för män.'
        ],
        answer: 0,
        explanation: 'Talarperspektivet styr: hin pekar bort från talaren, her pekar mot talaren.',
        feedback: [
          'Rätt! hin = bort från mig; her = mot mig.',
          'Fel. Ordningen är den rakt omvända.',
          'Fel. Tempus påverkar inte riktningen.',
          'Fel. Genus har ingen betydelse.'
        ]
      },
      {
        id: 'd03-q2',
        context: 'Inbjudan vid dörren.',
        prompt: 'När du står inne i ditt vardagsrum och någon knackar på dörren, vad ropar du för att bjuda in dem?',
        options: [
          'Herein! (Kommen Sie herein! - in mot mig)',
          'Hinein!',
          'Dorthin!',
          'Hinab!'
        ],
        answer: 0,
        explanation: 'Personen rör sig inåt mot talaren som redan står i rummet -> herein (eller vardagligt: rein).',
        feedback: [
          'Rätt! Herein! – kom in hit till mig.',
          'Fel. Hinein används om du står utanför och tittar in i rummet bort från dig.',
          'Fel. Dorthin betyder dit bort.',
          'Fel. Hinab betyder nedåt.'
        ]
      },
      {
        id: 'd03-q3',
        context: 'Vardaglig förkortning på r-.',
        prompt: 'Vilka ord motsvaras talspråksorden "rein" och "raus" av i formell skrift?',
        options: [
          'hinein/herein och hinaus/heraus',
          'rauf och runter',
          'rüber och vorbei',
          'hin och her'
        ],
        answer: 0,
        explanation: 'Rein ersätter hinein/herein (in); raus ersätter hinaus/heraus (ut).',
        feedback: [
          'Rätt! rein = in; raus = ut.',
          'Fel. rauf/runter betyder upp/ner.',
          'Fel. rüber betyder över.',
          'Fel. De är enkla riktningsord.'
        ]
      },
      {
        id: 'd03-q4',
        context: 'Frågeord för riktning.',
        prompt: 'Vilket frågeord används när man frågar efter resans destination ("Vart åker du?")?',
        options: [
          'Wohin fährst du? (eller Wo fährst du hin?)',
          'Woher fährst du?',
          'Wo fährst du her?',
          'Wann fährst du hin?'
        ],
        answer: 0,
        explanation: 'Riktning mot en destination efterfrågas med wohin (eller uppdelat: wo ... hin).',
        feedback: [
          'Rätt! Wohin för riktning bort till en plats.',
          'Fel. Woher frågar efter ursprung (varifrån).',
          'Fel. Wo ... her frågar varifrån.',
          'Fel. Wann frågar efter tidpunkt.'
        ]
      },
      {
        id: 'd03-q5',
        context: 'Platsadverben hier, da och dort.',
        prompt: 'Vilket ord väljs för att peka på något som finns långt bort på avstånd ("där borta")?',
        options: [
          'dort (eller dort drüben)',
          'hier',
          'hierher',
          'her'
        ],
        answer: 0,
        explanation: 'Hier är nära talaren (här); dort anger avstånd bort från talaren (där borta).',
        feedback: [
          'Rätt! dort / dort drüben för avstånd.',
          'Fel. hier betyder här vid mig.',
          'Fel. hierher anger riktning hit.',
          'Fel. her är ett riktningsadverb.'
        ]
      },
      {
        id: 'd03-q6',
        context: 'Uppmaning att komma fram.',
        prompt: 'Hur säger läraren till eleven: "Kom fram hit till tavlan!"?',
        options: [
          'Komm bitte nach vorne her!',
          'Komm bitte nach vorne hin!',
          'Geh bitte nach vorne her!',
          'Bleib bitte nach vorne dort!'
        ],
        answer: 0,
        explanation: 'Eleven rör sig mot läraren som står framme vid tavlan -> her.',
        feedback: [
          'Helt rätt! her för rörelse mot talaren.',
          'Fel. hin skulle innebära att läraren skickar eleven bort från sig.',
          'Fel. Geh betyder gå, inte kom.',
          'Fel. Bleib betyder stanna.'
        ]
      }
    ]
  },

  // D04: Sehr, viel, so, zu och genug
  '/docs/adverb/grad-och-mangd': {
    lessonId: 'D04',
    href: '/docs/adverb/grad-och-mangd',
    title: 'Snabbkoll: Sehr, viel, so, zu och genug',
    questions: [
      {
        id: 'd04-q1',
        context: 'Förstärkning av adjektiv i komparativ.',
        prompt: 'Hur säger man korrekt "mycket snabbare" på tyska?',
        options: [
          'viel schneller (komparativ kräver alltid viel!)',
          'sehr schneller',
          'sehr mehr schnell',
          'zu schneller'
        ],
        answer: 0,
        explanation: 'En komparativ kan ALDRIG förstärkas med sehr; det heter alltid viel schneller, viel größer, viel besser.',
        feedback: [
          'Rätt! viel schneller – komparativ kräver alltid viel.',
          'Fel. "sehr schneller" är ett klassiskt fel.',
          'Fel. Mehr används inte för att komparera schneller.',
          'Fel. zu schneller betyder för snabbare och är felaktigt.'
        ]
      },
      {
        id: 'd04-q2',
        context: 'Förstärkning av adjektiv i grundform.',
        prompt: 'Hur säger man "mycket vacker" på tyska?',
        options: [
          'sehr schön (adjektiv i grundform tar sehr)',
          'viel schön',
          'mehr schön',
          'vieles schön'
        ],
        answer: 0,
        explanation: 'Adjektiv och adverb i positiv (grundform) förstärks med sehr: sehr schön, sehr gut.',
        feedback: [
          'Rätt! sehr schön för grundform.',
          'Fel. viel schön är felaktigt framför positiv.',
          'Fel. mehr används inte så här.',
          'Fel. vieles är ett självständigt substantiverat pronomen.'
        ]
      },
      {
        id: 'd04-q3',
        context: 'Gradadverbet zu för övermått.',
        prompt: 'Vad uttrycker ordet "zu" i meningen "Die Hose ist mir zu eng"?',
        options: [
          'Ett negativt eller problematiskt övermått ("för trånga / alltför trånga").',
          'Att byxorna är stängda.',
          'Att byxorna är mycket vackra.',
          'Riktning mot byxorna.'
        ],
        answer: 0,
        explanation: 'Adverbet zu framför adjektiv uttrycker att något överskrider en acceptabel gräns: för trånga.',
        feedback: [
          'Rätt! zu eng = för trånga.',
          'Fel. zu kan betyda stängd, men inte framför ett annat adjektiv.',
          'Fel. Det signalerar ett problem, inte skönhet.',
          'Fel. Det är ett gradadverb här, inte preposition.'
        ]
      },
      {
        id: 'd04-q4',
        context: 'Placering av ordet genug.',
        prompt: 'Var placeras ordet "genug" oftast i förhållande till adjektivet i "gammal nog"?',
        options: [
          'Efter adjektivet: alt genug.',
          'Före verbet.',
          'Alltid som första ord i satsen.',
          'Mellan artikeln och substantivet.'
        ],
        answer: 0,
        explanation: 'Genug placeras i modern tyska regelbundet efter det adjektiv det bestämmer: alt genug, groß genug.',
        feedback: [
          'Rätt! alt genug – efter adjektivet.',
          'Fel. Står direkt intill adjektivet.',
          'Fel. Står inte först om inte särskild betoning krävs.',
          'Fel. Det står efter adjektivet.'
        ]
      },
      {
        id: 'd04-q5',
        context: 'Gradadverbet kaum.',
        prompt: 'Vad betyder ordet "kaum" i "Ich konnte ihn im Dunkeln kaum sehen"?',
        options: [
          'knappt / nästan inte',
          'mycket tydligt',
          'gärna',
          'plötsligt'
        ],
        answer: 0,
        explanation: 'Kaum är ett minimerande gradadverb som betyder knappt eller nästan inte alls.',
        feedback: [
          'Rätt! kaum = knappt.',
          'Fel. Motsatsen till knappt.',
          'Fel. Gärna heter gern.',
          'Fel. Plötsligt heter plötzlich.'
        ]
      },
      {
        id: 'd04-q6',
        context: 'Mycket vid verbhandling.',
        prompt: 'Hur säger man korrekt "Han arbetar mycket"?',
        options: [
          'Er arbeitet viel.',
          'Er arbeitet sehr.',
          'Er arbeitet zu viel schön.',
          'Er arbeitet mehrer.'
        ],
        answer: 0,
        explanation: 'Vid verb används viel: Er arbeitet viel, er schläft viel. (Sehr kan inte stå ensamt vid ett verb).',
        feedback: [
          'Helt rätt! Er arbeitet viel.',
          'Fel. sehr kan inte modifiera ett verb ensamt utan viel (sehr viel).',
          'Fel. Obegriplig konstruktion.',
          'Fel. mehrer finns inte.'
        ]
      }
    ]
  },

  // D05: Grundtal och tal i vardagen
  '/docs/rakneord/grundtal': {
    lessonId: 'D05',
    href: '/docs/rakneord/grundtal',
    title: 'Snabbkoll: Grundtal och tal i vardagen',
    questions: [
      {
        id: 'd05-q1',
        context: 'Ental före tiotal i talen 21-99.',
        prompt: 'Hur skrivs och uttalas siffran 45 på tyska?',
        options: [
          'fünfundvierzig ("fem-och-fyrtio")',
          'vierzigundfünf',
          'fünfzigundvier',
          'fünfvierzig'
        ],
        answer: 0,
        explanation: 'Tyskan sätter alltid entalet före tiotalet, förenat med und: fünf-und-vierzig.',
        feedback: [
          'Rätt! fünfundvierzig.',
          'Fel. Tiotalet får inte stå först på tyska.',
          'Fel. Detta vore 54, inte 45.',
          'Fel. Ordet und får inte utelämnas.'
        ]
      },
      {
        id: 'd05-q2',
        context: 'Oregelbundenheterna i 16 och 17.',
        prompt: 'Hur stavas talen 16 och 17 korrekt på tyska?',
        options: [
          'sechzehn och siebzehn (utan -s- och utan -en-)',
          'sechszehn och siebenzehn',
          'sechzig och siebzig',
          'sechtzehn och siebentezehn'
        ],
        answer: 0,
        explanation: 'Sechs förlorar sitt s (sechzehn); sieben förlorar ändelsen -en (siebzehn).',
        feedback: [
          'Rätt! sechzehn och siebzehn är de korrekta formerna.',
          'Fel. Dessa regelbundna former är felaktiga på tyska.',
          'Fel. sechzig och siebzig betyder 60 och 70.',
          'Fel. Felaktiga konstruktioner.'
        ]
      },
      {
        id: 'd05-q3',
        context: 'Stavningen av tiotalet 30.',
        prompt: 'Hur stavas siffran 30 till skillnad från de övriga tiotalen på -zig?',
        options: [
          'dreißig (med dubbel-s/eszett: -ßig)',
          'dreizig',
          'dreissigst',
          'dreichzig'
        ],
        answer: 0,
        explanation: 'Efter den långa diftongen ei stavas 30 som det enda tiotalet med -ßig: dreißig.',
        feedback: [
          'Rätt! dreißig är det enda tiotalet med -ßig.',
          'Fel. *dreizig existerar inte i standardtyska.',
          'Fel. Detta liknar ett ordningstal.',
          'Fel. Felaktig stavning.'
        ]
      },
      {
        id: 'd05-q4',
        context: 'Skillnad mellan eins och artikelordet ein.',
        prompt: 'Vilken form används när talet 1 står direkt framför ett substantiv ("en euro", der Euro)?',
        options: [
          'Ich habe einen Euro. (böjs som obestämd artikel)',
          'Ich habe eins Euro.',
          'Ich habe eines Euro.',
          'Ich habe einzehn Euro.'
        ],
        answer: 0,
        explanation: 'Framför substantiv böjs 1 som den obestämda artikeln: einen Euro (maskulinum ackusativ). Eins används bara vid abstrakt räkning.',
        feedback: [
          'Rätt! einen Euro – böjs efter genus och kasus.',
          'Fel. eins används bara vid ren sifferräkning (eins, zwei, drei).',
          'Fel. eines är genitiv eller självständigt neutrum.',
          'Fel. Finns inte.'
        ]
      },
      {
        id: 'd05-q5',
        context: 'Hopskrivning av tal.',
        prompt: 'Hur skrivs talet 250 (zweihundertfünfzig) på tyska?',
        options: [
          'I ett enda långt sammanhängande ord utan mellanslag.',
          'Uppdelat med bindestreck mellan varje siffra.',
          'Alltid med mellanslag mellan hundratal och tiotal.',
          'Med stor begynnelsebokstav.'
        ],
        answer: 0,
        explanation: 'Alla tal under en miljon skrivs samman i ett enda ord: zweihundertfünfzig.',
        feedback: [
          'Rätt! Skrivs ihop i ett enda ord.',
          'Fel. Bindestreck används inte.',
          'Fel. Särskrivning är felaktig under 1 miljon.',
          'Fel. Grundtal skrivs med liten bokstav.'
        ]
      },
      {
        id: 'd05-q6',
        context: 'Miljoner och miljarder.',
        prompt: 'Hur fungerar orden "Million" och "Milliarde" grammatiskt på tyska?',
        options: [
          'De är feminina substantiv (die Million, die Milliarde) med stor bokstav och plural på -en.',
          'De är oböjliga småord som skrivs med liten bokstav precis som hundert.',
          'De är maskulina substantiv.',
          'De får aldrig användas i skrift.'
        ],
        answer: 0,
        explanation: 'Million och Milliarde är fullständiga feminina substantiv: eine Million, zwei Millionen.',
        feedback: [
          'Helt rätt! Feminina substantiv med stor bokstav och plural.',
          'Fel. De fungerar inte som hundert och tausend.',
          'Fel. De har feminint genus (die).',
          'Fel. De används flitigt i skrift och statistik.'
        ]
      }
    ]
  },

  // D06: Ordningstal, datum och klockslag
  '/docs/rakneord/ordningstal-datum-och-klocka': {
    lessonId: 'D06',
    href: '/docs/rakneord/ordningstal-datum-och-klocka',
    title: 'Snabbkoll: Ordningstal, datum och klockslag',
    questions: [
      {
        id: 'd06-q1',
        context: 'Bildning av ordningstal 1-19.',
        prompt: 'Vilken ändelse läggs till grundtalen 1–19 för att bilda ordningstal (t.ex. der vierte)?',
        options: [
          '-te (der vierte, der zehnte)',
          '-ste (der vierste)',
          '-el (das Viertel)',
          '-er (der vierer)'
        ],
        answer: 0,
        explanation: 'Ordningstalen 1–19 bildas med -te (der vierte, zehnte). Från 20 används -ste (der zwanzigste).',
        feedback: [
          'Rätt! -te för talen 1 till 19.',
          'Fel. -ste används först från 20 och uppåt.',
          'Fel. -el bildar bråktal.',
          'Fel. -er bildar inte ordningstal.'
        ]
      },
      {
        id: 'd06-q2',
        context: 'Oregelbundna ordningstal.',
        prompt: 'Vilka ordningstal är oregelbundna bland de första talen?',
        options: [
          'der erste (1:a) och der dritte (3:e)',
          'der einte och der dreite',
          'der zweiste och der vieste',
          'inga alls; alla är helt regelbundna'
        ],
        answer: 0,
        explanation: 'Första heter erste (inte einte) och tredje heter dritte (inte dreite). Även siebte och achte har smärre justeringar.',
        feedback: [
          'Rätt! der erste och der dritte är oregelbundna.',
          'Fel. einte och dreite existerar inte på tyska.',
          'Fel. 2:a heter zweite och 4:e heter vierte.',
          'Fel. De är tydligt oregelbundna.'
        ]
      },
      {
        id: 'd06-q3',
        context: 'Datumangivelse med am.',
        prompt: 'Hur uttrycks "den 1 maj" i meningen "Vi ses den 1 maj" (am 1. Mai)?',
        options: [
          'am ersten Mai (dativändelsen -en är obligatorisk)',
          'am erste Mai',
          'an der erste Mai',
          'um ersten Mai'
        ],
        answer: 0,
        explanation: 'am är an + dem (dativ) &rarr; ordningstalet fungerar som adjektiv och MÅSTE få svag dativändelse: am ersten Mai.',
        feedback: [
          'Rätt! am ersten Mai – dativändelsen -en krävs.',
          'Fel. "am erste Mai" är ett vanligt grammatiskt fel.',
          'Fel. Fel artikelform för dativ.',
          'Fel. um används vid klockslag, inte datum.'
        ]
      },
      {
        id: 'd06-q4',
        context: 'Klockslag med halv.',
        prompt: 'Vad betyder klockslaget "halb vier" på tyska?',
        options: [
          '15:30 (halv fyra - halva fjärde timmen har gått)',
          '16:30 (halv fem)',
          '14:30 (halv tre)',
          '04:00 precis'
        ],
        answer: 0,
        explanation: 'Halb vier betyder 15:30 (eller 03:30) precis som på svenska: man är halvvägs till fyra.',
        feedback: [
          'Rätt! halb vier = 15:30.',
          'Fel. Det vore halb fünf.',
          'Fel. Det vore halb drei.',
          'Fel. Det vore vier Uhr.'
        ]
      },
      {
        id: 'd06-q5',
        context: 'Officiell tidsangivelse.',
        prompt: 'Hur anges klockan 14:45 i officiell radio- och tågstil?',
        options: [
          'vierzehn Uhr fünfundvierzig',
          'Viertel vor drei',
          'drei Viertel drei',
          'fünfzehn Uhr minus fünfzehn'
        ],
        answer: 0,
        explanation: 'Officiell stil läser alltid upp 24-timmarsuret rakt av: timme + Uhr + minut.',
        feedback: [
          'Rätt! vierzehn Uhr fünfundvierzig är officiell stil.',
          'Fel. Viertel vor drei är vardaglig stil.',
          'Fel. Regional vardagsstil.',
          'Fel. Så säger man inte.'
        ]
      },
      {
        id: 'd06-q6',
        context: 'Punkten efter datum i skrift.',
        prompt: 'Vad betyder punkten efter siffran i "am 3. Oktober"?',
        options: [
          'Den visar att siffran är ett ordningstal och ska läsas som "dritten".',
          'Det är ett vanligt skiljetecken som avslutar meningen.',
          'Den visar att det är en förkortning av ett klockslag.',
          'Punkten är ett stavfel.'
        ],
        answer: 0,
        explanation: 'På tyska motsvarar punkten efter en siffra ordningstal (1. = erste, 2. = zweite, 3. = dritte).',
        feedback: [
          'Helt rätt! Punkten markerar ordningstal.',
          'Fel. Den avslutar inte meningen här.',
          'Fel. Den har inget med klockan att göra.',
          'Fel. Det är standardiserad tysk skrivregel.'
        ]
      }
    ]
  },

  // D07: Mått, bråk, procent och priser
  '/docs/rakneord/matt-brak-och-procent': {
    lessonId: 'D07',
    href: '/docs/rakneord/matt-brak-och-procent',
    title: 'Snabbkoll: Mått, bråk, procent och priser',
    questions: [
      {
        id: 'd07-q1',
        context: 'Måttordens böjning i plural.',
        prompt: 'Hur uttrycks "två kilo äpplen" och "tre liter mjölk" korrekt?',
        options: [
          'zwei Kilo Äpfel / drei Liter Milch (maskulina/neutrala mått förblir oböjda)',
          'zwei Kilos Äpfel / drei Liters Milch',
          'zwei Kiloen Äpfel / drei Literen Milch',
          'zwei Kilo von Äpfeln / drei Liter von Milch'
        ],
        answer: 0,
        explanation: 'Maskulina och neutrala mått-, vikt- och mängdord förblir alltid oböjda efter siffror: zwei Kilo, drei Liter.',
        feedback: [
          'Rätt! Kilo och Liter förblir oböjda i plural efter siffror.',
          'Fel. Kilos/Liters är engelsk böjning.',
          'Fel. Felaktiga ändelser.',
          'Fel. Omskrivning med von behövs inte här.'
        ]
      },
      {
        id: 'd07-q2',
        context: 'Feminina måttord i plural.',
        prompt: 'Vad gäller för FEMININA måttord efter siffror (t.ex. die Tasse, die Flasche)?',
        options: [
          'De böjs regelbundet i plural med ändelse: zwei Tassen Kaffee, drei Flaschen Wein.',
          'De förblir också helt oböjda (zwei Tasse Kaffee).',
          'De måste alltid ersättas med maskulina ord.',
          'De får ändelsen -s (zwei Tasses).'
        ],
        answer: 0,
        explanation: 'Feminina måttord är det stora undantaget: de får alltid vanlig pluraländelse (-n/-en): zwei Tassen, drei Flaschen.',
        feedback: [
          'Rätt! Feminina måttord böjs med -n/-en.',
          'Fel. Feminina ord kan inte stå oböjda i plural här.',
          'Fel. Inget ordbyte krävs.',
          'Fel. Tyskan har inte -s som feminin pluraländelse.'
        ]
      },
      {
        id: 'd07-q3',
        context: 'Bråktal i recept och matematik.',
        prompt: 'Vad heter bråktalen 1/3 och 1/4 som substantiv på tyska?',
        options: [
          'ein Drittel / ein Viertel (neutrala substantiv på -el)',
          'ein Dritte / ein Vierte',
          'ein Dreitel / ein Vierteil',
          'ein Dreier / ein Vierer'
        ],
        answer: 0,
        explanation: 'Bråktal bildas av ordningstalsstammen + -el och är neutrum: das Drittel, das Viertel.',
        feedback: [
          'Rätt! ein Drittel och ein Viertel.',
          'Fel. Dritte/Vierte är ordningstal, inte bråk.',
          'Fel. Felaktig stambildning.',
          'Fel. Dreier/Vierer betecknar siffran 3 och 4 som betyg eller nummer.'
        ]
      },
      {
        id: 'd07-q4',
        context: 'Skillnad mellan halb och die Hälfte.',
        prompt: 'Hur säger man "en halvtimme" kontra "hälften av studenterna"?',
        options: [
          'eine halbe Stunde (adjektiv) / die Hälfte der Studenten (substantiv)',
          'eine Hälfte Stunde / die halbe der Studenten',
          'ein halb Stunde / die Hälften von Studenten',
          'eine halbige Stunde / die Halbe der Studenten'
        ],
        answer: 0,
        explanation: 'halb är ett adjektiv (eine halbe Stunde); die Hälfte är ett substantiv (die Hälfte der Studenten).',
        feedback: [
          'Rätt! halbe Stunde (adjektiv) och die Hälfte (substantiv).',
          'Fel. Byter plats på funktionerna.',
          'Fel. Grammatiskt felaktiga former.',
          'Fel. halbige existerar inte.'
        ]
      },
      {
        id: 'd07-q5',
        context: 'Division och multiplikation.',
        prompt: 'Hur uttalas räknesätten 3 x 3 = 9 och 10 : 2 = 5 på tyska?',
        options: [
          'Drei mal drei ist neun / Zehn geteilt durch zwei ist fünf.',
          'Drei multipliziert drei ist neun / Zehn dividiert zwei ist fünf.',
          'Drei und drei ist neun / Zehn ohne zwei ist fünf.',
          'Drei mal drei macht zehn / Zehn durch zwei macht vier.'
        ],
        answer: 0,
        explanation: 'Multiplikation uttrycks med mal; division uttrycks med geteilt durch (eller bara durch).',
        feedback: [
          'Rätt! mal för multiplikation och geteilt durch för division.',
          'Fel. Formell latiniserad stil som inte används i normal huvudräkning.',
          'Fel. Fel räkneord.',
          'Fel. Felaktiga matematiska resultat.'
        ]
      },
      {
        id: 'd07-q6',
        context: 'Prisangivelse i butik.',
        prompt: 'Hur uttalar kassörskan priset 3,75 € i en tysk mataffär?',
        options: [
          'Drei Euro fünfundsiebzig.',
          'Drei Euros fünfundsiebzig Cents.',
          'Drei Komma fünfundsiebzig Euros.',
          'Drei Euro und fünfundsiebzig Centen.'
        ],
        answer: 0,
        explanation: 'I vardagen uttalas valutan utan plural-s: drei Euro fünfundsiebzig.',
        feedback: [
          'Helt rätt! Drei Euro fünfundsiebzig.',
          'Fel. Euro och Cent förblir oböjda efter siffror.',
          'Fel. Euros med -s är felaktigt.',
          'Fel. Centen existerar inte.'
        ]
      }
    ]
  }
};

let content = fs.readFileSync('data/learning-quizzes.ts', 'utf8');

const lastIndex = content.lastIndexOf('};');
if (lastIndex === -1) {
  console.error("Kunde inte hitta avslutande };");
  process.exit(1);
}

let toInsert = '\n';
for (const [key, val] of Object.entries(g1fQuizzes)) {
  toInsert += `  '${key}': ${JSON.stringify(val, null, 4).replace(/\n/g, '\n  ')},\n\n`;
}

const updated = content.slice(0, lastIndex) + toInsert + content.slice(lastIndex);
fs.writeFileSync('data/learning-quizzes.ts', updated, 'utf8');
console.log("Lade till 6 frågor för alla 10 lektioner i Grupp 1F i data/learning-quizzes.ts!");
