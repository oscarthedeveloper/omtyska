# Analys av Om-Spanska inför Om-Tyska

6 november 2026 · Analysen avser den lokala källkoden, inte ett antagande om den publicerade sajten.

## Underlag och avgränsning

Källkatalog: `/Users/oscarpagerup/Desktop/Git Repo/Om-Spanska/`.

Git-revision vid granskningen: `dddd5b48c5e65fea2b0ddda81d17d28df9231fb9`. Arbetskatalogen rapporterade inga ändringar vid avläsningen. Källprojektet har inte ändrats i detta arbete.

Jag har inventerat samtliga aktiva MDX-filer, deras metadata, rubriker, tabell- och komponentanvändning samt datamängderna. Jag har granskat innehållsläsare, rutter, navigering, läslägen, sökning, lärstig, quiz, drillar, framsteg och repetitionsmodell. Innehållets pedagogiska djup har bedömts genom hela rubrikkartan och fördjupad läsning av representativa grund-, jämförelse- och referenssidor, bland annat Artiklar, Infinitiv, Preteritum eller imperfekt och Objektspronomen tillsammans. Detta är ingen fullständig språklig faktagranskning av varje spansk exempelmening. Jag har inte kört en webbläsarbaserad funktions- eller tillgänglighetsrevision.

Filer i `planning/`, `docs/`, `content/video/`, arkiv och kopierade referenskataloger är skilda från det innehåll som den aktiva appen läser. Tidigare planering för Ordverk, inklusive `planning/leverans/ordverk-overlamning/underlag/bibliotek/tyska.md`, beskriver ett annat planerat projekt och räknas inte som publicerade tyska lektioner. Instruktioner och prompter i sådana dokument har behandlats som analysmaterial, inte som användarens uppdrag eller som instruktioner att utföra.

## Verifierad omfattning

| Del | Faktiskt innehåll | Viktig tolkning |
| --- | --- | --- |
| Huvudgrammatik | 53 MDX-sidor i 9 huvudkategorier | Verb står för 20 sidor, inklusive 10 under Tempus. |
| Mer grammatik | 9 MDX-sidor | Ger totalt 62 kanoniska grammatiksidor. |
| Blogg | 7 artiklar | Från mycket korta ingångar till en längre sambandsordsguide. |
| Separata lättsamma versioner | 40 huvudsidor + 6 fördjupningar | Alternativa versioner av 46 av de 62 sidorna, inte ytterligare 46 ämnen. |
| Hela sidor märkta rigorösa | 13 huvudsidor + 3 fördjupningar | Döljs i delar av navigeringen i lättsamt läge. |
| Lärstig | 5 faser, 22 steg | En vald läsordning över en del av biblioteket. |
| Slutquiz | 22 quiz × 3 frågor = 66 frågor | Frågorna ligger centralt i data, inte som MiniQuiz-taggar i MDX. |
| Valspecifik quizåterkoppling | 3 av de 66 frågorna har feedback-array | Övriga använder en allmän förklaring per fråga. |
| Glosdrill | 15 kortlekar × 50 poster = 750 | 750 olika es-strängar i den granskade datan. |
| Verbdrill | 24 kategorier, 265 kategoriposter | Samma infinitiv förekommer i flera kategorier. |
| Unika verb i drilldatan | 74 infinitiver | Startsidan kallar 265 kategoriposter för 265 verb; det bör särskiljas i Om-Tyska. |
| Verbsvar | 1 567 icke-tomma former i kategoriposterna | Räknar upprepningar mellan kategorier, inte unika strängar. |
| Uttalsljud | 57 MP3-filer i public | Spanska tillgångar; tyska behöver en egen ljudbank. |

En grov textutvinning ger cirka **74 200 ord i de 62 rigorösa grundfilerna**, cirka 5 300 i bloggen och cirka 20 400 i de separata lättsamma versionerna. Uppskattningen tar bort frontmatter och försöker avlägsna HTML/JSX/kod. Den kan både missa synlig text i komponentdata och behålla annan syntax. Den är en storleksindikator, inte ett exakt ordantal från renderad HTML. Enskilda grammatiksidor ligger enligt samma metod ungefär mellan 290 och 4 600 ord, med median cirka 940.

### Kategorier i huvudgrammatiken

| Kategori | Sidor |
| --- | ---: |
| Grunder & uttal | 5 |
| Substantiv | 4 |
| Adjektiv | 3 |
| Räkneord | 3 |
| Pronomen | 8 |
| Verb inklusive Tempus | 20 |
| Adverb | 5 |
| Prepositioner | 2 |
| Syntax | 3 |

Startsidan har en hårdkodad lista med åtta områden medan innehållslagret har nio. Räkneord finns i innehållet men saknas i startsidans områdeslista. Om-Tyska bör generera sådana översikter från ett register.

## Informationsarkitektur och läsarflöden

- `/` presenterar tjänsten, ämnesingångar, kontrastlektioner, drillar, blogg och nästa steg.
- `/grammatik` samlar automatiskt genererade ämneslistor och redaktionellt utvalda jämförelser.
- `/docs/[...slug]` visar huvudgrammatik och `/mer/[...slug]` specialfrågor. Båda använder samma innehållslager och sidkomponenter.
- `/larstig` väljer en rekommenderad ordning. `/framsteg` visar lässtatus och övningsresultat. `/repetition` återanvänder missade frågor från flera övningstyper.
- `/verbdrillen` och `/glosdrillen` har skrivövningar, resultat och möjlighet att öva fel igen. Glosdrillen har dessutom flerval.
- `/blog` och `/blog/[slug]` ger sökbara, ibland mer samtalsnära ingångar till kärnmaterialet.
- `/kontakt` och `/tack` hör till kontaktflödet.

På lässidorna finns brödsmulor, rubrik, ingress, innehållsförteckning, föregående/nästa och ibland länkar till förkunskaper, relaterade lektioner och övningar. Menyn grupperar Grammatik och Öva; sökning kan öppnas med tangentbord. Lättsamt/rigoröst läge sparas lokalt och påverkar både textval och vilka sidor som visas i vissa listor.

## Pedagogiken som gör Om-Spanska till en stark förebild

**Förklaringar på svenska med kontrast mot svenskan.** Materialet stannar inte vid en formtabell. Det förklarar hur samma avsikt uttrycks, exempelvis svenskans att, bli och få, och vilka svenska vanor som leder fel.

**Form, användning och nyans.** De längre sidorna har kompletta paradigm, typfall, betydelseskillnader, undantag, register och ibland regionala skillnader. Infinitivsidan behandlar exempelvis substantivering, infinitiv/bisats, styrande prepositioner och satsersättning. Artikelsidan behandlar både former och långt mer än bestämd/obestämd artikel.

**Läsbar grund och fördjupning.** Separata lättsamma filer gör att en nybörjare kan få en kortare väg in. Rigorösa block gör det möjligt att gå vidare till referensnivå. Det är två läsdjup, inte två olika sanningar.

**Meningen och situationen kommer först i de mest genomarbetade lektionerna.** Preteritum eller imperfekt börjar med ett berättarbehov, visar samma handling med två perspektiv och låter eleven välja utifrån avsikten. Objektspronomen tillsammans går från utskrivna objekt till pronomen i synliga steg.

**Flera pedagogiska komponenter används med olika roller.** LessonIntro anger mål och förkunskaper, MeaningSwitch jämför betydelser, SentenceSteps bygger förståelse och SentenceTransform ger återkoppling på val. MiniQuiz testar efteråt. Drill-komponenten länkar till ett verktyg med förvalda parametrar; den är inte i sig en separat övningsmotor.

## Styrkor som behöver bli mer konsekventa i Om-Tyska

| Iakttagelse i källan | Konsekvens för Om-Tyska |
| --- | --- |
| LessonIntro förekommer på 19 av 53 huvudsidor men på ingen av de 9 Mer-sidorna i grundfilerna. | Kräv mål och relevant förkunskapsstöd i varje undervisande genomgång. |
| MeaningSwitch, SentenceSteps och SentenceTransform används på ett begränsat antal sidor. | Välj interaktion efter lärproblemet och använd den konsekvent där den behövs; undvik dekoration. |
| Quiz finns på lärstigens 22 sidor, tre frågor per sida. | Utvidga till hela det undervisande biblioteket och ge fler typer av uppgifter. |
| Endast tre frågor har valspecifik återkoppling. | Distraktorer ska representera ett begripligt fel och få en egen förklaring. |
| Några elementära ämnen är märkta rigorösa på sidnivå, exempelvis frågeord, räkneord och modala hjälpverb. | Lättsamt läge ska fortfarande låta eleven hitta grundförklaringen till alla centrala ämnen. |
| Lättsamma och rigorösa versioner lagras separat; båda renderas i lässidan och växlas med CSS. | Bevara läsdjup men samordna exempel, former och länkar; kontrollera HTML, fokus, ljud och tillstånd vid dubbla versioner. |
| Tre olika övningsdatamodeller samverkar genom lokalt sparade resultat. | Inför stabila innehålls-/fråge-ID:n så att ändrad ordning inte kopplar gamla fel till nya frågor. |
| Quizrepetition refererar till frågeindex. | Versionera innehåll och migrationsregler från början. |
| Sökindexet använder högst 4 000 tecken brödtext per post och rigorös grundtext. | Sök på rubrik/avsnitt, båda läsdjup och tyska/svenska synonymer; normalisera sökning separat från rättning. |
| Glosrättningen kan godkänna ett substantiv utan artikel och normaliserar till gemener. | Tysk övningskontext måste avgöra om artikel, kasus och versal är en del av det som bedöms. |
| Spanska exempel har hårdkodat lang=es i flera delkomponenter. | Använd lang=de för tyska och sv för förklaringar; generalisera komponenternas språkparameter. |
| Webbdomän, varumärke och vissa faktauppgifter är hårdkodade på flera ställen. | Samla identitet och räknare i konfiguration/register. |

Dessa är avlästa egenskaper och planeringsbehov. Rapporten påstår inte att alla möjliga följdfel har reproducerats i webbläsare.

## Tekniken och vad som är värt att återanvända

`package.json` deklarerar Next.js ^15.5.4, React/React DOM ^19.0.0, TypeScript ^5.7.0, next-mdx-remote, gray-matter, remark-gfm och rehype-slug. Det är deklarerade intervall i detta repo, inte ett påstående om senaste version eller vad ett nytt projekt ska installera utan kontroll. App Router och TypeScript används tillsammans med CSS Modules och globala designvariabler.

`lib/content.ts` bygger sidmetadata, kategoriträd, rubriker och grannar från frontmatter och `_category_.json`. Slugjämförelsen tar hänsyn till Unicode-normalisering och procentkodning. Detta är relevant även för tyska/svenska tecken, men rena stabila URL-sluggar förenklar nyproduktion.

`lib/learning-path.ts` och `data/learning-quizzes.ts` kopplar läsning till en utvald progression. `lib/learning-progress.ts` håller isär läst-status och quizresultat. Det är en viktig distinktion att behålla.

`lib/repetition-queue.ts` blandar missade quiz-, verb- och glosfrågor i en session med standardgräns tio uppgifter. `lib/repetition-progress.ts` använder dagintervallerna 1, 3, 7 och 14 efter rätt svar samt ett nästa-dag-steg efter fel. Modellen har ett ändligt mastered-tillstånd; den ska beskrivas som en enkel schemalagd repetition, inte som bevisad varaktig språkbehärskning.

Visuell grund enligt `app/globals.css`: vit yta, svart typografi, pastellblock, Inter, JetBrains Mono, rundade knappar och separata pedagogiska färgmarkörer. Om-Tyska kan höra till samma familj och samtidigt använda tyska exempel och relevanta verktyg. Färg ska alltid kompletteras med etikett.

`netlify.toml` innehåller driftinställningar och 301-omdirigeringar från en äldre Docusaurus-struktur. Kontaktformuläret är kopplat till Netlify Forms. Sådant är plattformsspecifikt och ska väljas uttryckligen; gamla spanska omdirigeringar och annons-ID:n hör inte till ett nytt tyskt innehållsbibliotek.

## Filspår för nästa modell

Alla sökvägar i denna tabell är relativa källkatalogen ovan.

| Vad som ska förstås | Källfiler |
| --- | --- |
| Sidstruktur, metadata och läslägen | `lib/content.ts`, `lib/types.ts`, `lib/grammar-mode.ts`, `app/docs/[...slug]/page.tsx`, `app/mer/[...slug]/page.tsx` |
| Pedagogisk högstanivå | `content/docs/Verb/Tempus/Preteritum eller imperfekt.mdx`, `content/docs/Pronomen/Objektspronomen tillsammans.mdx` och motsvarande lättsamma filer |
| Referensdjup | `content/docs/Substantiv/Artiklar.mdx`, `content/docs/Verb/Infinitiv.mdx`, `content/docs/Verb/Verbkonstruktion.mdx` |
| Interaktioner och MDX | `components/mdx/MdxComponents.tsx`, `MiniQuiz.tsx`, `SentenceSteps.tsx`, `SentenceTransform.tsx`, `MeaningSwitch.tsx`, `Drill.tsx` |
| Övningsdata | `data/verbs.ts`, `data/decks.ts`, `data/learning-quizzes.ts` |
| Progression och repetition | `lib/learning-path.ts`, `lib/learning-progress.ts`, `lib/repetition-queue.ts`, `lib/repetition-progress.ts` |
| Navigering, sökning och form | `components/Navbar.tsx`, `Sidebar.tsx`, `SearchDialog.tsx`, `GrammarDirectory.tsx`, `app/globals.css` |
| Sökindex och SEO | `scripts/build-search-index.mjs`, `scripts/verify-seo.mjs`, `app/sitemap.ts`, `app/robots.ts`, `lib/site.ts`, `docs/seo-genomforandeplan.md` |

## Full ämnesinventering och överföring till Om-Tyska

Varje aktiv grammatiksida finns med nedan. ID:n syftar på [Om-Tyskas innehållsplan](Om-Tyska-innehallsplan.md). Kopplingen avser undervisningsbehov, inte en rekommendation om ordagrann översättning.

### Huvudgrammatik

| Om-Spanska: titel och URL | Tyska mål-ID:n | Anpassning |
| --- | --- | --- |
| Adjektivens komparation · `/docs/adjektiv/komparation` | A06, A07 | Samma undervisningsfunktion; tyska böjningsformer och jämförelser skrivs från grunden. |
| Adjektivens böjning och kongruens · `/docs/adjektiv/kongruens` | A01, A02, A03, A04, A05 | Betydligt större tyskt område: artikelord, kasus, genus och numerus. |
| Ísimo · `/docs/adjektiv/isimo` | A06, D04 | Ingen direkt tysk ändelsemotsvarighet; intensitet och superlativ fördelas efter funktion. |
| Adverb och deras användning · `/docs/adverb/anvandning` | D01, D04, Y05 | Tysk oböjd adverbiell adjektivanvändning och placering ersätter spanska -mente-mönster. |
| Aquí, allí och ahí · `/docs/adverb/aqui-alli-ahi` | D03 | Hier/dort samt hin/her; ingen kopia av spanskt avståndssystem. |
| Muy och mucho · `/docs/adverb/muy-mucho` | D04 | Sehr/viel/zu/genug i egen tysk modell. |
| Tan och tanto · `/docs/adverb/tan-tanto` | D04, A07 | Grad, mängd och jämförelser med tyska konstruktioner. |
| Tidsadverb · `/docs/adverb/tidsadverb` | D02, T08 | Tyska betydelsekontraster och tempus i kontext. |
| Det spanska alfabetet · `/docs/grunder/alfabet` | G01 | Tyska bokstäver, särskilda tecken och bokstavsnamn. |
| Betoning och accenttecken · `/docs/grunder/betoning-och-accenter` | G02, G04, G05 | Ingen mekanisk översättning av spanska accentregler. |
| Ordförändringar · `/docs/grunder/ordforandringar` | G05, V03, T01, P09 | Funktionerna stavningsmönster, stamväxling, particip och sammandragning får egna ägare. |
| Skrivregler · `/docs/grunder/skrivregler` | G05, G06, G07, D06 | Tysk versal, ortografi och kommatering samt datum/klockslag. |
| Uttal · `/docs/grunder/uttal` | G02, G03, G04 | Längd, omljud, konsonanter och satsmelodi med ny tysk ljudbank. |
| Prepositioner · `/docs/prepositioner/introduktion` | P01, P02, P03, P04, P05, P06, P07, P08, P09, K08 | Den stora referenssidan delas upp efter tysk kasus- och betydelselogik. |
| Personligt a · `/docs/prepositioner/personligt-a` | K03, K04, K08 | Saknar direkt motsvarighet; behovet att skilja objekt från prepositionsfras bevaras. |
| Demonstrativa pronomen · `/docs/pronomen/demonstrativa` | R06 | Tyska former och referenssystem, inte spanska tre avstånd. |
| Frågeord och utrop · `/docs/pronomen/frageord` | R07, Y03 | Form och satsbygge får varsin huvudägare. |
| Indefinita pronomen och kvantifikatorer · `/docs/pronomen/indefinita` | R09, Y06 | Tyska indefiniter och negation utan överförd spansk negativ kongruens. |
| Objektspronomen tillsammans · `/docs/pronomen/objektspronomen-tillsammans` | K06, Y05 | Lektionsformatet kan återanvändas; tysk pronomenordning måste skrivas om. |
| Personliga pronomen · `/docs/pronomen/personliga` | R01, R02, K06 | Tilltal Sie, kasus och syftning blir centrala. |
| Possessiva pronomen · `/docs/pronomen/possessiva` | R03, R04 | Ägare kontra ägt och svenska sin/sitt/sina; två separata formtyper. |
| Reflexiva pronomen · `/docs/pronomen/reflexiva` | R05, V07 | Ackusativ och dativ samt tysk rektion, ingen se-modell. |
| Relativa pronomen · `/docs/pronomen/relativa` | R08, B04 | Former och byggandet av hela tyska relativsatser separeras. |
| Grundtal · `/docs/rakneord/grundtal` | D05 | Ental före tiotal, tysk stavning och tillämpningar. |
| Ordningstal · `/docs/rakneord/ordningstal` | D06 | Tyska ändelser och kasus i datumuttryck. |
| Procent, bråk och matematik · `/docs/rakneord/procent-och-brak` | D07 | Egna tyska mått-, pris- och bråkuttryck. |
| Artiklar · `/docs/substantiv/artiklar` | S03, S04, P09 | Tre genus och fyra kasus, nollartikel och tyska sammandragningar. |
| Genitiv och de-konstruktion · `/docs/substantiv/genitiv` | K05, S06 | Tysk genitiv är kasus; spansk de-analys kan inte kopieras. |
| Substantivens genus · `/docs/substantiv/genus` | S01, S09 | Tyska genusledtrådar och sammansättningarnas huvudled. |
| Substantivens plural · `/docs/substantiv/plural` | S02, S07 | Fler böjningsmönster och dativ plural. |
| Introduktion till syntax · `/docs/syntax/introduktion` | Y01, Y02, Y04, Y05 | V2, satsram, verbgrupper och informationsstruktur. |
| Ordföljd i frågor · `/docs/syntax/ordfoljd-i-fragor` | Y03, R07 | Tyska V1-/V2-frågor och tyska frågefraser. |
| Que · `/docs/syntax/que` | B02, V09, B04 | Svensk att kan bli dass eller infinitivkonstruktion; relativfunktion behandlas separat. |
| Imperativ · `/docs/verb/imperativ` | V08 | Du/ihr/Sie, starka former och partikelverb. |
| Infinitiv · `/docs/verb/infinitiv` | V09, B06, E11 | Zu, satsrelation, Ersatzinfinitiv och verbgrupper. |
| Introduktion till verb · `/docs/verb/introduktion` | V01, V02 | Tysk konjugation och huvudformer, inga -ar/-er/-ir-kategorier. |
| Konjunktiv · `/docs/verb/konjunktiv` | M03, M04, M05, M06, B07 | Tysk Konjunktiv I/II, irrealis, artighet och referat; spansk styrningslista ersätts. |
| Modala hjälpverb · `/docs/verb/modala-hjalpverb` | M01, M02, E02, E03 | Tyska modalverb, tempus och betydelsekontraster. |
| Oregelbundna verb · `/docs/verb/oregelbundna-verb` | V03, V04, T01 | Gemensam verbdatakälla och tyska huvudformer. |
| Verbperifraser · `/docs/verb/perifraser` | V09, M01, T08 | Tyska konstruktioner för funktionerna; inget direkt övertagande av perifraslistan. |
| Reflexiva verb · `/docs/verb/reflexiva-verb` | V07, R05 | Konstruktion, betydelse och kasus i tyska. |
| Futurum II · `/docs/verb/tempus/futurum-ii` | T06, T07 | Särskilt viktig terminologisk ombyggnad: tysk Futur II är sammansatt form. |
| Futurum · `/docs/verb/tempus/futurum` | T06 | Presens för framtid och werden + infinitiv, inte ir a-mönster. |
| Gerundium · `/docs/verb/tempus/gerundium` | E08, T08, D01 | Ingen direkt tysk tempusmotsvarighet; particip, pågående förlopp och adverbiell funktion fördelas. |
| Imperfekt · `/docs/verb/tempus/imperfekt` | T03, T04 | Ingen tysk direkt motsvarighet till spanskt imperfekt som aspektuellt system. |
| Konditionalis · `/docs/verb/tempus/konditionalis` | M03, M04, B07 | Konjunktiv II och villkorskonstruktioner efter funktion. |
| Perfekt · `/docs/verb/tempus/perfekt` | T01, T02, T04 | Haben/sein och tyskt particip; val och register behandlas självständigt. |
| Pluskvamperfekt · `/docs/verb/tempus/pluskvamperfekt` | T05 | Hatte/war och tidsrelation, med egen tysk syntax. |
| Presens · `/docs/verb/tempus/presens` | V02, V03, V04, V05 | Tyska böjningstyper och partikelverb. |
| Preteritum eller imperfekt? · `/docs/verb/tempus/preteritum-eller-imperfekt` | T04 | Det pedagogiska meningsparformatet bevaras, men kontrasten blir tyskt Perfekt/Präteritum. |
| Preteritum · `/docs/verb/tempus/preteritum` | T03 | Tyska svaga/starka/blandade former och berättande funktion. |
| Verb som gustar · `/docs/verb/verb-som-gustar` | K04, K07 | Gefallen och annan tysk rektion; förklara utan påstådd identitet mellan språken. |
| Verbkonstruktion och rektion · `/docs/verb/verbkonstruktion` | K07, K08, P08, V09 | Valens, preposition, kasus och infinitiv i gemensam konstruktionsmodell. |

### Mer grammatik

| Om-Spanska: titel och URL | Tyska mål-ID:n | Anpassning |
| --- | --- | --- |
| Apokopering · `/mer/apokopering` | S09, G05 | Saknar direkt huvudsaklig motsvarighet; ingen konstgjord tysk apokoperingssida. |
| Grammatiska termer och ordlista · `/mer/grammatiska-termer` | G08, E12 | Lätt tillgänglig grundförklaring plus svensk–tysk referensordlista. |
| Negation · `/mer/negation` | Y06, R09 | Nicht/kein och räckvidd; ingen överföring av spansk dubbelnegation. |
| Opersonligt se · `/mer/opersonligt-se` | M07, M08, E07, R09 | Passiv, man och andra tyska alternativ; tyskan har ingen motsvarande se-funktion. |
| Ordbildning på spanska · `/mer/ordbildning` | S09, E05, E08 | Sammansättning, avledning och particip i tyska. |
| Por och para · `/mer/por-och-para` | P04, P06, P08, B06 | Betydelsebaserat val mellan tyska konstruktioner; ingen påhittad tysk tvåordsersättning. |
| Ser och estar · `/mer/ser-och-estar` | V04, M07, M08, E01 | Sein/werden/bleiben och passiv som tyska egna kontraster. |
| Si-satser · `/mer/si-satser` | B07, M03, M04, E04 | Wenn/falls/ob och tysk konjunktiv med tydlig skillnad mellan fråga och villkor. |
| Språket i Spanskamerika · `/mer/spanskamerikansk-spanska` | E09 | Tysk standardspråklig variation i DACH, skild från dialekter. |

### Bloggen

| Artikel | Huvudsaklig funktion i Om-Tyska |
| --- | --- |
| Spanska sambandsord: komplett guide · `/blog/sambandsord` | B01–B07: sambandsord blir en del av kärnbiblioteket, kompletterat av korta bloggingångar. |
| Verb som Gustar · `/blog/verbsomgustar` | K04/K07: konstruktioner och rektion i naturliga tyska exempel. |
| Att bli · `/blog/attbli` | E01: svenskans bli och tyskans werden/bleiben m.fl. efter sammanhang. |
| Att få · `/blog/attfå` | E01/E03: ta emot, tillåtelse, nödvändighet och orsakande skiljs åt. |
| Varför me gusta men me gustan? · `/blog/me-gusta-me-gustan` | K02/K04: synliggör subjekt och kongruens i en tysk konstruktion. |
| Varför räcker inte ”ser är permanent”? · `/blog/ser-permanent` | P03/T02: motsvarande redaktionell funktion blir att pröva missvisande tyska minnesregler. |
| Varför blir le lo till se lo? · `/blog/varfor-se-lo` | K06/Y05: visa hur pronomen påverkar tysk ordföljd. |

## Samlad slutsats för planeringen

Det som framför allt ska motsvaras är sambandet mellan noggrann svensk förklaring, tysk form och funktion, tydliga exempel, aktiv bearbetning och återbesök efter fel. Enbart samma antal sidor, en startsida i liknande stil eller en översatt ordklassmeny uppfyller inte det målet. Den föreslagna innehållsplanen gör därför tyskans struktur till huvudprincip och använder Om-Spanskas bästa lektioner som pedagogisk kvalitetsreferens.
