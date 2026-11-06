import fs from 'fs';

const filePath = '/Users/oscarpagerup/Desktop/Git Repo/Om-Tyska/data/learning-quizzes.ts';
let content = fs.readFileSync(filePath, 'utf8');

const group5bQuizzes = `  '/docs/fordjupning/semantik/fokuspartiklar-och-deras-rackvidd': {
    "lessonId": "X061",
    "href": "/docs/fordjupning/semantik/fokuspartiklar-och-deras-rackvidd",
    "title": "Snabbkoll: Fokuspartiklar och deras räckvidd",
    "questions": [
      {
        "id": "x061-q1",
        "context": "Restriktiva kontra additiva partiklar.",
        "prompt": "Vad är den logiska skillnaden mellan restriktiva fokuspartiklar (nur) och additiva partiklar (auch)?",
        "options": [
          "nur utesluter alla andra alternativ ur alternativmängden, medan auch inkluderar fokuset i en mängd kända alternativ.",
          "nur kan endast användas vid siffror, medan auch endast används vid personer.",
          "nur styr konjunktiv medan auch styr indikativ.",
          "Det finns ingen semantisk skillnad; de är utbytbara synonymer."
        ],
        "answer": 0,
        "explanation": "Restriktiva partiklar exkluderar konkurrerande alternativ ('endast X'), medan additiva partiklar adderar X till en redan existerande mängd.",
        "feedback": [
          "Korrekt! Exklusion (nur) kontra inklusion (auch).",
          "Fel. Båda partiklarna kan associeras med alla typer av konstituenter.",
          "Fel. Fokuspartiklar påverkar inte verbets morfologiska modus.",
          "Fel. De har motsatta logiska funktioner."
        ]
      },
      {
        "id": "x061-q2",
        "context": "Association med fokus.",
        "prompt": "Hur avgörs en fokuspartikels semantiska räckvidd (*Skopus*) i talad tyska?",
        "options": [
          "Genom intonationsaccenten: partikeln associerar med det ord som bär satsens nuklearakcent (fokus).",
          "Partikeln associerar alltid enbart med det finita verbet.",
          "Partikeln associerar alltid med meningsslutet oavsett betoning.",
          "Räckvidden bestäms enbart av grammatiskt genus."
        ],
        "answer": 0,
        "explanation": "Principen kallas Association with Focus: partikelns tolkning styrs direkt av vilket element i satsen som accentueras.",
        "feedback": [
          "Korrekt! Intonationsaccenten avgör vilket element som partikeln modifierar.",
          "Fel. Partikeln kan associera med subjekt, objekt, adverbial eller verb.",
          "Fel. Betoningen styr räckvidden, inte den absoluta slutpositionen.",
          "Fel. Genus har ingen relevans för fokusräckvidd."
        ]
      },
      {
        "id": "x061-q3",
        "context": "nur kontra erst.",
        "prompt": "När måste man på tyska välja *erst* i stället för *nur* vid översättning av svenskans 'bara'?",
        "options": [
          "Vid tidpunkter, datum och ålder när ett skeende är fördröjt eller mer väntas komma (*Es ist erst drei Uhr*, *Er ist erst zehn*).",
          "När man talar om pengar och priser.",
          "När satsen har passiv form.",
          "Alltid i skriftlig tyska."
        ],
        "answer": 0,
        "explanation": "Erst anger ett lågt mått på en tids- eller utvecklingsskala där fortsättning förväntas; nur anger ren och statisk begränsning.",
        "feedback": [
          "Korrekt! Skalärt lågt mått och tidsuttryck kräver erst.",
          "Fel. Priser använder nur (Das kostet nur fünf Euro).",
          "Fel. Diates spelar ingen roll för partikelvalet.",
          "Fel. Nur är lika frekvent i skrift som erst."
        ]
      },
      {
        "id": "x061-q4",
        "context": "Skalära partikeln sogar.",
        "prompt": "Vilken presupposition utlöser fokuspartikeln *sogar* i \\"Sogar der Professor wusste es nicht\\"? ",
        "options": [
          "Att professorn var den mest osannolika personen att inte veta svaret (ett extremvärde på en förväntningsskala).",
          "Att ingen annan person visste svaret.",
          "Att frågan var extremt enkel.",
          "Att professorn var frånvarande."
        ],
        "answer": 0,
        "explanation": "Sogar är en skalär partikel som presupponerar att det fokuserade elementet intar en extrem och oväntad position på sannolikhetsskalan.",
        "feedback": [
          "Korrekt! Sogar markerar ett oväntat och överraskande extremfall.",
          "Fel. Tvärtom presupponeras att andra personer inte heller visste svaret.",
          "Fel. Det kan indikera att frågan var svår, men partikeln rankar professorns kunskap.",
          "Fel. Professorns närvaro ifrågasätts inte."
        ]
      },
      {
        "id": "x061-q5",
        "context": "Översättning av 'inte förrän'.",
        "prompt": "Hur uttrycks det svenska påståendet 'Tåget kommer inte förrän klockan tio' mest idiomatiskt på standardtyska?",
        "options": [
          "Der Zug kommt erst um zehn Uhr.",
          "Der Zug kommt nicht vor zehn Uhr.",
          "Der Zug kommt nur um zehn Uhr.",
          "Der Zug kommt noch um zehn Uhr."
        ],
        "answer": 0,
        "explanation": "Svenskans nekande 'inte förrän' motsvaras i tyskan av den positiva temporala fokuspartikeln erst.",
        "feedback": [
          "Helt rätt! 'erst um zehn Uhr' är standardmönstret på tyska.",
          "Fel. 'nicht vor' används vid tidsfrister, men erst är standard för ankomst.",
          "Fel. 'nur um zehn Uhr' betyder att tåget bara avgår vid den specifika klockslaget och ingen annan tid.",
          "Fel. 'noch um zehn Uhr' betyder att det fortfarande kommer vid tio."
        ]
      },
      {
        "id": "x061-q6",
        "context": "Topologi i förfältet.",
        "prompt": "Kan en fokuspartikel bilda en gemensam fras med sitt fokus i förfältet före det finita verbet (*Nur Peter hat angerufen*)?",
        "options": [
          "Ja, partikeln och dess fokuselement bildar en sammansatt konstituent som tillsammans upptar förfältsplatsen (V1-position).",
          "Nej, partiklar måste alltid placeras i mittfältet.",
          "Nej, verbet måste stå direkt efter partikeln: Nur hat Peter angerufen.",
          "Ja, men endast om verbet står i konjunktiv."
        ],
        "answer": 0,
        "explanation": "Fokuspartiklar kan adjungeras till en nominalfras i förfältet och bilda ett enda gemensamt led (Konstituente).",
        "feedback": [
          "Korrekt! Partikel + fokus räknas som en enda syntaktisk enhet i förfältet.",
          "Fel. De står mycket ofta i förfältet.",
          "Fel. Att sätta verbet direkt efter partikeln bryter mot konstituentstrukturen.",
          "Fel. Verbets modus påverkas inte."
        ]
      }
    ]
  },
  '/docs/fordjupning/semantik/modalpartiklarnas-system': {
    "lessonId": "X062",
    "href": "/docs/fordjupning/semantik/modalpartiklarnas-system",
    "title": "Snabbkoll: Modalpartiklarnas system",
    "questions": [
      {
        "id": "x062-q1",
        "context": "Kännetecken för modalpartiklar.",
        "prompt": "Vilka grundläggande grammatiska egenskaper delar alla äkta modalpartiklar (*Abtönungspartikeln*)?",
        "options": [
          "De är obetonade, står uteslutande i mittfältet, ändrar inte satsens sanningsvärde och speglar samtalsparternas relation/delade kunskap.",
          "De är starkt betonade, står alltid först i satsen och styr genitiv.",
          "De böjs i komparation och fungerar som subjekt.",
          "De används enbart i skriftliga lagtexter."
        ],
        "answer": 0,
        "explanation": "Modalpartiklar reglerar pragmatik och samtalsbakgrund; de saknar accent, kan inte stå i förfältet och är propositionellt neutrala.",
        "feedback": [
          "Korrekt! Obetonade, placerade i mittfältet och pragmatiskt styrande.",
          "Fel. De kan aldrig stå i förfältet och styr inget kasus.",
          "Fel. Partiklar böjs inte.",
          "Fel. De är typiska för talspråk och dialog, sällsynta i lagtext."
        ]
      },
      {
        "id": "x062-q2",
        "context": "Pragmatisk funktion hos partikeln ja.",
        "prompt": "Vad signalerar talaren genom att använda modalpartikeln *ja* i påståendet \\"Du weißt ja, wie er ist\\"? ",
        "options": [
          "Talaren anspelar på känd bakgrundskunskap som förutsätts vara självklar och delad mellan samtalsparterna ('som du ju vet').",
          "Talaren ställer en fråga och kräver bekräftelse.",
          "Talaren uttrycker att hen tvivlar på påståendet.",
          "Talaren befaller lyssnaren att ändra åsikt."
        ],
        "answer": 0,
        "explanation": "Modalpartikeln ja markerar konsensus och erinrar om information i delad Common Ground.",
        "feedback": [
          "Korrekt! 'ja' vädjar till delad kunskap och självklarhet.",
          "Fel. Satsen är ett påstående, inte en fråga.",
          "Fel. Partikeln uttrycker inte tvivel (det gör wohl eller kaum).",
          "Fel. Det är ingen befallning."
        ]
      },
      {
        "id": "x062-q3",
        "context": "Homonymi hos denn.",
        "prompt": "Hur skiljer man modalpartikeln *denn* från den samordnande konjunktionen *denn*?",
        "options": [
          "Konjunktionen denn står på position 0 mellan två satser och uttrycker orsak; modalpartikeln denn står obetonad i mittfältet i frågor och uttrycker intresse.",
          "De är helt identiska och kan användas godtyckligt.",
          "Modalpartikeln denn kräver alltid Konjunktiv II.",
          "Konjunktionen denn kan endast stå sist i satsen."
        ],
        "answer": 0,
        "explanation": "Konjunktionen 'denn' förbinder huvudsatser ('Er kam, denn er hatte Zeit'), medan modalpartikeln 'denn' nyanserar frågor ('Was machst du denn?').",
        "feedback": [
          "Korrekt! Position 0 (konjunktion) kontra mittfält i frågor (modalpartikel).",
          "Fel. De tillhör två helt olika syntaktiska kategorier.",
          "Fel. Modus styrs av satstypen, inte av partikeln.",
          "Fel. Konjunktionen står mellan satserna."
        ]
      },
      {
        "id": "x062-q4",
        "context": "Funktion hos mal i imperativ.",
        "prompt": "Vilken effekt har modalpartikeln *mal* i en uppmaning som \\"Komm mal her\\"? ",
        "options": [
          "Den mildrar uppmaningen så att den uppfattas som vänlig, avspänd och socialt kravlös.",
          "Den förvandlar uppmaningen till ett strängt straffhot.",
          "Den betyder att handlingen måste utföras exakt en gång.",
          "Den gör meningen till en villkorssats."
        ],
        "answer": 0,
        "explanation": "Partikeln mal förminskar handlingens upplevda ansträngning och gör en tysk imperativ artig och lättsam.",
        "feedback": [
          "Helt rätt! 'mal' avväpnar imperativens bryska ton.",
          "Fel. Skarp varning uttrycks med 'bloß' eller 'ja' (Fass das bloß nicht an!).",
          "Fel. Det temporala grundtalet einmal är inte det primära här.",
          "Fel. Det är fortfarande en imperativsats."
        ]
      },
      {
        "id": "x062-q5",
        "context": "Frågepartikeln etwa.",
        "prompt": "Vad antyder talaren när frågan formuleras med *etwa*: \\"Hast du etwa den Zug verpasst?\\"?",
        "options": [
          "Talaren befarar eller anar ett oönskat svar och hoppas innerst inne att svaret ska vara nej.",
          "Talaren vet med 100 % säkerhet att tåget missades.",
          "Talaren frågar efter det exakta klockslaget för tågets avgång.",
          "Frågan är en artig inbjudan att stiga ombord."
        ],
        "answer": 0,
        "explanation": "Etwa i frågor uttrycker negativ förväntan eller misstrogen bestörtning ('inte har du väl...').",
        "feedback": [
          "Korrekt! 'etwa' signalerar oro och en förväntan om att det negativa inträffat.",
          "Fel. Talaren frågar just för att hen är osäker eller chockad.",
          "Fel. Detta rör händelsen, inte klockslaget.",
          "Fel. Det uttrycker ingen inbjudan."
        ]
      },
      {
        "id": "x062-q6",
        "context": "Positionsspärr i förfältet.",
        "prompt": "Varför är meningen *\\"Ja wissen Sie das\\" ogrammatisk på standardtyska?",
        "options": [
          "Eftersom modalpartiklar aldrig får placeras i förfältet (position 1); de hör uteslutande hemma i mittfältet efter det finita verbet.",
          "Eftersom ordet ja inte får kombineras med artighetsformen Sie.",
          "Eftersom frågetecken saknas i meningen.",
          "Eftersom verbet wissen kräver ackusativobjekt."
        ],
        "answer": 0,
        "explanation": "Modalpartiklar är topologiskt spärrade från förfältet. Korrekt placering: 'Sie wissen das ja' eller 'Wissen Sie das ja?'.",
        "feedback": [
          "Korrekt! Modalpartiklar kan aldrig stå i förfältet.",
          "Fel. Ja kan naturligtvis användas i tilltal med Sie i mittfältet.",
          "Fel. Meningsbyggnaden i sig är syntaktiskt omöjlig.",
          "Fel. Wissen styr här pronomenet das i ackusativ."
        ]
      }
    ]
  },
  '/docs/fordjupning/semantik/presupposition-och-informationsbakgrund': {
    "lessonId": "X064",
    "href": "/docs/fordjupning/semantik/presupposition-och-informationsbakgrund",
    "title": "Snabbkoll: Presupposition och informationsbakgrund",
    "questions": [
      {
        "id": "x064-q1",
        "context": "Assertion kontra presupposition.",
        "prompt": "Vad är skillnaden mellan ett yttrandes hävdade innehåll (Assertion) och dess presupposition?",
        "options": [
          "Assertionen är det nya påstående som talaren öppet framför och som kan vara sant/falskt; presuppositionen är den bakgrund som tas för given som redan sann.",
          "Assertionen gäller dåtid medan presuppositionen gäller framtid.",
          "Assertioner skrivs med versaler medan presuppositioner skrivs i kursiv.",
          "Det finns ingen skillnad; de är synonyma termer inom pragmatiken."
        ],
        "answer": 0,
        "explanation": "Assertionen är meningens öppna proposition; presuppositionen är den nödvändiga förutsättning som måste råda för att meningen ska kunna bedömas.",
        "feedback": [
          "Korrekt! Hävdat innehåll kontra förutsatt samtalsbakgrund.",
          "Fel. Tempus har ingenting med denna distinktion att göra.",
          "Fel. Typografi påverkar inte semantiska kategorier.",
          "Fel. De utgör två fundamentalt skilda informationslager."
        ]
      },
      {
        "id": "x064-q2",
        "context": "Negationstestet.",
        "prompt": "Vad utmärker en presupposition när huvudsatsen negeras (*Konstanz unter Negation*)?",
        "options": [
          "Presuppositionen överlever: den förblir sann och giltig trots att huvudsatsens hävdade innehåll negeras.",
          "Presuppositionen negeras automatiskt.",
          "Presuppositionen förvandlas till en villkorssats.",
          "Satsen förlorar sitt verb."
        ],
        "answer": 0,
        "explanation": "Det definierande testet för en presupposition är att den står fast under negation, frågeform och konditionalisering.",
        "feedback": [
          "Helt rätt! Presuppositioner överlever negationstestet intakta.",
          "Fel. Endast det hävdade innehållet (assertionen) negeras.",
          "Fel. Syntaxen förblir oförändrad.",
          "Fel. Verbet påverkas inte."
        ]
      },
      {
        "id": "x064-q3",
        "context": "Faktiva verb.",
        "prompt": "Vilken presupposition utlöses av det faktiva verbet *bedauern* i \\"Er bedauert, dass er gelogen hat\\"? ",
        "options": [
          "Att han faktiskt har ljugit (bisatsens sanning tas som ett objektivt etablerat faktum).",
          "Att han aldrig ljög.",
          "Att han tänker ljuga i framtiden.",
          "Att lyssnaren inte tror honom."
        ],
        "answer": 0,
        "explanation": "Faktiva verb (bedauern, wissen, bemerken) presupponerar att deras bisatskomplement är sant i den verkliga världen.",
        "feedback": [
          "Korrekt! Faktivitet presupponerar komplementets sanning.",
          "Fel. Detta vore motsatsen till verbets semantik.",
          "Fel. Handlingen ligger i dåtid och förutsätts vara sann.",
          "Fel. Lyssnarens åsikt ingår inte i presuppositionen."
        ]
      },
      {
        "id": "x064-q4",
        "context": "Ändringsverb.",
        "prompt": "Vilken information förblir sann när meningen \\"Der Zeuge hat aufgehört zu zittern\\" negeras till \\"Der Zeuge hat nicht aufgehört zu zittern\\"? ",
        "options": [
          "Att vittnet tidigare skakade (aspektuella ändringsverbet 'aufhören' presupponerar att tillståndet pågick).",
          "Att vittnet talade sanning.",
          "Att vittnet slutade skaka omedelbart.",
          "Att rättegången avbröts."
        ],
        "answer": 0,
        "explanation": "Negationen ändrar assertionen (han fortsätter skaka), men presuppositionen att han skakade före tidpunkten överlever helt.",
        "feedback": [
          "Korrekt! Presuppositionen om ett föregående tillstånd överlever negationen.",
          "Fel. Trovärdighet ingår inte i verbets presupposition.",
          "Fel. Negationen innebär just att skakandet inte upphörde.",
          "Fel. Rättegången berörs inte."
        ]
      },
      {
        "id": "x064-q5",
        "context": "Iterativ partikel.",
        "prompt": "Vad presupponerar meningen \\"Der Drucker ist schon wieder kaputt\\"? ",
        "options": [
          "Att skrivaren har varit trasig vid minst ett tillfälle tidigare.",
          "Att skrivaren är helt ny.",
          "Att ingen använder skrivaren.",
          "Att skrivaren fungerar utmärkt."
        ],
        "answer": 0,
        "explanation": "Partikeln 'wieder' är en iterativ presuppositionsutlösare som kräver att samma händelse eller tillstånd inträffat förut.",
        "feedback": [
          "Korrekt! 'wieder' presupponerar en tidigare förekomst av samma tillstånd.",
          "Fel. 'wieder kaputt' motsäger att den vore ny och felfri.",
          "Fel. Ingen uppgift om användningsfrekvens presupponeras.",
          "Fel. Skrivaren är de facto trasig."
        ]
      },
      {
        "id": "x064-q6",
        "context": "Presuppositionsackommodation.",
        "prompt": "Vad innebär *ackommodation* (*Akkommodation*) när en talare yttrar en förutsättning som lyssnaren inte kände till i förväg?",
        "options": [
          "Att lyssnaren tyst accepterar den nya informationen och lägger till den i den gemensamma samtalsbakgrunden utan protest.",
          "Att lyssnaren avbryter samtalet och begär bevis.",
          "Att meningen klassificeras som osann.",
          "Att meningen måste skrivas om till indirekt tal."
        ],
        "answer": 0,
        "explanation": "Ackommodation är en kooperativ pragmatisk mekanism där lyssnaren tyst godtar rimliga presuppositioner (t.ex. 'min syster') för att samtalet ska flyta smidigt.",
        "feedback": [
          "Helt rätt! Tyst acceptans av ny förutsättning i Common Ground.",
          "Fel. Detta vore ett presuppositionsavbrott, inte ackommodation.",
          "Fel. Meningen förblir meningsfull och begriplig.",
          "Fel. Inget modusbyte krävs."
        ]
      }
    ]
  },
  '/docs/fordjupning/semantik/tema-fokus-och-kontrast': {
    "lessonId": "X065",
    "href": "/docs/fordjupning/semantik/tema-fokus-och-kontrast",
    "title": "Snabbkoll: Tema, fokus och kontrast",
    "questions": [
      {
        "id": "x065-q1",
        "context": "Thema kontra Rhema.",
        "prompt": "Vad är den lingvistiska relationen mellan Thema (Topic) och Rhema (Comment)?",
        "options": [
          "Thema är satsens utgångspunkt och vad den handlar om; Rhema är den informativa nyheten eller kärnan som meddelas om temat.",
          "Thema måste alltid vara ett substantiv och Rhema ett adjektiv.",
          "Thema gäller endast förfluten tid och Rhema nutid.",
          "Thema står alltid i slutet av meningen och Rhema först."
        ],
        "answer": 0,
        "explanation": "Informationsflödet rör sig normalt från känd utgångspunkt (Thema) till ny kärninformativ utsaga (Rhema).",
        "feedback": [
          "Korrekt! Thema är utgångspunkten; Rhema är det som tillförs.",
          "Fel. Båda funktionerna kan fyllas av olika ordklasser och fraser.",
          "Fel. Tempus är irrelevant för tematisk indelning.",
          "Fel. Normalföljden är Thema före Rhema."
        ]
      },
      {
        "id": "x065-q2",
        "context": "Tema kontra subjekt.",
        "prompt": "Varför är det felaktigt att i tysk syntax likställa *Thema* med det grammatiska *subjektet*?",
        "options": [
          "Eftersom vilket led som helst (ackusativobjekt, dativobjekt, adverbial) kan topikaliseras i förfältet och fungera som tema, oberoende av subjektet.",
          "Eftersom tyska satser inte har grammatiska subjekt.",
          "Eftersom subjektet alltid måste placeras efter verbet.",
          "Eftersom ackusativobjekt alltid är starkare än nominativsubjekt."
        ],
        "answer": 0,
        "explanation": "Tyskans topologi tillåter att objekt eller adverbial placeras i förfältet för att tjäna som tema: 'Diesen Vorschlag [Thema] lehnen wir [Subjekt] ab'.",
        "feedback": [
          "Korrekt! Tema är en pragmatisk textroll; subjekt är en syntaktisk grammatisk roll.",
          "Fel. Tyskan har tydliga grammatiska subjekt.",
          "Fel. Subjektet kan stå i förfältet eller i mittfältet.",
          "Fel. Kasus avgör syntaktisk funktion, inte semantisk styrka."
        ]
      },
      {
        "id": "x065-q3",
        "context": "Hattkonturen.",
        "prompt": "Hur rör sig tonhöjden i tyskans hattkontur (*Hutkontur / Brückenakzent*) vid dubbel kontrast?",
        "options": [
          "En stigande ton på temat i förfältet följt av en fallande ton på fokuset i mittfältet/slutklammern, med en jämn hög platå däremellan.",
          "En brant fallande ton på första ordet och viskning därefter.",
          "Ett monotont mumlande utan accenttoppar.",
          "Tre snabba stigningar i rad."
        ],
        "answer": 0,
        "explanation": "Hattkonturen förbinder ett kontrastivt tema (stigande) med ett kontrastivt fokus (fallande) över en hög intonationsbro.",
        "feedback": [
          "Helt rätt! Stigande på temat och fallande på fokuset bildar den karaktäristiska hatten.",
          "Fel. Detta beskriver inte en hattkontur.",
          "Fel. Intonationskonturen är mycket dynamisk och melodisk.",
          "Fel. Konturen har en bestämd stigning och en bestämd sänkning."
        ]
      },
      {
        "id": "x065-q4",
        "context": "Mittfältets ordningsregler.",
        "prompt": "Vilken informationsprincip styr normal placering av led i det tyska mittfältet?",
        "options": [
          "Givet/känd information placeras före ny information (Thema vor Rhema), och bestämda led före obestämda led.",
          "Obestämda tunga led placeras alltid först i mittfältet.",
          "Verbets particip placeras i mitten av mittfältet.",
          "Alla adverbial måste stå absolut sist före punkt."
        ],
        "answer": 0,
        "explanation": "Informationsflödet i mittfältet prioriterar givet före nytt och definit före indefinit.",
        "feedback": [
          "Korrekt! 'Thema vor Rhema' och 'Definit vor Indefinit' styr mittfältet.",
          "Fel. Tunga obestämda led dras tvärtom mot slutet av mittfältet.",
          "Fel. Participet står i högerklammern i slutet av huvudsatsen.",
          "Fel. Adverbialens position beror på deras semantiska räckvidd."
        ]
      },
      {
        "id": "x065-q5",
        "context": "Pronominalplacering i mittfältet.",
        "prompt": "Varför placeras personliga pronomina före substantiviska subjekt i inversionssatser som *\\"Gestern hat es ihm der Vater gegeben\\"*?",
        "options": [
          "Eftersom pronomina representerar lätt, känd information och dras enligt Wackernagels princip så nära vänsterklammern som möjligt.",
          "Eftersom Vater är ett maskulint ord.",
          "Eftersom gegeben är ett oregelbundet verb.",
          "Eftersom gestern kräver dubbla pronomina."
        ],
        "answer": 0,
        "explanation": "Lätta pronomina glider alltid till vänster i mittfältet omedelbart efter det finita verbet.",
        "feedback": [
          "Korrekt! Lätta kända pronomina tränger framför tunga nominalfraser.",
          "Fel. Genus påverkar inte pronominaldragningen.",
          "Fel. Verbets böjningsklass är irrelevant.",
          "Fel. Adverbialet kräver inga specifika pronomina."
        ]
      },
      {
        "id": "x065-q6",
        "context": "Presenterande satser.",
        "prompt": "Vad kännetecknar en all-ny presenterande sats (*thetischer Satz*) som *\\"Plötzlich ertönte ein lauter Schrei\\"*?",
        "options": [
          "Hela satsen utgör en enda samlad nyhet (brett fokus) utan att något föregående tema förutsätts; accenten faller typiskt på subjektet.",
          "Satsen saknar predikat.",
          "Satsen måste alltid böjas i Konjunktiv I.",
          "Satsen kan endast användas i komedier."
        ],
        "answer": 0,
        "explanation": "Tetiska satser introducerar en helt ny händelse i sin helhet och saknar den klassiska tvådelningen tema/rema.",
        "feedback": [
          "Korrekt! Hela händelsen är nyhet och introducerar ett nytt element i diskursen.",
          "Fel. Predikatet ertönte är fullt närvarande.",
          "Fel. Indikativ är normalt tempus.",
          "Fel. Konstruktionen är vanlig i alla berättande och nyhetsförmedlande genrer."
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

const updatedContent = content.slice(0, lastClosingIndex) + group5bQuizzes + content.slice(lastClosingIndex);
fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log("Successfully appended Group 5B quizzes to data/learning-quizzes.ts");
