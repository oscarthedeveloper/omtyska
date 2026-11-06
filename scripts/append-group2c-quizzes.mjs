import fs from 'node:fs';
import path from 'node:path';

const quizzes = {
  '/docs/fordjupning/morfologi/kompositionens-typer-och-fogeelement': {
    lessonId: 'X010',
    href: '/docs/fordjupning/morfologi/kompositionens-typer-och-fogeelement',
    title: 'Snabbkoll: Kompositionens typer och fogeelement',
    questions: [
      {
        id: 'x010-q1',
        context: 'Högerledsregeln i tysk morfologi.',
        prompt: 'Vad innebär högerledsregeln (Rechtskopffixierung) i tyska sammansättningar?',
        options: [
          'Efterledet (Grundwort) avgör ordklass, grammatiskt genus och böjningsmönster i plural.',
          'Förledet avgör alltid hela sammansättningens genus.',
          'Det led som är längst avgör betoningen.',
          'Högerledet måste alltid vara ett verb.'
        ],
        answer: 0,
        explanation: 'Efterledet (huvudet) styr ordets grammatiska identitet: die Sonne + das Bad = das Sonnenbad.',
        feedback: [
          'Helt rätt! Efterledet är det grammatiska huvudet i determinativa komposita.',
          'Fel. Förledet modifierar betydelsen, men styr inte genuset.',
          'Fel. Betoningen ligger normalt på det första ledet oavsett längd.',
          'Fel. Efterledet bestämmer ordklassen (substantiv i sammansatta substantiv).'
        ]
      },
      {
        id: 'x010-q2',
        context: 'Kopulativa komposita.',
        prompt: 'Vad är ett kopulativt (koordinativt) kompositum som "Hosenrock" eller "schwarz-weiß"?',
        options: [
          'En sammansättning där båda leden är semantiskt likställda och samordnade.',
          'Ett ord där förledet förnekar efterledet.',
          'En sammansättning som saknar fogeelement.',
          'Ett ord som enbart får användas i passiva satser.'
        ],
        answer: 0,
        explanation: 'Kopulativa komposita betecknar något som är båda sakerna samtidigt: ett plagg som är både byxa och kjol.',
        feedback: [
          'Korrekt! A och B är likställda, till skillnad från determinativa komposita där A bestämmer B.',
          'Fel. Det beskriver antonymiska privativa bildningar.',
          'Fel. Många determinativa ord saknar också fogeelement.',
          'Fel. Det berör inte satsens diates.'
        ]
      },
      {
        id: 'x010-q3',
        context: 'Reglerna för fogeelement.',
        prompt: 'Vilket fogeelement används regelmässigt efter feminina avledningssuffix som -ung, -heit, -keit och -schaft?',
        options: [
          'Fogeelementet -s- (t.ex. Wirtschaftskrise, Freiheitskampf, Meinungsaustausch).',
          'Fogeelementet -en- (t.ex. *Wirtschaftenkrise).',
          'Det är alltid strikt nollfog efter dessa suffix.',
          'Fogeelementet -er- med omljud.'
        ],
        answer: 0,
        explanation: 'Suffixen -ung, -heit, -keit, -schaft, -tät tar obligatoriskt foge-s i sammansättningar.',
        feedback: [
          'Helt rätt! Detta foge-s är ett rent ordbildningselement, inte ett kasusmärke.',
          'Fel. Feminina suffix tar inte -en- som foge.',
          'Fel. Nollfog vore felaktigt (*Wirtschaftkrise är inte standard).',
          'Fel. -er- förekommer inte efter dessa suffix.'
        ]
      },
      {
        id: 'x010-q4',
        context: 'Possessiva/exocentriska komposita.',
        prompt: 'Varför kallas ord som "Dickkopf" och "Rotkehlchen" för exocentriska (possessiva) komposita?',
        options: [
          'Därför att ordet syftar på en person eller fågel utanför själva leden (en person med tjock skalle, en fågel med rött bröst).',
          'Därför att de alltid står i genitiv.',
          'Därför att de måste skrivas med bindestreck.',
          'Därför att de saknar böjning i plural.'
        ],
        answer: 0,
        explanation: 'Ett Rotkehlchen är inte ett slags bröst, utan en fågel som äger ett rött bröst (Bahuvrihi-kompositum).',
        feedback: [
          'Korrekt! Huvudet för betydelsen ligger utanför de sammansatta delarna.',
          'Fel. Possessiv avser semantisk innehavsrelation, inte grammatiskt kasus.',
          'Fel. De skrivs ihop utan bindestreck.',
          'Fel. De har fullständig pluralböjning.'
        ]
      },
      {
        id: 'x010-q5',
        context: 'Pluricentrisk variation i fogelement.',
        prompt: 'Hur skiljer sig österrikisk standard från tysk riksstandard avseende fogelement i ordet "tågförsening"?',
        options: [
          'Österrike har Zugsverspätung (med foge-s); Tyskland har Zugverspätung (nollfog).',
          'Tyskland har Zugsverspätung; Österrike har Zugverspätung.',
          'Schweiz använder alltid bindestreck: Zug-Verspätung.',
          'Båda länderna har strikt identisk norm.'
        ],
        answer: 0,
        explanation: 'Österrikisk och schweizisk standard använder ofta foge-s där Tyskland har nollfog.',
        feedback: [
          'Helt rätt! Zugsverspätung, Fabrikstor och Advent-s-kalender är typiska sydliga varianter.',
          'Fel. Det är tvärtom: Österrike lägger till -s-.',
          'Fel. Bindestreck är inte standard här.',
          'Fel. Tyskan har väldokumenterad regional variation i ordbildning.'
        ]
      },
      {
        id: 'x010-q6',
        context: 'Betydelseskiljande fogeelement.',
        prompt: 'Vad är skillnaden i betydelse mellan minimalparet "Landmann" och "Landsmann"?',
        options: [
          'Landmann = bonde / lantbrukare; Landsmann = medborgare / landsman från samma nation.',
          'Landsmann = bonde; Landmann = medborgare.',
          'Båda orden betyder bonde, men Landsmann används enbart i plural.',
          'Landmann är ett ålderdomligt ord för kung.'
        ],
        answer: 0,
        explanation: 'Foge-s ändrar här förledets association från jorden/marken (Land) till hemlandet/staten (Heimatland).',
        feedback: [
          'Korrekt! Närvaron av foge-s skiljer bonden (Landmann) från landsmannen (Landsmann).',
          'Fel. Betydelserna är omvända.',
          'Fel. Landsmann har pluralen Landsleute och avser personer från samma hemland.',
          'Fel. Landmann betyder lantman/bonde.'
        ]
      }
    ]
  },
  '/docs/fordjupning/morfologi/nominala-avledningssuffix': {
    lessonId: 'X011',
    href: '/docs/fordjupning/morfologi/nominala-avledningssuffix',
    title: 'Snabbkoll: Nominala avledningssuffix',
    questions: [
      {
        id: 'x011-q1',
        context: 'Fasta genussamband vid feminina suffix.',
        prompt: 'Vilket genus och vilken pluraländelse har substantiv som slutar på avledningssuffixen -ung, -heit och -keit?',
        options: [
          'Alltid femininum (die) med plural på -(e)n.',
          'Alltid neutrum (das) med plural på -er.',
          'Alltid maskulinum (der) med nollplural.',
          'Det varierar fritt beroende på rotordets ursprungliga genus.'
        ],
        answer: 0,
        explanation: 'Avledningssuffixen -ung, -heit, -keit, -schaft dikterar alltid undantagslöst femininum och -(e)n-plural.',
        feedback: [
          'Helt rätt! Die Lösung -> die Lösungen; die Freiheit -> die Freiheiten.',
          'Fel. Neutrum gäller för diminutiv som -chen.',
          'Fel. Maskulinum gäller för -er och -ling.',
          'Fel. Suffixet övertrumfar rotordets genus helt.'
        ]
      },
      {
        id: 'x011-q2',
        context: 'Undantag till suffixet -tum.',
        prompt: 'Vilka är de enda två etablerade maskulina undantagen till det annars neutrala suffixet -tum?',
        options: [
          'der Reichtum (rikedom) och der Irrtum (misstag).',
          'der Eigentum och der Herzogtum.',
          'der Bürgertum och der Christentum.',
          'Det finns inga maskulina undantag; alla -tum-ord är strikt neutrum.'
        ],
        answer: 0,
        explanation: 'Medan alla andra ord på -tum är neutrum (das Eigentum, das Altertum) är Reichtum och Irrtum maskulina.',
        feedback: [
          'Korrekt! Ett viktigt specialfall som ofta prövas i avancerad grammatik.',
          'Fel. Das Eigentum och das Herzogtum är neutrum.',
          'Fel. Das Bürgertum och das Christentum är neutrum.',
          'Fel. Reichtum och Irrtum är väldokumenterade maskulina undantag.'
        ]
      },
      {
        id: 'x011-q3',
        context: 'Genusvariation hos suffixet -nis.',
        prompt: 'Vad är speciellt med substantiv som bildats med suffixet -nis?',
        options: [
          'De kan vara antingen neutrum (t.ex. das Geheimnis, das Ergebnis) eller femininum (t.ex. die Erlaubnis, die Kenntnis).',
          'De är alltid maskulina och har plural på -s.',
          'De saknar böjning i alla sneda kasus.',
          'De bildar plural utan att dubblera s-konsonanten.'
        ],
        answer: 0,
        explanation: 'Suffixet -nis delas i två grupper: neutrala ord (das Zeugnis) och feminina ord (die Finsternis). Båda dubblerar -s i plural (-nisse).',
        feedback: [
          'Helt rätt! Genus måste läras in individuellt för varje -nis-ord.',
          'Fel. Inget ord på -nis är maskulint i modern standardtyska.',
          'Fel. De böjs regelbundet starkt eller feminint.',
          'Fel. Konsonanten s dubbleras alltid i plural: Geheimnisse.'
        ]
      },
      {
        id: 'x011-q4',
        context: 'Movieringssuffixet -in.',
        prompt: 'Vilken semantisk funktion har suffixet -in i ord som "Lehrerin" och "Ärztin"?',
        options: [
          'Moviering: det skapar en feminin person- eller yrkesbeteckning från en maskulin bas.',
          'Förminskning (diminutiv).',
          'Det gör ordet till ett abstrakt tillstånd.',
          'Det förvandlar substantivet till ett adjektiv.'
        ],
        answer: 0,
        explanation: 'Moviering (Motion) kallas den ordbildningsprocess som avleder kvinnliga personbeteckningar från maskulina baser.',
        feedback: [
          'Korrekt! Lägg märke till att pluralen alltid blir -innen (Lehrerinnen).',
          'Fel. Diminutiv skapas med -chen eller -lein.',
          'Fel. Det beskriver suffix som -heit eller -tum.',
          'Fel. Ordet förblir ett substantiv.'
        ]
      },
      {
        id: 'x011-q5',
        context: 'Rotord kontra avledningssuffix.',
        prompt: 'Varför är "der Sprung" och "der Schwung" maskulina trots att de slutar på bokstäverna "ung"?',
        options: [
          'De är enstaviga rotord (avledda genom avlyd från springen/schwingen), inte flerstaviga suffixavledningar med -ung.',
          'De är lånord från franska.',
          'De ändrades till maskulinum vid stavningsreformen 1996.',
          'De är förkortningar av längre sammansättningar.'
        ],
        answer: 0,
        explanation: 'Endast det obetonade avledningssuffixet -ung bildar feminina substantiv. Enstaviga rotord med rotfinalt -ung är maskulina.',
        feedback: [
          'Helt rätt! Blanda aldrig ihop bokstavsslut i rotord med äkta avledningssuffix.',
          'Fel. Båda är genuina germanska starka verbstammar.',
          'Fel. Reformen 1996 ändrade inte genus.',
          'Fel. De är enkla rotord.'
        ]
      },
      {
        id: 'x011-q6',
        context: 'Diminutivens egenskaper.',
        prompt: 'Vad kännetecknar de två diminutivsuffixen -chen och -lein i tysk grammatik?',
        options: [
          'De tvingar alltid fram neutralt genus (das) och tar ofta omljud på stammens vokal.',
          'De ändrar alltid ordets genus till femininum.',
          'De kan enbart användas vid djurnamn.',
          'De fördubblar alla konsonanter i plural.'
        ],
        answer: 0,
        explanation: 'Diminutiver är alltid neutrum: das Mädchen, das Häuschen, das Brötchen. Pluralen har nolländelse.',
        feedback: [
          'Korrekt! Även ord som syftar på biologiska kvinnor blir grammatiskt neutrum (das Mädchen, das Fräulein).',
          'Fel. Diminutiver är aldrig feminina i standardtyska.',
          'Fel. De kan appliceras på nästan alla konkreta substantiv.',
          'Fel. De har nollplural utan ändelse.'
        ]
      }
    ]
  },
  '/docs/fordjupning/morfologi/adjektiv-och-adverbavledning': {
    lessonId: 'X012',
    href: '/docs/fordjupning/morfologi/adjektiv-och-adverbavledning',
    title: 'Snabbkoll: Adjektiv- och adverbavledning',
    questions: [
      {
        id: 'x012-q1',
        context: 'Syntaktiska restriktioner för suffixet -bar.',
        prompt: 'Vilken valensrestriktion gäller för adjektivbildning med suffixet -bar i standardtyska?',
        options: [
          'Det kan endast bildas från transitiva verb (verb som tar ackusativobjekt).',
          'Det kan endast bildas från intransitiva rörelseverb.',
          'Det kan bildas från alla verb utan undantag.',
          'Det kan endast fästas vid substantiv i genitiv.'
        ],
        answer: 0,
        explanation: '-bar uttrycker passiv potential ("kan göras") och förutsätter ett underliggande ackusativobjekt (etwas trinken -> trinkbar).',
        feedback: [
          'Helt rätt! Intransitiva verb som schlafen eller gehen kan inte bilda ord med -bar.',
          'Fel. Intransitiva rörelseverb är uteslutna.',
          'Fel. Det kräver strikt transitivitet.',
          'Fel. -bar är ett deverbativt suffix (fäster på verbstammar).'
        ]
      },
      {
        id: 'x012-q2',
        context: 'Semantisk kontrast mellan kindlich och kindisch.',
        prompt: 'Vad är den stilistiska och semantiska skillnaden mellan "kindlich" och "kindisch"?',
        options: [
          'kindlich uttrycker positiv/neutral oskuldsfullhet och renhet; kindisch har en nedsättande/pejorativ klang (omogen, löjlig).',
          'kindisch är positivt beröm; kindlich är en förolämpning.',
          'kindlich används enbart om pojkar; kindisch om flickor.',
          'Det finns ingen skillnad; de är synonyma varianter.'
        ],
        answer: 0,
        explanation: 'Suffixet -isch har ofta en pejorativ nyans (kindisch, herrisch, weibisch), medan -lich är neutralt eller positivt.',
        feedback: [
          'Korrekt! Att säga "du bist kindisch" är en kritik, medan "kindliche Freude" är vackert.',
          'Fel. Betydelserna är omvända.',
          'Fel. Orden har ingen koppling till biologiskt kön.',
          'Fel. Kontrasten mellan -lich och -isch är ett etablerat stilmönster.'
        ]
      },
      {
        id: 'x012-q3',
        context: 'Adverb på -weise.',
        prompt: 'Vad kännetecknar adverbbildningar på -weise som "glücklicherweise" och "schrittweise"?',
        options: [
          'De fungerar som satsadverb eller distributionsadverb och böjs aldrig som attributiva adjektiv.',
          'De är vanliga adjektiv som kan kompareras med -er och -st.',
          'De måste alltid placeras sist i bisatsen.',
          'De är lånord som betraktas som slang.'
        ],
        answer: 0,
        explanation: '-weise bildar äkta adverb som inte kan ta adjektiviska böjningsändelser framför substantiv.',
        feedback: [
          'Helt rätt! De kommenterar satsens modalitet eller handlingens sätt.',
          'Fel. De kan inte kompareras eller böjas attributivt.',
          'Fel. De kan stå i fundamentet eller i mittfältet.',
          'Fel. De är högfrekventa och fullt etablerade i bildat språk.'
        ]
      },
      {
        id: 'x012-q4',
        context: 'Genitivadverb på -s.',
        prompt: 'Hur bildas temporala genitivadverb som "morgens", "abends", "nachts"?',
        options: [
          'Genom tillägg av genitivändelsen -s till substantivstammen.',
          'Genom att sätta ordet i dativ plural.',
          'Genom sammandragning av en prepositionalfras med in.',
          'Det är en engelsk pluralform som lånats in.'
        ],
        answer: 0,
        explanation: 'Suffixet -s härstammar från maskulin genitiv och har generaliserats även till feminina ord (nachts).',
        feedback: [
          'Korrekt! Morgens, abends, nachts, mittags fungerar som fristående tidsadverb.',
          'Fel. Dativ plural har ändelsen -en.',
          'Fel. Det är ett enkelt morfologiskt genitivsuffix.',
          'Fel. Formen är genuint germansk och urgammal.'
        ]
      },
      {
        id: 'x012-q5',
        context: 'Privativsuffixet -los.',
        prompt: 'Vad uttrycker det privativa suffixet -los i ord som "arbeitslos" och "hoffnungslos"?',
        options: [
          'Total avsaknad eller brist på det som basordet anger ("utan arbete", "utan hopp").',
          'En extrem förstärkning av egenskapen.',
          'Att handlingen sker i det förflutna.',
          'Ett antagande om framtiden.'
        ],
        answer: 0,
        explanation: '-los motsvarar svenskans -lös och anger att subjektet saknar basordets referens.',
        feedback: [
          'Helt rätt! Privativa adjektiv anger negation av basordet.',
          'Fel. Förstärkning görs med prefix som ur- eller suffix som -voll.',
          'Fel. Det har ingen tempusspecifik betydelse.',
          'Fel. Det anger ett faktiskt tillstånd.'
        ]
      },
      {
        id: 'x012-q6',
        context: 'Valensfel med -bar.',
        prompt: 'Varför kan man i tysk standardmorfologi inte bilda adjektivet *schlafbar från verbet "schlafen"?',
        options: [
          'Eftersom schlafen är ett intransitivt verb och -bar kräver ett underliggande ackusativobjekt.',
          'Därför att ordet redan slutar på en labial konsonant.',
          'Därför att schlafen är ett svagt verb.',
          'Regeln ändrades 1996 och förbjöd ordet.'
        ],
        answer: 0,
        explanation: '-bar kan endast fästas vid transitiva verb. För intransitiva verb används omskrivningar som "möglich zu schlafen".',
        feedback: [
          'Korrekt! Valensrestriktionen hos -bar är absolut i standardtyska.',
          'Fel. Fonologin är inget hinder (jfr greifbar av greifen).',
          'Fel. Schlafen är ett starkt verb, men böjningstypen avgör inte -bar.',
          'Fel. Stavningsreformen påverkade inte morfologisk valens.'
        ]
      }
    ]
  },
  '/docs/fordjupning/morfologi/konversion-kortord-och-produktiva-nybildningar': {
    lessonId: 'X014',
    href: '/docs/fordjupning/morfologi/konversion-kortord-och-produktiva-nybildningar',
    title: 'Snabbkoll: Konversion, kortord och produktiva nybildningar',
    questions: [
      {
        id: 'x014-q1',
        context: 'Konversion av infinitiver till substantiv.',
        prompt: 'Vilket genus och vilken böjning får ett verb som konverteras till substantiv (t.ex. "das Leben", "das Essen")?',
        options: [
          'Alltid neutrum (das) med genitivändelsen -s och saknar normalt plural.',
          'Alltid maskulinum med plural på -e.',
          'Alltid femininum med plural på -en.',
          'Genus beror på om verbet är starkt eller svagt.'
        ],
        answer: 0,
        explanation: 'Substantiverade infinitiver är alltid neutrum (das Lernen, das Schwimmen) och uppträder som singularia tantum.',
        feedback: [
          'Helt rätt! Das Lesen, das Schreiben, das Essen är alltid neutrum.',
          'Fel. Maskulina verbalabstraktioner bildas via rotkonversion utan -en (der Schlaf, der Biss).',
          'Fel. Feminina substantiveringar kräver suffix som -ung.',
          'Fel. Starka och svaga verb bildar likadant neutrum på -en.'
        ]
      },
      {
        id: 'x014-q2',
        context: 'Genusregeln för akronymer och initialord.',
        prompt: 'Vad styr det grammatiska genuset hos akronymer som "der LKW" och "das BAföG"?',
        options: [
          'Huvudordet (Grundwort) i den fullt utskrivna frasen (der Lastkraftwagen -> der LKW; das Bundesausbildungsförderungsgesetz -> das BAföG).',
          'Den första bokstaven i förkortningen.',
          'Alla initialord blir automatiskt neutrum.',
          'Antalet bokstäver i förkortningen.'
        ],
        answer: 0,
        explanation: 'Akronymer ärver genuset från det sista sammansatta substantivet i den fullständiga titeln.',
        feedback: [
          'Korrekt! Der LKW (Wagen), das BAföG (Gesetz), die SPD (Partei).',
          'Fel. Första bokstaven påverkar inte genus.',
          'Fel. De har alla tre genus baserat på sitt huvudord.',
          'Fel. Förkortningens längd saknar grammatisk betydelse.'
        ]
      },
      {
        id: 'x014-q3',
        context: 'Kortordstyper (Kopfformen).',
        prompt: 'Vad är en "Kopfform" inom tysk kortordsbildning, och vilket av följande ord är en sådan?',
        options: [
          'Ett kortord som behåller ordets början och kapar slutet, t.ex. "die Uni" (från Universität) eller "das Foto" (från Fotografie).',
          'Ett ord som enbart består av vokaler.',
          'Ett kortord som behåller slutet, som der Bus.',
          'En sammansättning av två ords mittendelar.'
        ],
        answer: 0,
        explanation: 'Kopfformen behåller förledet: Uni, Foto, Auto, Disko, Akku. Genuset ärvs oförändrat.',
        feedback: [
          'Helt rätt! Kopfformen är den vanligaste kortordstypen i modern tyska.',
          'Fel. Kortord behåller konsonanter och stavelser.',
          'Fel. Det som behåller slutet kallas Schwanzform (t.ex. Bus från Omnibus).',
          'Fel. Det beskriver en klammerform eller kontamination.'
        ]
      },
      {
        id: 'x014-q4',
        context: 'Integrering av lånverb.',
        prompt: 'Hur integreras moderna engelska lånverb som "googeln", "liken", "streamen" i tysk morfologi?',
        options: [
          'De anpassas helt till det tyska regelbundna svaga verbmönstret (er googelte, er hat gelikt, wir streamten).',
          'De behåller alltid engelsk preteritumböjning med -ed.',
          'De blir automatiskt starka verb med avlyd i stammen.',
          'De kan inte böjas utan kräver alltid hjälpverbet tun.'
        ],
        answer: 0,
        explanation: 'Tyskan inkorporerar lånverb i den svaga böjningsklassen med ändelserna -(e)te och participet ge-...-t.',
        feedback: [
          'Korrekt! Ich habe das Video gelikt (inte *geliked).',
          'Fel. Engelsk stavning som -ed är felaktig i tysk grammatik.',
          'Fel. Nya verb bildar aldrig stark avlydsböjning.',
          'Fel. Hjälpverbet tun är talspråkligt och inte den grammatiska mekanismen.'
        ]
      },
      {
        id: 'x014-q5',
        context: 'Kontaminationer och teleskopord.',
        prompt: 'Vad kallas en ordbildning där två ord smälts samman med överlappande stammar som "Denglisch" (Deutsch + Englisch)?',
        options: [
          'Kontamination (Blending / Kofferwort / Portmanteau-ord).',
          'Determinativt kompositum.',
          'Kopulativt pronomen.',
          'Konversion.'
        ],
        answer: 0,
        explanation: 'Kofferwörter bildas genom att delar av två ord smälter samman, t.ex. Denglisch, Kurlaub, Teuro.',
        feedback: [
          'Helt rätt! Kontamination är en produktiv stilistisk nybildningsmekanism.',
          'Fel. Ett determinativt kompositum fogar samman två fullständiga ord.',
          'Fel. Det berör inte pronomen.',
          'Fel. Konversion innebär ordklassbyte utan ordändring.'
        ]
      },
      {
        id: 'x014-q6',
        context: 'Skrivregler för konverterade fraser.',
        prompt: 'Vilken ortografisk regel gäller vid konversion av fraser och partiklar som "das Hin und Her" och "ein klares Nein"?',
        options: [
          'De måste alltid skrivas med stor begynnelsebokstav eftersom de fungerar som substantiv.',
          'De måste skrivas med bindestreck mellan varje ord.',
          'De får inte föregås av bestämd artikel.',
          'De skrivs alltid med små bokstäver oavsett funktion.'
        ],
        answer: 0,
        explanation: 'Alla ord och fraser som konverteras till substantiv lyder under den tyska regeln om obligatorisk versal: das Hin und Her, ein klares Nein.',
        feedback: [
          'Korrekt! Substantivering kräver alltid stor begynnelsebokstav i tysk ortografi.',
          'Fel. Bindestreck är endast nödvändigt vid flerordiga sammansättningar (das Vergißmeinnicht-Gefühl).',
          'Fel. De tar reguljär artikel (das, ein).',
          'Fel. Gemener vore ett allvarligt ortografiskt fel.'
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
console.log('Finished updating learning-quizzes.ts with Group 2C quizzes.');
