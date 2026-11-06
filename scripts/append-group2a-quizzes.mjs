import fs from 'node:fs';
import path from 'node:path';

const quizzes = {
  '/docs/fordjupning/ljud-och-prosodi/foneminventarium-och-artikulation': {
    lessonId: 'X001',
    href: '/docs/fordjupning/ljud-och-prosodi/foneminventarium-och-artikulation',
    title: 'Snabbkoll: Foneminventarium och artikulation',
    questions: [
      {
        id: 'x001-q1',
        context: 'Allofonisk fördelning av det tyska ch-ljudet.',
        prompt: 'Vilket av följande ord uttalas med palatalt ich-Laut ([ç]) i standardtyskans högspråk?',
        options: ['Bücher', 'Bach', 'Buch', 'kochen'],
        answer: 0,
        explanation: 'Efter den främre vokalen /yː/ (umlaut) realiseras fonemet /x/ obligatoriskt som palatalt [ç].',
        feedback: [
          'Helt rätt! Efter främre vokaler (/yː/, /iː/, /eː/, /ɛ/) och diftongerna /aɪ̯/, /ɔʏ̯/ uttalas alltid ich-Laut [ç].',
          'Fel. Efter bakre /a/ uttalas velart ach-Laut [x].',
          'Fel. Efter bakre /uː/ uttalas velart ach-Laut [x].',
          'Fel. Efter bakre rundade /ɔ/ uttalas velart ach-Laut [x].'
        ]
      },
      {
        id: 'x001-q2',
        context: 'Kvantitet och kvalitet i tyska vokaler.',
        prompt: 'Vad skiljer vokalerna åt i minimalparet "Staat" och "Stadt" i tysk fonologi?',
        options: [
          'Staat har lång, sluten/spänd vokal (/aː/), medan Stadt har kort, ospänd vokal (/a/).',
          'De uttalas exakt likadant i talspråk; skillnaden är rent ortografisk.',
          'Stadt har en diftong som glider mot schwa.',
          'Staat har tonaccent 2 medan Stadt har tonaccent 1.'
        ],
        answer: 0,
        explanation: 'Tyskans vokalsystem kopplar samman kvantitet (längd) med spändhet och kvalitet.',
        feedback: [
          'Helt rätt! /aː/ i Staat är långt och perifert, medan /a/ i Stadt är kort och mer öppet/centralt.',
          'Fel. Vokalduration och artikulation skiljer sig markant och särskiljer orden betydelsemässigt.',
          'Fel. Stadt innehåller en kort monoftong [a].',
          'Fel. Tyska har dynamisk tryckaccent, inte tonaccent.'
        ]
      },
      {
        id: 'x001-q3',
        context: 'Morfologiskt styrd allofoni.',
        prompt: 'Varför uttalas "ch" som palatalt [ç] i ordet "Frauchen", trots att det föregås av diftongen /aʊ̯/?',
        options: [
          'Morfemgränsen före diminutivsuffixet -chen tvingar alltid fram det palatala [ç].',
          'Diftongen /aʊ̯/ räknas fonologiskt alltid som en främre vokal.',
          'Det är ett dialektalt undantag som bara förekommer i Bayern.',
          'Bokstaven r i början av ordet neutraliserar velariseringen.'
        ],
        answer: 0,
        explanation: 'Suffixet -chen uttalas alltid med palatalt [ç], oavsett vilken stamvokal som föregår morfemgränsen.',
        feedback: [
          'Korrekt! Morfemgränsen blockerar ach-Laut och kräver palatalt [ç].',
          'Fel. Diftongen /aʊ̯/ slutar bakåt och tar normalt ach-Laut (t.ex. Rauch).',
          'Fel. Detta är standardspråkets rikstäckande fonologiska regel.',
          'Fel. Begynnelsekonsonanten påverkar inte allofondistributionen hos ch.'
        ]
      },
      {
        id: 'x001-q4',
        context: 'Glottala markörer i tysk prosodi.',
        prompt: 'Vad kallas ljudet [ʔ] (Knacklaut / Glottal Stop) och var uppträder det i standardtyskt uttal?',
        options: [
          'En glottal klusil som obligatoriskt inleder betonade rotinitiala vokaler och vokaler efter prefix.',
          'Ett tonlöst sje-ljud som används vid uttal av bokstaven x.',
          'Ett nasalt klangljud som enbart används i franska lånord.',
          'En vokalisk glidning mellan två intilliggande vokaler.'
        ],
        answer: 0,
        explanation: 'Knacklaut [ʔ] är den glottala klusil som skiljer vokaler åt och förhindrar svensk/fransk liaison.',
        feedback: [
          'Helt rätt! Tyskan isolerar rotinitiala vokaler med en distinkt stämbandsstöt (ein Apfel = [ʔaɪ̯n ˈʔapfl̩]).',
          'Fel. Det är en stämbandsocklusion, inte en frikativa.',
          'Fel. Glottalstöten är ett kärnelement i tyskans inhemska fonologi.',
          'Fel. Glottalstöten bryter just vokalglidningen i stället för att binda samman.'
        ]
      },
      {
        id: 'x001-q5',
        context: 'Högspråksnormen för ändelsen -ig.',
        prompt: 'Hur uttalas ändelsen -ig i standardtyskans reine Hochlautung i ordet "König"?',
        options: [
          'Som [ɪç] (palatal frikativa / ich-Laut).',
          'Som [ɪk] (tonlös velar klusil).',
          'Som [ɪg] (tonande velar klusil).',
          'Som [ɪʃ] (palatoalveolar frikativa / "sch").'
        ],
        answer: 0,
        explanation: 'Enligt Siebs och Duden uttalas slutljudande -ig i ren högspråksnorm som [ɪç].',
        feedback: [
          'Helt rätt! König uttalas [ˈkʰøːnɪç] i tysk riksspråksnorm.',
          'Fel. Uttalet [ɪk] är regionalt i södra Tyskland och Österrike, men inte den officiella Hochlautung-normen.',
          'Fel. Finalt /g/ kan inte förbli tonande på grund av Auslautverhärtung.',
          'Fel. Uttalet [ɪʃ] är dialektalt och icke-standard.'
        ]
      },
      {
        id: 'x001-q6',
        context: 'Neutralisering i stavelseslut.',
        prompt: 'Vad innebär den fonologiska processen Auslautverhärtung i tyskans konsonantsystem?',
        options: [
          'Att tonande obstruenter (/b/, /d/, /g/, /v/, /z/) obligatoriskt blir tonlösa ([p], [t], [k], [f], [s]) i stavelsekoda.',
          'Att alla konsonanter förlängs när de står sist i en mening.',
          'Att vokalen före slutkonsonanten alltid blir kort.',
          'Att slutkonsonanter faller bort i obetonade ord.'
        ],
        answer: 0,
        explanation: 'Auslautverhärtung avtonar obstruenter i kodaposition (t.ex. Tag [tʰaːk], Hund [hʊnt], liebt [liːpt]).',
        feedback: [
          'Korrekt! Kontrasten mellan tonande och tonlös neutraliseras i kodaposition till förmån för den tonlösa allofonen.',
          'Fel. Tyskan har inga distinktiva långa konsonanter.',
          'Fel. Vokalen behåller sin längd oberoende av avtoningen (Tag har långt /aː/).',
          'Fel. Konsonanterna försvinner inte; de ändrar endast stämbandsfonation från tonande till tonlösa.'
        ]
      }
    ]
  },
  '/docs/fordjupning/ljud-och-prosodi/stavelser-och-kvantitet': {
    lessonId: 'X002',
    href: '/docs/fordjupning/ljud-och-prosodi/stavelser-och-kvantitet',
    title: 'Snabbkoll: Stavelser och kvantitet',
    questions: [
      {
        id: 'x002-q1',
        context: 'Stavelseterminologi och Silbengelenk.',
        prompt: 'Vad är ett Silbengelenk (ambisyllabisk konsonant) i tysk fonologi?',
        options: [
          'En konsonant som samtidigt fungerar som koda i föregående korta stavelse och ansats i nästa stavelse.',
          'Ett bindestreck som sätts ut vid manuell avstavning i skrift.',
          'Ett fogeelement som förbinder två substantiv i en sammansättning.',
          'En stum konsonant som förlänger föregående vokal, som h.'
        ],
        answer: 0,
        explanation: 'I ord som Wasser eller Mitte tillhör konsonanten båda stavelserna fonologiskt, vilket i skrift speglas av dubbelteckning.',
        feedback: [
          'Helt rätt! Konsonanten länkar samman stavelserna och stänger den första stavelsen så att dess vokal förblir kort.',
          'Fel. Silbengelenk är ett fonologiskt begrepp, inte ett skiljetecken.',
          'Fel. Ett fogeelement är ett morfematiskt bindemorfem (-s-, -n-).',
          'Fel. Det syftar på Dehnungs-h.'
        ]
      },
      {
        id: 'x002-q2',
        context: 'Ortografisk representation av vokalvikt.',
        prompt: 'Varför skrivs ordet "Wasser" med dubbelt &lt;ss&gt; i standardtysk ortografi?',
        options: [
          'För att markera att föregående vokal är kort och sluten i en ambisyllabisk struktur.',
          'För att s-ljudet uttalas dubbelt så länge som i svenskan.',
          'För att signalera att s-ljudet ska uttalas tonande [z].',
          'För att ordet är ett lånord från franska.'
        ],
        answer: 0,
        explanation: 'Konsonantdubblering i tyska är en diakritisk markör för vokalens korthet, inte ett mått på konsonantens uttalstid.',
        feedback: [
          'Korrekt! Dubbelteckningen visar att den föregående vokalen /a/ är kort och ospänd.',
          'Fel. Tyska konsonanter är tidsmässigt korta; det finns inga långa konsonanter.',
          'Fel. &lt;ss&gt; uttalas alltid tonlöst [s].',
          'Fel. Wasser är ett rent germanskt arveord.'
        ]
      },
      {
        id: 'x002-q3',
        context: 'Reglerna för Eszett (&lt;ß&gt;).',
        prompt: 'När används tecknet &lt;ß&gt; i tysk standardortografi efter reformen 1996?',
        options: [
          'Enbart efter långa vokaler och diftonger (t.ex. Straße, Fuß, weiß).',
          'Efter korta vokaler i slutet av ord.',
          'I början av ord framför vokal.',
          'Alltid i Schweiz i stället för ss.'
        ],
        answer: 0,
        explanation: 'Efter 1996 står &lt;ß&gt; uteslutande efter långa vokaler och diftonger; efter korta vokaler skrivs alltid &lt;ss&gt;.',
        feedback: [
          'Helt rätt! Kort vokal följs av &lt;ss&gt; (Fluss), lång vokal följs av &lt;ß&gt; (Fuß).',
          'Fel. Efter korta vokaler skrivs numera alltid &lt;ss&gt; (t.ex. Schloss, dass).',
          'Fel. Inget tyskt ord kan börja med &lt;ß&gt;.',
          'Fel. I Schweiz används inte &lt;ß&gt; alls; där skrivs enbart &lt;ss&gt;.'
        ]
      },
      {
        id: 'x002-q4',
        context: 'Öppna kontra slutna stavelser.',
        prompt: 'Vilket av följande ord har en öppen rotstavelse med lång vokal?',
        options: ['leben', 'Bett', 'Fluss', 'Stadt'],
        answer: 0,
        explanation: 'I le-ben slutar den första stavelsen på vokal (öppen stavelse), vilket obligatoriskt ger långt spänt /eː/.',
        feedback: [
          'Korrekt! le-ben har öppen förstavelse och därmed lång vokal.',
          'Fel. Bett är sluten stavelse med kort vokal.',
          'Fel. Fluss slutar på konsonant och har kort vokal.',
          'Fel. Stadt slutar på konsonantkluster och har kort vokal.'
        ]
      },
      {
        id: 'x002-q5',
        context: 'Småord och historisk vokalkvantitet.',
        prompt: 'Varför har ord som "man", "das", "mit", "an" kort vokal trots enkel konsonant?',
        options: [
          'De är obetonade funktionsord i sluten stavelse som undgick öppen stavelseförlängning.',
          'De uttalades långa fram till 1996 då stavningsreformen ändrade dem.',
          'Konsonanterna n och t förkortar alltid föregående vokal automatiskt.',
          'De har lånats in från franskan under 1700-talet.'
        ],
        answer: 0,
        explanation: 'Obetonade grammatiska funktionsord förlängdes inte i medelhögtyska utan behöll sin korta vokal i slutna stavelser.',
        feedback: [
          'Helt rätt! Konsonantantalet i skrift är bara en ledtråd; funktion och etymologi avgör.',
          'Fel. Stavningsreformen 1996 ändrade inte dessa urgamla kärnord.',
          'Fel. Jämför Bahn [baːn] eller Mut [muːt] som har långa vokaler framför samma konsonanter.',
          'Fel. De är genuina germanska kärnord.'
        ]
      },
      {
        id: 'x002-q6',
        context: 'Stavelsegräns i morfologiskt komplexa ord.',
        prompt: 'Var går den fonologiska stavelsegränsen i ordet "vollenden"?',
        options: [
          'Vid morfemgränsen: [fɔl] + [ˈʔɛn-dn̩], med glottalstöt före den andra stavelsen.',
          'Före konsonanten l: [fɔ] + [ˈlɛn-dn̩].',
          'Efter andra e: [fɔ-lɛnd] + [n̩].',
          'Ordet saknar stavelsegräns eftersom det är oregelbundet.'
        ],
        answer: 0,
        explanation: 'Morfemgränser styr stavelsedragningen i tyska; prefixet voll- behåller sitt [l] och stammen inleds med [ʔ].',
        feedback: [
          'Korrekt! Morfemgränsen har prioritet framför maximal ansatsprincip.',
          'Fel. Det skulle ge en öppen förstavelse och förstöra prefixmorfemet voll-.',
          'Fel. Detta bryter mot tysk stavelsefonotaktik.',
          'Fel. Alla tyska ord delas in i regelbundna stavelser.'
        ]
      }
    ]
  },
  '/docs/fordjupning/ljud-och-prosodi/reduktion-schwa-och-sammanhangande-tal': {
    lessonId: 'X003',
    href: '/docs/fordjupning/ljud-och-prosodi/reduktion-schwa-och-sammanhangande-tal',
    title: 'Snabbkoll: Reduktion, schwa och sammanhängande tal',
    questions: [
      {
        id: 'x003-q1',
        context: 'Tyskans reduktionsvokaler.',
        prompt: 'Vad är Tiefschwa ([ɐ]) och var uppträder det i standardtyskt uttal?',
        options: [
          'En halvöppen central vokal som uppstår genom vokalisering av obetonat &lt;-er&gt; eller koda-r.',
          'Ett mörkt u-ljud som enbart används i bayerska dialekter.',
          'Ett nasalt schwa som enbart förekommer i franska lånord.',
          'En stämbandsstöt som markerar meningsslut.'
        ],
        answer: 0,
        explanation: 'Tiefschwa [ɐ] är den vokaliserade formen av /ər/ och koda-r i ord som Mutter [ˈmʊtɐ] eller hier [hiːɐ̯].',
        feedback: [
          'Helt rätt! I modern standardtyska uttalas ändelsen -er som en öppen vokal [ɐ], inte med rullande konsonant.',
          'Fel. [ɐ] är en central reducerad vokal, inte ett u-ljud.',
          'Fel. [ɐ] är ett helt reguljärt inhemskt tyskt språkljud.',
          'Fel. Det avser glottalstöten [ʔ], inte Tiefschwa.'
        ]
      },
      {
        id: 'x003-q2',
        context: 'Assimilation i obetonade ändelser.',
        prompt: 'Vad sker vid kontaktassimilation i ordet "haben" [ˈhaːbm̩] i naturligt tal?',
        options: [
          'Schwa faller bort och alveolar sonorant /n/ anpassas till bilabialt syllabiskt [m̩] efter [b].',
          'Verbet måste uttalas med tydligt [e] för att inte låta dialektalt.',
          'Konsonanten b försvinner och ordet uttalas som [ˈhaːn].',
          'Vokalen i stammen förkortas till kort [a].'
        ],
        answer: 0,
        explanation: 'Läpparna hålls slutna efter [b], vilket förvandlar det efterföljande /n/ till syllabiskt [m̩].',
        feedback: [
          'Korrekt! Denna bilabiala assimilation är normalt standarduttal i flytande tal.',
          'Fel. Att överdriva [e] i ändelsen -en låter styltigt och onaturligt.',
          'Fel. Formen han är rent dialektal; standardspråket behåller [b].',
          'Fel. Stamvokalen /aː/ förblir lång.'
        ]
      },
      {
        id: 'x003-q3',
        context: 'Bevarande av schwa i verbmorfologi.',
        prompt: 'I vilket av följande fall behålls schwa [ə] obligatoriskt i tysk verbböjning?',
        options: [
          'När verbstammen slutar på dental klusil (/t/ eller /d/), t.ex. "er redet".',
          'När verbet är starkt i preteritum, t.ex. "er kam".',
          'När verbstammen slutar på vokal, t.ex. "er sieht".',
          'När subjektet är i plural.'
        ],
        answer: 0,
        explanation: 'För att undvika otillåtna konsonantkluster som *-dt krävs ett bindande schwa [ə] (er redet, du wartest).',
        feedback: [
          'Helt rätt! Stammar på -t eller -d kräver schwa före böjningsändelser som börjar på -t eller -st.',
          'Fel. Er kam slutar på konsonant utan schwa.',
          'Fel. Er sieht har ingen schwa-insättning.',
          'Fel. I plural används -en som ofta reduceras till syllabiskt sonorant.'
        ]
      },
      {
        id: 'x003-q4',
        context: 'Talstilar och register.',
        prompt: 'Vad innebär begreppet gemäßigte Standardlautung i relation till reine Hochlautung?',
        options: [
          'Den naturliga standardnormen i medier och bildat tal, där reguljära reduktioner tillämpas.',
          'En ren slangdialekt från Berlin som undviker böjningsändelser.',
          'Det långsamma undervisningsuttal som rekommenderas för A1-nybörjare.',
          'Ett uttal där alla stumma bokstäver måste uttalas exakt som de stavas.'
        ],
        answer: 0,
        explanation: 'Gemäßigte Standardlautung är den etablerade talspråksnormen för bildad standardtyska med naturliga assimilationer.',
        feedback: [
          'Korrekt! Det är det uttal som hörs bland nyhetsuppläsare och bildade modersmålstalare i dag.',
          'Fel. Det är standardspråk, inte slang.',
          'Fel. Det är vuxna modersmålstalares vanliga tempo och rytm.',
          'Fel. Bokstavsuttal (Buchstabenaussprache) betraktas som felaktigt och artificiellt.'
        ]
      },
      {
        id: 'x003-q5',
        context: 'Vokalisering av konsonant i kodaställning.',
        prompt: 'Hur realiseras konsonanten r i ordet "Uhr" [ʔuːɐ̯] i modern standardtyska?',
        options: [
          'Som en osyllabisk vokalisk glidvokal [ɐ̯] efter den långa slutna vokalen.',
          'Som ett rullande apikalt tungspets-r ([r]).',
          'Som en hård uvular frikativa ([ʁ]).',
          'Det uttalas inte alls och lämnar ingen hörbar klang.'
        ],
        answer: 0,
        explanation: 'I koda efter lång vokal vokaliseras /r/ obligatoriskt till en centrerande glidvokal [ɐ̯].',
        feedback: [
          'Helt rätt! /r/ smälter samman med föregående vokal till en centrerande diftong.',
          'Fel. Rullande tungspets-r är dialektalt i söder, inte standardnorm i koda.',
          'Fel. Frikativa används före vokal (rufen), inte i kodaposition efter lång vokal.',
          'Fel. Ljudet hörs tydligt som en a-liknande färgning.'
        ]
      },
      {
        id: 'x003-q6',
        context: 'Syntaktisk reduktion och koartikulation.',
        prompt: 'Vad kallas fenomenet när ett obetonat grammatiskt småord smälter samman med ett föregående ord (t.ex. "auf das" &rarr; "aufs")?',
        options: [
          'Klitisering (eller sammandragning/fusion).',
          'Metates.',
          'Auslautverhärtung.',
          'Diftongering.'
        ],
        answer: 0,
        explanation: 'Klitika är obetonade funktionsord som fäster sig vid intilliggande betonade ord och bildar en gemensam fonologisk enhet.',
        feedback: [
          'Korrekt! Både prepositioner (aufs, im, ins) och pronomina (hast du es -> haste s) genomgår klitisering.',
          'Fel. Metates innebär att två ljud kastar om plats.',
          'Fel. Auslautverhärtung är avtoning av konsonanter i stavelseslut.',
          'Fel. Diftongering är utvecklingen av en monoftong till en diftong.'
        ]
      }
    ]
  },
  '/docs/fordjupning/ljud-och-prosodi/ordaccent-och-morfologisk-struktur': {
    lessonId: 'X004',
    href: '/docs/fordjupning/ljud-och-prosodi/ordaccent-och-morfologisk-struktur',
    title: 'Snabbkoll: Ordaccent och morfologisk struktur',
    questions: [
      {
        id: 'x004-q1',
        context: 'Rotbetoning i germanska stammar.',
        prompt: 'Var ligger huvudaccenten i inhemska germanska stamord som "arbeiten", "nehmen" och "Sommer"?',
        options: [
          'På den första stamstavelsen (rotbetoning / Stammakzent).',
          'Alltid på ordets allra sista stavelse.',
          'På böjningsändelsen.',
          'Det varierar fritt beroende på satsens syntax.'
        ],
        answer: 0,
        explanation: 'I germanska arveord vilar huvudtrycket fast på den första stamstavelsen.',
        feedback: [
          'Helt rätt! Rotbetoning är det historiska grundmönstret i germanska språk.',
          'Fel. Slutbetoning tillhör romanska lånord.',
          'Fel. Böjningsändelser är alltid obetonade.',
          'Fel. Ordaccenten i tyska är morfologiskt fixerad.'
        ]
      },
      {
        id: 'x004-q2',
        context: 'Betydelseskiljande accent i verb.',
        prompt: 'Vad är den avgörande semantiska skillnaden mellan "ˈumfahren" och "umˈfahren"?',
        options: [
          'ˈumfahren (betonad partikel) betyder "köra på / välta"; umˈfahren (obetonat prefix) betyder "köra runt".',
          'Båda betyder "köra på", men den ena formen används enbart om tåg.',
          'umˈfahren är en dialektal talspråksform från Hamburg.',
          'Det finns ingen semantisk skillnad; betoningen är valfri.'
        ],
        answer: 0,
        explanation: 'Betoningen avgör om verbet är separabelt (ˈumfahren = köra omkull) eller inseparabelt (umˈfahren = kringgå/köra runt).',
        feedback: [
          'Korrekt! En felaktig betoning vänder betydelsen till sin direkta motsats: köra på vs. köra runt!',
          'Fel. Orden har helt skilda lexikala definitioner.',
          'Fel. Båda formerna är fullt etablerade i standardtyskan.',
          'Fel. Betoningen är obligatoriskt knuten till verbets betydelse och grammatiska funktion.'
        ]
      },
      {
        id: 'x004-q3',
        context: 'Betoningsmönster i lånord.',
        prompt: 'Var ligger tryckaccenten i lånord med suffixen -tät, -tion och -ur (t.ex. Universität, Situation, Natur)?',
        options: [
          'På själva suffixet på slutstavelsen (Fremdwortakzent).',
          'På ordets första stavelse enligt den germanska rotregeln.',
          'På prefixet oavsett ordets längd.',
          'Orden saknar huvudaccent och uttalas monotont.'
        ],
        answer: 0,
        explanation: 'Klassiska och romanska lånordsuffix som -tät, -tion, -ur, -ie bär alltid huvudtrycket.',
        feedback: [
          'Helt rätt! Dessa suffix drar regelmässigt till sig accenten.',
          'Fel. Inlånade ord behåller sitt främmande betoningsmönster.',
          'Fel. Suffixen bär accenten, inte prefixen.',
          'Fel. Tyska ord har alltid en distinkt dynamisk huvudaccent.'
        ]
      },
      {
        id: 'x004-q4',
        context: 'Accentförskjutning i pluralis.',
        prompt: 'Vad sker med ordaccenten i latinska lånord på -or (t.ex. "ˈDoktor", "ˈMotor") när de sätts i plural?',
        options: [
          'Betoningen flyttas till stamsuffixet: Dokˈtoren, Moˈtoren.',
          'Betoningen ligger kvar på första stavelsen: *ˈDoktoren, *ˈMotoren.',
          'Pluraländelsen -en faller bort i uttalet.',
          'Vokalen i plural blir stum.'
        ],
        answer: 0,
        explanation: 'I ord på -or flyttas accenten från singularisens förstavelse till o-ljudet i plural: Dokˈtoren, Moˈtoren, Fakˈtoren.',
        feedback: [
          'Korrekt! Denna accentförskjutning är obligatorisk i standardtyska.',
          'Fel. Att behålla trycket på första stavelsen i plural är en vanlig svensk interferensfälla.',
          'Fel. Ändelsen -en uttalas alltid tydligt med sonorant.',
          'Fel. Vokalen o blir lång och starkt betonad [oː].'
        ]
      },
      {
        id: 'x004-q5',
        context: 'Sammansättningars accentstruktur.',
        prompt: 'Var placeras huvudtrycket (primärakcent) i sammansatta substantiv som "Haustür" och "Krankenwagen"?',
        options: [
          'På det första ledet (bestämningsordet / Bestimmungswort).',
          'Alltid på det sista ledet (huvudordet / Grundwort).',
          'Jämnt fördelat över alla stavelser utan skillnad.',
          'På fogeelementet -en- eller -s-.'
        ],
        answer: 0,
        explanation: 'I tyska sammansättningar specificerar förledet efterledet och bär därför primärakcenten: ˈHaustür, ˈKrankenwagen.',
        feedback: [
          'Helt rätt! Bestämningsordet bär primärakcent, medan huvudordet bär sekundärakcent.',
          'Fel. Huvudordet avgör grammatiskt genus, men bär inte primärt tryck.',
          'Fel. Tyskan har skarp skillnad mellan primärt och sekundärt tryck.',
          'Fel. Fogeelement är alltid obetonade.'
        ]
      },
      {
        id: 'x004-q6',
        context: 'Prefixens betoningsstatus.',
        prompt: 'Vilket av följande verb har ett inseparabelt (obetonat) prefix och bildar perfekt UTAN partikelmärket "ge-"?',
        options: [
          'zerstören (perfekt: zerstört)',
          'aufstehen (perfekt: aufgestanden)',
          'mitbringen (perfekt: mitgebracht)',
          'anfangen (perfekt: angefangen)'
        ],
        answer: 0,
        explanation: 'Prefixet zer- är alltid obetonat; verbet är oskiljbart och tar aldrig partikelmärket -ge- i perfekt particip.',
        feedback: [
          'Korrekt! Obetonade prefix (be-, ent-, er-, ver-, zer-) blockerar -ge- i perfekt.',
          'Fel. auf- är en betonad separabel partikel och skjuter in -ge- (aufgestanden).',
          'Fel. mit- är en separabel partikel som tar -ge- (mitgebracht).',
          'Fel. an- är en separabel partikel som tar -ge- (angefangen).'
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
console.log('Finished updating learning-quizzes.ts with compliant Group 2A quizzes.');
