# Om-Tyska: från grundgrammatika till avancerat referensverk

Utökningsplan till den genomförande AI-modellen · 6 november 2026

## 1. Uppdraget och den nya ambitionsnivån

Utveckla den befintliga Om-Tyska till en vederhäftig och detaljerad grammatika från absolut nybörjare till avancerad läsare, modersmålstalare, lärare och språkgranskare. Bevara svenska som förklaringsspråk. Lägg till tysk fackterminologi med förklaringar så att läsaren också kan använda tyskspråkiga referensverk.

Målet ”ALL tysk grammatik” ska driva en **systematisk täckningskontroll**, inte omsättas till ett obestyrkt marknadsföringslöfte. Den moderna grammatiken ska omfatta ljud/prosodi, ordens struktur och böjning, alla ordklasser, fraser, enkla och komplexa satser, betydelse, informationsstruktur, text och samtal. Standardspråket ska behandlas med dess nationella och regionala variation. Äldre konstruktioner och dialektala system ska få identifierade referensmoduler med redovisad omfattning. Varje lucka som upptäcks under produktionen ska in i registret och få en ägare.

Det går inte att belägga bokstavlig uttömning av varje dialekt, varje historisk period och varje produktiv konstruktion genom ett slutligt sidantal. Slutmålet här är därför en prövbar, bred referensgrammatik med dokumenterade gränser och fortlöpande luckhantering. C2 och modersmålstalande är heller inte samma kompetensprofil. Lärnivå och referensdjup ska anges separat.

Den föreslagna första stora utbyggnaden ger **195 kanoniska grammatikartiklar**: 66 befintliga, 46 återstående från ursprungsplanen och 83 nya fördjupningar. Det är en arbetskarta, inte en garanti att exakt 195 sidor räcker för slutmålet. Dela eller komplettera sakartiklar när täckningskontrollen kräver det; skapa inte parallella kopior för att öka antalet.

Paketets [Sidkatalog.md](Sidkatalog.md) beskriver varje utökning. [Utbyggnadsregister.json](Utbyggnadsregister.json) ger samma beställning maskinläsbart. [START-HAR.md](START-HAR.md) är överlämningsprompten. [Kontrollrapport.md](Kontrollrapport.md) anger vad som verifierats i planeringsunderlaget.

## 2. Verifierat nuläge i den skapade Om-Tyska

Granskad katalog: `/Users/oscarpagerup/Desktop/Git Repo/Om-Tyska/`.

Git-revision vid granskning: `dfabedff43ddda441b37b620d860a9ae9b14c7df`. Arbetskatalogen hade en ospårad `package-lock.json`; inga källfiler har ändrats av denna undersökning. Underlaget avser det lokala projektet. Ingen kontroll av en publicerad deployment eller webbläsarbaserad funktionsrevision ingår i denna granskning.

| Iakttagelse | Betydelse för utbyggnaden |
| --- | --- |
| 54 MDX-filer i huvudgrammatiken, 12 i Mer grammatik | 66 grammatiksidor finns som faktiskt undervisningsinnehåll. |
| 112 poster i `data/registry.json` | Registret är större än det skrivna biblioteket. |
| 46 poster saknar motsvarande MDX-fil | Grundämnen som imperativ, reflexiva pronomen, Konjunktiv I, adverb och räkneord behöver fortfarande skrivas. |
| 10 bloggartiklar finns | De ersätter inte de saknade kärnartiklarna. |
| `lib/content.ts` omkring rad 214 kan skapa text från registerbeskrivningen när fil saknas | En renderbar URL kan visa reservtext. Sidexistens får inte räknas som färdig grammatiktäckning. |
| Cirka 35 700 utvunna ord i de 66 grammatikfilerna; median cirka 520 | Detta är främst en koncentrerad undervisningsgrammatika. Många avancerade ämnen får bara en kort introduktion. |
| Alla 112 registerposter har tom `sources`-lista; 66 har samtidigt `languageReview: approved` | Godkännandet kan inte styrkas ur registret. Det visar inte vem som granskat eller vilka påståenden som kontrollerats. |
| Inga webbkällänkar identifierades i själva MDX-innehållet | Den externa sakgrunden behöver dokumenteras i artikel eller källjournal. |
| Inga lättsamma MDX-versioner och inga läslägesmarkörer i innehållsfilerna | Två läslägen i gränssnittet bevisar inte att det finns två innehållsdjup. |
| Inga lokala ljudfiler i `public`; AudioButton kan använda webbläsarens talsyntes | Lyssna-knapparna utgör inte en dokumenterad, granskad inspelningsbank. Uttalsjämförelser kräver kontrollerat ljud. |

Ordantalet är en grov indikator efter borttagning av frontmatter och viss MDX/JSX-syntax. Text i komponentegenskaper kan falla bort. Antalet är inte ett exakt renderat ordantal och ska inte användas som ett kvalitetsbetyg i sig.

Inventeringen omfattar samtliga grammatiksidors metadata och rubriker. Fördjupad innehållsläsning har riktats mot centrala riskområden: genus, plural, vokaler, artikel/adjektivsystem, prepositionsval, tidssatser, konjunktiv, particip, passivalternativ och avancerade verbgrupper. Rapporten är inte en redan utförd språkgranskning av varje mening på samtliga sidor.

### Vad som redan är användbart

Behåll den återkommande lektionsingången, synliga mål, meningskontraster, satsramar och exemplifiering. Kasus och tysk ordföljd har fått den egna struktur som behövdes. Dessa delar är en bra grund att utveckla. Utbyggnaden bör ske i den befintliga kodbasen med bevarade ID:n och länkar; ett plattformsbyte är inte ett innehållsmål.

Äldre instruktioner i projektets `planning/` är referensmaterial. Den här användarbeställningen gäller utredning och planering; den innebär inte att sidorna nu ska skrivas om eller att projektet ska publiceras.

## 3. Etapp 0: rätta sakfel och dokumentera verklig granskningsstatus

Följande konkreta fynd visar varför kvalitetsarbete behöver komma före massproduktion. Det är inte en uttömmande fellista.

| Plats i källan | Iakttagelse | Beställning |
| --- | --- | --- |
| `content/docs/Substantiv/plural.mdx:57` | Tabellen visar `das Mann`, trots att kommentaren anger maskulinum. | Rätta till `der Mann`; kontrollera samma lemma i tabeller, övningar och orddata. |
| `content/docs/Substantiv/genus.mdx:40` | Suffix sägs bestämma genus i över 80 procent av fallen utan underlag. | Ta bort procentsatsen om ingen definierad undersökning kan anges. Skilj produktiv suffixregel från statistisk tendens. |
| Samma sida, omkring rad 57 och 76 | `-ie` ges 100 procent femininum och alla ord på `-chen` sägs vara neutrum. | Skilj morfologiskt suffix från bokstavsslut. Jämför exempelvis `das Genie` och `der Kuchen`; formulera regler på rätt analysnivå. |
| `content/docs/Modus/konjunktiv-ii.mdx:48` | `würde sein/haben` förbjuds med ”aldrig”. | Beskriv vanlig preferens för wäre/hätte, men upphöj den inte till ett generellt grammatiskt förbud. |
| `content/mer/verbgrupper-och-oberfeld.mdx:77` | En enda ordningsregel påstås vara obligatorisk för alla Ersatzinfinitiv-konstruktioner. | Dela upp modalverb, lassen, perceptionsverb och helfen samt obligatoriska/fakultativa varianter. |
| `content/mer/grammatiska-termer.mdx:421` | Subjekt definieras genom utgångspunkt/agent. | Skilj syntaktisk funktion, semantisk roll och tema. Visa patientsubjekt och subjekt utan agentroll. |
| Samma ordlista, omkring rad 463 | Huvudsats sägs alltid ha det finita verbet på position två. | Skilj V1-, V2- och andra satstyper; ett påstående om deklarativt grundmönster får inte definiera alla huvudsatser. |
| `content/docs/Grunder/vokaler.mdx` | Mut/Mutter etiketteras minimalt ordpar; gut illustrerar öppen stavelse. | Använd ett par som isolerar avsedd kontrast; förklara sluten/öppen stavelse och ortografiska ledtrådar separat. |
| `content/docs/Prepositioner/nach-in-zu-an-auf.mdx` | ”Personer kräver alltid ZU”; minnesregeln om zu som befintlighet krockar med zu mir/zum Arzt. | Avgränsa den avsedda personbesökskonstruktionen. Förklara lexikaliserat zu Hause som sådant och jämför andra rumsliga relationer. |

För konjunktivfyndet finns exempelvis `würde sein` i [Dudens egen böjningsredovisning för sein](https://www.duden.de/konjugation/sein_Verb_Vollverb). Frågan gäller alltså bruk, kontext och alternativ, inte att formen saknar grammatisk existens. Om verbgrupper: [IDS om Oberfeld](https://grammis.ids-mannheim.de/terminologie/2106) och [IDS om Ersatzinfinitiv](https://grammis.ids-mannheim.de/systematische-grammatik/1615) ska läsas tillsammans och tillämpas på varje verbklass.

Sök igenom hela biblioteket efter **alltid, aldrig, endast, 100 %, säker, obligatorisk**. Detta är en lista för granskning, inte för mekanisk borttagning: vissa regler är verkligen kategoriska inom rätt avgränsning. Varje sådan regel ska ha angiven räckvidd och belägg. Granska också om ett exempel verkligen stödjer regeln.

Byt inte automatiskt varje befintligt approved till felaktigt. Bevara historiken men inför evidensfält: kontrollerade påståenden, direkt källställe, datum, metod och faktisk granskare. Saknas dokumentation ska status vara **granskning ej styrkt**, inte ett nytt påhittat godkännande.

**Etappens slutgrind:** de identifierade akuta felen är rättade i text och facit, samtliga 66 sidor har en genomgången risklista och statusregistret skiljer innehållsexistens från språklig granskning. Lägg till meningsfulla referensfall för rättningen där ett upptäckt språkfel påverkar vilka svar som godtas.

## 4. Vad avancerad referensnivå innebär

En kort grundregel och tio liknande exempel utgör inte en fullständig referensbehandling. En avancerad artikel behöver hjälpa läsaren att avgöra **vad som gäller, i vilken konstruktion, med vilken betydelse, i vilken variant och med vilken säkerhet**.

Bygg varje större ämne i tre lager:

1. **Grund:** korrekt huvudmönster, vardagliga exempel, tydliga uppgifter och rimligt antal undantag.
2. **Fördjupning:** fulla paradigm, konstruktionernas avgränsning, betydelsekontraster, restriktioner och register.
3. **Referens:** variation, tveksamhetsfall, analysalternativ, belägg och länkar till specialartiklar. En nybörjare ska inte behöva läsa detta för att börja använda språket.

Lägg gärna specialartiklarna i en egen navigeringsgren **Avancerad grammatik och referens**, men använd samma gemensamma sökning och ömsesidiga länkar. En lättsam sammanfattning är en version av samma ämne och räknas inte som en ny grammatisk artikel.

### Mall för en rigorös referensartikel

Varje artikel ska, där det är tillämpligt, innehålla:

- Definition, tysk term och en uttrycklig gräns mot närliggande begrepp.
- Grundkonstruktion och nödvändiga morfologiska drag.
- Form-/konstruktionsöversikt med verkliga villkor, inte en fri kartesisk produkt av alla tänkbara former.
- Analyserade exempel med idiomatisk svensk översättning.
- Minst två **kontextpar** där konstruktion, fokus eller betydelse ändras och skillnaden förklaras.
- Ett typiskt övergeneraliseringsfall och en förklaring av varför det inte följer grundregeln.
- Semantiska, syntaktiska och lexikala begränsningar, där sådana finns.
- Standardbruk, tal/skrift, nationell/regional variation och äldre bruk tydligt åtskilda.
- Källhänvisningar per svårt sakpåstående och faktisk granskningsstatus.
- Uppgifter som prövar konstruktion och tolkning, med motiverade accepterade alternativ.

Morfologiska artiklar kan behöva många paradigm. Samtalsartiklar behöver i stället hela repliksammanhang och prosodi. En uppslagslista behöver stark länkning och egen datakontroll. Tvinga inte alla ämnen till samma mekaniska antal tabeller eller flervalsfrågor.

Som produktionsbudget kan vanliga kärnartiklar få omkring 1 200–2 500 läsarord på referensnivå, stora nav 2 500–5 000 med tydlig uppdelning och specialartiklar 900–2 500. Detta är utrymme för analys, inte en kvot att fylla med text. Ämnets täckningskrav avgör om en sida är klar.

## 5. Täckningsmatrisen: kontrollera systemet, inte bara sidlistan

Den föreslagna kartan är en redaktionell syntes. Den följer principen att form, relation, betydelse och kommunikativ funktion behöver samverka; detta är också de perspektiv som beskrivs i [IDS systematiska grammatik](https://grammis.ids-mannheim.de/systematische-grammatik). Den är inte en kopierad eller officiellt certifierad innehållsförteckning från IDS.

| Huvudområde | Måste täckas i det färdiga verket | Var arbetet främst ligger |
| --- | --- | --- |
| Ljud och prosodi | Segment, fonem/allofon, stavelse, kvantitet, accent, intonation, reduktion och variation | G02–G04 och nya ljudartiklar. |
| Morfologi | Böjning, allomorfi, sammansättning, avledning, konversion, produktivitet och lexikalisering | S05–S09, V03/V06, E05 och nya morfologiartiklar. |
| Substantiv-/nominalsystem | Genus/numerus/kasus, namn, artikel, referens, attribut och nominalfrasstruktur | S/K/A/R samt nominalfrasartiklar. |
| Alla ordklasser | Substantiv, artikelord/determinativer, pronomen, adjektiv, verb, adverb, adpositioner, junktorer, partiklar, interjektioner/responsuttryck | Originalplanen samt specialartiklar om partiklar, diskurs och analysmodeller. |
| Verbsystem | Fulla böjningssystem, tempus, modus, diates, modalitet, aktionsart, valens och funktionsverb | V/T/M, E07/E11 och nya verbartiklar. |
| Frassyntax | Nominal-, adjektiv-, adverb-, prepositions- och verbfras; huvud/komplement/modifierare | A08/K08/P08/V09 samt nya valens- och strukturartiklar. |
| Satssyntax | Satsled, kongruens, fält, ordning, kontroll/höjning, inbäddning, extraktion och ellips | Y/B, avancerad syntax och satstyper. |
| Betydelse | Referens, kvantifikation, negation, skopus, temporalitet, modalitet och roller | Nya semantikartiklar och ömsesidiga länkar till formnivån. |
| Informationsstruktur/pragmatik | Fokus, tema, presupposition, partiklar, prosodi och talhandling | Y05/Y07 och egna avancerade artiklar. |
| Text och samtal | Referenskedjor, bindning, sammanhang, turer, ellips, reparation och diskursmarkörer | Ny gren för text och samtal. |
| Variation och förändring | Nationella standarder, regionalt bruk, dialektala översikter, historisk läsgrammatik och omstridda former | E09 och nya variationsmoduler. |
| Ortografi/interpunktion | Grammatisk struktur och skrivregel, tillåtna alternativ och aktuellt normunderlag | G05–G07 och nya skrivregelsartiklar. |

Utöka matrisen med en rad per faktiskt delfenomen: exempelvis **dativus ethicus**, **koherent infinitivgrupp**, **fri relativsats med kasuskonflikt**. Tilldela huvudägare, grund-/referensdjup, källor, exempel och övningstyp. Ett omnämnande i ordlistan ger status ”nämnt”, inte ”täckt”.

Märk varje rad med `absent`, `mentioned`, `basic`, `reference-drafted`, `verified`. En sida kan ha olika status för olika delområden. Blockera slutgodkännande om någon kärnrad är absent eller mentioned. Genomför en andra, oberoende täckningspassering mot referensverkens ämnesindelningar. Nytillkomna luckor får nya ID:n, även om det höjer målet över 195.

Dialekt- och historikgrenarna är en första jämförande omfattning. Skriv uttryckligen vilka språkperioder och dialektområden som behandlats. Om beställaren senare vill ha fullständiga separata dialektgrammatikor kräver varje sådant system en egen detaljerad matris; en översikt får inte presenteras som detta.

## 6. Etapper och beroenden

Samtliga etapper nedan tillhör slutbeställningen. Genomför dem i arbetsgrupper om cirka 3–6 artiklar, med språk- och innehållskontroll innan gruppen markeras färdig. Återanvänd redan godkänt material utan att skriva om det av kosmetiska skäl.

| Etapp | Arbete | Slutgrind |
| --- | --- | --- |
| 0. Tillförlitlighet | Akuta rättelser, riskgranskning av 66 befintliga sidor, källjournal, ärlig status och inventering av reservtexter | Påståenden och facit för de upptäckta felen är samordnade; färdigmarkeringar har evidens. |
| 1. Slutför grundbiblioteket | Skriv de 46 saknade originalartiklarna; använd beställningarna i katalogdel B. Utveckla befintliga sidors grundläggande precision enligt del A. | Samtliga ursprungliga 112 ämnen har faktisk undervisningstext; inga reservtexter räknas som lektioner. |
| 2. Nominalsystem, morfologi och ljud | Fördjupa S/K/A/R/G och skapa X-artiklar markerade etapp 2. Färdigställ G04/G07:s relevanta samband och kontrollerat uttalsunderlag. | Fulla paradigmer och korrekta analysnivåer; genus-/plural-/adjektivvariation har redovisade villkor. |
| 3. Verb, tid, modalitet och valens | Fördjupa V/T/M, E01–E03/E07 och verbartiklarna märkta etapp 3 | Konstruktionsberoende valens och former; modalitet, tempus och diates förväxlas inte; referensfall för kluster och passiv. |
| 4. Avancerad syntax och satstyper | Fördjupa Y/B/R08/V09/E11 samt nya syntax-/satsartiklar | Full fältmodell, kontroll/höjning, infinitivkoherens, ellips och underordningsvariation är förklarade och exemplifierade. |
| 5. Semantik och informationsstruktur | Skopus, kvantifikation, referens, fokus, partiklar och prosodiska kontraster | Flera möjliga läsningar och kontexter dokumenteras; bedömningsmotorn felmarkerar inte etablerad variation. |
| 6. Text, samtal, variation och skrivregler | Nya text-/samtalsartiklar, dialekt/historik, fackspråk, ortografi och referensmetod | Varje källa/belägg har proveniens; språkbrukets register och normstatus är tydliga. |
| 7. Hela verkets täckningsrevision | Systematisk matrisjämförelse, kompletteringar, korslänkar, rättningsprov och extern språkgranskning | Inga olösta kärnluckor; alla kvarstående begränsningar och eventuella oenigheter redovisas. |

Katalogens X-artiklar har etappnummer och föräldralänkar. De senare visar ämnesanknytning, inte en färdig topologiskt sorterad läsordning. Planera inom varje etapp efter behov: skriv exempelvis en kontroll/höjning-förklaring före avancerad infinitivkoherens. Återkom till artiklarna när en senare etapp ger ny sakgrund. Starta inte hela referensnivån som om alla grunddefinitioner redan är färdiga.

De 66 sidbeställningarna i del A är den genomgående fördjupningslistan. Etapp 1 säkrar deras grundförklaringar; etapp 2–6 färdigställer deras referensdelar samtidigt med respektive ämnesfamilj. På så vis behöver ”etapp 1 klar” inte innebära att alla avancerade detaljer redan skrivits.

### Konkreta arbetsgrupper att börja med

**0A:** S01/S02/M03/E11/E12: rättelserna ovan samt kontroll av quiz och data. **0B:** G02/G03/P04/B05/V09: regelräckvidd, exempelklassificering och övergeneraliserade beslutsträd.

**1A:** S05/S06/S07/S08/S09: de saknade substantivmomenten. **1B:** R05/V07/V08/K07/K08: reflexivitet, imperativ och styrning. **1C:** M02/M05/M06/T06/T07/T08: de återstående centrala verbmomenten. **1D:** A05–A08 och R04/R06/R07/R09–R11. **1E:** P05/P07–P10, Y05/Y07 och B03/B06/B07. **1F:** G04/G07/V06 och hela D01–D07. Dessa grupper kan delas i mindre leveranser; tillsammans omfattar de alla 46 saknade originalartiklarna exakt en gång.

## 7. Fyra fördjupningar som kalibrerar den nya nivån

### E11: från ett undantag till verklig verbgruppsreferens

Behåll grundexemplet `…, weil ich habe arbeiten müssen`. Förklara att Oberfeld är en position i den **högra** satsklammern, inte helt enkelt huvudsatsens V2-plats. Separera hjälpverbets finita form, styrd infinitiv, Ersatzinfinitiv och resten av klustret.

Bygg sedan en kontrollerad konstruktionsmatris: kärnmodalverb, brauchen, lassen, perceptionsverb och helfen. För varje rad anges particip-/infinitivalternativ, tillåtna ordningar, eventuell obligatorisk ordning och register/region. Lägg till längre kluster först när referenserna stödjer just den konstruktionen. Det som är obligatoriskt för ett mönster blir inte automatiskt obligatoriskt för alla andra. Den gamla melodiförklaringen ska inte bära sakpåståendet.

Uppgifterna ska låta läsaren identifiera styrning och jämföra giltiga alternativ, inte bara flytta haben längst fram i varje infinitivsekvens. Automatisk rättning får införas först när varje accepterad och underkänd variant har tydlig kontext och sakgrund.

### S01: från ändelselista till genusanalys

Behåll det lättlärda der/die/das-stödet. Dela därefter genusledtrådarna i produktiva avledningssuffix, sammansättningens huvudled, semantiska grupper och lexikalt varierande ord. Visa skillnaden mellan morfem och samma bokstäver i slutet av ett oböjt ord.

Utveckla homonymer med olika genus/betydelser och nationellt varierande lånord. Lägg till länkar till nominalfrasens kongruens och mänsklig referens: `das Mädchen` innebär inte att varje senare pronomen i alla textsammanhang måste vara es. Varianterna måste beskrivas med källstöd och kontext, inte med ny motsatt universalregel.

### V09: från subjektlikhet till konstruktionens kontroll

Beskriv de faktiska komplementtyperna och vilka huvud som väljer dem. I `Ich verspreche ihm, zu kommen` och `Ich bitte ihn, zu kommen` tolkas infinitivens underförstådda subjekt olika. Låt läsaren identifiera vem som kommer, med full förklaring och källkontroll. Skilj denna kontroll från höjning i konstruktioner med scheinen och från AcI vid perceptionsverb.

Utveckla sedan zu-placering, ren infinitiv, perfekt/passivinfinitiv, korrelat, infinitivgruppens position och koherens. Kommatering ska hämtas från aktuellt officiellt regelverk. En enda svensk ”att”-översättning får inte fungera som valensregel.

### Y05/Y07: från positionslista till betydelse i samtal

Två olika ordningar kan vara grammatiska men kräva olika sammanhang. Utgå från en fråga, vad deltagarna redan vet och vad som betonas. Jämför därefter nominala och pronominella objekt i samma situation. Presentera TeKaMoLo som stöd för vissa neutrala kontexter och redovisa faktorer som övertrumfar det.

Modalpartiklar behöver repliker, satsmodus och prosodi. En svensk enordsöversättning av doch eller ja räcker inte. Använd [IDS beskrivning av Abtönungspartikel](https://grammis.ids-mannheim.de/systematische-grammatik/392) som ingång till funktionskontrollen, och granska varje enskild partikel och kombination mot lämplig detaljkälla. Den avancerade läsaren ska kunna förklara skillnaden mellan grammatiskt möjligt, pragmatiskt avvikande och annan ordklass hos samma form.

## 8. Källor, belägg och verklig tillförlitlighet

Använd flera typer av underlag för skilda frågor:

- **Systematisk grammatik:** IDS grammis och etablerade vetenskapliga referensgrammatikor för konstruktioner, form och analys. Olika teorier kan ha olika terminologi utan att beskriva olika korrekta språk.
- **Variationsdata:** IDS korpusgrammatik och relevanta korpusstudier. Ange land, texttyp, tid, register, sökmetod och vad datan faktiskt visar. [IDS publicerar annoterade grammatiska datamängder](https://grammis.ids-mannheim.de/korpusgrammatik/6568); de är ett möjligt granskningsunderlag, inte stöd för frekvenstal som inte har räknats.
- **Ortografisk norm:** [Rat für deutsche Rechtschreibungs regelverk](https://www.rechtschreibrat.com/regeln-und-woerterverzeichnis/). Ange kontrollerad version och paragraf. Det regelverk som rådet presenterar som aktuellt ska verifieras vid publicering; blanda inte äldre kommaregler med nyare formuleringar.
- **Lexikal kontroll:** tillförlitlig ordbok/valensresurs för huvudformer, genus, plural, rektion och betydelseskillnader. Ett lemma kan ha flera konstruktioner som inte delar alla regler.
- **Tal och prosodi:** licensierade inspelningar eller dokumenterad inspelning med granskning. Webbläsar-TTS kan vara hjälpmedel men inte ensam evidens för fonetik eller regionalt uttal.

Källhänvisning ska stå nära ett svårt påstående eller peka till en tydligt identifierad källjournalpost. Bibliografi med enbart startsidor räcker inte. Skilj eget konstruerat exempel, bearbetat exempel och autentiskt belägg. Rubriken ”autentiska exempel” i nuvarande sidor bör granskas: naturligt klingande egenskrivna meningar är inte därmed autentiska korpusbelägg. Ange proveniens när autenticitetsanspråket behålls.

Låt nya källposter ha `claimId`, `articleId`, konstruktion/påstående, direktlänk och avsnitt/sida, kontrollerat datum, stödets räckvidd och faktisk granskningsmetod. Notera motstridiga referenser och varför en redaktionell analys valts. Ett AI-utkast får inte tillskrivas mänsklig eller oberoende granskning som inte har skett.

För en publiceringsnivå som riktar sig till modersmålstalare och lärare bör en tyskkunnig språkvetare eller kvalificerad språkgranskare kontrollera de stora referensnavens definitioner, all omstridd variation, paradigm och bedömningsregler. Under tiden fortsätter modellen med källunderbyggda utkast och markerar exakt vad som väntar på extern granskning; den ska inte hitta på att det redan är gjort.

## 9. Övningar och innehållsmodell för avancerad grammatik

Behåll grundövningarna. Lägg till följande som egna bedömningsformer:

| Uppgiftsform | Vad den ska visa |
| --- | --- |
| Kontextval | Varför två grammatiska former passar olika avsikter/register. |
| Analys | Huvud, argument, satsfält, kontroll och skopus; flera vedertagna analyser kan behöva visas. |
| Omskrivning med begränsning | Vad som bevaras respektive ändras i nominalisering, passiv och referat. |
| Graderad bedömning | Skillnaden mellan neutral standard, markerat men möjligt, regionalt och direkt fel. |
| Text- och samtalsanalys | Hur referens och informationsstruktur fungerar över flera meningar eller repliker. |
| Ljudbaserad kontrast | Hur accent eller intonation påverkar tolkning; faktisk inspelning krävs. |

Be inte läsaren skriva en fri avancerad analys och låtsas sedan att en enkel strängmatchare kan rätta den. Erbjud modellanalys och självbedömning när svarsmängden inte går att avgränsa. Använd aldrig en korrekt regional form som felalternativ utan att uppgiften uttryckligen avgränsar vilken norm eller stil som efterfrågas.

Utöka datamodellen med `constructionId`, `senseId`, `normStatus`, `register`, `region`, `timePeriod`, `interpretation`, `sourceClaimIds` och `acceptedVariants`. Använd konsekventa svenska och tyska grammatiska drag. Behåll artikel-ID och befintliga framstegsreferenser. Nya specialartiklar länkar till föräldrasidor, och föräldrasidorna ger sammanfattning och hänvisning i stället för att duplicera hela referensavsnitt.

En förändrad regel kan göra ett gammalt facit fel. Sök därför alltid både i undervisningstext, `data/learning-quizzes.ts`, övriga övningsfiler och genereringsskript efter det berörda påståendet. Uppdatera versions-/migrationslogik där gamla resultat annars får fel betydelse.

## 10. Definition av klart och överlämning mellan arbetspass

En artikel blir klar när dess **angivna delfenomen** är täckta och granskade, inte när ett visst ordantal uppnåtts. För varje leveransgrupp ska nästa modell lämna:

1. Ändrade/skapade artikel-ID:n, vad som tillkommit och vilka ämnesgränser som gäller.
2. Källjournal och exempel-/beläggstatus.
3. Kontroll av alla paradigmer och de gränsfall som just införts.
4. Uppdaterade facit och motiverade accepterade varianter.
5. Renderingskontroll: MDX, tabeller, länkar, ljud och mobil läsning.
6. Uppdaterad täckningsmatris, återstående osäkerheter och exakt nästa arbetsgrupp.

Teknisk build och typkontroll behövs när kod/data ändras men bevisar inte grammatisk riktighet. För det här uppdraget är referensgranskning, motexempel och genomarbetade kontexter de viktigaste kontrollerna.

Slutrevisionen ska kunna besvara: Var finns varje huvudområde och dess gränsfall? Hur skiljer verket neutral standard från legitim variation? Kan en läsare följa ett påstående till belägget? Blir en korrekt avancerad mening underkänd av någon övning? Kan nybörjaren fortfarande hitta en korrekt enkel ingång?

**Överlämningsstatus per artikel:** `not-started`, `draft`, `source-checked`, `examples-checked`, `assessment-checked`, `rendered`, `externally-reviewed` där det sistnämnda endast används om en faktisk extern granskning finns. Ange också öppna frågor. Varken `ready` i ett gammalt register eller denna plans färdigställande ersätter dessa kontroller.

Genomför hela planen i etapper och fortsätt från registret över flera arbetspass. En prototyp, en färdig etapp eller ett bestämt antal nya sidor är inte automatiskt det slutliga referensverket. Om nya kärnluckor upptäcks under etapp 7 ska de få egna beställningar och slutföras före slutgodkännande.
