import fs from 'node:fs';
import path from 'node:path';

const quizzes = {
  '/docs/fordjupning/nominalfras/matt-mangd-och-partitivfraser': {
    lessonId: 'X019',
    href: '/docs/fordjupning/nominalfras/matt-mangd-och-partitivfraser',
    title: 'Snabbkoll: Mått-, mängd- och partitivfraser',
    questions: [
      {
        id: 'x019-q1',
        context: 'Nollplural hos maskulina och neutrala måttord.',
        prompt: 'Vilken form har maskulina och neutrala måttord efter räkneord (t.ex. "zwei ___ Wasser", "fünf ___ Mehl")?',
        options: [
          'De står i oförändrad singularform (nollplural): "zwei Glas", "fünf Kilo".',
          'De måste alltid böjas i plural: *"zwei Gläser", *"fünf Kilos".',
          'De tar alltid genitivändelsen -s.',
          'De måste föregås av prepositionen von.'
        ],
        answer: 0,
        explanation: 'Maskulina och neutrala mått-, mynt- och mängdord tar regelmässigt nollplural efter räkneord.',
        feedback: [
          'Helt rätt! Zwei Glas Wasser, drei Stück Kuchen, zehn Grad Celsius.',
          'Fel. Formen zwei Gläser används enbart om själva dricksglasen som fysiska kärl.',
          'Fel. Måttordet tar inte genitiv-s i mängdkonstruktioner.',
          'Fel. Prepositionen von behövs inte vid enkla mängdangivelser.'
        ]
      },
      {
        id: 'x019-q2',
        context: 'Feminina måttord som undantag.',
        prompt: 'Hur skiljer sig feminina måttord som "die Flasche" eller "die Tasse" efter räkneord?',
        options: [
          'De böjs obligatoriskt i plural: "zwei Flaschen Wein", "drei Tassen Kaffee".',
          'De har också nollplural: *"zwei Flasche Wein".',
          'De får inte användas med räkneord.',
          'De ändrar genus till neutrum.'
        ],
        answer: 0,
        explanation: 'Feminina måttord omfattas inte av nollpluralregeln utan böjs alltid regelbundet i plural med -(e)n.',
        feedback: [
          'Korrekt! Maskuliner och neutrala har nollplural; femininer böjs i plural.',
          'Fel. *"zwei Flasche" är grammatiskt inkorrekt på standardtyska.',
          'Fel. De kombineras fritt med räkneord.',
          'Fel. De förblir feminina substantiv.'
        ]
      },
      {
        id: 'x019-q3',
        context: 'Adjektivböjning inuti måttfraser i dativ.',
        prompt: 'Vilken form rekommenderar Duden för ett adjektiv framför det uppmätta ordet i dativ: "mit einem Glas ___ (kühl) Wasser"?',
        options: [
          'Stark parallell dativböjning: "mit einem Glas kühlem Wasser".',
          'Svag ändelse: *"mit einem Glas kühle Wasser".',
          'Nominativändelse: *"mit einem Glas kühles Wasser".',
          'Ingen ändelse alls: *"mit einem Glas kühl Wasser".'
        ],
        answer: 0,
        explanation: 'Duden rekommenderar att det uppmätta ledet kongruerar i dativ med måttordet: mit einem Glas kühlem Wasser.',
        feedback: [
          'Helt rätt! Både måttordet (einem Glas) och ämnesfrasen (kühlem Wasser) står i dativ.',
          'Fel. Svag ändelse -e kan inte stå i dativ neutrum.',
          'Fel. Nominativform -es är talspråklig och stilistiskt svagare.',
          'Fel. Adjektivet måste böjas attributivt.'
        ]
      },
      {
        id: 'x019-q4',
        context: 'Numeruskongruens vid måttfraser.',
        prompt: 'Vad gäller för verbets numerus när en samlad mängdangivelse står som subjekt ("Zwei Kilo Mehl ___ genug")?',
        options: [
          'Singularverb ("ist") betonar den sammanlagda massan som en enhet; pluralverb ("sind") betonar de enskilda måttenheterna.',
          'Endast pluralverb är tillåtet enligt tysk grammatik.',
          'Endast singularverb är tillåtet i alla lägen.',
          'Verbet måste stå i futurum.'
        ],
        answer: 0,
        explanation: 'Båda varianterna är belagda; singularverb föredras när summan betraktas som en sammanhängande massa.',
        feedback: [
          'Korrekt! Två kilo mjöl ses oftast som en enda ingrediensmängd och tar singularverb.',
          'Fel. Singularverb är mycket vanligt och fullt etablerat.',
          'Fel. Pluralverb förekommer också vid betoning av räkneenheter.',
          'Fel. Tempus har inget med numeruskongruensen att göra.'
        ]
      },
      {
        id: 'x019-q5',
        context: 'Partitiva fraser med bestämd referent.',
        prompt: 'Hur uttrycks en partitiv mängdrelation när helheten är bestämd av ett demonstrativt pronomen ("ett stycke ___ denna tårta")?',
        options: [
          'Med "von" + dativ eller partitiv genitiv: "ein Stück von diesem Kuchen".',
          'Med ren kontaktkonstruktion utan preposition: *"ein Stück diesem Kuchen".',
          'Med ackusativ: *"ein Stück diesen Kuchen".',
          'Med infinitivmärke.'
        ],
        answer: 0,
        explanation: 'När ämnesordet bär ett demonstrativt eller possessivt pronomen krävs prepositionen von eller partitiv genitiv.',
        feedback: [
          'Helt rätt! Ein Stück von diesem Kuchen eller ein Glas von deinem Wein.',
          'Fel. Kontaktkonstruktionen fungerar bara när ordet står artikellöst (ein Stück Kuchen).',
          'Fel. Ackusativ kan inte kopplas direkt här.',
          'Fel. Infinitivmärke är irrelevant.'
        ]
      },
      {
        id: 'x019-q6',
        context: 'Substantiverade tal som Million.',
        prompt: 'Vilket grammatiskt genus och vilken böjning har ordet "Million" i tysk syntax?',
        options: [
          'Det är ett feminint substantiv (die Million) och böjs regelbundet i plural med -en: "drei Millionen Menschen".',
          'Det är ett oböjligt grundtal som alltid har nollplural: *"drei Million Menschen".',
          'Det är neutrum: *"das Million".',
          'Det styr alltid singularverb även i plural.'
        ],
        answer: 0,
        explanation: 'Million och Milliarde är feminina substantiv och böjs regelbundet med pluraländelsen -en.',
        feedback: [
          'Korrekt! Drei Millionen Menschen leben hier (pluralverb är obligatoriskt).',
          'Fel. Grundtal under en miljon (hundert, tausend) är oböjliga, men Million är ett substantiv.',
          'Fel. Ordet är strikt femininum (die Million).',
          'Fel. I plural styr det obligatoriskt pluralverb.'
        ]
      }
    ]
  },
  '/docs/fordjupning/nominalfras/adjektivbojningens-svara-gransfall': {
    lessonId: 'X020',
    href: '/docs/fordjupning/nominalfras/adjektivbojningens-svara-gransfall',
    title: 'Snabbkoll: Adjektivböjningens svåra gränsfall',
    questions: [
      {
        id: 'x020-q1',
        context: 'Svag böjning efter determinativ.',
        prompt: 'Vilken adjektivböjning kräver orden "alle", "beide" och "diese" i plural nominativ (t.ex. "alle neu___ Bücher")?',
        options: [
          'Svag böjning med -en: "alle neuen Bücher", "beide alten Männer".',
          'Stark böjning med -e: *"alle neue Bücher".',
          'Blandad böjning med -er.',
          'Ingen ändelse alls: *"alle neu Bücher".'
        ],
        answer: 0,
        explanation: 'Alle, beide, diese fungerar som starka determinativ och kräver undantagslöst svagt -en på adjektivet.',
        feedback: [
          'Helt rätt! En av tyskans viktigaste regler: efter alle heter det alltid -en!',
          'Fel. Starkt -e är en typisk svensk interferensfälla (jfr svenskans "alla nya böcker").',
          'Fel. Ändelsen -er förekommer inte i plural.',
          'Fel. Attributiva adjektiv måste alltid böjas.'
        ]
      },
      {
        id: 'x020-q2',
        context: 'Stark böjning efter obestämda mängdord.',
        prompt: 'Vilken adjektivböjning kräver obestämda mängdord som "viele", "wenige", "mehrere" i plural nominativ (t.ex. "viele gut___ Freunde")?',
        options: [
          'Stark böjning med -e: "viele gute Freunde", "mehrere wichtige Punkte".',
          'Svag böjning med -en: *"viele guten Freunde".',
          'Nolländelse: *"viele gut Freunde".',
          'Genitivändelse: *"viele guter Freunde".'
        ],
        answer: 0,
        explanation: 'Viele, wenige, mehrere saknar artikelstyrande kraft; efterföljande adjektiv böjs starkt med -e.',
        feedback: [
          'Korrekt! Lägg märke till kontrasten: alle neuen (svagt), men viele neue (starkt)!',
          'Fel. -en används efter alle och beide, inte efter viele i nominativ.',
          'Fel. Adjektivet måste böjas.',
          'Fel. Genitivändelse hör inte hemma i nominativ.'
        ]
      },
      {
        id: 'x020-q3',
        context: 'Synkretism i dativ plural.',
        prompt: 'Vilken ändelse får adjektivet i dativ plural efter "vielen" och "mehreren" (t.ex. "mit vielen gut___ Freunden")?',
        options: [
          'Alltid -en ("mit vielen guten Freunden"), eftersom både stark och svag dativ plural slutar på -en.',
          'Starkt -e: *"mit vielen gute Freunden".',
          'Starkt -er: *"mit vielen guter Freunden".',
          'Ingen ändelse: *"mit vielen gut Freunden".'
        ],
        answer: 0,
        explanation: 'I dativ plural sammanfaller stark och svag deklination i ändelsen -en.',
        feedback: [
          'Helt rätt! I dativ plural råder full synkretism med ändelsen -en.',
          'Fel. Dativ plural kan aldrig sluta på -e.',
          'Fel. Ändelsen -er hör till genitiv plural eller dativ femininum.',
          'Fel. Adjektivet måste ha kasusändelse.'
        ]
      },
      {
        id: 'x020-q4',
        context: 'Parallellböjning vid koordinerade adjektiv.',
        prompt: 'Vad innebär huvudregeln om parallellböjning när flera adjektiv står i rad framför ett substantiv?',
        options: [
          'Alla samordnade adjektiv i rad får exakt samma böjningsändelse: "kaltes, klares Wasser".',
          'Det första adjektivet får stark ändelse och det andra får svag ändelse.',
          'Endast det sista adjektivet böjs; det första lämnas oböjt.',
          'Adjektiven måste bindas samman med bindestreck.'
        ],
        answer: 0,
        explanation: 'Samordnade adjektiv kongruerar parallellt: frischer, heißer Kaffee; das neue, teure Auto.',
        feedback: [
          'Korrekt! Båda adjektiven delar samma syntaktiska nivå och samma ändelse.',
          'Fel. Att alternera mellan stark och svag ändelse är felaktigt.',
          'Fel. Båda adjektiven måste böjas fullt ut.',
          'Fel. Bindestreck används inte mellan samordnade deskriptiva adjektiv.'
        ]
      },
      {
        id: 'x020-q5',
        context: 'Adjektivböjning efter oböjt manch.',
        prompt: 'Hur böjs ett adjektiv efter det oböjda ordet "manch" (t.ex. "manch schön___ Tag")?',
        options: [
          'Med stark ändelse: "manch schöner Tag" (eftersom manch saknar ändelse och inte visar kasus).',
          'Med svag ändelse: *"manch schöne Tag".',
          'Med dativändelse: *"manch schönem Tag".',
          'Ordet manch kan aldrig kombineras med adjektiv.'
        ],
        answer: 0,
        explanation: 'När manch står utan ändelse måste det efterföljande adjektivet överta kasusmärkningen med stark form: manch schöner Tag.',
        feedback: [
          'Helt rätt! Jämför: mancher schöne Tag (svagt) kontra manch schöner Tag (starkt).',
          'Fel. Svag ändelse kräver att manch har ändelse (mancher).',
          'Fel. Dativändelse passar inte i nominativ.',
          'Fel. Konstruktionen är klassisk och frekvent i litterär text.'
        ]
      },
      {
        id: 'x020-q6',
        context: 'Svensk interferens vid alle.',
        prompt: 'Varför är konstruktionen *"alle neue Bücher" felaktig i standardtysk grammatik?',
        options: [
          'Eftersom alle fungerar som ett determinativ som obligatoriskt kräver den svaga ändelsen -en på adjektivet.',
          'Därför att ordet Bücher måste stå i singular efter alle.',
          'Därför att alle endast får användas med personliga pronomen.',
          'Därför att neue saknar komparation.'
        ],
        answer: 0,
        explanation: 'Alle neuen Bücher är den enda korrekta formen. *Alle neue är en typisk svensk interferensfälla.',
        feedback: [
          'Korrekt! Tyskan kräver strikt svag deklination (-en) efter determinativet alle.',
          'Fel. Bücher står korrekt i plural efter alle.',
          'Fel. Alle kombineras med alla typer av substantiv.',
          'Fel. Komparation påverkar inte böjningskravet.'
        ]
      }
    ]
  },
  '/docs/fordjupning/nominalfras/substantiverade-adjektiv-och-nominal-ellips': {
    lessonId: 'X021',
    href: '/docs/fordjupning/nominalfras/substantiverade-adjektiv-och-nominal-ellips',
    title: 'Snabbkoll: Substantiverade adjektiv och nominal ellips',
    questions: [
      {
        id: 'x021-q1',
        context: 'Substantivering kontra nominal ellips.',
        prompt: 'Vad är den avgörande skillnaden mellan äkta substantivering och nominal ellips i tysk ortografi?',
        options: [
          'Äkta substantivering avser självständiga begrepp och skrivs med stor bokstav; vid ellips underförstås ett tidigare nämnt substantiv och ordet skrivs ofta med liten bokstav.',
          'Äkta substantivering skrivs med bindestreck; ellips skrivs med snedstreck.',
          'Vid äkta substantivering förlorar ordet all böjning.',
          'Ellips kan enbart uppträda i bisatser.'
        ],
        answer: 0,
        explanation: 'Das Schöne (äkta substantivering, versal) vs. "Er kaufte zwei Autos, ein rotes und ein blaues [Auto]" (ellips, gemen).',
        feedback: [
          'Helt rätt! Den kontextuella närvaron av ett substantiv avgör om det är ellips eller äkta nominalisering.',
          'Fel. Skiljetecken avgör inte distinktionen.',
          'Fel. Substantiverade adjektiv behåller full adjektivböjning.',
          'Fel. Ellips förekommer i alla satstyper.'
        ]
      },
      {
        id: 'x021-q2',
        context: 'Böjning efter etwas och nichts.',
        prompt: 'Vilken ändelse och vilken skiftning får ett adjektiv efter "etwas" eller "nichts" (t.ex. "etwas ___ [neu]")?',
        options: [
          'Stark neutral ändelse -es och obligatorisk stor begynnelsebokstav: "etwas Neues", "nichts Gutes".',
          'Svag ändelse -e med liten bokstav: *"etwas neue".',
          'Ändelsen -en med stor bokstav: *"etwas Neuen".',
          'Ingen ändelse alls: *"etwas neu".'
        ],
        answer: 0,
        explanation: 'Efter oböjda etwas och nichts tar det substantiverade adjektivet starkt -es och versal: etwas Neues.',
        feedback: [
          'Korrekt! Detta är en av de mest grundläggande skrivreglerna i avancerad tysk ortografi.',
          'Fel. Stor bokstav och stark ändelse krävs obligatoriskt.',
          'Fel. Ändelsen -en används efter dativ eller svaga determinativ.',
          'Fel. Adjektivet måste böjas med -es.'
        ]
      },
      {
        id: 'x021-q3',
        context: 'Böjning efter alles.',
        prompt: 'Vilken ändelse får adjektivet i den fasta lyckönskningen "alles ___ (gut)"?',
        options: [
          'Svag ändelse -e: "alles Gute", eftersom determinativet alles redan bär den starka ändelsen -es.',
          'Stark ändelse -es: *"alles Gutes".',
          'Ändelsen -en: *"alles Guten".',
          'Nolländelse: *"alles Gut".'
        ],
        answer: 0,
        explanation: 'Eftersom alles bär kasusmärkningen (-es) tar efterföljande adjektiv svag ändelse: alles Gute zum Geburtstag!',
        feedback: [
          'Helt rätt! En vanlig fälla är att felaktigt säga *alles Gutes.',
          'Fel. Starkt -es vore dubbelmarkering och strider mot monoflexionsprincipen.',
          'Fel. -en är dativ- eller maskulinform.',
          'Fel. Gute måste ha svag nominativ/ackusativändelse -e.'
        ]
      },
      {
        id: 'x021-q4',
        context: 'Språkbeteckningar med prepositionen auf.',
        prompt: 'Hur skrivs språkbeteckningar efter prepositionen "auf" utan artikel (t.ex. "auf ___")?',
        options: [
          'Med stor bokstav och utan böjningsändelse: "auf Deutsch", "auf Schwedisch".',
          'Med liten bokstav och ändelsen -en: *"auf deutschen".',
          'Med ändelsen -e: *"auf Deutsche".',
          'Med bestämd artikel: *"auf das Deutsch".'
        ],
        answer: 0,
        explanation: 'Konstruktionen på + språk heter på tyska auf Deutsch, auf Englisch med versal och nolländelse.',
        feedback: [
          'Korrekt! Jämför: auf Deutsch (nolländelse) kontra im Deutschen (med artikel och ändelse).',
          'Fel. Versal krävs och ändelse saknas.',
          'Fel. Formen auf Deutsche är inkorrekt.',
          'Fel. Bestämd artikel används inte efter auf i detta uttryck.'
        ]
      },
      {
        id: 'x021-q5',
        context: 'Substantiverade personord.',
        prompt: 'Hur böjs det maskulina personordet efter obestämd artikel i nominativ: "ein ___ (verwandt)"?',
        options: [
          'ein Verwandter (stark ändelse -er, eftersom ein saknar ändelse).',
          'ein Verwandte',
          'ein Verwandten',
          'ein Verwandtes'
        ],
        answer: 0,
        explanation: 'Eftersom artikeln ein saknar maskulin nominativändelse måste personordet ta starkt -er: ein Verwandter.',
        feedback: [
          'Helt rätt! Jämför: der Verwandte (svagt efter der) men ein Verwandter (starkt efter ein).',
          'Fel. Verwandte används med bestämd artikel (der Verwandte) eller i femininum (eine Verwandte).',
          'Fel. Verwandten är ackusativ eller dativ.',
          'Fel. Verwandtes är neutrum.'
        ]
      },
      {
        id: 'x021-q6',
        context: 'Nominal ellips och gemen.',
        prompt: 'Varför skrivs "rote" med liten bokstav i meningen: "Er kaufte zwei Krawatten, die rote gefiel ihm besser"?',
        options: [
          'Eftersom det är en nominal ellips där substantivet Krawatte finns i föregående sats och är underförstått.',
          'Därför att färger aldrig får skrivas med stor bokstav.',
          'Därför att ordet står i ackusativ.',
          'Det är ett tryckfel; ordet måste alltid stavas med versal Rote.'
        ],
        answer: 0,
        explanation: 'När ett adjektiv syftar tillbaka på ett nyss nämnt substantiv i samma kontext föreskriver Duden liten bokstav.',
        feedback: [
          'Korrekt! Kontextuell ellips bevarar adjektivets gemena status.',
          'Fel. Fristående färgsubstantiveringar skrivs med versal (das tiefe Blau).',
          'Fel. Kasus påverkar inte versalisering.',
          'Fel. Formen die rote [Krawatte] är fullt regelrätt enligt officiella skrivregler.'
        ]
      }
    ]
  },
  '/docs/fordjupning/nominalfras/egennamn-titlar-och-geografiska-namn': {
    lessonId: 'X022',
    href: '/docs/fordjupning/nominalfras/egennamn-titlar-och-geografiska-namn',
    title: 'Snabbkoll: Egennamn, titlar och geografiska namn',
    questions: [
      {
        id: 'x022-q1',
        context: 'Genitiv av namn på s-ljud.',
        prompt: 'Hur bildas genitiv av personnamn som slutar på ett s-ljud (sibilant) som "Thomas" eller "Marx" i standardtysk ortografi?',
        options: [
          'Endast med en apostrof utan extra s: "Thomas’ Auto", "Marx’ Schriften".',
          'Genom att lägga till -es: *"Thomases Auto".',
          'Genom att lägga till apostrof och s: *"Thomas\'s Auto".',
          'Namnet kan inte böjas alls utan måste ersättas med pronomen.'
        ],
        answer: 0,
        explanation: 'Namn på s-ljud tar uteslutande apostrof i skrift: Thomas’ Auto, Felix’ Familie, Grass’ Romane.',
        feedback: [
          'Helt rätt! I skrift sätts apostrofen ut direkt efter s-ljudet utan ytterligare bokstäver.',
          'Fel. Ändelsen -es används på vanliga substantiv (des Glases), inte på personnamn.',
          'Fel. Apostrof + s är engelsk ortografi och felaktig i tysk standard.',
          'Fel. I talspråk kan man säga "das Auto von Thomas", men genitiv med apostrof är standard i skrift.'
        ]
      },
      {
        id: 'x022-q2',
        context: 'Deppenapostroph.',
        prompt: 'Vad innebär den pejorativa termen "Deppenapostroph" och varför är formen felaktig på tyska?',
        options: [
          'Att sätta ut en engelsk apostrof före genitiv-s vid vanliga namn (t.ex. *"Goethe\'s Faust" i stället för korrekt "Goethes Faust").',
          'Att glömma stor bokstav på personnamn.',
          'Att skriva förnamn före efternamn.',
          'Att böja ett feminint namn i genitiv.'
        ],
        answer: 0,
        explanation: 'Tyska genitiver bildas utan apostrof: Goethes Faust, Marias Buch. Apostrof före s betraktas som ett anglicistiskt fel.',
        feedback: [
          'Korrekt! Skriv aldrig apostrof vid vanliga tyska genitiv-s.',
          'Fel. Det berör specifikt den onödiga apostrofen.',
          'Fel. Namnföljd har inget med Deppenapostroph att göra.',
          'Fel. Feminina namn tar reguljärt genitiv-s (Marias Auto).'
        ]
      },
      {
        id: 'x022-q3',
        context: 'Länder med obligatorisk artikel.',
        prompt: 'Vilka av följande länder kräver obligatoriskt bestämd artikel i alla sammanhang i standardtyska?',
        options: [
          'die Schweiz, die Türkei, die USA, der Irak, der Libanon.',
          'Deutschland, Schweden, Österreich, Italien.',
          'Spanien, Frankreich, England, Polen.',
          'Alla länder i Europa kräver artikel.'
        ],
        answer: 0,
        explanation: 'Medan de flesta länder är neutrala och artikellösa, kräver feminina, maskulina och plurala länder alltid artikel.',
        feedback: [
          'Helt rätt! In die Schweiz, in den USA, aus der Türkei, im Irak.',
          'Fel. Dessa länder är artikellösa neutrer (nach Deutschland, in Schweden).',
          'Fel. Dessa är artikellösa i standardtyska.',
          'Fel. De flesta europeiska länder är artikellösa.'
        ]
      },
      {
        id: 'x022-q4',
        context: 'Adjektivmodifiering av artikellösa länder.',
        prompt: 'Vad sker när ett i vanliga fall artikellöst neutralt land förses med ett beskrivande adjektivattribut (t.ex. "... modern___ Schweden")?',
        options: [
          'Bestämd artikel "das" måste obligatoriskt sättas ut: "das moderne Schweden".',
          'Landet förblir helt utan artikel: *"modernes Schweden".',
          'Landet måste sättas i plural.',
          'Adjektivet placeras obligatoriskt efter landets namn.'
        ],
        answer: 0,
        explanation: 'Så fort ett neutralt geografiskt namn modifieras av ett adjektiv aktiveras den bestämda artikeln das: das wiedervereinigte Deutschland.',
        feedback: [
          'Korrekt! Adjektivet tvingar fram bestämd artikel das.',
          'Fel. Artikellös konstruktion vore felaktig här.',
          'Fel. Landet ändrar inte numerus.',
          'Fel. Adjektivet står som vanligt attribut framför substantivet.'
        ]
      },
      {
        id: 'x022-q5',
        context: 'Böjning av titeln Herr.',
        prompt: 'Hur böjs titeln "Herr" när den står framför en akademisk titel och ett efternamn i dativ: "mit ___ Dr. Schmidt"?',
        options: [
          'Med svag deklination: "mit Herrn Dr. Schmidt".',
          'Oböjd: *"mit Herr Dr. Schmidt".',
          'Med genitivändelse: *"mit Herrs Dr. Schmidt".',
          'Titeln Herr får inte kombineras med Dr.'
        ],
        answer: 0,
        explanation: 'Herr är ett svagt substantiv och böjs obligatoriskt med -n i ackusativ och dativ: mit Herrn Dr. Schmidt.',
        feedback: [
          'Helt rätt! Att glömma -n på Herrn i korrespondens och hälsningsfraser är ett vanligt fel.',
          'Fel. Oböjt Herr är grammatiskt inkorrekt i dativ.',
          'Fel. -s är genitivform.',
          'Fel. Kombinationen Herr Dr. är mycket frekvent och artig i Tyskland.'
        ]
      },
      {
        id: 'x022-q6',
        context: 'Prepositionsval vid artikelländer.',
        prompt: 'Vilken riktningspreposition används när man reser till ett land med obligatorisk artikel, till skillnad från artikellösa länder?',
        options: [
          'Prepositionen "in" + ackusativ ("ich fahre in die Schweiz", "in die USA"), medan artikellösa länder tar "nach" ("nach Schweden").',
          'Alltid "nach" med dativ: *"nach der Schweiz".',
          'Prepositionen "zu" med genitiv.',
          'Prepositionen "an" med ackusativ.'
        ],
        answer: 0,
        explanation: 'Artikellösa länder tar nach + nollartikel; länder med artikel tar in + ackusativ.',
        feedback: [
          'Korrekt! Ich fahre nach Deutschland (artikellöst) vs. Ich fahre in die Schweiz (artikelland).',
          'Fel. *nach der Schweiz är en felaktig sammanblandning.',
          'Fel. Zu används vid personer eller specifika institutioner.',
          'Fel. An används vid kuster och gränser.'
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
console.log('Finished updating learning-quizzes.ts with Group 2E quizzes.');
