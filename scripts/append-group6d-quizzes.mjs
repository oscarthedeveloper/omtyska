import fs from 'fs';

const filePath = '/Users/oscarpagerup/Desktop/Git Repo/Om-Tyska/data/learning-quizzes.ts';
let content = fs.readFileSync(filePath, 'utf8');

const group6dQuizzes = `  '/docs/fordjupning/ortografi/komma-vid-komplexa-infinitivgrupper': {
    "lessonId": "X079",
    "href": "/docs/fordjupning/ortografi/komma-vid-komplexa-infinitivgrupper",
    "title": "Snabbkoll: Komma vid komplexa infinitivgrupper",
    "questions": [
      {
        "id": "x079-q1",
        "context": "Obligatoriskt komma enligt § 75 [1].",
        "prompt": "I vilket av följande fall är kommatecken OBLIGATORISKT vid en infinitivgrupp?",
        "options": [
          "När den inleds med konjunktionerna um, ohne, statt, anstatt, außer eller als.",
          "När infinitiven består av ett enda verb utan några komplement.",
          "När meningen är skriven på bayerska.",
          "När infinitivgruppen står i presens."
        ],
        "answer": 0,
        "explanation": "§ 75 [1] föreskriver obligatoriskt komma vid inledande ord som um, ohne, statt, anstatt, außer, als.",
        "feedback": [
          "Korrekt! Signalorden um, ohne, statt etc. kräver alltid komma före infinitiven.",
          "Fel. Enkla infinitiver har fakultativt komma.",
          "Fel. Dialekt påverkar inte de amtliga rättskrivningsreglerna.",
          "Fel. Tempus har ingen inverkan på kommaplikten här."
        ]
      },
      {
        "id": "x079-q2",
        "context": "Korrelat och hänvisningsord (§ 75 [2]).",
        "prompt": "Varför måste meningen \\"Er dachte nicht daran, den Vertrag zu kündigen\\" ha komma?",
        "options": [
          "Eftersom infinitivgruppen är beroende av ett korrelat/hänvisningsord (daran) i den överordnade satsen.",
          "Därför att verbet kündigen slutar på -en.",
          "Eftersom inte får finnas mer än fem ord i rad utan komma.",
          "Därför att Vertrag är ett maskulint substantiv."
        ],
        "answer": 0,
        "explanation": "När ett korrelat (es, daran, darauf, dazu etc.) föregår eller pekar på infinitivgruppen är kommatecknet obligatoriskt.",
        "feedback": [
          "Korrekt! Korrelat som 'daran' utlöser obligatoriskt komma enligt § 75 [2].",
          "Fel. Alla tyska infinitiver slutar på -en eller -eln/-ern.",
          "Fel. Det finns ingen ordräkningsregel i tysk interpunktion.",
          "Fel. Substantivets genus påverkar inte kommareglerna."
        ]
      },
      {
        "id": "x079-q3",
        "context": "Substantivberoende infinitiv (§ 75 [3]).",
        "prompt": "Vilken regel gör att meningen \\"Sie hatte die Absicht, Medizin zu studieren\\" kräver kommatecken?",
        "options": [
          "Infinitivgruppen är knuten till ett substantiv (die Absicht) som attribut (§ 75 [3]).",
          "Det finns inget subjekt i huvudsatsen.",
          "Ordet Medizin kräver alltid kommatecken.",
          "Hjälpverbet hatte står i preteritum."
        ],
        "answer": 0,
        "explanation": "När en infinitivgrupp bestämmer ett substantiv (Absicht, Plan, Wunsch, Gelegenheit) är komma obligatoriskt.",
        "feedback": [
          "Korrekt! Substantivberoende infinitivgrupper kräver obligatoriskt komma.",
          "Fel. Subjektet är 'Sie'.",
          "Fel. Enskilda substantiv utlöser inte kommatecken.",
          "Fel. Preteritum kräver inte komma i sig självt."
        ]
      },
      {
        "id": "x079-q4",
        "context": "Betydelseskillnad genom kommaplacering.",
        "prompt": "Hur ändras betydelsen mellan A: \\"Ich rate ihm, nicht zu widersprechen\\" och B: \\"Ich rate, ihm nicht zu widersprechen\\"? ",
        "options": [
          "I A är rådet riktat till honom (att han inte ska säga emot); i B är rådet riktat till någon annan (att inte säga emot honom).",
          "Det finns ingen betydelseskillnad alls.",
          "A är på tyska och B är på nederländska.",
          "A är ett förbud och B är en order."
        ],
        "answer": 0,
        "explanation": "Kommatecknets placering avgör om pronomenet 'ihm' hör till överordnade verbet (rate ihm) eller till infinitiven (ihm widersprechen).",
        "feedback": [
          "Korrekt! Kommat disambiguerar vilket verb som styr dativobjektet ihm.",
          "Fel. Betydelseskillnaden är högst påtaglig och funktionell.",
          "Fel. Båda är helt korrekta tyska meningar.",
          "Fel. Båda uttrycker råd, men till olika mottagare."
        ]
      },
      {
        "id": "x079-q5",
        "context": "Enkel infinitiv (§ 75 E1).",
        "prompt": "Är kommatecken obligatoriskt i meningen \\"Er versprach zu kommen\\"? ",
        "options": [
          "Nej, vid enkla infinitiver utan egna bestämningar är kommatecknet fakultativt (valfritt).",
          "Ja, alla meningar med 'zu' måste ha komma.",
          "Nej, komma är strikt förbjudet i alla infinitivsatser.",
          "Ja, men bara på söndagar."
        ],
        "answer": 0,
        "explanation": "Vid bloße Infinitive (bara zu + verb) medger regeln full valfrihet; i praktiken sätts sällan komma vid så korta fraser.",
        "feedback": [
          "Korrekt! Kommatecknet är valfritt vid enkel infinitiv utan komplement.",
          "Fel. Kommaplikt gäller bara i de tre definierade obligatoriska fallen.",
          "Fel. Kommatecknet är inte förbjudet, skribenten får sätta det om så önskas.",
          "Fel. Rättskrivningsregler gäller alla veckodagar."
        ]
      },
      {
        "id": "x079-q6",
        "context": "Sammanflätad verbkonstruktion.",
        "prompt": "Varför sätts inget komma i meningen \\"Er braucht das Buch heute nicht zu lesen\\"? ",
        "options": [
          "Eftersom verben bildar ett integrerat verbkomplex (kohärente Konstruktion) och infinitivgruppen är spaltad runt verbet.",
          "Eftersom verbet brauchen har förbjudits i tysk grammatik.",
          "Därför att kommatecken bara får sättas före punkter.",
          "Eftersom boken redan är läst."
        ],
        "answer": 0,
        "explanation": "När infinitiven och det överordnade verbet är syntaktiskt sammanflätade (kohärent) bryts inte ramen med komma.",
        "feedback": [
          "Korrekt! Sammanflätade verbkonstruktioner (kohärent bruk) avgränsas inte med komma.",
          "Fel. Brauchen är ett fullt levande verb.",
          "Fel. Kommatecken kan stå på många positioner i en sats.",
          "Fel. Textens innehåll påverkar inte satsens syntaktiska klammer."
        ]
      }
    ]
  },
  '/docs/fordjupning/ortografi/sarskrivning-sammanskrivning-och-bindestreck': {
    "lessonId": "X080",
    "href": "/docs/fordjupning/ortografi/sarskrivning-sammanskrivning-och-bindestreck",
    "title": "Snabbkoll: Särskrivning, sammanskrivning och bindestreck",
    "questions": [
      {
        "id": "x080-q1",
        "context": "Verb + verb enligt § 34.",
        "prompt": "Vad är huvudregeln enligt § 34 för två verb som står bredvid varandra (t.ex. *spazieren gehen*)?",
        "options": [
          "De särskrivs som huvudregel (*spazieren gehen*, *lesen lernen*).",
          "De sammanskrivs alltid till ett enda ord i alla lägen.",
          "De måste alltid förbindas med ett bindestreck.",
          "De måste skiljas åt med ett semikolon."
        ],
        "answer": 0,
        "explanation": "§ 34 [1] stipulerar att två verb bredvid varandra särskrivs som grundläggande huvudregel.",
        "feedback": [
          "Korrekt! Två verb bredvid varandra särskrivs som huvudregel i tyskan.",
          "Fel. Sammanskrivning är ett undantag begränsat till vissa idiomatiska fall med bleiben/lassen.",
          "Fel. Bindestreck används inte mellan två vanliga verb.",
          "Fel. Semikolon skiljer satser, inte verb i samma fras."
        ]
      },
      {
        "id": "x080-q2",
        "context": "Idiomatisk skillnad hos sitzen bleiben.",
        "prompt": "Hur stavas verbet i meningen \\"Er war faul und ist in der 9. Klasse [...]\\"? ",
        "options": [
          "sitzengeblieben (sammanskrivet, eftersom betydelsen är överförd/idiomatisk: gå om en klass).",
          "sitzen geblieben (särskrivet, som avser fysisk sittposition).",
          "sitzen-geblieben (med bindestreck).",
          "sitzenbleiben getan."
        ],
        "answer": 0,
        "explanation": "I den överförda betydelsen 'inte bli uppflyttad i nästa årskurs' sammanskrivs sitzenbleiben.",
        "feedback": [
          "Korrekt! Idiomatisk skolbetydelse sammanskrivs.",
          "Fel. Särskrivning används om personen rent fysiskt sitter kvar på en bänk/stol.",
          "Fel. Bindestreck är felaktigt här.",
          "Fel. Hjälpverbet sein kräver particip utan getan."
        ]
      },
      {
        "id": "x080-q3",
        "context": "Durchkopplung vid bindestreck (§ 44).",
        "prompt": "Hur stavas en sammansättning som kombinerar förkortningen *IT*, ordet *Bereich* och ordet *Mitarbeiter* korrekt?",
        "options": [
          "IT-Bereichs-Mitarbeiter (eller IT-Bereich-Mitarbeiter med fullständig genomkoppling).",
          "IT Bereich Mitarbeiter (med engelska blanksteg).",
          "IT-Bereich Mitarbeiter (halv koppling).",
          "ITbereichmitarbeiter (allt i ett utan bindestreck)."
        ],
        "answer": 0,
        "explanation": "Principen om Durchkopplung kräver att samtliga led förbinds med bindestreck när ett led innehåller bindestreck eller förkortning.",
        "feedback": [
          "Korrekt! Alla led måste genomkopplas med bindestreck.",
          "Fel. Blanksteg mellan leden är engelsk särskrivning (Deppenleerzeichen) och felaktigt i tysk norm.",
          "Fel. Halv koppling är ett allvarligt fel i tysk rättskrivning.",
          "Fel. Förkortningar som IT kan inte skrivas ihop utan bindestreck med gemener."
        ]
      },
      {
        "id": "x080-q4",
        "context": "Siffror i sammansättningar (§ 44).",
        "prompt": "Hur stavas ordet för en '50-procentig' ökning enligt det amtliga regelverket?",
        "options": [
          "50-prozentig (med bindestreck mellan siffra och bokstavsled).",
          "50prozentig (sammanskrivet utan bindestreck).",
          "50 prozentig (särskrivet).",
          "fünfzig-Prozentig (med stor bokstav)."
        ],
        "answer": 0,
        "explanation": "När en arabisk siffra kombineras med ett ordmorfem sätts obligatoriskt bindestreck: 50-prozentig, 100-Meter-Lauf.",
        "feedback": [
          "Korrekt! Siffra + ändelse/ord kräver bindestreck.",
          "Fel. Sammanskrivning direkt mot siffror är otillåten.",
          "Fel. Särskrivning bryter mot reglerna för sammansatta ord.",
          "Fel. Adjektiv har liten begynnelsebokstav."
        ]
      },
      {
        "id": "x080-q5",
        "context": "Valfrihet vid adjektiv och particip (§ 39).",
        "prompt": "Vilken stavning är tillåten för uttrycket 'mycket lovande' framför ett substantiv?",
        "options": [
          "Både 'ein vielversprechendes Ergebnis' och 'ein viel versprechendes Ergebnis' är tillåtna.",
          "Endast 'ein viel-versprechendes Ergebnis' med bindestreck.",
          "Endast 'ein viel versprechend Ergebnis' utan böjning.",
          "Ingen av dem; man måste skriva på latin."
        ],
        "answer": 0,
        "explanation": "§ 39 ger valfrihet mellan särskrivning och sammanskrivning vid kombinationer av adverb/gradord och particip.",
        "feedback": [
          "Korrekt! Båda formerna är officiellt godkända varianter.",
          "Fel. Bindestreck används inte mellan enkla ord och particip.",
          "Fel. Attributiva particip måste böjas med kongruensändelse.",
          "Fel. Tyska är det officiella språket."
        ]
      },
      {
        "id": "x080-q6",
        "context": "Undvika trippelvokaler (§ 45).",
        "prompt": "Varför sätter man ofta bindestreck i ordet *Tee-Ei* (tekula)?",
        "options": [
          "För att underlätta läsningen och undvika tre på varandra följande e:n (*Teeei*).",
          "Eftersom te importeras från utlandet.",
          "För att ordet ska låta längre när man läser det högt.",
          "Det är strikt förbjudet att sätta bindestreck i ordet."
        ],
        "answer": 0,
        "explanation": "§ 45 tillåter fakultativt bindestreck för att förhindra felläsning vid tre identiska vokaler eller svårtydda sammansättningar.",
        "feedback": [
          "Korrekt! Tydlighetsbindestreck underlättar läsningen vid trippelbokstäver.",
          "Fel. Ursprungsland har ingen betydelse för bindestrecksregeln.",
          "Fel. Uttalet påverkas inte av bindestrecket.",
          "Fel. Bindestrecket är tvärtom uttryckligen rekommenderat av Duden här."
        ]
      }
    ]
  },
  '/docs/fordjupning/ortografi/interpunktion-och-satsstruktur': {
    "lessonId": "X081",
    "href": "/docs/fordjupning/ortografi/interpunktion-och-satsstruktur",
    "title": "Snabbkoll: Interpunktion och satsstruktur",
    "questions": [
      {
        "id": "x081-q1",
        "context": "Versalisering efter kolon (§ 69).",
        "prompt": "När måste ordet direkt efter ett kolon ha STOR begynnelsebokstav i tysk text?",
        "options": [
          "När det som följer utgör en fullständig, självständig huvudsats med eget finit verb.",
          "Alltid efter varje kolon oavsett vad som följer.",
          "Endast när ordet är ett adjektiv.",
          "Aldrig, kolon följs alltid av liten bokstav."
        ],
        "answer": 0,
        "explanation": "Om ett kolon följs av en hel självständig mening skrivs den med stor begynnelsebokstav (§ 69); enkla uppräkningar skrivs med liten.",
        "feedback": [
          "Korrekt! Fullständig självständig sats efter kolon inleds med stor bokstav.",
          "Fel. Vid enkla fraser eller uppräkningar används liten bokstav.",
          "Fel. Adjektiv har liten bokstav om de inte inleder en självständig sats.",
          "Fel. Regeln om stor bokstav vid hel sats är en av tyskans mest kända interpunktionsregler."
        ]
      },
      {
        "id": "x081-q2",
        "context": "Gemen efter kolon vid uppräkning (§ 70).",
        "prompt": "Hur inleds fortsättningen i: \\"Bitte bringen Sie folgendes mit: [...] Ausweis und Passfoto\\"? ",
        "options": [
          "einen (med liten bokstav, eftersom det inte är en fullständig huvudsats).",
          "Einen (med stor bokstav obligatoriskt).",
          "MED VERSALER I HELA ORDET.",
          "Med ett semikolon."
        ],
        "answer": 0,
        "explanation": "Vid en uppräkning eller en icke-satsformad fortsättning fortsätter meningen med liten begynnelsebokstav.",
        "feedback": [
          "Korrekt! Liten bokstav vid fras- och ordkataloger efter kolon.",
          "Fel. Stor bokstav används endast om en fullständig mening följer.",
          "Fel. Versaler för hela ord används inte i normal sakprosa.",
          "Fel. Ett kolon kan inte direkt följas av ett semikolon."
        ]
      },
      {
        "id": "x081-q3",
        "context": "Tyska citationstecken.",
        "prompt": "Vilket typografiskt utseende har de traditionella tyska citationstecknen (*Gänsefüßchen*)?",
        "options": [
          "Inledande citattecken nere på raden („) och avslutande uppe (”).",
          "Båda uppe till vänster och höger (\").",
          "Bara enkla apostrofer.",
          "Parenteser utan streck."
        ],
        "answer": 0,
        "explanation": "Tysk standardskrift använder „99 nere och 66 uppe“ som klassiska citationstecken (Gänsefüßchen unten und oben).",
        "feedback": [
          "Korrekt! „Nere vid start och “ uppe vid avslut är den officiella tyska typografin.",
          "Fel. Två citattecken uppe är anglosaxisk/amerikansk standard.",
          "Fel. Enkla apostrofer används för citat inne i citat.",
          "Fel. Parenteser är ett helt annat skiljetecken."
        ]
      },
      {
        "id": "x081-q4",
        "context": "Placering av punkt vid direkt anföring.",
        "prompt": "Var placeras slutpunkten i meningen: *Der Zeuge sagte: „Ich war nicht am Tatort[?]“*?",
        "options": [
          "Innanför det avslutande citattecknet: *...am Tatort.“*",
          "Utanför det avslutande citattecknet: *...am Tatort“. *",
          "Både innanför och utanför samtidigt.",
          "Punkten stryks helt."
        ],
        "answer": 0,
        "explanation": "När anföringen utgör en fullständig självständig mening placeras skiljetecknet (punkt, frågetecken, utropstecken) innanför citattecknet.",
        "feedback": [
          "Korrekt! Punkten sätts innanför det avslutande citattecknet vid fullständig meningsanföring.",
          "Fel. Punkten utanför används när citatet är ett enstaka ord eller en fras inne i en överordnad sats.",
          "Fel. Två punkter bredvid varandra är typografiskt fel.",
          "Fel. Fullständiga påståendesatser måste avslutas med punkt."
        ]
      },
      {
        "id": "x081-q5",
        "context": "Semikolonet.",
        "prompt": "I vilken situation är ett semikolon mest stilistiskt lämpligt?",
        "options": [
          "Mellan två samordnade huvudsatser som har en mycket nära logisk koppling, eller i komplexa listor där leden har interna komman.",
          "Efter varje enskilt substantiv.",
          "Istället för frågetecken vid direkta frågor.",
          "I början av varje stycke."
        ],
        "answer": 0,
        "explanation": "Semikolonet är en starkare gräns än ett komma men svagare än en punkt; perfekt för nära länkade huvudsatser.",
        "feedback": [
          "Korrekt! Semikolonet förbinder nära relaterade huvudsatser eller strukturerar komplexa listor.",
          "Fel. Substantiv avgränsas inte slumpmässigt med semikolon.",
          "Fel. Frågor kräver frågetecken.",
          "Fel. Stycken inleds med indrag eller blankrad, inte semikolon."
        ]
      },
      {
        "id": "x081-q6",
        "context": "Mellanslag vid tankstreck.",
        "prompt": "Hur formateras det tyska tankstrecket (*Gedankenstrich*) i löpande text?",
        "options": [
          "Med ett mellanrum före och ett mellanrum efter tankstrecket ( – ).",
          "Helt ihopskrivet med orden på båda sidor utan mellanrum.",
          "Med tre kommatecken i stället.",
          "Endast med dubbla kolon."
        ],
        "answer": 0,
        "explanation": "I tysk typografi omges tankstrecket (Halbgeviertstrich) alltid av mellanslag: 'Er kam – wie immer – zu spät'.",
        "feedback": [
          "Korrekt! Mellanslag före och efter är standard i tysk typografi för tankstreck.",
          "Fel. Ihopskrivet utan mellanslag är anglosaxisk sedvänja med em-dash.",
          "Fel. Kommatecken kan inte ersätta tankstreckets grafiska form.",
          "Fel. Dubbla kolon existerar inte som skiljetecken."
        ]
      }
    ]
  },
  '/docs/fordjupning/referensmetod/grammatiska-analyser-och-deras-granser': {
    "lessonId": "X082",
    "href": "/docs/fordjupning/referensmetod/grammatiska-analyser-och-deras-granser",
    "title": "Snabbkoll: Grammatiska analyser och deras gränser",
    "questions": [
      {
        "id": "x082-q1",
        "context": "Förfältsprövningens funktion.",
        "prompt": "Vad bevisar det s.k. förfältsprövet (*Vorfeldprobe / Verschiebeprobe*) i en tysk huvudsats?",
        "options": [
          "Att de ord som kan flyttas tillsammans till förfältet före det finita verbet utgör en enda sammanhängande satsdel (Satzglied).",
          "Att meningen är skriven på fornhögtyska.",
          "Att subjektet måste vara ett pronomen.",
          "Att meningen saknar prepositioner."
        ],
        "answer": 0,
        "explanation": "Eftersom förfältet i V2-satser rymmer exakt en satsdel bevisar ett lyckat förfältsdrag att ledet är en syntaktisk enhet.",
        "feedback": [
          "Korrekt! Det konstituent som ensamt kan stå i förfältet utgör en satsdel.",
          "Fel. Förfältsprövning är en modern topologisk analysmetod.",
          "Fel. Vilken satsdel som helst kan stå i förfältet, inte bara pronomina.",
          "Fel. Även prepositionsfraser kan flyttas till förfältet som en enhet."
        ]
      },
      {
        "id": "x082-q2",
        "context": "Valensgrammatikens grundidé.",
        "prompt": "Vad är det finita verbets roll i Lucien Tesnières dependens- och valensgrammatik?",
        "options": [
          "Det fungerar som hela satsens överordnade centrum (Regens) som styr och öppnar platser för obligatoriska komplement.",
          "Det är bara ett passivt bihang till subjektet.",
          "Det har ingen syntaktisk funktion alls.",
          "Det bestämmer textens typsnitt."
        ],
        "answer": 0,
        "explanation": "I valensteorin är verbet satsens kärna med tomma platser (valenser) som mättas av komplement (aktanter).",
        "feedback": [
          "Korrekt! Verbet är regens och styr valensplatser för subjekt och komplement.",
          "Fel. I valensteori är verbet överordnat även subjektet.",
          "Fel. Verbet är den mest centrala delen i valensanalysen.",
          "Fel. Typografi har ingenting med valens att göra."
        ]
      },
      {
        "id": "x082-q3",
        "context": "Komplement kontra fritt adverbial.",
        "prompt": "Vad är skillnaden mellan ett komplement (*Ergänzung*) och ett fritt adverbial (*Angabe*) enligt valensteorin?",
        "options": [
          "Komplement är valensstyrda av verbet och ofta obligatoriska; fria adverbial kan fogas till i princip vilket verb som helst utan valenskrav.",
          "Komplement består enbart av substantiv; adverbial består enbart av verb.",
          "Det finns ingen skillnad; termerna är synonymer.",
          "Fria adverbial får aldrig strykas ur meningen."
        ],
        "answer": 0,
        "explanation": "Komplement bestäms av verbets specifika lexiska valens (t.ex. *wohnen in*), medan Angaben är fritt modifierande (t.ex. *gestern*).",
        "feedback": [
          "Korrekt! Valensbundet komplement (Ergänzung) kontra fritt modiferande led (Angabe).",
          "Fel. Komplement kan realiseras som bisatser, prepositionsfraser eller adjektiv.",
          "Fel. Distinktionen är grundläggande inom tysk grammatikforskning.",
          "Fel. Fria adverbial kan tvärtom oftast strykas utan att satsen kraschar syntaktiskt."
        ]
      },
      {
        "id": "x082-q4",
        "context": "Substitutionsprov (Ersatzprobe).",
        "prompt": "Hur visar substitutionsprovet att \\"der alte Mann mit dem Hut\\" är en enda satsdel?",
        "options": [
          "Genom att hela den komplexa frasen kan ersättas med ett enda pronomen (*Er*).",
          "Genom att stryka alla ord i meningen.",
          "Genom att översätta orden till franska.",
          "Genom att byta plats på subjekt och objekt."
        ],
        "answer": 0,
        "explanation": "Om en hel flerordsfras kan ersättas av en pro-form (pronomen) bevisas att den utgör en sluten nominalfras och en satsdel.",
        "feedback": [
          "Korrekt! Pronominal substitution bevisar frasens syntaktiska enhet.",
          "Fel. Radering av hela satsen visar ingenting om dess interna struktur.",
          "Fel. Översättning till andra språk ändrar de grammatiska parametrarna.",
          "Fel. Det beskriver permutationsprovet, inte substitutionsprovet."
        ]
      },
      {
        "id": "x082-q5",
        "context": "Modellens gränser.",
        "prompt": "Varför betraktas grammatiska analyser inom modern lingvistik som modeller snarare än absoluta sanningar?",
        "options": [
          "Eftersom olika teoretiska skolor (dependens, generativ syntax, topologi) belyser olika aspekter av språket och ibland ger konkurrerande analyser av samma fenomen.",
          "Eftersom tyska inte har några regler alls.",
          "För att ingen människa förstår grammatik.",
          "Därför att alla grammatikböcker skrivs av politiker."
        ],
        "answer": 0,
        "explanation": "Språkliga modeller är vetenskapliga hypoteser och analysverktyg; inget enskilt skolsystem äger det fullständiga och slutgiltiga svaret på alla gränsfall.",
        "feedback": [
          "Korrekt! Modeller är teoretiska analysverktyg med specifika styrkor och begränsningar.",
          "Fel. Tyskan har ett extremt rikt och välstrukturerat regelsystem.",
          "Fel. Lingvister har kartlagt tyska strukturer i detalj sedan århundraden.",
          "Fel. Grammatiska modeller tas fram av lingvister och språkvetare."
        ]
      },
      {
        "id": "x082-q6",
        "context": "Dativus ethicus.",
        "prompt": "Vad visar konstruktionen med *Dativus ethicus* (som i: \\"Dass du mir ja vorsichtig bist!\\") om valensteorins gränser?",
        "options": [
          "Att det finns dativled i naturligt tal som inte styrs av verbets valens, utan fyller en renodlad pragmatisk och emotionell funktion för talaren.",
          "Att verbet *sein* alltid styr dubbel ackusativ.",
          "Att meningen är ogrammatisk och borde raderas.",
          "Att pronomenet *mir* måste vara subjekt i satsen."
        ],
        "answer": 0,
        "explanation": "Dativus ethicus kan inte härledas ur verbets semantiska valens; det är en överlagrad interaktionell resurs i samtalet.",
        "feedback": [
          "Korrekt! Icke-valensbundna pragmatiska dativformer visar valensmodellens gränser.",
          "Fel. Verbet sein är en kopula och tar nominativ predikativ.",
          "Fel. Konstruktionen är fullt etablerad och idiomatisk i levande tyska.",
          "Fel. Subjektet i satsen är 'du'."
        ]
      }
    ]
  },
  '/docs/fordjupning/referensmetod/grammatiska-tveksamhetsfall-ao': {
    "lessonId": "X083",
    "href": "/docs/fordjupning/referensmetod/grammatiska-tveksamhetsfall-ao",
    "title": "Snabbkoll: Grammatiska tveksamhetsfall A–Ö",
    "questions": [
      {
        "id": "x083-q1",
        "context": "Tveksamhetsfallet wegen.",
        "prompt": "Vilket råd ger *Duden Band 9* gällande valet mellan genitiv och dativ efter *wegen*?",
        "options": [
          "I skriftlig standard rekommenderas genitiv (*wegen des Regens*); dativ är etablerat i talspråk och obligatoriskt när böjningen saknas (*wegen dir*).",
          "Dativ är strikt förbjudet i alla sammanhang och leder till böter.",
          "Genitiv är sedan 2024 helt avskaffad i ordboken.",
          "Wegen får enbart användas med ackusativ."
        ],
        "answer": 0,
        "explanation": "Duden 9 skiljer på skriftnorm (genitiv) och talspråk (dativ), och noterar att dativ är fullt etablerat vid pronominala eller oartiklade former.",
        "feedback": [
          "Korrekt! Skriftlig standard föredrar genitiv, medan talspråk använder dativ.",
          "Fel. Grammatiska avvikelser är inte straffrättsliga brott.",
          "Fel. Genitiv är fortfarande den dominerande skriftformen i korpusar.",
          "Fel. Wegen styr inte ackusativ."
        ]
      },
      {
        "id": "x083-q2",
        "context": "Tveksamhetsfallet dank.",
        "prompt": "Vilket kasus är godkänt efter prepositionen *dank* i modern tysk standard?",
        "options": [
          "Både genitiv (*dank seines Einsatzes*) och dativ (*dank seinem Einsatz*) är likvärdigt godkända i officiell norm.",
          "Endast ackusativ.",
          "Endast ablativ.",
          "Varken dativ eller genitiv; verbet måste strykas."
        ],
        "answer": 0,
        "explanation": "Duden kodifierar både dativ och genitiv som fullt korrekta standardvarianter efter prepositionen dank.",
        "feedback": [
          "Korrekt! Både genitiv och dativ är officiellt godkända standardformer.",
          "Fel. Dank styr varken ackusativ eller nominativ.",
          "Fel. Ablativ finns inte i tysk grammatik.",
          "Fel. Dank är en preposition och kan inte ersätta verbet."
        ]
      },
      {
        "id": "x083-q3",
        "context": "Kongruens vid mehr als ein.",
        "prompt": "Vilket numerus ska verbet ha i meningen: \\"Mehr als ein Besucher [...] über die Organisation geklagt\\"? ",
        "options": [
          "Singular (*hat*), eftersom den grammatiska kärnan är det singulära 'ein Besucher'.",
          "Plural (*haben*), eftersom 'mehr als ein' logiskt betyder minst två.",
          "Både singular och plural är lika frekventa i lagtext.",
          "Futurum exaktum."
        ],
        "answer": 0,
        "explanation": "Formell grammatisk kongruens kräver singular efter 'mehr als ein' (Mehr als ein Bewerber wurde abgelehnt).",
        "feedback": [
          "Korrekt! Grammatisk singular dominerar och föreskrivs av Duden 9.",
          "Fel. Den semantiska pluraliteten åsidosätts av den grammatiska singularformen ein.",
          "Fel. Juridisk text upprätthåller strikt singular här.",
          "Fel. Det rör numerus, inte tempuskategori."
        ]
      },
      {
        "id": "x083-q4",
        "context": "Talspråkligt weil med V2.",
        "prompt": "Hur bedöms konstruktionen \\"Ich kann nicht kommen, weil ich habe keine Zeit\\" i ett formellt affärsbrev?",
        "options": [
          "Som ett klart grammatiskt fel; formell skriftnorm kräver bisatsordföljd (*weil ich keine Zeit habe*) eller konjunktionen *denn*.",
          "Som den modernaste och mest eleganta affärsstilen.",
          "Som en lagstadgad formulering enligt EU-direktiv.",
          "Som obligatorisk sydtysk standard."
        ],
        "answer": 0,
        "explanation": "Weil med huvudsatsordföljd (V2) är uteslutande talspråkligt och accepteras inte i formell skrift.",
        "feedback": [
          "Korrekt! Weil med V2 är oacceptabelt i formell skriftlig korrespondens.",
          "Fel. Det ger ett oprofessionellt och talspråkligt intryck i skrift.",
          "Fel. EU-direktiv reglerar inte tysk bisatsordföljd.",
          "Fel. Ingen regional skriftstandard godkänner weil-V2 i formell prosa."
        ]
      },
      {
        "id": "x083-q5",
        "context": "Stavning av zu Hause / zuhause.",
        "prompt": "Hur stavas uttrycket i meningen \\"Er bleibt heute [...]\\"? ",
        "options": [
          "Både 'zu Hause' och 'zuhause' är officiellt tillåtna och likvärdiga i modern rättskrivning.",
          "Endast 'Zuhause' med stor bokstav är tillåtet i advärbiell funktion.",
          "Endast 'zu-Hause' med bindestreck.",
          "Uttrycket får inte användas i skrift."
        ],
        "answer": 0,
        "explanation": "I adverbiell betydelse medger regelverket valfrihet mellan särskrivning (zu Hause) och sammanskrivning (zuhause).",
        "feedback": [
          "Korrekt! Både 'zu Hause' och 'zuhause' är officiellt godkända varianter.",
          "Fel. Stor bokstav (das Zuhause) krävs endast när ordet är ett substantiv.",
          "Fel. Bindestreck används inte här.",
          "Fel. Det är ett av tyskans vanligaste vardags- och skriftspråksuttryck."
        ]
      },
      {
        "id": "x083-q6",
        "context": "Brauchen utan zu.",
        "prompt": "Vad är regeln för verbet *brauchen* i negationer i formell skriftlig standard (*„Du brauchst nicht [...]“*)?",
        "options": [
          "Det kräver obligatoriskt infinitiv med zu (*„Du brauchst nicht zu kommen“*).",
          "Det får aldrig kombineras med zu.",
          "Det måste alltid följas av ett dativobjekt i stället för verb.",
          "Det kan bara användas i frågor."
        ],
        "answer": 0,
        "explanation": "I formell standardtyska kräver brauchen alltid infinitiv med zu; bortfall av zu är enbart talspråkligt.",
        "feedback": [
          "Korrekt! Formell skriftnorm kräver alltid 'brauchen ... zu'.",
          "Fel. Motsatsen gäller: zu är obligatoriskt i skriftlig norm.",
          "Fel. Brauchen kan utan problem styra en infinitivgrupp.",
          "Fel. Det används i alla påstående- och nekandesatser."
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

const updatedContent = content.slice(0, lastClosingIndex) + group6dQuizzes + content.slice(lastClosingIndex);
fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log("Successfully appended Group 6D quizzes to data/learning-quizzes.ts");
