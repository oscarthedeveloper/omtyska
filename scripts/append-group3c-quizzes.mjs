import fs from 'node:fs';
import path from 'node:path';

const quizzes = {
  '/docs/fordjupning/verb-och-valens/passiverbarhet-och-subjektlos-passiv': {
    lessonId: 'X030',
    href: '/docs/fordjupning/verb-och-valens/passiverbarhet-och-subjektlos-passiv',
    title: 'Snabbkoll: Passiverbarhet och subjektlös passiv',
    questions: [
      {
        id: 'x030-q1',
        context: 'Subjektlöst passiv vid intransitiva verb.',
        prompt: 'Hur passiveras den aktiva satsen "Die Leute tanzen hier die ganze Nacht" korrekt på tyska?',
        options: [
          'Hier wird die ganze Nacht getanzt. (subjektlöst passiv i singular).',
          '*Hier werden die ganze Nacht getanzt.',
          '*Hier wird es die ganze Nacht getanzt.',
          '*Hier ist die ganze Nacht getanzt worden sein.'
        ],
        answer: 0,
        explanation: 'Ett intransitivt verb bildar subjektlöst passiv; verbet böjs i 3:e person singular (wird) och satsen saknar grammatiskt subjekt.',
        feedback: [
          'Helt rätt! Subjektlöst passiv kräver alltid singularis wird.',
          'Fel. Plural werden kan endast användas om det finns ett nominativsubjekt i plural.',
          'Fel. Platshållaren es raderas obligatoriskt när förfältet fylls av Hier.',
          'Fel. Förvrängd tempusform.'
        ]
      },
      {
        id: 'x030-q2',
        context: 'Dativobjekt i passivsats.',
        prompt: 'Vad händer med dativobjektet i den aktiva satsen "Der Arzt half dem verletzten Kind" vid passivering?',
        options: [
          'Det förblir i dativ: "Dem verletzten Kind wurde (vom Arzt) geholfen."',
          'Det blir nominativsubjekt: *"Das verletzte Kind wurde geholfen."',
          'Det blir ackusativobjekt: *"Das verletzte Kind wird geholfen."',
          'Det faller bort helt och kan inte uttryckas.'
        ],
        answer: 0,
        explanation: 'I tyskt Vorgangspassiv kan dativobjekt ALDRIG befordras till nominativsubjekt. Det måste behålla sitt dativkasus: Dem Kind wurde geholfen.',
        feedback: [
          'Korrekt! Dativobjektets orubblighet i passiv är en grundbult i tysk syntax.',
          'Fel. Att göra dativ till subjekt (*Das Kind wurde geholfen) är ett allvarligt interferensfel.',
          'Fel. Kasuset ändras inte till ackusativ.',
          'Fel. Dativobjektet behålls och fungerar ofta som satsens tema.'
        ]
      },
      {
        id: 'x030-q3',
        context: 'Förfälts-es (Vorfeld-es) och radering.',
        prompt: 'I vilket av följande fall MÅSTE ordet "es" raderas ur passivsatsen?',
        options: [
          'När ett annat led (adverbial eller objekt) flyttas till förfältet: "Gestern wurde [...] gearbeitet."',
          'När verbet står i presens.',
          'När satsen har en negation.',
          'Es raderas aldrig i tyska passivsatser.'
        ],
        answer: 0,
        explanation: 'Platshållaren es har endast till uppgift att fylla förfältet i huvudsats. När förfältet fylls av ett annat led raderas es obligatoriskt.',
        feedback: [
          'Helt rätt! "Gestern wurde gearbeitet" (aldrig *Gestern wurde es gearbeitet).',
          'Fel. Tempus har ingen inverkan på förfälts-es.',
          'Fel. Negation påverkar inte platshållarprincipen direkt.',
          'Fel. Es raderas regelmässigt så fort förfältet upptas av annat led.'
        ]
      },
      {
        id: 'x030-q4',
        context: 'Passivblockering: verb som inte kan bilda passiv.',
        prompt: 'Vilket av följande verb kan INTE bilda Vorgangspassiv med werden?',
        options: [
          'besitzen (att äga)',
          'schlagen (att slå)',
          'diskutieren (att diskutera)',
          'unterstützen (att stödja)'
        ],
        answer: 0,
        explanation: 'Verb som uttrycker ägande, tillstånd eller mått (haben, besitzen, wiegen, kennen) är spärrade för passivering.',
        feedback: [
          'Korrekt! Man kan inte säga *Das Haus wird besessen.',
          'Fel. Schlagen är ett transitivt agentivt verb som lätt passiveras (Er wird geschlagen).',
          'Fel. Diskutieren kan bilda både personligt och opersonligt passiv.',
          'Fel. Unterstützen passiveras reguljärt (Er wird unterstützt).'
        ]
      },
      {
        id: 'x030-q5',
        context: 'Kongruens vid dativplural.',
        prompt: 'Vilken form av hjälpverbet werden ska användas i passivsatsen "Den Patienten [...] sofort geholfen"?',
        options: [
          'wurde / wird (singularis, eftersom satsen saknar nominativsubjekt).',
          '*wurden / werden (pluralis, eftersom patienterna är flera).',
          '*worden (particip).',
          '*geworden (particip).'
        ],
        answer: 0,
        explanation: 'Eftersom Den Patienten står i dativ är det inte grammatiskt subjekt. Verbet måste därför stå i opersonlig 3:e person singular: wurde/wird.',
        feedback: [
          'Helt rätt! Singularform är obligatorisk i subjektlösa passivsatser.',
          'Fel. Pluralformen *wurden är ett vanligt fel som beror på att inläraren förväxlar dativ med subjekt.',
          'Fel. Finita verb krävs här.',
          'Fel. Geworden används i kopulapassiv, inte Vorgangspassiv.'
        ]
      },
      {
        id: 'x030-q6',
        context: 'Subjektlöst passiv i bisats.',
        prompt: 'Hur ser den korrekta bisatsen ut för "...eftersom det skrattades mycket"?',
        options: [
          '...weil viel gelacht wurde. (utan es).',
          '*...weil es viel gelacht wurde.',
          '*...weil es wurde viel gelacht.',
          '*...weil viel wurde es gelacht.'
        ],
        answer: 0,
        explanation: 'I bisatser inleds förfältet av konjunktionen (weil) och verbet står sist; förfälts-es kan därför inte existera i bisatsen.',
        feedback: [
          'Korrekt! "...weil viel gelacht wurde" är felfri tysk ordföljd.',
          'Fel. Platshållaren es kan inte förekomma i underordnad bisats.',
          'Fel. Huvudsatsordföljd i bisats med weil är felaktig.',
          'Fel. Ordföljden är helt sönderbruten.'
        ]
      }
    ]
  },
  '/docs/fordjupning/verb-och-valens/mottagarpassiv-och-andra-diatesalternativ': {
    lessonId: 'X031',
    href: '/docs/fordjupning/verb-och-valens/mottagarpassiv-och-andra-diatesalternativ',
    title: 'Snabbkoll: Mottagarpassiv och andra diatesalternativ',
    questions: [
      {
        id: 'x031-q1',
        context: 'Diatesmekanism i Rezipientenpassiv.',
        prompt: 'Vad händer med deltagarna när den aktiva satsen "Der Verlag schickt dem Autor den Vertrag" omvandlas till Rezipientenpassiv?',
        options: [
          'Dativobjektet "dem Autor" blir nominativsubjekt ("Der Autor") medan "den Vertrag" behåller sitt ackusativkasus.',
          'Både författaren och avtalet blir nominativsubjekt i plural.',
          'Avtalet blir subjekt medan författaren förblir i dativ.',
          'Konstruktionen kräver att verbet schicken ersätts med werden.'
        ],
        answer: 0,
        explanation: 'I Rezipientenpassiv befordras dativobjektet till nominativsubjekt: "Der Autor bekommt den Vertrag (ack) geschickt".',
        feedback: [
          'Helt rätt! "Der Autor bekommt den Vertrag geschickt".',
          'Fel. Två nominativsubjekt i samma sats är syntaktiskt omöjligt här.',
          'Fel. Det vore vanligt Vorgangspassiv med werden.',
          'Fel. Rezipientenpassiv använder bekommen/kriegen/erhalten som hjälpverb.'
        ]
      },
      {
        id: 'x031-q2',
        context: 'Stilregister bland hjälpverben.',
        prompt: 'Vilket hjälpverb bör väljas i en akademisk avhandling eller juridisk inlaga för att uttrycka mottagarpassiv?',
        options: [
          'erhalten (hög sakprosa och formellt fackspråk).',
          'kriegen (vardagligt talspråk).',
          'bekommen (fungerar men är neutralt snarare än formellt hög stil).',
          'haben (bildar inte mottagarpassiv).'
        ],
        answer: 0,
        explanation: 'erhalten signalerar officiell, juridisk och akademisk stil: "Der Antragsteller erhält den Bescheid zugestellt".',
        feedback: [
          'Korrekt! Erhalten är den högsta stilnivån.',
          'Fel. Kriegen är strikt talspråkligt och bannlyst i akademisk skrift.',
          'Fel. Bekommen är neutralt, men erhalten är det mest adekvata i juridisk/akademisk stil.',
          'Fel. Haben bildar inte Rezipientenpassiv.'
        ]
      },
      {
        id: 'x031-q3',
        context: 'Tillåtna verbklasser för Rezipientenpassiv.',
        prompt: 'Vilket av följande verb kan bilda ett grammatiskt Rezipientenpassiv?',
        options: [
          'schenken (schenken -> bekommen geschenkt)',
          'ähneln (ähneln -> *bekommen geähnelt)',
          'gehören (gehören -> *bekommen gehört)',
          'gefallen (gefallen -> *bekommen gefallen)'
        ],
        answer: 0,
        explanation: 'Rezipientenpassiv kräver att dativargumentet semantiskt är en mottagare eller recipient (som vid schenken, überweisen, leihen).',
        feedback: [
          'Helt rätt! "Er bekommt ein Buch geschenkt".',
          'Fel. Ähneln uttrycker en statisk likhetsrelation utan mottagare.',
          'Fel. Gehören uttrycker äganderelation och kan inte bilda mottagarpassiv.',
          'Fel. Gefallen uttrycker en emotionell upplevelse, inte en överföring.'
        ]
      },
      {
        id: 'x031-q4',
        context: 'Bibehållet ackusativobjekt vid maskulina substantiv.',
        prompt: 'Vilket alternativ är grammatiskt korrekt i Rezipientenpassiv?',
        options: [
          'Er bekommt einen neuen Computer geschenkt. (ackusativ maskulinum).',
          '*Er bekommt ein neuer Computer geschenkt. (felaktig nominativ).',
          '*Er bekommt einem neuen Computer geschenkt. (felaktig dativ).',
          '*Er wird einen neuen Computer bekommen geschenkt.'
        ],
        answer: 0,
        explanation: 'Saken som ges eller överförs kvarstår i ackusativ: maskulinum obestämd artikel blir "einen neuen Computer".',
        feedback: [
          'Korrekt! Objektet behåller ackusativ: "einen neuen Computer".',
          'Fel. Nominativform på saken är felaktig eftersom subjektet redan är Er.',
          'Fel. Dativform är felaktig.',
          'Fel. Ordföljden och hjälpverbvalet är helt förvanskade.'
        ]
      },
      {
        id: 'x031-q5',
        context: 'Mottagarpassiv vid berövandeverb (malfaktiv diates).',
        prompt: 'Vad innebär satsen "Dem Angeklagten wurde der Pass abgenommen" när den skrivs om med bekommen?',
        options: [
          'Der Angeklagte bekam den Pass abgenommen. (mottagaren drabbas negativt av handlingen).',
          'Der Angeklagte nahm den Pass ab.',
          'Der Pass bekam den Angeklagten abgenommen.',
          'Der Richter bekam den Pass abgenommen.'
        ],
        answer: 0,
        explanation: 'Vid privativa/berövande verb befordras den drabbade personen till subjekt: "Der Angeklagte bekam den Pass abgenommen".',
        feedback: [
          'Helt rätt! Rezipientenpassiv fungerar utmärkt även vid malfaktiva berövandeverb.',
          'Fel. Det vore en aktiv handling utförd av den tilltalade själv.',
          'Fel. Passet är saken, inte personen som drabbas.',
          'Fel. Domaren är agenten, inte den drabbade mottagaren.'
        ]
      },
      {
        id: 'x031-q6',
        context: 'Svensk interferens vid "bli lovad".',
        prompt: 'Hur uttrycks det svenska påståendet "Jag blev lovad en belöning" korrekt på standardtyska?',
        options: [
          'Ich bekam eine Belohnung versprochen (eller: Mir wurde eine Belohnung versprochen).',
          '*Ich wurde eine Belohnung versprochen.',
          '*Ich war eine Belohnung versprochen.',
          '*Ich bin eine Belohnung zu versprechen.'
        ],
        answer: 0,
        explanation: 'På tyska kan man inte använda werden med personligt subjekt vid verb som i aktivum styr dativ (*Ich wurde versprochen är fel). Rätt är bekommen-passiv eller opersonligt passiv.',
        feedback: [
          'Korrekt! Båda alternativen är korrekta, medan *Ich wurde versprochen är ett grovt fel.',
          'Fel. Detta är en direkt skandinavism.',
          'Fel. Zustandspassiv med sein fungerar inte så här.',
          'Fel. Konstruktionen är ogrammatisk.'
        ]
      }
    ]
  },
  '/docs/fordjupning/verb-och-valens/modal-infinitiv-och-gerundiv': {
    lessonId: 'X032',
    href: '/docs/fordjupning/verb-och-valens/modal-infinitiv-och-gerundiv',
    title: 'Snabbkoll: Modal infinitiv och gerundiv',
    questions: [
      {
        id: 'x032-q1',
        context: 'Betydelsen hos sein + zu + Infinitiv.',
        prompt: 'Vad uttrycker meningen "Diese Aufgabe ist bis morgen zu erledigen"?',
        options: [
          'En passiv nödvändighet: uppgiften MÅSTE utföras senast imorgon (= muss erledigt werden).',
          'En aktiv avsikt: subjektet vill utföra uppgiften.',
          'Att uppgiften redan är avslutad.',
          'Att det är förbjudet att utföra uppgiften.'
        ],
        answer: 0,
        explanation: 'sein + zu + Infinitiv har alltid passiv innebörd och uttrycker i normativ kontext tvingande nödvändighet (müssen/sollen).',
        feedback: [
          'Helt rätt! "sein + zu" motsvarar här "muss erledigt werden".',
          'Fel. Satsen är passiv; uppgiften är handlingens föremål, inte en agens med avsikt.',
          'Fel. Det uttrycker framtida plikt, inte fullbordat tillstånd.',
          'Fel. Förbud uttrycks med negation (ist nicht zu...).'
        ]
      },
      {
        id: 'x032-q2',
        context: 'Aktiv betydelse hos haben + zu + Infinitiv.',
        prompt: 'Vad är den syntaktiska och semantiska skillnaden mellan "sein + zu" och "haben + zu"?',
        options: [
          'sein + zu är passivt (subjektet påverkas); haben + zu är aktivt (subjektet är agens som har en skyldighet).',
          'Båda konstruktionerna är identiska synonymer.',
          'haben + zu kan bara användas i dåtid.',
          'sein + zu styr ackusativobjekt.'
        ],
        answer: 0,
        explanation: 'sein + zu = passiv (Das Buch ist zu lesen = Boken måste läsas); haben + zu = aktiv (Er hat das Buch zu lesen = Han måste läsa boken).',
        feedback: [
          'Korrekt! Distinktionen passiv (sein) kontra aktiv (haben) är fundamental.',
          'Fel. De har motsatt diatesinnebörd.',
          'Fel. Haben + zu förekommer i alla tempus.',
          'Fel. Sein är ett intransitivt/kopulativt hjälpverb.'
        ]
      },
      {
        id: 'x032-q3',
        context: 'Bildning av gerundiv (Zu-Partizip).',
        prompt: 'Hur bildas gerundivet av det separabla verbet "ausfüllen" som attribut till "das Formular"?',
        options: [
          'das auszufüllende Formular (zu infogas mellan partikeln och stammen, skrivs i ett ord).',
          '*das ausfüllende zu Formular',
          '*das zu ausfüllende Formular',
          '*das ausgefüllte zu Formular'
        ],
        answer: 0,
        explanation: 'Vid separabla partikelverb infogas zu mellan partikeln och stammen i presens particip: aus + zu + füllend + e = auszufüllende.',
        feedback: [
          'Helt rätt! Sammanskrivning med infogat zu är den strikta morfologiska regeln.',
          'Fel. Zu får inte placeras efter verbet.',
          'Fel. Vid partikelverb placeras zu aldrig framför partikeln.',
          'Fel. Gerundiv bildas av presens particip (Partizip I), inte perfekt particip.'
        ]
      },
      {
        id: 'x032-q4',
        context: 'Böjning av gerundiv som adjektivattribut.',
        prompt: 'Vilken form av gerundivet är korrekt i frasen "mit den [...] Maßnahmen" (av durchführen, dativ plural)?',
        options: [
          'durchzuführenden (svag böjning i dativ plural: -en).',
          '*durchzuführende (saknar dativändelse).',
          '*durchzuführender (genitiv/feminin form).',
          '*durchzuführen (oböjd infinitiv).'
        ],
        answer: 0,
        explanation: 'Gerundivet böjs precis som vilket attributivt adjektiv som helst: efter bestämd artikel i dativ plural krävs svag ändelse -en.',
        feedback: [
          'Korrekt! "mit den durchzuführenden Maßnahmen".',
          'Fel. Dativ plural kräver alltid ändelsen -en.',
          'Fel. Ändelsen -er passar inte efter bestämd artikel i dativ plural.',
          'Fel. Gerundivet måste kongruensböjas.'
        ]
      },
      {
        id: 'x032-q5',
        context: 'Negation och möjlighet vid sein + zu.',
        prompt: 'Vad betyder formuleringen "Dieser Fehler ist nicht zu verzeihen"?',
        options: [
          'Detta fel kan inte förlåtas / är oförlåtligt (= kann nicht verziehen werden).',
          'Detta fel måste absolut förlåtas.',
          'Någon har redan förlåtit felet.',
          'Felet har inte gjort någon skada.'
        ],
        answer: 0,
        explanation: 'Tillsammans med negation uttrycker sein + zu ofta modaliteten omöjlighet (kann nicht... werden).',
        feedback: [
          'Helt rätt! Negationen förmedlar omöjlighet (kan ej förlåtas).',
          'Fel. Negationen utesluter positiv nödvändighet.',
          'Fel. Satsen uttrycker modal bedömning, inte historiskt faktum.',
          'Fel. Det handlar om förlåtelse, inte skadeomfattning.'
        ]
      },
      {
        id: 'x032-q6',
        context: 'Gerundiv vs. Partizip I utan zu.',
        prompt: 'Hur skiljer sig "die zu lösende Aufgabe" från "die lösende Aufgabe"?',
        options: [
          'die zu lösende Aufgabe betyder uppgiften som MÅSTE/KAN lösas (passiv modalitet); den andra är meningslös eftersom uppgiften inte själv löser något aktivt.',
          'Båda uttrycker exakt samma sak utan nyansskillnad.',
          'die lösende Aufgabe är passiv medan zu lösende är aktiv.',
          'zu lösende är ett substantiv.'
        ],
        answer: 0,
        explanation: 'Partizip I utan zu är rent aktivt (en uppgift kan inte lösa sig själv); med zu blir det ett gerundiv med passiv nödvändighetsbetydelse.',
        feedback: [
          'Korrekt! Partizip I förutsätter aktiv agens, medan gerundivet tillför passiv modalitet.',
          'Fel. Partikeln zu förändrar betydelsen i grunden.',
          'Fel. Det är tvärtom: gerundivet med zu är passivt.',
          'Fel. Båda är attributiva particip/adjektivformer.'
        ]
      }
    ]
  },
  '/docs/fordjupning/verb-och-valens/halvmodala-verb-och-verbala-perifraser': {
    lessonId: 'X034',
    href: '/docs/fordjupning/verb-och-valens/halvmodala-verb-och-verbala-perifraser',
    title: 'Snabbkoll: Halvmodala verb och verbala perifraser',
    questions: [
      {
        id: 'x034-q1',
        context: 'Restriktioner för halvmodalverbet brauchen.',
        prompt: 'I vilket av följande sammanhang är verbet brauchen + zu + Infinitiv grammatiskt korrekt i standardtyska?',
        options: [
          'I nekade eller restriktiva satser: "Du brauchst heute nicht zu kochen."',
          'I enkla positiva påståenden: *"Du brauchst jetzt ein Buch zu lesen."',
          'Enbart tillsammans med hjälpverbet sein.',
          'Enbart i passiv form.'
        ],
        answer: 0,
        explanation: 'brauchen + zu fordrar en negation (nicht, kein, kaum) eller en restriktiv partikel (nur, bloß). I positiva satser används müssen.',
        feedback: [
          'Helt rätt! Brauchen är ett s.k. NPI-verb (Negative Polarity Item).',
          'Fel. Positiva jakande påståenden kräver müssen (Du musst jetzt ein Buch lesen).',
          'Fel. Brauchen tar haben i perfekt.',
          'Fel. Brauchen bildar inte passiv på detta sätt.'
        ]
      },
      {
        id: 'x034-q2',
        context: 'Höjningsverb (Subjekthebung) vid drohen.',
        prompt: 'Vad innebär det att drohen fungerar som ett höjningsverb i satsen "Das Gerüst droht einzustürzen"?',
        options: [
          'Ställningen har ingen egen agens eller vilja att hota någon; subjektet styrs uteslutande av infinitiven einstürzen och drohen uttrycker överhängande fara.',
          'Ställningen uttalar ett direkt hot mot byggarbetarna.',
          'Verbet drohen är ett kopulaverb som kräver predikativ.',
          'Satsen är en förkortning av ett Rezipientenpassiv.'
        ],
        answer: 0,
        explanation: 'Vid höjningsverb (Raising) tilldelar det finita verbet ingen semantisk roll till subjektet; verbet modifierar endast händelsens sannolikhet/modalitet.',
        feedback: [
          'Korrekt! Höjningsverbet saknar agensselektion mot subjektet.',
          'Fel. Döda ting som byggnadsställningar kan inte utföra avsiktliga hot.',
          'Fel. Drohen är inget kopulaverb.',
          'Fel. Det har inget med mottagarpassiv att göra.'
        ]
      },
      {
        id: 'x034-q3',
        context: 'Partikeln zu vid brauchen i formell skrift.',
        prompt: 'Hur lyder den formellt korrekta standardspråkliga formuleringen för "du behöver inte vänta"?',
        options: [
          'Du brauchst nicht zu warten. (partikeln zu är obligatorisk i skriftspråk).',
          '*Du brauchst nicht warten. (talspråkligt/substandard).',
          '*Du brauchst nicht gewartet.',
          '*Du brauchst zu nicht warten.'
        ],
        answer: 0,
        explanation: 'I standardiserat skriftspråk kräver brauchen alltid partikeln zu: "Du brauchst nicht zu warten".',
        feedback: [
          'Helt rätt! "Wer brauchen ohne zu gebraucht..." regeln gäller i formell skrift.',
          'Fel. Även om det hörs i vardagligt talspråk räknas formen utan zu som substandard.',
          'Fel. Det krävs en infinitiv, inte ett particip.',
          'Fel. Partikeln zu placeras omedelbart före infinitiven.'
        ]
      },
      {
        id: 'x034-q4',
        context: 'Ersatzinfinitiv vid brauchen i perfekt.',
        prompt: 'Vilken perfektform är skriftspråklig standard i meningen "Er hat gestern nicht [...]"?',
        options: [
          'zu kommen brauchen (Ersatzinfinitiv av brauchen).',
          '*zu kommen gebraucht (reguljärt particip).',
          '*gekommen zu brauchen.',
          '*zu gekommen brauchen.'
        ],
        answer: 0,
        explanation: 'Tillsammans med en infinitiv tillämpar verbet brauchen obligatoriskt Ersatzinfinitiv i perfekt: "hat nicht zu kommen brauchen".',
        feedback: [
          'Korrekt! Ersatzinfinitiv gäller för modalverb och halvmodala verb som brauchen.',
          'Fel. Participet gebraucht undviks när verbet styr en infinitiv.',
          'Fel. Båda verbformerna är förvanskade.',
          'Fel. Partikeln zu kopplas till den underordnade infinitiven.'
        ]
      },
      {
        id: 'x034-q5',
        context: 'pflegen som habituellt halvmodalverb.',
        prompt: 'Vad uttrycker verbet pflegen i meningen "Der Gelehrte pflegte abends bei Kerzenlicht zu lesen"?',
        options: [
          'En regelbunden vana i ett formellt/litterärt register (= brukade läsa).',
          'Att han vårdade en sjuk person genom att läsa för henne.',
          'Att det var förbjudet för honom att läsa.',
          'Att han tvingades läsa mot sin vilja.'
        ],
        answer: 0,
        explanation: 'pflegen + zu + Infinitiv uttrycker en habituell handling (vana) i bildat och klassiskt språk: han brukade läsa.',
        feedback: [
          'Helt rätt! Det uttrycker vana (habitus).',
          'Fel. Här finns inget direkt objekt för vård, utan en infinitivfras.',
          'Fel. Det har ingen förbudsbetydelse.',
          'Fel. Det uttrycker egen vana, inte yttre tvång.'
        ]
      },
      {
        id: 'x034-q6',
        context: 'Svensk interferens vid "bruka".',
        prompt: 'Hur översätts den vardagliga svenska meningen "Jag brukar ta bussen till universitetet" bäst till modern tysk talspråksstandard?',
        options: [
          'Ich nehme normalerweise (gewöhnlich) den Bus zur Universität.',
          '*Ich pflege den Bus zur Universität zu nehmen. (alltför styltigt och ålderdomligt för vardagen).',
          '*Ich brauche den Bus zur Universität nehmen.',
          '*Ich bin gewohnt den Bus nehmen.'
        ],
        answer: 0,
        explanation: 'Svenskans vanliga "bruka" översätts i modernt vardagsspråk bäst med adverb som normalerweise eller meistens. Att använda pflegen i vardagssituationer låter extremt styltigt.',
        feedback: [
          'Korrekt! Normalerweise eller gewöhnlich är det naturliga moderna valet.',
          'Fel. Pflegen låter 1800-talsaktigt och onaturligt stelt i en vardagskontext.',
          'Fel. Brauchen betyder behöva i nekad kontext, inte bruka.',
          'Fel. Konstruktionen saknar zu och är felaktig.'
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
console.log('Finished updating learning-quizzes.ts with Group 3C quizzes.');
