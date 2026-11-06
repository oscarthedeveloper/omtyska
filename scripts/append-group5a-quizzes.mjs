import fs from 'fs';

const filePath = '/Users/oscarpagerup/Desktop/Git Repo/Om-Tyska/data/learning-quizzes.ts';
let content = fs.readFileSync(filePath, 'utf8');

const group5aQuizzes = `  '/docs/fordjupning/ljud-och-prosodi/intonation-och-informationsstruktur': {
    "lessonId": "X005",
    "href": "/docs/fordjupning/ljud-och-prosodi/intonation-och-informationsstruktur",
    "title": "Snabbkoll: Intonation och informationsstruktur",
    "questions": [
      {
        "id": "x005-q1",
        "context": "Neutral basposition för nuklearakcenten.",
        "prompt": "Var placeras tyskans nuklearakcent (Satzakzent) vid neutralt brett fokus (Weitfokus)?",
        "options": [
          "På det mest integrerade komplementet omedelbart före den högra satsklammern (vanligen det obestämda objektet).",
          "Alltid på satsens allra första ord i förfältet.",
          "Alltid på det finita verbet i vänsterklammern.",
          "På subjektet oavsett var det är placerat."
        ],
        "answer": 0,
        "explanation": "Neutral fokusregel i tyskan placerar huvudsatsaccenten på predikatskärnans närmaste argument i mittfältets slut.",
        "feedback": [
          "Korrekt! Neutralt brett fokus faller i slutet av mittfältet intill högerklammern.",
          "Fel. Betoning i förfältet skapar snävt eller kontrastivt fokus.",
          "Fel. Betoning på finita verbet skapar verumfokus.",
          "Fel. Subjektet betonas endast neutralt om det är ett tektiskt presenteringssubjekt."
        ]
      },
      {
        "id": "x005-q2",
        "context": "Verumfokus.",
        "prompt": "Vad signalerar talaren genom att lägga nuklearakcenten på det finita verbet (*Ich HABE den Brief geschrieben!*)?",
        "options": [
          "Verumfokus: talaren understryker propositionens sanningshalt mot ett föregående tvivel eller en negation.",
          "Att brevet skrevs för hand i stället för på dator.",
          "Att mottagaren är okänd.",
          "Att yttrandet är en retorisk fråga."
        ],
        "answer": 0,
        "explanation": "Verumfokus fästs på det finita verbet i vänsterklammern för att hävda att påståendet faktiskt är sant ('visst/faktiskt').",
        "feedback": [
          "Korrekt! Verumfokus bekräftar satsens sanningsvärde i opposition mot tvivel.",
          "Fel. Detta vore lexikalt kontrastfokus på ett modaladverbial.",
          "Fel. Detta rör nominalreferens.",
          "Fel. Yttrandet är ett emfatisk deklarativt påstående."
        ]
      },
      {
        "id": "x005-q3",
        "context": "Tonförlopp vid w-frågor.",
        "prompt": "Vilket melodiskt tonförlopp kräver tyska frågeordsfrågor (*W-Fragen*) i neutral standardstil?",
        "options": [
          "Ett terminalt fallande tonförlopp mot satsens slut.",
          "Ett kraftigt stigande tonförlopp som liknar ja/nej-frågor.",
          "Ett helt monotont horisontellt tonförlopp.",
          "Två lika höga toppar som i svensk grav accent."
        ],
        "answer": 0,
        "explanation": "Tyska w-frågor avslutas normalt med fallande intonation; en stigande slutmelodi gör meningen till en ekofråga.",
        "feedback": [
          "Korrekt! Tyska w-frågor har fallande terminal intonation.",
          "Fel. Stigande ton är reserverat för ja/nej-frågor och ekofrågor.",
          "Fel. Monotont tal förekommer inte i naturlig prosodi.",
          "Fel. Tyskan saknar svenskans tvåtoppiga tonaccent helt."
        ]
      },
      {
        "id": "x005-q4",
        "context": "Ekofrågor.",
        "prompt": "Vad kännetecknar en ekofråga (*Echofrage*) som 'Er hat WIE viel bezahlt?!'?",
        "options": [
          "En extremt kraftig tonstigning på frågeelementet i slutposition som uttrycker häpnad eller missförstånd.",
          "En strikt fallande ton som signalerar likgiltighet.",
          "Att frågan måste besvaras med ja eller nej.",
          "Att huvudsatsens verb stryks."
        ],
        "answer": 0,
        "explanation": "Ekofrågor upprepar ett påstående med frågeordet på det ifrågasatta elementets plats och avslutas med brant stigande prosodi.",
        "feedback": [
          "Korrekt! Kraftig stigning i slutposition markerar förvåning eller akustiskt kontrollbehov.",
          "Fel. Fallande ton ger inte ekofrågekaraktär.",
          "Fel. Det är en kompletteringsfråga som begär upprepning av beloppet.",
          "Fel. Verbet finns fullt uttalat i satsen."
        ]
      },
      {
        "id": "x005-q5",
        "context": "Deakcentuering efter snävt fokus.",
        "prompt": "Vad händer med prosodin hos de ord som följer efter ett snävt fokus i förfältet (*PETER hat das Buch gelesen*)?",
        "options": [
          "De deakcentueras: de uttalas med låg, relativt jämn tonhöjd utan nya accenttoppar.",
          "De får var och en en kraftigare accent än Peter.",
          "De måste viskas.",
          "Tonhöjden stiger successivt fram till sista ordet."
        ],
        "answer": 0,
        "explanation": "Efter nuklearakcenten råder postfokal deakcentuering: informationen behandlas som känd bakgrund och saknar tonala toppar.",
        "feedback": [
          "Helt rätt! Allt efter nuklearakcenten deakcentueras tonalt.",
          "Fel. Endast en nuklearakcent kan dominera frasen.",
          "Fel. Volymen är normal, men tonhöjden är låg och monoton.",
          "Fel. Tonen förblir låg fram till pausgränsen."
        ]
      },
      {
        "id": "x005-q6",
        "context": "Svensk interferens i ordmelodi.",
        "prompt": "Vilket är det vanligaste prosodiska misstaget som skandinaviska talare gör i tyskt uttal?",
        "options": [
          "Att överföra svenskans tvåtoppiga tonaccent (grav accent) så att talet låter sjungande och oavsiktligt splittrat.",
          "Att tala för snabbt.",
          "Att aldrig betona substantiv.",
          "Att använda för mycket aspiration vid vokaler."
        ],
        "answer": 0,
        "explanation": "Tyska ord har en enda dynamisk tryckaccent; att applicera svensk ordmelodi skapar en felaktig 'sjungande' brytning.",
        "feedback": [
          "Korrekt! Svensk tonaccent 2 (tvåtoppsaccent) existerar inte i tyskan och måste undvikas.",
          "Fel. Taltempo är individuellt och inte ett strukturellt prosodiskt drag.",
          "Fel. Substantiv betonas tvärtom flitigt i båda språken.",
          "Fel. Aspiration gäller tonlösa klusiler, inte vokaler."
        ]
      }
    ]
  },
  '/docs/fordjupning/nominalfras/definithet-specificitet-och-generisk-referens': {
    "lessonId": "X016",
    "href": "/docs/fordjupning/nominalfras/definithet-specificitet-och-generisk-referens",
    "title": "Snabbkoll: Definithet, specificitet och generisk referens",
    "questions": [
      {
        "id": "x016-q1",
        "context": "Generisk plural i tysk standardnorm.",
        "prompt": "Hur uttrycker standardtyskan generisk referens för räknebara substantiv i plural (t.ex. 'Valar är däggdjur')?",
        "options": [
          "Uteslutande med nollartikel: Wale sind Säugetiere.",
          "Alltid med bestämd artikel: Die Wale sind Säugetiere.",
          "Med partitiv genitiv: Der Wale sind Säugetiere.",
          "Med obestämd artikel: Eine Wale sind Säugetiere."
        ],
        "answer": 0,
        "explanation": "I tyskan kräver generisk plural obligatorisk nollartikel. Bestämd artikel (Die Wale) tolkas som en specifik avgränsad grupp valar.",
        "feedback": [
          "Korrekt! Generisk plural kräver nollartikel i standardtyska.",
          "Fel. Bestämd artikel begränsar referensen till en specifik känd grupp.",
          "Fel. Partitiv genitiv kan inte fungera som subjekt här.",
          "Fel. Obestämd artikel saknar pluralform på tyska."
        ]
      },
      {
        "id": "x016-q2",
        "context": "Definithet kontra specificitet.",
        "prompt": "Vilken nominalfras representerar en *obestämd men specifik* referens?",
        "options": [
          "Maria heiratete einen Arzt; er heißt Thomas und arbeitet in Bern. (Talaren har en bestämd individ i åtanke).",
          "Maria sucht einen Arzt, ganz egal welchen. (Vilken som helst duger).",
          "Der Arzt hat Sprechstunde. (Definit och identifierbar för båda).",
          "Ärzte haben eine lange Ausbildung. (Generisk plural)."
        ],
        "answer": 0,
        "explanation": "En specifik obestämd fras avser en unik konkret individ som talaren känner till, men som presenteras som ny för lyssnaren.",
        "feedback": [
          "Korrekt! Obestämd form (einen Arzt) men specifik individ (Thomas).",
          "Fel. Detta är en icke-specifik obestämd referens.",
          "Fel. Detta är en definit fras med bestämd artikel.",
          "Fel. Detta är en generisk artreferens."
        ]
      },
      {
        "id": "x016-q3",
        "context": "Associativ anafor (Bridging).",
        "prompt": "Varför har *das Dach* bestämd artikel vid förstagångsomnämnande i: 'Wir kauften ein Haus. Das Dach war undicht'?",
        "options": [
          "På grund av associativ anafor (bridging): begreppet Haus aktiverar automatiskt kännedom om dess unika beståndsdel taket.",
          "Eftersom ordet Dach alltid måste ha bestämd artikel i nominativ.",
          "Eftersom det rör sig om en generisk artreferens.",
          "Det är ett tryckfel; det borde stå ein Dach."
        ],
        "answer": 0,
        "explanation": "Associativ anafor gör en del eller funktion definit genom dess logiska koppling till ett nyss introducerat helhetsbegrepp.",
        "feedback": [
          "Korrekt! Taket blir unikt identifierbart genom relationen till huset.",
          "Fel. Dach kan naturligtvis ha obestämd artikel ('ein Dach').",
          "Fel. Det syftar på det konkreta taket på det nyköpta huset.",
          "Fel. Konstruktionen är helt regelbunden och grammatisk."
        ]
      },
      {
        "id": "x016-q4",
        "context": "Abstrakta begrepp som subjekt.",
        "prompt": "Vilken artikelform kräver tyskan vanligen för abstrakta begrepp som subjekt i generella påståenden (*Kärleken är stark*, *Livet är kort*)?",
        "options": [
          "Bestämd artikel: Die Liebe ist stark, Das Leben ist kurz.",
          "Nollartikel: Liebe ist stark, Leben ist kurz.",
          "Obestämd artikel: Eine Liebe ist stark.",
          "Demonstrativt pronomen: Diese Liebe ist stark."
        ],
        "answer": 0,
        "explanation": "Tyskan kräver mycket oftare än svenskan bestämd artikel vid universella abstrakta begrepp i subjektsställning.",
        "feedback": [
          "Korrekt! Bestämd artikel är normen för abstrakta universella begrepp på tyska.",
          "Fel. Nollartikel ger en trunkerad eller sloganartad klang.",
          "Fel. Obestämd artikel begränsar utsagan till en enskild förälskelse.",
          "Fel. Demonstrativt pronomen ändrar betydelsen till en specifik kärlek."
        ]
      },
      {
        "id": "x016-q5",
        "context": "Institutionella aktiviteter.",
        "prompt": "Hur uttrycks svenskans 'Han ligger till sängs' eller 'Han går i skolan' korrekt på tyska?",
        "options": [
          "Med preposition och sammandragen bestämd artikel: Er liegt im Bett, Er geht zur Schule.",
          "Med strikt nollartikel: Er liegt in Bett, Er geht zu Schule.",
          "Med obestämd artikel: Er liegt in einem Bett.",
          "Med possessivpronomen: Er geht zu seiner Schule."
        ],
        "answer": 0,
        "explanation": "Fasta institutionella uttryck kräver i tyskan sammandragen bestämd artikel (im, zur, ins) där svenskan har nollartikel.",
        "feedback": [
          "Helt rätt! Tyskan använder obligatorisk artikelkontraktion vid dessa idiomatiska vanor.",
          "Fel. Nollartikel är här ogrammatiskt i tyska.",
          "Fel. Obestämd artikel låter som en tillfällig övernattning.",
          "Fel. Possessivpronomen är onödigt och oidiomatiskt här."
        ]
      },
      {
        "id": "x016-q6",
        "context": "Generisk ämnesreferens.",
        "prompt": "Vilken artikel krävs vid generisk referens till oräkneliga ämnen som guld eller vatten (*Guld är en ädelmetall*)?",
        "options": [
          "Nollartikel: Gold ist ein Edelmetall.",
          "Bestämd artikel: Das Gold ist ein Edelmetall.",
          "Obestämd artikel: Ein Gold ist ein Edelmetall.",
          "Genitivartikel: Des Goldes ist ein Edelmetall."
        ],
        "answer": 0,
        "explanation": "Oräkneliga ämnesnamn (Stoffnamen) har alltid nollartikel när de omtalas generiskt.",
        "feedback": [
          "Korrekt! Oräkneliga ämnen har nollartikel vid generisk utsaga.",
          "Fel. Das Gold avser en specifik mängd guld (t.ex. i ett valv).",
          "Fel. Ämnesnamn kan inte kombineras med obestämd artikel.",
          "Fel. Detta är ogrammatiskt."
        ]
      }
    ]
  },
  '/docs/fordjupning/semantik/kvantifikation-och-distributivitet': {
    "lessonId": "X059",
    "href": "/docs/fordjupning/semantik/kvantifikation-och-distributivitet",
    "title": "Snabbkoll: Kvantifikation och distributivitet",
    "questions": [
      {
        "id": "x059-q1",
        "context": "Distributiv kontra kollektiv tolkning.",
        "prompt": "Vad innebär en *distributiv* tolkning av meningen 'Drei Studenten schrieben einen Aufsatz'?",
        "options": [
          "Att var och en av de tre studenterna skrev en egen uppsats (totalt tre uppsatser).",
          "Att de tre studenterna tillsammans skrev en enda gemensam uppsats (totalt en uppsats).",
          "Att studenterna inte skrev någon uppsats alls.",
          "Att uppsatsen skrevs av en okänd fjärde person."
        ],
        "answer": 0,
        "explanation": "Distributiv läsning innebär att predikatet appliceras individuellt på varje element i mängden.",
        "feedback": [
          "Korrekt! Distributiv läsning fördelar handlingen på varje enskild individ.",
          "Fel. Detta beskriver den kollektiva tolkningen.",
          "Fel. Satsen är jakande.",
          "Fel. Handlingens agenter är studenterna."
        ]
      },
      {
        "id": "x059-q2",
        "context": "Lexikal markör för distributivitet.",
        "prompt": "Vilket ord används på tyska för att otvetydigt tvinga fram en distributiv läsning ('var och en / respektive')?",
        "options": [
          "jeweils (t.ex. Die Kinder erhielten jeweils einen Apfel).",
          "zusammen.",
          "gemeinsam.",
          "insgesamt."
        ],
        "answer": 0,
        "explanation": "Jeweils distribuerar objektet en till en till subjektsmängdens medlemmar.",
        "feedback": [
          "Korrekt! 'jeweils' är tyskans främsta distributiva partikel.",
          "Fel. 'zusammen' framtvingar kollektiv läsning.",
          "Fel. 'gemeinsam' tvingar fram kollektiv tolkning.",
          "Fel. 'insgesamt' summerar mängden som en helhet."
        ]
      },
      {
        "id": "x059-q3",
        "context": "Numerus vid jeder kontra alle.",
        "prompt": "Vilken grammatisk regel styr numerus hos verbet efter *jeder* kontra *alle*?",
        "options": [
          "jeder styr strikt singularverb (Jeder weiß es), medan alle styr pluralverb (Alle wissen es).",
          "Båda styr alltid pluralverb.",
          "Båda styr alltid singularverb.",
          "Valet beror på om substantivet är maskulint eller feminint."
        ],
        "answer": 0,
        "explanation": "Jeder är en distributiv singularform; alle är en kollektiv eller plural universell kvantor.",
        "feedback": [
          "Korrekt! Jeder = singular; alle = plural.",
          "Fel. Att sätta pluralverb efter jeder är ett vanligt svenskt fel.",
          "Fel. Alle kan inte styra singularverb.",
          "Fel. Genus påverkar endast artikeländelsen, inte verbets numerus."
        ]
      },
      {
        "id": "x059-q4",
        "context": "Räckvidd och förfältets roll.",
        "prompt": "Hur påverkar tyskans förfält den semantiska räckvidden (*Skopus*) i jämförelse med engelskan?",
        "options": [
          "Tyskans ytordföljd tenderar att direkt spegla räckvidden: det led som står i förfältet har oftast vid räckvidd över led i mittfältet.",
          "Förfältet har ingen som helst inverkan på räckvidden.",
          "Verbet i slutposition har alltid vidast räckvidd.",
          "Tyskan tillåter aldrig mer än en kvantifikator per mening."
        ],
        "answer": 0,
        "explanation": "I tyskan råder stark topologisk isomorfi: element i förfältet tolkas i regel med vid räckvidd (wide scope).",
        "feedback": [
          "Helt rätt! Topologin styr tolkningen mycket starkare än i engelska.",
          "Fel. Förfältet är avgörande för att upphäva ambiguitet.",
          "Fel. Det finita verbet avgör inte kvantorernas inbördes räckvidd.",
          "Fel. Flera kvantorer kan samspela i samma sats."
        ]
      },
      {
        "id": "x059-q5",
        "context": "Skalär implikatur hos numeraler.",
        "prompt": "Varför tolkas meningen 'Ich habe drei Kinder' i normal dialog som att talaren har exakt tre barn, trots att det logiskt vore sant även om hen hade fem?",
        "options": [
          "På grund av Grices samtalsmaxim om kvantitet (skalär implikatur): lyssnaren förutsätter att talaren ger den mest informativa sanningen.",
          "Eftersom det tyska räkneordet drei betyder 'högst tre'.",
          "Eftersom tyskan saknar ord för fem.",
          "Eftersom lagen kräver exakta barnantal."
        ],
        "answer": 0,
        "explanation": "Skalära implikaturer gör att grundtal pragmatiskt tolkas som 'exakt n' om inget annat anges.",
        "feedback": [
          "Korrekt! Enligt samtalsmaximen förväntas talaren vara maximalt informativ.",
          "Fel. Drei betyder semantiskt 'minst tre' i ren predikatlogik.",
          "Fel. 'fünf' existerar naturligtvis.",
          "Fel. Detta är pragmatik, inte juridik."
        ]
      },
      {
        "id": "x059-q6",
        "context": "Böjning av indefinita kvantorer.",
        "prompt": "Vilken ändelse krävs på kvantifikatorn *mehrere* efter en dativpreposition som *mit*?",
        "options": [
          "mit mehreren Kollegen (stark dativ pluraländelse -n).",
          "mit mehrere Kollegen.",
          "mit mehrerer Kollegen.",
          "mit mehrerem Kollegen."
        ],
        "answer": 0,
        "explanation": "Mehrere saknar artikel och böjs som ett starkt adjektiv i plural: i dativ plural heter det mehreren.",
        "feedback": [
          "Korrekt! Flertalskvantorer tar stark ändelse -n i dativ plural.",
          "Fel. Formen saknar obligatorisk kasusändelse.",
          "Fel. Mehrerer är genitiv plural eller feminin dativ.",
          "Fel. Mehrerem vore maskulin eller neutral singular dativ."
        ]
      }
    ]
  },
  '/docs/fordjupning/semantik/negation-fokus-och-polaritet': {
    "lessonId": "X060",
    "href": "/docs/fordjupning/semantik/negation-fokus-och-polaritet",
    "title": "Snabbkoll: Negation, fokus och polaritet",
    "questions": [
      {
        "id": "x060-q1",
        "context": "Placering vid satsnegation.",
        "prompt": "Var placeras negationspartikeln *nicht* vid neutral satsnegation (Satznegation)?",
        "options": [
          "I slutet av mittfältet, efter bestämda objekt men omedelbart före högerklammern (predikatet) eller riktade adverbial.",
          "Alltid omedelbart före det finita verbet i förfältet.",
          "Mellan subjektet och det finita verbet.",
          "Alltid allra sist i meningen efter alla verbformer."
        ],
        "answer": 0,
        "explanation": "Satsnegationens nicht placeras djupt i mittfältet strax framför högerklammern (particip, partikel, infinitiv).",
        "feedback": [
          "Korrekt! Neutralt nicht står sist i mittfältet omedelbart före predikatskärnan.",
          "Fel. Nicht kan inte stå i position 1 om det inte är en lednegation.",
          "Fel. Det finita verbet står i V2 och kan inte separeras från förfältet av nicht.",
          "Fel. Högerklammern står sist i huvudsatsen."
        ]
      },
      {
        "id": "x060-q2",
        "context": "Negativa polaritetselement (NPI).",
        "prompt": "Varför är meningen 'Du brauchst morgen zu kommen' ett fel i tysk standardnorm?",
        "options": [
          "Eftersom 'brauchen + zu' är ett strikt negativt polaritetselement (NPI) som kräver en negation; vid jakande påstående måste 'müssen' användas.",
          "Eftersom brauchen inte kan kombineras med infinitiv.",
          "Eftersom zu måste sättas före morgen.",
          "Eftersom verbet kommen kräver dativobjekt."
        ],
        "answer": 0,
        "explanation": "Brauchen med zu-infinitiv licensieras endast av negation (nicht, kein, kaum). I jakande satser krävs müssen.",
        "feedback": [
          "Korrekt! 'brauchen zu' är ett NPI och fungerar endast med negation.",
          "Fel. Med negation är 'brauchen ... zu' helt regelbundet.",
          "Fel. Zu står alltid omedelbart före infinitiven.",
          "Fel. Kommen är ett intransitivt rörelseverb."
        ]
      },
      {
        "id": "x060-q3",
        "context": "Svarsordet doch.",
        "prompt": "Hur svarar man på tyska när någon ställer en negerad fråga (*Hast du das Geld nicht dabei?*) och man vill säga att man faktiskt har det?",
        "options": [
          "Doch! (Motsatsbejakelse som upphäver frågans negation).",
          "Ja! (Bekräftar att man har pengarna).",
          "Nein! (Hävdar att man har pengarna).",
          "Wohl nicht!"
        ],
        "answer": 0,
        "explanation": "Doch är det obligatoriska svarsordet för att avvisa en negativ förmodan och hävda det positiva faktumet.",
        "feedback": [
          "Helt rätt! 'Doch' är det enda korrekta svaret för att bejaka en negerad fråga.",
          "Fel. 'Ja' är förvirrande och oidiomatiskt vid negerade frågor.",
          "Fel. 'Nein' betyder att man inte har pengarna med sig.",
          "Fel. Detta betyder 'antagligen inte'."
        ]
      },
      {
        "id": "x060-q4",
        "context": "Litotes.",
        "prompt": "Vad innebär den retoriska figuren litotes i meningen 'Das war keine unkluge Entscheidung'?",
        "options": [
          "En stilistisk dubbelnegation där zwei negationer upphäver varandra och uttrycker ett försiktigt eller underdrivet beröm ('ganska klok').",
          "Ett kategoriskt fördömande av beslutet.",
          "Ett dialektalt grammatiskt fel som inte hör hemma i skrift.",
          "En fråga riktad till lyssnaren."
        ],
        "answer": 0,
        "explanation": "Litotes kombinerar negation med ett negativt prefix (keine + unklug) för att understryka ett måttfullt jakande.",
        "feedback": [
          "Korrekt! Litotes är en avsiktlig stilistisk underdrift genom dubbel negation.",
          "Fel. Tvärtom uttrycker det att beslutet var bra.",
          "Fel. Litotes är en etablerad stilfigur i all bildad prosa.",
          "Fel. Det är ett påstående."
        ]
      },
      {
        "id": "x060-q5",
        "context": "Lednegation kontra satsnegation.",
        "prompt": "Vad betyder meningen 'Er hat nicht das Auto gekauft, sondern das Motorrad'?",
        "options": [
          "Det rör sig om en lednegation (Sondernegation): negationen fokuserar specifikt på ackusativobjektet och ersätter det med motorcykeln.",
          "Det rör sig om en satsnegation som förnekar att något köp ägt rum.",
          "Det betyder att han stal bilen.",
          "Det är ett normfel eftersom nicht inte får stå före das Auto."
        ],
        "answer": 0,
        "explanation": "Placeringen av nicht direkt framför 'das Auto' visar att endast detta specifika argument negeras och kontrasteras med sondern.",
        "feedback": [
          "Korrekt! Sondernegation fokuserar uteslutande på det efterföljande ledet.",
          "Fel. Köphandlingen i sig bekräftas; det var motorcykeln som köptes.",
          "Fel. Det finns ingen implikation om stöld.",
          "Fel. Vid lednegation står nicht alltid direkt framför det berörda ledet."
        ]
      },
      {
        "id": "x060-q6",
        "context": "Negation vid obestämda substantiv.",
        "prompt": "Varför är uttrycket 'Ich habe nicht ein Auto' olämpligt för det neutrala påståendet 'Jag har ingen bil'?",
        "options": [
          "Eftersom tysk standardnorm kräver nollkvantorn 'kein' för att negiera obestämda nominalfraser (*Ich habe kein Auto*); 'nicht ein' uttrycker emfatiskt 'inte en enda'.",
          "Eftersom ordet Auto är maskulint.",
          "Eftersom haben kräver dativ.",
          "Eftersom nicht inte får användas i presens."
        ],
        "answer": 0,
        "explanation": "Substantiv med obestämd artikel negeras normalt med kein. Formen 'nicht ein' används endast för kontrastiv emfas ('inte en enda').",
        "feedback": [
          "Korrekt! Neutral negation av obestämda substantiv sker alltid med kein.",
          "Fel. Auto är neutralt (das Auto).",
          "Fel. Haben styr ackusativ.",
          "Fel. Nicht används i alla tempus."
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

const updatedContent = content.slice(0, lastClosingIndex) + group5aQuizzes + content.slice(lastClosingIndex);
fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log("Successfully appended Group 5A quizzes to data/learning-quizzes.ts");
