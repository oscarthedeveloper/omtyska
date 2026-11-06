import fs from 'fs';

const g1bQuizzes = {
  // R05: Reflexiva pronomen i ackusativ och dativ
  '/docs/pronomen/reflexiva': {
    lessonId: 'R05',
    href: '/docs/pronomen/reflexiva',
    title: 'Snabbkoll: Reflexiva pronomen i ackusativ och dativ',
    questions: [
      {
        id: 'r05-q1',
        context: 'Undersök skillnaden mellan ackusativ och dativ hos de reflexiva pronomenen.',
        prompt: 'I vilka personer skiljer sig reflexiva pronomen i ackusativ och dativ?',
        options: [
          'Endast i 1:a och 2:a person singular: ich (mich/mir) och du (dich/dir).',
          'I alla personer utan undantag.',
          'Endast i plural.',
          'Endast i 3:e person (er/sie/es).',
        ],
        answer: 0,
        explanation: 'Skillnaden mellan ackusativ och dativ märks endast i ich (mich/mir) och du (dich/dir). I alla andra personer är formen identisk (sich, uns, euch, sich)!',
        feedback: [
          'Helt rätt! Endast ich och du har separata former för ackusativ och dativ.',
          'De flesta former (sich, uns, euch) är identiska i båda kasus.',
          'I plural heter det uns och euch i båda fallen.',
          '3:e person heter alltid "sich" oavsett kasus.',
        ],
      },
      {
        id: 'r05-q2',
        context: 'Du tvättar dina händer: "Ich wasche ___ die Hände."',
        prompt: 'Vilket reflexivt pronomen ska väljas när kroppsdelen "die Hände" är ackusativobjekt?',
        options: [
          'mir (dativ, till fördel för mig)',
          'mich (ackusativ)',
          'mein',
          'sich',
        ],
        answer: 0,
        explanation: 'Eftersom "die Hände" är det direkta ackusativobjektet måste det reflexiva pronomenet stå i dativ: "Ich wasche mir die Hände".',
        feedback: [
          'Helt rätt! mir die Hände – kroppsdelen tar ackusativ och pronomenet blir dativ.',
          'mich används bara när hela kroppen är det enda objektet (Ich wasche mich).',
          'mein är possessivt pronomen, inte reflexivt.',
          'sich är för 3:e person.',
        ],
      },
      {
        id: 'r05-q3',
        context: 'Verbet "sich vorstellen" har två olika betydelser beroende på kasus.',
        prompt: 'Vad betyder "Ich stelle mich vor" (ackusativ) till skillnad från "Ich stelle mir vor" (dativ)?',
        options: [
          '"Ich stelle mich vor" betyder "jag presenterar mig"; "Ich stelle mir vor" betyder "jag föreställer mig / fantiserar".',
          'De betyder exakt samma sak.',
          '"Ich stelle mich vor" betyder att jag ställer mig framför en bil.',
          '"Ich stelle mir vor" betyder att jag presenterar en vän.',
        ],
        answer: 0,
        explanation: 'sich (ack) vorstellen = presentera sig. sich (dat) vorstellen = föreställa sig i tanken.',
        feedback: [
          'Helt rätt! Ackusativ = presentera sig; Dativ = föreställa sig något mentalt.',
          'De har helt skilda betydelser!',
          'Det är inte den primära betydelsen här.',
          'Presentera en vän heter "Ich stelle meinen Freund vor".',
        ],
      },
      {
        id: 'r05-q4',
        context: 'Reflexivt pronomen för 3:e person (er, sie, es, sie Plural, Sie artigt).',
        prompt: 'Vad är reflexivformen för 3:e person i både ackusativ och dativ?',
        options: [
          'sich (alltid sich för er/sie/es/sie/Sie)',
          'ihn / ihm',
          'sie / ihr',
          'selbst',
        ],
        answer: 0,
        explanation: 'I 3:e person heter det reflexiva pronomenet alltid sich: "Er wäscht sich", "Er wäscht sich die Hände".',
        feedback: [
          'Helt rätt! "sich" täcker alla 3:e-personsformer i både ackusativ och dativ.',
          'ihn/ihm är personliga pronomen (syftar på en annan person).',
          'sie/ihr är personliga pronomen.',
          'selbst betyder själv/till och med, men är inte ett reflexivt pronomen.',
        ],
      },
      {
        id: 'r05-q5',
        context: 'Två vänner känner varandra sedan barndomen.',
        prompt: 'Hur säger man "Vi känner varandra" med det reciproka ordet "einander"?',
        options: [
          'Wir kennen einander.',
          'Wir kennen uns einander.',
          'Wir kennen sich.',
          'Wir kennen einander uns.',
        ],
        answer: 0,
        explanation: 'einander betyder varandra och ersätter reflexivpronomenet vid ömsesidig handling: "Wir kennen einander".',
        feedback: [
          'Helt rätt! Wir kennen einander (eller Wir kennen uns).',
          'Man kombinerar inte uns och einander bredvid varandra.',
          'sich kan inte användas för wir (det heter uns).',
          'Dubbelform är felaktig.',
        ],
      },
      {
        id: 'r05-q6',
        context: 'Preposition kombinerad med "einander": tala med varandra.',
        prompt: 'Hur skrivs "med varandra" på tyska?',
        options: [
          'miteinander (i ett enda ord)',
          'mit einander (isärskrivet)',
          'mit sich',
          'zusammen einander',
        ],
        answer: 0,
        explanation: 'Prepositioner smälts samman med einander till ett enda ord: miteinander, voneinander, aneinander.',
        feedback: [
          'Helt rätt! miteinander skrivs ihop som ett ord.',
          'Skrivs inte isär i modern ortografi.',
          'mit sich betyder med sig själv.',
          'zusammen einander är en tårta-på-tårta-konstruktion.',
        ],
      },
    ],
  },

  // V07: Reflexiva verb och rektion
  '/docs/verb/reflexiva-verb': {
    lessonId: 'V07',
    href: '/docs/verb/reflexiva-verb',
    title: 'Snabbkoll: Reflexiva verb och rektion',
    questions: [
      {
        id: 'v07-q1',
        context: 'Skillnaden mellan "sich freuen auf" och "sich freuen über".',
        prompt: 'När använder man "sich freuen auf" respektive "sich freuen über"?',
        options: [
          '"sich freuen auf" handlar om framtida förväntan (se fram emot); "sich freuen über" handlar om glädje över något i nutid eller dåtid.',
          'Det är exakt samma sak, helt valfritt.',
          '"sich freuen auf" används bara för väder.',
          '"sich freuen über" används bara i dåtid.',
        ],
        answer: 0,
        explanation: 'auf = framtid (Ich freue mich auf den Urlaub). über = nutid/dåtid (Ich freue mich über dein Geschenk).',
        feedback: [
          'Helt rätt! auf för framtiden (se fram emot), über för det som finns eller redan har skett.',
          'Det är en strikt och mycket viktig distinktion i tyskan.',
          'Gäller alla typer av glädjeämnen, inte bara väder.',
          'über används även i presens över aktuella händelser.',
        ],
      },
      {
        id: 'v07-q2',
        context: 'Vad är ett "äkta" reflexivt verb (echtes reflexives Verb)?',
        prompt: 'Vad kännetecknar ett äkta reflexivt verb som "sich beeilen" (skynda sig)?',
        options: [
          'Det kan ALDRIG stå utan sitt reflexiva pronomen och kan inte riktas mot något annat objekt.',
          'Det kan bara användas i imperativ.',
          'Det betyder att handlingen alltid är falsk.',
          'Det tar alltid hjälverbet sein i perfekt.',
        ],
        answer: 0,
        explanation: 'Ett äkta reflexivt verb kan inte användas transitivt: man kan inte "beeilen" någon annan, bara sich beeilen.',
        feedback: [
          'Helt rätt! Äkta reflexiva verb existerar uteslutande med reflexivt pronomen.',
          'De böjs i alla tempus och modus.',
          'Äkta syftar på dess rent reflexiva grammatiska natur.',
          'De flesta reflexiva verb tar haben i perfekt.',
        ],
      },
      {
        id: 'v07-q3',
        context: 'Preposition och kasus för verbet "sich interessieren".',
        prompt: 'Vilken preposition och vilket kasus kräver "sich interessieren"?',
        options: [
          'für + Ackusativ ("Ich interessiere mich für Musik")',
          'an + Dativ',
          'über + Ackusativ',
          'mit + Dativ',
        ],
        answer: 0,
        explanation: 'sich interessieren styr alltid prepositionen für följd av ackusativ.',
        feedback: [
          'Helt rätt! sich interessieren für + Ackusativ.',
          'an + Dativ används vid "interessiert sein an".',
          'über används vid sich ärgern eller sich freuen.',
          'mit används vid sich beschäftigen.',
        ],
      },
      {
        id: 'v07-q4',
        context: 'Verbet "sich ärgern" (irritera sig / förarga sig).',
        prompt: 'Hur säger man "Jag irriterar mig på förseningen" (die Verspätung)?',
        options: [
          'Ich ärgere mich über die Verspätung. (über + ackusativ)',
          'Ich ärgere mich an die Verspätung.',
          'Ich ärgere mich für die Verspätung.',
          'Ich ärgere mich auf die Verspätung.',
        ],
        answer: 0,
        explanation: 'sich ärgern styr alltid über + ackusativ.',
        feedback: [
          'Helt rätt! sich ärgern über + Ackusativ.',
          'an är fel preposition.',
          'für är fel preposition.',
          'auf används vid sich freuen på framtiden.',
        ],
      },
      {
        id: 'v07-q5',
        context: 'Asymmetri mellan svenska och tyska: verbet "att lära sig".',
        prompt: 'Heter "jag lär mig tyska" "ich lerne mich Deutsch"?',
        options: [
          'Nej! I tyskan är verbet oreflexivt: "Ich lerne Deutsch."',
          'Ja, alltid.',
          'Bara i talspråk.',
          'Det heter "ich lerne mir Deutsch".',
        ],
        answer: 0,
        explanation: 'Lernen är inte reflexivt i tyskan: det heter helt enkelt "Ich lerne Deutsch".',
        feedback: [
          'Helt rätt! Lernen är ett vanligt transitivt verb i tyskan, inte reflexivt.',
          'Att sätta till mich är en typisk svenskfelöversättning.',
          'Det accepteras inte i talspråk.',
          'Dativformen är lika felaktig.',
        ],
      },
      {
        id: 'v07-q6',
        context: 'Verbet "sich erinnern" (komma ihåg / minnas).',
        prompt: 'Vilken preposition styr "sich erinnern"?',
        options: [
          'an + Ackusativ ("Ich erinnere mich an den Urlaub")',
          'auf + Ackusativ',
          'von + Dativ',
          'zu + Dativ',
        ],
        answer: 0,
        explanation: 'sich erinnern styr alltid an + ackusativ.',
        feedback: [
          'Helt rätt! sich erinnern an + Ackusativ.',
          'auf är fel preposition.',
          'von används inte här.',
          'zu används inte här.',
        ],
      },
    ],
  },

  // V08: Imperativ och uppmaningar
  '/docs/verb/imperativ': {
    lessonId: 'V08',
    href: '/docs/verb/imperativ',
    title: 'Snabbkoll: Imperativ och uppmaningar',
    questions: [
      {
        id: 'v08-q1',
        context: 'Konstruktion av du-imperativ för vanliga regelbundna verb (t.ex. machen, kommen).',
        prompt: 'Hur bildas du-formen av imperativ?',
        options: [
          'Man utgår från presens (du machst) och tar bort pronomenet "du" samt ändelsen "-st" -> Mach!',
          'Man använder bara infinitiven.',
          'Man lägger alltid till -en.',
          'Man sätter alltid verbet sist.',
        ],
        answer: 0,
        explanation: 'du machst -> ta bort du och -st -> Mach! Pronomenet utelämnas helt i informell imperativ.',
        feedback: [
          'Helt rätt! Mach!, Komm!, Geh! bildas genom att ta bort du och -st.',
          'Infinitiv används bara på skyltar eller recept, inte vid personligt tilltal.',
          '-en är Sie-formen.',
          'Verbet står först i imperativ.',
        ],
      },
      {
        id: 'v08-q2',
        context: 'Starka verb med e -> i-växling i stammen (t.ex. geben, helfen, lesen).',
        prompt: 'Vad är imperativformen för "du" av verbet "helfen"?',
        options: [
          'Hilf! (med e->i-växling och utan ändelse)',
          'Helf!',
          'Hilfe!',
          'Hilfst!',
        ],
        answer: 0,
        explanation: 'Starka verb med e->i behåller växlingen i du-imperativ och får inget -e: Hilf!, Gib!, Lies!',
        feedback: [
          'Helt rätt! Hilf! med i och utan -e.',
          'Helf saknar den obligatoriska vokalväxlingen.',
          'Hilfe! är substantivet (hjälp!), inte verbets imperativ.',
          'Hilfst har kvar personändelsen -st.',
        ],
      },
      {
        id: 'v08-q3',
        context: 'Starka verb med omljud i presens (t.ex. fahren: du fährst, schlafen: du schläfst).',
        prompt: 'Behåller verbet "fahren" sitt omljud i du-imperativ?',
        options: [
          'Nej! Omljudet (ä) försvinner alltid i imperativ: "Fahr!" (inte fähr).',
          'Ja, det heter "Fähr!".',
          'Det är valfritt.',
          'Det heter "Fahre du!".',
        ],
        answer: 0,
        explanation: 'Omljud på a försvinner alltid i imperativ: fahren -> Fahr!, schlafen -> Schlaf!, laufen -> Lauf!',
        feedback: [
          'Helt rätt! Fahr! utan omljud.',
          'Fähr! existerar inte på tyska.',
          'Regeln är absolut.',
          'Pronomenet du sätts inte ut.',
        ],
      },
      {
        id: 'v08-q4',
        context: 'Imperativ av verbet "sein" (vara).',
        prompt: 'Vilka är de tre imperativformerna av "sein" för du, ihr och Sie?',
        options: [
          'Sei! (du), Seid! (ihr), Seien Sie! (Sie)',
          'Bist!, Seid!, Sind Sie!',
          'Sei!, Seist!, Sein Sie!',
          'Wäre!, Wäret!, Wären Sie!',
        ],
        answer: 0,
        explanation: 'Verbet sein är oregelbundet i imperativ: Sei ruhig! Seid leise! Seien Sie vorsichtig!',
        feedback: [
          'Helt rätt! Sei!, Seid!, Seien Sie!',
          'Bist och Sind Sie är indikativ, inte imperativ.',
          'Seist och Sein Sie existerar inte.',
          'Wäre är konjunktiv, inte imperativ.',
        ],
      },
      {
        id: 'v08-q5',
        context: 'Imperativ till en grupp kompisar (ihr-formen).',
        prompt: 'Vad är imperativformen för "ihr" av verbet "kommen"?',
        options: [
          'Kommt! (identisk med vanlig presensform för ihr, men utan pronomenet ihr)',
          'Kommt ihr!',
          'Kommen!',
          'Kämt!',
        ],
        answer: 0,
        explanation: 'Ihr-imperativen är identisk med presensformen minus pronomenet: Kommt! Macht! Geht!',
        feedback: [
          'Helt rätt! Kommt! utan pronomen.',
          'Pronomenet ihr sätts inte ut i imperativ.',
          'Kommen är infinitiv.',
          'Kämt finns inte.',
        ],
      },
      {
        id: 'v08-q6',
        context: 'Artig imperativ (Sie-formen).',
        prompt: 'Vad är det speciella med den artiga Sie-imperativen?',
        options: [
          'Pronomenet "Sie" MÅSTE alltid skrivas ut direkt efter verbet: "Kommen Sie!", "Warten Sie!"',
          'Pronomenet Sie tas bort.',
          'Verbet slutar på -t.',
          'Den får bara användas för kungligheter.',
        ],
        answer: 0,
        explanation: 'I den artiga formen kan pronomenet Sie aldrig utelämnas: "Kommen Sie bitte rein!"',
        feedback: [
          'Helt rätt! Sie måste alltid finnas med direkt efter verbet.',
          'Om man tar bort Sie blir det ingen korrekt form.',
          'Verbet slutar på -en (infinitivform).',
          'Den används för alla vuxna man niar.',
        ],
      },
    ],
  },

  // K07: Verbens kasus och valens
  '/docs/kasus/verbens-rektion': {
    lessonId: 'K07',
    href: '/docs/kasus/verbens-rektion',
    title: 'Snabbkoll: Verbens kasus och valens',
    questions: [
      {
        id: 'k07-q1',
        context: 'Vilket kasus styr majoriteten av tyska vanliga transitiva verb (kaufen, sehen, trinken, haben)?',
        prompt: 'Vilket kasus är standardobjektets kasus i tyskan?',
        options: [
          'Ackusativ (direkt objekt i ca 85% av alla verb).',
          'Dativ.',
          'Genitiv.',
          'Nominativ.',
        ],
        answer: 0,
        explanation: 'Det absoluta flertalet av tyska verb styr rent ackusativobjekt: "Ich kaufe einen Wagen", "Ich sehe den Mann".',
        feedback: [
          'Helt rätt! Ackusativ är tyskans huvudsakliga objektkasus.',
          'Dativ styrs av en specifik mindre grupp verb.',
          'Genitiv styrs endast av ett fåtal arkaiska verb.',
          'Nominativ är subjektets kasus.',
        ],
      },
      {
        id: 'k07-q2',
        context: 'Verbet "helfen" (hjälpa).',
        prompt: 'Vilket kasus kräver verbet "helfen" hos sitt objekt?',
        options: [
          'Dativ ("Kannst du mir helfen?")',
          'Ackusativ ("Kannst du mich helfen?")',
          'Genitiv',
          'Valfritt',
        ],
        answer: 0,
        explanation: 'helfen styr alltid dativ: "Ich helfe dem Mann", "Hilf mir!".',
        feedback: [
          'Helt rätt! helfen styr alltid dativ.',
          'Att använda ackusativ efter helfen är ett grovt grammatiskt fel.',
          'Genitiv styrs inte av helfen.',
          'Kasusstyrning är aldrig valfri.',
        ],
      },
      {
        id: 'k07-q3',
        context: 'Subjekt-objekt-strukturen vid verbet "gefallen" (behaga / gilla).',
        prompt: 'I meningen "Das Buch gefällt mir" – vilken funktion har "Das Buch"?',
        options: [
          'Det är subjektet i nominativ (det är boken som behagar mig).',
          'Det är ackusativobjektet.',
          'Det är dativobjektet.',
          'Det är predikatsfyllnad.',
        ],
        answer: 0,
        explanation: 'Vid gefallen är den omtyckta saken subjekt (Das Buch), medan personen som gillar den står i dativ (mir)!',
        feedback: [
          'Helt rätt! Das Buch är subjektet. På tyska "behagar boken mig".',
          'Det är inte objekt, det styr verbets böjning (gefällt).',
          'Dativobjektet är "mir".',
          'Det är ett fullvärdigt subjekt.',
        ],
      },
      {
        id: 'k07-q4',
        context: 'Ett verb med två objekt (ditransitivt verb), t.ex. "geben" (ge).',
        prompt: 'Vilken är grundregeln för de två objektens kasus vid "ge en person en sak"?',
        options: [
          'Personen (mottagaren) står i Dativ; saken (det som ges) står i Ackusativ.',
          'Båda står i ackusativ.',
          'Båda står i dativ.',
          'Personen står i ackusativ och saken i dativ.',
        ],
        answer: 0,
        explanation: 'Klassisk regel: "Dativ åt personen, Ackusativ för saken": Ich gebe dem Kind (Dat) den Apfel (Ack).',
        feedback: [
          'Helt rätt! Personen = Dativ, Saken = Ackusativ.',
          'Dubbla ackusativ förekommer bara vid ett fåtal särfall (lehren, kosten).',
          'Två dativobjekt förekommer inte.',
          'Det vore helt omvänt.',
        ],
      },
      {
        id: 'k07-q5',
        context: 'Verbet "gehören" (tillhöra / ägas av).',
        prompt: 'Hur säger man "Bilen tillhör min bror" på korrekt tyska?',
        options: [
          'Das Auto gehört meinem Bruder. (Dativ)',
          'Das Auto gehört meinen Bruder. (Ackusativ)',
          'Das Auto gehört meines Bruders. (Genitiv)',
          'Das Auto gehört für meinen Bruder.',
        ],
        answer: 0,
        explanation: 'gehören styr alltid dativ: "Das Auto gehört meinem Bruder".',
        feedback: [
          'Helt rätt! gehören styr dativ: meinem Bruder.',
          'meinen Bruder är ackusativ.',
          'meines Bruders är genitiv.',
          'gehören tar ingen preposition för ägande.',
        ],
      },
      {
        id: 'k07-q6',
        context: 'Verbet "danken" (tacka).',
        prompt: 'Vad är korrekt form i "Jag tackar dig": "Ich danke ___"?',
        options: [
          'dir (Dativ)',
          'dich (Ackusativ)',
          'dein',
          'du',
        ],
        answer: 0,
        explanation: 'danken styr dativ: "Ich danke dir" / "Wir danken Ihnen".',
        feedback: [
          'Helt rätt! danken styr dativ: dir.',
          'dich är ackusativ och felaktigt här.',
          'dein är possessivt.',
          'du är nominativ.',
        ],
      },
    ],
  },

  // K08: Prepositionens kasus eller verbets objekt?
  '/docs/kasus/preposition-eller-objekt': {
    lessonId: 'K08',
    href: '/docs/kasus/preposition-eller-objekt',
    title: 'Snabbkoll: Prepositionens kasus eller verbets objekt?',
    questions: [
      {
        id: 'k08-q1',
        context: 'Vem bestämmer kasuset när ett substantiv står direkt efter en preposition?',
        prompt: 'Vad gäller för maktordningen i en prepositionsfras som "Ich warte auf den Bus"?',
        options: [
          'Prepositionen bestämmer ALLTID kasuset inuti sin egen fras; verbet har inget att säga till om där!',
          'Verbet trumfar alltid prepositionen.',
          'Kasuset väljs slumpmässigt.',
          'Subjektet bestämmer prepositionens kasus.',
        ],
        answer: 0,
        explanation: 'Prepositionen styr ovillkorligen kasuset hos de ord som följer direkt efter den.',
        feedback: [
          'Helt rätt! Prepositionen är herre över sin egen prepositionsfras.',
          'Verbet kan inte ändra en prepositions inneboende kasusrektion.',
          'Grammatiken är strikt regelbunden.',
          'Subjektet påverkar inte prepositionen.',
        ],
      },
      {
        id: 'k08-q2',
        context: 'Undersök meningen: "Ich helfe meinem Freund mit dem Umzug."',
        prompt: 'Varför står "meinem Freund" och "dem Umzug" båda i dativ?',
        options: [
          '"meinem Freund" styrs av verbet helfen (dativverb); "dem Umzug" styrs av prepositionen mit (dativpreposition).',
          'Båda styrs av verbet helfen.',
          'Båda styrs av prepositionen mit.',
          'Det är bara en slump.',
        ],
        answer: 0,
        explanation: 'De styrs av två helt olika källor: helfen styr dativobjektet meinem Freund, medan prepositionen mit styr dem Umzug.',
        feedback: [
          'Helt rätt! Två oberoende källor som råkar ge samma kasus.',
          'helfen når inte inuti prepositionsfrasen efter mit.',
          'mit står inte framför meinem Freund.',
          'Det är strikt grammatisk orsakssamband.',
        ],
      },
      {
        id: 'k08-q3',
        context: 'Jämför: "Ich bezahle das Buch" kontra "Ich bezahle für das Buch".',
        prompt: 'Vad är den grammatiska skillnaden mellan "das Buch" i de två meningarna?',
        options: [
          'I första meningen är det ett rent ackusativobjekt till verbet; i andra meningen styrs det av prepositionen für.',
          'Det är ingen grammatisk skillnad.',
          'I första meningen är det dativ.',
          'I andra meningen är det subjekt.',
        ],
        answer: 0,
        explanation: 'I första fallet styr verbet bezahlen ackusativobjektet direkt. I andra fallet är det en prepositionsfras styrd av für.',
        feedback: [
          'Helt rätt! Rent verbobjekt kontra prepositionsstyrt objekt.',
          'Syntaktiskt är det två helt olika relationer.',
          'das Buch är neutrum ackusativ i båda fallen.',
          'Subjektet i båda meningarna är "Ich".',
        ],
      },
      {
        id: 'k08-q4',
        context: 'I meningen "Wir danken Ihnen für die Hilfe" finns två komplement.',
        prompt: 'Vilket kasus har "Ihnen" respektive "die Hilfe"?',
        options: [
          'Ihnen = Dativ (styrt av danken); die Hilfe = Ackusativ (styrt av für).',
          'Båda är dativ.',
          'Båda är ackusativ.',
          'Ihnen = Ackusativ; die Hilfe = Dativ.',
        ],
        answer: 0,
        explanation: 'danken styr dativ (Ihnen), och prepositionen für styr ackusativ (die Hilfe).',
        feedback: [
          'Helt rätt! Dativ för personen + Ackusativ efter für.',
          'die Hilfe står efter für och kan inte vara dativ.',
          'danken kan inte ta ackusativperson.',
          'Det är precis tvärtom.',
        ],
      },
      {
        id: 'k08-q5',
        context: 'Verbet "fragen" tar ackusativobjekt för personen, och "nach" för det man frågar efter.',
        prompt: 'Hur lyder "Han frågade polisen (m) efter vägen (m)"?',
        options: [
          'Er fragte den Polizisten nach dem Weg.',
          'Er fragte dem Polizisten nach den Weg.',
          'Er fragte den Polizisten nach den Weg.',
          'Er fragte der Polizist nach dem Weg.',
        ],
        answer: 0,
        explanation: 'fragen styr ackusativ: den Polizisten (svagt maskulinum!). nach styr dativ: dem Weg.',
        feedback: [
          'Helt rätt! den Polizisten (ack) nach dem Weg (dat).',
          'fragen tar ackusativ, inte dativ på personen.',
          'nach styr dativ, inte ackusativ.',
          'der Polizist är nominativ.',
        ],
      },
      {
        id: 'k08-q6',
        context: 'Metod för att analysera kasus i en lång tysk mening.',
        prompt: 'Vilket är det första steget i den praktiska 3-stegsmetoden för att bestämma kasus?',
        options: [
          'Hitta och ringa in alla prepositioner: orden direkt efter dem styrs alltid av prepositionens eget kasus!',
          'Räkna antalet ord i meningen.',
          'Göra om alla ord till plural.',
          'Översätta meningen till engelska.',
        ],
        answer: 0,
        explanation: 'Genom att isolera prepositionsfraserna först ser man omedelbart vilka ord som styrs av prepositioner och vilka som styrs av verbet!',
        feedback: [
          'Helt rätt! Prepositionerna avgränsar tydliga syntaktiska enheter med eget kasus.',
          'Ordräkning avgör ingenting.',
          'Pluralisering hjälper inte analysen.',
          'Engelsk grammatik saknar kasussystemet och leder ofta vilse.',
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
for (const [key, val] of Object.entries(g1bQuizzes)) {
  toInsert += `  '${key}': ${JSON.stringify(val, null, 4).replace(/\n/g, '\n  ')},\n\n`;
}

const updated = content.slice(0, lastIndex) + toInsert + content.slice(lastIndex);
fs.writeFileSync('data/learning-quizzes.ts', updated, 'utf8');
console.log("Lade till 6 frågor för alla 5 lektioner i Grupp 1B!");
