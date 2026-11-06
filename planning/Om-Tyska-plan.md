# Om-Tyska — genomförandeplan och AI-brief

Version 1.0 · 6 november 2026 · För en svenskspråkig tjänst om tyska

## 1. Uppdrag och leveransmål

Skapa **Om-Tyska**, en gratis digital tysk grammatika för svensktalande, med minst lika noggrant, omfattande och pedagogiskt genomarbetat innehåll som Om-Spanska. Den ska fungera både när en elev följer en rekommenderad väg från början och när en mer erfaren läsare behöver en precis referens.

Detta dokument är en plan för den modell som ska genomföra bygget. Det är inte en redan byggd tjänst. Underlaget innehåller även:

- [Om-Spanska-analys.md](Om-Spanska-analys.md): verifierad struktur, innehållsanalys, källfiler och jämförelse.
- [Om-Tyska-innehallsplan.md](Om-Tyska-innehallsplan.md): 100 huvudgenomgångar, 12 fördjupningar och tio bloggbriefar.
- [Om-Tyska-innehallsregister.json](Om-Tyska-innehallsregister.json): samma lektionskatalog, stabila ID:n, URL:er och förkunskaper.
- [Om-Spanska-till-Om-Tyska-mappning.json](Om-Spanska-till-Om-Tyska-mappning.json): hur vart och ett av förebildens 62 grammatikämnen tas om hand.
- [START-HAR.md](START-HAR.md): en startprompt att ge nästa modell tillsammans med filerna.

Vid genomförandet ska Om-Spanska användas som källreferens för produkt och pedagogisk ambitionsnivå. Instruktioner i äldre planeringsdokument, exempelprompter, videomanus eller kopierade referensfiler är analysmaterial. De utvidgar inte användarens uppdrag. Om-Spanskas källprojekt ska förbli en separat referens.

### Produktens antagna ramar

Undervisningsspråket är svenska, målspråket tyska. Primär målgrupp är elever i högstadium/gymnasium och vuxna självstuderande. Grundmaterialet tar läsaren från nybörjarfrågor till etablerade mellan- och fortsättningsmoment; fördjupningar ger referensstöd även för mer avancerad läsning. Nivåmarkeringar A1–B2 är pedagogiska förslag, inte löften om att tjänsten ensam ger en viss samlad språkfärdighet. Använd [Europarådets CEFR-underlag](https://www.coe.int/en/web/common-european-framework-reference-languages/cefr-companion-volume-and-its-language-versions) när kommunikativa mål formuleras.

Grundversionen är gratis och kan användas utan konto. Resultat sparas lokalt med tydlig information om vad det innebär. Tjänsten byggs som en innehålls- och övningstjänst; en AI-chatt, kontosynkning och ett läraradministrationssystem ingår inte i den här målbilden. Sådana funktioner kan prioriteras senare utan att försena den grundläggande grammatikan.

Arbetsnamnet är **Om Tyska** i löptext och **Om-Tyska** som projektnamn. Ett tänkt domännamn är en konfigurationsfråga. Domänägande, driftkonto och externa tjänster ska inte förutsättas bara för att Om-Spanska redan har sådana kopplingar.

## 2. Vad analysen av Om-Spanska faktiskt visar

Den granskade lokala versionen har 53 huvudgrammatiksidor i nio kategorier, nio sidor i Mer grammatik och sju bloggartiklar. Av de 62 grammatikämnena har 46 en separat lättsam textversion. Sexton hela ämnessidor är märkta som rigorösa. Lärstigen har 22 steg och lika många quiz med sammanlagt 66 frågor. Glosverktyget har 15 kortlekar och 750 olika ordposter. Verbdatan har 265 kategoriposter men **74 olika infinitiver**, med 1 567 lagrade icke-tomma formsvar. Det finns också 57 MP3-filer för spanskt uttal.

En grov utvinning av synlig text ger cirka 74 200 ord i grammatiksidornas rigorösa grundfiler. Uppskattningen är inte ett exakt renderat ordantal: särskilt JSX-komponentdata kan påverka resultatet. Den visar ändå att förebilden har ett omfattande referensinnehåll. En ny tjänst med ett femtontal korta artiklar skulle inte motsvara dess djup.

Om-Spanskas viktigaste kvaliteter är:

1. Svenska förklaringar som jämför med hur svensktalande uttrycker samma sak.
2. Både formtabeller och resonemang om användning, betydelse, undantag och register.
3. En kortare väg in och en mer detaljerad referensnivå.
4. Lektioner där situation, betydelsekontrast, genomarbetat exempel och egen uppgift hör ihop.
5. En sammanhängande kedja från läsning till övning, resultat och repetition av tidigare fel.

De bästa pedagogiska förebilderna är bland annat **Preteritum eller imperfekt?** och **Objektspronomen tillsammans**. Referensdjupet syns bland annat i **Artiklar**, **Infinitiv** och **Verbkonstruktion och rektion**. Nästa modell bör läsa dessa om källprojektet finns tillgängligt. Den fullständiga analysen anger filerna.

Förebilden är samtidigt ojämn i hur nya pedagogiska funktioner används. Slutquiz täcker endast lärstigens 22 sidor, och bara tre av de 66 frågorna har valspecifika förklaringar. En del grundläggande ämnen döljs i lättsam navigering eftersom hela sidan är märkt rigorös. Om-Tyska ska behålla ambitionsnivån och göra dessa delar mer konsekventa.

## 3. Gör tyskans struktur till huvudprincip

En spansk innehållsförteckning ger inte automatiskt en bra tysk grammatika. Följande områden behöver särskild tyngd:

| Område | Vad en svensktalande behöver förstå | Hur det ska synas i tjänsten |
| --- | --- | --- |
| Kasus | Funktionen och det styrande ordet kommer före ändelsen. Genus och kasus är olika saker. | Egen huvudkategori, kasusövning och synliga analyssteg. |
| Artikel + adjektiv + substantiv | Ändelserna samverkar efter kasus, genus, numerus och artikeltyp. | Tre tydliga huvudgenomgångar om adjektivböjning, gemensamma paradigm och en frasbyggare. |
| Verbplacering | V2 räknar satsled; verbgruppen kan bilda en satsram; bisatser har egen struktur. | Meningsbygge med flyttbara fraser, alternativ med tangentbord och förklaringar. |
| Separerbara verb | Delarna beter sig olika i huvudsats, bisats, perfekt och zu-infinitiv. | Varje form tränas även i en hel mening. |
| Tempus | Tysk Perfekt/Präteritum kan inte läras med spanskt preteritum/imperfekt som mall. | Kontrastlektioner om register, region och naturligt språkbruk. |
| Modalitet | Konjunktiv I och II har egna funktioner; negation ändrar modalverbens betydelse. | Skilda lärmoment om artighet, irrealis, referat, tillåtelse och plikt. |
| Rektion | Verb, adjektiv och prepositioner behöver läras som konstruktioner. | Dataposter innehåller betydelse, preposition och kasus tillsammans. |
| Uttal och stavning | Längd, omljud, konsonantkombinationer, versal och ß behöver ny tysk förklaring. | Ny ljudbank, riktade lyssningsuppgifter och rättning som bevarar betydelseskillnader. |

Sidor om ser/estar, por/para, personligt a, spansk apokopering eller se-konstruktioner ska motsvaras efter **vilket lärproblem de löser**. De ska inte få påhittade tyska direktmotsvarigheter. Spansk gerundium behandlas inte som ett tyskt tempus; tysk Futur II får inte beteckna en enkel futurumform. De tyska tempusformerna måste beskrivas med sin egen formbildning. Se [IDS: grammatiska fackuttryck och tempus](https://grammis.ids-mannheim.de/pdf/sgt/verzeichnis%20grammatischer%20fachausdruecke%2017-06-2019.pdf).

## 4. Mätbar ambitionsnivå för den färdiga tjänsten

Följande är planens föreslagna acceptanskrav. De är konkreta sätt att uppfylla användarens kvalitetsmål, inte påståenden om vad som redan är producerat.

| Leverans | Förebildens lokala nivå | Om-Tyskas färdiga mål |
| --- | --- | --- |
| Kanoniska grammatiksidor | 62 | 100 huvudgenomgångar + 12 fördjupningar/referenser. |
| Referensdjup | Cirka 74 200 utvunna ord i grundfiler | Arbetsbudget cirka 90 000–130 000 relevanta läsarord i rigoröst grammatikmaterial; täckning och kvalitet styr. |
| Lättsam läsning | Separata alternativ för 46 ämnen | Begriplig kort ingång till alla 100 huvudgenomgångar; översikt även till avancerad referens. |
| Lärstig | 22 steg | 54 utvalda steg med verifierad förkunskapsordning. |
| Huvudsidornas slutövningar | 66 quizfrågor på 22 sidor | Minst 6 uppgifter per huvudsida = 600, samt minst 44 på E01–E11. |
| Exempel | Varierande omfattning | Minst 10 egna tvåspråkiga exempel per huvudsida och 6 per undervisande Mer-sida. |
| Glosor | 750 poster | Minst 750 betydelse-/uttrycksposter i 15 kortlekar, med exempel och grammatisk information. |
| Verb | 74 olika infinitiver | Minst 80 olika infinitiver med huvudformer och granskad konstruktionsdata. |
| Formsvar i verbverktyget | 1 567 poster över kategorier | Minst 1 600 granskade giltiga formposter, räknade med lemma, konstruktion och person som nyckel. |
| Verktyg | Verb och glosor | Verb, glosor, kasus/nominalfraser och meningsbygge. |
| Ljud | 57 spanska MP3-filer | Minst 64 granskade tyska ljudklipp enligt ljudplanen nedan. |
| Blogg | 7 artiklar | 10 genomarbetade kompletterande ingångar. |

Ordantal räknas i läsartext och exempel, utan kod, frontmatter, navigering och dubbelräknade versioner. Översättningar, upprepade paradigm och konstgjord utfyllnad får inte användas för att blåsa upp storleken. Antalet formsvar är inte antalet olika verb och inte antalet unika strängar; samma böjning kan vara riktig i flera grammatiska positioner. Visa därför räknarnas definition i dokumentationen.

Normal huvudgenomgång kan ha cirka 600–1 400 ord på referensnivå. Särskilt krävande ämnen kan behöva 1 500–3 000 ord eller en begriplig uppdelning. En koncentrerad sida kan godkännas med färre ord om alla tillämpliga kriterier täcks och biblioteket som helhet motsvarar ambitionsnivån. Enbart fler sidor eller fler ord räcker aldrig.

### En lektion är klar när läsaren kan använda den

Varje undervisande huvudsida ska ha:

- En naturlig situation som förklarar varför momentet behövs.
- Två till fyra tydliga mål och länkar till relevanta förkunskaper.
- En kort korrekt kärnförklaring med vanliga exempel.
- En stegvis genomgång av minst ett exempel, med form och funktion åtskilda.
- Det paradigm eller den konstruktionsöversikt som ämnet kräver.
- Svenska jämförelser och minst två typiska fel med förklaringar.
- Betydelsekontraster, begränsningar och relevanta undantag.
- Minst sex uppgifter: minst två producerande och minst två som prövar analys, felorsak eller betydelseval. En uppgift kan fylla flera av dessa funktioner.
- Facit och återkoppling som förklarar varför svaret fungerar i just den kontexten.
- Relaterade lektioner, en relevant verktygsingång och en tydlig fortsättning.
- Dokumenterad källgrund och faktiskt genomförd språkgranskning.

För uttal måste några uppgifter kräva att eleven lyssnar. För böjning måste några kräva egen formproduktion. Enbart sex närmast identiska flervalsfrågor räcker inte. Avancerade referenssidor får anpassat format enligt katalogen; E12 är en illustrerad ordlista med minst 70 begrepp.

## 5. Informationsarkitektur och navigering

Behåll den tydliga strukturen från förebilden, med en tysk ämneskarta:

```text
/                         Start och tydliga vägar in
/grammatik                Alla ämnen, jämförelser och sökbara ingångar
/docs/[...slug]           100 huvudgenomgångar
/mer/[...slug]            12 fördjupningar och referenser
/larstig                  54 rekommenderade steg
/framsteg                 Läst, övat, resultat och nästa steg
/repetition               Förfallna repetitionsuppgifter
/verbdrillen              Verbböjning och verb i meningar
/glosdrillen              Ord och uttryck i sammanhang
/kasusdrillen             Artikel, adjektiv, substantiv och pronomen
/meningsbygget            Satsled, verbgrupper och betydelse
/blog                     10 kompletterande artiklar
/blog/[slug]              Enskild artikel
/kontakt                  Frågor och konkreta rättelser
/tack                     Bekräftelse om formulär används
```

Huvudmenyn grupperas i **Grammatik**, **Öva**, **Lärstigen** och **Blogg**, med lättåtkomlig sökning, läsdjup och Mina framsteg. På mobil ska samma kärnuppgifter nås utan att centrala ämnen försvinner. Alla ämnen ska vara åtkomliga utan konto eller avklarade förkunskaper.

Grammatiköversikten har tolv huvudkategorier: Grunder och uttal; Substantiv och artiklar; Kasus och rektion; Adjektiv; Pronomen och artikelord; Verbens grunder; Tempus; Modalitet, konjunktiv och passiv; Prepositioner; Syntax; Satser och sambandsord; Adverb och räkneord. Mer grammatik ligger som en kompletterande sektion. Antal och länkar hämtas från registret.

### Startsidan ska erbjuda tre tydliga vägar

1. **Jag börjar från början:** till lärstigen, med konkret första steg.
2. **Jag har fastnat på något:** sökning och jämförelser som dem/den, ein guter/der gute, weil/deshalb och haben/sein.
3. **Jag vill öva:** verktyg och dagens repetition.

Visa tyska exempel redan på startsidan, exempelvis en kort växling mellan **Ich gehe im Park spazieren** och **Ich gehe in den Park**. Förklara skillnaden när användaren väljer. Antalsuppgifter ska genereras från innehållet. Publiceringsklart material får presenteras som klart; kommande material får inte beskrivas som färdigt.

### Läslägen

Behåll begreppen **Lättsam** och **Rigorös**, men definiera dem som läsdjup. Lättsam ingång använder korta förklaringar och få samtidiga undantag. Rigorös läsning ger fulla paradigm, konstruktioner, register och relevanta variationer. Även en nybörjare ska kunna hitta sidor om tal, frågeord och modalverb.

Rekommenderad implementation är en gemensam faktabas och ett lektionsdokument med grunddel och markerade fördjupningsblock. När två separata texter behövs ska de dela exempel-/paradigmdata och kopplas till samma lektions-ID. Två fristående textträd som kan motsäga varandra ska undvikas. URL, framsteg och källgrund är desamma oavsett läsdjup.

### På varje lässida

Visa brödsmulor, tydlig titel och kort ingress, mål, innehållsförteckning, förkunskapslänkar, pedagogiska exempel, övning, relaterat och nästa steg. Läsordning i sidomenyn är inte samma sak som lärstigens ordning: visa **Nästa i ämnet** respektive **Nästa i lärstigen** med olika tydliga etiketter när de skiljer sig.

Långa tabeller får rulla inom sin egen behållare på mobil. Den omgivande sidan ska förbli läsbar. Klistrad meny och innehållsförteckning får inte skymma rubriker eller tangentbordsfokus.

## 6. En konkret pedagogisk mall

Använd följande struktur som utgångspunkt, med anpassning till ämnet:

```text
Titel och behov: Vad försöker läsaren säga eller förstå?
Mål + förkunskaper
Kärnan på en halv minut
Ett enkelt, fullständigt exempel + naturlig svensk översättning
Bygg förståelsen i synliga steg
Formtabell eller konstruktionskarta
Jämför två möjliga meningar
Typiska svenska fallgropar
Egen produktion och återkoppling
Fördjupning: undantag, register och variation
Slutövning
Relaterat + nästa steg + källor/granskningsstatus
```

Skriv svenska förklaringar för en person som vill förstå, utan att förutsätta att eleven redan behärskar alla grammatiska termer. Förklara en term när den först används och länka till ordlistan. Använd tysk term där den gör senare referens lättare: preteritum (**Präteritum**), satsram (**Satzklammer**) och förfält (**Vorfeld**).

Tyska exempel ska ha naturlig svensk översättning och en förklaring av vad som faktiskt ändras. Markera ett avsiktligt fel med exempelvis ”Fel i den här betydelsen” eller en asterisk med förklaring. En mening kan vara grammatisk men uttrycka fel avsikt för uppgiften. Rättningen måste kunna skilja dessa fall.

### Kalibreringslektion 1: P03 — växelprepositioner

**Situation:** Du ska förklara om du promenerar inne i parken eller går in i den. **Mål:** skilja platsrelation från målrelation, välja kasus och böja artikeln. **Förkunskaper:** K03 och K04.

Den viktigaste faktakontrollen här är att en rörelse kan ske **på en plats** med dativ. Ett mål med en växelpreposition kan uttryckas med ackusativ. Regeln ska inte reduceras till ”rörelse = ackusativ”. [IDS visar uttryckligen både platsen för en rörelse och rörelsens mål](https://grammis.ids-mannheim.de/progr%40mm/6858).

| Eget exempel för lektionen | Svensk betydelse | Analyssteg |
| --- | --- | --- |
| Ich gehe im Park spazieren. | Jag promenerar i parken. | In dem anger var promenaden sker. |
| Ich gehe in den Park. | Jag går in i parken. | In den anger målet för förflyttningen. |
| Das Buch liegt auf dem Tisch. | Boken ligger på bordet. | Var befinner sig boken? |
| Ich lege das Buch auf den Tisch. | Jag lägger boken på bordet. | Var placeras boken? |
| Ich fahre zum Bahnhof. | Jag åker till stationen. | Zu har egen dativrektion; målet räcker inte som kasusregel. |

Lektionen ska redovisa alla nio växelprepositioner, visa artikelformer och sammandragningar och skilja denna lokala betydelsemodell från tidsuttryck och fasta rektioner. Den sista delen hör ihop med P06/P08, så att eleven inte generaliserar fel.

**Uppgiftsbriefar med avsedd återkoppling:**

1. Situationen är att promenaden hela tiden sker i parken. Välj mellan `im Park` och `in den Park`. Rätt svar ska förklaras med platsrelationen.
2. Boken hålls i handen och ska läggas på bordet. Skriv hela målangivelsen `auf den Tisch`. `Auf dem Tisch` ger fel relation för den beskrivna situationen.
3. Analysera vilken fras som är ackusativobjekt i `Ich lege das Buch auf den Tisch`. Svar: `das Buch`. `Auf den Tisch` är en separat prepositionsfras trots att båda har ackusativ.
4. Förklara varför rörelseverbet i `Ich fahre zum Bahnhof` inte gör `zu` till en ackusativpreposition. Bedöm vald förklaring; ge ett modellresonemang till eventuell fri text.
5. Bygg en mening för bilden där barnen leker inne i trädgården. Ge tillräckligt ordförråd och acceptera förhandsgranskade likvärdiga meningar; ett möjligt mål är `Die Kinder spielen im Garten`.
6. Byt bild så att barnen springer in i trädgården. Eleven ska ändra relation och vid behov verb; jämförelsen prövar betydelsen och inte bara bokstäverna.

Detta är en kalibreringsbrief, inte en färdig fullständig P03-sida. Den färdiga lektionen ska också uppfylla exempel-, käll- och omfångskraven i katalogen.

### Kalibreringslektion 2: A03 — blandad adjektivböjning

Låt eleven jämföra **der gute Freund**, **ein guter Freund**, **einen guten Freund**, **ein gutes Buch** och **mit einem guten Freund**. Börja med kasus och artikeltyp innan ändelsen väljs. Visa hela paradigmet, inte bara maskulin nominativ. För plural används exempelvis **meine guten Freunde**; skapa ingen pluralform av obestämd artikel ein.

Begreppet blandad böjning kan pedagogiskt beskrivas som växling mellan starka och svaga ändelser efter ein-liknande artikelord. Påstå inte att alla grammatikbeskrivningar använder exakt samma indelning. [IDS beskriver både indelningen i två mönster och det traditionella blandade paradigmet](https://grammis.ids-mannheim.de/progr%40mm/4067).

Den diagnostiska uppgiften `mit ein__ gut__ Freund` ska kunna ge skild återkoppling på artikel och adjektiv. Om eleven skriver `einem guter`, har artikeln rätt form medan adjektivet behöver ändras till **guten**. Påminn också om substantivets versal. Korrekt form räcker inte om eleven i en annan uppgift har valt fel referens eller kasusfunktion.

### Kalibreringslektion 3: Y04 — bisatsens verbgrupp

Börja med **Heute kaufe ich ein Buch** och **Ich bleibe zu Hause, weil ich ein Buch lese**. Gå vidare till **…, weil ich ein Buch gekauft habe** och **…, weil ich ein Buch kaufen will**. Använd synliga etiketter för satsinledare, subjekt, objekt och verbgrupp. Visa att ett helt inledande bisatsled kan följas av huvudsatsens verb: **Weil es regnet, bleibe ich zu Hause**.

Begreppen förfält och satsram ska användas konsekvent med den större meningsmodellen. [IDS förklarar att ett förfält kan innehålla ett helt satsled och inte är begränsat till subjektet](https://grammis.ids-mannheim.de/terms/view/289). För avancerade verbgrupper ska läsaren få en uttrycklig länk till E11. En förenklad nybörjarregel får inte göra den framtida förklaringen om **…, weil ich habe arbeiten müssen** omöjlig. [IDS beskriver detta Oberfeld-mönster](https://grammis.ids-mannheim.de/terminologie/2106).

## 7. Övningssystemet måste bedöma det som lärs ut

### Gemensamma uppgiftsegenskaper

Varje uppgift behöver stabilt ID, lektionskoppling, typ, lärandemål, begriplig kontext, rätta/acceptabla svar, felkategorier och återkoppling. Distraktorer ska vara konstruerade för att avslöja ett sannolikt missförstånd. Slumpa visningsordningen med stabila alternativ-ID:n, så att facit inte beror på arrayposition.

Rättningen ska skilja mellan **rätt för uppgiften**, **delvis rätt** och **fel**, där uppgiftstypen kräver det. Delåterkoppling kan användas utan att felaktig helhet markeras som helt rätt. Ange i förväg om uppgiften tränar ordets betydelse, genus, kasus, stavning, verbform eller meningsbyggnad.

Fri produktion kräver antingen en tydligt begränsad svarsmängd eller en transparent självbedömningsuppgift med modellförslag. En enkel jämförelse med en enda sträng ska inte presenteras som full grammatisk bedömning av godtyckliga meningar. En språkmodell behövs inte för grundsystemets rättning.

### Tyskspecifik normalisering

Sökning och bedömning har olika behov. Sökningen kan hitta `fuer` när användaren letar efter **für**. En stavningsuppgift kan samtidigt kräva umljudet. Normalisera Unicode och överflödiga blanksteg, men gör aldrig generell borttagning av diakritik eller gemener till den enda sanningen i rättningen.

- **Schön/schon** och **könnte/konnte** får inte godkännas som samma svar.
- Substantivens versal bedöms när stavning/grammatik är lärandemålet. Tilltal **Sie/Ihr** kräver tydlig kontext och ska kunna skiljas från **sie/ihr**. I början av en mening kan versalen ensam inte avgöra referensen. Se [IDS om personalpronomen och distansformen Sie](https://grammis.ids-mannheim.de/terminologie/185).
- Artikel måste krävas när uppgiften tränar genus eller kasus. Ett korrekt substantiv utan artikel kan ge delåterkoppling men ska inte klara artikelmomentet.
- `ae/oe/ue` kan erbjudas som uttryckligt valt tangentbordsläge. Det kan ge återkoppling om standardstavning i stället för att tyst bli universellt korrekt.
- Schweizisk standard med `ss` behandlas som markerad variant där den är relevant. Ett rent tyskt stavningsprov behöver tydligt angiven norm.
- Skiljetecken och stor bokstav i början kan tolereras när de inte är momentet som prövas; tyska betydelseskillnader ska alltid bevaras.
- Alternativa ordföljder och hjälpverb godtas endast när de är granskade för den aktuella konstruktionen och situationen. Begränsa hellre en tvetydig uppgift än att felmarkera naturlig tyska.

### Verbdrillen

Ha två övningsformer: böjning med tydligt angiven person/konstruktion och lucka/produktion i en hel mening. Visa **ich, du, er/sie/es, wir, ihr, sie/Sie** som böjningsrader men låt tilltalet i uppgiften vara tydligt.

Filtrera på svaga/starka/blandade verb, hjälpverb, modalverb och separerbarhet. Konstruktioner väljs från en lista med verifierade giltiga kombinationer. Spanskans filterkombinationer med gerundium, diftongering och tempus/modus ska ersättas.

Verbposter ska ha infinitiv, svensk betydelse, huvudformer, presensavvikelser, particip, hjälpverb per betydelse/konstruktion, separerbarhet, rektion och exempel. Samma stavade infinitiv kan ha flera konstruktionsposter med olika betydelser. En separerad verbdel måste placeras korrekt i meningen; ett isolerat formsvar är inte tillräcklig träning.

Minst 80 olika infinitiver ska täcka högfrekventa svaga/starka/blandade verb, sein/haben/werden, modalverb, reflexiva konstruktioner och partikelverb. Minst 1 600 giltiga formposter ska vara kontrollerade. Skapa inte orimliga kombinationer för att nå antalet. Härled gärna regelbundna former från granskade regler, men granska representativa mönster och alla undantag mot extern referens.

### Glosdrillen

Behåll 15 kortlekar med 50 betydelse-/uttrycksposter i varje. Föreslagna teman: identitet och familj; hem och vardag; mat och inköp; tid och kalender; stad och orientering; fritid; resor; kropp och hälsa; arbete och studier; relationer och känslor; natur och miljö; kultur och medier; samhälle; abstrakta samband; studier och formellt språk.

Varje post har svensk betydelse, tysk form, ordklass och ett eget exempel med svensk översättning. Substantiv ska ha artikel, genus och plural eller uttrycklig markering om normal plural saknas. Verb ska ha användbar konstruktion och länk till verbpost om en sådan finns. Fasta uttryck lagras som uttryck, med betydelse och sammanhang.

Erbjud skrivning och flerval samt riktningen tyska → svenska för förståelse och svenska → tyska för produktion där svarsmängden är kontrollerbar. Skilj ordkunskap från kunskap om artikel/plural i resultatet. Om samma lemma lärs i två betydelser ska posterna ha olika betydelse-ID:n och antalsredovisningen vara tydlig.

### Kasusdrillen

Denna nya motor ska träna fyra steg: **identifiera styrning/funktion → välj kasus → välj genus/numerus → böj frasen**. Träna en del åt gången och sedan kombinationer. Stöd artikel, adjektiv, pronomen, substantivändelser och dativ plural.

Exempel: `Ich helfe ___ alt___ Mann`. Lärandemålet avgör om eleven ska ange kasus, fylla båda ändelserna eller skriva **dem alten Mann**. Ge felkoder som wrong-case, wrong-article-form, wrong-adjective-ending och wrong-noun-inflection. Formtabell och facit hämtar samma data, men oberoende språkgranskning ska skydda mot gemensamma datafel.

### Meningsbygget

Träna V2, frågor, satsram, bisatser, relativsatser, negationsräckvidd och objektordning. Flytta helst hela fraser för att undvika föreställningen att V2 betyder ”andra ordet”. Erbjud alltid ett fungerande alternativ till dragning, exempelvis välj fras och använd flyttknappar.

Varje uppgift behöver en tydlig avsikt och förhandsgranskade ordningsalternativ. När flera svar är möjliga ska alternativen antingen godtas eller uppgiften preciseras, exempelvis ”börja med tidsadverbialet”. Förklara skillnaden mellan grammatisk avvikelse och en ovanlig men möjlig betoning.

### Uttalsinnehåll och ljud

Minsta ljudleverans är 64 klipp: 30 namn på grundbokstäver/särskilda tecken, 24 ord i minst tolv genomtänkta kontrastpar samt tio korta meningar med betoning/intonation. Det betyder inte att tyskan har 30 grundbokstäver. Ljuden ska täcka vokallängd, omljud och centrala konsonantkontraster; komplettera om G02–G04 annars saknar stöd.

Använd egen licensierad inspelning eller tillåten TTS med lyssningsgranskning. Dokumentera rättigheter, källa/röst och datum. Blanda inte tyska standardvarianter utan etikett. IPA ska följa den inspelade varianten. Textstöd och manuell uppspelning ska finnas; spela inte flera dolda läslägesversioner samtidigt.

## 8. Lärstig, framsteg och repetition

De 54 stegen i katalogen är ordnade så att rekommenderade förkunskaper finns tidigare i samma stig. Förkunskapslänkarna är stöd, aldrig lås. Alla övriga 46 huvudgenomgångar ingår också i den färdiga tjänsten.

Spara separat:

- **Besökt:** var läsaren senast arbetade.
- **Läst:** uttrycklig läsmarkering.
- **Övat:** senaste/bästa resultat, antal försök och uppgiftstäckning.
- **Att repetera:** stabila uppgifts-ID:n, felkategorier och nästa datum.

Visa aldrig ”behärskar” enbart för att en sida har markerats som läst. En godkänd övningsrunda betyder vad den faktiskt visar: att de uppgifterna klarades vid ett tillfälle. Beskriv eventuella färdighetsindikatorer och deras begränsningar konkret.

Utgå gärna från förebildens enkla intervaller 1, 3, 7 och 14 dagar, men ha konfigurerbara regler och dokumentera dem. Fel kan återkomma senare i samma session med avstånd och ska dessutom planeras för nästa dag. En mer långsiktig återkontroll efter cirka 30 dagar är ett rimligt produktförslag, inte ett påstående om en validerad optimal algoritm.

Repetitionskön blandar glosor, verb, kasus och lektionsfrågor; standardpasset kan vara tio uppgifter med val att fortsätta. Tom kö ska förklaras och erbjuda normal övning. Resultat från sista svaret i en session måste sparas. Trasig eller otillgänglig lokal lagring får inte hindra användaren från att öva.

Alla sparade format ska ha schemaVersion. Referera till lessonId/itemId och innehållsversion, inte till arrayposition, svensk titel eller den aktuella URL:en. När en fråga ändras i sak ska gamla svar migreras eller återställas tydligt. Lokal export/import av framsteg kan vara en liten separat förbättring om den ryms, men konton behövs inte för grundflödet.

## 9. Källor och språklig kvalitetsprocess

### Källhierarki

1. **IDS grammis** för grammatiska analyser, valens, ordställning och fördjupning. Välj den sida som faktiskt behandlar påståendet, inte bara en länk till startsidan.
2. **Rat für deutsche Rechtschreibung** för stavning och interpunktion. Vid kontrollen den 6 november 2026 presenterar rådet 2024 års regelverk som aktuellt. Kontrollera detta igen när innehållet publiceras. Var särskilt uppmärksam på reglerna för infinitivgruppers kommatering. [Officiellt regelverk och bakgrund](https://www.rechtschreibrat.com/regeln-und-woerterverzeichnis/).
3. **Goethe-Institut** för pedagogisk kalibrering, kommunikativa sammanhang och exempel på nivåanpassade övningsformat. Dess material visar bland annat vardags- och yrkesinriktade övningar på A1–B2. [Goethes övningsöversikt](https://www.goethe.de/de/spr/mig/vuu/ueb/inh/due.html).
4. **Europarådet** för CEFR-mål. En lokal grammatiklista är tjänstens redaktionella progression, inte en officiell fullständig förteckning över vad varje nivå innehåller.

Specialiserade ordböcker och andra auktoritativa referenser kan komplettera lexikal kontroll. Källor kan vara oense om klassificering eller beskriva olika register. Redovisa vad skillnaden gäller och välj konsekvent terminologi. Skriv egna exempel och förklaringar; kopiera inte skyddade lektioner, övningsbanker eller ljud.

### Kontrollpunkter som annars lätt blir fel

| Risk | Krav på granskningen |
| --- | --- |
| ”Rörelse = ackusativ” | Motexempel med rörelse inom en plats och med zu/nach; förklara växelprepositionens relation. |
| ”Alla rörelseverb har alltid sein” | Hjälpverbsval verifieras per konstruktion och betydelse; relevanta regionala varianter markeras. [IDS om schwimmen och hjälpverbsval](https://grammis.ids-mannheim.de/fragen/86). |
| ”Konjunktiv I är nutid, II är dåtid” | Skilj formbildning från funktion och tidsreferens. [IDS om Konjunktiv](https://grammis.ids-mannheim.de/sgt/2233). |
| ”Konjunktiv II i referat betyder alltid att talaren misstror” | Formöverlappning och ersättningsformer måste också förklaras. |
| ”Alla verb måste stå i samma ordning i alla bisatser” | Granska Ersatzinfinitiv och Oberfeld med särskilda exempel. [IDS om Ersatzinfinitiv](https://grammis.ids-mannheim.de/systematische-grammatik/1615). |
| ”Tyskans kasus går att få fram genom att översätta svenskans till/av” | Ange styrande ord och tysk konstruktion, inte bara svensk betydelse. |
| ”Endast artikeln visar kasus” | Kontrollera adjektiv, pronomen, n-deklination, genitiv och dativ plural. |
| ”TeKaMoLo är en regel utan undantag” | Skilj neutral tendens från kontextberoende informationsstruktur. |
| ”Ein har en vanlig plural” | Visa artikelbortfall respektive plural med kein/possessiv utan att fabricera former. |
| ”Tyskan är ett enda enhetligt nationellt bruk” | Skilj Tyskland, Österrike och Schweiz, standardspråk, region och dialekt. |

### Granskningen sker i flera pass

**Sakpass:** kontrollera varje regel, formtabell, betydelse, rektion och angivet undantag. Alla ovanliga former och kontroversiella påståenden behöver direkt referens. Ett enda allmänt källnamn i sidfoten är inte tillräckligt.

**Exempelpass:** läs alla exempel som tyska meningar i sitt sammanhang. Kontrollera idiomatik, syftning, naturlig svensk översättning och konsekvens mellan text och ljud. Ta inte för givet att en grammatiskt möjlig konstruktion är ett bra nybörjarexempel.

**Pedagogiskt pass:** lös uppgifterna utan att läsa facit. Finns det flera rimliga svar? Behöver instruktionen preciseras? Har varje felalternativ ett faktiskt skäl att vara fel här? Stämmer återkopplingen med elevens möjliga analys?

**Produktpass:** kontrollera det renderade innehållet i båda läsdjupen, inklusive mobil, tabeller, ljud, fokus och hela kedjan från läsning till övning och repetition.

Nästa modell ska dokumentera faktiska granskningar och osäkerheter. Den får inte ange mänsklig granskare, modersmålsgranskning eller oberoende extern kontroll som inte har skett. För lansering med högt kvalitetslöfte bör en tyskkunnig lärare eller språkgranskare gå igenom åtminstone de centrala lektionerna, alla grammatiska paradigm och tveksamma fall. Fram till dess ska den verkliga granskningsstatusen vara synlig för beställaren.

En källjournal bör innehålla `claimId`, `lessonId`, sakpåstående, direktlänk/avsnitt, vad som stöds, kontrollerat datum och granskarstatus. Det är särskilt viktigt om referenser eller regelverk ändras.

## 10. Teknisk arkitektur och datakontrakt

### Utgångspunkt

Om-Spanska använder Next.js App Router, React, TypeScript, MDX och CSS Modules. Det är en lämplig utgångspunkt när kod och kompetens finns tillgängliga. Föredra en separat Om-Tyska-kodbas med återbruk av generiska läs-, navigerings- och övningskomponenter. Ett byte av ramverk, en generell flerspråksplattform eller en databas är inte nödvändigt för denna målbild.

Behåll strukturen `app/`, `components/`, `content/`, `data/`, `lib/`, `scripts/` och `public/`. Samla identitet i exempelvis `site.config.ts` och innehållsregister i ett entydigt dataformat. Installera versioner utifrån kontrollerad aktuell dokumentation och det faktiskt valda projektet; de granskade versionsintervallen är en beskrivning av förebilden, inte en rekommendation att okritiskt låsa ett nytt projekt till dem.

Generisk återanvändning: kategori-/innehållsläsare, innehållsförteckning, brödsmulor, sidgrannar, grundläggande tabbar, förklaringsrutor och strukturen för lärstig/framsteg. Anpassning krävs för språkmarkering, data, rättning, filtrering, stabila ID:n och de nya övningstyperna. De fyra spanska konjunktivtabellkomponenterna ska ersättas av datadrivna tyska paradigm.

### Föreslaget minimalt innehållskontrakt

```ts
type Lesson = {
  id: string;                  // exempelvis P03, enligt registret; oföränderligt
  slug: string;                // kan ändras med omdirigering
  title: string;
  description: string;
  categoryId: string;
  suggestedLevels: string[];   // redaktionella, kan vara flera
  prerequisites: string[];     // lessonId, inga åtkomstlås
  objectives: string[];
  relatedLessonIds: string[];
  exerciseIds: string[];
  sourceClaimIds: string[];
  contentVersion: number;
  status: 'draft' | 'review' | 'ready';
  review: { language: string; pedagogy: string; rendered: string };
};

type ExerciseBase = {
  id: string;
  lessonId: string;
  contentVersion: number;
  objectiveId: string;
  context: string;
  instruction: string;
  errorTags: string[];
};
```

Komplettera med typade varianter för flerval, böjning, lucka, meningsordning och självbedömd fri produktion. De ska ha uppgiftsspecifik svarspolicy, stabila alternativ-ID:n och återkoppling. Det ska inte finnas ett universellt ”gör allt till gemener och jämför”-facit.

Exempeldata behöver `id`, tysk mening, svensk översättning, analys av relevanta delar, eventuell ljudreferens och variant/register. Verb- och nominalfrasdata behöver strukturerade grammatiska drag i stället för enbart fritext. Substantivets genus får inte härledas genom att titta på en redan kasusböjd artikel.

Ett verb kan exempelvis ha flera konstruktionsposter med egen betydelse och hjälpverb. En övning ska peka på **lexem + konstruktion**, inte bara den stavade infinitiven. Ett formsvar som används i en hel mening ska ange vilka luckor eller fraser som får ändras.

### Innehållsfiler och redaktionellt arbetsflöde

Lagra text i MDX om förebildens komponentmodell återanvänds. Validera metadata med ett schema vid byggtid. Det maskinläsbara lektionsregistret är planens uppdragslista och övergår inte automatiskt till färdigt undervisningsinnehåll. Utöka produktionsregistret med källjournal, granskningsdatum, ordantal enligt dokumenterad metod och återstående brister.

Tillåt endast betrodda lokala innehållsfiler att kompileras som MDX. Ett formulär för rättelser ska inte bli en väg för besökare att köra eller publicera MDX. All undervisningstext som exponeras för användaren ska vara färdig för läsning; interna granskningsnoteringar hör hemma i arbetsregistret.

### Tekniska detaljer från förebilden som kräver uttrycklig genomgång

- Samla varumärke, bas-URL, metadata och språk i konfiguration. Kontrollera även JSON-LD, kontakttexter, sökindex och dokumentation.
- Byt `lang="es"` i återanvända komponenter till konfigurerbart språk med tyska exempel som `de`. Svenska förklaringar är `sv`.
- Ge Om-Tyska ett eget namespace för localStorage och events samt versionshantering av lagrade data.
- Generera ämneslistor, räknare, relaterade länkar och sitemap från ett register; låt ingen hårdkodad startsidelista glömma ett ämne.
- Dela frontmattertolkning mellan sökning och rendering. En sträng `false` får inte bli sann bara för att den är icke-tom.
- Indexera relevanta avsnitt genom hela långa sidor och båda läsdjupens ordval. Begränsning till de första 4 000 tecknen ska inte göra senare avsnitt osökbara.
- Behåll Unicode-normalisering och konsekvent URL-hantering. Använd stabila gemena ASCII-sluggar för nya URL:er.
- Anpassa kontaktformuläret till vald plattform. Återanvänd inte någon annans annonskonto, insamlingsadress eller externa identifierare som en oavsiktlig bieffekt av kodkopiering.
- Om två innehållsversioner finns samtidigt i DOM ska ID:n, formulärfält, ljud och lokalt komponenttillstånd fungera korrekt. Enbart CSS-döljning ersätter inte kontroll av dessa beteenden.

## 11. Visuell form, sökning och hittbarhet

Om-Tyska kan ligga nära förebildens visuella familj: vit läsyta, svart typografi, stora tydliga rubriker, pastellfärgade ingångar, återhållsam dekoration och tydliga handlingsknappar. Behåll läsningens lugn även när innehållet blir långt. Använd särskilda pedagogiska markörer för kasus och satsdelar, alltid med textetikett. Det måste gå att förstå skillnaden utan färgseende.

Samma färg eller term ska inte byta grammatisk betydelse mellan text, tabell och övning. Skilj exempelvis **ackusativ** som kasus från **objekt** som funktion i etiketter, även om de ibland sammanfaller. Visa stam och ändelse där det hjälper förståelsen.

Sökning ska hitta svenska och tyska ingångar: dativ/Dativ, preteritum/Präteritum, bisats/Nebensatz, adjektivändelser, dem/den, separerbara/trennbare och würde/wuerde. Bevara skillnaden mellan sökbar omskrivning och korrekt svar. Visa träffens kategori, kort begripligt utdrag och helst relevant avsnitt.

Tillgänglig funktionalitet omfattar tangentbord, återställd fokusposition efter dialog, textetiketter för färg, begripliga statusmeddelanden, läsbara tabellrubriker, tillräcklig kontrast och reducerad rörelse där animation används. Dessa delar ska kontrolleras i det färdiga gränssnittet, inte enbart genom att aria-attribut råkar finnas.

Varje publicerad sida ska ha korrekt titel, beskrivning, kanonisk URL och relevant internlänkning. Metadata och strukturerade data ska beskriva den verkliga sidan. Använd verkligt publicerings-/ändringsdatum. Sökoptimering ska hjälpa läsaren att hitta förklaringen, inte skapa duplicerade artiklar för små sökordsvarianter. Undvik påståenden om ”komplett B2” eller garanterat provresultat utan faktisk grund.

Gamla spanska 301-omdirigeringar hör till Om-Spanskas historik. Om-Tyska börjar med egna rena URL:er. Om en publicerad tysk slug senare ändras behövs en motsvarande tysk omdirigering och uppdaterade länkar.

## 12. Genomförande i kvalitetsstyrda etapper

Arbeta i avgränsade innehållsgrupper och håll ett överlämningsbart statusregister. Hela slutmålet är fortfarande 112 genomgångar, tio bloggartiklar, data och verktyg enligt planen. En fungerande prototyp är ett delresultat.

### Etapp 0 — fastställ register och teknisk bas

Skapa separat projekt, sitekonfiguration, innehållsschema, grammatisk termlista och svarspolicy. Importera den här planens katalog som planerade poster. Välj basnorm för stavning och märk regionala alternativ. Kontrollera faktiskt valda paketversioner och körbar miljö. Klart när rutter, rendering, navigation och validering fungerar med riktiga provdata.

### Etapp 1 — kalibrera sex genomarbetade lektioner

Skriv **G02, S03, K03, P03, A03 och Y04** på avsedd slutnivå, med de förkunskapsförklaringar piloten behöver. De provar uttal, artiklar, kasus, betydelsekontrast, böjning och syntax. Bygg de minsta verkliga interaktionerna till dem. Granska alla sex mot kriterierna innan samma mall används i stor skala.

Detta är ett representativt kvalitetsprov, inte en nybörjarkurs som ska lanseras som komplett. Minst en lektion behöver prövas med någon som inte kan ämnet sedan tidigare när en sådan granskare finns tillgänglig. Dokumentera annars denna begränsning.

### Etapp 2 — fyll förkunskapskedjor och den grundläggande lärstigen

Producera G/R/V/Y/S/K-grunderna och de första faserna i registret. Varje arbetsgrupp omfattar exempelvis fyra till sex lektioner med tillhörande övningar och källjournal. Leverera fungerande och granskade enheter, inte hundra tomma sidfiler. Ett bra etappmål är att de första 35 lärstigsstegen och deras data går att genomföra från början till slut.

### Etapp 3 — färdigställ alla 54 lärstigssteg och fyra verktyg

Fyll återstående led i lärstigen, inklusive bisatser, relativsatser, adjektivböjning, modalitet och passiv. Slutför verktygen med riktiga data och koppla resultat till repetition. Minst en full session per verktyg ska fungera över sidomladdning. Verktygens fulla datamängd kan fyllas i etapp 4, men begränsningen måste vara tydlig i intern leveransstatus.

### Etapp 4 — referensdjup och full innehållsparitet

Färdigställ de övriga 46 huvudgenomgångarna, alla tolv Mer-sidor och tio bloggartiklar. Fyll glosbank, verbbank och ljudbank till målen. Kontrollera att samtliga 62 Om-Spanska-ämnen är funktionellt omhändertagna i mappningen och att alla tyskspecifika huvudområden har full behandling.

### Etapp 5 — sammanhängande slutgranskning och leverans

Kontrollera språk, pedagogik, renderat innehåll och hela användarflödet. Sammanställ innehållsstatistik, källjournal och återstående begränsningar. Förbered en konkret fungerande granskningsversion och dokumentation. Publicera först enligt beställarens faktiska instruktion för driften; den här planens färdigställande är inte i sig en beställning på domänköp eller extern lansering.

### Förslag på arbetsenhet för nästa modell

1. Läs de aktuella katalogposterna, granskade referenserna och angränsande lektioner.
2. Skriv ett kort faktaunderlag med huvudregel, begränsningar och källor.
3. Skriv rigorös behandling och lättsam ingång mot samma faktaunderlag.
4. Skapa egna exempel och uppgifter; lös dem separat från utkastet.
5. Koppla komponenter, övningsdata, länkar och nästa steg.
6. Rendera och kontrollera den färdiga enheten.
7. Uppdatera status med vad som faktiskt verifierats och vad som återstår.

En modell som har begränsat sammanhang ska fortsätta från detta statusregister. Den ska inte förenkla slutmålet till en startsida och några demolektioner för att få plats i ett enda svar.

## 13. Verifiering och definition av klart

### Innehålls- och datakontroller

- Varje katalog-ID finns exakt en gång med avsedd kanonisk URL, och alla rekommenderade förkunskaper går att slå upp.
- Alla undervisande lektioner uppfyller sina exempel- och övningskrav, eller har en motiverad och granskad ämnesanpassning. E12 följer sitt särskilda ordlistekrav.
- Alla paradigm är fullständiga för det som sidan säger sig beskriva; icke-tillämpliga former har en tydlig anledning.
- Fråge- och alternativ-ID:n är unika. Flerval har avsett antal rätta svar, kompletta förklaringar och inga oavsiktliga dubbletter.
- 750 glosposter har den information som ordklass och betydelse behöver. Ordposterna räknas efter dokumenterad betydelsemodell.
- Minst 80 skilda infinitiver och 1 600 giltiga formposter finns; felaktiga eller orimliga kombinationer av tempus/modus/person är inte genererade.
- Alla ljudreferenser finns, går att spela och överensstämmer med text/IPA. Rättigheter är dokumenterade.
- Inga ofärdiga platshållare, påhittade referenser, fel språkmarkeringar eller oavsiktligt kvarlämnad spansk undervisningstext finns i publicerat material.

### Meningsfulla språk- och rättningsfall

Rättningsmotorn ska uttryckligen prövas med åtminstone följande skillnader, utöver sin vanliga data:

| Testfall | Avsedd egenskap |
| --- | --- |
| `schon` i uppgift som kräver `schön` | Ska inte godkännas genom accentnormalisering. |
| `konnte` i uppgift som kräver `könnte` | Skilda former och betydelser bevaras. |
| `Sie` och `sie` med entydig tilltalskontext | Semantisk versal bedöms. |
| Substantiv utan artikel i genusuppgift | Delåterkoppling, inte helt rätt. |
| `im Park` vid rörelse inne i parken | Korrekt dativ måste kunna godkännas. |
| `zum Bahnhof` som mål | Zu får inte felaktigt kräva ackusativ. |
| `mit einem guter Freund` | Rätt artikel, fel adjektivform ska diagnosticeras separat. |
| Korrekt uppgift med `weil … habe arbeiten müssen` | Avancerat granskad verbgrupp får inte underkännas av enkel slutregel. |
| Ett korrekt alternativ till facits neutrala ordföljd | Ska godtas om uppgiften inte uttryckligen begränsar ordningen. |
| Fel och rätt på sista uppgiften i en session | Resultat och repetitionsreferens ska sparas korrekt. |

Automatiska kontroller av data som kommer från samma källa kan fånga strukturfel men bevisar inte att de tyska formerna är riktiga. Använd granskade referensfall för de språkliga skillnaderna.

### Användarflöden som måste fungera

1. Ny besökare öppnar lärstigen, läser en lektion, övar, får resultat och fortsätter rätt.
2. Återkommande besökare ser tidigare sparade framsteg efter omladdning.
3. Fel i minst två olika verktyg dyker upp i repetition med rätt lektionskoppling.
4. Byte mellan lättsam och rigorös läsning bevarar korrekt identitet och navigation.
5. Sökning hittar ett tidigt och ett sent avsnitt på en lång sida samt svenska/tyska termvarianter.
6. Mobilanvändaren kan läsa ett komplett böjningsparadigm och genomföra meningsbygget utan horisontellt sidkaos.
7. Tangentbordsanvändaren kan öppna/stänga sökning, följa alternativ, svara och nå nästa steg.
8. Otillgänglig eller trasig lokal lagring ger begripligt beteende och tillåter fortsatt övning.

Kör projektets bygg-, typ- och innehållskontroller. Komplettera med riktade tester för rättning, resultatlagring och migrationsregler samt webbläsarprov av hela flödet. Lägg störst arbete på riskerna för falsk språklig rättning och tappade framsteg. En lyckad build ensam räcker inte.

### Slutleveransen ska innehålla

En körbar separat kodbas; fullständigt innehåll enligt registret; all övningsdata och ljud; fungerande sökning/framsteg/repetition; README för körning och redigering; redaktionell guide; käll- och granskningsjournal; verifieringsrapport; och en ärlig lista över återstående begränsningar. Markera inte en prototyp eller ogranskad massgenerering som färdig Om-Tyska.

## 14. Beslut som nästa modell får fatta själv

Vanliga implementeringsval kan fattas inom planens ramar: komponentindelning, exakta CSS-detaljer, konkret MDX-upplägg, filnamn, arbetsgrupper och ordningsföljd inom en etapp när förkunskaperna hålls ihop. Katalogens ämnestäckning och slutkraven ska bestå.

Använd standardtyska med Tyskland som grundval för de första exemplen, och märk relevanta österrikiska och schweiziska standardvarianter. Det är ett redaktionellt startbeslut som kan ändras konsekvent. Språkligt belagda varianter får inte automatiskt bli fel i bedömningen.

Frågor om domänägande, externa konton, faktisk avsändaradress och publiceringsmiljö kan lösas när den körbara granskningsversionen finns. De behöver inte hindra innehållsproduktion eller lokalt genomförande. Saknas ett publiceringsbeslut ska modellen lämna en fungerande granskningsbar version och ange exakt vad som återstår för lansering.
