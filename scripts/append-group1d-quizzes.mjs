import fs from 'fs';

const g1dQuizzes = {
  // A05: Flera adjektiv, mängdord och specialformer
  '/docs/adjektiv/flera-adjektiv-och-mangdord': {
    lessonId: 'A05',
    href: '/docs/adjektiv/flera-adjektiv-och-mangdord',
    title: 'Snabbkoll: Flera adjektiv, mängdord och specialformer',
    questions: [
      {
        id: 'a05-q1',
        context: 'Två adjektiv i rad framför ett substantiv utan artikel.',
        prompt: 'Hur böjs två adjektiv i rad framför ett substantiv i tyskan?',
        options: [
          'De böjs helt parallellt och får exakt samma ändelse (t.ex. guter, starker Kaffee).',
          'Bara det första adjektivet böjs, det andra förblir i grundform.',
          'Det första får svag ändelse och det andra får stark ändelse.',
          'Båda adjektiven binds alltid ihop med bindestreck.'
        ],
        answer: 0,
        explanation: 'Huvudregeln är parallell böjning: flera adjektiv i rad delar exakt samma böjningsändelse.',
        feedback: [
          'Rätt! Flera adjektiv i rad böjs parallellt med identisk ändelse.',
          'Fel. Båda adjektiven måste böjas.',
          'Fel. Det finns ingen sådan alternering.',
          'Fel. Bindestreck används inte vid normal adjektivföljd.'
        ]
      },
      {
        id: 'a05-q2',
        context: 'Adjektivböjning efter mängdordet "viele" i nominativ plural.',
        prompt: 'Vilken ändelse får adjektivet efter "viele" i "viele neu___ Bücher"?',
        options: [
          '-e (viele neue Bücher)',
          '-en (viele neuen Bücher)',
          '-er (viele neuer Bücher)',
          '-es (viele neues Bücher)'
        ],
        answer: 0,
        explanation: 'Efter obestämda mängdord i plural (viele, einige, wenige, mehrere) böjs adjektivet starkt med ändelsen -e.',
        feedback: [
          'Rätt! viele neue Bücher – viele utlöser parallell stark böjning (-e).',
          'Fel. Ändelsen -en styrs av ord som fungerar som bestämd artikel (alle, diese).',
          'Fel. -er är inte plural nominativ-ändelse här.',
          'Fel. -es är neutrum singular, inte plural.'
        ]
      },
      {
        id: 'a05-q3',
        context: 'Adjektivböjning efter ordet "alle" i nominativ plural.',
        prompt: 'Vilken ändelse får adjektivet efter "alle" i "alle neu___ Bücher"?',
        options: [
          '-en (alle neuen Bücher)',
          '-e (alle neue Bücher)',
          '-er (alle neuer Bücher)',
          '-es (alle neues Bücher)'
        ],
        answer: 0,
        explanation: 'Ordet "alle" fungerar som en bestämd artikel och kräver svag böjning (-en) på efterföljande adjektiv.',
        feedback: [
          'Rätt! alle neuen Bücher – alle fungerar som bestämd artikel och styr -en.',
          'Fel. -e används efter obestämda mängdord som viele och einige.',
          'Fel. -er är felaktig ändelse här.',
          'Fel. -es är neutrum singular.'
        ]
      },
      {
        id: 'a05-q4',
        context: 'Stamförändring hos adjektivet "hoch".',
        prompt: 'Vad händer med adjektivet "hoch" när det får en böjningsändelse?',
        options: [
          'Bokstaven c faller bort: ein hohes Gebäude, der hohe Baum.',
          'Det får omljud i positiv: ein höhes Gebäude.',
          'Stammen förblir helt oförändrad: ein hoches Gebäude.',
          'Det slutar på dubbelt h: ein hohhes Gebäude.'
        ],
        answer: 0,
        explanation: 'Grundformen är hoch, men framför alla böjningsändelser faller bokstaven c bort: hoh- (hoher, hohes, hohe).',
        feedback: [
          'Rätt! Bokstaven c försvinner alltid vid böjning av hoch.',
          'Fel. Omljud förekommer bara i komparativ (höher).',
          'Fel. Formen "hoches" existerar inte i modern tyska.',
          'Fel. Inget dubbelt h uppstår.'
        ]
      },
      {
        id: 'a05-q5',
        context: 'Stamförändring hos adjektivet "teuer".',
        prompt: 'Hur stavas böjt "teuer" i "ett dyrt hotell" (ein ___ Hotel)?',
        options: [
          'teures (stam-e faller bort)',
          'teueres',
          'teureses',
          'teure'
        ],
        answer: 0,
        explanation: 'Adjektiv på -er och -el med obetonat e tappar ofta stamvokalen framför ändelsen: teuer + es -> teures.',
        feedback: [
          'Rätt! teures – det obetonade e:et i stammen försvinner framför ändelsen.',
          'Fel. Formen "teueres" undviks i standardtyska.',
          'Fel. Orimlig ändelsekombination.',
          'Fel. Hotel är neutrum och kräver -es i blandad böjning.'
        ]
      },
      {
        id: 'a05-q6',
        context: 'Adjektiv bildade från städer på -er.',
        prompt: 'Hur böjs stadsadjektivet i "den berlinska polisen" (die ___ Polizei)?',
        options: [
          'Berliner (helt oböjligt och skrivs med stor bokstav)',
          'Berlinere',
          'Berlinische',
          'berlinerin'
        ],
        answer: 0,
        explanation: 'Härledningar från ortsnamn på -er (Berliner, Wiener, Münchner) förblir alltid oböjda och skrivs med stor bokstav.',
        feedback: [
          'Helt rätt! Berliner förblir oböjt och stavas med versal.',
          'Fel. Inga adjektivändelser läggs till dessa stadsnamn.',
          'Fel. Formen Berlinisch används inte om polisen.',
          'Fel. Det liknar en feminin substantivändelse.'
        ]
      }
    ]
  },

  // A06: Komparativ och superlativ
  '/docs/adjektiv/komparation': {
    lessonId: 'A06',
    href: '/docs/adjektiv/komparation',
    title: 'Snabbkoll: Komparativ och superlativ',
    questions: [
      {
        id: 'a06-q1',
        context: 'Regelbunden bildning av komparativ och superlativ.',
        prompt: 'Vilka ändelser används för att komparera ett regelbundet tyskt adjektiv (t.ex. klein)?',
        options: [
          'Komparativ: -er; Superlativ: am ...-(e)sten (kleiner, am kleinsten)',
          'Komparativ: mehr ...; Superlativ: meist ...',
          'Komparativ: -ere; Superlativ: -este',
          'Komparativ: -st; Superlativ: -er'
        ],
        answer: 0,
        explanation: 'Positiv (klein) -> Komparativ (kleiner) -> Predikativ superlativ (am kleinsten).',
        feedback: [
          'Rätt! -er och am ...-(e)sten är grundmönstret.',
          'Fel. Tyskan använder inte mehr för reguljär komparation.',
          'Fel. Ändelsen i grundkomparativ är -er utan e på slutet.',
          'Fel. Ordningen är omvänd.'
        ]
      },
      {
        id: 'a06-q2',
        context: 'Omljud vid komparation av enstaviga adjektiv.',
        prompt: 'Vad händer med vokalen i "alt", "groß" och "jung" vid komparation?',
        options: [
          'Stamvokalen får omljud: älter, größer, jünger.',
          'Stamvokalen förblir helt oförändrad: alter, großer, junger.',
          'Vokalen fördubblas: aalter, grooßer.',
          'Vokalen faller bort helt.'
        ],
        answer: 0,
        explanation: 'Vanliga enstaviga adjektiv med a, o, u får regelmässigt omljud i komparativ och superlativ.',
        feedback: [
          'Rätt! älter, größer, jünger får prickar över vokalen.',
          'Fel. Former utan omljud är felaktiga för dessa adjektiv.',
          'Fel. Ingen fördubbling sker.',
          'Fel. Vokalen finns kvar med omljud.'
        ]
      },
      {
        id: 'a06-q3',
        context: 'Oregelbunden komparation.',
        prompt: 'Vilka är komparativ- och superlativformerna för "gut" och "gern"?',
        options: [
          'gut -> besser -> am besten; gern -> lieber -> am liebsten',
          'gut -> güter -> am gütesten; gern -> gerner -> am gernsten',
          'gut -> mehr gut -> am meisten gut; gern -> lieber -> am liebsten',
          'gut -> wohl -> am wohlsten; gern -> besser -> am besten'
        ],
        answer: 0,
        explanation: 'Både gut och gern kompareras helt oregelbundet: gut/besser/am besten och gern/lieber/am liebsten.',
        feedback: [
          'Rätt! gut/besser/am besten och gern/lieber/am liebsten är helt oregelbundna.',
          'Fel. Dessa regelbundna former finns inte i tyskan.',
          'Fel. Mehr/meist används inte på detta sätt.',
          'Fel. Wohl är inte komparationsform av gut.'
        ]
      },
      {
        id: 'a06-q4',
        context: 'Predikativ kontra attributiv superlativ.',
        prompt: 'Vad är skillnaden mellan "am schnellsten" och "das schnellste"?',
        options: [
          '"am schnellsten" är predikativt/adverbialt; "das schnellste" är attributivt framför ett substantiv.',
          '"das schnellste" är komparativ och "am schnellsten" är superlativ.',
          '"am schnellsten" används bara i dåtid.',
          'Det finns ingen skillnad; de kan alltid bytas ut fritt.'
        ],
        answer: 0,
        explanation: 'Predikativt: Das Auto fährt am schnellsten. Attributivt: Das schnellste Auto gewinnt.',
        feedback: [
          'Rätt! am schnellsten står självständigt, medan das schnellste står framför ett substantiv.',
          'Fel. Båda är superlativformer.',
          'Fel. Tempus påverkar inte komparationsformen.',
          'Fel. Syntaxen avgör vilken form som är tillåten.'
        ]
      },
      {
        id: 'a06-q5',
        context: 'Böjning av komparativ framför substantiv.',
        prompt: 'Hur böjs komparativen i "en snabbare bil" (ein schnell___ Auto)?',
        options: [
          'ein schnelleres Auto (komparativändelsen -er- följs av adjektivändelsen -es)',
          'ein schneller Auto',
          'ein schnellstes Auto',
          'ein mehres schnelles Auto'
        ],
        answer: 0,
        explanation: 'Attributiv komparativ får vanlig adjektivändelse efter komparativmärket -er-: schnell + er + es = schnelleres.',
        feedback: [
          'Rätt! schnell-er-es – komparativmärket följs av böjningsändelsen.',
          'Fel. Här saknas neutrumändelsen -es.',
          'Fel. Det ändrar betydelsen till superlativ ("snabbaste").',
          'Fel. En sådan konstruktion finns inte.'
        ]
      },
      {
        id: 'a06-q6',
        context: 'Komparation av adjektivet "hoch".',
        prompt: 'Vad heter komparativen och superlativen av adjektivet "hoch"?',
        options: [
          'höher -> am höchsten',
          'hocher -> am hochsten',
          'höcher -> am höchsten',
          'höher -> am höhesten'
        ],
        answer: 0,
        explanation: 'I komparativ försvinner c (höher) och i superlativ återkommer c-h (höchsten). Båda har omljud.',
        feedback: [
          'Helt rätt! höher (utan c!) och am höchsten (med ch och omljud).',
          'Fel. Hoch kräver omljud.',
          'Fel. Komparativen stavas utan c: höher.',
          'Fel. Ändelsen i superlativ är -sten, inte -esten här.'
        ]
      }
    ]
  },

  // A07: Jämförelser med als, wie och je … desto
  '/docs/adjektiv/als-wie-je-desto': {
    lessonId: 'A07',
    href: '/docs/adjektiv/als-wie-je-desto',
    title: 'Snabbkoll: Jämförelser med als, wie och je … desto',
    questions: [
      {
        id: 'a07-q1',
        context: 'Val mellan als och wie vid olikhetsjämförelser.',
        prompt: 'Vilket ord används vid komparativ olikhet ("Er ist größer ___ sein Bruder")?',
        options: [
          'als (Er ist größer als sein Bruder)',
          'wie (Er ist größer wie sein Bruder)',
          'denn',
          'wann'
        ],
        answer: 0,
        explanation: 'I vårdad standardtyska kräver komparativ alltid "als". "Größer wie" är regionalt talspråk och stilistiskt inkorrekt.',
        feedback: [
          'Rätt! Komparativ olikhet kräver alltid als i standardtyska.',
          'Fel. "Größer wie" är ett utbrett regionalt talspråksfel och felaktigt i standardskrift.',
          'Fel. Denn används i äldre litteratur eller för att undvika als als.',
          'Fel. Wann är ett tidsfrågeord.'
        ]
      },
      {
        id: 'a07-q2',
        context: 'Likhetsjämförelse.',
        prompt: 'Hur konstrueras likhetsjämförelsen "lika gammal som" på tyska?',
        options: [
          'so alt wie (eller genauso alt wie)',
          'so alt als',
          'wie alt als',
          'desto alt wie'
        ],
        answer: 0,
        explanation: 'Likhet uttrycks med so / genauso + grundform + wie: genauso alt wie.',
        feedback: [
          'Rätt! so ... wie uttrycker likhet.',
          'Fel. als används bara vid olikhet (komparativ).',
          'Fel. Konstruktionen existerar inte.',
          'Fel. Desto hör till proportionella jämförelser.'
        ]
      },
      {
        id: 'a07-q3',
        context: 'Ordföljd i je-ledet vid "je ... desto".',
        prompt: 'Vilken ordklassplacering gäller i bisatsen som inleds med "je" (t.ex. "Je mehr du lernst...")?',
        options: [
          'Verbet står allra sist, eftersom je inleder en underordnad bisats.',
          'Verbet står på position 2 precis som i en huvudsats.',
          'Verbet står allra först före je.',
          'Verbet måste stå i imperativ.'
        ],
        answer: 0,
        explanation: 'Je-ledet är en underordnad bisats, vilket innebär att det böjda verbet hamnar allra sist: Je mehr du lernst...',
        feedback: [
          'Rätt! Je-satsen är en bisats med det böjda verbet sist.',
          'Fel. Position 2 gäller i huvudsatsen, inte i je-bisatsen.',
          'Fel. Verbet står inte först.',
          'Fel. Imperativ används inte här.'
        ]
      },
      {
        id: 'a07-q4',
        context: 'Ordföljd i desto-ledet.',
        prompt: 'Vilken ordföljd är korrekt i meningen: "Je früher wir fahren, ___"?',
        options: [
          'desto eher kommen wir an. (desto + komparativ utgör position 1, direkt följt av finit verb)',
          'desto eher wir ankommen.',
          'desto wir eher kommen an.',
          'desto ankommen eher wir.'
        ],
        answer: 0,
        explanation: 'Desto + komparativ bildar Position 1 i huvudsatsen. Därför kommer det finita verbet direkt på Position 2: desto eher kommen wir an.',
        feedback: [
          'Rätt! Desto + komparativ är Pos. 1; verbet kommen står på Pos. 2.',
          'Fel. Detta är felaktig bisatsordning i en huvudsats.',
          'Fel. Subjektet får inte separera desto från verbet.',
          'Fel. Partikelverbet ska delas och böjas på plats 2.'
        ]
      },
      {
        id: 'a07-q5',
        context: 'Synonym till desto.',
        prompt: 'Vilket ord kan användas som synonym till "desto" i dubbelkonstruktionen "je ... desto"?',
        options: [
          'umso (je mehr ..., umso besser ...)',
          'also',
          'daran',
          'sowohl'
        ],
        answer: 0,
        explanation: 'Je ... desto och je ... umso är fullständigt likvärdiga synonymer.',
        feedback: [
          'Rätt! umso är helt synonymt med desto.',
          'Fel. Also betyder alltså/således.',
          'Fel. Daran är ett pronominaladverb.',
          'Fel. Sowohl paras ihop med als auch.'
        ]
      },
      {
        id: 'a07-q6',
        context: 'Kommatecken vid jämförelsesatser.',
        prompt: 'Måste det sättas ett kommatecken före "als" i meningen: "Die Prüfung war schwerer ___ ich gedacht hatte"?',
        options: [
          'Ja, eftersom als här inleder en fullständig jämförelsesats med eget subjekt och verb.',
          'Nej, kommatecken sätts aldrig före als.',
          'Kommatecken sätts bara om ordet wie ingår.',
          'Kommatecken sätts bara i slutet av meningen.'
        ],
        answer: 0,
        explanation: 'När als eller wie introducerar en fullständig bisats (med subjekt och finit verb) sätts alltid kommatecken framför.',
        feedback: [
          'Helt rätt! En hel underordnad jämförelsesats avgränsas med komma: ..., als ich gedacht hatte.',
          'Fel. Komma är obligatoriskt framför hel sats.',
          'Fel. Regeln gäller både als och wie.',
          'Fel. Kommat placeras före konjunktionen.'
        ]
      }
    ]
  },

  // A08: Adjektivens prepositioner och komplement
  '/docs/adjektiv/adjektivens-komplement': {
    lessonId: 'A08',
    href: '/docs/adjektiv/adjektivens-komplement',
    title: 'Snabbkoll: Adjektivens prepositioner och komplement',
    questions: [
      {
        id: 'a08-q1',
        context: 'Preposition och kasus för "stolt över".',
        prompt: 'Vilken preposition och vilket kasus styr adjektivet "stolz" på tyska?',
        options: [
          'stolz auf + ackusativ (Er ist stolz auf seinen Sohn)',
          'stolz über + ackusativ',
          'stolz von + dativ',
          'stolz an + dativ'
        ],
        answer: 0,
        explanation: 'Stolt över heter alltid stolz auf + ackusativ på tyska. Att säga stolz über är en svensk direktöversättning.',
        feedback: [
          'Rätt! stolz auf + ackusativ är det korrekta uttrycket.',
          'Fel. stolz über är en felaktig svensk interferens.',
          'Fel. von används inte med stolz.',
          'Fel. an används inte med stolz.'
        ]
      },
      {
        id: 'a08-q2',
        context: 'Preposition och kasus för "nöjd med".',
        prompt: 'Vilken preposition och vilket kasus kräver adjektivet "zufrieden"?',
        options: [
          'zufrieden mit + dativ (Wir sind zufrieden mit dem Ergebnis)',
          'zufrieden von + dativ',
          'zufrieden über + ackusativ',
          'zufrieden bei + dativ'
        ],
        answer: 0,
        explanation: 'Zufrieden kombineras alltid med mit + dativ.',
        feedback: [
          'Rätt! zufrieden mit + dativ.',
          'Fel. von kombineras inte med zufrieden.',
          'Fel. über används med glücklich eller froh.',
          'Fel. bei är fel preposition här.'
        ]
      },
      {
        id: 'a08-q3',
        context: 'Adjektiv med rent dativobjekt utan preposition.',
        prompt: 'Vilket kasus styrs direkt av adjektivet "ähnlich" i "Er sieht ___ ähnlich"?',
        options: [
          'Dativ (Er sieht seinem Vater ähnlich / Er sieht mir ähnlich)',
          'Ackusativ',
          'Genitiv',
          'Nominativ'
        ],
        answer: 0,
        explanation: 'Adjektiv som ähnlich, dankbar, wichtig och peinlich styr ett rent personobjekt i dativ utan preposition.',
        feedback: [
          'Rätt! seinem Vater ähnlich – rent dativobjekt.',
          'Fel. Ähnlich styr inte ackusativ.',
          'Fel. Ähnlich styr inte genitiv.',
          'Fel. Nominativ är subjektets kasus.'
        ]
      },
      {
        id: 'a08-q4',
        context: 'Adjektiv med rent genitivobjekt.',
        prompt: 'Vilket kasus styr adjektivet "bewusst" i "Er war sich ___ bewusst"?',
        options: [
          'Genitiv (Er war sich der Gefahr bewusst)',
          'Dativ',
          'Ackusativ',
          'Preposition auf'
        ],
        answer: 0,
        explanation: 'I vårdad tyska styr bewusst ett genitivobjekt: sich (dativ) einer Sache (genitiv) bewusst sein.',
        feedback: [
          'Rätt! der Gefahr är genitiv singular femininum.',
          'Fel. sich är i dativ, men själva saken står i genitiv.',
          'Fel. Objektet står inte i ackusativ i vårdad standardtyska.',
          'Fel. Ingen preposition används.'
        ]
      },
      {
        id: 'a08-q5',
        context: 'Preposition för "intresserad av".',
        prompt: 'Vilken preposition och vilket kasus krävs vid "interessiert"?',
        options: [
          'interessiert an + dativ (Sie ist an Kunst interessiert)',
          'interessiert von + dativ',
          'interessiert in + ackusativ',
          'interessiert auf + ackusativ'
        ],
        answer: 0,
        explanation: 'Intresserad av heter på tyska interessiert an + dativ (eller sich interessieren für + ackusativ vid verbet).',
        feedback: [
          'Rätt! interessiert an + dativ.',
          'Fel. von är en engelsk/svensk fälla.',
          'Fel. in är engelsk interferens (interested in).',
          'Fel. auf används inte med interessiert.'
        ]
      },
      {
        id: 'a08-q6',
        context: 'Adjektivkomplement kopplat till bisats.',
        prompt: 'Hur kopplas adjektivet "froh" till en bisats i "Jag är glad över att du kom"?',
        options: [
          'Ich bin froh darüber, dass du gekommen bist. (darüber fungerar som korrelat)',
          'Ich bin froh über dass du gekommen bist.',
          'Ich bin froh auf das du gekommen bist.',
          'Ich bin froh davon dass du gekommen bist.'
        ],
        answer: 0,
        explanation: 'En preposition kan inte stå direkt framför dass. Den förvandlas till ett pronominaladverb: darüber, dass...',
        feedback: [
          'Helt rätt! darüber fungerar som korrelat framför dass.',
          'Fel. En ren preposition får aldrig stå direkt före dass.',
          'Fel. Froh styr über, inte auf.',
          'Fel. Davon är fel preposition.'
        ]
      }
    ]
  },

  // R04: Possessiver utan substantiv
  '/docs/pronomen/sjalvstandiga-possessiver': {
    lessonId: 'R04',
    href: '/docs/pronomen/sjalvstandiga-possessiver',
    title: 'Snabbkoll: Possessiver utan substantiv',
    questions: [
      {
        id: 'r04-q1',
        context: 'Ett possessivt ord står ensamt utan substantiv.',
        prompt: 'Hur svarar man korrekt på frågan: "Ist das dein Koffer?" om man vill säga "Ja, det är min"?',
        options: [
          'Ja, das ist meiner. (-er visar maskulinum nominativ)',
          'Ja, das ist mein.',
          'Ja, das ist meins.',
          'Ja, das ist meine.'
        ],
        answer: 0,
        explanation: 'Koffer är maskulinum (der Koffer). När substantivet utelämnas måste possessivet få en stark ändelse: meiner.',
        feedback: [
          'Rätt! Koffer är maskulinum nominativ -> meiner.',
          'Fel. "Das ist mein" är ofullständigt och grammatiskt felaktigt på tyska.',
          'Fel. meins används för neutrum (das Buch -> meins).',
          'Fel. meine används för femininum och plural.'
        ]
      },
      {
        id: 'r04-q2',
        context: 'Självständigt possessivt pronomen för neutrum.',
        prompt: 'Hur svarar man på frågan: "Ist das dein Buch?" – "Ja, det är mitt"?',
        options: [
          'Ja, das ist meins (eller meines).',
          'Ja, das ist mein.',
          'Ja, das ist meiner.',
          'Ja, das ist meiniges.'
        ],
        answer: 0,
        explanation: 'Buch är neutrum (das Buch). Självständigt heter det meins eller meines.',
        feedback: [
          'Rätt! meins / meines för neutrum nominativ.',
          'Fel. Utan substantiv kan mein inte stå ensamt.',
          'Fel. meiner är maskulinum.',
          'Fel. meiniges kräver bestämd artikel (das meinige).'
        ]
      },
      {
        id: 'r04-q3',
        context: 'Självständigt possessiv i ackusativ maskulinum.',
        prompt: 'Vilken form väljs i meningen: "Ich habe meinen Stift vergessen; gibst du mir bitte ___ (din)?"?',
        options: [
          'deinen (ackusativ maskulinum)',
          'deiner',
          'deins',
          'dein'
        ],
        answer: 0,
        explanation: 'Stift är maskulinum (der Stift) och fungerar som ackusativobjekt efter geben: seinen/deinen.',
        feedback: [
          'Rätt! deinen för ackusativ maskulinum.',
          'Fel. deiner är nominativ maskulinum.',
          'Fel. deins är neutrum.',
          'Fel. dein är artikelord och kräver ett substantiv.'
        ]
      },
      {
        id: 'r04-q4',
        context: 'Högtidlig artikelkonstruktion för ägande.',
        prompt: 'Vad innebär den traditionella litterära konstruktionen "das Meine" eller "das Meinige"?',
        options: [
          'En högtidlig eller ålderdomlig synonym till "meins" (mitt/det som är mitt).',
          'En konstruktion som endast används i schweizertyska.',
          'En form som uttrycker att man äger en slav.',
          'En grammatisk term för lånord.'
        ],
        answer: 0,
        explanation: 'Der/die/das meine (eller meinige) är en formell, traditionell artikelvariant för självständigt ägande.',
        feedback: [
          'Rätt! Det är en högtidlig litterär variant av självständigt possessiv.',
          'Fel. Det tillhör allmän äldre/högtidlig standardtyska.',
          'Fel. Absolut inte.',
          'Fel. Det handlar om possessiva pronomen.'
        ]
      },
      {
        id: 'r04-q5',
        context: 'Självständigt possessiv i dativ plural.',
        prompt: 'Vilken form ska stå i luckan: "Die Kinder spielen nicht mit unseren Spielsachen, sondern mit ___ (deras)"?',
        options: [
          'ihren (dativ plural av självständigt ihr)',
          'ihre',
          'ihrem',
          'ihrer'
        ],
        answer: 0,
        explanation: 'Prepositionen mit styr dativ. I plural får självständigt possessiv ändelsen -en: mit ihren.',
        feedback: [
          'Rätt! mit ihren – dativ plural.',
          'Fel. ihre är nominativ/ackusativ plural.',
          'Fel. ihrem är maskulinum/neutrum dativ singular.',
          'Fel. ihrer är femininum dativ eller genitiv plural.'
        ]
      },
      {
        id: 'r04-q6',
        context: 'Böjning av euer utan substantiv.',
        prompt: 'Vilken form är korrekt för "ert (neutrum nominativ)" utan substantiv (t.ex. om ett hus)?',
        options: [
          'eures (eller euers)',
          'euer',
          'euerer',
          'eurem'
        ],
        answer: 0,
        explanation: 'Das Haus -> eures (euers) i neutrum nominativ.',
        feedback: [
          'Helt rätt! eures eller euers för neutrum.',
          'Fel. euer kräver efterföljande substantiv.',
          'Fel. euerer är maskulinum nominativ.',
          'Fel. eurem är dativ.'
        ]
      }
    ]
  },

  // R06: Der, dieser och andra demonstrativer
  '/docs/pronomen/demonstrativa': {
    lessonId: 'R06',
    href: '/docs/pronomen/demonstrativa',
    title: 'Snabbkoll: Der, dieser och andra demonstrativer',
    questions: [
      {
        id: 'r06-q1',
        context: 'Självständigt der/die/das i talspråk.',
        prompt: 'Vad betyder den talade meningen "Den kenne ich nicht" på svenska?',
        options: [
          'Honom / Den där känner jag inte.',
          'Jag känner ingen alls.',
          'Vem känner inte honom?',
          'Känner du honom inte?'
        ],
        answer: 0,
        explanation: 'Den är ett självständigt demonstrativpronomen i ackusativ maskulinum som ersätter ihn med eftertryck.',
        feedback: [
          'Rätt! Den = honom/den där med betoning på position 1.',
          'Fel. Det uttrycker ingen allmän negation.',
          'Fel. Det är ett påstående, inte en fråga.',
          'Fel. Ordföljden är inte frågesats.'
        ]
      },
      {
        id: 'r06-q2',
        context: 'Genitivform av demonstrativpronomenet der/die/das.',
        prompt: 'Vad heter genitiv singular av demonstrativet i maskulinum ("Ich kenne den Autor und ___ Bücher")?',
        options: [
          'dessen (Ich kenne den Autor und dessen Bücher)',
          'seinen',
          'denen',
          'dem'
        ],
        answer: 0,
        explanation: 'Genitiv av självständigt maskulint/neutralt demonstrativ är dessen (dess/hans).',
        feedback: [
          'Rätt! dessen är genitiv singular av demonstrativet.',
          'Fel. seinen är ett possessivt ackusativord.',
          'Fel. denen är dativ plural.',
          'Fel. dem är dativ singular.'
        ]
      },
      {
        id: 'r06-q3',
        context: 'Dativ plural av självständigt demonstrativpronomen.',
        prompt: 'Vad heter demonstrativet i dativ plural i "Mit ___ wollen wir nicht sprechen"?',
        options: [
          'denen (Mit denen wollen wir nicht sprechen)',
          'den',
          'dessen',
          'deren'
        ],
        answer: 0,
        explanation: 'Till skillnad från artikeln (den) heter det självständiga demonstrativet denen i dativ plural.',
        feedback: [
          'Rätt! denen är dativ plural för självständigt demonstrativ.',
          'Fel. den är artikelform framför substantiv (den Kindern), inte självständigt pronomen.',
          'Fel. dessen är genitiv singular.',
          'Fel. deren är genitiv plural/femininum.'
        ]
      },
      {
        id: 'r06-q4',
        context: 'Skillnaden mellan derselbe och der gleiche.',
        prompt: 'Vilken mening uttrycker att två personer har på sig EXAKT SAMMA fysiska exemplar av en kostym (t.ex. har lånat den)?',
        options: [
          'Er trägt denselben Anzug wie gestern. (identiskt exemplar)',
          'Er trägt den gleichen Anzug wie gestern.',
          'Er trägt jenen Anzug.',
          'Er trägt einen solchen Anzug.'
        ],
        answer: 0,
        explanation: 'Derselbe uttrycker strikt identitet (en och samma sak). Der gleiche uttrycker likhet (likadan).',
        feedback: [
          'Rätt! derselbe avser ett och samma identiska föremål.',
          'Fel. der gleiche avser en likadan kopia av samma modell.',
          'Fel. jener betyder den där.',
          'Fel. solcher betyder en sådan.'
        ]
      },
      {
        id: 'r06-q5',
        context: 'Böjning av dieser.',
        prompt: 'Vilken form får dieser i maskulinum ackusativ i "Jag köper den här bilen (der Wagen)"?',
        options: [
          'diesen (Ich kaufe diesen Wagen)',
          'dieser',
          'diesem',
          'dieses'
        ],
        answer: 0,
        explanation: 'Wagen är maskulinum och står som ackusativobjekt -> diesen.',
        feedback: [
          'Rätt! diesen för ackusativ maskulinum.',
          'Fel. dieser är nominativ.',
          'Fel. diesem är dativ.',
          'Fel. dieses är neutrum.'
        ]
      },
      {
        id: 'r06-q6',
        context: 'Användning av jener.',
        prompt: 'Hur används ordet "jener" främst i modern tyska?',
        options: [
          'I formellt skriftspråk och litteratur för "den där borta / den andra", men ersätts av "der da" i vanligt tal.',
          'Som standardord för framtid.',
          'Som en ersättning för verbet sein.',
          'Enbart vid tilltal till kungligheter.'
        ],
        answer: 0,
        explanation: 'Jener uppfattas idag som litterärt och distanserat; i talspråk säger man nästan alltid der da eller der dort.',
        feedback: [
          'Helt rätt! Jener tillhör skriftspråket och kontrasteras mot dieser.',
          'Fel. Jener är ett pronomen, inte en tidsmarkör.',
          'Fel. Det har inget med sein att göra.',
          'Fel. Det används i allmän sakprosa och litteratur.'
        ]
      }
    ]
  },

  // R07: Wer, wen, wem, was och welcher
  '/docs/pronomen/frageord': {
    lessonId: 'R07',
    href: '/docs/pronomen/frageord',
    title: 'Snabbkoll: Wer, wen, wem, was och welcher',
    questions: [
      {
        id: 'r07-q1',
        context: 'Kasusstyrd personfråga som ackusativobjekt.',
        prompt: 'Vilket frågeord ska väljas i "___ hast du gestern im Park getroffen?" (vem träffade du)?',
        options: [
          'Wen (eftersom treffen styr ackusativobjekt)',
          'Wer',
          'Wem',
          'Wessen'
        ],
        answer: 0,
        explanation: 'Subjektet är du; personen som träffas är ackusativobjekt -> wen.',
        feedback: [
          'Rätt! Wen är ackusativformen för person.',
          'Fel. Wer är nominativ (subjekt).',
          'Fel. Wem är dativ.',
          'Fel. Wessen är genitiv (vems).'
        ]
      },
      {
        id: 'r07-q2',
        context: 'Kasusstyrd personfråga som dativobjekt.',
        prompt: 'Vilket frågeord väljs i "___ gehört dieser Schlüssel?" (vem tillhör)?',
        options: [
          'Wem (eftersom gehören styr dativ)',
          'Wer',
          'Wen',
          'Was'
        ],
        answer: 0,
        explanation: 'Verbet gehören styr dativ -> wem gehört das?',
        feedback: [
          'Rätt! Wem för dativobjekt.',
          'Fel. Wer är nominativ.',
          'Fel. Wen är ackusativ.',
          'Fel. Was används för saker, inte personer som äger nycklar.'
        ]
      },
      {
        id: 'r07-q3',
        context: 'Fråga med preposition om sak.',
        prompt: 'Hur frågar man korrekt i vårdad tyska: "Vad väntar du på (auf den Bus)?"?',
        options: [
          'Worauf wartest du?',
          'Auf was wartest du?',
          'Auf wen wartest du?',
          'Woran wartest du?'
        ],
        answer: 0,
        explanation: 'För saker används wo(r) + preposition: worauf. "Auf wen" frågar om en person.',
        feedback: [
          'Rätt! Worauf wartest du? för saker.',
          'Fel. "Auf was" är talspråkligt och ogillas i vårdad standardtyska.',
          'Fel. "Auf wen" frågar om en person.',
          'Fel. Warten styr på tyska på (auf), inte an.'
        ]
      },
      {
        id: 'r07-q4',
        context: 'Skillnad mellan welcher och was für ein.',
        prompt: 'Vilket frågeord används när man frågar efter typ/sort ("Vad för slags bil kör du?")?',
        options: [
          'Was für ein Auto fährst du?',
          'Welches Auto fährst du?',
          'Wie ein Auto fährst du?',
          'Wessen Auto fährst du?'
        ],
        answer: 0,
        explanation: 'Was für ein efterfrågar art, sort eller egenskap (What kind of?). Welches väljer ur ett bestämt urval.',
        feedback: [
          'Rätt! Was für ein efterfrågar bilmärke, kategori eller sort.',
          'Fel. Welches betyder vilken av dessa bestämda bilar.',
          'Fel. "Wie ein" är en felaktig konstruktion här.',
          'Fel. Wessen betyder "vems bil".'
        ]
      },
      {
        id: 'r07-q5',
        context: 'Genitivfråga.',
        prompt: 'Hur översätts bäst frågan: "Vems jacka är det här?"?',
        options: [
          'Wessen Jacke ist das?',
          'Wem seine Jacke ist das?',
          'Wer Jacke ist das?',
          'Welche Jacke ist das?'
        ],
        answer: 0,
        explanation: 'Vems heter wessen på tyska och följs direkt av substantivet utan artikel.',
        feedback: [
          'Rätt! Wessen Jacke ist das?.',
          'Fel. "Wem seine" är regionalt talspråk som ska undvikas i standardtyska.',
          'Fel. Wer är nominativ.',
          'Fel. Welche betyder vilken jacka, inte vems.'
        ]
      },
      {
        id: 'r07-q6',
        context: 'Böjning av was für ein i ackusativ maskulinum.',
        prompt: 'Hur böjs frågeordet i "___ (vad för slags) Mantel suchst du?" (der Mantel)?',
        options: [
          'Was für einen Mantel suchst du?',
          'Was für ein Mantel suchst du?',
          'Was für einem Mantel suchst du?',
          'Was für Mantel suchst du?'
        ],
        answer: 0,
        explanation: 'Mantel är maskulinum och steht i ackusativ som objekt till suchen: was für einen.',
        feedback: [
          'Helt rätt! einen är ackusativ maskulinum.',
          'Fel. ein är nominativ.',
          'Fel. einem är dativ.',
          'Fel. ein kan inte strykas i singular.'
        ]
      }
    ]
  },

  // R09: Man, jemand, niemand, etwas och nichts
  '/docs/pronomen/indefinita': {
    lessonId: 'R09',
    href: '/docs/pronomen/indefinita',
    title: 'Snabbkoll: Man, jemand, niemand, etwas och nichts',
    questions: [
      {
        id: 'r09-q1',
        context: 'Subjektet man och verbkongruens.',
        prompt: 'I vilken person och numerus böjs verbet när subjektet är "man"?',
        options: [
          'Alltid i 3:e person singular (t.ex. man kann, man darf, man spricht).',
          'I 3:e person plural (man können).',
          'I 1:a person singular (man kann).',
          'Det beror på hur många människor man syftar på.'
        ],
        answer: 0,
        explanation: 'Subjektet man kongruerar alltid med verbet i 3:e person singular, precis som er/sie/es.',
        feedback: [
          'Rätt! Verbet står alltid i 3:e person singular.',
          'Fel. Plural används aldrig med man.',
          'Fel. Man är 3:e person.',
          'Fel. Kongruensen är rent grammatisk oavsett verkligt antal.'
        ]
      },
      {
        id: 'r09-q2',
        context: 'Objektsform för pronomenet man.',
        prompt: 'Vilket ord används när "man" ska stå som ackusativobjekt ("Buller gör en trött")?',
        options: [
          'einen (Lärm macht einen müde)',
          'man (Lärm macht man müde)',
          'einem',
          'sich'
        ],
        answer: 0,
        explanation: 'Ordet man kan inte vara objekt; som ackusativobjekt ersätts det av einen.',
        feedback: [
          'Rätt! einen är ackusativformen för man.',
          'Fel. man kan aldrig stå som objekt i en tysk sats.',
          'Fel. einem är dativformen.',
          'Fel. sich är reflexivt pronomen.'
        ]
      },
      {
        id: 'r09-q3',
        context: 'Böjning av niemand i dativ.',
        prompt: 'Hur böjs niemand i meningen "Ich habe mit ___ gesprochen" (jag har inte talat med någon)?',
        options: [
          'niemandem (prepositionen mit styr dativ)',
          'niemanden',
          'niemand',
          'keinem niemand'
        ],
        answer: 0,
        explanation: 'Efter dativprepositionen mit heter det med formell ändelse niemandem.',
        feedback: [
          'Rätt! mit niemandem i dativ.',
          'Fel. niemanden är ackusativ.',
          'Fel. Den oböjda formen är vardaglig, men -em är den vårdade standardformen.',
          'Fel. Dubbel form är nonsens.'
        ]
      },
      {
        id: 'r09-q4',
        context: 'Etwas i kombination med adjektiv.',
        prompt: 'Hur skrivs och böjs adjektivet i "något gott" (etwas ___)?',
        options: [
          'etwas Gutes (stort G och ändelsen -es)',
          'etwas gutes',
          'etwas Gute',
          'etwas Gut'
        ],
        answer: 0,
        explanation: 'Efter etwas och nichts substantiveras adjektivet: det får stor bokstav och ändelsen -es (neutrum).',
        feedback: [
          'Rätt! etwas Gutes – substantiverat adjektiv med stor begynnelsebokstav och -es.',
          'Fel. Måste skrivas med stor bokstav.',
          'Fel. Kräver ändelsen -es.',
          'Fel. Grundformen kan inte stå direkt efter etwas.'
        ]
      },
      {
        id: 'r09-q5',
        context: 'Regeln om dubbelnegation.',
        prompt: 'Hur översätts "Ingen har sagt någonting" korrekt till tyska?',
        options: [
          'Niemand hat etwas gesagt. (enkel negation)',
          'Niemand hat nichts gesagt.',
          'Keiner hat nichts gesagt.',
          'Niemand hat nicht etwas gesagt.'
        ],
        answer: 0,
        explanation: 'Tyskan har strikt enkel negation: niemand utesluter ett nytt nekat ord. "Niemand hat nichts gesagt" betyder att alla sa något!',
        feedback: [
          'Helt rätt! Niemand hat etwas gesagt.',
          'Fel. Detta är dubbelnegation som på tyska betyder motsatsen: "Ingen sa ingenting" = alla sa något.',
          'Fel. Samma dubbelnegationsfel.',
          'Fel. Orimlig konstruktion.'
        ]
      },
      {
        id: 'r09-q6',
        context: 'Självständigt kein-.',
        prompt: 'Vad heter självständigt kein i maskulinum nominativ ("Ingen vet svaret")?',
        options: [
          'Keiner weiß die Antwort.',
          'Kein weiß die Antwort.',
          'Keines weiß die Antwort.',
          'Keine weiß die Antwort.'
        ],
        answer: 0,
        explanation: 'Utan efterföljande substantiv får kein stark ändelse: keiner (maskulinum nominativ).',
        feedback: [
          'Rätt! Keiner weiß die Antwort.',
          'Fel. Kein kan bara stå direkt framför ett substantiv.',
          'Fel. Keines är neutrum.',
          'Fel. Keine är femininum eller plural.'
        ]
      }
    ]
  },

  // R10: Es som pronomen och platshållare
  '/docs/pronomen/es': {
    lessonId: 'R10',
    href: '/docs/pronomen/es',
    title: 'Snabbkoll: Es som pronomen och platshållare',
    questions: [
      {
        id: 'r10-q1',
        context: 'Förfälts-es (Vorfeld-es) på position 1.',
        prompt: 'Vad händer med det formella "Es" i "Es warten viele Gäste draußen" om tids- eller platsadverbialet "Draußen" flyttas till position 1?',
        options: [
          'Ordet "es" försvinner helt och hållet: "Draußen warten viele Gäste".',
          '"es" flyttas in efter verbet: "Draußen warten es viele Gäste".',
          '"es" förvandlas till "sie".',
          'Satsen blir grammatiskt felaktig.'
        ],
        answer: 0,
        explanation: 'Ett rent Vorfeld-es fyller bara Position 1. När ett annat led tar Position 1 raderas detta es spårlöst.',
        feedback: [
          'Rätt! Förfälts-es försvinner helt vid omflyttning.',
          'Fel. Det vanligaste stilfelet hos svensktalande; es får INTE stå kvar i mittfältet!',
          'Fel. Inget pronomenbyte sker.',
          'Fel. Att ta bort es är tvärtom det enda grammatiskt korrekta!'
        ]
      },
      {
        id: 'r10-q2',
        context: 'Opersonligt es vid väder och fasta uttryck.',
        prompt: 'Kan ordet "es" tas bort ur meningen "Heute regnet es den ganzen Tag"?',
        options: [
          'Nej, vid väderverb och opersonliga uttryck är es ett fast subjekt och kan aldrig strykas.',
          'Ja, det heter "Heute regnet den ganzen Tag".',
          'Ja, men bara på sommaren.',
          'Bara om verbet står i perfekt.'
        ],
        answer: 0,
        explanation: 'Opersonligt es vid väder (es regnet, es schneit) är ett obligatoriskt grammatiskt subjekt som alltid måste finnas kvar.',
        feedback: [
          'Rätt! Opersonligt es kan aldrig strykas.',
          'Fel. Utan es saknar satsen subjekt och blir felaktig.',
          'Fel. Årstiden har ingen grammatisk betydelse.',
          'Fel. Tempus påverkar inte subjektets närvaro.'
        ]
      },
      {
        id: 'r10-q3',
        context: 'Konstruktionen es gibt.',
        prompt: 'Vilket kasus styrs alltid av konstruktionen "es gibt"?',
        options: [
          'Ackusativ (Es gibt einen großen Unterschied)',
          'Nominativ',
          'Dativ',
          'Genitiv'
        ],
        answer: 0,
        explanation: 'Es gibt kräver alltid ackusativobjekt (t.ex. einen, eine, ein).',
        feedback: [
          'Rätt! es gibt + ackusativ.',
          'Fel. Nominativ används vid sein, inte gibt.',
          'Fel. es gibt styr inte dativ.',
          'Fel. es gibt styr inte genitiv.'
        ]
      },
      {
        id: 'r10-q4',
        context: 'Es som korrelat till dass-sats.',
        prompt: 'Vilken funktion har "es" i "Ich finde es wichtig, dass wir pünktlich beginnen"?',
        options: [
          'Objektkorrelat: det förannonserar den efterföljande dass-satsen i huvudsatsen.',
          'Väderpronomen.',
          'Demonstrativt frågeord.',
          'Förfälts-es som ska tas bort.'
        ],
        answer: 0,
        explanation: 'Es fungerar här som ett framåtpekande korrelat som håller objektets plats i huvudsatsen.',
        feedback: [
          'Rätt! Objektkorrelat till bisatsen.',
          'Fel. Det handlar inte om väder.',
          'Fel. Es är inget frågeord.',
          'Fel. Korrelat-es i mittfältet raderas inte.'
        ]
      },
      {
        id: 'r10-q5',
        context: 'Verbkongruens vid Vorfeld-es.',
        prompt: 'Varför heter det "Es STEHEN drei Autos vor der Tür" med verbet i plural?',
        options: [
          'Eftersom det egentliga subjektet är "drei Autos" (plural), inte "Es".',
          'Eftersom es alltid kräver verb i plural.',
          'Det är ett tryckfel i läroböcker; det borde heta steht.',
          'För att prepositionen vor kräver plural.'
        ],
        answer: 0,
        explanation: 'Vorfeld-es är bara en platshållare; verbet kongruerar alltid med det egentliga subjektet (drei Autos = plural).',
        feedback: [
          'Rätt! Verbet böjs efter det logiska subjektet (drei Autos).',
          'Fel. Es som ord är singular.',
          'Fel. Det är fullständigt korrekt standardtyska.',
          'Fel. Prepositioner styr kasus, inte numerus på verbet.'
        ]
      },
      {
        id: 'r10-q6',
        context: 'Refererande es.',
        prompt: 'Vad syftar "es" på i meningen: "Wo ist mein Handy? – Ich habe es auf den Tisch gelegt"?',
        options: [
          'På das Handy (neutrum singular).',
          'På bordet (der Tisch).',
          'På ett abstrakt väderförhållande.',
          'Det är ett tomt förfälts-es.'
        ],
        answer: 0,
        explanation: 'Es är här ett vanligt personligt pronomen som ersätter neutrumsubstantivet das Handy i ackusativ.',
        feedback: [
          'Helt rätt! Ersätter das Handy.',
          'Fel. Tisch är maskulinum (den Tisch).',
          'Fel. Detta är ett konkret föremål.',
          'Fel. Det är ett innehållsfullt refererande pronomen.'
        ]
      }
    ]
  },

  // R11: Daran, darauf, woran och worauf
  '/docs/pronomen/dar-och-wor': {
    lessonId: 'R11',
    href: '/docs/pronomen/dar-och-wor',
    title: 'Snabbkoll: Daran, darauf, woran och worauf',
    questions: [
      {
        id: 'r11-q1',
        context: 'Varför används pronominaladverb?',
        prompt: 'Varför kan man inte säga "*Ich denke an es" i tysk grammatik?',
        options: [
          'Prepositioner kombineras inte direkt med pronomenet es för saker; i stället bildas da(r)-ord (daran).',
          'För att verbet denken inte kan ha något objekt.',
          'För att prepositionen an är förbjuden med dåtid.',
          'För att es bara kan användas om människor.'
        ],
        answer: 0,
        explanation: 'Tyskan förbjuder sammansmältningen prep + es/das för saker. I stället bildas pronominaladverbet da(r) + preposition.',
        feedback: [
          'Rätt! Preposition + es ersätts av da(r)-former (daran).',
          'Fel. Denken an kräver tvärtom objekt.',
          'Fel. Tempus har ingenting med saken att göra.',
          'Fel. Es används just för neutrum och opersonliga företeelser.'
        ]
      },
      {
        id: 'r11-q2',
        context: 'Bindebokstaven -r- i da(r)- och wo(r)-former.',
        prompt: 'När skjuts bokstaven -r- in mellan da/wo och prepositionen (t.ex. da-r-auf)?',
        options: [
          'När prepositionen börjar på en vokal (a, e, i, o, u eller ä, ö, ü).',
          'När prepositionen styr dativ.',
          'Bara vid frågor, aldrig vid påståenden.',
          'Bara när ordet står i början av en huvudsats.'
        ],
        answer: 0,
        explanation: 'För att undvika vokalkollision (hiatus) skjuts -r- in framför vokaler: da + auf -> darauf; wo + an -> woran.',
        feedback: [
          'Rätt! -r- skjuts in framför prepositioner som börjar på vokal.',
          'Fel. Kasus påverkar inte bindebokstaven (jfr darmit som inte finns; mit är dativ -> damit).',
          'Fel. Det gäller både da- och wo-former.',
          'Fel. Placeringen i satsen spelar ingen roll.'
        ]
      },
      {
        id: 'r11-q3',
        context: 'Skiljelinjen mellan saker och personer.',
        prompt: 'Hur säger man korrekt: "Jag väntar på honom" (på en person)?',
        options: [
          'Ich warte auf ihn. (preposition + personligt pronomen, ALDRIG darauf!)',
          'Ich warte darauf.',
          'Ich warte worauf.',
          'Ich warte an ihn.'
        ],
        answer: 0,
        explanation: 'Da(r)-former får ALDRIG syfta på personer! Om en person avses används vanlig preposition + personligt pronomen: auf ihn.',
        feedback: [
          'Rätt! Personer kräver preposition + personligt pronomen (auf ihn).',
          'Fel. "darauf" används uteslutande om saker, planer och händelser.',
          'Fel. worauf är ett frågeord för saker.',
          'Fel. Warten styr auf, inte an.'
        ]
      },
      {
        id: 'r11-q4',
        context: 'Frågeord för saker med preposition.',
        prompt: 'Hur frågar man: "Vad diskuterar ni om?" (diskutieren über + ack)?',
        options: [
          'Worüber diskutiert ihr?',
          'Über was diskutiert ihr?',
          'Über wen diskutiert ihr?',
          'Womit diskutiert ihr?'
        ],
        answer: 0,
        explanation: 'Wo + r + über = worüber efterfrågar ämnet i en über-konstruktion.',
        feedback: [
          'Rätt! Worüber diskutiert ihr?.',
          'Fel. "Über was" är vardagligt och stilistiskt bristfälligt.',
          'Fel. "Über wen" frågar om en person (vem pratar ni om).',
          'Fel. Womit betyder "med vad".'
        ]
      },
      {
        id: 'r11-q5',
        context: 'Pronominaladverb som korrelat till dass-sats.',
        prompt: 'Vilket ord ska stå i luckan: "Ich freue mich ___, dass du die Prüfung bestanden hast" (sich freuen über)?',
        options: [
          'darüber (korrelat till dass-satsen)',
          'daran',
          'darauf',
          'damit'
        ],
        answer: 0,
        explanation: 'Att glädja sig över något som redan skett kräver über -> darüber, dass...',
        feedback: [
          'Rätt! darüber för att glädja sig över något som hänt.',
          'Fel. freuen kombineras inte med an.',
          'Fel. darauf används för framtida förväntan (glädja sig åt något som ska komma).',
          'Fel. damit är fel preposition här.'
        ]
      },
      {
        id: 'r11-q6',
        context: 'Relativ användning av wo(r)-adverb.',
        prompt: 'Vilket ord fyller luckan i "Das ist alles, ___ ich mich erinnern kann" (sich erinnern an)?',
        options: [
          'woran (relativt pronominaladverb efter alles)',
          'daran',
          'was an',
          'welches an'
        ],
        answer: 0,
        explanation: 'Efter neutrala pronomen som alles, etwas, nichts fungerar wo(r)-ord som relativa bindeord: alles, woran ich...',
        feedback: [
          'Helt rätt! woran efter obestämda neutrala pronomen som alles.',
          'Fel. daran är ett påstående, inte ett relativord.',
          'Fel. "was an" är en omöjlig ordsekvens.',
          'Fel. Denna kombination existerar inte på tyska.'
        ]
      }
    ]
  }
};

let content = fs.readFileSync('data/learning-quizzes.ts', 'utf8');

const lastIndex = content.lastIndexOf('};');
if (lastIndex === -1) {
  console.error("Kunde inte hitta avslutande };");
  process.exit(1);
}

let toInsert = '\n';
for (const [key, val] of Object.entries(g1dQuizzes)) {
  toInsert += `  '${key}': ${JSON.stringify(val, null, 4).replace(/\n/g, '\n  ')},\n\n`;
}

const updated = content.slice(0, lastIndex) + toInsert + content.slice(lastIndex);
fs.writeFileSync('data/learning-quizzes.ts', updated, 'utf8');
console.log("Lade till 6 frågor för alla 10 lektioner i Grupp 1D i data/learning-quizzes.ts!");
