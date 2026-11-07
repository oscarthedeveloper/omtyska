# Verbdrillen: tabeller för person, tempus och modus

Genomfört 7 november 2026.

Verbdrillen har tomma tabeller och två arbetssätt: skriva hela verbformen eller dra/placera blandade pusselbitar. Huvudformerna, svarsbärande platshållare och exempelmeningar har tagits bort ur övningsvyn. Verbvalet visar infinitiv och svensk betydelse, utan äldre grammatiska ledtrådar i översättningsetiketterna.

- Indikativ: Präsens, Präteritum, Perfekt, Plusquamperfekt, Futur I, Futur II.
- Konjunktiv I: Präsens, Perfekt, Futur I, Futur II. Morfologiska former övas även när de sammanfaller med indikativ.
- Konjunktiv II: Gegenwart, Vergangenheit samt en separat kolumn för würde-omskrivning. Omskrivningen betecknas inte som ett ytterligare tempus.
- Imperativ: du, ihr och artig Sie-uppmaning. Sie måste ingå i den artiga konstruktionen. Modalverb ingår inte i detta övningsurval.

Alla tillgängliga former inom valt modus kan fyllas samtidigt; ett val av enskilt tempus/form ger en enda svarskolumn. Sex personrader används för indikativ och konjunktiv. Imperativ använder tre tillämpliga rader.

Befintliga 95 verb används. Sammansatta former kräver hela hjälpverbskonstruktionen. Separerbara verb och reflexivpronomen får sina respektive placeringar. Modalverb övas som självständiga verb, utan ett andra huvudverb. Vanliga kortformer i imperativ och konjunktiv samt alternativa konjunktivstammar godtas. Ofullständiga perfektformer och borttappade omljud godtas inte.

Resultat sparas via befintlig quizlagring och felaktiga/tomma rutor läggs i den befintliga repetitionskön. Resultat och repetitionsposter har egna stabila id:n för verbtabeller.

## Filer

- `data/verb-tables.ts`: tabellmodell, formbyggare och godtagna varianter.
- `components/exercises/InflectionTable.tsx`: tomma tabeller, svarskontroll, flytt/swap av pusselbitar, klick- och tangentbordsalternativ.
- `app/verbdrillen/page.tsx`: verburval, modus, tempusvisning och arbetssätt.
- `tests/verb-tables.test.mjs`: fullständighet för samtliga verb samt riktade tester av oregelbundenheter, sammansatta former, reflexivitet, partiklar och imperativ.

## Språklig referens för tillagda former

- IDS grammis, [Konjunktiv II](https://grammis.ids-mannheim.de/terminologie/401).
- IDS grammis, [Würde-Formen](https://grammis.ids-mannheim.de/systematische-grammatik/312).
- IDS grammis, [Formenbestand des Imperativs](https://grammis.ids-mannheim.de/systematische-grammatik/1275).

## Verifiering

Produktionsbygge och typkontroll godkända. Projektets 20 tester passerar. I webbläsaren har en komplett presenstabell, en komplett tabell med alla sex indikativtempus och ett komplett imperativpussel rättats. Dragning från bitbanken till tabellen har provats. Modusväxling, tomma fält utan ledtrådar och mobilens horisontella tabellrullning har kontrollerats. Detta är en riktad kontroll av böjningsmodellen och användarflödet; fullständighetstesterna är inte en separat lexikografisk granskning av varje enskild genererad verbform.
