import fs from 'fs';

const g1cQuizzes = {
  // M02: Modalverb i dåtid och Ersatzinfinitiv
  '/docs/modus/modalverb-i-datid': {
    lessonId: 'M02',
    href: '/docs/modus/modalverb-i-datid',
    title: 'Snabbkoll: Modalverb i dåtid och Ersatzinfinitiv',
    questions: [
      {
        id: 'm02-q1',
        context: 'Uttryck dåtid för modalverbet "müssen" i ledigt talspråk.',
        prompt: 'Hur uttrycks "Vi var tvungna att vänta" mest naturligt i tyskt tal?',
        options: [
          'Wir mussten warten.',
          'Wir haben warten gemusst.',
          'Wir müssten warten.',
          'Wir waren warten gemusst.'
        ],
        answer: 0,
        explanation: 'Modalverb används i överväldigande grad i präteritum (mussten) även i vardagligt talspråk.',
        feedback: [
          'Rätt! Modalverb föredras starkt i präteritum framför perfekt i både tal och skrift.',
          'Fel. När ett modalverb står med ett huvudverb i perfekt bildas Ersatzinfinitiv (warten müssen), inte gemusst.',
          'Fel. Müssten med omljud är Konjunktiv II ("vi skulle behöva"), inte faktisk dåtid.',
          'Fel. Modalverb bildar aldrig sammansatta tempus med sein.'
        ]
      },
      {
        id: 'm02-q2',
        context: 'Skillnaden mellan präteritum och Konjunktiv II hos modalverb.',
        prompt: 'Vilken skillnad är det mellan formerna "konnte" och "könnte"?',
        options: [
          'Konnte är präteritum (faktiskt kunde); könnte är Konjunktiv II (skulle kunna).',
          'Könnte är präteritum; konnte är presens.',
          'Båda är präteritum, men könnte används i södra Tyskland.',
          'Konnte är perfektparticip och könnte är infinitiv.'
        ],
        answer: 0,
        explanation: 'Präteritum av modalverb har ALDRIG omljud (konnte, musste, durfte). Konjunktiv II har omljud (könnte, müsste, dürfte).',
        feedback: [
          'Helt rätt! Präteritum saknar omljud, medan Konjunktiv II har prickar.',
          'Fel. Presens är kann / könnt; konnte är präteritum.',
          'Fel. Betydelse och modus skiljer dem åt, inte geografi.',
          'Fel. Infinitiven är können och participet är gekonnt.'
        ]
      },
      {
        id: 'm02-q3',
        context: 'Definition av grammatiktermen Ersatzinfinitiv.',
        prompt: 'Vad innebär grammatiktermen "Ersatzinfinitiv" vid modalverb?',
        options: [
          'Att modalverbet i stället för Partizip II (ge-form) får formen av en ren infinitiv.',
          'Att man ersätter verbet med ett substantiv.',
          'Att infinitivmärket "zu" alltid måste läggas till framför modalverbet.',
          'Att huvudsatsens verb stryks helt.'
        ],
        answer: 0,
        explanation: 'När modalverbet styr en ren infinitiv i perfekt uppträder det självt som infinitiv: "Ich habe arbeiten müssen" (inte gemusst).',
        feedback: [
          'Rätt! Ersättningsinfinitiv innebär att infinitivformen ersätter participformen.',
          'Fel. Det kallas nominalisering.',
          'Fel. Modalverb tar ren infinitiv utan zu.',
          'Fel. Inget verb stryks.'
        ]
      },
      {
        id: 'm02-q4',
        context: 'Ett modalverb används helt självständigt utan styrd infinitiv.',
        prompt: 'Vilken mening är korrekt om modalverbet står ensamt UTAN huvudverb i perfekt?',
        options: [
          'Das habe ich wirklich nicht gewollt.',
          'Das habe ich wirklich nicht wollen.',
          'Das bin ich wirklich nicht gewollt.',
          'Das habe ich wirklich nicht gewollt haben.'
        ],
        answer: 0,
        explanation: 'Utan ett annat huvudverb utlöses ingen Ersatzinfinitiv – då används det vanliga participet gewollt.',
        feedback: [
          'Rätt! Utan styrt huvudverb används det vanliga participet med ge- (gewollt, gekonnt).',
          'Fel. Ersatzinfinitiv uppstår bara när modalverbet styr ett annat verb i infinitiv.',
          'Fel. Hjälpverbet är alltid haben.',
          'Fel. Dubbel hjälpverbsform är orimlig här.'
        ]
      },
      {
        id: 'm02-q5',
        context: 'Ordföljd i bisatser med dubbel infinitiv.',
        prompt: 'Hur placeras verben i en bisats med Ersatzinfinitiv i vårdad standardtyska?',
        options: [
          '..., weil er den Brief hat schreiben müssen.',
          '..., weil er den Brief schreiben müssen hat.',
          '..., weil er den Brief schreiben gemusst hat.',
          '..., weil hat er den Brief schreiben müssen.'
        ],
        answer: 0,
        explanation: 'I vårdad standardtyska flyttas hjälpverbet haben fram framför båda infinitiverna (så kallat Oberfeld): hat schreiben müssen.',
        feedback: [
          'Rätt! Det finita hjälpverbet "hat" flyttas fram framför de två infinitiverna i skriftlig norm.',
          'Fel. Detta förekommer i visst talspråk, men framställningen är den etablerade skriftspråksnormen.',
          'Fel. Formen gemusst är felaktig vid styrt huvudverb.',
          'Fel. Konjunktionen weil kräver att verben står i högra klammern.'
        ]
      },
      {
        id: 'm02-q6',
        context: 'Betydelsen av verbet "mögen" i präteritum.',
        prompt: 'Vad betyder den tyska meningen: "Als Kind mochte er keinen Fisch"?',
        options: [
          'Som barn gillade han inte fisk.',
          'Som barn skulle han inte vilja ha fisk.',
          'Som barn fick han inte äta fisk.',
          'Som barn kunde han inte laga fisk.'
        ],
        answer: 0,
        explanation: 'Mochte är präteritum av mögen och betyder tyckte om / gillade.',
        feedback: [
          'Rätt! Mochte är präteritum av mögen (tyckte om / gillade).',
          'Fel. "Skulle vilja ha" heter möchte (Konjunktiv II).',
          'Fel. "Fick inte äta" heter durfte nicht essen.',
          'Fel. "Kunde inte" heter konnte nicht.'
        ]
      }
    ]
  },

  // M05: Konjunktiv I
  '/docs/modus/konjunktiv-i': {
    lessonId: 'M05',
    href: '/docs/modus/konjunktiv-i',
    title: 'Snabbkoll: Konjunktiv I',
    questions: [
      {
        id: 'm05-q1',
        context: 'Konjunktiv I-ändelsernas kännetecken.',
        prompt: 'Vilken är den bärande vokalen i Konjunktiv I-ändelserna (-e, -est, -e, -en, -et, -en)?',
        options: [
          'Bokstaven -e-',
          'Bokstaven -i-',
          'Bokstaven -t-',
          'Bokstaven -u-'
        ],
        answer: 0,
        explanation: 'Konjunktiv I bildas genom att infinitivstammen förses med e-ändelser utan vokalväxling.',
        feedback: [
          'Rätt! Konjunktiv I kännetecknas av att infinitivstammen förses med e-ändelser.',
          'Fel. Tyska konjunktiver har inte i-ändelser.',
          'Fel. -te- är präteritum- och Konjunktiv II-markör för svaga verb.',
          'Fel. Ingen sådan regel finns.'
        ]
      },
      {
        id: 'm05-q2',
        context: 'Hjälpverbet sein i Konjunktiv I.',
        prompt: 'Vad heter 3:e person singular ("er/sie/es") av verbet "sein" i Konjunktiv I?',
        options: [
          'sei',
          'wäre',
          'seie',
          'ist'
        ],
        answer: 0,
        explanation: 'Verbet sein heter er/sie/es sei i Konjunktiv I. Det är en nolländelseform som är mycket vanlig i nyhetsspråk.',
        feedback: [
          'Rätt! "Er sei bereit" = Han påstås vara redo.',
          'Fel. Wäre är Konjunktiv II.',
          'Fel. Formen heter sei, inte seie.',
          'Fel. Ist är vanlig indikativ presens.'
        ]
      },
      {
        id: 'm05-q3',
        context: 'Ersättningsregeln när Konjunktiv I är tvetydig.',
        prompt: 'Vad händer om Konjunktiv I av ett verb är identisk med indikativformen (t.ex. vid "sie haben")?',
        options: [
          'Den ersätts av Konjunktiv II (t.ex. sie hätten).',
          'Den ersätts alltid av imperativ.',
          'Verbet måste strykas helt.',
          'Man sätter alltid till prefixet ge-.'
        ],
        answer: 0,
        explanation: 'Om Konjunktiv I sammanfaller med indikativ presens används Konjunktiv II för att modusskillnaden inte ska gå förlorad.',
        feedback: [
          'Rätt! Konjunktiv II fungerar som en grammatisk ersättningsform.',
          'Fel. Imperativ är uppmaningsform.',
          'Fel. Inget verb stryks.',
          'Fel. Ge- är en participmarkör.'
        ]
      },
      {
        id: 'm05-q4',
        context: 'Dåtidsbildning i Konjunktiv I.',
        prompt: 'Hur uttrycks dåtid i Konjunktiv I?',
        options: [
          'Med Konjunktiv I av haben/sein (habe/sei) + Partizip II.',
          'Med präteritumstammen försedd med -e.',
          'Dåtid kan inte uttryckas i Konjunktiv I.',
          'Med war + infinitiv.'
        ],
        answer: 0,
        explanation: 'All dåtid (oavsett präteritum, perfekt eller pluskvamperfekt) reduceras till habe/sei + particip II i Konjunktiv I.',
        feedback: [
          'Rätt! T.ex. "Er habe gesagt", "Sie sei angekommen".',
          'Fel. Det bildar Konjunktiv II för starka verb.',
          'Fel. Dåtid uttrycks mycket frekvent med sammansatta former.',
          'Fel. En sådan konstruktion finns inte.'
        ]
      },
      {
        id: 'm05-q5',
        context: 'Fasta idiomatiska uttryck med Konjunktiv I.',
        prompt: 'Vilken funktion har Konjunktiv I i det fasta uttrycket "Es lebe der König!"?',
        options: [
          'Optativ funktion: uttrycker en högtidlig önskan eller hyllning.',
          'Hypotetisk funktion: kungen finns förmodligen inte.',
          'Passiv funktion: kungen blir ledd.',
          'Tidsförskjutning till dåtid.'
        ],
        answer: 0,
        explanation: 'I äldre bevarade formler uttrycker Konjunktiv I önskan (optativ): "Leve kungen!".',
        feedback: [
          'Rätt! Konjunktiv I har en traditionell optativ (önskande) funktion i sådana uttryck.',
          'Fel. Det är en hyllningsformel, inte en hypotes.',
          'Fel. Verbet är leben (leva), inte leiten (leda).',
          'Fel. Formen är presens.'
        ]
      },
      {
        id: 'm05-q6',
        context: 'Modalverbet müssen i Konjunktiv I.',
        prompt: 'Hur böjs modalverbet "müssen" i 3:e person singular Konjunktiv I?',
        options: [
          'er müsse',
          'er müsste',
          'er musse',
          'er muss'
        ],
        answer: 0,
        explanation: 'Konjunktiv I utgår från infinitivstammen müss- och får ändelsen -e: er müsse.',
        feedback: [
          'Rätt! müss- + -e = er müsse.',
          'Fel. Müsste är Konjunktiv II.',
          'Fel. Vokalen behåller omljudet från infinitiven.',
          'Fel. Muss är indikativ presens.'
        ]
      }
    ]
  },

  // M06: Indirekt tal och referat
  '/docs/modus/indirekt-tal': {
    lessonId: 'M06',
    href: '/docs/modus/indirekt-tal',
    title: 'Snabbkoll: Indirekt tal och referat',
    questions: [
      {
        id: 'm06-q1',
        context: 'Syftet med Konjunktiv I i journalistik och nyheter.',
        prompt: 'Varför används Konjunktiv I i tysk nyhetsjournalistik och officiella referat?',
        options: [
          'För att objektivt markera att man återger någon annans ord utan att garantera sanningshalten.',
          'För att journalisten vill bevisa att talaren ljuger.',
          'För att tysk lag förbjuder citattecken i tidningar.',
          'För att visa att händelsen aldrig kan inträffa.'
        ],
        answer: 0,
        explanation: 'Konjunktiv I är stilistiskt neutralt och visar att skribenten distanserat refererar en källa utan att ta ställning.',
        feedback: [
          'Rätt! Det signalerar objektiv distans och källhänvisning.',
          'Fel. Konjunktiv I är neutralt och uttrycker varken tro eller misstro.',
          'Fel. Citattecken används flitigt vid direkta citat.',
          'Fel. Det är Konjunktiv II för overklighet.'
        ]
      },
      {
        id: 'm06-q2',
        context: 'Omvandling från direkt till indirekt tal.',
        prompt: 'Hur återges direkt tal "Sie sagt: Ich bin unschuldig" formellt i indirekt tal?',
        options: [
          'Sie sagt, sie sei unschuldig.',
          'Sie sagt, sie wäre unschuldig.',
          'Sie sagt, sie ist unschuldig.',
          'Sie sagt, sie würde unschuldig sein.'
        ],
        answer: 0,
        explanation: 'Sei är Konjunktiv I av sein i 3:e person singular och är förstahandsvalet.',
        feedback: [
          'Rätt! Sei är entydigt Konjunktiv I.',
          'Fel. Wäre är Konjunktiv II och behövs inte när Konjunktiv I är tydlig.',
          'Fel. Ist är vanlig indikativ.',
          'Fel. Würde-omskrivning behövs inte vid enkla hjälpverb.'
        ]
      },
      {
        id: 'm06-q3',
        context: 'Tempusförskjutning i indirekt tal.',
        prompt: 'Vad händer med tempus i indirekt tal om anföringsverbet står i dåtid ("Er sagte...")?',
        options: [
          'Ingen automatisk tidsförskjutning sker; den ursprungliga tidsrelationen bevaras.',
          'Verbet måste alltid ändras till pluskvamperfekt.',
          'Man måste alltid byta till futurum.',
          'Satsen måste göras om till en fråga.'
        ],
        answer: 0,
        explanation: 'Tyskan har ingen automatisk tempusförskjutning (backshift) som engelskan; talarens ursprungliga tidsplan gäller.',
        feedback: [
          'Rätt! "Er sagte, er habe keine Zeit" – habe står i Konjunktiv I presens.',
          'Fel. Tyskan har ingen mekanisk backshift som engelskan.',
          'Fel. Futurum används bara vid framtida innebörd.',
          'Fel. Påståendesatser förblir påståenden.'
        ]
      },
      {
        id: 'm06-q4',
        context: 'Ersättningsform vid sammanfall i plural.',
        prompt: 'Hur återges ursprungsyttrandet "Wir wohnen in Berlin" i indirekt tal ("Sie sagten...")?',
        options: [
          'Sie sagten, sie wohnten in Berlin (eller würden in Berlin wohnen).',
          'Sie sagten, sie wohnen in Berlin.',
          'Sie sagten, sie gewohnt hätten.',
          'Sie sagten, sie seien in Berlin gewohnt.'
        ],
        answer: 0,
        explanation: 'Eftersom Konjunktiv I (wohnen) sammanfaller med presens indikativ ersätts den med Konjunktiv II (wohnten / würden wohnen).',
        feedback: [
          'Rätt! Konjunktiv II ersätter Konjunktiv I vid sammanfall.',
          'Fel. Wohnen skiljer sig inte från indikativ och undviks i formell stil.',
          'Fel. Ändrar betydelsen till förfluten tid ("hade bott").',
          'Fel. Wohnen tar haben i perfekt.'
        ]
      },
      {
        id: 'm06-q5',
        context: 'Anpassning av tidsadverbial.',
        prompt: 'Hur förändras tidsadverbet "gestern" vid övergång till formellt indirekt referat?',
        options: [
          'Det ändras ofta till "am Vortag" eller "am Tag zuvor".',
          'Det ändras alltid till "morgen".',
          'Det måste alltid strykas helt.',
          'Det byts ut mot "jetzt".'
        ],
        answer: 0,
        explanation: 'Deiktiska uttryck som utgår från talögonblicket ändras så att referenspunkten blir tydlig för läsaren.',
        feedback: [
          'Rätt! Am Vortag / am Tag zuvor förtydligar referensen.',
          'Fel. Morgen betyder i morgon.',
          'Fel. Tidsangivelsen ska inte raderas.',
          'Fel. Jetzt betyder nu.'
        ]
      },
      {
        id: 'm06-q6',
        context: 'Indirekt tal i vardagsspråk.',
        prompt: 'Hur formuleras indirekt tal mest naturligt i vardagligt tyskt talspråk?',
        options: [
          'Med en dass-bisats och vanligt indikativtempus (z.B. "Er hat gesagt, dass er krank ist").',
          'Alltid med Konjunktiv I i huvudsatsordning.',
          'Genom att sjunga anföringssatsen.',
          'Enbart med latiniserade verbformer.'
        ],
        answer: 0,
        explanation: 'I vardagen använder tyskar nästan uteslutande dass-satser med indikativ.',
        feedback: [
          'Helt rätt! I vardagligt talspråk dominerar bisats med dass och indikativ.',
          'Fel. Konjunktiv I uppfattas som onaturligt högtravande i ledigt tal.',
          'Fel. Självklart inte.',
          'Fel. Inga sådana krav finns.'
        ]
      }
    ]
  },

  // T06: Futur I, presens och förmodan
  '/docs/tempus/futur-i': {
    lessonId: 'T06',
    href: '/docs/tempus/futur-i',
    title: 'Snabbkoll: Futur I, presens och förmodan',
    questions: [
      {
        id: 't06-q1',
        context: 'Futur I-konstruktionens delar.',
        prompt: 'Hur bildas Futur I i tyskan?',
        options: [
          'Böjt werden på position 2 + huvudverbet i ren infinitiv i slutet av satsen.',
          'Böjt haben på position 2 + infinitiv med zu.',
          'Böjt werden på position 2 + Partizip II.',
          'Böjt sein på position 2 + infinitiv.'
        ],
        answer: 0,
        explanation: 'Futur I bildas med det böjda hjälpverbet werden och huvudverbets rena infinitiv i satsens slut.',
        feedback: [
          'Rätt! T.ex. "Ich werde morgen anrufen".',
          'Fel. Haben + zu + infinitiv uttrycker nödvändighet.',
          'Fel. Det bildar Vorgangspassiv presens.',
          'Fel. Sein bildar inte futurum.'
        ]
      },
      {
        id: 't06-q2',
        context: 'Vardagligt uttryck för framtid.',
        prompt: 'Vad är det vanligaste sättet att uttrycka framtid i vardaglig tyska?',
        options: [
          'Vanlig presens tillsammans med ett tidsadverbial (t.ex. "Morgen fahre ich nach Berlin").',
          'Alltid Futur I med werden.',
          'Plusquamperfekt med schon.',
          'Imperativformer.'
        ],
        answer: 0,
        explanation: 'Presens + tidsadverbial är precis som på svenska standardmetoden för att tala om framtiden.',
        feedback: [
          'Rätt! Presens med tidsord är normen i vardagen.',
          'Fel. Att alltid använda werden låter onaturligt styltigt.',
          'Fel. Plusquamperfekt är förfluten dåtid.',
          'Fel. Imperativ är befallningsform.'
        ]
      },
      {
        id: 't06-q3',
        context: 'Förmodan i nutid med Futur I.',
        prompt: 'Vad betyder meningen "Er wird wohl zu Hause sein" i normal kontext?',
        options: [
          'Han är nog hemma just nu (förmodan i nutid).',
          'Han kommer absolut att bygga ett hus i framtiden.',
          'Han måste stanna hemma enligt lag.',
          'Han var hemma igår.'
        ],
        answer: 0,
        explanation: 'Futur I med wohl uttrycker en förmodan eller logisk gissning om nuet: han är nog hemma.',
        feedback: [
          'Rätt! Futur I uttrycker mycket ofta förmodan i nutid.',
          'Fel. Zu Hause sein betyder att befinna sig hemma.',
          'Fel. Måste uttrycks med müssen.',
          'Fel. Detta handlar inte om gårdagen.'
        ]
      },
      {
        id: 't06-q4',
        context: 'Böjning av werden i presens.',
        prompt: 'Vad är 2:a person singular ("du") av verbet werden i presens?',
        options: [
          'du wirst',
          'du werdest',
          'du wirdst',
          'du wurdest'
        ],
        answer: 0,
        explanation: 'Böjningen är ich werde, du wirst, er wird, wir werden, ihr werdet, sie werden.',
        feedback: [
          'Rätt! Du wirst (vokalväxling e -> i och ingen -d-).',
          'Fel. Werdest är Konjunktiv I.',
          'Fel. Formen stavas wirst utan d.',
          'Fel. Wurdest är präteritum.'
        ]
      },
      {
        id: 't06-q5',
        context: 'Skillnad mellan framtidsmarkör och modalverb.',
        prompt: 'Vilken skillnad är det i betydelse mellan "Ich will Arzt werden" och "Ich werde Arzt"?',
        options: [
          '"Ich will..." uttrycker talarens vilja/avsikt; "Ich werde..." uttrycker en förutsägelse eller framtida process.',
          'Det finns ingen skillnad alls.',
          '"Ich will..." är dåtid och "Ich werde..." är presens.',
          '"Ich werde..." betyder att man inte vill bli läkare.'
        ],
        answer: 0,
        explanation: 'Wollen signalerar avsikt och personlig önskan, medan werden signalerar neutral förutsägelse eller förändring.',
        feedback: [
          'Rätt! Wollen handlar om vilja, medan werden är framtid eller process.',
          'Fel. De har olika modal innebörd.',
          'Fel. Båda står i presens.',
          'Fel. Det finns ingen negation.'
        ]
      },
      {
        id: 't06-q6',
        context: 'Typisk skriftlig kontext för Futur I.',
        prompt: 'I vilken situation är Futur I särskilt typiskt i skriven tyska?',
        options: [
          'I officiella prognoser, väderleksrapporter och formella programförklaringar.',
          'I personliga dagböcker om vad som hände i går.',
          'I matlagningsrecept för ingredienslistan.',
          'Enbart vid hälsningsfraser.'
        ],
        answer: 0,
        explanation: 'Futur I passar i sakprosa, väderrapporter ("Morgen wird es regnen") och officiella löften.',
        feedback: [
          'Rätt! Officiella prognoser och löften använder ofta Futur I.',
          'Fel. Dåtid uttrycks med präteritum eller perfekt.',
          'Fel. Recept använder substantiv och infinitiver.',
          'Fel. Futur I används inte som hälsningsfras.'
        ]
      }
    ]
  },

  // T07: Futur II
  '/docs/tempus/futur-ii': {
    lessonId: 'T07',
    href: '/docs/tempus/futur-ii',
    title: 'Snabbkoll: Futur II',
    questions: [
      {
        id: 't07-q1',
        context: 'Strukturen hos Futur II.',
        prompt: 'Hur bildas Futur II i tyskan?',
        options: [
          'Böjt werden på position 2 + Partizip II + haben/sein i infinitiv sist.',
          'Böjt haben på position 2 + werden + Partizip II.',
          'Böjt sein på position 2 + infinitiv + haben.',
          'Böjt werden + två presensformer.'
        ],
        answer: 0,
        explanation: 'Futur II består av böjt werden på position 2 och ett slutkluster av Partizip II + haben/sein.',
        feedback: [
          'Rätt! T.ex. "Er wird angekommen sein" eller "Sie wird es gemacht haben".',
          'Fel. Werden måste vara det finita hjälpverbet.',
          'Fel. Felaktig verbkombination.',
          'Fel. Kräver Partizip II och infinitiv av hjälpverb.'
        ]
      },
      {
        id: 't07-q2',
        context: 'Futur II i modern språkanvändning.',
        prompt: 'Vad är den absolut vanligaste användningen av Futur II i modern talad tyska?',
        options: [
          'Förmodan och antaganden om det förflutna (t.ex. "Er wird wohl den Bus verpasst haben").',
          'Framtida handlingar som är oavslutade.',
          'Att ge befallningar till barn.',
          'Att beskriva vad som händer just nu utan tvivel.'
        ],
        answer: 0,
        explanation: 'I praktiken används Futur II oftast för att uttrycka en kvalificerad gissning om dåtid (han har nog missat bussen).',
        feedback: [
          'Helt rätt! Förmodan om dåtid är den dominerande användningen.',
          'Fel. Futur II betecknar avslutade förlopp.',
          'Fel. Befallningar ges med imperativ eller Futur I.',
          'Fel. Det uttrycks med presens indikativ.'
        ]
      },
      {
        id: 't07-q3',
        context: 'Val av hjälpverb i Futur II.',
        prompt: 'Vilken mening uttrycker korrekt Futur II för verbet "ankommen"?',
        options: [
          'Er wird wohl schon angekommen sein.',
          'Er wird wohl schon angekommen haben.',
          'Er wird wohl schon ankommen sein.',
          'Er ist wohl schon angekommen werden.'
        ],
        answer: 0,
        explanation: 'Ankommen är ett rörelseverb och tar sein som hjälpverb: angekommen sein.',
        feedback: [
          'Rätt! Ankommen kräver sein: angekommen sein.',
          'Fel. Ankommen kan inte ta haben som hjälpverb.',
          'Fel. Kräver Partizip II (angekommen), inte infinitiv.',
          'Fel. Liknar en felaktig passivkonstruktion.'
        ]
      },
      {
        id: 't07-q4',
        context: 'Vardaglig förenkling av framtida avslutad handling.',
        prompt: 'Hur ersätts Futur II för framtida fullbordad handling ("Bis morgen werde ich das beendet haben") oftast i vardagsspråk?',
        options: [
          'Med vanligt perfekt + tidsuttryck: "Bis morgen habe ich das beendet".',
          'Med präteritum: "Bis morgen beendete ich das".',
          'Med imperativ: "Beende das!".',
          'Man måste alltid använda Futur II.'
        ],
        answer: 0,
        explanation: 'Perfekt med tidsadverbial ersätter den klumpiga Futur II-framtidsformen i vardagligt tal.',
        feedback: [
          'Rätt! Perfekt + tidsangivelse är mycket vanligare i vardagen.',
          'Fel. Präteritum används inte för framtida tidsgränser.',
          'Fel. Det är en imperativ uppmaning.',
          'Fel. Tyskan tillåter och föredrar ofta perfekt i vardagen.'
        ]
      },
      {
        id: 't07-q5',
        context: 'Betydelsen av Futur II med wohl.',
        prompt: 'Vad betyder meningen "Sie wird den Brief wohl schon gelesen haben"?',
        options: [
          'Hon har nog redan läst brevet.',
          'Hon kommer aldrig att läsa brevet.',
          'Hon borde läsa brevet nu.',
          'Hon läser brevet just i detta ögonblick.'
        ],
        answer: 0,
        explanation: 'Wird... gelesen haben med wohl uttrycker förmodan om en redan fullbordad handling.',
        feedback: [
          'Rätt! Förmodan om en handling som redan skett.',
          'Fel. Det finns ingen negation.',
          'Fel. Borde uttrycks med sollte.',
          'Fel. Detta är pågående presens.'
        ]
      },
      {
        id: 't07-q6',
        context: 'Bisatsordning vid Futur II.',
        prompt: 'Var placeras verben i en bisats med Futur II (t.ex. med "weil")?',
        options: [
          '..., weil er den Zug verpasst haben wird.',
          '..., weil wird er den Zug verpasst haben.',
          '..., weil er wird den Zug haben verpasst.',
          '..., weil er verpasst haben den Zug wird.'
        ],
        answer: 0,
        explanation: 'I en bisats hamnar det finita verbet wird allra sist: verpasst haben wird.',
        feedback: [
          'Rätt! Det böjda hjälpverbet "wird" hamnar allra sist i bisatsen.',
          'Fel. Hjälpverbet får inte stå på position 2 efter weil.',
          'Fel. Felaktig placering av alla tre verb.',
          'Fel. Objektet den Zug hör hemma i mittfältet.'
        ]
      }
    ]
  },

  // T08: Tidsrelationer och svensk överföring
  '/docs/tempus/tid-i-sammanhang': {
    lessonId: 'T08',
    href: '/docs/tempus/tid-i-sammanhang',
    title: 'Snabbkoll: Tidsrelationer och svensk överföring',
    questions: [
      {
        id: 't08-q1',
        context: 'Pågående handling som började i det förflutna.',
        prompt: 'Hur översätts bäst: "Jag har bott i Tyskland i två år (och bor kvar där än idag)"?',
        options: [
          'Ich wohne seit zwei Jahren in Deutschland.',
          'Ich habe zwei Jahre in Deutschland gewohnt.',
          'Ich wohne für zwei Jahre in Deutschland.',
          'Ich lebe seit zwei Jahre in Deutschland.'
        ],
        answer: 0,
        explanation: 'Pågående handlingar från dåtid till nutid kräver presens + seit + dativ på tyska.',
        feedback: [
          'Rätt! Pågående förlopp som startade i dåtid kräver presens + seit + dativ.',
          'Fel. Detta betyder att du bodde där i två år, men inte bor kvar längre!',
          'Fel. Für anger framtida planerad längd.',
          'Fel. Seit styr dativ plural: seit zwei Jahren.'
        ]
      },
      {
        id: 't08-q2',
        context: 'Betydelsen av perfekt utan seit.',
        prompt: 'Vad signalerar tyskans "Ich habe fünf Jahre in Wien gewohnt"?',
        options: [
          'Att handlingen är helt avslutad: personen bor inte längre i Wien.',
          'Att personen fortfarande bor i Wien.',
          'Att personen planerar att flytta till Wien om fem år.',
          'Att personen aldrig har varit i Wien.'
        ],
        answer: 0,
        explanation: 'Perfekt avgränsar ett avslutat förflutet förlopp. Talaren har flyttat därifrån.',
        feedback: [
          'Helt rätt! Perfekt utan seit signalerar ett avslutat förlopp.',
          'Fel. För pågående boende krävs "wohne seit fünf Jahren".',
          'Fel. Handlar inte om framtiden.',
          'Fel. Personen bodde faktiskt där i fem år.'
        ]
      },
      {
        id: 't08-q3',
        context: 'Förtidighet (Vorzeitigkeit) vid nachdem.',
        prompt: 'Vilket tempus krävs i en bisats med "nachdem" när huvudsatsen står i präteritum (dåtid)?',
        options: [
          'Plusquamperfekt (t.ex. "Nachdem er gegessen hatte, ging er spazieren").',
          'Presens.',
          'Präteritum.',
          'Futur I.'
        ],
        answer: 0,
        explanation: 'Nachdem kräver strikt förtidighet: om huvudsatsen är dåtid måste bisatsen stå i Plusquamperfekt.',
        feedback: [
          'Rätt! Handlingen i nachdem-satsen ägde rum före huvudsatsens dåtid.',
          'Fel. Presens kan inte kombineras med präteritum här.',
          'Fel. Samma tempus i båda satserna är stilistiskt felaktigt vid nachdem.',
          'Fel. Futurum är framtid, inte förtidig dåtid.'
        ]
      },
      {
        id: 't08-q4',
        context: 'Tidsavstånd bakåt från talögonblicket.',
        prompt: 'Hur översätts tidsuttrycket "för tre veckor sedan"?',
        options: [
          'vor drei Wochen',
          'seit drei Wochen',
          'für drei Wochen seit',
          'vor drei Woche'
        ],
        answer: 0,
        explanation: 'Svenskans "...sedan" (bakåt i tiden) översätts med vor + dativ: vor drei Wochen.',
        feedback: [
          'Rätt! "Vor + dativ" motsvarar svenskans "...sedan" räknat bakåt.',
          'Fel. Seit drei Wochen betyder "i tre veckor (nu)".',
          'Fel. En felaktig ordagrann översättning som inte finns på tyska.',
          'Fel. Dativ plural av Woche är Wochen.'
        ]
      },
      {
        id: 't08-q5',
        context: 'Distinktion mellan tidsadverb.',
        prompt: 'Vilken är skillnaden mellan tidsadverben "damals" och "dann"?',
        options: [
          '"Damals" betyder "på den tiden / då" (förfluten epok); "dann" betyder "sedan / därefter" (kronologisk följd).',
          '"Damals" är framtid och "dann" är dåtid.',
          '"Dann" styr dativ medan "damals" är en preposition.',
          'De är synonymer och kan alltid bytas ut mot varandra.'
        ],
        answer: 0,
        explanation: 'Damals refererar till en förfluten tidpunkt; dann anger nästa steg i en kronologi.',
        feedback: [
          'Rätt! Båda motsvarar svenskans "då", men fyller helt olika funktioner.',
          'Fel. Damals är strikt dåtid.',
          'Fel. Båda är adverb, inte prepositioner.',
          'Fel. De kan absolut inte bytas ut godtyckligt.'
        ]
      },
      {
        id: 't08-q6',
        context: 'Progressiv aspekt på tyska.',
        prompt: 'Hur uttrycker man att man "håller på att göra något" just i detta ögonblick på tyska?',
        options: [
          'Med presens och tidsadverbet "gerade" (t.ex. "Ich lese gerade ein Buch").',
          'Med böjt sein + presens particip (-end).',
          'Med verbet halten + infinitiv.',
          'Det går inte att uttrycka på tyska.'
        ],
        answer: 0,
        explanation: 'Tyskan saknar progressiv form och använder i stället vanligen adverbet gerade.',
        feedback: [
          'Rätt! Tyskan använder presens + gerade för pågående aspekt.',
          'Fel. En engelsk interferens ("I am reading") som inte fungerar på tyska.',
          'Fel. Halten uttrycker inte aspekt.',
          'Fel. Tyskan uttrycker detta utmärkt med presens och adverb.'
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
for (const [key, val] of Object.entries(g1cQuizzes)) {
  toInsert += `  '${key}': ${JSON.stringify(val, null, 4).replace(/\n/g, '\n  ')},\n\n`;
}

const updated = content.slice(0, lastIndex) + toInsert + content.slice(lastIndex);
fs.writeFileSync('data/learning-quizzes.ts', updated, 'utf8');
console.log("Lade till 6 frågor för alla 6 lektioner i Grupp 1C i data/learning-quizzes.ts!");
