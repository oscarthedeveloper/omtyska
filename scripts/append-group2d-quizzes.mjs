import fs from 'node:fs';
import path from 'node:path';

const quizzes = {
  '/docs/fordjupning/nominalfras/nominalfrasens-fullstandiga-struktur': {
    lessonId: 'X015',
    href: '/docs/fordjupning/nominalfras/nominalfrasens-fullstandiga-struktur',
    title: 'Snabbkoll: Nominalfrasens fullständiga struktur',
    questions: [
      {
        id: 'x015-q1',
        context: 'Nominalfrasens ramkonstruktion.',
        prompt: 'Vad utgör vänster- och högerramen i den tyska nominalfrasen (Klammerstruktur)?',
        options: [
          'Vänsterramen är determinativet (artikeln/pronomenet) och högerramen är frashuvudet (substantivet).',
          'Vänsterramen är verbet och högerramen är objektet.',
          'Vänsterramen är subjektet och högerramen är predikativet.',
          'Vänsterramen är prepositionen och högerramen är kommatecknet.'
        ],
        answer: 0,
        explanation: 'Precis som huvudsatsen har nominalfrasen en klammer: artikel och substantiv ramar in mellanliggande attribut.',
        feedback: [
          'Helt rätt! Mellan dessa två ramar kan komplexa adjektiv- och participfraser fällas in.',
          'Fel. Det beskriver satsens verbalram (Satzklammer).',
          'Fel. Det avser satsens syntaktiska funktioner.',
          'Fel. Prepositioner inleder prepositionsfraser, inte nominalramen.'
        ]
      },
      {
        id: 'x015-q2',
        context: 'Utvidgade participattribut.',
        prompt: 'Vad är ett utvidgat participattribut (erweitertes Partizipialattribut)?',
        options: [
          'Ett particip med egna objekt och adverbial insprängt i fältet mellan artikeln och substantivet.',
          'Ett particip som sätts i slutet av en relativsats.',
          'Ett hjälpverb som böjs i konjunktiv.',
          'Ett adjektiv som saknar komparation.'
        ],
        answer: 0,
        explanation: 'I t.ex. "die [von der Regierung einberufene] Konferenz" bildar participet med sina komplement ett insprängt attribut.',
        feedback: [
          'Korrekt! Detta är ett framträdande särdrag i tysk akademisk och journalistisk sakprosa.',
          'Fel. Då är det en relativsats, inte ett participattribut.',
          'Fel. Det berör inte verbets modus.',
          'Fel. Participattribut kan kompareras och modifieras.'
        ]
      },
      {
        id: 'x015-q3',
        context: 'Högerattribut i nominalfrasen.',
        prompt: 'Vilka element placeras typiskt i det efterställda fältet (högerattribut) efter substantivhuvudet?',
        options: [
          'Genitivattribut, prepositionsattribut, appositioner, infinitivfraser och relativsatser.',
          'Böjda adjektiv och artiklar.',
          'Finita verb i presens.',
          'Kvantifikatorer som "alle" och "beide".'
        ],
        answer: 0,
        explanation: 'Efterställda attribut kan inte böjas in framför substantivet och placeras därför som högerkomplement.',
        feedback: [
          'Helt rätt! Das Buch [meines Vaters] [über die Grammatik] [das ich gestern kaufte].',
          'Fel. Böjda adjektiv står alltid som vänsterattribut framför substantivet.',
          'Fel. Finita verb hör hemma i satser, inte som nominala högerattribut.',
          'Fel. Kvantifikatorer står före artikeln i vänsterramen.'
        ]
      },
      {
        id: 'x015-q4',
        context: 'Avkodningsstrategi för nominalfraser.',
        prompt: 'Hur avkodar man lämpligast en lång utvidgad participfras vid läsning av tysk sakprosa?',
        options: [
          'Identifiera artikeln, hoppa direkt till substantivet för att förstå kärnan, och läs sedan participets bestämningar bakåt.',
          'Översätta varje ord strikt i den ordning de står från vänster till höger.',
          'Börja med att stryka alla prepositioner.',
          'Leta alltid efter det finita verbet först inuti nominalramen.'
        ],
        answer: 0,
        explanation: 'Genom att identifiera ramens ändpunkter (artikel och substantiv) framträder grundbetydelsen omedelbart.',
        feedback: [
          'Korrekt! Att läsa mekaniskt från vänster till höger leder lätt till förvirring vid långa inskott.',
          'Fel. Ord-för-ord-läsning bryter mot den tyska klammerstrukturen.',
          'Fel. Prepositionerna anger participets aktanter.',
          'Fel. Det finns inga finita verb inuti en nominalram.'
        ]
      },
      {
        id: 'x015-q5',
        context: 'Rekursiv inbäddning.',
        prompt: 'Vad innebär rekursivitet i en tysk nominalfras?',
        options: [
          'Att en nominalfras kan innehålla en annan nominalfras som attribut, vilken i sin tur innehåller ytterligare nominalfraser.',
          'Att nominalfrasen måste upprepas två gånger i varje huvudsats.',
          'Att substantivet byter genus beroende på föregående ord.',
          'Att artikeln böjs i två olika kasus samtidigt.'
        ],
        answer: 0,
        explanation: 'Rekursivitet skapar nästlade strukturer: die Zunahme [der Schäden [des Sturms [des letzten Jahres]]].',
        feedback: [
          'Helt rätt! Rekursiv inbäddning är en grundläggande egenskap i tysk kanslistil.',
          'Fel. Upprepning är en stilistisk figur, inte rekursivitet.',
          'Fel. Genus är stabilt hos varje enskilt substantiv.',
          'Fel. En fras har alltid exakt ett kasus i en given syntaktisk position.'
        ]
      },
      {
        id: 'x015-q6',
        context: 'Bestämdhet och svensk interferens.',
        prompt: 'Varför är dubbel bestämdhet (*"das neue Autodas") strikt förbjuden i tysk syntax?',
        options: [
          'Eftersom tyskans determinativsystem markerar bestämdhet uteslutande en gång, i nominalfrasens vänstra klammer.',
          'Därför att substantiv inte får ha adjektiv i tyska.',
          'Därför att tyska saknar bestämd artikel.',
          'Det är endast tillåtet i sydtyska dialekter.'
        ],
        answer: 0,
        explanation: 'I skandinaviska språk finns dubbel bestämdhet (den nya bilen), men tyska tillåter endast determinativet före substantivet (das neue Auto).',
        feedback: [
          'Korrekt! En vanlig svensk interferensfälla är att vilja lägga till en slutartikel.',
          'Fel. Adjektiv förekommer i de flesta nominalfraser.',
          'Fel. Tyskan har ett distinkt bestämt artikelsystem (der/die/das).',
          'Fel. Dubbel bestämdhet existerar inte i någon tysk standarddialekt.'
        ]
      }
    ]
  },
  '/docs/fordjupning/nominalfras/genitivattribut-och-dess-tolkningar': {
    lessonId: 'X017',
    href: '/docs/fordjupning/nominalfras/genitivattribut-och-dess-tolkningar',
    title: 'Snabbkoll: Genitivattribut och dess tolkningar',
    questions: [
      {
        id: 'x017-q1',
        context: 'Subjektiv kontra objektiv genitiv.',
        prompt: 'Vad är den avgörande skillnaden mellan "genitivus subiectivus" och "genitivus obiectivus"?',
        options: [
          'Subiectivus anger den som utför handlingen (subjektet); obiectivus anger den eller det som handlingen riktas mot (objektet).',
          'Subiectivus används enbart om människor; obiectivus om döda ting.',
          'Subiectivus står före substantivet; obiectivus står alltid efter.',
          'Det finns ingen semantisk skillnad; det är två namn på samma sak.'
        ],
        answer: 0,
        explanation: 'Die Ankunft des Zuges (tåget anländer = subjekt); die Erforschung des Meeres (man utforskar havet = objekt).',
        feedback: [
          'Helt rätt! Denna distinktion härrör från relationen till det underliggande verbet.',
          'Fel. Båda kan gälla personer eller ting.',
          'Fel. Båda står normalt efterställda i modern tyska.',
          'Fel. Skillnaden är fundamentalt betydelseskiljande.'
        ]
      },
      {
        id: 'x017-q2',
        context: 'Ambiguös referens i genitiver.',
        prompt: 'Hur kan frasen "die Beschreibung des Zeugen" tolkas på två helt olika sätt?',
        options: [
          'Antingen som att vittnet beskriver någon annan (subiectivus) eller som att någon beskriver vittnets utseende (obiectivus).',
          'Antingen som nutid eller som dåtid.',
          'Antingen som singularis eller pluralis.',
          'Frasen är entydig och kan endast betyda att vittnet talar.'
        ],
        answer: 0,
        explanation: 'Eftersom beschreiben är transitivt kan genitiven representera antingen verbets subjekt eller dess ackusativobjekt.',
        feedback: [
          'Korrekt! För att undvika tvetydighet används prepositionsfraser: die Beschreibung des Täters DURCH den Zeugen.',
          'Fel. Genitivattribut bär inget tempus.',
          'Fel. Zeugen är singularis (des Zeugen).',
          'Fel. Frasen är ett klassiskt skolboksexempel på strukturell ambiguitet.'
        ]
      },
      {
        id: 'x017-q3',
        context: 'Placering av genitivattribut.',
        prompt: 'När tillåts ett föregående genitivattribut (t.ex. "Goethes Faust") i modern standardtyska?',
        options: [
          'I regel endast med egennamn och släktskapsord utan artikel.',
          'Med alla feminina substantiv.',
          'Endast i tidningsrubriker.',
          'Det är förbjudet i all modern tyska.'
        ],
        answer: 0,
        explanation: 'Föregående genitiv (saxonisk genitiv) är i dag reserverad för namn: Goethes Faust, Marias Buch, Vaters Brille.',
        feedback: [
          'Helt rätt! Att placera vanliga substantiv före (des Meeres Wellen) är poetiskt eller arkaiskt.',
          'Fel. Feminina ord utan namn kan inte stå föregående.',
          'Fel. Det används i alla textgenrer för egennamn.',
          'Fel. Med egennamn är det standard i alla register.'
        ]
      },
      {
        id: 'x017-q4',
        context: 'Artikelblockering vid föregående genitiv.',
        prompt: 'Vad sker med den bestämda artikeln när ett personnamn i genitiv föregår substantivet?',
        options: [
          'Artikeln blockeras helt och tas bort: "Schillers Werke", inte *"die Schillers Werke".',
          'Artikeln flyttas sist i meningen.',
          'Artikeln måste stå i dativ framför namnet.',
          'Artikeln ändras automatiskt till obestämd artikel.'
        ],
        answer: 0,
        explanation: 'Egennamnet i genitiv intar determinativets plats i nominalramen och gör ytterligare artiklar omöjliga.',
        feedback: [
          'Korrekt! Att skriva *das Peters Auto är ett grovt grammatiskt fel på tyska.',
          'Fel. Artiklar kan inte flyttas till satsens slut.',
          'Fel. Det finns ingen artikel framför föregående genitivnamn.',
          'Fel. Ingen artikel får sättas ut.'
        ]
      },
      {
        id: 'x017-q5',
        context: 'Obligatorisk von-omskrivning.',
        prompt: 'I vilket fall är en omskrivning med "von" + dativ obligatorisk i stället för genitiv?',
        options: [
          'När substantivet saknar artikel och böjningsmärke som kan visa kasus (t.ex. "der Konsum von Fleisch").',
          'När substantivet avser en person man känner väl.',
          'Varje gång substantivet är i plural.',
          'När verbet i huvudsatsen är i passiv.'
        ],
        answer: 0,
        explanation: 'Om kasus inte syns på artikeln eller substantivet (Fleisch saknar artikel) kräver tyskan von + dativ för tydlighet.',
        feedback: [
          'Helt rätt! Formen *der Konsum Fleischs eller *der Konsum Fleische är icke-standard.',
          'Fel. Känslomässig närhet påverkar inte grammatisk kasuskontroll.',
          'Fel. Pluralgenitiver har artikeln der (der Kinder).',
          'Fel. Passiv diates styr inte nominalattributens form.'
        ]
      },
      {
        id: 'x017-q6',
        context: 'Undvikande av genitivkaskader.',
        prompt: 'Hur uttrycks både subjekt och objekt samtidigt vid ett handlingssubstantiv för att undvika dubbla genitiver?',
        options: [
          'Objektet sätts i genitiv och subjektet uttrycks med en prepositionsfras (ofta med "durch" eller "von").',
          'Båda orden sätts efter varandra i genitiv: *"die Befreiung der Geiseln der Armee".',
          'Substantivet förvandlas till ett adjektiv.',
          'Objektet sätts i ackusativ direkt efter substantivet.'
        ],
        answer: 0,
        explanation: 'För att undvika förvirrande genitivkaskader används genomföraren med durch: die Befreiung der Geiseln durch die Armee.',
        feedback: [
          'Korrekt! Detta är den etablerade standardmetoden i administrativ och militär sakprosa.',
          'Fel. Två på varandra följande genitiver gör meningen oläsbar.',
          'Fel. Det förändrar frasens konstruktion i onödan.',
          'Fel. Substantiv kan inte styra rent ackusativobjekt.'
        ]
      }
    ]
  },
  '/docs/fordjupning/nominalfras/apposition-och-kasus': {
    lessonId: 'X018',
    href: '/docs/fordjupning/nominalfras/apposition-och-kasus',
    title: 'Snabbkoll: Apposition och kasus',
    questions: [
      {
        id: 'x018-q1',
        context: 'Huvudregeln för lösa appositioner.',
        prompt: 'Vad är huvudregeln för kasus hos en lös apposition (lockere Apposition) som omges av kommatecken?',
        options: [
          'Den kongruerar i kasus med det substantiv eller pronomen den bestämmer.',
          'Den står alltid obligatoriskt i nominativ oavsett huvudordets kasus.',
          'Den måste alltid stå i genitiv.',
          'Den anpassar sitt kasus efter verbets subjekt.'
        ],
        answer: 0,
        explanation: 'En lös apposition ärver huvudordets kasus: ich danke Herrn Meier (dativ), meinem Chef (dativ).',
        feedback: [
          'Helt rätt! Kasuskongruens är det grundläggande kravet för lösa appositioner i standardtyska.',
          'Fel. Nominativ i sneda kasus kallas nominativus pendens och är i regel icke-standard.',
          'Fel. Genitiv krävs endast om huvudordet står i genitiv.',
          'Fel. Appositionen följer sitt eget huvudord, inte satsens subjekt.'
        ]
      },
      {
        id: 'x018-q2',
        context: 'Bundna appositioner med ortnamn.',
        prompt: 'Hur böjs ett stadsnamn som står som bunden apposition efter substantivet "Stadt" (t.ex. "die Straßen der Stadt Berlin")?',
        options: [
          'Stadsnamnet står oböjt i nominativ: "der Stadt Berlin".',
          'Stadsnamnet måste ta genitiv-s: *"der Stadt Berlins".',
          'Stadsnamnet måste föregås av prepositionen von: *"der Stadt von Berlin".',
          'Ordet Stadt måste strykas.'
        ],
        answer: 0,
        explanation: 'Vid bundna geografiska appositioner böjs kategorisubstantivet (der Stadt), medan namnet förblir i nollform.',
        feedback: [
          'Korrekt! Der Stadt Hamburg, des Landes Hessen, im Monat Mai.',
          'Fel. Att lägga till -s på namnet är felaktigt när Stadt redan står i genitiv.',
          'Fel. Prepositionen von används inte i denna fasta förbindelse.',
          'Fel. Båda orden samverkar i frasen.'
        ]
      },
      {
        id: 'x018-q3',
        context: 'Böjning av titeln Herr.',
        prompt: 'Hur böjs titeln "Herr" när den står som bunden apposition före ett efternamn i dativ (t.ex. "mit ___ Schmidt")?',
        options: [
          'Med svag deklination: "mit Herrn Schmidt".',
          'Oböjd: *"mit Herr Schmidt".',
          'Med stark ändelse: *"mit Herrem Schmidt".',
          'Med genitivändelse: *"mit Herrs Schmidt".'
        ],
        answer: 0,
        explanation: 'Herr är ett svagt substantiv och tar obligatoriskt -n i alla sneda kasus: Herrn Schmidt.',
        feedback: [
          'Helt rätt! Att säga *mit Herr Schmidt är en mycket vanlig interferensfälla.',
          'Fel. Herr får inte lämnas oböjt i sneda kasus.',
          'Fel. Formen Herrem existerar inte.',
          'Fel. Dativ kräver -n, inte -s.'
        ]
      },
      {
        id: 'x018-q4',
        context: 'Kasuskongruens vid dativverb.',
        prompt: 'Vilket kasus ska appositionen stå i: "Ich begegnete Thomas, ___ (ein alter Schulfreund)"?',
        options: [
          'Dativ maskulinum: "einem alten Schulfreund", eftersom begegnen styr dativ.',
          'Nominativ maskulinum: "ein alter Schulfreund".',
          'Ackusativ maskulinum: "einen alten Schulfreund".',
          'Genitiv maskulinum: "eines alten Schulfreundes".'
        ],
        answer: 0,
        explanation: 'Eftersom Thomas står i dativ måste den lösa appositionen kongruera i dativ: einem alten Schulfreund.',
        feedback: [
          'Korrekt! Kasuskongruensen överförs från huvudordet till appositionen.',
          'Fel. Nominativ bryter mot standardtysk kasuskongruens.',
          'Fel. Begegnen styr inte ackusativ.',
          'Fel. Det finns ingen äganderelation här.'
        ]
      },
      {
        id: 'x018-q5',
        context: 'Kasusattraktion.',
        prompt: 'Vad kallas fenomenet när en apposition antar ett kasus styrt av en intilliggande preposition snarare än huvudordets logiska kasus?',
        options: [
          'Kasusattraktion.',
          'Auslautverhärtung.',
          'Ellips.',
          'Topikalisering.'
        ],
        answer: 0,
        explanation: 'Kasusattraktion innebär att ett ord attraheras av en närliggande markör i stället för att följa strikt kongruens.',
        feedback: [
          'Helt rätt! Ett välkänt stilfenomen i både klassisk och modern tysk syntax.',
          'Fel. Auslautverhärtung är ett fonologiskt fenomen.',
          'Fel. Ellips är utelämnande av ord.',
          'Fel. Topikalisering är flytt till fundamentet.'
        ]
      },
      {
        id: 'x018-q6',
        context: 'Kommatecken vid appositioner.',
        prompt: 'Hur skiljer sig lös apposition från bunden apposition vad gäller interpunktion?',
        options: [
          'Lös apposition avskiljs alltid med kommatecken; bunden apposition skrivs utan komma.',
          'Bunden apposition har alltid kommatecken; lös apposition har kolon.',
          'Båda har alltid obligatoriskt kommatecken.',
          'Kommatecken är helt valfritt vid båda typerna.'
        ],
        answer: 0,
        explanation: 'Lösa appositioner omges alltid av kommatecken (eller tankstreck); bundna appositioner har aldrig komma.',
        feedback: [
          'Korrekt! Mein Bruder, der Arzt, ... (lös) kontra Mein Bruder Thomas ... (bunden).',
          'Fel. Det är precis tvärtom för kommatecknet.',
          'Fel. Bundna appositioner får aldrig ha kommatecken.',
          'Fel. Kommareglerna för appositioner är strikta i tysk ortografi.'
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
console.log('Finished updating learning-quizzes.ts with Group 2D quizzes.');
