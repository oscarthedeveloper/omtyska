import fs from 'fs';

const filePath = '/Users/oscarpagerup/Desktop/Git Repo/Om-Tyska/data/learning-quizzes.ts';
let content = fs.readFileSync(filePath, 'utf8');

const mer2Quizzes = `  '/mer/passivalternativ': {
    "lessonId": "E07",
    "href": "/mer/passivalternativ",
    "title": "Snabbkoll: Passivalternativ och passiviska uttryck",
    "questions": [
      {
        "id": "e07-q1",
        "context": "Alternativ med man.",
        "prompt": "Hur fungerar pronomenet *man* som passiversättning i tysk sakprosa?",
        "options": [
          "Det används med aktivt verb i 3:e person singular för att förmedla en opersonlig, allmängiltig handling (*'Man sagt, dass...'*).",
          "Det kan enbart användas i dåtid.",
          "Det kräver alltid hjälpverbet werden.",
          "Det används bara om män."
        ],
        "answer": 0,
        "explanation": "'Man' motsvarar svenskans 'man' eller 'en' och gör att handlingen kan uttryckas aktivt utan att namnge en specifik aktör.",
        "feedback": [
          "Korrekt! 'Man' + aktivt verb är den vanligaste lediga passiversättningen.",
          "Fel. Man böjs i alla tempus (man sagt, man sagte, man hat gesagt).",
          "Fel. Werden bildar vanligt passiv; man tar aktiva verb.",
          "Fel. Man är könsneutralt och syftar på människor i allmänhet."
        ]
      },
      {
        "id": "e07-q2",
        "context": "Reflexiv passiversättning med sich lassen.",
        "prompt": "Vad betyder meningen \\"Das Manuskript lässt sich leicht lesen\\"? ",
        "options": [
          "Manuskriptet kan lätt läsas / är lättläst (möjlighetsmodalitet).",
          "Manuskriptet läser sig självt.",
          "Manuskriptet vägrar att bli läst.",
          "Manuskriptet måste skrivas om."
        ],
        "answer": 0,
        "explanation": "'Sich lassen + Infinitiv' uttrycker en passiv möjlighet motsvarande 'kann gelesen werden'.",
        "feedback": [
          "Korrekt! Konstruktionen uttrycker modal passivitet: 'kan läsas'.",
          "Fel. Böcker och manuskript kan inte läsa sig själva.",
          "Fel. Ingen motvilja uttrycks här.",
          "Fel. Inget påbud om omskrivning finns i meningen."
        ]
      },
      {
        "id": "e07-q3",
        "context": "Pliktkonstruktionen sein + zu + Infinitiv.",
        "prompt": "Vilken modal innebörd har konstruktionen i: \\"Die Rechnung ist sofort zu begleichen\\"? ",
        "options": [
          "Räkningen MÅSTE betalas omedelbart (tvingande plikt / müssen).",
          "Räkningen har redan betalats.",
          "Det är förbjudet att betala räkningen.",
          "Räkningen kan betalas om man vill."
        ],
        "answer": 0,
        "explanation": "'Sein + zu + Infinitiv' i myndighets- och affärstext uttrycker obligatorisk plikt motsvarande 'muss beglichen werden'.",
        "feedback": [
          "Korrekt! Sein + zu + infinitiv uttrycker tvingande passiv plikt.",
          "Fel. Handlingen är ännu inte utförd.",
          "Fel. Det är ett krav på betalning, inte ett förbud.",
          "Fel. Konstruktionen är inte frivillig."
        ]
      },
      {
        "id": "e07-q4",
        "context": "Adjektiv på -bar och -lich.",
        "prompt": "Hur fungerar adjektiv som *machbar, sichtbar, verständlich* som passiversättning?",
        "options": [
          "De uttrycker att något 'kan göras', 'kan ses' eller 'kan förstås' (möjlighetspassiv).",
          "De anger att handlingen är fullbordad.",
          "De ersätter subjektet i huvudsatsen.",
          "De kan endast användas i komparativ."
        ],
        "answer": 0,
        "explanation": "Dessa adjektivsuffix bär en inbyggd passiv-modal betydelse (potentialis/möjlighet).",
        "feedback": [
          "Korrekt! Suffixen -bar och -lich uttrycker potentiell passivitet.",
          "Fel. Fullbordad handling uttrycks med perfektparticip.",
          "Fel. De fungerar som predikativ eller attribut, inte subjekt.",
          "Fel. De kan böjas i alla komparationsgrader."
        ]
      },
      {
        "id": "e07-q5",
        "context": "Rezipientenpassiv med gehören.",
        "prompt": "Vad innebär den talspråkliga eller idiomatiska passivkonstruktionen med *gehören* i: \\"Das gehört bestraft\\"? ",
        "options": [
          "Det förtjänar / borde straffas (nödvändighet/bör).",
          "Det tillhör en straffad person.",
          "Det har redan bestraffats i rätten.",
          "Det är helt lagligt."
        ],
        "answer": 0,
        "explanation": "'Gehören + Partizip II' är en vardaglig passiversättning som uttrycker att något borde göras (motsvarar 'sollte bestraft werden').",
        "feedback": [
          "Korrekt! Uttrycker att något förtjänar eller borde åtgärdas.",
          "Fel. Gehören har här inte betydelsen av ägande.",
          "Fel. Det uttrycker talarens normkrav, inte att domen redan fallit.",
          "Fel. Meningen förutsätter att handlingen var felaktig."
        ]
      },
      {
        "id": "e07-q6",
        "context": "Stilistiskt val vid passivalternativ.",
        "prompt": "Varför väljer en författare ofta passivalternativ framför regelrätt werden-passiv?",
        "options": [
          "För att variera texten stilistiskt och undvika monoton upprepning av hjälpverbet werden.",
          "Eftersom werden är förbjudet i modern tyska.",
          "För att verka mer osäker på sitt budskap.",
          "För att spara bläck."
        ],
        "answer": 0,
        "explanation": "Överanvändning av werden kan göra texten monoton och tung; passivalternativen ger elegant stilistisk variation.",
        "feedback": [
          "Korrekt! Stilistisk variation och dynamik är den främsta motiveringen.",
          "Fel. Werden är ett av tyskans mest centrala hjälpverb.",
          "Fel. Rätt valda passivalternativ ökar sakligheten och precisionen.",
          "Fel. Typografisk ekonomi är inte den lingvistiska förklaringen."
        ]
      }
    ]
  },
  '/mer/particip-som-attribut': {
    "lessonId": "E08",
    "href": "/mer/particip-som-attribut",
    "title": "Snabbkoll: Particip som attribut",
    "questions": [
      {
        "id": "e08-q1",
        "context": "Partizip I som attribut.",
        "prompt": "Vad uttrycker presensparticipet (*Partizip I*) när det används attributivt som i: \\"das schlafende Kind\\"? ",
        "options": [
          "En pågående, aktiv handling i samtidighet: barnet som sover.",
          "En avslutad handling i förfluten tid.",
          "Ett förbud mot att sova.",
          "En framtida önskan."
        ],
        "answer": 0,
        "explanation": "Partizip I (stam + -end + böjningsändelse) är alltid aktivt och uttrycker pågående process.",
        "feedback": [
          "Korrekt! Partizip I uttrycker pågående aktiv handling (presens/samtidighet).",
          "Fel. Avslutad dåtidshandling uttrycks med Partizip II.",
          "Fel. Participet innehåller inget förbud.",
          "Fel. Det beskriver ett faktiskt pågående tillstånd."
        ]
      },
      {
        "id": "e08-q2",
        "context": "Partizip II av transitiva verb.",
        "prompt": "Vad uttrycker perfektparticipet (*Partizip II*) vid transitiva verb som i: \\"das reparierte Auto\\"? ",
        "options": [
          "Ett passivt och avslutat resultat: bilen som har blivit reparerad.",
          "En aktiv handling som pågår just nu.",
          "En bil som vägrar att starta.",
          "En önskan om att köpa bil."
        ],
        "answer": 0,
        "explanation": "Partizip II av transitiva verb är passivt och resulterande (det har reparerats av någon).",
        "feedback": [
          "Korrekt! Passivt och avslutat resultat efter en transitiv process.",
          "Fel. Aktiv nutidshandling uttrycks med Partizip I (das reparierende Auto vore bilen som själv reparerar något).",
          "Fel. Handlingen är tvärtom lyckosamt avslutad.",
          "Fel. Ingen köpönskan uttrycks."
        ]
      },
      {
        "id": "e08-q3",
        "context": "Partizip II av intransitiva verb med sein.",
        "prompt": "Vad betyder konstruktionen i: \\"der abgefahrene Zug\\"? ",
        "options": [
          "Tåget som har avgått (aktivt men avslutat skeende med rörelseverb som tar sein).",
          "Tåget som har blivit avgånget av konduktören.",
          "Ett tåg som står stilla på perrongen.",
          "Ett tåg som är trasigt."
        ],
        "answer": 0,
        "explanation": "Intransitiva rörelse- och förändringsverb med sein bildar Partizip II med aktiv och avslutad betydelse.",
        "feedback": [
          "Korrekt! Aktivt och perfektiverat skeende hos intransitivt verb med sein.",
          "Fel. Abfahren är intransitivt och har ingen passiv agent.",
          "Fel. Tåget har redan lämnat stationen.",
          "Fel. Ingen skada avses (i bokstavlig mening)."
        ]
      },
      {
        "id": "e08-q4",
        "context": "Utvidgad participkedja (Erweitertes Partizip).",
        "prompt": "Hur avkodar man en tysk utvidgad participfras som: \\"die gestern vom Vorstand beschlossenen Maßnahmen\\"? ",
        "options": [
          "Man identifierar artikeln (die) och huvudsubstantivet (Maßnahmen) som en ram, och läser mellanliggande adverb och particip som bestämningar.",
          "Man läser orden baklänges från höger till vänster.",
          "Man översätter enbart verbet i presens.",
          "Man stryker alla ord mellan kommatecknen."
        ],
        "answer": 0,
        "explanation": "Tyskans klammerstruktur omsluter alla komplement mellan artikeln och substantivet: [die ... Maßnahmen].",
        "feedback": [
          "Korrekt! Klammerstrukturen binder samman hela attributfrasen framför substantivet.",
          "Fel. Tyska läses från vänster till höger med stöd av klammerprincipen.",
          "Fel. Participet är dåtid/passivt.",
          "Fel. Inga kommatecken finns inne i en sluten nominalfras."
        ]
      },
      {
        "id": "e08-q5",
        "context": "Gerundiv med zu + presensparticip.",
        "prompt": "Vad betyder meningen \\"Das ist ein nicht zu unterschätzendes Risiko\\"? ",
        "options": [
          "Detta är en risk som inte får / kan underskattas (passiv nödvändighet/möjlighet).",
          "Detta är en risk som redan har underskattats.",
          "Det finns ingen risk alls.",
          "Risken är obetydlig."
        ],
        "answer": 0,
        "explanation": "Zu + Partizip I fungerar som gerundiv och uttrycker att något måste eller kan göras.",
        "feedback": [
          "Korrekt! Modal passiv innebörd: 'en risk som inte får underskattas'.",
          "Fel. Det handlar om framtida hänsyn, inte ett redan begånget misstag.",
          "Fel. Risken är tvärtom högst påtaglig och allvarlig.",
          "Fel. Betydelsen är den rakt motsatta: risken är betydande."
        ]
      },
      {
        "id": "e08-q6",
        "context": "Böjning av particip som attribut.",
        "prompt": "Vilka böjningsändelser tar particip när de står attributivt före ett substantiv?",
        "options": [
          "Exakt samma ändelser som vanliga adjektiv (svag, stark och blandad adjektivböjning).",
          "De böjs aldrig, utan slutar alltid på -en.",
          "De tar samma ändelser som finita verb (-e, -st, -t).",
          "De böjs enbart i plural."
        ],
        "answer": 0,
        "explanation": "Attributiva particip integreras fullt ut i adjektivens böjningssystem och tar stark, svag eller blandad ändelse.",
        "feedback": [
          "Korrekt! Particip följer adjektivböjningens alla regler till 100 %.",
          "Fel. Oböjda particip förekommer endast som adverb eller i predikativ ställning.",
          "Fel. De tar adjektivändelser, inte personändelser för verb.",
          "Fel. De böjs i både singular och plural i alla fyra kasus."
        ]
      }
    ]
  },
  '/mer/tyska-i-tyskland-osterrike-schweiz': {
    "lessonId": "E09",
    "href": "/mer/tyska-i-tyskland-osterrike-schweiz",
    "title": "Snabbkoll: Tyska i Tyskland, Österrike och Schweiz",
    "questions": [
      {
        "id": "e09-q1",
        "context": "Pluricentrisk standard.",
        "prompt": "Vad menas med att tyska är ett 'pluricentriskt' språk?",
        "options": [
          "Att det har flera officiella nationella standardcentra (Tyskland, Österrike, Schweiz) med egna likaberättigade normer.",
          "Att språket styrs centralt från en myndighet i Berlin.",
          "Att språket endast talas i ett enda land.",
          "Att alla dialekter är officiella språk i EU."
        ],
        "answer": 0,
        "explanation": "Tyska har tre nationella huvudvarieteter: Bundesdeutsch, Österreichisches Deutsch och Schweizer Hochdeutsch.",
        "feedback": [
          "Korrekt! Tyskland, Österrike och Schweiz är likvärdiga standardcentrum.",
          "Fel. Det finns inget gemensamt centralt språkdepartement i Berlin.",
          "Fel. Tyska är officiellt i sex europeiska länder.",
          "Fel. Dialekter är talspråk utan allmän EU-status."
        ]
      },
      {
        "id": "e09-q2",
        "context": "Bokstaven ß i Schweiz.",
        "prompt": "Vilken ortografisk regel gäller för bokstaven *ß* i Schweiz och Liechtenstein?",
        "options": [
          "Den används inte alls; alla ord stavas med dubbel-s (*ss*).",
          "Den är obligatorisk i alla ord som slutar på konsonant.",
          "Den ersätts alltid med bokstaven z.",
          "Den används enbart i tidningar men inte i skolan."
        ],
        "answer": 0,
        "explanation": "Schweiz och Liechtenstein avskaffade ß officiellt under 1930-talet; ss används genomgående.",
        "feedback": [
          "Korrekt! I Schweiz används konsekvent 'ss' istället för 'ß'.",
          "Fel. ß förekommer inte på schweiziska tangentbord.",
          "Fel. Z ersätter inte s-ljud på det viset.",
          "Fel. Avskaffandet är fullständigt i alla schweiziska domäner."
        ]
      },
      {
        "id": "e09-q3",
        "context": "Österrikiska ord (Austriazismer).",
        "prompt": "Vad betyder det österrikiska ordet *die Semmel*?",
        "options": [
          "Ett småfranska / rundstycke (motsvarande Tysklands *das Brötchen*).",
          "En sorts tårta med marsipan.",
          "En kopp kaffe med grädde.",
          "En gaffel."
        ],
        "answer": 0,
        "explanation": "Semmel är det österrikiska standardordet för småfranska / kuvertbröd.",
        "feedback": [
          "Korrekt! Semmel är den etablerade österrikiska motsvarigheten till Brötchen.",
          "Fel. Bakverk heter t.ex. Torte, Krapfen.",
          "Fel. Kaffe i Wien har många namn (Melange, Einspänner) men inte Semmel.",
          "Fel. Gaffel heter Gabel."
        ]
      },
      {
        "id": "e09-q4",
        "context": "Schweiziska ord (Helvetismer).",
        "prompt": "Vad kallas mobiltelefonen i officiellt schweiziskt språkbruk och vardag?",
        "options": [
          "das Natel",
          "das Handy",
          "das Mobilfunkgerät",
          "das Telefonchen"
        ],
        "answer": 0,
        "explanation": "Natel (ursprungligen en förkortning för Nationales Autotelefonnetz) är det klassiska schweiziska ordet för mobiltelefon.",
        "feedback": [
          "Korrekt! 'das Natel' är en berömd och officiell helvetism.",
          "Fel. 'das Handy' är normen i Tyskland och Österrike.",
          "Fel. Det är en formell teknisk term, inte vardagsordet i Schweiz.",
          "Fel. Ordet finns inte i etablerat bruk."
        ]
      },
      {
        "id": "e09-q5",
        "context": "Hjälpverbsval i Österrike och Schweiz.",
        "prompt": "Hur böjs *liegen* i perfekt i österrikisk och bayersk standardnorm?",
        "options": [
          "er ist gelegen",
          "er hat gelegen",
          "er wird gelegen",
          "er tut liegen"
        ],
        "answer": 0,
        "explanation": "Positionsverben stehen, liegen, sitzen bildar perfekt med sein i södra språkområdet.",
        "feedback": [
          "Korrekt! 'ist gelegen' är officiell standard i Österrike, Schweiz och södra Tyskland.",
          "Fel. 'hat gelegen' är normen i norra och mellersta Tyskland.",
          "Fel. Werden bildar passiv eller futurum.",
          "Fel. Tun är en talspråklig omskrivningsform som inte ingår i standarden."
        ]
      },
      {
        "id": "e09-q6",
        "context": "Hälsningsfraser.",
        "prompt": "Vilken hälsningsfras är typisk och standardmässig i södra Tyskland och Österrike?",
        "options": [
          "Grüß Gott!",
          "Moin!",
          "Tach auch!",
          "Glückauf!"
        ],
        "answer": 0,
        "explanation": "Grüß Gott är den traditionella och formellt respekterade hälsningsfrasen i Oberdeutsch (Bayern och Österrike).",
        "feedback": [
          "Korrekt! 'Grüß Gott' är standard i Bayern och Österrike (även 'Grüezi' i Schweiz).",
          "Fel. 'Moin' är typiskt för norra Tyskland.",
          "Fel. 'Tach' är vardagligt i Ruhrområdet och Berlin.",
          "Fel. 'Glückauf' är gruvarbetarhälsning i bergslagen."
        ]
      }
    ]
  },
  '/mer/svenska-fallgropar-och-falska-vanner': {
    "lessonId": "E10",
    "href": "/mer/svenska-fallgropar-och-falska-vanner",
    "title": "Snabbkoll: Svenska fallgropar och falska vänner",
    "questions": [
      {
        "id": "e10-q1",
        "context": "Falsk vän: bekommen.",
        "prompt": "Vad betyder tyskans *bekommen*?",
        "options": [
          "att få / att erhålla.",
          "att bli.",
          "att komma fram.",
          "att trivas."
        ],
        "answer": 0,
        "explanation": "Bekommen betyder 'få/erhålla'. Att bli heter werden på tyska!",
        "feedback": [
          "Korrekt! Bekommen = få/erhålla. Den vanligaste fällan för svenskar!",
          "Fel. 'Att bli' heter werden på tyska.",
          "Fel. Att komma fram heter ankommen.",
          "Fel. Att trivas heter sich wohlfühlen."
        ]
      },
      {
        "id": "e10-q2",
        "context": "Falsk vän: menen.",
        "prompt": "Hur översätts tyskans *meinen* bäst till svenska i de flesta sammanhang?",
        "options": [
          "anse / tycka / mena.",
          "ha som avsikt / planera.",
          "betyda.",
          "påstå osanning."
        ],
        "answer": 0,
        "explanation": "'Meinen' betyder anse eller tycka ('Was meinst du dazu?'). 'Att ha som avsikt' heter beabsichtigen/vorhaben.",
        "feedback": [
          "Korrekt! Meinen = tycka / anse / syfta på.",
          "Fel. Planera/ha för avsikt heter vorhaben.",
          "Fel. 'Betyda' om ord heter bedeuten.",
          "Fel. Ljuga heter lügen."
        ]
      },
      {
        "id": "e10-q3",
        "context": "Falsk vän: artig.",
        "prompt": "Vad betyder det tyska adjektivet *artig* (om t.ex. ett barn)?",
        "options": [
          "lydig / väluppfostrad.",
          "artig / hövlig mot vuxna.",
          "konstnärlig.",
          "konstig."
        ],
        "answer": 0,
        "explanation": "Artig betyder snäll och lydig (om barn och djur). Svenskans 'hövlig/artig' heter höflich på tyska!",
        "feedback": [
          "Korrekt! Artig = snäll / lydig. Svenskans artig heter 'höflich'.",
          "Fel. Hövlig/artig i svensk mening heter höflich.",
          "Fel. Konstnärlig heter künstlerisch.",
          "Fel. Konstig heter komisch/seltsam."
        ]
      },
      {
        "id": "e10-q4",
        "context": "Falsk vän: öl.",
        "prompt": "Vad betyder tyskans substantiv *das Öl*?",
        "options": [
          "olja (matolja eller motorolja).",
          "öl (drycken).",
          "en ö i havet.",
          "en sorts lök."
        ],
        "answer": 0,
        "explanation": "Das Öl är olja! Svenskans öl (drycken) heter das Bier.",
        "feedback": [
          "Korrekt! Das Öl = olja. Svenskt öl heter das Bier.",
          "Fel. Drycken öl heter das Bier på tyska.",
          "Fel. En ö heter die Insel.",
          "Fel. Lök heter die Zwiebel."
        ]
      },
      {
        "id": "e10-q5",
        "context": "Ordföljdsfälla: huvudsatsens adverbial.",
        "prompt": "Var placeras tidsadverbialet i en tysk huvudsats som börjar med subjektet: \\"Wir fahren [...] nach Berlin\\"? ",
        "options": [
          "morgen (omedelbart efter det finita verbet i mittfältet).",
          "mellan subjektet och verbet (*Wir morgen fahren*).",
          "allra sist efter Berlin (*nach Berlin morgen*).",
          "adverbial är förbjudna i huvudsats."
        ],
        "answer": 0,
        "explanation": "I enlighet med V2 och TeKaMoLo står tidsadverbialet tidigt i mittfältet: 'Wir fahren morgen nach Berlin'.",
        "feedback": [
          "Korrekt! Direkt efter finita verbet: 'Wir fahren morgen nach Berlin'.",
          "Fel. Verbet måste stå på position 2; 'Wir morgen fahren' är ogrammatiskt i tyskan.",
          "Fel. Riktning (Lokal) står efter tid i mittfältet.",
          "Fel. Adverbial är fullt normala."
        ]
      },
      {
        "id": "e10-q6",
        "context": "Substantivens versaler.",
        "prompt": "Vilket ortografiskt misstag gör svenskar allra oftast när de skriver tyska substantiv?",
        "options": [
          "Att skriva substantiv med liten begynnelsebokstav (i tyskan måste ALLA substantiv ha stor bokstav).",
          "Att böja alla verb i futurum.",
          "Att glömma punkten i slutet.",
          "Att skriva baklänges."
        ],
        "answer": 0,
        "explanation": "I tyskan har alla substantiv obligatorisk stor begynnelsebokstav (Großschreibung der Substantive).",
        "feedback": [
          "Korrekt! Alla substantiv skrivs med stor begynnelsebokstav i tyskan.",
          "Fel. Verbböjning följer tempus, inte substantivens versaler.",
          "Fel. Skiljetecken sätts som vanligt.",
          "Fel. Tyska skrivs från vänster till höger."
        ]
      }
    ]
  },
  '/mer/verbgrupper-och-oberfeld': {
    "lessonId": "E11",
    "href": "/mer/verbgrupper-och-oberfeld",
    "title": "Snabbkoll: Verbgrupper, Ersatzinfinitiv och Oberfeld",
    "questions": [
      {
        "id": "e11-q1",
        "context": "Ersatzinfinitiv (dubbel infinitiv).",
        "prompt": "Vad händer med modalverbets perfektparticip i perfekt när det åtföljs av ett huvudverb i infinitiv (t.ex. *höra*, *se*, *kunna*)?",
        "options": [
          "Participet ersätts av en infinitivform (Ersatzinfinitiv): *er hat kommen können* (inte *gekönnt*).",
          "Participet sätts alltid i passiv.",
          "Huvudverbet förvandlas till ett substantiv.",
          "Hjälpverbet haben byts ut mot sein."
        ],
        "answer": 0,
        "explanation": "När ett modalverb står tillsammans med en infinitiv ersätts participformen obligatoriskt av en infinitivform (*Ersatzinfinitiv*).",
        "feedback": [
          "Korrekt! Ersättningsinfinitiv (Ersatzinfinitiv) är obligatoriskt vid modalverb med huvudverb.",
          "Fel. Konstruktionen är aktiv.",
          "Fel. Båda verben förblir rena infinitiver.",
          "Fel. Modalverb bildar alltid perfekt med haben."
        ]
      },
      {
        "id": "e11-q2",
        "context": "Oberfeld-ordföljd i bisats.",
        "prompt": "Var placeras det finita hjälpverbet *hat* i en bisats med Ersatzinfinitiv: \\"...dass er das Buch [...]\\"? ",
        "options": [
          "Framför de två infinitiverna i Oberfeld: *...dass er das Buch [hat lesen können]*.",
          "Allra sist efter infinitiverna: *...dass er das Buch [lesen können hat]*.",
          "Före subjektet i bisatsen.",
          "Det stryks helt ur bisatsen."
        ],
        "answer": 0,
        "explanation": "Vid Ersatzinfinitiv flyttas det finita hjälpverbet framför infinitivgruppen till det s.k. Oberfeld.",
        "feedback": [
          "Korrekt! Finit hjälpverb ställs framför den dubbla infinitiven i Oberfeld.",
          "Fel. Att sätta 'hat' allra sist är ogrammatiskt i standardspråk vid dubbel infinitiv.",
          "Fel. Subjektet behåller sin position tidigt i bisatsen.",
          "Fel. Hjälpverbet krävs för att bilda perfekt."
        ]
      },
      {
        "id": "e11-q3",
        "context": "Perceptionsverb med Ersatzinfinitiv.",
        "prompt": "Vilka verb förutom modala verb kan bilda Ersatzinfinitiv vid perfekt med infinitivkomplement?",
        "options": [
          "sehen, hören, lassen och helfen (*Ich habe ihn kommen sehen*).",
          "essen, trinken och schlafen.",
          "kaufen, verkaufen och mieten.",
          "wohnen, leben och reisen."
        ],
        "answer": 0,
        "explanation": "Sehen, hören, lassen och ofta helfen tar ersättningsinfinitiv vid perfekt: 'Ich habe sie singen hören'.",
        "feedback": [
          "Korrekt! Sinnesverb (sehen, hören) samt lassen och helfen uppvisar Ersatzinfinitiv.",
          "Fel. Dessa verb tar vanliga ackusativobjekt, inte infinitivkomplement.",
          "Fel. Dessa är vanliga transitiva verb.",
          "Fel. Dessa är intransitiva verb."
        ]
      },
      {
        "id": "e11-q4",
        "context": "Modalverb utan huvudverb.",
        "prompt": "Hur böjs modalverbet i perfekt när det står ENSAMT utan huvudverb (t.ex. \\"Han har velat det\\")?",
        "options": [
          "Med sitt vanliga particip II: *Er hat das gewollt*.",
          "Med Ersatzinfinitiv: *Er hat das wollen*.",
          "Med konjunktiv II: *Er hätte das gewollt*.",
          "Det kan inte böjas i perfekt alls."
        ],
        "answer": 0,
        "explanation": "När inget annat verb i infinitiv är närvarande använder modalverbet sitt vanliga svaga particip II (gewollt, gekonnt, gemusst).",
        "feedback": [
          "Korrekt! Utan huvudverb gäller det ordinarie participet: 'Er hat das gewollt'.",
          "Fel. Ersatzinfinitiv kräver att ett annat verb i infinitiv föregår det.",
          "Fel. Konjunktiv II uttrycker en hypotetisk tanke, inte ren dåtid.",
          "Fel. Modalverb kan självklart böjas i perfekt."
        ]
      },
      {
        "id": "e11-q5",
        "context": "Verbkomplex med tre verb.",
        "prompt": "Vilken ordföljd är korrekt i huvudsats vid futurum exaktum eller modalverb med passiv: \\"Das Haus wird morgen [...]\\"? ",
        "options": [
          "abgerissen werden müssen (huvudverb i particip + passivt werden + finit/infinitivt modalverb).",
          "müssen werden abgerissen.",
          "abgerissen müssen werden.",
          "werden abgerissen müssen."
        ],
        "answer": 0,
        "explanation": "I slutet av satsen ordnas verben från det mest specifika till det mest överordnade: abgerissen + werden + müssen.",
        "feedback": [
          "Korrekt! Hierarkisk struktur i högra satsklammern: abgerissen werden müssen.",
          "Fel. Huvudverbet måste inleda slutklustret här.",
          "Fel. Hjälpverbet werden måste stå före modalverbet müssen.",
          "Fel. Denna ordföljd bryter mot tyskans klammerhierarki."
        ]
      },
      {
        "id": "e11-q6",
        "context": "Regional variation vid Oberfeld.",
        "prompt": "Hur varierar placeringen av hjälpverbet i ett verbkluster i södra tyska dialekter jämfört med standardnormen?",
        "options": [
          "I södra dialekter och schweizertyska kan finitverbet ställas allra först eller varieras fritt i klustret.",
          "I söder stryks alla verb.",
          "I söder får man bara ha ett enda verb per mening.",
          "Det finns ingen variation alls i tyska dialekter."
        ],
        "answer": 0,
        "explanation": "Alemanniska och bayerska dialekter tillåter fler permutationer i verbklustret än vad standardspråket medger.",
        "feedback": [
          "Korrekt! Dialekterna i söder har rikare permutationsmöjligheter i verbkomplexet.",
          "Fel. Satser i söder har självklart fullständiga verbstrukturer.",
          "Fel. Komplexa verbstrukturer är mycket vanliga i dialekterna.",
          "Fel. Dialektforskning visar omfattande ordföljdsvariation."
        ]
      }
    ]
  },
  '/mer/grammatiska-termer': {
    "lessonId": "E12",
    "href": "/mer/grammatiska-termer",
    "title": "Snabbkoll: Svensk–tysk grammatisk ordlista",
    "questions": [
      {
        "id": "e12-q1",
        "context": "Terminologi: Satsdelar.",
        "prompt": "Vad heter 'direkt objekt' (ackusativobjekt) på tysk lingvistisk fackterminologi?",
        "options": [
          "das Akkusativobjekt (eller direktes Objekt).",
          "das Subjekt.",
          "das Prädikat.",
          "das Adverbiale."
        ],
        "answer": 0,
        "explanation": "Direktobjekt heter på tysk grammatikterminologi Akkusativobjekt eller direktes Objekt.",
        "feedback": [
          "Korrekt! Das Akkusativobjekt motsvarar svenskans direktobjekt.",
          "Fel. Subjektet står i nominativ.",
          "Fel. Prädikat är verbets satsdelsfunktion.",
          "Fel. Adverbiale är omständighetsbestämning."
        ]
      },
      {
        "id": "e12-q2",
        "context": "Terminologi: Verbens tempus.",
        "prompt": "Vad motsvarar svenskans 'pluskvamperfekt' (hade gjort) på tyska?",
        "options": [
          "das Plusquamperfekt (eller die Vorvergangenheit).",
          "das Perfekt.",
          "das Präteritum (das Imperfekt).",
          "das Futur I."
        ],
        "answer": 0,
        "explanation": "Pluskvamperfekt heter das Plusquamperfekt och uttrycker förtidighet i det förflutna.",
        "feedback": [
          "Korrekt! Das Plusquamperfekt = svenskans pluskvamperfekt.",
          "Fel. Das Perfekt motsvarar svenskans perfekt (har gjort).",
          "Fel. Das Präteritum motsvarar svenskans preteritum/imperfekt (gjorde).",
          "Fel. Das Futur I motsvarar framtid (ska göra)."
        ]
      },
      {
        "id": "e12-q3",
        "context": "Terminologi: Modus.",
        "prompt": "Vilka är tyskans tre huvudsakliga modi för verb?",
        "options": [
          "Indikativ (Indikativ), Konjunktiv (Konjunktiv I & II) och Imperativ (Befehlsform).",
          "Presens, preteritum och perfekt.",
          "Aktiv, passiv och reflexiv.",
          "Singular, plural och dualis."
        ],
        "answer": 0,
        "explanation": "Modus rör talarattityd: verklighet (Indikativ), möjlighet/indirekt tal (Konjunktiv) och befallning (Imperativ).",
        "feedback": [
          "Korrekt! Indikativ, Konjunktiv och Imperativ utgör verbets modussystem.",
          "Fel. Det är tempuskategorier (tidsformer), inte modi.",
          "Fel. Det är diateskategorier (genus verbi), inte modi.",
          "Fel. Det är numeruskategorier (antal)."
        ]
      },
      {
        "id": "e12-q4",
        "context": "Terminologi: Topologiska fält.",
        "prompt": "Vad kallas satsens första position före det finita verbet i den tyska fältmodellen?",
        "options": [
          "das Vorfeld (förfältet).",
          "das Mittelfeld (mittfältet).",
          "das Nachfeld (efterfältet).",
          "die Satzklammer (satsklammern)."
        ],
        "answer": 0,
        "explanation": "Positionen före det finita verbet (Linke Satzklammer) i en V2-sats heter das Vorfeld.",
        "feedback": [
          "Korrekt! Das Vorfeld rymmer exakt en satsdel före det finita verbet.",
          "Fel. Das Mittelfeld ligger mellan verbklamrarna.",
          "Fel. Das Nachfeld ligger efter den högra satsklammern.",
          "Fel. Satzklammer är ramen som verben bildar."
        ]
      },
      {
        "id": "e12-q5",
        "context": "Terminologi: Kasus.",
        "prompt": "Vad heter de fyra tyska kasusen på tyska?",
        "options": [
          "Nominativ (1. Fall), Genitiv (2. Fall), Dativ (3. Fall) och Akkusativ (4. Fall).",
          "Subjekt, predikat, objekt och adverbial.",
          "Singular, plural, maskulinum och femininum.",
          "Positiv, komparativ, superlativ och elativ."
        ],
        "answer": 0,
        "explanation": "De fyra tyska kasusen numreras traditionellt 1 till 4: Nominativ, Genitiv, Dativ, Akkusativ.",
        "feedback": [
          "Korrekt! Nominativ, Genitiv, Dativ och Akkusativ är de fyra kasusen.",
          "Fel. Detta är satsdelar, inte kasus.",
          "Fel. Detta är genus- och numeruskategorier.",
          "Fel. Detta är adjektivens komparationsgrader."
        ]
      },
      {
        "id": "e12-q6",
        "context": "Terminologi: Ordklasser.",
        "prompt": "Vad betyder den tyska grammatiska termen *das Bindewort*?",
        "options": [
          "die Konjunktion (konjunktion / sambandsord).",
          "das Substantiv.",
          "das Verb.",
          "das Pronomen."
        ],
        "answer": 0,
        "explanation": "Bindewort är den traditionella tyska benämningen på en konjunktion (t.ex. und, aber, weil).",
        "feedback": [
          "Korrekt! Das Bindewort = die Konjunktion (sambandsord).",
          "Fel. Substantiv kallas på tyska das Nomen eller das Hauptwort.",
          "Fel. Verb kallas das Zeitwort eller das Tuwort.",
          "Fel. Pronomen kallas das Fürwort."
        ]
      }
    ]
  },
`;

const lastClosingIndex = content.lastIndexOf('};');
if (lastClosingIndex === -1) {
  console.error("Could not find closing }; in data/learning-quizzes.ts");
  process.exit(1);
}

const updatedContent = content.slice(0, lastClosingIndex) + mer2Quizzes + content.slice(lastClosingIndex);
fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log("Successfully appended E07-E12 quizzes to data/learning-quizzes.ts");
