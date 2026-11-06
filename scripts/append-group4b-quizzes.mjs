import fs from 'node:fs';
import path from 'node:path';

const quizzes = {
  '/docs/fordjupning/syntax/satsflator-och-langvaga-beroenden': {
    lessonId: 'X043',
    href: '/docs/fordjupning/syntax/satsflator-och-langvaga-beroenden',
    title: 'Snabbkoll: Satsflätor och långväga beroenden',
    questions: [
      {
        id: 'x043-q1',
        context: 'Tyskans idiomaturgi för svenska satsflätor.',
        prompt: 'Hur uttrycks den svenska satsflätan "Vem tror du att han såg?" mest naturligt och idiomatiskt på tyska?',
        options: [
          'Wen, glaubst du, hat er gesehen? (inbäddad V2 med parentetisk inskjutning).',
          '*Wen glaubst du, ob er gesehen hat? (agrammatisk extraktion ur ob-sats).',
          '*Wen er sah, glaubst du dass?',
          '*Glaubst du wen, dass er sah?'
        ],
        answer: 0,
        explanation: 'Den mest naturliga och eleganta tyska motsvarigheten till svenska satsflätor är inbäddad V2 med parentetiskt bryggverb: "Wen, glaubst du, hat er gesehen?".',
        feedback: [
          'Helt rätt! Inbäddad V2 är standardmönstret i modern tyska.',
          'Fel. Ob-satser är strikta syntaktiska öar som totalt förbjuder extraktion.',
          'Fel. Ordföljden är fullständigt meningslös på tyska.',
          'Fel. Frågeordet måste stå i förfältet.'
        ]
      },
      {
        id: 'x043-q2',
        context: 'Was-kopiering (partiell w-rörelse).',
        prompt: 'Vad kännetecknar den tyska "was-kopieringskonstruktionen" i meningen "Was glaubst du, wen sie eingeladen haben?"?',
        options: [
          'Ordet was fungerar som en tidig frågeplatshållare i huvudsatsen medan det verkliga frågeordet wen står i bisatsen.',
          'Ordet was är ett personligt pronomen i genitiv.',
          'Konstruktionen är ett dialektalt fel som aldrig får användas i skrift.',
          'Både was och wen syftar på samma sakobjekt.'
        ],
        answer: 0,
        explanation: 'Was-kopiering är en väletablerad konstruktion i tysk syntax där was markerar frågan i förfältet och det specifika frågeordet stannar i bisatsen.',
        feedback: [
          'Korrekt! Partiell w-rörelse med was som platshållare är ett klassiskt drag i tysk syntax.',
          'Fel. Was är ett frågeord i neutrum ackusativ/nominativ här, inte genitiv.',
          'Fel. Was-kopiering är en erkänd och väldokumenterad konstruktion i standardspråklig grammatik.',
          'Fel. Wen frågar efter en person medan was är en ren strukturell markör.'
        ]
      },
      {
        id: 'x043-q3',
        context: 'Syntaktiska öar: ob-satser.',
        prompt: 'Varför är meningen *"Wen fragt er, ob du kennst?" totalt ogrammatisk i tyskan?',
        options: [
          'Eftersom interrogativa bisatser inledda med ob utgör absoluta syntaktiska öar som blockerar all extraktion.',
          'Eftersom verbet fragen inte kan användas i presens.',
          'Eftersom wen måste bytas ut mot wer.',
          'Eftersom ob måste ersättas med wenn.'
        ],
        answer: 0,
        explanation: 'Enligt Ross ö-villkor (Island Constraints) är indirekta ja/nej-frågor med ob slutna öar ur vilka inga led kan flyttas ut.',
        feedback: [
          'Helt rätt! Ob-öar blockerar extraktion absolut i tyskan.',
          'Fel. Fragen böjs reguljärt i presens.',
          'Fel. Kennen styr ackusativ så wen är i sig rätt kasus.',
          'Fel. Ob markerar indirekt fråga och kan inte ersättas med wenn här.'
        ]
      },
      {
        id: 'x043-q4',
        context: 'Bryggverb kontra icke-bryggverb.',
        prompt: 'Vilket av följande verb är ett "bryggverb" som teoretiskt tillåter långväga extraktion ur en dass-sats?',
        options: [
          'meinen (anse/tycka)',
          'wissen (veta / faktaverb)',
          'bedauern (beklaga / känsloverb)',
          'vergessen (glömma)'
        ],
        answer: 0,
        explanation: 'Verb som uttrycker åsikt eller antagande (meinen, glauben, sagen, denken) fungerar som bryggverb, till skillnad från fakta- och affektverb som blockerar extraktion.',
        feedback: [
          'Korrekt! Meinen och glauben är klassiska bryggverb.',
          'Fel. Wissen är ett faktivt verb som spärrar extraktion.',
          'Fel. Bedauern uttrycker emotionell attityd och spärrar extraktion.',
          'Fel. Vergessen är ett icke-bryggverb.'
        ]
      },
      {
        id: 'x043-q5',
        context: 'Svensk-tysk interferens vid långväga beroenden.',
        prompt: 'Varför varnar tyskundervisningen för att översätta svenska satsflätor ord för ord?',
        options: [
          'Eftersom direkta satsflätor ur dass-satser ofta uppfattas som otympliga eller ogrammatiska i tysk stilistik.',
          'Eftersom tyskan saknar frågeord.',
          'Eftersom bisatser på tyska aldrig får innehålla verb.',
          'Eftersom svenska satsflätor alltid är felaktiga även på svenska.'
        ],
        answer: 0,
        explanation: 'Medan svenska flätar satser fritt, föredrar tyskan inbäddad V2 eller was-kopiering för att inte bryta satsgränserna klumpigt.',
        feedback: [
          'Helt rätt! Att översätta ord för ord ger ofta styltiga eller felaktiga meningar.',
          'Fel. Tyskan har ett rikt system av w-ord.',
          'Fel. Tyska bisatser har självfallet verb.',
          'Fel. Satsflätor är fullständigt naturliga och grammatiska i svenskan.'
        ]
      },
      {
        id: 'x043-q6',
        context: 'Adverbiella bisatser som öar.',
        prompt: 'Kan ett frågeord extraheras ur en kausal bisats inledd med "weil" (*Wen freust du dich, weil er besucht)?',
        options: [
          'Nej, adverbiella bisatser (adjunktsatser) är strikta syntaktiska öar som aldrig tillåter extraktion.',
          'Ja, weil är ett typiskt bryggverb.',
          'Ja, om verbet står i perfekt.',
          'Ja, men bara om subjektet är i plural.'
        ],
        answer: 0,
        explanation: 'Adverbiella bisatser (weil, obwohl, nachdem, während) är universella syntaktiska öar i tysk syntax.',
        feedback: [
          'Korrekt! Extraktion ur weil-satser är helt utesluten.',
          'Fel. Weil är en subjunktion, inte ett verb.',
          'Fel. Tempus upphäver inte ö-villkor.',
          'Fel. Numerus har ingen inverkan på syntaktiska öar.'
        ]
      }
    ]
  },
  '/docs/fordjupning/syntax/kontroll-och-hojning': {
    lessonId: 'X044',
    href: '/docs/fordjupning/syntax/kontroll-och-hojning',
    title: 'Snabbkoll: Kontroll och höjning',
    questions: [
      {
        id: 'x044-q1',
        context: 'Dativobjektskontroll vid råd och tillåtelse.',
        prompt: 'Vem är det underförstådda subjektet (PRO) till verbet aufhören i satsen "Der Arzt rät dem Patienten, mit dem Rauchen aufzuhören"?',
        options: [
          'Patienten (Dativobjektet dem Patienten styr tolkningen av PRO).',
          'Läkaren (Subjektet der Arzt styr tolkningen).',
          'En allmän obestämd person (man).',
          'Satsen saknar subjekt eftersom aufhören är intransitivt.'
        ],
        answer: 0,
        explanation: 'Verbet raten utövar dativobjektskontroll: den som står i dativ är den som avses utföra infinitivens handling.',
        feedback: [
          'Helt rätt! Det är patienten som ska sluta röka, inte läkaren.',
          'Fel. Läkaren ger rådet, men rökslutet ska utföras av patienten.',
          'Fel. Referenten är specifikt patienten.',
          'Fel. Infinitiven har det syntaktiska subjektet PRO som styrs av patienten.'
        ]
      },
      {
        id: 'x044-q2',
        context: 'Subjektskontroll vid versprechen.',
        prompt: 'Vem utför handlingen "morgen zu kommen" i meningen "Er verspricht ihr, morgen pünktlich zu kommen"?',
        options: [
          'Han (subjektet er utövar subjektskontroll trots att dativobjektet ihr finns i satsen).',
          'Hon (dativobjektet ihr styr alltid infinitiven).',
          'Båda två tillsammans som ett kollektiv.',
          'Ingen av dem.'
        ],
        answer: 0,
        explanation: 'Verbet versprechen är ett av de mest kända undantagen från närhetsprincipen: det styr strikt subjektskontroll även när ett dativobjekt är närvarande.',
        feedback: [
          'Korrekt! Han lovar henne att HAN ska komma punktligt.',
          'Fel. Versprechen bryter mot den vanliga dativkontrollen och behåller subjektskontroll.',
          'Fel. Det är inte ett gemensamt löfte.',
          'Fel. Löftet avser subjektets egen handling.'
        ]
      },
      {
        id: 'x044-q3',
        context: 'Höjningsverb (Raising).',
        prompt: 'Vad skiljer ett höjningsverb som "scheinen" från ett kontrollverb som "versuchen"?',
        options: [
          'Höjningsverbet tilldelar ingen egen semantisk roll till subjektet; subjektet lyfts syntaktiskt från infinitiven.',
          'Höjningsverbet kan bara användas i dåtid.',
          'Kontrollverbet tar aldrig något subjekt alls.',
          'Det finns ingen lingvistisk skillnad mellan dem.'
        ],
        answer: 0,
        explanation: 'Ett höjningsverb tilldelar ingen tematisk roll till subjektet, vilket bevisas av att det kan ta icke-agentiva subjekt (Es scheint zu regnen).',
        feedback: [
          'Helt rätt! Höjningsverb saknar egen tematisk rollselektion gentemot subjektet.',
          'Fel. Scheinen böjs i alla tempus.',
          'Fel. Kontrollverb har alltid ett semantiskt fullvärdigt subjekt.',
          'Fel. Distinktionen Kontroll vs. Höjning är en grundsten i modern syntax.'
        ]
      },
      {
        id: 'x044-q4',
        context: 'Ackusativobjektskontroll vid bitten.',
        prompt: 'Vilket kasus styr matrisverbet bitten i meningen "Ich bitte [...] herzlich, pünktlich zu sein"?',
        options: [
          'Ackusativ: dich (Ich bitte dich herzlich, pünktlich zu sein).',
          'Dativ: *dir (Ich bitte dir...).',
          'Genitiv: *deiner.',
          'Nominativ: *du.'
        ],
        answer: 0,
        explanation: 'Verbet bitten styr ackusativobjekt (bitten + ack), som sedan kontrollerar infinitiven: "Ich bitte dich (ack) zu kommen".',
        feedback: [
          'Korrekt! Bitten styr ackusativ: Ich bitte dich.',
          'Fel. Bitten tar aldrig dativ (det är raten som tar dativ).',
          'Fel. Genitiv används inte här.',
          'Fel. Det krävs ett objekt, inte nominativ.'
        ]
      },
      {
        id: 'x044-q5',
        context: 'Bevis för höjning med vädersubjekt.',
        prompt: 'Varför är satsen "Es scheint heute den ganzen Tag zu schneien" grammatisk, medan *"Es versucht zu schneien" är omöjlig?',
        options: [
          'scheinen är ett höjningsverb som tillåter opersonligt vädersubjekt es; versuchen kräver en medveten agens med vilja.',
          'schneien kan inte kombineras med versuchen på grund av vokalharmoni.',
          'scheinen är ett partikelverb.',
          'versuchen kräver två ackusativobjekt.'
        ],
        answer: 0,
        explanation: 'Kontrollverbet versuchen fordrar ett agenssubjekt med medvetenhet (snö har ingen vilja). Höjningsverbet scheinen höjer enkelt upp vädersubjektet es.',
        feedback: [
          'Helt rätt! Vädersubjektstestet är standardbeviset för höjningsstatus.',
          'Fel. Vokalharmoni existerar inte i tysk syntax.',
          'Fel. Scheinen är ett enkelt starkt verb, inte partikelverb.',
          'Fel. Versuchen styr inte dubbel ackusativ.'
        ]
      },
      {
        id: 'x044-q6',
        context: 'Svensk interferens vid "vilja att någon gör något".',
        prompt: 'Hur översätts den svenska meningen "Jag vill att du stannar här" korrekt till tyska?',
        options: [
          'Ich will, dass du hier bleibst. (dass-sats är obligatorisk när ett nytt subjekt introduceras).',
          '*Ich will dich hier zu bleiben. (felaktig anglicism/skandinavism).',
          '*Ich will dir hier bleiben.',
          '*Ich will du hier bleibst.'
        ],
        answer: 0,
        explanation: 'På tyska kan wollen inte bilda AcI eller infinitiv med ett annat objekt (*want you to stay); en dass-sats är obligatorisk.',
        feedback: [
          'Korrekt! "Ich will, dass du..." är den enda korrekta strukturen.',
          'Fel. Detta är en direkt engelsk/svensk interferenskonstruktion som är omöjlig på tyska.',
          'Fel. Dativ fungerar inte vid wollen.',
          'Fel. Det krävs konjunktionen dass eller inbäddad V2.'
        ]
      }
    ]
  },
  '/docs/fordjupning/syntax/koherenta-och-icke-koherenta-infinitivgrupper': {
    lessonId: 'X045',
    href: '/docs/fordjupning/syntax/koherenta-och-icke-koherenta-infinitivgrupper',
    title: 'Snabbkoll: Koherenta och icke-koherenta infinitivgrupper',
    questions: [
      {
        id: 'x045-q1',
        context: 'Gunnar Bechs grundläggande distinktion.',
        prompt: 'Vad är den avgörande skillnaden mellan en koherent och en icke-koherent infinitivkonstruktion enligt Gunnar Bech?',
        options: [
          'I en koherent konstruktion bildar infinitiven och matrisverbet ett gemensamt komplext predikat; i en icke-koherent är infinitiven en självständig bisatsliknande enhet.',
          'Koherenta konstruktioner saknar verb.',
          'Icke-koherenta konstruktioner kan bara användas i dåtid.',
          'Skillnaden beror enbart på om meningen är sann eller falsk.'
        ],
        answer: 0,
        explanation: 'Koherens innebär predikatsammansmältning (komplext verb i mittfältet); icke-koherens innebär att infinitiven bildar en egen syntaktisk domän i efterfältet.',
        feedback: [
          'Helt rätt! Bech visade att koherenta verb bildar ett gemensamt verbkomplex.',
          'Fel. Båda konstruktionerna bygger på verb.',
          'Fel. Tempus är oberoende av koherens.',
          'Fel. Det är en rent syntaktisk strukturskillnad.'
        ]
      },
      {
        id: 'x045-q2',
        context: 'Permutation och scrambling i mittfältet.',
        prompt: 'Varför kan objektet "den Wagen" i meningen "Er hat den Wagen gestern zu reparieren versucht" stå framför tidsadverbialet gestern?',
        options: [
          'Eftersom verbet versuchen här konstrueras koherent, vilket gör att infinitivens objekt integreras i matrisatsens mittfält.',
          'Eftersom den Wagen är satsens grammatiska subjekt.',
          'Eftersom zu reparieren är ett adjektiv.',
          'Satsen är ogrammatisk och bryter mot Duden.'
        ],
        answer: 0,
        explanation: 'I en koherent konstruktion upplöses infinitivens gräns och dess objekt kan scramblas fritt bland matrisatsens adverbial i det gemensamma mittfältet.',
        feedback: [
          'Korrekt! Scrambling av infinitivens objekt i matrisatsens mittfält bevisar koherens.',
          'Fel. Den Wagen står i ackusativ och är objekt.',
          'Fel. Zu reparieren är en infinitivform.',
          'Fel. Satsen är helt grammatisk i koherent stil.'
        ]
      },
      {
        id: 'x045-q3',
        context: 'Strikt koherenta verb.',
        prompt: 'Vilken grupp av verb är OBLIGATORISKT koherenta i standardtyska?',
        options: [
          'Modalverb (können, müssen) och lassen.',
          'hoffen och bedauern.',
          'sich weigern och beschließen.',
          'bezweifeln och verlangen.'
        ],
        answer: 0,
        explanation: 'Modalverben och lassen kan aldrig bilda icke-koherenta bisatsliknande enheter i efterfältet; de bildar alltid ett strikt koherent verbkomplex.',
        feedback: [
          'Helt rätt! Modalverb och lassen är arketypen för koherent konstruktion.',
          'Fel. Hoffen är strikt icke-koherent (står i efterfältet).',
          'Fel. Sich weigern och beschließen är icke-koherenta.',
          'Fel. Bezweifeln och verlangen bildar icke-koherenta fraser eller dass-satser.'
        ]
      },
      {
        id: 'x045-q4',
        context: 'Fjärrpassiv (Fernpassiv / Long Passive).',
        prompt: 'Vad inträffar i den s.k. fjärrpassivkonstruktionen "Der Wagen wurde zu reparieren versucht"?',
        options: [
          'Infinitivens ackusativobjekt (der Wagen) befordras till nominativsubjekt för hela passivkonstruktionen, vilket kräver ett koherent verbkomplex.',
          'Verbet versuchen förvandlas till ett modalt hjälpverb.',
          'Passivformen bildas utan hjälpverb.',
          'Meningen saknar subjekt och är opersonlig.'
        ],
        answer: 0,
        explanation: 'Fjärrpassiv innebär att ett koherent verbkomplex (zu reparieren versuchen) behandlas som ett enda transitivt verb vars objekt befordras till nominativ i passiv.',
        feedback: [
          'Korrekt! Det underordnade objektet befordras till matrisatsens subjekt.',
          'Fel. Versuchen är ett fullverb/aspektverb, inte modalverb.',
          'Fel. Hjälpverbet wurde används fullt ut.',
          'Fel. Der Wagen är explicit nominativsubjekt här.'
        ]
      },
      {
        id: 'x045-q5',
        context: 'Kommasättning vid koherent kontra icke-koherent infinitiv.',
        prompt: 'Vilken regel gäller normalt för kommatecken i en ren koherent konstruktion som "Er hat das Buch zu lesen versucht"?',
        options: [
          'Inget komma sätts, eftersom meningen bildar en enda sammanhållen satsram utan inre bisatsgräns.',
          'Ett komma är obligatoriskt före zu lesen.',
          'Ett komma måste sättas efter hjälpverbet hat.',
          'Det måste finnas minst två kommatecken.'
        ],
        answer: 0,
        explanation: 'I en koherent konstruktion sätts inget komma eftersom det inte finns någon självständig bisatslik enhet att avgränsa.',
        feedback: [
          'Helt rätt! Inget komma vid koherent integrering.',
          'Fel. Komma sätts bara om infinitiven bildar en självständig enhet (icke-koherent i efterfältet).',
          'Fel. Komma sätts aldrig efter hjälpverbet mitt i satsen.',
          'Fel. Inget komma behövs.'
        ]
      },
      {
        id: 'x045-q6',
        context: 'Extrapositionstestet för koherens.',
        prompt: 'Varför är satsen *"Er hat das Buch versucht, zu lesen" ogrammatisk?',
        options: [
          'Eftersom man i en koherent konstruktion inte kan bryta loss enbart infinitiven zu lesen och lämna kvar dess objekt i mittfältet.',
          'Eftersom das Buch är ett neutrum.',
          'Eftersom försöksverb aldrig kan ta objekt.',
          'Eftersom versucht måste stå först i huvudsatsen.'
        ],
        answer: 0,
        explanation: 'Ett infinitivverb kan inte extraponeras ensamt utan sina argument: antingen extraponeras hela frasen (versucht, das Buch zu lesen), eller så integreras allt koherent.',
        feedback: [
          'Korrekt! Extrapositionstestet visar att infinitiven och dess objekt inte kan splittras på detta sätt.',
          'Fel. Genus har ingen betydelse.',
          'Fel. Versuchen tar utmärkt ackusativ eller infinitivkomplement.',
          'Fel. Versucht står i högra klammern i perfekt.'
        ]
      }
    ]
  },
  '/docs/fordjupning/syntax/verbkluster-oberfeld-och-unterfeld': {
    lessonId: 'X046',
    href: '/docs/fordjupning/syntax/verbkluster-oberfeld-och-unterfeld',
    title: 'Snabbkoll: Verbkluster, Oberfeld och Unterfeld',
    questions: [
      {
        id: 'x046-q1',
        context: 'Grundordning i verbklustret i bisats.',
        prompt: 'Vilken är den neutrala grundordningen (högerförgrening / Unterfeld) i ett tredelat kluster i bisats utan Ersatzinfinitiv?',
        options: [
          '3 - 2 - 1: Huvudverb > Infinit hjälpverb > Finit verb (...dass er das Buch gelesen haben muss).',
          '1 - 2 - 3: Finit verb först (...dass er muss haben gelesen das Buch).',
          '2 - 1 - 3: Infinit hjälpverb först.',
          'Ordningen är helt godtycklig.'
        ],
        answer: 0,
        explanation: 'Grundordningen vid reguljära verbkluster i bisats är strikt högerförgrenad: 3 - 2 - 1 med det finita verbet allra sist: "gelesen haben muss".',
        feedback: [
          'Helt rätt! 3 - 2 - 1 är standardordningen för reguljära bisatskluster.',
          'Fel. Att sätta det finita verbet först hör hemma i huvudsatser eller vid Oberfeld-omkastning.',
          'Fel. 2 - 1 - 3 är ogrammatiskt i standardtyska.',
          'Fel. Verbklustret styrs av mycket strikta syntaktiska regler.'
        ]
      },
      {
        id: 'x046-q2',
        context: 'Oberfeld-omkastning vid Ersatzinfinitiv.',
        prompt: 'Hur ser den korrekta skriftspråkliga ordföljden ut i bisatsen "...eftersom han har varit tvungen att läsa boken"?',
        options: [
          '...weil er das Buch hat lesen müssen. (det finita verbet hat placeras i Oberfeld framför båda infinitiverna).',
          '*...weil er das Buch lesen müssen hat. (slutsats med hat är felaktig vid Ersatzinfinitiv).',
          '*...weil er das Buch lesen hat müssen.',
          '*...weil er hat das Buch lesen müssen.'
        ],
        answer: 0,
        explanation: 'Vid Ersatzinfinitiv (haben + två infinitiver) flyttas det finita hjälpverbet obligatoriskt fram i Oberfeld-position omedelbart framför infinitiverna: hat lesen müssen.',
        feedback: [
          'Korrekt! "...hat lesen müssen" är den strikta skriftliga standardregeln.',
          'Fel. Att sätta hat sist undviks i standardspråk vid Ersatzinfinitiv.',
          'Fel. "Zwischenstellung" (*lesen hat müssen) är regionalt/österrikiskt och undviks i skriftlig standard.',
          'Fel. Hat får inte bryta mittfältet framför das Buch.'
        ]
      },
      {
        id: 'x046-q3',
        context: 'Oberfeld-omkastning vid lassen.',
        prompt: 'Vilken form är korrekt i bisatsen "...att hon har låtit reparera bilen"?',
        options: [
          '...dass sie das Auto hat reparieren lassen. (Oberfeld med hat framför reparieren lassen).',
          '*...dass sie das Auto reparieren gelassen hat.',
          '*...dass sie das Auto reparieren lassen hat.',
          '*...dass sie hat reparieren lassen das Auto.'
        ],
        answer: 0,
        explanation: 'Verbet lassen bildar Ersatzinfinitiv i perfekt och kräver därmed Oberfeld-omkastning av hjälpverbet hat framför de två infinitiverna.',
        feedback: [
          'Helt rätt! "...hat reparieren lassen" är standardformen.',
          'Fel. Formen gelassen är felaktig när ett annat verb ingår.',
          'Fel. Hat får inte stå sist efter två infinitiver.',
          'Fel. Das Auto får inte extraponeras till efterfältet.'
        ]
      },
      {
        id: 'x046-q4',
        context: 'Fyrdelade kluster i passiv.',
        prompt: 'Var placeras det finita hjälpverbet hätte i ett fyrdelat passivt modalverbkluster som "...att felet hade bort upptäckas tidigare"?',
        options: [
          'I Oberfeld framför hela klustret: "...dass der Fehler früher hätte entdeckt werden müssen."',
          'Allra sist i satsen: *"...dass der Fehler früher entdeckt werden müssen hätte."',
          'Mellan partikel och stam.',
          'I förfältet före der Fehler.'
        ],
        answer: 0,
        explanation: 'I fyrdelade kluster placeras finita hjälpverb som hätte eller wird i Oberfeld framför de övriga tre verben: hätte entdeckt werden müssen.',
        feedback: [
          'Korrekt! Oberfeld-placeringen av hätte gör klustret rytmiskt och läsbart.',
          'Fel. Att sätta hätte sist efter tre infinitiva former är ogrammatiskt.',
          'Fel. Detta rör böjning, inte klusterposition.',
          'Fel. I en dass-bisats står inte det finita verbet i förfältet.'
        ]
      },
      {
        id: 'x046-q5',
        context: 'Tvådelade passivkluster.',
        prompt: 'Vilken ordningsföljd gäller i ett enkelt tvådelat passivkluster i bisatsen "...att huset byggs"?',
        options: [
          '...dass das Haus gebaut wird. (Particip före werden).',
          '*...dass das Haus wird gebaut. (Huvudsatsordföljd i bisats).',
          '*...dass gebaut das Haus wird.',
          '*...dass wird das Haus gebaut.'
        ],
        answer: 0,
        explanation: 'I ett tvådelat kluster i bisats står huvudverbet (participet) före det finita hjälpverbet: gebaut wird.',
        feedback: [
          'Helt rätt! 2 - 1-ordning: gebaut wird.',
          'Fel. *Wird gebaut är huvudsatsordföljd och ett allvarligt fel i bisatser.',
          'Fel. Gebaut får inte stå före subjektet här.',
          'Fel. Verbet får inte inleda bisatsen efter dass.'
        ]
      },
      {
        id: 'x046-q6',
        context: 'Regional variation i verbkluster.',
        prompt: 'I vilken region i det tyska språkområdet stöter man ofta på formen "...weil er das Buch lesen hat müssen" (Zwischenstellung)?',
        options: [
          'I Österrike och delar av södra Tyskland (bayersk-österrikiskt språkområde).',
          'I norra Tyskland (Hamburg och Hannover).',
          'I Nederländerna.',
          'Enbart i 1700-talslitteratur.'
        ],
        answer: 0,
        explanation: 'Zwischenstellung (3 - 1 - 2: lesen hat müssen) är en välkänd sydtysk och österrikisk regional variation, medan nord- och mellantysk standard kräver 1 - 3 - 2 (hat lesen müssen).',
        feedback: [
          'Korrekt! Zwischenstellung är starkt förankrad i österrikisk och bayersk standardtyska.',
          'Fel. Norra Tyskland tillämpar strikt Duden-standard (hat lesen müssen).',
          'Fel. Nederländska har sina egna klusterregler.',
          'Fel. Formen är i högsta grad levande i modern sydtysk och österrikisk talad och skriven tyska.'
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
console.log('Finished updating learning-quizzes.ts with Group 4B quizzes.');
