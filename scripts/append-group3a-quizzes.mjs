import fs from 'node:fs';
import path from 'node:path';

const quizzes = {
  '/docs/fordjupning/morfologi/verbavledning-och-partikelbildning': {
    lessonId: 'X013',
    href: '/docs/fordjupning/morfologi/verbavledning-och-partikelbildning',
    title: 'Snabbkoll: Verbavledning och partikelbildning',
    questions: [
      {
        id: 'x013-q1',
        context: 'Prefixverb kontra partikelverb i huvudsats.',
        prompt: 'Vad är den avgörande skillnaden mellan prefixverbet "verstehen" och partikelverbet "aufstehen" i huvudsats presens?',
        options: [
          'Prefixet i verstehen förblir fäst vid verbet (er versteht), medan partikeln i aufstehen skiljs och placeras sist (er steht auf).',
          'Båda förleden skiljs alltid från stammen i huvudsats.',
          'verstehen tar hjälpverbet sein medan aufstehen tar haben.',
          'aufstehen kan inte användas i bisatser.'
        ],
        answer: 0,
        explanation: 'Inseparabla prefixverb (be-, ver-, zer-) är fast förenade med stammen, medan separabla partikelverb (auf-, an-, ab-) skiljs i enkla tempus.',
        feedback: [
          'Helt rätt! Er versteht das Problem kontra Er steht um sieben Uhr auf.',
          'Fel. Inseparabla prefix skiljs aldrig från verbet.',
          'Fel. Verstehen tar haben och aufstehen tar sein.',
          'Fel. I bisats förenas partikeln med verbet i slutet (weil er aufsteht).'
        ]
      },
      {
        id: 'x013-q2',
        context: 'Transitivisering med prefixet be-.',
        prompt: 'Hur förändras verbets valens när "antworten" bildar avledningen "beantworten"?',
        options: [
          'antworten tar prepositionskomplement med auf eller dativ; beantworten blir transitivt och kräver direkt ackusativobjekt.',
          'beantworten blir intransitivt och kan inte ta något objekt.',
          'beantworten kräver två dativobjekt.',
          'Valensen förblir exakt densamma utan förändring.'
        ],
        answer: 0,
        explanation: 'Prefixet be- gör verbet transitivt: ich antworte auf die Frage -> ich beantworte die Frage.',
        feedback: [
          'Korrekt! Prefixet be- transitiverar regelmässigt intransitiva basverb.',
          'Fel. Det blir transitivt (kräver ackusativobjekt).',
          'Fel. Dubbel dativ existerar inte på tyska.',
          'Fel. Kasusstyrningen ändras radikalt.'
        ]
      },
      {
        id: 'x013-q3',
        context: 'Prefixet ver- och felhandlingar.',
        prompt: 'Vad signalerar prefixet "ver-" i reflexiva verb som "sich verrechnen" och "sich verlaufen"?',
        options: [
          'En felhandling eller ett misstag (att räkna fel, att gå vilse).',
          'Att handlingen upprepas flera gånger.',
          'Att handlingen sker i framtiden.',
          'Att subjektet utför handlingen med stor framgång.'
        ],
        answer: 0,
        explanation: 'Prefixet ver- har en stark pejorativ funktion som markerar fel, avvikelse eller förbrukning.',
        feedback: [
          'Helt rätt! Sich verschreiben (skriva fel), sich verfahren (köra vilse).',
          'Fel. Repetition uttrycks med wieder- eller re-.',
          'Fel. Prefix påverkar inte tempus.',
          'Fel. Tvärtom indikerar det misslyckande eller felaktighet.'
        ]
      },
      {
        id: 'x013-q4',
        context: 'Perfekt particip vid inseparabla verb.',
        prompt: 'Vad händer med partikelmärket "ge-" i perfekt particip hos inseparabla prefixverb som "zerstören" och "überprüfen"?',
        options: [
          'De tar inget ge- alls: "zerstört", "überprüft".',
          'De sätter ge- allra först: *"gezerstört", *"geüberprüft".',
          'De sätter ge- mellan prefixet och stammen: *"zergestört".',
          'De kan inte bilda perfekt particip.'
        ],
        answer: 0,
        explanation: 'Inseparabla prefixverb (be-, ent-, er-, ver-, zer-, miss-) blockerar alltid cirkumfixet ge- i perfekt particip.',
        feedback: [
          'Korrekt! Former med *ge- på inseparabla verb är grova grammatiska fel.',
          'Fel. Ge- får aldrig sättas framför inseparabla prefix.',
          'Fel. Infogning av -ge- sker endast vid separabla partikelverb (aufgestanden).',
          'Fel. Alla tyska verb kan bilda perfekt particip.'
        ]
      },
      {
        id: 'x013-q5',
        context: 'Variabla förled och betoning.',
        prompt: 'Hur skiljer sig minimalparet "ˈübersetzen" och "überˈsetzen" åt i betydelse och syntax?',
        options: [
          'ˈübersetzen är separabelt och betyder sätta över en flod med färja; überˈsetzen är inseparabelt och betyder översätta språk.',
          'überˈsetzen betyder köra på; ˈübersetzen betyder reparera.',
          'Det finns ingen betydelseskillnad; betoningen är valfri.',
          'ˈübersetzen används enbart i Schweiz.'
        ],
        answer: 0,
        explanation: 'Betonad partikel behåller den konkreta rumsliga banan; obetonat prefix ger abstrakt och transitiv betydelse.',
        feedback: [
          'Helt rätt! Die Fähre setzt über (separabelt) kontra Er übersetzt den Text (inseparabelt).',
          'Fel. Det förväxlas med umfahren.',
          'Fel. Betoningen är obligatoriskt knuten till två helt skilda ord.',
          'Fel. Båda verben är riksspråkliga i hela tyskspråkiga området.'
        ]
      },
      {
        id: 'x013-q6',
        context: 'Destruktiv aktionsart hos zer-.',
        prompt: 'Vilken aktionsart och betydelse förmedlar prefixet "zer-" i verb som "zerbrechen", "zerreißen" och "zerstören"?',
        options: [
          'Sönderdelning, fullständig upplösning och destruktiv förstörelse.',
          'Starten på en långsam process (ingressivitet).',
          'Ett gemensamt samarbete mellan flera personer.',
          'Att handlingen sker i hemlighet.'
        ],
        answer: 0,
        explanation: 'Prefixet zer- uttrycker konsekvent att något krossas, slits sönder eller upplöses i delar.',
        feedback: [
          'Korrekt! In tausend Stücke zerbrechen, das Papier zerreißen.',
          'Fel. Ingressivitet uttrycks snarare med ent- (entflammen) eller an- (anfangen).',
          'Fel. Samarbete uttrycks med mit- eller zusammen-.',
          'Fel. Det signalerar våldsam eller materiell sönderdelning.'
        ]
      }
    ]
  },
  '/docs/fordjupning/verb-och-valens/valensteori-och-konstruktionens-argument': {
    lessonId: 'X023',
    href: '/docs/fordjupning/verb-och-valens/valensteori-och-konstruktionens-argument',
    title: 'Snabbkoll: Valensteori och konstruktionens argument',
    questions: [
      {
        id: 'x023-q1',
        context: 'Valensteorins grundprincip.',
        prompt: 'Vad innebär verbets "valens" i modern tysk grammatik?',
        options: [
          'Verbets förmåga att bestämma antalet och arten av nödvändiga komplement (kasus, prepositioner) i satsen.',
          'Verbets böjning efter person och numerus.',
          'Huruvida verbet är starkt eller svagt i preteritum.',
          'Antalet vokaler i verbstammen.'
        ],
        answer: 0,
        explanation: 'Valensteorin ser verbet som satsens strukturella centrum som öppnar tomma platser (aktanter) som måste fyllas.',
        feedback: [
          'Helt rätt! Verbet styr vilka komplement som krävs för att satsen ska vara fullständig.',
          'Fel. Det avser böjningskongruens, inte valens.',
          'Fel. Det handlar om morfologisk böjningsklass.',
          'Fel. Fonologiska egenskaper avgör inte syntaktisk valens.'
        ]
      },
      {
        id: 'x023-q2',
        context: 'Komplement kontra fria adverbial.',
        prompt: 'Vad är den principiella skillnaden mellan ett komplement (Ergänzung) och ett fritt adverbial (Angabe)?',
        options: [
          'Komplement styrs direkt av verbets valens; fria adverbial styrs inte av verbet och kan fogas till i stort sett vilken sats som helst.',
          'Komplement består alltid av ett enda ord; adverbial är alltid hela satser.',
          'Fria adverbial måste alltid stå först i meningen.',
          'Det finns ingen skillnad; termerna är synonyma.'
        ],
        answer: 0,
        explanation: 'Ergänzungen krävs av verbet (subjekt, objekt); Angaben är frivillig bakgrundsinformation (tid, plats, orsak).',
        feedback: [
          'Korrekt! Denna distinktion är grundläggande i tysk valensgrammatik.',
          'Fel. Båda kan bestå av enkla ord eller komplexa fraser.',
          'Fel. Fria adverbial kan stå i fundamentet eller i mittfältet.',
          'Fel. Skillnaden är kärnan i satsdelsanalys.'
        ]
      },
      {
        id: 'x023-q3',
        context: 'Elimineringstestet.',
        prompt: 'Hur fungerar elimineringstestet (Reduktionstest) för att pröva om ett led är ett obligatoriskt komplement?',
        options: [
          'Man stryker ledet ur meningen; om satsen då blir ogrammatisk eller kollapsar är ledet ett obligatoriskt komplement.',
          'Man översätter meningen till latin.',
          'Man byter ut verbet mot ett modalverb.',
          'Man flyttar ledet till slutet av bisatsen.'
        ],
        answer: 0,
        explanation: 'Om satsen kollapsar vid strykning (t.ex. *Er wohnt) bevisar det att ledet är obligatoriskt för verbet.',
        feedback: [
          'Helt rätt! "Er wohnt in Berlin" -> *"Er wohnt" bevisar att in Berlin är obligatoriskt komplement.',
          'Fel. Det är ett syntaktiskt test inom samma språk.',
          'Fel. Det testar inte argumentstatus.',
          'Fel. Det är ett permeabilitetstest, inte eliminering.'
        ]
      },
      {
        id: 'x023-q4',
        context: 'Valensramen hos verbet wohnen.',
        prompt: 'Vilken valensram har verbet "wohnen" i meningen "Er wohnt in Berlin"?',
        options: [
          'Bivalent verb (tvåvärdigt): kräver ett nominativsubjekt och ett obligatoriskt lokalkomplement.',
          'Monovalent verb (envärdigt): kräver enbart ett subjekt.',
          'Trivalent verb (trevärdigt): kräver subjekt, ackusativ och dativ.',
          'Nollvärdigt verb som witterungsverb.'
        ],
        answer: 0,
        explanation: 'Wohnen kräver vem som bor och var personen bor: Subjekt + Lokativkomplement.',
        feedback: [
          'Korrekt! Utan platsangivelse är verbet ofullständigt (*er wohnt).',
          'Fel. Det kräver obligatoriskt rumsangivelse.',
          'Fel. Det tar inga objekt i ackusativ eller dativ.',
          'Fel. Nollvärdiga verb är t.ex. es regnet.'
        ]
      },
      {
        id: 'x023-q5',
        context: 'Obligatoriska rumsled vid legen/stellen.',
        prompt: 'Varför är meningen *"Er legt das Buch" ogrammatisk i standardtyska?',
        options: [
          'Eftersom verbet legen har trevärdig valens och obligatoriskt kräver ett riktningskomplement (vart boken läggs).',
          'Därför att Buch måste stå i plural.',
          'Därför att legen inte får ha ackusativobjekt.',
          'Därför att verbet måste stå i perfekt.'
        ],
        answer: 0,
        explanation: 'Legen, stellen, setzen kräver Subjekt + Ackusativobjekt + Riktningskomplement: Er legt das Buch auf den Tisch.',
        feedback: [
          'Helt rätt! Riktningskomplementet kan inte utelämnas vid kausativa positionsverb.',
          'Fel. Numerus är korrekt.',
          'Fel. Legen kräver tvärtom alltid ackusativobjekt.',
          'Fel. Tempus har ingen inverkan på valensen.'
        ]
      },
      {
        id: 'x023-q6',
        context: 'Fakultativa komplement.',
        prompt: 'Vad är ett "fakultativt komplement" (t.ex. vid verbet "essen" i "Er isst einen Apfel")?',
        options: [
          'Ett komplement som hör till verbets valensram men som kan utelämnas utan att satsen blir ogrammatisk ("Er isst").',
          'Ett led som är förbjudet i skrift.',
          'Ett komplement som styrs av två verb samtidigt.',
          'Ett komplement som alltid måste stå i genitiv.'
        ],
        answer: 0,
        explanation: 'Verbet essen har en potentiell objektplats, men satsen är fullständig även utan objektet: Er isst.',
        feedback: [
          'Korrekt! Fakultativa komplement kan strykas i neutral kontext utan att bryta mot grammatiken.',
          'Fel. De är fullt tillåtna och frekventa.',
          'Fel. Det har inget med samordnade verb att göra.',
          'Fel. Kasus beror på verbets rektion.'
        ]
      }
    ]
  },
  '/docs/fordjupning/verb-och-valens/kasusalternation-och-betydelseandring': {
    lessonId: 'X024',
    href: '/docs/fordjupning/verb-och-valens/kasusalternation-och-betydelseandring',
    title: 'Snabbkoll: Kasusalternation och betydelseändring',
    questions: [
      {
        id: 'x024-q1',
        context: 'Dativ kontra an + ackusativ vid glauben.',
        prompt: 'Vad är skillnaden i betydelse mellan "Ich glaube dir" och "Ich glaube an dich"?',
        options: [
          '"Ich glaube dir" betyder att man sätter tilltro till talarens ord; "Ich glaube an dich" betyder att man tror på personens förmåga eller potential.',
          '"Ich glaube an dich" betyder att du talar sanning; "Ich glaube dir" betyder att jag älskar dig.',
          'Det finns ingen skillnad; prepositionsfrasen är bara modern slang.',
          'Båda uttrycken är identiska och används slumpmässigt.'
        ],
        answer: 0,
        explanation: 'Glauben + dativ = lita på någons påstående; glauben an + ack = existentiell eller moralisk tilltro.',
        feedback: [
          'Helt rätt! En mycket viktig semantisk distinktion i tysk valens.',
          'Fel. Betydelserna är förvanskade.',
          'Fel. Båda formerna tillhör klassiskt riksspråk med skilda funktioner.',
          'Fel. De har strikt separerade användningsområden.'
        ]
      },
      {
        id: 'x024-q2',
        context: 'Kasusalternation vid nachstellen.',
        prompt: 'Hur skiljer sig innebörden hos verbet "nachstellen" beroende på om objektet står i ackusativ eller dativ?',
        options: [
          'Med ackusativ betyder det justera ett urverk eller ställa fram; med dativ betyder det förfölja eller trakassera en person.',
          'Med ackusativ betyder det förfölja; med dativ betyder det reparera.',
          'Med dativ betyder det laga mat; med ackusativ betyder det springa.',
          'Det betyder alltid ställa tillbaka klockan oavsett kasus.'
        ],
        answer: 0,
        explanation: 'Die Uhr nachstellen (ackusativ = justera); einer Frau nachstellen (dativ = förfölja/stalka).',
        feedback: [
          'Korrekt! Kasusvalet avgör helt vilket lexem som realiseras.',
          'Fel. Betydelserna är omvända.',
          'Fel. Det har ingen koppling till matlagning eller löpning.',
          'Fel. Kasus växlar betydelsen radikalt.'
        ]
      },
      {
        id: 'x024-q3',
        context: 'Hjälpverbsväxling vid transitivt fahren.',
        prompt: 'Vad sker med hjälpverbet vid verbet "fahren" när det används transitivt med ackusativobjekt ("Er ___ das Auto in die Garage gefahren")?',
        options: [
          'Hjälpverbet växlar från sein till haben: "Er hat das Auto gefahren".',
          'Det behåller obligatoriskt sein: *"Er ist das Auto gefahren".',
          'Det måste använda werden i perfekt aktiv.',
          'Det kan inte bilda perfekt med objekt.'
        ],
        answer: 0,
        explanation: 'När rörelseverb som fahren, fliegen, ziehen tar ett direkt ackusativobjekt bildar de perfekt med haben.',
        feedback: [
          'Helt rätt! Er ist nach Hause gefahren (intransitivt, sein) vs. Er hat mich nach Hause gefahren (transitivt, haben).',
          'Fel. *Er ist das Auto gefahren är icke-standard.',
          'Fel. Werden används i passiv eller futurum.',
          'Fel. Transitivt perfekt med haben är fullt reguljärt.'
        ]
      },
      {
        id: 'x024-q4',
        context: 'Dubbel ackusativ vid kosten.',
        prompt: 'Vilken ovanlig valensstruktur uppvisar verbet "kosten" i meningen "Das kostet mich zehn Euro"?',
        options: [
          'Dubbel ackusativ: både personen (mich) och priset (zehn Euro) står i ackusativ.',
          'Subjekt + dativ + genitiv.',
          'Objektet mich står i dativ.',
          'Meningen är ett grammatiskt fel i talspråk.'
        ],
        answer: 0,
        explanation: 'Kosten är ett av de få tyska verb som tillåter dubbel ackusativ (personackusativ + måttackusativ).',
        feedback: [
          'Korrekt! Das kostet mich (ack) viel Geld (ack). I södra Tyskland förekommer dativ (mir), men ackusativ är riksspråksnorm.',
          'Fel. Det finns ingen genitiv inblandad.',
          'Fel. Mich är ackusativform.',
          'Fel. Konstruktionen är fullt etablerad standardtyska.'
        ]
      },
      {
        id: 'x024-q5',
        context: 'Transitivt sprechen.',
        prompt: 'Vad innebär frasen "Ich möchte den Chef sprechen" i kontrast till "mit dem Chef sprechen"?',
        options: [
          'Att träffa och få ett personligt möte/överläggning med chefen.',
          'Att hålla ett föredrag om chefen.',
          'Att chefen inte kan tala.',
          'Att man skriker åt chefen.'
        ],
        answer: 0,
        explanation: 'Jemanden sprechen (med ackusativ) är ett formellt och etablerat idiom för att begära sammanträde eller audiens med någon.',
        feedback: [
          'Helt rätt! "Kann ich Herrn Schmidt sprechen?" är standard på kontor och mottagningar.',
          'Fel. Det vore über den Chef sprechen.',
          'Fel. Det berör inte talförmåga.',
          'Fel. Det är ett artigt och formellt uttryck.'
        ]
      },
      {
        id: 'x024-q6',
        context: 'Genitivobjektens tillbakagång.',
        prompt: 'Varför har klassiska genitivobjekt som "Ich erinnere mich seiner" i modern standardtyska ersatts av "an ihn"?',
        options: [
          'Eftersom genitivobjekt upplevs som arkaiska och prepositionsfraser ger en tydligare och mer frekvent kasuskontroll.',
          'Därför att genitiv avskaffades officiellt vid 1996 års reform.',
          'Därför att pronomenet seiner betyder "hans".',
          'Det är bara tillåtet i poesi att använda prepositionsfraser.'
        ],
        answer: 0,
        explanation: 'Språkutvecklingen har successivt ersatt rent genitivobjekt med prepositionskomplement (an + ack vid erinnern).',
        feedback: [
          'Korrekt! I modern sakprosa och samtal dominerar prepositionskonstruktionen helt.',
          'Fel. Genitiv finns kvar som kasus, men dess verbala valensroller har minskat.',
          'Fel. Seiner är här genitiv singular av personliga pronomenet er.',
          'Fel. Prepositionsfrasen är standard i alla texttyper.'
        ]
      }
    ]
  },
  '/docs/fordjupning/verb-och-valens/dativens-olika-funktioner': {
    lessonId: 'X025',
    href: '/docs/fordjupning/verb-och-valens/dativens-olika-funktioner',
    title: 'Snabbkoll: Dativens olika funktioner',
    questions: [
      {
        id: 'x025-q1',
        context: 'Pertinensdativ vid kroppsdelar.',
        prompt: 'Vad är en pertinensdativ (Dativus possessivus) i meningen "Ich wasche mir die Hände"?',
        options: [
          'En dativkonstruktion som ersätter possessivpronomen vid kroppsdelar och personliga ägodelar.',
          'En dativ som anger var någon bor.',
          'Ett direkt objekt som styr passiv form.',
          'En föråldrad talspråksform som ska undvikas.'
        ],
        answer: 0,
        explanation: 'Tyskan föredrar dativreflexivt mir + bestämd artikel (die Hände) framför possessivpronomen (meine Hände).',
        feedback: [
          'Helt rätt! Ich putze mir die Zähne, er schneidet sich die Haare.',
          'Fel. Platsangivelse kräver preposition (in, an, auf).',
          'Fel. Dativ kan inte bli subjekt i personlig passiv.',
          'Fel. Det är standardspråkets mest naturliga och vårdade uttryckssätt.'
        ]
      },
      {
        id: 'x025-q2',
        context: 'Svensk interferens vid kroppsvård.',
        prompt: 'Varför låter meningen *"Ich wasche meine Hände" oidiomatisk för en modersmålstalare i tyska?',
        options: [
          'Eftersom det låter som om händerna vore ett lösryckt yttre föremål snarare än en del av talarens egen kropp.',
          'Därför att ordet Hände inte kan ha plural.',
          'Därför att meine är maskulint.',
          'Därför att verbet waschen kräver två prepositioner.'
        ],
        answer: 0,
        explanation: 'Kroppsdelar är organiskt bundna till kroppen; tyskan uttrycker detta med pertinensdativ (mir die Hände).',
        feedback: [
          'Korrekt! Att använda possessivpronomen här är en typisk anglicism eller skandinavism.',
          'Fel. Hände är reguljär plural av Hand.',
          'Fel. Meine är femininum och plural.',
          'Fel. Waschen är ett enkelt transitivt verb.'
        ]
      },
      {
        id: 'x025-q3',
        context: 'Dativus commodi.',
        prompt: 'Vad uttrycker dativus commodi i meningen "Er kocht ihr ein schönes Abendessen"?',
        options: [
          'Att handlingen sker till fördel, gagn eller glädje för personen i dativ (ihr).',
          'Att hon själv tvingas laga maten.',
          'Att maten är dålig.',
          'Att hon inte var hungrig.'
        ],
        answer: 0,
        explanation: 'Dativus commodi uttrycker den gynnade parten (benefaktiv dativ). Motsatsen är dativus incommodi (till någons förtret).',
        feedback: [
          'Helt rätt! "Han lagar en middag åt/till henne".',
          'Fel. Han är subjektet som lagar maten.',
          'Fel. Det har ingen koppling till matens kvalitet.',
          'Fel. Det visar handlingens syfte och mottagare.'
        ]
      },
      {
        id: 'x025-q4',
        context: 'Etisk dativ.',
        prompt: 'Vad är den pragmatiska funktionen hos en etisk dativ (Dativus ethicus) i utropet "Komm mir nicht zu spät!"?',
        options: [
          'Den signalerar talarens personliga emotionella engagemang, oro eller förmaning i samtalet.',
          'Den anger att talaren själv kommer för sent.',
          'Den visar att verbet har två direkta objekt.',
          'Den är en förkortning av prepositionen mit.'
        ],
        answer: 0,
        explanation: 'Etisk dativ är ett samtalspragmatiskt element som binder lyssnaren till talarens förväntan.',
        feedback: [
          'Korrekt! Dass du mir vorsichtig fährst! (Se till att du kör försiktigt för min skull!).',
          'Fel. Talaren uppmanar lyssnaren.',
          'Fel. Etisk dativ är inget argument i verbets valens.',
          'Fel. Det är personliga pronomenet i dativ.'
        ]
      },
      {
        id: 'x025-q5',
        context: 'Dativus judicantis.',
        prompt: 'Vad uttrycker dativus judicantis i meningen "Das Buch ist mir zu langweilig"?',
        options: [
          'Att omdömet (zu langweilig) gäller utifrån talarens personliga perspektiv och subjektiva bedömning.',
          'Att boken ägs av talaren.',
          'Att talaren har skrivit boken.',
          'Att boken är objektivt förklarad tråkig i en vetenskaplig rapport.'
        ],
        answer: 0,
        explanation: 'Dativus judicantis begränsar giltigheten hos ett adjektivomdöme till den person som står i dativ.',
        feedback: [
          'Helt rätt! "För min del / i mitt tycke är boken för tråkig".',
          'Fel. Det anger inte ägande.',
          'Fel. Talaren är läsaren, inte författaren.',
          'Fel. Det markerar just det subjektiva intrycket.'
        ]
      },
      {
        id: 'x025-q6',
        context: 'Restriktioner för etisk dativ.',
        prompt: 'Vilka personer kan den etiska dativen (Dativus ethicus) stå i enligt tysk grammatik?',
        options: [
          'Endast i 1:a person (mir, uns) eller 2:a person (dir, euch) – talarens och lyssnarens omedelbara sfär.',
          'Endast i 3:e person (ihm, ihr, ihnen).',
          'I alla personer inklusive reflexiva pronomen.',
          'Enbart vid opersonliga verb med es.'
        ],
        answer: 0,
        explanation: 'Eftersom den etiska dativen uttrycker omedelbar samtalsparticipation kan den inte användas i distanserad 3:e person.',
        feedback: [
          'Korrekt! Du bist mir ja ein Schlaumeier! (1:a/2:a person knyter samtalet samman).',
          'Fel. Tredje person (*er fällt ihm nicht) kan inte fungera som etisk dativ.',
          'Fel. Reflexiv etisk dativ existerar inte.',
          'Fel. Det kräver ett personligt tilltal.'
        ]
      }
    ]
  }
};

const filePath = path.join(process.cwd(), 'data', 'learning-quizzes.ts');
let content = fs.readFileSync(filePath, 'utf8');

for (const [key, quizData] of Object.entries(quizzes)) {
  if (content.includes(`'${key}': {`) || content.includes(`"${key}": {`)) {
    console.log(`Quiz for ${key} already exists, skipping...`);
    continue;
  }
  const formattedQuiz = `  '${key}': ${JSON.stringify(quizData, null, 2).replace(/\n/g, '\n  ')},\n`;
  const insertIndex = content.lastIndexOf('};');
  if (insertIndex !== -1) {
    content = content.slice(0, insertIndex) + formattedQuiz + content.slice(insertIndex);
    console.log(`Appended quiz for ${key}`);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Finished updating learning-quizzes.ts with Group 3A quizzes.');
