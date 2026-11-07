/**
 * Meningsbygget data – 90 övningar i tysk syntax:
 * - 30 Huvudsats (v2: verbet på andra plats)
 * - 30 Satsramen (satsram: Satzklammer med partikelverb, modalverb, perfekt, futurum och passiv)
 * - 30 Bisats (bisats: verbet allra sist efter underordnande konjunktioner och i relativsatser)
 */

export type SyntaxExercise = {
  id: string;
  theme: 'v2' | 'satsram' | 'bisats';
  instruction: string;
  swedishMeaning: string;
  chunks: string[];
  acceptableOrders: string[][];
  explanation: string;
};

export const SYNTAX_EXERCISES: SyntaxExercise[] = [
  {
    "id": "syn-v2-01",
    "theme": "v2",
    "instruction": "Bygg huvudsatsen med tidsadverbialet \"Heute\" i förfältet.",
    "swedishMeaning": "Idag köper jag en bok.",
    "chunks": [
      "Heute",
      "kaufe",
      "ich",
      "ein Buch"
    ],
    "acceptableOrders": [
      [
        "Heute",
        "kaufe",
        "ich",
        "ein Buch"
      ]
    ],
    "explanation": "När tidsadverbialet \"Heute\" inleder förfältet måste det finita verbet (\"kaufe\") stå på plats 2, direkt före subjektet \"ich\"."
  },
  {
    "id": "syn-v2-02",
    "theme": "v2",
    "instruction": "Bygg huvudsatsen med tidsuttrycket \"Gestern\" först.",
    "swedishMeaning": "Igår köpte min bror en ny bil.",
    "chunks": [
      "Gestern",
      "kaufte",
      "mein Bruder",
      "ein neues Auto"
    ],
    "acceptableOrders": [
      [
        "Gestern",
        "kaufte",
        "mein Bruder",
        "ein neues Auto"
      ]
    ],
    "explanation": "Efter förfältsledet \"Gestern\" står verbet \"kaufte\" på plats 2, följt av subjektet \"mein Bruder\"."
  },
  {
    "id": "syn-v2-03",
    "theme": "v2",
    "instruction": "Bygg huvudsatsen med \"Am Montag\" på plats 1.",
    "swedishMeaning": "På måndag reser vi till Berlin.",
    "chunks": [
      "Am Montag",
      "reisen",
      "wir",
      "nach Berlin"
    ],
    "acceptableOrders": [
      [
        "Am Montag",
        "reisen",
        "wir",
        "nach Berlin"
      ]
    ],
    "explanation": "Finita verbet \"reisen\" behåller position 2 efter tidsangivelsen \"Am Montag\"."
  },
  {
    "id": "syn-v2-04",
    "theme": "v2",
    "instruction": "Bygg meningen med rumsadverbialet \"In Schweden\" i förfältet.",
    "swedishMeaning": "I Sverige dricker folk mycket kaffe.",
    "chunks": [
      "In Schweden",
      "trinken",
      "die Menschen",
      "viel Kaffee"
    ],
    "acceptableOrders": [
      [
        "In Schweden",
        "trinken",
        "die Menschen",
        "viel Kaffee"
      ]
    ],
    "explanation": "Rumsadverbialet \"In Schweden\" fyller förfältet (led 1). Verbet \"trinken\" står på plats 2."
  },
  {
    "id": "syn-v2-05",
    "theme": "v2",
    "instruction": "Bygg meningen med satsadverbialet \"Leider\" först.",
    "swedishMeaning": "Tyvärr har jag ingen tid idag.",
    "chunks": [
      "Leider",
      "habe",
      "ich",
      "heute",
      "keine Zeit"
    ],
    "acceptableOrders": [
      [
        "Leider",
        "habe",
        "ich",
        "heute",
        "keine Zeit"
      ],
      [
        "Leider",
        "habe",
        "ich",
        "keine Zeit",
        "heute"
      ]
    ],
    "explanation": "Adverbialet \"Leider\" tar plats 1, vilket kräver inversion: verbet \"habe\" kommer på plats 2 och subjektet \"ich\" på plats 3."
  },
  {
    "id": "syn-v2-06",
    "theme": "v2",
    "instruction": "Bygg huvudsatsen med tidsadverbialet \"Morgen\" i förfältet.",
    "swedishMeaning": "Imorgon besöker barnen sina morföräldrar.",
    "chunks": [
      "Morgen",
      "besuchen",
      "die Kinder",
      "ihre Großeltern"
    ],
    "acceptableOrders": [
      [
        "Morgen",
        "besuchen",
        "die Kinder",
        "ihre Großeltern"
      ]
    ],
    "explanation": "Tidsangivelsen \"Morgen\" står på plats 1, följt av det finita verbet \"besuchen\" på plats 2."
  },
  {
    "id": "syn-v2-07",
    "theme": "v2",
    "instruction": "Bygg meningen med ackusativobjektet \"Dieses Buch\" i förfältet.",
    "swedishMeaning": "Den här boken läser studenten mycket gärna.",
    "chunks": [
      "Dieses Buch",
      "liest",
      "die Studentin",
      "sehr gern"
    ],
    "acceptableOrders": [
      [
        "Dieses Buch",
        "liest",
        "die Studentin",
        "sehr gern"
      ]
    ],
    "explanation": "Även när objektet \"Dieses Buch\" betonas i förfältet står verbet \"liest\" på position 2."
  },
  {
    "id": "syn-v2-08",
    "theme": "v2",
    "instruction": "Bygg huvudsatsen med tidsuttrycket \"Manchmal\" först.",
    "swedishMeaning": "Ibland arbetar han till sent på natten.",
    "chunks": [
      "Manchmal",
      "arbeitet",
      "er",
      "bis spät in die Nacht"
    ],
    "acceptableOrders": [
      [
        "Manchmal",
        "arbeitet",
        "er",
        "bis spät in die Nacht"
      ]
    ],
    "explanation": "\"Manchmal\" inleder satsen och verbet \"arbeitet\" följer omedelbart på plats 2."
  },
  {
    "id": "syn-v2-09",
    "theme": "v2",
    "instruction": "Bygg meningen med orsakssambandet \"Aus diesem Grund\" först.",
    "swedishMeaning": "Av denna anledning studerar vi tyska varje dag.",
    "chunks": [
      "Aus diesem Grund",
      "studieren",
      "wir",
      "jeden Tag",
      "Deutsch"
    ],
    "acceptableOrders": [
      [
        "Aus diesem Grund",
        "studieren",
        "wir",
        "jeden Tag",
        "Deutsch"
      ],
      [
        "Aus diesem Grund",
        "studieren",
        "wir",
        "Deutsch",
        "jeden Tag"
      ]
    ],
    "explanation": "Hela flerordsfrasen \"Aus diesem Grund\" utgör ett enda led (position 1), följt av verbet \"studieren\"."
  },
  {
    "id": "syn-v2-10",
    "theme": "v2",
    "instruction": "Bygg meningen med tidsadverbialet \"Plötzlich\" i förfältet.",
    "swedishMeaning": "Plötsligt öppnades den tunga dörren.",
    "chunks": [
      "Plötzlich",
      "öffnete",
      "sich",
      "die schwere Tür"
    ],
    "acceptableOrders": [
      [
        "Plötzlich",
        "öffnete",
        "sich",
        "die schwere Tür"
      ]
    ],
    "explanation": "Efter \"Plötzlich\" står det böjda verbet \"öffnete\" på position 2 och reflexivpronomenet \"sich\" intill."
  },
  {
    "id": "syn-v2-11",
    "theme": "v2",
    "instruction": "Bygg meningen med tidsfrasen \"Nach dem Unterricht\" först.",
    "swedishMeaning": "Efter lektionen går eleverna genast hem.",
    "chunks": [
      "Nach dem Unterricht",
      "gehen",
      "die Schüler",
      "sofort",
      "nach Hause"
    ],
    "acceptableOrders": [
      [
        "Nach dem Unterricht",
        "gehen",
        "die Schüler",
        "sofort",
        "nach Hause"
      ]
    ],
    "explanation": "Prepositionsfrasen \"Nach dem Unterricht\" fyller förfältet, och verbet \"gehen\" hamnar på plats 2."
  },
  {
    "id": "syn-v2-12",
    "theme": "v2",
    "instruction": "Bygg huvudsatsen med tidsfrasen \"Im Sommer\" i förfältet.",
    "swedishMeaning": "På sommaren simmar vi ofta i sjön.",
    "chunks": [
      "Im Sommer",
      "schwimmen",
      "wir",
      "oft",
      "im See"
    ],
    "acceptableOrders": [
      [
        "Im Sommer",
        "schwimmen",
        "wir",
        "oft",
        "im See"
      ],
      [
        "Im Sommer",
        "schwimmen",
        "wir",
        "im See",
        "oft"
      ]
    ],
    "explanation": "I tysk ordföljd inleder \"Im Sommer\" satsen och verbet \"schwimmen\" behåller andra platsen."
  },
  {
    "id": "syn-v2-13",
    "theme": "v2",
    "instruction": "Bygg meningen med platsadverbialet \"Hier\" först.",
    "swedishMeaning": "Här ligger min gamla ordbok.",
    "chunks": [
      "Hier",
      "liegt",
      "mein altes Wörterbuch"
    ],
    "acceptableOrders": [
      [
        "Hier",
        "liegt",
        "mein altes Wörterbuch"
      ]
    ],
    "explanation": "Platsadverbialet \"Hier\" tar plats 1 och verbet \"liegt\" tar plats 2 före subjektet."
  },
  {
    "id": "syn-v2-14",
    "theme": "v2",
    "instruction": "Bygg meningen med tidsackusativet \"Jeden Morgen\" först.",
    "swedishMeaning": "Varje morgon dricker min far en kopp te.",
    "chunks": [
      "Jeden Morgen",
      "trinkt",
      "mein Vater",
      "eine Tasse Tee"
    ],
    "acceptableOrders": [
      [
        "Jeden Morgen",
        "trinkt",
        "mein Vater",
        "eine Tasse Tee"
      ]
    ],
    "explanation": "Tidsuttrycket utan preposition \"Jeden Morgen\" bildar förfält, följt av verbet \"trinkt\"."
  },
  {
    "id": "syn-v2-15",
    "theme": "v2",
    "instruction": "Bygg huvudsatsen med det betonade pronomenet \"Ihm\" i förfältet.",
    "swedishMeaning": "Honom litar jag inte alls på.",
    "chunks": [
      "Ihm",
      "vertraue",
      "ich",
      "überhaupt nicht"
    ],
    "acceptableOrders": [
      [
        "Ihm",
        "vertraue",
        "ich",
        "überhaupt nicht"
      ]
    ],
    "explanation": "Pronomenet \"Ihm\" står i förfältet för kontrast, vilket placerar verbet \"vertraue\" på position 2."
  },
  {
    "id": "syn-v2-16",
    "theme": "v2",
    "instruction": "Bygg meningen med sättsadverbialet \"Sehr gern\" först.",
    "swedishMeaning": "Mycket gärna hjälper jag dig med flytten.",
    "chunks": [
      "Sehr gern",
      "helfe",
      "ich",
      "dir",
      "beim Umzug"
    ],
    "acceptableOrders": [
      [
        "Sehr gern",
        "helfe",
        "ich",
        "dir",
        "beim Umzug"
      ]
    ],
    "explanation": "\"Sehr gern\" inleder satsen som ett sammanhållet led; därefter följer verbet \"helfe\"."
  },
  {
    "id": "syn-v2-17",
    "theme": "v2",
    "instruction": "Bygg huvudsatsen med tidsuttrycket \"Vor zwei Jahren\" först.",
    "swedishMeaning": "För två år sedan bodde hela familjen i Wien.",
    "chunks": [
      "Vor zwei Jahren",
      "wohnte",
      "die ganze Familie",
      "in Wien"
    ],
    "acceptableOrders": [
      [
        "Vor zwei Jahren",
        "wohnte",
        "die ganze Familie",
        "in Wien"
      ]
    ],
    "explanation": "\"Vor zwei Jahren\" står på plats 1, verbet \"wohnte\" på plats 2 och subjektet på plats 3."
  },
  {
    "id": "syn-v2-18",
    "theme": "v2",
    "instruction": "Bygg meningen där hela bisatsen \"Weil es regnet,\" utgör förfältet.",
    "swedishMeaning": "Eftersom det regnar stannar jag hemma idag.",
    "chunks": [
      "Weil es regnet,",
      "bleibe",
      "ich",
      "heute",
      "zu Hause"
    ],
    "acceptableOrders": [
      [
        "Weil es regnet,",
        "bleibe",
        "ich",
        "heute",
        "zu Hause"
      ],
      [
        "Weil es regnet,",
        "bleibe",
        "ich",
        "zu Hause",
        "heute"
      ]
    ],
    "explanation": "Hela bisatsen \"Weil es regnet,\" utgör plats 1. Huvudsatsens böjda verb \"bleibe\" måste därför stå direkt efter kommat!"
  },
  {
    "id": "syn-v2-19",
    "theme": "v2",
    "instruction": "Bygg huvudsatsen med bisatsen \"Obwohl er müde ist,\" som förfält.",
    "swedishMeaning": "Fastän han är trött läser studenten vidare.",
    "chunks": [
      "Obwohl er müde ist,",
      "liest",
      "der Student",
      "weiter"
    ],
    "acceptableOrders": [
      [
        "Obwohl er müde ist,",
        "liest",
        "der Student",
        "weiter"
      ]
    ],
    "explanation": "Koncessivbisatsen fungerar som förfält (led 1). Huvudsatsens verb \"liest\" följer direkt på plats 2."
  },
  {
    "id": "syn-v2-20",
    "theme": "v2",
    "instruction": "Bygg meningen med tidsangivelsen \"Um acht Uhr\" först.",
    "swedishMeaning": "Klockan åtta börjar den första föreläsningen på universitetet.",
    "chunks": [
      "Um acht Uhr",
      "beginnt",
      "die erste Vorlesung",
      "an der Universität"
    ],
    "acceptableOrders": [
      [
        "Um acht Uhr",
        "beginnt",
        "die erste Vorlesung",
        "an der Universität"
      ]
    ],
    "explanation": "Prepositionsfrasen \"Um acht Uhr\" fyller position 1, vilket placerar \"beginnt\" på position 2."
  },
  {
    "id": "syn-v2-21",
    "theme": "v2",
    "instruction": "Bygg meningen med \"Hoffentlich\" i förfältet.",
    "swedishMeaning": "Förhoppningsvis hittar vi en bra lösning.",
    "chunks": [
      "Hoffentlich",
      "finden",
      "wir",
      "eine gute Lösung"
    ],
    "acceptableOrders": [
      [
        "Hoffentlich",
        "finden",
        "wir",
        "eine gute Lösung"
      ]
    ],
    "explanation": "\"Hoffentlich\" tar första platsen; därefter följer verbet \"finden\" och därefter subjektet \"wir\"."
  },
  {
    "id": "syn-v2-22",
    "theme": "v2",
    "instruction": "Bygg huvudsatsen med rumsadverbialet \"Dort\" först.",
    "swedishMeaning": "Där står ett vackert gammalt rådhus.",
    "chunks": [
      "Dort",
      "steht",
      "ein wunderschönes altes Rathaus"
    ],
    "acceptableOrders": [
      [
        "Dort",
        "steht",
        "ein wunderschönes altes Rathaus"
      ]
    ],
    "explanation": "Adverbialet \"Dort\" tar plats 1 och verbet \"steht\" följer på plats 2."
  },
  {
    "id": "syn-v2-23",
    "theme": "v2",
    "instruction": "Bygg meningen med tidsfrasen \"Am Wochenende\" först.",
    "swedishMeaning": "På helgen lagar min pappa alltid maten.",
    "chunks": [
      "Am Wochenende",
      "kocht",
      "mein Vater",
      "immer das Essen"
    ],
    "acceptableOrders": [
      [
        "Am Wochenende",
        "kocht",
        "mein Vater",
        "immer das Essen"
      ]
    ],
    "explanation": "När tidsfrasen inleder krävs inversion: verbet \"kocht\" står före subjektet \"mein Vater\"."
  },
  {
    "id": "syn-v2-24",
    "theme": "v2",
    "instruction": "Bygg huvudsatsen med tidsadverbialet \"Jetzt\" först.",
    "swedishMeaning": "Nu förstår jag hela grammatikregeln.",
    "chunks": [
      "Jetzt",
      "verstehe",
      "ich",
      "die ganze Grammatikregel"
    ],
    "acceptableOrders": [
      [
        "Jetzt",
        "verstehe",
        "ich",
        "die ganze Grammatikregel"
      ]
    ],
    "explanation": "\"Jetzt\" fyller förfältet och verbet \"verstehe\" står på position 2."
  },
  {
    "id": "syn-v2-25",
    "theme": "v2",
    "instruction": "Bygg meningen med \"Ohne Zweifel\" som inledande led.",
    "swedishMeaning": "Utan tvivel är Berlin en fascinerande stad.",
    "chunks": [
      "Ohne Zweifel",
      "ist",
      "Berlin",
      "eine faszinierende Stadt"
    ],
    "acceptableOrders": [
      [
        "Ohne Zweifel",
        "ist",
        "Berlin",
        "eine faszinierende Stadt"
      ]
    ],
    "explanation": "Hela uttrycket \"Ohne Zweifel\" utgör ett enda led (position 1), följt av verbet \"ist\"."
  },
  {
    "id": "syn-v2-26",
    "theme": "v2",
    "instruction": "Bygg meningen med prepositionsfrasen \"Auf dem Tisch\" först.",
    "swedishMeaning": "På bordet ligger ett viktigt dokument.",
    "chunks": [
      "Auf dem Tisch",
      "liegt",
      "ein wichtiges Dokument"
    ],
    "acceptableOrders": [
      [
        "Auf dem Tisch",
        "liegt",
        "ein wichtiges Dokument"
      ]
    ],
    "explanation": "Platsangivelsen inleder satsen, vilket sätter verbet \"liegt\" på plats 2 före subjektet."
  },
  {
    "id": "syn-v2-27",
    "theme": "v2",
    "instruction": "Bygg huvudsatsen med frekvensadverbialet \"Normalerweise\" först.",
    "swedishMeaning": "Normalt äter vi frukost klockan sju.",
    "chunks": [
      "Normalerweise",
      "frühstücken",
      "wir",
      "um sieben Uhr"
    ],
    "acceptableOrders": [
      [
        "Normalerweise",
        "frühstücken",
        "wir",
        "um sieben Uhr"
      ]
    ],
    "explanation": "\"Normalerweise\" tar plats 1, verbet \"frühstücken\" tar plats 2."
  },
  {
    "id": "syn-v2-28",
    "theme": "v2",
    "instruction": "Bygg meningen med tidsuttrycket \"Seit gestern\" i förfältet.",
    "swedishMeaning": "Sedan igår regnar det utan uppehåll.",
    "chunks": [
      "Seit gestern",
      "regnet",
      "es",
      "ohne Pause"
    ],
    "acceptableOrders": [
      [
        "Seit gestern",
        "regnet",
        "es",
        "ohne Pause"
      ]
    ],
    "explanation": "\"Seit gestern\" inleder, verbet \"regnet\" tar plats 2 och det formella subjektet \"es\" följer på plats 3."
  },
  {
    "id": "syn-v2-29",
    "theme": "v2",
    "instruction": "Bygg huvudsatsen med konditionalbisatsen \"Wenn die Sonne scheint,\" som förfält.",
    "swedishMeaning": "Om solen skiner promenerar vi genom parken.",
    "chunks": [
      "Wenn die Sonne scheint,",
      "spazieren",
      "wir",
      "durch den Park"
    ],
    "acceptableOrders": [
      [
        "Wenn die Sonne scheint,",
        "spazieren",
        "wir",
        "durch den Park"
      ]
    ],
    "explanation": "Wenn-bisatsen utgör hela förfältet (led 1). Huvudsatsens verb \"spazieren\" står därför direkt efter kommat."
  },
  {
    "id": "syn-v2-30",
    "theme": "v2",
    "instruction": "Bygg frågesatsen med frågeordet \"Warum\" i förfältet.",
    "swedishMeaning": "Varför kommer du så sent till mötet?",
    "chunks": [
      "Warum",
      "kommst",
      "du",
      "so spät",
      "zum Treffen"
    ],
    "acceptableOrders": [
      [
        "Warum",
        "kommst",
        "du",
        "so spät",
        "zum Treffen"
      ]
    ],
    "explanation": "I en W-fråga tar frågeordet plats 1 och det böjda verbet \"kommst\" står strikt på plats 2."
  },
  {
    "id": "syn-sr-01",
    "theme": "satsram",
    "instruction": "Bygg meningen med det separerbara verbet \"einkaufen\" (satsram!).",
    "swedishMeaning": "Han handlar i snabbköpet på lördagar.",
    "chunks": [
      "Er",
      "kauft",
      "am Samstag",
      "im Supermarkt",
      "ein"
    ],
    "acceptableOrders": [
      [
        "Er",
        "kauft",
        "am Samstag",
        "im Supermarkt",
        "ein"
      ],
      [
        "Er",
        "kauft",
        "im Supermarkt",
        "am Samstag",
        "ein"
      ]
    ],
    "explanation": "Verbstammen \"kauft\" står på plats 2 (vänster klammer) medan den separerade partikeln \"ein\" skjuts till allra sista platsen i satsen (höger klammer)."
  },
  {
    "id": "syn-sr-02",
    "theme": "satsram",
    "instruction": "Bygg meningen i perfekt med hjälpverbet \"hat\" och participet \"gelesen\".",
    "swedishMeaning": "Jag har läst boken igår.",
    "chunks": [
      "Ich",
      "habe",
      "gestern",
      "das Buch",
      "gelesen"
    ],
    "acceptableOrders": [
      [
        "Ich",
        "habe",
        "gestern",
        "das Buch",
        "gelesen"
      ],
      [
        "Ich",
        "habe",
        "das Buch",
        "gestern",
        "gelesen"
      ]
    ],
    "explanation": "Hjälpverbet \"habe\" bildar vänster klammer på plats 2, medan participet \"gelesen\" stänger satsramen längst bak."
  },
  {
    "id": "syn-sr-03",
    "theme": "satsram",
    "instruction": "Bygg meningen med partikelverbet \"abfahren\".",
    "swedishMeaning": "Tåget avgår klockan tio i Hamburg.",
    "chunks": [
      "Der Zug",
      "fährt",
      "um zehn Uhr",
      "in Hamburg",
      "ab"
    ],
    "acceptableOrders": [
      [
        "Der Zug",
        "fährt",
        "um zehn Uhr",
        "in Hamburg",
        "ab"
      ],
      [
        "Der Zug",
        "fährt",
        "in Hamburg",
        "um zehn Uhr",
        "ab"
      ]
    ],
    "explanation": "\"fährt\" står på plats 2 och partikeln \"ab\" avslutar satsramen längst bak."
  },
  {
    "id": "syn-sr-04",
    "theme": "satsram",
    "instruction": "Bygg meningen med modalverbet \"müssen\" och infinitiven \"aufstehen\".",
    "swedishMeaning": "Vi måste gå upp tidigt imorgon.",
    "chunks": [
      "Wir",
      "müssen",
      "morgen",
      "früh",
      "aufstehen"
    ],
    "acceptableOrders": [
      [
        "Wir",
        "müssen",
        "morgen",
        "früh",
        "aufstehen"
      ],
      [
        "Wir",
        "müssen",
        "früh",
        "morgen",
        "aufstehen"
      ]
    ],
    "explanation": "Modalverbet \"müssen\" tar plats 2 medan huvudverbet i infinitiv (\"aufstehen\") hamnar sist."
  },
  {
    "id": "syn-sr-05",
    "theme": "satsram",
    "instruction": "Bygg meningen med partikelverbet \"anrufen\".",
    "swedishMeaning": "Hon ringer sin mamma varje kväll.",
    "chunks": [
      "Sie",
      "ruft",
      "jeden Abend",
      "ihre Mutter",
      "an"
    ],
    "acceptableOrders": [
      [
        "Sie",
        "ruft",
        "jeden Abend",
        "ihre Mutter",
        "an"
      ],
      [
        "Sie",
        "ruft",
        "ihre Mutter",
        "jeden Abend",
        "an"
      ]
    ],
    "explanation": "Prefixet \"an\" separeras från verbstammen \"ruft\" och placeras allra sist i huvudsatsen."
  },
  {
    "id": "syn-sr-06",
    "theme": "satsram",
    "instruction": "Bygg meningen i perfekt med hjälpverbet \"hat\".",
    "swedishMeaning": "Han har förlorat sin mobil igår kväll.",
    "chunks": [
      "Er",
      "hat",
      "gestern Abend",
      "sein Handy",
      "verloren"
    ],
    "acceptableOrders": [
      [
        "Er",
        "hat",
        "gestern Abend",
        "sein Handy",
        "verloren"
      ],
      [
        "Er",
        "hat",
        "sein Handy",
        "gestern Abend",
        "verloren"
      ]
    ],
    "explanation": "Satsramen ramas in av hjälpverbet \"hat\" (plats 2) och perfektparticipet \"verloren\" (sist)."
  },
  {
    "id": "syn-sr-07",
    "theme": "satsram",
    "instruction": "Bygg meningen med modalverbet \"wollen\" och infinitiven \"spielen\".",
    "swedishMeaning": "Barnen vill leka i trädgården idag.",
    "chunks": [
      "Die Kinder",
      "wollen",
      "heute Nachmittag",
      "im Garten",
      "spielen"
    ],
    "acceptableOrders": [
      [
        "Die Kinder",
        "wollen",
        "heute Nachmittag",
        "im Garten",
        "spielen"
      ],
      [
        "Die Kinder",
        "wollen",
        "im Garten",
        "heute Nachmittag",
        "spielen"
      ]
    ],
    "explanation": "Det böjda modalverbet \"wollen\" öppnar ramen och infinitiven \"spielen\" stänger den."
  },
  {
    "id": "syn-sr-08",
    "theme": "satsram",
    "instruction": "Bygg meningen med partikelverbet \"vorschlagen\".",
    "swedishMeaning": "Läraren föreslår ett intressant ämne.",
    "chunks": [
      "Der Lehrer",
      "schlägt",
      "ein interessantes Thema",
      "vor"
    ],
    "acceptableOrders": [
      [
        "Der Lehrer",
        "schlägt",
        "ein interessantes Thema",
        "vor"
      ]
    ],
    "explanation": "Partikeln \"vor\" separeras och bildar höger klammer sist i satsen."
  },
  {
    "id": "syn-sr-09",
    "theme": "satsram",
    "instruction": "Bygg meningen i futurum med \"werden\" och infinitiven \"reisen\".",
    "swedishMeaning": "Jag kommer att resa till Wien nästa vecka.",
    "chunks": [
      "Ich",
      "werde",
      "nächste Woche",
      "nach Wien",
      "reisen"
    ],
    "acceptableOrders": [
      [
        "Ich",
        "werde",
        "nächste Woche",
        "nach Wien",
        "reisen"
      ],
      [
        "Ich",
        "werde",
        "nach Wien",
        "nächste Woche",
        "reisen"
      ]
    ],
    "explanation": "I futurum står det böjda \"werde\" på plats 2 och huvudverbet i infinitiv (\"reisen\") sist."
  },
  {
    "id": "syn-sr-10",
    "theme": "satsram",
    "instruction": "Bygg meningen med partikelverbet \"aufmachen\".",
    "swedishMeaning": "Hon öppnar fönstret före sänggåendet.",
    "chunks": [
      "Sie",
      "macht",
      "vor dem Schlafen",
      "das Fenster",
      "auf"
    ],
    "acceptableOrders": [
      [
        "Sie",
        "macht",
        "vor dem Schlafen",
        "das Fenster",
        "auf"
      ],
      [
        "Sie",
        "macht",
        "das Fenster",
        "vor dem Schlafen",
        "auf"
      ]
    ],
    "explanation": "Verbstammen \"macht\" står på position 2 medan partikeln \"auf\" stänger satsen längst bak."
  },
  {
    "id": "syn-sr-11",
    "theme": "satsram",
    "instruction": "Bygg meningen i perfekt med rörelseverbet \"ankommen\" (hjälpverb sein).",
    "swedishMeaning": "Vi anlände mycket sent igår natt.",
    "chunks": [
      "Wir",
      "sind",
      "gestern Nacht",
      "sehr spät",
      "angekommen"
    ],
    "acceptableOrders": [
      [
        "Wir",
        "sind",
        "gestern Nacht",
        "sehr spät",
        "angekommen"
      ],
      [
        "Wir",
        "sind",
        "sehr spät",
        "gestern Nacht",
        "angekommen"
      ]
    ],
    "explanation": "Rörelseverb böjs i perfekt med \"sein\" (\"sind\" på plats 2) och participet \"angekommen\" längst bak."
  },
  {
    "id": "syn-sr-12",
    "theme": "satsram",
    "instruction": "Bygg frågesatsen med modalverbet \"können\" först.",
    "swedishMeaning": "Kan du vara snäll och räcka mig saltet?",
    "chunks": [
      "Kannst",
      "du",
      "mir",
      "bitte",
      "das Salz",
      "reichen"
    ],
    "acceptableOrders": [
      [
        "Kannst",
        "du",
        "mir",
        "bitte",
        "das Salz",
        "reichen"
      ],
      [
        "Kannst",
        "du",
        "bitte",
        "mir",
        "das Salz",
        "reichen"
      ]
    ],
    "explanation": "I en ja/nej-fråga står modalverbet \"Kannst\" på plats 1 och infinitiven \"reichen\" avslutar satsramen."
  },
  {
    "id": "syn-sr-13",
    "theme": "satsram",
    "instruction": "Bygg meningen med modalverbet \"dürfen\" och negering.",
    "swedishMeaning": "Patienten får inte lämna rummet idag.",
    "chunks": [
      "Der Patient",
      "darf",
      "heute",
      "das Zimmer",
      "nicht",
      "verlassen"
    ],
    "acceptableOrders": [
      [
        "Der Patient",
        "darf",
        "heute",
        "das Zimmer",
        "nicht",
        "verlassen"
      ],
      [
        "Der Patient",
        "darf",
        "das Zimmer",
        "heute",
        "nicht",
        "verlassen"
      ]
    ],
    "explanation": "\"darf\" står på plats 2 och infinitiven \"verlassen\" stänger ramen längst bak."
  },
  {
    "id": "syn-sr-14",
    "theme": "satsram",
    "instruction": "Bygg meningen med partikelverbet \"einpacken\".",
    "swedishMeaning": "Peter packar sin stora resväska noggrant.",
    "chunks": [
      "Peter",
      "packt",
      "seinen großen Koffer",
      "sorgfältig",
      "ein"
    ],
    "acceptableOrders": [
      [
        "Peter",
        "packt",
        "seinen großen Koffer",
        "sorgfältig",
        "ein"
      ],
      [
        "Peter",
        "packt",
        "sorgfältig",
        "seinen großen Koffer",
        "ein"
      ]
    ],
    "explanation": "Partikeln \"ein\" skjuts till sista platsen av satsramen."
  },
  {
    "id": "syn-sr-15",
    "theme": "satsram",
    "instruction": "Bygg meningen med partikelverbet \"ausschalten\".",
    "swedishMeaning": "Hon stänger av teven efter arbetet.",
    "chunks": [
      "Sie",
      "schaltet",
      "nach der Arbeit",
      "den Fernseher",
      "aus"
    ],
    "acceptableOrders": [
      [
        "Sie",
        "schaltet",
        "nach der Arbeit",
        "den Fernseher",
        "aus"
      ],
      [
        "Sie",
        "schaltet",
        "den Fernseher",
        "nach der Arbeit",
        "aus"
      ]
    ],
    "explanation": "Stammen \"schaltet\" är vänster klammer och partikeln \"aus\" är höger klammer."
  },
  {
    "id": "syn-sr-16",
    "theme": "satsram",
    "instruction": "Bygg meningen med \"möchte\" och infinitiven \"gehen\".",
    "swedishMeaning": "Jag skulle vilja gå på bio i helgen.",
    "chunks": [
      "Ich",
      "möchte",
      "am Wochenende",
      "ins Kino",
      "gehen"
    ],
    "acceptableOrders": [
      [
        "Ich",
        "möchte",
        "am Wochenende",
        "ins Kino",
        "gehen"
      ],
      [
        "Ich",
        "möchte",
        "ins Kino",
        "am Wochenende",
        "gehen"
      ]
    ],
    "explanation": "\"möchte\" öppnar ramen och infinitiven \"gehen\" stänger den längst bak."
  },
  {
    "id": "syn-sr-17",
    "theme": "satsram",
    "instruction": "Bygg meningen i perfekt med verbet \"lösen\".",
    "swedishMeaning": "Vi har löst det svåra problemet tillsammans.",
    "chunks": [
      "Wir",
      "haben",
      "das schwierige Problem",
      "gemeinsam",
      "gelöst"
    ],
    "acceptableOrders": [
      [
        "Wir",
        "haben",
        "das schwierige Problem",
        "gemeinsam",
        "gelöst"
      ],
      [
        "Wir",
        "haben",
        "gemeinsam",
        "das schwierige Problem",
        "gelöst"
      ]
    ],
    "explanation": "Hjälpverbet \"haben\" står på plats 2 och participet \"gelöst\" avslutar satsen."
  },
  {
    "id": "syn-sr-18",
    "theme": "satsram",
    "instruction": "Bygg meningen med partikelverbet \"vorbereiten\".",
    "swedishMeaning": "Ministern förbereder ett viktigt tal.",
    "chunks": [
      "Der Minister",
      "bereitet",
      "eine wichtige Rede",
      "vor"
    ],
    "acceptableOrders": [
      [
        "Der Minister",
        "bereitet",
        "eine wichtige Rede",
        "vor"
      ]
    ],
    "explanation": "Prefixet \"vor\" separeras och bildar höger klammer."
  },
  {
    "id": "syn-sr-19",
    "theme": "satsram",
    "instruction": "Bygg meningen med modalverbet \"sollen\".",
    "swedishMeaning": "Du ska utföra dina läxor samvetsgrant.",
    "chunks": [
      "Du",
      "sollst",
      "deine Hausaufgaben",
      "gewissenhaft",
      "erledigen"
    ],
    "acceptableOrders": [
      [
        "Du",
        "sollst",
        "deine Hausaufgaben",
        "gewissenhaft",
        "erledigen"
      ],
      [
        "Du",
        "sollst",
        "gewissenhaft",
        "deine Hausaufgaben",
        "erledigen"
      ]
    ],
    "explanation": "\"sollst\" fyller plats 2 och infinitiven \"erledigen\" står sist i ramen."
  },
  {
    "id": "syn-sr-20",
    "theme": "satsram",
    "instruction": "Bygg meningen i perfekt med oregelbundna verbet \"bestehen\".",
    "swedishMeaning": "Studenten har klarat det svåra provet.",
    "chunks": [
      "Der Student",
      "hat",
      "die schwere Prüfung",
      "bestanden"
    ],
    "acceptableOrders": [
      [
        "Der Student",
        "hat",
        "die schwere Prüfung",
        "bestanden"
      ]
    ],
    "explanation": "Perfektformen stänger ramen med participet \"bestanden\" längst bak."
  },
  {
    "id": "syn-sr-21",
    "theme": "satsram",
    "instruction": "Bygg meningen med partikelverbet \"fernsehen\".",
    "swedishMeaning": "Han ser på tv två timmar varje kväll.",
    "chunks": [
      "Er",
      "sieht",
      "jeden Abend",
      "zwei Stunden",
      "fern"
    ],
    "acceptableOrders": [
      [
        "Er",
        "sieht",
        "jeden Abend",
        "zwei Stunden",
        "fern"
      ],
      [
        "Er",
        "sieht",
        "zwei Stunden",
        "jeden Abend",
        "fern"
      ]
    ],
    "explanation": "Stammen \"sieht\" står på plats 2 och partikeln \"fern\" står allra sist."
  },
  {
    "id": "syn-sr-22",
    "theme": "satsram",
    "instruction": "Bygg passivsatsen med hjälpverbet \"wird\" och participet \"eröffnet\".",
    "swedishMeaning": "Det nya museet öppnas nästa månad.",
    "chunks": [
      "Das neue Museum",
      "wird",
      "im nächsten Monat",
      "eröffnet"
    ],
    "acceptableOrders": [
      [
        "Das neue Museum",
        "wird",
        "im nächsten Monat",
        "eröffnet"
      ]
    ],
    "explanation": "I passiv bildar \"wird\" vänster klammer och participet \"eröffnet\" höger klammer."
  },
  {
    "id": "syn-sr-23",
    "theme": "satsram",
    "instruction": "Bygg meningen med partikelverbet \"umsteigen\".",
    "swedishMeaning": "Jag byter tåg på centralstationen.",
    "chunks": [
      "Ich",
      "steige",
      "am Hauptbahnhof",
      "in den Zug",
      "um"
    ],
    "acceptableOrders": [
      [
        "Ich",
        "steige",
        "am Hauptbahnhof",
        "in den Zug",
        "um"
      ],
      [
        "Ich",
        "steige",
        "in den Zug",
        "am Hauptbahnhof",
        "um"
      ]
    ],
    "explanation": "Verbet \"um|steigen\" separeras: \"steige\" på plats 2, \"um\" sist."
  },
  {
    "id": "syn-sr-24",
    "theme": "satsram",
    "instruction": "Bygg meningen i futurum med tidsadverbialet först.",
    "swedishMeaning": "Imorgon kommer det att snöa i hela Sverige.",
    "chunks": [
      "Morgen",
      "wird",
      "es",
      "in ganz Schweden",
      "schneien"
    ],
    "acceptableOrders": [
      [
        "Morgen",
        "wird",
        "es",
        "in ganz Schweden",
        "schneien"
      ]
    ],
    "explanation": "\"wird\" står på plats 2 och infinitiven \"schneien\" stänger ramen längst bak."
  },
  {
    "id": "syn-sr-25",
    "theme": "satsram",
    "instruction": "Bygg meningen med partikelverbet \"aufräumen\".",
    "swedishMeaning": "Flickan städar hela sitt rum.",
    "chunks": [
      "Das Mädchen",
      "räumt",
      "sein ganzes Zimmer",
      "auf"
    ],
    "acceptableOrders": [
      [
        "Das Mädchen",
        "räumt",
        "sein ganzes Zimmer",
        "auf"
      ]
    ],
    "explanation": "Partikeln \"auf\" placeras sist och fullbordar satsramen."
  },
  {
    "id": "syn-sr-26",
    "theme": "satsram",
    "instruction": "Bygg meningen i perfekt med partikelverbet \"kennenlernen\".",
    "swedishMeaning": "Vi lärde känna många trevliga människor på semestern.",
    "chunks": [
      "Wir",
      "haben",
      "im Urlaub",
      "viele nette Leute",
      "kennengelernt"
    ],
    "acceptableOrders": [
      [
        "Wir",
        "haben",
        "im Urlaub",
        "viele nette Leute",
        "kennengelernt"
      ],
      [
        "Wir",
        "haben",
        "viele nette Leute",
        "im Urlaub",
        "kennengelernt"
      ]
    ],
    "explanation": "Hjälpverbet \"haben\" öppnar ramen och participet \"kennengelernt\" stänger den."
  },
  {
    "id": "syn-sr-27",
    "theme": "satsram",
    "instruction": "Bygg meningen med partikelverbet \"einladen\".",
    "swedishMeaning": "Chefen bjuder in alla medarbetare till lunch.",
    "chunks": [
      "Der Chef",
      "lädt",
      "alle Mitarbeiter",
      "zum Mittagessen",
      "ein"
    ],
    "acceptableOrders": [
      [
        "Der Chef",
        "lädt",
        "alle Mitarbeiter",
        "zum Mittagessen",
        "ein"
      ],
      [
        "Der Chef",
        "lädt",
        "zum Mittagessen",
        "alle Mitarbeiter",
        "ein"
      ]
    ],
    "explanation": "\"lädt\" står på plats 2 och den separerade partikeln \"ein\" står allra sist."
  },
  {
    "id": "syn-sr-28",
    "theme": "satsram",
    "instruction": "Bygg meningen med dåtidsmodalverbet \"wollte\".",
    "swedishMeaning": "Hon ville berätta sanningen för sin väninna.",
    "chunks": [
      "Sie",
      "wollte",
      "ihrer Freundin",
      "die Wahrheit",
      "sagen"
    ],
    "acceptableOrders": [
      [
        "Sie",
        "wollte",
        "ihrer Freundin",
        "die Wahrheit",
        "sagen"
      ],
      [
        "Sie",
        "wollte",
        "die Wahrheit",
        "ihrer Freundin",
        "sagen"
      ]
    ],
    "explanation": "Dåtidsmodalverbet \"wollte\" bildar vänster klammer och infinitiven \"sagen\" höger klammer."
  },
  {
    "id": "syn-sr-29",
    "theme": "satsram",
    "instruction": "Bygg meningen i perfekt med partikelverbet \"anhalten\".",
    "swedishMeaning": "Föraren stannade framför det röda trafikljuset.",
    "chunks": [
      "Der Autofahrer",
      "hat",
      "vor der roten Ampel",
      "angehalten"
    ],
    "acceptableOrders": [
      [
        "Der Autofahrer",
        "hat",
        "vor der roten Ampel",
        "angehalten"
      ]
    ],
    "explanation": "\"hat\" står på plats 2 och participet \"angehalten\" avslutar ramen."
  },
  {
    "id": "syn-sr-30",
    "theme": "satsram",
    "instruction": "Bygg meningen i perfekt med transitiva verbet \"besichtigen\".",
    "swedishMeaning": "Turisterna har besökt den gamla kyrkan.",
    "chunks": [
      "Die Touristen",
      "haben",
      "die alte Kirche",
      "besichtigt"
    ],
    "acceptableOrders": [
      [
        "Die Touristen",
        "haben",
        "die alte Kirche",
        "besichtigt"
      ]
    ],
    "explanation": "Hjälpverbet \"haben\" öppnar satsramen och participet \"besichtigt\" stänger den."
  },
  {
    "id": "syn-bi-01",
    "theme": "bisats",
    "instruction": "Bygg bisatsen efter konjunktionen \"weil\".",
    "swedishMeaning": "... eftersom hon läser en intressant bok.",
    "chunks": [
      "weil",
      "sie",
      "ein interessantes Buch",
      "liest"
    ],
    "acceptableOrders": [
      [
        "weil",
        "sie",
        "ein interessantes Buch",
        "liest"
      ]
    ],
    "explanation": "I en underordnad bisats med \"weil\" placeras det finita verbet (\"liest\") allra sist i satsen."
  },
  {
    "id": "syn-bi-02",
    "theme": "bisats",
    "instruction": "Bygg bisatsen med modalt hjälpverb och infinitiv.",
    "swedishMeaning": "... eftersom han måste stanna hemma idag.",
    "chunks": [
      "weil",
      "er",
      "heute",
      "zu Hause",
      "bleiben",
      "muss"
    ],
    "acceptableOrders": [
      [
        "weil",
        "er",
        "heute",
        "zu Hause",
        "bleiben",
        "muss"
      ],
      [
        "weil",
        "er",
        "zu Hause",
        "heute",
        "bleiben",
        "muss"
      ]
    ],
    "explanation": "I en bisats med modalverb står huvudverbet i infinitiv näst sist (\"bleiben\") och det böjda modalverbet sist (\"muss\")."
  },
  {
    "id": "syn-bi-03",
    "theme": "bisats",
    "instruction": "Bygg att-bisatsen med konjunktionen \"dass\".",
    "swedishMeaning": "... att tåget har en stor försening idag.",
    "chunks": [
      "dass",
      "der Zug",
      "heute",
      "eine große Verspätung",
      "hat"
    ],
    "acceptableOrders": [
      [
        "dass",
        "der Zug",
        "heute",
        "eine große Verspätung",
        "hat"
      ],
      [
        "dass",
        "der Zug",
        "eine große Verspätung",
        "heute",
        "hat"
      ]
    ],
    "explanation": "Efter \"dass\" inleds bisatsen med subjektet \"der Zug\" och det böjda verbet \"hat\" skjuts längst bak."
  },
  {
    "id": "syn-bi-04",
    "theme": "bisats",
    "instruction": "Bygg indirekta frågebisatsen med \"ob\".",
    "swedishMeaning": "... om han kommer till konferensen imorgon.",
    "chunks": [
      "ob",
      "er",
      "morgen",
      "zur Konferenz",
      "kommt"
    ],
    "acceptableOrders": [
      [
        "ob",
        "er",
        "morgen",
        "zur Konferenz",
        "kommt"
      ],
      [
        "ob",
        "er",
        "zur Konferenz",
        "morgen",
        "kommt"
      ]
    ],
    "explanation": "I en indirekt frågebisats med \"ob\" står det böjda verbet \"kommt\" sist."
  },
  {
    "id": "syn-bi-05",
    "theme": "bisats",
    "instruction": "Bygg koncessivbisatsen med \"obwohl\".",
    "swedishMeaning": "... fastän vädret var mycket dåligt hela dagen.",
    "chunks": [
      "obwohl",
      "das Wetter",
      "den ganzen Tag",
      "sehr schlecht",
      "war"
    ],
    "acceptableOrders": [
      [
        "obwohl",
        "das Wetter",
        "den ganzen Tag",
        "sehr schlecht",
        "war"
      ],
      [
        "obwohl",
        "das Wetter",
        "sehr schlecht",
        "den ganzen Tag",
        "war"
      ]
    ],
    "explanation": "Konjunktionen \"obwohl\" underordnar satsen, vilket tvingar verbet \"war\" till sista platsen."
  },
  {
    "id": "syn-bi-06",
    "theme": "bisats",
    "instruction": "Bygg villkorsbisatsen med \"wenn\".",
    "swedishMeaning": "... om du har tid ikväll.",
    "chunks": [
      "wenn",
      "du",
      "heute Abend",
      "Zeit",
      "hast"
    ],
    "acceptableOrders": [
      [
        "wenn",
        "du",
        "heute Abend",
        "Zeit",
        "hast"
      ],
      [
        "wenn",
        "du",
        "Zeit",
        "heute Abend",
        "hast"
      ]
    ],
    "explanation": "I wenn-bisatser placeras det finita verbet (\"hast\") allra sist."
  },
  {
    "id": "syn-bi-07",
    "theme": "bisats",
    "instruction": "Bygg bisatsen i perfekt med rörelseverbet \"ankommen\".",
    "swedishMeaning": "... eftersom vi anlände mycket sent igår kväll.",
    "chunks": [
      "weil",
      "wir",
      "gestern Abend",
      "sehr spät",
      "angekommen",
      "sind"
    ],
    "acceptableOrders": [
      [
        "weil",
        "wir",
        "gestern Abend",
        "sehr spät",
        "angekommen",
        "sind"
      ],
      [
        "weil",
        "wir",
        "sehr spät",
        "gestern Abend",
        "angekommen",
        "sind"
      ]
    ],
    "explanation": "I perfekt i en bisats står participet näst sist (\"angekommen\") och det böjda hjälpverbet sist (\"sind\")."
  },
  {
    "id": "syn-bi-08",
    "theme": "bisats",
    "instruction": "Bygg dass-bisatsen i perfekt med \"hat\".",
    "swedishMeaning": "... att hon klarade det svåra provet utan fel.",
    "chunks": [
      "dass",
      "sie",
      "die schwierige Prüfung",
      "ohne Fehler",
      "bestanden",
      "hat"
    ],
    "acceptableOrders": [
      [
        "dass",
        "sie",
        "die schwierige Prüfung",
        "ohne Fehler",
        "bestanden",
        "hat"
      ],
      [
        "dass",
        "sie",
        "ohne Fehler",
        "die schwierige Prüfung",
        "bestanden",
        "hat"
      ]
    ],
    "explanation": "Participet \"bestanden\" föregår det finita hjälpverbet \"hat\", som avslutar bisatsen."
  },
  {
    "id": "syn-bi-09",
    "theme": "bisats",
    "instruction": "Bygg tidsbisatsen med \"bevor\".",
    "swedishMeaning": "... innan den spännande filmen börjar på bion.",
    "chunks": [
      "bevor",
      "der spannende Film",
      "im Kino",
      "beginnt"
    ],
    "acceptableOrders": [
      [
        "bevor",
        "der spannende Film",
        "im Kino",
        "beginnt"
      ]
    ],
    "explanation": "Underordnande tidsbindeordet \"bevor\" kräver att verbet \"beginnt\" står allra sist."
  },
  {
    "id": "syn-bi-10",
    "theme": "bisats",
    "instruction": "Bygg bisatsen med \"nachdem\" och pluskvamperfekt.",
    "swedishMeaning": "... efter att han hade avslutat det tunga arbetet.",
    "chunks": [
      "nachdem",
      "er",
      "die schwere Arbeit",
      "beendet",
      "hatte"
    ],
    "acceptableOrders": [
      [
        "nachdem",
        "er",
        "die schwere Arbeit",
        "beendet",
        "hatte"
      ]
    ],
    "explanation": "Efter \"nachdem\" står participet \"beendet\" näst sist och hjälpverbet \"hatte\" sist."
  },
  {
    "id": "syn-bi-11",
    "theme": "bisats",
    "instruction": "Bygg tidsbisatsen med \"während\".",
    "swedishMeaning": "... medan de små barnen leker i trädgården.",
    "chunks": [
      "während",
      "die kleinen Kinder",
      "im Garten",
      "spielen"
    ],
    "acceptableOrders": [
      [
        "während",
        "die kleinen Kinder",
        "im Garten",
        "spielen"
      ]
    ],
    "explanation": "Konjunktionen \"während\" skickar verbet \"spielen\" till sista platsen i bisatsen."
  },
  {
    "id": "syn-bi-12",
    "theme": "bisats",
    "instruction": "Bygg avsiktsbisatsen med \"damit\".",
    "swedishMeaning": "... för att eleverna ska förstå den tyska grammatiken bättre.",
    "chunks": [
      "damit",
      "die Schüler",
      "die deutsche Grammatik",
      "besser",
      "verstehen"
    ],
    "acceptableOrders": [
      [
        "damit",
        "die Schüler",
        "die deutsche Grammatik",
        "besser",
        "verstehen"
      ],
      [
        "damit",
        "die Schüler",
        "besser",
        "die deutsche Grammatik",
        "verstehen"
      ]
    ],
    "explanation": "Efter \"damit\" placeras det finita verbet \"verstehen\" allra sist i satsen."
  },
  {
    "id": "syn-bi-13",
    "theme": "bisats",
    "instruction": "Bygg dåtidsbisatsen med \"als\".",
    "swedishMeaning": "... när jag studerade i Berlin för tio år sedan.",
    "chunks": [
      "als",
      "ich",
      "vor zehn Jahren",
      "in Berlin",
      "studierte"
    ],
    "acceptableOrders": [
      [
        "als",
        "ich",
        "vor zehn Jahren",
        "in Berlin",
        "studierte"
      ],
      [
        "als",
        "ich",
        "in Berlin",
        "vor zehn Jahren",
        "studierte"
      ]
    ],
    "explanation": "Engångshändelse i dåtid inleds med \"als\", och verbet \"studierte\" står sist."
  },
  {
    "id": "syn-bi-14",
    "theme": "bisats",
    "instruction": "Bygg bisatsen efter \"obwohl\".",
    "swedishMeaning": "... fastän hon bor i Tyskland sedan tre år.",
    "chunks": [
      "obwohl",
      "sie",
      "schon seit drei Jahren",
      "in Deutschland",
      "lebt"
    ],
    "acceptableOrders": [
      [
        "obwohl",
        "sie",
        "schon seit drei Jahren",
        "in Deutschland",
        "lebt"
      ],
      [
        "obwohl",
        "sie",
        "in Deutschland",
        "schon seit drei Jahren",
        "lebt"
      ]
    ],
    "explanation": "Finita verbet \"lebt\" står allra sist i obwohl-bisatsen."
  },
  {
    "id": "syn-bi-15",
    "theme": "bisats",
    "instruction": "Bygg bisatsen med \"dass\" och modalverbet \"wollen\".",
    "swedishMeaning": "... att min vän vill köpa en ny cykel.",
    "chunks": [
      "dass",
      "mein Freund",
      "ein neues Fahrrad",
      "kaufen",
      "will"
    ],
    "acceptableOrders": [
      [
        "dass",
        "mein Freund",
        "ein neues Fahrrad",
        "kaufen",
        "will"
      ]
    ],
    "explanation": "Infinitiven \"kaufen\" står näst sist och böjda modalverbet \"will\" står sist."
  },
  {
    "id": "syn-bi-16",
    "theme": "bisats",
    "instruction": "Bygg bisatsen med negering efter \"weil\".",
    "swedishMeaning": "... eftersom barnet inte förstår den matematiska uppgiften.",
    "chunks": [
      "weil",
      "das Kind",
      "die mathematische Aufgabe",
      "nicht",
      "versteht"
    ],
    "acceptableOrders": [
      [
        "weil",
        "das Kind",
        "die mathematische Aufgabe",
        "nicht",
        "versteht"
      ]
    ],
    "explanation": "Negationen \"nicht\" står före verbet, och böjda \"versteht\" står allra sist."
  },
  {
    "id": "syn-bi-17",
    "theme": "bisats",
    "instruction": "Bygg relativsatsen med maskulint subjektsrelativpronomen \"der\".",
    "swedishMeaning": "... som bor i Hamburg sedan över tjugo år.",
    "chunks": [
      "der",
      "seit über zwanzig Jahren",
      "in Hamburg",
      "wohnt"
    ],
    "acceptableOrders": [
      [
        "der",
        "seit über zwanzig Jahren",
        "in Hamburg",
        "wohnt"
      ],
      [
        "der",
        "in Hamburg",
        "seit über zwanzig Jahren",
        "wohnt"
      ]
    ],
    "explanation": "En relativsats är en bisats; därför måste det böjda verbet (\"wohnt\") stå sist."
  },
  {
    "id": "syn-bi-18",
    "theme": "bisats",
    "instruction": "Bygg relativsatsen i perfekt med feminint pronomen \"die\".",
    "swedishMeaning": "... som satte ett fantastiskt rekord igår.",
    "chunks": [
      "die",
      "gestern",
      "einen fantastischen Rekord",
      "aufgestellt",
      "hat"
    ],
    "acceptableOrders": [
      [
        "die",
        "gestern",
        "einen fantastischen Rekord",
        "aufgestellt",
        "hat"
      ],
      [
        "die",
        "einen fantastischen Rekord",
        "gestern",
        "aufgestellt",
        "hat"
      ]
    ],
    "explanation": "I relativsats i perfekt står participet \"aufgestellt\" näst sist och \"hat\" sist."
  },
  {
    "id": "syn-bi-19",
    "theme": "bisats",
    "instruction": "Bygg relativsatsen med neutralt pronomen \"das\".",
    "swedishMeaning": "... som ligger på bordet sedan flera dagar.",
    "chunks": [
      "das",
      "schon seit Tagen",
      "auf dem Tisch",
      "liegt"
    ],
    "acceptableOrders": [
      [
        "das",
        "schon seit Tagen",
        "auf dem Tisch",
        "liegt"
      ],
      [
        "das",
        "auf dem Tisch",
        "schon seit Tagen",
        "liegt"
      ]
    ],
    "explanation": "Relativpronomenet \"das\" inleder bisatsen och verbet \"liegt\" avslutar den."
  },
  {
    "id": "syn-bi-20",
    "theme": "bisats",
    "instruction": "Bygg relativsatsen med ackusativobjektspronomenet \"den\".",
    "swedishMeaning": "... som vi såg på teatern igår kväll.",
    "chunks": [
      "den",
      "wir",
      "gestern Abend",
      "im Theater",
      "gesehen",
      "haben"
    ],
    "acceptableOrders": [
      [
        "den",
        "wir",
        "gestern Abend",
        "im Theater",
        "gesehen",
        "haben"
      ],
      [
        "den",
        "wir",
        "im Theater",
        "gestern Abend",
        "gesehen",
        "haben"
      ]
    ],
    "explanation": "Objektsrelativsatsen har verbet \"haben\" allra sist efter participet \"gesehen\"."
  },
  {
    "id": "syn-bi-21",
    "theme": "bisats",
    "instruction": "Bygg villkorsbisatsen med partikelverbet \"durchlesen\".",
    "swedishMeaning": "... om man läser igenom reglerna uppmärksamt.",
    "chunks": [
      "wenn",
      "man",
      "die Regeln",
      "aufmerksam",
      "durchliest"
    ],
    "acceptableOrders": [
      [
        "wenn",
        "man",
        "die Regeln",
        "aufmerksam",
        "durchliest"
      ],
      [
        "wenn",
        "man",
        "aufmerksam",
        "die Regeln",
        "durchliest"
      ]
    ],
    "explanation": "I en bisats delas INTE partikelverb: prefixet sitter ihop med stammen (\"durchliest\") längst bak!"
  },
  {
    "id": "syn-bi-22",
    "theme": "bisats",
    "instruction": "Bygg orsakssatsen med konjunktionen \"da\".",
    "swedishMeaning": "... då det ösregnar därute.",
    "chunks": [
      "da",
      "es",
      "draußen",
      "in Strömen",
      "regnet"
    ],
    "acceptableOrders": [
      [
        "da",
        "es",
        "draußen",
        "in Strömen",
        "regnet"
      ]
    ],
    "explanation": "Bindeordet \"da\" fungerar som \"weil\" och placerar det finita verbet (\"regnet\") sist."
  },
  {
    "id": "syn-bi-23",
    "theme": "bisats",
    "instruction": "Bygg bisatsen med \"ob\" och modalverbet \"können\".",
    "swedishMeaning": "... om hon kan delta i mötet imorgon.",
    "chunks": [
      "ob",
      "sie",
      "morgen",
      "an der Sitzung",
      "teilnehmen",
      "kann"
    ],
    "acceptableOrders": [
      [
        "ob",
        "sie",
        "morgen",
        "an der Sitzung",
        "teilnehmen",
        "kann"
      ],
      [
        "ob",
        "sie",
        "an der Sitzung",
        "morgen",
        "teilnehmen",
        "kann"
      ]
    ],
    "explanation": "Infinitiven \"teilnehmen\" står näst sist och böjda modalverbet \"kann\" står sist."
  },
  {
    "id": "syn-bi-24",
    "theme": "bisats",
    "instruction": "Bygg bisatsen efter \"weil\" med modalverbet \"müssen\".",
    "swedishMeaning": "... eftersom min pappa måste stiga upp tidigt varje vardag.",
    "chunks": [
      "weil",
      "mein Vater",
      "jeden Werktag",
      "früh",
      "aufstehen",
      "muss"
    ],
    "acceptableOrders": [
      [
        "weil",
        "mein Vater",
        "jeden Werktag",
        "früh",
        "aufstehen",
        "muss"
      ]
    ],
    "explanation": "I bisats med partikelverb + modalverb står partikelverbet i hel infinitiv (\"aufstehen\") och modalverbet sist (\"muss\")."
  },
  {
    "id": "syn-bi-25",
    "theme": "bisats",
    "instruction": "Bygg att-bisatsen i perfekt med \"haben\".",
    "swedishMeaning": "... att forskarna har utvecklat en ny metod.",
    "chunks": [
      "dass",
      "die Wissenschaftler",
      "eine neue Methode",
      "entwickelt",
      "haben"
    ],
    "acceptableOrders": [
      [
        "dass",
        "die Wissenschaftler",
        "eine neue Methode",
        "entwickelt",
        "haben"
      ]
    ],
    "explanation": "Efter \"dass\" kommer subjektet först och perfektkomplexet \"entwickelt haben\" sist."
  },
  {
    "id": "syn-bi-26",
    "theme": "bisats",
    "instruction": "Bygg bisatsen med preteritum efter \"obwohl\".",
    "swedishMeaning": "... fastän uppgiften verkade mycket enkel vid första anblicken.",
    "chunks": [
      "obwohl",
      "die Aufgabe",
      "auf den ersten Blick",
      "sehr einfach",
      "schien"
    ],
    "acceptableOrders": [
      [
        "obwohl",
        "die Aufgabe",
        "auf den ersten Blick",
        "sehr einfach",
        "schien"
      ]
    ],
    "explanation": "Preteritumformen \"schien\" står allra sist i obwohl-bisatsen."
  },
  {
    "id": "syn-bi-27",
    "theme": "bisats",
    "instruction": "Bygg tidsbisatsen med partikelverbet \"antreten\".",
    "swedishMeaning": "... innan vi påbörjar den långa resan till Italien.",
    "chunks": [
      "bevor",
      "wir",
      "die lange Reise",
      "nach Italien",
      "antreten"
    ],
    "acceptableOrders": [
      [
        "bevor",
        "wir",
        "die lange Reise",
        "nach Italien",
        "antreten"
      ],
      [
        "bevor",
        "wir",
        "nach Italien",
        "die lange Reise",
        "antreten"
      ]
    ],
    "explanation": "I bisats förblir partikelverbet osplittrat (\"antreten\") och placeras längst bak."
  },
  {
    "id": "syn-bi-28",
    "theme": "bisats",
    "instruction": "Bygg bisatsen med två objekt efter \"während\".",
    "swedishMeaning": "... medan läraren förklarar grammatiken för eleverna.",
    "chunks": [
      "während",
      "der Lehrer",
      "den Schülern",
      "die Grammatik",
      "erklärt"
    ],
    "acceptableOrders": [
      [
        "während",
        "der Lehrer",
        "den Schülern",
        "die Grammatik",
        "erklärt"
      ]
    ],
    "explanation": "Objekten står i mittfältet och verbet \"erklärt\" stänger bisatsen längst bak."
  },
  {
    "id": "syn-bi-29",
    "theme": "bisats",
    "instruction": "Bygg bisatsen i pluskvamperfekt efter \"nachdem\".",
    "swedishMeaning": "... efter att alla gäster hade lämnat det festliga huset.",
    "chunks": [
      "nachdem",
      "alle Gäste",
      "das festliche Haus",
      "verlassen",
      "hatten"
    ],
    "acceptableOrders": [
      [
        "nachdem",
        "alle Gäste",
        "das festliche Haus",
        "verlassen",
        "hatten"
      ]
    ],
    "explanation": "Efter \"nachdem\" står participet \"verlassen\" och därefter det böjda \"hatten\" sist."
  },
  {
    "id": "syn-bi-30",
    "theme": "bisats",
    "instruction": "Bygg bisatsen med \"möchte\" och infinitiven \"anvertrauen\".",
    "swedishMeaning": "... eftersom jag skulle vilja anförtro dig en viktig hemlighet.",
    "chunks": [
      "weil",
      "ich",
      "dir",
      "ein wichtiges Geheimnis",
      "anvertrauen",
      "möchte"
    ],
    "acceptableOrders": [
      [
        "weil",
        "ich",
        "dir",
        "ein wichtiges Geheimnis",
        "anvertrauen",
        "möchte"
      ]
    ],
    "explanation": "Infinitiven \"anvertrauen\" står näst sist och böjda \"möchte\" står allra sist."
  }
];
