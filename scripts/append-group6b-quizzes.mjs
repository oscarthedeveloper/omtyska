import fs from 'fs';

const filePath = '/Users/oscarpagerup/Desktop/Git Repo/Om-Tyska/data/learning-quizzes.ts';
let content = fs.readFileSync(filePath, 'utf8');

const group6bQuizzes = `  '/docs/fordjupning/text-och-samtal/vorfeldbortfall-och-situationsell-ellips': {
    "lessonId": "X071",
    "href": "/docs/fordjupning/text-och-samtal/vorfeldbortfall-och-situationsell-ellips",
    "title": "Snabbkoll: Vorfeldbortfall och situationsell ellips",
    "questions": [
      {
        "id": "x071-q1",
        "context": "Syntaktisk placering av topic drop.",
        "prompt": "Var i den tyska satsstrukturen kan förfältsbortfall (Spitzenellipse / Topic Drop) ske?",
        "options": [
          "Uteslutande i förfältet (Vorfeld) längst till vänster före det finita verbet.",
          "Var som helst i mittfältet.",
          "Bara i efterfältet efter den högra verbklammern.",
          "I bisatser mellan konjunktionen och subjektet."
        ],
        "answer": 0,
        "explanation": "Topic drop är en strikt förfältsmekanism i V2-satser; samma led kan inte strykas inne i mittfältet utan att satsen kraschar.",
        "feedback": [
          "Korrekt! Bortfallet sker uteslutande i förfältets absoluta vänsterposition.",
          "Fel. Mittfältsbortfall leder till ogrammatiska satser.",
          "Fel. Efterfältet berörs inte av denna ellipsmekanism.",
          "Fel. Bisatser har inte V2-struktur och tillåter inte klassiskt topic drop."
        ]
      },
      {
        "id": "x071-q2",
        "context": "Stilistisk status.",
        "prompt": "Hur bedöms meningen \\"Bin im Urlaub. Melde mich nächste Woche.\\" i en formell akademisk ansökan?",
        "options": [
          "Som ett allvarligt stilfel; formell skriftnorm kräver att subjektet sätts ut fullständigt.",
          "Som fullt acceptabelt och rekommenderat i modern myndighetstext.",
          "Som grammatiskt obligatoriskt enligt Duden.",
          "Som dialektal sydtyska."
        ],
        "answer": 0,
        "explanation": "Subjekts- och förfältsbortfall hör hemma i tal, SMS och privat chatt, men är oacceptabelt i formell sakprosa och brev.",
        "feedback": [
          "Korrekt! I formella sammanhang måste förfältet och subjektet realiseras explicit.",
          "Fel. Formell text accepterar inte förfältsellips.",
          "Fel. Duden föreskriver fullständig V2 i skrift.",
          "Fel. Det förekommer i hela språkområdet men i informellt register."
        ]
      },
      {
        "id": "x071-q3",
        "context": "Objekts-drop.",
        "prompt": "Vilket objekt faller allra oftast vid demonstrativt förfältsbortfall i dialoger (t.ex. \\"[...] weiß ich schon\\")?",
        "options": [
          "Det neutra demonstrativa pronomenet das (eller da).",
          "Det personliga pronomenet mich.",
          "Substantiv i genitiv.",
          "Prepositionsfraser med mit."
        ],
        "answer": 0,
        "explanation": "Det är typiskt demonstrativt 'das' som återkopplar till föregående replik som kan strykas i förfältet.",
        "feedback": [
          "Korrekt! 'Das weiß ich schon' komprimeras till '[Das] weiß ich schon'.",
          "Fel. Personliga pronomen som mich kan inte strykas så.",
          "Fel. Genitivobjekt uppvisar inte topic drop.",
          "Fel. Prepositionsfraser kan inte enkelt strykas på detta sätt."
        ]
      },
      {
        "id": "x071-q4",
        "context": "Opersonligt es.",
        "prompt": "Vad händer med det opersonliga subjektet i \\"Es regnet draußen\\" i ledigt talspråk?",
        "options": [
          "Det kan strykas i förfältet så att yttrandet inleds direkt med verbet: \\"Regnet draußen\\".",
          "Det måste ersättas med er.",
          "Det flyttas automatiskt till efterfältet.",
          "Det förvandlas till ett adjektiv."
        ],
        "answer": 0,
        "explanation": "Opersonligt och expletivt es i förfältet faller mycket ofta i ledigt talspråk.",
        "feedback": [
          "Korrekt! 'Regnet draußen' eller 'Geht nicht' är typiska fall av bortfall av opersonligt es.",
          "Fel. Es byts inte ut mot maskulint er.",
          "Fel. Det försvinner helt ur ytan snarare än flyttas.",
          "Fel. Ordklassen ändras inte."
        ]
      },
      {
        "id": "x071-q5",
        "context": "Situationsell ellips.",
        "prompt": "Vad kännetecknar en ren situationsell ellips (situatives Ellips) jämfört med en textuell ellips?",
        "options": [
          "Den förutsätter ingen språklig föregångare i texten, utan förstås direkt ur den fysiska situationen och gester (t.ex. 'Zwei Kaffee, bitte!').",
          "Den kräver minst tre föregående bisatser.",
          "Den förekommer enbart i skriftliga lagtexter.",
          "Den innebär att verbet alltid står i konjunktiv."
        ],
        "answer": 0,
        "explanation": "Situationsell ellips hämtar sin tolkning ur kontexten (miljö, gester, blickar) snarare än språkliga antecedenter.",
        "feedback": [
          "Korrekt! Förståelsen bärs upp av den delade situationen.",
          "Fel. Den kräver inga språkliga föregångare alls.",
          "Fel. Den är typisk för muntliga och praktiska situationer.",
          "Fel. Verbformen är ofta helt utelämnad eller i particip/infinitiv."
        ]
      },
      {
        "id": "x071-q6",
        "context": "Kasusbevarande vid fragment.",
        "prompt": "Vilket kasus ska nominalfrasen ha vid ett kort svar på frågan \\"Wen hast du auf der Party gesehen?\\"?",
        "options": [
          "Ackusativ (*Meinen alten Klassenlehrer*), eftersom frågeordet *wen* kräver ackusativ.",
          "Alltid nominativ oavsett frågeord.",
          "Dativ (*Meinem alten Klassenlehrer*).",
          "Genitiv (*Meines alten Klassenlehrers*)."
        ],
        "answer": 0,
        "explanation": "Isolerade svarsfragment matchar det kasus som den efterfrågade satsdelen har i en tänkt fullständig sats.",
        "feedback": [
          "Korrekt! Frågan styr ackusativ, vilket överförs till svarsfragmentet.",
          "Fel. Kasusmatchning mot frågeordet är obligatorisk i tyskan.",
          "Fel. Sehen styr inte dativ.",
          "Fel. Genitiv används inte för direktobjekt här."
        ]
      }
    ]
  },
  '/docs/fordjupning/text-och-samtal/diskursmarkorer-och-responsuttryck': {
    "lessonId": "X072",
    "href": "/docs/fordjupning/text-och-samtal/diskursmarkorer-och-responsuttryck",
    "title": "Snabbkoll: Diskursmarkörer och responsuttryck",
    "questions": [
      {
        "id": "x072-q1",
        "context": "Svarsordet doch.",
        "prompt": "Hur svarar man på tyska om någon frågar \\"Hast du den Schlüssel nicht gefunden?\\" och man faktiskt HAR hittat den?",
        "options": [
          "Doch! (eller 'Doch, ich habe ihn gefunden.')",
          "Ja! (eller 'Ja, ich habe ihn nicht gefunden.')",
          "Nein! (eller 'Nein, ich habe ihn gefunden.')",
          "Wohl!"
        ],
        "answer": 0,
        "explanation": "Tyskans 'doch' används uteslutande för att invända mot och upphäva en negativ fråga eller ett negativt påstående.",
        "feedback": [
          "Korrekt! 'Doch' vänder negeringen till bekräftelse.",
          "Fel. Att svara 'ja' skapar förvirring i tyskan vid nekande frågor.",
          "Fel. 'Nein' bekräftar att man INTE hittat den.",
          "Fel. 'Wohl' kan inte fungera som isolerat jakande svar här."
        ]
      },
      {
        "id": "x072-q2",
        "context": "Diskursmarkör kontra modalpartikel.",
        "prompt": "Vad skiljer en diskursmarkör från en modalpartikel vad gäller position och prosodi?",
        "options": [
          "Diskursmarkörer står utanför satskärnan (ofta i Vor-Vorfeld) och kan bära stark accent; modalpartiklar står obetonade inne i mittfältet.",
          "Diskursmarkörer kan enbart stå efter verbet, medan modalpartiklar alltid står i förfältet.",
          "Det finns ingen skillnad; de är identiska till alla egenskaper.",
          "Diskursmarkörer kan endast användas i skrift."
        ],
        "answer": 0,
        "explanation": "Diskursmarkörer (also, na ja) är intonatoriskt avgränsade utanför kärnan; modalpartiklar (ja, mal, denn) är bundna till mittfältet.",
        "feedback": [
          "Korrekt! Vor-Vorfeld och betoningsbarhet utmärker diskursmarkörer.",
          "Fel. Modalpartiklar kan aldrig stå i förfältet.",
          "Fel. De skiljer sig markant åt syntaktiskt och fonologiskt.",
          "Fel. Diskursmarkörer är typiska för talspråk och samtal."
        ]
      },
      {
        "id": "x072-q3",
        "context": "Funktion hos na ja.",
        "prompt": "Vilken pragmatisk funktion fyller diskursmarkören *na ja* i början av en replik?",
        "options": [
          "Den signalerar tvekan, reservation, mild resignation eller en partiell eftergift.",
          "Den uttrycker absolut entusiasm och glädje.",
          "Den anger en strikt logisk orsakssammanhängande slutsats.",
          "Den fungerar som en direkt order."
        ],
        "answer": 0,
        "explanation": "Na ja dämpar eller relativiserar ett påstående och signalerar att talaren inte kan hålla med fullt ut.",
        "feedback": [
          "Korrekt! Relativisering, reservation och dämpning är dess kärnfunktion.",
          "Fel. Entusiasm uttrycks med partiklar som super, toll, spitze.",
          "Fel. Kausal slutsats uttrycks med deshalb, folglich eller also.",
          "Fel. Det är inte ett imperativt uttryck."
        ]
      },
      {
        "id": "x072-q4",
        "context": "Funktioner hos also.",
        "prompt": "Vad gör *also* i meningen \\"Er kommt am Dienstag, also am Mittwoch meinte ich\\"? ",
        "options": [
          "Det fungerar som en självreparationsmarkör för att rätta en felsägning.",
          "Det fungerar som en tidsadverbial som betyder 'strax'.",
          "Det underordnar en bisats med konjunktiv.",
          "Det negerar hela satsen."
        ],
        "answer": 0,
        "explanation": "Also används mycket ofta för samtalsreparation och omedelbar självkorrigering.",
        "feedback": [
          "Korrekt! Reparation och precisering mitt i turen.",
          "Fel. Also betyder inte 'strax' (det heter bald/gleich).",
          "Fel. Also styr ingen bisatsordföljd här.",
          "Fel. Det bär ingen negerande innebörd."
        ]
      },
      {
        "id": "x072-q5",
        "context": "Syntaktisk status hos Vor-Vorfeld.",
        "prompt": "Varför följs *Also* av ordföljden \\"Also, wir fangen jetzt an\\" (och inte omedelbar verbplacering)?",
        "options": [
          "Eftersom diskursmarkören står i Vor-Vorfeld (position 0); förfältet upptas av pronomenet 'wir' före det finita verbet.",
          "Eftersom tyskan inte har någon V2-regel i tal.",
          "Eftersom 'wir' räknas som ett adverb.",
          "Eftersom kommatecknet raderar verbet."
        ],
        "answer": 0,
        "explanation": "Vor-Vorfeld ligger utanför satsens topologiska fält; förfältet intas av 'wir' och verbet 'fangen' står på V2.",
        "feedback": [
          "Korrekt! Position 0 lämnar förfältet intakt för 'wir' med bibehållen V2.",
          "Fel. V2-regeln respekteras fullt ut i satskärnan.",
          "Fel. 'Wir' är ett personligt pronomen i nominativ.",
          "Fel. Kommatecknet markerar intonationsgräns men raderar inget."
        ]
      },
      {
        "id": "x072-q6",
        "context": "Betydelse av tja.",
        "prompt": "I vilken situation är ett lakoniskt *Tja!* mest idiomatiskt?",
        "options": [
          "När ett oundvikligt problem har inträffat och man konstaterar att inget mer finns att göra (*'Tja, Pech gehabt'*).",
          "När man presenterar sig för förbundskanslern vid en officiell ceremoni.",
          "När man tackar för en mycket formell doktorsavhandling.",
          "När man ber om saltet vid middagsbordet."
        ],
        "answer": 0,
        "explanation": "Tja uttrycker pragmatisk resignation och hjälplös acceptans av oföränderliga fakta.",
        "feedback": [
          "Korrekt! Fatalistisk acceptans av ett faktum.",
          "Fel. Det vore ytterst olämpligt och respektlöst i diplomatiska sammanhang.",
          "Fel. I akademisk ceremoni krävs formellt tack.",
          "Fel. Vid bordet använder man 'Könntest du mir bitte das Salz reichen?'."
        ]
      }
    ]
  },
  '/docs/fordjupning/text-och-samtal/referat-evidens-och-perspektiv-i-text': {
    "lessonId": "X073",
    "href": "/docs/fordjupning/text-och-samtal/referat-evidens-och-perspektiv-i-text",
    "title": "Snabbkoll: Referat, evidens och perspektiv i text",
    "questions": [
      {
        "id": "x073-q1",
        "context": "Modus vid indirekt tal i tysk press.",
        "prompt": "Vilket modus är standardnorm i tysk kvalitetsjournalistik för att återge uttalanden i indirekt tal med objektiv distans?",
        "options": [
          "Konjunktiv I (presens stamform).",
          "Indikativ futurum.",
          "Imperativ.",
          "Konjunktiv II enbart i alla personer oavsett förväxlingsrisk."
        ],
        "answer": 0,
        "explanation": "Konjunktiv I är den primära referensformen i tysk skrift och press för att visa att talaren citerar en källa.",
        "feedback": [
          "Korrekt! Konjunktiv I är referatmoduset par excellence i tyskan.",
          "Fel. Indikativ signalerar ofta att skribenten själv går i god för faktumet.",
          "Fel. Imperativ är en befallningsform.",
          "Fel. Konjunktiv II används som ersättning endast när Konjunktiv I sammanfaller med indikativ."
        ]
      },
      {
        "id": "x073-q2",
        "context": "Evidensmarkering med sollen.",
        "prompt": "Vad innebär påståendet \\"Der Minister soll zurücktreten\\" ur evidenssynpunkt i en tidningsartikel?",
        "options": [
          "Att det rapporteras/ryktas enligt externa källor att ministern ska avgå, utan att journalisten bekräftar det som säkert faktum.",
          "Att ministern har befallt alla andra att avgå.",
          "Att ministern har en juridisk plikt att avgå imorgon bitti.",
          "Att journalisten kräver ministerns avgång."
        ],
        "answer": 0,
        "explanation": "Modalverbet 'sollen' fungerar som evidensmarkör för hörsägen och icke-verifierade uppgifter ('det sägs att').",
        "feedback": [
          "Korrekt! Extern hörsägen / ryktesevidens utan journalistiskt ansvar för sanningshalten.",
          "Fel. Det uttrycker inte en befallning från ministern själv.",
          "Fel. Det är inte ett lagstadgat krav som avses här.",
          "Fel. Det speglar inte journalistens personliga krav utan källuppgifter."
        ]
      },
      {
        "id": "x073-q3",
        "context": "Subjektiv evidens med wollen.",
        "prompt": "Vilken underton förmedlar konstruktionen med *wollen* i: \\"Der Verdächtige will unschuldig sein\\"? ",
        "options": [
          "Att den misstänkte själv hävdar sin oskuld, men att talaren ställer sig skeptisk eller avvaktande till påståendet.",
          "Att den misstänkte har en stark vilja att begå ett brott.",
          "Att den misstänkte är bevisat oskyldig enligt domstolen.",
          "Att den misstänkte vill bli dömd till fängelse."
        ],
        "answer": 0,
        "explanation": "'Wollen' markerar subjektets eget påstående, ofta med en underförstådd skepsis från rapportören ('påstår sig vara').",
        "feedback": [
          "Korrekt! Subjektets eget påstående med inbyggd distans från rapportören.",
          "Fel. 'Wollen' betyder här inte vilja eller avsikt i framtiden.",
          "Fel. Domstolsbevisat uttrycks inte med wollen.",
          "Fel. Tvärtom hävdar personen att han inte begått brottet."
        ]
      },
      {
        "id": "x073-q4",
        "context": "Deiktiska skiften vid referat.",
        "prompt": "Hur transformeras det deiktiska tidsuttrycket *gestern* när direkt tal flyttas till indirekt tal i en dåtidsberättelse?",
        "options": [
          "Till det anaforiska uttrycket *am Vortag* (eller *am Tage zuvor*).",
          "Det förblir oförändrat *gestern*.",
          "Det måste ändras till *morgen*.",
          "Det stryks alltid helt."
        ],
        "answer": 0,
        "explanation": "Gestern är bundet till talögonblicket; i ett indirekt referat förankrat i dåtid måste det ersättas med 'am Vortag'.",
        "feedback": [
          "Korrekt! 'am Vortag' frikopplar tidsreferensen från nuet och förankrar den i händelsedagen.",
          "Fel. Gestern i referat skulle felaktigt syfta på gårdagen före skribentens nutid.",
          "Fel. Morgen pekar framåt i tiden.",
          "Fel. Tidsangivelsen är informativ och behålls i anaforisk form."
        ]
      },
      {
        "id": "x073-q5",
        "context": "Erlebte Rede i fiktionsprosa.",
        "prompt": "Vad kännetecknar berättartekniken 'fritt indirekt tal' (*erlebte Rede*)?",
        "options": [
          "Karaktärens inre röst återges i 3:e person och dåtid (preteritum), men utan anföringsverb och med bevarad deiktisk närvaro (hier, jetzt).",
          "Texten består enbart av repliker mellan citationstecken.",
          "Berättaren tilltalar läsaren direkt i 2:a person imperativ.",
          "Alla verb sätts i futurum exaktum."
        ],
        "answer": 0,
        "explanation": "Erlebte Rede integrerar figurens subjektiva upplevelse i den episka preteritumberättelsen utan 'er dachte, dass...'.",
        "feedback": [
          "Korrekt! 3:e person preteritum förenad med inre upplevelseperspektiv.",
          "Fel. Det beskriver direkt tal (direkte Rede).",
          "Fel. Det är läsartilltal, inte erlebte Rede.",
          "Fel. Tempuset är typiskt preteritum."
        ]
      },
      {
        "id": "x073-q6",
        "context": "Kasusstyrning vid zufolge.",
        "prompt": "Vilket kasus styr postpositionen *zufolge* när den placeras efter sitt rektionsled (t.ex. *den Berichten zufolge*)?",
        "options": [
          "Dativ.",
          "Ackusativ.",
          "Genitiv.",
          "Nominativ."
        ],
        "answer": 0,
        "explanation": "Efterställt zufolge styr undantagslöst dativ: 'den Berichten zufolge', 'meiner Ansicht zufolge'.",
        "feedback": [
          "Korrekt! Efterställt zufolge kräver alltid dativ.",
          "Fel. Zufolge styr aldrig ackusativ.",
          "Fel. Genitiv kan förekomma när zufolge undantagsvis föregår sitt led ('zufolge des Berichts').",
          "Fel. Nominativ styrs aldrig av prepositioner eller postpositioner."
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

const updatedContent = content.slice(0, lastClosingIndex) + group6bQuizzes + content.slice(lastClosingIndex);
fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log("Successfully appended Group 6B quizzes to data/learning-quizzes.ts");
