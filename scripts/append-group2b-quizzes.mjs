import fs from 'node:fs';
import path from 'node:path';

const quizzes = {
  '/docs/fordjupning/morfologi/morfem-allomorfi-och-produktivitet': {
    lessonId: 'X006',
    href: '/docs/fordjupning/morfologi/morfem-allomorfi-och-produktivitet',
    title: 'Snabbkoll: Morfem, allomorfi och produktivitet',
    questions: [
      {
        id: 'x006-q1',
        context: 'Morfemdefinitioner och frihet.',
        prompt: 'Vad kännetecknar ett bundet morfem i tysk lingvistik?',
        options: [
          'Det kan inte stå ensamt som självständigt ord, utan måste fästas vid andra morfem (t.ex. -heit, ver-, -st).',
          'Det är ett ord som enbart kan användas i bisatser.',
          'Det är en vokal som binder samman två substantiv i en sammansättning.',
          'Det är ett lånord från ett annat indoeuropeiskt språk.'
        ],
        answer: 0,
        explanation: 'Bundna morfem (affix, böjningsändelser) kan endast uppträda i kombination med rotmorfem.',
        feedback: [
          'Helt rätt! Bundna morfem saknar lexikal självständighet och kräver en bas.',
          'Fel. Det syftar på syntaktiska konjunktioner, inte morfemtyper.',
          'Fel. Det beskriver ett fogeelement (Fugenelement).',
          'Fel. Begreppet bundenhet avser syntaktisk och morfologisk självständighet, inte etymologiskt ursprung.'
        ]
      },
      {
        id: 'x006-q2',
        context: 'Allomorfi i det tyska språket.',
        prompt: 'Vad är en allomorf?',
        options: [
          'En konkret realisering eller variant av ett abstrakt underliggande morfem (t.ex. pluraländelserna -e, -er, -en).',
          'Ett ord som har två motsatta betydelser i olika ordböcker.',
          'En stavningsvariant som uppstod efter reformen 1996.',
          'En dialektal böjningsform som enbart används i Schweiz.'
        ],
        answer: 0,
        explanation: 'Ett morfem (som pluralmorfemet {PLUR}) realiseras genom olika allomorfer beroende på ordets böjningsklass.',
        feedback: [
          'Korrekt! Allomorfer är varianter av samma abstrakta morfem i kompletterande eller morfologisk distribution.',
          'Fel. Det beskriver en autoantonym (janusord).',
          'Fel. Allomorfi är ett fonologiskt och morfologiskt fenomen, inte en stavningskonvention.',
          'Fel. Allomorfi tillhör standardspråkets kärnmorfologi.'
        ]
      },
      {
        id: 'x006-q3',
        context: 'Unika morfem (Cranberry-morfem).',
        prompt: 'Vad är ett unikt morfem (Cranberry-Morphem) som förleden "Brom-" i "Brombeere"?',
        options: [
          'Ett bundet morfem som saknar självständig betydelse i modern tyska men fyller särskiljande funktion i en specifik sammansättning.',
          'Ett morfem som enbart får användas vid beteckning av bär och växter.',
          'En felaktig stavning av ett engelskt lånord.',
          'Ett prefix som kan fästas på alla tyska verb.'
        ],
        answer: 0,
        explanation: 'Brom- och Him- i Brombeere och Himbeere är klassiska exempel på fossiliserade, unika morfem.',
        feedback: [
          'Helt rätt! De existerar inte som fria ord i dag men har bevarats i enstaka lexikaliserade sammansättningar.',
          'Fel. Namnet kommer från det lingvistiska standardexemplet cranberry, inte en botanisk restriktion.',
          'Fel. Det är ett etablerat fackbegrepp inom strukturell morfologi.',
          'Fel. Unika morfem är bundna till enstaka substantiv.'
        ]
      },
      {
        id: 'x006-q4',
        context: 'Historisk rotvariation kontra omljud.',
        prompt: 'Vad kallas den vokalskiftning som markerar tempus i starka verb som "tragen" &rarr; "trug"?',
        options: [
          'Avlyd (Ablaut).',
          'Omljud (Umlaut).',
          'Auslautverhärtung.',
          'Synkope.'
        ],
        answer: 0,
        explanation: 'Ablaut är det urgamla indoeuropeiska vokalskiftet som skiljer presens från preteritum i starka verb.',
        feedback: [
          'Korrekt! Avlyd (Ablaut) är en grammatisk rotvokalväxling som bildar preteritum och particip.',
          'Fel. Omljud (Umlaut) är den yngre palataliseringen som i trägt eller Mütter.',
          'Fel. Auslautverhärtung avser avtoning av konsonanter i stavelsekoda.',
          'Fel. Synkope är bortfall av en vokal inuti ett ord.'
        ]
      },
      {
        id: 'x006-q5',
        context: 'Morfologisk produktivitet i modern tyska.',
        prompt: 'Vilket av följande suffix räknas som högproduktivt för nybildningar i dagens tyska?',
        options: [
          '-bar (t.ex. downloadbar, streambar)',
          '-nis (t.ex. Gefängnis)',
          '-de (t.ex. Gemeinde)',
          '-tum (t.ex. Reichtum)'
        ],
        answer: 0,
        explanation: '-bar kan bilda nya ord från praktiskt taget alla transitiva verb, även nyinlånade engelska lånord.',
        feedback: [
          'Helt rätt! -bar är ett av de mest produktiva adjektivsuffixen i samtida tyska.',
          'Fel. -nis är oproduktivt i dag; inga nya ord bildas med -nis.',
          'Fel. -de är ett dött historiskt suffix.',
          'Fel. -tum är i stort sett oproduktivt i samtida ordbildning.'
        ]
      },
      {
        id: 'x006-q6',
        context: 'Strukturella nollformer.',
        prompt: 'Vad innebär ett nollmorfem (&oslash;) i tysk böjningslära?',
        options: [
          'En strukturell position i paradigmet som saknar hörbar och synlig ändelse (t.ex. "er kaufte-&oslash;" eller "zwei Koffer-&oslash;").',
          'Ett ord som saknar rotmorfem.',
          'Ett skiljetecken som inte uttalas vid högläsning.',
          'En vokal som tystnar i snabbt talspråk.'
        ],
        answer: 0,
        explanation: 'Nollmorfemet (&oslash;) representerar en grammatisk kategori (t.ex. singular eller 3:e person) utan yttre formellt affix.',
        feedback: [
          'Korrekt! I strukturalistisk grammatik fyller nollmorfemet en tom plats i systemet.',
          'Fel. Alla tyska ord har minst ett rotmorfem.',
          'Fel. Det är en abstrakt lingvistisk enhet, inte ett skiljetecken.',
          'Fel. Det syftar på elision eller synkope.'
        ]
      }
    ]
  },
  '/docs/fordjupning/morfologi/nominala-bojningsklasser-och-synkretism': {
    lessonId: 'X007',
    href: '/docs/fordjupning/morfologi/nominala-bojningsklasser-och-synkretism',
    title: 'Snabbkoll: Nominala böjningsklasser och synkretism',
    questions: [
      {
        id: 'x007-q1',
        context: 'Svaga substantivs böjningsmönster.',
        prompt: 'Vad kännetecknar ett svagt maskulint substantiv (N-deklination) som "der Student" eller "der Junge"?',
        options: [
          'Det tar ändelsen -(e)n i samtliga sneda kasus i singular (ack, dat, gen) och i hela pluralen.',
          'Det tar -(e)s i genitiv singular och saknar ändelse i plural.',
          'Det har ingen ändelse alls i singular och tar -er i plural.',
          'Det böjs uteslutande som ett feminint substantiv.'
        ],
        answer: 0,
        explanation: 'Svaga substantiv har ändelsen -(e)n i alla former utom nominativ singular.',
        feedback: [
          'Helt rätt! dem Studenten, den Studenten, des Studenten, die Studenten.',
          'Fel. Det beskriver stark deklination.',
          'Fel. Det beskriver starka neutrala substantiv som Buch -> Bücher.',
          'Fel. De är uteslutande maskulina (förutom specialfallet das Herz).'
        ]
      },
      {
        id: 'x007-q2',
        context: 'Synkretism i nominalsystemet.',
        prompt: 'Vad innebär begreppet synkretism i tysk kasusmorfologi?',
        options: [
          'Att två eller flera grammatiska funktioner realiseras med identisk morfologisk form (t.ex. nominativ och ackusativ femininum).',
          'Att två olika prepositioner alltid styr samma kasus.',
          'Att ett substantiv byter genus i plural.',
          'Att ett starkt verb böjs med svaga ändelser.'
        ],
        answer: 0,
        explanation: 'Synkretism är formsammanfall: das Kind (nom) = das Kind (ack); die Frau (nom) = die Frau (ack).',
        feedback: [
          'Korrekt! Genom synkretism bär artikeln ofta den enda särskiljande markören.',
          'Fel. Det handlar om frasens inre form, inte prepositioners rektion.',
          'Fel. Substantiv byter inte genus i plural; alla pluraler delar däremot bestämd artikel (die).',
          'Fel. Det beskriver blandade verb (Mischverben).'
        ]
      },
      {
        id: 'x007-q3',
        context: 'Adjektiviskt böjda substantiv.',
        prompt: 'Hur böjs det substantiverade adjektivet i nominativ efter obestämd artikel: "ein ___ (bekannt)"?',
        options: [
          'ein Bekannter (stark ändelse -er, eftersom artikeln ein saknar kasusändelse).',
          'ein Bekannte',
          'ein Bekannten',
          'ein Bekanntes'
        ],
        answer: 0,
        explanation: 'Eftersom ein saknar maskulin nominativändelse måste det substantiverade adjektivet ta den starka ändelsen -er: ein Bekannter.',
        feedback: [
          'Helt rätt! Jämför: der Bekannte (svag ändelse) men ein Bekannter (stark ändelse).',
          'Fel. Formen Bekannte används med bestämd artikel (der Bekannte) eller i femininum (eine Bekannte).',
          'Fel. Bekannten används i sneda kasus eller plural.',
          'Fel. Bekanntes är neutral form (etwas Bekanntes).'
        ]
      },
      {
        id: 'x007-q4',
        context: 'Specialfallet "das Herz".',
        prompt: 'Vilka ändelser tar substantivet "das Herz" i genitiv och dativ singular?',
        options: [
          'Genitiv: des Herzens; Dativ: dem Herzen.',
          'Genitiv: des Herzes; Dativ: dem Herz.',
          'Genitiv: des Herz; Dativ: dem Herze.',
          'Genitiv: der Herzen; Dativ: der Herz.'
        ],
        answer: 0,
        explanation: 'Das Herz är det enda neutrala substantivet som har svag böjning, och i genitiv singular kombinerar det svagt -en med starkt -s: des Herzens.',
        feedback: [
          'Korrekt! Des Herzens / dem Herzen är ett unikt historiskt blandat paradigm.',
          'Fel. Formen des Herzes är icke-standard.',
          'Fel. Das Herz kräver svag ändelse i dativ singular.',
          'Fel. Das Herz är neutrum (des/dem), inte femininum.'
        ]
      },
      {
        id: 'x007-q5',
        context: 'Monoflexionsprincipen.',
        prompt: 'Vad innebär monoflexionsprincipen i tyskans nominalfras?',
        options: [
          'Att kasus och genus i regel bara behöver markeras distinkt en enda gång inom nominalfrasen (oftast på artikeln/determinativet).',
          'Att ett substantiv bara får ha ett enda adjektivattribut.',
          'Att verbet alltid måste stå i singular.',
          'Att ett substantiv endast kan böjas i ett enda kasus per mening.'
        ],
        answer: 0,
        explanation: 'När artikeln bär en distinkt kasusmarkör (t.ex. dem, des) kan substantiv och adjektiv ta reducerade/svaga ändelser.',
        feedback: [
          'Helt rätt! Detta förklarar varför adjektiv tar svaga ändelser efter bestämd artikel.',
          'Fel. Nominalfraser kan ha obegränsat antal adjektiv.',
          'Fel. Det berör inte verbets kongruens.',
          'Fel. Kasus bestäms av frasens syntaktiska roll.'
        ]
      },
      {
        id: 'x007-q6',
        context: 'Dativ-e och stilnivå.',
        prompt: 'I vilket av följande sammanhang används dativ-e (t.ex. "im Hause", "dem Grunde nach") i modernt språkbruk?',
        options: [
          'Främst i fasta idiomatiska uttryck, juridiska fraser samt poetisk och stilistiskt högstämd text.',
          'Det är obligatoriskt i alla vardagliga samtal i Tyskland.',
          'Det används enbart av barn som lär sig språket.',
          'Det är förbjudet enligt den officiella stavningsreformen 1996.'
        ],
        answer: 0,
        explanation: 'Dativ-e är valfritt i modernt språkbruk och har blivit en stilmarkör eller fossil i fasta uttryck (zu Hause, im Grunde).',
        feedback: [
          'Korrekt! I modern vardagstyska föredras dem Tisch, dem Haus utan -e.',
          'Fel. I vanligt samtal låter dativ-e ofta ålderdomligt.',
          'Fel. Det är en arkaisk litterär form.',
          'Fel. Reformen 1996 reglerade ortografi, inte morfologiska stilvarianter.'
        ]
      }
    ]
  },
  '/docs/fordjupning/morfologi/genusvariation-och-genuskonflikt': {
    lessonId: 'X008',
    href: '/docs/fordjupning/morfologi/genusvariation-och-genuskonflikt',
    title: 'Snabbkoll: Genusvariation och genuskonflikt',
    questions: [
      {
        id: 'x008-q1',
        context: 'Homonymer med betydelseskiljande genus.',
        prompt: 'Vad är den semantiska skillnaden mellan "der Schild" och "das Schild"?',
        options: [
          'der Schild är riddarskölden i strid; das Schild är anslagsskylten på dörren eller vägen.',
          'der Schild är en stor skylt; das Schild är en liten skylt.',
          'das Schild är en sköld; der Schild är ett bildäck.',
          'Det finns ingen skillnad; genus varierar fritt i Tyskland.'
        ],
        answer: 0,
        explanation: 'Der Schild (maskulinum) avser försvarsskölden; das Schild (neutrum) avser en skylt eller ett märke.',
        feedback: [
          'Helt rätt! Genus är här helt avgörande för ordets lexikala innebörd.',
          'Fel. Storlek avgör inte genus.',
          'Fel. Ingen av formerna betyder bildäck (Reifen).',
          'Fel. Formerna har strikt separerade definitioner i standardtyska.'
        ]
      },
      {
        id: 'x008-q2',
        context: 'Trebetydelsehomonymen "Band".',
        prompt: 'Vad skiljer "der Band", "das Band" och "die Band" åt?',
        options: [
          'der Band = bokvolym; das Band = snöre/relation; die Band = musikgrupp.',
          'der Band = musikgrupp; das Band = bokvolym; die Band = snöre.',
          'das Band = bokvolym; der Band = relation; die Band = armbandsur.',
          'Alla tre betyder snöre men används i olika regioner.'
        ],
        answer: 0,
        explanation: 'Der Band (bokband/del av serie), das Band (textilband/vänskapsband), die Band (rockgrupp).',
        feedback: [
          'Korrekt! Ett klassiskt exempel på hur samtliga tre tyska genus skapar olika ord.',
          'Fel. Ordningen är förväxlad.',
          'Fel. Armbandsur heter Armbanduhr.',
          'Fel. Orden har helt olika semantiska referenser.'
        ]
      },
      {
        id: 'x008-q3',
        context: 'Pluricentrism och nationell genusvariation.',
        prompt: 'Vilket genus har ordet "Monat" i österrikisk regional standard kontra tysk riksstandard?',
        options: [
          'das Monat i Österrike (särskilt i talspråk och regional standard); der Monat i Tyskland.',
          'die Monat i Tyskland; das Monat i Schweiz.',
          'der Monat i Österrike; das Monat i Tyskland.',
          'Det är alltid maskulint i alla tyskspråkiga länder utan undantag.'
        ],
        answer: 0,
        explanation: 'I Österrike förekommer det neutrala genus das Monat regionalt, medan tysk standardnorm strikt föreskriver der Monat.',
        feedback: [
          'Helt rätt! Tyskan är ett pluricentriskt språk med etablerade regionala genusnormer.',
          'Fel. Monat är aldrig femininum.',
          'Fel. Det är tvärtom: Österrike har neutral tendens.',
          'Fel. Österrikiska ordböcker dokumenterar das Monat som regional variant.'
        ]
      },
      {
        id: 'x008-q4',
        context: 'Genus-Sexus-konflikten vid personreferens.',
        prompt: 'Vad innebär konflikten mellan grammatiskt genus och biologiskt kön (Sexus) vid ordet "das Mädchen"?',
        options: [
          'Grammatiskt är ordet neutrum (das), men referenten är biologiskt kvinna, vilket skapar variation i pronomenval (es vs. sie).',
          'Ordet måste böjas som ett pluralord trots att det avser en person.',
          'Man får inte använda adjektiv före ordet Mädchen.',
          'Ordet har förlorat sin böjning i modern tyska.'
        ],
        answer: 0,
        explanation: 'Das Mädchen styr grammatiskt es/sein, men i modern prosa och samtal används ofta referentiellt sie/ihr.',
        feedback: [
          'Korrekt! I formell skrift föredras ofta es/sein, medan talspråk gynnar semantisk kongruens (sie/ihr).',
          'Fel. Det är ett reguljärt singularord.',
          'Fel. Adjektivkongruens är obligatorisk (ein nettes Mädchen).',
          'Fel. Ordet följer reguljär neutral deklination.'
        ]
      },
      {
        id: 'x008-q5',
        context: 'Distinktionen mellan "der Teil" och "das Teil".',
        prompt: 'Hur skiljer sig användningen av "der Teil" och "das Teil"?',
        options: [
          'der Teil avser en abstrakt del av en helhet (kapitel, andel); das Teil avser ett fysiskt föremål, en pryl eller reservdel.',
          'das Teil är maskulint i plural.',
          'der Teil används enbart om människor.',
          'Det finns ingen skillnad; orden är helt synonyma.'
        ],
        answer: 0,
        explanation: 'Der Teil einer Aufgabe (abstrakt del); das Ersatzteil, das Ding (fysisk pryl/komponent).',
        feedback: [
          'Helt rätt! Zum großen Teil (der Teil), men das Autoteil (das Teil).',
          'Fel. Plural har ingen inverkan på singulargenus.',
          'Fel. Der Teil avser abstrakta helhetsdelar.',
          'Fel. Skillnaden mellan abstrakt andel och konkret pryl är semantiskt fastlagd.'
        ]
      },
      {
        id: 'x008-q6',
        context: 'Medicinskt fackspråk och lånord.',
        prompt: 'Vilket genus föreskrivs för ordet "Virus" i formellt medicinskt och biologiskt fackspråk?',
        options: [
          'das Virus (neutrum, i överensstämmelse med latinets ursprungliga genus).',
          'die Virus (femininum)',
          'uteslutande der Virus (maskulinum)',
          'Ordet saknar genus och kan inte ha artikel.'
        ],
        answer: 0,
        explanation: 'I vetenskapliga sammanhang är das Virus standard; der Virus accepteras som vardaglig andrahandsform av Duden.',
        feedback: [
          'Korrekt! I medicinsk och biologisk vetenskap dominerar das Virus helt.',
          'Fel. Ordet har aldrig varit femininum.',
          'Fel. Maskulinum är vanligt i vardagsspråk och datorsammanhang men inte det primära vetenskapliga genuset.',
          'Fel. Alla tyska substantiv har genus.'
        ]
      }
    ]
  },
  '/docs/fordjupning/morfologi/pluralvariation-dubbelplural-och-massord': {
    lessonId: 'X009',
    href: '/docs/fordjupning/morfologi/pluralvariation-dubbelplural-och-massord',
    title: 'Snabbkoll: Pluralvariation, dubbelplural och massord',
    questions: [
      {
        id: 'x009-q1',
        context: 'Semantisk kontrast mellan Wörter och Worte.',
        prompt: 'När används pluralformen "Worte" i stället för "Wörter"?',
        options: [
          'När man avser sammanhängande tankar, ett tal, ett budskap eller visdomsord (t.ex. "danke für deine Worte").',
          'När man räknar enskilda ord i en ordbok eller text (t.ex. "en uppsats på 500 ord").',
          'Enbart när ordet står i genitiv plural.',
          'Worte är en förlegad form som inte längre används efter 1996.'
        ],
        answer: 0,
        explanation: 'Wörter avser enskilda lexikala byggstenar; Worte avser meningsfulla yttranden och budskap.',
        feedback: [
          'Helt rätt! "Ein Mann, ein Wort" -> "seine Worte trafen ins Schwarze".',
          'Fel. Att räkna isolerade ord kräver formen Wörter (ein Aufsatz von 500 Wörtern).',
          'Fel. Båda formerna böjs i alla fyra kasus.',
          'Fel. Formen Worte är högst levande och stilistiskt nödvändig.'
        ]
      },
      {
        id: 'x009-q2',
        context: 'Pluraldifferentiering av "die Bank".',
        prompt: 'Vad är skillnaden mellan pluralformerna "Bänke" och "Banken"?',
        options: [
          'die Bänke = sittbänkar (parken, skolan); die Banken = finansiella banker och kreditinstitut.',
          'die Banken = sittbänkar; die Bänke = kreditinstitut.',
          'Bänke används enbart i Schweiz; Banken i Tyskland.',
          'Bänke är femininum; Banken är maskulinum.'
        ],
        answer: 0,
        explanation: 'Die Parkbänke (möbler) vs. die Großbanken (kreditinstitut).',
        feedback: [
          'Korrekt! En viktig distinktion som förhindrar förvirrande missförstånd.',
          'Fel. Betydelserna är omvända.',
          'Fel. Båda formerna tillhör standardspråket med skilda betydelser.',
          'Fel. Alla pluralformer har samma artikel (die) oavsett grundordets genus.'
        ]
      },
      {
        id: 'x009-q3',
        context: 'Maskulina och neutrala måttord.',
        prompt: 'Vilken form har maskulina och neutrala måttord efter räkneord (t.ex. "zwei ___ Wasser", "drei ___ Äpfel")?',
        options: [
          'De står i oförändrad singularform (nollplural): "zwei Glas Wasser", "drei Kilo Äpfel".',
          'De måste alltid böjas i plural: "zwei Gläser Wasser", "drei Kilos Äpfel".',
          'De sätts alltid i genitiv singular.',
          'De tar ändelsen -s oavsett kasus.'
        ],
        answer: 0,
        explanation: 'Maskulina och neutrala mått-, mynt- och mängdord tar nollplural efter räkneord (zwei Glas, fünf Kilo, zehn Grad).',
        feedback: [
          'Helt rätt! Detta är en av tyskans viktigaste kvantitetsregler.',
          'Fel. Formen zwei Gläser används bara om man syftar på själva dricksglasen som fysiska föremål, inte måttet.',
          'Fel. De står i nominativ/ackusativ singularform.',
          'Fel. Ändelsen -s är inte tillåten här.'
        ]
      },
      {
        id: 'x009-q4',
        context: 'Feminina måttord som undantag.',
        prompt: 'Hur skiljer sig feminina måttord som "die Flasche" eller "die Tasse" efter räkneord?',
        options: [
          'De böjs obligatoriskt i plural: "zwei Flaschen Wein", "drei Tassen Kaffee".',
          'De har också nollplural: *"zwei Flasche Wein".',
          'De får inte användas efter räkneord utan preposition.',
          'De ändrar genus till neutrum.'
        ],
        answer: 0,
        explanation: 'Feminina måttord omfattas inte av nollpluralregeln utan böjs alltid regelbundet i plural med -n/-en.',
        feedback: [
          'Korrekt! Maskuliner och neutrala har nollplural; femininer böjs i plural.',
          'Fel. *"zwei Flasche" är grammatiskt felaktigt på tyska.',
          'Fel. De används direkt som mängdangivelse utan preposition.',
          'Fel. De förblir feminina.'
        ]
      },
      {
        id: 'x009-q5',
        context: 'Pluralia tantum.',
        prompt: 'Vad är ett "plurale tantum" och vilket av följande ord är ett sådant i tyska?',
        options: [
          'Ett substantiv som enbart existerar i plural, t.ex. "die Ferien" eller "die Kosten".',
          'Ett ord som har två olika genus i singular.',
          'Ett ord som aldrig får ha artikel.',
          'Ett substantiv som böjs som ett adjektiv.'
        ],
        answer: 0,
        explanation: 'Pluralia tantum är ord som saknar singularform och alltid styr pluralverb: Die Ferien sind vorbei.',
        feedback: [
          'Helt rätt! Ferien, Kosten, Eltern, Geschwister, Personalien är typiska pluralia tantum.',
          'Fel. Det beskriver dubbelgenus.',
          'Fel. Pluralia tantum har bestämd artikel die.',
          'Fel. Det beskriver substantiverade adjektiv.'
        ]
      },
      {
        id: 'x009-q6',
        context: 'Klassiska lånordspluraler.',
        prompt: 'Hur bildar latinska lånord på -um som "das Praktikum" och "das Museum" plural i standardtyska?',
        options: [
          'De byter ut suffixet: "die Praktika" (klassisk -a) och "die Museen" (anpassad -en).',
          'De lägger bara till ett enkelt -s: *"die Praktikums", *"die Museums".',
          'De är oförändrade nollpluraler.',
          'De får omljud på stamvokalen utan ändelse.'
        ],
        answer: 0,
        explanation: 'Praktikum -> Praktika, Kriterium -> Kriterien, Museum -> Museen.',
        feedback: [
          'Korrekt! Bildad standardtyska bevarar klassiska grekisk-latinska pluraländelser.',
          'Fel. Formen *Praktikums är felaktig i standardtyska.',
          'Fel. De har distinkta pluraländelser.',
          'Fel. Lånord på -um tar inte omljud.'
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
console.log('Finished updating learning-quizzes.ts with Group 2B quizzes.');
