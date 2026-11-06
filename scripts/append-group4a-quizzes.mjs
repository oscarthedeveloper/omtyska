import fs from 'node:fs';
import path from 'node:path';

const quizzes = {
  '/docs/fordjupning/syntax/topologiska-falt-i-fullstandig-modell': {
    lessonId: 'X039',
    href: '/docs/fordjupning/syntax/topologiska-falt-i-fullstandig-modell',
    title: 'Snabbkoll: Topologiska fält i fullständig modell',
    questions: [
      {
        id: 'x039-q1',
        context: 'Fältmodellens klamrar i huvudsats.',
        prompt: 'Vad ryms i den vänstra respektive högra klammern i en tysk huvudsats (V2)?',
        options: [
          'Vänstra klammern rymmer det finita verbet; högra klammern rymmer infinita verbformer eller verbpartiklar.',
          'Vänstra klammern rymmer subjektet; högra klammern rymmer objektet.',
          'Vänstra klammern rymmer subjunktionen; högra klammern är tom.',
          'Båda klamrarna rymmer tidsadverbial.'
        ],
        answer: 0,
        explanation: 'I en tysk huvudsats (V2/V1) bildar det finita verbet den vänstra klammern, medan eventuella infinita verb (particip, infinitiv) eller partiklar bildar den högra klammern.',
        feedback: [
          'Helt rätt! Det finita verbet i vänstra klammern och infinita verb/partiklar i den högra utgör satsramen.',
          'Fel. Subjekt och objekt står i förfältet eller mittfältet, aldrig i klamrarna.',
          'Fel. Subjunktionen står i vänstra klammern i inledda bisatser (VL), inte i V2-huvudsatser.',
          'Fel. Adverbial står i fälten, inte i klamrarna.'
        ]
      },
      {
        id: 'x039-q2',
        context: 'Förfältets restriktion.',
        prompt: 'Hur många syntaktiska konstituenter får stå i förfältet (Vorfeld) i en tysk påståendesats?',
        options: [
          'Exakt en konstituent (som dock kan bestå av en hel fras eller en hel bisats).',
          'Alltid exakt två konstituenter (ett subjekt och ett adverbial).',
          'Hur många konstituenter som helst så länge de är korta.',
          'Förfältet måste alltid vara tomt i påståendesatser.'
        ],
        answer: 0,
        explanation: 'En tysk V2-sats tillåter strikt endast en konstituent i förfältet före det finita verbet.',
        feedback: [
          'Korrekt! Principen om exakt en konstituent i Vorfeld är grundläggande för tysk V2-syntax.',
          'Fel. Att ha två konstituenter i förfältet är ett grovt syntaxfel (*Gestern der Mann kam).',
          'Fel. Antalet ord är obegränsat inom en fras, men det måste vara EN konstituent.',
          'Fel. Tomt förfält förekommer i V1-satser (frågor, imperativer), inte i normala påståendesatser.'
        ]
      },
      {
        id: 'x039-q3',
        context: 'Satstypen V1 (Stirnsatz).',
        prompt: 'Vilken av följande satser representerar en V1-topologi med tomt förfält?',
        options: [
          'Hätte ich das gewusst, wäre ich zu Hause geblieben.',
          'Gestern hat er den Brief abgeschickt.',
          'Weil er krank war, blieb er im Bett.',
          'Der Student liest ein Buch.'
        ],
        answer: 0,
        explanation: 'I oinledda villkorssatser och ja/nej-frågor står det finita verbet allra först i den vänstra klammern; förfältet är helt tomt (V1).',
        feedback: [
          'Helt rätt! "Hätte ich das gewusst" är en V1-sats med tomt förfält.',
          'Fel. Här står Gestern i förfältet (V2-sats).',
          'Fel. Här står hela weil-satsen i förfältet framför blieb.',
          'Fel. Der Student står i förfältet (V2-sats).'
        ]
      },
      {
        id: 'x039-q4',
        context: 'Vor-Vorfeld och samordnande konjunktioner.',
        prompt: 'Varför utlöser ordet "und" i satsen "Und gestern ging er nach Hause" inte inversion?',
        options: [
          'Eftersom und står i Vor-Vorfeld (position noll) och inte räknas som förfält.',
          'Eftersom gestern är ett adjektiv.',
          'Eftersom ging är ett oregelbundet verb.',
          'Satsen är ett syntaxfel på tyska.'
        ],
        answer: 0,
        explanation: 'Samordnande konjunktioner (und, aber, denn, oder, sondern) står i den vänstra periferin (Vor-Vorfeld); förfältet är gestern och verbet ging står korrekt på plats 2.',
        feedback: [
          'Korrekt! Vor-Vorfeld stjäl inte position 1.',
          'Fel. Gestern är ett tidsadverbial.',
          'Fel. Verbets böjningstyp påverkar inte topologin.',
          'Fel. Satsen är helt korrekt och naturlig tyska.'
        ]
      },
      {
        id: 'x039-q5',
        context: 'Satstypen VL i bisatser.',
        prompt: 'Vad kännetecknar den vänstra och högra klammern i en inledd bisats (VL)?',
        options: [
          'Vänstra klammern fylls av subjunktionen (t.ex. dass, weil); högra klammern rymmer hela verbkomplexet inklusive det finita verbet.',
          'Vänstra klammern är tom; högra klammern rymmer subjektet.',
          'Vänstra klammern rymmer det finita verbet; högra klammern rymmer subjunktionen.',
          'Båda klamrarna är tomma.'
        ],
        answer: 0,
        explanation: 'I en VL-bisats (Spannsatz) intar subjunktionen den vänstra klammern, medan det finita verbet placeras allra sist i den högra klammern.',
        feedback: [
          'Helt rätt! Den klassiska tysk-nederländska bisatsramen: subjunktion till vänster, verb till höger.',
          'Fel. Subjektet står i mittfältet, inte i högra klammern.',
          'Fel. Det finita verbet står i högra klammern i bisatser, inte vänstra.',
          'Fel. Klamrarna är stommen i satsen och kan inte båda vara tomma.'
        ]
      },
      {
        id: 'x039-q6',
        context: 'Efterfältet (Nachfeld).',
        prompt: 'Vilket element placeras mest typiskt och regelmässigt i tyskans Nachfeld?',
        options: [
          'En underordnad att- eller för-att-bisats (t.ex. en dass- eller weil-sats).',
          'Ett personligt pronomen i ackusativ.',
          'Satsens finita hjälpverb.',
          'En avskild verbpartikel som auf eller ab.'
        ],
        answer: 0,
        explanation: 'Finita bisatser extraponeras regelmässigt till efterfältet för att avlasta mittfältet: "Er hat gesagt, [dass er kommt]Nachfeld".',
        feedback: [
          'Korrekt! Bisatser extraponeras i princip obligatoriskt till efterfältet.',
          'Fel. Pronomen dras till Wackernagel-position längst fram i mittfältet, aldrig efterfältet.',
          'Fel. Finita hjälpverb står i klamrarna.',
          'Fel. Verbpartiklar bildar själva den högra klammern och får aldrig stå i efterfältet.'
        ]
      }
    ]
  },
  '/docs/fordjupning/syntax/mittfaltets-ordning-och-scrambling': {
    lessonId: 'X040',
    href: '/docs/fordjupning/syntax/mittfaltets-ordning-och-scrambling',
    title: 'Snabbkoll: Mittfältets ordning och scrambling',
    questions: [
      {
        id: 'x040-q1',
        context: 'Pronomenordning vid dubbla objekt.',
        prompt: 'Vilken ordningsföljd är obligatorisk när båda objekten är personliga pronomen (es och ihm)?',
        options: [
          'Er hat es (ack) ihm (dat) gegeben. (Ackusativ före dativ vid pronomen).',
          '*Er hat ihm (dat) es (ack) gegeben.',
          '*Er hat gegeben es ihm.',
          '*Er hat gegeben ihm es.'
        ],
        answer: 0,
        explanation: 'Vid personliga pronomen gäller den strikta Wackernagel-ordningen: ackusativ före dativ (es ihm).',
        feedback: [
          'Helt rätt! Vid pronomen gäller alltid ackusativ före dativ: es ihm, sie mir, es uns.',
          'Fel. Att sätta dativ före ackusativ vid pronomen (*ihm es) är ett grovt syntaxfel.',
          'Fel. Pronomen får inte placeras efter det infinita verbet.',
          'Fel. Ordföljden bryter mot både klammerregeln och pronomenregeln.'
        ]
      },
      {
        id: 'x040-q2',
        context: 'Substantivordning vid neutral grundordning.',
        prompt: 'Hur ordnas två fulla substantivobjekt med bestämd artikel i neutral grundordning?',
        options: [
          'Dativ före ackusativ: "Der Lehrer gibt dem Schüler das Buch."',
          'Ackusativ före dativ: *"Der Lehrer gibt das Buch dem Schüler." (kräver kontrast/scrambling).',
          'Alltid i bokstavsordning.',
          'Substantivobjekt kan inte förekomma i samma sats.'
        ],
        answer: 0,
        explanation: 'Vid fulla nominalfraser med bestämd artikel föredrar tyskans neutrala grundordning Dativ före Ackusativ.',
        feedback: [
          'Korrekt! Grundordningen för fulla substantiv är Dativ före Ackusativ.',
          'Fel. Ackusativ före dativ är en scramblad ordning som kräver specifik fokuskontext.',
          'Fel. Grammatiska och kognitiva faktorer styr, inte bokstavsordning.',
          'Fel. Ditransitiva verb tar naturligtvis två objekt.'
        ]
      },
      {
        id: 'x040-q3',
        context: 'Bestämdhet och informationsstruktur.',
        prompt: 'Vilken ordningsprincip gäller normalt mellan bestämda (definit) och obestämda (indefinit) nominalfraser i mittfältet?',
        options: [
          'Bestämd fras (känd info/tema) föregår obestämd fras (ny info/rema).',
          'Obestämd fras måste alltid stå allra först omedelbart efter verbet.',
          'Bestämdhet spelar ingen roll för tysk ordföljd.',
          'Obestämda fraser måste extraponeras till efterfältet.'
        ],
        answer: 0,
        explanation: 'Tysk informationsstruktur placerar konsekvent bestämd/känd information före ny obestämd information: "Er hat [dem Mann]definit [ein Buch]indefinit gegeben".',
        feedback: [
          'Helt rätt! Känd information föregår ny information.',
          'Fel. Obestämda led dras tvärtom mot slutet av mittfältet där satsfokus ligger.',
          'Fel. Bestämdhet är en av de starkaste styrprinciperna i Mittelfeld.',
          'Fel. Enkla nominalfraser extraponeras inte till Nachfeld.'
        ]
      },
      {
        id: 'x040-q4',
        context: 'Begreppet scrambling.',
        prompt: 'Vad avses med lingvistisk "scrambling" i tysk syntax?',
        options: [
          'Att konstituenter i mittfältet omordnas från grundordningen för att markera fokus, emfas eller topikalitet.',
          'Att verbformerna blandas ihop felaktigt.',
          'Att ett verb placeras i fel klammer.',
          'Att tyskans kasus böjs svagt i stället för starkt.'
        ],
        answer: 0,
        explanation: 'Scrambling innebär att konstituenter i mittfältet flyttas framåt över andra led för att reflektera informationsstrukturella behov.',
        feedback: [
          'Korrekt! Scrambling är omordning inom mittfältet driven av informationsstruktur.',
          'Fel. Det handlar om konstituentordning, inte morfologiskt fel.',
          'Fel. Klammerplacering är en annan del av fältmodellen.',
          'Fel. Det rör syntax, inte adjektivböjning.'
        ]
      },
      {
        id: 'x040-q5',
        context: 'Negationens placering i mittfältet.',
        prompt: 'Var placeras normalt partikeln "nicht" vid neutral satsnegation i meningen "Er hat das Auto gestern [...] repariert"?',
        options: [
          'Omedelbart före den högra klammern (repariert): "Er hat das Auto gestern nicht repariert."',
          'Omedelbart efter det finita verbet hat: *"Er hat nicht das Auto gestern repariert."',
          'Allra sist efter repariert: *"Er hat das Auto gestern repariert nicht."',
          'Före subjektet: *"Nicht er hat das Auto repariert."'
        ],
        answer: 0,
        explanation: 'Vid neutral satsnegation står nicht sist i mittfältet, omedelbart framför den högra klammern.',
        feedback: [
          'Helt rätt! "nicht repariert" sluter mittfältet och negerar hela påståendet.',
          'Fel. Att sätta nicht direkt efter hat negerar specifikt "das Auto" (konstituentnegation).',
          'Fel. Negationen får inte placeras i efterfältet efter verbklammern här.',
          'Fel. Att sätta nicht först negerar subjektet (det var inte han, utan någon annan).'
        ]
      },
      {
        id: 'x040-q6',
        context: 'Animacitetsprincipen.',
        prompt: 'Vad innebär animacitetsprincipen för ordföljden i tyskans Mittelfeld?',
        options: [
          'Att levande väsen (människor) tenderar att placeras före livlösa ting.',
          'Att djur alltid måste stå före människor.',
          'Att aktiva verb kräver snabbare taltempo.',
          'Att animerade substantiv alltid böjs i dativ.'
        ],
        answer: 0,
        explanation: 'Kognitivt och syntaktiskt tenderar mänskliga/levande deltagare att föregå icke-levande entiteter i mittfältet.',
        feedback: [
          'Korrekt! Mänskliga/animerade argument föredrar positioner längre till vänster.',
          'Fel. Människor och högre animata entiteter grupperas tillsammans.',
          'Fel. Taltempo är fonetik, inte syntaktisk animacitet.',
          'Fel. Animacitet styr ordföljdspreferenser, inte morfologiskt kasus.'
        ]
      }
    ]
  },
  '/docs/fordjupning/syntax/efterfalt-och-extraposition': {
    lessonId: 'X041',
    href: '/docs/fordjupning/syntax/efterfalt-och-extraposition',
    title: 'Snabbkoll: Efterfält och extraposition',
    questions: [
      {
        id: 'x041-q1',
        context: 'Definition av extraposition (Ausklammerung).',
        prompt: 'Vad innebär syntaktisk extraposition (Ausklammerung) i tysk grammatik?',
        options: [
          'Att en konstituent placeras i efterfältet (Nachfeld) till höger om den avslutande högra verbklammern.',
          'Att verbet utesluts helt ur satsen.',
          'Att ett ord sätts inom parentes i texten.',
          'Att subjektet placeras framför den vänstra klammern.'
        ],
        answer: 0,
        explanation: 'Extraposition innebär att ett element flyttas ut ur mittfältet och placeras i efterfältet efter den högra verbklammern.',
        feedback: [
          'Helt rätt! Det är brottet mot den strikta satsramen för att avlasta mittfältet.',
          'Fel. Verbet utelämnas inte.',
          'Fel. Det är en syntaktisk förflyttning, inte typografisk parentes.',
          'Fel. Det beskriver förfältet, inte efterfältet.'
        ]
      },
      {
        id: 'x041-q2',
        context: 'Jämförelsefraser med als i efterfältet.',
        prompt: 'Vilken placering av jämförelsefrasen "als sein Kollege" är mest naturlig och vanlig i modern tyska?',
        options: [
          'I efterfältet: "Er hat in diesem Jahr mehr verdient als sein Kollege."',
          'Inklämd i förfältet: *"Als sein Kollege er hat mehr verdient."',
          'Efter satsens punkt i nästa mening.',
          'Före subjektet i bisats.'
        ],
        answer: 0,
        explanation: 'Jämförelsefraser med als eller wie placeras regelbundet och idiomatiskt i efterfältet efter den högra klammern.',
        feedback: [
          'Korrekt! Efterfältet är den mest naturliga positionen för jämförelsefraser.',
          'Fel. Den kan inte ställas ensam i förfältet på detta sätt tillsammans med subjektet.',
          'Fel. Jämförelsefrasen tillhör samma sats.',
          'Fel. Placeringen i efterfältet är standarden.'
        ]
      },
      {
        id: 'x041-q3',
        context: 'Förbjuden extraposition.',
        prompt: 'Vilket av följande element får ALDRIG extraponeras till Nachfeld i standardspråklig tysk skrift?',
        options: [
          'Ett enkelt nominalt ackusativobjekt: *"Er hat gestern gekauft das Buch."',
          'En utvidgad dass-sats: "Er hat gesagt, dass er kommt."',
          'En infinitivgrupp med zu: "Er hat beschlossen, abzureisen."',
          'Ett jämförelseled med wie: "Er hat gekämpft wie ein Löwe."'
        ],
        answer: 0,
        explanation: 'Enkla nominala direktobjekt kan aldrig extraponeras till efterfältet i standardtyska; de måste stanna i mittfältet före klammern.',
        feedback: [
          'Helt rätt! *Er hat gekauft das Buch är ett grovt språkfel.',
          'Fel. Dass-satser extraponeras i princip obligatoriskt.',
          'Fel. Infinitivgrupper med zu extraponeras helt reguljärt.',
          'Fel. Jämförelsefraser med wie står mycket ofta i efterfältet.'
        ]
      },
      {
        id: 'x041-q4',
        context: 'Extraposition av infinitivgrupper.',
        prompt: 'Varför placeras infinitivgruppen "den schwerwiegenden Fehler zu beheben" helst i efterfältet i meningen "Wir haben versucht, [...]"?',
        options: [
          'Eftersom en lång infinitivgrupp inuti mittfältet skulle göra satsramen extremt tung och svårläst.',
          'Eftersom verbet versuchen inte kan böjas i perfekt annars.',
          'Eftersom partikeln zu är förbjuden inne i mittfältet.',
          'Eftersom verbet beheben är intransitivt.'
        ],
        answer: 0,
        explanation: 'Utvidgade infinitivgrupper extraponeras för att undvika överbelastning av mittfältet och underlätta meningsförståelsen.',
        feedback: [
          'Korrekt! Avlastning av mittfältet är extrapositionens främsta funktion.',
          'Fel. Versuchen böjs i perfekt oavsett ordföljd.',
          'Fel. Zu är fullt tillåtet i koherent mittfält vid korta fraser.',
          'Fel. Beheben är ett transitivt verb.'
        ]
      },
      {
        id: 'x041-q5',
        context: 'Extraposition kontra Nachtrag.',
        prompt: 'Vad kännetecknar en samtalspragmatisk eftertanke (Nachtrag) till skillnad från planerad extraposition?',
        options: [
          'Den tillfogas efter en intonatorisk paus eller tankstreck som en spontan komplettering av en redan avslutad sats.',
          'Den står alltid före det finita verbet.',
          'Den måste alltid vara på latin.',
          'Den är grammatiskt obligatorisk i alla deklarativa meningar.'
        ],
        answer: 0,
        explanation: 'Ett Nachtrag är en prosodiskt och pragmatiskt avskild eftertanke som läggs till efter att satsramen redan stängts.',
        feedback: [
          'Helt rätt! "Ich habe ihn gesehen – gestern am Bahnhof".',
          'Fel. Den står efter satsens slut, inte före verbet.',
          'Fel. Det har ingen koppling till latin.',
          'Fel. Ett Nachtrag är frivilligt och spontant.'
        ]
      },
      {
        id: 'x041-q6',
        context: 'Verbpartiklar och klammern.',
        prompt: 'Varför är satsen *"Er rief gestern an seinen alten Freund" ogrammatisk i tysk standard?',
        options: [
          'Eftersom den avskilda verbpartikeln "an" utgör den högra klammern och inte får föregå ackusativobjektet.',
          'Eftersom anrufen kräver dativobjekt.',
          'Eftersom rief är en felaktig preteritumform.',
          'Eftersom tidsadverbialet gestern inte får stå på plats 2.'
        ],
        answer: 0,
        explanation: 'Partikeln an måste avsluta satsramen efter objektet: "Er rief gestern seinen alten Freund an". Den får inte skjutas in före objektet.',
        feedback: [
          'Korrekt! Partikeln bildar höger klammer och objektet måste stå före den i mittfältet.',
          'Fel. Anrufen styr ackusativ (seinen alten Freund).',
          'Fel. Rief är helt korrekt stark preteritum av rufen.',
          'Fel. Gestern står på plats 3 i mittfältet, verbet rief står på plats 2.'
        ]
      }
    ]
  },
  '/docs/fordjupning/syntax/vansterutstallning-och-fria-teman': {
    lessonId: 'X042',
    href: '/docs/fordjupning/syntax/vansterutstallning-och-fria-teman',
    title: 'Snabbkoll: Vänsterutställning och fria teman',
    questions: [
      {
        id: 'x042-q1',
        context: 'Kasuskongruens i Linksversetzung.',
        prompt: 'Vilket kasus måste det utställda ledet ha i meningen "[...] Mann, den kenne ich gut"?',
        options: [
          'Ackusativ (Diesen Mann), eftersom det kongruerar med verbets objekt och demonstrativet den.',
          'Nominativ (Dieser Mann), eftersom element utanför satsen alltid står i nominativ.',
          'Dativ (Diesem Mann), eftersom det står längst till vänster.',
          'Genitiv (Dieses Mannes), för att markera topik.'
        ],
        answer: 0,
        explanation: 'I en äkta Linksversetzung råder strikt kasuskongruens: verbets valens kräver ackusativ (kennen), vilket gör att både förledet och korrelatet står i ackusativ: "Diesen Mann, den kenne ich".',
        feedback: [
          'Helt rätt! Strikt kasuskongruens är adelsmärket för Linksversetzung.',
          'Fel. Nominativ utan kongruens förekommer vid Freies Thema, inte vid Linksversetzung med den.',
          'Fel. Kennen styr ackusativ, inte dativ.',
          'Fel. Genitiv passar inte syntaktiskt här.'
        ]
      },
      {
        id: 'x042-q2',
        context: 'Korrelatets form i förfältet vid Linksversetzung.',
        prompt: 'Vilken typ av pronomen MÅSTE användas som korrelat i förfältet vid en Linksversetzung?',
        options: [
          'Ett demonstrativpronomen (der, die, das, den, dem).',
          'Ett obetonat personligt pronomen (er, ihn, ihm).',
          'Ett reflexivt pronomen (sich).',
          'Ett frågepronomen (wer, wen, wem).'
        ],
        answer: 0,
        explanation: 'Vid Linksversetzung måste korrelatet i förfältet vara ett demonstrativpronomen: "Diesen Roman, den habe ich gelesen" (ALDRIG *ihn habe ich gelesen).',
        feedback: [
          'Korrekt! Demonstrativformer som den, dem, der är obligatoriska.',
          'Fel. Obetonade personliga pronomen (ihn, ihm) kan inte fungera som korrelat i förfältet vid Linksversetzung.',
          'Fel. Reflexivpronomen passar inte här.',
          'Fel. Frågepronomen bildar frågor, inte vänsterdislokationer.'
        ]
      },
      {
        id: 'x042-q3',
        context: 'Freies Thema (Nominativus pendens).',
        prompt: 'Vad kännetecknar konstruktionen Freies Thema till skillnad från Linksversetzung?',
        options: [
          'Det utställda ledet står ALLTID i nominativ, oavsett vilket kasus satsens verb kräver.',
          'Det utställda ledet måste alltid stå i genitiv.',
          'Det utställda ledet måste alltid stå sist i efterfältet.',
          'Konstruktionen saknar helt pronomen i själva satsen.'
        ],
        answer: 0,
        explanation: 'Freies Thema (hängande nominativ) etablerar ett samtalsämne i nominativ oberoende av verbets grammatiska kasusstyrning: "Der neue Kollege – ich kann ihn nicht leiden".',
        feedback: [
          'Helt rätt! Alltid nominativ oavsett satsens inre kasus.',
          'Fel. Genitiv används inte som frihängande temakasus.',
          'Fel. Freies Thema står till vänster i Vor-Vorfeld, inte i efterfältet.',
          'Fel. Ett resumerande pronomen finns normalt i satsen, men i valfritt fält.'
        ]
      },
      {
        id: 'x042-q4',
        context: 'Placering i den topologiska fältmodellen.',
        prompt: 'I vilket topologiskt fält placeras det vänsterutställda ledet i meningen "Diesen Vorschlag, den lehnen wir ab"?',
        options: [
          'I Vor-Vorfeld (den vänstra periferin).',
          'I Vorfeld (förfältet).',
          'I Linke Klammer.',
          'I Mittelfeld.'
        ],
        answer: 0,
        explanation: '"Diesen Vorschlag" står i Vor-Vorfeld utanför själva satsen; korrelatet "den" fyller Vorfeld och "lehnen" står i vänstra klammern.',
        feedback: [
          'Korrekt! Vänsterutställda led tillhör Vor-Vorfeld.',
          'Fel. Vorfeld fylls av det resumerande pronomenet den.',
          'Fel. Linke Klammer rymmer verbet lehnen.',
          'Fel. Mittelfeld rymmer wir.'
        ]
      },
      {
        id: 'x042-q5',
        context: 'Inversion vid denn kontra deshalb.',
        prompt: 'Varför ger "denn" rak ordföljd (denn er geht) medan "deshalb" ger omvänd ordföljd (deshalb geht er)?',
        options: [
          'denn står i Vor-Vorfeld (position 0), medan deshalb är ett konjunktionaladverb som intar Vorfeld (position 1).',
          'denn är ett verb i imperativ.',
          'deshalb är en subjunktion som kräver verbet sist.',
          'Det finns ingen grammatisk regel, det är rent godtyckligt.'
        ],
        answer: 0,
        explanation: 'Samordnande konjunktioner som denn står i Vor-Vorfeld och stjäl inte position 1; konjunktionaladverb som deshalb fyller förfältet och framtvingar inversion.',
        feedback: [
          'Helt rätt! Vor-Vorfeld (position 0) ger rak ordföljd; Vorfeld (position 1) ger inversion.',
          'Fel. Denn är en samordnande konjunktion.',
          'Fel. Deshalb kräver V2-inversion, inte verb sist (VL).',
          'Fel. Skillnaden styrs strikt av den topologiska fältmodellen.'
        ]
      },
      {
        id: 'x042-q6',
        context: 'Svensk interferens vid vänsterutställning.',
        prompt: 'Hur översätts den svenska talspråksmeningen "Den där boken, den har jag redan läst" korrekt med Linksversetzung till tyska?',
        options: [
          'Dieses Buch, das habe ich schon gelesen. (neutrum ackusativ).',
          '*Dieses Buch, es habe ich schon gelesen. (felaktigt personligt pronomen).',
          '*Diesen Buch, ihn habe ich schon gelesen.',
          '*Dieses Buch, ich habe das schon gelesen.'
        ],
        answer: 0,
        explanation: 'Vid Linksversetzung krävs demonstrativpronomen (das/den) i förfältet omedelbart följt av verbet på plats 2.',
        feedback: [
          'Korrekt! Demonstrativet das i förfältet följt av hjälpverbet habe på position 2.',
          'Fel. Es kan inte användas som korrelat i förfältet.',
          'Fel. Buch är neutrum (das Buch), inte maskulinum.',
          'Fel. Detta är Freies Thema med rak ordföljd utan V2-korrelat i förfältet.'
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
console.log('Finished updating learning-quizzes.ts with Group 4A quizzes.');
