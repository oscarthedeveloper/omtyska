import fs from 'fs';

const filePath = '/Users/oscarpagerup/Desktop/Git Repo/Om-Tyska/data/learning-quizzes.ts';
let content = fs.readFileSync(filePath, 'utf8');

const group5cQuizzes = `  '/docs/fordjupning/semantik/anafor-deixis-och-bindning': {
    "lessonId": "X063",
    "href": "/docs/fordjupning/semantik/anafor-deixis-och-bindning",
    "title": "Snabbkoll: Anafor, deixis och bindning",
    "questions": [
      {
        "id": "x063-q1",
        "context": "Deixis kontra anafor.",
        "prompt": "Vad är den principiella skillnaden mellan deiktisk och anaforisk referens?",
        "options": [
          "Deixis förankrar tolkningen i den fysiska talsituationen (här, nu, jag), medan anafor pekar mot ett tidigare nämnt led i texten.",
          "Deixis gäller enbart substantiv, medan anafor gäller verb.",
          "Deixis används endast i skrift och anafor i tal.",
          "Det finns ingen skillnad; termerna är synonymer."
        ],
        "answer": 0,
        "explanation": "Deixis är bunden till talarens origo i yttrandesituationen; anafor är bunden till textuell koreferens.",
        "feedback": [
          "Korrekt! Situationell förankring (deixis) kontra textuell referens (anafor).",
          "Fel. Båda mekanismerna opererar huvudsakligen på pronominal- och nominalnivå.",
          "Fel. Båda förekommer i både skrift och tal.",
          "Fel. De representerar distinkta referentiella system."
        ]
      },
      {
        "id": "x063-q2",
        "context": "Chomskys bindningsprincip A.",
        "prompt": "Vad kräver bindningsprincip A för det tyska reflexivpronomenet *sich*?",
        "options": [
          "Det måste vara bundet (koreferent) till ett subjekt inom sin lokala syntaktiska domän (oftast samma enkla sats).",
          "Det får aldrig referera till subjektet.",
          "Det måste alltid stå i förfältet.",
          "Det kan endast referera till feminina substantiv."
        ],
        "answer": 0,
        "explanation": "Princip A föreskriver att anaforer (reflexivpronomen) måste bindas lokalt till en antecedent i samma satskärna.",
        "feedback": [
          "Korrekt! Reflexivpronomen kräver lokal subjektsbindning inom samma enkla sats.",
          "Fel. Detta beskriver tvärtom personliga pronomen (Princip B).",
          "Fel. Reflexivpronomen kan inte stå ensamma i förfältet.",
          "Fel. Sich används för alla genus och numerus i 3:e person."
        ]
      },
      {
        "id": "x063-q3",
        "context": "Bindningsprincip B.",
        "prompt": "Varför kan meningen \\"Peter wäscht ihn\\" inte betyda att Peter tvättar sig själv?",
        "options": [
          "Enligt bindningsprincip B måste personliga pronomina (ihn) vara fria inom sin lokala domän; koreferens med lokalt subjekt är blockerad.",
          "Eftersom ihn är ett feminint pronomen.",
          "Eftersom verbet waschen inte kan ta ackusativ.",
          "Eftersom kommatecken saknas."
        ],
        "answer": 0,
        "explanation": "Personliga pronomina kan inte binda till det lokala subjektet; om Peter tvättar sig själv krävs det reflexiva sich.",
        "feedback": [
          "Korrekt! Princip B tvingar personliga pronomina att referera till en extern entitet.",
          "Fel. Ihn är maskulinum ackusativ singular.",
          "Fel. Waschen styr ackusativobjekt.",
          "Fel. Inget komma behövs i en enkel sats."
        ]
      },
      {
        "id": "x063-q4",
        "context": "Svensk-tysk possessivkontrast.",
        "prompt": "Hur skiljer sig tyskans possessivsystem från svenskans reflexiva system med *sin/sitt/sina*?",
        "options": [
          "Tyskan saknar ett separat reflexivt possessivpronomen; *sein* används för både 'hans' och 'sin', och kontexten avgör tolkningen.",
          "Tyskan har fyra olika reflexiva possessivpronomen.",
          "Tyskan tillåter inte possessiva pronomen i 3:e person.",
          "Svenskan och tyskan har exakt identiska regelsystem här."
        ],
        "answer": 0,
        "explanation": "Tyskan saknar en morfologisk distinktion motsvarande sin/hans; sein täcker båda funktionerna.",
        "feedback": [
          "Korrekt! 'sein' fungerar både reflexivt och icke-reflexivt i tyskan.",
          "Fel. Tyskan har inga separata reflexiva possessiv.",
          "Fel. Possessivpronomen finns för samtliga personer.",
          "Fel. Svenskans distinktion mellan sin och hans saknas morfologiskt i tyskan."
        ]
      },
      {
        "id": "x063-q5",
        "context": "Disambiguering med dessen.",
        "prompt": "Hur gör man på tyska för att otvetydigt klargöra att man syftar på en annan mans fru (motsvarande svenskans 'hans fru', inte 'sin fru') i: \\"Peter sprach mit Hans und rief ... Frau an\\"? ",
        "options": [
          "Genom demonstrativ genitiv: dessen Frau (Hans fru, inte Peters egen).",
          "Genom att använda sich Frau.",
          "Genom att böja sein i dativ.",
          "Det går inte att uttrycka på tyska."
        ],
        "answer": 0,
        "explanation": "Demonstrativa genitivformer som dessen och deren pekar entydigt ut den senast nämnda icke-subjektiva personen.",
        "feedback": [
          "Helt rätt! 'dessen Frau' utesluter Peter och refererar entydigt till Hans.",
          "Fel. Sich kan inte kombineras med substantiv som possessiv.",
          "Fel. Frau står i ackusativ som direkt objekt.",
          "Fel. Dessen/deren är standardspråkets etablerade metod för detta."
        ]
      },
      {
        "id": "x063-q6",
        "context": "Katafor.",
        "prompt": "Vad är en katafor i meningen \\"Obwohl er müde war, las Peter das ganze Buch durch\\"? ",
        "options": [
          "Pronomenet er, eftersom det introduceras före sin fulla antecedent Peter och pekar framåt i texten.",
          "Ordet Buch, eftersom det står sist.",
          "Partikeln durch, eftersom den separeras.",
          "Subjunktionen obwohl."
        ],
        "answer": 0,
        "explanation": "En katafor föregriper sin referent och pekar framåt mot det fulla substantivet längre fram i texten.",
        "feedback": [
          "Korrekt! 'er' är en katafor som pekar framåt mot 'Peter'.",
          "Fel. Buch är ett vanligt nominalt objekt.",
          "Fel. Durch är en verbpartikel.",
          "Fel. Obwohl är en koncessiv subjunktion."
        ]
      }
    ]
  },
  '/docs/fordjupning/semantik/semantiska-roller-och-perspektiv': {
    "lessonId": "X066",
    "href": "/docs/fordjupning/semantik/semantiska-roller-och-perspektiv",
    "title": "Snabbkoll: Semantiska roller och perspektiv",
    "questions": [
      {
        "id": "x066-q1",
        "context": "Semantisk roll kontra syntaktisk funktion.",
        "prompt": "Vad är den grundläggande skillnaden mellan en syntaktisk funktion (subjekt, objekt) och en semantisk roll (theta-roll)?",
        "options": [
          "Syntaktisk funktion beskriver ledets grammatiska relation och kasus i satsen, medan den semantiska rollen beskriver entitetens funktion och delaktighet i den verkliga händelsen (Agens, Patiens, Experiencer).",
          "Syntaktisk funktion gäller endast i skrift och semantisk roll i tal.",
          "De är synonyma begrepp som alltid sammanfaller.",
          "Semantiska roller bestämmer enbart pluraländelser."
        ],
        "answer": 0,
        "explanation": "Ett grammatiskt subjekt kan ikläda sig olika semantiska roller beroende på predikat och diates.",
        "feedback": [
          "Korrekt! Grammatisk form (subjekt) kontra semantisk händelseroll (Agens/Patiens).",
          "Fel. Båda analysnivåerna gäller skrift och tal.",
          "Fel. Det finns ingen ett-till-ett-mappning mellan dem.",
          "Fel. Morfologiska ändelser styrs av böjningsklasser."
        ]
      },
      {
        "id": "x066-q2",
        "context": "Patiens i passiv.",
        "prompt": "Vilken semantisk roll har subjektet i passivsatsen \\"Das Fenster wurde von dem Jungen eingeworfen\\"? ",
        "options": [
          "Patiens (den entitet som påverkas eller genomgår förändringen/skadan).",
          "Agens (den som avsiktligt kastar).",
          "Instrument.",
          "Rezipient."
        ],
        "answer": 0,
        "explanation": "I passiv främjas objektet (Patiens) till grammatiskt subjekt, medan agenten degraderas till prepositionsfras.",
        "feedback": [
          "Korrekt! Fönstret genomgår skadan och är därmed Patiens.",
          "Fel. Pojken är Agens (uttryckt i von-frasen).",
          "Fel. Instrument vore stenen som krossade rutan.",
          "Fel. Ingen överföring till mottagare äger rum."
        ]
      },
      {
        "id": "x066-q3",
        "context": "Experiencer i dativ.",
        "prompt": "Vilken semantisk roll har pronomenet *Mir* i uttrycket \\"Mir ist kalt\\"? ",
        "options": [
          "Experiencer (den kännande upplevaren av ett tillstånd).",
          "Agens (den som skapar kylan).",
          "Instrument.",
          "Lokativ."
        ],
        "answer": 0,
        "explanation": "Tyskan kodar ofta kännande och upplevande animata entiteter med dativ (Experiencer-dativ).",
        "feedback": [
          "Korrekt! Talaren erfar kylan och är därmed Experiencer.",
          "Fel. Talaren är inte upphovsman till kylan.",
          "Fel. Talaren är inte ett verktyg.",
          "Fel. Det är en animat person, inte en geografisk plats."
        ]
      },
      {
        "id": "x066-q4",
        "context": "Konversiva verbpar.",
        "prompt": "Vad kännetecknar konversiva verbpar som *kaufen* och *verkaufen*?",
        "options": [
          "De beskriver samma objektiva händelse ur två motsatta aktörers perspektiv genom att kasta om argumentens grammatiska roller.",
          "De betyder exakt samma sak och kan bytas ut utan att kasta om orden.",
          "De kan endast böjas i preteritum.",
          "De förbjuder användning av ackusativobjekt."
        ],
        "answer": 0,
        "explanation": "Konverser (kaufen/verkaufen, leihen/borgen) perspektiverar en relation från köparens respektive säljarens synvinkel.",
        "feedback": [
          "Korrekt! Samma transaktion sedd från köparens vs säljarens håll.",
          "Fel. Att byta ut dem utan att kasta om aktörerna ändrar påståendet radikalt.",
          "Fel. De används i samtliga tempus.",
          "Fel. Båda styr normalt ackusativobjekt för varan."
        ]
      },
      {
        "id": "x066-q5",
        "context": "Perspektivbyte: mögen kontra gefallen.",
        "prompt": "Hur fördelas de semantiska rollerna i \\"Der Film gefällt mir\\" i jämförelse med \\"Ich mag den Film\\"? ",
        "options": [
          "Vid 'gefallen' är filmen Stimulus (subjekt) och jag är Experiencer (dativ); vid 'mögen' är jag Experiencer (subjekt) och filmen Stimulus (objekt).",
          "Det finns ingen rollskillnad; grammatiken är identisk.",
          "Vid 'gefallen' är filmen Agens som medvetet utför en handling.",
          "Vid 'mögen' saknas Experiencer."
        ],
        "answer": 0,
        "explanation": "Mögen sätter upplevaren som subjekt; gefallen sätter den utlösande faktorn som subjekt och upplevaren i dativ.",
        "feedback": [
          "Korrekt! Perspektivet kastas om: Stimulus som subjekt vid gefallen.",
          "Fel. Grammatiken är helt omkastad (dativobjekt vs nominativsubjekt).",
          "Fel. Filmen är livlös och kan inte agera med avsikt som Agens.",
          "Fel. Subjektet ich är upplevaren (Experiencer) vid mögen."
        ]
      },
      {
        "id": "x066-q6",
        "context": "Instrument som subjekt.",
        "prompt": "Vilken semantisk roll har subjektet i meningen \\"Der Schlüssel öffnete das Schloss\\"? ",
        "options": [
          "Instrument (verktyget genom vilket handlingen sker).",
          "Agens (en medveten aktör).",
          "Patiens.",
          "Rezipient."
        ],
        "answer": 0,
        "explanation": "Nyckeln är inte en medveten mänsklig agent utan det instrument som möjliggör öppnandet och som främjats till subjekt.",
        "feedback": [
          "Helt rätt! Nyckeln är verktyget/instrumentet för handlingen.",
          "Fel. Nyckeln saknar medvetande och avsikt.",
          "Fel. Låset (das Schloss) är Patiens.",
          "Fel. Nyckeln är ingen mottagare."
        ]
      }
    ]
  },
  '/docs/fordjupning/semantik/tids-och-rumsdeixis': {
    "lessonId": "X067",
    "href": "/docs/fordjupning/semantik/tids-och-rumsdeixis",
    "title": "Snabbkoll: Tids- och rumsdeixis",
    "questions": [
      {
        "id": "x067-q1",
        "context": "Riktningsregeln hin kontra her.",
        "prompt": "Vilken är grundregeln för valet mellan riktningspartiklarna *hin* och *her* i standardtyska?",
        "options": [
          "her anger rörelse MOT talaren (origo); hin anger rörelse BORT från talaren.",
          "hin anger rörelse uppåt; her anger rörelse nedåt.",
          "her används enbart vid personer; hin enbart vid föremål.",
          "Det finns ingen regel; de är fritt utbytbara varianter."
        ],
        "answer": 0,
        "explanation": "Tyskans vektorsystem är talarcentrerat: her = mot talarens plats; hin = bort från talarens plats.",
        "feedback": [
          "Korrekt! her = mot talaren; hin = bort från talaren.",
          "Fel. Riktning uppåt/nedåt anges av auf/unter (herauf/hinunter).",
          "Fel. Systemet gäller alla typer av rumsrörelser.",
          "Fel. Att blanda ihop dem är ett grovt geometriskt fel i tyskan."
        ]
      },
      {
        "id": "x067-q2",
        "context": "Konkret tillämpning av rumsdeixis.",
        "prompt": "Du står inne i ett hus och ropar till ett barn i trädgården att komma in. Vad ropar du?",
        "options": [
          "Komm herein! (Rörelse mot talaren som befinner sig inne).",
          "Geh hinein!",
          "Komm hinein!",
          "Geh heraus!"
        ],
        "answer": 0,
        "explanation": "Eftersom talaren befinner sig inne i rummet rör sig barnet mot talaren: herein är obligatoriskt.",
        "feedback": [
          "Korrekt! Talaren är inne; rörelsen går mot talaren = herein.",
          "Fel. 'Geh hinein' säger man när man själv står ute och skickar in någon.",
          "Fel. 'Komm hinein' är en geometrisk motsägelse i tysk standardgrammatik.",
          "Fel. 'Geh heraus' förutsätter att man är ute och ber någon gå."
        ]
      },
      {
        "id": "x067-q3",
        "context": "Deiktiska kontra anaforiska tidsadverb.",
        "prompt": "Vilket tidsadverbial ska användas i en historisk text i preteritum för att uttrycka 'dagen innan' (relativt till den historiska händelsen, inte till igår)?",
        "options": [
          "am Vortag (eller am Tag zuvor).",
          "gestern.",
          "heute.",
          "morgen früh."
        ],
        "answer": 0,
        "explanation": "Gestern är strikt deiktiskt förankrat i talarens nutid; för en historisk referenstid krävs det anaforiska am Vortag.",
        "feedback": [
          "Korrekt! 'am Vortag' är det anaforiska uttrycket för dagen före händelsen.",
          "Fel. 'gestern' betyder gårdagen relativt idag.",
          "Fel. 'heute' betyder nutidens idag.",
          "Fel. 'morgen früh' pekar mot morgondagen."
        ]
      },
      {
        "id": "x067-q4",
        "context": "Episk dåtid och deiktisk projektion.",
        "prompt": "Vad innebär det litterära fenomenet med episk dåtid i meningen \\"Morgen war Weihnachten\\"? ",
        "options": [
          "Berättaren projicerar tidsdeixis in i romanfigurens inre medvetande (upplevd framtid) medan grammatiken behåller berättande preteritum.",
          "Det är ett tryckfel som inte borde godkännas i god litteratur.",
          "Det bevisar att julen firades i det förflutna.",
          "Det innebär att julafton ställdes in."
        ],
        "answer": 0,
        "explanation": "Käte Hamburgers berömda analys visar att fiktionens preteritum kan kombineras med deiktiska nu/framtidsadverb i erlebte Rede.",
        "feedback": [
          "Helt rätt! Deiktisk projektion i skönlitterärt berättande.",
          "Fel. Detta är ett klassiskt, erkänt stilgrepp i tysk litteratur.",
          "Fel. Betydelsen är att figuren förväntansfullt ser fram emot morgondagen.",
          "Fel. Julen firas som planerat i fiktionen."
        ]
      },
      {
        "id": "x067-q5",
        "context": "Distinktionen vorhin kontra nachher.",
        "prompt": "Hur skiljer sig *vorhin* från *nachher* i standardtyska?",
        "options": [
          "vorhin avser en tidpunkt nyss i det förflutna (dåtid); nachher avser en tidpunkt strax/senare idag (framtid).",
          "vorhin avser framtid och nachher avser dåtid.",
          "Båda betyder exakt samma sak som 'jetzt'.",
          "vorhin används endast på morgonen och nachher på kvällen."
        ],
        "answer": 0,
        "explanation": "Vorhin = nyss (tidigare idag); nachher = strax / senare idag (framåt i tiden).",
        "feedback": [
          "Korrekt! vorhin = dåtid (nyss); nachher = framtid (senare idag).",
          "Fel. Det är precis tvärtom.",
          "Fel. Ingen av dem är identisk med nuet jetzt.",
          "Fel. De kan användas under alla tider på dygnet."
        ]
      },
      {
        "id": "x067-q6",
        "context": "Talspråkliga r-former.",
        "prompt": "Vilken stilistisk status har de reducerade formerna *rein, raus, runter, rüber* i tyskan?",
        "options": [
          "De är mycket vanliga i ledigt vardagstal, men i skriven standard och formell prosa krävs alltid de fulla formerna med hin- och her-.",
          "De är de enda godkända formerna i officiella ordböcker.",
          "De är arkaiska ord från medeltiden som inte används längre.",
          "De får endast användas i Bayern."
        ],
        "answer": 0,
        "explanation": "R-formerna är typiska för talspråklig reduktion; formellt och skriftligt språk upprätthåller distinktionen mellan hinein/herein etc.",
        "feedback": [
          "Korrekt! Talspråklig reduktion kontra skriftlig standardnorm.",
          "Fel. Standardnormen föreskriver de fulla formerna.",
          "Fel. De är extremt levande i modernt talspråk.",
          "Fel. De används i hela det tyska språkområdet i vardaglig kontext."
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

const updatedContent = content.slice(0, lastClosingIndex) + group5cQuizzes + content.slice(lastClosingIndex);
fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log("Successfully appended Group 5C quizzes to data/learning-quizzes.ts");
