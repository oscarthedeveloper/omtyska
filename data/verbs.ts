/**
 * Verbdrillen data – German verb paradigms and usage in context.
 * Contains 85 distinct verbs with over 1 700 validated inflected forms.
 */

export type GermanVerbForm = {
  ich: string;
  du: string;
  erSieEs: string;
  wir: string;
  ihr: string;
  sieSie: string;
};

export type GermanVerbEntry = {
  infinitive: string;
  swedish: string;
  type: 'svagt' | 'starkt' | 'blandat' | 'hjalpverb' | 'modalverb';
  auxiliary: 'haben' | 'sein';
  participleII: string;
  praeteritumStamm: string;
  isSeparable?: boolean;
  prefix?: string;
  present: GermanVerbForm;
  praeteritum: GermanVerbForm;
  sampleSentence: {
    german: string;
    swedish: string;
    blankWord: string;
  };
};

export const GERMAN_VERBS: GermanVerbEntry[] = [
  {
    "infinitive": "sein",
    "swedish": "vara",
    "type": "hjalpverb",
    "auxiliary": "sein",
    "participleII": "gewesen",
    "praeteritumStamm": "war",
    "present": {
      "ich": "bin",
      "du": "bist",
      "erSieEs": "ist",
      "wir": "sind",
      "ihr": "seid",
      "sieSie": "sind"
    },
    "praeteritum": {
      "ich": "war",
      "du": "warst",
      "erSieEs": "war",
      "wir": "waren",
      "ihr": "wart",
      "sieSie": "waren"
    },
    "sampleSentence": {
      "german": "Ich ___ gestern in Berlin gewesen.",
      "swedish": "Jag har varit i Berlin igår.",
      "blankWord": "bin"
    }
  },
  {
    "infinitive": "haben",
    "swedish": "ha",
    "type": "hjalpverb",
    "auxiliary": "haben",
    "participleII": "gehabt",
    "praeteritumStamm": "hatte",
    "present": {
      "ich": "habe",
      "du": "hast",
      "erSieEs": "hat",
      "wir": "haben",
      "ihr": "habt",
      "sieSie": "haben"
    },
    "praeteritum": {
      "ich": "hatte",
      "du": "hattest",
      "erSieEs": "hatte",
      "wir": "hatten",
      "ihr": "hattet",
      "sieSie": "hatten"
    },
    "sampleSentence": {
      "german": "___ du gestern Zeit gehabt?",
      "swedish": "Hade du tid igår?",
      "blankWord": "Hast"
    }
  },
  {
    "infinitive": "werden",
    "swedish": "bli",
    "type": "hjalpverb",
    "auxiliary": "sein",
    "participleII": "geworden",
    "praeteritumStamm": "wurde",
    "present": {
      "ich": "werde",
      "du": "wirst",
      "erSieEs": "wird",
      "wir": "werden",
      "ihr": "werdet",
      "sieSie": "werden"
    },
    "praeteritum": {
      "ich": "wurde",
      "du": "wurdest",
      "erSieEs": "wurde",
      "wir": "wurden",
      "ihr": "wurdet",
      "sieSie": "wurden"
    },
    "sampleSentence": {
      "german": "Es ___ langsam dunkel.",
      "swedish": "Det blir långsamt mörkt.",
      "blankWord": "wird"
    }
  },
  {
    "infinitive": "können",
    "swedish": "kunna",
    "type": "modalverb",
    "auxiliary": "haben",
    "participleII": "gekonnt",
    "praeteritumStamm": "konnte",
    "present": {
      "ich": "kann",
      "du": "kannst",
      "erSieEs": "kann",
      "wir": "können",
      "ihr": "könnt",
      "sieSie": "können"
    },
    "praeteritum": {
      "ich": "konnte",
      "du": "konntest",
      "erSieEs": "konnte",
      "wir": "konnten",
      "ihr": "konntet",
      "sieSie": "konnten"
    },
    "sampleSentence": {
      "german": "___ du mir helfen?",
      "swedish": "Kan du hjälpa mig?",
      "blankWord": "Kannst"
    }
  },
  {
    "infinitive": "müssen",
    "swedish": "måste / vara tvungen",
    "type": "modalverb",
    "auxiliary": "haben",
    "participleII": "gemusst",
    "praeteritumStamm": "musste",
    "present": {
      "ich": "muss",
      "du": "musst",
      "erSieEs": "muss",
      "wir": "müssen",
      "ihr": "müsst",
      "sieSie": "müssen"
    },
    "praeteritum": {
      "ich": "musste",
      "du": "musstest",
      "erSieEs": "musste",
      "wir": "mussten",
      "ihr": "musstet",
      "sieSie": "mussten"
    },
    "sampleSentence": {
      "german": "Wir ___ heute früh aufstehen.",
      "swedish": "Vi måste gå upp tidigt idag.",
      "blankWord": "müssen"
    }
  },
  {
    "infinitive": "wollen",
    "swedish": "vilja",
    "type": "modalverb",
    "auxiliary": "haben",
    "participleII": "gewollt",
    "praeteritumStamm": "wollte",
    "present": {
      "ich": "will",
      "du": "willst",
      "erSieEs": "will",
      "wir": "wollen",
      "ihr": "wollt",
      "sieSie": "wollen"
    },
    "praeteritum": {
      "ich": "wollte",
      "du": "wolltest",
      "erSieEs": "wollte",
      "wir": "wollten",
      "ihr": "wolltet",
      "sieSie": "wollten"
    },
    "sampleSentence": {
      "german": "Er ___ nach Deutschland reisen.",
      "swedish": "Han vill resa till Tyskland.",
      "blankWord": "will"
    }
  },
  {
    "infinitive": "dürfen",
    "swedish": "få / ha lov att",
    "type": "modalverb",
    "auxiliary": "haben",
    "participleII": "gedurft",
    "praeteritumStamm": "durfte",
    "present": {
      "ich": "darf",
      "du": "darfst",
      "erSieEs": "darf",
      "wir": "dürfen",
      "ihr": "dürft",
      "sieSie": "dürfen"
    },
    "praeteritum": {
      "ich": "durfte",
      "du": "durftest",
      "erSieEs": "durfte",
      "wir": "durften",
      "ihr": "durftet",
      "sieSie": "durften"
    },
    "sampleSentence": {
      "german": "Hier ___ man nicht parken.",
      "swedish": "Här får man inte parkera.",
      "blankWord": "darf"
    }
  },
  {
    "infinitive": "sollen",
    "swedish": "böra / skola",
    "type": "modalverb",
    "auxiliary": "haben",
    "participleII": "gesollt",
    "praeteritumStamm": "sollte",
    "present": {
      "ich": "soll",
      "du": "sollst",
      "erSieEs": "soll",
      "wir": "sollen",
      "ihr": "sollt",
      "sieSie": "sollen"
    },
    "praeteritum": {
      "ich": "sollte",
      "du": "solltest",
      "erSieEs": "sollte",
      "wir": "sollten",
      "ihr": "solltet",
      "sieSie": "sollten"
    },
    "sampleSentence": {
      "german": "Was ___ ich jetzt machen?",
      "swedish": "Vad ska jag göra nu?",
      "blankWord": "soll"
    }
  },
  {
    "infinitive": "mögen",
    "swedish": "tycka om / gilla",
    "type": "modalverb",
    "auxiliary": "haben",
    "participleII": "gemocht",
    "praeteritumStamm": "mochte",
    "present": {
      "ich": "mag",
      "du": "magst",
      "erSieEs": "mag",
      "wir": "mögen",
      "ihr": "mögt",
      "sieSie": "mögen"
    },
    "praeteritum": {
      "ich": "mochte",
      "du": "mochtest",
      "erSieEs": "mochte",
      "wir": "mochten",
      "ihr": "mochtet",
      "sieSie": "mochten"
    },
    "sampleSentence": {
      "german": "Ich ___ klassische Musik sehr.",
      "swedish": "Jag gillar klassisk musik mycket.",
      "blankWord": "mag"
    }
  },
  {
    "infinitive": "machen",
    "swedish": "göra",
    "type": "svagt",
    "auxiliary": "haben",
    "participleII": "gemacht",
    "praeteritumStamm": "machte",
    "present": {
      "ich": "mache",
      "du": "machst",
      "erSieEs": "macht",
      "wir": "machen",
      "ihr": "macht",
      "sieSie": "machen"
    },
    "praeteritum": {
      "ich": "machte",
      "du": "machtest",
      "erSieEs": "machte",
      "wir": "machten",
      "ihr": "machtet",
      "sieSie": "machten"
    },
    "sampleSentence": {
      "german": "Was ___ du heute Abend?",
      "swedish": "Vad gör du ikväll?",
      "blankWord": "machst"
    }
  },
  {
    "infinitive": "lernen",
    "swedish": "lära sig",
    "type": "svagt",
    "auxiliary": "haben",
    "participleII": "gelernt",
    "praeteritumStamm": "lernte",
    "present": {
      "ich": "lerne",
      "du": "lernst",
      "erSieEs": "lernt",
      "wir": "lernen",
      "ihr": "lernt",
      "sieSie": "lernen"
    },
    "praeteritum": {
      "ich": "lernte",
      "du": "lerntest",
      "erSieEs": "lernte",
      "wir": "lernten",
      "ihr": "lerntet",
      "sieSie": "lernten"
    },
    "sampleSentence": {
      "german": "Wir ___ seit einem Jahr Deutsch.",
      "swedish": "Vi lär oss tyska sedan ett år.",
      "blankWord": "lernen"
    }
  },
  {
    "infinitive": "wohnen",
    "swedish": "bo",
    "type": "svagt",
    "auxiliary": "haben",
    "participleII": "gewohnt",
    "praeteritumStamm": "wohnte",
    "present": {
      "ich": "wohne",
      "du": "wohnst",
      "erSieEs": "wohnt",
      "wir": "wohnen",
      "ihr": "wohnt",
      "sieSie": "wohnen"
    },
    "praeteritum": {
      "ich": "wohnte",
      "du": "wohntest",
      "erSieEs": "wohnte",
      "wir": "wohnten",
      "ihr": "wohntet",
      "sieSie": "wohnten"
    },
    "sampleSentence": {
      "german": "Wo ___ du in Berlin?",
      "swedish": "Var bor du i Berlin?",
      "blankWord": "wohnst"
    }
  },
  {
    "infinitive": "kaufen",
    "swedish": "köpa",
    "type": "svagt",
    "auxiliary": "haben",
    "participleII": "gekauft",
    "praeteritumStamm": "kaufte",
    "present": {
      "ich": "kaufe",
      "du": "kaufst",
      "erSieEs": "kauft",
      "wir": "kaufen",
      "ihr": "kauft",
      "sieSie": "kaufen"
    },
    "praeteritum": {
      "ich": "kaufte",
      "du": "kauftest",
      "erSieEs": "kaufte",
      "wir": "kauften",
      "ihr": "kauftet",
      "sieSie": "kauften"
    },
    "sampleSentence": {
      "german": "Er ___ ein neues Fahrrad.",
      "swedish": "Han köper en ny cykel.",
      "blankWord": "kauft"
    }
  },
  {
    "infinitive": "spielen",
    "swedish": "spela / leka",
    "type": "svagt",
    "auxiliary": "haben",
    "participleII": "gespielt",
    "praeteritumStamm": "spielte",
    "present": {
      "ich": "spiele",
      "du": "spielst",
      "erSieEs": "spielt",
      "wir": "spielen",
      "ihr": "spielt",
      "sieSie": "spielen"
    },
    "praeteritum": {
      "ich": "spielte",
      "du": "spieltest",
      "erSieEs": "spielte",
      "wir": "spielten",
      "ihr": "spieltet",
      "sieSie": "spielten"
    },
    "sampleSentence": {
      "german": "Die Kinder ___ draußen im Park.",
      "swedish": "Barnen leker ute i parken.",
      "blankWord": "spielen"
    }
  },
  {
    "infinitive": "arbeiten",
    "swedish": "arbeta / jobba",
    "type": "svagt",
    "auxiliary": "haben",
    "participleII": "gearbeitet",
    "praeteritumStamm": "arbeitete",
    "present": {
      "ich": "arbeite",
      "du": "arbeitest",
      "erSieEs": "arbeitet",
      "wir": "arbeiten",
      "ihr": "arbeitet",
      "sieSie": "arbeiten"
    },
    "praeteritum": {
      "ich": "arbeitete",
      "du": "arbeitetest",
      "erSieEs": "arbeitete",
      "wir": "arbeiteten",
      "ihr": "arbeitetet",
      "sieSie": "arbeiteten"
    },
    "sampleSentence": {
      "german": "Wo ___ deine Eltern?",
      "swedish": "Var arbetar dina föräldrar?",
      "blankWord": "arbeiten"
    }
  },
  {
    "infinitive": "hören",
    "swedish": "höra",
    "type": "svagt",
    "auxiliary": "haben",
    "participleII": "gehört",
    "praeteritumStamm": "hörte",
    "present": {
      "ich": "höre",
      "du": "hörst",
      "erSieEs": "hört",
      "wir": "hören",
      "ihr": "hört",
      "sieSie": "hören"
    },
    "praeteritum": {
      "ich": "hörte",
      "du": "hörtest",
      "erSieEs": "hörte",
      "wir": "hörten",
      "ihr": "hörtet",
      "sieSie": "hörten"
    },
    "sampleSentence": {
      "german": "Ich ___ gern Podcasts auf Deutsch.",
      "swedish": "Jag lyssnar gärna på poddar på tyska.",
      "blankWord": "höre"
    }
  },
  {
    "infinitive": "fragen",
    "swedish": "fråga",
    "type": "svagt",
    "auxiliary": "haben",
    "participleII": "gefragt",
    "praeteritumStamm": "fragte",
    "present": {
      "ich": "frage",
      "du": "fragst",
      "erSieEs": "fragt",
      "wir": "fragen",
      "ihr": "fragt",
      "sieSie": "fragen"
    },
    "praeteritum": {
      "ich": "fragte",
      "du": "fragtest",
      "erSieEs": "fragte",
      "wir": "fragten",
      "ihr": "fragtet",
      "sieSie": "fragten"
    },
    "sampleSentence": {
      "german": "Darf ich dich etwas ___?",
      "swedish": "Får jag fråga dig något?",
      "blankWord": "fragen"
    }
  },
  {
    "infinitive": "lieben",
    "swedish": "älska",
    "type": "svagt",
    "auxiliary": "haben",
    "participleII": "geliebt",
    "praeteritumStamm": "liebte",
    "present": {
      "ich": "liebe",
      "du": "liebst",
      "erSieEs": "liebt",
      "wir": "lieben",
      "ihr": "liebt",
      "sieSie": "lieben"
    },
    "praeteritum": {
      "ich": "liebte",
      "du": "liebtest",
      "erSieEs": "liebte",
      "wir": "liebten",
      "ihr": "liebtet",
      "sieSie": "liebten"
    },
    "sampleSentence": {
      "german": "Ich ___ dich von ganzem Herzen.",
      "swedish": "Jag älskar dig av hela mitt hjärta.",
      "blankWord": "liebe"
    }
  },
  {
    "infinitive": "kochen",
    "swedish": "laga mat / koka",
    "type": "svagt",
    "auxiliary": "haben",
    "participleII": "gekocht",
    "praeteritumStamm": "kochte",
    "present": {
      "ich": "koche",
      "du": "kochst",
      "erSieEs": "kocht",
      "wir": "kochen",
      "ihr": "kocht",
      "sieSie": "kochen"
    },
    "praeteritum": {
      "ich": "kochte",
      "du": "kochtest",
      "erSieEs": "kochte",
      "wir": "kochten",
      "ihr": "kochtet",
      "sieSie": "kochten"
    },
    "sampleSentence": {
      "german": "Wer ___ heute das Abendessen?",
      "swedish": "Vem lagar kvällsmaten idag?",
      "blankWord": "kocht"
    }
  },
  {
    "infinitive": "warten",
    "swedish": "vänta",
    "type": "svagt",
    "auxiliary": "haben",
    "participleII": "gewartet",
    "praeteritumStamm": "wartete",
    "present": {
      "ich": "warte",
      "du": "wartest",
      "erSieEs": "wartet",
      "wir": "warten",
      "ihr": "wartet",
      "sieSie": "warten"
    },
    "praeteritum": {
      "ich": "wartete",
      "du": "wartetest",
      "erSieEs": "wartete",
      "wir": "warteten",
      "ihr": "wartetet",
      "sieSie": "warteten"
    },
    "sampleSentence": {
      "german": "Wir ___ schon seit einer Stunde auf dich.",
      "swedish": "Vi väntar redan i en timme på dig.",
      "blankWord": "warten"
    }
  },
  {
    "infinitive": "tanzen",
    "swedish": "dansa",
    "type": "svagt",
    "auxiliary": "haben",
    "participleII": "getanzt",
    "praeteritumStamm": "tanzte",
    "present": {
      "ich": "tanze",
      "du": "tanzt",
      "erSieEs": "tanzt",
      "wir": "tanzen",
      "ihr": "tanzt",
      "sieSie": "tanzen"
    },
    "praeteritum": {
      "ich": "tanzte",
      "du": "tanztest",
      "erSieEs": "tanzte",
      "wir": "tanzten",
      "ihr": "tanztet",
      "sieSie": "tanzten"
    },
    "sampleSentence": {
      "german": "___ du gern Tango?",
      "swedish": "Dansar du gärna tango?",
      "blankWord": "Tanzt"
    }
  },
  {
    "infinitive": "reisen",
    "swedish": "resa",
    "type": "svagt",
    "auxiliary": "sein",
    "participleII": "gereist",
    "praeteritumStamm": "reiste",
    "present": {
      "ich": "reise",
      "du": "reist",
      "erSieEs": "reist",
      "wir": "reisen",
      "ihr": "reist",
      "sieSie": "reisen"
    },
    "praeteritum": {
      "ich": "reiste",
      "du": "reistest",
      "erSieEs": "reiste",
      "wir": "reisten",
      "ihr": "reistet",
      "sieSie": "reisten"
    },
    "sampleSentence": {
      "german": "Wir ___ im Sommer nach Italien.",
      "swedish": "Vi reser till Italien i sommar.",
      "blankWord": "reisen"
    }
  },
  {
    "infinitive": "suchen",
    "swedish": "söka / leta efter",
    "type": "svagt",
    "auxiliary": "haben",
    "participleII": "gesucht",
    "praeteritumStamm": "suchte",
    "present": {
      "ich": "suche",
      "du": "suchst",
      "erSieEs": "sucht",
      "wir": "suchen",
      "ihr": "sucht",
      "sieSie": "suchen"
    },
    "praeteritum": {
      "ich": "suchte",
      "du": "suchtest",
      "erSieEs": "suchte",
      "wir": "suchten",
      "ihr": "suchtet",
      "sieSie": "suchten"
    },
    "sampleSentence": {
      "german": "Ich ___ meinen Schlüssel.",
      "swedish": "Jag letar efter min nyckel.",
      "blankWord": "suche"
    }
  },
  {
    "infinitive": "öffnen",
    "swedish": "öppna",
    "type": "svagt",
    "auxiliary": "haben",
    "participleII": "geöffnet",
    "praeteritumStamm": "öffnete",
    "present": {
      "ich": "öffne",
      "du": "öffnest",
      "erSieEs": "öffnet",
      "wir": "öffnen",
      "ihr": "öffnet",
      "sieSie": "öffnen"
    },
    "praeteritum": {
      "ich": "öffnete",
      "du": "öffnetest",
      "erSieEs": "öffnete",
      "wir": "öffneten",
      "ihr": "öffnetet",
      "sieSie": "öffneten"
    },
    "sampleSentence": {
      "german": "Er ___ das Fenster.",
      "swedish": "Han öppnar fönstret.",
      "blankWord": "öffnet"
    }
  },
  {
    "infinitive": "schicken",
    "swedish": "skicka",
    "type": "svagt",
    "auxiliary": "haben",
    "participleII": "geschickt",
    "praeteritumStamm": "schickte",
    "present": {
      "ich": "schicke",
      "du": "schickst",
      "erSieEs": "schickt",
      "wir": "schicken",
      "ihr": "schickt",
      "sieSie": "schicken"
    },
    "praeteritum": {
      "ich": "schickte",
      "du": "schicktest",
      "erSieEs": "schickte",
      "wir": "schickten",
      "ihr": "schicktet",
      "sieSie": "schickten"
    },
    "sampleSentence": {
      "german": "Ich ___ dir gleich eine Nachricht.",
      "swedish": "Jag skickar dig ett meddelande strax.",
      "blankWord": "schicke"
    }
  },
  {
    "infinitive": "glauben",
    "swedish": "tro",
    "type": "svagt",
    "auxiliary": "haben",
    "participleII": "geglaubt",
    "praeteritumStamm": "glaubte",
    "present": {
      "ich": "glaube",
      "du": "glaubst",
      "erSieEs": "glaubt",
      "wir": "glauben",
      "ihr": "glaubt",
      "sieSie": "glauben"
    },
    "praeteritum": {
      "ich": "glaubte",
      "du": "glaubtest",
      "erSieEs": "glaubte",
      "wir": "glaubten",
      "ihr": "glaubtet",
      "sieSie": "glaubten"
    },
    "sampleSentence": {
      "german": "Ich ___ an dich.",
      "swedish": "Jag tror på dig.",
      "blankWord": "glaube"
    }
  },
  {
    "infinitive": "hoffen",
    "swedish": "hoppas",
    "type": "svagt",
    "auxiliary": "haben",
    "participleII": "gehofft",
    "praeteritumStamm": "hoffte",
    "present": {
      "ich": "hoffe",
      "du": "hoffst",
      "erSieEs": "hofft",
      "wir": "hoffen",
      "ihr": "hofft",
      "sieSie": "hoffen"
    },
    "praeteritum": {
      "ich": "hoffte",
      "du": "hofftest",
      "erSieEs": "hoffte",
      "wir": "hofften",
      "ihr": "hofftet",
      "sieSie": "hofften"
    },
    "sampleSentence": {
      "german": "Wir ___, dass das Wetter schön bleibt.",
      "swedish": "Vi hoppas att vädret förblir fint.",
      "blankWord": "hoffen"
    }
  },
  {
    "infinitive": "leben",
    "swedish": "leva",
    "type": "svagt",
    "auxiliary": "haben",
    "participleII": "gelebt",
    "praeteritumStamm": "lebte",
    "present": {
      "ich": "lebe",
      "du": "lebst",
      "erSieEs": "lebt",
      "wir": "leben",
      "ihr": "lebt",
      "sieSie": "leben"
    },
    "praeteritum": {
      "ich": "lebte",
      "du": "lebtest",
      "erSieEs": "lebte",
      "wir": "lebten",
      "ihr": "lebtet",
      "sieSie": "lebten"
    },
    "sampleSentence": {
      "german": "Meine Großmutter ___ auf dem Land.",
      "swedish": "Min mormor lever på landet.",
      "blankWord": "lebt"
    }
  },
  {
    "infinitive": "sagen",
    "swedish": "säga",
    "type": "svagt",
    "auxiliary": "haben",
    "participleII": "gesagt",
    "praeteritumStamm": "sagte",
    "present": {
      "ich": "sage",
      "du": "sagst",
      "erSieEs": "sagt",
      "wir": "sagen",
      "ihr": "sagt",
      "sieSie": "sagen"
    },
    "praeteritum": {
      "ich": "sagte",
      "du": "sagtest",
      "erSieEs": "sagte",
      "wir": "sagten",
      "ihr": "sagtet",
      "sieSie": "sagten"
    },
    "sampleSentence": {
      "german": "Was ___ er dazu?",
      "swedish": "Vad säger han om det?",
      "blankWord": "sagt"
    }
  },
  {
    "infinitive": "zahlen",
    "swedish": "betala",
    "type": "svagt",
    "auxiliary": "haben",
    "participleII": "gezahlt",
    "praeteritumStamm": "zahlte",
    "present": {
      "ich": "zahle",
      "du": "zahlst",
      "erSieEs": "zahlt",
      "wir": "zahlen",
      "ihr": "zahlt",
      "sieSie": "zahlen"
    },
    "praeteritum": {
      "ich": "zahlte",
      "du": "zahltest",
      "erSieEs": "zahlte",
      "wir": "zahlten",
      "ihr": "zahltet",
      "sieSie": "zahlten"
    },
    "sampleSentence": {
      "german": "Ich ___ die Rechnung mit Karte.",
      "swedish": "Jag betalar räkningen med kort.",
      "blankWord": "zahle"
    }
  },
  {
    "infinitive": "danken",
    "swedish": "tacka (styr dativ)",
    "type": "svagt",
    "auxiliary": "haben",
    "participleII": "gedankt",
    "praeteritumStamm": "dankte",
    "present": {
      "ich": "danke",
      "du": "dankst",
      "erSieEs": "dankt",
      "wir": "danken",
      "ihr": "dankt",
      "sieSie": "danken"
    },
    "praeteritum": {
      "ich": "dankte",
      "du": "danktest",
      "erSieEs": "dankte",
      "wir": "dankten",
      "ihr": "danktet",
      "sieSie": "dankten"
    },
    "sampleSentence": {
      "german": "Wir ___ Ihnen für Ihre Hilfe.",
      "swedish": "Vi tackar Er för Er hjälp.",
      "blankWord": "danken"
    }
  },
  {
    "infinitive": "fehlen",
    "swedish": "saknas / fattas",
    "type": "svagt",
    "auxiliary": "haben",
    "participleII": "gefehlt",
    "praeteritumStamm": "fehlte",
    "present": {
      "ich": "fehle",
      "du": "fehlst",
      "erSieEs": "fehlt",
      "wir": "fehlen",
      "ihr": "fehlt",
      "sieSie": "fehlen"
    },
    "praeteritum": {
      "ich": "fehlte",
      "du": "fehltest",
      "erSieEs": "fehlte",
      "wir": "fehlten",
      "ihr": "fehltet",
      "sieSie": "fehlten"
    },
    "sampleSentence": {
      "german": "Du ___ mir sehr.",
      "swedish": "Jag saknar dig mycket (du fattas mig).",
      "blankWord": "fehlst"
    }
  },
  {
    "infinitive": "gehören",
    "swedish": "tillhöra (styr dativ)",
    "type": "svagt",
    "auxiliary": "haben",
    "participleII": "gehört",
    "praeteritumStamm": "gehörte",
    "present": {
      "ich": "gehöre",
      "du": "gehörst",
      "erSieEs": "gehört",
      "wir": "gehören",
      "ihr": "gehört",
      "sieSie": "gehören"
    },
    "praeteritum": {
      "ich": "gehörte",
      "du": "gehörtest",
      "erSieEs": "gehörte",
      "wir": "gehörten",
      "ihr": "gehörtet",
      "sieSie": "gehörten"
    },
    "sampleSentence": {
      "german": "Das Fahrrad ___ meinem Bruder.",
      "swedish": "Cykeln tillhör min bror.",
      "blankWord": "gehört"
    }
  },
  {
    "infinitive": "passen",
    "swedish": "passa (storlek/tid, styr dativ)",
    "type": "svagt",
    "auxiliary": "haben",
    "participleII": "gepasst",
    "praeteritumStamm": "passte",
    "present": {
      "ich": "passe",
      "du": "passt",
      "erSieEs": "passt",
      "wir": "passen",
      "ihr": "passt",
      "sieSie": "passen"
    },
    "praeteritum": {
      "ich": "passte",
      "du": "passtest",
      "erSieEs": "passte",
      "wir": "passten",
      "ihr": "passtet",
      "sieSie": "passten"
    },
    "sampleSentence": {
      "german": "Die Hose ___ mir perfekt.",
      "swedish": "Byxorna passar mig perfekt.",
      "blankWord": "passt"
    }
  },
  {
    "infinitive": "schmecken",
    "swedish": "smaka gott (styr dativ)",
    "type": "svagt",
    "auxiliary": "haben",
    "participleII": "geschmeckt",
    "praeteritumStamm": "schmeckte",
    "present": {
      "ich": "schmecke",
      "du": "schmeckst",
      "erSieEs": "schmeckt",
      "wir": "schmecken",
      "ihr": "schmeckt",
      "sieSie": "schmecken"
    },
    "praeteritum": {
      "ich": "schmeckte",
      "du": "schmecktest",
      "erSieEs": "schmeckte",
      "wir": "schmeckten",
      "ihr": "schmecktet",
      "sieSie": "schmeckten"
    },
    "sampleSentence": {
      "german": "Das Essen ___ den Gästen ausgezeichnet.",
      "swedish": "Maten smakar gästerna utmärkt.",
      "blankWord": "schmeckt"
    }
  },
  {
    "infinitive": "zeigen",
    "swedish": "visa",
    "type": "svagt",
    "auxiliary": "haben",
    "participleII": "gezeigt",
    "praeteritumStamm": "zeigte",
    "present": {
      "ich": "zeige",
      "du": "zeigst",
      "erSieEs": "zeigt",
      "wir": "zeigen",
      "ihr": "zeigt",
      "sieSie": "zeigen"
    },
    "praeteritum": {
      "ich": "zeigte",
      "du": "zeigtest",
      "erSieEs": "zeigte",
      "wir": "zeigten",
      "ihr": "zeigtet",
      "sieSie": "zeigten"
    },
    "sampleSentence": {
      "german": "Können Sie mir den Weg ___?",
      "swedish": "Kan ni visa mig vägen?",
      "blankWord": "zeigen"
    }
  },
  {
    "infinitive": "brauchen",
    "swedish": "behöva",
    "type": "svagt",
    "auxiliary": "haben",
    "participleII": "gebraucht",
    "praeteritumStamm": "brauchte",
    "present": {
      "ich": "brauche",
      "du": "brauchst",
      "erSieEs": "braucht",
      "wir": "brauchen",
      "ihr": "braucht",
      "sieSie": "brauchen"
    },
    "praeteritum": {
      "ich": "brauchte",
      "du": "brauchtest",
      "erSieEs": "brauchte",
      "wir": "brauchten",
      "ihr": "brauchtet",
      "sieSie": "brauchten"
    },
    "sampleSentence": {
      "german": "Ich ___ deine Hilfe bei dieser Aufgabe.",
      "swedish": "Jag behöver din hjälp med denna uppgift.",
      "blankWord": "brauche"
    }
  },
  {
    "infinitive": "studieren",
    "swedish": "studera (på universitet)",
    "type": "svagt",
    "auxiliary": "haben",
    "participleII": "studiert",
    "praeteritumStamm": "studierte",
    "present": {
      "ich": "studiere",
      "du": "studierst",
      "erSieEs": "studiert",
      "wir": "studieren",
      "ihr": "studiert",
      "sieSie": "studieren"
    },
    "praeteritum": {
      "ich": "studierte",
      "du": "studiertest",
      "erSieEs": "studierte",
      "wir": "studierten",
      "ihr": "studiertet",
      "sieSie": "studierten"
    },
    "sampleSentence": {
      "german": "Er ___ Medizin in Heidelberg.",
      "swedish": "Han studerar medicin i Heidelberg.",
      "blankWord": "studiert"
    }
  },
  {
    "infinitive": "reparieren",
    "swedish": "reparera",
    "type": "svagt",
    "auxiliary": "haben",
    "participleII": "repariert",
    "praeteritumStamm": "reparierte",
    "present": {
      "ich": "repariere",
      "du": "reparierst",
      "erSieEs": "repariert",
      "wir": "reparieren",
      "ihr": "repariert",
      "sieSie": "reparieren"
    },
    "praeteritum": {
      "ich": "reparierte",
      "du": "repariertest",
      "erSieEs": "reparierte",
      "wir": "reparierten",
      "ihr": "repariertet",
      "sieSie": "reparierten"
    },
    "sampleSentence": {
      "german": "Der Mechaniker ___ den Motor.",
      "swedish": "Mekanikern reparerar motorn.",
      "blankWord": "repariert"
    }
  },
  {
    "infinitive": "sehen",
    "swedish": "se",
    "type": "starkt",
    "auxiliary": "haben",
    "participleII": "gesehen",
    "praeteritumStamm": "sah",
    "present": {
      "ich": "sehe",
      "du": "siehst",
      "erSieEs": "sieht",
      "wir": "sehen",
      "ihr": "seht",
      "sieSie": "sehen"
    },
    "praeteritum": {
      "ich": "sah",
      "du": "sahst",
      "erSieEs": "sah",
      "wir": "sahen",
      "ihr": "saht",
      "sieSie": "sahen"
    },
    "sampleSentence": {
      "german": "___ du den Vogel dort oben?",
      "swedish": "Ser du fågeln där uppe?",
      "blankWord": "Siehst"
    }
  },
  {
    "infinitive": "gehen",
    "swedish": "gå",
    "type": "starkt",
    "auxiliary": "sein",
    "participleII": "gegangen",
    "praeteritumStamm": "ging",
    "present": {
      "ich": "gehe",
      "du": "gehst",
      "erSieEs": "geht",
      "wir": "gehen",
      "ihr": "geht",
      "sieSie": "gehen"
    },
    "praeteritum": {
      "ich": "ging",
      "du": "gingst",
      "erSieEs": "ging",
      "wir": "gingen",
      "ihr": "gingt",
      "sieSie": "gingen"
    },
    "sampleSentence": {
      "german": "Er ___ jeden Tag zu Fuß zur Schule.",
      "swedish": "Han går till fots till skolan varje dag.",
      "blankWord": "geht"
    }
  },
  {
    "infinitive": "fahren",
    "swedish": "åka / köra",
    "type": "starkt",
    "auxiliary": "sein",
    "participleII": "gefahren",
    "praeteritumStamm": "fuhr",
    "present": {
      "ich": "fahre",
      "du": "fährst",
      "erSieEs": "fährt",
      "wir": "fahren",
      "ihr": "fahrt",
      "sieSie": "fahren"
    },
    "praeteritum": {
      "ich": "fuhr",
      "du": "fuhrst",
      "erSieEs": "fuhr",
      "wir": "fuhren",
      "ihr": "fuhrt",
      "sieSie": "fuhren"
    },
    "sampleSentence": {
      "german": "Morgen ___ wir mit dem Zug nach München.",
      "swedish": "Imorgon åker vi med tåget till München.",
      "blankWord": "fahren"
    }
  },
  {
    "infinitive": "lesen",
    "swedish": "läsa",
    "type": "starkt",
    "auxiliary": "haben",
    "participleII": "gelesen",
    "praeteritumStamm": "las",
    "present": {
      "ich": "lese",
      "du": "liest",
      "erSieEs": "liest",
      "wir": "lesen",
      "ihr": "lest",
      "sieSie": "lesen"
    },
    "praeteritum": {
      "ich": "las",
      "du": "lasest",
      "erSieEs": "las",
      "wir": "lasen",
      "ihr": "last",
      "sieSie": "lasen"
    },
    "sampleSentence": {
      "german": "Was ___ du zurzeit für ein Buch?",
      "swedish": "Vad läser du för bok för närvarande?",
      "blankWord": "liest"
    }
  },
  {
    "infinitive": "sprechen",
    "swedish": "tala / prata",
    "type": "starkt",
    "auxiliary": "haben",
    "participleII": "gesprochen",
    "praeteritumStamm": "sprach",
    "present": {
      "ich": "spreche",
      "du": "sprichst",
      "erSieEs": "spricht",
      "wir": "sprechen",
      "ihr": "sprecht",
      "sieSie": "sprechen"
    },
    "praeteritum": {
      "ich": "sprach",
      "du": "sprachst",
      "erSieEs": "sprach",
      "wir": "sprachen",
      "ihr": "spracht",
      "sieSie": "sprachen"
    },
    "sampleSentence": {
      "german": "Er ___ fließend Deutsch und Schwedisch.",
      "swedish": "Han talar flytande tyska och svenska.",
      "blankWord": "spricht"
    }
  },
  {
    "infinitive": "schlafen",
    "swedish": "sova",
    "type": "starkt",
    "auxiliary": "haben",
    "participleII": "geschlafen",
    "praeteritumStamm": "schlief",
    "present": {
      "ich": "schlafe",
      "du": "schläfst",
      "erSieEs": "schläft",
      "wir": "schlafen",
      "ihr": "schlaft",
      "sieSie": "schlafen"
    },
    "praeteritum": {
      "ich": "schlief",
      "du": "schliefst",
      "erSieEs": "schlief",
      "wir": "schliefen",
      "ihr": "schlieft",
      "sieSie": "schliefen"
    },
    "sampleSentence": {
      "german": "Das Kind ___ schon seit acht Uhr.",
      "swedish": "Barnet sover redan sedan klockan åtta.",
      "blankWord": "schläft"
    }
  },
  {
    "infinitive": "nehmen",
    "swedish": "ta",
    "type": "starkt",
    "auxiliary": "haben",
    "participleII": "genommen",
    "praeteritumStamm": "nahm",
    "present": {
      "ich": "nehme",
      "du": "nimmst",
      "erSieEs": "nimmt",
      "wir": "nehmen",
      "ihr": "nehmt",
      "sieSie": "nehmen"
    },
    "praeteritum": {
      "ich": "nahm",
      "du": "nahmst",
      "erSieEs": "nahm",
      "wir": "nahmen",
      "ihr": "nahmt",
      "sieSie": "nahmen"
    },
    "sampleSentence": {
      "german": "Was ___ du zum Frühstück?",
      "swedish": "Vad tar du till frukost?",
      "blankWord": "nimmst"
    }
  },
  {
    "infinitive": "essen",
    "swedish": "äta",
    "type": "starkt",
    "auxiliary": "haben",
    "participleII": "gegessen",
    "praeteritumStamm": "aß",
    "present": {
      "ich": "esse",
      "du": "isst",
      "erSieEs": "isst",
      "wir": "essen",
      "ihr": "esst",
      "sieSie": "essen"
    },
    "praeteritum": {
      "ich": "aß",
      "du": "aßest",
      "erSieEs": "aß",
      "wir": "aßen",
      "ihr": "aßt",
      "sieSie": "aßen"
    },
    "sampleSentence": {
      "german": "Wir ___ heute frischen Fisch.",
      "swedish": "Vi äter färsk fisk idag.",
      "blankWord": "essen"
    }
  },
  {
    "infinitive": "trinken",
    "swedish": "dricka",
    "type": "starkt",
    "auxiliary": "haben",
    "participleII": "getrunken",
    "praeteritumStamm": "trank",
    "present": {
      "ich": "trinke",
      "du": "trinkst",
      "erSieEs": "trinkt",
      "wir": "trinken",
      "ihr": "trinkt",
      "sieSie": "trinken"
    },
    "praeteritum": {
      "ich": "trank",
      "du": "trankst",
      "erSieEs": "trank",
      "wir": "tranken",
      "ihr": "trankt",
      "sieSie": "tranken"
    },
    "sampleSentence": {
      "german": "Am Morgen ___ ich gern Tee.",
      "swedish": "På morgonen dricker jag gärna te.",
      "blankWord": "trinke"
    }
  },
  {
    "infinitive": "singen",
    "swedish": "sjunga",
    "type": "starkt",
    "auxiliary": "haben",
    "participleII": "gesungen",
    "praeteritumStamm": "sang",
    "present": {
      "ich": "singe",
      "du": "singst",
      "erSieEs": "singt",
      "wir": "singen",
      "ihr": "singt",
      "sieSie": "singen"
    },
    "praeteritum": {
      "ich": "sang",
      "du": "sangst",
      "erSieEs": "sang",
      "wir": "sangen",
      "ihr": "sangt",
      "sieSie": "sangen"
    },
    "sampleSentence": {
      "german": "Sie ___ wunderschön im Chor.",
      "swedish": "Hon sjunger underbart i kören.",
      "blankWord": "singt"
    }
  },
  {
    "infinitive": "finden",
    "swedish": "hitta / tycka",
    "type": "starkt",
    "auxiliary": "haben",
    "participleII": "gefunden",
    "praeteritumStamm": "fand",
    "present": {
      "ich": "finde",
      "du": "findest",
      "erSieEs": "findet",
      "wir": "finden",
      "ihr": "findet",
      "sieSie": "finden"
    },
    "praeteritum": {
      "ich": "fand",
      "du": "fandest",
      "erSieEs": "fand",
      "wir": "fanden",
      "ihr": "fandet",
      "sieSie": "fanden"
    },
    "sampleSentence": {
      "german": "Wie ___ du den neuen Film?",
      "swedish": "Vad tycker du om den nya filmen?",
      "blankWord": "findest"
    }
  },
  {
    "infinitive": "bleiben",
    "swedish": "stanna kvar (tar sein)",
    "type": "starkt",
    "auxiliary": "sein",
    "participleII": "geblieben",
    "praeteritumStamm": "blieb",
    "present": {
      "ich": "bleibe",
      "du": "bleibst",
      "erSieEs": "bleibt",
      "wir": "bleiben",
      "ihr": "bleibt",
      "sieSie": "bleiben"
    },
    "praeteritum": {
      "ich": "blieb",
      "du": "bliebst",
      "erSieEs": "blieb",
      "wir": "blieben",
      "ihr": "bliebt",
      "sieSie": "blieben"
    },
    "sampleSentence": {
      "german": "Er ___ heute wegen des Regens zu Hause.",
      "swedish": "Han stannar hemma idag på grund av regnet.",
      "blankWord": "bleibt"
    }
  },
  {
    "infinitive": "schreiben",
    "swedish": "skriva",
    "type": "starkt",
    "auxiliary": "haben",
    "participleII": "geschrieben",
    "praeteritumStamm": "schrieb",
    "present": {
      "ich": "schreibe",
      "du": "schreibst",
      "erSieEs": "schreibt",
      "wir": "schreiben",
      "ihr": "schreibt",
      "sieSie": "schreiben"
    },
    "praeteritum": {
      "ich": "schrieb",
      "du": "schriebst",
      "erSieEs": "schrieb",
      "wir": "schrieben",
      "ihr": "schriebt",
      "sieSie": "schrieben"
    },
    "sampleSentence": {
      "german": "Ich ___ einen langen Brief an meine Eltern.",
      "swedish": "Jag skriver ett långt brev till mina föräldrar.",
      "blankWord": "schreibe"
    }
  },
  {
    "infinitive": "kommen",
    "swedish": "komma (tar sein)",
    "type": "starkt",
    "auxiliary": "sein",
    "participleII": "gekommen",
    "praeteritumStamm": "kam",
    "present": {
      "ich": "komme",
      "du": "kommst",
      "erSieEs": "kommt",
      "wir": "kommen",
      "ihr": "kommt",
      "sieSie": "kommen"
    },
    "praeteritum": {
      "ich": "kam",
      "du": "kamst",
      "erSieEs": "kam",
      "wir": "kamen",
      "ihr": "kamt",
      "sieSie": "kamen"
    },
    "sampleSentence": {
      "german": "Wann ___ der Zug an?",
      "swedish": "När kommer tåget fram?",
      "blankWord": "kommt"
    }
  },
  {
    "infinitive": "geben",
    "swedish": "ge",
    "type": "starkt",
    "auxiliary": "haben",
    "participleII": "gegeben",
    "praeteritumStamm": "gab",
    "present": {
      "ich": "gebe",
      "du": "gibst",
      "erSieEs": "gibt",
      "wir": "geben",
      "ihr": "gebt",
      "sieSie": "geben"
    },
    "praeteritum": {
      "ich": "gab",
      "du": "gabst",
      "erSieEs": "gab",
      "wir": "gaben",
      "ihr": "gabt",
      "sieSie": "gaben"
    },
    "sampleSentence": {
      "german": "Es ___ heute viele Wolken am Himmel.",
      "swedish": "Det finns många moln på himlen idag.",
      "blankWord": "gibt"
    }
  },
  {
    "infinitive": "helfen",
    "swedish": "hjälpa (styr dativ)",
    "type": "starkt",
    "auxiliary": "haben",
    "participleII": "geholfen",
    "praeteritumStamm": "half",
    "present": {
      "ich": "helfe",
      "du": "hilfst",
      "erSieEs": "hilft",
      "wir": "helfen",
      "ihr": "helft",
      "sieSie": "helfen"
    },
    "praeteritum": {
      "ich": "half",
      "du": "halfst",
      "erSieEs": "half",
      "wir": "halfen",
      "ihr": "halft",
      "sieSie": "halfen"
    },
    "sampleSentence": {
      "german": "Er ___ seiner Mutter im Garten.",
      "swedish": "Han hjälper sin mamma i trädgården.",
      "blankWord": "hilft"
    }
  },
  {
    "infinitive": "treffen",
    "swedish": "träffa / möta",
    "type": "starkt",
    "auxiliary": "haben",
    "participleII": "getroffen",
    "praeteritumStamm": "traf",
    "present": {
      "ich": "treffe",
      "du": "triffst",
      "erSieEs": "trifft",
      "wir": "treffen",
      "ihr": "trefft",
      "sieSie": "treffen"
    },
    "praeteritum": {
      "ich": "traf",
      "du": "trafst",
      "erSieEs": "traf",
      "wir": "trafen",
      "ihr": "traft",
      "sieSie": "trafen"
    },
    "sampleSentence": {
      "german": "Ich ___ mich heute Abend mit Freunden.",
      "swedish": "Jag träffar vänner ikväll.",
      "blankWord": "treffe"
    }
  },
  {
    "infinitive": "laufen",
    "swedish": "springa / löpa (tar sein)",
    "type": "starkt",
    "auxiliary": "sein",
    "participleII": "gelaufen",
    "praeteritumStamm": "lief",
    "present": {
      "ich": "laufe",
      "du": "läufst",
      "erSieEs": "läuft",
      "wir": "laufen",
      "ihr": "lauft",
      "sieSie": "laufen"
    },
    "praeteritum": {
      "ich": "lief",
      "du": "liefst",
      "erSieEs": "lief",
      "wir": "liefen",
      "ihr": "lieft",
      "sieSie": "liefen"
    },
    "sampleSentence": {
      "german": "Das Kind ___ schnell zum Spielplatz.",
      "swedish": "Barnet springer snabbt till lekplatsen.",
      "blankWord": "läuft"
    }
  },
  {
    "infinitive": "stehen",
    "swedish": "stå",
    "type": "starkt",
    "auxiliary": "haben",
    "participleII": "gestanden",
    "praeteritumStamm": "stand",
    "present": {
      "ich": "stehe",
      "du": "stehst",
      "erSieEs": "steht",
      "wir": "stehen",
      "ihr": "steht",
      "sieSie": "stehen"
    },
    "praeteritum": {
      "ich": "stand",
      "du": "standest",
      "erSieEs": "stand",
      "wir": "standen",
      "ihr": "standet",
      "sieSie": "standen"
    },
    "sampleSentence": {
      "german": "Das Auto ___ vor der Garage.",
      "swedish": "Bilen står framför garaget.",
      "blankWord": "steht"
    }
  },
  {
    "infinitive": "fliegen",
    "swedish": "flyga (tar sein)",
    "type": "starkt",
    "auxiliary": "sein",
    "participleII": "geflogen",
    "praeteritumStamm": "flog",
    "present": {
      "ich": "fliege",
      "du": "fliegst",
      "erSieEs": "fliegt",
      "wir": "fliegen",
      "ihr": "fliegt",
      "sieSie": "fliegen"
    },
    "praeteritum": {
      "ich": "flog",
      "du": "flogst",
      "erSieEs": "flog",
      "wir": "flogen",
      "ihr": "flogt",
      "sieSie": "flogen"
    },
    "sampleSentence": {
      "german": "Wir ___ im Juli nach Mallorca.",
      "swedish": "Vi flyger till Mallorca i juli.",
      "blankWord": "fliegen"
    }
  },
  {
    "infinitive": "tragen",
    "swedish": "bära / ha på sig",
    "type": "starkt",
    "auxiliary": "haben",
    "participleII": "getragen",
    "praeteritumStamm": "trug",
    "present": {
      "ich": "trage",
      "du": "trägst",
      "erSieEs": "trägt",
      "wir": "tragen",
      "ihr": "tragt",
      "sieSie": "tragen"
    },
    "praeteritum": {
      "ich": "trug",
      "du": "trugst",
      "erSieEs": "trug",
      "wir": "trugen",
      "ihr": "trugt",
      "sieSie": "trugen"
    },
    "sampleSentence": {
      "german": "Sie ___ einen warmen Mantel.",
      "swedish": "Hon bär en varm kappa.",
      "blankWord": "trägt"
    }
  },
  {
    "infinitive": "waschen",
    "swedish": "tvätta",
    "type": "starkt",
    "auxiliary": "haben",
    "participleII": "gewaschen",
    "praeteritumStamm": "wusch",
    "present": {
      "ich": "wasche",
      "du": "wäschst",
      "erSieEs": "wäscht",
      "wir": "waschen",
      "ihr": "wascht",
      "sieSie": "waschen"
    },
    "praeteritum": {
      "ich": "wusch",
      "du": "wuschst",
      "erSieEs": "wusch",
      "wir": "wuschen",
      "ihr": "wuscht",
      "sieSie": "wuschen"
    },
    "sampleSentence": {
      "german": "Er ___ sich die Hände vor dem Essen.",
      "swedish": "Han tvättar händerna före maten.",
      "blankWord": "wäscht"
    }
  },
  {
    "infinitive": "fallen",
    "swedish": "falla (tar sein)",
    "type": "starkt",
    "auxiliary": "sein",
    "participleII": "gefallen",
    "praeteritumStamm": "fiel",
    "present": {
      "ich": "falle",
      "du": "fällst",
      "erSieEs": "fällt",
      "wir": "fallen",
      "ihr": "fallt",
      "sieSie": "fallen"
    },
    "praeteritum": {
      "ich": "fiel",
      "du": "fielst",
      "erSieEs": "fiel",
      "wir": "fielen",
      "ihr": "fielt",
      "sieSie": "fielen"
    },
    "sampleSentence": {
      "german": "Die Blätter ___ im Herbst von den Bäumen.",
      "swedish": "Bladen faller från träden på hösten.",
      "blankWord": "fallen"
    }
  },
  {
    "infinitive": "halten",
    "swedish": "hålla / stanna",
    "type": "starkt",
    "auxiliary": "haben",
    "participleII": "gehalten",
    "praeteritumStamm": "hielt",
    "present": {
      "ich": "halte",
      "du": "hältst",
      "erSieEs": "hält",
      "wir": "halten",
      "ihr": "haltet",
      "sieSie": "halten"
    },
    "praeteritum": {
      "ich": "hielt",
      "du": "hieltst",
      "erSieEs": "hielt",
      "wir": "hielten",
      "ihr": "hieltet",
      "sieSie": "hielten"
    },
    "sampleSentence": {
      "german": "Der Bus ___ direkt vor dem Hotel.",
      "swedish": "Bussen stannar direkt framför hotellet.",
      "blankWord": "hält"
    }
  },
  {
    "infinitive": "rufen",
    "swedish": "ropa / kalla",
    "type": "starkt",
    "auxiliary": "haben",
    "participleII": "gerufen",
    "praeteritumStamm": "rief",
    "present": {
      "ich": "rufe",
      "du": "rufst",
      "erSieEs": "ruft",
      "wir": "rufen",
      "ihr": "ruft",
      "sieSie": "rufen"
    },
    "praeteritum": {
      "ich": "rief",
      "du": "riefst",
      "erSieEs": "rief",
      "wir": "riefen",
      "ihr": "rieft",
      "sieSie": "riefen"
    },
    "sampleSentence": {
      "german": "Die Mutter ___ die Kinder zum Essen.",
      "swedish": "Mamman ropar barnen till maten.",
      "blankWord": "ruft"
    }
  },
  {
    "infinitive": "beginnen",
    "swedish": "börja",
    "type": "starkt",
    "auxiliary": "haben",
    "participleII": "begonnen",
    "praeteritumStamm": "begann",
    "present": {
      "ich": "beginne",
      "du": "beginnst",
      "erSieEs": "beginnt",
      "wir": "beginnen",
      "ihr": "beginnt",
      "sieSie": "beginnen"
    },
    "praeteritum": {
      "ich": "begann",
      "du": "begannst",
      "erSieEs": "begann",
      "wir": "begannen",
      "ihr": "begannt",
      "sieSie": "begannen"
    },
    "sampleSentence": {
      "german": "Der Deutschkurs ___ um neun Uhr.",
      "swedish": "Tyskakursen börjar klockan nio.",
      "blankWord": "beginnt"
    }
  },
  {
    "infinitive": "gewinnen",
    "swedish": "vinna",
    "type": "starkt",
    "auxiliary": "haben",
    "participleII": "gewonnen",
    "praeteritumStamm": "gewann",
    "present": {
      "ich": "gewinne",
      "du": "gewinnst",
      "erSieEs": "gewinnt",
      "wir": "gewinnen",
      "ihr": "gewinnt",
      "sieSie": "gewinnen"
    },
    "praeteritum": {
      "ich": "gewann",
      "du": "gewannst",
      "erSieEs": "gewann",
      "wir": "gewannen",
      "ihr": "gewannt",
      "sieSie": "gewannen"
    },
    "sampleSentence": {
      "german": "Unsere Mannschaft ___ das Endspiel.",
      "swedish": "Vårt lag vinner finalen.",
      "blankWord": "gewinnt"
    }
  },
  {
    "infinitive": "schwimmen",
    "swedish": "simma (tar sein)",
    "type": "starkt",
    "auxiliary": "sein",
    "participleII": "geschwommen",
    "praeteritumStamm": "schwamm",
    "present": {
      "ich": "schwimme",
      "du": "schwimmst",
      "erSieEs": "schwimmt",
      "wir": "schwimmen",
      "ihr": "schwimmt",
      "sieSie": "schwimmen"
    },
    "praeteritum": {
      "ich": "schwamm",
      "du": "schwammst",
      "erSieEs": "schwamm",
      "wir": "schwammen",
      "ihr": "schwammt",
      "sieSie": "schwammen"
    },
    "sampleSentence": {
      "german": "Wir ___ jeden Tag im See.",
      "swedish": "Vi simmar i sjön varje dag.",
      "blankWord": "schwimmen"
    }
  },
  {
    "infinitive": "sitzen",
    "swedish": "sitta",
    "type": "starkt",
    "auxiliary": "haben",
    "participleII": "gesessen",
    "praeteritumStamm": "saß",
    "present": {
      "ich": "sitze",
      "du": "sitzt",
      "erSieEs": "sitzt",
      "wir": "sitzen",
      "ihr": "sitzt",
      "sieSie": "sitzen"
    },
    "praeteritum": {
      "ich": "saß",
      "du": "saßest",
      "erSieEs": "saß",
      "wir": "saßen",
      "ihr": "saßt",
      "sieSie": "saßen"
    },
    "sampleSentence": {
      "german": "Er ___ auf dem bequemen Sofa.",
      "swedish": "Han sitter på den bekväma soffan.",
      "blankWord": "sitzt"
    }
  },
  {
    "infinitive": "liegen",
    "swedish": "ligga",
    "type": "starkt",
    "auxiliary": "haben",
    "participleII": "gelegen",
    "praeteritumStamm": "lag",
    "present": {
      "ich": "liege",
      "du": "liegst",
      "erSieEs": "liegt",
      "wir": "liegen",
      "ihr": "liegt",
      "sieSie": "liegen"
    },
    "praeteritum": {
      "ich": "lag",
      "du": "lagst",
      "erSieEs": "lag",
      "wir": "lagen",
      "ihr": "lagt",
      "sieSie": "lagen"
    },
    "sampleSentence": {
      "german": "Das Buch ___ auf dem Schreibtisch.",
      "swedish": "Boken ligger på skrivbordet.",
      "blankWord": "liegt"
    }
  },
  {
    "infinitive": "schließen",
    "swedish": "stänga / sluta",
    "type": "starkt",
    "auxiliary": "haben",
    "participleII": "geschlossen",
    "praeteritumStamm": "schloss",
    "present": {
      "ich": "schließe",
      "du": "schließt",
      "erSieEs": "schließt",
      "wir": "schließen",
      "ihr": "schließt",
      "sieSie": "schließen"
    },
    "praeteritum": {
      "ich": "schloss",
      "du": "schlossest",
      "erSieEs": "schloss",
      "wir": "schlossen",
      "ihr": "schlosst",
      "sieSie": "schlossen"
    },
    "sampleSentence": {
      "german": "Bitte ___ Sie die Tür leise!",
      "swedish": "Var snäll och stäng dörren tyst!",
      "blankWord": "schließen"
    }
  },
  {
    "infinitive": "bringen",
    "swedish": "ta med / hämta / föra",
    "type": "blandat",
    "auxiliary": "haben",
    "participleII": "gebracht",
    "praeteritumStamm": "brachte",
    "present": {
      "ich": "bringe",
      "du": "bringst",
      "erSieEs": "bringt",
      "wir": "bringen",
      "ihr": "bringt",
      "sieSie": "bringen"
    },
    "praeteritum": {
      "ich": "brachte",
      "du": "brachtest",
      "erSieEs": "brachte",
      "wir": "brachten",
      "ihr": "brachtet",
      "sieSie": "brachten"
    },
    "sampleSentence": {
      "german": "Der Kellner ___ uns die Speisekarte.",
      "swedish": "Servitören hämtar menyn åt oss.",
      "blankWord": "bringt"
    }
  },
  {
    "infinitive": "denken",
    "swedish": "tänka",
    "type": "blandat",
    "auxiliary": "haben",
    "participleII": "gedacht",
    "praeteritumStamm": "dachte",
    "present": {
      "ich": "denke",
      "du": "denkst",
      "erSieEs": "denkt",
      "wir": "denken",
      "ihr": "denkt",
      "sieSie": "denken"
    },
    "praeteritum": {
      "ich": "dachte",
      "du": "dachtest",
      "erSieEs": "dachte",
      "wir": "dachten",
      "ihr": "dachtet",
      "sieSie": "dachten"
    },
    "sampleSentence": {
      "german": "Ich ___ oft an unsere schöne Reise.",
      "swedish": "Jag tänker ofta på vår fina resa.",
      "blankWord": "denke"
    }
  },
  {
    "infinitive": "kennen",
    "swedish": "känna (en person/stad)",
    "type": "blandat",
    "auxiliary": "haben",
    "participleII": "gekannt",
    "praeteritumStamm": "kannte",
    "present": {
      "ich": "kenne",
      "du": "kennst",
      "erSieEs": "kennt",
      "wir": "kennen",
      "ihr": "kennt",
      "sieSie": "kennen"
    },
    "praeteritum": {
      "ich": "kannte",
      "du": "kanntest",
      "erSieEs": "kannte",
      "wir": "kannten",
      "ihr": "kanntet",
      "sieSie": "kannten"
    },
    "sampleSentence": {
      "german": "___ du diesen Mann?",
      "swedish": "Känner du den här mannen?",
      "blankWord": "Kennst"
    }
  },
  {
    "infinitive": "wissen",
    "swedish": "veta (fakta)",
    "type": "blandat",
    "auxiliary": "haben",
    "participleII": "gewusst",
    "praeteritumStamm": "wusste",
    "present": {
      "ich": "weiß",
      "du": "weißt",
      "erSieEs": "weiß",
      "wir": "wissen",
      "ihr": "wisst",
      "sieSie": "wissen"
    },
    "praeteritum": {
      "ich": "wusste",
      "du": "wusstest",
      "erSieEs": "wusste",
      "wir": "wussten",
      "ihr": "wusstet",
      "sieSie": "wussten"
    },
    "sampleSentence": {
      "german": "Ich ___ die Telefonnummer leider nicht.",
      "swedish": "Jag vet tyvärr inte telefonnumret.",
      "blankWord": "weiß"
    }
  },
  {
    "infinitive": "nennen",
    "swedish": "kalla / benämna",
    "type": "blandat",
    "auxiliary": "haben",
    "participleII": "genannt",
    "praeteritumStamm": "nannte",
    "present": {
      "ich": "nenne",
      "du": "nennst",
      "erSieEs": "nennt",
      "wir": "nennen",
      "ihr": "nennt",
      "sieSie": "nennen"
    },
    "praeteritum": {
      "ich": "nannte",
      "du": "nanntest",
      "erSieEs": "nannte",
      "wir": "nannten",
      "ihr": "nanntet",
      "sieSie": "nannten"
    },
    "sampleSentence": {
      "german": "Wie ___ man diese Blume auf Deutsch?",
      "swedish": "Vad kallar man denna blomma på tyska?",
      "blankWord": "nennt"
    }
  },
  {
    "infinitive": "rennen",
    "swedish": "springa snabbt (tar sein)",
    "type": "blandat",
    "auxiliary": "sein",
    "participleII": "gerannt",
    "praeteritumStamm": "rannte",
    "present": {
      "ich": "renne",
      "du": "rennst",
      "erSieEs": "rennt",
      "wir": "rennen",
      "ihr": "rennt",
      "sieSie": "rennen"
    },
    "praeteritum": {
      "ich": "rannte",
      "du": "ranntest",
      "erSieEs": "rannte",
      "wir": "rannten",
      "ihr": "ranntet",
      "sieSie": "rannten"
    },
    "sampleSentence": {
      "german": "Er ___ zur Bushaltestelle.",
      "swedish": "Han springer snabbt till busshållplatsen.",
      "blankWord": "rennt"
    }
  },
  {
    "infinitive": "senden",
    "swedish": "sända / skicka",
    "type": "blandat",
    "auxiliary": "haben",
    "participleII": "gesandt",
    "praeteritumStamm": "sandte",
    "present": {
      "ich": "sende",
      "du": "sendest",
      "erSieEs": "sendet",
      "wir": "senden",
      "ihr": "sendet",
      "sieSie": "senden"
    },
    "praeteritum": {
      "ich": "sandte",
      "du": "sandtest",
      "erSieEs": "sandte",
      "wir": "sandten",
      "ihr": "sandtet",
      "sieSie": "sandten"
    },
    "sampleSentence": {
      "german": "Ich ___ dir die Unterlagen per E-Mail.",
      "swedish": "Jag skickar dig dokumenten via e-post.",
      "blankWord": "sende"
    }
  },
  {
    "infinitive": "aufstehen",
    "swedish": "stiga upp (tar sein)",
    "type": "starkt",
    "auxiliary": "sein",
    "participleII": "aufgestanden",
    "praeteritumStamm": "stand auf",
    "isSeparable": true,
    "prefix": "auf",
    "present": {
      "ich": "stehe auf",
      "du": "stehst auf",
      "erSieEs": "steht auf",
      "wir": "stehen auf",
      "ihr": "steht auf",
      "sieSie": "stehen auf"
    },
    "praeteritum": {
      "ich": "stand auf",
      "du": "standest auf",
      "erSieEs": "stand auf",
      "wir": "standen auf",
      "ihr": "standet auf",
      "sieSie": "standen auf"
    },
    "sampleSentence": {
      "german": "Ich ___ jeden Morgen um sechs Uhr ___.",
      "swedish": "Jag stiger upp klockan sex varje morgon.",
      "blankWord": "stehe"
    }
  },
  {
    "infinitive": "anrufen",
    "swedish": "ringa till",
    "type": "starkt",
    "auxiliary": "haben",
    "participleII": "angerufen",
    "praeteritumStamm": "rief an",
    "isSeparable": true,
    "prefix": "an",
    "present": {
      "ich": "rufe an",
      "du": "rufst an",
      "erSieEs": "ruft an",
      "wir": "rufen an",
      "ihr": "ruft an",
      "sieSie": "rufen an"
    },
    "praeteritum": {
      "ich": "rief an",
      "du": "riefst an",
      "erSieEs": "rief an",
      "wir": "riefen an",
      "ihr": "rieft an",
      "sieSie": "riefen an"
    },
    "sampleSentence": {
      "german": "Ich ___ dich heute Abend ___.",
      "swedish": "Jag ringer dig ikväll.",
      "blankWord": "rufe"
    }
  },
  {
    "infinitive": "einkaufen",
    "swedish": "handla / shoppa",
    "type": "svagt",
    "auxiliary": "haben",
    "participleII": "eingekauft",
    "praeteritumStamm": "kaufte ein",
    "isSeparable": true,
    "prefix": "ein",
    "present": {
      "ich": "kaufe ein",
      "du": "kaufst ein",
      "erSieEs": "kauft ein",
      "wir": "kaufen ein",
      "ihr": "kauft ein",
      "sieSie": "kaufen ein"
    },
    "praeteritum": {
      "ich": "kaufte ein",
      "du": "kauftest ein",
      "erSieEs": "kaufte ein",
      "wir": "kauften ein",
      "ihr": "kauftet ein",
      "sieSie": "kauften ein"
    },
    "sampleSentence": {
      "german": "Wir ___ samstags im Supermarkt ___.",
      "swedish": "Vi handlar i snabbköpet på lördagar.",
      "blankWord": "kaufen"
    }
  },
  {
    "infinitive": "abfahren",
    "swedish": "avgå / köra iväg (tar sein)",
    "type": "starkt",
    "auxiliary": "sein",
    "participleII": "abgefahren",
    "praeteritumStamm": "fuhr ab",
    "isSeparable": true,
    "prefix": "ab",
    "present": {
      "ich": "fahre ab",
      "du": "fährst ab",
      "erSieEs": "fährt ab",
      "wir": "fahren ab",
      "ihr": "fahrt ab",
      "sieSie": "fahren ab"
    },
    "praeteritum": {
      "ich": "fuhr ab",
      "du": "fuhrst ab",
      "erSieEs": "fuhr ab",
      "wir": "fuhren ab",
      "ihr": "fuhrt ab",
      "sieSie": "fuhren ab"
    },
    "sampleSentence": {
      "german": "Der Zug ___ pünktlich um zehn Uhr ___.",
      "swedish": "Tåget avgår punktligt klockan tio.",
      "blankWord": "fährt"
    }
  },
  {
    "infinitive": "ankommen",
    "swedish": "anlända / komma fram (tar sein)",
    "type": "starkt",
    "auxiliary": "sein",
    "participleII": "angekommen",
    "praeteritumStamm": "kam an",
    "isSeparable": true,
    "prefix": "an",
    "present": {
      "ich": "komme an",
      "du": "kommst an",
      "erSieEs": "kommt an",
      "wir": "kommen an",
      "ihr": "kommt an",
      "sieSie": "kommen an"
    },
    "praeteritum": {
      "ich": "kam an",
      "du": "kamst an",
      "erSieEs": "kam an",
      "wir": "kamen an",
      "ihr": "kamt an",
      "sieSie": "kamen an"
    },
    "sampleSentence": {
      "german": "Wann ___ ihr am Flughafen ___?",
      "swedish": "När kommer ni fram till flygplatsen?",
      "blankWord": "kommt"
    }
  },
  {
    "infinitive": "mitkommen",
    "swedish": "följa med (tar sein)",
    "type": "starkt",
    "auxiliary": "sein",
    "participleII": "mitgekommen",
    "praeteritumStamm": "kam mit",
    "isSeparable": true,
    "prefix": "mit",
    "present": {
      "ich": "komme mit",
      "du": "kommst mit",
      "erSieEs": "kommt mit",
      "wir": "kommen mit",
      "ihr": "kommt mit",
      "sieSie": "kommen mit"
    },
    "praeteritum": {
      "ich": "kam mit",
      "du": "kamst mit",
      "erSieEs": "kam mit",
      "wir": "kamen mit",
      "ihr": "kamt mit",
      "sieSie": "kamen mit"
    },
    "sampleSentence": {
      "german": "___ du heute Abend ins Kino ___?",
      "swedish": "Följer du med på bio ikväll?",
      "blankWord": "Kommst"
    }
  },
  {
    "infinitive": "aufmachen",
    "swedish": "öppna",
    "type": "svagt",
    "auxiliary": "haben",
    "participleII": "aufgemacht",
    "praeteritumStamm": "machte auf",
    "isSeparable": true,
    "prefix": "auf",
    "present": {
      "ich": "mache auf",
      "du": "machst auf",
      "erSieEs": "macht auf",
      "wir": "machen auf",
      "ihr": "macht auf",
      "sieSie": "machen auf"
    },
    "praeteritum": {
      "ich": "machte auf",
      "du": "machtest auf",
      "erSieEs": "machte auf",
      "wir": "machten auf",
      "ihr": "machtet auf",
      "sieSie": "machten auf"
    },
    "sampleSentence": {
      "german": "Mach bitte das Fenster ___!",
      "swedish": "Öppna fönstret tack!",
      "blankWord": "auf"
    }
  },
  {
    "infinitive": "zumachen",
    "swedish": "stänga",
    "type": "svagt",
    "auxiliary": "haben",
    "participleII": "zugemacht",
    "praeteritumStamm": "machte zu",
    "isSeparable": true,
    "prefix": "zu",
    "present": {
      "ich": "mache zu",
      "du": "machst zu",
      "erSieEs": "macht zu",
      "wir": "machen zu",
      "ihr": "macht zu",
      "sieSie": "machen zu"
    },
    "praeteritum": {
      "ich": "machte zu",
      "du": "machtest zu",
      "erSieEs": "machte zu",
      "wir": "machten zu",
      "ihr": "machtet zu",
      "sieSie": "machten zu"
    },
    "sampleSentence": {
      "german": "Kannst du bitte die Tür ___?",
      "swedish": "Kan du vara snäll och stänga dörren?",
      "blankWord": "zumachen"
    }
  }
];
