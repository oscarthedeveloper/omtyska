import fs from 'fs';

const filePath = '/Users/oscarpagerup/Desktop/Git Repo/Om-Tyska/data/learning-quizzes.ts';
let content = fs.readFileSync(filePath, 'utf8');

const mer1Quizzes = `  '/mer/werden-bleiben-bekommen': {
    "lessonId": "E01",
    "href": "/mer/werden-bleiben-bekommen",
    "title": "Snabbkoll: Att bli och att få på tyska",
    "questions": [
      {
        "id": "e01-q1",
        "context": "Översättning av 'att bli'.",
        "prompt": "Hur översätts 'Han blev läkare' till tyska?",
        "options": [
          "Er wurde Arzt.",
          "Er blieb Arzt.",
          "Er bekam Arzt.",
          "Er kriegte Arzt."
        ],
        "answer": 0,
        "explanation": "Bli i betydelsen övergång till ett nytt tillstånd eller yrke heter werden (preteritum: wurde).",
        "feedback": [
          "Korrekt! Werden uttrycker övergång till nytt tillstånd.",
          "Fel. Bleiben betyder 'förbli / stanna kvar'.",
          "Fel. Bekommen betyder 'få / erhålla', inte bli.",
          "Fel. Kriegen är talspråk för bekommen (få)."
        ]
      },
      {
        "id": "e01-q2",
        "context": "Falsk vän: bleiben.",
        "prompt": "Vad betyder den tyska meningen \\"Er blieb den ganzen Tag im Bett\\"? ",
        "options": [
          "Han stannade/låg kvar i sängen hela dagen.",
          "Han blev sängliggande hela dagen.",
          "Han fick en hel säng.",
          "Han köpte en säng."
        ],
        "answer": 0,
        "explanation": "Bleiben betyder 'stanna / förbli', inte bli.",
        "feedback": [
          "Korrekt! Bleiben = stanna kvar / förbli i samma tillstånd.",
          "Fel. 'Blev sängliggande' kräver verbet werden.",
          "Fel. Bekommen betyder få.",
          "Fel. Kaufen betyder köpa."
        ]
      },
      {
        "id": "e01-q3",
        "context": "Översättning av 'att få'.",
        "prompt": "Hur översätter man 'Hon fick en fin present'?",
        "options": [
          "Sie bekam ein schönes Geschenk.",
          "Sie wurde ein schönes Geschenk.",
          "Sie blieb ein schönes Geschenk.",
          "Sie durfte ein schönes Geschenk."
        ],
        "answer": 0,
        "explanation": "Att få något materiellt eller abstrakt heter bekommen (eller talspråkligt kriegen).",
        "feedback": [
          "Korrekt! Bekommen = att få / erhålla.",
          "Fel. 'Sie wurde ein Geschenk' betyder att hon själv förvandlades till en present!",
          "Fel. Bleiben betyder förbli.",
          "Fel. Dürfen innebär att ha tillåtelse/lov att göra något."
        ]
      },
      {
        "id": "e01-q4",
        "context": "Dürfen kontra bekommen.",
        "prompt": "När används *dürfen* för det svenska ordet 'få'?",
        "options": [
          "När 'få' betyder att ha tillåtelse eller lov att göra en handling (t.ex. 'Får jag gå på bio?').",
          "När man får en present på julafton.",
          "När man drabbas av en förkylning.",
          "När man tar emot ett brev på posten."
        ],
        "answer": 0,
        "explanation": "Dürfen är ett modalverb som reglerar tillåtelse/tillstånd: 'Darf ich ins Kino gehen?'.",
        "feedback": [
          "Korrekt! Tillåtelse och regler uttrycks med dürfen.",
          "Fel. Gåvor och paket tas emot med bekommen.",
          "Fel. Sjukdomar 'får' man med bekommen.",
          "Fel. Brev erhålls med bekommen/erhalten."
        ]
      },
      {
        "id": "e01-q5",
        "context": "Bekommen-passiv (Rezipientenpassiv).",
        "prompt": "Vad innebär konstruktionen i: \\"Er bekam das Buch geschenkt\\"? ",
        "options": [
          "Ett mottagarpassiv som betyder 'Han fick boken som gåva / Boken skänktes till honom'.",
          "Att han gav bort boken till en vän.",
          "Att han skrev boken själv.",
          "Att boken försvann."
        ],
        "answer": 0,
        "explanation": "Bekommen-passiv gör dativobjektet (mottagaren) till subjekt: bekommen + particip II.",
        "feedback": [
          "Korrekt! Rezipientenpassiv med bekommen sätter mottagaren som subjekt.",
          "Fel. Han tog emot gåvan, gav inte bort den.",
          "Fel. Ingen författarhandling avses.",
          "Fel. Handlingen är en gåva."
        ]
      },
      {
        "id": "e01-q6",
        "context": "Hjälpverb för werden och bleiben.",
        "prompt": "Vilket hjälpverb bildar *werden* och *bleiben* perfekt med?",
        "options": [
          "sein (*ist geworden*, *ist geblieben*).",
          "haben (*hat geworden*, *hat geblieben*).",
          "tun.",
          "machen."
        ],
        "answer": 0,
        "explanation": "Både werden (tillståndsförändring) och bleiben (bibehållet tillstånd) bildar alltid perfekt med sein.",
        "feedback": [
          "Korrekt! Båda verben kräver undantagslöst 'sein' i perfekt.",
          "Fel. Haben är strikt ogrammatiskt vid werden och bleiben.",
          "Fel. Tun bildar inte standardperfekt.",
          "Fel. Machen är ett helt annat verb."
        ]
      }
    ]
  },
  '/mer/wissen-kennen-konnen': {
    "lessonId": "E02",
    "href": "/mer/wissen-kennen-konnen",
    "title": "Snabbkoll: Wissen, kennen och können",
    "questions": [
      {
        "id": "e02-q1",
        "context": "Wissen kontra kennen.",
        "prompt": "Vilket verb används för 'Känner du den här författaren?'?",
        "options": [
          "Kennst du diesen Autor?",
          "Weißt du diesen Autor?",
          "Kannst du diesen Autor?",
          "Hast du diesen Autor?"
        ],
        "answer": 0,
        "explanation": "Kennen används om bekantskap med personer, platser, konstverk och konkreta ting.",
        "feedback": [
          "Korrekt! Kennen styr ackusativobjekt för bekantskap med personer.",
          "Fel. Wissen används för fakta, propositioner och bisatser.",
          "Fel. Können avser förmåga eller kunnande i ett ämne/språk.",
          "Fel. Haben betyder ha/äga."
        ]
      },
      {
        "id": "e02-q2",
        "context": "Faktakunskap med wissen.",
        "prompt": "Hur översätts 'Jag vet när tåget avgår'?",
        "options": [
          "Ich weiß, wann der Zug abfährt.",
          "Ich kenne, wann der Zug abfährt.",
          "Ich kann, wann der Zug abfährt.",
          "Ich habe gewusst die Abfahrt."
        ],
        "answer": 0,
        "explanation": "Wissen styr bisatser och propositionell faktakunskap (dass-, w-satser).",
        "feedback": [
          "Korrekt! Wissen + indirekt frågesats med wann.",
          "Fel. Kennen kan aldrig styra en bisats inledd med wann eller dass.",
          "Fel. Können kan inte styra en frågebisats på det sättet.",
          "Fel. Ordföljden och hjälpverbet är felaktiga."
        ]
      },
      {
        "id": "e02-q3",
        "context": "Können vid språk och färdigheter.",
        "prompt": "Hur uttrycker man bäst 'Hon kan tyska mycket bra'?",
        "options": [
          "Sie kann sehr gut Deutsch.",
          "Sie weiß sehr gut Deutsch.",
          "Sie kennt sehr gut Deutsch.",
          "Sie ist sehr gut Deutsch."
        ],
        "answer": 0,
        "explanation": "Können används självständigt för språkkunskaper och inlärda färdigheter utan att 'sprechen' behöver sättas ut.",
        "feedback": [
          "Korrekt! Können + språk är idiomatisk tyska för att behärska ett språk.",
          "Fel. Wissen används inte om språkfärdighet.",
          "Fel. Kennen betyder att man känner till att språket existerar.",
          "Fel. Sein anger identitet, inte färdighet."
        ]
      },
      {
        "id": "e02-q4",
        "context": "Böjning av wissen.",
        "prompt": "Vad är 1:a och 3:e person presens av verbet *wissen*?",
        "options": [
          "ich weiß / er weiß (preteritopresentiskt verb med vokalväxling och nolländelse).",
          "ich wisse / er wisst.",
          "ich wisse / er wisset.",
          "ich gewusst / er gewusst."
        ],
        "answer": 0,
        "explanation": "Wissen är ett preteritopresentiskt verb: vokalbyte i singular (weiß) och nolländelse i 1:a och 3:e person.",
        "feedback": [
          "Korrekt! 'ich weiß' och 'er weiß' har samma stam och saknar ändelse -t.",
          "Fel. Formen wisst är 2:a person plural (ihr wisst).",
          "Fel. Wisse är konjunktiv I.",
          "Fel. Gewusst är perfektparticip."
        ]
      },
      {
        "id": "e02-q5",
        "context": "Känna till en stad eller plats.",
        "prompt": "Hur säger man 'Jag känner till Wien ganska väl'?",
        "options": [
          "Ich kenne Wien ziemlich gut.",
          "Ich weiß Wien ziemlich gut.",
          "Ich kann Wien ziemlich gut.",
          "Ich habe Wien gewusst."
        ],
        "answer": 0,
        "explanation": "Städer, gator och geografiska platser som man besökt eller är förtrogen med tar verbet kennen.",
        "feedback": [
          "Korrekt! Kennen används för bekantskap med städer och miljöer.",
          "Fel. Wissen kan inte ta ett enkelt stadsnamn som ackusativobjekt.",
          "Fel. Können avser förmåga, inte platser.",
          "Fel. Preteritum av wissen passar inte."
        ]
      },
      {
        "id": "e02-q6",
        "context": "Besvara en fråga.",
        "prompt": "Hur svarar man på frågan \\"Wo wohnt Anna?\\" om man inte har den informationen?",
        "options": [
          "Ich weiß es nicht.",
          "Ich kenne es nicht.",
          "Ich kann es nicht.",
          "Ich bin es nicht."
        ],
        "answer": 0,
        "explanation": "Information och adresser är fakta, varför man svarar 'Ich weiß es nicht'.",
        "feedback": [
          "Korrekt! 'Ich weiß (es) nicht' är standardsvaret vid saknad information.",
          "Fel. 'Ich kenne es nicht' betyder 'Jag känner inte till det tinget'.",
          "Fel. 'Ich kann es nicht' betyder 'Jag förmår/klarar inte av det'.",
          "Fel. 'Ich bin es nicht' betyder 'Det är inte jag'."
        ]
      }
    ]
  },
  '/mer/mussen-sollen-durfen': {
    "lessonId": "E03",
    "href": "/mer/mussen-sollen-durfen",
    "title": "Snabbkoll: Müssen, sollen och dürfen",
    "questions": [
      {
        "id": "e03-q1",
        "context": "Klassisk negationsfälla vid müssen.",
        "prompt": "Vad betyder den tyska meningen \\"Du musst das nicht machen\\"? ",
        "options": [
          "Du behöver inte göra det (det är inte nödvändigt).",
          "Du får inte göra det (det är absolut förbjudet).",
          "Du måste genast göra det.",
          "Du vill inte göra det."
        ],
        "answer": 0,
        "explanation": "Nicht müssen negerar nödvändigheten: 'inte behöva/måste'. Det innebär inget förbud!",
        "feedback": [
          "Korrekt! 'Nicht müssen' betyder 'inte behöva' på tyska.",
          "Fel. Förbud heter 'nicht dürfen'!",
          "Fel. Negationen 'nicht' är med i meningen.",
          "Fel. 'Inte vilja' uttrycks med nicht wollen."
        ]
      },
      {
        "id": "e03-q2",
        "context": "Strikt förbud.",
        "prompt": "Hur översätts 'Här får man inte röka' (rökförbud) till tyska?",
        "options": [
          "Hier darf man nicht rauchen.",
          "Hier muss man nicht rauchen.",
          "Hier soll man nicht rauchen.",
          "Hier will man nicht rauchen."
        ],
        "answer": 0,
        "explanation": "Förbud uttrycks alltid med nicht dürfen: 'man darf nicht'.",
        "feedback": [
          "Korrekt! 'Nicht dürfen' är den korrekta termen för förbud.",
          "Fel. 'Man muss nicht rauchen' betyder att det är frivilligt att röka!",
          "Fel. 'Man soll nicht' är en moralisk rekommendation, inte ett strikt förbud.",
          "Fel. 'Man will nicht' avser vilja."
        ]
      },
      {
        "id": "e03-q3",
        "context": "Uppdrag från annan person med sollen.",
        "prompt": "Vad uttrycker meningen \\"Der Arzt sagt, ich soll mehr Wasser trinken\\"? ",
        "options": [
          "En ordination eller uppmaning från en annan person (läkaren).",
          "Ett absolut fysiskt tvång som inte går att undvika.",
          "Ett juridiskt förbud.",
          "Att patienten själv har bestämt sig för det."
        ],
        "answer": 0,
        "explanation": "Sollen förmedlar en annans vilja, uppmaning eller förväntan ('jag ska/bör enligt läkaren').",
        "feedback": [
          "Korrekt! Sollen återger en extern uppmaning eller instruktion.",
          "Fel. Fysiskt tvång uttrycks med müssen.",
          "Fel. Det är ingen lag eller förbud.",
          "Fel. Eget beslut uttrycks med wollen."
        ]
      },
      {
        "id": "e03-q4",
        "context": "Subjektiv modalitet med müssen.",
        "prompt": "Vad betyder meningen \\"Das Licht brennt, er muss zu Hause sein\\"? ",
        "options": [
          "Ljuset är tänt, han måste (med all sannolikhet) vara hemma.",
          "Han är beordrad av polisen att stanna hemma.",
          "Han får inte lämna huset.",
          "Han vill vara hemma."
        ],
        "answer": 0,
        "explanation": "Müssen har här epistemisk/subjektiv betydelse: talaren drar en logiskt ofrånkomlig slutsats.",
        "feedback": [
          "Korrekt! Epistemisk slutsats: talaren är övertygad om att han är hemma.",
          "Fel. Det rör inte en order från polisen.",
          "Fel. Förbud uttrycks med dürfen nicht.",
          "Fel. Vilja uttrycks med wollen."
        ]
      },
      {
        "id": "e03-q5",
        "context": "Svenskt 'få' vid frågor om lov.",
        "prompt": "Hur frågar man artigt 'Får jag öppna fönstret?' på tyska?",
        "options": [
          "Darf ich das Fenster öffnen?",
          "Muss ich das Fenster öffnen?",
          "Soll ich das Fenster öffnen?",
          "Bekomme ich das Fenster öffnen?"
        ],
        "answer": 0,
        "explanation": "Fråga om lov/tillåtelse ställs med dürfen: 'Darf ich...?'.",
        "feedback": [
          "Korrekt! Dürfen används för att be om lov eller tillåtelse.",
          "Fel. 'Muss ich' betyder 'Är jag tvungen att öppna fönstret?'.",
          "Fel. 'Soll ich' betyder 'Vill du att jag öppnar fönstret?'.",
          "Fel. Bekommen kan inte ta infinitiv utan zu på det sättet."
        ]
      },
      {
        "id": "e03-q6",
        "context": "Konjunktiv II av sollen och müssen.",
        "prompt": "Hur skiljer sig *sollte* från *müsste* i rekommendationer?",
        "options": [
          "sollte uttrycker ett gott råd eller böra ('du borde göra det'); müsste uttrycker att något egentligen vore nödvändigt.",
          "sollte är dåtid och müsste är framtid.",
          "Båda är synonymer utan någon nyansskillnad.",
          "Müsste används bara om katter."
        ],
        "answer": 0,
        "explanation": "Sollte (borde) ger ett råd; müsste uttrycker en hypotetisk nödvändighet.",
        "feedback": [
          "Korrekt! Sollte = råd/böra; müsste = hypotetiskt måste.",
          "Fel. Båda formerna är Konjunktiv II med presens/futurumbetydelse här.",
          "Fel. Det finns en tydlig gradskillnad i nödvändighet.",
          "Fel. De gäller alla subjekt."
        ]
      }
    ]
  },
  '/mer/wenn-als-wann-ob': {
    "lessonId": "E04",
    "href": "/mer/wenn-als-wann-ob",
    "title": "Snabbkoll: Wenn, als, wann eller ob?",
    "questions": [
      {
        "id": "e04-q1",
        "context": "Enstaka händelse i dåtid.",
        "prompt": "Vilket ord ska användas i: \\"[...] ich gestern nach Hause kam, schlief das Kind schon\\"? ",
        "options": [
          "Als",
          "Wenn",
          "Wann",
          "Ob"
        ],
        "answer": 0,
        "explanation": "För en engångshändelse i förfluten tid används undantagslöst konjunktionen als.",
        "feedback": [
          "Korrekt! Als används för en specifik engångshändelse i dåtid.",
          "Fel. Wenn i dåtid betyder 'varje gång som' (upprepad handling).",
          "Fel. Wann är ett frågeord, inte en temporal tidsbisatskonjunktion.",
          "Fel. Ob betyder 'om' vid osäkerhet/ja-nej-frågor."
        ]
      },
      {
        "id": "e04-q2",
        "context": "Upprepad händelse i dåtid.",
        "prompt": "Vilket ord ska användas i: \\"[...] er mich früher besuchte, brachte er immer Blumen mit\\"? ",
        "options": [
          "Wenn (eller 'Immer wenn')",
          "Als",
          "Wann",
          "Ob"
        ],
        "answer": 0,
        "explanation": "När en handling upprepades i dåtid ('varje gång som') används wenn (ofta förstärkt med immer wenn).",
        "feedback": [
          "Korrekt! Upprepad handling i dåtid ('varje gång') kräver wenn.",
          "Fel. Als används endast för en enstaka unik händelse i dåtid.",
          "Fel. Wann är frågeord.",
          "Fel. Ob uttrycker villkor eller tvekan."
        ]
      },
      {
        "id": "e04-q3",
        "context": "Frågeordet wann.",
        "prompt": "Vilket ord ska väljas i: \\"Ich weiß nicht, [...] der Zug ankommt\\"? ",
        "options": [
          "wann",
          "wenn",
          "als",
          "ob"
        ],
        "answer": 0,
        "explanation": "Wann används i direkta och indirekta frågor om klockslag eller tidpunkt.",
        "feedback": [
          "Korrekt! Indirekt tidsfråga kräver frågeordet wann.",
          "Fel. Wenn används för villkor eller temporala satser, inte indirekta frågor om klockslag.",
          "Fel. Als avser dåtid.",
          "Fel. Ob frågar OM tåget ankommer, inte VILKEN TID."
        ]
      },
      {
        "id": "e04-q4",
        "context": "Indirekt ja/nej-fråga med ob.",
        "prompt": "Hur översätts 'Jag undrar om det kommer att regna'?",
        "options": [
          "Ich frage mich, ob es regnen wird.",
          "Ich frage mich, wenn es regnen wird.",
          "Ich frage mich, als es regnen wird.",
          "Ich frage mich, wann es regnen wird."
        ],
        "answer": 0,
        "explanation": "Svenskans 'om' i betydelsen huruvida (ja eller nej) översätts med ob.",
        "feedback": [
          "Korrekt! Ob = huruvida / om (vid ja/nej-osäkerhet).",
          "Fel. Wenn betyder 'om' i betydelsen 'ifall / förutsatt att' (konditionalis).",
          "Fel. Als används inte för villkor.",
          "Fel. Wann betyder 'när/vilken tid', inte 'om'."
        ]
      },
      {
        "id": "e04-q5",
        "context": "Konditionalt wenn.",
        "prompt": "Vilket ord ska användas i: \\"[...] du Zeit hast, können wir einen Kaffee trinken\\"? ",
        "options": [
          "Wenn",
          "Als",
          "Wann",
          "Ob"
        ],
        "answer": 0,
        "explanation": "Konditionellt 'om / ifall' i nutid eller framtid översätts alltid med wenn.",
        "feedback": [
          "Korrekt! Wenn är den konditionella konjunktionen (om/ifall).",
          "Fel. Als används enbart för dåtidshändelser eller jämförelser.",
          "Fel. Wann är frågeord.",
          "Fel. Ob används vid indirekta frågor, inte vid villkorsbisatser."
        ]
      },
      {
        "id": "e04-q6",
        "context": "Kontrast mellan wenn och ob.",
        "prompt": "Vad är skillnaden mellan A: \\"Sag mir, wenn er kommt\\" och B: \\"Sag mir, ob er kommt\\"? ",
        "options": [
          "A betyder 'Säg till i det ögonblick han anländer'; B betyder 'Säg till om han överhuvudtaget kommer eller inte'.",
          "Det finns ingen skillnad; de betyder exakt samma sak.",
          "A är felaktig tyska och B är korrekt.",
          "A används i skrift och B i tal."
        ],
        "answer": 0,
        "explanation": "Wenn är temporalt/konditionellt (när/om det sker); ob frågar efter ja eller nej (huruvida han kommer).",
        "feedback": [
          "Korrekt! Wenn anger tidpunkten för ankomst; ob frågar om faktumet att han kommer.",
          "Fel. Betydelseskillnaden är avgörande för förståelsen.",
          "Fel. Båda meningarna är fullt grammatiska och idiomatiska.",
          "Fel. Båda orden används i både skrift och tal."
        ]
      }
    ]
  },
  '/mer/ordbildning': {
    "lessonId": "E05",
    "href": "/mer/ordbildning",
    "title": "Snabbkoll: Prefix, suffix och ordbildning",
    "questions": [
      {
        "id": "e05-q1",
        "context": "Oskiljaktiga verbprefix.",
        "prompt": "Vilken minnesregel sammanfattar tyskans oskiljaktiga verbprefix som ALDRIG tar ge- i particip II?",
        "options": [
          "be-, ge-, er-, ver-, zer-, ent-, emp-, miss-.",
          "ab-, an-, auf-, aus-, bei-, mit-.",
          "alla prefix som slutar på konsonant.",
          "alla prefix som börjar på s-."
        ],
        "answer": 0,
        "explanation": "De åtta klassiska oskiljaktiga prefixen är be-, ge-, er-, ver-, zer-, ent-, emp-, miss-.",
        "feedback": [
          "Korrekt! Dessa prefix är alltid obetonade och skiljs aldrig från stammen.",
          "Fel. Ab-, an-, auf- etc. är skiljaktiga prefix med betoning.",
          "Fel. Konsonantslut avgör inte skiljaktighet.",
          "Fel. Ingen sådan regel finns."
        ]
      },
      {
        "id": "e05-q2",
        "context": "Skiljaktiga verb i huvudsats.",
        "prompt": "Hur placeras prefixet *auf* i meningen \\"Er steht um sieben Uhr auf\\"? ",
        "options": [
          "Det skiljs från verbet och placeras allra sist i huvudsatsen (högra verbklammern).",
          "Det sätts direkt före subjektet.",
          "Det försvinner helt ur meningen.",
          "Det placeras på plats två bredvid verbet."
        ],
        "answer": 0,
        "explanation": "I en tysk huvudsats i presens/preteritum vandrar det skiljaktiga prefixet till satsens slut (Rechte Satzklammer).",
        "feedback": [
          "Korrekt! Skiljaktiga prefix intar den högra satsklammern.",
          "Fel. Prefixet står inte i förfältet.",
          "Fel. Prefixet bär grundbetydelsen och får inte strykas.",
          "Fel. På position 2 står endast det böjda finitverbet."
        ]
      },
      {
        "id": "e05-q3",
        "context": "Genus hos avledningssuffix.",
        "prompt": "Vilket grammatiskt genus får substantiv som slutar på *-ung, -heit, -keit, -schaft, -tät*?",
        "options": [
          "Alltid femininum (die).",
          "Alltid maskulinum (der).",
          "Alltid neutrum (das).",
          "Det beror på personens biologiska kön."
        ],
        "answer": 0,
        "explanation": "Dessa suffix är 100 % regelbundna och skapar undantagslöst feminina substantiv.",
        "feedback": [
          "Korrekt! -ung, -heit, -keit, -schaft, -tät ger alltid femininum (die).",
          "Fel. Maskulina suffix är t.ex. -ling, -or, -ist.",
          "Fel. Neutersuffix är t.ex. -chen, -lein, -ment, -um.",
          "Fel. Grammatiskt genus bestäms här helt av morfologin."
        ]
      },
      {
        "id": "e05-q4",
        "context": "Diminutivsuffix.",
        "prompt": "Vilket genus får substantiv som bildas med diminutivsuffixen *-chen* eller *-lein* (t.ex. *das Mädchen, das Häuschen*)?",
        "options": [
          "Alltid neutrum (das).",
          "Alltid femininum (die).",
          "Alltid maskulinum (der).",
          "Växlande genus."
        ],
        "answer": 0,
        "explanation": "Diminutiver på -chen och -lein är utan undantag neutrum i tysk grammatik.",
        "feedback": [
          "Korrekt! Alla diminutivbildningar med -chen/-lein blir neutrum (das).",
          "Fel. Även ord som syftar på kvinnor (das Mädchen) är grammatiskt neutrum.",
          "Fel. Maskulinum förekommer inte för dessa diminutiver.",
          "Fel. Det finns inga genusundantag för -chen och -lein."
        ]
      },
      {
        "id": "e05-q5",
        "context": "Adjektivsuffixet -bar.",
        "prompt": "Vad betyder adjektiv bildade med suffixet *-bar* (t.ex. *machbar, trinkbar, lesbar*)?",
        "options": [
          "Att något kan göras, drickas eller läsas (passiv möjlighet, '-bar / möjlig att').",
          "Att något är förbjudet.",
          "Att något tillhör det förflutna.",
          "Att något luktar illa."
        ],
        "answer": 0,
        "explanation": "Suffixet -bar motsvarar engelskans -able och svenskans -bar; det anger en potentiell passiv möjlighet.",
        "feedback": [
          "Korrekt! -bar anger passiv möjlighet ('kan göras').",
          "Fel. Förbud uttrycks inte med -bar.",
          "Fel. Tidsaspekt styrs inte av detta suffix.",
          "Fel. Suffixet har ingen luktkoppling."
        ]
      },
      {
        "id": "e05-q6",
        "context": "Sammansättningens bestämningsord.",
        "prompt": "Vilket led avgör genus och numerus i ett sammansatt tyskt substantiv som *die Haustür*?",
        "options": [
          "Det sista ledet (Grundwort / efterledet: die Tür).",
          "Det första ledet (Bestimmungswort / förledet: das Haus).",
          "Mellanledet med eventuellt fogemorfem.",
          "Det längsta ledet."
        ],
        "answer": 0,
        "explanation": "Det sista ledet (huvudordet/efterledet) bestämmer alltid genus och böjningsmönster för hela sammansättningen.",
        "feedback": [
          "Korrekt! Efterledet (das Grundwort) styr hela ordets genus och böjning.",
          "Fel. Förledet specificerar betydelsen men bestämmer inte grammatiskt genus.",
          "Fel. Fogemorfemet förbinder bara leden.",
          "Fel. Ordets längd saknar grammatisk betydelse."
        ]
      }
    ]
  },
  '/mer/nominalstil': {
    "lessonId": "E06",
    "href": "/mer/nominalstil",
    "title": "Snabbkoll: Nominalstil och utbyggda nominalfraser",
    "questions": [
      {
        "id": "e06-q1",
        "context": "Definition av nominalstil.",
        "prompt": "Vad innebär 'Nominalstil' i tysk sakprosa och fackspråk?",
        "options": [
          "Att händelser och processer uttrycks med substantiv och prepositionsfraser i stället för finita verb och bisatser.",
          "Att man tar bort alla substantiv ur texten.",
          "Att alla ord skrivs med gemener.",
          "Att man enbart använder talspråk."
        ],
        "answer": 0,
        "explanation": "Nominalstil kondenserar verbala skeenden till abstrakta substantiv (t.ex. vid ankomst -> vid anländandet).",
        "feedback": [
          "Korrekt! Substantivering av processer ger hög informationstäthet.",
          "Fel. Nominalstil kännetecknas av mycket substantiv, inte färre.",
          "Fel. Tyska substantiv har alltid stor begynnelsebokstav.",
          "Fel. Nominalstil är typisk för formell skrift, raka motsatsen till talspråk."
        ]
      },
      {
        "id": "e06-q2",
        "context": "Omvandling från verbalstil till nominalstil.",
        "prompt": "Hur omvandlas bisatsen \\"Weil die Preise stiegen\\" till nominalstil?",
        "options": [
          "Wegen des Preisanstiegs (eller Wegen des Steigens der Preise).",
          "Weil die Preise gestiegen sind.",
          "Die Preise steigen schnell.",
          "Um Preise zu steigen."
        ],
        "answer": 0,
        "explanation": "Konjunktionen weil + verb ersätts av prepositionen wegen + nominaliserat substantiv i genitiv.",
        "feedback": [
          "Korrekt! Wegen + genitivsubstantiv ersätter bisatsen.",
          "Fel. Detta är fortfarande verbalstil med konjunktionen weil.",
          "Fel. Detta är en huvudsats i presens.",
          "Fel. Detta är en felaktig infinitivkonstruktion."
        ]
      },
      {
        "id": "e06-q3",
        "context": "Stilistisk fördel med verbalstil.",
        "prompt": "Varför föredras ofta verbalstil i pedagogiska texter och skönlitteratur?",
        "options": [
          "Eftersom den är mer levande, dynamisk och lättare att bearbeta för läsaren än tunga nominalkedjor.",
          "Eftersom verb är förbjudna i vetenskapliga artiklar.",
          "Därför att verbalstil tar mindre plats på papperet.",
          "För att lura läsaren."
        ],
        "answer": 0,
        "explanation": "Verbalstil gör aktörer och händelseförlopp konkreta och transparenta, vilket underlättar läsförståelsen.",
        "feedback": [
          "Korrekt! Verbal stil främjar läsbarhet och handlingsdynamik.",
          "Fel. Vetenskapliga texter innehåller självklart verb.",
          "Fel. Nominalstil är ofta mer kompakt i ordantal.",
          "Fel. Stilistiken syftar till klar kommunikation."
        ]
      },
      {
        "id": "e06-q4",
        "context": "Utbyggt participattribut.",
        "prompt": "Hur avkodas det utbyggda participattributet i: \\"die vom Minister angekündigten Maßnahmen\\"? ",
        "options": [
          "Åtgärderna som ministern tillkännagav.",
          "Ministern som tillkännagav åtgärderna.",
          "Åtgärderna som ministern glömde bort.",
          "Ministeriet som vidtog åtgärder."
        ],
        "answer": 0,
        "explanation": "Kärnan är Maßnahmen, modifierad av participet angekündigten och dess agent vom Minister.",
        "feedback": [
          "Korrekt! Kärnsubstantivet är Maßnahmen (åtgärderna).",
          "Fel. Huvudordet är åtgärderna, inte ministern.",
          "Fel. Angekündigt betyder tillkännagiven, inte bortglömd.",
          "Fel. Ministeriet är inte subjektet här."
        ]
      },
      {
        "id": "e06-q5",
        "context": "Funktionsverbgefüge.",
        "prompt": "Vad är ett exempel på en funktionsverbsfogning som hör till nominalstilen?",
        "options": [
          "eine Entscheidung treffen (istället för entscheiden).",
          "schnell laufen.",
          "ein Buch lesen.",
          "laut singen."
        ],
        "answer": 0,
        "explanation": "Funktionsverbgefüge kombinerar ett substantiverat handlingsord med ett semantiskt blekt verb (treffen, stellen, bringen).",
        "feedback": [
          "Korrekt! 'Eine Entscheidung treffen' är en klassisk FVG i nominal stil.",
          "Fel. 'Schnell laufen' är ett vanligt verb med adverb.",
          "Fel. 'Ein Buch lesen' är ett vanligt transitivt verb med objekt.",
          "Fel. 'Laut singen' är verb med sättsadverbial."
        ]
      },
      {
        "id": "e06-q6",
        "context": "Genitivstapling.",
        "prompt": "Varför avråder moderna stilguider från överdriven genitivstapling som \\"die Feststellung der Ursache des Problems der Maschine\\"? ",
        "options": [
          "Det skapar en svårläst och ogenomtränglig abstraktion som försvårar förståelsen av vem som gör vad.",
          "Eftersom genitiv är avskaffad i grundlagen.",
          "Eftersom det blir för billigt att trycka.",
          "Därför att kommatecken saknas."
        ],
        "answer": 0,
        "explanation": "Flera på varandra staplade genitiver kallas 'Genitivkaskaden' och leder till kognitiv överbelastning hos läsaren.",
        "feedback": [
          "Korrekt! Genitivkaskader gör texten tungrodd och svår att avkoda.",
          "Fel. Genitiven är fullt levande i skriftlig norm.",
          "Fel. Tryckkostnad beror inte på kasusval.",
          "Fel. Kommatecken ska inte sättas mellan attribut i samma nominalfras."
        ]
      }
    ]
  },
`;

const lastClosingIndex = content.lastIndexOf('};');
if (lastClosingIndex === -1) {
  console.error("Could not find closing }; in data/learning-quizzes.ts");
  process.exit(1);
}

const updatedContent = content.slice(0, lastClosingIndex) + mer1Quizzes + content.slice(lastClosingIndex);
fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log("Successfully appended E01-E06 quizzes to data/learning-quizzes.ts");
