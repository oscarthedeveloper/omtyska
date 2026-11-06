import fs from 'node:fs';
import path from 'node:path';

const quizzes = {
  '/docs/fordjupning/verb-och-valens/modalitetens-betydelser-och-skopus': {
    lessonId: 'X033',
    href: '/docs/fordjupning/verb-och-valens/modalitetens-betydelser-och-skopus',
    title: 'Snabbkoll: Modalitetens betydelser och skopus',
    questions: [
      {
        id: 'x033-q1',
        context: 'Modalitetstyper: deontisk kontra epistemisk.',
        prompt: 'Vad uttrycker modalverbet müssen i satsen "Das Licht brennt noch; er muss noch im Büro sein"?',
        options: [
          'Epistemisk modalitet: talaren drar en logisk slutsats om sannolikheten utifrån iakttagelsen.',
          'Deontisk modalitet: en chef har beordrat honom att sitta kvar.',
          'Dynamisk modalitet: han har fysisk förmåga att sitta på en stol.',
          'Evidentiell modalitet: ett rykte påstår att han arbetar.'
        ],
        answer: 0,
        explanation: 'När müssen grundar sig på indicier (ljuset brinner) och uttrycker talarens säkerhet eller slutsats, är läsningen epistemisk.',
        feedback: [
          'Helt rätt! Talaren drar en logisk slutsats ("han måste [rimligtvis] vara på kontoret").',
          'Fel. Inget yttre tvång eller order åsyftas här.',
          'Fel. Det handlar inte om fysisk eller mental förmåga.',
          'Fel. Det är ingen hörsägen från tredje part.'
        ]
      },
      {
        id: 'x033-q2',
        context: 'Evidentiellt sollen kontra wollen.',
        prompt: 'Vad är skillnaden i betydelse mellan "Er soll die Wahrheit gesagt haben" (A) och "Er will die Wahrheit gesagt haben" (B)?',
        options: [
          'I (A) påstår andra/ryktet att han talade sanning; i (B) påstår han det själv om sig själv.',
          'I (A) vill han tala sanning; i (B) ska han tvingas tala sanning.',
          'Båda satserna betyder exakt samma sak utan nyansskillnad.',
          'I (B) är verbet wollen ett tidsadverbial.'
        ],
        answer: 0,
        explanation: 'soll = Fremdbehauptung (hörsägen: "det sägs att..."); will = Eigenbehauptung (eget anspråk: "han hävdar att...").',
        feedback: [
          'Korrekt! Distinktionen mellan Fremdbehauptung (sollen) och Eigenbehauptung (wollen) är en grundpelare i tysk evidentialitet.',
          'Fel. I evidentiell användning med perfektinfinitiv uttrycker verben inte enkel vilja eller framtida tvång.',
          'Fel. De har helt olika informationskällor (andra vs. subjektet själv).',
          'Fel. Wollen är ett modalverb, inte ett adverbial.'
        ]
      },
      {
        id: 'x033-q3',
        context: 'Skopus: nicht müssen kontra nicht dürfen.',
        prompt: 'Hur skiljer sig "Du musst das nicht tun" från "Du darfst das nicht tun"?',
        options: [
          'Du musst nicht tun = du behöver inte göra det (frånvaro av plikt); Du darfst nicht tun = du får inte göra det (förbud).',
          'Båda uttrycker strikt förbud.',
          'Du musst nicht tun uttrycker starkare förbud än darfst nicht.',
          'Du darfst nicht tun betyder att man saknar fysisk förmåga.'
        ],
        answer: 0,
        explanation: 'nicht müssen negerar nödvändigheten (du behöver inte); nicht dürfen förbjuder handlingen (du får inte).',
        feedback: [
          'Helt rätt! En av de viktigaste distinktionerna för svensktalande att behärska.',
          'Fel. Nicht müssen är absolut inget förbud!',
          'Fel. Tvärtom: inte müssen ger valfrihet, nicht dürfen är förbud.',
          'Fel. Fysisk oförmåga uttrycks med nicht können.'
        ]
      },
      {
        id: 'x033-q4',
        context: 'Epistemiskt antagande om dåtid.',
        prompt: 'Hur uttrycks det logiska antagandet "Han måste ha glömt nyckeln igår" korrekt på tyska?',
        options: [
          'Er muss den Schlüssel gestern vergessen haben. (presens av modalverbet + perfektinfinitiv).',
          '*Er musste den Schlüssel gestern vergessen.',
          '*Er hat den Schlüssel gestern vergessen gemusst.',
          '*Er muss gestern den Schlüssel vergaß.'
        ],
        answer: 0,
        explanation: 'Ett epistemiskt antagande i nuet om en förfluten handling bildas med modalverbet i presens och huvudverbet i perfektinfinitiv (vergessen haben).',
        feedback: [
          'Korrekt! "Er muss ... vergessen haben" är den felfria konstruktionen.',
          'Fel. "Er musste vergessen" tolkas deontiskt som historiskt tvång ("han var tvungen att glömma").',
          'Fel. Förvrängd perfektform.',
          'Fel. Två finita verb kan inte kombineras på detta sätt.'
        ]
      },
      {
        id: 'x033-q5',
        context: 'Konjunktiv II vid förmodan: dürfte.',
        prompt: 'Vad signalerar "Sie dürfte bald ankommen"?',
        options: [
          'En kvalificerad förmodan eller sannolikhetsbedömning i nuet (= hon torde/förmodligen anländer snart).',
          'Ett strängt förbud mot att anlända.',
          'En officiell tillåtelse att anlända när som helst.',
          'Att ankomsten redan ägt rum igår.'
        ],
        answer: 0,
        explanation: 'dürfte + Infinitiv är den standardiserade tyska konstruktionen för försiktig/kvalificerad epistemisk förmodan (svenskans "torde").',
        feedback: [
          'Helt rätt! Dürfte uttrycker hög sannolikhet / antagande.',
          'Fel. Det har ingen förbudsbetydelse i jakande form.',
          'Fel. Även om dürfen betyder få/tillåtelse, är dürfte här epistemiskt förmodande.',
          'Fel. Tidsreferensen är framtida/omedelbar nutid (bald).'
        ]
      },
      {
        id: 'x033-q6',
        context: 'Epistemisk omöjlighet med negation.',
        prompt: 'Hur uttrycker man på tyska att det är helt uteslutet att någon talar sanning?',
        options: [
          'Er kann unmöglich die Wahrheit sagen (eller: Er kann nicht die Wahrheit sagen).',
          '*Er darf unmöglich die Wahrheit sagen.',
          '*Er soll unmöglich die Wahrheit sagen.',
          '*Er will unmöglich die Wahrheit sagen.'
        ],
        answer: 0,
        explanation: 'Epistemisk omöjlighet uttrycks med negationen av können: "kann nicht / kann unmöglich".',
        feedback: [
          'Korrekt! Kann nicht / kann unmöglich = uteslutet.',
          'Fel. Darf nicht tolkas som förbud.',
          'Fel. Sollen uttrycker rykte eller instruktion.',
          'Fel. Wollen uttrycker eget påstående eller vilja.'
        ]
      }
    ]
  },
  '/docs/fordjupning/verb-och-valens/tempus-referenstid-och-aktionsart': {
    lessonId: 'X035',
    href: '/docs/fordjupning/verb-och-valens/tempus-referenstid-och-aktionsart',
    title: 'Snabbkoll: Tempus, referenstid och aktionsart',
    questions: [
      {
        id: 'x035-q1',
        context: 'Reichenbachs trepunktsmodell.',
        prompt: 'Vad representerar punkterna S, E och R i Hans Reichenbachs temporala modell?',
        options: [
          'S = Sprechzeit (taltid), E = Ereigniszeit (händelsetid), R = Referenzzeit (referenstid).',
          'S = Subjekt, E = Ergänzung, R = Rektion.',
          'S = Singular, E = Endung, R = Radikal.',
          'S = Satz, E = Element, R = Regel.'
        ],
        answer: 0,
        explanation: 'Reichenbach definierar tempus genom tre temporala ankare: taltidpunkten (S), händelsetidpunkten (E) och referenstidpunkten (R).',
        feedback: [
          'Helt rätt! S, E och R är hörnstenarna i modern temporalsemantik.',
          'Fel. Detta är syntaktiska/valensmässiga begrepp, inte Reichenbachs temporala punkter.',
          'Fel. Detta är morfologiska termer.',
          'Fel. Detta har ingenting med tempusmodellen att göra.'
        ]
      },
      {
        id: 'x035-q2',
        context: 'Reichenbachs konfiguration för Plusquamperfekt.',
        prompt: 'Vilken tidsrelation karaktäriserar Plusquamperfekt enligt Reichenbach?',
        options: [
          'E < R < S (händelsen inträffade före en referenspunkt i det förflutna, som i sin tur ligger före taltidpunkten).',
          'S = R = E (samtidighet med talögonblicket).',
          'S < E < R (framtida fullbordan).',
          'E = S < R (framtida referens vid nutida händelse).'
        ],
        answer: 0,
        explanation: 'Plusquamperfekt uttrycker förtidighet i förhållande till en dåtida referenspunkt: E < R < S.',
        feedback: [
          'Korrekt! "Als er kam (R), hatte ich gegessen (E)".',
          'Fel. S = R = E är konfigurationen för Präsens.',
          'Fel. S < E < R motsvarar Futur II.',
          'Fel. En sådan konfiguration beskriver inte pluskvamperfekt.'
        ]
      },
      {
        id: 'x035-q3',
        context: 'Telicitet och tidsadverbial.',
        prompt: 'Varför kan man säga "Er las das Buch in drei Stunden aus" men INTE *"Er schlief in drei Stunden"?',
        options: [
          'auslesen är ett teliskt verb med en definierad slutpunkt som kräver in; schlafen är ett ateliskt/durativt tillstånd som fordrar tidslängd (drei Stunden lang).',
          'schlafen kan inte kombineras med siffror.',
          'auslesen är ett kopulaverb.',
          'Prepositionen in kan aldrig användas med verb i förfluten tid.'
        ],
        answer: 0,
        explanation: 'Teliska verb har en naturlig inneboende målgång och tar adverbial med in; ateliska verb saknar gräns och tar durativa tidsadverbial (lang).',
        feedback: [
          'Helt rätt! Adverbialtestet in X Zeit vs. X Zeit lang är standardtestet för telicitet.',
          'Fel. Man kan utmärkt säga "drei Stunden lang schlafen".',
          'Fel. Auslesen är ett transitivt fullverb, inte kopulaverb.',
          'Fel. In används frekvent i dåtid vid teliska verb (in zwei Tagen beendet).'
        ]
      },
      {
        id: 'x035-q4',
        context: 'Aktionsarter: Inchoativa verb.',
        prompt: 'Vilken aktionsart representerar verbet "einschlafen" till skillnad från "schlafen"?',
        options: [
          'Inchoativ / ingressiv aktionsart: det markerar inträdet i tillståndet att sova (att somna).',
          'Egressiv aktionsart: det markerar att sömnen har upphört.',
          'Iterativ aktionsart: det visar att man sover upprepade korta stunder.',
          'Rent durativ aktionsart utan någon förändring.'
        ],
        answer: 0,
        explanation: 'Inchoativa/ingressiva verb fokuserar på handlingens början eller övergången till ett nytt tillstånd (einschlafen, aufblühen, entflammen).',
        feedback: [
          'Korrekt! Övergången från vaken till sovande är inchoativ.',
          'Fel. Att vakna upp vore egressivt/avslutande.',
          'Fel. Upprepad handling kallas iterativ.',
          'Fel. Schlafen är durativt, men einschlafen är punktuellt och inchoativt.'
        ]
      },
      {
        id: 'x035-q5',
        context: 'Tysk presens med seit vid pågående handling.',
        prompt: 'Vilken tysk mening är korrekt för det svenska påståendet "Hon har bott här i tre år" (och bor fortfarande kvar)?',
        options: [
          'Sie wohnt hier seit drei Jahren. (presens med seit för pågående skeende).',
          '*Sie hat hier seit drei Jahren gewohnt. (indikerar att hon flyttat).',
          '*Sie wohnte hier für drei Jahre.',
          '*Sie ist hier seit drei Jahren gewohnt.'
        ],
        answer: 0,
        explanation: 'När en handling började i dåtid men fortfarande pågår i taltidpunkten (S), använder tyskan Präsens + seit. Perfekt signalerar ofta att handlingen är avslutad.',
        feedback: [
          'Helt rätt! En mycket klassisk svensk interferensfälla.',
          'Fel. Perfekt används om handlingen är avslutad eller i helt andra kontexter.',
          'Fel. "Für drei Jahre" är en anglicism från "for three years".',
          'Fel. Ogrammatisk konstruktion.'
        ]
      },
      {
        id: 'x035-q6',
        context: 'Kohesion med nachdem.',
        prompt: 'Vilket tempus krävs i bisatsen "...nachdem er die Arbeit [...]", om huvudsatsen står i Präteritum ("ging er nach Hause")?',
        options: [
          'Plusquamperfekt: beendet hatte (strikt förtidighet i skriftspråket).',
          '*Präteritum: beendete (samtidighet, undviks i vårdad skrift).',
          '*Perfekt: beendet hat (presensförtidighet, felaktig temporal följd).',
          '*Präsens: beendet.'
        ],
        answer: 0,
        explanation: 'Efter konjunktionen nachdem kräver skriven standardtyska strikt förtidighet: om huvudsatsen är i preteritum (ging), måste bisatsen stå i pluskvamperfekt (beendet hatte).',
        feedback: [
          'Korrekt! Plusquamperfekt är normen vid dåtid i huvudsatsen.',
          'Fel. Även om det hörs i vardagstal anses preteritum efter nachdem vara undermåligt i skrift.',
          'Fel. Perfekt matchar en huvudsats i presens, inte preteritum.',
          'Fel. Presens bryter den temporala kohesionen helt.'
        ]
      }
    ]
  },
  '/docs/fordjupning/verb-och-valens/tempus-i-indirekt-och-inbaddat-tal': {
    lessonId: 'X036',
    href: '/docs/fordjupning/verb-och-valens/tempus-i-indirekt-och-inbaddat-tal',
    title: 'Snabbkoll: Tempus i indirekt och inbäddat tal',
    questions: [
      {
        id: 'x036-q1',
        context: 'Avsaknad av automatisk backshift i tyskan.',
        prompt: 'Hur återges det direkta citatet "Ich bin krank" i indirekt tal efter huvudsatsen "Er sagte gestern..." på standardtyska?',
        options: [
          'Er sagte gestern, er sei krank. (Konjunktiv I presens uttrycker samtidig relativ tidsreferens).',
          '*Er sagte gestern, er wäre krank. (felaktig automatisk backshift till Konjunktiv II utan misstro).',
          '*Er sagte gestern, er war krank. (indikativ preteritum utan referatmarkör).',
          '*Er sagte gestern, dass er krank gewesen wäre.'
        ],
        answer: 0,
        explanation: 'Tyskan har ingen mekanisk backshift: Konjunktiv I presens (sei) uttrycker att tillståndet var samtida med yttrandet vid talögonblicket.',
        feedback: [
          'Helt rätt! Konjunktiv I presens sei är den objektiva neutrala referatformen.',
          'Fel. Wäre används bara vid formkollision eller för att medvetet signalera misstro/kontrafakticitet.',
          'Fel. Indikativ preteritum återger inte indirekt tal i vårdad referatstil.',
          'Fel. Detta förskjuter händelsen till förtidigt pluskvamperfekt.'
        ]
      },
      {
        id: 'x036-q2',
        context: 'Förtidighet i indirekt tal.',
        prompt: 'Hur återges "Ich habe den Zeugen gestern getroffen" i indirekt tal efter "Sie erklärte..."?',
        options: [
          'Sie erklärte, sie habe den Zeugen am Vortag getroffen. (Perfekt Konjunktiv I).',
          'Sie erklärte, sie treffe den Zeugen am Vortag.',
          'Sie erklärte, sie werde den Zeugen am Vortag treffen.',
          'Sie erklärte, sie hatte den Zeugen am Vortag getroffen.'
        ],
        answer: 0,
        explanation: 'Förtidighet i indirekt tal bildas med Perfekt Konjunktiv I: habe/sei + Partizip II.',
        feedback: [
          'Korrekt! Habe getroffen markerar att mötet ägde rum före yttrandet.',
          'Fel. Treffe uttrycker samtidighet.',
          'Fel. Werde treffen uttrycker eftertidighet/framtid.',
          'Fel. Indikativ pluskvamperfekt är inte Konjunktiv.'
        ]
      },
      {
        id: 'x036-q3',
        context: 'Eftertidighet i indirekt tal.',
        prompt: 'Hur uttrycks eftertidighet (vad som skulle ske i framtiden) i tysk indirekt anföring?',
        options: [
          'Med Futur I Konjunktiv: werde / würden + Infinitiv ("Er sagte, er werde morgen abreisen").',
          'Med Perfekt Konjunktiv: habe + Partizip II.',
          'Med Plusquamperfekt Konjunktiv: hätte + Partizip II.',
          'Med Präsens Indikativ.'
        ],
        answer: 0,
        explanation: 'Eftertidighet uttrycks regelmässigt med Futur I Konjunktiv (werde + Infinitiv).',
        feedback: [
          'Helt rätt! "werde ... abreisen" anger eftertidighet.',
          'Fel. Habe + particip anger förtidighet.',
          'Fel. Hätte + particip anger irreal förtidighet.',
          'Fel. Indikativ presens är inte standard i formellt referat.'
        ]
      },
      {
        id: 'x036-q4',
        context: 'Substitutionssteg 2 vid formkollision.',
        prompt: 'Varför ersätts Konjunktiv I med Konjunktiv II i satsen "Die Zeugen sagten, sie hätten (i stället för haben) nichts gesehen"?',
        options: [
          'Eftersom 3:e person plural av Konjunktiv I (haben) är identisk med Indikativ presens, vilket gör formen otydlig som referat.',
          'Eftersom verbet sehen alltid kräver Konjunktiv II.',
          'Eftersom vittnena ljög under ed.',
          'Eftersom satsen har ett negationselement (nichts).'
        ],
        answer: 0,
        explanation: 'När Konjunktiv I sammanfaller formellt med Indikativ (sie haben = sie haben), ersätts den obligatoriskt med Konjunktiv II (sie hätten) för att markera indirekt tal.',
        feedback: [
          'Korrekt! Substitutionsregeln förhindrar sammanfall med indikativ.',
          'Fel. Verbet sehen har ingen sådan specialregel.',
          'Fel. Ersättningen är rent morfologisk och beror inte på vittnenas trovärdighet.',
          'Fel. Negation påverkar inte valet av konjunktivform här.'
        ]
      },
      {
        id: 'x036-q5',
        context: 'Deiktiskt skifte av tidsadverbial.',
        prompt: 'Vad händer med tidsadverbialet "gestern" i direkt tal när det återges i en rapport skriven en vecka senare?',
        options: [
          'Det skiftas deiktiskt till "am Vortag" eller "am Tag zuvor".',
          'Det förblir obligatoriskt "gestern".',
          'Det byts ut mot "morgen".',
          'Det måste strykas helt ur satsen.'
        ],
        answer: 0,
        explanation: 'Eftersom taltidpunkten har förskjutits måste deiktiska tidsadverbial anpassas: gestern blir am Vortag / am Tage zuvor.',
        feedback: [
          'Helt rätt! Deiktiska skiften är nödvändiga för att bibehålla referentiell stringens.',
          'Fel. "Gestern" skulle felaktigt syfta på dagen före rapportens skrivande.',
          'Fel. Morgen syftar på framtiden.',
          'Fel. Tidsangivelsen kan behållas men i anpassad deiktisk form.'
        ]
      },
      {
        id: 'x036-q6',
        context: 'Neutralitet hos Konjunktiv I.',
        prompt: 'Vilken signal sänder en tysk journalist som skriver "Der Minister betonte, er habe von den Vorwürfen nichts gewusst"?',
        options: [
          'En rent neutral rapportering om vad ministern yttrat, utan att journalisten tar ställning till sanningshalten.',
          'Ett explicit ställningstagande att ministern ljuger öppet.',
          'Ett juridiskt intygande att ministern är frikänd.',
          'Att journalisten själv var på plats och bevittnade händelsen.'
        ],
        answer: 0,
        explanation: 'Konjunktiv I är stilistiskt neutral och markerar endast att innehållet härrör från källan. Den uttrycker varken tvivel eller bekräftelse.',
        feedback: [
          'Korrekt! Konjunktiv I är den objektiva journalistiska referatstandarden.',
          'Fel. Misstro uttrycks med lexikala medel som angeblich eller durch Konjunktiv II.',
          'Fel. Journalisten intygar ingenting juridiskt.',
          'Fel. Det är ett referat av ministerns ord, inte ögonvittnesskildring.'
        ]
      }
    ]
  },
  '/docs/fordjupning/verb-och-valens/konjunktivens-gransfall-och-ersattningsformer': {
    lessonId: 'X038',
    href: '/docs/fordjupning/verb-och-valens/konjunktivens-gransfall-och-ersattningsformer',
    title: 'Snabbkoll: Konjunktivens gränsfall och ersättningsformer',
    questions: [
      {
        id: 'x038-q1',
        context: 'Förbud mot würde vid högfrekventa verb.',
        prompt: 'Vid vilket av följande verb är en würde-omskrivning stilistiskt undermålig och undviks i vårdat språk?',
        options: [
          'sein (*ich würde sein -> ich wäre).',
          'fragen (ich würde fragen).',
          'arbeiten (ich würde arbeiten).',
          'hoffen (ich würde hoffen).'
        ],
        answer: 0,
        explanation: 'Vid hjälpverben (sein, haben, werden) och modalverben är den enkla syntetiska formen (wäre, hätte, könnte) obligatorisk; *würde sein är stilistiskt substandard.',
        feedback: [
          'Helt rätt! Säg aldrig *ich würde sein, utan alltid ich wäre.',
          'Fel. Vid svaga verb som fragen är würde-formen fullständigt etablerad och rekommenderad.',
          'Fel. Würde arbeiten är standard vid svaga verb.',
          'Fel. Würde hoffen är normal standard.'
        ]
      },
      {
        id: 'x038-q2',
        context: 'När würde-formen är stilistiskt rekommenderad.',
        prompt: 'Varför föredrar man i modern tyska "sie würde helfen" framför den äldre syntetiska formen "sie hülfe"?',
        options: [
          'Formen hülfe uppfattas i dag som starkt arkaisk, tillkonstlad eller styltig i modernt språkbruk.',
          'Formen hülfe är grammatiskt förbjuden enligt Duden.',
          'Hülfe är en presensform, inte konjunktiv.',
          'Würde hjälper till att böja verbet svagt.'
        ],
        answer: 0,
        explanation: 'Många äldre starka Konjunktiv II-former (hülfe, stürbe, flöhe, wörfe) har blivit arkaiska relikter och ersätts i modern standardprosa naturligt av würde + Infinitiv.',
        feedback: [
          'Korrekt! Hülfe och stürbe verkar museala i modern text.',
          'Fel. Den är grammatiskt historiskt korrekt men stilistiskt förlegad.',
          'Fel. Det är en äldre Konjunktiv II-form.',
          'Fel. Helfen förblir ett starkt verb i infinitiv.'
        ]
      },
      {
        id: 'x038-q3',
        context: 'Fristående optativiska satser.',
        prompt: 'Vad uttrycker den självständiga satsen "Hätte ich doch nur geschwiegen!"?',
        options: [
          'En irreal önskan i det förflutna (optativ) som inte längre kan uppfyllas.',
          'En artig fråga till en domare.',
          'Ett förbud mot att tala i framtiden.',
          'En neutral rapport i indirekt tal.'
        ],
        answer: 0,
        explanation: 'Verb-först-ställda satser i Konjunktiv II med fokuspartiklar som doch/nur/bloß uttrycker en ouppfyllbar önskan i det förflutna.',
        feedback: [
          'Helt rätt! "Om jag bara hade tegat!".',
          'Fel. Det är inget frågesats utan ett utrop/önskan.',
          'Fel. Det handlar om det förflutna, inte framtida förbud.',
          'Fel. Det är ett självständigt utrop utan sägeverb.'
        ]
      },
      {
        id: 'x038-q4',
        context: 'Recept och instruktionsspråk.',
        prompt: 'Vilken grammatisk form representerar verbet nehme i receptfrasen "Man nehme drei Eier..."?',
        options: [
          'Konjunktiv I i 3:e person singularis som instruerande/preskriptiv formel.',
          'Indikativ presens av ett oregelbundet verb.',
          'Imperativ i singularis.',
          'Konjunktiv II av ett svagt verb.'
        ],
        answer: 0,
        explanation: '"Man nehme" är en traditionell Konjunktiv I-form som används för instruktioner och recept i opersonlig 3:e person singular.',
        feedback: [
          'Korrekt! Den klassiska receptkonjunktiven i 3:e person singular.',
          'Fel. Indikativ presens är "er nimmt".',
          'Fel. Imperativ för man existerar inte (imperativ är nimm!).',
          'Fel. Nehmen är ett starkt verb och formen är Konjunktiv I.'
        ]
      },
      {
        id: 'x038-q5',
        context: 'Fasta koncessiva vändningar.',
        prompt: 'Vad betyder den fasta formeln "Es sei denn, dass..."?',
        options: [
          'Såvida inte / om inte (undantagskoncession).',
          'Eftersom det alltid har varit så.',
          'Det är förbjudet att...',
          'Gud förbjude att...'
        ],
        answer: 0,
        explanation: '"Es sei denn" är en bevarad fossiliserad konjunktivfras som fungerar som en restriktiv konjunktion: "om inte / såvida inte".',
        feedback: [
          'Helt rätt! "Es sei denn" = såvida inte.',
          'Fel. Det anger inte kausal orsak.',
          'Fel. Det är inget förbud.',
          'Fel. Det är ingen religiös fras.'
        ]
      },
      {
        id: 'x038-q6',
        context: 'Substitutionskedjans sista länk.',
        prompt: 'I vilket fall ska den analytiska formen "würden + Infinitiv" användas i indirekt tal?',
        options: [
          'När både Konjunktiv I och syntetisk Konjunktiv II sammanfaller formellt med indikativ presens respektive indikativ preteritum.',
          'Alltid i stället för Konjunktiv I i alla lägen.',
          'Endast om talaren är personligen närvarande vid rättegången.',
          'När verbet är sein eller haben.'
        ],
        answer: 0,
        explanation: 'Würde-formen används i indirekt tal som sista ersättningssteg när både Konjunktiv I och II saknar distinkt skillnad från indikativformerna.',
        feedback: [
          'Korrekt! Substitutionskedjan: Konjunktiv I -> Konjunktiv II -> würde-omskrivning.',
          'Fel. Würde är inte förstahandsvalet vid entydiga Konjunktiv I-former.',
          'Fel. Fysisk närvaro påverkar inte grammatisk substitution.',
          'Fel. Vid sein och haben används uteslutande wäre och hätte.'
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
console.log('Finished updating learning-quizzes.ts with Group 3D quizzes.');
