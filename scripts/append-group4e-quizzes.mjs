import fs from 'fs';

const filePath = '/Users/oscarpagerup/Desktop/Git Repo/Om-Tyska/data/learning-quizzes.ts';
let content = fs.readFileSync(filePath, 'utf8');

const group4eQuizzes = `  '/docs/fordjupning/satstyper/konsekutiva-och-instrumentala-satser': {
    "lessonId": "X055",
    "href": "/docs/fordjupning/satstyper/konsekutiva-och-instrumentala-satser",
    "title": "Snabbkoll: Konsekutiva och instrumentala satser",
    "questions": [
      {
        "id": "x055-q1",
        "context": "Distinktionen mellan ren och gradbunden följd.",
        "prompt": "Vad är den grammatiska och semantiska skillnaden mellan sammanskrivet *sodass* och uppdelat *so ... dass*?",
        "options": [
          "sodass anger en ren saklig konsekvens av hela huvudsatsen, medan uppdelat so ... dass anger konsekvensen av en extrem grad eller intensitet hos ett specifikt adjektiv/adverb.",
          "sodass används enbart i talspråk, medan so ... dass är förbehållet officiell skrift.",
          "sodass kräver konjunktiv medan so ... dass kräver indikativ.",
          "Det finns ingen skillnad; de är ortografiska varianter utan betydelseskillnad."
        ],
        "answer": 0,
        "explanation": "Sammansatt sodass anger omedelbar följd av en händelse, medan so ... dass kopplar en intensiv grad i huvudsatsen till dess verkan.",
        "feedback": [
          "Korrekt! Ren konsekvens (sodass) kontra gradbunden konsekvens (so ... dass).",
          "Fel. Båda är etablerade i standardtyska och skriftnormen.",
          "Fel. Båda styr normalt indikativ om inte irrealis föreligger.",
          "Fel. De representerar två skilda syntaktiska konstruktioner."
        ]
      },
      {
        "id": "x055-q2",
        "context": "Negerad och omöjlig följd med als dass.",
        "prompt": "Vilket modus och vilken konstruktion används vid omöjlig konsekvens efter ett för högt mått (t.ex. *Er war zu stolz, ...*)?",
        "options": [
          "als dass + Konjunktiv II: *als dass er um Hilfe gebeten hätte*.",
          "sodass + indikativ presens: *sodass er um Hilfe bittet*.",
          "weil + Konjunktiv I: *weil er um Hilfe bäte*.",
          "ohne dass + imperativ: *ohne dass bitte er um Hilfe*."
        ],
        "answer": 0,
        "explanation": "Strukturen 'zu + adjektiv ... als dass' kräver Konjunktiv II eftersom den beskriver en kontrafaktisk konsekvens som inte inträffar.",
        "feedback": [
          "Korrekt! 'zu + Positiv ... als dass' styr Konjunktiv II.",
          "Fel. Detta beskriver en faktisk handling, inte en utesluten konsekvens.",
          "Fel. Kausalt weil passar inte med förhöjt mått.",
          "Fel. Imperativ kan inte användas i bisatser."
        ]
      },
      {
        "id": "x055-q3",
        "context": "Placering av konsekutiva bisatser.",
        "prompt": "Varför kan en konsekventiell bisats med *sodass* aldrig stå i förfältet före huvudsatsen?",
        "options": [
          "Eftersom en konsekvens logiskt och tidsmässigt måste följa efter sin orsak; följdsatsen kan aldrig introducera meningen.",
          "Eftersom tyska bisatser aldrig får stå i förfältet.",
          "Eftersom sodass kräver ett demonstrativt pronomen som subjekt.",
          "Eftersom verbet i huvudsatsen då skulle hamna i slutposition."
        ],
        "answer": 0,
        "explanation": "Konsekutiva satser är semantiskt bundna till efterfältet; en verkan kan inte presenteras syntaktiskt före den handling som orsakar den.",
        "feedback": [
          "Korrekt! Konsekutiva bisatser måste alltid stå efter den orsakande huvudsatsen.",
          "Fel. Många bisatser (konditionala, kausala, temporala) står gärna i förfältet.",
          "Fel. Subjektet i en sodass-sats har inga sådana restriktioner.",
          "Fel. Huvudsatsen har alltid V2 efter ett förfält."
        ]
      },
      {
        "id": "x055-q4",
        "context": "Instrumentala subjunktioner.",
        "prompt": "Hur skiljer sig *indem* från *dadurch dass* i instrumentala satser?",
        "options": [
          "indem anger det omedelbara tillvägagångssättet och föredrar subjektsidentitet, medan dadurch dass betonar medlet med ett korrelat och fungerar utmärkt vid olika subjekt.",
          "indem styr dativobjekt medan dadurch dass styr ackusativobjekt.",
          "indem kan endast stå i dåtid medan dadurch dass endast står i nutid.",
          "indem betyder alltid 'eftersom' och tillhör kausalsatserna."
        ],
        "answer": 0,
        "explanation": "Indem är det smidiga verbet för identiskt subjekt ('Er half, indem er...'), medan dadurch dass lyfter fram medlet som orsakande mekanism och passar skilda subjekt.",
        "feedback": [
          "Korrekt! Indem lämpar sig vid subjektsidentitet, dadurch dass vid fokuserat medel eller olika subjekt.",
          "Fel. Kasus styrs av satsernas respektive verb, inte av subjunktionen.",
          "Fel. Båda används i samtliga tempus.",
          "Fel. Indem är strikt instrumentalt ('genom att'), inte kausalt."
        ]
      },
      {
        "id": "x055-q5",
        "context": "Betydelseförskjutning hos indem.",
        "prompt": "Varför är meningen *\\"Er las die Zeitung, indem er frühstückte\\" felaktig i modern standardtyska?",
        "options": [
          "Eftersom 'indem' i modern tyska uteslutande uttrycker medel/instrument ('genom att'), inte samtidig tidsrelation ('medan'); här krävs 'während'.",
          "Eftersom frühstücken är ett reflexivt verb.",
          "Eftersom tidningen måste stå i dativ.",
          "Eftersom kommatecknet förbjuder bisatser med indem."
        ],
        "answer": 0,
        "explanation": "Att äta frukost är inte metoden för att läsa tidningen; den temporala betydelsen 'medan' hos indem är föråldrad och ersatt av während.",
        "feedback": [
          "Helt rätt! Indem anger metod, inte temporal samtidighet. Här krävs während.",
          "Fel. Frühstücken är inte reflexivt.",
          "Fel. Tidningen står i ackusativ som direkt objekt till lesen.",
          "Fel. Komma är obligatoriskt före bisatser."
        ]
      },
      {
        "id": "x055-q6",
        "context": "Instrumental omskrivning i nominalstil.",
        "prompt": "Hur omskrivs satsen *\\"Man senkt die Kosten, indem man die Prozesse automatisiert\\" bäst till nominalstil?",
        "options": [
          "Durch die Automatisierung der Prozesse senkt man die Kosten.",
          "Wegen der Automatisierung senkt man die Kosten.",
          "Trotz der Automatisierung senkt man die Kosten.",
          "Um die Prozesse zu automatisieren, senkt man die Kosten."
        ],
        "answer": 0,
        "explanation": "Instrumentala bisatser med indem motsvaras i nominalstil av prepositionen durch + ackusativ eller mittels + genitiv.",
        "feedback": [
          "Korrekt! Durch + verbalabstraktum är standardomskrivningen för indem.",
          "Fel. Wegen uttrycker orsak (kausalitet), inte medel.",
          "Fel. Trotz uttrycker medgivande (koncessivitet).",
          "Fel. Um ... zu uttrycker avsikt/mål (finalitet), inte instrumentalt medel."
        ]
      }
    ]
  },
  '/docs/fordjupning/satstyper/konditionalitet-och-irrelevansvillkor': {
    "lessonId": "X056",
    "href": "/docs/fordjupning/satstyper/konditionalitet-och-irrelevansvillkor",
    "title": "Snabbkoll: Konditionalitet och irrelevansvillkor",
    "questions": [
      {
        "id": "x056-q1",
        "context": "Valet mellan wenn och falls.",
        "prompt": "Vilken semantisk nyans skiljer *falls* från det mer neutrala *wenn*?",
        "options": [
          "falls markerar en osäker framtida eventualitet ('i händelse av att', 'om ifall att') med lägre förmodad sannolikhet.",
          "falls används endast i förfluten tid.",
          "falls styr alltid Konjunktiv I.",
          "falls kan inte kombineras med hjälpverbet sollten."
        ],
        "answer": 0,
        "explanation": "Falls betonar det hypotetiska eller osäkra undantaget i högre grad än det neutrala wenn.",
        "feedback": [
          "Korrekt! Falls signalerar en eventuell och osäker eventualitet.",
          "Fel. Falls används huvudsakligen om presens och futurum.",
          "Fel. Falls styr indikativ eller Konjunktiv II, inte Konjunktiv I.",
          "Fel. Falls kombineras tvärtom mycket ofta med sollten i artig stil."
        ]
      },
      {
        "id": "x056-q2",
        "context": "Oinledda V1-konditionalsatser.",
        "prompt": "Hur bildas en oinledd villkorssats i skriven tysk standardnorm?",
        "options": [
          "Det finita verbet flyttas fram till position 1 (V1) i bisatsen utan subjunktion: *Sollte es regnen, sagen wir ab*.",
          "Det finita verbet behåller slutpositionen och subjunktionen stryks helt enkelt.",
          "Verbet sätts alltid i imperativform.",
          "Satsen måste alltid avslutas med ett frågetecken."
        ],
        "answer": 0,
        "explanation": "I oinledda konditionalsatser står det finita verbet på första plats (V1), motsvarande svenskans 'Skulle det regna, ställer vi in'.",
        "feedback": [
          "Korrekt! V1-position utan subjunktion är det klassiska konditionala mönstret.",
          "Fel. Verbet får inte stå sist utan subjunktion.",
          "Fel. Verbet är i indikativ eller Konjunktiv II, inte imperativ.",
          "Fel. Påståendet avslutas med punkt om inte hela meningen är en fråga."
        ]
      },
      {
        "id": "x056-q3",
        "context": "Syntaktisk särställning hos es sei denn.",
        "prompt": "Vilken ordföljd gäller efter *es sei denn* när det används utan *dass*?",
        "options": [
          "Normal huvudsatsordföljd (V2) med subjektet före det finita verbet: *es sei denn, er kommt nicht*.",
          "Bisatsordföljd (VL) med verbet sist: *es sei denn, er nicht kommt*.",
          "Obligatorisk inversion med verbet först: *es sei denn, kommt er nicht*.",
          "Infinitiv med zu."
        ],
        "answer": 0,
        "explanation": "Es sei denn utan dass fungerar som en koordinerande markör och behåller normal huvudsatsordföljd (V2).",
        "feedback": [
          "Helt rätt! Es sei denn utan dass har huvudsatsordföljd V2.",
          "Fel. Bisatsordföljd förekommer endast om 'dass' läggs till.",
          "Fel. Inversion krävs inte här.",
          "Fel. Ingen infinitiv bildas."
        ]
      },
      {
        "id": "x056-q4",
        "context": "Skalära irrelevansvillkor.",
        "prompt": "Vad innebär ett irrelevansvillkor med *selbst wenn*?",
        "options": [
          "Det anger ett extremt skalärt villkor vars uppfyllande inte förändrar huvudsatsens utfall (utgången förblir densamma).",
          "Det bevisar att villkoret redan har inträffat i historien.",
          "Det förbjuder användning av Konjunktiv II.",
          "Det förvandlar huvudsatsen till en retorisk fråga."
        ],
        "answer": 0,
        "explanation": "Irrelevansvillkor (Konzessivkonditionale) visar att även under de mest extrema omständigheter förblir huvudsatsens giltighet oförändrad.",
        "feedback": [
          "Korrekt! Villkoret avfärdas som irrelevant för utfallet.",
          "Fel. Satsen är hypotetisk, inte en historisk fakticitet.",
          "Fel. Konjunktiv II används mycket ofta i dessa konstruktioner.",
          "Fel. Huvudsatsen kan vara ett vanligt påstående."
        ]
      },
      {
        "id": "x056-q5",
        "context": "Pragmatiska relevansvillkor.",
        "prompt": "Vad kännetecknar ett så kallat relevansvillkor (*Relevanzkonditionale*) som *\\"Wenn du Durst hast, im Kühlschrank steht Bier\\"*?",
        "options": [
          "Villkoret styr inte huvudsatsens sanning (ölen står där oavsett), utan motiverar yttrandets relevans för lyssnaren.",
          "Det är ett grovt grammatiskt fel som inte förekommer i naturligt språk.",
          "Det betyder att ölen skapas i samma stund som personen blir törstig.",
          "Det kräver att verbet 'stehen' böjs i Konjunktiv I."
        ],
        "answer": 0,
        "explanation": "Relevansvillkor villkorar talhandlingen: informationen är relevant om villkoret uppfylls, men faktumet i huvudsatsen är ovillkorligt sant.",
        "feedback": [
          "Korrekt! Relevansvillkoret modifierar talhandlingens relevans, inte sakförhållandets existens.",
          "Fel. Detta är ett erkänt och mycket frekvent pragmatiskt fenomen i lingvistiken.",
          "Fel. Detta vore en absurd fysisk tolkning.",
          "Fel. Indikativ används i båda satserna."
        ]
      },
      {
        "id": "x056-q6",
        "context": "Interferensfälla: wenn kontra ob.",
        "prompt": "Varför är meningen *\\"Ich frage mich, wenn er den Zug erreicht\\" felaktig i standardtyska?",
        "options": [
          "Eftersom indirekta ja/nej-frågor och ovisshet måste inledas med 'ob', inte 'wenn' (svenskans 'om' har två olika tyska motsvarigheter).",
          "Eftersom 'fragen' endast kan styra dativ.",
          "Eftersom meningen saknar ett modalt hjälpverb.",
          "Eftersom 'Zug' är ett neutralt substantiv."
        ],
        "answer": 0,
        "explanation": "Vid indirekta frågor och osäkerhet kräver tyskan ob. Wenn betyder 'om/när' i villkors- eller tidsbetydelse och är felaktigt här.",
        "feedback": [
          "Korrekt! Svenskans 'om' motsvaras vid osäkerhet av ob, inte wenn.",
          "Fel. Sich fragen tar en bisats som komplement.",
          "Fel. Inget hjälpverb är obligatoriskt.",
          "Fel. Zug är maskulint (der Zug)."
        ]
      }
    ]
  },
  '/docs/fordjupning/satstyper/kausala-koncessiva-och-adversativa-relationer': {
    "lessonId": "X057",
    "href": "/docs/fordjupning/satstyper/kausala-koncessiva-och-adversativa-relationer",
    "title": "Snabbkoll: Kausala, koncessiva och adversativa relationer",
    "questions": [
      {
        "id": "x057-q1",
        "context": "Informationsstatus hos weil kontra da.",
        "prompt": "Vilken informationsstrukturell skillnad finns i standardtyska mellan subjunktionerna *weil* och *da*?",
        "options": [
          "weil presenterar typiskt ny och fokuserad information (rhema) och svarar på 'Warum?', medan da introducerar redan känd eller förutsatt bakgrundsinformation (thema).",
          "weil kan aldrig stå efter huvudsatsen.",
          "da styr huvudsatsordföljd (V2) medan weil styr bisatsordföljd (VL).",
          "da används uteslutande om tidsperioder i dåtid."
        ],
        "answer": 0,
        "explanation": "Da presenterar etablerad information och inleder därför oftast förfältet ('Da es regnete...'), medan weil bär ny fokusorsak.",
        "feedback": [
          "Korrekt! Weil = ny fokusinformation; da = känd förutsättning/bakgrund.",
          "Fel. Weil står tvärtom allra oftast i efterfältet efter huvudsatsen.",
          "Fel. Båda är underordnande subjunktioner som styr VL-ordföljd.",
          "Fel. Da är en kausal subjunktion och inte begränsad till förfluten tid."
        ]
      },
      {
        "id": "x057-q2",
        "context": "Syntaktisk klass hos denn.",
        "prompt": "Hur skiljer sig *denn* syntaktiskt från *weil*?",
        "options": [
          "denn är en samordnande konjunktion på position 0 som följs av rak huvudsatsordföljd (V2), medan weil är en subjunktion som kräver verbet sist (VL).",
          "denn kräver alltid Konjunktiv II.",
          "denn kan inleda en mening före huvudsatsen.",
          "denn styr genitivobjekt."
        ],
        "answer": 0,
        "explanation": "Denn intar position 0 mellan två huvudsatser och förändrar inte ordföljden: 'denn [pos 0] er [subjekt] hat [V2] keine Zeit'.",
        "feedback": [
          "Korrekt! Denn är koordinerande (pos 0 + V2), weil är subordinerande (VL).",
          "Fel. Denn styr normal indikativ.",
          "Fel. Denn kan aldrig stå i förfältet före den överordnade satsen.",
          "Fel. Denn är en konjunktion och har ingen kasusregim."
        ]
      },
      {
        "id": "x057-q3",
        "context": "Subjunktion kontra konjunktionaladverb.",
        "prompt": "Varför är meningen *\\"Trotzdem er krank war, ging er zur Arbeit\\" ett normfel i skriven standardtyska?",
        "options": [
          "Eftersom 'trotzdem' är ett adverb som kräver V2-huvudsats, inte en subjunktion; den korrekta bisatsinledaren är 'obwohl'.",
          "Eftersom verbet ging måste stå i perfekt.",
          "Eftersom zur Arbeit kräver ackusativ.",
          "Eftersom man inte får gå till jobbet när man är sjuk."
        ],
        "answer": 0,
        "explanation": "Trotzdem är ett konjunktionaladverb. Korrekt är: 'Obwohl er krank war, ging er...' ELLER 'Er war krank; trotzdem ging er...'.",
        "feedback": [
          "Korrekt! Subjunktionen är 'obwohl'; 'trotzdem' är ett adverb som intar förfältet i huvudsatsen.",
          "Fel. Preteritum ging är stilistiskt helt korrekt.",
          "Fel. Prepositionen zu styr alltid dativ (zur Arbeit).",
          "Fel. Detta rör grammatik, inte arbetsrätt."
        ]
      },
      {
        "id": "x057-q4",
        "context": "Oppositionen aber kontra sondern.",
        "prompt": "När är konjunktionen *sondern* strikt obligatorisk i stället för *aber*?",
        "options": [
          "Efter en negerad proposition när det första ledet avfärdas och ersätts helt av det andra ('inte A, utan snarare B').",
          "Alltid i början av en mening.",
          "När verbet står i passiv form.",
          "När två jakande påståenden binds samman."
        ],
        "answer": 0,
        "explanation": "Sondern kräver föregående negation och korrigerar det negerade påståendet: 'Er ist nicht faul, sondern fleißig'.",
        "feedback": [
          "Helt rätt! Negation + uteslutande korrigering kräver sondern.",
          "Fel. Sondern står i mitten mellan de två koordinerade leden.",
          "Fel. Diates spelar ingen roll för valet av sondern.",
          "Fel. Vid jakande satser används aber."
        ]
      },
      {
        "id": "x057-q5",
        "context": "Förstärkande orsak med zumal.",
        "prompt": "Vilken semantisk funktion har *zumal* i meningen \\"Wir sollten den Vorschlag annehmen, zumal er finanziell sehr attraktiv ist\\"?",
        "options": [
          "Den anger en förstärkande och särskilt vägande tilläggsorsak ('i synnerhet som', 'särskilt eftersom').",
          "Den uttrycker en tidsmässig motsättning ('medan däremot').",
          "Den anger ett oöverstigligt villkor.",
          "Den markerar att talaren tvivlar på påståendet."
        ],
        "answer": 0,
        "explanation": "Zumal introducerar ett extra argument som väger särskilt tungt för att stödja huvudsatsens proposition.",
        "feedback": [
          "Korrekt! Zumal introducerar en förstärkande och kumulativ orsak.",
          "Fel. Det har ingen adversativ innebörd.",
          "Fel. Det uttrycker kausalitet, inte konditionalitet.",
          "Fel. Talaren stödjer tvärtom påståendet med detta argument."
        ]
      },
      {
        "id": "x057-q6",
        "context": "Dubbelfunktion hos während.",
        "prompt": "Vilka två fundamentala funktioner har subjunktionen *während* i tysk grammatik?",
        "options": [
          "En temporal funktion (samtidighet: 'medan') och en adversativ funktion (kontrast: 'medan däremot').",
          "En kausal funktion (orsak) och en konsekutiv funktion (följd).",
          "En komparativ funktion (likhet) och en optativ funktion (önskan).",
          "En lokal funktion (plats) och en instrumental funktion (medel)."
        ],
        "answer": 0,
        "explanation": "Während kan antingen ange temporal samtidighet ('Während er schlief, las ich') eller adversativ kontrast ('Während A steigt, fällt B').",
        "feedback": [
          "Korrekt! Während fungerar både temporalt och adversativt med bisatsordföljd (VL).",
          "Fel. Det uttrycker varken orsak eller följd.",
          "Fel. Komparation uttrycks med als/wie.",
          "Fel. Det har ingen rumslig eller instrumental funktion."
        ]
      }
    ]
  },
  '/docs/fordjupning/satstyper/indirekta-fragor-och-inbaddade-utrop': {
    "lessonId": "X058",
    "href": "/docs/fordjupning/satstyper/indirekta-fragor-och-inbaddade-utrop",
    "title": "Snabbkoll: Indirekta frågor och inbäddade utrop",
    "questions": [
      {
        "id": "x058-q1",
        "context": "Semantisk distinktion: fråga kontra utrop.",
        "prompt": "Vad skiljer semantiskt ett inbäddat utrop (*Es ist erstaunlich, wie schnell das ging!*) från en indirekt fråga?",
        "options": [
          "Ett inbäddat utrop uttrycker inte en kunskapslucka, utan förmedlar häpnad eller beundran över en känd extrem grad eller kvalitet.",
          "Ett inbäddat utrop kräver att verbet står i imperativ.",
          "En indirekt fråga kan aldrig innehålla ordet 'wie'.",
          "Inbäddade utrop används enbart i juridiska lagtexter."
        ],
        "answer": 0,
        "explanation": "Inbäddade utrop är faktiva: sakförhållandet är sant och känt, och satsen förmedlar en emotionell reaktion på dess extrema mått.",
        "feedback": [
          "Korrekt! Utropet markerar affektiv reaktion på extrem grad, inte en kunskapslucka.",
          "Fel. Verbet står i finit form i slutposition (VL).",
          "Fel. Både frågor och utrop använder ofta frågeordet wie.",
          "Fel. Exklamativer är typiska för expressivt och narrativt språk."
        ]
      },
      {
        "id": "x058-q2",
        "context": "Indirekta ja/nej-frågor.",
        "prompt": "Vilken subjunktion är obligatorisk för att introducera en indirekt ja/nej-fråga på tyska?",
        "options": [
          "ob (med verbet i slutposition, VL).",
          "wenn.",
          "dass.",
          "wie ob."
        ],
        "answer": 0,
        "explanation": "Alla tyska indirekta ja/nej-frågor introduceras ovillkorligen av subjunktionen ob: 'Ich weiß nicht, ob er kommt'.",
        "feedback": [
          "Korrekt! 'ob' är den enda legitima subjunktionen för indirekta ja/nej-frågor.",
          "Fel. Att använda 'wenn' vid osäkerhet är en grov svensk interferens.",
          "Fel. 'dass' förmedlar ett fastslaget påstående, inte en öppen fråga.",
          "Fel. 'wie ob' existerar inte på tyska."
        ]
      },
      {
        "id": "x058-q3",
        "context": "Spärr mot frågeordsinfinitiver.",
        "prompt": "Hur översätts den engelska strukturen *\\"I don't know what to do\\"* korrekt till standardtyska?",
        "options": [
          "Ich weiß nicht, was ich tun soll. (Finit bisats med modalt verb är obligatorisk).",
          "Ich weiß nicht, was zu tun. (Frågeordsinfinitiv är fullt acceptabel).",
          "Ich weiß nicht, was um zu tun.",
          "Ich weiß nicht was tuend."
        ],
        "answer": 0,
        "explanation": "Tyska språket saknar frågeordsinfinitiver helt; man måste använda en fullständig bisats med ett modalt hjälpverb (oftast sollen).",
        "feedback": [
          "Korrekt! Tyskan kräver alltid en finit bisats här: 'was ich tun soll'.",
          "Fel. 'was zu tun' är ett ogrammatiskt anglicistiskt fel på tyska.",
          "Fel. Denna hybridform är helt ogrammatisk.",
          "Fel. Presens particip kan inte användas som objekt här."
        ]
      },
      {
        "id": "x058-q4",
        "context": "Interpunktion vid indirekta frågor.",
        "prompt": "Vilket skiljetecken ska avsluta meningen \\"Der Dozent fragte, wer die Aufgaben schon gelöst habe\\"?",
        "options": [
          "Punkt (.), eftersom den överordnade matrissatsen är ett deklarativt påstående.",
          "Frågetecken (?), eftersom bisatsen återger en fråga.",
          "Utropstecken (!).",
          "Semikolon (;)."
        ],
        "answer": 0,
        "explanation": "Slutskiljetecknet styrs av matrissatsens övergripande satsform; är matrissatsen ett påstående sätts punkt, oavsett att bisatsen är en indirekt fråga.",
        "feedback": [
          "Helt rätt! Huvudsatsens påståendeform kräver punkt.",
          "Fel. Frågetecken sätts endast om huvudsatsen i sig är en fråga ('Weißt du, wer...?').",
          "Fel. Inget utrop föreligger här.",
          "Fel. Meningar avslutas inte med semikolon."
        ]
      },
      {
        "id": "x058-q5",
        "context": "Exklamativa matrisverb.",
        "prompt": "Vilket av följande predikat selekterar typiskt ett inbäddat utrop och kan INTE ta en ja/nej-fråga med *ob*?",
        "options": [
          "Es ist bewundernswert (Det är beundransvärt).",
          "Ich frage mich (Jag undrar).",
          "Es ist völlig unklar (Det är helt oklart).",
          "Niemand weiß (Ingen vet)."
        ],
        "answer": 0,
        "explanation": "Affektiva och värderande predikat som 'bewundernswert' förutsätter att sakförhållandet är sant och fokuserar på den beundransvärda graden (utrop).",
        "feedback": [
          "Korrekt! Bewundernswert förutsätter sanning och selekterar utrop (wie schön/wie schnell).",
          "Fel. Sich fragen selekterar uteslutande interrogativa satser (ob/w-).",
          "Fel. Unklar sein selekterar interrogativa frågor.",
          "Fel. Wissen selekterar gärna ob-frågor."
        ]
      },
      {
        "id": "x058-q6",
        "context": "Komplexa frågefraser.",
        "prompt": "Hur placeras en prepositionsfras med frågeord i en indirekt fråga som *\\"Er erkundigte sich, ... (med vem han skulle tala)\\"*?",
        "options": [
          "Prepositionen och frågeordet bildar tillsammans bisatsens inledare: *mit wem er sprechen sollte*.",
          "Prepositionen placeras sist i bisatsen: *wem er sprechen sollte mit*.",
          "Frågeordet utelämnas: *mit er sprechen sollte*.",
          "Verbet måste stå omedelbart efter mit wem: *mit wem sollte er sprechen*."
        ],
        "answer": 0,
        "explanation": "I tyskan flyttas hela prepositionsfrasen med frågeordet (pied-piping: mit wem) till bisatsens förfältsplats; verbet står strikt sist (VL).",
        "feedback": [
          "Korrekt! Prepositionsfrasen står samlad i bisatsinledningen och verbet står sist.",
          "Fel. Prepositionsstranding ('mit' sist) är ogrammatiskt i tysk standardnorm.",
          "Fel. Frågeordet wem är obligatoriskt komplement till mit.",
          "Fel. Verbet får inte stå direkt efter mit wem i en underordnad bisats (det vore V2)."
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

const updatedContent = content.slice(0, lastClosingIndex) + group4eQuizzes + content.slice(lastClosingIndex);
fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log("Successfully appended Group 4E quizzes to data/learning-quizzes.ts");
