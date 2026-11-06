import fs from 'fs';

const filePath = '/Users/oscarpagerup/Desktop/Git Repo/Om-Tyska/data/learning-quizzes.ts';
let content = fs.readFileSync(filePath, 'utf8');

const group6cQuizzes = `  '/docs/fordjupning/variation-och-norm/nationell-och-regional-standardvariation': {
    "lessonId": "X074",
    "href": "/docs/fordjupning/variation-och-norm/nationell-och-regional-standardvariation",
    "title": "Snabbkoll: Nationell och regional standardvariation",
    "questions": [
      {
        "id": "x074-q1",
        "context": "Hjälpverbsval i södra språkområdet.",
        "prompt": "Vilket hjälpverb används i österrikisk och bayersk standardnorm vid perfekt av verbet *stehen* (*er [...] gestanden*)?",
        "options": [
          "sein (*ist gestanden*).",
          "haben (*hat gestanden*) uteslutande.",
          "werden (*wird gestanden*).",
          "tun (*tut gestanden haben*)."
        ],
        "answer": 0,
        "explanation": "I södra Tyskland, Österrike och Schweiz bildas perfekt av stehen, liegen, sitzen med sein.",
        "feedback": [
          "Korrekt! I södra standardområdet är 'ist gestanden' officiell norm.",
          "Fel. 'Hat gestanden' är normen i norra och mellersta Tyskland.",
          "Fel. Werden bildar futurum eller passiv.",
          "Fel. Tun är en talspråklig omskrivningsform som inte hör till standarden."
        ]
      },
      {
        "id": "x074-q2",
        "context": "Den pluricentriska språkmodellen.",
        "prompt": "Vad innebär begreppet 'plurizentrische Sprache' för tyskan?",
        "options": [
          "Att tyskan har flera likaberättigade nationella standardcentrum (Tyskland, Österrike, Schweiz) med egna kodifierade normer.",
          "Att endast språket i Hannover räknas som äkta tyska.",
          "Att alla talare måste tala samma dialekt.",
          "Att ordböcker är förbjudna i Schweiz."
        ],
        "answer": 0,
        "explanation": "Pluricentrisk innebär att det inte finns ett enda centrum; varianter i Österrike och Schweiz är inte fel utan självständiga standarder.",
        "feedback": [
          "Korrekt! Tyskland, Österrike och Schweiz utgör självständiga standardcentrum.",
          "Fel. Myten om 'Bühnendeutsch' från Hannover som enda norm är sociolingvistiskt förlegad.",
          "Fel. Pluricentrism gäller standardvarieteter, inte dialektlikriktning.",
          "Fel. Schweiz har egna auktoritativa ordböcker och regelverk."
        ]
      },
      {
        "id": "x074-q3",
        "context": "Schweizisk rättskrivning.",
        "prompt": "Hur skrivs ordet för 'gata' (*Straße*) i officiell schweizisk standardtext?",
        "options": [
          "Strasse (med dubbel-s, eftersom ß inte används i Schweiz).",
          "Straße (obligatoriskt med ß).",
          "Straze.",
          "Straaße."
        ],
        "answer": 0,
        "explanation": "I Schweiz och Liechtenstein avskaffades bokstaven ß officiellt; ss används konsekvent i all skrift.",
        "feedback": [
          "Korrekt! I Schweiz ersätts ß alltid av dubbel-s (ss).",
          "Fel. Bokstaven ß finns inte på schweiziska tangentbord och används inte officiellt.",
          "Fel. 'Straze' är en felaktig stavning.",
          "Fel. Vokallängd dubbleras inte med 'aa' här."
        ]
      },
      {
        "id": "x074-q4",
        "context": "Genusvariation vid lånord.",
        "prompt": "Vilket genus har ordet *E-Mail* i österrikisk och schweizisk standardtext vid sidan av femininum?",
        "options": [
          "Neutrum (*das E-Mail*).",
          "Maskulinum (*der E-Mail*).",
          "Ordet saknar helt genus.",
          "Pluralis tantum."
        ],
        "answer": 0,
        "explanation": "I Österrike och Schweiz är neutrum (*das E-Mail*) mycket vanligt och officiellt kodifierat jämte *die E-Mail*.",
        "feedback": [
          "Korrekt! 'das E-Mail' är en typisk och fullt godkänd österrikisk/schweizisk variant.",
          "Fel. Maskulinum används inte för E-Mail.",
          "Fel. Alla tyska substantiv tilldelas ett grammatiskt genus.",
          "Fel. E-Mail kan böjas i singular och plural."
        ]
      },
      {
        "id": "x074-q5",
        "context": "Fogemorfem (Fugen-s).",
        "prompt": "Hur bildas sammansättningen av *Zug* och *Verbindung* i österrikisk standardtyska?",
        "options": [
          "Zugsverbindung (med foge-s).",
          "Zugverbindung (alltid utan -s-).",
          "Zügenverbindung.",
          "Zugeverbindung."
        ],
        "answer": 0,
        "explanation": "Österrikisk och schweizisk standard har foge-s i t.ex. *Zugsverbindung*, medan Tyskland skriver *Zugverbindung*.",
        "feedback": [
          "Korrekt! Foge-s är standard i Österrike (*Zugsverbindung*, *Fabrikstor*).",
          "Fel. Formen utan s är den bundestyska normen.",
          "Fel. Pluralformen på -en används inte som förled här.",
          "Fel. Ändelsen -e- används inte här."
        ]
      },
      {
        "id": "x074-q6",
        "context": "Prepositionellt bruk i Österrike.",
        "prompt": "Vilket uttryck är standardmässigt och idiomatiskt i Österrike för 'vara på semester'?",
        "options": [
          "auf Urlaub sein.",
          "im Urlaub sein (bundestysk standard).",
          "über Urlaub sein.",
          "nach Urlaub sein."
        ],
        "answer": 0,
        "explanation": "I Österrike heter det 'auf Urlaub sein/fahren', medan nord- och mellantysk standard använder 'im Urlaub'.",
        "feedback": [
          "Korrekt! 'auf Urlaub' är den etablerade österrikiska standardvarianten.",
          "Fel. 'im Urlaub' är den traditionella tyska varianten, men 'auf Urlaub' är österrikisk norm.",
          "Fel. 'über Urlaub' är ogrammatiskt.",
          "Fel. 'nach Urlaub' kan inte betyda att vara på semester."
        ]
      }
    ]
  },
  '/docs/fordjupning/variation-och-norm/dialektgrammatik-i-jamforande-oversikt': {
    "lessonId": "X075",
    "href": "/docs/fordjupning/variation-och-norm/dialektgrammatik-i-jamforande-oversikt",
    "title": "Snabbkoll: Dialektgrammatik i jämförande översikt",
    "questions": [
      {
        "id": "x075-q1",
        "context": "Genitivbortfall i Oberdeutsch.",
        "prompt": "Hur uttrycks relationen 'faderns hatt' (*der Hut des Vaters*) i bayerska och alemanniska dialekter där genitiven saknas?",
        "options": [
          "Med adnominal dativ + possessivpronomen: *dem Vater sein Hut* (eller *vom Vater der Hut*).",
          "Med dubbel ackusativ: *den Vater den Hut*.",
          "Genom att verbet böjs baklänges.",
          "Det kan inte uttryckas alls i dialekterna."
        ],
        "answer": 0,
        "explanation": "I Oberdeutsch ersätts genitiven systematiskt av adnominal dativ (*dem Vater sein Hut*) eller von + dativ.",
        "feedback": [
          "Korrekt! Dativ + possessivpronomen är dialekternas huvudsakliga ägandekonstruktion.",
          "Fel. Dubbel ackusativ används inte för att markera ägande.",
          "Fel. Substantivböjning påverkar inte verbets morfologi på det sättet.",
          "Fel. Konstruktionen är extremt produktiv och levande."
        ]
      },
      {
        "id": "x075-q2",
        "context": "Relativpartikeln wo.",
        "prompt": "Vilken funktion fyller partikeln *wo* i schwäbiska och bayerska dialekter som i: \\"Der Mann, wo da steht\\"? ",
        "options": [
          "Den fungerar som en universell, oböjlig relativmarkör som ersätter det böjda d-pronomenet *der*.",
          "Den frågar efter var mannen befinner sig.",
          "Den negerar hela huvudsatsen.",
          "Den gör att satsen måste skrivas med versaler."
        ],
        "answer": 0,
        "explanation": "I sydtyska dialekter är *wo* den generella relativmarkören för alla genus och kasus.",
        "feedback": [
          "Korrekt! Invariant relativpartikel som ersätter böjda relativpronomen.",
          "Fel. I bisatsen fungerar wo inte som ett frågeord utan som relativum.",
          "Fel. Wo bär ingen negerande betydelse.",
          "Fel. Versalisering styrs av ortografi, inte dialektpartiklar."
        ]
      },
      {
        "id": "x075-q3",
        "context": "Dubbel negation.",
        "prompt": "Hur tolkas meningen \\"I hab koa Zeit ned\\" i en bayersk dialekt?",
        "options": [
          "Som en förstärkt nekning: 'Jag har absolut ingen tid' (negativ konkordans).",
          "Som ett jakande påstående: 'Jag har tid', eftersom två minus blir plus.",
          "Som en artig inbjudan till en fest.",
          "Som en felöversättning från engelska."
        ],
        "answer": 0,
        "explanation": "I bayerska råder negativ konkordans: dubbla negerande element samverkar till en förstärkt negation.",
        "feedback": [
          "Korrekt! Dubbel negation förstärker negeringen i Oberdeutsch.",
          "Fel. Den logiska regeln att två negeringar tar ut varandra gäller standardtyska, inte bayerska dialekter.",
          "Fel. Meningen betyder att talaren inte har tid.",
          "Fel. Konstruktionen har urgamla germanska anor."
        ]
      },
      {
        "id": "x075-q4",
        "context": "Kasussammanfall i Berlinisch.",
        "prompt": "Vad kännetecknar det så kallade 'Akkudativ' i den traditionella berlineriska regiolekten?",
        "options": [
          "Sammanfall mellan dativ och ackusativ, vilket leder till former som 'Ick liebe dir!' och 'Komm ma bei mir'.",
          "Att alla fyra kasusen böjs med samma ändelse -ung.",
          "Att man bara använder genitiv.",
          "Att kasus böjs efter hur högt man talar."
        ],
        "answer": 0,
        "explanation": "I Berlin sammanföll objektskasusen historiskt, vilket gav upphov till den berömda växlingen mellan 'mir' och 'dir'.",
        "feedback": [
          "Korrekt! Sammanfall mellan dativ och ackusativ i objektsformerna.",
          "Fel. -ung är ett avledningssuffix för feminina substantiv.",
          "Fel. Genitiven är tvärtom kraftigt tillbakaträngd.",
          "Fel. Kasus är grammatiska kategorier oberoende av volym."
        ]
      },
      {
        "id": "x075-q5",
        "context": "Progressiv aspekt i Rhenlandet.",
        "prompt": "Vad innebär den s.k. 'Rheinische Verlaufsform' som i: \\"Ich bin am Arbeiten\\"? ",
        "options": [
          "En progressiv aspektkonstruktion bildad med sein + am + substantiverad infinitiv, motsvarande engelskans 'I am working'.",
          "Ett förflutet tempus som bara används vid floden Rhen.",
          "Ett sätt att säga att man har slutat arbeta.",
          "Ett talspråkligt passiv."
        ],
        "answer": 0,
        "explanation": "Am-progressiven (am Kochen sein, am Arbeiten sein) etablerades i Rhenlandet och sprids snabbt i modernt talspråk.",
        "feedback": [
          "Korrekt! Progressiv aspekt (pågående handling) via am + substantiverad infinitiv.",
          "Fel. Det uttrycker pågående nutidshandling, inte dåtid.",
          "Fel. Tvärtom visar det att handlingen är i full gång.",
          "Fel. Konstruktionen är aktiv."
        ]
      },
      {
        "id": "x075-q6",
        "context": "Verbkluster i schweizertyska.",
        "prompt": "Hur kan ordföljden i ett bisatskluster med modala verb te sig i alemanniska jämfört med standardtyska?",
        "options": [
          "Det finita hjälpverbet kan placeras allra först i klustret före infinitiverna (*hät wele chaufe* istället för *kaufen wollen hat*).",
          "Alla verb förvandlas till adjektiv.",
          "Verben måste spridas ut med exakt ett ord mellan varje verb.",
          "Ordföljden är strikt identisk med standardtyska utan undantag."
        ],
        "answer": 0,
        "explanation": "I alemanniska dialekter uppvisar verbklustret stor permutation och tillåter framförställt finit verb.",
        "feedback": [
          "Korrekt! Hjälpverbet kan stå framför de beroende infinitiverna.",
          "Fel. Verben behåller sin verbala status.",
          "Fel. Verben klustras tillsammans i satsens slutområde.",
          "Fel. Ordföljden avviker markant och systematiskt från skriftnormen."
        ]
      }
    ]
  },
  '/docs/fordjupning/variation-och-norm/historisk-grammatik-for-modern-textlasning': {
    "lessonId": "X076",
    "href": "/docs/fordjupning/variation-och-norm/historisk-grammatik-for-modern-textlasning",
    "title": "Snabbkoll: Historisk grammatik för modern textläsning",
    "questions": [
      {
        "id": "x076-q1",
        "context": "Dativ-e.",
        "prompt": "Vad är bakgrunden till formen *im Walde* eller *nach Hause* i tysk text?",
        "options": [
          "Ett äldre arkaiskt dativ-e på enstaviga maskulina och neutrala substantiv som idag mest lever kvar i fasta idiom.",
          "Ett pluralmärke som betyder att det finns flera skogar.",
          "En feminin böjningsändelse från medeltiden.",
          "Ett tryckfel som uppstod i tidiga tryckerier."
        ],
        "answer": 0,
        "explanation": "Dativ-e var den historiska standardändelsen i dativ singular maskulinum/neutrum, numera frivillig och mest stilistisk.",
        "feedback": [
          "Korrekt! Historiskt dativ-e som idag främst finns i fasta idiom och poesi.",
          "Fel. Plural av Wald är Wälder.",
          "Fel. Wald och Haus är maskulinum respektive neutrum.",
          "Fel. Det var en fullt regelbunden böjningsändelse i tysk morfologi."
        ]
      },
      {
        "id": "x076-q2",
        "context": "Arkaiskt preteritum ward.",
        "prompt": "Vilket modernt verb och tempus motsvaras av den historiska formen *ward* (t.ex. *„Und es ward Licht“*)?",
        "options": [
          "wurde (preteritum singular av werden).",
          "war (preteritum av sein).",
          "wäre (konjunktiv II).",
          "wird (presens av werden)."
        ],
        "answer": 0,
        "explanation": "Ward var i äldre nyhögtyska den reguljära singularformen i preteritum av werden (från medelhögtyskans wart).",
        "feedback": [
          "Korrekt! 'ward' motsvarar modernt 'wurde'.",
          "Fel. 'war' hör till sein, medan 'ward' hör till werden.",
          "Fel. 'ward' är ett indikativiskt preteritum, inte konjunktiv.",
          "Fel. 'wird' är presens form."
        ]
      },
      {
        "id": "x076-q3",
        "context": "Arkaisk konjunktiv hülfe.",
        "prompt": "Vad är *hülfe* för en grammatisk form i äldre tysk litteratur?",
        "options": [
          "Äldre form av Konjunktiv II för verbet helfen (modernt: hälfe eller würde helfen).",
          "Presens indikativ i 1:a person singular.",
          "Ett substantiv som betyder 'hjälpare'.",
          "Ett franskt lånord för tröst."
        ],
        "answer": 0,
        "explanation": "Starka verb i serie 3 och 4 hade i äldre konjunktiv stamvokalen ü (hülfe, stürbe, verdürbe) baserat på pluralens dåtida rot.",
        "feedback": [
          "Korrekt! Äldre omljudd Konjunktiv II av starka verb.",
          "Fel. Presens indikativ heter 'ich helfe'.",
          "Fel. Substantivet för hjälp är 'die Hilfe'.",
          "Fel. Verbet är genuint germanskt."
        ]
      },
      {
        "id": "x076-q4",
        "context": "Betydelseförskjutning hos weil.",
        "prompt": "Vad betydde konnektorn *weil* ofta i texter från 1600- och 1700-talet?",
        "options": [
          "Medan / så länge som (temporal innebörd).",
          "Eftersom (strikt kausal innebörd precis som idag).",
          "Trots att (koncessiv innebörd).",
          "Om (konditionell innebörd)."
        ],
        "answer": 0,
        "explanation": "Weil utvecklades ur det temporala uttrycket 'die Weile' och betydde ursprungligen 'medan/under tiden som'.",
        "feedback": [
          "Korrekt! Strikt temporal samtidighet i äldre texter ('så länge som').",
          "Fel. Den kausala betydelsen utvecklades sekundärt ur den temporala.",
          "Fel. Koncessivitet uttrycktes med obgleich, wiewohl.",
          "Fel. Konditionalis uttrycktes med wenn, so."
        ]
      },
      {
        "id": "x076-q5",
        "context": "Partitiv genitiv i äldre prosa.",
        "prompt": "Vad innebär konstruktionen i: \\"Er trank des süßen Weines\\"? ",
        "options": [
          "En partitiv genitiv som uttrycker att han drack en del av det söta vinet.",
          "Att vinet drack honom.",
          "Att vinet var förgiftat.",
          "Ett modernt ackusativobjekt."
        ],
        "answer": 0,
        "explanation": "Partitiv genitiv angav en obestämd del av en helhet och var mycket vanlig utan kvantitetsord i äldre tyska.",
        "feedback": [
          "Korrekt! Partitiv genitiv uttrycker del av helhet.",
          "Fel. 'Er' är nominativsubjekt och agerande.",
          "Fel. Grammatiken anger ingen förgiftning.",
          "Fel. Formerna 'des süßen Weines' är otvetydigt genitiv."
        ]
      },
      {
        "id": "x076-q6",
        "context": "Adversativt allein.",
        "prompt": "Hur ska ordet *allein* tolkas i meningen: \\"Er suchte überall, allein er fand seinen Ring nicht\\"? ",
        "options": [
          "Som en adversativ konjunktion med betydelsen 'men' eller 'dock'.",
          "Som ett adjektiv som betyder att han var ensam i skogen.",
          "Som ett adverb som betyder 'enbart'.",
          "Som ett frågeord."
        ],
        "answer": 0,
        "explanation": "Allein användes i klassisk tysk litteratur som en formell adversativ konjunktion likvärdig med 'doch' eller 'aber'.",
        "feedback": [
          "Korrekt! 'Allein' fungerar som 'men/dock' i äldre litterär stil.",
          "Fel. Det syftar inte på hans ensamhet utan på motsatsförhållandet.",
          "Fel. Den restriktiva betydelsen passar inte in i kontexten.",
          "Fel. Allein är inte ett frågeord."
        ]
      }
    ]
  },
  '/docs/fordjupning/variation-och-norm/sprakforandring-och-omstridda-fall': {
    "lessonId": "X077",
    "href": "/docs/fordjupning/variation-och-norm/sprakforandring-och-omstridda-fall",
    "title": "Snabbkoll: Språkförändring och omstridda fall",
    "questions": [
      {
        "id": "x077-q1",
        "context": "Kasusstyrning vid wegen.",
        "prompt": "Vilket kasus rekommenderas i formell skrift och akademisk text efter prepositionen *wegen*?",
        "options": [
          "Genitiv (*wegen des Regens*).",
          "Dativ (*wegen dem Regen*) uteslutande.",
          "Ackusativ (*wegen den Regen*).",
          "Nominativ (*wegen der Regen*)."
        ],
        "answer": 0,
        "explanation": "I formell skrift gäller genitiv efter wegen; i ledigt tal är dativ mycket vanlig.",
        "feedback": [
          "Korrekt! Genitiv är den formella skriftspråksnormen för wegen.",
          "Fel. Dativ dominerar i tal men undviks i formell sakprosa.",
          "Fel. Wegen styr aldrig ackusativ.",
          "Fel. Nominativ styrs aldrig av prepositioner."
        ]
      },
      {
        "id": "x077-q2",
        "context": "Rektion vid trotz.",
        "prompt": "Vilken status har genitiv kontra dativ efter prepositionen *trotz* i modern kodifierad standardtyska?",
        "options": [
          "Både genitiv (*trotz des Regens*) och dativ (*trotz dem Regen*) är officiellt godkända av Duden.",
          "Endast genitiv är tillåtet enligt lag.",
          "Endast dativ är godkänt sedan 2020.",
          "Trotz får inte användas med substantiv alls."
        ],
        "answer": 0,
        "explanation": "Historiskt styrde trotz dativ; genitiv infördes genom analogi, och idag är båda officiellt accepterade standardvarianter.",
        "feedback": [
          "Korrekt! Duden och IDS kodifierar både genitiv och dativ vid trotz.",
          "Fel. Det råder valfrihet mellan båda kasusen.",
          "Fel. Genitiv är fortfarande den mest frekventa formen i skrift.",
          "Fel. Trotz är en av de vanligaste prepositionerna i språket."
        ]
      },
      {
        "id": "x077-q3",
        "context": "Könsinkluderande skrivtecken.",
        "prompt": "Vilket beslut fattade *Rat für deutsche Rechtschreibung* (2023–2024) gällande tecken som asterisk (*Student\*in*) och kolon (*Student:in*)?",
        "options": [
          "De ingår inte i det officiella regelverket och rekommenderas inte i officiell förvaltningstext.",
          "De gjordes obligatoriska i alla tyska skolor.",
          "De förbjöds helt i privat chatt.",
          "De godkändes enbart för ord som slutar på vokal."
        ],
        "answer": 0,
        "explanation": "Rättskrivningsrådet inkluderar inte specialtecken i den officiella normen; myndigheter i flera förbundsländer avråder från dem.",
        "feedback": [
          "Korrekt! Tecknen ingår inte i det officiella amtliga regelverket.",
          "Fel. De är tvärtom förbjudna i skolor i flera förbundsländer som Bayern.",
          "Fel. Rättskrivningsrådet reglerar inte privat kommunikation.",
          "Fel. Beslutet gäller generellt för alla specialtecken mitt i ord."
        ]
      },
      {
        "id": "x077-q4",
        "context": "Säkra könsneutrala alternativ.",
        "prompt": "Vilka alternativ rekommenderas i formell text för att skriva könsneutralt i enlighet med officiell rättskrivningsnorm?",
        "options": [
          "Dubbelbenämning (*Mitarbeiterinnen und Mitarbeiter*) eller neutrala nominaliseringar (*Mitarbeitende*).",
          "Att helt sluta använda substantiv.",
          "Att använda enbart maskulinum utan undantag.",
          "Att skriva orden baklänges."
        ],
        "answer": 0,
        "explanation": "Dubbelbenämning och substantiverade particip uppfyller fullt ut officiella grammatiska och ortografiska regler.",
        "feedback": [
          "Korrekt! Dubbelbenämning och participsubstantiv är helt normkonforma.",
          "Fel. Texter kräver substantiv för att förmedla information.",
          "Fel. Många institutioner och läsare upplever generiskt maskulinum som otillräckligt.",
          "Fel. Detta är ett absurt förslag."
        ]
      },
      {
        "id": "x077-q5",
        "context": "Genus vid lånord.",
        "prompt": "Hur tilldelas genus oftast till nya lånord på *-ing* (t.ex. *das Meeting*, *das Timing*)?",
        "options": [
          "Som neutrum, på grund av morfologisk analogi.",
          "Alltid som maskulinum.",
          "Alltid som femininum.",
          "De tilldelas inget genus alls."
        ],
        "answer": 0,
        "explanation": "Lånord på engelska -ing integreras systematiskt som neutrum i tyskan (das Training, das Meeting, das Leasing).",
        "feedback": [
          "Korrekt! Ord på -ing blir regelmässigt neutrum i tyskan.",
          "Fel. Maskulinum är ovanligt för verbala substantiv på -ing.",
          "Fel. Femininum gäller för andra lånordsändelser som -tion, -sion.",
          "Fel. Alla substantiv integreras i tyskans trestegsgenussystem."
        ]
      },
      {
        "id": "x077-q6",
        "context": "Adjektiv efter folgende.",
        "prompt": "Vilken böjningsform av adjektivet *neu* är formellt rekommenderad efter *folgende* i plural nominativ (*folgende [...] Bestimmungen*)?",
        "options": [
          "folgende neuen Bestimmungen (svag böjning på -en).",
          "folgende neue Bestimmungen (stark böjning på -e) enbart.",
          "folgende neu Bestimmungen (oböjt).",
          "folgende neuem Bestimmungen."
        ],
        "answer": 0,
        "explanation": "Duden rekommenderar svag böjning (-en) efter folgende, även om stark böjning (-e) också förekommer i faktiskt bruk.",
        "feedback": [
          "Korrekt! Svag böjning med -en är den primära ordboksrekommendationen.",
          "Fel. Stark böjning förekommer men är inte den primära rekommendationen.",
          "Fel. Attributiva adjektiv framför substantiv måste böjas.",
          "Fel. -em är dativ singular, inte plural nominativ."
        ]
      }
    ]
  },
  '/docs/fordjupning/variation-och-norm/grammatik-i-facksprak-och-myndighetstext': {
    "lessonId": "X078",
    "href": "/docs/fordjupning/variation-och-norm/grammatik-i-facksprak-och-myndighetstext",
    "title": "Snabbkoll: Grammatik i fackspråk och myndighetstext",
    "questions": [
      {
        "id": "x078-q1",
        "context": "Betydelse av sein + zu + Infinitiv.",
        "prompt": "Vad betyder konstruktionen i: \\"Die Gebühr ist innerhalb von zwei Wochen zu überweisen\\"? ",
        "options": [
          "Avgiften MÅSTE överföras inom två veckor (passiv nödvändighet).",
          "Avgiften har redan överförts för två veckor sedan.",
          "Det är förbjudet att överföra avgiften.",
          "Avgiften kan frivilligt skänkas bort."
        ],
        "answer": 0,
        "explanation": "Sein + zu + Infinitiv uttrycker i myndighetstext en tvingande passiv plikt eller föreskrift (muss überwiesen werden).",
        "feedback": [
          "Korrekt! Uttrycker modal passiv plikt motsvarande 'müssen'.",
          "Fel. Konstruktionen avser en framtida handling som måste utföras.",
          "Fel. Det uttrycker plikt, inte förbud (förbud kräver negering: 'ist nicht zu...').",
          "Fel. Det är ett formellt betalningskrav."
        ]
      },
      {
        "id": "x078-q2",
        "context": "Gerundiv med zu + presensparticip.",
        "prompt": "Vad motsvarar uttrycket \\"die zu beachtenden Richtlinien\\" i en vanlig bisats?",
        "options": [
          "die Richtlinien, die beachtet werden müssen.",
          "die Richtlinien, die bereits vergessen wurden.",
          "die Richtlinien, die niemand kennt.",
          "die Richtlinien, die beachtet haben."
        ],
        "answer": 0,
        "explanation": "Presensparticip med 'zu' fungerar som ett gerundiv med passiv och modal betydelse ('som måste beaktas').",
        "feedback": [
          "Korrekt! Gerundiv participstruktur uttrycker modal passiv nödvändighet.",
          "Fel. Det handlar om riktlinjer som ska efterlevas, inte glömmas.",
          "Fel. Formen anger skyldighet att iaktta dem.",
          "Fel. Particip I med zu är passivt orienterat."
        ]
      },
      {
        "id": "x078-q3",
        "context": "Passiversättning med sich lassen.",
        "prompt": "Vad betyder meningen \\"Das Problem lässt sich leicht lösen\\"? ",
        "options": [
          "Problemet kan lätt lösas (möjlighetsmodalitet).",
          "Problemet löste sig självt utan hjälp.",
          "Problemet tillåter ingen lösning.",
          "Problemet måste lämnas olöst."
        ],
        "answer": 0,
        "explanation": "'Sich lassen + Infinitiv' är en vanlig passiversättning som uttrycker möjlighet (*kann gelöst werden*).",
        "feedback": [
          "Korrekt! Det uttrycker att problemet 'kan lösas'.",
          "Fel. Konstruktionen innebär att någon kan lösa det, inte att det magiskt försvinner.",
          "Fel. Negering saknas i meningen.",
          "Fel. Det är ett konstaterande om löslighet, inte ett påbud att lämna det."
        ]
      },
      {
        "id": "x078-q4",
        "context": "Funktionsverbgefüge (FVG).",
        "prompt": "Vad är den grammatiska funktionen med att använda *eine Entscheidung treffen* i stället för det enkla verbet *entscheiden*?",
        "options": [
          "Det möjliggör finare aktionsartsstyrning, attributplacering (*eine schwere Entscheidung treffen*) och saklig stil.",
          "Det är ett fel som ovana skribenter gör.",
          "Det gör att satsen inte behöver ha något subjekt.",
          "Det gör att verbet hamnar i dåtid automatiskt."
        ],
        "answer": 0,
        "explanation": "Funktionsverbsfogningar (FVG) tillåter att handlingen nominaliseras och förses med specifika modifikatorer.",
        "feedback": [
          "Korrekt! FVG möjliggör precis aktionsart och nominal modifiering i facktext.",
          "Fel. FVG är ett centralt och erkänt stilelement i tysk sakprosa.",
          "Fel. Satser med FVG har fullständig subjekts- och predikatsram.",
          "Fel. Funktionsverbet böjs i alla tempora som vanligt."
        ]
      },
      {
        "id": "x078-q5",
        "context": "Utvidgade participattribut.",
        "prompt": "Vad kännetecknar ett utvidgat participattribut som i: \\"die vom Ausschuss vorgelegten Vorschläge\\"? ",
        "options": [
          "Att ett particip förses med egna komplement och placeras i klammern mellan bestämd artikel och substantiv.",
          "Att participet placeras allra sist i hela texten.",
          "Att det saknar participändelse.",
          "Att det förvandlas till ett konjunktivverb."
        ],
        "answer": 0,
        "explanation": "Utvidgade participattribut omsluts av nominalfrasens ram (artikeln till vänster, substantivet till höger).",
        "feedback": [
          "Korrekt! Nominal klammerstruktur där participet styr egna komplement.",
          "Fel. Participet står omedelbart före kärnsubstantivet.",
          "Fel. Participet böjs med fullständiga adjektivändelser.",
          "Fel. Det förblir ett icke-finit particip."
        ]
      },
      {
        "id": "x078-q6",
        "context": "Tvetydighet vid genitivkedjor.",
        "prompt": "Vilken grammatisk tvetydighet kan uppstå i en genitivkedja som: \\"Die Beurteilung der Leiterin des Instituts\\"? ",
        "options": [
          "Det kan vara oklart om det är chefen som bedömer någon annan (genitivus subjectivus) eller om någon bedömer chefen (genitivus objectivus).",
          "Det är oklart vilket språk texten är skriven på.",
          "Det kan tolkas som en imperativ.",
          "Verbet faller bort ur satsen."
        ],
        "answer": 0,
        "explanation": "Staplade genitiver kan skapa tvetydighet mellan subjektiv och objektiv genitiv, vilket professionell prosa ofta undviker.",
        "feedback": [
          "Korrekt! Distinktionen mellan subjektiv och objektiv genitiv blir tvetydig i staplade kedjor.",
          "Fel. Språket är entydigt tyska.",
          "Fel. Frasen är en nominalfras, inte en uppmaning.",
          "Fel. Frasen utgör en satsdel i en överordnad sats."
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

const updatedContent = content.slice(0, lastClosingIndex) + group6cQuizzes + content.slice(lastClosingIndex);
fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log("Successfully appended Group 6C quizzes to data/learning-quizzes.ts");
