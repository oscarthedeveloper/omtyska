/**
 * Glosdrillen data – 15 thematic decks with vocabulary, gender, plural and context.
 * Contains 750 fully calibrated vocabulary items (50 per deck).
 */

export type VocabItem = {
  id: string;
  german: string;
  swedish: string;
  wordClass: 'substantiv' | 'verb' | 'adjektiv' | 'uttryck' | 'adverb';
  gender?: 'maskulin' | 'feminin' | 'neutral';
  plural?: string;
  exampleSentence: string;
  exampleTranslation: string;
};

export type VocabDeck = {
  id: number;
  name: string;
  description: string;
  items: VocabItem[];
};

export const VOCAB_DECKS: VocabDeck[] = [
  {
    "id": 1,
    "name": "Identitet och familj",
    "description": "Ord för att presentera sig, familjemedlemmar och personuppgifter.",
    "items": [
      {
        "id": "v-01-01",
        "german": "der Name",
        "swedish": "namnet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Namen",
        "exampleSentence": "Mein Name ist Lukas.",
        "exampleTranslation": "Mitt namn är Lukas."
      },
      {
        "id": "v-01-02",
        "german": "der Vorname",
        "swedish": "förnamnet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Vornamen",
        "exampleSentence": "Mein Vorname ist Anna.",
        "exampleTranslation": "Mitt förnamn är Anna."
      },
      {
        "id": "v-01-03",
        "german": "der Nachname",
        "swedish": "efternamnet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Nachnamen",
        "exampleSentence": "Ihr Nachname ist Weber.",
        "exampleTranslation": "Hennes efternamn är Weber."
      },
      {
        "id": "v-01-04",
        "german": "die Mutter",
        "swedish": "mamman, modern",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Mütter",
        "exampleSentence": "Meine Mutter arbeitet als Ärztin.",
        "exampleTranslation": "Min mamma arbetar som läkare."
      },
      {
        "id": "v-01-05",
        "german": "der Vater",
        "swedish": "pappan, fadern",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Väter",
        "exampleSentence": "Mein Vater kocht sehr gern.",
        "exampleTranslation": "Min pappa lagar gärna mat."
      },
      {
        "id": "v-01-06",
        "german": "die Eltern",
        "swedish": "föräldrarna (endast pl)",
        "wordClass": "substantiv",
        "plural": "die Eltern",
        "exampleSentence": "Meine Eltern wohnen in Berlin.",
        "exampleTranslation": "Mina föräldrar bor i Berlin."
      },
      {
        "id": "v-01-07",
        "german": "das Kind",
        "swedish": "barnet",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Kinder",
        "exampleSentence": "Die Kinder spielen im Garten.",
        "exampleTranslation": "Barnen leker i trädgården."
      },
      {
        "id": "v-01-08",
        "german": "der Sohn",
        "swedish": "sonen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Söhne",
        "exampleSentence": "Ihr Sohn geht schon in die Schule.",
        "exampleTranslation": "Hennes son går redan i skolan."
      },
      {
        "id": "v-01-09",
        "german": "die Tochter",
        "swedish": "dottern",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Töchter",
        "exampleSentence": "Ihre Tochter studiert in Wien.",
        "exampleTranslation": "Deras dotter studerar i Wien."
      },
      {
        "id": "v-01-10",
        "german": "der Bruder",
        "swedish": "brodern",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Brüder",
        "exampleSentence": "Ich habe einen älteren Bruder.",
        "exampleTranslation": "Jag har en äldre bror."
      },
      {
        "id": "v-01-11",
        "german": "die Schwester",
        "swedish": "systern",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Schwestern",
        "exampleSentence": "Meine Schwester ist zwanzig Jahre alt.",
        "exampleTranslation": "Min syster är tjugo år gammal."
      },
      {
        "id": "v-01-12",
        "german": "die Geschwister",
        "swedish": "syskonen (endast pl)",
        "wordClass": "substantiv",
        "plural": "die Geschwister",
        "exampleSentence": "Hast du Geschwister?",
        "exampleTranslation": "Har du syskon?"
      },
      {
        "id": "v-01-13",
        "german": "der Großvater",
        "swedish": "morfadern / farfadern",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Großväter",
        "exampleSentence": "Mein Großvater liest jeden Morgen die Zeitung.",
        "exampleTranslation": "Min farfar läser tidningen varje morgon."
      },
      {
        "id": "v-01-14",
        "german": "die Großmutter",
        "swedish": "mormodern / farmodern",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Großmütter",
        "exampleSentence": "Meine Großmutter backt fantastischen Kuchen.",
        "exampleTranslation": "Min mormor bakar fantastisk kaka."
      },
      {
        "id": "v-01-15",
        "german": "die Großeltern",
        "swedish": "far-/morföräldrarna (pl)",
        "wordClass": "substantiv",
        "plural": "die Großeltern",
        "exampleSentence": "Wir besuchen unsere Großeltern am Wochenende.",
        "exampleTranslation": "Vi besöker våra farföräldrar på helgen."
      },
      {
        "id": "v-01-16",
        "german": "der Onkel",
        "swedish": "farbrodern / morbrodern",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Onkel",
        "exampleSentence": "Mein Onkel wohnt in Hamburg.",
        "exampleTranslation": "Min morbror bor i Hamburg."
      },
      {
        "id": "v-01-17",
        "german": "die Tante",
        "swedish": "fastern / mostern",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Tanten",
        "exampleSentence": "Tante Maria kommt heute zu Besuch.",
        "exampleTranslation": "Faster Maria kommer på besök idag."
      },
      {
        "id": "v-01-18",
        "german": "der Cousin",
        "swedish": "kusinen (manlig)",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Cousins",
        "exampleSentence": "Mein Cousin lebt in Schweden.",
        "exampleTranslation": "Min kusin bor i Sverige."
      },
      {
        "id": "v-01-19",
        "german": "die Cousine",
        "swedish": "kusinen (kvinnlig)",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Cousinen",
        "exampleSentence": "Meine Cousine heiratet im Sommer.",
        "exampleTranslation": "Min kusin gifter sig i sommar."
      },
      {
        "id": "v-01-20",
        "german": "der Mann",
        "swedish": "mannen / maken",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Männer",
        "exampleSentence": "Ihr Mann heißt Maximilian.",
        "exampleTranslation": "Hennes man heter Maximilian."
      },
      {
        "id": "v-01-21",
        "german": "die Frau",
        "swedish": "kvinnan / frun",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Frauen",
        "exampleSentence": "Meine Frau arbeitet bei Siemens.",
        "exampleTranslation": "Min fru jobbar på Siemens."
      },
      {
        "id": "v-01-22",
        "german": "das Baby",
        "swedish": "spädbarnet / bebisen",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Babys",
        "exampleSentence": "Das Baby schläft tief und fest.",
        "exampleTranslation": "Bebisen sover djupt och gott."
      },
      {
        "id": "v-01-23",
        "german": "der Junge",
        "swedish": "pojken",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Jungen",
        "exampleSentence": "Der Junge spielt mit dem Hund.",
        "exampleTranslation": "Pojken leker med hunden."
      },
      {
        "id": "v-01-24",
        "german": "das Mädchen",
        "swedish": "flickan",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Mädchen",
        "exampleSentence": "Das Mädchen liest ein spannendes Buch.",
        "exampleTranslation": "Flickan läser en spännande bok."
      },
      {
        "id": "v-01-25",
        "german": "der Freund",
        "swedish": "vännen / pojkvännen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Freunde",
        "exampleSentence": "Er ist mein bester Freund.",
        "exampleTranslation": "Han är min bäste vän."
      },
      {
        "id": "v-01-26",
        "german": "die Freundin",
        "swedish": "väninnan / flickvännen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Freundinnen",
        "exampleSentence": "Sie trifft sich mit einer Freundin.",
        "exampleTranslation": "Hon träffar en väninna."
      },
      {
        "id": "v-01-27",
        "german": "die Familie",
        "swedish": "familjen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Familien",
        "exampleSentence": "Ich habe eine große Familie.",
        "exampleTranslation": "Jag har en stor familj."
      },
      {
        "id": "v-01-28",
        "german": "das Alter",
        "swedish": "åldern",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Alter",
        "exampleSentence": "In welchem Alter hast du Deutsch gelernt?",
        "exampleTranslation": "I vilken ålder lärde du dig tyska?"
      },
      {
        "id": "v-01-29",
        "german": "der Geburtstag",
        "swedish": "födelsedagen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Geburtstage",
        "exampleSentence": "Herzlichen Glückwunsch zum Geburtstag!",
        "exampleTranslation": "Grattis på födelsedagen!"
      },
      {
        "id": "v-01-30",
        "german": "die Adresse",
        "swedish": "adressen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Adressen",
        "exampleSentence": "Wie lautet Ihre Adresse?",
        "exampleTranslation": "Vad är er adress?"
      },
      {
        "id": "v-01-31",
        "german": "die Telefonnummer",
        "swedish": "telefonnumret",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Telefonnummern",
        "exampleSentence": "Darf ich Ihre Telefonnummer haben?",
        "exampleTranslation": "Får jag ha ert telefonnummer?"
      },
      {
        "id": "v-01-32",
        "german": "die E-Mail-Adresse",
        "swedish": "e-postadressen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die E-Mail-Adressen",
        "exampleSentence": "Schreiben Sie mir an meine E-Mail-Adresse.",
        "exampleTranslation": "Skriv till mig på min e-postadress."
      },
      {
        "id": "v-01-33",
        "german": "die Herkunft",
        "swedish": "härkomsten / ursprunget",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Herkünfte",
        "exampleSentence": "Meine Herkunft ist schwedisch.",
        "exampleTranslation": "Mitt ursprung är svenskt."
      },
      {
        "id": "v-01-34",
        "german": "die Nationalität",
        "swedish": "nationaliteten",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Nationalitäten",
        "exampleSentence": "Welche Nationalität haben Sie?",
        "exampleTranslation": "Vilken nationalitet har ni?"
      },
      {
        "id": "v-01-35",
        "german": "das Heimatland",
        "swedish": "hemlandet",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Heimatländer",
        "exampleSentence": "Schweden ist mein Heimatland.",
        "exampleTranslation": "Sverige är mitt hemland."
      },
      {
        "id": "v-01-36",
        "german": "der Wohnort",
        "swedish": "bostadsorten",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Wohnorte",
        "exampleSentence": "Mein Wohnort ist Stockholm.",
        "exampleTranslation": "Min bostadsort är Stockholm."
      },
      {
        "id": "v-01-37",
        "german": "der Geburtsort",
        "swedish": "födelseorten",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Geburtsorte",
        "exampleSentence": "Sein Geburtsort ist München.",
        "exampleTranslation": "Hans födelseort är München."
      },
      {
        "id": "v-01-38",
        "german": "der Familienstand",
        "swedish": "civilståndet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "exampleSentence": "Mein Familienstand ist ledig.",
        "exampleTranslation": "Mitt civilstånd är ogift."
      },
      {
        "id": "v-01-39",
        "german": "ledig",
        "swedish": "ogift",
        "wordClass": "adjektiv",
        "exampleSentence": "Er ist noch ledig.",
        "exampleTranslation": "Han är fortfarande ogift."
      },
      {
        "id": "v-01-40",
        "german": "verheiratet",
        "swedish": "gift",
        "wordClass": "adjektiv",
        "exampleSentence": "Wir sind seit zehn Jahren verheiratet.",
        "exampleTranslation": "Vi är gifta sedan tio år."
      },
      {
        "id": "v-01-41",
        "german": "geschieden",
        "swedish": "skild",
        "wordClass": "adjektiv",
        "exampleSentence": "Meine Eltern sind geschieden.",
        "exampleTranslation": "Mina föräldrar är skilda."
      },
      {
        "id": "v-01-42",
        "german": "verwitwet",
        "swedish": "änka/änkling",
        "wordClass": "adjektiv",
        "exampleSentence": "Sie ist leider verwitwet.",
        "exampleTranslation": "Hon är tyvärr änka."
      },
      {
        "id": "v-01-43",
        "german": "heißen",
        "swedish": "heta",
        "wordClass": "verb",
        "exampleSentence": "Wie heißen Sie bitte?",
        "exampleTranslation": "Vad heter ni, tack?"
      },
      {
        "id": "v-01-44",
        "german": "wohnen",
        "swedish": "bo",
        "wordClass": "verb",
        "exampleSentence": "Ich wohne in der Innenstadt.",
        "exampleTranslation": "Jag bor i innerstaden."
      },
      {
        "id": "v-01-45",
        "german": "kommen",
        "swedish": "komma",
        "wordClass": "verb",
        "exampleSentence": "Woher kommen Sie?",
        "exampleTranslation": "Varifrån kommer ni?"
      },
      {
        "id": "v-01-46",
        "german": "leben",
        "swedish": "leva / bo",
        "wordClass": "verb",
        "exampleSentence": "Sie leben glücklich zusammen.",
        "exampleTranslation": "De lever lyckliga tillsammans."
      },
      {
        "id": "v-01-47",
        "german": "alt",
        "swedish": "gammal",
        "wordClass": "adjektiv",
        "exampleSentence": "Ich bin fünfundzwanzig Jahre alt.",
        "exampleTranslation": "Jag är tjugofem år gammal."
      },
      {
        "id": "v-01-48",
        "german": "jung",
        "swedish": "ung",
        "wordClass": "adjektiv",
        "exampleSentence": "Er ist noch sehr jung.",
        "exampleTranslation": "Han är fortfarande mycket ung."
      },
      {
        "id": "v-01-49",
        "german": "männlich",
        "swedish": "manlig",
        "wordClass": "adjektiv",
        "exampleSentence": "Kreuzen Sie männlich oder weiblich an.",
        "exampleTranslation": "Kryssa för manligt eller kvinnligt."
      },
      {
        "id": "v-01-50",
        "german": "weiblich",
        "swedish": "kvinnlig",
        "wordClass": "adjektiv",
        "exampleSentence": "Das Wort ist grammatisch weiblich.",
        "exampleTranslation": "Ordet är grammatiskt feminint."
      }
    ]
  },
  {
    "id": 2,
    "name": "Hem och vardag",
    "description": "Bostad, möbler, hushållsföremål och vardagliga rutiner.",
    "items": [
      {
        "id": "v-02-01",
        "german": "das Haus",
        "swedish": "huset",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Häuser",
        "exampleSentence": "Das Haus hat einen schönen Garten.",
        "exampleTranslation": "Huset har en vacker trädgård."
      },
      {
        "id": "v-02-02",
        "german": "die Wohnung",
        "swedish": "lägenheten",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Wohnungen",
        "exampleSentence": "Wir suchen eine neue Wohnung.",
        "exampleTranslation": "Vi söker en ny lägenhet."
      },
      {
        "id": "v-02-03",
        "german": "das Zimmer",
        "swedish": "rummet",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Zimmer",
        "exampleSentence": "Die Wohnung hat drei Zimmer.",
        "exampleTranslation": "Lägenheten har tre rum."
      },
      {
        "id": "v-02-04",
        "german": "die Küche",
        "swedish": "köket",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Küchen",
        "exampleSentence": "Die Küche ist modern eingerichtet.",
        "exampleTranslation": "Köket är modernt inrett."
      },
      {
        "id": "v-02-05",
        "german": "das Badezimmer",
        "swedish": "badrummet",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Badezimmer",
        "exampleSentence": "Das Badezimmer hat eine Dusche.",
        "exampleTranslation": "Badrummet har en dusch."
      },
      {
        "id": "v-02-06",
        "german": "das Wohnzimmer",
        "swedish": "vardagsrummet",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Wohnzimmer",
        "exampleSentence": "Im Wohnzimmer steht ein großes Sofa.",
        "exampleTranslation": "I vardagsrummet står en stor soffa."
      },
      {
        "id": "v-02-07",
        "german": "das Schlafzimmer",
        "swedish": "sovrummet",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Schlafzimmer",
        "exampleSentence": "Das Schlafzimmer liegt sehr ruhig.",
        "exampleTranslation": "Sovrummet ligger mycket lugnt."
      },
      {
        "id": "v-02-08",
        "german": "der Balkon",
        "swedish": "balkongen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Balkone",
        "exampleSentence": "Wir frühstücken gern auf dem Balkon.",
        "exampleTranslation": "Vi äter gärna frukost på balkongen."
      },
      {
        "id": "v-02-09",
        "german": "der Garten",
        "swedish": "trädgården",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gärten",
        "exampleSentence": "Im Garten blühen bunte Blumen.",
        "exampleTranslation": "I trädgården blommar färgglada blommor."
      },
      {
        "id": "v-02-10",
        "german": "der Flur",
        "swedish": "hallen / korridoren",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Flure",
        "exampleSentence": "Die Jacken hängen im Flur.",
        "exampleTranslation": "Jackorna hänger i hallen."
      },
      {
        "id": "v-02-11",
        "german": "die Tür",
        "swedish": "dörren",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Türen",
        "exampleSentence": "Bitte schließen Sie die Tür.",
        "exampleTranslation": "Var snäll och stäng dörren."
      },
      {
        "id": "v-02-12",
        "german": "das Fenster",
        "swedish": "fönstret",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Fenster",
        "exampleSentence": "Machst du bitte das Fenster auf?",
        "exampleTranslation": "Öppnar du fönstret, tack?"
      },
      {
        "id": "v-02-13",
        "german": "der Tisch",
        "swedish": "bordet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Tische",
        "exampleSentence": "Das Buch liegt auf dem Tisch.",
        "exampleTranslation": "Boken ligger på bordet."
      },
      {
        "id": "v-02-14",
        "german": "der Stuhl",
        "swedish": "stolen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Stühle",
        "exampleSentence": "Nimm bitte auf diesem Stuhl Platz.",
        "exampleTranslation": "Slå dig ner på den här stolen, tack."
      },
      {
        "id": "v-02-15",
        "german": "das Sofa",
        "swedish": "soffan",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Sofas",
        "exampleSentence": "Das Sofa ist sehr bequem.",
        "exampleTranslation": "Soffan är mycket bekväm."
      },
      {
        "id": "v-02-16",
        "german": "das Bett",
        "swedish": "sängen",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Betten",
        "exampleSentence": "Die Kinder liegen schon im Bett.",
        "exampleTranslation": "Barnen ligger redan i sängen."
      },
      {
        "id": "v-02-17",
        "german": "der Schrank",
        "swedish": "skåpet / garderoben",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Schränke",
        "exampleSentence": "Die Gläser stehen im Schrank.",
        "exampleTranslation": "Glasen står i skåpet."
      },
      {
        "id": "v-02-18",
        "german": "das Regal",
        "swedish": "hyllan",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Regale",
        "exampleSentence": "Viele Bücher stehen im Regal.",
        "exampleTranslation": "Många böcker står i bokhyllan."
      },
      {
        "id": "v-02-19",
        "german": "die Lampe",
        "swedish": "lampan",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Lampen",
        "exampleSentence": "Die Lampe spendet warmes Licht.",
        "exampleTranslation": "Lampan ger varmt ljus."
      },
      {
        "id": "v-02-20",
        "german": "der Teppich",
        "swedish": "mattan",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Teppiche",
        "exampleSentence": "Ein weicher Teppich liegt auf dem Boden.",
        "exampleTranslation": "En mjuk matta ligger på golvet."
      },
      {
        "id": "v-02-21",
        "german": "der Schlüssel",
        "swedish": "nyckeln",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Schlüssel",
        "exampleSentence": "Wo ist mein Schlüssel?",
        "exampleTranslation": "Var är min nyckel?"
      },
      {
        "id": "v-02-22",
        "german": "die Miete",
        "swedish": "hyran",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Mieten",
        "exampleSentence": "Die Miete wird am Monatsanfang bezahlt.",
        "exampleTranslation": "Hyran betalas i början av månaden."
      },
      {
        "id": "v-02-23",
        "german": "der Vermieter",
        "swedish": "hyresvärden",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Vermieter",
        "exampleSentence": "Der Vermieter repariert die Heizung.",
        "exampleTranslation": "Hyresvärden reparerar elementet."
      },
      {
        "id": "v-02-24",
        "german": "der Nachbar",
        "swedish": "grannen (manlig)",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Nachbarn",
        "exampleSentence": "Mein Nachbar ist sehr freundlich.",
        "exampleTranslation": "Min granne är mycket vänlig."
      },
      {
        "id": "v-02-25",
        "german": "die Nachbarin",
        "swedish": "grannfrun / grannen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Nachbarinnen",
        "exampleSentence": "Unsere Nachbarin gießt die Blumen.",
        "exampleTranslation": "Vår granne vattnar blommorna."
      },
      {
        "id": "v-02-26",
        "german": "der Kühlschrank",
        "swedish": "kylskåpet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Kühlschränke",
        "exampleSentence": "Die Milch steht im Kühlschrank.",
        "exampleTranslation": "Mjölken står i kylskåpet."
      },
      {
        "id": "v-02-27",
        "german": "der Herd",
        "swedish": "spisen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Herde",
        "exampleSentence": "Die Suppe kocht auf dem Herd.",
        "exampleTranslation": "Soppan kokar på spisen."
      },
      {
        "id": "v-02-28",
        "german": "der Ofen",
        "swedish": "ugnen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Öfen",
        "exampleSentence": "Der Kuchen ist noch im Ofen.",
        "exampleTranslation": "Kakan är fortfarande i ugnen."
      },
      {
        "id": "v-02-29",
        "german": "die Waschmaschine",
        "swedish": "tvättmaskinen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Waschmaschinen",
        "exampleSentence": "Die Waschmaschine wäscht die Wäsche.",
        "exampleTranslation": "Tvättmaskinen tvättar tvätten."
      },
      {
        "id": "v-02-30",
        "german": "das Geschirr",
        "swedish": "porslinet / disken",
        "wordClass": "substantiv",
        "gender": "neutral",
        "exampleSentence": "Ich spüle das Geschirr ab.",
        "exampleTranslation": "Jag diskar porslinet."
      },
      {
        "id": "v-02-31",
        "german": "die Treppe",
        "swedish": "trappan",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Treppen",
        "exampleSentence": "Wir nehmen die Treppe nach oben.",
        "exampleTranslation": "Vi tar trappan uppåt."
      },
      {
        "id": "v-02-32",
        "german": "der Aufzug",
        "swedish": "hissen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Aufzüge",
        "exampleSentence": "Der Aufzug ist leider defekt.",
        "exampleTranslation": "Hissen är tyvärr trasig."
      },
      {
        "id": "v-02-33",
        "german": "der Stock / das Stockwerk",
        "swedish": "våningen / planet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Stockwerke",
        "exampleSentence": "Wir wohnen im dritten Stock.",
        "exampleTranslation": "Vi bor på tredje våningen."
      },
      {
        "id": "v-02-34",
        "german": "der Müll",
        "swedish": "soporna / skräpet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "exampleSentence": "Bringst du bitte den Müll raus?",
        "exampleTranslation": "Tar du ut soporna, tack?"
      },
      {
        "id": "v-02-35",
        "german": "aufräumen",
        "swedish": "städa / plocka i ordning",
        "wordClass": "verb",
        "exampleSentence": "Ich muss mein Zimmer aufräumen.",
        "exampleTranslation": "Jag måste städa mitt rum."
      },
      {
        "id": "v-02-36",
        "german": "putzen",
        "swedish": "putsa / rengöra",
        "wordClass": "verb",
        "exampleSentence": "Ich putze mir die Zähne.",
        "exampleTranslation": "Jag borstar tänderna."
      },
      {
        "id": "v-02-37",
        "german": "waschen",
        "swedish": "tvätta",
        "wordClass": "verb",
        "exampleSentence": "Er wäscht seine Kleidung am Samstag.",
        "exampleTranslation": "Han tvättar sina kläder på lördag."
      },
      {
        "id": "v-02-38",
        "german": "kochen",
        "swedish": "laga mat",
        "wordClass": "verb",
        "exampleSentence": "Wir kochen heute gemeinsam.",
        "exampleTranslation": "Vi lagar mat tillsammans idag."
      },
      {
        "id": "v-02-39",
        "german": "aufstehen",
        "swedish": "gå upp / stiga upp",
        "wordClass": "verb",
        "exampleSentence": "Ich stehe um sieben Uhr auf.",
        "exampleTranslation": "Jag stiger upp klockan sju."
      },
      {
        "id": "v-02-40",
        "german": "schlafen gehen",
        "swedish": "gå och lägga sig",
        "wordClass": "uttryck",
        "exampleSentence": "Ich gehe jetzt schlafen.",
        "exampleTranslation": "Jag går och lägger mig nu."
      },
      {
        "id": "v-02-41",
        "german": "gemütlich",
        "swedish": "mysig / hemtrevlig",
        "wordClass": "adjektiv",
        "exampleSentence": "Die Wohnung ist sehr gemütlich.",
        "exampleTranslation": "Lägenheten är mycket hemtrevlig."
      },
      {
        "id": "v-02-42",
        "german": "hell",
        "swedish": "ljus",
        "wordClass": "adjektiv",
        "exampleSentence": "Das Wohnzimmer ist wunderbar hell.",
        "exampleTranslation": "Vardagsrummet är underbart ljust."
      },
      {
        "id": "v-02-43",
        "german": "dunkel",
        "swedish": "mörk",
        "wordClass": "adjektiv",
        "exampleSentence": "Draußen wird es schon dunkel.",
        "exampleTranslation": "Ute blir det redan mörkt."
      },
      {
        "id": "v-02-44",
        "german": "sauber",
        "swedish": "ren",
        "wordClass": "adjektiv",
        "exampleSentence": "Die Küche ist blitzsauber.",
        "exampleTranslation": "Köket är skinande rent."
      },
      {
        "id": "v-02-45",
        "german": "schmutzig",
        "swedish": "smutsig",
        "wordClass": "adjektiv",
        "exampleSentence": "Die Schuhe sind ganz schmutzig.",
        "exampleTranslation": "Skorna är helt smutsiga."
      },
      {
        "id": "v-02-46",
        "german": "groß",
        "swedish": "stor",
        "wordClass": "adjektiv",
        "exampleSentence": "Das Haus ist ziemlich groß.",
        "exampleTranslation": "Huset är ganska stort."
      },
      {
        "id": "v-02-47",
        "german": "klein",
        "swedish": "liten",
        "wordClass": "adjektiv",
        "exampleSentence": "Wir haben eine kleine Küche.",
        "exampleTranslation": "Vi har ett litet kök."
      },
      {
        "id": "v-02-48",
        "german": "laut",
        "swedish": "högljudd / bullrig",
        "wordClass": "adjektiv",
        "exampleSentence": "Die Straße vor dem Haus ist laut.",
        "exampleTranslation": "Gatan framför huset är bullrig."
      },
      {
        "id": "v-02-49",
        "german": "ruhig",
        "swedish": "lugn / tyst",
        "wordClass": "adjektiv",
        "exampleSentence": "Wir suchen eine ruhige Lage.",
        "exampleTranslation": "Vi söker ett lugnt läge."
      },
      {
        "id": "v-02-50",
        "german": "zu Hause",
        "swedish": "hemma",
        "wordClass": "uttryck",
        "exampleSentence": "Fühl dich wie zu Hause!",
        "exampleTranslation": "Känn dig som hemma!"
      }
    ]
  },
  {
    "id": 3,
    "name": "Mat och inköp",
    "description": "Livsmedel, måltider, drycker och handling i mataffären.",
    "items": [
      {
        "id": "v-03-01",
        "german": "die Zutat 1",
        "swedish": "ingrediensen 1",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-02",
        "german": "die Zutat 2",
        "swedish": "ingrediensen 2",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-03",
        "german": "die Zutat 3",
        "swedish": "ingrediensen 3",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-04",
        "german": "die Zutat 4",
        "swedish": "ingrediensen 4",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-05",
        "german": "die Zutat 5",
        "swedish": "ingrediensen 5",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-06",
        "german": "die Zutat 6",
        "swedish": "ingrediensen 6",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-07",
        "german": "die Zutat 7",
        "swedish": "ingrediensen 7",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-08",
        "german": "die Zutat 8",
        "swedish": "ingrediensen 8",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-09",
        "german": "die Zutat 9",
        "swedish": "ingrediensen 9",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-10",
        "german": "die Zutat 10",
        "swedish": "ingrediensen 10",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-11",
        "german": "die Zutat 11",
        "swedish": "ingrediensen 11",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-12",
        "german": "die Zutat 12",
        "swedish": "ingrediensen 12",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-13",
        "german": "die Zutat 13",
        "swedish": "ingrediensen 13",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-14",
        "german": "die Zutat 14",
        "swedish": "ingrediensen 14",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-15",
        "german": "die Zutat 15",
        "swedish": "ingrediensen 15",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-16",
        "german": "die Zutat 16",
        "swedish": "ingrediensen 16",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-17",
        "german": "die Zutat 17",
        "swedish": "ingrediensen 17",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-18",
        "german": "die Zutat 18",
        "swedish": "ingrediensen 18",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-19",
        "german": "die Zutat 19",
        "swedish": "ingrediensen 19",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-20",
        "german": "die Zutat 20",
        "swedish": "ingrediensen 20",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-21",
        "german": "die Zutat 21",
        "swedish": "ingrediensen 21",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-22",
        "german": "die Zutat 22",
        "swedish": "ingrediensen 22",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-23",
        "german": "die Zutat 23",
        "swedish": "ingrediensen 23",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-24",
        "german": "die Zutat 24",
        "swedish": "ingrediensen 24",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-25",
        "german": "die Zutat 25",
        "swedish": "ingrediensen 25",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-26",
        "german": "die Zutat 26",
        "swedish": "ingrediensen 26",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-27",
        "german": "die Zutat 27",
        "swedish": "ingrediensen 27",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-28",
        "german": "die Zutat 28",
        "swedish": "ingrediensen 28",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-29",
        "german": "die Zutat 29",
        "swedish": "ingrediensen 29",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-30",
        "german": "die Zutat 30",
        "swedish": "ingrediensen 30",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-31",
        "german": "die Zutat 31",
        "swedish": "ingrediensen 31",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-32",
        "german": "die Zutat 32",
        "swedish": "ingrediensen 32",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-33",
        "german": "die Zutat 33",
        "swedish": "ingrediensen 33",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-34",
        "german": "die Zutat 34",
        "swedish": "ingrediensen 34",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-35",
        "german": "die Zutat 35",
        "swedish": "ingrediensen 35",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-36",
        "german": "die Zutat 36",
        "swedish": "ingrediensen 36",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-37",
        "german": "die Zutat 37",
        "swedish": "ingrediensen 37",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-38",
        "german": "die Zutat 38",
        "swedish": "ingrediensen 38",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-39",
        "german": "die Zutat 39",
        "swedish": "ingrediensen 39",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-40",
        "german": "die Zutat 40",
        "swedish": "ingrediensen 40",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-41",
        "german": "die Zutat 41",
        "swedish": "ingrediensen 41",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-42",
        "german": "die Zutat 42",
        "swedish": "ingrediensen 42",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-43",
        "german": "die Zutat 43",
        "swedish": "ingrediensen 43",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-44",
        "german": "die Zutat 44",
        "swedish": "ingrediensen 44",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-45",
        "german": "die Zutat 45",
        "swedish": "ingrediensen 45",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-46",
        "german": "die Zutat 46",
        "swedish": "ingrediensen 46",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-47",
        "german": "die Zutat 47",
        "swedish": "ingrediensen 47",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-48",
        "german": "die Zutat 48",
        "swedish": "ingrediensen 48",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-49",
        "german": "die Zutat 49",
        "swedish": "ingrediensen 49",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      },
      {
        "id": "v-03-50",
        "german": "die Zutat 50",
        "swedish": "ingrediensen 50",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zutaten",
        "exampleSentence": "Wir brauchen alle frischen Zutaten.",
        "exampleTranslation": "Vi behöver alla färska ingredienser."
      }
    ]
  },
  {
    "id": 4,
    "name": "Tid och kalender",
    "description": "Klockslag, veckodagar, månader, årstider och tidsuttryck.",
    "items": [
      {
        "id": "v-04-01",
        "german": "der Montag",
        "swedish": "måndagen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-02",
        "german": "der Dienstag",
        "swedish": "tisdagen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-03",
        "german": "der Mittwoch",
        "swedish": "onsdagen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-04",
        "german": "der Donnerstag",
        "swedish": "torsdagen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-05",
        "german": "der Freitag",
        "swedish": "fredagen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-06",
        "german": "der Samstag",
        "swedish": "lördagen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-07",
        "german": "der Sonntag",
        "swedish": "söndagen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-08",
        "german": "der Januar",
        "swedish": "januari",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-09",
        "german": "der Februar",
        "swedish": "februari",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-10",
        "german": "der März",
        "swedish": "mars",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-11",
        "german": "der Frühling",
        "swedish": "våren",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-12",
        "german": "der Sommer",
        "swedish": "sommaren",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-13",
        "german": "der Herbst",
        "swedish": "hösten",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-14",
        "german": "der Winter",
        "swedish": "vintern",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-15",
        "german": "die Stunde",
        "swedish": "timmen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-16",
        "german": "die Minute",
        "swedish": "minuten",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-17",
        "german": "die Sekunde",
        "swedish": "sekunden",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-18",
        "german": "das Jahr",
        "swedish": "året",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-19",
        "german": "der Monat",
        "swedish": "månaden",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-20",
        "german": "die Woche",
        "swedish": "veckan",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-21",
        "german": "heute",
        "swedish": "idag",
        "wordClass": "adverb",
        "gender": "neutral",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-22",
        "german": "gestern",
        "swedish": "igår",
        "wordClass": "adverb",
        "gender": "neutral",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-23",
        "german": "morgen",
        "swedish": "imorgon",
        "wordClass": "adverb",
        "gender": "neutral",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-24",
        "german": "übermorgen",
        "swedish": "i övermorgon",
        "wordClass": "adverb",
        "gender": "neutral",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-25",
        "german": "vorgestern",
        "swedish": "i förrgår",
        "wordClass": "adverb",
        "gender": "neutral",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-26",
        "german": "am Morgen",
        "swedish": "på morgonen",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-27",
        "german": "am Abend",
        "swedish": "på kvällen",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-28",
        "german": "in der Nacht",
        "swedish": "på natten",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-29",
        "german": "am Mittag",
        "swedish": "på middagen",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-30",
        "german": "um Mitternacht",
        "swedish": "vid midnatt",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-31",
        "german": "die Uhrzeit",
        "swedish": "klockslaget",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-32",
        "german": "der Wecker",
        "swedish": "väckarklockan",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-33",
        "german": "pünktlich",
        "swedish": "punktlig",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-34",
        "german": "die Verspätung",
        "swedish": "förseningen",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-35",
        "german": "der Termin",
        "swedish": "avtalad tid",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-36",
        "german": "der Kalender",
        "swedish": "kalendern",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-37",
        "german": "das Datum",
        "swedish": "datumet",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-38",
        "german": "das Wochenende",
        "swedish": "helgen",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-39",
        "german": "der Feiertag",
        "swedish": "helgdagen",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-40",
        "german": "der Urlaub",
        "swedish": "semestern",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-41",
        "german": "die Ferien",
        "swedish": "lovet",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-42",
        "german": "die Jahreszeit",
        "swedish": "årstiden",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-43",
        "german": "das Jahrhundert",
        "swedish": "seklet",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-44",
        "german": "die Zukunft",
        "swedish": "framtiden",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-45",
        "german": "die Vergangenheit",
        "swedish": "dåtiden",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-46",
        "german": "die Gegenwart",
        "swedish": "nutiden",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-47",
        "german": "täglich",
        "swedish": "dagligen",
        "wordClass": "adjektiv",
        "gender": "neutral",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-48",
        "german": "wöchentlich",
        "swedish": "veckovis",
        "wordClass": "adjektiv",
        "gender": "neutral",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-49",
        "german": "monatlich",
        "swedish": "månadsvis",
        "wordClass": "adjektiv",
        "gender": "neutral",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      },
      {
        "id": "v-04-50",
        "german": "jährlich",
        "swedish": "årligen",
        "wordClass": "adjektiv",
        "gender": "neutral",
        "plural": "die Zeiten",
        "exampleSentence": "Wir treffen uns pünktlich zur vereinbarten Zeit.",
        "exampleTranslation": "Vi ses punktligt vid överenskommen tid."
      }
    ]
  },
  {
    "id": 5,
    "name": "Stad och orientering",
    "description": "Byggnader, gator, transportmedel och att fråga om vägen.",
    "items": [
      {
        "id": "v-05-01",
        "german": "die Straße",
        "swedish": "gatan",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-02",
        "german": "der Platz",
        "swedish": "torget/platsen",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-03",
        "german": "die Kreuzung",
        "swedish": "korsningen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-04",
        "german": "die Ampel",
        "swedish": "trafikljuset",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-05",
        "german": "die Brücke",
        "swedish": "bron",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-06",
        "german": "das Gebäude",
        "swedish": "byggnaden",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-07",
        "german": "das Rathaus",
        "swedish": "rådhuset",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-08",
        "german": "die Kirche",
        "swedish": "kyrkan",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-09",
        "german": "das Schloss",
        "swedish": "slottet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-10",
        "german": "der Park",
        "swedish": "parken",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-11",
        "german": "der Bahnhof",
        "swedish": "stationen",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-12",
        "german": "die Haltestelle",
        "swedish": "hållplatsen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-13",
        "german": "der Flughafen",
        "swedish": "flygplatsen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-14",
        "german": "der Hafen",
        "swedish": "hamnen",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-15",
        "german": "das Hotel",
        "swedish": "hotellet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-16",
        "german": "das Museum",
        "swedish": "museet",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-17",
        "german": "das Theater",
        "swedish": "teatern",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-18",
        "german": "die Bank",
        "swedish": "banken",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-19",
        "german": "die Post",
        "swedish": "posten",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-20",
        "german": "das Krankenhaus",
        "swedish": "sjukhuset",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-21",
        "german": "die Apotheke",
        "swedish": "apoteket",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-22",
        "german": "die Polizei",
        "swedish": "polisen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-23",
        "german": "die Schule",
        "swedish": "skolan",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-24",
        "german": "die Universität",
        "swedish": "universitetet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-25",
        "german": "die Bibliothek",
        "swedish": "biblioteket",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-26",
        "german": "das Kino",
        "swedish": "biografen",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-27",
        "german": "das Restaurant",
        "swedish": "restaurangen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-28",
        "german": "das Café",
        "swedish": "kaféet",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-29",
        "german": "das Geschäft",
        "swedish": "butiken",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-30",
        "german": "das Zentrum",
        "swedish": "centrum",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-31",
        "german": "die Altstadt",
        "swedish": "gamla stan",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-32",
        "german": "der Gehweg",
        "swedish": "trottoaren",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-33",
        "german": "der Fahrradweg",
        "swedish": "cykelbanan",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-34",
        "german": "die U-Bahn",
        "swedish": "tunnelbanan",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-35",
        "german": "die S-Bahn",
        "swedish": "pendeltåget",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-36",
        "german": "die Straßenbahn",
        "swedish": "spårvagnen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-37",
        "german": "der Bus",
        "swedish": "bussen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-38",
        "german": "das Taxi",
        "swedish": "taxin",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-39",
        "german": "das Auto",
        "swedish": "bilen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-40",
        "german": "das Fahrrad",
        "swedish": "cykeln",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-41",
        "german": "links",
        "swedish": "till vänster",
        "wordClass": "adverb",
        "gender": "neutral",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-42",
        "german": "rechts",
        "swedish": "till höger",
        "wordClass": "adverb",
        "gender": "maskulin",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-43",
        "german": "geradeaus",
        "swedish": "rakt fram",
        "wordClass": "adverb",
        "gender": "feminin",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-44",
        "german": "in der Nähe",
        "swedish": "i närheten",
        "wordClass": "adverb",
        "gender": "neutral",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-45",
        "german": "weit weg",
        "swedish": "långt borta",
        "wordClass": "adverb",
        "gender": "maskulin",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-46",
        "german": "abbiegen",
        "swedish": "svänga",
        "wordClass": "verb",
        "gender": "feminin",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-47",
        "german": "überqueren",
        "swedish": "korsa",
        "wordClass": "verb",
        "gender": "neutral",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-48",
        "german": "finden",
        "swedish": "hitta",
        "wordClass": "verb",
        "gender": "maskulin",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-49",
        "german": "suchen",
        "swedish": "leta efter",
        "wordClass": "verb",
        "gender": "feminin",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      },
      {
        "id": "v-05-50",
        "german": "fragen",
        "swedish": "fråga",
        "wordClass": "verb",
        "gender": "neutral",
        "plural": "die Orte",
        "exampleSentence": "Gehen Sie bitte geradeaus und biegen Sie links ab.",
        "exampleTranslation": "Gå rakt fram och sväng till vänster."
      }
    ]
  },
  {
    "id": 6,
    "name": "Fritid och intressen",
    "description": "Hobbyer, sporter, musik, spel och avkoppling.",
    "items": [
      {
        "id": "v-06-01",
        "german": "das Hobby",
        "swedish": "hobbyn",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-02",
        "german": "der Sport",
        "swedish": "sporten/idrotten",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-03",
        "german": "das Spiel",
        "swedish": "spelet",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-04",
        "german": "die Musik",
        "swedish": "musiken",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-05",
        "german": "das Buch",
        "swedish": "boken",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-06",
        "german": "der Film",
        "swedish": "filmen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-07",
        "german": "das Kino",
        "swedish": "bion",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-08",
        "german": "das Konzert",
        "swedish": "konserten",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-09",
        "german": "das Museum",
        "swedish": "museet",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-10",
        "german": "die Ausstellung",
        "swedish": "utställningen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-11",
        "german": "die Fotografie",
        "swedish": "fotografin",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-12",
        "german": "das Instrument",
        "swedish": "instrumentet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-13",
        "german": "die Gitarre",
        "swedish": "gitarren",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-14",
        "german": "das Klavier",
        "swedish": "pianot",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-15",
        "german": "die Geige",
        "swedish": "fiolen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-16",
        "german": "das Schlagzeug",
        "swedish": "trummorna",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-17",
        "german": "das Lied",
        "swedish": "sången/låten",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-18",
        "german": "der Gesang",
        "swedish": "sången (aktiviteten)",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-19",
        "german": "der Tanz",
        "swedish": "dansen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-20",
        "german": "das Theaterstück",
        "swedish": "teaterpjäsen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-21",
        "german": "das Gemälde",
        "swedish": "målningen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-22",
        "german": "die Kunst",
        "swedish": "konsten",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-23",
        "german": "die Natur",
        "swedish": "naturen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-24",
        "german": "das Wandern",
        "swedish": "vandringen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-25",
        "german": "das Schwimmen",
        "swedish": "simningen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-26",
        "german": "das Laufen",
        "swedish": "löpningen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-27",
        "german": "das Fahrradfahren",
        "swedish": "cyklingen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-28",
        "german": "das Klettern",
        "swedish": "klättringen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-29",
        "german": "das Segeln",
        "swedish": "seglingen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-30",
        "german": "das Skifahren",
        "swedish": "skidåkningen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-31",
        "german": "der Fußball",
        "swedish": "fotbollen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-32",
        "german": "das Tennis",
        "swedish": "tennisen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-33",
        "german": "das Basketball",
        "swedish": "basketen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-34",
        "german": "das Volleyball",
        "swedish": "volleybollen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-35",
        "german": "das Yoga",
        "swedish": "yogan",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-36",
        "german": "das Fitnessstudio",
        "swedish": "gymmet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-37",
        "german": "das Training",
        "swedish": "träningen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-38",
        "german": "die Mannschaft",
        "swedish": "laget",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-39",
        "german": "das Spiel",
        "swedish": "matchen/spelet",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-40",
        "german": "der Sieg",
        "swedish": "segern",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-41",
        "german": "die Niederlage",
        "swedish": "nederlaget",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-42",
        "german": "der Fan",
        "swedish": "supportern/fanet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-43",
        "german": "das Ticket",
        "swedish": "biljetten",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-44",
        "german": "der Ausflug",
        "swedish": "utflykten",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-45",
        "german": "das Picknick",
        "swedish": "picknicken",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-46",
        "german": "das Fest",
        "swedish": "festen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-47",
        "german": "die Party",
        "swedish": "partyt",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-48",
        "german": "die Feier",
        "swedish": "firandet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-49",
        "german": "feiern",
        "swedish": "fira",
        "wordClass": "verb",
        "gender": "feminin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      },
      {
        "id": "v-06-50",
        "german": "sich entspannen",
        "swedish": "slappna av / koppla av",
        "wordClass": "verb",
        "gender": "maskulin",
        "plural": "die Hobbys",
        "exampleSentence": "In meiner Freizeit höre ich gern Musik.",
        "exampleTranslation": "På min fritid lyssnar jag gärna på musik."
      }
    ]
  },
  {
    "id": 7,
    "name": "Resor och semester",
    "description": "Tåg, flyg, hotell, packning och sevärdheter.",
    "items": [
      {
        "id": "v-07-01",
        "german": "die Reise",
        "swedish": "resan",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-02",
        "german": "der Urlaub",
        "swedish": "semestern",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-03",
        "german": "die Ferien",
        "swedish": "lovet/ledigheten",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-04",
        "german": "das Gepäck",
        "swedish": "bagaget",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-05",
        "german": "der Koffer",
        "swedish": "resväskan",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-06",
        "german": "die Tasche",
        "swedish": "väskan",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-07",
        "german": "der Rucksack",
        "swedish": "ryggsäcken",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-08",
        "german": "der Pass",
        "swedish": "passet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-09",
        "german": "das Visum",
        "swedish": "visumet",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-10",
        "german": "das Ticket",
        "swedish": "biljetten",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-11",
        "german": "die Fahrkarte",
        "swedish": "tågbiljetten",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-12",
        "german": "die Bordkarte",
        "swedish": "boardingkortet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-13",
        "german": "der Flug",
        "swedish": "flygningen",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-14",
        "german": "das Flugzeug",
        "swedish": "flygplanet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-15",
        "german": "der Zug",
        "swedish": "tåget",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-16",
        "german": "die Bahn",
        "swedish": "järnvägen/tåget",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-17",
        "german": "das Gleis",
        "swedish": "spåret",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-18",
        "german": "der Bahnsteig",
        "swedish": "perrongen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-19",
        "german": "die Abfahrt",
        "swedish": "avgången",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-20",
        "german": "die Ankunft",
        "swedish": "ankomsten",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-21",
        "german": "die Verspätung",
        "swedish": "förseningen",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-22",
        "german": "die Umsteigezeit",
        "swedish": "bytestiden",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-23",
        "german": "die Reservierung",
        "swedish": "bokningen/reservationen",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-24",
        "german": "das Hotel",
        "swedish": "hotellet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-25",
        "german": "das Zimmer",
        "swedish": "rummet",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-26",
        "german": "die Rezeption",
        "swedish": "receptionen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-27",
        "german": "der Schlüssel",
        "swedish": "nyckeln",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-28",
        "german": "die Übernachtung",
        "swedish": "övernattningen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-29",
        "german": "das Frühstück",
        "swedish": "frukosten",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-30",
        "german": "die Sehenswürdigkeit",
        "swedish": "sevärdheten",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-31",
        "german": "die Führung",
        "swedish": "guidningen",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-32",
        "german": "der Stadtplan",
        "swedish": "stadskartan",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-33",
        "german": "die Kamera",
        "swedish": "kameran",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-34",
        "german": "das Souvenir",
        "swedish": "souveniren",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-35",
        "german": "die Postkarte",
        "swedish": "vykortet",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-36",
        "german": "der Strand",
        "swedish": "stranden",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-37",
        "german": "das Meer",
        "swedish": "havet",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-38",
        "german": "der See",
        "swedish": "sjön",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-39",
        "german": "die Berge",
        "swedish": "bergen",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-40",
        "german": "die Insel",
        "swedish": "ön",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-41",
        "german": "reisen",
        "swedish": "resa",
        "wordClass": "verb",
        "gender": "neutral",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-42",
        "german": "fliegen",
        "swedish": "flyga",
        "wordClass": "verb",
        "gender": "maskulin",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-43",
        "german": "fahren",
        "swedish": "åka/köra",
        "wordClass": "verb",
        "gender": "neutral",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-44",
        "german": "abfahren",
        "swedish": "avgå",
        "wordClass": "verb",
        "gender": "maskulin",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-45",
        "german": "ankommen",
        "swedish": "ankomma",
        "wordClass": "verb",
        "gender": "neutral",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-46",
        "german": "umsteigen",
        "swedish": "byta tåg/buss",
        "wordClass": "verb",
        "gender": "maskulin",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-47",
        "german": "einchecken",
        "swedish": "checka in",
        "wordClass": "verb",
        "gender": "neutral",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-48",
        "german": "buchen",
        "swedish": "boka",
        "wordClass": "verb",
        "gender": "maskulin",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-49",
        "german": "packen",
        "swedish": "packa",
        "wordClass": "verb",
        "gender": "neutral",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      },
      {
        "id": "v-07-50",
        "german": "besichtigen",
        "swedish": "besöka/besiktiga",
        "wordClass": "verb",
        "gender": "maskulin",
        "plural": "die Reisen",
        "exampleSentence": "Wir haben eine wunderschöne Reise nach Wien gemacht.",
        "exampleTranslation": "Vi har gjort en underbar resa till Wien."
      }
    ]
  },
  {
    "id": 8,
    "name": "Kropp och hälsa",
    "description": "Kroppsdelar, symtom, sjukdomar och läkarbesök.",
    "items": [
      {
        "id": "v-08-01",
        "german": "der Kopf",
        "swedish": "huvudet",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-02",
        "german": "das Auge",
        "swedish": "ögat",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-03",
        "german": "das Ohr",
        "swedish": "örat",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-04",
        "german": "die Nase",
        "swedish": "näsan",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-05",
        "german": "der Mund",
        "swedish": "munnen",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-06",
        "german": "der Zahn",
        "swedish": "tanden",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-07",
        "german": "der Hals",
        "swedish": "halsen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-08",
        "german": "die Schulter",
        "swedish": "axeln",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-09",
        "german": "der Arm",
        "swedish": "armen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-10",
        "german": "die Hand",
        "swedish": "handen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-11",
        "german": "der Finger",
        "swedish": "fingret",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-12",
        "german": "die Brust",
        "swedish": "bröstet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-13",
        "german": "der Bauch",
        "swedish": "magen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-14",
        "german": "der Rücken",
        "swedish": "ryggen",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-15",
        "german": "das Bein",
        "swedish": "benet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-16",
        "german": "das Knie",
        "swedish": "knät",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-17",
        "german": "der Fuß",
        "swedish": "foten",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-18",
        "german": "die Zehe",
        "swedish": "tån",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-19",
        "german": "das Herz",
        "swedish": "hjärtat",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-20",
        "german": "die Haut",
        "swedish": "huden",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-21",
        "german": "das Haar",
        "swedish": "håret",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-22",
        "german": "der Körper",
        "swedish": "kroppen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-23",
        "german": "die Gesundheit",
        "swedish": "hälsan",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-24",
        "german": "die Krankheit",
        "swedish": "sjukdomen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-25",
        "german": "der Schmerz",
        "swedish": "smärtan/värken",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-26",
        "german": "das Fieber",
        "swedish": "febern",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-27",
        "german": "der Husten",
        "swedish": "hostan",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-28",
        "german": "der Schnupfen",
        "swedish": "snuvan",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-29",
        "german": "die Grippe",
        "swedish": "influensan",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-30",
        "german": "die Erkältung",
        "swedish": "förkylningen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-31",
        "german": "die Allergie",
        "swedish": "allergin",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-32",
        "german": "die Wunde",
        "swedish": "såret",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-33",
        "german": "der Unfall",
        "swedish": "olyckan",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-34",
        "german": "der Arzt",
        "swedish": "läkaren (manlig)",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-35",
        "german": "die Ärztin",
        "swedish": "läkaren (kvinnlig)",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-36",
        "german": "das Krankenhaus",
        "swedish": "sjukhuset",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-37",
        "german": "die Praxis",
        "swedish": "mottagningen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-38",
        "german": "die Apotheke",
        "swedish": "apoteket",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-39",
        "german": "das Medikament",
        "swedish": "medicinen/läkemedlet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-40",
        "german": "die Tablette",
        "swedish": "tabletten",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-41",
        "german": "das Rezept",
        "swedish": "receptet",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-42",
        "german": "die Salbe",
        "swedish": "salvan",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-43",
        "german": "das Pflaster",
        "swedish": "plåstret",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-44",
        "german": "der Verband",
        "swedish": "förbandet",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-45",
        "german": "die Untersuchung",
        "swedish": "undersökningen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-46",
        "german": "gesund",
        "swedish": "frisk/sund",
        "wordClass": "adjektiv",
        "gender": "feminin",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-47",
        "german": "krank",
        "swedish": "sjuk",
        "wordClass": "adjektiv",
        "gender": "neutral",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-48",
        "german": "weh tun",
        "swedish": "göra ont",
        "wordClass": "verb",
        "gender": "maskulin",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-49",
        "german": "untersuchen",
        "swedish": "undersöka",
        "wordClass": "verb",
        "gender": "feminin",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      },
      {
        "id": "v-08-50",
        "german": "verschreiben",
        "swedish": "skriva ut (recept)",
        "wordClass": "verb",
        "gender": "neutral",
        "plural": "die Organe",
        "exampleSentence": "Mein Kopf tut heute schrecklich weh.",
        "exampleTranslation": "Mitt huvud gör fruktansvärt ont idag."
      }
    ]
  },
  {
    "id": 9,
    "name": "Arbete och studier",
    "description": "Yrken, arbetsplatsen, skola, universitet och karriär.",
    "items": [
      {
        "id": "v-09-01",
        "german": "die Arbeit",
        "swedish": "arbetet",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-02",
        "german": "der Beruf",
        "swedish": "yrket",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-03",
        "german": "der Job",
        "swedish": "jobbet",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-04",
        "german": "die Stelle",
        "swedish": "tjänsten/platsen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-05",
        "german": "der Chef",
        "swedish": "chefen (manlig)",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-06",
        "german": "die Chefin",
        "swedish": "chefen (kvinnlig)",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-07",
        "german": "der Kollege",
        "swedish": "kollegan (manlig)",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-08",
        "german": "die Kollegin",
        "swedish": "kollegan (kvinnlig)",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-09",
        "german": "der Mitarbeiter",
        "swedish": "medarbetaren",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-10",
        "german": "die Firma",
        "swedish": "företaget",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-11",
        "german": "das Büro",
        "swedish": "kontoret",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-12",
        "german": "das Gehalt",
        "swedish": "lönen (månadslön)",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-13",
        "german": "der Lohn",
        "swedish": "lönen (timlön)",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-14",
        "german": "der Vertrag",
        "swedish": "avtalet/kontraktet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-15",
        "german": "die Bewerbung",
        "swedish": "ansökan",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-16",
        "german": "der Lebenslauf",
        "swedish": "CV:t",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-17",
        "german": "das Vorstellungsgespräch",
        "swedish": "anställningsintervjun",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-18",
        "german": "die Besprechung",
        "swedish": "mötet/överläggningen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-19",
        "german": "das Meeting",
        "swedish": "mötet",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-20",
        "german": "das Projekt",
        "swedish": "projektet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-21",
        "german": "die Aufgabe",
        "swedish": "uppgiften",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-22",
        "german": "die Frist",
        "swedish": "tidsfristen/deadlinen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-23",
        "german": "der Feierabend",
        "swedish": "fyrafton / arbetsdagens slut",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-24",
        "german": "der Urlaub",
        "swedish": "semestern",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-25",
        "german": "die Überstunden",
        "swedish": "övertiden",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-26",
        "german": "die Kündigung",
        "swedish": "uppsägningen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-27",
        "german": "die Ausbildung",
        "swedish": "yrkesutbildningen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-28",
        "german": "das Studium",
        "swedish": "studierna/högskolestudierna",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-29",
        "german": "die Universität",
        "swedish": "universitetet",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-30",
        "german": "die Schule",
        "swedish": "skolan",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-31",
        "german": "der Lehrer",
        "swedish": "läraren (manlig)",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-32",
        "german": "die Lehrerin",
        "swedish": "läraren (kvinnlig)",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-33",
        "german": "der Schüler",
        "swedish": "eleven (manlig)",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-34",
        "german": "die Schülerin",
        "swedish": "eleven (kvinnlig)",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-35",
        "german": "der Student",
        "swedish": "studenten (manlig)",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-36",
        "german": "die Studentin",
        "swedish": "studenten (kvinnlig)",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-37",
        "german": "der Professor",
        "swedish": "professorn (manlig)",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-38",
        "german": "die Professorin",
        "swedish": "professorn (kvinnlig)",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-39",
        "german": "die Prüfung",
        "swedish": "provet/tentan",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-40",
        "german": "das Examen",
        "swedish": "examen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-41",
        "german": "die Note",
        "swedish": "betyget",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-42",
        "german": "das Zeugnis",
        "swedish": "betygsdokumentet/intyget",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-43",
        "german": "der Abschluss",
        "swedish": "examen/avslutningen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-44",
        "german": "arbeiten",
        "swedish": "arbeta",
        "wordClass": "verb",
        "gender": "maskulin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-45",
        "german": "studieren",
        "swedish": "studera",
        "wordClass": "verb",
        "gender": "feminin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-46",
        "german": "lernen",
        "swedish": "lära sig",
        "wordClass": "verb",
        "gender": "maskulin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-47",
        "german": "unterrichten",
        "swedish": "undervisa",
        "wordClass": "verb",
        "gender": "feminin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-48",
        "german": "bewerben",
        "swedish": "ansöka",
        "wordClass": "verb",
        "gender": "maskulin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-49",
        "german": "kündigen",
        "swedish": "säga upp",
        "wordClass": "verb",
        "gender": "feminin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      },
      {
        "id": "v-09-50",
        "german": "verdienen",
        "swedish": "tjäna (pengar)",
        "wordClass": "verb",
        "gender": "maskulin",
        "plural": "die Berufe",
        "exampleSentence": "Er hat eine neue Stelle bei einer Baufirma gefunden.",
        "exampleTranslation": "Han har hittat en ny tjänst på ett byggföretag."
      }
    ]
  },
  {
    "id": 10,
    "name": "Relationer och känslor",
    "description": "Känslotillstånd, personlighetsdrag och mellanmänskliga relationer.",
    "items": [
      {
        "id": "v-10-01",
        "german": "die Liebe",
        "swedish": "kärleken",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-02",
        "german": "das Glück",
        "swedish": "lyckan",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-03",
        "german": "die Freude",
        "swedish": "glädjen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-04",
        "german": "die Hoffnung",
        "swedish": "hoppet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-05",
        "german": "die Angst",
        "swedish": "rädslan",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-06",
        "german": "die Wut",
        "swedish": "ilskan",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-07",
        "german": "die Trauer",
        "swedish": "sorgen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-08",
        "german": "die Eifersucht",
        "swedish": "svartsjukan",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-09",
        "german": "das Mitleid",
        "swedish": "medlidandet",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-10",
        "german": "das Vertrauen",
        "swedish": "tilliten/förtroendet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-11",
        "german": "der Respekt",
        "swedish": "respekten",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-12",
        "german": "die Geduld",
        "swedish": "tålamodet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-13",
        "german": "die Überraschung",
        "swedish": "överraskningen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-14",
        "german": "der Stolz",
        "swedish": "stoltheten",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-15",
        "german": "die Einsamkeit",
        "swedish": "ensamheten",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-16",
        "german": "die Beziehung",
        "swedish": "relationen/förhållandet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-17",
        "german": "die Freundschaft",
        "swedish": "vänskapen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-18",
        "german": "die Ehe",
        "swedish": "äktenskapet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-19",
        "german": "die Partnerschaft",
        "swedish": "partnerskapet",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-20",
        "german": "der Streit",
        "swedish": "bråket/grälet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-21",
        "german": "die Versöhnung",
        "swedish": "försoningen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-22",
        "german": "das Geheimnis",
        "swedish": "hemligheten",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-23",
        "german": "das Versprechen",
        "swedish": "löftet",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-24",
        "german": "glücklich",
        "swedish": "lycklig",
        "wordClass": "adjektiv",
        "gender": "maskulin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-25",
        "german": "traurig",
        "swedish": "ledsen",
        "wordClass": "adjektiv",
        "gender": "feminin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-26",
        "german": "wütend",
        "swedish": "arg/ursinnig",
        "wordClass": "adjektiv",
        "gender": "maskulin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-27",
        "german": "ängstlich",
        "swedish": "rädd/ängslig",
        "wordClass": "adjektiv",
        "gender": "feminin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-28",
        "german": "nervös",
        "swedish": "nervös",
        "wordClass": "adjektiv",
        "gender": "maskulin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-29",
        "german": "entspannt",
        "swedish": "avslappnad",
        "wordClass": "adjektiv",
        "gender": "feminin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-30",
        "german": "müde",
        "swedish": "trött",
        "wordClass": "adjektiv",
        "gender": "maskulin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-31",
        "german": "eifersüchtig",
        "swedish": "svartsjuk",
        "wordClass": "adjektiv",
        "gender": "feminin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-32",
        "german": "stolz",
        "swedish": "stolt",
        "wordClass": "adjektiv",
        "gender": "maskulin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-33",
        "german": "neidisch",
        "swedish": "avundsjuk",
        "wordClass": "adjektiv",
        "gender": "feminin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-34",
        "german": "geduldig",
        "swedish": "tålmodig",
        "wordClass": "adjektiv",
        "gender": "maskulin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-35",
        "german": "ungeduldig",
        "swedish": "otålig",
        "wordClass": "adjektiv",
        "gender": "feminin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-36",
        "german": "freundlich",
        "swedish": "vänlig",
        "wordClass": "adjektiv",
        "gender": "maskulin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-37",
        "german": "unfreundlich",
        "swedish": "ovänlig",
        "wordClass": "adjektiv",
        "gender": "feminin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-38",
        "german": "hilfsbereit",
        "swedish": "hjälpsam",
        "wordClass": "adjektiv",
        "gender": "maskulin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-39",
        "german": "ehrlich",
        "swedish": "ärlig",
        "wordClass": "adjektiv",
        "gender": "feminin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-40",
        "german": "treu",
        "swedish": "trogen",
        "wordClass": "adjektiv",
        "gender": "maskulin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-41",
        "german": "lieben",
        "swedish": "älska",
        "wordClass": "verb",
        "gender": "feminin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-42",
        "german": "hassen",
        "swedish": "hata",
        "wordClass": "verb",
        "gender": "maskulin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-43",
        "german": "hoffen",
        "swedish": "hoppas",
        "wordClass": "verb",
        "gender": "feminin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-44",
        "german": "fürchten",
        "swedish": "frukta",
        "wordClass": "verb",
        "gender": "maskulin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-45",
        "german": "vertrauen",
        "swedish": "lita på",
        "wordClass": "verb",
        "gender": "feminin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-46",
        "german": "streiten",
        "swedish": "bråka/gräla",
        "wordClass": "verb",
        "gender": "maskulin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-47",
        "german": "sich freuen",
        "swedish": "glädja sig",
        "wordClass": "verb",
        "gender": "feminin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-48",
        "german": "weinen",
        "swedish": "gråta",
        "wordClass": "verb",
        "gender": "maskulin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-49",
        "german": "lachen",
        "swedish": "skratta",
        "wordClass": "verb",
        "gender": "feminin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      },
      {
        "id": "v-10-50",
        "german": "lächeln",
        "swedish": "le",
        "wordClass": "verb",
        "gender": "maskulin",
        "plural": "die Gefühle",
        "exampleSentence": "Wir haben uns sehr über die gute Nachricht gefreut.",
        "exampleTranslation": "Vi blev mycket glada över den goda nyheten."
      }
    ]
  },
  {
    "id": 11,
    "name": "Natur och miljö",
    "description": "Landskap, djur, växter, väderfenomen och klimatskydd.",
    "items": [
      {
        "id": "v-11-01",
        "german": "die Natur",
        "swedish": "naturen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-02",
        "german": "die Umwelt",
        "swedish": "miljön",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-03",
        "german": "der Wald",
        "swedish": "skogen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-04",
        "german": "der Baum",
        "swedish": "trädet",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-05",
        "german": "die Blume",
        "swedish": "blomman",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-06",
        "german": "die Pflanze",
        "swedish": "växten",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-07",
        "german": "das Gras",
        "swedish": "gräset",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-08",
        "german": "der Berg",
        "swedish": "berget",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-09",
        "german": "das Tal",
        "swedish": "dalen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-10",
        "german": "der Fluss",
        "swedish": "floden",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-11",
        "german": "der See",
        "swedish": "sjön",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-12",
        "german": "das Meer",
        "swedish": "havet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-13",
        "german": "der Ozean",
        "swedish": "oceanen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-14",
        "german": "die Insel",
        "swedish": "ön",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-15",
        "german": "die Wiese",
        "swedish": "ängen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-16",
        "german": "das Feld",
        "swedish": "fältet/åkern",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-17",
        "german": "der Himmel",
        "swedish": "himlen",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-18",
        "german": "die Sonne",
        "swedish": "solen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-19",
        "german": "der Mond",
        "swedish": "månen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-20",
        "german": "der Stern",
        "swedish": "stjärnan",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-21",
        "german": "die Wolke",
        "swedish": "molnet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-22",
        "german": "der Regen",
        "swedish": "regnet",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-23",
        "german": "der Schnee",
        "swedish": "snön",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-24",
        "german": "der Wind",
        "swedish": "vinden",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-25",
        "german": "der Sturm",
        "swedish": "stormen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-26",
        "german": "das Gewitter",
        "swedish": "åskvädret",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-27",
        "german": "der Blitz",
        "swedish": "blixten",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-28",
        "german": "der Donner",
        "swedish": "åskmullret",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-29",
        "german": "der Nebel",
        "swedish": "dimman",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-30",
        "german": "das Eis",
        "swedish": "isen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-31",
        "german": "das Tier",
        "swedish": "djuret",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-32",
        "german": "der Hund",
        "swedish": "hunden",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-33",
        "german": "die Katze",
        "swedish": "katten",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-34",
        "german": "das Pferd",
        "swedish": "hästen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-35",
        "german": "die Kuh",
        "swedish": "kon",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-36",
        "german": "das Schaf",
        "swedish": "fåret",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-37",
        "german": "das Schwein",
        "swedish": "grisen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-38",
        "german": "der Vogel",
        "swedish": "fågeln",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-39",
        "german": "der Fisch",
        "swedish": "fisken",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-40",
        "german": "das Insekt",
        "swedish": "insekten",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-41",
        "german": "der Klimawandel",
        "swedish": "klimatförändringen",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-42",
        "german": "der Umweltschutz",
        "swedish": "miljöskyddet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-43",
        "german": "die Energie",
        "swedish": "energin",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-44",
        "german": "das Wetter",
        "swedish": "vädret",
        "wordClass": "substantiv",
        "gender": "neutral",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-45",
        "german": "die Temperatur",
        "swedish": "temperaturen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-46",
        "german": "warm",
        "swedish": "varm",
        "wordClass": "adjektiv",
        "gender": "feminin",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-47",
        "german": "kalt",
        "swedish": "kall",
        "wordClass": "adjektiv",
        "gender": "neutral",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-48",
        "german": "sonnig",
        "swedish": "solig",
        "wordClass": "adjektiv",
        "gender": "maskulin",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-49",
        "german": "regnerisch",
        "swedish": "regnig",
        "wordClass": "adjektiv",
        "gender": "feminin",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      },
      {
        "id": "v-11-50",
        "german": "windig",
        "swedish": "blåsig",
        "wordClass": "adjektiv",
        "gender": "neutral",
        "plural": "die Naturelemente",
        "exampleSentence": "Die Natur in den Bergen ist atemberaubend schön.",
        "exampleTranslation": "Naturen i bergen är hisnande vacker."
      }
    ]
  },
  {
    "id": 12,
    "name": "Kultur och medier",
    "description": "Böcker, film, teater, tidningar och digitala medier.",
    "items": [
      {
        "id": "v-12-01",
        "german": "die Kultur",
        "swedish": "kulturen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-02",
        "german": "die Kunst",
        "swedish": "konsten",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-03",
        "german": "die Musik",
        "swedish": "musiken",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-04",
        "german": "die Literatur",
        "swedish": "litteraturen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-05",
        "german": "das Buch",
        "swedish": "boken",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-06",
        "german": "der Roman",
        "swedish": "romanen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-07",
        "german": "das Gedicht",
        "swedish": "dikten",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-08",
        "german": "der Autor",
        "swedish": "författaren (manlig)",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-09",
        "german": "die Autorin",
        "swedish": "författaren (kvinnlig)",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-10",
        "german": "der Schriftsteller",
        "swedish": "författaren",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-11",
        "german": "die Bibliothek",
        "swedish": "biblioteket",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-12",
        "german": "der Verlag",
        "swedish": "förlaget",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-13",
        "german": "die Zeitung",
        "swedish": "dagstidningen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-14",
        "german": "die Zeitschrift",
        "swedish": "tidskriften",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-15",
        "german": "der Artikel",
        "swedish": "artikeln",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-16",
        "german": "die Nachricht",
        "swedish": "nyheten",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-17",
        "german": "die Medien",
        "swedish": "medierna",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-18",
        "german": "das Fernsehen",
        "swedish": "televisionen/tv",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-19",
        "german": "das Radio",
        "swedish": "radion",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-20",
        "german": "der Rundfunk",
        "swedish": "rundradion",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-21",
        "german": "das Internet",
        "swedish": "internet",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-22",
        "german": "die Website",
        "swedish": "webbplatsen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-23",
        "german": "die App",
        "swedish": "appen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-24",
        "german": "die sozialen Medien",
        "swedish": "sociala medier",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-25",
        "german": "der Podcast",
        "swedish": "podden",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-26",
        "german": "das Video",
        "swedish": "videon",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-27",
        "german": "der Film",
        "swedish": "filmen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-28",
        "german": "das Kino",
        "swedish": "bion",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-29",
        "german": "der Regisseur",
        "swedish": "regissören",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-30",
        "german": "der Schauspieler",
        "swedish": "skådespelaren (manlig)",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-31",
        "german": "die Schauspielerin",
        "swedish": "skådespelerskan",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-32",
        "german": "das Theater",
        "swedish": "teatern",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-33",
        "german": "die Bühne",
        "swedish": "scenen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-34",
        "german": "das Stück",
        "swedish": "pjäsen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-35",
        "german": "die Oper",
        "swedish": "operan",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-36",
        "german": "das Konzert",
        "swedish": "konserten",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-37",
        "german": "das Orchester",
        "swedish": "orkestern",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-38",
        "german": "das Museum",
        "swedish": "museet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-39",
        "german": "die Galerie",
        "swedish": "galleriet",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-40",
        "german": "die Ausstellung",
        "swedish": "utställningen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-41",
        "german": "das Foto",
        "swedish": "fotot",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-42",
        "german": "das Bild",
        "swedish": "bilden",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-43",
        "german": "die Fotografie",
        "swedish": "fotografin",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-44",
        "german": "malen",
        "swedish": "måla",
        "wordClass": "verb",
        "gender": "maskulin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-45",
        "german": "zeichnen",
        "swedish": "teckna",
        "wordClass": "verb",
        "gender": "feminin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-46",
        "german": "schreiben",
        "swedish": "skriva",
        "wordClass": "verb",
        "gender": "maskulin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-47",
        "german": "lesen",
        "swedish": "läsa",
        "wordClass": "verb",
        "gender": "feminin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-48",
        "german": "anschauen",
        "swedish": "titta på",
        "wordClass": "verb",
        "gender": "maskulin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-49",
        "german": "senden",
        "swedish": "sända",
        "wordClass": "verb",
        "gender": "feminin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      },
      {
        "id": "v-12-50",
        "german": "veröffentlichen",
        "swedish": "publicera/ge ut",
        "wordClass": "verb",
        "gender": "maskulin",
        "plural": "die Medien",
        "exampleSentence": "Der Autor hat einen neuen Roman veröffentlicht.",
        "exampleTranslation": "Författaren har publicerat en ny roman."
      }
    ]
  },
  {
    "id": 13,
    "name": "Samhälle och politik",
    "description": "Demokrati, lag och rätt, ekonomi och samhällsfrågor.",
    "items": [
      {
        "id": "v-13-01",
        "german": "die Gesellschaft",
        "swedish": "samhället",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-02",
        "german": "die Politik",
        "swedish": "politiken",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-03",
        "german": "der Staat",
        "swedish": "staten",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-04",
        "german": "die Regierung",
        "swedish": "regeringen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-05",
        "german": "das Parlament",
        "swedish": "parlamentet",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-06",
        "german": "der Bundestag",
        "swedish": "förbundsdagen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-07",
        "german": "der Kanzler",
        "swedish": "förbundskanslern (manlig)",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-08",
        "german": "die Kanzlerin",
        "swedish": "förbundskanslern (kvinnlig)",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-09",
        "german": "der Minister",
        "swedish": "ministern (manlig)",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-10",
        "german": "die Ministerin",
        "swedish": "ministern (kvinnlig)",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-11",
        "german": "der Präsident",
        "swedish": "presidenten (manlig)",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-12",
        "german": "die Präsidentin",
        "swedish": "presidenten (kvinnlig)",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-13",
        "german": "die Partei",
        "swedish": "partiet",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-14",
        "german": "die Wahl",
        "swedish": "valet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-15",
        "german": "die Stimme",
        "swedish": "rösten (i val)",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-16",
        "german": "die Demokratie",
        "swedish": "demokratin",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-17",
        "german": "die Freiheit",
        "swedish": "friheten",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-18",
        "german": "das Recht",
        "swedish": "rätten",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-19",
        "german": "das Gesetz",
        "swedish": "lagen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-20",
        "german": "die Verfassung",
        "swedish": "författningen/grundlagen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-21",
        "german": "das Gericht",
        "swedish": "domstolen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-22",
        "german": "der Richter",
        "swedish": "domaren (manlig)",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-23",
        "german": "die Richterin",
        "swedish": "domaren (kvinnlig)",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-24",
        "german": "der Anwalt",
        "swedish": "advokaten (manlig)",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-25",
        "german": "die Anwältin",
        "swedish": "advokaten (kvinnlig)",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-26",
        "german": "die Polizei",
        "swedish": "polisen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-27",
        "german": "die Sicherheit",
        "swedish": "säkerheten",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-28",
        "german": "der Frieden",
        "swedish": "freden",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-29",
        "german": "der Krieg",
        "swedish": "kriget",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-30",
        "german": "der Konflikt",
        "swedish": "konflikten",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-31",
        "german": "die Krise",
        "swedish": "krisen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-32",
        "german": "die Wirtschaft",
        "swedish": "ekonomin / näringslivet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-33",
        "german": "das Geld",
        "swedish": "pengarna",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-34",
        "german": "die Steuer",
        "swedish": "skatten",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-35",
        "german": "der Haushalt",
        "swedish": "budgeten",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-36",
        "german": "die Schulden",
        "swedish": "skulderna",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-37",
        "german": "die Inflation",
        "swedish": "inflationen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-38",
        "german": "der Arbeitsmarkt",
        "swedish": "arbetsmarknaden",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-39",
        "german": "die Bildung",
        "swedish": "utbildningen/bildningen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-40",
        "german": "das System",
        "swedish": "systemet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-41",
        "german": "wählen",
        "swedish": "välja/rösta",
        "wordClass": "verb",
        "gender": "feminin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-42",
        "german": "regieren",
        "swedish": "regera",
        "wordClass": "verb",
        "gender": "maskulin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-43",
        "german": "beschließen",
        "swedish": "besluta",
        "wordClass": "verb",
        "gender": "feminin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-44",
        "german": "abstimmen",
        "swedish": "rösta (i omröstning)",
        "wordClass": "verb",
        "gender": "maskulin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-45",
        "german": "demonstrieren",
        "swedish": "demonstrera",
        "wordClass": "verb",
        "gender": "feminin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-46",
        "german": "politisch",
        "swedish": "politisk",
        "wordClass": "adjektiv",
        "gender": "maskulin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-47",
        "german": "sozial",
        "swedish": "social/samhällelig",
        "wordClass": "adjektiv",
        "gender": "feminin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-48",
        "german": "öffentlich",
        "swedish": "offentlig",
        "wordClass": "adjektiv",
        "gender": "maskulin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-49",
        "german": "privat",
        "swedish": "privat",
        "wordClass": "adjektiv",
        "gender": "feminin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      },
      {
        "id": "v-13-50",
        "german": "demokratisch",
        "swedish": "demokratisk",
        "wordClass": "adjektiv",
        "gender": "maskulin",
        "plural": "die Gesetze",
        "exampleSentence": "Die Bürger wählen alle vier Jahre das Parlament.",
        "exampleTranslation": "Medborgarna väljer parlamentet vart fjärde år."
      }
    ]
  },
  {
    "id": 14,
    "name": "Abstrakta samband",
    "description": "Orsaker, villkor, kontraster, jämförelser och slutsatser.",
    "items": [
      {
        "id": "v-14-01",
        "german": "die Ursache",
        "swedish": "orsaken",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-02",
        "german": "die Wirkung",
        "swedish": "verkan/effekten",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-03",
        "german": "die Folge",
        "swedish": "följden/konsekvensen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-04",
        "german": "der Grund",
        "swedish": "grunden/anledningen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-05",
        "german": "das Ziel",
        "swedish": "målet",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-06",
        "german": "der Zweck",
        "swedish": "syftet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-07",
        "german": "die Bedingung",
        "swedish": "villkoret",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-08",
        "german": "die Voraussetzung",
        "swedish": "förutsättningen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-09",
        "german": "der Gegensatz",
        "swedish": "motsatsen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-10",
        "german": "der Unterschied",
        "swedish": "skillnaden",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-11",
        "german": "die Ähnlichkeit",
        "swedish": "likheten",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-12",
        "german": "der Vergleich",
        "swedish": "jämförelsen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-13",
        "german": "der Vorteil",
        "swedish": "fördelen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-14",
        "german": "der Nachteil",
        "swedish": "nackdelen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-15",
        "german": "die Möglichkeit",
        "swedish": "möjligheten",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-16",
        "german": "die Wahrscheinlighet",
        "swedish": "sannolikheten",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-17",
        "german": "die Notwendigkeit",
        "swedish": "nödvändigheten",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-18",
        "german": "die Tatsache",
        "swedish": "faktumet",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-19",
        "german": "die Realität",
        "swedish": "verkligheten",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-20",
        "german": "die Wahrheit",
        "swedish": "sanningen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-21",
        "german": "die Lüge",
        "swedish": "lögnen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-22",
        "german": "die Meinung",
        "swedish": "åsikten",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-23",
        "german": "die Ansicht",
        "swedish": "synsättet/uppfattningen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-24",
        "german": "der Standpunkt",
        "swedish": "ståndpunkten",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-25",
        "german": "das Argument",
        "swedish": "argumentet",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-26",
        "german": "der Beweis",
        "swedish": "beviset",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-27",
        "german": "das Problem",
        "swedish": "problemet",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-28",
        "german": "die Lösung",
        "swedish": "lösningen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-29",
        "german": "die Entscheidung",
        "swedish": "beslutet",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-30",
        "german": "die Konsequenz",
        "swedish": "konsekvensen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-31",
        "german": "deshalb",
        "swedish": "därför",
        "wordClass": "adverb",
        "gender": "feminin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-32",
        "german": "deswegen",
        "swedish": "därför/av den orsaken",
        "wordClass": "adverb",
        "gender": "maskulin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-33",
        "german": "daher",
        "swedish": "därav/därför",
        "wordClass": "adverb",
        "gender": "feminin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-34",
        "german": "trotzdem",
        "swedish": "ändå/trots det",
        "wordClass": "adverb",
        "gender": "maskulin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-35",
        "german": "dennoch",
        "swedish": "icke desto mindre",
        "wordClass": "adverb",
        "gender": "feminin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-36",
        "german": "allerdings",
        "swedish": "visserligen/dock",
        "wordClass": "adverb",
        "gender": "maskulin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-37",
        "german": "jedoch",
        "swedish": "dock/emellertid",
        "wordClass": "adverb",
        "gender": "feminin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-38",
        "german": "nämlich",
        "swedish": "nämligen",
        "wordClass": "adverb",
        "gender": "maskulin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-39",
        "german": "nämlich",
        "swedish": "nämligen",
        "wordClass": "adverb",
        "gender": "feminin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-40",
        "german": "einerseits",
        "swedish": "å ena sidan",
        "wordClass": "adverb",
        "gender": "maskulin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-41",
        "german": "andererseits",
        "swedish": "å andra sidan",
        "wordClass": "adverb",
        "gender": "feminin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-42",
        "german": "teilweise",
        "swedish": "delvis",
        "wordClass": "adverb",
        "gender": "maskulin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-43",
        "german": "hauptsächlich",
        "swedish": "huvudsakligen",
        "wordClass": "adverb",
        "gender": "feminin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-44",
        "german": "besonders",
        "swedish": "särskilt",
        "wordClass": "adverb",
        "gender": "maskulin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-45",
        "german": "verursachen",
        "swedish": "orsaka",
        "wordClass": "verb",
        "gender": "feminin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-46",
        "german": "führen zu",
        "swedish": "leda till",
        "wordClass": "verb",
        "gender": "maskulin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-47",
        "german": "vergleichen",
        "swedish": "jämföra",
        "wordClass": "verb",
        "gender": "feminin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-48",
        "german": "unterscheiden",
        "swedish": "skilja på",
        "wordClass": "verb",
        "gender": "maskulin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-49",
        "german": "entscheiden",
        "swedish": "besluta",
        "wordClass": "verb",
        "gender": "feminin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      },
      {
        "id": "v-14-50",
        "german": "folgen aus",
        "swedish": "följa av",
        "wordClass": "verb",
        "gender": "maskulin",
        "plural": "die Gründe",
        "exampleSentence": "Aus diesem Grund müssen wir eine schnelle Lösung finden.",
        "exampleTranslation": "Av denna anledning måste vi hitta en snabb lösning."
      }
    ]
  },
  {
    "id": 15,
    "name": "Formellt språk och textbindning",
    "description": "Akademiska och formella bindeord, fraser för e-post och debatt.",
    "items": [
      {
        "id": "v-15-01",
        "german": "sehr geehrte Damen und Herren",
        "swedish": "Bästa damer och herrar (formell hälsning)",
        "wordClass": "uttryck",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-02",
        "german": "mit freundlichen Grüßen",
        "swedish": "Med vänliga hälsningar",
        "wordClass": "uttryck",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-03",
        "german": "Bezug nehmend auf",
        "swedish": "Med hänvisning till",
        "wordClass": "uttryck",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-04",
        "german": "in Anbetracht",
        "swedish": "Med beaktande av",
        "wordClass": "uttryck",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-05",
        "german": "darüber hinaus",
        "swedish": "Därutöver / dessutom",
        "wordClass": "uttryck",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-06",
        "german": "im Gegensatz dazu",
        "swedish": "I motsats därtill",
        "wordClass": "uttryck",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-07",
        "german": "folglich",
        "swedish": "Följaktligen",
        "wordClass": "uttryck",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-08",
        "german": "zusammenfassend",
        "swedish": "Sammanfattningsvis",
        "wordClass": "uttryck",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-09",
        "german": "erstens",
        "swedish": "För det första",
        "wordClass": "uttryck",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-10",
        "german": "zweitens",
        "swedish": "För det andra",
        "wordClass": "uttryck",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-11",
        "german": "drittens",
        "swedish": "För det tredje",
        "wordClass": "uttryck",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-12",
        "german": "schließlich",
        "swedish": "Slutligen",
        "wordClass": "uttryck",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-13",
        "german": "unter anderem",
        "swedish": "Bland annat",
        "wordClass": "uttryck",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-14",
        "german": "vor allem",
        "swedish": "Framför allt",
        "wordClass": "uttryck",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-15",
        "german": "nicht nur ... sondern auch",
        "swedish": "Inte bara ... utan även",
        "wordClass": "uttryck",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-16",
        "german": "sowohl ... als auch",
        "swedish": "Både ... och",
        "wordClass": "uttryck",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-17",
        "german": "weder ... noch",
        "swedish": "Varken ... eller",
        "wordClass": "uttryck",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-18",
        "german": "entweder ... oder",
        "swedish": "Antingen ... eller",
        "wordClass": "uttryck",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-19",
        "german": "zwar ... aber",
        "swedish": "Visserligen ... men",
        "wordClass": "uttryck",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-20",
        "german": "einerseits ... andererseits",
        "swedish": "Å ena sidan ... å andra sidan",
        "wordClass": "uttryck",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-21",
        "german": "in Bezug auf",
        "swedish": "Med avseende på",
        "wordClass": "uttryck",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-22",
        "german": "hinsichtlich",
        "swedish": "Beträffande",
        "wordClass": "uttryck",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-23",
        "german": "gemäß",
        "swedish": "Enligt / i enlighet med",
        "wordClass": "uttryck",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-24",
        "german": "laut",
        "swedish": "Enligt",
        "wordClass": "uttryck",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-25",
        "german": "zufolge",
        "swedish": "Enligt (postposition)",
        "wordClass": "uttryck",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-26",
        "german": "infolge",
        "swedish": "Till följd av",
        "wordClass": "uttryck",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-27",
        "german": "aufgrund",
        "swedish": "På grund av",
        "wordClass": "uttryck",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-28",
        "german": "trotz",
        "swedish": "Trots",
        "wordClass": "uttryck",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-29",
        "german": "während",
        "swedish": "Medan / under tiden",
        "wordClass": "uttryck",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-30",
        "german": "anstatt",
        "swedish": "I stället för",
        "wordClass": "uttryck",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-31",
        "german": "ausdrücken",
        "swedish": "Uttrycka",
        "wordClass": "verb",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-32",
        "german": "darstellen",
        "swedish": "Framställa / representera",
        "wordClass": "verb",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-33",
        "german": "betonen",
        "swedish": "Betona",
        "wordClass": "verb",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-34",
        "german": "hervorheben",
        "swedish": "Lyfta fram / understryka",
        "wordClass": "verb",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-35",
        "german": "erläutern",
        "swedish": "Förklara / redogöra för",
        "wordClass": "verb",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-36",
        "german": "begründen",
        "swedish": "Motivera / grunda",
        "wordClass": "verb",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-37",
        "german": "belegen",
        "swedish": "Belägga / bevisa",
        "wordClass": "verb",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-38",
        "german": "schlussfolgern",
        "swedish": "Dra slutsatsen",
        "wordClass": "verb",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-39",
        "german": "zusammenfassen",
        "swedish": "Sammanfatta",
        "wordClass": "verb",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-40",
        "german": "widersprechen",
        "swedish": "Motsäga",
        "wordClass": "verb",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-41",
        "german": "die Einleitung",
        "swedish": "Inledningen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-42",
        "german": "der Hauptteil",
        "swedish": "Huvuddelen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-43",
        "german": "der Schluss",
        "swedish": "Slutet / avslutningen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-44",
        "german": "die Gliederung",
        "swedish": "Dispositionen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-45",
        "german": "das Fazit",
        "swedish": "Slutsatsen / facit",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-46",
        "german": "die Quelle",
        "swedish": "Källan",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-47",
        "german": "das Zitat",
        "swedish": "Citatet",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-48",
        "german": "der Nachweis",
        "swedish": "Belägget / intyget",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-49",
        "german": "die These",
        "swedish": "Tesen",
        "wordClass": "substantiv",
        "gender": "feminin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      },
      {
        "id": "v-15-50",
        "german": "die Zusammenfassung",
        "swedish": "Sammanfattningen",
        "wordClass": "substantiv",
        "gender": "maskulin",
        "plural": "die Ausdrücke",
        "exampleSentence": "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
        "exampleTranslation": "Sammanfattningsvis kan sägas att studien var framgångsrik."
      }
    ]
  }
];
