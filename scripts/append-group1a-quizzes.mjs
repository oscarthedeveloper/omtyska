import fs from 'fs';

const g1aQuizzes = {
  // S05: N-deklination och blandade substantiv
  '/docs/substantiv/n-deklination': {
    lessonId: 'S05',
    href: '/docs/substantiv/n-deklination',
    title: 'Snabbkoll: N-deklination och svaga maskuliner',
    questions: [
      {
        id: 's05-q1',
        context: 'Undersök böjningen av svaga maskulina ord som "der Junge" och "der Student".',
        prompt: 'I vilka kasus i singular får svaga maskulina substantiv ändelsen -(e)n?',
        options: [
          'I alla oblika kasus: ackusativ, dativ och genitiv singular (den Jungen, dem Jungen, des Jungen).',
          'Endast i nominativ singular.',
          'Endast i dativ plural.',
          'Endast i genitiv.',
        ],
        answer: 0,
        explanation: 'Svaga maskuliner (n-deklination) får ändelsen -(e)n i alla singularformer utom nominativ, samt i hela pluralen.',
        feedback: [
          'Helt rätt! Ackusativ, dativ och genitiv singular får alla -(e)n.',
          'I nominativ singular har ordet sin grundform (der Junge).',
          'Dativ plural har också -n, men regeln för svaga maskuliner gäller i högsta grad singular.',
          'Det gäller även ackusativ och dativ singular.',
        ],
      },
      {
        id: 's05-q2',
        context: 'Du ser en student på gatan och vill säga: "Jag känner studenten."',
        prompt: 'Vad är den korrekta ackusativformen för "der Student"?',
        options: [
          'Ich kenne den Studenten.',
          'Ich kenne den Student.',
          'Ich kenne der Student.',
          'Ich kenne dem Studenten.',
        ],
        answer: 0,
        explanation: 'Student är ett svagt maskulinum (ändelse på -ent) och får -en i ackusativ: den Studenten.',
        feedback: [
          'Helt rätt! den Studenten med -en i ackusativ singular.',
          'Att utelämna -en är ett vanligt fel hos inlärare.',
          'der är fel artikel (nominativ).',
          'dem är dativ, men kennen styr ackusativ.',
        ],
      },
      {
        id: 's05-q3',
        context: 'Substantivet "der Name" tillhör gruppen med blandad böjning.',
        prompt: 'Hur heter "namnets betydelse" i genitiv singular?',
        options: [
          'die Bedeutung des Namens (med -ns)',
          'die Bedeutung des Namen',
          'die Bedeutung des Names',
          'die Bedeutung der Name',
        ],
        answer: 0,
        explanation: 'Orden i name-gruppen (Name, Gedanke, Glaube, Wille) får ändelsen -ns i genitiv singular: des Namens.',
        feedback: [
          'Helt rätt! des Namens med -ns.',
          'des Namen saknar s-markören för genitiv.',
          'des Names saknar n-markören.',
          'der Name är nominativ.',
        ],
      },
      {
        id: 's05-q4',
        context: 'Undantaget "das Herz" (hjärtat).',
        prompt: 'Vad är den korrekta dativformen i uttrycket "av hela mitt hjärta"?',
        options: [
          'von ganzem Herzen',
          'von ganzem Herz',
          'von ganzem Herzens',
          'von ganzem Herze',
        ],
        answer: 0,
        explanation: 'das Herz får ändelsen -en i dativ singular: dem Herzen (von ganzem Herzen).',
        feedback: [
          'Helt rätt! von ganzem Herzen.',
          'Herz är grundformen/nominativ/ackusativ.',
          'Herzens är genitiv singular.',
          'Herze förekommer inte.',
        ],
      },
      {
        id: 's05-q5',
        context: 'Får svaga maskuliner på -e (t.ex. der Junge, der Kollege) ett extra -s i genitiv?',
        prompt: 'Heter det "des Jungen" eller "des Jungens"?',
        options: [
          'des Jungen (inget extra -s)',
          'des Jungens',
          'des Junges',
          'des Junger',
        ],
        answer: 0,
        explanation: 'Vanliga svaga maskuliner får BARA -n i genitiv, ALDRIG ett extra -s: des Jungen, des Kollegen, des Menschen.',
        feedback: [
          'Helt rätt! des Jungen (aldrig Jungens).',
          'Jungens är talspråklig plural i norra Tyskland, men fel som genitiv singular.',
          'Junges existerar inte.',
          'Junger är genitiv plural av obestämt adjektiv.',
        ],
      },
      {
        id: 's05-q6',
        context: 'Du talar med receptionisten om herrn i fråga: "Haben Sie ___ gesehen?" (der Herr).',
        prompt: 'Vad är korrekt form i ackusativ singular för "der Herr"?',
        options: [
          'Herrn ("Haben Sie Herrn Müller gesehen?")',
          'Herr',
          'Herren',
          'Herrem',
        ],
        answer: 0,
        explanation: 'der Herr får ändelsen -n i alla singularformer utom nominativ: den Herrn, dem Herrn, des Herrn. (Herren är plural!).',
        feedback: [
          'Helt rätt! Herrn i singular (Herren är plural).',
          'Herr är oböjd nominativ.',
          'Herren är plural: die Herren.',
          'Herrem finns inte.',
        ],
      },
    ],
  },

  // S06: Genitivändelser och namn
  '/docs/substantiv/genitivformer': {
    lessonId: 'S06',
    href: '/docs/substantiv/genitivformer',
    title: 'Snabbkoll: Genitivändelser och namn',
    questions: [
      {
        id: 's06-q1',
        context: 'Vilka tyska substantiv får en kasusändelse i genitiv singular?',
        prompt: 'Gäller genitivändelsen -(e)s alla genus?',
        options: [
          'Nej, ENDAST maskulina och neutrala substantiv i singular får -(e)s; feminina ord och plural får ingen ändelse!',
          'Ja, alla tyska ord får -s precis som på svenska.',
          'Endast feminina ord.',
          'Endast pluralord.',
        ],
        answer: 0,
        explanation: 'I tyskan tar endast maskulinum och neutrum -(e)s i genitiv singular. Feminina ord och pluralformer ändras inte alls!',
        feedback: [
          'Helt rätt! Maskulinum och neutrum tar -(e)s; femininum och plural är oförändrade.',
          'Svenskans universal-s gäller absolut inte på tyska!',
          'Feminina ord får aldrig -s i genitiv.',
          'Pluralord får aldrig -s i genitiv (utom lånord som redan slutar på -s).',
        ],
      },
      {
        id: 's06-q2',
        context: 'När är ändelsen -es obligatorisk på ett maskulint eller neutralt substantiv?',
        prompt: 'Vilka ord kräver alltid -es i stället för bara -s i genitiv?',
        options: [
          'Ord som slutar på ett s-ljud (-s, -ss, -ß, -z, -tz, -x), t.ex. des Glases, des Platzes.',
          'Ord som slutar på vokal, t.ex. des Autos.',
          'Ord som slutar på -er, t.ex. des Lehrers.',
          'Alla ord med mer än tre stavelser.',
        ],
        answer: 0,
        explanation: 'Efter s-ljud är -es fonetiskt obligatoriskt för att genitivändelsen över huvud taget ska gå att uttala.',
        feedback: [
          'Helt rätt! Efter s-ljud krävs alltid -es (des Glases, des Gesetzes).',
          'Ord på vokal tar enkelt -s (des Autos).',
          'Ord på -er tar enkelt -s (des Lehrers).',
          'Långa ord föredrar tvärtom enkelt -s.',
        ],
      },
      {
        id: 's06-q3',
        context: 'Du skriver om Peters nya cykel.',
        prompt: 'Hur skrivs "Peters cykel" korrekt på tyska?',
        options: [
          'Peters Fahrrad (utan apostrof)',
          "Peter's Fahrrad (med apostrof)",
          'Peter Fahrrad',
          'Peter sein Fahrrad',
        ],
        answer: 0,
        explanation: 'I tyskan används normalt ingen apostrof vid genitiv-s för egennamn: Peters Fahrrad.',
        feedback: [
          'Helt rätt! Peters Fahrrad utan apostrof.',
          "Apostrof vid vanligt genitiv kallas 'Deppenapostroph' och strider mot officiella skrivregler.",
          'Genitiv-s krävs.',
          'Peter sein Fahrrad är talspråklig dialekt, inte skriven standardtyska.',
        ],
      },
      {
        id: 's06-q4',
        context: 'Egennamnet slutar redan på ett s-ljud: "Max".',
        prompt: 'Hur skrivs "Max cykel" i genitiv?',
        options: [
          "Max’ Fahrrad (apostrof utan extra s)",
          'Maxes Fahrrad',
          'Maxs Fahrrad',
          'Maxens Fahrrad',
        ],
        answer: 0,
        explanation: 'Namn som slutar på s-ljud (-s, -z, -x, -ß) får en ren apostrof i slutet: Max’ Fahrrad, Lukas’ Schwester.',
        feedback: [
          'Helt rätt! Max’ Fahrrad med ren apostrof.',
          'Maxes används inte.',
          'Maxs är omöjligt att uttala.',
          'Maxens är dialektalt/föråldrat.',
        ],
      },
      {
        id: 's06-q5',
        context: 'Flerstaviga ord som slutar på obetonat -el, -en eller -er.',
        prompt: 'Vad är genitivformen av "der Vater"?',
        options: [
          'des Vaters (enkelt -s)',
          'des Vateres',
          'des Vatern',
          'des Vater',
        ],
        answer: 0,
        explanation: 'Ord som slutar på -el, -en, -er tar alltid enkelt -s i genitiv: des Vaters, des Lehrers, des Wagens.',
        feedback: [
          'Helt rätt! des Vaters.',
          'Vateres är felaktigt och klumpigt.',
          'Vatern är dativ plural.',
          'Substantivet måste ha genitivändelse.',
        ],
      },
      {
        id: 's06-q6',
        context: 'När måste man använda "von + dativ" i stället för genitiv i skrift?',
        prompt: 'I vilket sammanhang är "von" obligatoriskt?',
        options: [
          'När ett substantiv i plural saknar artikel eller adjektiv som kan visa genitiven ("der Import von Waren").',
          'Efter alla verb.',
          'I början av varje mening.',
          'Endast när man talar om djur.',
        ],
        answer: 0,
        explanation: 'Om pluralordet saknar bestämning kan genitiv inte urskiljas från nominativ/ackusativ (Waren). Då krävs von: der Import von Waren.',
        feedback: [
          'Helt rätt! Utan artikel eller attribut är "von" grammatiskt nödvändigt.',
          'Inte efter alla verb.',
          'Meningsbörjan avgör inte preposition.',
          'Gäller alla substantivtyper.',
        ],
      },
    ],
  },

  // S07: Substantivböjning och dativ plural
  '/docs/substantiv/dativ-plural': {
    lessonId: 'S07',
    href: '/docs/substantiv/dativ-plural',
    title: 'Snabbkoll: Substantivböjning och dativ plural',
    questions: [
      {
        id: 's07-q1',
        context: 'Huvudregeln för dativ plural på tyska.',
        prompt: 'Vad händer med själva substantivet i dativ plural?',
        options: [
          'Det får ändelsen -(e)n utöver sin vanliga pluralform (t.ex. die Kinder -> den Kindern).',
          'Det förblir alltid helt oförändrat.',
          'Det får ändelsen -s.',
          'Det får ändelsen -er.',
        ],
        answer: 0,
        explanation: 'Alla tyska substantiv får ändelsen -(e)n i dativ plural, såvida de inte redan slutar på -n eller -s.',
        feedback: [
          'Helt rätt! den Kindern, den Tischen, den Büchern.',
          'Substantivet ändras i dativ plural genom att få -n.',
          '-s är inte dativändelse.',
          '-er är en pluralform, inte dativändelse.',
        ],
      },
      {
        id: 's07-q2',
        context: 'De två undantagen från regeln om extra -n i dativ plural.',
        prompt: 'Vilka pluralformer får INTE ett extra -n i dativ plural?',
        options: [
          'Pluraler som redan slutar på -n (die Frauen -> den Frauen) samt lånord på -s (die Autos -> den Autos).',
          'Maskulina och neutrala ord.',
          'Enstaviga ord.',
          'Alla ord som börjar på vokal.',
        ],
        answer: 0,
        explanation: 'Om ordet redan slutar på -n läggs inget mer till; lånord på -s får inte heller något n.',
        feedback: [
          'Helt rätt! Redan -n eller slutar på -s undantas från regeln.',
          'Genus spelar ingen roll i plural.',
          'Enstaviga ord följer regeln (Tage -> Tagen).',
          'Begynnelsebokstav har ingen betydelse.',
        ],
      },
      {
        id: 's07-q3',
        context: 'Du vill säga på tyska: "Jag hjälper barnen."',
        prompt: 'Verbet "helfen" styr dativ. Vad är den korrekta formen för "barnen"?',
        options: [
          'Ich helfe den Kindern.',
          'Ich helfe die Kinder.',
          'Ich helfe der Kinder.',
          'Ich helfe den Kinder.',
        ],
        answer: 0,
        explanation: 'Dativ plural har bestämd artikel den och substantivet får -n: den Kindern.',
        feedback: [
          'Helt rätt! den Kindern med artikel den och ändelsen -n på substantivet.',
          'die Kinder är nominativ/ackusativ plural.',
          'der Kinder är genitiv plural.',
          'den Kinder glömmer det obligatoriska -n på substantivet.',
        ],
      },
      {
        id: 's07-q4',
        context: 'Lånord med s-plural i dativ: "i bilarna" (die Autos).',
        prompt: 'Hur heter "med bilarna" efter prepositionen mit (dativ)?',
        options: [
          'mit den Autos (oförändrat -s)',
          'mit den Autosn',
          'mit den Auton',
          'mit die Autos',
        ],
        answer: 0,
        explanation: 'Ord med s-plural får aldrig något extra -n i dativ: mit den Autos.',
        feedback: [
          'Helt rätt! mit den Autos behåller -s intakt.',
          'Autosn är en omöjlig form.',
          'Auton tar bort s:et felaktigt.',
          'die är fel artikel för dativ.',
        ],
      },
      {
        id: 's07-q5',
        context: 'Feminint ord med n-plural: "die Frauen".',
        prompt: 'Vad heter "hos kvinnorna" efter prepositionen bei (dativ)?',
        options: [
          'bei den Frauen',
          'bei den Frauenn',
          'bei der Frauen',
          'bei die Frauen',
        ],
        answer: 0,
        explanation: 'Eftersom Frauen redan slutar på -n läggs inget extra n till: bei den Frauen.',
        feedback: [
          'Helt rätt! bei den Frauen.',
          'Dubbelt nn förekommer inte som ändelse.',
          'der Frauen är genitiv plural eller dativ singular.',
          'die Frauen är ackusativ/nominativ.',
        ],
      },
      {
        id: 's07-q6',
        context: 'Skillnad mellan "den" ackusativ singular och "den" dativ plural.',
        prompt: 'I meningen "Ich sehe den Lehrern zu" – vad avslöjar att det handlar om dativ plural?',
        options: [
          'Ändelsen -n på "Lehrern" (singular heter der Lehrer, dativ plural heter den Lehrern).',
          'Verbet sehen.',
          'Bara sammanhanget.',
          'Det går inte att veta.',
        ],
        answer: 0,
        explanation: 'Singular heter den Lehrer (ackusativ maskulinum). Tillägget av -n till Lehrern visar otvetydigt att det är dativ plural!',
        feedback: [
          'Helt rätt! Lehrern med -n visar att det är dativ plural (till lärarna).',
          'Verbet i sig visar inte numerus på objektet.',
          'Morfologin (-n) visar det helt entydigt.',
          'Formen är 100% distinkt.',
        ],
      },
    ],
  },

  // S08: Substantiverade adjektiv och infinitiver
  '/docs/substantiv/substantiveringar': {
    lessonId: 'S08',
    href: '/docs/substantiv/substantiveringar',
    title: 'Snabbkoll: Substantiverade adjektiv och infinitiver',
    questions: [
      {
        id: 's08-q1',
        context: 'Ett verb görs om till substantiv (substantiverad infinitiv), t.ex. att läsa -> läsandet.',
        prompt: 'Vilket genus och vilken artikel får substantiverade infinitiver alltid?',
        options: [
          'Alltid neutrum (das Lesen, das Essen, das Leben).',
          'Alltid maskulinum (der).',
          'Alltid femininum (die).',
          'Det beror på om verbet är starkt eller svagt.',
        ],
        answer: 0,
        explanation: 'Alla substantiverade infinitiver i tyskan är utan undantag grammatiskt neutrum (das).',
        feedback: [
          'Helt rätt! das Lesen, das Schreiben, das Schwimmen är alltid neutrum.',
          'Maskulinum är felaktigt.',
          'Femininum är felaktigt.',
          'Typ av verb (starkt/svagt) spelar ingen roll.',
        ],
      },
      {
        id: 's08-q2',
        context: 'Substantiverade adjektiv som betecknar personer (t.ex. tysk, bekant).',
        prompt: 'Hur böjs ord som "der Deutsche" och "ein Deutscher"?',
        options: [
          'De böjs exakt som vanliga adjektiv med svag böjning efter der och blandad efter ein!',
          'De slutar alltid på -er oavsett artikel.',
          'De böjs som vanliga maskulina substantiv med -s i genitiv.',
          'De är helt oböjda.',
        ],
        answer: 0,
        explanation: 'Substantiverade personadjektiv behåller sin fulla adjektivböjning: der Deutsche (svag) kontra ein Deutscher (blandad).',
        feedback: [
          'Helt rätt! De behåller adjektivets böjningsmönster helt och hållet.',
          'ein Deutscher slutar på -er, men der Deutsche slutar på -e.',
          'De tar inte -s som vanliga substantiv.',
          'De måste böjas efter kasus och bestämdhet.',
        ],
      },
      {
        id: 's08-q3',
        context: 'Du vill säga på tyska: "Har du hört något nytt?"',
        prompt: 'Hur heter "något nytt" på korrekt tyska?',
        options: [
          'etwas Neues (stor begynnelsebokstav och -es)',
          'etwas neues (liten bokstav)',
          'etwas Neu',
          'etwas Neue',
        ],
        answer: 0,
        explanation: 'Efter etwas, nichts, viel får adjektivet stor bokstav och stark neutrumändelse -es: etwas Neues.',
        feedback: [
          'Helt rätt! etwas Neues med stor bokstav och ändelsen -es.',
          'Det måste skrivas med stor bokstav eftersom det är substantiverat.',
          'Kan inte stå i grundform utan ändelse.',
          'Neue är femininum/plural eller svag böjning.',
        ],
      },
      {
        id: 's08-q4',
        context: 'Hur skrivs substantiverade ord i tysk ortografi?',
        prompt: 'Gäller regeln om stor begynnelsebokstav även för ord som ursprungligen var verb eller adjektiv?',
        options: [
          'Ja! Så fort ett ord fungerar som substantiv SKRIVS DET ALLTID MED STOR BOKSTAV.',
          'Nej, endast ord som alltid har varit substantiv får stor bokstav.',
          'Bara i början av en mening.',
          'Bara om ordet är längre än fem bokstäver.',
        ],
        answer: 0,
        explanation: 'Tyskans kardinalregel för ortografi är att alla ord som fungerar som substantiv ska ha stor begynnelsebokstav.',
        feedback: [
          'Helt rätt! das Essen, etwas Schönes, die Erwachsenen har alla stor bokstav.',
          'Även nyligen substantiverade ord får alltid stor bokstav.',
          'Stor bokstav gäller inne i meningen också.',
          'Ordets längd spelar ingen roll.',
        ],
      },
      {
        id: 's08-q5',
        context: 'Undantaget efter ordet "alles" (allt).',
        prompt: 'Vad heter den klassiska gratulationsfrasen "Allt gott!"?',
        options: [
          'alles Gute (med -e eftersom alles utlöser svag böjning)',
          'alles Gutes',
          'alles Gut',
          'alles Guten',
        ],
        answer: 0,
        explanation: 'Efter alles följer svag böjning med ändelsen -e: alles Gute! (jämför etwas Gutes med stark böjning).',
        feedback: [
          'Helt rätt! alles Gute med -e.',
          'Gutes används efter etwas/nichts, inte efter alles.',
          'Gut saknar obligatorisk ändelse.',
          'Guten är dativ eller maskulin ackusativ.',
        ],
      },
      {
        id: 's08-q6',
        context: 'Substantiverat adjektiv för en kvinnlig person i nominativ singular: "en anställd (kvinna)".',
        prompt: 'Hur heter "en anställd kvinna" på tyska (av adjektivet angestellt)?',
        options: [
          'eine Angestellte',
          'eine Angestellter',
          'eine Angestellten',
          'ein Angestellte',
        ],
        answer: 0,
        explanation: 'Feminin nominativ obestämd form ger ändelsen -e: eine Angestellte (jämför maskulinum: ein Angestellter).',
        feedback: [
          'Helt rätt! eine Angestellte.',
          'Angestellter är maskulinum (ein Angestellter).',
          'Angestellten är plural eller oblika kasus.',
          'ein har fel artikelgenus för femininum.',
        ],
      },
    ],
  },

  // S09: Sammansatta substantiv
  '/docs/substantiv/sammansattningar': {
    lessonId: 'S09',
    href: '/docs/substantiv/sammansattningar',
    title: 'Snabbkoll: Sammansatta substantiv (Komposita)',
    questions: [
      {
        id: 's09-q1',
        context: 'Den gyllene grundregeln för sammansatta substantiv (Komposita).',
        prompt: 'Vilket led i ett sammansatt ord bestämmer dess genus och pluralform?',
        options: [
          'Det allra sista ledet (Grundwort) bestämmer alltid artikel, genus och böjning!',
          'Det första ledet (Bestimmungswort).',
          'Det längsta ledet.',
          'Det avgörs av vilket genus som är vanligast i språket.',
        ],
        answer: 0,
        explanation: 'I tyskan bestämmer det sista ordet (huvudordet) alltid genus och plural: das Auto + DIE Bahn = DIE Autobahn.',
        feedback: [
          'Helt rätt! Sista ordet bestämmer genus, artikel och böjning.',
          'Första ledet beskriver bara typen och ger betoningen, inte genuset.',
          'Längden spelar ingen roll.',
          'Regeln är absolut morfologisk.',
        ],
      },
      {
        id: 's09-q2',
        context: 'Betoning i sammansatta substantiv.',
        prompt: 'Var ligger huvudbetoningen i ord som "die Autobahn" och "der Bahnhof"?',
        options: [
          'Alltid på det FÖRSTA ledet (Au-tobahn, Bahn-hof).',
          'Alltid på det sista ledet.',
          'Jämnt fördelad på alla stavelser.',
          'På fogeelementet i mitten.',
        ],
        answer: 0,
        explanation: 'I tyska sammansättningar betonas alltid det första ledet (Bestimmungswort) starkast.',
        feedback: [
          'Helt rätt! Första ledet bär huvudbetoningen.',
          'Sista ledet är obetonat eller har bibetoning.',
          'Tyskan har distinkt tryckaccent, inte jämn fördelning.',
          'Fogelementet är aldrig betonat.',
        ],
      },
      {
        id: 's09-q3',
        context: 'Fogelementet -s- (Fugen-s).',
        prompt: 'Efter vilka ändelser på förledet sätts nästan alltid ett foge-s in?',
        options: [
          'Efter feminina avledningsändelser som -ung, -heit, -keit, -schaft, -tät (t.ex. die Hoffnungslosigkeit, die Universitätsklinik).',
          'Endast efter ord på -o.',
          'Endast vid enstaviga verb.',
          'Efter alla ord utan undantag.',
        ],
        answer: 0,
        explanation: 'Fugen-s uppträder mycket regelbundet efter de feminina suffixen -ung, -heit, -keit, -schaft, -tät, -tion.',
        feedback: [
          'Helt rätt! De feminina suffixen tar i regel alltid Fugen-s.',
          'Ord på -o tar inte regelbundet foge-s.',
          'Inte bara vid verb.',
          'Många ord sätts ihop utan något fogelement alls.',
        ],
      },
      {
        id: 's09-q4',
        context: 'Sammansättning med ett verb som förled: schlafen (sova) + das Zimmer (rum).',
        prompt: 'Hur bildas sammansättningen "sovrum" på tyska?',
        options: [
          'das Schlafzimmer (verbstammen schlaf- sätts ihop med Zimmer; genus das från Zimmer)',
          'das Schafenzimmer',
          'der Schlafenzimmer',
          'die Schlafzimmer',
        ],
        answer: 0,
        explanation: 'Vid verb tas normalt infinitivändelsen bort så att bara stammen återstår: schlaf- + Zimmer = das Schlafzimmer.',
        feedback: [
          'Helt rätt! das Schlafzimmer.',
          'Schafenzimmer behåller felaktigt -en.',
          'der är fel genus (Zimmer är neutrum).',
          'die vore plural eller femininum.',
        ],
      },
      {
        id: 's09-q5',
        context: 'Sammansättning med adjektiv som förled: rot (röd) + der Wein (vin).',
        prompt: 'Hur heter "rödvin" och vilket genus får ordet?',
        options: [
          'der Rotwein (maskulinum efter der Wein, adjektivet är oböjt i sammansättningen)',
          'das Rotwein',
          'der Roterwein',
          'die Rotwein',
        ],
        answer: 0,
        explanation: 'Adjektivet står i stamform utan böjningsändelse, och sista ordet (Wein) ger genuset der: der Rotwein.',
        feedback: [
          'Helt rätt! der Rotwein.',
          'Wein är maskulinum, kan inte ta das.',
          'Adjektivet böjs inte inuti en sammansättning.',
          'die är fel genus.',
        ],
      },
      {
        id: 's09-q6',
        context: 'Pluralbildning av ett sammansatt ord: "die Autobahn".',
        prompt: 'Vad är pluralformen av "die Autobahn"?',
        options: [
          'die Autobahnen (sista ordet Bahn bildar plural Bahnen)',
          'die Autobahns',
          'die Autosbahnen',
          'die Autobähne',
        ],
        answer: 0,
        explanation: 'Eftersom det är sista ordet som styr böjningen böjs bara Bahn till Bahnen: die Autobahnen.',
        feedback: [
          'Helt rätt! die Autobahnen (sista ordet böjs).',
          'Autobahns är fel pluralform för Bahn.',
          'Förledet ändras aldrig i plural.',
          'Bahn tar -(e)n, inte omljud.',
        ],
      },
    ],
  },
};

// Append to LEARNING_QUIZZES in data/learning-quizzes.ts
let content = fs.readFileSync('data/learning-quizzes.ts', 'utf8');

const lastIndex = content.lastIndexOf('};');
if (lastIndex === -1) {
  console.error("Kunde inte hitta avslutande };");
  process.exit(1);
}

let toInsert = '\n';
for (const [key, val] of Object.entries(g1aQuizzes)) {
  toInsert += `  '${key}': ${JSON.stringify(val, null, 4).replace(/\n/g, '\n  ')},\n\n`;
}

const updated = content.slice(0, lastIndex) + toInsert + content.slice(lastIndex);
fs.writeFileSync('data/learning-quizzes.ts', updated, 'utf8');
console.log("Lade till 6 frågor för alla 5 lektioner i Grupp 1A!");
