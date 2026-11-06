import fs from 'fs';

const g1eQuizzes = {
  // P05: Aus och von: varifrån?
  '/docs/prepositioner/aus-och-von': {
    lessonId: 'P05',
    href: '/docs/prepositioner/aus-och-von',
    title: 'Snabbkoll: Aus och von: varifrån?',
    questions: [
      {
        id: 'p05-q1',
        context: 'Val mellan aus och von för geografiskt ursprung.',
        prompt: 'Hur säger man korrekt "Jag kommer från Sverige (är född/uppvuxen där)"?',
        options: [
          'Ich komme aus Schweden.',
          'Ich komme von Schweden.',
          'Ich komme ab Schweden.',
          'Ich komme nach Schweden.'
        ],
        answer: 0,
        explanation: 'Geografiskt hemland och ursprung från städer eller länder uttrycks alltid med aus.',
        feedback: [
          'Rätt! aus Schweden för ursprung.',
          'Fel. von Schweden används inte för hemland.',
          'Fel. ab används om startpunkter i tidtabeller.',
          'Fel. nach anger riktning mot ett land.'
        ]
      },
      {
        id: 'p05-q2',
        context: 'Rörelse från en person eller yrkesutövare.',
        prompt: 'Hur uttrycks "Han kommer precis från doktorn"?',
        options: [
          'Er kommt gerade vom Arzt (von dem Arzt).',
          'Er kommt gerade aus dem Arzt.',
          'Er kommt gerade zu dem Arzt.',
          'Er kommt gerade beim Arzt.'
        ],
        answer: 0,
        explanation: 'När utgångspunkten är en person, läkare eller myndighet används alltid von (vom).',
        feedback: [
          'Rätt! vom Arzt – von används vid personer.',
          'Fel. "aus dem Arzt" betyder bokstavligen inifrån doktorns kropp!',
          'Fel. zu anger riktning till doktorn.',
          'Fel. beim anger befintlighet hos doktorn.'
        ]
      },
      {
        id: 'p05-q3',
        context: 'Rörelse ut ur ett slutet rum eller byggnad.',
        prompt: 'Vilken preposition väljs i "Hon sprang ut ur huset" (das Haus)?',
        options: [
          'Sie lief aus dem Haus.',
          'Sie lief von dem Haus.',
          'Sie lief ab dem Haus.',
          'Sie lief bei dem Haus.'
        ],
        answer: 0,
        explanation: 'Inifrån ett tredimensionellt rum eller byggnad används alltid aus: aus dem Haus.',
        feedback: [
          'Rätt! aus dem Haus – ut ur ett slutet rum.',
          'Fel. von dem Haus betyder bort från husets utsida/fasad.',
          'Fel. ab används inte på detta sätt.',
          'Fel. bei anger befintlighet.'
        ]
      },
      {
        id: 'p05-q4',
        context: 'Materialangivelse.',
        prompt: 'Hur säger man på tyska att ett bord är "av trä / tillverkat av trä"?',
        options: [
          'Ein Tisch aus Holz.',
          'Ein Tisch von Holz.',
          'Ein Tisch mit Holz.',
          'Ein Tisch durch Holz.'
        ],
        answer: 0,
        explanation: 'Tillverkningsmaterial uttrycks på tyska alltid med aus: aus Holz, aus Gold, aus Glas.',
        feedback: [
          'Rätt! aus Holz för material.',
          'Fel. von Holz är en felaktig svensk/engelsk direktöversättning.',
          'Fel. mit Holz betyder med trä.',
          'Fel. durch anger genom.'
        ]
      },
      {
        id: 'p05-q5',
        context: 'Motsatspar i rummet.',
        prompt: 'Om du gick "ins Kino" (in i biografen), varifrån kommer du när filmen är slut?',
        options: [
          'aus dem Kino (in motsvaras av aus)',
          'vom Kino',
          'nach dem Kino',
          'zu dem Kino'
        ],
        answer: 0,
        explanation: 'Rörelse in i (in) motsvaras av rörelse ut ur (aus): in das Kino <-> aus dem Kino.',
        feedback: [
          'Rätt! in <-> aus.',
          'Fel. vom Kino skulle innebära att du bara stod utanför biografen.',
          'Fel. nach dem Kino betyder efter bion (tidsmässigt).',
          'Fel. zu är riktning dit.'
        ]
      },
      {
        id: 'p05-q6',
        context: 'Inre orsak och motiv.',
        prompt: 'Hur uttrycks "av kärlek" eller "av misstag"?',
        options: [
          'aus Liebe / aus Versehen',
          'von Liebe / von Versehen',
          'durch Liebe / durch Versehen',
          'über Liebe / über Versehen'
        ],
        answer: 0,
        explanation: 'Inre känslomässiga motiv och orsaker tar aus: aus Liebe, aus Angst, aus Versehen.',
        feedback: [
          'Helt rätt! aus Liebe, aus Versehen.',
          'Fel. von används inte för inre känslomotiv här.',
          'Fel. durch används för medel/förmedlare.',
          'Fel. über anger ämne eller rum ovanför.'
        ]
      }
    ]
  },

  // P07: Genitivprepositioner och register
  '/docs/prepositioner/genitiv': {
    lessonId: 'P07',
    href: '/docs/prepositioner/genitiv',
    title: 'Snabbkoll: Genitivprepositioner och register',
    questions: [
      {
        id: 'p07-q1',
        context: 'Formellt skriftspråk med genitivpreposition.',
        prompt: 'Hur uttrycks "på grund av dåligt väder" i vårdad skriven standardtyska (der Regen)?',
        options: [
          'wegen des schlechten Wetters / wegen des Regens',
          'wegen dem schlechten Wetter',
          'wegen von dem Regen',
          'wegen das schlechte Wetter'
        ],
        answer: 0,
        explanation: 'I vårdad skrift och officiella prov styr wegen genitiv: des schlechten Wetters / des Regens.',
        feedback: [
          'Rätt! wegen des schlechten Wetters – genitiv i vårdad stil.',
          'Fel. Dativ förekommer i talspråk men ogillas i formell skrift.',
          'Fel. Omskrivning med von är talspråklig.',
          'Fel. Ackusativ är felaktigt.'
        ]
      },
      {
        id: 'p07-q2',
        context: 'Tidsperiod med während.',
        prompt: 'Hur översätts "under sommaren (der Sommer)" korrekt till tyska?',
        options: [
          'während des Sommers',
          'unter dem Sommer',
          'während dem Sommer',
          'in dem Sommer'
        ],
        answer: 0,
        explanation: 'Tidsperioder uttrycks med während + genitiv: während des Sommers. "Unter dem Sommer" är en grov svensk fälla.',
        feedback: [
          'Rätt! während des Sommers.',
          'Fel. "unter dem Sommer" är en felaktig svensk interferens.',
          'Fel. Dativ tolereras i tal men genitiv är standard.',
          'Fel. "im Sommer" är möjligt, men inte "in dem Sommer" för "under sommaren".'
        ]
      },
      {
        id: 'p07-q3',
        context: 'Motsats med trotz.',
        prompt: 'Vilket kasus styrs av "trotz" i formell tyska ("trots alla varningar", die Warnungen)?',
        options: [
          'Genitiv (trotz aller Warnungen)',
          'Ackusativ (trotz alle Warnungen)',
          'Dativ (trotz allen Warnungen)',
          'Nominativ'
        ],
        answer: 0,
        explanation: 'Trotz styr genitiv i standardtyska: aller Warnungen är genitiv plural.',
        feedback: [
          'Rätt! aller Warnungen är genitiv plural.',
          'Fel. Ackusativ är felaktigt.',
          'Fel. Dativ förekommer i talspråk, men genitiv är standardnormen.',
          'Fel. Nominativ styrs aldrig av prepositioner.'
        ]
      },
      {
        id: 'p07-q4',
        context: 'Pronominalform med wegen.',
        prompt: 'Vad heter "för min skull / för min del" som fast sammansatt form i vårdad tyska?',
        options: [
          'meinetwegen',
          'wegen mir',
          'wegen mich',
          'meinethalben wegen'
        ],
        answer: 0,
        explanation: 'I vårdad tyska bildas de sammansatta formerna meinetwegen, deinetwegen, seinetwegen.',
        feedback: [
          'Rätt! meinetwegen är den vårdade sammansatta formen.',
          'Fel. wegen mir är vardagligt talspråk.',
          'Fel. wegen mich är felaktigt kasus.',
          'Fel. Dubbelform är nonsens.'
        ]
      },
      {
        id: 'p07-q5',
        context: 'Undantag där dativ är motiverat.',
        prompt: 'När är dativ grammatiskt motiverat efter en genitivpreposition även i skrift?',
        options: [
          'När ett substantiv i plural saknar artikel eller adjektiv som kan visa genitiv (t.ex. während Monaten).',
          'När meningen handlar om kärlek.',
          'När meningen står i dåtid.',
          'Dativ är alltid totalt förbjudet oavsett sammanhang.'
        ],
        answer: 0,
        explanation: 'När pluralformen inte kan signalera genitiv (eftersom -s saknas i plural) slår kasus över till dativ (-n) för att markera böjning.',
        feedback: [
          'Rätt! während Monaten – dativ visar kasus när artikel saknas.',
          'Fel. Ämnet har ingen grammatisk betydelse.',
          'Fel. Tempus påverkar inte kasus efter prepositioner.',
          'Fel. Detta etablerade undantag finns beskrivet i Duden.'
        ]
      },
      {
        id: 'p07-q6',
        context: 'Betydelsen av innerhalb och außerhalb.',
        prompt: 'Vad betyder uttrycken "innerhalb einer Woche" och "außerhalb der Öffnungszeiten"?',
        options: [
          'Inom en vecka / Utanför öppettiderna',
          'Efter en vecka / Under öppettiderna',
          'Före en vecka / Före öppettiderna',
          'Omkring en vecka / Utan öppettider'
        ],
        answer: 0,
        explanation: 'Innerhalb betyder inom (tid/rum) och außerhalb betyder utanför. Båda styr genitiv.',
        feedback: [
          'Helt rätt! Inom en vecka / Utanför öppettiderna.',
          'Fel. Betydelserna är förvanskade.',
          'Fel. Före heter vor.',
          'Fel. Omkring heter etwa/rund.'
        ]
      }
    ]
  },

  // P08: Verb och andra ord med fast preposition
  '/docs/prepositioner/fasta-forbindelser': {
    lessonId: 'P08',
    href: '/docs/prepositioner/fasta-forbindelser',
    title: 'Snabbkoll: Verb och andra ord med fast preposition',
    questions: [
      {
        id: 'p08-q1',
        context: 'Verb med fast preposition för väntan.',
        prompt: 'Vilken preposition och vilket kasus styr verbet "warten"?',
        options: [
          'warten auf + ackusativ (Ich warte auf den Bus)',
          'warten an + dativ',
          'warten für + ackusativ',
          'warten nach + dativ'
        ],
        answer: 0,
        explanation: 'Vänta på heter på tyska warten auf + ackusativ.',
        feedback: [
          'Rätt! warten auf + ackusativ.',
          'Fel. an används inte med warten.',
          'Fel. für är en engelsk fälla (wait for).',
          'Fel. nach används inte med warten.'
        ]
      },
      {
        id: 'p08-q2',
        context: 'Skillnad i framtid kontra dåtid vid sich freuen.',
        prompt: 'Vilken mening uttrycker glädje över en present som man REDAN HAR FÅTT?',
        options: [
          'Ich habe mich sehr über das Geschenk gefreut. (über för dåtid/nutid)',
          'Ich freue mich auf das Geschenk.',
          'Ich freue mich an das Geschenk.',
          'Ich freue mich für das Geschenk.'
        ],
        answer: 0,
        explanation: 'Sich freuen über (+ ack) uttrycker glädje över något som redan finns/skett. Sich freuen auf (+ ack) uttrycker framtida förväntan.',
        feedback: [
          'Rätt! über das Geschenk för något man redan fått.',
          'Fel. auf das Geschenk innebär att man ännu inte har fått det utan ser fram emot det.',
          'Fel. an kombineras inte med freuen.',
          'Fel. für kombineras bara med personer (freuen för din skull).'
        ]
      },
      {
        id: 'p08-q3',
        context: 'Verb med fast preposition för deltagande.',
        prompt: 'Vilken preposition och vilket kasus kräver verbet "teilnehmen"?',
        options: [
          'teilnehmen an + dativ (Er nimmt am Seminar teil)',
          'teilnehmen in + dativ',
          'teilnehmen bei + dativ',
          'teilnehmen auf + ackusativ'
        ],
        answer: 0,
        explanation: 'Delta i heter på tyska teilnehmen an + dativ.',
        feedback: [
          'Rätt! teilnehmen an + dativ (am Seminar).',
          'Fel. in är en svensk fälla ("delta i").',
          'Fel. bei används inte med teilnehmen.',
          'Fel. auf används inte här.'
        ]
      },
      {
        id: 'p08-q4',
        context: 'Verb med fast preposition för drömmar.',
        prompt: 'Hur översätts "Han drömmer om ett eget hus" (das Haus)?',
        options: [
          'Er träumt von einem eigenen Haus. (träumen von + dativ)',
          'Er träumt über ein eigenes Haus.',
          'Er träumt um ein eigenes Haus.',
          'Er träumt an ein eigenes Haus.'
        ],
        answer: 0,
        explanation: 'Drömma om heter alltid träumen von + dativ på tyska.',
        feedback: [
          'Rätt! träumen von + dativ.',
          'Fel. über är en svensk direktöversättning ("drömma om").',
          'Fel. um används med bitten, inte träumen.',
          'Fel. an används med denken.'
        ]
      },
      {
        id: 'p08-q5',
        context: 'Skillnad mellan leiden an och leiden unter.',
        prompt: 'Vilket uttryck används när någon lider av en medicinsk sjukdom som diabetes eller astma?',
        options: [
          'leiden an (+ dativ): Er leidet an Diabetes.',
          'leiden unter (+ dativ): Er leidet unter Diabetes.',
          'leiden von (+ dativ)',
          'leiden über (+ ackusativ)'
        ],
        answer: 0,
        explanation: 'Leiden an används för specifika medicinska diagnoser; leiden unter används för yttre plågor som stress och buller.',
        feedback: [
          'Rätt! leiden an + dativ vid sjukdomar.',
          'Fel. leiden unter används vid yttre omständigheter (stress, buller, hetta).',
          'Fel. leiden von finns inte.',
          'Fel. leiden über finns inte.'
        ]
      },
      {
        id: 'p08-q6',
        context: 'Verb med fast preposition för att be om något.',
        prompt: 'Vilken preposition och vilket kasus styr verbet "bitten"?',
        options: [
          'bitten um + ackusativ (Ich bitte um Verzeihung)',
          'bitten nach + dativ',
          'bitten für + ackusativ',
          'bitten über + ackusativ'
        ],
        answer: 0,
        explanation: 'Be om något heter bitten um + ackusativ.',
        feedback: [
          'Helt rätt! bitten um + ackusativ.',
          'Fel. nach används med fragen (fråga efter).',
          'Fel. für är fel preposition.',
          'Fel. über används inte med bitten.'
        ]
      }
    ]
  },

  // P09: Im, ins, am, ans, zum och zur
  '/docs/prepositioner/sammandragningar': {
    lessonId: 'P09',
    href: '/docs/prepositioner/sammandragningar',
    title: 'Snabbkoll: Im, ins, am, ans, zum och zur',
    questions: [
      {
        id: 'p09-q1',
        context: 'Bildning av sammandragningar.',
        prompt: 'Vilka ord har smält samman i formerna "im", "ins" och "zur"?',
        options: [
          'im = in dem; ins = in das; zur = zu der',
          'im = in den; ins = in des; zur = zu den',
          'im = in ihm; ins = in sein; zur = zu ihr',
          'im = in einem; ins = in eins; zur = zu einer'
        ],
        answer: 0,
        explanation: 'im = in + dem (dativ mask/neut); ins = in + das (ack neut); zur = zu + der (dativ fem).',
        feedback: [
          'Rätt! in dem -> im, in das -> ins, zu der -> zur.',
          'Fel. Felaktiga kasus och artiklar.',
          'Fel. Det är bestämd artikel som dras samman, inte personliga pronomen.',
          'Fel. Obestämd artikel dras inte samman på detta sätt.'
        ]
      },
      {
        id: 'p09-q2',
        context: 'Obligatorisk sammandragning vid tidsuttryck.',
        prompt: 'Hur uttrycks "på måndag" och "i maj" i naturlig tyska?',
        options: [
          'am Montag / im Mai (sammandragning är obligatorisk)',
          'an dem Montag / in dem Mai',
          'auf dem Montag / zu dem Mai',
          'in den Montag / an den Mai'
        ],
        answer: 0,
        explanation: 'Vid veckodagar, tider på dygnet och månader är sammandragningarna am och im obligatoriska.',
        feedback: [
          'Rätt! am Montag och im Mai.',
          'Fel. Att skriva an dem Montag låter styltigt och onaturligt.',
          'Fel. Fel prepositioner.',
          'Fel. Felaktigt kasus och prepositioner.'
        ]
      },
      {
        id: 'p09-q3',
        context: 'Sammandragning vid måltider.',
        prompt: 'Hur säger man "till frukost" och "till lunch"?',
        options: [
          'zum Frühstück / zum Mittagessen',
          'zu Frühstück / zu Mittagessen',
          'für das Frühstück / für das Mittagessen',
          'an dem Frühstück / an dem Mittagessen'
        ],
        answer: 0,
        explanation: 'Till måltider heter det alltid zum + neutrum substantiv: zum Frühstück (zu dem Frühstück).',
        feedback: [
          'Rätt! zum Frühstück / zum Mittagessen.',
          'Fel. Utan artikel låter det ofullständigt på tyska.',
          'Fel. för das är engelsk interferens (for breakfast).',
          'Fel. an används inte vid måltider.'
        ]
      },
      {
        id: 'p09-q4',
        context: 'När full form är obligatorisk.',
        prompt: 'När FÅR MAN INTE dra samman prepositionen och artikeln till t.ex. "im" eller "ans"?',
        options: [
          'När artikeln är starkt betonad i kontrast mot något annat (in DEM Haus da drüben, nicht in jenem).',
          'När meningen står i presens.',
          'När meningen handlar om resor.',
          'I södra Tyskland.'
        ],
        answer: 0,
        explanation: 'Vid demonstrativ betoning och kontrast måste den fulla formen skrivas ut och betonas vid uttal.',
        feedback: [
          'Rätt! Stark betoning och kontrast kräver full form.',
          'Fel. Tempus avgör inte sammandragning.',
          'Fel. Resor påverkar inte detta.',
          'Fel. Regeln gäller hela det tyska språkområdet.'
        ]
      },
      {
        id: 'p09-q5',
        context: 'Falska sammandragningar.',
        prompt: 'Vilken av följande sammandragningar existerar INTE i tysk grammatik?',
        options: [
          'zuden (zu + den i plural)',
          'zum (zu + dem)',
          'zur (zu + der)',
          'vom (von + dem)'
        ],
        answer: 0,
        explanation: 'Zu + den dras ALDRIG samman; det heter alltid "zu den Kindern" i två separata ord.',
        feedback: [
          'Rätt! *zuden existerar inte – det heter alltid zu den.',
          'Fel. zum finns (zu dem).',
          'Fel. zur finns (zu der).',
          'Fel. vom finns (von dem).'
        ]
      },
      {
        id: 'p09-q6',
        context: 'Vardagliga neutrumsammandragningar.',
        prompt: 'Vad betyder den vardagliga formen "fürs" i "Danke fürs Geschenk"?',
        options: [
          'für das (ackusativ neutrum)',
          'für den',
          'für dem',
          'für die'
        ],
        answer: 0,
        explanation: 'fürs är en mycket vanlig sammandragning av für + das.',
        feedback: [
          'Helt rätt! fürs = für das.',
          'Fel. für den dras inte samman.',
          'Fel. für styr aldrig dativ.',
          'Fel. für die dras inte samman.'
        ]
      }
    ]
  },

  // P10: Liegen/legen, stehen/stellen och sitzen/setzen
  '/docs/prepositioner/lage-och-placering': {
    lessonId: 'P10',
    href: '/docs/prepositioner/lage-och-placering',
    title: 'Snabbkoll: Liegen/legen, stehen/stellen och sitzen/setzen',
    questions: [
      {
        id: 'p10-q1',
        context: 'Skillnad mellan handling och tillstånd.',
        prompt: 'Vilket kasus krävs vid placeringsverbet "stellen" jämfört med lägesverbet "stehen"?',
        options: [
          'stellen kräver ackusativ (Wohin?); stehen kräver dativ (Wo?).',
          'stellen kräver dativ; stehen kräver ackusativ.',
          'Båda kräver alltid ackusativ.',
          'Båda kräver alltid dativ.'
        ],
        answer: 0,
        explanation: 'Handling (riktning/placering) utlöser ackusativ; tillstånd (befintlighet) utlöser dativ.',
        feedback: [
          'Rätt! stellen + ackusativ; stehen + dativ.',
          'Fel. Ordningen är omvänd.',
          'Fel. Lägesverbet stehen kan aldrig ta ackusativ med växelpreposition.',
          'Fel. Placeringsverbet stellen kan inte ta dativ vid målet.'
        ]
      },
      {
        id: 'p10-q2',
        context: 'Böjning av placeringsverb kontra lägesverb.',
        prompt: 'Hur böjs verben "legen" och "liegen" i perfekt?',
        options: [
          'legen är svagt (hat gelegt); liegen är starkt (hat gelegen).',
          'legen är starkt (hat gelegen); liegen är svagt (hat gelegt).',
          'Båda böjs svagt (hat gelegt).',
          'Båda böjs starkt (hat gelegen).'
        ],
        answer: 0,
        explanation: 'Alla placeringsverb är svaga (legte, gelegt); alla lägesverb är starka (lag, gelegen).',
        feedback: [
          'Rätt! legen/gelegt (svagt) och liegen/gelegen (starkt).',
          'Fel. Förväxling av verbens böjningstyp.',
          'Fel. Liegen är ett starkt verb.',
          'Fel. Legen är ett svagt verb.'
        ]
      },
      {
        id: 'p10-q3',
        context: 'Reflexiv användning vid människor som sätter sig.',
        prompt: 'Hur säger man korrekt till någon: "Sätt dig på stolen!" (der Stuhl)?',
        options: [
          'Setz dich auf den Stuhl! (ackusativ efter reflexiv handling)',
          'Sitz dich auf dem Stuhl!',
          'Setz dich auf dem Stuhl!',
          'Sitze auf den Stuhl!'
        ],
        answer: 0,
        explanation: 'Att sätta sig är en aktiv handling med riktning: sich setzen + auf + ackusativ (den Stuhl).',
        feedback: [
          'Rätt! Setz dich auf den Stuhl! (ackusativ).',
          'Fel. Sitzen är inte reflexivt.',
          'Fel. Handlingen kräver ackusativ (den), inte dativ.',
          'Fel. Sitzen är tillstånd och kan inte kombineras med ackusativ.'
        ]
      },
      {
        id: 'p10-q4',
        context: 'Specialfallet med verbet hängen vid handling.',
        prompt: 'Hur böjs verbet "hängen" i meningen "Igår hängde jag upp tavlan på väggen"?',
        options: [
          'hängte / hat gehängt (svagt handlingsverb med ackusativ)',
          'hing / hat gehangen (starkt lägesverb)',
          'hang / hat gehangen',
          'hängte / hat gehangen'
        ],
        answer: 0,
        explanation: 'När någon hänger upp något är verbet svagt och regelbundet: hängte, hat gehängt.',
        feedback: [
          'Rätt! svagt verb hängte/gehängt för den aktiva handlingen att hänga upp.',
          'Fel. hing/gehangen används när tavlan redan hänger på väggen (tillstånd).',
          'Fel. hang finns inte i modern tyska.',
          'Fel. Blandform som inte existerar.'
        ]
      },
      {
        id: 'p10-q5',
        context: 'Specialfallet hängen vid tillstånd.',
        prompt: 'Hur böjs hängen i "Tavlan hängde i tio år på väggen" (tillstånd)?',
        options: [
          'Das Bild hing zehn Jahre an der Wand. (starkt verb med dativ)',
          'Das Bild hängte zehn Jahre an die Wand.',
          'Das Bild hat an die Wand gehängt.',
          'Das Bild ist gehangen an die Wand.'
        ],
        answer: 0,
        explanation: 'Tillståndsverbet hängen är starkt (hing, hat gehangen) och styr dativ (an der Wand).',
        feedback: [
          'Rätt! hing + dativ an der Wand.',
          'Fel. hängte är handlingsverbet med ackusativ.',
          'Fel. gehängt är svagt och ackusativ är fel här.',
          'Fel. Hjälpverbet är normalt hat i standardtyska och kräver dativ.'
        ]
      },
      {
        id: 'p10-q6',
        context: 'Platta föremål kontra upprätta föremål.',
        prompt: 'Varför säger man att boken "liegt auf dem Tisch" men flaskan "steht auf dem Tisch"?',
        options: [
          'Flaskan står upprätt på sin botten (stehen); boken vilar platt på sin sida (liegen).',
          'För att flaskor alltid är feminina och böcker neutrala.',
          'Det är helt godtyckligt och man kan alltid byta verb.',
          'Stehen används bara i köket.'
        ],
        answer: 0,
        explanation: 'Tyskan är mycket precis: föremål med vertikal tyngdpunkt steht; platta vilande föremål liegt.',
        feedback: [
          'Helt rätt! Upprätt föremål = stehen; plant vilande = liegen.',
          'Fel. Grammatiskt genus styr inte detta.',
          'Fel. Det är absolut inte godtyckligt; att säga att en stående flaska ligger låter helt fel.',
          'Fel. Platsen har ingen betydelse.'
        ]
      }
    ]
  },

  // Y05: Mittfältet och vad som betonas
  '/docs/syntax/mittfalt-och-informationsstruktur': {
    lessonId: 'Y05',
    href: '/docs/syntax/mittfalt-och-informationsstruktur',
    title: 'Snabbkoll: Mittfältet och vad som betonas',
    questions: [
      {
        id: 'y05-q1',
        context: 'Ordföljd vid två substantivobjekt.',
        prompt: 'I vilken ordning placeras två substantiv i mittfältet (t.ex. "läraren", "boken")?',
        options: [
          'Dativ före ackusativ (Ich gebe dem Schüler das Buch).',
          'Ackusativ före dativ (Ich gebe das Buch dem Schüler).',
          'Det längsta substantivet står alltid först.',
          'Bokstavsordning avgör.'
        ],
        answer: 0,
        explanation: 'Grundregeln för två substantiv i mittfältet är: Dativobjektet kommer före Ackusativobjektet.',
        feedback: [
          'Rätt! dem Schüler (dativ) före das Buch (ackusativ).',
          'Fel. Denna ordning används bara vid starkt kontrastfokus på personen.',
          'Fel. Längden avgör inte grundordningen.',
          'Fel. Bokstavsordning har ingen roll i syntax.'
        ]
      },
      {
        id: 'y05-q2',
        context: 'Ordföljd vid två pronomenobjekt.',
        prompt: 'I vilken ordning placeras två personliga pronomen i mittfältet ("det", "honom")?',
        options: [
          'Ackusativ före dativ (Ich gebe es ihm).',
          'Dativ före ackusativ (Ich gebe ihm es).',
          'Det spelar absolut ingen roll.',
          'Verbet måste stå mellan pronomenen.'
        ],
        answer: 0,
        explanation: 'Vid två pronomen gäller den strikta omvända regeln: Ackusativ MÅSTE stå före Dativ: es ihm.',
        feedback: [
          'Rätt! es ihm – ackusativ före dativ vid två pronomen.',
          'Fel. "ihm es" är ett mycket allvarligt grammatiskt fel på tyska.',
          'Fel. Regeln är obligatorisk.',
          'Fel. Verbet bildar klammer och står inte mitt i mittfältet.'
        ]
      },
      {
        id: 'y05-q3',
        context: 'Kombination av ett pronomen och ett substantiv.',
        prompt: 'Vad gäller när ett objekt är ett pronomen och det andra ett substantiv?',
        options: [
          'Pronomenet står ALLTID först, oavsett om det är dativ eller ackusativ.',
          'Substantivet står alltid först.',
          'Dativ står alltid först oavsett ordklass.',
          'Ackusativ står alltid först oavsett ordklass.'
        ],
        answer: 0,
        explanation: 'Lätta, kända pronomen tränger sig alltid längst fram i mittfältet: "Ich gebe es dem Mann" och "Ich gebe ihm das Buch".',
        feedback: [
          'Rätt! Pronomenet vinner alltid och ställs först.',
          'Fel. Pronomen dras till vänster före substantiv.',
          'Fel. Pronomen i ackusativ går före substantiv i dativ.',
          'Fel. Pronomen i dativ går före substantiv i ackusativ.'
        ]
      },
      {
        id: 'y05-q4',
        context: 'TeKaMoLo-regeln för adverbial.',
        prompt: 'Vad står förkortningen TeKaMoLo för i tysk grammatik?',
        options: [
          'Temporal (Tid) - Kausal (Orsak) - Modal (Sätt) - Lokal (Plats)',
          'Text - Kasus - Modus - Logik',
          'Tid - Kvalitet - Mängd - Längd',
          'Tecken - Kontext - Modell - Ljud'
        ],
        answer: 0,
        explanation: 'TeKaMoLo anger adverbialens neutrala ordningsföljd: Temporal -> Kausal -> Modal -> Lokal.',
        feedback: [
          'Rätt! Temporal - Kausal - Modal - Lokal.',
          'Fel. Inget med grammatiska termer att göra.',
          'Fel. Felaktiga kategorier.',
          'Fel. Helt felaktigt.'
        ]
      },
      {
        id: 'y05-q5',
        context: 'Tillämpning av TeKaMoLo.',
        prompt: 'Vilken mening följer den mest neutrala TeKaMoLo-ordningen i mittfältet?',
        options: [
          'Ich fahre morgen (Te) wegen des Streiks (Ka) mit dem Auto (Mo) nach Berlin (Lo).',
          'Ich fahre nach Berlin morgen mit dem Auto wegen des Streiks.',
          'Ich fahre mit dem Auto wegen des Streiks nach Berlin morgen.',
          'Ich fahre wegen des Streiks nach Berlin morgen mit dem Auto.'
        ],
        answer: 0,
        explanation: 'Morgen (Te) -> wegen des Streiks (Ka) -> mit dem Auto (Mo) -> nach Berlin (Lo).',
        feedback: [
          'Rätt! Te (morgen) - Ka (wegen des Streiks) - Mo (mit dem Auto) - Lo (nach Berlin).',
          'Fel. Plats (Lo) får inte stå före tid (Te).',
          'Fel. Plats och sätt är oordnade.',
          'Fel. Bryter mot TeKaMoLo.'
        ]
      },
      {
        id: 'y05-q6',
        context: 'Informationsstruktur i mittfältet.',
        prompt: 'Var i mittfältet placeras i regel helt ny, obestämd information (Fokus/Rema)?',
        options: [
          'Så långt till höger som möjligt, precis framför den högra verbklammern.',
          'Alltid på position 1 i huvudsatsen.',
          'Alltid direkt efter det finita verbet till vänster.',
          'Mellan subjektet och hjälpverbet.'
        ],
        answer: 0,
        explanation: 'Principen om känt före nytt gör att nyckelfokus och obestämda nominalfraser placeras längst bak i mittfältet.',
        feedback: [
          'Helt rätt! Ny information placeras mot slutet av mittfältet intill slutverbet.',
          'Fel. Position 1 reserveras ofta för tema (känd utgångspunkt).',
          'Fel. Vänstra mittfältet rymmer kända pronomen och bestämda ord.',
          'Fel. Hjälpverbet står på position 2.'
        ]
      }
    ]
  },

  // Y07: Doch, ja, denn och mal
  '/docs/syntax/modalpartiklar': {
    lessonId: 'Y07',
    href: '/docs/syntax/modalpartiklar',
    title: 'Snabbkoll: Doch, ja, denn och mal',
    questions: [
      {
        id: 'y07-q1',
        context: 'Modalpartiklarnas allmänna funktion.',
        prompt: 'Vilken är huvudfunktionen hos modalpartiklar (Abtönungspartikeln) i tysk konversation?',
        options: [
          'De signalerar talarens attityd, förväntningar och sociala relation till lyssnaren.',
          'De ändrar satsens grundläggande sanningshalt från positiv till negativ.',
          'De ersätter verbböjningen i presens.',
          'De visar vilket kasus subjektet har.'
        ],
        answer: 0,
        explanation: 'Modalpartiklar nyanserar stämning och förväntningar utan att ändra propositionens fakta.',
        feedback: [
          'Rätt! De ger färg, attityd och tonfall till samtalet.',
          'Fel. De ändrar inte sanningshalten som ett inte (nicht).',
          'Fel. De ersätter inga verbformer.',
          'Fel. Kasus visas av artiklar och pronomen.'
        ]
      },
      {
        id: 'y07-q2',
        context: 'Betydelsen av doch i uppmaningar.',
        prompt: 'Vilken effekt har ordet "doch" i uppmaningen "Komm doch rein!"?',
        options: [
          'Det gör uppmaningen varm, inbjudande och vänlig ("Kom in, vetja!").',
          'Det gör uppmaningen till en sträng militär befallning.',
          'Det betyder att personen är förbjuden att komma in.',
          'Det ändrar meningen till en fråga.'
        ],
        answer: 0,
        explanation: 'Doch mjukar upp imperativ och förvandlar en rå befallning till en varm inbjudan.',
        feedback: [
          'Rätt! doch gör uppmaningen vänlig och välkomnande.',
          'Fel. Utan partiklar låter det mycket strängare.',
          'Fel. Det finns ingen negation.',
          'Fel. Satsen förblir en uppmaning.'
        ]
      },
      {
        id: 'y07-q3',
        context: 'Betydelsen av ja som modalpartikel.',
        prompt: 'Vad signalerar partikeln "ja" i utropet "Das ist ja fantastisch!"?',
        options: [
          'Överraskning och positiv häpnad över något man just upptäckt.',
          'Ett formellt svar på en fråga.',
          'Att talaren är ironisk och menar motsatsen.',
          'Att händelsen inträffade förra året.'
        ],
        answer: 0,
        explanation: 'Ja uttrycker här talarens spontana förvåning och häpnad inför något oväntat bra.',
        feedback: [
          'Rätt! ja uttrycker spontan överraskning och entusiasm.',
          'Fel. Det fungerar inte som svarsord här.',
          'Fel. Det signalerar äkta förtjusning.',
          'Fel. Tempus är presens.'
        ]
      },
      {
        id: 'y07-q4',
        context: 'Betydelsen av denn i frågor.',
        prompt: 'Varför lägger tyskar ofta till "denn" i frågor som "Wie geht es dir denn?"?',
        options: [
          'För att visa genuint personligt intresse och göra frågan varmare.',
          'För att bevisa att den andre talar osanning.',
          'För att denn betyder "eftersom".',
          'För att tysk grammatik kräver minst sex ord per fråga.'
        ],
        answer: 0,
        explanation: 'I frågor signalerar denn engagemang och empati: "Hur mår du då?".',
        feedback: [
          'Rätt! denn gör frågan mer personlig och intresserad.',
          'Fel. Det uttrycker ingen anklagelse.',
          'Fel. "Eftersom" är betydelsen som konjunktion, inte modalpartikel.',
          'Fel. Inget sådant krav finns.'
        ]
      },
      {
        id: 'y07-q5',
        context: 'Betydelsen av mal i förfrågningar.',
        prompt: 'Vad gör partikeln "mal" i meningen "Kannst du mir mal helfen?"?',
        options: [
          'Det tar bort kravet och gör hjälpen till en snabb, okomplicerad tjänst.',
          'Det betyder att personen måste hjälpa till tre gånger.',
          'Det betyder att hjälpen är förbjuden enligt lag.',
          'Det flyttar hjälpen till framtiden.'
        ],
        answer: 0,
        explanation: 'Mal mjukar upp förfrågan: "lite grann / ett ögonblick".',
        feedback: [
          'Rätt! mal gör förfrågan lättsam och opretentiös.',
          'Fel. mal som räkneord (multiplikation) är en annan ordklass.',
          'Fel. Absolut inte.',
          'Fel. Det handlar om nuet.'
        ]
      },
      {
        id: 'y07-q6',
        context: 'Betoning och placering av modalpartiklar.',
        prompt: 'Hur uttalas och placeras modalpartiklar i en tysk mening?',
        options: [
          'De är alltid obetonade och placeras i mittfältet efter pronomen och finit verb.',
          'De är alltid starkt betonade och står först i satsen.',
          'De står alltid allra sist efter slutverbet.',
          'De kan bara stå mellan två kommatecken.'
        ],
        answer: 0,
        explanation: 'En modalpartikel är alltid obetonad och bor i mittfältet. Får ordet tryck betraktas det som adverb.',
        feedback: [
          'Helt rätt! Obetonade i mittfältet.',
          'Fel. Betonade ord på plats 1 är adverb eller konjunktioner.',
          'Fel. De står i mittfältet, aldrig efter slutverbet.',
          'Fel. De sätts inte i kommatecken.'
        ]
      }
    ]
  },

  // B03: Deshalb, trotzdem, außerdem och däremellan
  '/docs/satser/sambandsadverb': {
    lessonId: 'B03',
    href: '/docs/satser/sambandsadverb',
    title: 'Snabbkoll: Deshalb, trotzdem, außerdem och däremellan',
    questions: [
      {
        id: 'b03-q1',
        context: 'Ordföljdsregel efter sambandsadverb.',
        prompt: 'Vilken ordföljd krävs när ett sambandsadverb som "deshalb" står först i meningen?',
        options: [
          'Inversion: adverbet är position 1, det finita verbet kommer direkt på position 2 (Deshalb lerne ich).',
          'Rak ordföljd: subjektet kommer direkt efter adverbet (Deshalb ich lerne).',
          'Bisatsordning: verbet flyttas allra sist (Deshalb ich viel lerne).',
          'Verbet måste stå i infinitiv.'
        ],
        answer: 0,
        explanation: 'Sambandsadverbet utgör Position 1 i en vanlig huvudsats. Verbet måste därför stå på Position 2: Deshalb lerne ich.',
        feedback: [
          'Rätt! Deshalb lerne ich – verbet på position 2.',
          'Fel. Rak ordföljd efter deshalb är ett typiskt svenskt fel.',
          'Fel. Deshalb inleder inte bisats.',
          'Fel. Verbet måste vara finit och böjt.'
        ]
      },
      {
        id: 'b03-q2',
        context: 'Jämförelse mellan weil, denn och deshalb.',
        prompt: 'Vilken mening uttrycker samma orsakssammanhang med sambandsadverbet "deshalb"?',
        options: [
          'Er will die Prüfung bestehen; deshalb lernt er viel.',
          'Er will die Prüfung bestehen, weil er viel lernt.',
          'Er lernt viel; deshalb will er die Prüfung bestehen.',
          'Deshalb will er die Prüfung bestehen, lernt er viel.'
        ],
        answer: 0,
        explanation: 'Orsaken är viljan att klara provet; följden är att han pluggar mycket: Deshalb lernt er viel.',
        feedback: [
          'Rätt! Orsak -> följd med deshalb + finit verb.',
          'Fel. Weil vänder på orsakssambandet felaktigt här.',
          'Fel. Det gör pluggandet till orsak för viljan att klara provet.',
          'Fel. Förvanskad meningsbyggnad.'
        ]
      },
      {
        id: 'b03-q3',
        context: 'Ordföljd med trotzdem.',
        prompt: 'Hur fortsätter meningen: "Es regnete in Strömen; ___"?',
        options: [
          'trotzdem gingen wir spazieren. (inversion med finit verb på plats 2)',
          'trotzdem wir gingen spazieren.',
          'trotzdem wir spazieren gingen.',
          'trotzdem spazieren gingen wir.'
        ],
        answer: 0,
        explanation: 'Trotzdem är Position 1 -> gingen (finit verb) är Position 2 -> wir (subjekt).',
        feedback: [
          'Rätt! trotzdem gingen wir – verbet omedelbart på plats 2.',
          'Fel. Rak ordföljd är felaktig.',
          'Fel. Bisatsordning är felaktig.',
          'Fel. Felaktig verbplacering.'
        ]
      },
      {
        id: 'b03-q4',
        context: 'Skillnad mellan konjunktionen aber och adverbet trotzdem.',
        prompt: 'Vilken skillnad i ordföljd är det mellan "aber" och "trotzdem"?',
        options: [
          '"aber" har position 0 (nollplats), medan "trotzdem" tar position 1 och kräver inversion.',
          '"aber" styr bisats med verbet sist.',
          '"trotzdem" har position 0 precis som aber.',
          'Det finns ingen ordföljdsskillnad alls.'
        ],
        answer: 0,
        explanation: 'Aber är en samordnande konjunktion (Pos. 0: aber er ging). Trotzdem är ett adverb (Pos. 1: trotzdem ging er).',
        feedback: [
          'Rätt! aber = nollplats (aber er ging); trotzdem = pos. 1 (trotzdem ging er).',
          'Fel. aber inleder inte bisats.',
          'Fel. trotzdem tar upp en satsdelsposition.',
          'Fel. Ordföljden skiljer sig markant.'
        ]
      },
      {
        id: 'b03-q5',
        context: 'Sambandsadverb i mittfältet.',
        prompt: 'Kan ett sambandsadverb som "trotzdem" eller "deshalb" flyttas in i mittfältet?',
        options: [
          'Ja: "Wir gingen trotzdem spazieren" och "Ich habe dich deshalb angerufen".',
          'Nej, de måste ovillkorligen stå allra först i meningen.',
          'Bara om meningen är en fråga.',
          'Bara i passiva satser.'
        ],
        answer: 0,
        explanation: 'Eftersom de är vanliga adverbial kan de ledigt placeras i mittfältet efter det finita verbet.',
        feedback: [
          'Rätt! De kan stå på position 1 eller flyttas in i mittfältet.',
          'Fel. De är inte låsta till position 1.',
          'Fel. Gäller alla påståendesatser.',
          'Fel. Diatesen spelar ingen roll.'
        ]
      },
      {
        id: 'b03-q6',
        context: 'Betydelsen av außerdem.',
        prompt: 'Vad betyder sambandsadverbet "außerdem" i "Sie spricht Deutsch; außerdem lernt sie Spanisch"?',
        options: [
          'dessutom / därtill (tillägg)',
          'därför (orsak)',
          'ändå (kontrast)',
          'istället (alternativ)'
        ],
        answer: 0,
        explanation: 'Außerdem betyder dessutom/därtill och lägger till ytterligare information.',
        feedback: [
          'Helt rätt! außerdem = dessutom.',
          'Fel. Därför heter deshalb.',
          'Fel. Ändå heter trotzdem.',
          'Fel. Istället heter stattdessen.'
        ]
      }
    ]
  },

  // B06: Um … zu, damit, ohne … zu och anstatt … zu
  '/docs/satser/avsikt-och-infinitivsatser': {
    lessonId: 'B06',
    href: '/docs/satser/avsikt-och-infinitivsatser',
    title: 'Snabbkoll: Um … zu, damit, ohne … zu och anstatt … zu',
    questions: [
      {
        id: 'b06-q1',
        context: 'Val mellan um ... zu och damit vid subjektsrelation.',
        prompt: 'När MÅSTE man välja "damit" i stället för "um ... zu"?',
        options: [
          'När huvudsatsen och bisatsen har olika subjekt (t.ex. Ich helfe dir, damit du bestehst).',
          'När subjekten är exakt desamma.',
          'När meningen står i dåtid.',
          'När verbet är regelbundet.'
        ],
        answer: 0,
        explanation: 'Um ... zu kräver identiskt subjekt. Har satserna olika subjekt är damit obligatoriskt.',
        feedback: [
          'Rätt! Olika subjekt kräver konjunktionen damit.',
          'Fel. Samma subjekt tillåter um ... zu.',
          'Fel. Tempus avgör inte valet.',
          'Fel. Verbböjningen påverkar inte konjunktionsvalet.'
        ]
      },
      {
        id: 'b06-q2',
        context: 'Placering av zu vid partikelverb.',
        prompt: 'Hur skrivs "för att stiga upp tidigt" med partikelverbet aufstehen?',
        options: [
          'um früh aufzustehen (zu skjuts in mellan prefix och stam)',
          'um früh zu aufstehen',
          'um früh aufstehen zu',
          'um früh zu aufgestanden'
        ],
        answer: 0,
        explanation: 'Vid partikelverb skjuts zu in mellan prefixet och stammen i ett sammanhängande ord: auf-zu-stehen.',
        feedback: [
          'Rätt! aufzustehen i ett ord.',
          'Fel. Särskrivning med zu framför prefixet är felaktig.',
          'Fel. zu efter hela verbet är felaktigt.',
          'Fel. Kräver infinitiv, inte particip.'
        ]
      },
      {
        id: 'b06-q3',
        context: 'Verbböjning och placering i damit-satser.',
        prompt: 'Vilken ordföljd gäller i en damit-sats ("Ich gebe dir Geld, ___")?',
        options: [
          'damit du dir ein Buch kaufen kannst. (finit verb allra sist)',
          'damit du kannst ein Buch kaufen.',
          'damit kannst du ein Buch kaufen.',
          'damit ein Buch du kaufen kannst.'
        ],
        answer: 0,
        explanation: 'Damit är en underordnande konjunktion (subjunktion) &rarr; det finita verbet hamnar allra sist i bisatsen.',
        feedback: [
          'Rätt! Bisatsordning med det finita verbet kannst allra sist.',
          'Fel. Finit verb får inte stå på position 2 efter damit.',
          'Fel. Inversion är felaktigt efter damit.',
          'Fel. Objektet hör hemma efter subjektet i mittfältet.'
        ]
      },
      {
        id: 'b06-q4',
        context: 'Betydelsen av ohne ... zu.',
        prompt: 'Vad betyder meningen: "Er ging hinaus, ohne mich anzusehen"?',
        options: [
          'Han gick ut utan att titta på mig.',
          'Han gick ut för att titta på mig.',
          'Han gick ut istället för att titta på mig.',
          'Han gick ut trots att han tittade på mig.'
        ],
        answer: 0,
        explanation: 'Ohne ... zu betyder "utan att göra något". Anzusehen har inskjutet zu i partikelverbet ansehen.',
        feedback: [
          'Rätt! utan att titta på mig.',
          'Fel. "För att" vore um ... zu.',
          'Fel. "Istället för att" vore anstatt ... zu.',
          'Fel. "Trots att" vore obwohl.'
        ]
      },
      {
        id: 'b06-q5',
        context: 'Ohne dass vid olika subjekt.',
        prompt: 'Hur uttrycks "Han smet ut utan att läraren märkte det" (olika subjekt)?',
        options: [
          'Er schlich hinaus, ohne dass der Lehrer es bemerkte.',
          'Er schlich hinaus, ohne der Lehrer es zu bemerken.',
          'Er schlich hinaus, um nicht der Lehrer es bemerkte.',
          'Er schlich hinaus, anstatt der Lehrer es bemerkte.'
        ],
        answer: 0,
        explanation: 'När subjekten är olika (han vs läraren) används ohne dass + finit bisats.',
        feedback: [
          'Rätt! ohne dass vid olika subjekt.',
          'Fel. ohne ... zu kan inte ha ett separat subjekt.',
          'Fel. Felaktig konstruktion.',
          'Fel. anstatt betyder istället för.'
        ]
      },
      {
        id: 'b06-q6',
        context: 'Kommatering vid um ... zu.',
        prompt: 'Måste en infinitivgrupp med "um ... zu" avgränsas med kommatecken i modern tysk skrift?',
        options: [
          'Ja, kommatecken är obligatoriskt framför infinitivgrupper med um zu, ohne zu och anstatt zu.',
          'Nej, kommatecken är förbjudet vid infinitiver.',
          'Bara om infinitivsatsen har fler än tjugo ord.',
          'Bara om meningen slutar med utropstecken.'
        ],
        answer: 0,
        explanation: 'Infinitivgrupper som inleds med um, ohne, statt, anstatt eller styrs av ett korrelat avgränsas alltid med komma.',
        feedback: [
          'Helt rätt! Komma är obligatoriskt vid um/ohne/anstatt zu.',
          'Fel. Kommatecken är obligatoriskt här.',
          'Fel. Ordräkning avgör ingenting.',
          'Fel. Skiljetecknet i slutet påverkar inte kommat.'
        ]
      }
    ]
  },

  // B07: Wenn, falls, obwohl och als ob
  '/docs/satser/villkor-och-medgivande': {
    lessonId: 'B07',
    href: '/docs/satser/villkor-och-medgivande',
    title: 'Snabbkoll: Wenn, falls, obwohl och als ob',
    questions: [
      {
        id: 'b07-q1',
        context: 'Den svenska "om"-fällan.',
        prompt: 'Hur översätts "Jag vet inte om han kommer" korrekt till tyska?',
        options: [
          'Ich weiß nicht, ob er kommt. (ob för indirekt fråga)',
          'Ich weiß nicht, wenn er kommt.',
          'Ich weiß nicht, falls er kommt.',
          'Ich weiß nicht, wie er kommt.'
        ],
        answer: 0,
        explanation: 'Indirekta ja/nej-frågor kräver alltid ob. Wenn och falls används bara för villkor (ifall)!',
        feedback: [
          'Rätt! ob används i indirekta frågor.',
          'Fel. "wenn er kommt" betyder "när han kommer" här.',
          'Fel. falls uttrycker villkor, inte indirekt fråga.',
          'Fel. wie betyder hur.'
        ]
      },
      {
        id: 'b07-q2',
        context: 'Konditionalsats utan wenn (V1-sats).',
        prompt: 'Hur kan meningen "Wenn ich mehr Zeit hätte, käme ich mit" omformuleras utan "wenn"?',
        options: [
          'Hätte ich mehr Zeit, käme ich mit. (verbet på position 1)',
          'Ich hätte mehr Zeit, käme ich mit.',
          'Mehr Zeit hätte ich, käme ich mit.',
          'Käme ich mit, hätte ich mehr Zeit.'
        ],
        answer: 0,
        explanation: 'Slopas wenn sätts det finita verbet allra först i satsen: Hätte ich mehr Zeit... (V1-konditionalsats).',
        feedback: [
          'Rätt! Hätte ich mehr Zeit... – mycket elegant V1-struktur.',
          'Fel. Saknar V1-markeringen för villkor.',
          'Fel. Felaktig struktur.',
          'Fel. Byter plats på villkor och följd.'
        ]
      },
      {
        id: 'b07-q3',
        context: 'Medgivande med obwohl.',
        prompt: 'Vilken ordföljd gäller efter konjunktionen "obwohl" ("Fastän han var sjuk, ___")?',
        options: [
          'Obwohl er krank war, ging er zur Arbeit. (verb sist i obwohl-satsen; huvudsatsen inleds med finit verb)',
          'Obwohl war er krank, ging er zur Arbeit.',
          'Obwohl er war krank, ging er zur Arbeit.',
          'Obwohl er krank war, er ging zur Arbeit.'
        ],
        answer: 0,
        explanation: 'Obwohl är en underordnande konjunktion (verb sist). Huvudsatsen inleds direkt med finit verb (ging er).',
        feedback: [
          'Rätt! Obwohl er krank war, ging er...',
          'Fel. Verbet får inte stå först i obwohl-satsen.',
          'Fel. Verbet måste stå allra sist i bisatsen.',
          'Fel. Huvudsatsen kräver inversion (ging er, inte er ging).'
        ]
      },
      {
        id: 'b07-q4',
        context: 'Hypotetisk jämförelse med als ob.',
        prompt: 'Vilket modus krävs i regeln efter "als ob" i "Han låtsas som om han visste allt"?',
        options: [
          'Konjunktiv II: Er tut so, als ob er alles wüsste (eller wissen würde).',
          'Indikativ presens: Er tut so, als ob er alles weiß.',
          'Imperativ.',
          'Futur II.'
        ],
        answer: 0,
        explanation: 'Als ob uttrycker en hypotetisk, icke-verklig jämförelse och kräver Konjunktiv II: als ob er alles wüsste.',
        feedback: [
          'Rätt! als ob kräver Konjunktiv II.',
          'Fel. Indikativ är stilistiskt bristfälligt vid als ob.',
          'Fel. Imperativ är uppmaningsform.',
          'Fel. Futur II krävs inte här.'
        ]
      },
      {
        id: 'b07-q5',
        context: 'Alternativ till als ob (als + V1).',
        prompt: 'Hur kan "Er tut so, als ob er der Chef wäre" förkortas med bara "als"?',
        options: [
          'Er tut so, als wäre er der Chef. (verbet direkt efter als)',
          'Er tut so, als er wäre der Chef.',
          'Er tut so, als er der Chef wäre.',
          'Er tut so, als der Chef wäre er.'
        ],
        answer: 0,
        explanation: 'När ob slopas flyttas verbet fram direkt efter als: als wäre er der Chef (V1 i förhållande till subjektet).',
        feedback: [
          'Rätt! als wäre er der Chef.',
          'Fel. Verbet måste komma direkt efter als.',
          'Fel. Detta är felaktig ordföljd utan ob.',
          'Fel. Subjektet ska följa direkt efter verbet.'
        ]
      },
      {
        id: 'b07-q6',
        context: 'Skillnad mellan wenn och falls.',
        prompt: 'Vad är skillnaden i nyans mellan "wenn" och "falls"?',
        options: [
          '"falls" betonar starkare osäkerhet och ren hypotetisk eventualitet ("i händelse av att").',
          '"falls" kan betyda "när" i tidsuttryck.',
          '"falls" styr genitiv, medan "wenn" styr dativ.',
          'Det finns ingen skillnad; falls kan bara användas i Schweiz.'
        ],
        answer: 0,
        explanation: 'Falls betonar en osäker förutsättning ("om utifall att") och kan aldrig betyda "när", till skillnad från wenn.',
        feedback: [
          'Helt rätt! falls = i händelse av att (rent villkor med högre osäkerhet).',
          'Fel. falls kan ALDRIG betyda när (det kan bara wenn/als).',
          'Fel. Konjunktioner styr inte kasus på substantiv.',
          'Fel. falls används i hela det tyska språkområdet.'
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
for (const [key, val] of Object.entries(g1eQuizzes)) {
  toInsert += `  '${key}': ${JSON.stringify(val, null, 4).replace(/\n/g, '\n  ')},\n\n`;
}

const updated = content.slice(0, lastIndex) + toInsert + content.slice(lastIndex);
fs.writeFileSync('data/learning-quizzes.ts', updated, 'utf8');
console.log("Lade till 6 frågor för alla 10 lektioner i Grupp 1E i data/learning-quizzes.ts!");
