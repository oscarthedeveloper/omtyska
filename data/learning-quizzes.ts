/**
 * Learning Quizzes for Om-Tyska lessons.
 * Every calibration lesson has at least 6 questions with option-specific feedback!
 */

import type { LearningQuiz } from '@/lib/types';

export const LEARNING_QUIZZES: Record<string, LearningQuiz> = {
  // P03: Växelprepositioner
  '/docs/prepositioner/vaxelprepositioner': {
    lessonId: 'P03',
    href: '/docs/prepositioner/vaxelprepositioner',
    title: 'Snabbkoll: Växelprepositioner (Plats & Mål)',
    questions: [
      {
        id: 'p03-q1',
        context: 'Situationen är att promenaden hela tiden sker inne i parken.',
        prompt: 'Välj rätt form: "Ich gehe ___ spazieren."',
        options: ['im Park', 'in den Park', 'ins Park', 'in der Park'],
        answer: 0,
        explanation: 'Eftersom promenaden sker på en befintlig plats (Var?) styr växelprepositionen "in" dativ: in + dem = im Park.',
        feedback: [
          'Helt rätt! Promenaden sker inom parkens gränser (befintlighet), vilket ger dativ (im Park).',
          'Fel relation: "in den Park" har ackusativ och anger mål (att gå in i parken utifrån), inte att promenera runt inne i den.',
          'Fel form: Park är maskulint (der Park), inte neutralt (das).',
          'Fel kasusform: "in der Park" har feminin dativ, men Park är maskulint (der Park -> dem Park).',
        ],
      },
      {
        id: 'p03-q2',
        context: 'Boken hålls i handen och ska placeras uppe på bordet.',
        prompt: 'Välj rätt form: "Ich lege das Buch ___."',
        options: ['auf den Tisch', 'auf dem Tisch', 'an den Tisch', 'über den Tisch'],
        answer: 0,
        explanation: 'Att lägga boken på bordet (legen) anger ett mål för förflyttningen (Vart?), vilket kräver ackusativ maskulinum: auf den Tisch.',
        feedback: [
          'Helt rätt! "Legen" innebär en målhandling (Vart placeras boken?), vilket ger ackusativ (auf den Tisch).',
          'Fel: "auf dem Tisch" har dativ och används för befintlighet ("Das Buch liegt auf dem Tisch"), inte för placeringen.',
          '"an" betyder "vid/intill" (vertikalt eller intill), medan boken läggs på den horisontella bordsytan ("auf").',
          '"über" betyder "ovanför/över" utan beröring.',
        ],
      },
      {
        id: 'p03-q3',
        context: 'Analysera satsdelar i meningen: "Ich lege das Buch auf den Tisch."',
        prompt: 'Vilken fras fungerar som direkt ackusativobjekt i meningen?',
        options: ['das Buch', 'auf den Tisch', 'Ich', 'lege'],
        answer: 0,
        explanation: '"das Buch" är det direkta objektet som påverkas av handlingen. "auf den Tisch" är en prepositionsfras som anger riktning/mål.',
        feedback: [
          'Helt rätt! "das Buch" är det direkta ackusativobjektet. "auf den Tisch" är ett rumsadverbial/prepositionsfras.',
          'Nej, "auf den Tisch" är en prepositionsfras (rumsbestämning), inte det direkta objektet för handlingen.',
          'Nej, "Ich" är subjektet i nominativ.',
          'Nej, "lege" är det finita verbet.',
        ],
      },
      {
        id: 'p03-q4',
        context: 'Undersök rörelseverbet "fahren" i meningen: "Ich fahre zum Bahnhof."',
        prompt: 'Varför står "zum Bahnhof" i dativ trots att det handlar om rörelse mot ett mål?',
        options: [
          'Prepositionen "zu" styr ALLTID dativ oavsett rörelse.',
          'Bahnhof är ett undantagsord.',
          'Det är egentligen ackusativ men ser ut som dativ.',
          'Fahren kan aldrig ta ackusativ.',
        ],
        answer: 0,
        explanation: 'Prepositionen "zu" är en ren dativpreposition (zu + dem = zum). Växelprepositionsregeln gäller enbart de nio växelprepositionerna!',
        feedback: [
          'Exakt! "zu" är inte en växelpreposition. Dess fasta rektion är alltid dativ, vilket visar varför "rörelse = ackusativ" inte är en allmängiltig regel.',
          'Nej, Bahnhof är ett vanligt maskulint substantiv.',
          'Nej, "zum" är sammandragning av zu + dem (tydlig dativ).',
          'Nej, "fahren" kan ta ackusativ med växelprepositioner (t.ex. "in die Stadt fahren").',
        ],
      },
      {
        id: 'p03-q5',
        context: 'Barnen springer utifrån och in i trädgården.',
        prompt: 'Välj rätt form: "Die Kinder laufen ___."',
        options: ['in den Garten', 'im Garten', 'in dem Garten', 'nach dem Garten'],
        answer: 0,
        explanation: 'Förflyttning från utsidan in i trädgården är en målrelation, vilket ger ackusativ: der Garten -> in den Garten.',
        feedback: [
          'Helt rätt! Målrelationen (in i trädgården) kräver ackusativ maskulinum (den Garten).',
          'Fel relation: "im Garten" anger att de redan är inne i trädgården och springer omkring där.',
          '"in dem Garten" är dativ och anger befintlighet, inte målet för inträdet.',
          'På tyska används "in" för att gå/springa in i en avgränsad plats som en trädgård, inte "nach".',
        ],
      },
      {
        id: 'p03-q6',
        context: 'Tavlan hänger på väggen.',
        prompt: 'Välj rätt form: "Das Bild hängt ___ Wand."',
        options: ['an der', 'an die', 'auf der', 'auf die'],
        answer: 0,
        explanation: 'En vägg är en vertikal yta, vilket kräver prepositionen "an". Eftersom tavlan redan befinner sig där (befintlighet) styrs dativ femininum: an der Wand.',
        feedback: [
          'Helt rätt! "an" används för vertikala ytor och dativ (der Wand) anger var den hänger.',
          '"an die" är ackusativ och anger mål ("Ich hänge das Bild an die Wand").',
          '"auf" används för horisontella ytor som bord eller golv.',
          '"auf die" är fel både gällande preposition för vägg och fel kasus för befintlighet.',
        ],
      },
    ],
  },

  // A03: Blandad adjektivböjning
  '/docs/adjektiv/blandad-bojning': {
    lessonId: 'A03',
    href: '/docs/adjektiv/blandad-bojning',
    title: 'Snabbkoll: Blandad adjektivböjning (efter ein/kein/mein)',
    questions: [
      {
        id: 'a03-q1',
        context: 'Substantivet är maskulint ("Freund") och står som subjekt (nominativ).',
        prompt: 'Välj rätt form: "Ein ___ Freund hilft immer."',
        options: ['guter', 'gute', 'guten', 'gutem'],
        answer: 0,
        explanation: 'Efter "ein" (som saknar ändelse i maskulin nominativ) måste adjektivet visa maskulinändelsen "-er": ein guter Freund.',
        feedback: [
          'Helt rätt! Eftersom "ein" inte visar maskulinändelsen måste adjektivet ta stark ändelse (-er).',
          '"gute" används vid bestämd artikel ("der gute Freund") eller femininum ("eine gute Freundin").',
          '"guten" är ackusativ maskulinum ("einen guten Freund") eller svag böjning.',
          '"gutem" är dativ maskulinum utan artikel.',
        ],
      },
      {
        id: 'a03-q2',
        context: 'Meningen kräver ackusativ maskulinum som direkt objekt.',
        prompt: 'Välj rätt former: "Ich habe ein___ gut___ Freund besucht."',
        options: ['einen guten', 'ein guter', 'einem guten', 'einen guter'],
        answer: 0,
        explanation: 'I ackusativ maskulinum böjs både obestämd artikel ("einen") och adjektivet ("guten"): einen guten Freund.',
        feedback: [
          'Helt rätt! Både artikeln och adjektivet får -en i ackusativ maskulinum.',
          '"ein guter" är nominativ, men verbet "besucht" kräver ackusativobjekt här.',
          '"einem guten" är dativ.',
          'Diagnos: Rätt artikelform ("einen"), men adjektivet måste också ha "-en" ("guten")!',
        ],
      },
      {
        id: 'a03-q3',
        context: 'Prepositionen "mit" styr dativ maskulinum.',
        prompt: 'Välj rätt former: "Ich spreche mit ein___ gut___ Freund."',
        options: ['einem guten', 'einem guter', 'einen guten', 'einem gutem'],
        answer: 0,
        explanation: 'Efter "mit" (dativ maskulinum) heter artikeln "einem" och adjektivet får alltid "-en" i dativ: mit einem guten Freund.',
        feedback: [
          'Helt rätt! "mit" styr dativ (einem) och adjektivet får "-en" (guten).',
          'Diagnos: Rätt artikel ("einem"), men adjektivet efter ein-ord i dativ måste alltid ha "-en", inte "-er"!',
          '"einen guten" är ackusativ, men "mit" styr alltid dativ.',
          'Fel: adjektivet dubblerar inte artikelns "-m"; i blandad böjning är ändelsen i dativ alltid "-en".',
        ],
      },
      {
        id: 'a03-q4',
        context: 'Substantivet är neutralt ("Buch") i nominativ eller ackusativ.',
        prompt: 'Välj rätt former: "Das ist ein ___ Buch."',
        options: ['interessantes', 'interessante', 'interessanten', 'interessanter'],
        answer: 0,
        explanation: 'Efter "ein" i neutral nominativ/ackusativ måste adjektivet signalera neutrum med "-es": ein interessantes Buch.',
        feedback: [
          'Helt rätt! Neutral nominativ/ackusativ efter "ein" tar "-es": ein interessantes Buch.',
          '"interessante" används vid bestämd artikel ("das interessante Buch").',
          '"interessanten" är maskulin ackusativ eller dativ.',
          '"interessanter" är maskulin nominativ.',
        ],
      },
      {
        id: 'a03-q5',
        context: 'Plural med possessivpronomen ("meine"). OBS: "ein" saknar plural!',
        prompt: 'Välj rätt form: "Das sind meine ___ Freunde."',
        options: ['guten', 'gute', 'guter', 'gutem'],
        answer: 0,
        explanation: 'I plural efter possessivpronomen (meine) eller kein får adjektivet alltid svag ändelse "-en": meine guten Freunde.',
        feedback: [
          'Helt rätt! Efter possessiva artikelord i plural får adjektivet alltid ändelsen "-en".',
          '"gute" används endast i stark böjning utan föregående artikelord ("gute Freunde").',
          '"guter" är maskulin nominativ eller genitiv plural.',
          '"gutem" är dativ singular.',
        ],
      },
      {
        id: 'a03-q6',
        context: 'Femininum i dativ efter possessivt artikelord ("meiner").',
        prompt: 'Välj rätt form: "Ich helfe mein___ neu___ Lehrerin."',
        options: ['meiner neuen', 'meine neue', 'meiner neue', 'meinen neuen'],
        answer: 0,
        explanation: 'Verbet "helfen" styr dativ. Feminin dativ artikel är "meiner" och adjektivet får "-en": meiner neuen Lehrerin.',
        feedback: [
          'Helt rätt! Dativ femininum ger "meiner" och adjektivändelsen "-en".',
          '"meine neue" är nominativ eller ackusativ.',
          'Diagnos: Rätt artikel ("meiner"), men adjektivet i dativ måste sluta på "-en"!',
          '"meinen neuen" är dativ plural eller ackusativ maskulinum.',
        ],
      },
    ],
  },

  // Y04: Ordföljd i bisatser
  '/docs/syntax/ordfoljd-i-bisatser': {
    lessonId: 'Y04',
    href: '/docs/syntax/ordfoljd-i-bisatser',
    title: 'Snabbkoll: Ordföljd i bisatser',
    questions: [
      {
        id: 'y04-q1',
        context: 'Underordnande bisats inledd med "weil" i presens.',
        prompt: 'Välj rätt ordföljd i bisatsen: "Ich bleibe zu Hause, ..."',
        options: [
          'weil ich krank bin.',
          'weil ich bin krank.',
          'weil bin ich krank.',
          'denn ich krank bin.',
        ],
        answer: 0,
        explanation: 'I bisatser inledda med underordnande konjunktioner som "weil" hamnar det finita verbet ("bin") allra sist.',
        feedback: [
          'Helt rätt! "weil" skickar det böjda verbet ("bin") till satsens absoluta slut.',
          'Tysk bisatsregel! "weil ich bin krank" har rak ordföljd som på svenska, vilket är fel i tysk standardskrift.',
          'Fel ordföljd: "bin" hamnar varken på plats 2 eller sist.',
          '"denn" är samordnande och behåller rak ordföljd ("denn ich bin krank").',
        ],
      },
      {
        id: 'y04-q2',
        context: 'Bisats med perfekt (hjälpverb + particip).',
        prompt: 'Välj rätt ordföljd: "Er sagt, dass er den Film schon ..."',
        options: [
          'gesehen hat.',
          'hat gesehen.',
          'gesehen habe.',
          'hatte gesehen.',
        ],
        answer: 0,
        explanation: 'I en bisats med perfekt placeras participet ("gesehen") näst sist och det böjda hjälpverbet ("hat") allra sist.',
        feedback: [
          'Helt rätt! Participet först, det böjda hjälpverbet sist: "gesehen hat".',
          'Fel ordning i bisats: i huvudsats säger man "hat gesehen", men i bisats slutar meningen med det böjda verbet: "gesehen hat".',
          'Fel personböjning: subjektet är "er", så formen måste vara "hat", inte "habe".',
          'Tempusfel i relation till presensinledningen.',
        ],
      },
      {
        id: 'y04-q3',
        context: 'Bisats med modalt hjälpverb och infinitiv.',
        prompt: 'Välj rätt ordföljd: "Sie weiß, dass sie heute lange ..."',
        options: [
          'arbeiten muss.',
          'muss arbeiten.',
          'arbeiten müssen.',
          'gearbeitet hat.',
        ],
        answer: 0,
        explanation: 'Infinitiven ("arbeiten") kommer före det böjda modalverbet ("muss"), som avslutar bisatsen.',
        feedback: [
          'Helt rätt! Infinitiv näst sist, böjt modalverb sist: "arbeiten muss".',
          'Svensk fälla! På tyska står det böjda modalverbet sist i bisatsen: "arbeiten muss".',
          'Fel form: subjektet "sie" (singular) kräver formen "muss", inte infinitiven "müssen".',
          'Ändrar betydelsen från plikt/måste till dåtid.',
        ],
      },
      {
        id: 'y04-q4',
        context: 'Hela bisatsen utgör förfält i en sammansatt mening.',
        prompt: 'Välj rätt ordföljd i huvudsatsen: "Weil es regnet, ___ zu Hause."',
        options: [
          'bleibe ich',
          'ich bleibe',
          'bleiben ich',
          'ich werde bleiben',
        ],
        answer: 0,
        explanation: 'Hela bisatsen "Weil es regnet" utgör plats 1 (förfältet) för huvudsatsen. Huvudsatsens finit verb ("bleibe") måste därför komma direkt efter kommat (V2)!',
        feedback: [
          'Helt rätt! Bisatsen räknas som satsled 1. Huvudsatsens finit verb ("bleibe") måste komma på plats 2!',
          'V2-brott! Om du skriver "ich bleibe" hamnar verbet på plats 3 i huvudsatsen.',
          'Fel böjning av verbet för person "ich".',
          'Onödigt omskrivet och bryter mot V2-regeln.',
        ],
      },
      {
        id: 'y04-q5',
        context: 'Jämför "weil" (underordnande) med "denn" (samordnande).',
        prompt: 'Vilken konjunktion passar till ordföljden "... ___ ich bin müde"?',
        options: ['denn', 'weil', 'dass', 'obwohl'],
        answer: 0,
        explanation: '"denn" är samordnande och påverkar inte ordföljden (subjekt + verb på plats 2). "weil" kräver däremot verbet sist ("weil ich müde bin").',
        feedback: [
          'Helt rätt! "denn" är en nollkonjunktion (ADUSO) och behåller huvudsatsordföljd (ich bin müde).',
          'Fel: "weil" skulle kräva verbet sist ("weil ich müde bin").',
          '"dass" är underordnande och kräver verbet sist.',
          '"obwohl" är underordnande och kräver verbet sist.',
        ],
      },
      {
        id: 'y04-q6',
        context: 'Avancerad verbgrupp med Ersatzinfinitiv (IDS-referens för E11).',
        prompt: 'Varför kan man i avancerad tyska se "..., weil er hat arbeiten müssen" istället för verbet allra sist?',
        options: [
          'Det kallas Oberfeld/Ersatzinfinitiv-mönster där modalverbet kan dra till sig hjälpverbet före de dubbla infinitiverna.',
          'Det är ett slarvfel som aldrig godkänns.',
          'För att "weil" har slutat vara en bisatsinledare i modern tyska.',
          'Det beror på dialekt i Schweiz enbart.',
        ],
        answer: 0,
        explanation: 'Vid perfekt av modalverb med huvudverb (dubbel infinitiv / Ersatzinfinitiv) kan hjälpverbet placeras framför verbgruppen (Oberfeld). Detta behandlas utförligt i fördjupningen E11.',
        feedback: [
          'Helt rätt och vetenskapligt belagt i IDS grammis! Detta är en viktig fördjupning som visar att "verbet sist" har väldefinierade språkhistoriska och syntaktiska nyanser.',
          'Nej, det är ett etablerat mönster i standardtyska vid Ersatzinfinitiv.',
          'Nej, "weil" är och förblir en underordnande konjunktion.',
          'Nej, mönstret förekommer i allmän standardtysk skrift och tal.',
        ],
      },
    ],
  },

  // G02: Vokaler, omljud och längd
  '/docs/grunder/vokaler': {
    lessonId: 'G02',
    href: '/docs/grunder/vokaler',
    title: 'Snabbkoll: Tyska vokaler, omljud och vokallängd',
    questions: [
      {
        id: 'g02-q1',
        context: 'Vokallängd och minimala ordpar.',
        prompt: 'Vad är skillnaden i uttal mellan "Beet" (rabatt) och "Bett" (säng)?',
        options: [
          'Beet har långt, slutet e [eː] medan Bett har kort, öppet e [ɛ].',
          'De uttalas exakt likadant.',
          'Beet har två stavelser.',
          'Bett uttalas med stumt t.',
        ],
        answer: 0,
        explanation: 'Dubbelvokal (ee) signalerar lång vokal [eː], medan dubbelkonsonant (tt) signalerar kort vokal [ɛ].',
        feedback: [
          'Helt rätt! Dubbelvokalen "ee" ger långt slutet ljud [eː], dubbelkonsonant "tt" ger kort öppet ljud [ɛ].',
          'Fel: vokallängden skiljer betydelsen åt helt i detta minimala par.',
          'Nej, båda är enstaviga ord.',
          'Nej, i tyskan uttalas konsonanter tydligt.',
        ],
      },
      {
        id: 'g02-q2',
        context: 'Omljudet "ä" i jämförelse med "e".',
        prompt: 'Hur bildas och uttalas kort "ä" i ord som "Männer"?',
        options: [
          'Som ett öppet e-ljud [ɛ], precis som i svenskans "bädd".',
          'Som ett a-ljud [a].',
          'Som ett u-ljud [u].',
          'Som ett diftongerat [ae].',
        ],
        answer: 0,
        explanation: 'Kort "ä" i tyskan uttalas som öppet [ɛ], mycket likt svenskt kort ä/e i ord som "sätt" eller "bädd".',
        feedback: [
          'Helt rätt! Kort "ä" [ɛ] är mycket nära det svenska ä-ljudet.',
          'Nej, omljudet innebär just att det inte uttalas som rent "a".',
          'Nej, u och ä är helt olika ljud.',
          'Nej, ä är en monoftong, inte en diftong.',
        ],
      },
      {
        id: 'g02-q3',
        context: 'Diftongerna "ei" och "ie".',
        prompt: 'Hur skiljer sig uttalet mellan "Wein" (vin) och "Wien" (Wien)?',
        options: [
          '"Wein" uttalas [aɪ] (som svenskans "aj") medan "Wien" uttalas med långt i-ljud [iː].',
          'Båda uttalas med [aɪ].',
          'Båda uttalas med långt [iː].',
          '"Wein" har i-ljud och "Wien" har aj-ljud.',
        ],
        answer: 0,
        explanation: 'En gyllene minnesregel: i "ei" hörs sista bokstaven (i -> aj-ljud), och i "ie" hörs det långa i:et [iː].',
        feedback: [
          'Helt rätt! "ei" = [aɪ] (vin), "ie" = långt [iː] (Wien). Detta är en av de viktigaste uttalsreglerna för nybörjare.',
          'Fel: de representerar två helt olika ljud.',
          'Fel: "ei" och "ie" förväxlas ofta, men är helt olika.',
          'Precis tvärtom! Kom ihåg: ei uttalas aj, ie uttalas långt i.',
        ],
      },
      {
        id: 'g02-q4',
        context: 'Omljudet "ö" och "ü".',
        prompt: 'Vilket påstående stämmer om tyskt "ü" i ord som "über" och "Mütter"?',
        options: [
          'Långt ü uttalas som [yː] med rundade läppar (som svenskt y), och kort ü som [ʏ].',
          'Det uttalas som svenskt u [ʉː].',
          'Det uttalas som ett vanligt o.',
          'Ü uttalas alltid som [i].',
        ],
        answer: 0,
        explanation: 'Tyskt "ü" motsvarar IPA [yː]/[ʏ], vilket är mycket nära svenskt y-ljud (rundade läppar och främre tungställning), INTE svenskt u-ljud!',
        feedback: [
          'Helt rätt! Tyskt ü motsvarar svenskt y-ljud i munställning och akustik.',
          'Viktig fallgrop! Svenskt "u" [ʉ] har ett unikt svenskt ljud som inte finns i tyskan.',
          'Nej, o och ü är skilda vokaler.',
          'I vissa dialekter kan avrundning ske, men standardtyska kräver rundade läppar.',
        ],
      },
      {
        id: 'g02-q5',
        context: 'Betydelsekontrast med och utan omljud: "schon" vs "schön".',
        prompt: 'Vad betyder "schon" (utan omljud) respektive "schön" (med omljud)?',
        options: [
          '"schon" betyder "redan", medan "schön" betyder "vacker/fin".',
          '"schon" betyder "vacker", medan "schön" betyder "redan".',
          'Båda betyder "skön" på svenska.',
          'Det är bara två olika stavningar av samma ord.',
        ],
        answer: 0,
        explanation: '"schon" [ʃoːn] betyder "redan". "schön" [ʃøːn] betyder "vacker" eller "fin". Omljudet ändrar ordets betydelse fullständigt!',
        feedback: [
          'Helt rätt! Ett omljud är inte bara en accent utan ändrar ordet helt (schon = redan, schön = vacker).',
          'Tvärtom! Tänk på att omljudet ger det mjukare vackra ordet "schön".',
          'Falsk vän! "schon" betyder inte skön.',
          'Absolut inte: det är två helt olika lexikala ord med olika betydelser.',
        ],
      },
      {
        id: 'g02-q6',
        context: 'Stumt h som längdmarkör (Dehnungs-h).',
        prompt: 'Vilken funktion har bokstaven "h" i ord som "fahren", "sehen" och "wohnen"?',
        options: [
          'Det uttalas inte utan fungerar som längdmarkör för föregående vokal.',
          'Det uttalas som ett kraftigt flämtljud i mitten av ordet.',
          'Det förkortar föregående vokal.',
          'Det ändrar betoningen till sista stavelsen.',
        ],
        answer: 0,
        explanation: 'Ett "h" efter en vokal i samma stavelse (Dehnungs-h) uttalas inte utan visar att vokalen är lång: [faːʁən], [zeːən], [voːnən].',
        feedback: [
          'Helt rätt! Dehnungs-h gör föregående vokal lång och uttalas inte i sig.',
          'Nej, h är stumt inuti dessa stammar.',
          'Tvärtom, det förlänger vokalen.',
          'Nej, betoningen ligger kvar på stamstavelsen.',
        ],
      },
    ],
  },

  // S03: Bestämd artikel
  '/docs/substantiv/bestamd-artikel': {
    lessonId: 'S03',
    href: '/docs/substantiv/bestamd-artikel',
    title: 'Snabbkoll: Bestämd artikel (der, die, das)',
    questions: [
      {
        id: 's03-q1',
        context: 'Artikeln i maskulinum över kasus.',
        prompt: 'I vilket kasus ändras maskulin bestämd artikel från "der" till "den"?',
        options: ['Ackusativ', 'Dativ', 'Genitiv', 'Nominativ'],
        answer: 0,
        explanation: 'Endast i ackusativ blir maskulin artikel "den" (der Mann -> den Mann). I dativ blir den "dem" och i genitiv "des".',
        feedback: [
          'Helt rätt! Ackusativ maskulinum är den enda formen i singular där ackusativ skiljer sig synligt från nominativ.',
          'I dativ heter den "dem".',
          'I genitiv heter den "des".',
          'I nominativ heter den "der".',
        ],
      },
      {
        id: 's03-q2',
        context: 'Identiska artikelformer med olika funktion.',
        prompt: 'Formen "der" kan representera flera olika funktioner. Vilken av följande är INTE möjlig för "der"?',
        options: [
          'Ackusativ maskulinum',
          'Nominativ maskulinum',
          'Dativ femininum',
          'Genitiv femininum',
        ],
        answer: 0,
        explanation: 'I ackusativ maskulinum heter artikeln ALLTID "den", aldrig "der". Däremot heter femininum "der" i både dativ och genitiv!',
        feedback: [
          'Helt rätt! Ackusativ maskulinum heter "den", aldrig "der".',
          '"der" är just standardformen för nominativ maskulinum ("der Mann").',
          'Möjlig form: feminin dativ heter "der" ("ich helfe der Frau").',
          'Möjlig form: feminin genitiv heter "der" ("das Auto der Frau").',
        ],
      },
      {
        id: 's03-q3',
        context: 'Dativ plural för alla tre genus.',
        prompt: 'Vad heter bestämd artikel i dativ plural (för maskulin, feminin och neutral)?',
        options: ['den', 'die', 'der', 'dem'],
        answer: 0,
        explanation: 'I dativ plural heter artikeln ALLTID "den" för alla genus (den Kindern, den Frauen, den Männern).',
        feedback: [
          'Helt rätt! Dativ plural har alltid artikeln "den" och substantivet lägger normalt till ett "-n".',
          '"die" är nominativ och ackusativ plural.',
          '"der" är genitiv plural.',
          '"dem" är dativ maskulinum och neutrum singular.',
        ],
      },
      {
        id: 's03-q4',
        context: 'Svensk slutartikel kontra tysk fristående artikel.',
        prompt: 'Hur översätts "boken" till tyska i nominativ?',
        options: ['das Buch', 'Buchdas', 'ein Buch', 'den Buch'],
        answer: 0,
        explanation: 'Svenskans ändelseartikel ("bok-en") motsvaras på tyska av en fristående bestämd artikel framför substantivet: "das Buch".',
        feedback: [
          'Helt rätt! Tyskan sätter alltid artikeln framför ordet: "das Buch".',
          'Tyskan har inga fogade slutartiklar som de nordiska språken.',
          '"ein Buch" betyder "en bok" (obestämd form).',
          '"Buch" är neutralt (das), inte maskulint.',
        ],
      },
      {
        id: 's03-q5',
        context: 'Genitiv maskulinum och neutrum.',
        prompt: 'Vilken artikel och substantivändelse krävs i: "das Auto ___ Vater___"?',
        options: ['des Vaters', 'dem Vater', 'den Vater', 'der Vaters'],
        answer: 0,
        explanation: 'Genitiv maskulinum kräver artikeln "des" och substantivet får ändelsen "-s" (eller "-es"): des Vaters.',
        feedback: [
          'Helt rätt! Artikeln "des" och substantivändelsen "-s" markerar genitiv för maskulina och neutrala ord.',
          '"dem Vater" är dativ.',
          '"den Vater" är ackusativ.',
          '"der" är genitiv femininum eller genitiv plural.',
        ],
      },
      {
        id: 's03-q6',
        context: 'Sammandragning av preposition och artikel.',
        prompt: 'Vilken sammandragning bildas av "an + dem"?',
        options: ['am', 'ans', 'im', 'vom'],
        answer: 0,
        explanation: 'Prepositionen "an" dras ihop med "dem" till "am" (t.ex. am Montag, am Bahnhof).',
        feedback: [
          'Helt rätt! an + dem = am.',
          '"ans" är an + das.',
          '"im" är in + dem.',
          '"vom" är von + dem.',
        ],
      },
    ],
  },

  // K03: Ackusativ
  '/docs/kasus/ackusativ': {
    lessonId: 'K03',
    href: '/docs/kasus/ackusativ',
    title: 'Snabbkoll: Ackusativ i funktion och form',
    questions: [
      {
        id: 'k03-q1',
        context: 'Identifiera direkt ackusativobjekt.',
        prompt: 'Vilket ord är ackusativobjekt i: "Der Junge kauft einen Apfel"?',
        options: ['einen Apfel', 'Der Junge', 'kauft', 'både Junge och Apfel'],
        answer: 0,
        explanation: '"Der Junge" är subjekt (nominativ) som utför köpet. "einen Apfel" är det direkta objektet som köps (ackusativ).',
        feedback: [
          'Helt rätt! "einen Apfel" är föremålet för handlingen och står i ackusativ maskulinum.',
          '"Der Junge" är subjektet som utför handlingen (nominativ).',
          '"kauft" är verbet.',
          'Nej, Junge är subjekt.',
        ],
      },
      {
        id: 'k03-q2',
        context: 'Synlig kasusändring i ackusativ.',
        prompt: 'För vilket genus syns det på artikeln i singular att den står i ackusativ jämfört med nominativ?',
        options: ['Maskulinum', 'Femininum', 'Neutrum', 'Plural'],
        answer: 0,
        explanation: 'Bara maskulinum ändras i ackusativ singular (der -> den, ein -> einen). Femininum (die/eine), neutrum (das/ein) och plural (die/-) har identiska former i nominativ och ackusativ!',
        feedback: [
          'Helt rätt! Endast maskulinum har en synlig ändring i ackusativ singular (der -> den).',
          'Femininum heter "die/eine" i både nominativ och ackusativ.',
          'Neutrum heter "das/ein" i både nominativ och ackusativ.',
          'Plural heter "die" i både nominativ och ackusativ.',
        ],
      },
      {
        id: 'k03-q3',
        context: 'Personliga pronomen i ackusativ.',
        prompt: 'Välj rätt ackusativpronomen: "Siehst du ___ (jag)?"',
        options: ['mich', 'mir', 'ich', 'mein'],
        answer: 0,
        explanation: 'Ackusativformen av "ich" är "mich". ("mir" är dativ).',
        feedback: [
          'Helt rätt! "mich" är personligt pronomen i ackusativ.',
          '"mir" är dativform ("du hilfst mir").',
          '"ich" är subjektsformen i nominativ.',
          '"mein" är possessivt pronomen.',
        ],
      },
      {
        id: 'k03-q4',
        context: 'Verbet "haben" kräver alltid ackusativobjekt.',
        prompt: 'Välj rätt form: "Ich habe ein___ Hund (der Hund)."',
        options: ['einen', 'ein', 'einem', 'einer'],
        answer: 0,
        explanation: 'Verbet "haben" styr ackusativ. Eftersom "Hund" är maskulint heter det "einen Hund".',
        feedback: [
          'Helt rätt! "haben" kräver ackusativobjekt, och maskulint "Hund" ger "einen Hund".',
          'Diagnos: "ein" används för neutrum, men Hund är maskulint (der Hund -> einen Hund).',
          '"einem" är dativ.',
          '"einer" är feminin dativ/genitiv.',
        ],
      },
      {
        id: 'k03-q5',
        context: 'Ren ackusativpreposition: "ohne".',
        prompt: 'Välj rätt form: "Ohne ___ (du) kann ich nicht gehen."',
        options: ['dich', 'dir', 'du', 'dein'],
        answer: 0,
        explanation: '"ohne" styr ALLTID ackusativ (dich).',
        feedback: [
          'Helt rätt! "ohne" är en ren ackusativpreposition och kräver formen "dich".',
          '"dir" är dativform.',
          '"du" är nominativform.',
          '"dein" är possessivform.',
        ],
      },
      {
        id: 'k03-q6',
        context: 'Predikativ efter "sein" är INTE ackusativ.',
        prompt: 'Vilket kasus har "ein guter Lehrer" i: "Er ist ein guter Lehrer"?',
        options: ['Nominativ', 'Ackusativ', 'Dativ', 'Genitiv'],
        answer: 0,
        explanation: 'Efter verben sein, werden och bleiben står ett predikativ (subjektsmärke), ALDRIG ett ackusativobjekt! Därför har det nominativ.',
        feedback: [
          'Helt rätt! "sein" tar predikativ i nominativ, inte ackusativobjekt.',
          'Klassisk fälla! Bara för att frasen kommer efter ett verb betyder det inte att det är ackusativ.',
          '"sein" styr inte dativ.',
          'Det uttrycker ingen ägandeform eller genitiv.',
        ],
      },
    ],
  },

  // G08: Grammatiska begrepp från början
  '/docs/grunder/grammatiska-begrepp': {
    lessonId: 'G08',
    href: '/docs/grunder/grammatiska-begrepp',
    title: 'Snabbkoll: Grammatiska begrepp',
    questions: [
      {
        id: 'g08-q1',
        context: 'Skillnaden mellan ordklass och satsdel.',
        prompt: 'Vad är "der Hund" för något ur ett ordklassperspektiv respektive satsdelsperspektiv i meningen: "Der Hund schläft"?',
        options: [
          'Ordklass: substantiv (med artikel). Satsdel: subjekt.',
          'Ordklass: subjekt. Satsdel: substantiv.',
          'Både ordklass och satsdel är subjekt.',
          'Ordklass: verb. Satsdel: objekt.',
        ],
        answer: 0,
        explanation: 'Ordklassen är substantiv (vad ordet är). Satsdelen i meningen är subjekt (vem som utför handlingen).',
        feedback: [
          'Exakt rätt! Ordklassen är substantiv och satsdelen är subjekt.',
          'Tvärtom: Subjekt är rollen (satsdel), substantiv är ordklassen.',
          'Subjekt är en satsdel, inte en ordklass.',
          'Hund är varken verb eller objekt här.',
        ],
      },
      {
        id: 'g08-q2',
        context: 'Infinitiv kontra finit verb.',
        prompt: 'Vilket av följande är ett infinitivt verb i tyskan?',
        options: ['wohnen', 'wohne', 'wohnst', 'wohnt'],
        answer: 0,
        explanation: 'Infinitiven är ordboksformen som slutar på -en (wohnen). De övriga tre är finita böjda former.',
        feedback: [
          'Helt rätt! "wohnen" är infinitiven (att bo).',
          '"wohne" är böjd i 1:a person singular presens (ich wohne).',
          '"wohnst" är böjd i 2:a person singular (du wohnst).',
          '"wohnt" är böjd form (er/sie/es wohnt).',
        ],
      },
      {
        id: 'g08-q3',
        context: 'Grammatiskt genus i tyska språket.',
        prompt: 'Hur många grammatiska genus finns det i tyska i singular?',
        options: ['Tre: maskulinum, femininum och neutrum', 'Två: utrum och neutrum', 'Fyra: maskulinum, femininum, neutrum och plural', 'Ett gemensamt genus'],
        answer: 0,
        explanation: 'Tyskan har tre genus i singular: maskulinum (der), femininum (die) och neutrum (das). Plural är ett numerus, inte ett genus.',
        feedback: [
          'Helt rätt! Tyskan skiljer på maskulinum, femininum och neutrum.',
          'Två genus har svenskan (en/ett), men tyskan har tre.',
          'Plural är ett numerus (antal), inte ett genus (grammatiskt kön).',
          'Tyskan har inte bara ett genus.',
        ],
      },
      {
        id: 'g08-q4',
        context: 'Objektets roll: direkt ackusativobjekt.',
        prompt: 'Vad har "den Mann" för funktion i satsen: "Ich sehe den Mann"?',
        options: ['Direkt ackusativobjekt', 'Subjekt', 'Dativobjekt (mottagare)', 'Predikat'],
        answer: 0,
        explanation: 'Mannen är den som blir sedd (utsätts för handlingen) och står därför som direkt objekt i ackusativ.',
        feedback: [
          'Rätt! Mannen är direkt objekt i ackusativ.',
          'Subjektet är "Ich" (den som ser).',
          'Det är inget dativobjekt här; sehen styr ackusativ.',
          'Predikatet är verbet "sehe".',
        ],
      },
      {
        id: 'g08-q5',
        context: 'Dativobjektets roll: mottagare.',
        prompt: 'Vilken satsdel är "dem Kind" i: "Die Mutter gibt dem Kind einen Apfel"?',
        options: ['Dativobjekt (indirekt mottagare)', 'Subjekt', 'Ackusativobjekt', 'Prepositionsfras'],
        answer: 0,
        explanation: 'Barnet är den som tar emot äpplet (mottagare), vilket uttrycks med dativobjekt (dem Kind). Äpplet är ackusativobjekt.',
        feedback: [
          'Helt rätt! Barnet tar emot gåvan och står i dativ.',
          'Subjektet är mamman ("Die Mutter").',
          'Äpplet ("einen Apfel") är ackusativobjektet.',
          'Det finns ingen preposition i meningen.',
        ],
      },
      {
        id: 'g08-q6',
        context: 'Genitivets grundläggande roll.',
        prompt: 'Vad uttrycker genitiv i: "Das Auto des Lehrers"?',
        options: ['Ägande / tillhörighet (lärarens bil)', 'Riktning (till läraren)', 'Sätt (som en lärare)', 'Tid (under läraren)'],
        answer: 0,
        explanation: 'Genitiv uttrycker tillhörighet och ägande (motsvarar svenskans s-genitiv: lärarens bil).',
        feedback: [
          'Korrekt! "des Lehrers" är genitiv och betyder lärarens.',
          'Genitiv uttrycker inte riktning.',
          'Det uttrycker inte sätt.',
          'Det anger ingen tidsrelation här.',
        ],
      },
    ],
  },

  // G01: Alfabetet och att bokstavera
  '/docs/grunder/alfabet': {
    lessonId: 'G01',
    href: '/docs/grunder/alfabet',
    title: 'Snabbkoll: Alfabetet och att bokstavera',
    questions: [
      {
        id: 'g01-q1',
        context: 'Bokstaven V i tyska språket.',
        prompt: 'Vad heter bokstaven "V" på tyska och hur uttalas den i tyska arvord som "Vater"?',
        options: [
          'Den heter "Vau" och uttalas oftast som ett svenskt "f".',
          'Den heter "We" och uttalas som svenskt "v".',
          'Den heter "Vi" och uttalas stumt.',
          'Den heter "Vau" men uttalas som engelskt "w".',
        ],
        answer: 0,
        explanation: 'Bokstaven V heter "Vau" [faʊ] och uttalas som ett f i tyska ord: Vater låter fater, vier låter fiir.',
        feedback: [
          'Helt rätt! V heter Vau och låter f i tyska ord.',
          '"We" är namnet på bokstaven W.',
          'Den uttalas absolut inte stumt.',
          'Engelskt w finns inte i tyskans V.',
        ],
      },
      {
        id: 'g01-q2',
        context: 'Bokstaven W i tyska språket.',
        prompt: 'Hur uttalas bokstaven "W" i tyska ord som "Wasser" och "Wien"?',
        options: ['Som ett svenskt "v"', 'Som ett svenskt "f"', 'Som ett engelskt "w" med rundade läppar', 'Som ett "u"'],
        answer: 0,
        explanation: 'Tyskt W låter precis som svenskt V: Wasser uttalas med v-ljud.',
        feedback: [
          'Helt rätt! Tyskt W motsvarar svenskt V i uttal.',
          'f-ljud har vanligtvis bokstaven V eller F.',
          'Engelskt w är en svensk/engelsk fälla — tyskt W är ett vanligt svenskt v-ljud.',
          'Det låter inte som u.',
        ],
      },
      {
        id: 'g01-q3',
        context: 'Bokstaven Z i tyska språket.',
        prompt: 'Hur uttalas bokstaven "Z" i tyska ord som "Zug" eller "Zimmer"?',
        options: ['Som "ts"', 'Som ett surrande s', 'Som ett vanligt mjukt s', 'Som ett k-ljud'],
        answer: 0,
        explanation: 'Tyskt Z heter "Zett" och uttalas konsekvent som "ts": Zug låter tsook.',
        feedback: [
          'Helt rätt! Z uttalas alltid som ts.',
          'Surrande s förekommer i början av ord stavade med S (som Sonne), aldrig för Z.',
          'Vanligt s är för bokstaven S.',
          'Z låter inte som k.',
        ],
      },
      {
        id: 'g01-q4',
        context: 'Bokstavering av symboler i en e-postadress.',
        prompt: 'Hur uttalar man symbolerna "@" och "." när man bokstaverar en e-postadress på tyska?',
        options: ['"ät" och "Punkt"', '"snabel-a" och "Prikk"', '"at" och "Stop"', '"a-Kringel" och "Komma"'],
        answer: 0,
        explanation: '@ uttalas "ät" (eller At-Zeichen) och punkt uttalas "Punkt".',
        feedback: [
          'Rätt! "ät" och "Punkt" är standard på tyska.',
          'Snabel-a är svensk slang som inte förstås på tyska.',
          'Stop används inte för punkt i e-post.',
          'Det heter Punkt, inte Komma.',
        ],
      },
      {
        id: 'g01-q5',
        context: 'Bokstaven Eszett (ß).',
        prompt: 'Vad kallas bokstaven "ß" på tyska och vad är dess ljudvärde?',
        options: ['Eszett (eller scharfes S); uttalas som ett tonlöst s', 'B-Umlaut; uttalas som b', 'Beta; uttalas som th', 'Doppel-B; uttalas stumt'],
        answer: 0,
        explanation: 'Tecknet ß heter Eszett eller scharfes S och är ett tonlöst s-ljud efter lång vokal eller diftong.',
        feedback: [
          'Helt rätt! Eszett uttalas som ett skarpt tonlöst s.',
          'Det har ingenting med bokstaven B att göra trots viss optisk likhet.',
          'Det är inte den grekiska bokstaven beta.',
          'Det är inget B.',
        ],
      },
      {
        id: 'g01-q6',
        context: 'Bokstaven J.',
        prompt: 'Hur bokstaveras bokstaven "J" på tyska?',
        options: ['Jot [jɔt]', 'Jay [dʒeɪ]', 'Ji [jiː]', 'Jott-Zett'],
        answer: 0,
        explanation: 'Bokstaven J heter "Jot" på tyska.',
        feedback: [
          'Helt rätt! J heter Jot.',
          'Jay är det engelska namnet.',
          'Ji är fel.',
          'Det heter bara Jot.',
        ],
      },
    ],
  },

  // G03: Konsonanterna och deras ljud
  '/docs/grunder/konsonanter': {
    lessonId: 'G03',
    href: '/docs/grunder/konsonanter',
    title: 'Snabbkoll: Konsonanternas ljud',
    questions: [
      {
        id: 'g03-q1',
        context: 'Ich-ljudet kontra ach-ljudet.',
        prompt: 'Vilket ord uttalas med det bakre raspande ach-ljudet [x]?',
        options: ['Nacht', 'ich', 'Milch', 'echt'],
        answer: 0,
        explanation: 'Efter vokalerna a, o, u samt diftongen au uttalas ch som ach-ljudet [x]: Nacht, Buch, Koch.',
        feedback: [
          'Helt rätt! "Nacht" har föregående "a" och uttalas därför med ach-ljudet [naxt].',
          '"ich" uttalas med det främre mjuka ich-ljudet [ç].',
          '"Milch" har konsonanten l före ch, vilket ger ich-ljudet [mɪlç].',
          '"echt" har vokalen e före ch, vilket ger ich-ljudet [ɛçt].',
        ],
      },
      {
        id: 'g03-q2',
        context: 'sp- och st- i början av ord.',
        prompt: 'Hur uttalas orden "Stadt" och "Sport" i början av ordet?',
        options: ['Som "scht-" och "schp-"', 'Som vanligt svenskt s + t och s + p', 'Som "stj-" och "spj-"', 'Med tyst s'],
        answer: 0,
        explanation: 'I ordens början uttalas sp- och st- alltid som schp- och scht-: [ʃtat] och [ʃpɔʁt].',
        feedback: [
          'Helt rätt! Stadt och Sport uttalas med sch-ljud.',
          'Vanligt s+t används mitt i ord (Fenster), men i början är det scht-.',
          'Inte stj.',
          's är aldrig tyst.',
        ],
      },
      {
        id: 'g03-q3',
        context: 'Auslautverhärtung: slutljudets hårdhet.',
        prompt: 'Hur uttalas slutkonsonanten i orden "Tag", "und" och "ab"?',
        options: ['Tonlöst som [k], [t] och [p]', 'Tonande som [g], [d] och [b]', 'Alltid stumt', 'Med ett extra e på slutet'],
        answer: 0,
        explanation: 'I slutet av ord härdas b, d, g till tonlösa p, t, k: Tag låter taak, und låter unt.',
        feedback: [
          'Helt rätt! Detta kallas Auslautverhärtung på tyska.',
          'De behåller inte sin stämbandston i ordslut.',
          'De är inte stumma.',
          'Inget extra e läggs till.',
        ],
      },
      {
        id: 'g03-q4',
        context: 'Tonande S i början av ord före vokal.',
        prompt: 'Hur uttalas begynnelsebokstaven s i ordet "Sonne" [ˈzɔnə]?',
        options: ['Tonande med stämbandsvibration (som i engelskans "zoo")', 'Skarpt och tonlöst som svenskt s', 'Som ett sch-ljud', 'Som ett ts-ljud'],
        answer: 0,
        explanation: 'Bokstaven s i början av ord före en vokal är tonande i standardtyska: [z].',
        feedback: [
          'Helt rätt! S före vokal i början av ord uttalas tonande med röstton.',
          'Tonlöst s skrivs ss eller ß, eller står i ordslut.',
          'Det är inget sch-ljud.',
          'ts-ljud är bokstaven Z.',
        ],
      },
      {
        id: 'g03-q5',
        context: 'Böjningsväxling vid omljud: Buch -> Bücher.',
        prompt: 'Hur ändras ch-ljudet när "das Buch" blir "die Bücher"?',
        options: [
          'Från ach-ljud [x] i Buch till ich-ljud [ç] i Bücher.',
          'Från ich-ljud i Buch till ach-ljud i Bücher.',
          'Det är exakt samma ach-ljud i båda.',
          'Det blir ett sch-ljud i Bücher.',
        ],
        answer: 0,
        explanation: 'I Buch föregås ch av u (bakre vokal -> ach-ljud). I Bücher föregås ch av ü (främre omljud -> ich-ljud).',
        feedback: [
          'Utmärkt! Munnen anpassar automatiskt ljudet efter den främre vokalen ü.',
          'Tvärtom: u är bakre, ü är främre.',
          'Nej, vokalen ü tvingar ch framåt i munnen.',
          'Det blir inte sch.',
        ],
      },
      {
        id: 'g03-q6',
        context: 'Vokalisering av r i ändelsen -er.',
        prompt: 'Hur uttalas ändelsen "-er" i vardagliga ord som "Wasser", "Mutter" och "Lehrer"?',
        options: ['Som ett dämpat, öppet a-liknande ljud [ɐ]', 'Med ett hårt rullande tungspets-r', 'Helt stumt så bara e hörs', 'Som ett engelskt bakåt-r'],
        answer: 0,
        explanation: 'I obetonade stavelser (särskilt -er) vokaliseras r i standardtyska till ett dämpat a-ljud [ɐ]: Wasser låter som "vassa".',
        feedback: [
          'Helt rätt! Ändelsen -er vokaliseras till ett dämpat a [ɐ].',
          'Rullande tungspets-r används inte i obetonad -er-ändelse i standardtyska.',
          'Det försvinner inte till bara e.',
          'Engelskt r förekommer inte.',
        ],
      },
    ],
  },

  // G05: Stavning, ss, ß och omljud
  '/docs/grunder/stavning-och-specialtecken': {
    lessonId: 'G05',
    href: '/docs/grunder/stavning-och-specialtecken',
    title: 'Snabbkoll: Stavning och Eszett',
    questions: [
      {
        id: 'g05-q1',
        context: 'Stavningsreformens regel för ss kontra ß.',
        prompt: 'När skriver man bokstaven "ß" i modern tysk rättskrivning?',
        options: ['Efter lång vokal eller diftong', 'Efter kort vokal', 'Endast i början av ord', 'Bara i Schweiz'],
        answer: 0,
        explanation: 'ß skrivs uteslutande efter lång vokal (groß, Straße) eller diftong (weiß, beißen).',
        feedback: [
          'Helt rätt! Lång vokal eller diftong ger alltid ß.',
          'Efter kort vokal skrivs alltid ss (dass, Kuss).',
          'ß kan aldrig stå i början av ett tyskt ord.',
          'I Schweiz används inte ß alls!',
        ],
      },
      {
        id: 'g05-q2',
        context: 'Subjunktionen "att" på tyska.',
        prompt: 'Hur stavas konjunktionen "att" (kort a-ljud) på modern tyska?',
        options: ['dass', 'daß', 'das', 'dazs'],
        answer: 0,
        explanation: 'Eftersom a-ljudet är kort stavas konjunktionen alltid "dass" sedan stavningsreformen 1996.',
        feedback: [
          'Helt rätt! "dass" med dubbel-s eftersom vokalen är kort.',
          '"daß" är den föråldrade stavningen från före 1996.',
          '"das" är artikeln eller pronomenet (det), inte bindeordet att.',
          '"dazs" existerar inte.',
        ],
      },
      {
        id: 'g05-q3',
        context: 'Omskrivning av omljud vid tangentbord utan tyska bokstäver.',
        prompt: 'Hur omskrivs "ä", "ö" och "ü" officiellt om tangentbordet saknar dessa tangenter?',
        options: ['ae, oe, ue', 'a, o, u', 'ah, oh, uh', 'ay, oy, uy'],
        answer: 0,
        explanation: 'Den officiella tyska omskrivningen lägger till ett "e" efter vokalen: ae, oe, ue.',
        feedback: [
          'Exakt rätt! ä -> ae, ö -> oe, ü -> ue.',
          'Att bara ta bort prickarna (a, o, u) ändrar ordets betydelse och är felaktigt.',
          'h läggs inte till som ersättning.',
          'y används inte.',
        ],
      },
      {
        id: 'g05-q4',
        context: 'Särskiljande av betydelse: schon vs. schön.',
        prompt: 'Vad betyder "schon" utan omljud, och vad betyder "schön" med omljud?',
        options: [
          'schon = redan; schön = vacker/fin',
          'schon = vacker; schön = redan',
          'Båda betyder vacker, men schön är mer formellt',
          'schon = sko; schön = skönhet',
        ],
        answer: 0,
        explanation: 'Detta är ett klassiskt minimalt ordpar: schon = redan, schön = vacker.',
        feedback: [
          'Helt rätt! Därför är det så viktigt att inte slarva bort omljudet!',
          'Tvärtom: schon är redan, schön är vacker.',
          'De betyder helt olika saker.',
          'Inget av orden betyder sko (der Schuh).',
        ],
      },
      {
        id: 'g05-q5',
        context: 'Stavningskonventionen i Schweiz och Liechtenstein.',
        prompt: 'Hur stavas ordet för "gata" i en schweizisk dagstidning?',
        options: ['Strasse (med ss)', 'Straße (med ß)', 'Strahse', 'Straze'],
        answer: 0,
        explanation: 'Schweiz och Liechtenstein använder inte bokstaven ß i skrift, utan ersätter den konsekvent med ss: Strasse.',
        feedback: [
          'Helt rätt! I Schweiz skriver man Strasse med ss.',
          'Straße med ß är normen i Tyskland och Österrike, men inte i Schweiz.',
          'Strahse är felaktigt.',
          'Straze är fel.',
        ],
      },
      {
        id: 'g05-q6',
        context: 'Vokallängd i ordparet Masse vs. Maße.',
        prompt: 'Hur skiljer sig uttalet av "die Masse" och "die Maße"?',
        options: [
          'Masse har kort a; Maße har långt a.',
          'Masse har långt a; Maße har kort a.',
          'Båda har långt a.',
          'Båda har kort a.',
        ],
        answer: 0,
        explanation: 'ss signalerar kort vokal (Masse = massa), medan ß signalerar lång vokal (Maße = mått).',
        feedback: [
          'Helt rätt! Konsonanten ss/ß visar vokallängden direkt i skrift.',
          'Tvärtom: ss är kort, ß är lång.',
          'Nej, de skiljer sig i längd.',
          'Nej, Maße har lång vokal.',
        ],
      },
    ],
  },

  // G06: Stor och liten bokstav
  '/docs/grunder/stor-och-liten-bokstav': {
    lessonId: 'G06',
    href: '/docs/grunder/stor-och-liten-bokstav',
    title: 'Snabbkoll: Stor och liten bokstav',
    questions: [
      {
        id: 'g06-q1',
        context: 'Grundregeln för substantiv i tysk text.',
        prompt: 'Vilka ord ska skrivas med stor begynnelsebokstav i en tysk text?',
        options: [
          'ALLA substantiv, oavsett var de står i meningen, plus första ordet i satsen.',
          'Bara egennamn och första ordet i meningen (som på svenska).',
          'Bara substantiv som står i nominativ.',
          'Endast personer och städer.',
        ],
        answer: 0,
        explanation: 'I tyskan stavas samtliga substantiv (konkreta och abstrakta) med stor begynnelsebokstav.',
        feedback: [
          'Helt rätt! Alla substantiv får stor begynnelsebokstav på tyska.',
          'Detta är den svenska regeln, inte den tyska.',
          'Kasus spelar ingen roll — ackusativ-, dativ- och genitivsubstantiv stavas också med stor bokstav.',
          'Även saker, begrepp och djur stavas med stor bokstav.',
        ],
      },
      {
        id: 'g06-q2',
        context: 'Substantiverat adjektiv efter "etwas".',
        prompt: 'Hur stavas meningen: "Jag har lärt mig något nytt" på korrekt tyska?',
        options: [
          'Ich habe etwas Neues gelernt.',
          'Ich habe etwas neues gelernt.',
          'Ich habe etwas neu gelernt.',
          'Ich habe Etwas Neues gelernt.',
        ],
        answer: 0,
        explanation: 'Efter obestämda mängdord som "etwas", "nichts", "viel" substantiveras adjektivet och får stor bokstav: etwas Neues.',
        feedback: [
          'Helt rätt! "Neues" substantiveras och skrivs med versal.',
          '"neues" med liten bokstav är felaktigt efter något (etwas).',
          '"neu" är grundformen och saknar böjning här.',
          '"etwas" är ett pronomen och ska inte ha stor bokstav mitt i satsen.',
        ],
      },
      {
        id: 'g06-q3',
        context: 'Språknamn som substantiv kontra adjektiv.',
        prompt: 'Välj rätt stavning: "1. Ich lerne ___. 2. Das ist ein ___ Auto."',
        options: [
          '1. Deutsch, 2. deutsches',
          '1. deutsch, 2. Deutsches',
          '1. Deutsch, 2. Deutsches',
          '1. deutsch, 2. deutsches',
        ],
        answer: 0,
        explanation: 'I ettan är det språket som substantiv (Deutsch). I tvåan är det ett adjektiv som beskriver bilen (deutsches Auto) och skrivs med liten bokstav.',
        feedback: [
          'Korrekt! Substantivet Deutsch har stor bokstav; adjektivet deutsches har liten.',
          'Helt omvänt.',
          'Adjektiv före substantiv får inte stor bokstav om de inte är en del av ett officiellt egennamn.',
          'I ettan krävs stor bokstav eftersom språket fungerar som substantiv.',
        ],
      },
      {
        id: 'g06-q4',
        context: 'Artigt tilltal med Sie.',
        prompt: 'Hur skiljer man artigt "Ni" från "de" i skrift?',
        options: [
          'Det artiga tilltalet (Sie, Ihnen, Ihr) stavas ALLTID med stor bokstav.',
          'Det artiga tilltalet stavas med kursiv stil.',
          'De stavas helt identiskt med liten bokstav.',
          'Det artiga tilltalet har alltid ett utropstecken efter sig.',
        ],
        answer: 0,
        explanation: 'Det artiga tilltalet Sie/Ihnen/Ihr har alltid stor begynnelsebokstav, vilket skiljer det från sie/ihnen/ihr (hon, de, hennes, deras).',
        feedback: [
          'Helt rätt! Stor bokstav signalerar artighet och respekt.',
          'Kursivering används inte för artighet.',
          'De stavas inte identiskt i skrift.',
          'Inget utropstecken krävs.',
        ],
      },
      {
        id: 'g06-q5',
        context: 'Veckodagar som substantiv kontra tidsadverb.',
        prompt: 'Vilken mening är korrekt stavad?',
        options: [
          'Am Montag fahre ich nach Berlin, denn montags arbeite ich nicht.',
          'Am montag fahre ich nach Berlin, denn Montags arbeite ich nicht.',
          'Am Montag fahre ich nach Berlin, denn Montags arbeite ich nicht.',
          'Am montag fahre ich nach Berlin, denn montags arbeite ich nicht.',
        ],
        answer: 0,
        explanation: '"am Montag" är en prepositionsfras med ett substantiv (stor bokstav). "montags" är ett tidsadverb med ändelsen -s (liten bokstav).',
        feedback: [
          'Briljant! Substantivet Montag är stort, adverbet montags är litet.',
          'Omvänt fel.',
          '"Montags" ska inte ha stor bokstav här eftersom det är ett tidsadverb mitt i meningen.',
          '"am Montag" måste ha stor bokstav.',
        ],
      },
      {
        id: 'g06-q6',
        context: 'Substantiverat verb i vardagligt sammanhang.',
        prompt: 'Vilken mening har korrekt stavning av det substantiverade verbet?',
        options: [
          'Das Essen schmeckt fantastisch.',
          'Das essen schmeckt fantastisch.',
          'Das gessen schmeckt fantastisch.',
          'Der Essen schmeckt fantastisch.',
        ],
        answer: 0,
        explanation: 'Ett substantiverat verb får alltid neutrum (das) och stor begynnelsebokstav: das Essen.',
        feedback: [
          'Helt rätt! "das Essen" är ett substantiverat verb och stavas med stor bokstav.',
          'Det kan inte ha liten bokstav när det har artikel och är subjekt.',
          '"gessen" är felaktigt.',
          'Substantiverade verb är alltid neutrum (das), aldrig der.',
        ],
      },
    ],
  },

  // R01: Ich, du, er, sie, es och Sie
  '/docs/pronomen/personliga-subjekt': {
    lessonId: 'R01',
    href: '/docs/pronomen/personliga-subjekt',
    title: 'Snabbkoll: Personliga pronomen i subjektsform',
    questions: [
      {
        id: 'r01-q1',
        context: 'Pronomenet "ihr" i tilltal.',
        prompt: 'När använder man pronomenet "ihr" på tyska?',
        options: [
          'När man pratar till två eller flera personer som man duar (informellt "ni")',
          'När man tilltalar en äldre främling artigt',
          'När man pratar om en ensam kvinna',
          'När man pratar om sig själv och en kompis',
        ],
        answer: 0,
        explanation: '"ihr" är 2:a person plural för informellt tilltal: när du pratar till vänner, barn eller familj.',
        feedback: [
          'Helt rätt! "ihr" är plural av "du".',
          'Till en äldre främling använder man det artiga "Sie".',
          'Om en ensam kvinna säger man "sie" (hon).',
          'Om sig själv och en kompis säger man "wir" (vi).',
        ],
      },
      {
        id: 'r01-q2',
        context: 'Verbändelse för pronomenet "du".',
        prompt: 'Vilken ändelse får ett svagt verb i presens tillsammans med "du"?',
        options: ['-st (du wohnst)', '-t (du wohnt)', '-e (du wohne)', '-en (du wohnen)'],
        answer: 0,
        explanation: '2:a person singular "du" har alltid ändelsen -st i presens: du wohnst, du kommst.',
        feedback: [
          'Helt rätt! du + -st är en grundsten i tysk grammatik.',
          '-t är för er/sie/es eller ihr.',
          '-e är för ich.',
          '-en är för wir eller sie/Sie.',
        ],
      },
      {
        id: 'r01-q3',
        context: 'Ting ersätts efter sitt grammatiska kön.',
        prompt: 'Du frågar efter bordet: "Wo ist der Tisch?" Hur svarar du naturligt på tyska?',
        options: [
          'Er steht in der Küche.',
          'Es steht in der Küche.',
          'Sie steht in der Küche.',
          'Ihn steht in der Küche.',
        ],
        answer: 0,
        explanation: '"Tisch" är maskulint (der Tisch). När bordet är subjekt ersätts det därför med det maskulina pronomenet "er".',
        feedback: [
          'Helt rätt! Eftersom bordet är maskulint (der) ersätts det med "er" i nominativ.',
          '"es" används bara för neutrala substantiv (das).',
          '"sie" används för feminina substantiv (die).',
          '"ihn" är ackusativform; här är bordet subjekt i nominativ.',
        ],
      },
      {
        id: 'r01-q4',
        context: 'Tredje person singular vs. plural: hon vs. de.',
        prompt: 'Vad betyder meningen "Sie kochen gern" (litet s i början om det stod mitt i en mening)?',
        options: ['De lagar gärna mat (eller: Ni lagar gärna mat)', 'Hon lagar gärna mat', 'Han lagar gärna mat', 'Vi lagar gärna mat'],
        answer: 0,
        explanation: 'Eftersom verbet slutar på -en (kochen) är det plural (de) eller artigt tilltal (Ni). Hade det betytt hon hade verbet slutat på -t: sie kocht.',
        feedback: [
          'Helt rätt! Verbändelsen -en visar att det rör sig om plural eller artigt tilltal.',
          'Om det betydde hon hade verbet varit "kocht" (-t).',
          'Han heter "er".',
          'Vi heter "wir".',
        ],
      },
      {
        id: 'r01-q5',
        context: 'Måste subjektet uttryckas i tyskan?',
        prompt: 'Kan man utelämna pronomenet "ich" i tyskan som man gör i spanskan ("hablo" -> "ich spreche")?',
        options: [
          'Nej, tyskan kräver nästan alltid ett uttryckligt subjekt (ich spreche).',
          'Ja, det är helt valfritt.',
          'Ja, men bara i dåtid.',
          'Bara om man viskar.',
        ],
        answer: 0,
        explanation: 'Tyskan är inte ett pro-drop-språk: subjektet måste alltid skrivas ut: "Ich spreche Deutsch".',
        feedback: [
          'Helt rätt! Subjektet är obligatoriskt i normal tysk meningsbyggnad.',
          'Nej, tyskan är inte som spanskan eller italienskan.',
          'Nej, inte heller i dåtid.',
          'Nej.',
        ],
      },
      {
        id: 'r01-q6',
        context: 'Artigt tilltal i en fråga.',
        prompt: 'Hur frågar du en okänd person på gatan om vägen?',
        options: [
          'Entschuldigen Sie, wo ist der Bahnhof?',
          'Entschuldige du, wo ist der Bahnhof?',
          'Entschuldigt ihr, wo ist der Bahnhof?',
          'Entschuldigen sie, wo ist der Bahnhof?',
        ],
        answer: 0,
        explanation: 'Till en okänd vuxen använder man det artiga "Sie" med versal och verbändelsen -en: "Entschuldigen Sie".',
        feedback: [
          'Helt rätt! "Entschuldigen Sie" är den korrekta artighetsfrasen.',
          'Att dua en vuxen främling på gatan kan uppfattas som oartigt.',
          '"ihr" är för flera personer man känner väl.',
          'Liten bokstav är fel i skrift för det artiga tilltalet.',
        ],
      },
    ],
  },

  // V01: Verbsystemet i överblick
  '/docs/verb/introduktion': {
    lessonId: 'V01',
    href: '/docs/verb/introduktion',
    title: 'Snabbkoll: Verbsystemet i överblick',
    questions: [
      {
        id: 'v01-q1',
        context: 'Verbstam och personändelse.',
        prompt: 'Vad är stammen i verbet "kommen"?',
        options: ['komm-', 'komme-', 'kommene-', 'k-'],
        answer: 0,
        explanation: 'Genom att ta bort infinitivändelsen -en från "kommen" får du stammen "komm-".',
        feedback: [
          'Helt rätt! Stammen är "komm-".',
          '-e är personändelsen för ich.',
          'kommene är fel.',
          'k- är bara första bokstaven.',
        ],
      },
      {
        id: 'v01-q2',
        context: 'Personändelser i presens.',
        prompt: 'Vilken personändelse hör ihop med subjektet "er" för ett svagt verb?',
        options: ['-t (er wohnt)', '-st (er wohnst)', '-e (er wohne)', '-en (er wohnen)'],
        answer: 0,
        explanation: 'Tredje person singular (er/sie/es) slutar på -t i presens: er wohnt, er spielt.',
        feedback: [
          'Helt rätt! er/sie/es slutar på -t.',
          '-st är för du.',
          '-e är för ich.',
          '-en är för wir och sie/Sie.',
        ],
      },
      {
        id: 'v01-q3',
        context: 'Skillnad mellan svaga och starka verb.',
        prompt: 'Vad kännetecknar ett starkt verb i tysk grammatik?',
        options: [
          'Det ändrar stamvokal vid böjning i dåtid (avljud, t.ex. singen - sang - gesungen).',
          'Det slutar alltid på -ieren i infinitiv.',
          'Det kan aldrig ha något subjekt.',
          'Det böjs helt utan ändelser i presens.',
        ],
        answer: 0,
        explanation: 'Starka verb kännetecknas av vokalväxling (avljud) i stammen: singen -> sang -> gesungen.',
        feedback: [
          'Helt rätt! Vokalväxling i stammen är det klassiska kännetecknet för starka verb.',
          '-ieren-verb är nästan alltid svaga (studieren, reparieren).',
          'Alla finita verb har subjekt.',
          'De har personändelser som vanligt.',
        ],
      },
      {
        id: 'v01-q4',
        context: 'Verbets valens och objektstyrning.',
        prompt: 'Vad innebär det att verbet "helfen" är ett dativverb?',
        options: [
          'Att personen som blir hjälpt måste stå i dativ (Ich helfe dem Mann).',
          'Att verbet bara kan användas på eftermiddagen.',
          'Att verbet kräver en växelpreposition.',
          'Att verbet saknar imperativform.',
        ],
        answer: 0,
        explanation: 'Dativverb har valensen att kräva ett dativobjekt: "Ich helfe dem Mann" (inte den Mann).',
        feedback: [
          'Helt rätt! "helfen" styr alltid dativ i tyskan.',
          'Nej, grammatik styrs inte av klockslaget.',
          'Helfen tar inget prepositionstvång här.',
          'Helfen har normal imperativ (Hilf!).',
        ],
      },
      {
        id: 'v01-q5',
        context: 'De tre grundläggande hjälpverben.',
        prompt: 'Vilka är tyskans tre primära hjälpverb?',
        options: ['sein, haben, werden', 'können, müssen, wollen', 'machen, tun, gehen', 'sehen, hören, sprechen'],
        answer: 0,
        explanation: 'sein (vara), haben (ha) och werden (bli/futurum/passiv) är tyskans tre grundläggande hjälpverb.',
        feedback: [
          'Helt rätt! sein, haben och werden används för att bygga sammansatta tempus och passiv.',
          'Detta är modalverb, inte basala hjälpverb.',
          'Detta är vanliga huvudverb.',
          'Detta är sinnesverb.',
        ],
      },
      {
        id: 'v01-q6',
        context: 'Placering av det finita verbet i en tysk huvudsats.',
        prompt: 'På vilken position står det böjda (finita) verbet i en tysk påståendesats?',
        options: ['Alltid på plats 2 (V2-regeln)', 'Alltid allra först', 'Alltid allra sist i meningen', 'Det kan stå var som helst'],
        answer: 0,
        explanation: 'I en tysk huvudsats står det finita verbet strikt på position 2, även om man inleder meningen med ett tidsuttryck.',
        feedback: [
          'Helt rätt! V2-regeln är fundamental i tysk satslära.',
          'Verbet står först endast i ja/nej-frågor och uppmaningar.',
          'Sist står det i bisatser, inte i enkla påståendesatser.',
          'Ordföljden i tyska är strikt och reglerad.',
        ],
      },
    ],
  },

  // V02: Presens och svaga verb
  '/docs/verb/presens': {
    lessonId: 'V02',
    href: '/docs/verb/presens',
    title: 'Snabbkoll: Presens och svaga verb',
    questions: [
      {
        id: 'v02-q1',
        context: 'Verb med stam på -t eller -d (bindevokal).',
        prompt: 'Hur böjs verbet "arbeiten" i 2:a person singular (du)?',
        options: ['du arbeitest', 'du arbeitst', 'du arbeite', 'du arbeit'],
        answer: 0,
        explanation: 'Eftersom stammen arbeit- slutar på -t skjuts ett -e- in för att underlätta uttalet: du arbeitest.',
        feedback: [
          'Helt rätt! Bindevokalen -e- skjuts in: du arbeitest.',
          '"arbeitst" är för svårt att uttala och saknar bindevokal.',
          '"arbeite" är ich-formen.',
          '"arbeit" är bara stammen.',
        ],
      },
      {
        id: 'v02-q2',
        context: 'Verb med stam på s-ljud (heißen, tanzen).',
        prompt: 'Hur böjs verbet "heißen" i 2:a person singular (du)?',
        options: ['du heißt', 'du heißst', 'du heißest', 'du heiße'],
        answer: 0,
        explanation: 'När stammen slutar på ett s-ljud (ß, s, z) slås s-ljuden ihop och du-formen får endast ändelsen -t: du heißt.',
        feedback: [
          'Helt rätt! du heißt får bara ändelsen -t.',
          'Dubbelt s-ljud skrivs aldrig som heißst.',
          'Inget extra e skjuts in i heißest i modern standardtyska.',
          'heiße är ich-formen.',
        ],
      },
      {
        id: 'v02-q3',
        context: 'Presens för framtida handlingar.',
        prompt: 'Hur säger man naturligt: "Imorgon flyger jag till Berlin"?',
        options: [
          'Morgen fliege ich nach Berlin.',
          'Morgen ich will fliegen nach Berlin.',
          'Morgen fliege nach Berlin ich.',
          'Morgen ich fliege nach Berlin.',
        ],
        answer: 0,
        explanation: 'I tyskan används presens med tidsadverb för framtid, och verbet måste stå på plats 2 (inversion: fliege ich).',
        feedback: [
          'Helt rätt! Presens + V2 är den naturliga vardagstyskan.',
          'Konstlat och felaktig ordföljd.',
          'Subjektet måste stå direkt intill verbet på plats 3.',
          'Engelsk ordföljd! Verbet måste stå på plats 2 (fliege ich, inte ich fliege efter Morgen).',
        ],
      },
      {
        id: 'v02-q4',
        context: '1:a person plural (wir).',
        prompt: 'Vilken form har verbet i: "Wir ___ (wohnen) in München"?',
        options: ['wohnen', 'wohnt', 'wohne', 'wohnst'],
        answer: 0,
        explanation: 'Subjektet "wir" har alltid ändelsen -en: wir wohnen.',
        feedback: [
          'Helt rätt! wir wohnen.',
          'wohnt är för er/sie/es eller ihr.',
          'wohne är för ich.',
          'wohnst är för du.',
        ],
      },
      {
        id: 'v02-q5',
        context: '2:a person plural informellt (ihr).',
        prompt: 'Vilken form har verbet i: "Kinder, was ___ (machen) ihr da?"',
        options: ['macht', 'machen', 'machst', 'mache'],
        answer: 0,
        explanation: 'ihr har alltid ändelsen -t i presens: ihr macht.',
        feedback: [
          'Helt rätt! ihr macht.',
          'machen är för wir eller sie/Sie.',
          'machst är för du.',
          'mache är för ich.',
        ],
      },
      {
        id: 'v02-q6',
        context: 'Ingen pågående form i tyskan.',
        prompt: 'Hur översätter man engelskans "I am reading a book right now"?',
        options: [
          'Ich lese gerade ein Buch.',
          'Ich bin lesend ein Buch.',
          'Ich habe lesen ein Buch.',
          'Ich tue lesen ein Buch.',
        ],
        answer: 0,
        explanation: 'Tyskan har ingen pågående form (ing-form). Man använder vanlig presens, ofta förstärkt med ordet "gerade" (just nu): Ich lese gerade.',
        feedback: [
          'Helt rätt! Vanlig presens + gerade ersätter ing-form.',
          'Konstruktionen bin lesend existerar inte i modern tyska.',
          'Detta är fel tempus.',
          'tue lesen är barnslig dialektal slang och inte standardspråk.',
        ],
      },
    ],
  },

  // V04: Sein, haben och werden
  '/docs/verb/sein-haben-werden': {
    lessonId: 'V04',
    href: '/docs/verb/sein-haben-werden',
    title: 'Snabbkoll: Sein, haben och werden',
    questions: [
      {
        id: 'v04-q1',
        context: 'Böjning av verbet "sein" i 2:a person plural (ihr).',
        prompt: 'Vilken är rätt form av sein för ihr: "Wo ___ ihr gestern gewesen?"',
        options: ['seid', 'seit', 'sind', 'bist'],
        answer: 0,
        explanation: 'Böjningen av sein för ihr är "seid" (med d). "seit" (med t) är en preposition som betyder sedan.',
        feedback: [
          'Helt rätt! "ihr seid". Akta stavningen med -d!',
          '"seit" med -t är prepositionen (sedan/i), inte verbet!',
          'sind är för wir och sie/Sie.',
          'bist är för du.',
        ],
      },
      {
        id: 'v04-q2',
        context: 'Skillnad mellan werden och bekommen.',
        prompt: 'Vad betyder den tyska meningen: "Ich bekomme morgen ein Paket"?',
        options: [
          'Jag får ett paket imorgon.',
          'Jag blir ett paket imorgon.',
          'Jag skickar ett paket imorgon.',
          'Jag beställer ett paket imorgon.',
        ],
        answer: 0,
        explanation: '"bekommen" betyder ATT FÅ på tyska. "bli" heter "werden".',
        feedback: [
          'Helt rätt! bekommen = att få. Bli = werden.',
          'Klassisk falsk vän från engelskans become! Att bli heter werden.',
          'Att skicka heter schicken.',
          'Att beställa heter bestellen.',
        ],
      },
      {
        id: 'v04-q3',
        context: 'Böjning av "werden" i 2:a person singular (du).',
        prompt: 'Välj rätt form: "Du ___ (werden) sicher ein guter Arzt."',
        options: ['wirst', 'werdest', 'wird', 'werdst'],
        answer: 0,
        explanation: 'du-formen av werden är oregelbunden med vokalväxling e -> i: du wirst.',
        feedback: [
          'Helt rätt! du wirst.',
          'werdest är konjunktivform.',
          'wird är för er/sie/es.',
          'werdst är felaktigt.',
        ],
      },
      {
        id: 'v04-q4',
        context: 'Subjektsmärke efter verbet "sein".',
        prompt: 'Vilket kasus står "ein guter Freund" i: "Er ist ein guter Freund"?',
        options: ['Nominativ', 'Ackusativ', 'Dativ', 'Genitiv'],
        answer: 0,
        explanation: 'Verbet sein tar predikativ i nominativ (inte ackusativobjekt), eftersom det beskriver vem subjektet är.',
        feedback: [
          'Helt rätt! sein kräver nominativ för predikatet.',
          'Fälla! Tro inte att alla ord efter verb är ackusativ.',
          'sein styr aldrig dativ här.',
          'Ingen ägandeform.',
        ],
      },
      {
        id: 'v04-q5',
        context: 'Böjning av "haben" i 3:e person singular.',
        prompt: 'Välj rätt form: "Er ___ (haben) einen schnellen Wagen."',
        options: ['hat', 'habt', 'habet', 'hatte'],
        answer: 0,
        explanation: '3:e person singular er/sie/es av haben tappar b-ljudet och heter "hat".',
        feedback: [
          'Helt rätt! er/sie/es hat.',
          'habt är för ihr.',
          'habet är föråldrat.',
          'hatte är preteritum (dåtid).',
        ],
      },
      {
        id: 'v04-q6',
        context: 'Idiotiska uttryck med haben på tyska.',
        prompt: 'Hur säger man "Jag är hungrig och törstig" på naturlig tyska?',
        options: [
          'Ich habe Hunger und Durst.',
          'Ich bin hungrig und durstig.',
          'Ich werde Hunger und Durst.',
          'Ich mache Hunger.',
        ],
        answer: 0,
        explanation: 'I vardaglig tyska använder man verbet haben för fysiska grundbehov: Ich habe Hunger / Durst / Angst.',
        feedback: [
          'Helt rätt! "Ich habe Hunger und Durst" är den mest naturliga tyskan.',
          'Möjligt grammatiskt men mindre naturligt i talspråk än med haben.',
          'werden anger en pågående övergång, inte tillståndet.',
          'mache är helt felaktigt.',
        ],
      },
    ],
  },

  // Y01: Verb på andra plats och förfält
  '/docs/syntax/verb-pa-andra-plats': {
    lessonId: 'Y01',
    href: '/docs/syntax/verb-pa-andra-plats',
    title: 'Snabbkoll: Verb på andra plats',
    questions: [
      {
        id: 'y01-q1',
        context: 'V2-regeln och förfältet.',
        prompt: 'På vilken position står det böjda verbet i en tysk påståendesats?',
        options: ['Position 2 (efter exakt ett satsled i förfältet)', 'Alltid position 1', 'Alltid sist i huvudsatsen', 'Position 3'],
        answer: 0,
        explanation: 'I en tysk påståendesats står det finita verbet strikt på position 2.',
        feedback: [
          'Helt rätt! Verbet är meningsbyggnadens ankare på position 2.',
          'Position 1 gäller för ja/nej-frågor och uppmaningar.',
          'Sist står verbet i bisatser.',
          'Position 3 är inte standard för finita verb.',
        ],
      },
      {
        id: 'y01-q2',
        context: 'Inversion vid tidsadverbial först i satsen.',
        prompt: 'Vilken mening har korrekt tysk ordföljd?',
        options: [
          'Heute Abend gehe ich ins Theater.',
          'Heute Abend ich gehe ins Theater.',
          'Heute gehe Abend ich ins Theater.',
          'Ins Theater heute Abend gehe ich nicht.',
        ],
        answer: 0,
        explanation: '"Heute Abend" utgör ett sammanhållet tidsled på position 1. Verbet "gehe" står på position 2, följt av subjektet "ich".',
        feedback: [
          'Helt rätt! Inversion: förfält + verb på plats 2 + subjekt på plats 3.',
          'Engelsk ordföljd! På tyska får subjektet inte stå mellan adverbialet och verbet.',
          'Satsledet Heute Abend har splittrats felaktigt.',
          'Denna ordföljd är onaturlig.',
        ],
      },
      {
        id: 'y01-q3',
        context: 'Ett satsled kan bestå av flera ord.',
        prompt: 'Hur många satsled utgör frasen: "Wegen des starken Regens" i: "Wegen des starken Regens bleiben wir hier"?',
        options: [
          'Ett enda satsled (ett orsaksadverbial som fyller förfältet)',
          'Fyra separata satsled',
          'Två satsled',
          'Det räknas som en bisats',
        ],
        answer: 0,
        explanation: 'Hela prepositionsfrasen svarar på frågan "Varför?" och utgör därför ett enda samlat satsled på position 1.',
        feedback: [
          'Helt rätt! Ett satsled kan rymma många ord men räknas som EN position.',
          'Det är inte fyra satsled bara för att det är fyra ord.',
          'Nej, det är ett sammanhållet led.',
          'Det saknar böjt verb och är ingen bisats.',
        ],
      },
      {
        id: 'y01-q4',
        context: 'Betoning genom ackusativobjekt i förfältet.',
        prompt: 'Vilken roll har "Diesen Film" i meningen: "Diesen Film habe ich schon gesehen"?',
        options: [
          'Ackusativobjekt placerat i förfältet för betoning',
          'Subjekt i meningen',
          'Tidsadverbial',
          'Predikativ',
        ],
        answer: 0,
        explanation: '"Diesen Film" står i ackusativ och är filmens roll som objekt. Subjektet är "ich". Objektet står först för att betonas.',
        feedback: [
          'Helt rätt! I tyskan kan vilket led som helst stå först för att betonas.',
          'Subjektet är "ich" (den som har sett filmen).',
          'Filmen är inget tidsuttryck.',
          'Det är ett objekt.',
        ],
      },
      {
        id: 'y01-q5',
        context: 'Undvik engelskt mönster.',
        prompt: 'Vilken mening är FELAKTIG på tyska?',
        options: [
          'Morgen mein Vater kommt nach Hause.',
          'Morgen kommt mein Vater nach Hause.',
          'Mein Vater kommt morgen nach Hause.',
          'Nach Hause kommt mein Vater morgen.',
        ],
        answer: 0,
        explanation: '"Morgen mein Vater kommt" bryter mot V2-regeln genom att placera både tidsled och subjekt före verbet (engelsk ordföljd).',
        feedback: [
          'Rätt identifierat! Denna mening bryter mot V2 och är felaktig.',
          'Korrekt tysk ordföljd med inversion.',
          'Korrekt rak ordföljd med subjektet först.',
          'Korrekt ordföljd med riktningsadverbial först.',
        ],
      },
      {
        id: 'y01-q6',
        context: 'Satsram i huvudsats med två verb.',
        prompt: 'Var hamnar infinitiven när man använder ett modalverb i huvudsats: "Er will ein Auto ___"?',
        options: ['Längst bak i satsen (kaufen)', 'Direkt efter modalverbet (will kaufen ein Auto)', 'Före subjektet', 'Mitt i satsen'],
        answer: 0,
        explanation: 'Det finita verbet (will) står på position 2, medan den oböjda infinitiven (kaufen) ramar in satsen och står allra sist.',
        feedback: [
          'Helt rätt! Detta bildar tyskans berömda satsram (Satzklammer).',
          'Att sätta verben bredvid varandra är engelskt mönster.',
          'Infinitiven står sist.',
          'Den ska stå absolut sist i huvudsatsen.',
        ],
      },
    ],
  },

  // Y03: Ja/nej-frågor och frågeordsfrågor
  '/docs/syntax/fragor': {
    lessonId: 'Y03',
    href: '/docs/syntax/fragor',
    title: 'Snabbkoll: Frågor och frågeord',
    questions: [
      {
        id: 'y03-q1',
        context: 'Ja/nej-fråga (V1-ordföljd).',
        prompt: 'Hur bildas en ja/nej-fråga av påståendet: "Du trinkst gern Kaffee"?',
        options: [
          'Trinkst du gern Kaffee?',
          'Tust du trinkst gern Kaffee?',
          'Du trinkst gern Kaffee?',
          'Gern trinkst du Kaffee?',
        ],
        answer: 0,
        explanation: 'I en ja/nej-fråga flyttas det böjda verbet till position 1: "Trinkst du gern Kaffee?".',
        feedback: [
          'Helt rätt! Verbet på plats 1 inleder frågan.',
          'Tyskan använder inte do/does/tun som hjälpor i normala frågor.',
          'Bara intonation utan verbflytt är inte standardsyntax.',
          'Detta är ett påstående med betoning på gern.',
        ],
      },
      {
        id: 'y03-q2',
        context: 'Frågeorden Wo, Wohin och Woher.',
        prompt: 'Vilket frågeord använder du när du frågar efter målet för en resa: "___ fährst du in den Ferien?"',
        options: ['Wohin (Vart?)', 'Wo (Var?)', 'Woher (Varifrån?)', 'Wann (När?)'],
        answer: 0,
        explanation: '"Wohin" frågar efter mål och riktning (Vart?). "Wo" frågar efter befintlighet på en plats.',
        feedback: [
          'Helt rätt! Wohin anger riktning mot ett mål.',
          'Wo används för befintlighet: "Wo bist du?".',
          'Woher används för ursprung: "Woher kommst du?".',
          'Wann frågar efter tid.',
        ],
      },
      {
        id: 'y03-q3',
        context: 'Frågeord i ackusativ (Wen).',
        prompt: 'Välj rätt frågeord: "___ siehst du da drüben?" (Objektet blir sett)',
        options: ['Wen', 'Wer', 'Wem', 'Wessen'],
        answer: 0,
        explanation: 'Eftersom personen som blir sedd är ett ackusativobjekt används frågeordet "Wen?" (Vem ser du?).',
        feedback: [
          'Helt rätt! Wen är ackusativformen av frågeordet wer.',
          'Wer är nominativ (subjektsform).',
          'Wem är dativform.',
          'Wessen är genitivform.',
        ],
      },
      {
        id: 'y03-q4',
        context: 'Frågeord i dativ (Wem).',
        prompt: 'Välj rätt frågeord: "___ gehört diese Tasche?" (gehören styr dativ)',
        options: ['Wem', 'Wen', 'Wer', 'Was'],
        answer: 0,
        explanation: 'Verbet gehören styr alltid dativ: "Wem gehört...?" (Åt vem tillhör...?).',
        feedback: [
          'Helt rätt! gehören kräver wem i dativ.',
          'Wen är ackusativ.',
          'Wer är nominativ.',
          'Was är för ting.',
        ],
      },
      {
        id: 'y03-q5',
        context: 'Hela frågefrasen i förfältet.',
        prompt: 'I frågan: "Um wie viel Uhr beginnt der Film?" — var står det böjda verbet?',
        options: [
          'På position 2, direkt efter den samlade frågefrasen "Um wie viel Uhr"',
          'På position 5',
          'På position 1',
          'Allra sist',
        ],
        answer: 0,
        explanation: 'Hela uttrycket "Um wie viel Uhr" bildar förfältet på position 1, och det böjda verbet "beginnt" står på position 2.',
        feedback: [
          'Helt rätt! Frågefrasen fyller hela position 1 och verbet kommer direkt därefter på position 2.',
          'Grammatiskt är det position 2 trots flera ord i frågefrasen.',
          'Um står först, inte verbet.',
          'Verbet står inte sist i en W-fråga.',
        ],
      },
      {
        id: 'y03-q6',
        context: 'Artig förfrågan med modalverb.',
        prompt: 'Hur ber du artigt receptionisten om hjälp?',
        options: [
          'Können Sie mir bitte helfen?',
          'Helfen Sie mich bitte?',
          'Können du mir helfen?',
          'Können Sie mir geholfen?',
        ],
        answer: 0,
        explanation: 'Modalverbet "Können" inleder på position 1, åtföljt av artigt "Sie", dativobjekt "mir" och infinitiven "helfen" sist.',
        feedback: [
          'Perfekt och artigt tysktalande!',
          'helfen styr dativ (mir, inte mich).',
          'Können matchar inte du (du kan).',
          'Infinitiv helfen krävs efter modalverb, inte supinum.',
        ],
      },
    ],
  },

  // S01: Substantivens genus
  '/docs/substantiv/genus': {
    lessonId: 'S01',
    href: '/docs/substantiv/genus',
    title: 'Snabbkoll: Substantivens genus',
    questions: [
      {
        id: 's01-q1',
        context: 'Säkra femininändelser.',
        prompt: 'Vilket genus har ALLA substantiv som slutar på "-ung", "-heit", "-keit" och "-schaft"?',
        options: ['Femininum (die)', 'Maskulinum (der)', 'Neutrum (das)', 'Det beror på ordets betydelse'],
        answer: 0,
        explanation: 'Ord med suffixen -ung, -heit, -keit och -schaft är till 100 % feminina i tyskan: die Zeitung, die Freiheit, etc.',
        feedback: [
          'Helt rätt! Dessa suffix ger undantagslöst femininum.',
          'Nej, de är aldrig maskulina.',
          'Nej, de är inte neutrum.',
          'Ändelsen avgör helt och hållet, oavsett betydelse.',
        ],
      },
      {
        id: 's01-q2',
        context: 'Diminutivändelsen -chen och biologiskt kön.',
        prompt: 'Varför heter det "das Mädchen" (neutrum) trots att ordet syftar på en flicka?',
        options: [
          'Eftersom ändelsen -chen är ett diminutiv som ALLTID gör ordet neutralt.',
          'Eftersom barn är neutrala i fornhögtyska.',
          'Det är bara ett slumpmässigt undantag.',
          'Det stavas med ä.',
        ],
        answer: 0,
        explanation: 'I tysk grammatik vinner suffixets regel alltid över biologin: alla ord som slutar på förminskningsändelserna -chen och -lein är grammatiskt neutrum.',
        feedback: [
          'Helt rätt! Ändelsen -chen ger alltid neutrum: das Mädchen, das Brötchen.',
          'Det beror uteslutande på ändelsen -chen.',
          'Det är ingen slump utan en helt konsekvent regel.',
          'Omljud påverkar inte genus i sig.',
        ],
      },
      {
        id: 's01-q3',
        context: 'Tidsuttryck, årstider och veckodagar.',
        prompt: 'Vilken artikel har veckodagar, månader och årstider (Montag, Juli, Sommer)?',
        options: ['der (maskulinum)', 'die (femininum)', 'das (neutrum)', 'de (plural)'],
        answer: 0,
        explanation: 'Alla veckodagar, månader och årstider är maskulina i tyskan: der Montag, der Juli, der Sommer.',
        feedback: [
          'Helt rätt! Tidsindelningar som dagar, månader och årstider är alltid maskulina.',
          'De är inte feminina.',
          'De är inte neutrala.',
          'Det är maskulin singular.',
        ],
      },
      {
        id: 's01-q4',
        context: 'Säkra maskulinändelser.',
        prompt: 'Vilket genus har ord som slutar på "-ismus" och "-or" (t.ex. Tourismus, Motor)?',
        options: ['der (maskulinum)', 'die (femininum)', 'das (neutrum)', 'Inget genus'],
        answer: 0,
        explanation: '-ismus och -or ger maskulint genus: der Tourismus, der Motor, der Professor.',
        feedback: [
          'Helt rätt! Båda dessa suffix signalerar maskulinum.',
          'De är inte feminina.',
          'De är inte neutrala.',
          'Alla tyska substantiv har ett genus.',
        ],
      },
      {
        id: 's01-q5',
        context: 'Substantiverade verb.',
        prompt: 'Vilket genus får ett verb när det förvandlas till substantiv: "___ Essen schmeckt gut"?',
        options: ['das (neutrum)', 'der (maskulinum)', 'die (femininum)', 'den (ackusativ)'],
        answer: 0,
        explanation: 'Substantiverade infinitiver är alltid neutrala: das Essen, das Leben, das Schwimmen.',
        feedback: [
          'Helt rätt! Substantiverade infinitiver är alltid neutrum (das).',
          'Aldrig maskulinum.',
          'Aldrig femininum.',
          'Här behövs nominativ neutrum, inte ackusativ.',
        ],
      },
      {
        id: 's01-q6',
        context: 'Hur man effektivt lär in nya substantiv.',
        prompt: 'Vilket är det bästa sättet att memorera ett nytt tyskt substantiv som "Buch"?',
        options: [
          'Lär alltid in ordet som en treenighet: "das Buch, die Bücher, bok"',
          'Lär dig bara ordet "Buch" och gissa artikeln efteråt',
          'Antag att alla saker är "das"',
          'Översätt från svenskans en/ett',
        ],
        answer: 0,
        explanation: 'Genom att alltid memorera artikel och plural samtidigt (das Buch, die Bücher) sparar du hundratals timmar av gissningar.',
        feedback: [
          'Gyllene regel! Lär alltid artikel + ord + plural samtidigt.',
          'Att gissa skapar ständiga fel i kasus och adjektivböjning.',
          'Många konkreta saker är der (der Tisch) eller die (die Tür).',
          'Svenskt genus (en/ett) matchar inte tyskt genus pålitligt.',
        ],
      },
    ],
  },

  // S02: Plural och numerus
  '/docs/substantiv/plural': {
    lessonId: 'S02',
    href: '/docs/substantiv/plural',
    title: 'Snabbkoll: Plural och numerus',
    questions: [
      {
        id: 's02-q1',
        context: 'Bestämd artikel i nominativ plural.',
        prompt: 'Vilken är den bestämda artikeln i nominativ plural för maskulina, feminina och neutrala substantiv?',
        options: [
          'ALLTID "die" oavsett ordets grundgenus',
          '"der" för maskulinum, "die" för femininum, "das" för neutrum',
          '"den" för alla substantiv',
          '"des" för alla substantiv',
        ],
        answer: 0,
        explanation: 'I nominativ plural har samtliga substantiv artikeln "die": die Hunde, die Frauen, die Kinder.',
        feedback: [
          'Helt rätt! Pluralartikeln är universell: alltid "die" i nominativ.',
          'Grundgenuset der/die/das slås samman till die i plural.',
          '"den" är dativform i plural.',
          '"des" är genitiv singular.',
        ],
      },
      {
        id: 's02-q2',
        context: 'Pluralbildning för feminina substantiv.',
        prompt: 'Vilken är den i särklass vanligaste pluraländelsen för feminina substantiv?',
        options: ['-(e)n (die Frau -> die Frauen, die Zeitung -> die Zeitungen)', '-s (die Autos)', '-er med omljud', 'Nollplural utan ändelse'],
        answer: 0,
        explanation: 'Över 90 % av feminina substantiv bildar plural med -(e)n, och de får aldrig omljud.',
        feedback: [
          'Helt rätt! -(e)n är femininernas dominerande pluralmönster.',
          '-s är främst för lånord.',
          '-er med omljud är typiskt för enstaviga neutrer (Bücher, Kinder).',
          'Nollplural är sällsynt för feminina ord.',
        ],
      },
      {
        id: 's02-q3',
        context: 'Substantiv som slutar på -el, -en, -er.',
        prompt: 'Hur bildar ord som "der Lehrer" och "der Koffer" plural?',
        options: [
          'Nollplural (ingen ändelse läggs till: die Lehrer, die Koffer)',
          'De får -en (die Lehreren)',
          'De får alltid -s (die Lehrers)',
          'De byter ändelse till -a',
        ],
        answer: 0,
        explanation: 'Maskuliner och neutrer på -el, -en, -er har oftast nollplural (ingen ändelse): der Lehrer -> die Lehrer.',
        feedback: [
          'Helt rätt! De behåller samma form i plural, med artikeln die framför.',
          'De får inte -en.',
          '-s används inte för tyska yrkesbeteckningar på -er.',
          'Inte -a.',
        ],
      },
      {
        id: 's02-q4',
        context: 'Pluralbildning med omljud.',
        prompt: 'Vad är pluralformen av "das Buch" och "der Apfel"?',
        options: [
          'die Bücher och die Äpfel',
          'die Buche och die Apfeln',
          'die Buchs och die Apfels',
          'die Buchen och die Apfel',
        ],
        answer: 0,
        explanation: 'das Buch får -er och omljud (die Bücher); der Apfel får nollplural med omljud (die Äpfel).',
        feedback: [
          'Helt rätt! Omljud är en central signal för plural i tyskan.',
          'Felaktiga former.',
          '-s är inte standard här.',
          'Felaktigt.',
        ],
      },
      {
        id: 's02-q5',
        context: 'Pluraliatantum (ord som endast finns i plural).',
        prompt: 'Vilket av följande ord existerar normalt endast i plural i tyskan?',
        options: ['die Eltern (föräldrar)', 'die Mutter (mor)', 'das Kind (barn)', 'der Vater (far)'],
        answer: 0,
        explanation: '"die Eltern" är ett pluraliatantum och har ingen singularform. Vill man specificera säger man "ein Elternteil".',
        feedback: [
          'Helt rätt! "die Eltern" förekommer bara i plural.',
          'Mutter har singular.',
          'Kind har singular.',
          'Vater har singular.',
        ],
      },
      {
        id: 's02-q6',
        context: 'Pluraländelsen -s i tyskan.',
        prompt: 'Vilka ord bildar typiskt plural med ändelsen "-s" i tyskan?',
        options: [
          'Lånord, ord som slutar på full vokal och förkortningar (das Auto, das Hotel, der LKW)',
          'Alla feminina ord',
          'Alla starka verb',
          'Ord på -ung',
        ],
        answer: 0,
        explanation: '-s används i tyskan framför allt för utländska lånord och ord som slutar på andra vokaler än -e: Autos, Hotels, Cafés, Sofas.',
        feedback: [
          'Helt rätt! Lånord och vokalslutande ord får -s.',
          'Feminina ord får oftast -(e)n.',
          'Verb bildar inte substantivplural.',
          'Ord på -ung får alltid -en (Zeitungen).',
        ],
      },
    ],
  },

  // K01: Vad är kasus?
  '/docs/kasus/oversikt': {
    lessonId: 'K01',
    href: '/docs/kasus/oversikt',
    title: 'Snabbkoll: Vad är kasus?',
    questions: [
      {
        id: 'k01-q1',
        context: 'De fyra kasusens huvudfunktioner.',
        prompt: 'Vilket kasus motsvarar subjektet — den som utför handlingen i satsen?',
        options: ['Nominativ (svarar på Wer?)', 'Ackusativ (svarar på Wen?)', 'Dativ (svarar på Wem?)', 'Genitiv (svarar på Wessen?)'],
        answer: 0,
        explanation: 'Nominativ är subjektets kasus och svarar på kontrollfrågan "Wer?" (Vem?).',
        feedback: [
          'Helt rätt! Subjektet står alltid i nominativ.',
          'Ackusativ är för direkta objekt.',
          'Dativ är för mottagare och indirekta objekt.',
          'Genitiv är för ägande.',
        ],
      },
      {
        id: 'k01-q2',
        context: 'Maskulinum är den enda artikeln som ändras i ackusativ.',
        prompt: 'Hur ändras artikeln "der", "die" och "das" när de står i ackusativ?',
        options: [
          'Endast "der" ändras till "den"; "die" och "das" förblir oförändrade.',
          'Alla tre ändras till den.',
          '"der" blir dem, "die" blir der, "das" blir des.',
          'Ingen artikel ändras i ackusativ.',
        ],
        answer: 0,
        explanation: 'I ackusativ är det endast maskulinum som ändrar sin artikel: der -> den. Femininum (die) och neutrum (das) är identiska med nominativ.',
        feedback: [
          'Helt rätt! Kom ihåg: maskulinum är den enda som rör på sig i ackusativ!',
          'die och das ändras inte till den.',
          'Detta är dativ- och genitivformer.',
          'der ändras faktiskt till den.',
        ],
      },
      {
        id: 'k01-q3',
        context: 'Ordföljd och kasus.',
        prompt: 'Vem biter vem i meningen: "Den Hund beißt der Mann"?',
        options: [
          'Mannen biter hunden! (Eftersom "der Mann" är i nominativ och "Den Hund" är i ackusativ)',
          'Hunden biter mannen (eftersom hunden står först)',
          'De biter varandra samtidigt',
          'Meningen är grammatiskt omöjlig på tyska',
        ],
        answer: 0,
        explanation: 'I tyskan avslöjar kasus vem som utför handlingen, oavsett ordens placering! "der Mann" har nominativ (subjekt) och gör handlingen.',
        feedback: [
          'Briljant analys! Kasus avgör betydelsen, inte vilken ordning orden står i!',
          'Fälla! Låt dig inte luras av svensk ordföljd — Den Hund är i ackusativ och blir biten.',
          'Nej.',
          'Meningen är fullt grammatisk och används för att betona hunden.',
        ],
      },
      {
        id: 'k01-q4',
        context: 'Dativ som mottagare.',
        prompt: 'Vilket kasus har "der Mutter" i: "Das Kind gibt der Mutter eine Blume"?',
        options: ['Dativ (feminin artikel die blir der i dativ)', 'Nominativ', 'Ackusativ', 'Genitiv'],
        answer: 0,
        explanation: 'Mamman är mottagaren av blomman och står i dativ. Den feminina artikeln "die" blir "der" i dativ.',
        feedback: [
          'Helt rätt! "der Mutter" är dativobjekt (mottagare).',
          'Nominativ för femininum är "die".',
          'Ackusativ för femininum är också "die".',
          'Här är det ett dativobjekt till verbet geben, inte ägande.',
        ],
      },
      {
        id: 'k01-q5',
        context: 'Dativändelse i plural.',
        prompt: 'Vad händer med ett substantiv i dativ plural (om det inte redan slutar på -n eller -s)?',
        options: [
          'Det får en extra ändelse "-n" (t.ex. mit den Hunden, bei den Kindern)',
          'Det får ett extra -e',
          'Det ändras inte alls',
          'Det tappar sista bokstaven',
        ],
        answer: 0,
        explanation: 'I dativ plural får substantivet nästan alltid ändelsen -n: den Hunden, den Kindern, den Tischen.',
        feedback: [
          'Helt rätt! Dativ plural kräver ett extra -n på substantivet om det inte redan har det.',
          'Inte -e.',
          'Substantivet ändras faktiskt med ett -n.',
          'Det tappar ingenting.',
        ],
      },
      {
        id: 'k01-q6',
        context: 'Prepositioner styr kasus.',
        prompt: 'Vilken faktor har högst prioritet när det gäller att avgöra kasus i en fras som "mit dem Bus"?',
        options: [
          'Prepositionen "mit" styr ovillkorligen dativ.',
          'Verbets subjekt avgör.',
          'Bussens färg avgör.',
          'Bussens hastighet avgör.',
        ],
        answer: 0,
        explanation: 'En preposition styr alltid kasus för sin efterföljande fras och övertrumfar allt annat i satsen.',
        feedback: [
          'Helt rätt! Prepositionen dikterar kasus för sitt led.',
          'Subjektet påverkar inte prepositionens styrning.',
          'Skämtalternativ.',
          'Skämtalternativ.',
        ],
      },
    ],
  },

  // S04: Ein, kein och nollartikel
  '/docs/substantiv/obestamd-artikel-och-nollartikel': {
    lessonId: 'S04',
    href: '/docs/substantiv/obestamd-artikel-och-nollartikel',
    title: 'Snabbkoll: Ein, kein och nollartikel',
    questions: [
      {
        id: 's04-q1',
        context: 'Ackusativ maskulinum av "ein".',
        prompt: 'Hur heter "jag har en bror" på korrekt tyska (der Bruder)?',
        options: ['Ich habe einen Bruder.', 'Ich habe ein Bruder.', 'Ich habe einem Bruder.', 'Ich habe eine Bruder.'],
        answer: 0,
        explanation: 'Verbet haben styr ackusativ. Maskulinum får ändelsen -en: einen Bruder.',
        feedback: [
          'Helt rätt! maskulin ackusativ: einen Bruder.',
          '"ein" är nominativ eller neutral ackusativ, men Bruder är maskulint.',
          '"einem" är dativ.',
          '"eine" är femininum.',
        ],
      },
      {
        id: 's04-q2',
        context: 'Plural av obestämd artikel.',
        prompt: 'Vad är pluralformen av "ein Buch" (ett obestämt antal böcker)?',
        options: ['Bücher (nollartikel i obestämd form plural)', 'eine Bücher', 'einen Bücher', 'eines Bücher'],
        answer: 0,
        explanation: '"ein" saknar pluralform. I plural används nollartikel (Bücher) om det är obestämt.',
        feedback: [
          'Helt rätt! Precis som i svenskan (en bok -> böcker) används ingen artikel.',
          '"eine Bücher" är en allvarlig grammatisk felkonstruktion.',
          'einen Bücher är fel.',
          'eines är genitiv singular.',
        ],
      },
      {
        id: 's04-q3',
        context: 'Negering med kein istället för nicht.',
        prompt: 'Hur säger man: "Jag har inga pengar / inte några pengar" (das Geld)?',
        options: ['Ich habe kein Geld.', 'Ich habe nicht Geld.', 'Ich habe keine Geld.', 'Ich habe keinen Geld.'],
        answer: 0,
        explanation: 'För att negera ett substantiv med obestämd/nollartikel används "kein". Geld är neutrum ackusativ: kein Geld.',
        feedback: [
          'Helt rätt! kein Geld är det naturliga och korrekta sättet.',
          '"nicht Geld" är onaturlig ord-för-ord-översättning från svenskan.',
          'keine är för femininum eller plural; Geld är neutrum (das Geld).',
          'keinen är för maskulin ackusativ.',
        ],
      },
      {
        id: 's04-q4',
        context: 'Nollartikel vid yrken.',
        prompt: 'Hur säger man på korrekt tyska: "Hon är läkare"?',
        options: ['Sie ist Ärztin.', 'Sie ist eine Ärztin.', 'Sie ist die Ärztin.', 'Sie ist ein Arzt.'],
        answer: 0,
        explanation: 'Efter sein och werden används strikt nollartikel vid yrken och nationaliteter: Sie ist Ärztin.',
        feedback: [
          'Helt rätt! Tyskan använder inte obestämd artikel vid yrkestitlar här.',
          '"eine Ärztin" används endast om det följs av en beskrivning som "en fantastisk läkare".',
          'Bestämd artikel syftar på en specifik tidigare känd läkare.',
          'Hon är kvinna och ordet ska vara feminint (Ärztin).',
        ],
      },
      {
        id: 's04-q5',
        context: 'Dativ neutrum av "ein".',
        prompt: 'Välj rätt form: "Er wohnt in ___ (ein) kleinen Haus (das Haus)."',
        options: ['einem', 'einen', 'einer', 'ein'],
        answer: 0,
        explanation: 'Befintlighet efter "in" styr dativ. Neutrum i dativ heter "einem Haus".',
        feedback: [
          'Helt rätt! Dativ neutrum är "einem".',
          'einen är ackusativ maskulinum.',
          'einer är feminin dativ.',
          'ein är nominativ/ackusativ.',
        ],
      },
      {
        id: 's04-q6',
        context: 'Nollartikel vid länder med undantag.',
        prompt: 'Vilket av följande länder kräver ALLTID en bestämd artikel i tyskan?',
        options: ['die Schweiz', 'Schweden', 'Deutschland', 'Spanien'],
        answer: 0,
        explanation: 'De flesta länder har nollartikel (Schweden, Deutschland), men "die Schweiz" är ett feminint undantag som alltid bär artikel.',
        feedback: [
          'Helt rätt! die Schweiz, die Türkei och die USA har alltid artikel.',
          'Schweden har nollartikel: in Schweden.',
          'Deutschland har nollartikel: in Deutschland.',
          'Spanien har nollartikel: in Spanien.',
        ],
      },
    ],
  },

  // K02: Nominativ: subjekt och predikativ
  '/docs/kasus/nominativ': {
    lessonId: 'K02',
    href: '/docs/kasus/nominativ',
    title: 'Snabbkoll: Nominativ och predikativ',
    questions: [
      {
        id: 'k02-q1',
        context: 'Predikativ efter verbet sein.',
        prompt: 'Välj rätt form: "Er ist ___ (ein guter Freund, der Freund)."',
        options: ['ein guter Freund', 'einen guten Freund', 'einem guten Freund', 'eines guten Freundes'],
        answer: 0,
        explanation: 'Efter verbet sein står predikatsfyllnad i nominativ: ein guter Freund.',
        feedback: [
          'Helt rätt! sein kräver nominativ (ein guter Freund).',
          'Fälla! Ackusativform är felaktig efter verbet sein.',
          'Dativform är fel.',
          'Genitivform är fel.',
        ],
      },
      {
        id: 'k02-q2',
        context: 'Subjektets placering i meningen.',
        prompt: 'Vilket ord är subjekt i: "Gestern hat der Lehrer den Schülern das Buch gegeben"?',
        options: ['der Lehrer', 'Gestern', 'den Schülern', 'das Buch'],
        answer: 0,
        explanation: '"der Lehrer" står i nominativ och är den som utför handlingen (gav boken).',
        feedback: [
          'Helt rätt! Läraren är subjektet i nominativ.',
          'Gestern är ett tidsadverbial.',
          'den Schülern är dativobjekt.',
          'das Buch är ackusativobjekt.',
        ],
      },
      {
        id: 'k02-q3',
        context: 'Predikativ efter werden.',
        prompt: 'Välj rätt form: "Mein Sohn wird bald ___ (ein großer Junge, der Junge)."',
        options: ['ein großer Junge', 'einen großen Jungen', 'einem großen Jungen', 'des großen Jungen'],
        answer: 0,
        explanation: 'Precis som sein tar verbet werden predikativ i nominativ: ein großer Junge.',
        feedback: [
          'Helt rätt! werden styr nominativ för predikativet.',
          'Ackusativ är fel efter werden.',
          'Dativ är fel.',
          'Genitiv är fel.',
        ],
      },
      {
        id: 'k02-q4',
        context: 'Kontrollfråga för nominativ.',
        prompt: 'Vilken kontrollfråga ställer du för att hitta subjektet i en tysk mening?',
        options: ['Wer oder was?', 'Wen oder was?', 'Wem?', 'Wessen?'],
        answer: 0,
        explanation: 'Nominativ svarar alltid på "Wer oder was?" (Vem eller vad?).',
        feedback: [
          'Helt rätt! Wer eller was hittar nominativ.',
          'Wen frågar efter ackusativ.',
          'Wem frågar efter dativ.',
          'Wessen frågar efter genitiv.',
        ],
      },
      {
        id: 'k02-q5',
        context: 'Nominativ plural av bestämd artikel.',
        prompt: 'Vad är den bestämda artikeln i nominativ plural för maskulina substantiv (t.ex. Hunde)?',
        options: ['die Hunde', 'der Hunde', 'den Hunde', 'das Hunde'],
        answer: 0,
        explanation: 'I nominativ plural är den bestämda artikeln ALLTID "die" oavsett genus.',
        feedback: [
          'Helt rätt! die Hunde.',
          'der Hunde är genitiv plural.',
          'den Hunden är dativ plural.',
          'das är singular neutrum.',
        ],
      },
      {
        id: 'k02-q6',
        context: 'Tysk konstruktion: "Det är jag".',
        prompt: 'Hur säger man naturligt "Det är jag!" på tyska när någon frågar vem det är?',
        options: ['Ich bin es!', 'Es ist mich!', 'Es ist mir!', 'Das bin ihn!'],
        answer: 0,
        explanation: 'I tyskan används nominativ: "Ich bin es!" (bokstavligen: Jag är det).',
        feedback: [
          'Helt rätt! "Ich bin es!" är den idiomatiska och korrekta formen.',
          'Ackusativformen mich är en engelsk/svensk fälla.',
          'Dativformen mir är fel här.',
          'Felaktigt pronomen.',
        ],
      },
    ],
  },

  // K04: Dativ och verb som styr dativ
  '/docs/kasus/dativ': {
    lessonId: 'K04',
    href: '/docs/kasus/dativ',
    title: 'Snabbkoll: Dativ och dativverb',
    questions: [
      {
        id: 'k04-q1',
        context: 'Dativverb: helfen.',
        prompt: 'Välj rätt form: "Kannst du ___ (der Mann) bitte helfen?"',
        options: ['dem Mann', 'den Mann', 'des Mannes', 'der Mann'],
        answer: 0,
        explanation: 'Verbet helfen styr ALLTID dativ. Maskulinum i dativ är "dem Mann".',
        feedback: [
          'Helt rätt! helfen kräver dativ: dem Mann.',
          'den Mann är ackusativ och ett vanligt svenskt fel.',
          'des Mannes är genitiv.',
          'der Mann är nominativ.',
        ],
      },
      {
        id: 'k04-q2',
        context: 'Dativ femininum.',
        prompt: 'Vad blir den feminina artikeln "die" i dativ singular?',
        options: ['der (der Frau)', 'die (die Frau)', 'den (den Frau)', 'dem (dem Frau)'],
        answer: 0,
        explanation: 'Den feminina artikeln ändras från "die" till "der" i dativ: der Frau, einer Frau.',
        feedback: [
          'Helt rätt! Feminin dativ lånar r-ändelsen: der Frau.',
          'die är nominativ och ackusativ.',
          'den är maskulin ackusativ eller plural dativ.',
          'dem är maskulin och neutral dativ.',
        ],
      },
      {
        id: 'k04-q3',
        context: 'Opersonligt uttryck: frysa.',
        prompt: 'Hur uttrycker du korrekt att du fryser på tyska?',
        options: ['Mir ist kalt.', 'Ich bin kalt.', 'Mich ist kalt.', 'Ich habe Kälte.'],
        answer: 0,
        explanation: 'Kroppsliga tillstånd uttrycks med dativ: "Mir ist kalt". "Ich bin kalt" betyder att du är likstel eller känslokall.',
        feedback: [
          'Helt rätt! "Mir ist kalt" är den korrekta tyska konstruktionen.',
          'Klassisk fälla! Betyder att du har en kall personlighet.',
          'Mich är ackusativ och kan inte användas här.',
          'Inte standardspråk.',
        ],
      },
      {
        id: 'k04-q4',
        context: 'Dativ plural substantivändelse.',
        prompt: 'Hur böjs "die Kinder" i dativ plural: "Ich gebe ___ Geschenke"?',
        options: ['den Kindern (extra -n)', 'die Kindern', 'den Kinder', 'der Kindern'],
        answer: 0,
        explanation: 'I dativ plural heter artikeln "den" och substantivet får en extra ändelse "-n": den Kindern.',
        feedback: [
          'Helt rätt! Både artikeln den och ändelsen -n på substantivet behövs: den Kindern.',
          'die är inte dativ plural.',
          'Substantivet saknar dativändelsen -n.',
          'der är inte plural dativartikel.',
        ],
      },
      {
        id: 'k04-q5',
        context: 'Dativverb: gefallen.',
        prompt: 'Välj rätt form: "Das neue Buch gefällt ___ (ich) sehr gut."',
        options: ['mir', 'mich', 'mein', 'ich'],
        answer: 0,
        explanation: 'Verbet gefallen styr alltid dativ: Das Buch gefällt mir (tilltalar mig).',
        feedback: [
          'Helt rätt! gefallen kräver dativformen mir.',
          'mich är ackusativ.',
          'mein är possessiv.',
          'ich är nominativ.',
        ],
      },
      {
        id: 'k04-q6',
        context: 'Dativverb: danken.',
        prompt: 'Välj rätt form för artigt tilltal: "Wir danken ___ (Sie) für die Einladung."',
        options: ['Ihnen', 'Sie', 'Ihr', 'Euch'],
        answer: 0,
        explanation: 'Verbet danken styr dativ. Det artiga tilltalet Sie heter "Ihnen" i dativ.',
        feedback: [
          'Helt rätt! danken styr dativ och artigt Sie blir Ihnen.',
          'Sie är nominativ/ackusativ.',
          'Ihr är possessiv eller dativ femininum singular.',
          'Euch är informellt tilltal till vänner.',
        ],
      },
    ],
  },

  // R02: Mich, mir, dich, dir
  '/docs/pronomen/personliga-objekt': {
    lessonId: 'R02',
    href: '/docs/pronomen/personliga-objekt',
    title: 'Snabbkoll: Personliga objektpronomen',
    questions: [
      {
        id: 'r02-q1',
        context: 'Val mellan mich och mir efter verb.',
        prompt: 'Välj rätt pronomen: "1. Er sieht ___. 2. Er hilft ___."',
        options: ['1. mich, 2. mir', '1. mir, 2. mich', '1. mich, 2. mich', '1. mir, 2. mir'],
        answer: 0,
        explanation: 'sehen styr ackusativ (mich); helfen styr dativ (mir).',
        feedback: [
          'Perfekt! sehen tar mich (ackusativ) och helfen tar mir (dativ).',
          'Omvänt fel.',
          'helfen kan inte ta ackusativ mich.',
          'sehen kan inte ta dativ mir.',
        ],
      },
      {
        id: 'r02-q2',
        context: 'Val mellan dich och dir efter preposition.',
        prompt: 'Välj rätt pronomen: "1. Das ist für ___. 2. Komm mit ___!"',
        options: ['1. dich, 2. dir', '1. dir, 2. dich', '1. dich, 2. dich', '1. dir, 2. dir'],
        answer: 0,
        explanation: 'Prepositionen "für" styr alltid ackusativ (dich); "mit" styr alltid dativ (dir).',
        feedback: [
          'Helt rätt! für dich (ackusativ) och mit dir (dativ).',
          'Omvänt fel.',
          'mit kan aldrig ta ackusativ.',
          'für kan aldrig ta dativ.',
        ],
      },
      {
        id: 'r02-q3',
        context: 'Tredje person maskulinum: ihn vs. ihm.',
        prompt: 'Du letar efter din vän Peter: "Hast du ___ (er) gesehen?"',
        options: ['ihn', 'ihm', 'er', 'es'],
        answer: 0,
        explanation: 'Verbet sehen styr ackusativ. Pronomenet er heter "ihn" i ackusativ.',
        feedback: [
          'Helt rätt! ackusativ maskulinum är ihn.',
          'ihm är dativformen.',
          'er är subjektsformen i nominativ.',
          'es syftar på neutrum.',
        ],
      },
      {
        id: 'r02-q4',
        context: 'Tredje person femininum: sie vs. ihr.',
        prompt: 'Välj rätt form: "Ich gebe ___ (sie) das Buch."',
        options: ['ihr', 'sie', 'ihm', 'ihnen'],
        answer: 0,
        explanation: 'Mottagaren i dativ femininum är "ihr" (åt henne).',
        feedback: [
          'Helt rätt! Dativ femininum är ihr.',
          'sie är ackusativformen.',
          'ihm är maskulinum/neutrum dativ.',
          'ihnen är plural dativ.',
        ],
      },
      {
        id: 'r02-q5',
        context: 'Pluralformerna uns och euch.',
        prompt: 'Hur ändras pronomenen "uns" (oss) och "euch" (er) mellan ackusativ och dativ?',
        options: [
          'De ändras inte alls — de är identiska i både ackusativ och dativ!',
          'uns blir unser, euch blir euer',
          'uns blir unsem, euch blir euchem',
          'De lägger till ett extra s i dativ',
        ],
        answer: 0,
        explanation: '"uns" och "euch" har samma form i både ackusativ och dativ: Er sieht uns / Er hilft uns; Er sieht euch / Er hilft euch.',
        feedback: [
          'Helt rätt! En stor lättnad för språkinlärare: uns och euch är identiska!',
          'unser och euer är possessiva pronomen.',
          'Dessa former existerar inte.',
          'Inga ändelser läggs till.',
        ],
      },
      {
        id: 'r02-q6',
        context: 'Objektpronomen för maskulina ting.',
        prompt: 'Du frågar efter nyckeln (der Schlüssel): "Wo ist der Schlüssel? — Ich habe ___ (der Schlüssel)."',
        options: ['ihn', 'es', 'sie', 'ihm'],
        answer: 0,
        explanation: 'Eftersom nyckeln är maskulin (der Schlüssel) ersätts den i ackusativ av "ihn" (inte es!).',
        feedback: [
          'Helt rätt! Eftersom ordet är der Schlüssel måste pronomenet vara maskulint: ihn.',
          'Fälla! På svenska säger vi "det", men tyskan följer ordets maskulina kön: ihn.',
          'sie används för feminina ord.',
          'ihm är dativform.',
        ],
      },
    ],
  },

  // R03: Mein, dein, sein och ihr
  '/docs/pronomen/possessiva-artikelord': {
    lessonId: 'R03',
    href: '/docs/pronomen/possessiva-artikelord',
    title: 'Snabbkoll: Possessiva artikelord',
    questions: [
      {
        id: 'r03-q1',
        context: 'Hur possessiva pronomen bildas.',
        prompt: 'Vad avgör stammen respektive ändelsen på ett possessivt artikelord?',
        options: [
          'Ägaren väljer stammen (ich -> mein); saken som ägs väljer ändelsen (genus/kasus).',
          'Saken som ägs väljer stammen; ägaren väljer ändelsen.',
          'Verbets tempus bestämmer hela ordet.',
          'Det väljs helt slumpmässigt.',
        ],
        answer: 0,
        explanation: 'Ägaren avgör vem det tillhör (mein, dein, sein, ihr), medan nominalfrasens kön och kasus bestämmer ändelsen.',
        feedback: [
          'Helt rätt! Ägaren bestämmer stammen, den ägda saken bestämmer ändelsen.',
          'Tvärtom.',
          'Verbets tempus påverkar inte possessiva pronomen.',
          'Det finns strikta regler.',
        ],
      },
      {
        id: 'r03-q2',
        context: 'Ackusativ maskulinum med possessiv.',
        prompt: 'Välj rätt form: "Ich suche ___ (mein) Schlüssel (der Schlüssel)."',
        options: ['meinen', 'mein', 'meinem', 'meiner'],
        answer: 0,
        explanation: 'Schlüssel är maskulint och står som ackusativobjekt -> ändelsen -en: meinen Schlüssel.',
        feedback: [
          'Helt rätt! meinen Schlüssel i ackusativ maskulinum.',
          'mein har ingen ändelse och används för neutrum eller nominativ maskulinum.',
          'meinem är dativ.',
          'meiner är feminin dativ/genitiv.',
        ],
      },
      {
        id: 'r03-q3',
        context: 'Svenskans sin/sitt/sina har ingen direkt tysk motsvarighet.',
        prompt: 'Hur översätter man "Peter älskar sin fru" till tyska?',
        options: ['Peter liebt seine Frau.', 'Peter liebt sine Frau.', 'Peter liebt ihre Frau.', 'Peter liebt seiner Frau.'],
        answer: 0,
        explanation: 'Tyskan saknar ordet "sin". Eftersom ägaren Peter är en man används stammen sein- + feminin ackusativändelse -e: seine Frau.',
        feedback: [
          'Helt rätt! Peter liebt seine Frau.',
          '"sine" existerar inte i tyskan.',
          'ihre Frau betyder hennes fru eller deras fru.',
          'seiner är genitiv eller dativ, men liebt styr ackusativ.',
        ],
      },
      {
        id: 'r03-q4',
        context: 'Ägaren är en kvinna (hon).',
        prompt: 'Hur översätter man "Anna ringer sin bror (der Bruder)"?',
        options: ['Anna ruft ihren Bruder an.', 'Anna ruft seinen Bruder an.', 'Anna ruft ihr Bruder an.', 'Anna ruft seine Bruder an.'],
        answer: 0,
        explanation: 'Eftersom ägaren Anna är kvinna (hon) är stammen ihr-. Brodern är maskulin ackusativ (-en): ihren Bruder.',
        feedback: [
          'Helt rätt! Stammen ihr- för Anna + ändelsen -en för maskulin ackusativ: ihren Bruder.',
          'seinen används om ägaren vore en man.',
          'Stammen saknar ackusativändelsen -en.',
          'Fel stam och fel ändelse.',
        ],
      },
      {
        id: 'r03-q5',
        context: 'Bortfall av e i "euer".',
        prompt: 'Hur stavas ordet för "er mamma" (die Mutter) till kompisar?',
        options: ['eure Mutter', 'euere Mutter', 'euren Mutter', 'euer Mutter'],
        answer: 0,
        explanation: 'Stammen euer tappar sitt mellersta e när en ändelse läggs till: eur- + -e = eure Mutter.',
        feedback: [
          'Helt rätt! e:et faller bort: eure Mutter.',
          'euere är föråldrat och felaktigt.',
          'euren är maskulin ackusativ eller dativ plural.',
          'Saknar femininändelsen -e.',
        ],
      },
      {
        id: 'r03-q6',
        context: 'Dativ plural med possessiv.',
        prompt: 'Välj rätt form: "Wir spielen mit ___ (unsere) Freunden."',
        options: ['unseren', 'unsere', 'unserer', 'unserem'],
        answer: 0,
        explanation: 'Prepositionen mit kräver dativ plural -> ändelsen -en: unseren Freunden.',
        feedback: [
          'Helt rätt! Dativ plural ändelse är alltid -en: unseren Freunden.',
          'unsere är nominativ/ackusativ plural.',
          'unserer är dativ femininum singular.',
          'unserem är maskulin/neutral dativ singular.',
        ],
      },
    ],
  },

  // K06: Två objekt och pronomenordning
  '/docs/kasus/tva-objekt': {
    lessonId: 'K06',
    href: '/docs/kasus/tva-objekt',
    title: 'Snabbkoll: Två objekt och pronomenordning',
    questions: [
      {
        id: 'k06-q1',
        context: 'Två substantiviska objekt.',
        prompt: 'Vilken ordföljd gäller när en mening har två substantiviska objekt?',
        options: [
          'Dativ före Ackusativ (D före A: Ich gebe dem Mann das Buch)',
          'Ackusativ före Dativ (A före D: Ich gebe das Buch dem Mann)',
          'Ordningen är helt valfri',
          'Objekten måste stå bredvid verbet',
        ],
        answer: 0,
        explanation: 'Neutral standardordföljd för två substantiv är Dativobjekt före Ackusativobjekt (mottagaren före saken).',
        feedback: [
          'Helt rätt! Vid två substantiv kommer dativ före ackusativ (D före A).',
          'Detta är omvänd ordning som endast används vid extrem kontrastbetoning.',
          'Ordföljden är inte godtycklig i neutral tyska.',
          'Ett objekt kan flyttas till förfältet.',
        ],
      },
      {
        id: 'k06-q2',
        context: 'Två pronomenobjekt.',
        prompt: 'Vilken ordföljd gäller när BÅDA objekten är pronomen ("ge det åt honom")?',
        options: [
          'Ackusativ före Dativ (A före D: Ich gebe es ihm)',
          'Dativ före Ackusativ (D före A: Ich gebe ihm es)',
          'Det beror på subjektets kön',
          'Pronomen kan inte stå bredvid varandra',
        ],
        answer: 0,
        explanation: 'När båda objekten är pronomen kastar regeln om: Ackusativpronomen står ALLTID före Dativpronomen: Ich gebe es ihm.',
        feedback: [
          'Helt rätt! Två pronomen ger A före D: Ich gebe es ihm.',
          '"Ich gebe ihm es" är onaturligt och bryter mot tysk pronomenordning.',
          'Subjektet påverkar inte objektordningen.',
          'Pronomen står ofta bredvid varandra.',
        ],
      },
      {
        id: 'k06-q3',
        context: 'Ett pronomen och ett substantiv.',
        prompt: 'Vilken ordföljd är korrekt om det direkta ackusativobjektet är ett pronomen ("es") och dativobjektet är ett substantiv ("dem Mann")?',
        options: [
          'Ich gebe es dem Mann. (Pronomenet tränger sig fram först)',
          'Ich gebe dem Mann es.',
          'Ich gebe es ihm das Buch.',
          'Dem Mann ich gebe es.',
        ],
        answer: 0,
        explanation: 'Pronomen representerar känd information och dras alltid längst fram i mittfältet, före alla substantiv.',
        feedback: [
          'Helt rätt! Pronomenet tränger sig alltid före substantivet.',
          'Substantiv före ackusativpronomen låter extremt klumpigt på tyska.',
          'Dubbla objekt.',
          'Verbet måste stå på position 2.',
        ],
      },
      {
        id: 'k06-q4',
        context: 'Pronomenbyte i sammanhang.',
        prompt: '"Zeigst du der Mutter (f) das Bild (n)?" — Hur svarar du med två pronomen?',
        options: [
          'Ja, ich zeige es ihr.',
          'Ja, ich zeige ihr es.',
          'Ja, ich zeige sie ihm.',
          'Ja, ich zeige sie ihr.',
        ],
        answer: 0,
        explanation: 'das Bild (n ack) = es; der Mutter (f dat) = ihr. Två pronomen ger A före D: "es ihr".',
        feedback: [
          'Perfekt! Bilden (es) före mamman (ihr): "ich zeige es ihr".',
          'ihr es bryter mot A-före-D-regeln för pronomen.',
          'Felaktiga genusformer.',
          'das Bild är neutrum (es), inte femininum (sie).',
        ],
      },
      {
        id: 'k06-q5',
        context: 'Varför dras pronomen mot vänster?',
        prompt: 'Vad är den bakomliggande orsaken till att pronomen dras mot början av mittfältet?',
        options: [
          'Pronomen uttrycker redan känd information, och känd information placeras tidigt i tyska satser.',
          'Eftersom pronomen alltid har färre bokstäver.',
          'Det är bara en slumpregel från 1800-talet.',
          'För att verbet kräver rim.',
        ],
        answer: 0,
        explanation: 'I tysk informationsstruktur (tema/rema) kommer känd information först, medan ny och tung information placeras mot slutet.',
        feedback: [
          'Utmärkt förståelse för tysk informationsstruktur!',
          'Längden är en konsekvens, inte den grammatiska orsaken.',
          'Det är ingen slump.',
          'Nej.',
        ],
      },
      {
        id: 'k06-q6',
        context: 'Sats med hjälpverb och två pronomen.',
        prompt: 'Vilken mening har korrekt ordföljd i dåtid (perfekt)?',
        options: [
          'Ich habe es ihm gestern gegeben.',
          'Ich habe ihm es gestern gegeben.',
          'Ich habe gestern gegeben es ihm.',
          'Ich es ihm habe gestern gegeben.',
        ],
        answer: 0,
        explanation: 'Finit hjälpverb på plats 2 (habe), följt direkt av pronomenobjekten i ordningen ackusativ + dativ (es ihm), sedan adverbial (gestern) och supinum sist (gegeben).',
        feedback: [
          'Helt rätt! Perfekt tillämpning av satsram och pronomenordning.',
          'ihm es har fel pronomenordning.',
          'Objekten får inte stå utanför satsramen.',
          'Verbet habe måste stå på plats 2.',
        ],
      },
    ],
  },

  // V05: Separerbara verb
  '/docs/verb/separerbara': {
    lessonId: 'V05',
    href: '/docs/verb/separerbara',
    title: 'Snabbkoll: Separerbara verb',
    questions: [
      {
        id: 'v05-q1',
        context: 'Separerbara verb i huvudsats.',
        prompt: 'Var hamnar partikeln "auf" i verbet "aufstehen" i en vanlig huvudsats?',
        options: [
          'Allra sist i huvudsatsen (Ich stehe jeden Tag früh auf)',
          'Direkt efter verbet (Ich stehe auf jeden Tag früh)',
          'Allra först i meningen',
          'Partikeln tas bort',
        ],
        answer: 0,
        explanation: 'I en huvudsats böjs stammen på position 2 medan den separerbara partikeln skjuts längst bak i satsen.',
        feedback: [
          'Helt rätt! Partikeln ramar in satsen och står allra sist.',
          'Att hålla ihop partikeln direkt efter verbet är fel i huvudsats.',
          'Partikeln står inte först ensam.',
          'Partikeln kan inte tas bort — den ger verbet dess betydelse.',
        ],
      },
      {
        id: 'v05-q2',
        context: 'Separerbara verb med modalverb.',
        prompt: 'Vad händer med ett separerbart verb när meningen har ett modalverb ("müssen")?',
        options: [
          'Det separeras INTE — det står som hel infinitiv i slutet (Ich muss früh aufstehen).',
          'Det separeras som vanligt (Ich muss früh stehen auf).',
          'Partikeln försvinner helt.',
          'Modalverbet böjs inte.',
        ],
        answer: 0,
        explanation: 'Tillsammans med ett modalverb står huvudverbet i hel infinitiv längst bak i satsen: aufstehen.',
        feedback: [
          'Helt rätt! Efter modalverb förblir verbet odelat i ett enda stycke.',
          'Det separeras inte efter modalverb.',
          'Partikeln försvinner inte.',
          'Modalverbet böjs som vanligt på plats 2.',
        ],
      },
      {
        id: 'v05-q3',
        context: 'Perfektparticip (supinum) av separerbara verb.',
        prompt: 'Hur bildas perfekt av verbet "einkaufen"?',
        options: ['eingekauft (ge- stoppas in i mitten)', 'geeinkauft', 'einkauft', 'gekauft ein'],
        answer: 0,
        explanation: 'I perfekt hamnar -ge- mitt emellan partikeln och stammen: ein-ge-kauf-t.',
        feedback: [
          'Helt rätt! -ge- hamnar i mitten: eingekauft, angerufen, aufgestanden.',
          'geeinkauft med ge- längst fram är felaktigt.',
          'einkauft saknar particip-märket ge-.',
          'gekauft ein är fel struktur.',
        ],
      },
      {
        id: 'v05-q4',
        context: 'Fast sammansatta (oseparerbara) prefix.',
        prompt: 'Vilken av följande förstavelser är OSEPARERBAR och klyvs ALDRIG från verbet?',
        options: ['ver- (verstehen, verkaufen)', 'auf- (aufstehen)', 'ab- (abfahren)', 'ein- (einkaufen)'],
        answer: 0,
        explanation: 'Förstavelserna be-, emp-, ent-, er-, ge-, ver-, zer- är obetonade och separeras ALDRIG: Ich verstehe, Ich verkaufe.',
        feedback: [
          'Helt rätt! ver- separeras aldrig (Ich verstehe, aldrig stehe ver!).',
          'auf- är separerbart.',
          'ab- är separerbart.',
          'ein- är separerbart.',
        ],
      },
      {
        id: 'v05-q5',
        context: 'Separerbara verb i bisats.',
        prompt: 'Vad händer med ett separerbart verb i en bisats som inleds med "weil"?',
        options: [
          'Det hålls ihop i ett stycke sist i bisatsen (weil ich früh aufstehe).',
          'Det klyvs som vanligt (weil ich früh stehe auf).',
          'Partikeln hamnar först efter weil.',
          'Det byts ut mot ett svagt verb.',
        ],
        answer: 0,
        explanation: 'I bisatser tvingar underordnande konjunktioner verbet till slutet, och då återförenas partikeln och stammen till ett helt ord: aufstehe.',
        feedback: [
          'Helt rätt! I bisatser hålls separerbara verb ihop längst bak.',
          'Det klyvs inte i bisatser.',
          'Partikeln flyttas inte fram.',
          'Verbtypen ändras inte.',
        ],
      },
      {
        id: 'v05-q6',
        context: 'Fråga med separerbart verb.',
        prompt: 'Hur frågar du någon: "Ringer du mig ikväll?" (anrufen)',
        options: [
          'Rufst du mich heute Abend an?',
          'Anrufst du mich heute Abend?',
          'Rufst du an mich heute Abend?',
          'Tust du mich anrufen?',
        ],
        answer: 0,
        explanation: 'Böjd stam inleder på plats 1 (Rufst), subjekt (du), objekt (mich), adverbial (heute Abend) och partikeln sist (an).',
        feedback: [
          'Helt rätt! "Rufst du mich heute Abend an?".',
          'Separerbara verb hålls inte ihop i huvudsatsfrågor.',
          'Partikeln ska stå absolut sist i frågan, inte mitt i.',
          'tun används inte som hjälpor i standardtyska.',
        ],
      },
    ],
  },

  // Y02: Satsramen: vänster och höger verbdel
  '/docs/syntax/satsram': {
    lessonId: 'Y02',
    href: '/docs/syntax/satsram',
    title: 'Snabbkoll: Satsramen (Satzklammer)',
    questions: [
      {
        id: 'y02-q1',
        context: 'De två delarna i den tyska satsramen.',
        prompt: 'Vad utgör den vänstra respektive högra klammern i en tysk huvudsats med modalverb?',
        options: [
          'Vänster klammer: Det böjda modalverbet på plats 2. Höger klammer: Infinitiven sist.',
          'Vänster klammer: Subjektet. Höger klammer: Punkten.',
          'Vänster klammer: Infinitiven. Höger klammer: Modalverbet.',
          'Båda verben står tillsammans på position 2.',
        ],
        answer: 0,
        explanation: 'Satsramen ramas in av det finita verbet på position 2 och det oböjda verbet sist i meningen.',
        feedback: [
          'Helt rätt! Detta bildar tyskans klassiska Satzklammer.',
          'Subjektet är inte en del av den verbala klammern.',
          'Tvärtom ordning.',
          'Att ställa verben bredvid varandra är engelskt mönster.',
        ],
      },
      {
        id: 'y02-q2',
        context: 'Mittfältets innehåll.',
        prompt: 'Vad ryms inuti satsens "Mittelfeld"?',
        options: [
          'Subjekt (vid inversion), objekt, tids-, orsaks-, sätts- och platsadverbial samt negationer.',
          'Endast ett enda ord.',
          'Bara bisatsinledare.',
          'Mittfältet måste alltid lämnas tomt.',
        ],
        answer: 0,
        explanation: 'Mittfältet kan rymma alla satsdelar som behövs för att utveckla handlingen mellan de två verbdelarna.',
        feedback: [
          'Helt rätt! Mittfältet kan vara mycket innehållsrikt och strukturerat.',
          'Det kan innehålla många led.',
          'Bisatsinledare hör hemma i bisatser.',
          'Mittfältet är sällan tomt i normala meningar.',
        ],
      },
      {
        id: 'y02-q3',
        context: 'Ordföljdsregel Te-Ka-Mo-Lo.',
        prompt: 'I vilken ordning placeras adverbial i det tyska mittfältet enligt standardregeln Te-Ka-Mo-Lo?',
        options: [
          'Tid (Temporal) -> Orsak (Kausal) -> Sätt (Modal) -> Plats (Lokal)',
          'Plats -> Tid -> Sätt -> Orsak',
          'Orsak -> Plats -> Tid -> Sätt',
          'Sätt -> Plats -> Tid -> Orsak',
        ],
        answer: 0,
        explanation: 'Minnesregeln Te-Ka-Mo-Lo anger: Temporal (När?) -> Kausal (Varför?) -> Modal (Hur?) -> Lokal (Var/Vart?).',
        feedback: [
          'Perfekt! Te-Ka-Mo-Lo är tyskans mest kända adverbialregel.',
          'Plats kommer sist i Te-Ka-Mo-Lo, inte först.',
          'Fel ordning.',
          'Fel ordning.',
        ],
      },
      {
        id: 'y02-q4',
        context: 'Undvikande av engelsk konstruktion.',
        prompt: 'Vilken mening har KORREKT tysk satsram?',
        options: [
          'Wir haben gestern im Restaurant sehr gut gegessen.',
          'Wir haben gegessen sehr gut im Restaurant gestern.',
          'Wir haben sehr gut gegessen gestern im Restaurant.',
          'Wir gestern im Restaurant haben sehr gut gegessen.',
        ],
        answer: 0,
        explanation: 'Finit hjälpverb "haben" på plats 2, mittfält med tid + plats + sätt, och supinum "gegessen" avslutar ramen längst bak.',
        feedback: [
          'Helt rätt! Den tyska satsramen stängs med gegessen längst bak.',
          'Engelsk ordföljd där participet inte skjuts till slutet.',
          'Adverbialen har placerats utanför ramen.',
          'Verbet står inte på plats 2.',
        ],
      },
      {
        id: 'y02-q5',
        context: 'Negationens placering i förhållande till höger klammer.',
        prompt: 'Var hamnar ordet "nicht" i satsen: "Ich kann heute leider ___ kommen"?',
        options: ['Precis före den högra klammern kommen (nicht kommen)', 'Allra först före Ich', 'Efter kommen', 'På plats 2'],
        answer: 0,
        explanation: 'Vid hel satsnegation placeras "nicht" precis framför den högra verbklammern: nicht kommen.',
        feedback: [
          'Helt rätt! "nicht" står direkt framför slutarbetet.',
          'nicht kan inte stå först här.',
          'Det kan inte stå efter slutarbetet.',
          'Plats 2 är reserverad för finita verbet kann.',
        ],
      },
      {
        id: 'y02-q6',
        context: 'Satsram med tre verb (Dubbel infinitiv).',
        prompt: 'När slår lyssnaren igen sin förväntan på vad som sägs i en tysk mening med satsram?',
        options: [
          'När det sista verbet i den högra klammern uttalas.',
          'Redan efter första ordet.',
          'På position 2.',
          'Lyssnaren behöver inte vänta på slutet.',
        ],
        answer: 0,
        explanation: 'Den högra klammern knyter ihop meningsinnehållet och avslutar den grammatiska spänningen.',
        feedback: [
          'Exakt! Satsramen skapar precision och sammanhållning genom hela meningen.',
          'Första ordet är bara förfältet.',
          'Position 2 öppnar spänningen men avslutar den inte.',
          'Utan slutarbetet vet lyssnaren inte vad handlingen är.',
        ],
      },
    ],
  },

  // Y06: Nicht, kein och negationens räckvidd
  '/docs/syntax/nicht-och-kein': {
    lessonId: 'Y06',
    href: '/docs/syntax/nicht-och-kein',
    title: 'Snabbkoll: Nicht, kein och negation',
    questions: [
      {
        id: 'y06-q1',
        context: 'Val mellan nicht och kein.',
        prompt: 'Välj rätt negering: "1. Ich habe ___ Auto (das Auto). 2. Das Auto ist ___ neu."',
        options: ['1. kein, 2. nicht', '1. nicht, 2. kein', '1. kein, 2. kein', '1. nicht, 2. nicht'],
        answer: 0,
        explanation: 'kein negerar substantiv med obestämd artikel (kein Auto); nicht negerar adjektiv (nicht neu).',
        feedback: [
          'Helt rätt! kein för substantiv, nicht för adjektiv.',
          'Tvärtom.',
          'Adjektiv kan inte negeras med kein.',
          'Substantiv med obestämd artikel negeras inte med nicht här.',
        ],
      },
      {
        id: 'y06-q2',
        context: 'Modalbetydelse: nicht müssen vs. nicht dürfen.',
        prompt: 'Vad betyder den tyska skylten: "Hier darf man nicht parken!"?',
        options: [
          'Här är det strängt förbjudet att parkera! (Man får inte parkera)',
          'Här behöver man inte parkera om man inte vill.',
          'Här kan man parkera gratis.',
          'Här får man bara parkera på söndagar.',
        ],
        answer: 0,
        explanation: '"nicht dürfen" betyder FÅR INTE (förbud). "inte behöva" heter "nicht müssen".',
        feedback: [
          'Helt rätt! nicht dürfen innebär ett absolut förbud.',
          'Fälla! "inte behöva" heter "nicht müssen".',
          'Det betyder motsatsen.',
          'Det anger ingen söndagsregel.',
        ],
      },
      {
        id: 'y06-q3',
        context: 'Substantiv med bestämd artikel negeras med nicht.',
        prompt: 'Hur säger man: "Jag känner inte den mannen"?',
        options: [
          'Ich kenne den Mann nicht.',
          'Ich kenne keinen den Mann.',
          'Ich kenne den Mann kein.',
          'Ich kenne nicht einen den Mann.',
        ],
        answer: 0,
        explanation: 'När substantivet har en BESTÄMD artikel (den Mann) används "nicht" (inte kein!).',
        feedback: [
          'Helt rätt! Bestämd artikel negeras med nicht, oftast i slutet av satsen.',
          'kein kan aldrig kombineras med bestämd artikel.',
          'kein kan inte stå ensamt i slutet här.',
          'Helt felaktig konstruktion.',
        ],
      },
      {
        id: 'y06-q4',
        context: 'Motsatsordet till "schon".',
        prompt: 'Vad är den negativa motsatsen till "schon" (redan)?',
        options: ['noch nicht (inte ännu)', 'nicht mehr (inte längre)', 'niemals (aldrig)', 'kein schon'],
        answer: 0,
        explanation: 'schon (redan) besvaras negativt med "noch nicht" (inte ännu): Hast du schon gegessen? — Noch nicht.',
        feedback: [
          'Helt rätt! schon motsvaras av noch nicht.',
          'nicht mehr är motsatsen till "noch" (fortfarande).',
          'niemals betyder aldrig.',
          'Existerar inte.',
        ],
      },
      {
        id: 'y06-q5',
        context: 'Motsatsordet till "noch".',
        prompt: 'Vad är den negativa motsatsen till "noch" (fortfarande): "Wohnst du noch in Hamburg?"?',
        options: [
          'Nein, ich wohne nicht mehr in Hamburg. (inte längre)',
          'Nein, ich wohne noch nicht in Hamburg.',
          'Nein, ich wohne nie in Hamburg.',
          'Nein, ich wohne kein Hamburg.',
        ],
        answer: 0,
        explanation: 'noch (fortfarande) motsvaras negativt av "nicht mehr" (inte längre).',
        feedback: [
          'Helt rätt! noch besvaras med nicht mehr.',
          'noch nicht betyder inte ännu.',
          'nie betyder aldrig.',
          'kein kan inte användas med stadsnamn så här.',
        ],
      },
      {
        id: 'y06-q6',
        context: 'Lednegation med "sondern".',
        prompt: 'Vilken mening uttrycker en kontrastiv lednegation korrekt?',
        options: [
          'Ich fahre nicht mit dem Bus, sondern mit dem Zug.',
          'Ich fahre kein mit dem Bus, aber mit dem Zug.',
          'Ich fahre mit dem Bus nicht, sondern mit dem Zug.',
          'Ich nicht fahre mit dem Bus, sondern mit dem Zug.',
        ],
        answer: 0,
        explanation: 'Vid lednegation placeras "nicht" direkt framför det specifika ledet (nicht mit dem Bus) och följs naturligt av "sondern" (utan).',
        feedback: [
          'Helt rätt! "nicht mit dem Bus, sondern mit dem Zug".',
          'kein kan inte användas framför prepositioner.',
          'nicht bör stå direkt framför det led som kontrasteras.',
          'Verbet fahre måste stå på plats 2.',
        ],
      },
    ],
  },

  // P01: Prepositioner med ackusativ
  '/docs/prepositioner/ackusativ': {
    lessonId: 'P01',
    href: '/docs/prepositioner/ackusativ',
    title: 'Snabbkoll: Ackusativprepositioner',
    questions: [
      {
        id: 'p01-q1',
        context: 'Prepositionen durch.',
        prompt: 'Välj rätt form: "Wir gehen durch ___ (der Park)."',
        options: ['den Park', 'dem Park', 'das Park', 'des Parks'],
        answer: 0,
        explanation: 'Prepositionen durch styr alltid ackusativ: den Park.',
        feedback: [
          'Helt rätt! durch kräver ackusativ maskulinum: den Park.',
          'dem Park är dativ.',
          'Park är maskulint, inte neutralt.',
          'des Parks är genitiv.',
        ],
      },
      {
        id: 'p01-q2',
        context: 'Prepositionen für med pronomen.',
        prompt: 'Välj rätt pronomen: "Das Geschenk ist für ___ (du)."',
        options: ['dich', 'dir', 'du', 'dein'],
        answer: 0,
        explanation: 'für styr alltid ackusativ: für dich.',
        feedback: [
          'Helt rätt! für dich i ackusativ.',
          'dir är dativformen och felaktig efter für.',
          'du är nominativ.',
          'dein är possessiv.',
        ],
      },
      {
        id: 'p01-q3',
        context: 'Prepositionen ohne.',
        prompt: 'Välj rätt form: "Ohne ___ (mein Bruder) fahre ich nicht."',
        options: ['meinen Bruder', 'meinem Bruder', 'mein Bruder', 'meiner Bruder'],
        answer: 0,
        explanation: 'ohne styr alltid ackusativ maskulinum: meinen Bruder.',
        feedback: [
          'Helt rätt! ohne meinen Bruder.',
          'meinem Bruder är dativ.',
          'mein Bruder är nominativ.',
          'meiner Bruder är fel form.',
        ],
      },
      {
        id: 'p01-q4',
        context: 'Prepositionen um för klockslag.',
        prompt: 'Hur säger man "Klockan åtta" på tyska?',
        options: ['Um acht Uhr', 'Am acht Uhr', 'Im acht Uhr', 'Zu acht Uhr'],
        answer: 0,
        explanation: 'Exakta klockslag uttrycks alltid med "um": um acht Uhr.',
        feedback: [
          'Helt rätt! um används för klockslag.',
          'am används för dagar och datum.',
          'im används för månader och årstider.',
          'zu används inte för klockslag.',
        ],
      },
      {
        id: 'p01-q5',
        context: 'Sammandragning av für + das.',
        prompt: 'Hur förkortas "für das" i naturlig vardagstyska?',
        options: ['fürs', 'fürm', 'fürn', 'fürr'],
        answer: 0,
        explanation: 'für + das dras ihop till "fürs": fürs Kind, fürs Auto.',
        feedback: [
          'Helt rätt! fürs = für das.',
          'fürm existerar inte.',
          'fürn är slang.',
          'Existerar inte.',
        ],
      },
      {
        id: 'p01-q6',
        context: 'Minnesramsa för ackusativprepositioner.',
        prompt: 'Vilka är de fem grundläggande ackusativprepositionerna?',
        options: [
          'durch, für, gegen, ohne, um',
          'aus, bei, mit, nach, von',
          'an, auf, hinter, in, neben',
          'trotz, wegen, während, statt',
        ],
        answer: 0,
        explanation: 'DOG-FU: durch, ohne, gegen, für, um är tyskans rena ackusativprepositioner.',
        feedback: [
          'Helt rätt! Dessa fem styr alltid ackusativ.',
          'Dessa är dativprepositioner.',
          'Dessa är växelprepositioner.',
          'Dessa är genitivprepositioner.',
        ],
      },
    ],
  },

  // P02: Prepositioner med dativ
  '/docs/prepositioner/dativ': {
    lessonId: 'P02',
    href: '/docs/prepositioner/dativ',
    title: 'Snabbkoll: Dativprepositioner',
    questions: [
      {
        id: 'p02-q1',
        context: 'Prepositionen mit för transportmedel.',
        prompt: 'Välj rätt form: "Ich fahre mit ___ (der Bus) zur Arbeit."',
        options: ['dem Bus', 'den Bus', 'der Bus', 'des Busses'],
        answer: 0,
        explanation: 'mit styr ALLTID dativ: mit dem Bus.',
        feedback: [
          'Helt rätt! mit kräver dativ maskulinum: dem Bus.',
          'den Bus är ackusativ.',
          'der Bus är nominativ.',
          'des Busses är genitiv.',
        ],
      },
      {
        id: 'p02-q2',
        context: 'Prepositionen nach för resor.',
        prompt: 'Vilken preposition använder du när du reser till en stad: "Ich fahre ___ Berlin"?',
        options: ['nach', 'zu', 'in', 'bei'],
        answer: 0,
        explanation: 'För städer och länder utan artikel används alltid "nach": nach Berlin, nach Schweden.',
        feedback: [
          'Helt rätt! nach för städer och länder utan artikel.',
          'zu används för personer eller specifika platser.',
          'in används för länder med artikel (in die Schweiz).',
          'bei anger befintlighet (hos/vid).',
        ],
      },
      {
        id: 'p02-q3',
        context: 'Prepositionen seit för pågående tid.',
        prompt: 'Välj rätt form: "Er wohnt seit ___ (ein Jahr, das Jahr) hier."',
        options: ['einem Jahr', 'einen Jahr', 'eines Jahres', 'ein Jahr'],
        answer: 0,
        explanation: 'seit styr alltid dativ neutrum: seit einem Jahr.',
        feedback: [
          'Helt rätt! seit einem Jahr i dativ neutrum.',
          'einen Jahr är ackusativ.',
          'eines Jahres är genitiv.',
          'ein Jahr saknar dativändelse.',
        ],
      },
      {
        id: 'p02-q4',
        context: 'Sammandragningen zum och zur.',
        prompt: 'Vad är "zum" och "zur" sammandragningar av?',
        options: [
          'zum = zu + dem; zur = zu + der',
          'zum = zu + das; zur = zu + die',
          'zum = zu + den; zur = zu + des',
          'Båda är samma sak som zu + das',
        ],
        answer: 0,
        explanation: 'zu + dem dras ihop till zum (mask/neutr dativ); zu + der dras ihop till zur (fem dativ).',
        feedback: [
          'Helt rätt! zum Bahnhof (m), zur Schule (f).',
          'zu das finns inte eftersom zu alltid tar dativ dem.',
          'Felaktigt.',
          'Felaktigt.',
        ],
      },
      {
        id: 'p02-q5',
        context: 'Rörelse med prepositionen zu.',
        prompt: 'Vilket kasus styr "zu" när du går till doktorn: "Ich gehe zu ___ (der Arzt)"?',
        options: ['Dativ (zum Arzt / zu dem Arzt)', 'Ackusativ (zu den Arzt)', 'Nominativ (zu der Arzt)', 'Genitiv (zu des Arztes)'],
        answer: 0,
        explanation: 'Trots att det är rörelse styr "zu" alltid dativ: zum Arzt.',
        feedback: [
          'Helt rätt! zu är en ren dativpreposition oavsett rörelse.',
          'Klassisk fälla! Tro inte att rörelse automatiskt betyder ackusativ.',
          'Nominativ är fel.',
          'Genitiv är fel.',
        ],
      },
      {
        id: 'p02-q6',
        context: 'Prepositionen aus för ursprung.',
        prompt: 'Välj rätt form: "Kommst du aus ___ (die Schweiz)?"',
        options: ['der Schweiz', 'die Schweiz', 'den Schweiz', 'dem Schweiz'],
        answer: 0,
        explanation: 'aus styr alltid dativ. Schweiz är feminint (die Schweiz) och blir "der Schweiz" i dativ.',
        feedback: [
          'Helt rätt! aus der Schweiz i dativ femininum.',
          'die Schweiz är nominativ/ackusativ.',
          'den är maskulin ackusativ eller plural dativ.',
          'dem är maskulin/neutral dativ.',
        ],
      },
    ],
  },

  // P04: Nach, in, zu, an eller auf?
  '/docs/prepositioner/nach-in-zu-an-auf': {
    lessonId: 'P04',
    href: '/docs/prepositioner/nach-in-zu-an-auf',
    title: 'Snabbkoll: Vilken riktningspreposition?',
    questions: [
      {
        id: 'p04-q1',
        context: 'Länder med feminin artikel.',
        prompt: 'Välj rätt preposition och artikel: "Wir reisen morgen ___ (die Türkei)."',
        options: ['in die Türkei', 'nach Türkei', 'zu der Türkei', 'an die Türkei'],
        answer: 0,
        explanation: 'För länder med bestämd artikel används "in" + ackusativ vid resa dit: in die Türkei, in die Schweiz.',
        feedback: [
          'Helt rätt! in die Türkei för länder med artikel.',
          'nach används bara för länder UTAN artikel.',
          'zu används inte för länder.',
          'an används för kuster och vatten.',
        ],
      },
      {
        id: 'p04-q2',
        context: 'Gå till en person.',
        prompt: 'Välj rätt uttryck: "Ich gehe heute Nachmittag ___ (meine Oma)."',
        options: ['zu meiner Oma', 'nach meiner Oma', 'in meine Oma', 'an meine Oma'],
        answer: 0,
        explanation: 'När målet är en person används alltid "zu" + dativ: zu meiner Oma, zum Arzt.',
        feedback: [
          'Helt rätt! zu för personer.',
          'nach används för städer/länder, inte personer.',
          'in kan man inte gå i en person!',
          'an är för ytor och vatten.',
        ],
      },
      {
        id: 'p04-q3',
        context: 'Hemåt kontra hemma.',
        prompt: 'Välj rätt former: "1. Jag går hem = Ich gehe ___. 2. Jag är hemma = Ich bin ___."',
        options: [
          '1. nach Hause, 2. zu Hause',
          '1. zu Hause, 2. nach Hause',
          '1. in Hause, 2. bei Hause',
          '1. nach Heim, 2. zu Heim',
        ],
        answer: 0,
        explanation: 'nach Hause = riktning hemåt; zu Hause = befintlighet på plats i hemmet.',
        feedback: [
          'Perfekt! nach Hause (hemåt) och zu Hause (hemma).',
          'Omvänt fel.',
          'Existerar inte.',
          'Felaktiga former.',
        ],
      },
      {
        id: 'p04-q4',
        context: 'Destination: hav och strand.',
        prompt: 'Hur säger man att man åker till havet / stranden?',
        options: ['ans Meer / an den Strand', 'nach Meer / nach Strand', 'zu Meer / zum Strand', 'ins Meer / in den Strand'],
        answer: 0,
        explanation: 'Vid kuster, stränder och vattenlinjer används "an" + ackusativ: ans Meer, an den Strand.',
        feedback: [
          'Helt rätt! an används för vatten och strandkanter.',
          'nach används inte för naturmiljöer så här.',
          'zu Meer är fel.',
          'ins Meer betyder att man hoppar rakt ner i själva vattnet för att simma!',
        ],
      },
      {
        id: 'p04-q5',
        context: 'Gå in i en lokal: bio.',
        prompt: 'Hur säger man att man går på bio (in i biografen)?',
        options: ['ins Kino (in das Kino)', 'nach Kino', 'zum Kino', 'ans Kino'],
        answer: 0,
        explanation: 'När man går in i en byggnad för dess verksamhet används "in" + ackusativ: ins Kino, ins Theater.',
        feedback: [
          'Helt rätt! ins Kino.',
          'nach används aldrig för byggnader.',
          'zum Kino betyder att man går fram till biografens utsida/byggnad utan att nödvändigtvis gå in och se film.',
          'ans Kino är fel.',
        ],
      },
      {
        id: 'p04-q6',
        context: 'Länder i plural: USA.',
        prompt: 'Välj rätt form: "Mein Bruder fliegt nächste Woche in ___ (die USA)."',
        options: ['die USA', 'der USA', 'den USA', 'das USA'],
        answer: 0,
        explanation: 'USA är ett pluralnamn (die USA). Rörelse dit kräver ackusativ plural: in die USA.',
        feedback: [
          'Helt rätt! in die USA i ackusativ plural.',
          'der USA är genitiv eller dativ singular.',
          'den USA är dativ plural (används för befintlighet: in den USA).',
          'USA är inte neutrum singular.',
        ],
      },
    ],
  },

  // P06: Am, im, um, seit, vor och für
  '/docs/prepositioner/tid': {
    lessonId: 'P06',
    href: '/docs/prepositioner/tid',
    title: 'Snabbkoll: Prepositioner för tid',
    questions: [
      {
        id: 'p06-q1',
        context: 'Veckodagar och klockslag.',
        prompt: 'Välj rätt prepositioner: "___ Montag treffen wir uns ___ acht Uhr."',
        options: ['Am ... um', 'Im ... um', 'Um ... am', 'An ... in'],
        answer: 0,
        explanation: 'am (an + dem) används för veckodagar; um används för klockslag.',
        feedback: [
          'Helt rätt! Am Montag um acht Uhr.',
          'im är för månader och årstider.',
          'Omvänt fel.',
          'Felaktiga prepositioner.',
        ],
      },
      {
        id: 'p06-q2',
        context: 'Månader och årstider.',
        prompt: 'Välj rätt preposition: "___ Sommer fahren wir nach Italien."',
        options: ['Im', 'Am', 'Um', 'In'],
        answer: 0,
        explanation: 'im (in + dem) används för årstider och månader: im Sommer, im Juli.',
        feedback: [
          'Helt rätt! Im Sommer.',
          'am är för dagar och datum.',
          'um är för klockslag.',
          'Utan sammandragning (in) är det inte standard före Sommer.',
        ],
      },
      {
        id: 'p06-q3',
        context: 'För ... sedan.',
        prompt: 'Hur säger man: "Han reste för tre dagar sedan"?',
        options: [
          'Er ist vor drei Tagen abgereist.',
          'Er ist seit drei Tagen abgereist.',
          'Er ist für drei Tage abgereist.',
          'Er ist vor drei Tage abgereist.',
        ],
        answer: 0,
        explanation: 'vor + dativ motsvarar svenskans "för ... sedan": vor drei Tagen (med dativändelsen -n).',
        feedback: [
          'Helt rätt! vor drei Tagen i dativ plural.',
          'seit används bara om handlingen fortfarande pågår!',
          'für anger planerad framtida varaktighet.',
          'Saknar dativändelsen -n på Tagen.',
        ],
      },
      {
        id: 'p06-q4',
        context: 'Framtida tid: om ... tid.',
        prompt: 'Hur säger man att tåget kommer om tio minuter?',
        options: [
          'Der Zug kommt in zehn Minuten an.',
          'Der Zug kommt um zehn Minuten an.',
          'Der Zug kommt nach zehn Minuten an.',
          'Der Zug kommt für zehn Minuten an.',
        ],
        answer: 0,
        explanation: 'in + dativ anger framtida tidsintervall (om tio minuter): in zehn Minuten.',
        feedback: [
          'Helt rätt! in zehn Minuten.',
          'um är för exakta klockslag (klockan tio).',
          'nach zehn Minuten betyder "efter tio minuter" i en berättelse.',
          'für anger varaktighet.',
        ],
      },
      {
        id: 'p06-q5',
        context: 'Årtal utan preposition.',
        prompt: 'Vilken mening uttrycker årtalet 2024 korrekt?',
        options: [
          '2024 sind wir nach Berlin gezogen. (eller: Im Jahr 2024...)',
          'In 2024 sind wir nach Berlin gezogen.',
          'Am 2024 sind wir nach Berlin gezogen.',
          'Um 2024 sind wir nach Berlin gezogen.',
        ],
        answer: 0,
        explanation: 'I tyskan anges årtal antingen helt utan preposition eller med "Im Jahr 2024". "In 2024" är ett engelskt fel.',
        feedback: [
          'Helt rätt! Årtal skrivs nakna eller med Im Jahr.',
          'Klassisk engelsk interferens! "In 2024" är felaktigt på tyska.',
          'am används bara för specifika datum.',
          'um 2024 betyder "omkring år 2024".',
        ],
      },
      {
        id: 'p06-q6',
        context: 'Undantaget för natten.',
        prompt: 'Vilket är det fasta uttrycket för "på natten"?',
        options: ['in der Nacht', 'am Nacht', 'im Nacht', 'um die Nacht'],
        answer: 0,
        explanation: 'Medan morgon, middag och kväll tar "am" (am Morgen, am Abend) tar natten undantagslöst "in der Nacht".',
        feedback: [
          'Helt rätt! in der Nacht är det fasta undantaget.',
          'am Nacht existerar inte.',
          'im Nacht är felaktigt.',
          'um die Nacht är fel.',
        ],
      },
    ],
  },

  // V03: Starka och blandade verb
  '/docs/verb/starka-och-blandade': {
    lessonId: 'V03',
    href: '/docs/verb/starka-och-blandade',
    title: 'Snabbkoll: Starka och blandade verb',
    questions: [
      {
        id: 'v03-q1',
        context: 'Vokalväxling för du och er.',
        prompt: 'För vilka personer sker vokalväxlingen i presens för ett starkt verb som "sprechen"?',
        options: [
          'Endast för 2:a och 3:e person singular: du (sprichst) och er/sie/es (spricht).',
          'För alla personer i singular och plural.',
          'Bara för ich.',
          'Endast i plural.',
        ],
        answer: 0,
        explanation: 'Vokalväxlingen i presens drabbar uteslutande du och er/sie/es: du sprichst, er spricht. ich spreche och ihr sprecht behåller grundvokalen e!',
        feedback: [
          'Helt rätt! Vokalväxling sker bara för du och er/sie/es.',
          'ich, wir, ihr och sie behåller grundstammen.',
          'ich har aldrig vokalväxling i presens.',
          'Pluralformerna har aldrig vokalväxling i presens.',
        ],
      },
      {
        id: 'v03-q2',
        context: 'Vokalväxling a -> ä.',
        prompt: 'Hur böjs verbet "fahren" i presens för "du"?',
        options: ['du fährst', 'du fahrst', 'du fahrt', 'du fähren'],
        answer: 0,
        explanation: 'Verbet fahren får omljud a -> ä i 2:a person singular: du fährst.',
        feedback: [
          'Helt rätt! du fährst med omljud.',
          'du fahrst saknar omljud och är felaktigt.',
          'fahrt är för ihr.',
          'fähren är fel form.',
        ],
      },
      {
        id: 'v03-q3',
        context: 'Vokalväxling e -> ie.',
        prompt: 'Hur böjs verbet "sehen" i presens för "er"?',
        options: ['er sieht', 'er seht', 'er siht', 'er sehet'],
        answer: 0,
        explanation: 'Långt e blir ie: er sieht.',
        feedback: [
          'Helt rätt! er sieht med ie.',
          'er seht saknar vokalväxling.',
          'siht är felstavat.',
          'sehet är föråldrat.',
        ],
      },
      {
        id: 'v03-q4',
        context: 'Kännetecken för starka verb i Partizip II.',
        prompt: 'Vilken ändelse har ett STARKT verb i Partizip II (supinum)?',
        options: ['-en (t.ex. gesungen, gefahren, geschrieben)', '-t (t.ex. gemacht, gekauft)', '-te', '-et'],
        answer: 0,
        explanation: 'Starka verb slutar alltid på -en i Partizip II: gesungen, gesehen, gefahren. Svaga verb slutar på -t: gemacht.',
        feedback: [
          'Helt rätt! Starka verb slutar på -en i Partizip II.',
          '-t är ändelsen för svaga verb.',
          '-te är preteritumändelse.',
          '-et är svag ändelse vid stam på -t.',
        ],
      },
      {
        id: 'v03-q5',
        context: 'Blandade verb som denken och bringen.',
        prompt: 'Vad kännetecknar "blandade verb" som denken och bringen?',
        options: [
          'De byter stamvokal (som starka verb) men tar svaga ändelser som -te och -t (dachte, gedacht).',
          'De kan bara användas i köket.',
          'De böjs helt utan ändelser.',
          'De kräver två subjekt.',
        ],
        answer: 0,
        explanation: 'Blandade verb blandar: vokalbyte (denken -> dachte) kombinerat med svaga ändelser (-te, -t: gedacht).',
        feedback: [
          'Helt rätt! Vokalbyte + svaga ändelser kännetecknar blandade verb.',
          'Skämtalternativ.',
          'De har ändelser.',
          'Alla finita verb har ett subjekt.',
        ],
      },
      {
        id: 'v03-q6',
        context: 'Specialfallet nehmen.',
        prompt: 'Hur stavas presens av verbet "nehmen" för subjektet "du"?',
        options: ['du nimmst (dubbel-m och vokalväxling till i)', 'du nehmst', 'du nehmt', 'du niehst'],
        answer: 0,
        explanation: 'nehmen byter till i och stammen får dubbel-m: du nimmst, er nimmt.',
        feedback: [
          'Helt rätt! du nimmst med dubbel-m.',
          'nehmst saknar vokalväxling och är felaktigt.',
          'nehmt är ihr-formen.',
          'niehst är fel.',
        ],
      },
    ],
  },

  // T01: Partizip II
  '/docs/tempus/particip-ii': {
    lessonId: 'T01',
    href: '/docs/tempus/particip-ii',
    title: 'Snabbkoll: Partizip II',
    questions: [
      {
        id: 't01-q1',
        context: 'Grundmönstret för svaga verb.',
        prompt: 'Vad är Partizip II av det regelbundna verbet "kaufen"?',
        options: ['gekauft', 'gekaufen', 'kaufte', 'gekaufet'],
        answer: 0,
        explanation: 'ge- + stam kauf- + -t = gekauft.',
        feedback: [
          'Helt rätt! ge-kauf-t.',
          'gekaufen har stark ändelse -en, men kaufen är svagt.',
          'kaufte är preteritum.',
          'Inget extra e behövs här.',
        ],
      },
      {
        id: 't01-q2',
        context: 'Verb som slutar på -ieren.',
        prompt: 'Hur bildas Partizip II av verbet "studieren"?',
        options: ['studiert (INGET ge- prefix!)', 'gestudiert', 'gestudieren', 'studierten'],
        answer: 0,
        explanation: 'Verb på -ieren får ALDRIG prefixet ge-: studiert, repariert, telefoniert.',
        feedback: [
          'Helt rätt! studiert utan ge-.',
          'gestudiert är ett mycket vanligt elevfel! Prefixet ge- ska bort.',
          'Felaktig form.',
          'Felaktig form.',
        ],
      },
      {
        id: 't01-q3',
        context: 'Oseparerbara prefix (be-, ver-, etc.).',
        prompt: 'Vad är Partizip II av verbet "bezahlen"?',
        options: ['bezahlt (INGET ge-!)', 'gebezahlt', 'begezahlt', 'bezahlen'],
        answer: 0,
        explanation: 'Oseparerbara prefix (be-, ver-, etc.) tar ALDRIG ge-: bezahlt, verstanden.',
        feedback: [
          'Helt rätt! bezahlt utan ge-.',
          'gebezahlt är felaktigt.',
          'begezahlt är felaktigt.',
          'bezahlen är infinitiven.',
        ],
      },
      {
        id: 't01-q4',
        context: 'Separerbara verb i Partizip II.',
        prompt: 'Var placeras "ge-" i ett separerbart verb som "aufstehen"?',
        options: ['Mitt emellan partikeln och stammen: auf-ge-standen', 'Allra först: geaufstanden', 'Allra sist: aufstandenge', 'Det tas bort helt'],
        answer: 0,
        explanation: 'I separerbara verb kilas ge- in i mitten: auf-ge-standen, ein-ge-kauft.',
        feedback: [
          'Helt rätt! auf-ge-standen.',
          'ge- kan inte stå före partikeln här.',
          'ge- står aldrig sist.',
          'ge- tas inte bort för vanliga separerbara verb.',
        ],
      },
      {
        id: 't01-q5',
        context: 'Stam på -d eller -t: bindevokal.',
        prompt: 'Vad är Partizip II av verbet "warten"?',
        options: ['gewartet (med bindevokal -et)', 'gewartt', 'gewarten', 'gewart'],
        answer: 0,
        explanation: 'När stammen slutar på -t eller -d läggs -et till: ge-wart-et, ge-arbeit-et.',
        feedback: [
          'Helt rätt! gewartet med bindevokal.',
          'gewartt är omöjligt att uttala.',
          'warten är svagt och får inte -en.',
          'Saknar ändelse.',
        ],
      },
      {
        id: 't01-q6',
        context: 'Starka verb i Partizip II.',
        prompt: 'Vad är Partizip II av det starka verbet "schreiben"?',
        options: ['geschrieben', 'geschreibt', 'geschriebt', 'geschreipt'],
        answer: 0,
        explanation: 'schreiben -> schrieb -> geschrieben med avljud ie och ändelsen -en.',
        feedback: [
          'Helt rätt! geschrieben.',
          'geschreibt har svag ändelse -t, men schreiben är starkt.',
          'Felaktig form.',
          'Felaktig form.',
        ],
      },
    ],
  },

  // T02: Perfekt med haben och sein
  '/docs/tempus/perfekt': {
    lessonId: 'T02',
    href: '/docs/tempus/perfekt',
    title: 'Snabbkoll: Perfekt med haben och sein',
    questions: [
      {
        id: 't02-q1',
        context: 'Rörelseverb med platsbyte: sein.',
        prompt: 'Välj rätt hjälpverb: "Wir ___ nach Hamburg gefahren."',
        options: ['sind', 'haben', 'werden', 'hatten'],
        answer: 0,
        explanation: 'fahren innebär en förflyttning från A till B och kräver därför hjälpverbet "sein": Wir sind gefahren.',
        feedback: [
          'Helt rätt! Rörelse från A till B kräver sein: Wir sind gefahren.',
          'haben används inte för förflyttning utan direkt objekt.',
          'werden bildar passiv eller futurum, inte perfekt.',
          'hatten är pluskvamperfekt.',
        ],
      },
      {
        id: 't02-q2',
        context: 'Verb med ackusativobjekt: haben.',
        prompt: 'Välj rätt hjälpverb: "Ich ___ gestern ein neues Auto gekauft."',
        options: ['habe', 'bin', 'werde', 'sei'],
        answer: 0,
        explanation: 'kaufen har ett direkt ackusativobjekt (ein neues Auto) och tar alltid "haben": Ich habe gekauft.',
        feedback: [
          'Helt rätt! Transitiva verb tar alltid haben: Ich habe gekauft.',
          'bin är fel här.',
          'werde är futurum.',
          'sei är konjunktiv.',
        ],
      },
      {
        id: 't02-q3',
        context: 'Tillståndsförändring: sein.',
        prompt: 'Välj rätt hjälpverb: "Das Baby ___ sofort eingeschlafen."',
        options: ['ist', 'hat', 'wird', 'wäre'],
        answer: 0,
        explanation: 'einschlafen (somna) innebär en förändring från vaket till sovande tillstånd och tar därför "sein": ist eingeschlafen.',
        feedback: [
          'Helt rätt! Tillståndsförändring kräver sein: ist eingeschlafen.',
          'hat är felaktigt.',
          'wird är presens/futurum.',
          'wäre är konjunktiv.',
        ],
      },
      {
        id: 't02-q4',
        context: 'Undantaget bleiben: sein.',
        prompt: 'Välj rätt hjälpverb: "Er ___ den ganzen Tag zu Hause geblieben."',
        options: ['ist', 'hat', 'hatte', 'wurde'],
        answer: 0,
        explanation: 'bleiben (stanna kvar) är ett fast undantag som alltid bildar perfekt med "sein": ist geblieben.',
        feedback: [
          'Helt rätt! bleiben tar alltid sein: ist geblieben.',
          'Klassisk fälla! Trots att man inte rör sig tar bleiben alltid sein.',
          'hatte är preteritum/pluskvamperfekt.',
          'wurde är preteritum av werden.',
        ],
      },
      {
        id: 't02-q5',
        context: 'Undantaget sein: sein.',
        prompt: 'Välj rätt hjälpverb: "Wo ___ du gestern Abend gewesen?"',
        options: ['bist', 'hast', 'hattst', 'werdest'],
        answer: 0,
        explanation: 'Verbet sein bildar perfekt med sig självt: "bist gewesen" (har varit).',
        feedback: [
          'Helt rätt! sein tar sein: bist gewesen.',
          'hast gewesen är grovt felaktigt på tyska.',
          'hattst finns inte.',
          'werdest är fel.',
        ],
      },
      {
        id: 't02-q6',
        context: 'Placering av Partizip II.',
        prompt: 'Var står Partizip II i en tysk påståendesats i perfekt?',
        options: [
          'Allra sist i huvudsatsen (Ich habe gestern ein Buch GEKAUFT).',
          'Direkt efter subjektet.',
          'På position 2 tillsammans med hjälpverbet.',
          'Allra först i satsen.',
        ],
        answer: 0,
        explanation: 'Hjälpverbet står på position 2 medan Partizip II avslutar satsramen längst bak.',
        feedback: [
          'Helt rätt! Partizip II står orubbligt sist i huvudsatsen.',
          'Subjektet står på plats 1 eller 3.',
          'Verben hålls inte ihop på plats 2.',
          'Det står inte först.',
        ],
      },
    ],
  },

  // T03: Präteritum
  '/docs/tempus/preteritum': {
    lessonId: 'T03',
    href: '/docs/tempus/preteritum',
    title: 'Snabbkoll: Präteritum',
    questions: [
      {
        id: 't03-q1',
        context: '1:a och 3:e person singular är identiska i preteritum.',
        prompt: 'Vilken är formen för "er" i preteritum av verbet "machen"?',
        options: ['er machte (identisk med ich machte)', 'er machtet', 'er machteet', 'er gemachte'],
        answer: 0,
        explanation: 'I preteritum har 1:a och 3:e person singular ALLTID exakt samma form utan extra personändelse: ich machte, er machte.',
        feedback: [
          'Helt rätt! ich machte och er machte är helt identiska.',
          'machtet är för ihr.',
          'Felaktig form.',
          'ge- används i Partizip II, inte i preteritum!',
        ],
      },
      {
        id: 't03-q2',
        context: 'sein i preteritum: war.',
        prompt: 'Hur säger man naturligt i talspråk: "Jag var i Berlin igår"?',
        options: ['Ich war gestern in Berlin.', 'Ich bin gestern in Berlin gewesen.', 'Ich warte gestern in Berlin.', 'Ich gewar gestern in Berlin.'],
        answer: 0,
        explanation: 'För verbet sein är formen "war" normen även i vardagligt talspråk.',
        feedback: [
          'Helt rätt! "Ich war" är det absolut mest naturliga och vanliga uttrycket.',
          'Möjligt grammatiskt men klumpigt och onaturligt i vardagssamtal.',
          'warte betyder väntade.',
          'gewar existerar inte.',
        ],
      },
      {
        id: 't03-q3',
        context: 'haben i preteritum: hatte.',
        prompt: 'Hur böjs "haben" i preteritum för "du"?',
        options: ['du hattest', 'du hast', 'du habtest', 'du hattet'],
        answer: 0,
        explanation: 'haben heter hatte i preteritum: ich hatte, du hattest, er hatte.',
        feedback: [
          'Helt rätt! du hattest.',
          'du hast är presens.',
          'habtest existerar inte.',
          'hatt-et är för ihr.',
        ],
      },
      {
        id: 't03-q4',
        context: 'Modalverben tappar omljud i preteritum.',
        prompt: 'Vad är preteritum av modalverbet "können" för "er"?',
        options: ['er konnte (utan prickar!)', 'er könnte (med prickar)', 'er kannte', 'er gekonnt'],
        answer: 0,
        explanation: 'Modalverben tappar sina omljud i preteritum: konnte, musste, durfte. "könnte" med prickar är konjunktiv (skulle kunna)!',
        feedback: [
          'Helt rätt! konnte utan prickar = kunde (dåtid).',
          'Varning! "könnte" med prickar betyder "skulle kunna" (konjunktiv II), inte dåtid!',
          'kannte är av verbet kennen (känna någon).',
          'gekonnt är Partizip II.',
        ],
      },
      {
        id: 't03-q5',
        context: 'Starka verb i preteritum har ingen ändelse för er.',
        prompt: 'Vad är preteritum av det starka verbet "gehen" för "er"?',
        options: ['er ging (utan ändelse)', 'er gingte', 'er gingt', 'er geging'],
        answer: 0,
        explanation: 'Starka verb har ingen ändelse i 1:a och 3:e person singular: ich ging, er ging.',
        feedback: [
          'Helt rätt! er ging utan ändelse.',
          'gingte existerar inte — starka verb tar inte -te.',
          'gingt är för ihr.',
          'geging finns inte.',
        ],
      },
      {
        id: 't03-q6',
        context: 'När används preteritum kontra perfekt?',
        prompt: 'I vilket sammanhang möter du främst preteritum av vanliga verb (sagte, ging, kaufte)?',
        options: [
          'I berättande skrift, tidningar, sagor och officiella rapporter.',
          'När du beställer mat på restaurang.',
          'När du skickar ett snabbt sms till en kompis.',
          'Endast när man pratar med barn.',
        ],
        answer: 0,
        explanation: 'Präteritum är det litterära och journalistiska berättartempuset i tyska språket.',
        feedback: [
          'Helt rätt! Präteritum är skriftspråkets dominerande dåtidsform.',
          'I restaurang och vardagstal används perfekt.',
          'I sms används perfekt.',
          'Inte bara med barn.',
        ],
      },
    ],
  },

  '/docs/tempus/perfekt-eller-preteritum': {
      "lessonId": "T04",
      "href": "/docs/tempus/perfekt-eller-preteritum",
      "title": "Snabbkoll: Perfekt eller Präteritum?",
      "questions": [
          {
              "id": "t04-q1",
              "context": "Du berättar för en tysk kollega vid kaffemaskinen om vad du gjorde igår kväll.",
              "prompt": "Vilket tempus är det naturliga valet i ledigt talspråk?",
              "options": [
                  "Perfekt: \"Ich habe gestern einen Film gesehen.\"",
                  "Präteritum: \"Ich sah gestern einen Film.\"",
                  "Plusquamperfekt: \"Ich hatte einen Film gesehen.\"",
                  "Futur I: \"Ich werde einen Film sehen.\""
              ],
              "answer": 0,
              "explanation": "I tyskt talspråk och vardaglig konversation är Perfekt det självklara standardtempuset.",
              "feedback": [
                  "Helt rätt! Vardagligt talspråk använder Perfekt för avslutade dåtidshandlingar.",
                  "Präteritum (\"sah\") låter onaturligt stelt och bokligt i vanligt talspråk.",
                  "Plusquamperfekt markerar förtidighet, inte vanlig igår-handling.",
                  "Futur I är framtid."
              ]
          },
          {
              "id": "t04-q2",
              "context": "Hjälpverben sein och haben samt modalverben har en särställning.",
              "prompt": "Hur säger man oftast \"Jag var i Berlin och jag hade mycket roligt\" i talspråk?",
              "options": [
                  "Ich war in Berlin und ich hatte viel Spaß. (Präteritum)",
                  "Ich bin in Berlin gewesen und ich habe viel Spaß gehabt. (Perfekt)",
                  "Ich war in Berlin und ich habe viel Spaß gehabt. (Blandning)",
                  "Ich wäre in Berlin gewesen. (Konjunktiv)"
              ],
              "answer": 0,
              "explanation": "Verben sein, haben och modalverben föredras nästan alltid i Präteritum (war, hatte, konnte, musste), även i ledigt talspråk!",
              "feedback": [
                  "Helt rätt! \"war\" och \"hatte\" är mycket vanligare och smidigare än \"bin gewesen\" och \"habe gehabt\".",
                  "Formellt korrekt men onödigt klumpigt och mindre vanligt i talat språk.",
                  "Blandning är möjlig men att hålla båda i Präteritum (war/hatte) är renast.",
                  "Konjunktiv uttrycker overklighet, inte fakta."
              ]
          },
          {
              "id": "t04-q3",
              "context": "Du läser en artikel i Der Spiegel eller en tysk roman.",
              "prompt": "Vilket tempus dominerar i skriven berättande text och journalistik?",
              "options": [
                  "Präteritum (skriftspråkets tempus)",
                  "Perfekt",
                  "Presens endast",
                  "Konjunktiv I"
              ],
              "answer": 0,
              "explanation": "Präteritum är det dominerande tempus i tysk skönlitteratur, tidningstexter och formella rapporter.",
              "feedback": [
                  "Helt rätt! Skriven berättande prosa och nyhetsrapportering använder Präteritum.",
                  "Perfekt används i citat och dialog, men huvudberättelsen skrivs i Präteritum.",
                  "Presens förekommer som historiskt presens, men basen är Präteritum.",
                  "Konjunktiv I används bara för indirekt anföring."
              ]
          },
          {
              "id": "t04-q4",
              "context": "I södra Tyskland, Österrike och Schweiz finns en regional skillnad (\"Oberdeutscher Präteritumschwund\").",
              "prompt": "Vad innebär den sydtyska böjelsen i talspråk?",
              "options": [
                  "Perfekt används nästan uteslutande, även för verbet sein (\"Ich bin gewesen\").",
                  "Präteritum används mer än i norra Tyskland.",
                  "Man använder bara futurum.",
                  "Verbändelserna försvinner helt."
              ],
              "answer": 0,
              "explanation": "I södra språkområdet har Präteritum nästan helt försvunnit ur talspråket till förmån för Perfekt.",
              "feedback": [
                  "Helt rätt! I söder dominerar Perfekt ännu starkare än i norr.",
                  "Tvärtom: Präteritum i tal är vanligare i norr (Nordtyskland).",
                  "Futurum har inget med detta att göra.",
                  "Böjningsändelserna finns kvar."
              ]
          },
          {
              "id": "t04-q5",
              "context": "Jämför tyska med romanska språk som spanska (pretérito indefinido vs. imperfecto).",
              "prompt": "Finns det en grammatisk skillnad mellan avgränsad händelse och pågående bakgrund mellan Perfekt och Präteritum i tyskan?",
              "options": [
                  "Nej, tyska gör inte denna aspekt-skillnad; valet styrs av stil och medium (tal vs. skrift).",
                  "Ja, Perfekt är pågående och Präteritum är avslutat.",
                  "Ja, Präteritum får endast användas om handlingen varade i mer än ett år.",
                  "Ja, Perfekt kan aldrig användas med tidsangivelser."
              ],
              "answer": 0,
              "explanation": "I tyskan uttrycker Perfekt och Präteritum samma tidsliga aspekt: skillnaden handlar om medium (tal vs. skrift) och stil, inte aspekt!",
              "feedback": [
                  "Helt rätt! Blanda inte ihop tyskans tempus med spanskans eller franskans aspektmotsättningar.",
                  "Felaktigt: båda uttrycker dåtid, valet beror på register.",
                  "Tidslängd avgör ingenting.",
                  "Perfekt kombineras dagligen med igår, förra året, etc."
              ]
          },
          {
              "id": "t04-q6",
              "context": "Du skriver ett informellt mejl till en god vän i Tyskland.",
              "prompt": "Vilket tempus väljer du när du berättar om din helg?",
              "options": [
                  "Perfekt: \"Am Wochenende habe ich meine Großeltern besucht.\"",
                  "Präteritum: \"Am Wochenende besuchte ich meine Großeltern.\"",
                  "Plusquamperfekt: \"Am Wochenende hatte ich besucht.\"",
                  "Futur II: \"Ich werde besucht haben.\""
              ],
              "answer": 0,
              "explanation": "I personliga brev och mejl till vänner och familj används samma personliga ton som i talspråk: Perfekt!",
              "feedback": [
                  "Helt rätt! Personliga mejl följer talspråkets mönster med Perfekt.",
                  "Präteritum låter för formellt och distanserat i ett mejl till en vän.",
                  "Plusquamperfekt är dåtidens dåtid.",
                  "Futur II är fullbordad framtid."
              ]
          }
      ]
  },

  '/docs/tempus/pluskvamperfekt': {
      "lessonId": "T05",
      "href": "/docs/tempus/pluskvamperfekt",
      "title": "Snabbkoll: Plusquamperfekt",
      "questions": [
          {
              "id": "t05-q1",
              "context": "Plusquamperfekt bildas med formeln hjälpverb + Partizip II.",
              "prompt": "I vilken form står hjälpverbet i Plusquamperfekt?",
              "options": [
                  "I Präteritum (hatte eller war)",
                  "I Presens (habe eller bin)",
                  "I Konjunktiv II (hätte eller wäre)",
                  "I Infinitiv (haben eller sein)"
              ],
              "answer": 0,
              "explanation": "Plusquamperfekt kräver att hjälpverbet (haben/sein) står i preteritum: hatte eller war.",
              "feedback": [
                  "Helt rätt! hatte/war + particip ger Plusquamperfekt.",
                  "habe/bin + particip ger vanligt Perfekt.",
                  "hätte/wäre ger konjunktiv (skulle ha gjort).",
                  "Infinitiv bildar inte sammansatt tempus."
              ]
          },
          {
              "id": "t05-q2",
              "context": "Två handlingar i dåtiden: tåget avgick klockan 08:00, vi kom till stationen 08:05.",
              "prompt": "Vilken mening uttrycker detta korrekt?",
              "options": [
                  "Als wir am Bahnhof ankamen, war der Zug schon abgefahren.",
                  "Als wir am Bahnhof ankamen, ist der Zug schon abgefahren.",
                  "Nachdem der Zug abfuhr, waren wir am Bahnhof angekommen.",
                  "Der Zug fuhr ab, nachdem wir ankamen."
              ],
              "answer": 0,
              "explanation": "Tågets avgång inträffade FÖRE vår ankomst och uttrycks därför i Plusquamperfekt (war abgefahren).",
              "feedback": [
                  "Helt rätt! Förtidigheten markeras med Plusquamperfekt (war abgefahren).",
                  "Fel tempus: ist abgefahren är nutida perfekt, inte dåtidens dåtid.",
                  "Tidslogiken är omvänd.",
                  "Säger att tåget avgick efter att vi anlände."
              ]
          },
          {
              "id": "t05-q3",
              "context": "Böjning av verbet \"lesen\" i Plusquamperfekt för 3:e person plural (sie).",
              "prompt": "Vad är korrekt form för \"de hade läst\"?",
              "options": [
                  "sie hatten gelesen",
                  "sie waren gelesen",
                  "sie hattet gelesen",
                  "sie haben gelesen"
              ],
              "answer": 0,
              "explanation": "Lesen tar hjälpverbet haben: hatten gelesen.",
              "feedback": [
                  "Helt rätt! sie hatten gelesen.",
                  "Lesen tar haben, inte sein.",
                  "hattet är för ihr.",
                  "haben gelesen är vanligt perfekt."
              ]
          },
          {
              "id": "t05-q4",
              "context": "Tidsbindning med konjunktionen \"nachdem\" (efter att).",
              "prompt": "Vilken tidsföljd är korrekt med \"nachdem\" i dåtidsberättelse?",
              "options": [
                  "Nachdem-bisats i Plusquamperfekt, huvudsats i Präteritum.",
                  "Båda satserna i Presens.",
                  "Nachdem-bisats i Präteritum, huvudsats i Plusquamperfekt.",
                  "Båda satserna i Futur I."
              ],
              "answer": 0,
              "explanation": "Eftersom nachdem inleder handlingen som hände först (förtidighet), kräver den Plusquamperfekt.",
              "feedback": [
                  "Helt rätt! Nachdem + Plusquamperfekt ... Huvudsats i Präteritum.",
                  "Förtidighet i dåtid kräver dåtidsformer.",
                  "Det är bisatsen efter nachdem som hände först, inte huvudsatsen.",
                  "Futurum uttrycker framtid."
              ]
          },
          {
              "id": "t05-q5",
              "context": "Varning för omljud (prickar) i verbstammen!",
              "prompt": "Vad är skillnaden mellan \"hatte\" och \"hätte\"?",
              "options": [
                  "\"hatte\" är indikativ (faktisk dåtid: hade), \"hätte\" är konjunktiv (hypotes/önskan: skulle ha).",
                  "\"hatte\" är för plural, \"hätte\" för singular.",
                  "\"hätte\" är ett äldre stavsätt för samma sak.",
                  "\"hatte\" används bara i södra Tyskland."
              ],
              "answer": 0,
              "explanation": "hatte = hade (verklig händelse). hätte = skulle ha (hypotetiskt). Prickarna ändrar hela betydelsen!",
              "feedback": [
                  "Helt rätt! Omljudet förvandlar ren fakta till ett hypotetiskt önskemål.",
                  "Båda har singular- och pluralformer (ich hatte / wir hatten resp. ich hätte / wir hätten).",
                  "Det är två skilda grammatiska modus.",
                  "Båda används i hela det tyska språkområdet."
              ]
          },
          {
              "id": "t05-q6",
              "context": "Verbet \"aufstehen\" anger en förändring av tillstånd/position och tar sein.",
              "prompt": "Hur lyder \"Han hade redan gått upp\"?",
              "options": [
                  "Er war schon aufgestanden.",
                  "Er hatte schon aufgestanden.",
                  "Er wurde schon aufgestanden.",
                  "Er ist schon aufgestanden."
              ],
              "answer": 0,
              "explanation": "Aufstehen bildar sammansatta tempus med sein: er war aufgestanden.",
              "feedback": [
                  "Helt rätt! er war aufgestanden med hjälverbet sein i preteritum.",
                  "Aufstehen tar sein, aldrig haben.",
                  "wurde bildar passiv.",
                  "ist aufgestanden är Perfekt, inte Plusquamperfekt."
              ]
          }
      ]
  },

  '/docs/verb/infinitiv-med-och-utan-zu': {
      "lessonId": "V09",
      "href": "/docs/verb/infinitiv-med-och-utan-zu",
      "title": "Snabbkoll: Infinitiv med och utan zu",
      "questions": [
          {
              "id": "v09-q1",
              "context": "Efter modalverb som können, müssen, wollen, dürfen.",
              "prompt": "Används \"zu\" efter tyska modalverb?",
              "options": [
                  "Nej, modalverb tar ren infinitiv UTAN zu (\"Ich kann schwimmen\").",
                  "Ja, alltid (\"Ich kann zu schwimmen\").",
                  "Endast i dåtid.",
                  "Endast om meningen är en fråga."
              ],
              "answer": 0,
              "explanation": "Modalverben styr ren infinitiv utan partikeln zu.",
              "feedback": [
                  "Helt rätt! Modalverb tar alltid ren infinitiv utan zu.",
                  "Att sätta zu efter modalverb är ett grovt fel.",
                  "Tempus påverkar inte denna regel.",
                  "Frågeform ändrar inte infinitivkonstruktionen."
              ]
          },
          {
              "id": "v09-q2",
              "context": "Du använder uttrycket \"Lust haben\" (ha lust) följt av en handling.",
              "prompt": "Hur heter \"Jag har lust att gå på bio\"?",
              "options": [
                  "Ich habe Lust, ins Kino zu gehen.",
                  "Ich habe Lust, ins Kino gehen.",
                  "Ich habe Lust zu ins Kino gehen.",
                  "Ich habe Lust, gehe ins Kino."
              ],
              "answer": 0,
              "explanation": "Abstrakta substantiv som Lust, Zeit, Angst tar infinitiv med zu i slutet: zu gehen.",
              "feedback": [
                  "Helt rätt! Infinitiv med \"zu\" placeras sist: ins Kino zu gehen.",
                  "Det saknas \"zu\" framför verbet.",
                  "\"zu\" placeras direkt före det sista verbet, inte före substantivfrasen.",
                  "Meningen kräver en infinitivgrupp, inte två huvudsatser."
              ]
          },
          {
              "id": "v09-q3",
              "context": "Partikelverb (separerbara verb) i en infinitivfras med zu: t.ex. \"anrufen\" eller \"aufhören\".",
              "prompt": "Var placeras partikeln \"zu\" vid ett löst sammansatt verb?",
              "options": [
                  "Inskjutet mellan partikeln och verbstammen i ett enda ord: anzurufen, aufzuhören.",
                  "Före hela verbet som separat ord: zu anrufen.",
                  "Efter verbet: anrufen zu.",
                  "Man tar bort partikeln: zu rufen."
              ],
              "answer": 0,
              "explanation": "Vid separerbara verb kilas -zu- in i mitten: partikel + zu + stam + en = anzurufen.",
              "feedback": [
                  "Helt rätt! -zu- skjuts in i ett enda ord: aufzuhören, mitzubringen, anzurufen.",
                  "Skrivs inte som separat ord framför partikeln.",
                  "Skrivs aldrig efter.",
                  "Partikeln får absolut inte tas bort."
              ]
          },
          {
              "id": "v09-q4",
              "context": "De tre klassiska infinitivkonjunktionerna: um... zu, ohne... zu, anstatt... zu.",
              "prompt": "Vad betyder konstruktionen \"um ... zu + infinitiv\"?",
              "options": [
                  "\"för att\" (avsikt / ändamål)",
                  "\"utan att\"",
                  "\"i stället för att\"",
                  "\"klockan ...\""
              ],
              "answer": 0,
              "explanation": "um ... zu uttrycker avsikt och syfte: \"Ich lerne viel, um die Prüfung zu bestehen.\"",
              "feedback": [
                  "Helt rätt! \"um ... zu\" uttrycker syfte/avsikt (för att göra något).",
                  "\"utan att\" heter \"ohne ... zu\".",
                  "\"i stället för att\" heter \"(an)statt ... zu\".",
                  "\"um\" betyder klockan vid tidsangivelser, men med zu + infinitiv betyder det alltid \"för att\"."
              ]
          },
          {
              "id": "v09-q5",
              "context": "Sinnesverben (sehen, hören, spüren) samt verben lassen, gehen och bleiben.",
              "prompt": "Tar verbet \"hören\" (höra) ren infinitiv eller infinitiv med zu i \"Jag hör honom sjunga\"?",
              "options": [
                  "Ren infinitiv utan zu: \"Ich höre ihn singen.\"",
                  "Infinitiv med zu: \"Ich höre ihn zu singen.\"",
                  "Particip II: \"Ich höre ihn gesungen.\"",
                  "Presens bisats: \"Ich höre, dass er singen zu.\""
              ],
              "answer": 0,
              "explanation": "Sinnesverb och lassen tar ren infinitiv utan zu, precis som modalverb!",
              "feedback": [
                  "Helt rätt! Sinnesverb tar ren infinitiv utan zu: \"Ich höre ihn singen.\"",
                  "Hören tar aldrig zu i denna konstruktion.",
                  "Particip II ändrar betydelsen till fullbordad handling.",
                  "Konstruktionen är grammatiskt felaktig."
              ]
          },
          {
              "id": "v09-q6",
              "context": "Subjektregeln för \"um ... zu\": kan satsen användas om personerna är olika?",
              "prompt": "Kan man säga \"Ich helfe dir, um du die Prüfung bestehst\"?",
              "options": [
                  "Nej! När subjekten är olika måste man använda \"damit\" med en fullständig bisats: \"damit du die Prüfung bestehst\".",
                  "Ja, det är helt korrekt tyska.",
                  "Ja, men bara om man tar bort \"um\".",
                  "Ja, men bara i talspråk."
              ],
              "answer": 0,
              "explanation": "Infinitivfraser med um...zu kräver att båda satserna har SAMMA subjekt. Vid olika subjekt krävs damit!",
              "feedback": [
                  "Helt rätt! Olika subjekt kräver konjunktionen \"damit\" och böjt verb.",
                  "Det är ett vanligt fel bland svenskar.",
                  "Tar man bort um är det fortfarande felaktigt.",
                  "Det accepteras inte i talspråk heller."
              ]
          }
      ]
  },

  '/docs/satser/samordning': {
      "lessonId": "B01",
      "href": "/docs/satser/samordning",
      "title": "Snabbkoll: Und, aber, oder, denn, sondern",
      "questions": [
          {
              "id": "b01-q1",
              "context": "De fem samordnande konjunktionerna kallas ADUSO.",
              "prompt": "Vilken position har ADUSO-konjunktionerna i den efterföljande huvudsatsen?",
              "options": [
                  "Position 0 (nollposition) – de påverkar inte ordföljden alls.",
                  "Position 1 – de räknas som första satsled och kastar verbet direkt efter sig.",
                  "Sista positionen.",
                  "Position 2."
              ],
              "answer": 0,
              "explanation": "ADUSO står på position 0: efter konjunktionen följer subjekt på position 1 och böjt verb på position 2.",
              "feedback": [
                  "Helt rätt! Position 0 innebär att huvudsatsens normala ordföljd behålls helt.",
                  "De räknas inte som position 1 — därför sker ingen inversion.",
                  "Verbet sist gäller underordnade satser, inte ADUSO.",
                  "På position 2 står alltid det finita verbet."
              ]
          },
          {
              "id": "b01-q2",
              "context": "Meningen har en negation i första ledet: \"Das ist nicht Tee, ___ Kaffee.\"",
              "prompt": "Vilket ord ska fyllas i: aber eller sondern?",
              "options": [
                  "sondern (ersätter och rättar till efter en negation)",
                  "aber",
                  "denn",
                  "oder"
              ],
              "answer": 0,
              "explanation": "Efter en negation (nicht/kein) används sondern för att ange vad som gäller i stället (utan/i stället).",
              "feedback": [
                  "Helt rätt! \"sondern\" kräver en negation i första satsen och rättar till påståendet.",
                  "\"aber\" används vid kontrast utan att upphäva det föregående.",
                  "\"denn\" anger orsak (ty/eftersom).",
                  "\"oder\" betyder eller."
              ]
          },
          {
              "id": "b01-q3",
              "context": "Jämför orsakskonjunktionerna \"denn\" och \"weil\".",
              "prompt": "Vad händer med verbet efter \"denn\"?",
              "options": [
                  "Verbet står på vanlig plats 2: \"denn ich BIN müde.\"",
                  "Verbet flyttas till slutet: \"denn ich müde BIN.\"",
                  "Verbet står på plats 1: \"denn BIN ich müde.\"",
                  "Verbet försvinner helt."
              ],
              "answer": 0,
              "explanation": "Denn är en samordnande konjunktion (ADUSO) med position 0; verbet står på plats 2.",
              "feedback": [
                  "Helt rätt! denn har position 0, subjektet plats 1, verbet plats 2.",
                  "Verbet sist gäller \"weil\", inte \"denn\"!",
                  "Inversion sker inte efter denn.",
                  "Verbet måste alltid finnas med."
              ]
          },
          {
              "id": "b01-q4",
              "context": "Undersök meningen: \"Er ist sehr müde, aber er arbeitet weiter.\"",
              "prompt": "Varför står \"er\" före \"arbeitet\"?",
              "options": [
                  "Eftersom \"aber\" har position 0, och satsen börjar med subjektet på position 1.",
                  "Eftersom verbet alltid står sist.",
                  "Det är ett tryckfel, det borde heta \"arbeitet er\".",
                  "På grund av att müde styr ordföljden."
              ],
              "answer": 0,
              "explanation": "Efter aber (position 0) kommer subjektet er (position 1) och det finita verbet arbeitet (position 2).",
              "feedback": [
                  "Helt rätt! Normal huvudsatsordföljd bevaras efter aber.",
                  "Verbet sist gäller bisatser.",
                  "Nej, \"arbeitet er\" efter aber vore ett grovt ordföljdsfel.",
                  "Adjektivet i föregående sats påverkar inte nästa huvudsats."
              ]
          },
          {
              "id": "b01-q5",
              "context": "Två huvudsatser med samma subjekt binds ihop med \"und\".",
              "prompt": "Vad kan man göra med subjektet i den andra satsen?",
              "options": [
                  "Man kan utelämna det för att undvika upprepning: \"Er kam nach Hause und aß zu Abend.\"",
                  "Man måste alltid upprepa det.",
                  "Man måste ersätta det med \"man\".",
                  "Verbet måste stå i passiv."
              ],
              "answer": 0,
              "explanation": "Vid samordning med und och oder kan ett identiskt subjekt strykas i andra ledet.",
              "feedback": [
                  "Helt rätt! Subjektet kan strykas vid samma subjekt i båda leden.",
                  "Det är fullt tillåtet (och stilistiskt snyggt) att utelämna det.",
                  "\"man\" ändrar betydelsen till opersonligt.",
                  "Passiv krävs inte."
              ]
          },
          {
              "id": "b01-q6",
              "context": "Välj rätt konjunktion för meningen: \"Ich würde gern mitkommen, ___ ich habe keine Zeit.\"",
              "prompt": "Vilket bindeord passar bäst?",
              "options": [
                  "aber (men / dock)",
                  "sondern",
                  "denn",
                  "oder"
              ],
              "answer": 0,
              "explanation": "Här uttrycks en inskränkning/kontrast utan föregående negation: \"aber ich habe keine Zeit\".",
              "feedback": [
                  "Helt rätt! \"aber\" uttrycker motsättning/inskränkning.",
                  "\"sondern\" kan inte användas eftersom första satsen inte är nekad.",
                  "\"denn\" skulle betyda \"ty/eftersom jag inte har tid\", vilket inte passar logiskt efter \"jag vill gärna följa med\".",
                  "\"oder\" betyder eller."
              ]
          }
      ]
  },

  '/docs/satser/underordning': {
      "lessonId": "B02",
      "href": "/docs/satser/underordning",
      "title": "Snabbkoll: Dass, ob, weil och bisatsinledare",
      "questions": [
          {
              "id": "b02-q1",
              "context": "Underordnande konjunktioner som dass, weil och ob kallas subjunktioner.",
              "prompt": "Vad är den grundläggande ordföljdsregeln i en tysk bisats?",
              "options": [
                  "Det böjda verbet hamnar allra sist i satsen.",
                  "Verbet står på andra plats precis som i en huvudsats.",
                  "Verbet står alltid först.",
                  "Objektet måste stå sist."
              ],
              "answer": 0,
              "explanation": "I tyska bisatser inledda med underordnande konjunktioner hamnar det finita (böjda) verbet allra sist!",
              "feedback": [
                  "Helt rätt! Verbet sist är bisatsens kardinalregel i tyskan.",
                  "Verb på andra plats gäller huvudsatser, inte underordnade bisatser.",
                  "Verb först gäller ja/nej-frågor och imperativ.",
                  "Det finita verbet står sist, inte objektet."
              ]
          },
          {
              "id": "b02-q2",
              "context": "Du vill säga på tyska: \"Jag vet inte om han kommer idag.\"",
              "prompt": "Vilket ord för \"om\" ska du välja?",
              "options": [
                  "ob (indirekt fråga / osäkerhet / huruvida)",
                  "wenn (villkor / ifall)",
                  "als",
                  "dass"
              ],
              "answer": 0,
              "explanation": "När \"om\" uttrycker osäkerhet eller en indirekt ja/nej-fråga (kan bytas mot \"huruvida\") heter det ob!",
              "feedback": [
                  "Helt rätt! \"Ich weiß nicht, ob er heute kommt.\"",
                  "\"wenn\" betyder villkor (ifall) eller vana/tid, inte osäkerhet i indirekt fråga.",
                  "\"als\" betyder när i dåtid.",
                  "\"dass\" betyder att."
              ]
          },
          {
              "id": "b02-q3",
              "context": "Du förklarar orsaken till att du är hemma: \"Ich bleibe im Bett, ___ ich krank bin.\"",
              "prompt": "Vilken konjunktion passar in i bisatsen med verbet bin sist?",
              "options": [
                  "weil (eftersom / därför att)",
                  "denn",
                  "aber",
                  "oder"
              ],
              "answer": 0,
              "explanation": "Weil skickar verbet till slutet (weil ich krank bin). Denn behåller verbet på plats 2 (denn ich bin krank).",
              "feedback": [
                  "Helt rätt! \"weil\" kastar verbet till slutet: weil ich krank bin.",
                  "\"denn\" kräver verbet på plats 2 (denn ich bin krank).",
                  "\"aber\" betyder men.",
                  "\"oder\" betyder eller."
              ]
          },
          {
              "id": "b02-q4",
              "context": "Interpunktion i tyska satser: hur avgränsas bisatser?",
              "prompt": "Måste man sätta kommatecken mellan huvudsats och bisats i tyska?",
              "options": [
                  "Ja, alltid! Kommatecken är obligatoriskt runt alla tyska bisatser.",
                  "Nej, kommatecken sätts aldrig i tysk syntax.",
                  "Bara om bisatsen är längre än tio ord.",
                  "Bara vid ordet dass."
              ],
              "answer": 0,
              "explanation": "I tysk grammatik är komma obligatoriskt mellan överordnad sats och bisats utan undantag!",
              "feedback": [
                  "Helt rätt! Komma är obligatoriskt vid alla tyska bisatsgränser.",
                  "Kommareglerna i tyskan är strikta och grammatiskt styrda.",
                  "Meningens längd spelar ingen roll.",
                  "Gäller alla subjunktioner, inte bara dass."
              ]
          },
          {
              "id": "b02-q5",
              "context": "Skillnaden mellan \"dass\" och \"das\".",
              "prompt": "Hur vet du om du ska skriva \"dass\" med två s?",
              "options": [
                  "Det är en konjunktion som betyder \"att\" och kan inte ersättas med dieses eller welches.",
                  "Det står alltid före ett substantiv.",
                  "Det är bara en modern stavning av artikeln das.",
                  "Det används bara efter frågetecken."
              ],
              "answer": 0,
              "explanation": "Konjunktionen dass (att) kan aldrig ersättas av dieses/welches. Artikeln/pronomenet das kan det däremot.",
              "feedback": [
                  "Helt rätt! dass = konjunktionen \"att\". Testa: kan du inte säga \"detta/vilket\", skriv dass!",
                  "Artikeln das står före substantiv, inte konjunktionen dass.",
                  "Det är två helt skilda ord med skild funktion.",
                  "Har inget med frågetecken att göra."
              ]
          },
          {
              "id": "b02-q6",
              "context": "Undersök meningen: \"Er geht spazieren, obwohl es stark regnet.\"",
              "prompt": "Vad betyder konjunktionen \"obwohl\"?",
              "options": [
                  "fastän / trots att",
                  "eftersom",
                  "så att",
                  "medan"
              ],
              "answer": 0,
              "explanation": "obwohl uttrycker en medgivande bisats (fastän / trots att).",
              "feedback": [
                  "Helt rätt! obwohl = fastän, trots att.",
                  "\"eftersom\" heter weil eller da.",
                  "\"så att\" heter sodass eller damit.",
                  "\"medan\" heter während."
              ]
          }
      ]
  },

  '/docs/satser/tidssatser': {
      "lessonId": "B05",
      "href": "/docs/satser/tidssatser",
      "title": "Snabbkoll: Als, wenn, wann, bevor, nachdem",
      "questions": [
          {
              "id": "b05-q1",
              "context": "En engångshändelse i det förflutna: \"___ ich zehn Jahre alt war, zogen wir nach Berlin.\"",
              "prompt": "Vilket ord för \"när\" är korrekt här?",
              "options": [
                  "Als (engångshändelse eller avgränsad period i dåtid)",
                  "Wenn",
                  "Wann"
              ],
              "answer": 0,
              "explanation": "För en enskild händelse eller avgränsad tidsepok i dåtid används alltid als.",
              "feedback": [
                  "Helt rätt! \"Als ich zehn Jahre alt war...\" Engångshändelse i dåtid.",
                  "\"wenn\" används för upprepade händelser i dåtid eller nutid/framtid.",
                  "\"wann\" är ett frågeord om klockslag/tidpunkt."
              ]
          },
          {
              "id": "b05-q2",
              "context": "En upprepad vana i dåtiden: \"Varje gång vi hälsade på morfar fick vi choklad.\"",
              "prompt": "Hur uttrycks \"varje gång när...\" på tyska?",
              "options": [
                  "(Immer) wenn wir den Großvater besuchten...",
                  "Als wir den Großvater besuchten...",
                  "Wann wir den Großvater besuchten...",
                  "Nach wir den Großvater besuchten..."
              ],
              "answer": 0,
              "explanation": "Vid upprepade händelser (\"varje gång när\") används (immer) wenn, även i dåtid!",
              "feedback": [
                  "Helt rätt! Upprepade tillfällen markeras med (immer) wenn.",
                  "\"als\" används endast för en enstaka dåtidshändelse.",
                  "\"wann\" är bara frågeord.",
                  "\"nach\" är en preposition och kan inte binda en sats (det heter nachdem)."
              ]
          },
          {
              "id": "b05-q3",
              "context": "Du ställer en fråga till receptionisten: \"Kan ni säga mig när frukosten börjar?\"",
              "prompt": "Vilket ord för \"när\" ska användas i frågan?",
              "options": [
                  "wann (frågeord för tidpunkt)",
                  "wenn",
                  "als",
                  "bevor"
              ],
              "answer": 0,
              "explanation": "Vid både direkta och indirekta frågor om klockslag och tidpunkt används alltid wann.",
              "feedback": [
                  "Helt rätt! \"Wann beginnt das Frühstück?\" är en tidsfråga och kräver wann.",
                  "wenn är ett villkors- eller tidsbindeord, inte frågeord.",
                  "als används för dåtidshändelser.",
                  "bevor betyder innan."
              ]
          },
          {
              "id": "b05-q4",
              "context": "Två handlingar i dåtid: \"Efter att han hade ätit, gick han till jobbet.\"",
              "prompt": "Vilken mening har korrekt konjunktion och tempusföljd?",
              "options": [
                  "Nachdem er gegessen hatte, ging er zur Arbeit.",
                  "Nachdem er aß, war er zur Arbeit gegangen.",
                  "Wenn er gegessen hat, ging er zur Arbeit.",
                  "Bevor er gegessen hatte, ging er zur Arbeit."
              ],
              "answer": 0,
              "explanation": "Nachdem kräver Plusquamperfekt för förtidigheten, följt av huvudsats i Präteritum.",
              "feedback": [
                  "Helt rätt! Nachdem + Plusquamperfekt (gegessen hatte) -> Präteritum (ging er).",
                  "Tidsformerna är felvända; det som hände först ska ha Plusquamperfekt.",
                  "Wenn med perfekt blandat med präteritum är felaktigt här.",
                  "Bevor betyder innan och vänder på innebörden."
              ]
          },
          {
              "id": "b05-q5",
              "context": "Du ska säga: \"Tvätta händerna innan du äter!\"",
              "prompt": "Vilket ord betyder \"innan / förrän\" som konjunktion?",
              "options": [
                  "bevor",
                  "vor",
                  "nachdem",
                  "während"
              ],
              "answer": 0,
              "explanation": "Konjunktionen som binder en bisats heter bevor (eller ehe). Vor är en preposition och styr dativ/ackusativ!",
              "feedback": [
                  "Helt rätt! \"Wasch dir die Hände, bevor du isst!\"",
                  "\"vor\" är en preposition (\"vor dem Essen\"), inte en bisatskonjunktion.",
                  "\"nachdem\" betyder efter att.",
                  "\"während\" betyder medan."
              ]
          },
          {
              "id": "b05-q6",
              "context": "Två handlingar sker samtidigt: \"Medan hon lagade mat, lyssnade han på radio.\"",
              "prompt": "Vilken konjunktion uttrycker samtidighet i tidssatsen?",
              "options": [
                  "Während (medan)",
                  "Nachdem",
                  "Als",
                  "Bis"
              ],
              "answer": 0,
              "explanation": "Während uttrycker att två skeenden pågår parallellt samtidigt.",
              "feedback": [
                  "Helt rätt! \"Während sie kochte, hörte er Radio.\"",
                  "Nachdem uttrycker att en sak sker efter en annan.",
                  "Als anger en specifik tidpunkt.",
                  "Bis betyder tills/till dess att."
              ]
          }
      ]
  },

  '/docs/kasus/genitiv': {
      "lessonId": "K05",
      "href": "/docs/kasus/genitiv",
      "title": "Snabbkoll: Genitiv",
      "questions": [
          {
              "id": "k05-q1",
              "context": "Hur böjs den bestämda artikeln i genitiv?",
              "prompt": "Vilka är de fyra bestämda artiklarna i ordningen maskulinum, neutrum, femininum, plural?",
              "options": [
                  "des, des, der, der",
                  "dem, dem, der, den",
                  "den, das, die, die",
                  "der, das, die, die"
              ],
              "answer": 0,
              "explanation": "I genitiv heter bestämd artikel: des (mask), des (neut), der (fem), der (plur).",
              "feedback": [
                  "Helt rätt! des, des, der, der är genitivens artiklar.",
                  "dem, dem, der, den är dativens artiklar.",
                  "den, das, die, die är ackusativ.",
                  "der, das, die, die är nominativ."
              ]
          },
          {
              "id": "k05-q2",
              "context": "Maskulina och neutrala substantiv i genitiv singular.",
              "prompt": "Vilken ändelse får maskulina och neutrala substantiv i genitiv?",
              "options": [
                  "-(e)s (t.ex. des Mannes, des Kindes)",
                  "-en",
                  "-er",
                  "Ingen ändelse alls"
              ],
              "answer": 0,
              "explanation": "Maskulina och neutrala ord får ändelsen -(e)s i genitiv. Feminina ord och plural får ingen ändelse.",
              "feedback": [
                  "Helt rätt! des Mannes, des Vaters, des Kindes.",
                  "-en är dativ plural eller svaga maskulina substantiv (n-deklination).",
                  "-er är genitivartikel på feminina ord, inte substantivändelse.",
                  "Feminina ord saknar ändelse, men maskulina/neutrala måste ha -(e)s."
              ]
          },
          {
              "id": "k05-q3",
              "context": "Uttryck \"mammans bok\" på korrekt tysk genitiv.",
              "prompt": "Vad heter \"mammans bok\" (die Mutter)?",
              "options": [
                  "das Buch der Mutter",
                  "das Buch des Mutters",
                  "das Buch der Mutters",
                  "das Buch von der Mutters"
              ],
              "answer": 0,
              "explanation": "Mutter är feminint (die Mutter -> der Mutter). Feminina substantiv får ALDRIG ett -s i genitiv!",
              "feedback": [
                  "Helt rätt! \"das Buch der Mutter\" – feminin genitiv med der och utan substantivändelse.",
                  "Mutter är inte maskulinum/neutrum, kan inte ta des.",
                  "Feminina ord får aldrig -s i genitiv på tyska!",
                  "Helt felaktig form."
              ]
          },
          {
              "id": "k05-q4",
              "context": "Vilket frågeord används för att fråga efter ägare i genitiv?",
              "prompt": "Hur säger man \"Vems jacka är det här?\"",
              "options": [
                  "Wessen Jacke ist das?",
                  "Wem Jacke ist das?",
                  "Wen Jacke ist das?",
                  "Wer Jacke ist das?"
              ],
              "answer": 0,
              "explanation": "Frågeordet för genitiv (Vems?) är wessen.",
              "feedback": [
                  "Helt rätt! Wessen = Vems.",
                  "Wem frågar efter dativ (Vem / Åt vem).",
                  "Wen frågar efter ackusativ (Vem / Vad).",
                  "Wer frågar efter nominativ (Vem)."
              ]
          },
          {
              "id": "k05-q5",
              "context": "Prepositionen \"wegen\" (på grund av) styr traditionellt genitiv.",
              "prompt": "Hur heter \"på grund av det dåliga vädret\" (das Wetter)?",
              "options": [
                  "wegen des schlechten Wetters",
                  "wegen dem schlechten Wetter",
                  "wegen das schlechte Wetter",
                  "wegen den schlechten Wetter"
              ],
              "answer": 0,
              "explanation": "I formell tyska och skriftspråk styr wegen genitiv: wegen des schlechten Wetters.",
              "feedback": [
                  "Helt rätt! Korrekt genitivattribut: wegen des schlechten Wetters.",
                  "Dativ hörs i talspråk (\"Der Dativ ist dem Genitiv sein Tod\"), men genitiv är det formellt korrekta.",
                  "Ackusativ är felaktigt.",
                  "den är maskulin ackusativ."
              ]
          },
          {
              "id": "k05-q6",
              "context": "Ersättning av genitiv i vardagligt talspråk.",
              "prompt": "Hur uttrycks ofta \"min brors bil\" i ledigt talspråk när genitiven undviks?",
              "options": [
                  "das Auto von meinem Bruder (von + dativ)",
                  "das Auto zu meinem Bruder",
                  "das Auto für meinem Bruder",
                  "das Auto bei meinem Bruder"
              ],
              "answer": 0,
              "explanation": "I talspråk ersätts genitiv ofta med konstruktionen von + Dativ.",
              "feedback": [
                  "Helt rätt! \"von meinem Bruder\" är talspråkets vanliga ersättningsform.",
                  "\"zu\" uttrycker riktning mot en person, inte ägande.",
                  "\"für\" styr ackusativ och betyder för.",
                  "\"bei\" betyder hos."
              ]
          }
      ]
  },

  '/docs/pronomen/relativa-former': {
      "lessonId": "R08",
      "href": "/docs/pronomen/relativa-former",
      "title": "Snabbkoll: Relativpronomenets former",
      "questions": [
          {
              "id": "r08-q1",
              "context": "De flesta relativpronomen är identiska med den bestämda artikeln.",
              "prompt": "Vilka är de fyra specialformerna som AVVIKER från de vanliga artiklarna?",
              "options": [
                  "Genitiv: dessen, dessen, deren, deren samt Dativ plural: denen.",
                  "Det finns inga avvikelser; alla former är exakt som der, die, das.",
                  "Alla ackusativformer slutar på -en.",
                  "Nominativ neutrum heter \"des\"."
              ],
              "answer": 0,
              "explanation": "Avvikelserna är genitivformerna (dessen/deren) och dativ plural (denen istället för den).",
              "feedback": [
                  "Helt rätt! Genitiv: dessen (m/n), deren (f/pl) samt dativ plural: denen!",
                  "Det finns 4 tydliga avvikelser som måste läras in.",
                  "Ackusativ neutrum är das och femininum die.",
                  "Nominativ neutrum heter das."
              ]
          },
          {
              "id": "r08-q2",
              "context": "Hur bestäms formen på ett relativpronomen?",
              "prompt": "Vilken är den gyllene tvåstegsregeln för relativpronomen?",
              "options": [
                  "Genus och numerus styrs av korrelatet (ordet i huvudsatsen); kasus styrs av pronomenets roll i bisatsen.",
                  "Kasuset styrs av huvudsatsens verb.",
                  "Formen är alltid densamma som subjektet i huvudsatsen.",
                  "Det väljs slumpmässigt efter tycke och smak."
              ],
              "answer": 0,
              "explanation": "Steg 1: Genus/numerus ärvs från korrelatet. Steg 2: Kasus avgörs av funktionen inuti relativsatsen!",
              "feedback": [
                  "Helt rätt! Genus och tal från korrelatet, kasus från den inre satsfunktionen.",
                  "Huvudsatsens verb styr bara sitt eget led, inte relativsatsens inre kasus.",
                  "Nej, relativpronomenet kan vara objekt eller prepositionsstyrt fast korrelatet var subjekt.",
                  "Grammatiken är strikt och regelbunden."
              ]
          },
          {
              "id": "r08-q3",
              "context": "Mannen som jag hjälpte: \"Der Mann, ___ ich geholfen habe, ist mein Nachbar.\"",
              "prompt": "Verbet \"helfen\" styr dativ. Vilket relativpronomen ska väljas?",
              "options": [
                  "dem (maskulinum singular i dativ)",
                  "den (maskulinum singular i ackusativ)",
                  "der (maskulinum singular i nominativ)",
                  "dessen"
              ],
              "answer": 0,
              "explanation": "Korrelatet är maskulint singular (der Mann). Eftersom helfen styr dativ krävs formen dem.",
              "feedback": [
                  "Helt rätt! \"dem ich geholfen habe\" – helfen styr dativ.",
                  "den vore ackusativ (t.ex. \"den ich gesehen habe\").",
                  "der vore nominativ (t.ex. \"der dort steht\").",
                  "dessen är genitiv (vars)."
              ]
          },
          {
              "id": "r08-q4",
              "context": "Översätt \"vars\": \"Kvinnan vars bil blev stulen heter Anna.\"",
              "prompt": "Vilket relativpronomen uttrycker genitiv för ett feminint korrelat (die Frau)?",
              "options": [
                  "deren",
                  "dessen",
                  "der",
                  "ihre"
              ],
              "answer": 0,
              "explanation": "Feminint och pluralt korrelat i genitiv heter deren (vars). Maskulint och neutralt heter dessen.",
              "feedback": [
                  "Helt rätt! \"Die Frau, deren Auto...\" Genitiv femininum heter deren.",
                  "dessen används för maskulint och neutralt korrelat.",
                  "der är bestämd artikel, inte genitivt relativpronomen.",
                  "ihre är ett possessivt pronomen och kan inte fungera som relativpronomen här."
              ]
          },
          {
              "id": "r08-q5",
              "context": "Dativ plural efter prepositionen mit: \"Die Kollegen, mit ___ ich arbeite...\"",
              "prompt": "Vilken är den korrekta formen för relativpronomenet i dativ plural?",
              "options": [
                  "denen (Obs! Inte \"den\")",
                  "den",
                  "deren",
                  "die"
              ],
              "answer": 0,
              "explanation": "I dativ plural heter relativpronomenet denen. Den vanliga bestämda artikeln heter den, men relativpronomenet har specialformen denen!",
              "feedback": [
                  "Helt rätt! \"mit denen ich arbeite\". Dativ plural heter alltid denen!",
                  "\"den\" är den vanliga artikeln, men relativpronomenet MÅSTE heta denen.",
                  "\"deren\" är genitiv plural.",
                  "\"die\" är nominativ/ackusativ plural."
              ]
          },
          {
              "id": "r08-q6",
              "context": "Skillnad mellan \"das\" och \"dass\".",
              "prompt": "I meningen \"Das Buch, ___ ich lese, ist spannend\" – vilket ord ska stå där?",
              "options": [
                  "das (relativpronomen med ett s, syftar på boken)",
                  "dass (konjunktion med dubbel-s)",
                  "dass eller das är valfritt",
                  "was"
              ],
              "answer": 0,
              "explanation": "Här syftar ordet på ett neutralt substantiv (das Buch = som). Då är det relativpronomenet das med ett s.",
              "feedback": [
                  "Helt rätt! \"das\" är relativpronomenet som syftar på das Buch.",
                  "\"dass\" är konjunktionen \"att\" och kan inte syfta på ett substantiv.",
                  "Det är absolut inte valfritt; det är två helt olika ordklasser.",
                  "\"was\" används efter alles/etwas/nichts, inte efter ett specifikt substantiv som das Buch."
              ]
          }
      ]
  },

  '/docs/satser/relativsatser': {
      "lessonId": "B04",
      "href": "/docs/satser/relativsatser",
      "title": "Snabbkoll: Bygg relativsatser",
      "questions": [
          {
              "id": "b04-q1",
              "context": "Var hamnar det finita verbet i en tysk relativsats?",
              "prompt": "Hur ser ordföljden ut inuti en relativsats?",
              "options": [
                  "Verbet hamnar allra sist, precis som i alla andra underordnade bisatser.",
                  "Verbet står på andra plats direkt efter relativpronomenet.",
                  "Verbet står först.",
                  "Placeringen är valfri."
              ],
              "answer": 0,
              "explanation": "En relativsats är en bisats, och därför ska det böjda (finita) verbet placeras allra sist.",
              "feedback": [
                  "Helt rätt! Relativsatser är bisatser och avslutas med det finita verbet.",
                  "Verb på andra plats gäller bara huvudsatser.",
                  "Verb först gäller bara ja/nej-frågor och uppmaningar.",
                  "Ordföljden i tyskan är aldrig slumpmässig."
              ]
          },
          {
              "id": "b04-q2",
              "context": "Kombination av preposition och relativpronomen: \"Staden där/i vilken jag bor\".",
              "prompt": "Hur placeras prepositionen i förhållande till relativpronomenet?",
              "options": [
                  "Prepositionen står direkt FÖRE relativpronomenet: \"die Stadt, in der ich wohne\".",
                  "Prepositionen står allra sist: \"die Stadt, die ich in wohne\".",
                  "Prepositionen utelämnas helt på tyska.",
                  "Prepositionen sätts före huvudsatsen."
              ],
              "answer": 0,
              "explanation": "Prepositionen placeras alltid omedelbart före sitt relativpronomen: in der, mit dem, für die.",
              "feedback": [
                  "Helt rätt! \"in der ich wohne\" – prepositionen står före relativpronomenet.",
                  "Att sätta prepositionen sist är ett engelskt mönster (\"the city I live in\") som är helt omöjligt i tyskan.",
                  "Prepositionen kan inte utelämnas utan att meningen tappar sin betydelse.",
                  "Prepositionen tillhör bisatsen och kan inte flyttas till huvudsatsen."
              ]
          },
          {
              "id": "b04-q3",
              "context": "Sammandragningar av preposition och artikel (im, ins, am, ans).",
              "prompt": "Får man dra ihop preposition och relativpronomen till \"im\" eller \"ins\"?",
              "options": [
                  "Nej, vid relativpronomen måste preposition och pronomen alltid skrivas isär: \"in dem\", \"in das\".",
                  "Ja, det är obligatoriskt att skriva \"im\" och \"ins\".",
                  "Endast i talspråk men aldrig i skrift.",
                  "Bara vid neutrum."
              ],
              "answer": 0,
              "explanation": "Relativpronomen dras ALDRIG samman med prepositionen: man skriver alltid \"in dem\" (inte im) och \"an das\" (inte ans).",
              "feedback": [
                  "Helt rätt! Skriv alltid isär: \"das Haus, in dem ich wohne\" (aldrig im).",
                  "Sammandragning är felaktig vid relativpronomen.",
                  "Inte ens i talspråk dras relativpronomen samman på detta sätt.",
                  "Gäller alla genus."
              ]
          },
          {
              "id": "b04-q4",
              "context": "Relativpronomenet \"was\" efter neutrala obestämda ord.",
              "prompt": "Vilket relativord ska användas efter orden \"alles\", \"etwas\" och \"nichts\"?",
              "options": [
                  "was (t.ex. \"alles, was ich weiß\")",
                  "das",
                  "dass",
                  "welches"
              ],
              "answer": 0,
              "explanation": "Efter obestämda pronomen som alles, etwas, nichts, vieles används alltid was som relativord.",
              "feedback": [
                  "Helt rätt! \"alles, was ich weiß\" – was är det obligatoriska relativordet här.",
                  "das används bara efter specifika substantiv med bestämd artikel.",
                  "dass är konjunktionen att.",
                  "welches används inte efter alles/etwas."
              ]
          },
          {
              "id": "b04-q5",
              "context": "Relativsats som syftar tillbaka på en hel föregående huvudsats.",
              "prompt": "Vilket relativord används när korrelatet är hela det tidigare påståendet (\"Han klarade provet, vilket gladde oss alla\")?",
              "options": [
                  "was (\"Er hat die Prüfung bestanden, was uns alle sehr freute.\")",
                  "das",
                  "dass",
                  "wie"
              ],
              "answer": 0,
              "explanation": "När relativsatsen refererar till hela föregående satsinnehåll används alltid was (motsvarande svenskans \"vilket\").",
              "feedback": [
                  "Helt rätt! \"was\" används för satskorrelat (när hela händelsen kommenteras).",
                  "das kräver ett neutralt substantivkorrelat.",
                  "dass är konjunktionen att.",
                  "wie betyder hur."
              ]
          },
          {
              "id": "b04-q6",
              "context": "Relativsats efter stadsnamn utan artikel: \"Berlin ist eine Stadt...\"",
              "prompt": "Vilket ord kan i ledigt språk användas som relativadverb för plats (\"staden där vi bor\")?",
              "options": [
                  "wo (\"die Stadt, wo wir wohnen\" eller \"in der wir wohnen\")",
                  "wann",
                  "daher",
                  "wohin"
              ],
              "answer": 0,
              "explanation": "wo kan fungera som ett relativt rumsadverb (där) efter ortnamn och platsord.",
              "feedback": [
                  "Helt rätt! wo eller in der fungerar utmärkt för platsangivelser.",
                  "wann anger tidpunkt, inte plats.",
                  "daher betyder därför/därifrån.",
                  "wohin anger riktning/mål (vart), inte befintlighet."
              ]
          }
      ]
  },


  '/docs/modus/modalverb': {
      "lessonId": "M01",
      "href": "/docs/modus/modalverb",
      "title": "Snabbkoll: Tyskans modalverb",
      "questions": [
          {
              "id": "m01-q1",
              "context": "Undersök presensböjningen för modalverben i 1:a och 3:e person singular.",
              "prompt": "Vad gäller för ändelserna i \"ich\" och \"er/sie/es\"?",
              "options": [
                  "De har ingen ändelse alls och är alltid helt identiska (ich kann / er kann).",
                  "ich slutar på -e och er slutar på -t.",
                  "Båda slutar på -en.",
                  "Det beror på vilket modalverb det gäller."
              ],
              "answer": 0,
              "explanation": "Alla tyska modalverb har nolländelse i 1:a och 3:e person singular: ich kann / er kann, ich muss / er muss, etc.",
              "feedback": [
                  "Helt rätt! 1:a och 3:e person singular är identiska och saknar ändelse.",
                  "Detta gäller vanliga verb (ich gehe, er geht), ALDRIG modalverb!",
                  "-en är pluraländelsen.",
                  "Regeln är absolut och gäller alla modalverb."
              ]
          },
          {
              "id": "m01-q2",
              "context": "Du vill be om lov att ställa en fråga under en föreläsning.",
              "prompt": "Hur säger du artigt \"Får jag fråga något?\"",
              "options": [
                  "Darf ich etwas fragen?",
                  "Bekomme ich etwas fragen?",
                  "Kann ich etwas fragen?",
                  "Muss ich etwas fragen?"
              ],
              "answer": 0,
              "explanation": "Att \"få lov / ha tillåtelse\" heter dürfen: Darf ich etwas fragen?",
              "feedback": [
                  "Helt rätt! dürfen = få lov / ha tillåtelse.",
                  "Bekomme betyder \"få en fysisk sak\", aldrig få lov!",
                  "kann frågar efter förmåga, inte tillåtelse.",
                  "muss betyder måste."
              ]
          },
          {
              "id": "m01-q3",
              "context": "En läkare säger: \"Sie dürfen hier nicht rauchen!\"",
              "prompt": "Vad betyder \"dürfen nicht\"?",
              "options": [
                  "Det är strikt förbjudet / ni får absolut inte röka här.",
                  "Ni behöver inte röka här om ni inte vill.",
                  "Ni bör kanske inte röka.",
                  "Ni kan inte röka för att tändstickor saknas."
              ],
              "answer": 0,
              "explanation": "nicht dürfen uttrycker strikt förbud (får inte). \"Behöver inte\" heter nicht müssen!",
              "feedback": [
                  "Helt rätt! nicht dürfen innebär ett absolut förbud.",
                  "\"Behöver inte\" heter nicht müssen (eller brauchen nicht).",
                  "Det är inte en rekommendation utan ett förbud.",
                  "Det handlar om regler, inte fysisk omöjlighet."
              ]
          },
          {
              "id": "m01-q4",
              "context": "Du vill beställa en kopp kaffe på ett kafé i Wien.",
              "prompt": "Vilken form av \"mögen\" används som det artiga uttrycket för \"jag skulle vilja ha\"?",
              "options": [
                  "Ich möchte einen Kaffee.",
                  "Ich mag einen Kaffee.",
                  "Ich will einen Kaffee.",
                  "Ich muss einen Kaffee."
              ],
              "answer": 0,
              "explanation": "möchte (ursprungligen konjunktiv av mögen) är det naturliga och artiga sättet att säga \"jag skulle vilja ha\".",
              "feedback": [
                  "Helt rätt! \"Ich möchte...\" är den självklara artighetsfrasen vid beställning.",
                  "Ich mag betyder \"jag gillar/tycker om kaffe\" rent allmänt.",
                  "Ich will (\"jag vill!\") låter barnsligt fordrande och oartigt på ett kafé.",
                  "Ich muss betyder jag måste."
              ]
          },
          {
              "id": "m01-q5",
              "context": "Modalverbet \"sollen\" i kontrast till \"wollen\".",
              "prompt": "Vad uttrycker \"sollen\" till skillnad från \"wollen\"?",
              "options": [
                  "\"sollen\" uttrycker att någon annan vill/kräver något (bör/ska enligt uppdrag), medan \"wollen\" är ens egen vilja.",
                  "\"sollen\" uttrycker ren framtid.",
                  "\"sollen\" och \"wollen\" är synonymer.",
                  "\"wollen\" uttrycker tvång från polisen."
              ],
              "answer": 0,
              "explanation": "sollen uttrycker en annans vilja, plikt eller ett uppdrag (\"Der Arzt sagt, ich soll...\"). wollen är subjektets egen vilja.",
              "feedback": [
                  "Helt rätt! sollen = någon annan kräver/rekommenderar; wollen = min egen vilja.",
                  "Ren framtid bildas med presens eller werden.",
                  "De är inte synonymer.",
                  "Polistvång uttrycks med müssen."
              ]
          },
          {
              "id": "m01-q6",
              "context": "Ordföljden i en huvudsats med modalverb: \"Jag vill lära mig tyska.\"",
              "prompt": "Var placeras huvudverbet (lernen)?",
              "options": [
                  "I ren infinitiv allra sist i huvudsatsen: \"Ich will Deutsch lernen.\"",
                  "Direkt efter modalverbet: \"Ich will lernen Deutsch.\"",
                  "Med ett tillagt zu: \"Ich will Deutsch zu lernen.\"",
                  "I böjd form: \"Ich will Deutsch lerne.\""
              ],
              "answer": 0,
              "explanation": "Huvudverbet placeras i ren infinitiv (utan zu) allra sist i huvudsatsens satsram.",
              "feedback": [
                  "Helt rätt! Satsramen placerar böjt modalverb på plats 2 och infinitiv sist.",
                  "Att sätta infinitiven direkt efter är svensk ordföljd och strider mot tysk satsram.",
                  "Modalverb tar aldrig \"zu\".",
                  "Bara modalverbet böjs; huvudverbet förblir infinitiv."
              ]
          }
      ]
  },

  '/docs/adjektiv/tre-anvandningar': {
      "lessonId": "A01",
      "href": "/docs/adjektiv/tre-anvandningar",
      "title": "Snabbkoll: Tre användningar av adjektiv",
      "questions": [
          {
              "id": "a01-q1",
              "context": "Ett adjektiv står efter verbet \"sein\": \"Das Auto ist schnell.\"",
              "prompt": "Vilken ändelse får adjektivet i predikativ ställning?",
              "options": [
                  "Ingen ändelse alls! Det står i ren grundform.",
                  "-es eftersom Auto är neutrum.",
                  "-e.",
                  "-t precis som på svenska (snabbt)."
              ],
              "answer": 0,
              "explanation": "Predikativa adjektiv (efter sein, werden, bleiben) får aldrig någon ändelse i tyskan!",
              "feedback": [
                  "Helt rätt! Predikativa adjektiv är alltid oböjda i grundform.",
                  "Det böjs inte efter sein oavsett substantivets genus.",
                  "Ingen -e-ändelse i predikativ position.",
                  "Tyskan lägger inte till något -t motsvarande svenskans \"huset är stort\"."
              ]
          },
          {
              "id": "a01-q2",
              "context": "Ett adjektiv beskriver ett verb (adverbiell användning): \"Sie singt schön.\"",
              "prompt": "Hur bildas adverb av vanliga adjektiv på tyska?",
              "options": [
                  "Man använder bara adjektivets rena grundform utan extra suffix.",
                  "Man lägger till ändelsen -lich.",
                  "Man lägger till ändelsen -ly precis som i engelskan.",
                  "Man måste alltid använda en omskrivning med \"auf eine Weise\"."
              ],
              "answer": 0,
              "explanation": "I tyskan används adjektivets grundform direkt som adverb: \"Er rennt schnell\", \"Sie singt schön\".",
              "feedback": [
                  "Helt rätt! Ingen ändelse krävs vid adverbiell användning.",
                  "-lich är ett ordbildningssuffix för nya ord (freundlich), inte ett adverbsuffix.",
                  "-ly finns inte i tyskan.",
                  "Omskrivning behövs inte alls."
              ]
          },
          {
              "id": "a01-q3",
              "context": "Undersök meningen: \"Die Blumen sind schön.\"",
              "prompt": "Varför slutar inte \"schön\" på -e eller -a när subjektet är i plural?",
              "options": [
                  "Eftersom predikativa adjektiv aldrig böjs i tyskan, inte ens i plural!",
                  "Eftersom Blumen är feminint i singular.",
                  "Det är ett undantag för ordet schön.",
                  "Det borde heta \"schöne\" men har förkortats."
              ],
              "answer": 0,
              "explanation": "Till skillnad från svenskan (\"blommorna är vackra\") böjs tyska predikativa adjektiv aldrig i plural.",
              "feedback": [
                  "Helt rätt! \"Die Blumen sind schön\" – nolländelse oavsett numerus.",
                  "Pluralformen är die Blumen oavsett grundgenus.",
                  "Det gäller alla tyska adjektiv, inget undantag.",
                  "Det är absolut inte förkortat; ändelse vore felaktigt."
              ]
          },
          {
              "id": "a01-q4",
              "context": "När MÅSTE ett adjektiv böjas i tyskan?",
              "prompt": "I vilken position kräver adjektivet alltid böjningsändelse?",
              "options": [
                  "När det står attributivt (direkt framför ett substantiv: \"ein schönes Auto\").",
                  "När det står sist i meningen.",
                  "När det följer efter verbet sein.",
                  "Endast i frågor."
              ],
              "answer": 0,
              "explanation": "Adjektiv böjs endast när de står attributivt före det substantiv som de beskriver.",
              "feedback": [
                  "Helt rätt! Attributiva adjektiv kräver alltid böjningsändelse.",
                  "Sist i meningen står ofta predikativa adjektiv, som är oböjda.",
                  "Efter sein är adjektivet predikativt och oböjt.",
                  "Frågesatser påverkar inte denna regel."
              ]
          },
          {
              "id": "a01-q5",
              "context": "Svensk-tysk jämförelse: \"Huset är stort.\"",
              "prompt": "Vad är den korrekta tyska översättningen?",
              "options": [
                  "Das Haus ist groß.",
                  "Das Haus ist großes.",
                  "Das Haus ist großt.",
                  "Das Haus ist große."
              ],
              "answer": 0,
              "explanation": "Predikativt: Das Haus ist groß. Svenskans -t på \"stort\" ska absolut inte överföras!",
              "feedback": [
                  "Helt rätt! Das Haus ist groß i ren grundform.",
                  "großes används bara attributivt: ein großes Haus.",
                  "großt existerar inte.",
                  "große används attributivt: das große Haus."
              ]
          },
          {
              "id": "a01-q6",
              "context": "I meningen \"Das schnelle Auto fährt sehr schnell\" förekommer ordet schnell två gånger.",
              "prompt": "Hur analyseras de två förekomsterna grammatiskt?",
              "options": [
                  "Det första är attributivt (och böjs med -e); det andra är adverbiellt (och är oböjt).",
                  "Båda är predikativa.",
                  "Båda är attributiva.",
                  "Det första är ett substantiv."
              ],
              "answer": 0,
              "explanation": "\"das schnelle Auto\" är attributivt före Auto. \"fährt schnell\" är adverbiellt och beskriver hur bilen kör.",
              "feedback": [
                  "Helt rätt! Perfekt illustration av skillnaden mellan attributiv och adverbiell ställning.",
                  "Inget av dem står efter sein/werden/bleiben.",
                  "Det andra beskriver verbet, inte ett substantiv.",
                  "Auto är substantivet, snabb är adjektiv."
              ]
          }
      ]
  },

  '/docs/adjektiv/svag-bojning': {
      "lessonId": "A02",
      "href": "/docs/adjektiv/svag-bojning",
      "title": "Snabbkoll: Svag adjektivböjning",
      "questions": [
          {
              "id": "a02-q1",
              "context": "Svag adjektivböjning används efter bestämd artikel (der, die, das).",
              "prompt": "Hur många olika ändelser finns det totalt i den svaga böjningstabellen?",
              "options": [
                  "Endast två: -e och -en.",
                  "Fyra: -er, -es, -e, -en.",
                  "Tre: -e, -er, -en.",
                  "Det finns en unik ändelse för varje enskilt kasus."
              ],
              "answer": 0,
              "explanation": "I den svaga adjektivböjningen finns endast två ändelser: -e och -en!",
              "feedback": [
                  "Helt rätt! Endast -e och -en förekommer i svag böjning.",
                  "-er och -es tillhör blandad och stark böjning.",
                  "-er förekommer inte i svag böjning.",
                  "Systemet är mycket mer koncentrerat än så."
              ]
          },
          {
              "id": "a02-q2",
              "context": "Undersök den så kallade \"femhörningen\" för ändelsen -e.",
              "prompt": "I vilka fem positioner slutar adjektivet på -e?",
              "options": [
                  "Nominativ singular (m, f, n) samt Ackusativ femininum och neutrum.",
                  "Hela nominativen och hela dativen.",
                  "Endast i maskulinum nominativ och ackusativ.",
                  "I hela pluralen."
              ],
              "answer": 0,
              "explanation": "Ändelsen -e finns bara i nominativ singular (der/die/das) samt ackusativ femininum (die) och neutrum (das).",
              "feedback": [
                  "Helt rätt! De fem -e-formerna bildar en tydlig femhörning i tabellen.",
                  "Dativ har alltid -en.",
                  "Maskulin ackusativ har -en (den neuen Wagen).",
                  "Plural har alltid -en."
              ]
          },
          {
              "id": "a02-q3",
              "context": "Adjektiv efter bestämd artikel i dativ: \"mit dem ___ Mann\" (alt).",
              "prompt": "Vilken är den korrekta formen?",
              "options": [
                  "mit dem alten Mann (-en)",
                  "mit dem altem Mann",
                  "mit dem alter Mann",
                  "mit dem alte Mann"
              ],
              "answer": 0,
              "explanation": "I dativ har den svaga adjektivböjningen ALLTID ändelsen -en: dem alten Mann.",
              "feedback": [
                  "Helt rätt! Hela dativen slutar på -en i svag böjning.",
                  "-em sitter redan på artikeln \"dem\", adjektivet dubblerar det inte.",
                  "-er är genitiv/dativ feminin i stark böjning.",
                  "-e förekommer aldrig i dativ."
              ]
          },
          {
              "id": "a02-q4",
              "context": "Plural efter bestämd artikel: \"die ___ Bücher\" (neu).",
              "prompt": "Vilken ändelse får adjektivet i plural efter bestämd artikel?",
              "options": [
                  "-en: \"die neuen Bücher\"",
                  "-e: \"die neue Bücher\"",
                  "-er: \"die neuer Bücher\"",
                  "ingen ändelse"
              ],
              "answer": 0,
              "explanation": "I plural får adjektivet ALLTID ändelsen -en efter bestämd artikel: die neuen Bücher.",
              "feedback": [
                  "Helt rätt! Alla pluralformer i svag böjning slutar på -en.",
                  "die neue Bücher är ett mycket vanligt svenskt felskrivningsfel (påverkan från svenskans -a).",
                  "-er är komparativ eller stark genitiv plural.",
                  "Attributiva adjektiv måste ha ändelse."
              ]
          },
          {
              "id": "a02-q5",
              "context": "Ord som fungerar precis som \"der, die, das\" kallas der-ord.",
              "prompt": "Vilket av följande ord utlöser svag adjektivböjning?",
              "options": [
                  "dieser / diese / dieses (denna/detta)",
                  "mein / meine / mein",
                  "ein / eine / ein",
                  "kein / keine / kein"
              ],
              "answer": 0,
              "explanation": "dieser, jeder, welcher, alle är der-ord och utlöser svag böjning. mein/ein/kein utlöser blandad böjning!",
              "feedback": [
                  "Helt rätt! dieser är ett der-ord och följer svag adjektivböjning.",
                  "mein är ett possessivt ord (blandad böjning).",
                  "ein är obestämd artikel (blandad böjning).",
                  "kein följer blandad böjning."
              ]
          },
          {
              "id": "a02-q6",
              "context": "Ackusativ maskulinum efter bestämd artikel: \"Jag ser den gamle mannen.\"",
              "prompt": "Vad heter frasen på tyska?",
              "options": [
                  "Ich sehe den alten Mann.",
                  "Ich sehe den alter Mann.",
                  "Ich sehe den alte Mann.",
                  "Ich sehe den altem Mann."
              ],
              "answer": 0,
              "explanation": "Maskulin ackusativ: artikeln heter den och adjektivet får -en (den alten Mann).",
              "feedback": [
                  "Helt rätt! den alten Mann.",
                  "alter är nominativ i stark böjning.",
                  "alte är bara nominativ i svag böjning.",
                  "altem är dativ."
              ]
          }
      ]
  },

  '/docs/adjektiv/stark-bojning': {
      "lessonId": "A04",
      "href": "/docs/adjektiv/stark-bojning",
      "title": "Snabbkoll: Stark adjektivböjning",
      "questions": [
          {
              "id": "a04-q1",
              "context": "När används stark adjektivböjning?",
              "prompt": "I vilket fall måste ett adjektiv böjas starkt?",
              "options": [
                  "När substantivet saknar artikel (nollartikel), t.ex. \"guter Wein\", \"frische Milch\".",
                  "Efter bestämd artikel (der, die, das).",
                  "Efter obestämd artikel (ein, eine).",
                  "Endast när adjektivet är ett starkt verb."
              ],
              "answer": 0,
              "explanation": "Stark adjektivböjning inträder vid nollartikel: adjektivet måste själv visa kasus och genus.",
              "feedback": [
                  "Helt rätt! Stark böjning används vid nollartikel.",
                  "Efter der/die/das används svag böjning.",
                  "Efter ein/eine används blandad böjning.",
                  "Adjektiv är inte verb."
              ]
          },
          {
              "id": "a04-q2",
              "context": "Vilka ändelser lånar det starkt böjda adjektivet?",
              "prompt": "Vad är den generella grundregeln för de starka ändelserna?",
              "options": [
                  "Adjektivet övertar den bestämda artikelns ändelser (der -> -er, das -> -es, dem -> -em etc.).",
                  "Alla adjektiv slutar på -en.",
                  "Alla adjektiv slutar på -e.",
                  "Ändelserna är desamma som personändelserna på verb."
              ],
              "answer": 0,
              "explanation": "Stark adjektivböjning kopierar den bestämda artikelns ändelser nästan rakt av.",
              "feedback": [
                  "Helt rätt! Adjektivet agerar ställföreträdande artikel och tar dess ändelser.",
                  "-en överallt är en förenkling av dativ/genitiv i svag böjning.",
                  "-e gäller bara femininum och plural i nominativ/ackusativ.",
                  "Verbändelser har inget med detta att göra."
              ]
          },
          {
              "id": "a04-q3",
              "context": "Det berömda undantaget i maskulin och neutral genitiv.",
              "prompt": "Vad slutar adjektivet på i frasen \"trots gott vin\" (der Wein -> des Weines)?",
              "options": [
                  "trotz gut-EN Weines (Obs! -en, inte -es!)",
                  "trotz gut-ES Weines",
                  "trotz gut-EM Weines",
                  "trotz gut-ER Weines"
              ],
              "answer": 0,
              "explanation": "Eftersom substantivet självt redan slutar på -(e)s (Weines) får adjektivet ändelsen -en för att undvika dubbel-s!",
              "feedback": [
                  "Helt rätt! Undantaget i maskulin/neutral genitiv ger -en (guten Weines).",
                  "gutes Weines är ett klassiskt fel; två -es efter varandra undviks.",
                  "gutem är dativ.",
                  "guter är feminin genitiv."
              ]
          },
          {
              "id": "a04-q4",
              "context": "Dativ maskulinum utan artikel: \"med gott kaffe\" (der Kaffee).",
              "prompt": "Vilken ändelse ska \"gut\" ha efter prepositionen mit (dativ)?",
              "options": [
                  "mit gutem Kaffee (-em precis som i \"dem\")",
                  "mit guten Kaffee",
                  "mit guter Kaffee",
                  "mit gutes Kaffee"
              ],
              "answer": 0,
              "explanation": "Dativ maskulinum av bestämd artikel är dem -> stark ändelse på adjektivet blir -em: mit gutem Kaffee.",
              "feedback": [
                  "Helt rätt! mit gutem Kaffee – -em signalerar maskulin dativ.",
                  "guten vore svag böjning efter en artikel.",
                  "guter är feminin dativ.",
                  "gutes är neutrum nominativ/ackusativ."
              ]
          },
          {
              "id": "a04-q5",
              "context": "Mängdord i plural: viele, wenige, einige, mehrere.",
              "prompt": "Vilken ändelse får adjektivet i nominativ plural efter ordet \"viele\"?",
              "options": [
                  "-e: \"viele neue Freunde\"",
                  "-en: \"viele neuen Freunde\"",
                  "-er: \"viele neuer Freunde\"",
                  "-es: \"viele neues Freunde\""
              ],
              "answer": 0,
              "explanation": "Efter viele, wenige, einige och mehrere böjs adjektivet STARKt i plural: viele neue Freunde (med -e).",
              "feedback": [
                  "Helt rätt! viele neue Freunde – stark böjning ger -e i nominativ/ackusativ plural.",
                  "-en utlöses bara av bestämda artiklar eller \"alle\" (alle neuen Freunde).",
                  "-er är genitiv plural.",
                  "-es är neutrum singular."
              ]
          },
          {
              "id": "a04-q6",
              "context": "Du beställer en dryck: \"Ett glas kallt vatten, tack!\" (das Wasser).",
              "prompt": "Hur heter \"kallt vatten\" utan artikel i nominativ/ackusativ neutrum?",
              "options": [
                  "kaltes Wasser (-es som i das)",
                  "kalte Wasser",
                  "kalten Wasser",
                  "kaltem Wasser"
              ],
              "answer": 0,
              "explanation": "das Wasser -> neutrum nollartikel får artikelns slutsignal -es: kaltes Wasser.",
              "feedback": [
                  "Helt rätt! kaltes Wasser med -es.",
                  "kalte är femininum eller plural.",
                  "kalten är maskulin ackusativ eller dativ plural.",
                  "kaltem är dativ."
              ]
          }
      ]
  },

  '/docs/modus/konjunktiv-ii': {
      "lessonId": "M03",
      "href": "/docs/modus/konjunktiv-ii",
      "title": "Snabbkoll: Konjunktiv II i nutid",
      "questions": [
          {
              "id": "m03-q1",
              "context": "Konjunktiv II används för artighet, hypoteser och drömmar.",
              "prompt": "Hur bildas Konjunktiv II för de flesta vanliga verb i modern tyska?",
              "options": [
                  "Med hjälpverbet \"würde\" + infinitiv i satsens slut (\"Ich würde gern kommen\").",
                  "Med \"werde\" + particip II.",
                  "Med \"hatte\" + infinitiv.",
                  "Genom att lägga till -t på presensstammen."
              ],
              "answer": 0,
              "explanation": "I modernt språk används universalkonstruktionen würde + infinitiv för nästan alla vanliga verb.",
              "feedback": [
                  "Helt rätt! würde + infinitiv motsvarar svenskans \"skulle + infinitiv\".",
                  "werde bildar futurum eller passiv.",
                  "hatte är preteritum indikativ.",
                  "-t bildar inte konjunktiv."
              ]
          },
          {
              "id": "m03-q2",
              "context": "För verben sein, haben och modalverben undviks \"würde\".",
              "prompt": "Vilka enkla former föredras i standardtyska och skrift i stället för omskrivningarna \"würde sein\" och \"würde haben\"?",
              "options": [
                  "wäre och hätte",
                  "war och hatte",
                  "sei och habe",
                  "würde gewesen och würde gehabt"
              ],
              "answer": 0,
              "explanation": "För sein och haben används alltid de enkla formerna wäre (vore) och hätte (skulle ha).",
              "feedback": [
                  "Helt rätt! ich wäre och ich hätte är de självklara formerna.",
                  "war och hatte är indikativ preteritum (var och hade).",
                  "sei och habe är Konjunktiv I.",
                  "\"würde sein\" låter klumpigt och undviks i god tyska."
              ]
          },
          {
              "id": "m03-q3",
              "context": "Du vill be en främmande person om hjälp på gatan på ett mycket artigt sätt.",
              "prompt": "Hur formulerar du frågan med Konjunktiv II av \"können\"?",
              "options": [
                  "Könnten Sie mir bitte helfen?",
                  "Konnten Sie mir bitte helfen?",
                  "Kannst du mich helfen?",
                  "Würden Sie helfen können mir?"
              ],
              "answer": 0,
              "explanation": "Könnten Sie... är den fasta artighetsfrasen (Skulle ni kunna...). Konnten är vanlig dåtid (Kunde ni...).",
              "feedback": [
                  "Helt rätt! \"Könnten Sie mir bitte helfen?\" är mönstret för artighet.",
                  "Utan prickar (konnten) betyder det \"Kunde ni\" i dåtid!",
                  "Kannst du är vardagligt och mich är fel kasus (helfen styr dativ).",
                  "Ordföljden är helt förvrängd."
              ]
          },
          {
              "id": "m03-q4",
              "context": "Undersök meningen: \"Wenn ich reich wäre, würde ich ein Schloss kaufen.\"",
              "prompt": "Vad uttrycker denna mening?",
              "options": [
                  "En irreal villkorssats i nutid: talaren är inte rik i verkligheten.",
                  "Ett faktum: talaren har precis köpt ett slott.",
                  "En händelse som inträffade förra seklet.",
                  "Ett förbud."
              ],
              "answer": 0,
              "explanation": "Konjunktiv II uttrycker en hypotetisk situation som strider mot verkligheten (irrealis).",
              "feedback": [
                  "Helt rätt! Irrealis: en dröm eller hypotes i nutiden.",
                  "Det är ingen verklig handling.",
                  "Meningen är i presens konjunktiv, inte historisk dåtid.",
                  "Det är inget förbud."
              ]
          },
          {
              "id": "m03-q5",
              "context": "Hur böjs \"wäre\" för \"er / sie / es\"?",
              "prompt": "Vad är formen för \"han vore / skulle vara\"?",
              "options": [
                  "er wäre (slutar på -e)",
                  "er wäret",
                  "er wär",
                  "er wären"
              ],
              "answer": 0,
              "explanation": "I Konjunktiv II är 1:a och 3:e person singular identiska och slutar på -e: ich wäre, er wäre.",
              "feedback": [
                  "Helt rätt! er wäre slutar på -e.",
                  "wäret är för ihr.",
                  "wär är slarvigt talspråk utan slutvokal.",
                  "wären är för wir och sie/Sie."
              ]
          },
          {
              "id": "m03-q6",
              "context": "Du vill ge ett vänligt råd till en kamrat som har problem: \"I ditt ställe skulle jag...\"",
              "prompt": "Vilken är den fasta tyska formeln med Konjunktiv II?",
              "options": [
                  "An deiner Stelle würde ich...",
                  "In dein Platz werde ich...",
                  "Auf deine Stelle hatte ich...",
                  "An deine Stelle bin ich..."
              ],
              "answer": 0,
              "explanation": "Den idiomatiska formeln är: \"An deiner Stelle würde ich...\" (I ditt ställe skulle jag...).",
              "feedback": [
                  "Helt rätt! \"An deiner Stelle würde ich...\" är standardfrasen för rådgivning.",
                  "In dein Platz är en svengelsk direktöversättning.",
                  "hatte och auf deine Stelle är felaktigt.",
                  "bin är indikativ nutid."
              ]
          }
      ]
  },

  '/docs/modus/konjunktiv-ii-datid': {
      "lessonId": "M04",
      "href": "/docs/modus/konjunktiv-ii-datid",
      "title": "Snabbkoll: Konjunktiv II i dåtid",
      "questions": [
          {
              "id": "m04-q1",
              "context": "Hur konstrueras Konjunktiv II i dåtid (vad som skulle ha hänt)?",
              "prompt": "Vilken är den universella formeln för dåtidsformen?",
              "options": [
                  "hätte / wäre + Partizip II i satsens slut",
                  "würde + Partizip II",
                  "hatte / war + Partizip II",
                  "wäre + Infinitiv"
              ],
              "answer": 0,
              "explanation": "Konjunktiv II dåtid bildas med hätte eller wäre + Partizip II: \"Ich hätte gesagt\", \"Er wäre gekommen\".",
              "feedback": [
                  "Helt rätt! hätte/wäre + Partizip II är den enda formeln för dåtidsformen.",
                  "würde + particip förekommer inte i god standardtyska.",
                  "hatte/war + particip är Plusquamperfekt indikativ (faktisk dåtid).",
                  "wäre + infinitiv existerar inte."
              ]
          },
          {
              "id": "m04-q2",
              "context": "Verbet \"kommen\" kräver hjälpverbet sein i sammansatta former.",
              "prompt": "Vad heter \"Jag skulle ha kommit om jag haft tid\"?",
              "options": [
                  "Ich wäre gekommen, wenn ich Zeit gehabt hätte.",
                  "Ich hätte gekommen, wenn ich Zeit hatte.",
                  "Ich würde kommen, wenn ich Zeit hatte.",
                  "Ich war gekommen, wenn ich Zeit habe."
              ],
              "answer": 0,
              "explanation": "Kommen tar sein (wäre gekommen), och bisatsen kräver Konjunktiv II (gehabt hätte).",
              "feedback": [
                  "Helt rätt! wäre gekommen ... gehabt hätte i båda leden.",
                  "kommen tar sein, aldrig haben!",
                  "Detta är nutid: \"Jag skulle komma om jag hade tid\".",
                  "Detta är en grammatiskt trasig mening."
              ]
          },
          {
              "id": "m04-q3",
              "context": "Konstruktion utan \"wenn\" (spetsställt verb).",
              "prompt": "Hur kan meningen \"Wenn ich das gewusst hätte...\" skrivas om utan bindeordet wenn?",
              "options": [
                  "Hätte ich das gewusst...",
                  "Ich hätte das gewusst...",
                  "Das gewusst hätte ich...",
                  "Wüsste ich das..."
              ],
              "answer": 0,
              "explanation": "När wenn stryks flyttas hjälpverbet till position 1: \"Hätte ich das gewusst...\" (Hade jag vetat det...).",
              "feedback": [
                  "Helt rätt! Spetsställning av verbet ersätter \"wenn\".",
                  "Detta är en påståendesats, inte en villkorsbisats.",
                  "Ordföljden är felaktig.",
                  "Wüsste är nutid (visste jag), inte dåtid."
              ]
          },
          {
              "id": "m04-q4",
              "context": "Skillnad mellan Plusquamperfekt indikativ och Konjunktiv II dåtid.",
              "prompt": "Vad är skillnaden mellan \"Ich hatte das Auto repariert\" och \"Ich hätte das Auto repariert\"?",
              "options": [
                  "\"hatte\" innebär att bilen faktiskt reparerades; \"hätte\" innebär att det bara var en hypotes (jag skulle ha gjort det, men gjorde det inte).",
                  "Det är ingen skillnad alls.",
                  "\"hätte\" används bara i södra Tyskland.",
                  "\"hatte\" är i framtid."
              ],
              "answer": 0,
              "explanation": "hatte = faktisk dåtid (fakta). hätte = hypotetisk dåtid (irrealis: skulle ha gjort).",
              "feedback": [
                  "Helt rätt! Omljudet markerar skiljelinjen mellan verklighet och hypotes.",
                  "Skillnaden i betydelse är monumental!",
                  "Båda formerna används i hela det tyska språkområdet.",
                  "hatte är dåtid, inte framtid."
              ]
          },
          {
              "id": "m04-q5",
              "context": "En handling i det förflutna påverkade nutiden (blandad konditionalsats).",
              "prompt": "Vilken mening uttrycker korrekt: \"Om jag hade pluggat medicin då, vore jag läkare idag\"?",
              "options": [
                  "Wenn ich damals Medizin studiert hätte, wäre ich heute Arzt.",
                  "Wenn ich damals Medizin studiere, bin ich heute Arzt.",
                  "Wenn ich damals Medizin studiert hatte, war ich heute Arzt.",
                  "Wenn ich damals Medizin studieren würde, wäre ich heute Arzt."
              ],
              "answer": 0,
              "explanation": "Dåtidshypotes (studiert hätte) kopplas till nutida konsekvens (wäre ich heute).",
              "feedback": [
                  "Helt rätt! Blandad villkorssats med perfekt tidslogik.",
                  "Studiere är nutid, passar inte med \"damals\".",
                  "hatte och war är ren indikativ dåtid.",
                  "würde studieren uttrycker nutid/framtid, inte dåtid."
              ]
          },
          {
              "id": "m04-q6",
              "context": "Undersök meningen: \"Fast wäre ich ins Wasser gefallen!\"",
              "prompt": "Vad betyder uttrycket med \"fast + Konjunktiv II\"?",
              "options": [
                  "Jag höll nästan på att ramla i vattnet (men jag gjorde det inte)!",
                  "Jag ramlade i vattnet mycket snabbt.",
                  "Jag ramlade definitivt i vattnet.",
                  "Jag vill gärna bada i vattnet."
              ],
              "answer": 0,
              "explanation": "\"fast / beinahe + Konjunktiv II\" uttrycker att en händelse närapå inträffade i det förflutna.",
              "feedback": [
                  "Helt rätt! \"fast wäre ich...\" = jag höll så när på att...",
                  "fast betyder \"nästan\", inte \"snabb\" (schnell) här.",
                  "Konjunktiv II markerar att det inte skedde.",
                  "Det handlar om ett tillbud, inte en önskan om att bada."
              ]
          }
      ]
  },

  '/docs/modus/handelsepassiv': {
      "lessonId": "M07",
      "href": "/docs/modus/handelsepassiv",
      "title": "Snabbkoll: Vorgangspassiv med werden",
      "questions": [
          {
              "id": "m07-q1",
              "context": "Hur bildas händelsepassiv (Vorgangspassiv) i presens?",
              "prompt": "Vilken är formeln för presens passiv i meningen \"Bilen repareras\"?",
              "options": [
                  "wird / werden + Partizip II (\"Das Auto wird repariert.\")",
                  "ist + Partizip II",
                  "hat + Partizip II",
                  "wurde + Partizip II"
              ],
              "answer": 0,
              "explanation": "Presens passiv bildas med presens av werden + Partizip II: wird repariert.",
              "feedback": [
                  "Helt rätt! wird repariert uttrycker pågående handling i presens.",
                  "ist + particip bildar tillståndspassiv (Zustandspassiv) eller aktivt perfekt.",
                  "hat + particip är aktivt perfekt.",
                  "wurde är preteritum (reparerades)."
              ]
          },
          {
              "id": "m07-q2",
              "context": "När en aktiv mening görs om till passiv, vad händer med ackusativobjektet?",
              "prompt": "Vad blir ackusativobjektet i den passiva satsen?",
              "options": [
                  "Det blir det nya subjektet och står därmed i nominativ!",
                  "Det förblir i ackusativ.",
                  "Det förvandlas till dativ.",
                  "Det måste alltid tas bort ur meningen."
              ],
              "answer": 0,
              "explanation": "Objektet i den aktiva satsen upphöjs till subjekt (nominativ) i den passiva satsen.",
              "feedback": [
                  "Helt rätt! Ackusativobjekt -> Subjekt (Nominativ).",
                  "Det byter kasus till nominativ.",
                  "Endast i speciella dativpassivkonstruktioner behålls dativ.",
                  "Det blir meningens nya huvudperson och tas inte bort."
              ]
          },
          {
              "id": "m07-q3",
              "context": "Hur anges personen som utför handlingen (agenten)?",
              "prompt": "Vilken preposition används för att ange den mänskliga agenten i passiv?",
              "options": [
                  "von + Dativ (t.ex. \"vom Chef\", \"von der Polizei\")",
                  "durch + Ackusativ",
                  "mit + Dativ",
                  "bei + Dativ"
              ],
              "answer": 0,
              "explanation": "Mänskliga aktörer och organisationer anges med von + Dativ.",
              "feedback": [
                  "Helt rätt! von + Dativ motsvarar svenskans \"av\".",
                  "durch + Ackusativ används för medel, verktyg eller naturkrafter.",
                  "mit anger redskap man använder med handen.",
                  "bei betyder hos."
              ]
          },
          {
              "id": "m07-q4",
              "context": "Preteritum av händelsepassiv: \"Huset byggdes år 1990.\"",
              "prompt": "Vad är den korrekta preteritumformen av passiv för \"das Haus\"?",
              "options": [
                  "Das Haus wurde im Jahr 1990 gebaut.",
                  "Das Haus wird im Jahr 1990 gebaut.",
                  "Das Haus war im Jahr 1990 gebaut worden.",
                  "Das Haus baute im Jahr 1990."
              ],
              "answer": 0,
              "explanation": "Preteritum passiv bildas med wurde + Partizip II: wurde gebaut.",
              "feedback": [
                  "Helt rätt! wurde gebaut är preteritum passiv.",
                  "wird är presens.",
                  "war gebaut worden är pluskvamperfekt.",
                  "baute är aktiv form: huset byggde ingenting själv!"
              ]
          },
          {
              "id": "m07-q5",
              "context": "Formen på participet av \"werden\" i passiv perfekt.",
              "prompt": "Varför heter det \"ist gebaut worden\" och inte \"ist gebaut geworden\"?",
              "options": [
                  "I passiv konstruktion tappar \"geworden\" sitt prefix ge- och heter alltid \"worden\".",
                  "Det är ett modernt tryckfel.",
                  "\"geworden\" används bara för feminina ord.",
                  "Båda formerna är helt likvärdiga."
              ],
              "answer": 0,
              "explanation": "Som passivhjälpverb heter participet av werden alltid worden: \"ist gebaut worden\". \"geworden\" används bara när werden betyder bli.",
              "feedback": [
                  "Helt rätt! Passiv perfekt har alltid \"worden\", aldrig geworden.",
                  "Det är en fast grammatisk regel.",
                  "Genus har ingen inverkan på verbformer.",
                  "De är inte utbytbara: \"ist gebaut geworden\" är felaktigt."
              ]
          },
          {
              "id": "m07-q6",
              "context": "Passiv med modalverb: \"Det här måste göras omedelbart.\"",
              "prompt": "Hur ser ordföljden ut med modalverbet müssen och verbet machen i passiv?",
              "options": [
                  "Das muss sofort gemacht werden.",
                  "Das muss sofort werden gemacht.",
                  "Das wird sofort gemacht müssen.",
                  "Das gemacht werden muss sofort."
              ],
              "answer": 0,
              "explanation": "Modalverbet står på plats 2, och passivpaketet Partizip II + werden (infinitiv) står allra sist: gemacht werden.",
              "feedback": [
                  "Helt rätt! \"gemacht werden\" allra sist i satsen.",
                  "Infinitiven werden måste stå efter participet.",
                  "Hjälpverbet för passiv är werden, inte ett omvänt paket.",
                  "Det böjda verbet måste stå på plats 2 i en huvudsats."
              ]
          }
      ]
  },

  '/docs/modus/tillstandspassiv': {
      "lessonId": "M08",
      "href": "/docs/modus/tillstandspassiv",
      "title": "Snabbkoll: Zustandspassiv med sein",
      "questions": [
          {
              "id": "m08-q1",
              "context": "Skillnaden mellan händelsepassiv och tillståndspassiv.",
              "prompt": "Vad är den grundläggande skillnaden mellan \"Die Tür wird geöffnet\" och \"Die Tür ist geöffnet\"?",
              "options": [
                  "\"wird geöffnet\" är en pågående handling (någon öppnar den); \"ist geöffnet\" är ett färdigt tillstånd (den är öppen).",
                  "Det är exakt samma sak på två olika dialekter.",
                  "\"ist geöffnet\" betyder att dörren stängs.",
                  "\"wird geöffnet\" är i dåtid."
              ],
              "answer": 0,
              "explanation": "Vorgangspassiv (werden) fokuserar på själva processen. Zustandspassiv (sein) fokuserar på slutresultatet.",
              "feedback": [
                  "Helt rätt! Process/handling kontra färdigt tillstånd/resultat.",
                  "Det är två distinkta grammatiska passivformer.",
                  "Det betyder att dörren är öppen.",
                  "wird geöffnet är i presens."
              ]
          },
          {
              "id": "m08-q2",
              "context": "Hur bildas Zustandspassiv?",
              "prompt": "Vilket hjälpverb används för att bilda Zustandspassiv?",
              "options": [
                  "sein (t.ex. \"ist geschlossen\", \"sind repariert\")",
                  "werden",
                  "haben",
                  "bleiben"
              ],
              "answer": 0,
              "explanation": "Zustandspassiv konstrueras med hjälpverbet sein + Partizip II.",
              "feedback": [
                  "Helt rätt! sein + particip bildar tillståndspassiv.",
                  "werden bildar händelsepassiv.",
                  "haben bildar aktivt perfekt.",
                  "bleiben är ett kopulaverb."
              ]
          },
          {
              "id": "m08-q3",
              "context": "Dåtid av Zustandspassiv: \"Affären var stängd när vi kom.\"",
              "prompt": "Hur lyder preteritum av Zustandspassiv för \"das Geschäft\"?",
              "options": [
                  "Das Geschäft war geschlossen.",
                  "Das Geschäft wurde geschlossen.",
                  "Das Geschäft ist geschlossen gewesen.",
                  "Das Geschäft schloss sich."
              ],
              "answer": 0,
              "explanation": "Preteritum av sein är war: \"Das Geschäft war geschlossen\" (det var stängt som tillstånd).",
              "feedback": [
                  "Helt rätt! war geschlossen beskriver tillståndet i dåtiden.",
                  "wurde geschlossen beskriver handlingen att någon stängde den just då.",
                  "ist geschlossen gewesen är en mer sällsynt och klumpig perfektform.",
                  "schloss sich är reflexivt."
              ]
          },
          {
              "id": "m08-q4",
              "context": "Undersök meningen: \"Alle Plätze im Saal sind reserviert.\"",
              "prompt": "Vad antyder Zustandspassivet \"sind reserviert\"?",
              "options": [
                  "Att någon tidigare har utfört bokningen, så att platserna nu befinner sig i tillståndet reserverade.",
                  "Att platserna håller på att reserveras i denna sekund.",
                  "Att platserna är helt lediga.",
                  "Att platserna inte kan reserveras."
              ],
              "answer": 0,
              "explanation": "Zustandspassiv förutsätter alltid en tidigare genomförd handling som lett fram till det nuvarande tillståndet.",
              "feedback": [
                  "Helt rätt! En tidigare handling har skapat det aktuella resultatet.",
                  "Pågående handling skulle heta \"werden reserviert\".",
                  "Tvärtom, de är upptagna.",
                  "Det handlar om att de redan är bokade."
              ]
          },
          {
              "id": "m08-q5",
              "context": "Du vill säga på tyska: \"Middagen är färdiglagad.\"",
              "prompt": "Vilken mening är bäst lämpad för att beskriva maten som står klar på bordet?",
              "options": [
                  "Das Abendessen ist gekocht.",
                  "Das Abendessen wird gekocht.",
                  "Das Abendessen wurde gekocht.",
                  "Das Abendessen kocht sich."
              ],
              "answer": 0,
              "explanation": "ist gekocht beskriver det färdiga tillståndet. wird gekocht betyder att någon står och lagar den nu.",
              "feedback": [
                  "Helt rätt! \"Das Abendessen ist gekocht\" – maten är klar!",
                  "wird gekocht innebär att grytorna kokar på spisen just nu.",
                  "wurde gekocht är dåtid: blev lagad.",
                  "kocht sich är felaktigt."
              ]
          },
          {
              "id": "m08-q6",
              "context": "Gränsdragning mellan particip i Zustandspassiv och vanligt adjektiv.",
              "prompt": "Vad skiljer \"Die Tür ist verschlossen\" (av verbet verschließen) från \"Die Tür ist grün\"?",
              "options": [
                  "verschlossen förutsätter att någon tidigare har låst dörren; grün är en ren egenskap utan föregående verbal handling.",
                  "Det finns ingen skillnad alls.",
                  "grün är i passiv form.",
                  "verschlossen är ett substantiv."
              ],
              "answer": 0,
              "explanation": "Zustandspassiv bär alltid med sig en relation till en tidigare handling (någon har låst dörren), till skillnad från rena egenskaper som färg.",
              "feedback": [
                  "Helt rätt! Den underliggande handlingen definierar passivets natur.",
                  "Skillnaden ligger i relationen till en verbal handling.",
                  "grün är ett vanligt adjektiv.",
                  "verschlossen är ett particip."
              ]
          }
      ]
  },

};
