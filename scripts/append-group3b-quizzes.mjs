import fs from 'node:fs';
import path from 'node:path';

const quizzes = {
  '/docs/fordjupning/verb-och-valens/predikativ-och-sekundar-predikation': {
    lessonId: 'X026',
    href: '/docs/fordjupning/verb-och-valens/predikativ-och-sekundar-predikation',
    title: 'Snabbkoll: Predikativ och sekundär predikation',
    questions: [
      {
        id: 'x026-q1',
        context: 'Kopulaverb och kasuskongruens.',
        prompt: 'Vilket kasus ska substantivfrasen ha i meningen "Er bleibt stets [...] treuer Freund"?',
        options: [
          'Nominativ (ein treuer Freund), eftersom subjektspredikativ kongruerar med subjektet.',
          'Ackusativ (einen treuen Freund), eftersom verbet är aktivt.',
          'Dativ (einem treuen Freund), eftersom bleiben kräver dativ.',
          'Genitiv (eines treuen Freundes), eftersom det anger relation.'
        ],
        answer: 0,
        explanation: 'Efter kopulaverb som sein, werden och bleiben står subjektspredikativet alltid i nominativ (Prädikatsnominativ / Gleichsetzungsnominativ).',
        feedback: [
          'Helt rätt! "Er bleibt stets ein treuer Freund" (nominativ kongruerar med er).',
          'Fel. Bleiben är inget transitivt verb och tar aldrig ackusativobjekt.',
          'Fel. Bleiben är ett kopulaverb, inte ett dativverb.',
          'Fel. Predikativet står i nominativ, inte genitiv.'
        ]
      },
      {
        id: 'x026-q2',
        context: 'Objektspredikativ och dubbel ackusativ.',
        prompt: 'Vilken sats innehåller ett korrekt objektspredikativ i ackusativ (Prädikatsakkusativ)?',
        options: [
          'Die Bürger nannten den mutigen Retter einen wahren Helden.',
          'Die Bürger nannten den mutigen Retter ein wahrer Held.',
          'Die Bürger nannten dem mutigen Retter einen wahren Helden.',
          'Die Bürger nannten den mutigen Retter eines wahren Helden.'
        ],
        answer: 0,
        explanation: 'Verbet nennen styr ackusativ för både objektet och dess predikativ: "den mutigen Retter" (objekt) och "einen wahren Helden" (objektspredikativ).',
        feedback: [
          'Korrekt! Nennen styr ackusativ på båda leden.',
          'Fel. Ein wahrer Held är nominativ; objektspredikativet måste kongruera med ackusativobjektet.',
          'Fel. Nennen styr inte dativ.',
          'Fel. Genitiv används inte som objektspredikativ här.'
        ]
      },
      {
        id: 'x026-q3',
        context: 'Depiktiv sekundär predikation.',
        prompt: 'Vad kännetecknar den sekundära predikationen i meningen "Sie kam müde von der Arbeit nach Hause"?',
        options: [
          'Det är en depiktiv predikation som beskriver subjektets tillstånd samtidigt som handlingen pågick.',
          'Det är ett resultat som uppstod genom att hon kom hem.',
          'Müde är ett rent rumsadverbial.',
          'Verbet kam har omvandlats till ett kopulaverb.'
        ],
        answer: 0,
        explanation: 'Ett depiktivt predikativ beskriver ett tillstånd som råder parallellt med verbalhandlingen ("hon var trött medan hon kom hem").',
        feedback: [
          'Helt rätt! Hon var trött samtidigt som hon rörde sig hemåt.',
          'Fel. Att komma hem orsakade inte tröttheten; det är depiktivt, inte resultativt.',
          'Fel. Müde beskriver ett tillstånd, inte en plats eller riktning.',
          'Fel. Kommen förblir ett rörelseverb/fullverb.'
        ]
      },
      {
        id: 'x026-q4',
        context: 'Resultativ sekundär predikation och valensexpansion.',
        prompt: 'Vad händer syntaktiskt i meningen "Er schrie sich heiser"?',
        options: [
          'Det resultativa predikativet "heiser" utökar verbets valens och framtvingar ett reflexivt ackusativobjekt "sich".',
          'Heiser är ett modalt adverbial som beskriver hur högt han skrek.',
          'Schreien är ett kopulaverb som kräver dativ.',
          'Satsen är ogrammatisk eftersom schreien är intransitivt.'
        ],
        answer: 0,
        explanation: 'Resultativa predikat kan licensiera ett ackusativobjekt vid intransitiva verb (att skrika sig hes).',
        feedback: [
          'Korrekt! Valensexpansion via resultativ predikation är ett välkänt fenomen i tysk grammatik.',
          'Fel. Heiser beskriver resultatet (tillståndet att vara hes), inte skrikets ljudstyrka.',
          'Fel. Schreien är inget kopulaverb.',
          'Fel. Satsen är fullständigt grammatisk och idiomatisk.'
        ]
      },
      {
        id: 'x026-q5',
        context: 'Prepositionsinledda predikativ med als.',
        prompt: 'Vilket alternativ är grammatiskt korrekt i meningen "Er arbeitet in dieser Firma als [...] Angestellter"?',
        options: [
          'leitender (nominativ, eftersom als-frasen kongruerar med subjektet er).',
          'leitenden (ackusativ, eftersom als automatiskt styr ackusativ).',
          'leitendem (dativ, eftersom als kräver dativ).',
          'leitende (feminin form av misstag).'
        ],
        answer: 0,
        explanation: 'Partikeln als är ingen preposition med fast kasus, utan en jämförelse-/predikationspartikel vars kasus beror på vad den syftar på. Eftersom den syftar på subjektet er i nominativ, blir det "als leitender Angestellter".',
        feedback: [
          'Helt rätt! Nominativ maskulinum med stark böjning efter als utan artikel: leitender.',
          'Fel. Als styr inte ackusativ om referenten är ett nominativsubjekt.',
          'Fel. Als kräver inte dativ.',
          'Fel. Angestellter är maskulinum här.'
        ]
      },
      {
        id: 'x026-q6',
        context: 'Predikativ vs. modalt adverbial.',
        prompt: 'Hur skiljer man meningen "Der Redner verließ verärgert den Saal" (A) från "Der Redner verließ eilig den Saal" (B)?',
        options: [
          'I (A) är verärgert ett depiktivt predikativ som beskriver talarens tillstånd; i (B) är eilig ett modalt adverbial som beskriver hur han rörde sig.',
          'I (B) är eilig ett kopulaverb.',
          'Båda orden är rena subjektsadjektiv som måste kongruensböjas med -er.',
          'Det finns ingen lingvistisk skillnad alls mellan dem.'
        ],
        answer: 0,
        explanation: 'Predikativ refererar till en nominal deltagare (talaren var förargad), medan modala adverbial modifierar själva verbhandlingen (gången var hastig).',
        feedback: [
          'Korrekt! Test: "Der Redner war verärgert, als..." fungerar utmärkt för (A).',
          'Fel. Eilig är ett adverbial/adjektiv, inget verb.',
          'Fel. Adjektiv i predikativ eller adverbial position böjs aldrig i tyskan.',
          'Fel. Den semantiska referensen (deltagare vs. handling) är en grundläggande syntaktisk skillnad.'
        ]
      }
    ]
  },
  '/docs/fordjupning/verb-och-valens/reflexivitet-reciprocitet-och-diates': {
    lessonId: 'X027',
    href: '/docs/fordjupning/verb-och-valens/reflexivitet-reciprocitet-och-diates',
    title: 'Snabbkoll: Reflexivitet, reciprocitet och diates',
    questions: [
      {
        id: 'x027-q1',
        context: 'Genuina kontra argumentreflexiva verb.',
        prompt: 'Vilket av följande verb är ett GENUINT (echtes) reflexivt verb?',
        options: [
          'sich weigern (att vägra)',
          'sich waschen (att tvätta sig)',
          'sich sehen (att se sig)',
          'sich verteidigen (att försvara sig)'
        ],
        answer: 0,
        explanation: 'sich weigern kan aldrig uppträda utan sich (*ich weigere ihn är omöjligt). Vid waschen, sehen och verteidigen kan sich bytas ut mot ett annat objekt.',
        feedback: [
          'Helt rätt! Sich weigern är obligatoriskt och genuint reflexivt.',
          'Fel. Man kan säga "Ich wasche das Auto", alltså argumentreflexivt.',
          'Fel. Man kan säga "Er sieht den Baum".',
          'Fel. Man kan säga "Er verteidigt seinen Mandanten".'
        ]
      },
      {
        id: 'x027-q2',
        context: 'Kasusalternation ackusativ kontra dativ.',
        prompt: 'Vilken form av reflexivpronomenet är korrekt i meningen "Ich ziehe [...] schnell die Jacke an"?',
        options: [
          'mir (dativ, eftersom "die Jacke" är det direkta ackusativobjektet).',
          'mich (ackusativ, eftersom verbet är anziehen).',
          'sich (allmän reflexiv form).',
          'mein (possessivt pronomen utan kasus).'
        ],
        answer: 0,
        explanation: 'När satsen har ett eget ackusativobjekt (die Jacke), står reflexivpronomenet obligatoriskt i dativ: "Ich ziehe mir die Jacke an".',
        feedback: [
          'Korrekt! Dativ mir förhindrar dubbel ackusativ.',
          'Fel. Mich är ackusativ; satsen har redan ackusativobjektet die Jacke.',
          'Fel. Sich används bara i 3:e person.',
          'Fel. Mein är ett possessivt pronomen och passar inte syntaktiskt här.'
        ]
      },
      {
        id: 'x027-q3',
        context: 'Mediopassiv konstruktion.',
        prompt: 'Vad betyder den mediala satsen "Das neue Buch von Müller liest sich flüssig"?',
        options: [
          'Boken är lätt och angenäm att läsa (= man kann es leicht lesen).',
          'Boken läser andra böcker av Müller.',
          'Författaren Müller läser sin egen bok högt.',
          'Boken har blivit förstörd under läsningen.'
        ],
        answer: 0,
        explanation: 'Mediopassiv (reflexivt passiv) uttrycker en potentiell modal egenskap hos subjektet: boken låter sig läsas flytande.',
        feedback: [
          'Helt rätt! Mediopassiv kombineras ofta med modala adverbial som leicht, gut, flüssig.',
          'Fel. Boken är ett saksubjekt utan egen agens.',
          'Fel. Satsen beskriver bokens textkvalitet, inte författarens handling.',
          'Fel. Ingen förstörelse indikeras.'
        ]
      },
      {
        id: 'x027-q4',
        context: 'Reciprok tolkning och särskiljning.',
        prompt: 'Hur gör man meningen "Sie lieben sich" otvetydigt ömsesidig (reciprok) så att den inte kan tolkas som att de älskar sig själva?',
        options: [
          'Genom att lägga till "gegenseitig" eller ersätta sich med "einander" (Sie lieben einander).',
          'Genom att sätta verbet i perfekt.',
          'Genom att byta ut lieben mot mögen.',
          'Genom att använda formen "sich selbst".'
        ],
        answer: 0,
        explanation: 'einander och gegenseitig signalerar entydigt reciprocitet ("varandra"), medan sich selbst tvärtom förstärker den rent reflexiva betydelsen ("sig själv").',
        feedback: [
          'Korrekt! Sie lieben einander / Sie lieben sich gegenseitig är otvetydigt ömsesidigt.',
          'Fel. Tempusbyte förändrar inte reflexiv kontra reciprok tolkning.',
          'Fel. Verbbytet löser inte pronominalfrågan.',
          'Fel. Sich selbst betyder "sig själva", alltså motsatsen till reciprok.'
        ]
      },
      {
        id: 'x027-q5',
        context: 'Prepositionella reciproka pronomen.',
        prompt: 'Hur bildas den korrekta reciproka sammansättningen med prepositionen "mit"?',
        options: [
          'miteinander (skrivs alltid i ett ord).',
          'mit einander (skrivs obligatoriskt i två ord).',
          'mitsich (med reflexivt pronomen).',
          'mit uns beiden (endast möjligt i första person).'
        ],
        answer: 0,
        explanation: 'Prepositioner förenas med einander till ett enda ord: miteinander, voneinander, füreinander, aneinander.',
        feedback: [
          'Helt rätt! Sammanskrivning är obligatorisk.',
          'Fel. Det ska inte särskrivas.',
          'Fel. Mitsich existerar inte som reciprokt ord.',
          'Fel. Miteinander fungerar i alla grammatiska personer.'
        ]
      },
      {
        id: 'x027-q6',
        context: 'Svensk-tysk interferens vid reflexiva verb.',
        prompt: 'Vilket svenskt verb motsvaras av ett ICKE-reflexivt verb på tyska?',
        options: [
          'att lära sig -> lernen (på tyska används inte *sich lernen).',
          'att förälska sig -> sich verlieben.',
          'att skynda sig -> sich beeilen.',
          'att vila sig -> sich ausruhen.'
        ],
        answer: 0,
        explanation: 'Svenskans "lära sig" motsvaras av det oreflexiva "lernen": "Ich lerne Deutsch" (inte *Ich lerne mich Deutsch).',
        feedback: [
          'Korrekt! En mycket vanlig skandinavisk interferensfälla.',
          'Fel. Sich verlieben är reflexivt på tyska.',
          'Fel. Sich beeilen är genuint reflexivt på tyska.',
          'Fel. Sich ausruhen är reflexivt på tyska.'
        ]
      }
    ]
  },
  '/docs/fordjupning/verb-och-valens/lassen-och-perceptionsverbens-konstruktioner': {
    lessonId: 'X028',
    href: '/docs/fordjupning/verb-och-valens/lassen-och-perceptionsverbens-konstruktioner',
    title: 'Snabbkoll: Lassen och perceptionsverbens konstruktioner',
    questions: [
      {
        id: 'x028-q1',
        context: 'Kausativt kontra fullverbet lassen.',
        prompt: 'Vilken mening uttrycker ett KAUSATIVT lassen (att ge någon i uppdrag / låta utföra)?',
        options: [
          'Er lässt sein Auto in der Werkstatt reparieren.',
          'Er lässt seinen Koffer am Bahnhof stehen.',
          'Lass mich bitte in Ruhe!',
          'Sie lässt von ihren alten Gewohnheiten ab.'
        ],
        answer: 0,
        explanation: 'I "Er lässt sein Auto reparieren" föranleder subjektet att en mekaniker utför reparationen (kausativ användning).',
        feedback: [
          'Helt rätt! Kausativt lassen innebär att subjektet låter någon annan göra handlingen.',
          'Fel. Här är lassen fullverb i betydelsen "lämna kvar".',
          'Fel. Här är det en imperativ i betydelsen "lämna ifred / upphöra".',
          'Fel. Här betyder ablassen von "avstå från".'
        ]
      },
      {
        id: 'x028-q2',
        context: 'Ersatzinfinitiv i perfekt med lassen.',
        prompt: 'Vilken perfektform är skriftspråklig standard när lassen styr en annan infinitiv?',
        options: [
          'Ich habe das Fahrrad reparieren lassen.',
          'Ich habe das Fahrrad reparieren gelassen.',
          'Ich habe das Fahrrad reparieren gelasst.',
          'Ich habe das Fahrrad gelassen reparieren.'
        ],
        answer: 0,
        explanation: 'Tillsammans med en annan infinitiv ersätts participet obligatoriskt av Ersatzinfinitiv: "reparieren lassen".',
        feedback: [
          'Korrekt! Ersatzinfinitiv "lassen" är standardnormen.',
          'Fel. Formen "gelassen" används bara när verbet står ensamt utan annan infinitiv.',
          'Fel. Gelasst är en felaktig svag böjningsform.',
          'Fel. Ordföljd och participform är felaktiga.'
        ]
      },
      {
        id: 'x028-q3',
        context: 'AcI vid perceptionsverb.',
        prompt: 'Hur konstrueras perceptionsverbet hören i presens med ett ackusativobjekt som sjunger?',
        options: [
          'Ich höre sie eine Arie singen (utan zu).',
          'Ich höre sie eine Arie zu singen (med zu).',
          'Ich höre ihr eine Arie singen (med dativ).',
          'Ich höre sie eine Arie gesungen (med particip).'
        ],
        answer: 0,
        explanation: 'Perceptionsverb tar AcI med ren infinitiv utan zu: "Ich höre sie singen".',
        feedback: [
          'Helt rätt! Ren infinitiv utan partikeln zu är obligatorisk.',
          'Fel. Zu får aldrig infogas vid perceptionsverb.',
          'Fel. Subjektet för infinitiven måste stå i ackusativ (sie), inte dativ.',
          'Fel. Det ska vara infinitiv, inte particip.'
        ]
      },
      {
        id: 'x028-q4',
        context: 'Bisatsordföljd och Oberfeld-omkastning vid dubbla infinitiver.',
        prompt: 'Hur ser den korrekta skriftspråkliga ordföljden ut i bisatsen "...att han har låtit bygga ett hus"?',
        options: [
          '...dass er ein Haus hat bauen lassen. (hjälpverbet hat ställs före båda infinitiverna).',
          '...dass er ein Haus bauen lassen hat. (hat ställs allra sist).',
          '...dass er ein Haus bauen gelassen hat.',
          '...dass er hat ein Haus bauen lassen.'
        ],
        answer: 0,
        explanation: 'Vid Ersatzinfinitiv flyttas det böjda hjälpverbet framför de två infinitiverna i bisats (Oberfeld-omkastning).',
        feedback: [
          'Korrekt! "...hat bauen lassen" är den strikta skriftliga standardregeln.',
          'Fel. Att sätta hat sist undviks i standardspråk vid dubbla infinitiver.',
          'Fel. Gelassen får inte användas när en infinitiv föregår.',
          'Fel. Verbet hat får inte bryta mittfältet före ein Haus.'
        ]
      },
      {
        id: 'x028-q5',
        context: 'Modalt reflexivt lassen.',
        prompt: 'Vad motsvarar omskrivningen "Diese Aufgabe lässt sich nicht in einer Stunde erledigen"?',
        options: [
          'Diese Aufgabe kann nicht in einer Stunde erledigt werden.',
          'Man muss die Aufgabe in einer Stunde erledigen.',
          'Niemand darf die Aufgabe erledigen.',
          'Die Aufgabe hat die Stunde verlassen.'
        ],
        answer: 0,
        explanation: '"sich lassen + infinitiv" motsvarar modalpassiv med können + particip + werden (möjlighet).',
        feedback: [
          'Helt rätt! Det är en passivliknande potentialitetskonstruktion.',
          'Fel. Det uttrycker inte tvång (müssen).',
          'Fel. Det handlar inte om förbud (dürfen).',
          'Fel. Det är inte fullverbet att lämna.'
        ]
      },
      {
        id: 'x028-q6',
        context: 'Interferens mellan svenskans låta och tyskans lassen.',
        prompt: 'Hur översätts bäst det svenska uttrycket "Det låter som en fantastisk idé"?',
        options: [
          'Das klingt nach einer fantastischen Idee (eller: hört sich fantastisch an).',
          '*Das lässt wie eine fantastische Idee.',
          '*Das gelassen eine fantastische Idee.',
          '*Das lässt sich eine fantastische Idee klingen.'
        ],
        answer: 0,
        explanation: 'När svenskans "låta" syftar på hörselintryck eller hur något verkar, används klingen eller sich anhören – ALDRIG lassen.',
        feedback: [
          'Korrekt! Att använda lassen här är en grov skandinavism.',
          'Fel. Lassen kan aldrig betyda ge ifrån sig ljud/verka.',
          'Fel. Gelassen är particip eller adjektiv (lugn).',
          'Fel. Helt förvrängd ordföljd och grammatik.'
        ]
      }
    ]
  },
  '/docs/fordjupning/verb-och-valens/funktionsverb-och-substantiviska-predikat': {
    lessonId: 'X029',
    href: '/docs/fordjupning/verb-och-valens/funktionsverb-och-substantiviska-predikat',
    title: 'Snabbkoll: Funktionsverb och substantiviska predikat',
    questions: [
      {
        id: 'x029-q1',
        context: 'Definition av Funktionsverbgefüge (FVG).',
        prompt: 'Vad kännetecknar fördelningen av funktioner i ett Funktionsverbgefüge som "eine Entscheidung treffen"?',
        options: [
          'Substantivet (Entscheidung) bär den semantiska huvudbetydelsen medan verbet (treffen) förmedlar tempus, person och aspekt.',
          'Verbet bär all konkret betydelse medan substantivet är ett fritt adverbial.',
          'Substantivet är alltid ett rumsadverbial som kan strykas.',
          'Det är två fullverb som konkurrerar om subjektet.'
        ],
        answer: 0,
        explanation: 'I ett FVG avbleks verbet semantiskt och bidrar främst med grammatiska kategorier och aktionsart, medan predikatskärnan ligger i verbalsubstantivet.',
        feedback: [
          'Helt rätt! Det är predikatets syntaktiska uppdelning i två komponenter.',
          'Fel. Verbet är semantiskt avblekt (funktionellt).',
          'Fel. Substantivet är en obligatorisk del av predikatet, inte ett fritt rumsled.',
          'Fel. Konstruktionen består av verb + substantivfras, inte två verb.'
        ]
      },
      {
        id: 'x029-q2',
        context: 'Aktivt vs. passivt funktionsverb: stellen vs. stehen.',
        prompt: 'Hur skiljer sig "zur Verfügung stellen" från "zur Verfügung stehen"?',
        options: [
          'stellen är aktivt/kausativt (någon tillhandahåller något); stehen är statiskt/passivliknande (något finns tillgängligt).',
          'stellen kan bara användas om möbler; stehen om människor.',
          'Båda uttrycken är exakta synonymer utan någon diates- eller aspektsskillnad.',
          'stehen kräver ackusativobjekt medan stellen kräver genitiv.'
        ],
        answer: 0,
        explanation: 'stellen uttrycker ett aktivt föranledande av tillgång, medan stehen uttrycker det resulterande tillståndet eller passiv tillgänglighet.',
        feedback: [
          'Korrekt! Wir stellen Mittel bereit -> Die Mittel stehen bereit.',
          'Fel. Båda används i högsta grad abstrakt i skriftspråket.',
          'Fel. Den aspektuella och diatesmässiga skillnaden är central.',
          'Fel. Stehen är intransitivt och tar inget ackusativobjekt.'
        ]
      },
      {
        id: 'x029-q3',
        context: 'FVG-paret bringen och kommen.',
        prompt: 'Vilket uttryck fungerar som passivmotsvarighet till det aktiva "ein Thema zur Sprache bringen"?',
        options: [
          'Ein Thema kommt zur Sprache.',
          'Ein Thema stellt zur Sprache.',
          'Ein Thema geht zur Sprache.',
          'Ein Thema nimmt zur Sprache.'
        ],
        answer: 0,
        explanation: 'zur Sprache kommen fungerar regelbundet som den intransitiva/passiva motsvarigheten till zur Sprache bringen (bli omtalad / komma upp till debatt).',
        feedback: [
          'Helt rätt! Paret bringen/kommen är ett klassiskt aktiv/passiv-mönster i FVG.',
          'Fel. Stellen zur Sprache existerar inte.',
          'Fel. Gehen zur Sprache existerar inte.',
          'Fel. Nehmen zur Sprache existerar inte.'
        ]
      },
      {
        id: 'x029-q4',
        context: 'Valensförändring från enkelt fullverb till FVG.',
        prompt: 'Hur ändras objektstyrningen när verbet "kritisieren" ersätts med FVG "Kritik üben"?',
        options: [
          'kritisieren tar ackusativobjekt (etwas kritisieren); Kritik üben styr prepositionen an + dativ (Kritik an etwas üben).',
          'Kritik üben styr dubbel ackusativ.',
          'kritisieren styr genitiv medan Kritik üben är intransitivt.',
          'Valensen förblir helt identisk utan prepositionsförändring.'
        ],
        answer: 0,
        explanation: 'Genom nominaliseringen omvandlas det direkta ackusativobjektet till ett prepositionsattribut knutet till substantivet: "Kritik an dem Plan üben".',
        feedback: [
          'Korrekt! Prepositionskomplementet knyts till substantivet Kritik.',
          'Fel. Dubbel ackusativ förekommer inte här.',
          'Fel. Kritisieren styr ackusativ, inte genitiv.',
          'Fel. Prepositionen an tillkommer obligatoriskt.'
        ]
      },
      {
        id: 'x029-q5',
        context: 'Syntaktiska restriktioner hos FVG.',
        prompt: 'Varför kan man i meningen "Er zieht das Problem in Betracht" inte ersätta "in Betracht" med "dahin" eller "worin"?',
        options: [
          'Eftersom in Betracht inte är ett självständigt rumsadverbial utan en lexikalt fixerad del av predikatet.',
          'Eftersom verbet ziehen inte kan kombineras med pronominaladverb.',
          'Eftersom Betracht är ett maskulint substantiv.',
          'Det går alldeles utmärkt att ersätta det med dahin i formell stil.'
        ],
        answer: 0,
        explanation: 'Predikativa substantiv i FVG förlorar sin syntaktiska autonomi och kan inte pronominaliseras som fria prepositionsfraser.',
        feedback: [
          'Helt rätt! Substitutionsspärren är det främsta beviset för predikatets enhet.',
          'Fel. Fullverbet ziehen kan visst ta pronominaladverb (Er zog es heraus).',
          'Fel. Betracht är feminint (die Betrachtung) eller maskulint rotord, men genus är irrelevant för spärren.',
          'Fel. *Er zieht das Problem dahin är ogrammatiskt i denna betydelse.'
        ]
      },
      {
        id: 'x029-q6',
        context: 'Prepositionsidiomatik i FVG.',
        prompt: 'Vilken preposition hör obligatoriskt samman med substantivet Rücksicht i FVG "Rücksicht nehmen"?',
        options: [
          'auf + ackusativ (Rücksicht nehmen auf die Nachbarn).',
          'zu + dativ (*Rücksicht nehmen zu den Nachbarn).',
          'für + ackusativ (*Rücksicht nehmen für die Nachbarn).',
          'an + dativ (*Rücksicht nehmen an den Nachbarn).'
        ],
        answer: 0,
        explanation: 'Konstruktionen heter fast och idiomatiskt "Rücksicht nehmen auf" (+ ackusativ) = ta hänsyn till.',
        feedback: [
          'Korrekt! Att översätta svenskans "till" med "zu" är ett typiskt fel.',
          'Fel. Zu är en direkt interferens från svenskans "till".',
          'Fel. Für används inte med Rücksicht nehmen.',
          'Fel. An används inte här.'
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
console.log('Finished updating learning-quizzes.ts with Group 3B quizzes.');
