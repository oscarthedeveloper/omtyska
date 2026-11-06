# Om-Tyska — kontrollrapport för planeringsunderlaget

6 november 2026

## Genomförda kontroller

| Kontroll | Resultat |
| --- | --- |
| Antal kanoniska lektioner i registret | 112: 100 huvudsidor och 12 Mer-sidor. |
| ID:n och URL:er | Samtliga unika; nya URL:er använder gemena ASCII-sluggar. |
| Markdownkatalog mot JSON-register | Samma 112 ID:n, titlar, URL:er och innehållskrav. |
| Kategorier | Antalen per kategori stämmer med katalogens definition. |
| Förkunskapsreferenser | Alla finns i registret. |
| Förkunskapsgraf | Inga cirklar. |
| Lärstig | 54 olika steg; alla angivna förkunskaper kommer tidigare i samma stig. |
| Övriga huvudsidor | 46, utöver lärstigens 54. |
| Minsta antal lektionsuppgifter | 600 på huvudsidorna + 44 på E01–E11 = 644. |
| Minsta antal lektions-/referensexempel | 1 066, utöver E12:s minst 70 illustrerade begrepp. |
| Mappning av Om-Spanska | Alla 62 aktiva grammatikfiler finns exakt en gång med giltiga tyska mål-ID:n. |
| Källfiler i mappningen | Finns i den lokala referenskatalogen vid kontrollen. |
| Lokala länkar i Markdown | Samtliga mål finns i leveranspaketet. |
| Arkiv | Skapad ZIP med alla sju underlagsfiler; integriteten kontrollerad. |

Kontrollerna av register, förkunskaper, mappning och filreferenser har utförts programmatiskt. Huvudplan, startprompt och katalog har dessutom kontrollerats för överensstämmande omfattning och för skillnaden mellan föreslagna krav och producerat innehåll.

## Källunderlag

Om-Spanskas aktiva MDX-innehåll och TypeScript-data har inventerats lokalt. Källrevision och metod finns i [analysen](Om-Spanska-analys.md). Externa referenser från IDS grammis, Rat für deutsche Rechtschreibung, Goethe-Institut och Europarådet har slagits upp för att kalibrera språk- och granskningskraven. Direktlänkar finns vid respektive sakfråga i [huvudplanen](Om-Tyska-plan.md).

## Vad kontrollen inte betyder

Paketet är en analyserad och kontrollerad **plan**. Inga 112 färdiga tyska genomgångar, 644 slutuppgifter eller fullständiga ljud-/ordbanker påstås vara producerade. De maskinläsbara posterna står därför på planned och not-started för språkgranskning. Förslag på tyska exempel är kalibreringsmaterial; nästa modell ska granska dem tillsammans med den fullständiga lektion där de används.

Om-Spanskas källkod har inte ändrats. Ingen webbplats har byggts eller publicerats inom detta uppdrag. Rapporten ersätter inte den språk-, produkt- och webbläsargranskning som ska utföras under genomförandet.
