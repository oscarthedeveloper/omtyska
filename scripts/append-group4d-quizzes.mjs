import fs from 'fs';

const filePath = '/Users/oscarpagerup/Desktop/Git Repo/Om-Tyska/data/learning-quizzes.ts';
let content = fs.readFileSync(filePath, 'utf8');

const group4dQuizzes = `  '/docs/fordjupning/satstyper/satsform-modus-och-talhandling': {
    "lessonId": "X051",
    "href": "/docs/fordjupning/satstyper/satsform-modus-och-talhandling",
    "title": "Snabbkoll: Satsform, modus och talhandling",
    "questions": [
      {
        "id": "x051-q1",
        "context": "Satsform kontra talhandling.",
        "prompt": "Vad är den lingvistiska skillnaden mellan tyskans begrepp Satzform och Sprechakt (talhandling)?",
        "options": [
          "Satzform avser den formella grammatiska strukturen (verbets position V1/V2/VL och modus), medan Sprechakt avser vad talaren faktiskt uträttar med yttrandet (påstår, befaller, varnar osv.).",
          "Satzform gäller endast skrivet språk, medan Sprechakt gäller talspråk.",
          "Satzform bestämmer endast om satsen har kommatecken, medan Sprechakt styr ordföljden.",
          "Det finns ingen skillnad; termerna är fullständiga synonymer i tysk lingvistik."
        ],
        "answer": 0,
        "explanation": "Modern syntax och pragmatik skiljer formell syntaktisk struktur (Satzform) från funktionell pragmatisk avsikt och illokution (Sprechakt).",
        "feedback": [
          "Korrekt! Satzform är den grammatiska formen, Sprechakt är den pragmatiska handlingen.",
          "Fel. Båda begreppen gäller både skrift och tal.",
          "Fel. Satzform handlar om topologi och moduskategori, inte interpunktion.",
          "Fel. De representerar distinkta analysnivåer (syntax vs pragmatik)."
        ]
      },
      {
        "id": "x051-q2",
        "context": "Indirekta talhandlingar.",
        "prompt": "Vilken talhandling utförs vanligtvis när en förälder säger till ett barn: \\"Du gehst jetzt sofort ins Bett!\\"?",
        "options": [
          "En direktiv talhandling (befallning/uppmaning), trots att satsformen är ett deklarativt påstående i V2-form.",
          "Ett rent konstaterande om framtiden utan direktiv kraft.",
          "En interrogativ talhandling som efterfrågar barnets planer.",
          "En optativ önskan utan krav på efterföljd."
        ],
        "answer": 0,
        "explanation": "En påståendesats i presens kan fungera som en kategorisk befallning i tysk pragmatik.",
        "feedback": [
          "Korrekt! Grammatiskt är det en deklarativ sats, men illokutionärt fungerar den som en skarp uppmaning.",
          "Fel. I kontexten är yttrandet inte en neutral förutsägelse.",
          "Fel. Det finns ingen frågande funktion här.",
          "Fel. Detta är en befallning, inte en vag önskan."
        ]
      },
      {
        "id": "x051-q3",
        "context": "Fristående dass-satser i talad tyska.",
        "prompt": "Vad uttrycker en fristående bisats som \\"Dass er ausgerechnet heute absagt!\\" i tysk vardagskommunikation?",
        "options": [
          "Ett självständigt affektivt utrop (förvåning, indignation eller upprördhet) där huvudsatsen är undertryckt.",
          "En ofullständig bisats som räknas som grovt grammatiskt fel i alla register.",
          "En indirekt fråga om orsakerna bakom återbudet.",
          "En artig begäran om bekräftelse."
        ],
        "answer": 0,
        "explanation": "Fristående dass-satser (selbständige dass-Sätze) är etablerade syntaktiska mönster för exklamation och emotionella reaktioner.",
        "feedback": [
          "Helt rätt! Detta är ett självständigt utrop av indignation eller förvåning.",
          "Fel. Konstruktionen är helt legitim och vanlig i tysk pragmatik.",
          "Fel. Det fungerar inte som en fråga.",
          "Fel. Ingen begäran om bekräftelse uttrycks."
        ]
      },
      {
        "id": "x051-q4",
        "context": "Exklamativa V1-satser.",
        "prompt": "Hur skiljer sig yttrandet \\"Hat der aber ein Glück gehabt!\\" från en vanlig ja/nej-fråga?",
        "options": [
          "Det har fallande intonation, betonad partikel (aber) och fungerar som ett beundrande eller avundsjukt utrop i stället för en fråga.",
          "Det kräver alltid ett ja- eller nej-svar från lyssnaren.",
          "Det saknar subjekt.",
          "Verbet står i konjunktiv i stället för indikativ."
        ],
        "answer": 0,
        "explanation": "Exklamativa V1-satser har frågans ordföljd men avslutas med fallande ton och innehåller ofta partiklar som aber, ja eller vielleicht.",
        "feedback": [
          "Korrekt! Fallande utropsprosodi och partikeln aber förvandlar V1-strukturen till ett utrop.",
          "Fel. Det vore ett pragmatiskt missförstånd att svara 'Ja' eller 'Nein'.",
          "Fel. Subjektet 'der' är fullt närvarande.",
          "Fel. Verbet 'hat' står i indikativ perfekt."
        ]
      },
      {
        "id": "x051-q5",
        "context": "Abtönungspartiklar som illokutionära markörer.",
        "prompt": "Vilken pragmatisk funktion har partikeln *ja* i \\"Das ist ja unglaublich!\\"?",
        "options": [
          "Den signalerar att talaren just nu inser eller konstaterar ett överraskande faktum som samtidigt förutsätts vara uppenbart.",
          "Den fungerar som ett bejakande svar motsvarande engelskans 'yes'.",
          "Den gör meningen till en villkorssats.",
          "Den förvandlar påståendet till en strikt hypotetisk kontrafakticitet."
        ],
        "answer": 0,
        "explanation": "Abtönungspartikeln ja markerar delad kunskap eller plötslig insikt/överraskning utan att fungera som svarsord.",
        "feedback": [
          "Korrekt! Partikeln nyanserar talhandlingen och signalerar plötslig insikt eller delad evidens.",
          "Fel. Som modalpartikel i mittfältet är ja inte ett svar på en fråga.",
          "Fel. Det har ingen konditional funktion.",
          "Fel. Det uttrycker inte kontrafakticitet."
        ]
      },
      {
        "id": "x051-q6",
        "context": "Optativa V1-satser.",
        "prompt": "Vilken talhandling och form kännetecknar \\"Hätte ich doch nur auf dich gehört!\\"?",
        "options": [
          "En optativ talhandling (ouppfyllbar önskan) i V1-form med Konjunktiv II och partiklarna doch nur.",
          "En retorisk fråga i indikativ perfekt.",
          "En imperativ befallning riktad till andra personen.",
          "En indirekt fråga om tidigare råd."
        ],
        "answer": 0,
        "explanation": "V1-satser i Konjunktiv II med doch nur eller bloß är det klassiska tyska uttrycket för kontrafaktiska önskningar (optativ).",
        "feedback": [
          "Helt rätt! V1 + Konjunktiv II + doch nur bildar ett kontrafaktiskt optativt uttryck.",
          "Fel. Verbet hätte står i Konjunktiv II, inte indikativ, och yttrandet är ingen fråga.",
          "Fel. Talaren riktar inte en befallning mot någon annan.",
          "Fel. Det är ingen indirekt fråga."
        ]
      }
    ]
  },
  '/docs/fordjupning/satstyper/inbaddad-v2-och-oinledda-komplement': {
    "lessonId": "X052",
    "href": "/docs/fordjupning/satstyper/inbaddad-v2-och-oinledda-komplement",
    "title": "Snabbkoll: Inbäddad V2 och oinledda komplement",
    "questions": [
      {
        "id": "x052-q1",
        "context": "Matrisverb och inbäddad V2.",
        "prompt": "Vilken typ av matrisverb (huvudsatsverb) tillåter i regel inbäddad V2 utan *dass* i tyskan?",
        "options": [
          "Epistemiska verb och sägeverb som uttrycker påstående eller förmodan (sagen, meinen, glauben, hoffen).",
          "Faktiva emotiva verb som uttrycker känslor (bedauern, hassen, sich freuen).",
          "Volitiva verb som uttrycker befallning eller förbud (befehlen, verbieten).",
          "Alla tyska transitiva verb utan undantag."
        ],
        "answer": 0,
        "explanation": "Inbäddad V2 (uneingeleiteter Nebensatz) licensieras av sägeverb (verba dicendi) och antagandeverb (verba credendi), men blockeras av strikt faktiva och manipulerande verb.",
        "feedback": [
          "Korrekt! Verba dicendi och verba credendi licensierar inbäddad V2.",
          "Fel. Faktiva verb som bedauern kräver subjunktionen dass.",
          "Fel. Volitiva verb tillåter inte oinledd V2-deklarativ.",
          "Fel. Endast en begränsad klass av matrisverb tillåter detta."
        ]
      },
      {
        "id": "x052-q2",
        "context": "Faktiva emotiva verb.",
        "prompt": "Varför är meningen *\\"Ich bedaure, er kommt heute nicht\\" ogrammatisk eller starkt normavvikande i standardtyska?",
        "options": [
          "Eftersom 'bedauern' är ett faktivt emotivt verb som förutsätter bisatsinnehållets sanning som ett etablerat faktum och därför kräver en 'dass'-bisats.",
          "Eftersom verbet bedauern endast kan styra dativ.",
          "Eftersom negation i bisatsen förbjuder inbäddad V2.",
          "Eftersom kommatecken saknas mellan satserna."
        ],
        "answer": 0,
        "explanation": "Faktiva verb förutsätter att komplementet är sant (presupposition); de kan inte öppna ett påstående i inbäddad V2-form utan kräver strikt VL med dass.",
        "feedback": [
          "Korrekt! Faktiva emotiva verb kräver att komplementet inleds med dass.",
          "Fel. Bedauern styr ackusativ eller bisatskomplement.",
          "Fel. Negation i komplementet är inte orsak till spärren.",
          "Fel. Kommatecknet finns i meningen, problemet är syntaktisk selektion."
        ]
      },
      {
        "id": "x052-q3",
        "context": "Topologiskt skifte vid inbäddad V2.",
        "prompt": "Vad händer med satsens topologi när talaren väljer inbäddad V2 i stället för en *dass*-sats (t.ex. *Er sagte, er habe keine Zeit*)?",
        "options": [
          "Vänsterklammern (C-positionen) fylls av det finita verbet och förfältet fylls av ett nominalled, precis som i en självständig huvudsats.",
          "Verbet flyttas till högerklammern och förfältet lämnas helt tomt.",
          "Satsen förlorar sitt subjekt.",
          "Båda satserna omvandlas till en enda infinitivfras med zu."
        ],
        "answer": 0,
        "explanation": "Inbäddad V2 har huvudsatsens topologi: det finita verbet besätter vänsterklammern och ett led (oftast subjektet) intar bisatsens interna förfält.",
        "feedback": [
          "Korrekt! Vänsterklammern intas av finita verbet och förfältet av ett topikaliserat led.",
          "Fel. Verbet står i vänsterklammern (V2), inte i högerklammern (VL).",
          "Fel. Subjektet finns kvar och står ofta i förfältet.",
          "Fel. Ingen infinitiv bildas."
        ]
      },
      {
        "id": "x052-q4",
        "context": "Negerat matrisverb.",
        "prompt": "Vad sker när matrisverbet negeras (*Ich glaube nicht, ...*)?",
        "options": [
          "Inbäddad V2 blockeras i regel; en underordnad bisats med 'dass' (VL) blir obligatorisk.",
          "Verbet i bisatsen måste böjas i imperativ.",
          "Inbäddad V2 blir obligatorisk och 'dass' förbjuds.",
          "Negationen flyttas automatiskt till slutet av bisatsen."
        ],
        "answer": 0,
        "explanation": "Negation av matrisverbet upphäver påståendekraften hos bisatsinnehållet, vilket blockerar inbäddad V2: 'Ich glaube nicht, dass er kommt'.",
        "feedback": [
          "Helt rätt! Negerade säge- och troverb spärrar inbäddad V2 och kräver dass.",
          "Fel. Imperativ kan inte användas här.",
          "Fel. Det är tvärtom: inbäddad V2 spärras helt.",
          "Fel. Negationen stannar i matrissatsen."
        ]
      },
      {
        "id": "x052-q5",
        "context": "Stilistiskt bruk av Konjunktiv I.",
        "prompt": "I vilken texttyp är inbäddad V2 särskilt frekvent i kombination med Konjunktiv I?",
        "options": [
          "I journalistisk nyhetsrapportering och referat av uttalanden (indirekt tal).",
          "I juridiska lagtexter och kontrakt.",
          "I barnböcker och sagor.",
          "I tekniska bruksanvisningar."
        ],
        "answer": 0,
        "explanation": "Journalistisk tyska använder mycket flitigt inbäddad V2 med Konjunktiv I för distanserat referat av politiska uttalanden (t.ex. 'Der Minister betonte, die Reform sei alternativlos').",
        "feedback": [
          "Korrekt! Journalistiskt indirekt tal använder detta stildrag systematiskt.",
          "Fel. Lagtexter föredrar opersonliga passiv- och infinitivkonstruktioner.",
          "Fel. Sagor använder preteritum indikativ och samordning.",
          "Fel. Bruksanvisningar använder imperativ eller infinitiver."
        ]
      },
      {
        "id": "x052-q6",
        "context": "Spärr vid viljeverb.",
        "prompt": "Varför kan man inte säga *\\"Der Chef verlangt, die Mitarbeiter arbeiten länger\\"?",
        "options": [
          "Eftersom 'verlangen' är ett viljeverb som styr en avsikt/uppmaning och inte ett påstående om fakta; det kräver 'dass' med Konjunktiv/Indikativ eller en 'zu'-infinitiv.",
          "Eftersom 'arbeiten' är ett starkt verb.",
          "Eftersom 'Chef' kräver genitivobjekt.",
          "Eftersom ordet 'länger' inte kan stå sist i en sats."
        ],
        "answer": 0,
        "explanation": "Manipulerande och volitiva verb kräver dass-bisatser eller infinitivkomplement; de saknar kapacitet att licensiera deklarativ inbäddad V2.",
        "feedback": [
          "Korrekt! Volitiva verb kan inte styra en oinledd deklarativ V2-sats.",
          "Fel. Arbeiten är ett svagt verb och böjningen är inte problemet.",
          "Fel. Verlangen styr ackusativ eller bisats.",
          "Fel. Länger står som adverbial och kan stå i mittfältet."
        ]
      }
    ]
  },
  '/docs/fordjupning/satstyper/fria-och-vidareforande-relativsatser': {
    "lessonId": "X053",
    "href": "/docs/fordjupning/satstyper/fria-och-vidareforande-relativsatser",
    "title": "Snabbkoll: Fria och vidareförande relativsatser",
    "questions": [
      {
        "id": "x053-q1",
        "context": "Definition av fri relativsats.",
        "prompt": "Vad särskiljer en fri relativsats (freier Relativsatz) från en vanlig attributiv relativsats?",
        "options": [
          "Den saknar ett explicit substantiviskt korrelat (Bezugswort) i överordnad sats och introduceras med w-pronomen (wer, was).",
          "Den har alltid verbet på position 1 (V1).",
          "Den kan endast uppträda som parentes i efterfältet.",
          "Den böjs inte efter kasus."
        ],
        "answer": 0,
        "explanation": "Fria relativsatser saknar ett nominalt huvudord i matrissatsen och fungerar själva som subjekt, objekt eller adverbial.",
        "feedback": [
          "Korrekt! De saknar explicit korrelat och fyller själva en argumentroll.",
          "Fel. De har normal bisatsordföljd med verbet sist (VL).",
          "Fel. De kan stå i förfältet eller mittfältet som fullvärdiga argument.",
          "Fel. Relativordet böjs i högsta grad efter kasus."
        ]
      },
      {
        "id": "x053-q2",
        "context": "Kasuskollision i fria relativsatser.",
        "prompt": "Vad sker när matrisverbet och bisatsverbet kräver olika kasus för samma pronomen (kasuskollision) utan korrelat?",
        "options": [
          "Meningen blir ogrammatisk i standardspråk om inte ett demonstrativt korrelat (der, dem, den) skjuts in för att ta matrisverbets kasus.",
          "Bisatsens kasus tar alltid automatiskt över utan undantag.",
          "Man använder alltid nominativ oavsett sammanhang.",
          "Verbet i matrisen förvandlas till ett passivverb."
        ],
        "answer": 0,
        "explanation": "Vid kasuskollision kräver standardtyska att ett demonstrativt korrelat sätts in: 'Wer nicht hören will, dem muss man helfen' (Wer = subjekt i bisatsen, dem = dativobjekt i huvudsatsen).",
        "feedback": [
          "Korrekt! Kasuskollision löses genom att ett demonstrativt korrelat bär matrissatsens kasus.",
          "Fel. Det leder till ogrammatikalitet om formerna inte matchar synkretiskt.",
          "Fel. Nominativ kan inte ersätta ett obligatoriskt dativobjekt.",
          "Fel. Matrisverbet påverkas inte i sitt diatesval."
        ]
      },
      {
        "id": "x053-q3",
        "context": "Vidareförande relativsatser.",
        "prompt": "Vilket pronomen används för att introducera en vidareförande relativsats (weiterführender Nebensatz) som syftar på hela den föregående satsen?",
        "options": [
          "was (eller prepositionsadverb som worüber, wodurch, wovon).",
          "das eller welches.",
          "wer eller wen.",
          "dass."
        ],
        "answer": 0,
        "explanation": "Vidareförande relativsatser syftar på hela propositioner och introduceras därför alltid av neutrumformen was eller w-prepositionsadverb.",
        "feedback": [
          "Korrekt! Was eller sammansättningar med wo(r)- syftar på hela satser.",
          "Fel. Das eller welches syftar på enskilda neutrala substantiv, inte hela propositioner.",
          "Fel. Wer syftar uteslutande på personer.",
          "Fel. Dass är en subjunktion som inleder komplementsatser, inte ett relativord."
        ]
      },
      {
        "id": "x053-q4",
        "context": "Svensk interferens med 'was'.",
        "prompt": "Varför är meningen *\\"Die Frau, was ich gestern gesehen habe\\" felaktig i standardtyska?",
        "options": [
          "Eftersom korrelatet är ett feminint personssubstantiv; det kräver det feminina relativpronomenet 'die' (i ackusativ), medan 'was' inte kan syfta på personer.",
          "Eftersom was endast kan stå i början av en mening.",
          "Eftersom geshehen habe är fel tempus.",
          "Eftersom komma inte får sättas före was."
        ],
        "answer": 0,
        "explanation": "Was kan endast syfta på neutrala pronomina (alles, nichts), superlativer i neutrum eller hela satser, aldrig på bestämda personer eller substantiv med specifikt genus.",
        "feedback": [
          "Korrekt! Efter 'die Frau' krävs relativpronomenet 'die'.",
          "Fel. Was kan stå mitt i meningar efter korrekta korrelat som 'das, was'.",
          "Fel. Tempusformen är perfekt och helt korrekt i sig.",
          "Fel. Komma är obligatoriskt före alla relativsatser på tyska."
        ]
      },
      {
        "id": "x053-q5",
        "context": "W-prepositionsadverb i vidareförande satser.",
        "prompt": "Vilken mening är korrekt formulerad för: \\"Han kom två timmar för sent, vilket ledde till stora förseningar\\"?",
        "options": [
          "Er kam zwei Stunden zu spät, was zu großen Verspätungen führte.",
          "Er kam zwei Stunden zu spät, das zu großen Verspätungen führte.",
          "Er kam zwei Stunden zu spät, welches zu großen Verspätungen führte.",
          "Er kam zwei Stunden zu spät, dass zu großen Verspätungen führte."
        ],
        "answer": 0,
        "explanation": "Referens till hela förloppet kräver relativpronomenet was: 'was zu großen Verspätungen führte'.",
        "feedback": [
          "Helt rätt! 'was' är det korrekta vidareförande relativpronomenet.",
          "Fel. 'das' kan inte ensamt inleda en vidareförande relativsats med referens till en hel sats.",
          "Fel. 'welches' används i äldre tyska för substantiv, men 'was' är standard vid satsreferens.",
          "Fel. 'dass' är en subjunktion och kan inte fungera som subjekt i bisatsen."
        ]
      },
      {
        "id": "x053-q6",
        "context": "Generaliserande fria relativsatser.",
        "prompt": "Hur förstärks ofta fria relativsatser för att uttrycka betydelsen \\"vem som än\\" eller \\"vad som än\\"?",
        "options": [
          "Genom partiklarna auch (immer) eller nur, t.ex. *Wer auch immer das gesagt hat*.",
          "Genom att sätta verbet i imperativ.",
          "Genom att dubblera relativpronomenet: *wer wer*.",
          "Genom att ta bort verbet helt och hållet."
        ],
        "answer": 0,
        "explanation": "Generaliserande fria relativsatser bildas med wer/was + auch (immer) eller nur + verb i slutposition.",
        "feedback": [
          "Korrekt! 'auch immer' eller 'nur' ger den generaliserande koncessiva nyansen.",
          "Fel. Bisatsen behåller sitt finita verb i indikativ eller konjunktiv.",
          "Fel. Dubblering av pronomen förekommer inte.",
          "Fel. Verbet är obligatoriskt."
        ]
      }
    ]
  },
  '/docs/fordjupning/satstyper/jamforelsesatser-och-proportionalsatser': {
    "lessonId": "X054",
    "href": "/docs/fordjupning/satstyper/jamforelsesatser-och-proportionalsatser",
    "title": "Snabbkoll: Jämförelsesatser och proportionalsatser",
    "questions": [
      {
        "id": "x054-q1",
        "context": "Distinktionen wie kontra als.",
        "prompt": "Vilken är grundregeln i standardtyska för valet mellan *wie* och *als*?",
        "options": [
          "wie används vid likhet (positiv: genauso groß wie), medan als används vid olikhet (komparativ: größer als).",
          "wie används enbart vid personer, als enbart vid föremål.",
          "als används i talspråk, medan wie används i formell skrift.",
          "Det finns ingen regel; båda kan användas fritt efter komparativ."
        ],
        "answer": 0,
        "explanation": "Tysk standardnorm kräver strikt wie vid likhet (ekvativ) och als vid komparativ olikhet.",
        "feedback": [
          "Korrekt! Ekvativ likhet med wie, komparativ olikhet med als.",
          "Fel. Distinktionen baseras på jämförelsetyp, inte semantisk animacitet.",
          "Fel. 'größer wie' räknas som fel i standardtyska.",
          "Fel. Att blanda dem efter komparativ är ett normfel."
        ]
      },
      {
        "id": "x054-q2",
        "context": "Hypotetisk jämförelse med ensamt als.",
        "prompt": "Hur konstrueras en hypotetisk jämförelsesats med ensamt *als* (utan *ob*)?",
        "options": [
          "als följs omedelbart av det finita verbet i position 1 (V1) böjt i Konjunktiv II: *Er tat so, als wüsste er alles*.",
          "als följs av rak ordföljd och verbet sist (VL): *Er tat so, als er alles wüsste*.",
          "als kräver indikativ presens och partikeln doch.",
          "als måste alltid efterföljas av en zu-infinitiv."
        ],
        "answer": 0,
        "explanation": "När ob utelämnas står verbet i Konjunktiv II direkt efter partikeln als i V1-position.",
        "feedback": [
          "Korrekt! Ensamt als kräver V1-position för verbet i Konjunktiv II.",
          "Fel. Verbet får absolut inte stå sist när 'ob' saknas.",
          "Fel. Hypotetisk jämförelse kräver Konjunktiv II (eller Konjunktiv I).",
          "Fel. Konstruktionen är en finit sats, inte en infinitivfras."
        ]
      },
      {
        "id": "x054-q3",
        "context": "Ordföljd i proportionalsatser med je ... desto.",
        "prompt": "Vilken är den korrekta ordföljden i huvudsatsen efter en *je*-bisats?",
        "options": [
          "desto + komparativ bildar förfältet, följt direkt av det finita verbet (V2-inversion) och därefter subjektet: *desto besser versteht man es*.",
          "desto + komparativ följs av rak ordföljd med subjektet först: *desto man versteht es besser*.",
          "desto kräver verbet i slutposition (VL): *desto man es besser versteht*.",
          "desto kan inte kombineras med komparativ."
        ],
        "answer": 0,
        "explanation": "Desto/umso + komparativ utgör huvudsatsens förfält. Därför måste det finita verbet inta V2 omedelbart därefter, vilket tvingar fram inversion av subjektet.",
        "feedback": [
          "Helt rätt! Huvudsatsen har obligatorisk V2-inversion efter förfältet.",
          "Fel. Detta är ett typiskt svenskt transferfel (rak ordföljd efter desto är ogrammatiskt på tyska).",
          "Fel. Desto inleder en huvudsats, inte en VL-bisats.",
          "Fel. Komparativ är obligatoriskt efter desto."
        ]
      },
      {
        "id": "x054-q4",
        "context": "Kasuskongruens i elliptisk jämförelse.",
        "prompt": "Vad betyder meningen \\"Der Chef schätzt ihn mehr als mich\\" och varför står \\"mich\\" i ackusativ?",
        "options": [
          "Chefen uppskattar honom mer än han uppskattar mig (mich är ackusativ i parallellitet med ackusativobjektet ihn).",
          "Chefen uppskattar honom mer än jag gör (mich är fel för ich).",
          "Han uppskattar chefen mer än mig.",
          "Meningen betyder att varken chefen eller jag uppskattar honom."
        ],
        "answer": 0,
        "explanation": "Jämförelseledet kongruerar i kasus med sitt referenselement i överordnad sats: ihn är ackusativobjekt, varför jämförelseobjektet också måste stå i ackusativ (mich).",
        "feedback": [
          "Korrekt! Ackusativen 'mich' pekar entydigt ut talaren som jämförelseobjekt till 'ihn'.",
          "Fel. Om betydelsen vore 'än jag gör' skulle nominativen 'als ich' krävas.",
          "Fel. Subjektet är fortfarande chefen.",
          "Fel. Jämförelsen är positiv, inte dubbelt negerande."
        ]
      },
      {
        "id": "x054-q5",
        "context": "Svensk interferens i proportionalsatser.",
        "prompt": "Varför är meningen *\\"Je schneller wir fahren, desto wir kommen früher an\\" felaktig?",
        "options": [
          "Eftersom komparativet 'früher' måste stå direkt efter 'desto' i förfältet och verbet 'kommen' måste stå före subjektet 'wir' (V2).",
          "Eftersom 'desto' inte får användas efter 'je'.",
          "Eftersom 'fahren' måste stå i preteritum.",
          "Eftersom 'an' inte får separeras från verbet."
        ],
        "answer": 0,
        "explanation": "Korrekt struktur är: 'desto früher [förfält] kommen [V2] wir [subjekt] an'. Komparativet får inte separeras från desto och ordföljden måste inverteras.",
        "feedback": [
          "Korrekt! Rätt ordföljd är 'desto früher kommen wir an'.",
          "Fel. 'desto' är standardkorrelatet till 'je'.",
          "Fel. Presens är fullt korrekt.",
          "Fel. Partikeln 'an' separeras normalt till satsens slut vid V2."
        ]
      },
      {
        "id": "x054-q6",
        "context": "als ob kontra als wenn.",
        "prompt": "Vilken skillnad finns mellan *als ob* och *als wenn* i modern standardtyska?",
        "options": [
          "De har samma grammatiska funktion (VL med Konjunktiv II), men 'als ob' är den dominerande standardformen medan 'als wenn' är mindre frekvent och mer talspråklig/regional.",
          "als ob styr indikativ medan als wenn styr konjunktiv.",
          "als wenn kräver verbet på position 1 (V1).",
          "als ob kan endast användas i dåtid."
        ],
        "answer": 0,
        "explanation": "Båda subjunktionerna styr bisatsordföljd (VL) och Konjunktiv II, men als ob är den stilistiska standardvarianten i skrift och officiellt tal.",
        "feedback": [
          "Korrekt! 'als ob' är standardformen, 'als wenn' en mindre vanlig variant med samma syntaktiska regler.",
          "Fel. Båda styr Konjunktiv II i hypotetisk kontext.",
          "Fel. Båda är sammansatta subjunktioner som styr VL-ordföljd.",
          "Fel. De används i alla tempus (presens och förfluten tid)."
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

const updatedContent = content.slice(0, lastClosingIndex) + group4dQuizzes + content.slice(lastClosingIndex);
fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log("Successfully appended corrected Group 4D quizzes to data/learning-quizzes.ts");
