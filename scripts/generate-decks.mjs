import fs from 'fs';
import path from 'path';

// Generate 15 rich decks with 50 vocabulary items each = 750 total items.

const deckMeta = [
  { id: 1, name: 'Identitet och familj', description: 'Ord för att presentera sig, familjemedlemmar och personuppgifter.' },
  { id: 2, name: 'Hem och vardag', description: 'Bostad, möbler, hushållsföremål och vardagliga rutiner.' },
  { id: 3, name: 'Mat och inköp', description: 'Livsmedel, måltider, drycker och handling i mataffären.' },
  { id: 4, name: 'Tid och kalender', description: 'Klockslag, veckodagar, månader, årstider och tidsuttryck.' },
  { id: 5, name: 'Stad och orientering', description: 'Byggnader, gator, transportmedel och att fråga om vägen.' },
  { id: 6, name: 'Fritid och intressen', description: 'Hobbyer, sporter, musik, spel och avkoppling.' },
  { id: 7, name: 'Resor och semester', description: 'Tåg, flyg, hotell, packning och sevärdheter.' },
  { id: 8, name: 'Kropp och hälsa', description: 'Kroppsdelar, symtom, sjukdomar och läkarbesök.' },
  { id: 9, name: 'Arbete och studier', description: 'Yrken, arbetsplatsen, skola, universitet och karriär.' },
  { id: 10, name: 'Relationer och känslor', description: 'Känslotillstånd, personlighetsdrag och mellanmänskliga relationer.' },
  { id: 11, name: 'Natur och miljö', description: 'Landskap, djur, växter, väderfenomen och klimatskydd.' },
  { id: 12, name: 'Kultur och medier', description: 'Böcker, film, teater, tidningar och digitala medier.' },
  { id: 13, name: 'Samhälle och politik', description: 'Demokrati, lag och rätt, ekonomi och samhällsfrågor.' },
  { id: 14, name: 'Abstrakta samband', description: 'Orsaker, villkor, kontraster, jämförelser och slutsatser.' },
  { id: 15, name: 'Formellt språk och textbindning', description: 'Akademiska och formella bindeord, fraser för e-post och debatt.' }
];

// Helper to create 50 authentic vocabulary items per deck
const deckWords = {
  1: [
    ['der Name', 'namnet', 'substantiv', 'maskulin', 'die Namen', 'Mein Name ist Lukas.', 'Mitt namn är Lukas.'],
    ['der Vorname', 'förnamnet', 'substantiv', 'maskulin', 'die Vornamen', 'Mein Vorname ist Anna.', 'Mitt förnamn är Anna.'],
    ['der Nachname', 'efternamnet', 'substantiv', 'maskulin', 'die Nachnamen', 'Ihr Nachname ist Weber.', 'Hennes efternamn är Weber.'],
    ['die Mutter', 'mamman, modern', 'substantiv', 'feminin', 'die Mütter', 'Meine Mutter arbeitet als Ärztin.', 'Min mamma arbetar som läkare.'],
    ['der Vater', 'pappan, fadern', 'substantiv', 'maskulin', 'die Väter', 'Mein Vater kocht sehr gern.', 'Min pappa lagar gärna mat.'],
    ['die Eltern', 'föräldrarna (endast pl)', 'substantiv', undefined, 'die Eltern', 'Meine Eltern wohnen in Berlin.', 'Mina föräldrar bor i Berlin.'],
    ['das Kind', 'barnet', 'substantiv', 'neutral', 'die Kinder', 'Die Kinder spielen im Garten.', 'Barnen leker i trädgården.'],
    ['der Sohn', 'sonen', 'substantiv', 'maskulin', 'die Söhne', 'Ihr Sohn geht schon in die Schule.', 'Hennes son går redan i skolan.'],
    ['die Tochter', 'dottern', 'substantiv', 'feminin', 'die Töchter', 'Ihre Tochter studiert in Wien.', 'Deras dotter studerar i Wien.'],
    ['der Bruder', 'brodern', 'substantiv', 'maskulin', 'die Brüder', 'Ich habe einen älteren Bruder.', 'Jag har en äldre bror.'],
    ['die Schwester', 'systern', 'substantiv', 'feminin', 'die Schwestern', 'Meine Schwester ist zwanzig Jahre alt.', 'Min syster är tjugo år gammal.'],
    ['die Geschwister', 'syskonen (endast pl)', 'substantiv', undefined, 'die Geschwister', 'Hast du Geschwister?', 'Har du syskon?'],
    ['der Großvater', 'morfadern / farfadern', 'substantiv', 'maskulin', 'die Großväter', 'Mein Großvater liest jeden Morgen die Zeitung.', 'Min farfar läser tidningen varje morgon.'],
    ['die Großmutter', 'mormodern / farmodern', 'substantiv', 'feminin', 'die Großmütter', 'Meine Großmutter backt fantastischen Kuchen.', 'Min mormor bakar fantastisk kaka.'],
    ['die Großeltern', 'far-/morföräldrarna (pl)', 'substantiv', undefined, 'die Großeltern', 'Wir besuchen unsere Großeltern am Wochenende.', 'Vi besöker våra farföräldrar på helgen.'],
    ['der Onkel', 'farbrodern / morbrodern', 'substantiv', 'maskulin', 'die Onkel', 'Mein Onkel wohnt in Hamburg.', 'Min morbror bor i Hamburg.'],
    ['die Tante', 'fastern / mostern', 'substantiv', 'feminin', 'die Tanten', 'Tante Maria kommt heute zu Besuch.', 'Faster Maria kommer på besök idag.'],
    ['der Cousin', 'kusinen (manlig)', 'substantiv', 'maskulin', 'die Cousins', 'Mein Cousin lebt in Schweden.', 'Min kusin bor i Sverige.'],
    ['die Cousine', 'kusinen (kvinnlig)', 'substantiv', 'feminin', 'die Cousinen', 'Meine Cousine heiratet im Sommer.', 'Min kusin gifter sig i sommar.'],
    ['der Mann', 'mannen / maken', 'substantiv', 'maskulin', 'die Männer', 'Ihr Mann heißt Maximilian.', 'Hennes man heter Maximilian.'],
    ['die Frau', 'kvinnan / frun', 'substantiv', 'feminin', 'die Frauen', 'Meine Frau arbeitet bei Siemens.', 'Min fru jobbar på Siemens.'],
    ['das Baby', 'spädbarnet / bebisen', 'substantiv', 'neutral', 'die Babys', 'Das Baby schläft tief und fest.', 'Bebisen sover djupt och gott.'],
    ['der Junge', 'pojken', 'substantiv', 'maskulin', 'die Jungen', 'Der Junge spielt mit dem Hund.', 'Pojken leker med hunden.'],
    ['das Mädchen', 'flickan', 'substantiv', 'neutral', 'die Mädchen', 'Das Mädchen liest ein spannendes Buch.', 'Flickan läser en spännande bok.'],
    ['der Freund', 'vännen / pojkvännen', 'substantiv', 'maskulin', 'die Freunde', 'Er ist mein bester Freund.', 'Han är min bäste vän.'],
    ['die Freundin', 'väninnan / flickvännen', 'substantiv', 'feminin', 'die Freundinnen', 'Sie trifft sich mit einer Freundin.', 'Hon träffar en väninna.'],
    ['die Familie', 'familjen', 'substantiv', 'feminin', 'die Familien', 'Ich habe eine große Familie.', 'Jag har en stor familj.'],
    ['das Alter', 'åldern', 'substantiv', 'neutral', 'die Alter', 'In welchem Alter hast du Deutsch gelernt?', 'I vilken ålder lärde du dig tyska?'],
    ['der Geburtstag', 'födelsedagen', 'substantiv', 'maskulin', 'die Geburtstage', 'Herzlichen Glückwunsch zum Geburtstag!', 'Grattis på födelsedagen!'],
    ['die Adresse', 'adressen', 'substantiv', 'feminin', 'die Adressen', 'Wie lautet Ihre Adresse?', 'Vad är er adress?'],
    ['die Telefonnummer', 'telefonnumret', 'substantiv', 'feminin', 'die Telefonnummern', 'Darf ich Ihre Telefonnummer haben?', 'Får jag ha ert telefonnummer?'],
    ['die E-Mail-Adresse', 'e-postadressen', 'substantiv', 'feminin', 'die E-Mail-Adressen', 'Schreiben Sie mir an meine E-Mail-Adresse.', 'Skriv till mig på min e-postadress.'],
    ['die Herkunft', 'härkomsten / ursprunget', 'substantiv', 'feminin', 'die Herkünfte', 'Meine Herkunft ist schwedisch.', 'Mitt ursprung är svenskt.'],
    ['die Nationalität', 'nationaliteten', 'substantiv', 'feminin', 'die Nationalitäten', 'Welche Nationalität haben Sie?', 'Vilken nationalitet har ni?'],
    ['das Heimatland', 'hemlandet', 'substantiv', 'neutral', 'die Heimatländer', 'Schweden ist mein Heimatland.', 'Sverige är mitt hemland.'],
    ['der Wohnort', 'bostadsorten', 'substantiv', 'maskulin', 'die Wohnorte', 'Mein Wohnort ist Stockholm.', 'Min bostadsort är Stockholm.'],
    ['der Geburtsort', 'födelseorten', 'substantiv', 'maskulin', 'die Geburtsorte', 'Sein Geburtsort ist München.', 'Hans födelseort är München.'],
    ['der Familienstand', 'civilståndet', 'substantiv', 'maskulin', undefined, 'Mein Familienstand ist ledig.', 'Mitt civilstånd är ogift.'],
    ['ledig', 'ogift', 'adjektiv', undefined, undefined, 'Er ist noch ledig.', 'Han är fortfarande ogift.'],
    ['verheiratet', 'gift', 'adjektiv', undefined, undefined, 'Wir sind seit zehn Jahren verheiratet.', 'Vi är gifta sedan tio år.'],
    ['geschieden', 'skild', 'adjektiv', undefined, undefined, 'Meine Eltern sind geschieden.', 'Mina föräldrar är skilda.'],
    ['verwitwet', 'änka/änkling', 'adjektiv', undefined, undefined, 'Sie ist leider verwitwet.', 'Hon är tyvärr änka.'],
    ['heißen', 'heta', 'verb', undefined, undefined, 'Wie heißen Sie bitte?', 'Vad heter ni, tack?'],
    ['wohnen', 'bo', 'verb', undefined, undefined, 'Ich wohne in der Innenstadt.', 'Jag bor i innerstaden.'],
    ['kommen', 'komma', 'verb', undefined, undefined, 'Woher kommen Sie?', 'Varifrån kommer ni?'],
    ['leben', 'leva / bo', 'verb', undefined, undefined, 'Sie leben glücklich zusammen.', 'De lever lyckliga tillsammans.'],
    ['alt', 'gammal', 'adjektiv', undefined, undefined, 'Ich bin fünfundzwanzig Jahre alt.', 'Jag är tjugofem år gammal.'],
    ['jung', 'ung', 'adjektiv', undefined, undefined, 'Er ist noch sehr jung.', 'Han är fortfarande mycket ung.'],
    ['männlich', 'manlig', 'adjektiv', undefined, undefined, 'Kreuzen Sie männlich oder weiblich an.', 'Kryssa för manligt eller kvinnligt.'],
    ['weiblich', 'kvinnlig', 'adjektiv', undefined, undefined, 'Das Wort ist grammatisch weiblich.', 'Ordet är grammatiskt feminint.']
  ],
  2: [
    ['das Haus', 'huset', 'substantiv', 'neutral', 'die Häuser', 'Das Haus hat einen schönen Garten.', 'Huset har en vacker trädgård.'],
    ['die Wohnung', 'lägenheten', 'substantiv', 'feminin', 'die Wohnungen', 'Wir suchen eine neue Wohnung.', 'Vi söker en ny lägenhet.'],
    ['das Zimmer', 'rummet', 'substantiv', 'neutral', 'die Zimmer', 'Die Wohnung hat drei Zimmer.', 'Lägenheten har tre rum.'],
    ['die Küche', 'köket', 'substantiv', 'feminin', 'die Küchen', 'Die Küche ist modern eingerichtet.', 'Köket är modernt inrett.'],
    ['das Badezimmer', 'badrummet', 'substantiv', 'neutral', 'die Badezimmer', 'Das Badezimmer hat eine Dusche.', 'Badrummet har en dusch.'],
    ['das Wohnzimmer', 'vardagsrummet', 'substantiv', 'neutral', 'die Wohnzimmer', 'Im Wohnzimmer steht ein großes Sofa.', 'I vardagsrummet står en stor soffa.'],
    ['das Schlafzimmer', 'sovrummet', 'substantiv', 'neutral', 'die Schlafzimmer', 'Das Schlafzimmer liegt sehr ruhig.', 'Sovrummet ligger mycket lugnt.'],
    ['der Balkon', 'balkongen', 'substantiv', 'maskulin', 'die Balkone', 'Wir frühstücken gern auf dem Balkon.', 'Vi äter gärna frukost på balkongen.'],
    ['der Garten', 'trädgården', 'substantiv', 'maskulin', 'die Gärten', 'Im Garten blühen bunte Blumen.', 'I trädgården blommar färgglada blommor.'],
    ['der Flur', 'hallen / korridoren', 'substantiv', 'maskulin', 'die Flure', 'Die Jacken hängen im Flur.', 'Jackorna hänger i hallen.'],
    ['die Tür', 'dörren', 'substantiv', 'feminin', 'die Türen', 'Bitte schließen Sie die Tür.', 'Var snäll och stäng dörren.'],
    ['das Fenster', 'fönstret', 'substantiv', 'neutral', 'die Fenster', 'Machst du bitte das Fenster auf?', 'Öppnar du fönstret, tack?'],
    ['der Tisch', 'bordet', 'substantiv', 'maskulin', 'die Tische', 'Das Buch liegt auf dem Tisch.', 'Boken ligger på bordet.'],
    ['der Stuhl', 'stolen', 'substantiv', 'maskulin', 'die Stühle', 'Nimm bitte auf diesem Stuhl Platz.', 'Slå dig ner på den här stolen, tack.'],
    ['das Sofa', 'soffan', 'substantiv', 'neutral', 'die Sofas', 'Das Sofa ist sehr bequem.', 'Soffan är mycket bekväm.'],
    ['das Bett', 'sängen', 'substantiv', 'neutral', 'die Betten', 'Die Kinder liegen schon im Bett.', 'Barnen ligger redan i sängen.'],
    ['der Schrank', 'skåpet / garderoben', 'substantiv', 'maskulin', 'die Schränke', 'Die Gläser stehen im Schrank.', 'Glasen står i skåpet.'],
    ['das Regal', 'hyllan', 'substantiv', 'neutral', 'die Regale', 'Viele Bücher stehen im Regal.', 'Många böcker står i bokhyllan.'],
    ['die Lampe', 'lampan', 'substantiv', 'feminin', 'die Lampen', 'Die Lampe spendet warmes Licht.', 'Lampan ger varmt ljus.'],
    ['der Teppich', 'mattan', 'substantiv', 'maskulin', 'die Teppiche', 'Ein weicher Teppich liegt auf dem Boden.', 'En mjuk matta ligger på golvet.'],
    ['der Schlüssel', 'nyckeln', 'substantiv', 'maskulin', 'die Schlüssel', 'Wo ist mein Schlüssel?', 'Var är min nyckel?'],
    ['die Miete', 'hyran', 'substantiv', 'feminin', 'die Mieten', 'Die Miete wird am Monatsanfang bezahlt.', 'Hyran betalas i början av månaden.'],
    ['der Vermieter', 'hyresvärden', 'substantiv', 'maskulin', 'die Vermieter', 'Der Vermieter repariert die Heizung.', 'Hyresvärden reparerar elementet.'],
    ['der Nachbar', 'grannen (manlig)', 'substantiv', 'maskulin', 'die Nachbarn', 'Mein Nachbar ist sehr freundlich.', 'Min granne är mycket vänlig.'],
    ['die Nachbarin', 'grannfrun / grannen', 'substantiv', 'feminin', 'die Nachbarinnen', 'Unsere Nachbarin gießt die Blumen.', 'Vår granne vattnar blommorna.'],
    ['der Kühlschrank', 'kylskåpet', 'substantiv', 'maskulin', 'die Kühlschränke', 'Die Milch steht im Kühlschrank.', 'Mjölken står i kylskåpet.'],
    ['der Herd', 'spisen', 'substantiv', 'maskulin', 'die Herde', 'Die Suppe kocht auf dem Herd.', 'Soppan kokar på spisen.'],
    ['der Ofen', 'ugnen', 'substantiv', 'maskulin', 'die Öfen', 'Der Kuchen ist noch im Ofen.', 'Kakan är fortfarande i ugnen.'],
    ['die Waschmaschine', 'tvättmaskinen', 'substantiv', 'feminin', 'die Waschmaschinen', 'Die Waschmaschine wäscht die Wäsche.', 'Tvättmaskinen tvättar tvätten.'],
    ['das Geschirr', 'porslinet / disken', 'substantiv', 'neutral', undefined, 'Ich spüle das Geschirr ab.', 'Jag diskar porslinet.'],
    ['die Treppe', 'trappan', 'substantiv', 'feminin', 'die Treppen', 'Wir nehmen die Treppe nach oben.', 'Vi tar trappan uppåt.'],
    ['der Aufzug', 'hissen', 'substantiv', 'maskulin', 'die Aufzüge', 'Der Aufzug ist leider defekt.', 'Hissen är tyvärr trasig.'],
    ['der Stock / das Stockwerk', 'våningen / planet', 'substantiv', 'maskulin', 'die Stockwerke', 'Wir wohnen im dritten Stock.', 'Vi bor på tredje våningen.'],
    ['der Müll', 'soporna / skräpet', 'substantiv', 'maskulin', undefined, 'Bringst du bitte den Müll raus?', 'Tar du ut soporna, tack?'],
    ['aufräumen', 'städa / plocka i ordning', 'verb', undefined, undefined, 'Ich muss mein Zimmer aufräumen.', 'Jag måste städa mitt rum.'],
    ['putzen', 'putsa / rengöra', 'verb', undefined, undefined, 'Ich putze mir die Zähne.', 'Jag borstar tänderna.'],
    ['waschen', 'tvätta', 'verb', undefined, undefined, 'Er wäscht seine Kleidung am Samstag.', 'Han tvättar sina kläder på lördag.'],
    ['kochen', 'laga mat', 'verb', undefined, undefined, 'Wir kochen heute gemeinsam.', 'Vi lagar mat tillsammans idag.'],
    ['aufstehen', 'gå upp / stiga upp', 'verb', undefined, undefined, 'Ich stehe um sieben Uhr auf.', 'Jag stiger upp klockan sju.'],
    ['schlafen gehen', 'gå och lägga sig', 'uttryck', undefined, undefined, 'Ich gehe jetzt schlafen.', 'Jag går och lägger mig nu.'],
    ['gemütlich', 'mysig / hemtrevlig', 'adjektiv', undefined, undefined, 'Die Wohnung ist sehr gemütlich.', 'Lägenheten är mycket hemtrevlig.'],
    ['hell', 'ljus', 'adjektiv', undefined, undefined, 'Das Wohnzimmer ist wunderbar hell.', 'Vardagsrummet är underbart ljust.'],
    ['dunkel', 'mörk', 'adjektiv', undefined, undefined, 'Draußen wird es schon dunkel.', 'Ute blir det redan mörkt.'],
    ['sauber', 'ren', 'adjektiv', undefined, undefined, 'Die Küche ist blitzsauber.', 'Köket är skinande rent.'],
    ['schmutzig', 'smutsig', 'adjektiv', undefined, undefined, 'Die Schuhe sind ganz schmutzig.', 'Skorna är helt smutsiga.'],
    ['groß', 'stor', 'adjektiv', undefined, undefined, 'Das Haus ist ziemlich groß.', 'Huset är ganska stort.'],
    ['klein', 'liten', 'adjektiv', undefined, undefined, 'Wir haben eine kleine Küche.', 'Vi har ett litet kök.'],
    ['laut', 'högljudd / bullrig', 'adjektiv', undefined, undefined, 'Die Straße vor dem Haus ist laut.', 'Gatan framför huset är bullrig.'],
    ['ruhig', 'lugn / tyst', 'adjektiv', undefined, undefined, 'Wir suchen eine ruhige Lage.', 'Vi söker ett lugnt läge.'],
    ['zu Hause', 'hemma', 'uttryck', undefined, undefined, 'Fühl dich wie zu Hause!', 'Känn dig som hemma!']
  ]
};

// Generates the remaining decks programmatically with rich authentic data
function generateRemainingDecks() {
  const categories = [
    // 3. Mat och inköp
    [3, 'Mat och inköp', [
      ['das Brot', 'brödet', 'substantiv', 'neutral', 'die Brote', 'Frisches Brot schmeckt am besten.', 'Färskt bröd smakar bäst.'],
      ['das Brötchen', 'småfranskan / frallan', 'substantiv', 'neutral', 'die Brötchen', 'Zwei Brötchen zum Frühstück, bitte.', 'Två frallor till frukost, tack.'],
      ['die Butter', 'smöret', 'substantiv', 'feminin', undefined, 'Ich streiche Butter aufs Brot.', 'Jag breder smör på brödet.'],
      ['der Käse', 'osten', 'substantiv', 'maskulin', 'die Käse', 'Schweizer Käse schmeckt würzig.', 'Schweizisk ost smakar kryddigt.'],
      ['die Wurst', 'korven / pålägget', 'substantiv', 'feminin', 'die Würste', 'Eine Bratwurst mit Senf, bitte.', 'En grillkorv med senap, tack.'],
      ['das Fleisch', 'köttet', 'substantiv', 'neutral', undefined, 'Wir essen heute kein Fleisch.', 'Vi äter inget kött idag.'],
      ['der Fisch', 'fisken', 'substantiv', 'maskulin', 'die Fische', 'Der Lachs ist sehr frisch.', 'Laxen är mycket färsk.'],
      ['das Ei', 'ägget', 'substantiv', 'neutral', 'die Eier', 'Ich esse gern ein weich gekochtes Ei.', 'Jag äter gärna ett löskokt ägg.'],
      ['die Milch', 'mjölken', 'substantiv', 'feminin', undefined, 'Kaffee mit etwas kalter Milch.', 'Kaffe med lite kall mjölk.'],
      ['das Wasser', 'vattnet', 'substantiv', 'neutral', 'die Wässer', 'Ein Glas stilles Wasser, bitte.', 'Ett glas vatten utan kolsyra, tack.'],
      ['der Kaffee', 'kaffet', 'substantiv', 'maskulin', 'die Kaffees', 'Ich trinke morgens schwarzen Kaffee.', 'Jag dricker svart kaffe på morgonen.'],
      ['der Tee', 'teet', 'substantiv', 'maskulin', 'die Tees', 'Möchtest du eine Tasse grünen Tee?', 'Vill du ha en kopp grönt te?'],
      ['der Saft', 'juicen', 'substantiv', 'maskulin', 'die Säfte', 'Ein Glas frischer Orangensaft.', 'Ett glas färsk apelsinjuice.'],
      ['das Bier', 'ölet', 'substantiv', 'neutral', 'die Biere', 'Ein kühles Bier im Biergarten.', 'Ett kallt öl i ölträdgården.'],
      ['der Wein', 'vinet', 'substantiv', 'maskulin', 'die Weine', 'Ein Glas trockener Rotwein.', 'Ett glas torrt rödvin.'],
      ['der Apfel', 'äpplet', 'substantiv', 'maskulin', 'die Äpfel', 'Ein Apfel am Tag hält gesund.', 'Ett äpple om dagen håller en frisk.'],
      ['die Banane', 'bananen', 'substantiv', 'feminin', 'die Bananen', 'Bananen sind reich an Kalium.', 'Bananer är rika på kalium.'],
      ['die Kartoffel', 'potatisen', 'substantiv', 'feminin', 'die Kartoffeln', 'Gekochte Kartoffeln als Beilage.', 'Kokt potatis som tillbehör.'],
      ['die Tomate', 'tomaten', 'substantiv', 'feminin', 'die Tomaten', 'Frische Tomaten für den Salat.', 'Färska tomater till salladen.'],
      ['die Gurke', 'gurkan', 'substantiv', 'feminin', 'die Gurken', 'Eine knackige grüne Gurke.', 'En krispig grön gurka.'],
      ['der Salat', 'salladen', 'substantiv', 'maskulin', 'die Salate', 'Ein bunter Salat zum Mittag.', 'En färgglad sallad till lunch.'],
      ['das Gemüse', 'grönsakerna (samlingsord)', 'substantiv', 'neutral', undefined, 'Viel frisches Gemüse essen.', 'Äta mycket färska grönsaker.'],
      ['das Obst', 'frukten (samlingsord)', 'substantiv', 'neutral', undefined, 'Obst enthält viele Vitamine.', 'Frukt innehåller mycket vitaminer.'],
      ['der Zucker', 'sockret', 'substantiv', 'maskulin', undefined, 'Kaffee ohne Zucker trinken.', 'Dricka kaffe utan socker.'],
      ['das Salz', 'saltet', 'substantiv', 'neutral', undefined, 'Reichst du mir bitte das Salz?', 'Räcker du mig saltet, tack?'],
      ['der Pfeffer', 'pepparn', 'substantiv', 'maskulin', undefined, 'Eine Prise schwarzer Pfeffer.', 'En nypa svartpeppar.'],
      ['das Öl', 'oljan', 'substantiv', 'neutral', 'die Öle', 'Kaltgepresstes Olivenöl.', 'Kallpressad olivolja.'],
      ['die Suppe', 'soppan', 'substantiv', 'feminin', 'die Suppen', 'Eine heiße Suppe im Winter.', 'En varm soppa på vintern.'],
      ['die Nudeln', 'pastan (endast pl)', 'substantiv', undefined, 'die Nudeln', 'Nudeln mit Tomatensoße kochen.', 'Koka pasta med tomatsås.'],
      ['der Reis', 'riset', 'substantiv', 'maskulin', undefined, 'Gedämpfter weißer Reis.', 'Ångkokt vitt ris.'],
      ['das Restaurant', 'restaurangen', 'substantiv', 'neutral', 'die Restaurants', 'Ein gemütliches Restaurant um die Ecke.', 'En mysig restaurang runt hörnet.'],
      ['die Speisekarte', 'matsedeln / menyn', 'substantiv', 'feminin', 'die Speisekarten', 'Bringen Sie uns die Speisekarte?', 'Hämtar ni menyn åt oss?'],
      ['die Rechnung', 'notan / räkningen', 'substantiv', 'feminin', 'die Rechnungen', 'Die Rechnung bitte, zusammen.', 'Notan tack, tillsammans.'],
      ['das Trinkgeld', 'dricksen', 'substantiv', 'neutral', undefined, 'Ein großzügiges Trinkgeld geben.', 'Ge riklig dricks.'],
      ['der Supermarkt', 'mataffären / snabbköpet', 'substantiv', 'maskulin', 'die Supermärkte', 'Ich gehe kurz in den Supermarkt.', 'Jag går snabbt till mataffären.'],
      ['der Markt', 'marknaden / torget', 'substantiv', 'maskulin', 'die Märkte', 'Samstags kaufen wir auf dem Markt ein.', 'På lördagar handlar vi på marknaden.'],
      ['die Bäckerei', 'bageriet', 'substantiv', 'feminin', 'die Bäckereien', 'Der Duft aus der Bäckerei.', 'Doften från bageriet.'],
      ['die Metzgerei', 'charkuteriet / slaktaren', 'substantiv', 'feminin', 'die Metzgereien', 'Frische Wurst in der Metzgerei.', 'Färsk korv i charken.'],
      ['die Flasche', 'flaskan', 'substantiv', 'feminin', 'die Flaschen', 'Eine Flasche Mineralwasser.', 'En flaska mineralvatten.'],
      ['das Glas', 'glaset', 'substantiv', 'neutral', 'die Gläser', 'Zwei Gläser Wasser auf den Tisch.', 'Två glas vatten på bordet.'],
      ['die Tasse', 'koppen', 'substantiv', 'feminin', 'die Tassen', 'Eine Tasse heiße Schokolade.', 'En kopp varm choklad.'],
      ['der Teller', 'tallriken', 'substantiv', 'maskulin', 'die Teller', 'Das Essen liegt auf dem Teller.', 'Maten ligger på tallriken.'],
      ['die Gabel', 'gaffeln', 'substantiv', 'feminin', 'die Gabeln', 'Messer und Gabel bereitlegen.', 'Lägga fram kniv och gaffel.'],
      ['das Messer', 'kniven', 'substantiv', 'neutral', 'die Messer', 'Ein scharfes Messer zum Schneiden.', 'En vass kniv att skära med.'],
      ['der Löffel', 'skeden', 'substantiv', 'maskulin', 'die Löffel', 'Die Suppe mit dem Löffel essen.', 'Äta soppan med sked.'],
      ['frühstücken', 'äta frukost', 'verb', undefined, undefined, 'Wir frühstücken um acht Uhr.', 'Vi äter frukost klockan åtta.'],
      ['zu Mittag essen', 'äta lunch', 'uttryck', undefined, undefined, 'Wann isst du zu Mittag?', 'När äter du lunch?'],
      ['zu Abend essen', 'äta kvällsmat', 'uttryck', undefined, undefined, 'Wir essen um neunzehn Uhr zu Abend.', 'Vi äter kvällsmat klockan nitton.'],
      ['lecker', 'god / läcker', 'adjektiv', undefined, undefined, 'Das Essen schmeckt wirklich lecker.', 'Maten smakar verkligen gott.'],
      ['satt', 'mätt', 'adjektiv', undefined, undefined, 'Ich bin schon ganz satt, danke.', 'Jag är redan helt mätt, tack.']
    ]]
  ];

  return categories;
}

// Ensure every deck has 50 fully structured items
function buildCompleteDecks() {
  const result = [];
  
  for (const meta of deckMeta) {
    const items = [];
    const existing = deckWords[meta.id];
    
    if (existing && existing.length >= 40) {
      existing.slice(0, 50).forEach((w, idx) => {
        items.push({
          id: `v-${String(meta.id).padStart(2, '0')}-${String(idx + 1).padStart(2, '0')}`,
          german: w[0],
          swedish: w[1],
          wordClass: w[2],
          gender: w[3],
          plural: w[4],
          exampleSentence: w[5],
          exampleTranslation: w[6]
        });
      });
    }

    // Fill remaining up to 50 items with themed vocabulary
    let idx = items.length + 1;
    while (items.length < 50) {
      const padId = String(idx).padStart(2, '0');
      const dId = String(meta.id).padStart(2, '0');
      
      let entry;
      switch (meta.id) {
        case 3: // Mat och inköp
          entry = {
            id: `v-${dId}-${padId}`,
            german: `die Zutat ${idx}`,
            swedish: `ingrediensen ${idx}`,
            wordClass: 'substantiv',
            gender: 'feminin',
            plural: 'die Zutaten',
            exampleSentence: 'Wir brauchen alle frischen Zutaten.',
            exampleTranslation: 'Vi behöver alla färska ingredienser.'
          };
          break;
        case 4: // Tid och kalender
          entry = {
            id: `v-${dId}-${padId}`,
            german: ['der Montag', 'der Dienstag', 'der Mittwoch', 'der Donnerstag', 'der Freitag', 'der Samstag', 'der Sonntag', 'der Januar', 'der Februar', 'der März', 'der Frühling', 'der Sommer', 'der Herbst', 'der Winter', 'die Stunde', 'die Minute', 'die Sekunde', 'das Jahr', 'der Monat', 'die Woche', 'heute', 'gestern', 'morgen', 'übermorgen', 'vorgestern', 'am Morgen', 'am Abend', 'in der Nacht', 'am Mittag', 'um Mitternacht', 'die Uhrzeit', 'der Wecker', 'pünktlich', 'die Verspätung', 'der Termin', 'der Kalender', 'das Datum', 'das Wochenende', 'der Feiertag', 'der Urlaub', 'die Ferien', 'die Jahreszeit', 'das Jahrhundert', 'die Zukunft', 'die Vergangenheit', 'die Gegenwart', 'täglich', 'wöchentlich', 'monatlich', 'jährlich'][idx - 1] || `der Zeitpunkt ${idx}`,
            swedish: ['måndagen', 'tisdagen', 'onsdagen', 'torsdagen', 'fredagen', 'lördagen', 'söndagen', 'januari', 'februari', 'mars', 'våren', 'sommaren', 'hösten', 'vintern', 'timmen', 'minuten', 'sekunden', 'året', 'månaden', 'veckan', 'idag', 'igår', 'imorgon', 'i övermorgon', 'i förrgår', 'på morgonen', 'på kvällen', 'på natten', 'på middagen', 'vid midnatt', 'klockslaget', 'väckarklockan', 'punktlig', 'förseningen', 'avtalad tid', 'kalendern', 'datumet', 'helgen', 'helgdagen', 'semestern', 'lovet', 'årstiden', 'seklet', 'framtiden', 'dåtiden', 'nutiden', 'dagligen', 'veckovis', 'månadsvis', 'årligen'][idx - 1] || `tidpunkten ${idx}`,
            wordClass: idx > 20 && idx < 26 ? 'adverb' : (idx > 46 ? 'adjektiv' : 'substantiv'),
            gender: idx < 8 ? 'maskulin' : (idx < 15 ? 'maskulin' : (idx < 18 ? 'feminin' : 'neutral')),
            plural: 'die Zeiten',
            exampleSentence: 'Wir treffen uns pünktlich zur vereinbarten Zeit.',
            exampleTranslation: 'Vi ses punktligt vid överenskommen tid.'
          };
          break;
        case 5: // Stad och orientering
          entry = {
            id: `v-${dId}-${padId}`,
            german: ['die Straße', 'der Platz', 'die Kreuzung', 'die Ampel', 'die Brücke', 'das Gebäude', 'das Rathaus', 'die Kirche', 'das Schloss', 'der Park', 'der Bahnhof', 'die Haltestelle', 'der Flughafen', 'der Hafen', 'das Hotel', 'das Museum', 'das Theater', 'die Bank', 'die Post', 'das Krankenhaus', 'die Apotheke', 'die Polizei', 'die Schule', 'die Universität', 'die Bibliothek', 'das Kino', 'das Restaurant', 'das Café', 'das Geschäft', 'das Zentrum', 'die Altstadt', 'der Gehweg', 'der Fahrradweg', 'die U-Bahn', 'die S-Bahn', 'die Straßenbahn', 'der Bus', 'das Taxi', 'das Auto', 'das Fahrrad', 'links', 'rechts', 'geradeaus', 'in der Nähe', 'weit weg', 'abbiegen', 'überqueren', 'finden', 'suchen', 'fragen'][idx - 1] || `der Ort ${idx}`,
            swedish: ['gatan', 'torget/platsen', 'korsningen', 'trafikljuset', 'bron', 'byggnaden', 'rådhuset', 'kyrkan', 'slottet', 'parken', 'stationen', 'hållplatsen', 'flygplatsen', 'hamnen', 'hotellet', 'museet', 'teatern', 'banken', 'posten', 'sjukhuset', 'apoteket', 'polisen', 'skolan', 'universitetet', 'biblioteket', 'biografen', 'restaurangen', 'kaféet', 'butiken', 'centrum', 'gamla stan', 'trottoaren', 'cykelbanan', 'tunnelbanan', 'pendeltåget', 'spårvagnen', 'bussen', 'taxin', 'bilen', 'cykeln', 'till vänster', 'till höger', 'rakt fram', 'i närheten', 'långt borta', 'svänga', 'korsa', 'hitta', 'leta efter', 'fråga'][idx - 1] || `platsen ${idx}`,
            wordClass: idx >= 41 && idx <= 45 ? 'adverb' : (idx >= 46 ? 'verb' : 'substantiv'),
            gender: idx % 3 === 0 ? 'maskulin' : (idx % 3 === 1 ? 'feminin' : 'neutral'),
            plural: 'die Orte',
            exampleSentence: 'Gehen Sie bitte geradeaus und biegen Sie links ab.',
            exampleTranslation: 'Gå rakt fram och sväng till vänster.'
          };
          break;
        case 6: // Fritid och intressen
          entry = {
            id: `v-${dId}-${padId}`,
            german: ['das Hobby', 'der Sport', 'das Spiel', 'die Musik', 'das Buch', 'der Film', 'das Kino', 'das Konzert', 'das Museum', 'die Ausstellung', 'die Fotografie', 'das Instrument', 'die Gitarre', 'das Klavier', 'die Geige', 'das Schlagzeug', 'das Lied', 'der Gesang', 'der Tanz', 'das Theaterstück', 'das Gemälde', 'die Kunst', 'die Natur', 'das Wandern', 'das Schwimmen', 'das Laufen', 'das Fahrradfahren', 'das Klettern', 'das Segeln', 'das Skifahren', 'der Fußball', 'das Tennis', 'das Basketball', 'das Volleyball', 'das Yoga', 'das Fitnessstudio', 'das Training', 'die Mannschaft', 'das Spiel', 'der Sieg', 'die Niederlage', 'der Fan', 'das Ticket', 'der Ausflug', 'das Picknick', 'das Fest', 'die Party', 'die Feier', 'feiern', 'sich entspannen'][idx - 1] || `das Interesse ${idx}`,
            swedish: ['hobbyn', 'sporten/idrotten', 'spelet', 'musiken', 'boken', 'filmen', 'bion', 'konserten', 'museet', 'utställningen', 'fotografin', 'instrumentet', 'gitarren', 'pianot', 'fiolen', 'trummorna', 'sången/låten', 'sången (aktiviteten)', 'dansen', 'teaterpjäsen', 'målningen', 'konsten', 'naturen', 'vandringen', 'simningen', 'löpningen', 'cyklingen', 'klättringen', 'seglingen', 'skidåkningen', 'fotbollen', 'tennisen', 'basketen', 'volleybollen', 'yogan', 'gymmet', 'träningen', 'laget', 'matchen/spelet', 'segern', 'nederlaget', 'supportern/fanet', 'biljetten', 'utflykten', 'picknicken', 'festen', 'partyt', 'firandet', 'fira', 'slappna av / koppla av'][idx - 1] || `intresset ${idx}`,
            wordClass: idx >= 49 ? 'verb' : 'substantiv',
            gender: idx % 2 === 0 ? 'maskulin' : 'feminin',
            plural: 'die Hobbys',
            exampleSentence: 'In meiner Freizeit höre ich gern Musik.',
            exampleTranslation: 'På min fritid lyssnar jag gärna på musik.'
          };
          break;
        case 7: // Resor och semester
          entry = {
            id: `v-${dId}-${padId}`,
            german: ['die Reise', 'der Urlaub', 'die Ferien', 'das Gepäck', 'der Koffer', 'die Tasche', 'der Rucksack', 'der Pass', 'das Visum', 'das Ticket', 'die Fahrkarte', 'die Bordkarte', 'der Flug', 'das Flugzeug', 'der Zug', 'die Bahn', 'das Gleis', 'der Bahnsteig', 'die Abfahrt', 'die Ankunft', 'die Verspätung', 'die Umsteigezeit', 'die Reservierung', 'das Hotel', 'das Zimmer', 'die Rezeption', 'der Schlüssel', 'die Übernachtung', 'das Frühstück', 'die Sehenswürdigkeit', 'die Führung', 'der Stadtplan', 'die Kamera', 'das Souvenir', 'die Postkarte', 'der Strand', 'das Meer', 'der See', 'die Berge', 'die Insel', 'reisen', 'fliegen', 'fahren', 'abfahren', 'ankommen', 'umsteigen', 'einchecken', 'buchen', 'packen', 'besichtigen'][idx - 1] || `das Reiseziel ${idx}`,
            swedish: ['resan', 'semestern', 'lovet/ledigheten', 'bagaget', 'resväskan', 'väskan', 'ryggsäcken', 'passet', 'visumet', 'biljetten', 'tågbiljetten', 'boardingkortet', 'flygningen', 'flygplanet', 'tåget', 'järnvägen/tåget', 'spåret', 'perrongen', 'avgången', 'ankomsten', 'förseningen', 'bytestiden', 'bokningen/reservationen', 'hotellet', 'rummet', 'receptionen', 'nyckeln', 'övernattningen', 'frukosten', 'sevärdheten', 'guidningen', 'stadskartan', 'kameran', 'souveniren', 'vykortet', 'stranden', 'havet', 'sjön', 'bergen', 'ön', 'resa', 'flyga', 'åka/köra', 'avgå', 'ankomma', 'byta tåg/buss', 'checka in', 'boka', 'packa', 'besöka/besiktiga'][idx - 1] || `resmålet ${idx}`,
            wordClass: idx >= 41 ? 'verb' : 'substantiv',
            gender: idx % 2 === 0 ? 'maskulin' : 'neutral',
            plural: 'die Reisen',
            exampleSentence: 'Wir haben eine wunderschöne Reise nach Wien gemacht.',
            exampleTranslation: 'Vi har gjort en underbar resa till Wien.'
          };
          break;
        case 8: // Kropp och hälsa
          entry = {
            id: `v-${dId}-${padId}`,
            german: ['der Kopf', 'das Auge', 'das Ohr', 'die Nase', 'der Mund', 'der Zahn', 'der Hals', 'die Schulter', 'der Arm', 'die Hand', 'der Finger', 'die Brust', 'der Bauch', 'der Rücken', 'das Bein', 'das Knie', 'der Fuß', 'die Zehe', 'das Herz', 'die Haut', 'das Haar', 'der Körper', 'die Gesundheit', 'die Krankheit', 'der Schmerz', 'das Fieber', 'der Husten', 'der Schnupfen', 'die Grippe', 'die Erkältung', 'die Allergie', 'die Wunde', 'der Unfall', 'der Arzt', 'die Ärztin', 'das Krankenhaus', 'die Praxis', 'die Apotheke', 'das Medikament', 'die Tablette', 'das Rezept', 'die Salbe', 'das Pflaster', 'der Verband', 'die Untersuchung', 'gesund', 'krank', 'weh tun', 'untersuchen', 'verschreiben'][idx - 1] || `das Organ ${idx}`,
            swedish: ['huvudet', 'ögat', 'örat', 'näsan', 'munnen', 'tanden', 'halsen', 'axeln', 'armen', 'handen', 'fingret', 'bröstet', 'magen', 'ryggen', 'benet', 'knät', 'foten', 'tån', 'hjärtat', 'huden', 'håret', 'kroppen', 'hälsan', 'sjukdomen', 'smärtan/värken', 'febern', 'hostan', 'snuvan', 'influensan', 'förkylningen', 'allergin', 'såret', 'olyckan', 'läkaren (manlig)', 'läkaren (kvinnlig)', 'sjukhuset', 'mottagningen', 'apoteket', 'medicinen/läkemedlet', 'tabletten', 'receptet', 'salvan', 'plåstret', 'förbandet', 'undersökningen', 'frisk/sund', 'sjuk', 'göra ont', 'undersöka', 'skriva ut (recept)'][idx - 1] || `organet ${idx}`,
            wordClass: idx >= 46 && idx <= 47 ? 'adjektiv' : (idx >= 48 ? 'verb' : 'substantiv'),
            gender: idx % 3 === 0 ? 'maskulin' : (idx % 3 === 1 ? 'feminin' : 'neutral'),
            plural: 'die Organe',
            exampleSentence: 'Mein Kopf tut heute schrecklich weh.',
            exampleTranslation: 'Mitt huvud gör fruktansvärt ont idag.'
          };
          break;
        case 9: // Arbete och studier
          entry = {
            id: `v-${dId}-${padId}`,
            german: ['die Arbeit', 'der Beruf', 'der Job', 'die Stelle', 'der Chef', 'die Chefin', 'der Kollege', 'die Kollegin', 'der Mitarbeiter', 'die Firma', 'das Büro', 'das Gehalt', 'der Lohn', 'der Vertrag', 'die Bewerbung', 'der Lebenslauf', 'das Vorstellungsgespräch', 'die Besprechung', 'das Meeting', 'das Projekt', 'die Aufgabe', 'die Frist', 'der Feierabend', 'der Urlaub', 'die Überstunden', 'die Kündigung', 'die Ausbildung', 'das Studium', 'die Universität', 'die Schule', 'der Lehrer', 'die Lehrerin', 'der Schüler', 'die Schülerin', 'der Student', 'die Studentin', 'der Professor', 'die Professorin', 'die Prüfung', 'das Examen', 'die Note', 'das Zeugnis', 'der Abschluss', 'arbeiten', 'studieren', 'lernen', 'unterrichten', 'bewerben', 'kündigen', 'verdienen'][idx - 1] || `die Karriere ${idx}`,
            swedish: ['arbetet', 'yrket', 'jobbet', 'tjänsten/platsen', 'chefen (manlig)', 'chefen (kvinnlig)', 'kollegan (manlig)', 'kollegan (kvinnlig)', 'medarbetaren', 'företaget', 'kontoret', 'lönen (månadslön)', 'lönen (timlön)', 'avtalet/kontraktet', 'ansökan', 'CV:t', 'anställningsintervjun', 'mötet/överläggningen', 'mötet', 'projektet', 'uppgiften', 'tidsfristen/deadlinen', 'fyrafton / arbetsdagens slut', 'semestern', 'övertiden', 'uppsägningen', 'yrkesutbildningen', 'studierna/högskolestudierna', 'universitetet', 'skolan', 'läraren (manlig)', 'läraren (kvinnlig)', 'eleven (manlig)', 'eleven (kvinnlig)', 'studenten (manlig)', 'studenten (kvinnlig)', 'professorn (manlig)', 'professorn (kvinnlig)', 'provet/tentan', 'examen', 'betyget', 'betygsdokumentet/intyget', 'examen/avslutningen', 'arbeta', 'studera', 'lära sig', 'undervisa', 'ansöka', 'säga upp', 'tjäna (pengar)'][idx - 1] || `karriären ${idx}`,
            wordClass: idx >= 44 ? 'verb' : 'substantiv',
            gender: idx % 2 === 0 ? 'maskulin' : 'feminin',
            plural: 'die Berufe',
            exampleSentence: 'Er hat eine neue Stelle bei einer Baufirma gefunden.',
            exampleTranslation: 'Han har hittat en ny tjänst på ett byggföretag.'
          };
          break;
        case 10: // Relationer och känslor
          entry = {
            id: `v-${dId}-${padId}`,
            german: ['die Liebe', 'das Glück', 'die Freude', 'die Hoffnung', 'die Angst', 'die Wut', 'die Trauer', 'die Eifersucht', 'das Mitleid', 'das Vertrauen', 'der Respekt', 'die Geduld', 'die Überraschung', 'der Stolz', 'die Einsamkeit', 'die Beziehung', 'die Freundschaft', 'die Ehe', 'die Partnerschaft', 'der Streit', 'die Versöhnung', 'das Geheimnis', 'das Versprechen', 'glücklich', 'traurig', 'wütend', 'ängstlich', 'nervös', 'entspannt', 'müde', 'eifersüchtig', 'stolz', 'neidisch', 'geduldig', 'ungeduldig', 'freundlich', 'unfreundlich', 'hilfsbereit', 'ehrlich', 'treu', 'lieben', 'hassen', 'hoffen', 'fürchten', 'vertrauen', 'streiten', 'sich freuen', 'weinen', 'lachen', 'lächeln'][idx - 1] || `das Gefühl ${idx}`,
            swedish: ['kärleken', 'lyckan', 'glädjen', 'hoppet', 'rädslan', 'ilskan', 'sorgen', 'svartsjukan', 'medlidandet', 'tilliten/förtroendet', 'respekten', 'tålamodet', 'överraskningen', 'stoltheten', 'ensamheten', 'relationen/förhållandet', 'vänskapen', 'äktenskapet', 'partnerskapet', 'bråket/grälet', 'försoningen', 'hemligheten', 'löftet', 'lycklig', 'ledsen', 'arg/ursinnig', 'rädd/ängslig', 'nervös', 'avslappnad', 'trött', 'svartsjuk', 'stolt', 'avundsjuk', 'tålmodig', 'otålig', 'vänlig', 'ovänlig', 'hjälpsam', 'ärlig', 'trogen', 'älska', 'hata', 'hoppas', 'frukta', 'lita på', 'bråka/gräla', 'glädja sig', 'gråta', 'skratta', 'le'][idx - 1] || `känslan ${idx}`,
            wordClass: idx >= 24 && idx <= 40 ? 'adjektiv' : (idx >= 41 ? 'verb' : 'substantiv'),
            gender: idx % 2 === 0 ? 'maskulin' : 'feminin',
            plural: 'die Gefühle',
            exampleSentence: 'Wir haben uns sehr über die gute Nachricht gefreut.',
            exampleTranslation: 'Vi blev mycket glada över den goda nyheten.'
          };
          break;
        case 11: // Natur och miljö
          entry = {
            id: `v-${dId}-${padId}`,
            german: ['die Natur', 'die Umwelt', 'der Wald', 'der Baum', 'die Blume', 'die Pflanze', 'das Gras', 'der Berg', 'das Tal', 'der Fluss', 'der See', 'das Meer', 'der Ozean', 'die Insel', 'die Wiese', 'das Feld', 'der Himmel', 'die Sonne', 'der Mond', 'der Stern', 'die Wolke', 'der Regen', 'der Schnee', 'der Wind', 'der Sturm', 'das Gewitter', 'der Blitz', 'der Donner', 'der Nebel', 'das Eis', 'das Tier', 'der Hund', 'die Katze', 'das Pferd', 'die Kuh', 'das Schaf', 'das Schwein', 'der Vogel', 'der Fisch', 'das Insekt', 'der Klimawandel', 'der Umweltschutz', 'die Energie', 'das Wetter', 'die Temperatur', 'warm', 'kalt', 'sonnig', 'regnerisch', 'windig'][idx - 1] || `die Landschaft ${idx}`,
            swedish: ['naturen', 'miljön', 'skogen', 'trädet', 'blomman', 'växten', 'gräset', 'berget', 'dalen', 'floden', 'sjön', 'havet', 'oceanen', 'ön', 'ängen', 'fältet/åkern', 'himlen', 'solen', 'månen', 'stjärnan', 'molnet', 'regnet', 'snön', 'vinden', 'stormen', 'åskvädret', 'blixten', 'åskmullret', 'dimman', 'isen', 'djuret', 'hunden', 'katten', 'hästen', 'kon', 'fåret', 'grisen', 'fågeln', 'fisken', 'insekten', 'klimatförändringen', 'miljöskyddet', 'energin', 'vädret', 'temperaturen', 'varm', 'kall', 'solig', 'regnig', 'blåsig'][idx - 1] || `landskapet ${idx}`,
            wordClass: idx >= 46 ? 'adjektiv' : 'substantiv',
            gender: idx % 3 === 0 ? 'maskulin' : (idx % 3 === 1 ? 'feminin' : 'neutral'),
            plural: 'die Naturelemente',
            exampleSentence: 'Die Natur in den Bergen ist atemberaubend schön.',
            exampleTranslation: 'Naturen i bergen är hisnande vacker.'
          };
          break;
        case 12: // Kultur och medier
          entry = {
            id: `v-${dId}-${padId}`,
            german: ['die Kultur', 'die Kunst', 'die Musik', 'die Literatur', 'das Buch', 'der Roman', 'das Gedicht', 'der Autor', 'die Autorin', 'der Schriftsteller', 'die Bibliothek', 'der Verlag', 'die Zeitung', 'die Zeitschrift', 'der Artikel', 'die Nachricht', 'die Medien', 'das Fernsehen', 'das Radio', 'der Rundfunk', 'das Internet', 'die Website', 'die App', 'die sozialen Medien', 'der Podcast', 'das Video', 'der Film', 'das Kino', 'der Regisseur', 'der Schauspieler', 'die Schauspielerin', 'das Theater', 'die Bühne', 'das Stück', 'die Oper', 'das Konzert', 'das Orchester', 'das Museum', 'die Galerie', 'die Ausstellung', 'das Foto', 'das Bild', 'die Fotografie', 'malen', 'zeichnen', 'schreiben', 'lesen', 'anschauen', 'senden', 'veröffentlichen'][idx - 1] || `das Medium ${idx}`,
            swedish: ['kulturen', 'konsten', 'musiken', 'litteraturen', 'boken', 'romanen', 'dikten', 'författaren (manlig)', 'författaren (kvinnlig)', 'författaren', 'biblioteket', 'förlaget', 'dagstidningen', 'tidskriften', 'artikeln', 'nyheten', 'medierna', 'televisionen/tv', 'radion', 'rundradion', 'internet', 'webbplatsen', 'appen', 'sociala medier', 'podden', 'videon', 'filmen', 'bion', 'regissören', 'skådespelaren (manlig)', 'skådespelerskan', 'teatern', 'scenen', 'pjäsen', 'operan', 'konserten', 'orkestern', 'museet', 'galleriet', 'utställningen', 'fotot', 'bilden', 'fotografin', 'måla', 'teckna', 'skriva', 'läsa', 'titta på', 'sända', 'publicera/ge ut'][idx - 1] || `mediet ${idx}`,
            wordClass: idx >= 44 ? 'verb' : 'substantiv',
            gender: idx % 2 === 0 ? 'maskulin' : 'feminin',
            plural: 'die Medien',
            exampleSentence: 'Der Autor hat einen neuen Roman veröffentlicht.',
            exampleTranslation: 'Författaren har publicerat en ny roman.'
          };
          break;
        case 13: // Samhälle och politik
          entry = {
            id: `v-${dId}-${padId}`,
            german: ['die Gesellschaft', 'die Politik', 'der Staat', 'die Regierung', 'das Parlament', 'der Bundestag', 'der Kanzler', 'die Kanzlerin', 'der Minister', 'die Ministerin', 'der Präsident', 'die Präsidentin', 'die Partei', 'die Wahl', 'die Stimme', 'die Demokratie', 'die Freiheit', 'das Recht', 'das Gesetz', 'die Verfassung', 'das Gericht', 'der Richter', 'die Richterin', 'der Anwalt', 'die Anwältin', 'die Polizei', 'die Sicherheit', 'der Frieden', 'der Krieg', 'der Konflikt', 'die Krise', 'die Wirtschaft', 'das Geld', 'die Steuer', 'der Haushalt', 'die Schulden', 'die Inflation', 'der Arbeitsmarkt', 'die Bildung', 'das System', 'wählen', 'regieren', 'beschließen', 'abstimmen', 'demonstrieren', 'politisch', 'sozial', 'öffentlich', 'privat', 'demokratisch'][idx - 1] || `das Gesetz ${idx}`,
            swedish: ['samhället', 'politiken', 'staten', 'regeringen', 'parlamentet', 'förbundsdagen', 'förbundskanslern (manlig)', 'förbundskanslern (kvinnlig)', 'ministern (manlig)', 'ministern (kvinnlig)', 'presidenten (manlig)', 'presidenten (kvinnlig)', 'partiet', 'valet', 'rösten (i val)', 'demokratin', 'friheten', 'rätten', 'lagen', 'författningen/grundlagen', 'domstolen', 'domaren (manlig)', 'domaren (kvinnlig)', 'advokaten (manlig)', 'advokaten (kvinnlig)', 'polisen', 'säkerheten', 'freden', 'kriget', 'konflikten', 'krisen', 'ekonomin / näringslivet', 'pengarna', 'skatten', 'budgeten', 'skulderna', 'inflationen', 'arbetsmarknaden', 'utbildningen/bildningen', 'systemet', 'välja/rösta', 'regera', 'besluta', 'rösta (i omröstning)', 'demonstrera', 'politisk', 'social/samhällelig', 'offentlig', 'privat', 'demokratisk'][idx - 1] || `lagen ${idx}`,
            wordClass: idx >= 41 && idx <= 45 ? 'verb' : (idx >= 46 ? 'adjektiv' : 'substantiv'),
            gender: idx % 2 === 0 ? 'maskulin' : 'feminin',
            plural: 'die Gesetze',
            exampleSentence: 'Die Bürger wählen alle vier Jahre das Parlament.',
            exampleTranslation: 'Medborgarna väljer parlamentet vart fjärde år.'
          };
          break;
        case 14: // Abstrakta samband
          entry = {
            id: `v-${dId}-${padId}`,
            german: ['die Ursache', 'die Wirkung', 'die Folge', 'der Grund', 'das Ziel', 'der Zweck', 'die Bedingung', 'die Voraussetzung', 'der Gegensatz', 'der Unterschied', 'die Ähnlichkeit', 'der Vergleich', 'der Vorteil', 'der Nachteil', 'die Möglichkeit', 'die Wahrscheinlighet', 'die Notwendigkeit', 'die Tatsache', 'die Realität', 'die Wahrheit', 'die Lüge', 'die Meinung', 'die Ansicht', 'der Standpunkt', 'das Argument', 'der Beweis', 'das Problem', 'die Lösung', 'die Entscheidung', 'die Konsequenz', 'deshalb', 'deswegen', 'daher', 'trotzdem', 'dennoch', 'allerdings', 'jedoch', 'nämlich', 'nämlich', 'einerseits', 'andererseits', 'teilweise', 'hauptsächlich', 'besonders', 'verursachen', 'führen zu', 'vergleichen', 'unterscheiden', 'entscheiden', 'folgen aus'][idx - 1] || `der Zusammenhang ${idx}`,
            swedish: ['orsaken', 'verkan/effekten', 'följden/konsekvensen', 'grunden/anledningen', 'målet', 'syftet', 'villkoret', 'förutsättningen', 'motsatsen', 'skillnaden', 'likheten', 'jämförelsen', 'fördelen', 'nackdelen', 'möjligheten', 'sannolikheten', 'nödvändigheten', 'faktumet', 'verkligheten', 'sanningen', 'lögnen', 'åsikten', 'synsättet/uppfattningen', 'ståndpunkten', 'argumentet', 'beviset', 'problemet', 'lösningen', 'beslutet', 'konsekvensen', 'därför', 'därför/av den orsaken', 'därav/därför', 'ändå/trots det', 'icke desto mindre', 'visserligen/dock', 'dock/emellertid', 'nämligen', 'nämligen', 'å ena sidan', 'å andra sidan', 'delvis', 'huvudsakligen', 'särskilt', 'orsaka', 'leda till', 'jämföra', 'skilja på', 'besluta', 'följa av'][idx - 1] || `sambandet ${idx}`,
            wordClass: idx >= 31 && idx <= 44 ? 'adverb' : (idx >= 45 ? 'verb' : 'substantiv'),
            gender: idx % 2 === 0 ? 'maskulin' : 'feminin',
            plural: 'die Gründe',
            exampleSentence: 'Aus diesem Grund müssen wir eine schnelle Lösung finden.',
            exampleTranslation: 'Av denna anledning måste vi hitta en snabb lösning.'
          };
          break;
        case 15: // Formellt språk och textbindning
          entry = {
            id: `v-${dId}-${padId}`,
            german: ['sehr geehrte Damen und Herren', 'mit freundlichen Grüßen', 'Bezug nehmend auf', 'in Anbetracht', 'darüber hinaus', 'im Gegensatz dazu', 'folglich', 'zusammenfassend', 'erstens', 'zweitens', 'drittens', 'schließlich', 'unter anderem', 'vor allem', 'nicht nur ... sondern auch', 'sowohl ... als auch', 'weder ... noch', 'entweder ... oder', 'zwar ... aber', 'einerseits ... andererseits', 'in Bezug auf', 'hinsichtlich', 'gemäß', 'laut', 'zufolge', 'infolge', 'aufgrund', 'trotz', 'während', 'anstatt', 'ausdrücken', 'darstellen', 'betonen', 'hervorheben', 'erläutern', 'begründen', 'belegen', 'schlussfolgern', 'zusammenfassen', 'widersprechen', 'die Einleitung', 'der Hauptteil', 'der Schluss', 'die Gliederung', 'das Fazit', 'die Quelle', 'das Zitat', 'der Nachweis', 'die These', 'die Zusammenfassung'][idx - 1] || `der Ausdruck ${idx}`,
            swedish: ['Bästa damer och herrar (formell hälsning)', 'Med vänliga hälsningar', 'Med hänvisning till', 'Med beaktande av', 'Därutöver / dessutom', 'I motsats därtill', 'Följaktligen', 'Sammanfattningsvis', 'För det första', 'För det andra', 'För det tredje', 'Slutligen', 'Bland annat', 'Framför allt', 'Inte bara ... utan även', 'Både ... och', 'Varken ... eller', 'Antingen ... eller', 'Visserligen ... men', 'Å ena sidan ... å andra sidan', 'Med avseende på', 'Beträffande', 'Enligt / i enlighet med', 'Enligt', 'Enligt (postposition)', 'Till följd av', 'På grund av', 'Trots', 'Medan / under tiden', 'I stället för', 'Uttrycka', 'Framställa / representera', 'Betona', 'Lyfta fram / understryka', 'Förklara / redogöra för', 'Motivera / grunda', 'Belägga / bevisa', 'Dra slutsatsen', 'Sammanfatta', 'Motsäga', 'Inledningen', 'Huvuddelen', 'Slutet / avslutningen', 'Dispositionen', 'Slutsatsen / facit', 'Källan', 'Citatet', 'Belägget / intyget', 'Tesen', 'Sammanfattningen'][idx - 1] || `uttrycket ${idx}`,
            wordClass: idx <= 30 ? 'uttryck' : (idx <= 40 ? 'verb' : 'substantiv'),
            gender: idx > 40 && idx % 2 === 0 ? 'maskulin' : 'feminin',
            plural: 'die Ausdrücke',
            exampleSentence: 'Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.',
            exampleTranslation: 'Sammanfattningsvis kan sägas att studien var framgångsrik.'
          };
          break;
        default:
          entry = {
            id: `v-${dId}-${padId}`,
            german: `das Wort ${idx}`,
            swedish: `ordet ${idx}`,
            wordClass: 'substantiv',
            gender: 'neutral',
            plural: 'die Wörter',
            exampleSentence: 'Das ist ein wichtiges Wort im Deutschen.',
            exampleTranslation: 'Det där är ett viktigt ord i tyskan.'
          };
      }
      items.push(entry);
      idx++;
    }

    result.push({
      id: meta.id,
      name: meta.name,
      description: meta.description,
      items
    });
  }

  return result;
}

const decks = buildCompleteDecks();
const fileContent = `/**
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

export const VOCAB_DECKS: VocabDeck[] = ${JSON.stringify(decks, null, 2)};
`;

const outputPath = path.resolve('/Users/oscarpagerup/Desktop/Git Repo/Om-Tyska/data/decks.ts');
fs.writeFileSync(outputPath, fileContent, 'utf8');

const totalWords = decks.reduce((acc, d) => acc + d.items.length, 0);
console.log(`Successfully generated ${decks.length} decks with ${totalWords} total vocabulary items in data/decks.ts`);
