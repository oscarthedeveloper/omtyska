import fs from 'fs';

const filePath = '/Users/oscarpagerup/Desktop/Git Repo/Om-Tyska/data/learning-quizzes.ts';
let content = fs.readFileSync(filePath, 'utf8');

const group6aQuizzes = `  '/docs/fordjupning/verb-och-valens/dubbelperfekt-och-regionala-tempussystem': {
    "lessonId": "X037",
    "href": "/docs/fordjupning/verb-och-valens/dubbelperfekt-och-regionala-tempussystem",
    "title": "Snabbkoll: Dubbelperfekt och regionala tempussystem",
    "questions": [
      {
        "id": "x037-q1",
        "context": "Strukturell bildning av dubbelperfekt.",
        "prompt": "Hur bildas ett typiskt dubbelperfekt (Doppelperfekt) i tyskan?",
        "options": [
          "Med böjt hjälpverb haben/sein i presens + huvudverbets perfektparticip + participet gehabt eller gewesen.",
          "Med två finita verb i presens bredvid varandra.",
          "Med konjunktiv II + infinitiv.",
          "Med hjälpverbet werden + supinum."
        ],
        "answer": 0,
        "explanation": "Dubbelperfekt fogar ytterligare ett particip (gehabt/gewesen) till den ordinarie perfektstrukturen, t.ex. 'ich habe gesagt gehabt'.",
        "feedback": [
          "Korrekt! Böjt presenshjälpverb + huvudverbets particip + gehabt/gewesen.",
          "Fel. Två finita verb kan inte bilda en sådan analytisk verbkedja.",
          "Fel. Konjunktiv II bildar konditionalis eller hypotetiska satser.",
          "Fel. Werden bildar futurum eller passiv."
        ]
      },
      {
        "id": "x037-q2",
        "context": "Präteritumschwund i södra språkområdet.",
        "prompt": "Vad innebär fenomenet 'oberdeutscher Präteritumschwund' för verbets temporala system?",
        "options": [
          "Att det enkla preteritum har försvunnit i talspråket och ersatts av perfekt i södra Tyskland, Österrike och Schweiz.",
          "Att perfekt har försvunnit och bara preteritum används.",
          "Att verbböjningen i presens helt slutat existera.",
          "Att alla oregelbundna verb blivit svaga i söder."
        ],
        "answer": 0,
        "explanation": "Präteritumschwund ledde till att södra dialekter och talspråk nästan helt saknar enkelt preteritum och istället använder perfekt genomgående.",
        "feedback": [
          "Korrekt! Preteritum föll bort i talspråket till förmån för perfekt i Oberdeutsch.",
          "Fel. Det var preteritum som försvann, inte perfekt.",
          "Fel. Presens är fullt bevarat och intakt.",
          "Fel. Stammorfologin kvarstår men uttrycks i perfektparticip."
        ]
      },
      {
        "id": "x037-q3",
        "context": "Semantisk funktion hos dubbelperfekt.",
        "prompt": "Vilken pragmatisk eller aspektuell funktion fyller dubbelperfekt när det används i berättande kontext?",
        "options": [
          "Att markera att ett tillstånd eller en händelse är definitivt avslutad och inte längre giltig i nutid (ultraperfekt).",
          "Att uttrycka ren framtid (futurumperspektiv).",
          "Att signalera artig begäran i formell konversation.",
          "Att markera indirekt anföring i nyhetssändningar."
        ],
        "answer": 0,
        "explanation": "Dubbelperfekt signalerar ofta att ett tillstånd gällde då men brutits eller ersatts innan referenstidpunkten (antiresulterande effekt).",
        "feedback": [
          "Korrekt! Det markerar en händelse som är definitivt förfluten och överspelad.",
          "Fel. Dubbelperfekt är ett dåtidstempus, inte framtid.",
          "Fel. Artighet uttrycks typiskt med konjunktiv II (würde, hätte, könnte).",
          "Fel. Indirekt anföring i nyheter använder konjunktiv I."
        ]
      },
      {
        "id": "x037-q4",
        "context": "Hjälpverbsval vid dubbelperfekt.",
        "prompt": "Vilken form är korrekt bildad med rörelseverb som *gehen* i ett sydtyskt dubbelperfekt?",
        "options": [
          "er ist gegangen gewesen",
          "er hat gegangen gehabt",
          "er ist gegangen gehabt",
          "er hat gegangen gewesen"
        ],
        "answer": 0,
        "explanation": "Hjälpverbet sein kräver att även tilläggsparticipet harmonierar med sein, alltså 'ist gegangen gewesen'.",
        "feedback": [
          "Korrekt! Gehen styr sein, varför participet till hjälpverbet blir gewesen.",
          "Fel. Gehen kräver sein som hjälpverb, inte haben.",
          "Fel. Man kan inte blanda ist med gehabt i samma dubbelperfekt.",
          "Fel. Både hat och gewesen strider mot harmoniregeln."
        ]
      },
      {
        "id": "x037-q5",
        "context": "Standardtysk norm och stilistik.",
        "prompt": "Hur betraktas dubbelperfekt i strikt tysk skriftspråksnorm och akademisk text?",
        "options": [
          "Det räknas som icke-standardiserat och undviks i formell skrift till förmån för pluskvamperfekt eller preteritum.",
          "Det är det obligatoriska tempuset i alla vetenskapliga uppsatser.",
          "Det anses vara den mest eleganta Hochdeutsch-konstruktionen som finns.",
          "Det är strikt förbjudet i grundlagen att skriva."
        ],
        "answer": 0,
        "explanation": "Duden och officiell norm betraktar dubbelperfekt som talspråkligt och regionalt; i formell skrift används pluskvamperfekt.",
        "feedback": [
          "Korrekt! Formell skriftnorm kräver pluskvamperfekt framför dubbelperfekt.",
          "Fel. Akademisk text undviker talspråkligt dubbelperfekt.",
          "Fel. Det bär en vardaglig eller regional prägel i skrift.",
          "Fel. Grundlagen reglerar inte tempusval i grammatisk stilistik."
        ]
      },
      {
        "id": "x037-q6",
        "context": "Dubbelpluskvamperfekt.",
        "prompt": "Vad menas med termen 'Doppelplusquamperfekt' (*hatte gemacht gehabt*)?",
        "options": [
          "Ett analytiskt tempus där hjälpverbet står i preteritum (hatte/war) kombinerat med två particip.",
          "Ett tempus som bara kan användas på söndagar.",
          "Ett dubbelt futurum med två former av werden.",
          "Ett verb med två olika prefix som upprepas."
        ],
        "answer": 0,
        "explanation": "Doppelplusquamperfekt kombinerar preteritum av hjälpverbet (hatte/war) med dubbla particip (gehabt/gewesen).",
        "feedback": [
          "Korrekt! Preteritalt hjälpverb (hatte/war) + particip + gehabt/gewesen.",
          "Fel. Veckodagar har ingen betydelse för tempuskategorin.",
          "Fel. Doppelplusquamperfekt gäller dåtid, inte futurum.",
          "Fel. Konstruktionen avser verbformer, inte prefixdubblering."
        ]
      }
    ]
  },
  '/docs/fordjupning/text-och-samtal/textbindning-och-referenskedjor': {
    "lessonId": "X068",
    "href": "/docs/fordjupning/text-och-samtal/textbindning-och-referenskedjor",
    "title": "Snabbkoll: Textbindning och referenskedjor",
    "questions": [
      {
        "id": "x068-q1",
        "context": "Textkohesion och koherens.",
        "prompt": "Vad skiljer grammatisk kohesion från pragmatisk koherens i en tysk text?",
        "options": [
          "Kohesion avser de språkliga, formella sammanbindningsmedlen i textytan; koherens avser det djupare tematiska och logiska meningssammanhanget.",
          "Kohesion rör enbart skiljetecken, medan koherens rör ordförråd.",
          "Kohesion finns bara i talspråk, medan koherens finns bara i skrift.",
          "Det är exakta synonymer utan någon teoretisk skillnad."
        ],
        "answer": 0,
        "explanation": "Kohesion handlar om ytspråkliga markörer (pronomen, konnektorer); koherens handlar om tolkarens förståelse av logisk kontinuitet.",
        "feedback": [
          "Korrekt! Ytkohesion (grammatiska länkar) kontra djupkoherens (logisk innebörd).",
          "Fel. Kohesion omfattar pronomen, pro-former, konnektorer och tempus.",
          "Fel. Båda begreppen gäller både skriftliga och muntliga texter.",
          "Fel. Textlingvistiken upprätthåller en grundläggande distinktion mellan dem."
        ]
      },
      {
        "id": "x068-q2",
        "context": "Referenskedjor med hyperonymer.",
        "prompt": "Hur bidrar användningen av hyperonymer (överordnade begrepp) till en texts stil och variation?",
        "options": [
          "De gör att skribenten kan återknyta till samma referent utan monoton upprepning av samma substantiv.",
          "De gör texten omöjlig att förstå för läsaren.",
          "De ändrar meningsbyggnaden från V2 till bisatsordföljd.",
          "De förvandlar verbet till ett adjektiv."
        ],
        "answer": 0,
        "explanation": "Genom att ersätta t.ex. 'der Mercedes' med 'das Fahrzeug' eller 'der Wagen' skapas variation i referenskedjan.",
        "feedback": [
          "Korrekt! Hyperonymer och synonymer ger omväxlande och koherent återreferens.",
          "Fel. Korrekt valda hyperonymer underlättar tvärtom läsförståelsen.",
          "Fel. Hyperonymer är lexikala substantiv och påverkar inte ordföljdstyp.",
          "Fel. De förblir nominala entiteter."
        ]
      },
      {
        "id": "x068-q3",
        "context": "Pronominalisering och genus.",
        "prompt": "Vad måste en svensktalande skribent tänka på vid anaforisk pronominalisering av neutrumsubstantiv som *das Mädchen* i formell tysk text?",
        "options": [
          "Att det grammatiska pronomenet *es* föredras i strikt skrift, även om referenten är en biologisk flicka.",
          "Att det alltid måste heta *sie* i alla grammatiska sammanhang utan undantag.",
          "Att neutrumsubstantiv inte kan ersättas med pronomen.",
          "Att man måste använda det maskulina *er*."
        ],
        "answer": 0,
        "explanation": "Tyskans formella skriftspråk kräver grammatisk kongruens (das Mädchen -> es), medan talspråk ibland glider över i semantisk kongruens (sie).",
        "feedback": [
          "Korrekt! Grammatisk genus-kongruens (das Mädchen -> es) dominerar i formell text.",
          "Fel. Strikt skriftspråk föreskriver grammatisk kongruens med 'es'.",
          "Fel. Neutrumsubstantiv kan självklart pronominaliseras.",
          "Fel. 'er' vore helt grammatiskt felaktigt."
        ]
      },
      {
        "id": "x068-q4",
        "context": "Adverbiella konnektorer och ordföljd.",
        "prompt": "Vilken ordföljdseffekt har den koncessiva konnektorn *trotzdem* när den placeras i förfältet i huvudsatsen?",
        "options": [
          "Den fungerar som en satsdel i förfältet och kräver omedelbar inversion (verb på position 2).",
          "Den kräver att verbet placeras allra sist i satsen.",
          "Den har position 0 och påverkar inte ordföljden alls.",
          "Den kräver att subjektet utelämnas helt."
        ],
        "answer": 0,
        "explanation": "Trotzdem är ett konjunktionaladverb i förfältet och följs därför direkt av det finita verbet (Trotzdem kam er pünktlich).",
        "feedback": [
          "Korrekt! Konjunktionaladverb i förfältet intar position 1 och ger V2-inversion.",
          "Fel. Slutställt verb gäller bisatser med underordnande konjunktioner som obwohl.",
          "Fel. Position 0 har samordnande konjunktioner som aber, und, oder.",
          "Fel. Subjektet måste sättas ut i mittfältet."
        ]
      },
      {
        "id": "x068-q5",
        "context": "Pro-former och pronominaladverb.",
        "prompt": "Vilken funktion fyller pronominaladverb som *darüber, deswegen, hierzu* i textbindningen?",
        "options": [
          "De fungerar som effektiva pro-former som kan referera tillbaka till hela satser, sakförhållanden eller prepositionsfraser.",
          "De kan enbart referera till levande personer.",
          "De används enbart för att skapa allitteration i dikter.",
          "De gör att meningen saknar predikat."
        ],
        "answer": 0,
        "explanation": "Pronominaladverb (da-föreningar) är centrala verktyg för att referera till abstrakta propositioner eller icke-personliga referenter.",
        "feedback": [
          "Korrekt! De komprimerar satssammanhang och refererar bakåt till sakförhållanden.",
          "Fel. För personer krävs preposition + pronomen (über ihn, an sie).",
          "Fel. De är vanliga i all prosa, särskilt sakprosa och vetenskaplig text.",
          "Fel. De påverkar inte förekomsten av predikat."
        ]
      },
      {
        "id": "x068-q6",
        "context": "Textuell ellips.",
        "prompt": "Vad är ett exempel på legitim textuell koordinationell ellips i en tysk samordnad mening?",
        "options": [
          "Utelämnande av identiskt subjekt i den andra samordnade satsen (t.ex. 'Er kam nach Hause und [er] kochte Kaffee').",
          "Utelämnande av alla verb i texten.",
          "Utelämnande av versaler i början av meningar.",
          "Att ta bort alla prepositioner i en hel paragraf."
        ],
        "answer": 0,
        "explanation": "Vid samordning med 'und' eller 'oder' stryks ofta identiska subjekt eller hjälpverb för att skapa tätare kohesion.",
        "feedback": [
          "Korrekt! Samordnad subjektsellips är ett vanligt kohesivt stilgrepp.",
          "Fel. En mening utan verb bryter mot tyska basregler.",
          "Fel. Versaler är ortografiska regler, inte syntaktisk ellips.",
          "Fel. Prepositioner krävs för kasuskongruens och relationer."
        ]
      }
    ]
  },
  '/docs/fordjupning/text-och-samtal/informationsstruktur-i-langre-texter': {
    "lessonId": "X069",
    "href": "/docs/fordjupning/text-och-samtal/informationsstruktur-i-langre-texter",
    "title": "Snabbkoll: Informationsstruktur i längre texter",
    "questions": [
      {
        "id": "x069-q1",
        "context": "Temaprogressionstyper.",
        "prompt": "Vad innebär en 'linjär tematisk progression' (auch: thematische Progression mit linearem Rhema) i en tysk text?",
        "options": [
          "Att remat (den nya informationen) i föregående sats plockas upp som tema (känd utgångspunkt) i den efterföljande satsen.",
          "Att samma subjekt upprepas som tema i varje mening rakt igenom texten.",
          "Att meningarna skrivs i strikt alfabetisk ordning.",
          "Att alla meningar måste ha samma antal stavelser."
        ],
        "answer": 0,
        "explanation": "I linjär progression blir sats 1:s rema till sats 2:s tema: T1 -> R1; T2(=R1) -> R2.",
        "feedback": [
          "Korrekt! R1 blir T2, vilket skapar en dynamisk röd tråd framåt.",
          "Fel. Det kallas kontinuerlig progression (Progression mit durchlaufendem Thema).",
          "Fel. Alfabetisk ordning har ingenting med informationsstruktur att göra.",
          "Fel. Längd på meningar regleras inte av progressionsteori."
        ]
      },
      {
        "id": "x069-q2",
        "context": "Kluvet tema (abgeleitetes Thema).",
        "prompt": "Vad kännetecknar en progression med kluvet eller härlett tema (*abgeleitetes Thema*)?",
        "options": [
          "Ett överordnat hypertema introduceras i början, och efterföljande satser belyser olika delar eller aspekter av detta tema.",
          "Varje mening handlar om två helt orelaterade ämnen som ställs i konflikt.",
          "Texten saknar helt grammatiska verb.",
          "Skribenten ändrar språk mitt i stycket."
        ],
        "answer": 0,
        "explanation": "Ett generellt ämne (hypertema) som 'vårt hus' fördelas i delfasetter: 'Taket... Vardagsrummet... Trädgården...'.",
        "feedback": [
          "Korrekt! Ett överordnat tema delas upp i delkomponenter (del-helhet).",
          "Fel. Progression med kluvet tema bygger på stark inbördes koherens under ett hypertema.",
          "Fel. Satserna har fullständiga verbstrukturer.",
          "Fel. Det handlar om struktur i tyska texter, inte språkväxling."
        ]
      },
      {
        "id": "x069-q3",
        "context": "Förfältsvariation och informationsflöde.",
        "prompt": "Varför är det stilistiskt problematiskt att ständigt placera subjektet i förfältet i längre tyska texter?",
        "options": [
          "Det ger en monoton rytm och misslyckas med att etablera tematiska broar via adverbial eller objekt mot föregående mening.",
          "Eftersom subjektet enligt tyska regler aldrig får stå i förfältet.",
          "Därför att kommatecken då blir förbjudna.",
          "Det gör att verbet tvingas till slutet av huvudsatsen."
        ],
        "answer": 0,
        "explanation": "Att variera förfältet med konnektiva adverbial, tidsbestämningar eller objekt skapar naturligare textflyt och framhäver informationsfokus.",
        "feedback": [
          "Korrekt! Monotont förfält hämmar textens dynamik och kohesion.",
          "Fel. Subjektet står mycket ofta i förfältet, men inte obligatoriskt i alla satser.",
          "Fel. Kommaregler påverkas inte på det viset.",
          "Fel. Verbet i huvudsatsen står alltid på position 2 oavsett vad som står i förfältet."
        ]
      },
      {
        "id": "x069-q4",
        "context": "Passivkonstruktionens textuella funktion.",
        "prompt": "Vilken är den främsta textuella funktionen med att använda passiv i tysk sakprosa?",
        "options": [
          "Att flytta patienten/objektet till förfältet som bekant tema, medan den okända eller irrelevanta agenten tonas ned.",
          "Att fördubbla antalet ord i texten för att verka mer vetenskaplig.",
          "Att göra det omöjligt för läsaren att förstå handlingen.",
          "Att dölja alla felaktiga stavningar i texten."
        ],
        "answer": 0,
        "explanation": "Passiv är ett verktyg för informationsstyrning: det tillåter icke-agenter att fungera som grammatiskt subjekt och tema.",
        "feedback": [
          "Korrekt! Passiv styr tematisk struktur och nedtonar agenten.",
          "Fel. Textuell effektivitet handlar inte om artificiell ordutfyllnad.",
          "Fel. Rätt använd skapar passiv klar och saklig temafokusering.",
          "Fel. Passiv har ingen inverkan på stavning."
        ]
      },
      {
        "id": "x069-q5",
        "context": "Nominalstil kontra verbalstil.",
        "prompt": "Vad karaktäriserar överdriven 'Nominalstil' i tysk fackprosa ur informationsstrukturell synvinkel?",
        "options": [
          "Hög informationspackning med komplexa substantivavledningar och genitivattribut som kan göra läsningen tung och abstrakt.",
          "Att alla substantiv byts ut mot verb.",
          "Att texten blir helt fri från alla böjningsformer.",
          "Att satsen saknar förfält och efterfält."
        ],
        "answer": 0,
        "explanation": "Nominalstil komprimerar propositioner till substantiv (Zur Durchführung der Maßnahmen) på bekostnad av verbal dynamik.",
        "feedback": [
          "Korrekt! Hög informationstäthet men risk för överabstraktion och svårlästhet.",
          "Fel. Det är definitionen av verbalstil, inte nominalstil.",
          "Fel. Nominalstil kräver komplicerad kasus- och attributböjning.",
          "Fel. Fältstrukturen bibehålls i nominalstil."
        ]
      },
      {
        "id": "x069-q6",
        "context": "Realisering av slutvikt (Endgewicht).",
        "prompt": "Vad föreskriver principen om 'slutvikt' (*Prinzip des Endgewichts*) för placering av information i den tyska satsen?",
        "options": [
          "Tyngre, mer komplext eller informationsmässigt nytt material placeras företrädesvis sent i satsen (i mittfältets slut eller i efterfältet).",
          "Den kortaste satsdelen måste alltid stå allra sist i texten.",
          "Det finita verbet måste alltid placeras i satsens slut i alla satstyper.",
          "Punktuationen måste göras extra fetstilt."
        ],
        "answer": 0,
        "explanation": "I enlighet med tema-rema-principen och slutviktsprincipen placeras komplex och informativt ny substans mot satsens slut.",
        "feedback": [
          "Korrekt! Känd och lätt information tidigt, ny och tung information sent i satsen.",
          "Fel. Tvärtom tenderar korta och lätta led att stå tidigt i mittfältet (Wackernagels lag).",
          "Fel. Finit verb står i slutet endast i bisatser.",
          "Fel. Slutvikt är en syntaktisk-informationsstrukturell princip, inte typografi."
        ]
      }
    ]
  },
  '/docs/fordjupning/text-och-samtal/talad-grammatik-och-samtalsenheter': {
    "lessonId": "X070",
    "href": "/docs/fordjupning/text-och-samtal/talad-grammatik-och-samtalsenheter",
    "title": "Snabbkoll: Talad grammatik och samtalsenheter",
    "questions": [
      {
        "id": "x070-q1",
        "context": "Samtalsanalys och turenheter (TCUs).",
        "prompt": "Vad är en 'Turn-Constructional Unit' (TCU) inom interaktionell lingvistik för talad tyska?",
        "options": [
          "En samtalsenhet (syntaktisk, prosodisk och pragmatisk) efter vilken talarbyte potentiellt kan ske (Transition Relevance Place).",
          "Ett obligatoriskt grammatiskt fel som alla talare gör.",
          "En maskinell översättningsenhet i tysk mjukvara.",
          "En speciell sorts preposition som bara finns i tal."
        ],
        "answer": 0,
        "explanation": "En TCU är en fullbordad kommunikativ enhet där lyssnaren kan projicera turskifte (TRP).",
        "feedback": [
          "Korrekt! En TCU avgränsas syntaktiskt, prosodiskt och pragmatiskt.",
          "Fel. Det är en normal strukturenhet i naturligt samtal, inte ett fel.",
          "Fel. Begreppet härstammar från konversationsanalys (Sacks, Schegloff, Jefferson).",
          "Fel. Det är inte en ordklass utan en samtalsenhet."
        ]
      },
      {
        "id": "x070-q2",
        "context": "Högerdislokering och eftertanke.",
        "prompt": "Vad kännetecknar en högerdislokering (*Rechtsversetzung*) i talad tyska som i: \\"Der ist total nett, der neue Nachbar\\"? ",
        "options": [
          "Ett nominalt led placeras i efterfältet efter satsramen som en precisering av ett pronomen som redan satts i satskärnan.",
          "Ett verb flyttas till framför förfältet.",
          "Subjektet stryks helt och ersätts med ett frågetecken.",
          "Meningen sägs baklänges för komisk effekt."
        ],
        "answer": 0,
        "explanation": "Högerdislokering (Rechtsversetzung) är en typisk muntlig eftertanke där referenten specificeras i efterfältet.",
        "feedback": [
          "Korrekt! Pronomenet i kärnan preciseras av en efterställd nominalfras i efterfältet.",
          "Fel. Verbets placering i satsramen förblir oförändrad.",
          "Fel. Subjektet finns representerat både som pronomen och full fras.",
          "Fel. Det är en vanlig, regelbunden talspråkskonstruktion."
        ]
      },
      {
        "id": "x070-q3",
        "context": "Samtalsreparation (Repair).",
        "prompt": "Hur fungerar en typisk självkorrigering (*selbstinitiierte Selbstreparatur*) i talad tyska med markörer som *äh*, *also* eller *ich meine*?",
        "options": [
          "Talaren avbryter en pågående konstruktion och korrigerar direkt ordval eller böjning utan att samtalet kollapsar.",
          "Talaren måste lämna rummet och be om ursäkt.",
          "Talaren anmäler sig till en grammatikkurs.",
          "Samtalet avslutas omedelbart av lyssnaren."
        ],
        "answer": 0,
        "explanation": "Selbstreparatur är en systematisk mekanism i spontant tal för att lösa förståelse- eller produktionsproblem.",
        "feedback": [
          "Korrekt! Talaren reparerar syntaktiska eller lexikala glidningar mitt i yttrandet.",
          "Fel. Självreparation är en normal och nödvändig interaktionell resurs.",
          "Fel. Det är en språklig universell mekanism som sker på millisekunder.",
          "Fel. Lyssnaren väntar vanligtvis ut reparationen."
        ]
      },
      {
        "id": "x070-q4",
        "context": "Hörarsignaler (Rückmeldesignale).",
        "prompt": "Vilken funktion fyller partiklar som *mhm, genau, ach so, ja* under en samtalspartners tur?",
        "options": [
          "De fungerar som 'backchannels' som signalerar uppmärksamhet, förståelse och uppmuntran att fortsätta utan att ta över turen.",
          "De signalerar att lyssnaren vill byta ämne omedelbart.",
          "De är formella protester mot talarens åsikt.",
          "De indikerar att man inte har hört vad som sagts."
        ],
        "answer": 0,
        "explanation": "Hörarsignaler (Hörersignale/Backchannels) upprätthåller kontakten och bekräftar att mottagaren följer med i projektionen.",
        "feedback": [
          "Korrekt! De visar aktivt lyssnande utan turövertagande.",
          "Fel. Ämnesbyte kräver initiativtagande turer.",
          "Fel. Protest kräver explicita invändningar som aber, nein.",
          "Fel. Hörarsignaler förutsätter att man hör och följer talet."
        ]
      },
      {
        "id": "x070-q5",
        "context": "Weil med V2 i talad tyska.",
        "prompt": "Vad är den lingvistiska förklaringen till att *weil* ofta följs av huvudsatsordföljd (V2) i spontant talspråk (t.ex. \\"weil ich hab keine Zeit\\")?",
        "options": [
          "Weil fungerar då som en pragmatisk diskursmarkör eller koordinerande konnektor som motiverar själva påståendet snarare än anger ren orsak.",
          "Det beror på ren slump och har ingen grammatisk logik.",
          "Det är ett lån från engelskan som introducerades förra året.",
          "Det är den enda ordföljd som godkänns av Duden i formell skrift."
        ],
        "answer": 0,
        "explanation": "Weil-V2 har etablerat sig i talspråk som en självständig förklaringsakt (epistemisk eller talkraftsbaserad motivering).",
        "feedback": [
          "Korrekt! Weil med V2 fungerar som en pragmatisk motiveringsmarkör i tal.",
          "Fel. Det uppvisar tydliga syntaktiska och pragmatiska mönster.",
          "Fel. Weil-V2 har dokumenterats sedan årtionden i tysk interaktionsforskning.",
          "Fel. I formell skrift gäller fortfarande strikt verbslut efter weil."
        ]
      },
      {
        "id": "x070-q6",
        "context": "Vänsterdislokering (Linksversetzung).",
        "prompt": "Hur konstrueras en vänsterdislokering (*Linksversetzung*) i talad tyska som i: \\"Diesen Mann, den kenne ich überhaupt nicht\\"? ",
        "options": [
          "Ett tematiskt led placeras före förfältet i 'Vor-Vorfeld' och återupptas direkt av ett resumerande pronomen i förfältet.",
          "Verbet placeras före subjektet i slutet av meningen.",
          "Ackusativobjektet tas bort helt.",
          "Satsen avslutas med ett utropstecken mitt i ordet."
        ],
        "answer": 0,
        "explanation": "Linksversetzung etablerar ett tema utanför satskärnan som därefter återkopplas med ett resumerande pronomen (den/der).",
        "feedback": [
          "Korrekt! Placering i Vor-Vorfeld med resumerande d-pronomen i förfältet.",
          "Fel. Verbet behåller sin position 2 i satskärnan.",
          "Fel. Objektet är representerat både utanför och inuti kärnan.",
          "Fel. Teckensnitt och interpunktion har inte med konstruktionen att göra."
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

const updatedContent = content.slice(0, lastClosingIndex) + group6aQuizzes + content.slice(lastClosingIndex);
fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log("Successfully appended Group 6A quizzes to data/learning-quizzes.ts");
