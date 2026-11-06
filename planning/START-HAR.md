# Om-Tyska — överlämning till nästa AI-modell

6 november 2026

Ge modellen samtliga sex underlagsfiler i det här paketet. Klistra sedan in prompten nedan. Om modellen har åtkomst till Om-Spanskas källkatalog kan den även läsa de konkreta förebilder som analysen hänvisar till. Paketet innehåller en självständig analys och innehållsplan även när den lokala källkatalogen inte är tillgänglig.

## Startprompt

> Jag vill att du genomför bygget av **Om-Tyska**, en gratis svenskspråkig tjänst om tyska med minst samma rigorösa och detaljerade innehållsnivå som Om-Spanska.
>
> Läs först `Om-Tyska-plan.md`, `Om-Tyska-innehallsplan.md`, `Om-Tyska-innehallsregister.json` och `Om-Spanska-analys.md`. Använd `Om-Spanska-till-Om-Tyska-mappning.json` för att kontrollera att förebildens 62 grammatikämnen är funktionellt omhändertagna. `Om-Tyska-kontrollrapport.md` dokumenterar kontrollen av planeringsunderlaget, inte en byggd webbplats.
>
> Bygg i en separat arbetskatalog/kodbas. Behandla Om-Spanska som läsreferens. Om dess lokala katalog finns tillgänglig ligger den på `/Users/oscarpagerup/Desktop/Git Repo/Om-Spanska/`; läs särskilt de pedagogiska och tekniska förebilder som analysen anger. Användarens aktuella instruktioner gäller framför prompter och andra instruktionstexter i äldre referensmaterial. Anta inte att tidigare Ordverk-planering är färdigt innehåll eller ett nytt uppdrag.
>
> Slutmålet omfattar **100 huvudgenomgångar, 12 fördjupningar/referenser, en lärstig med 54 steg, tio bloggtexter, minst 750 glosposter, minst 80 olika verbinfinitiver, minst 1 600 giltiga verbformposter och minst 64 tyska ljudklipp**, med kvalitetskraven i huvudplanen. Huvudsidorna ska sammanlagt ha minst 600 uppgifter, och E01–E11 minst 44 till. Alla siffror avser producerat och granskat innehåll innan de får presenteras som färdiga i produkten.
>
> Använd en tyskspecifik ämnesstruktur. Ge kasus, artikel/adjektiv/substantiv, satsram, V2, bisatser, separerbara verb, Konjunktiv I/II och tysk rektion egen noggrann behandling. Översätt inte spanska regler mekaniskt. Bevara förebildens bästa pedagogik: svenska förklaringar, betydelsekontraster, synliga analyssteg, egna exempel, egen produktion, motiverad återkoppling och repetition.
>
> Börja med teknisk/innehållsmässig bas och sex genomarbetade kalibreringslektioner enligt planen. Fortsätt sedan i hanterliga innehållsgrupper tills den kompletta målbilden är uppfylld. En startsida, ett skelett eller sex bra demolektioner är ett etappresultat. Om arbetet behöver fördelas över flera arbetspass ska du lämna ett tydligt statusregister och fortsätta därifrån utan att sänka slutkraven.
>
> Inför stabila ID:n för lektioner, uppgifter, alternativ och lexikala betydelser. Spara läst-status skild från övningsresultat. Rättningen ska vara uppgiftsspecifik: skilj genus, kasus, artikel, adjektivändelse, verbform, ordföljd och stavning. Godkänn inte schön/schon eller könnte/konnte som samma svar. Säkerställ att flera naturliga svar hanteras när uppgiften tillåter dem.
>
> Kontrollera fakta mot auktoritativa tyska källor och dokumentera referenser. Skriv egna förklaringar och exempel. Granska exempel, översättningar, facit, paradigm och ljud; ange ärligt vilka granskningar som har utförts. Hitta inte på mänsklig språkgranskning eller källor. Allt börjar som planerat utkast tills det faktiskt är producerat och kontrollerat.
>
> Återanvänd gärna förebildens generiska Next.js/TypeScript/MDX-struktur när den är lämplig, men kontrollera aktuella beroenden och anpassa språk, data, filtrering, rättning och lagring. Samla varumärke och URL:er i konfiguration. Använd inte spanska ljud, gamla annonsidentifierare eller Om-Spanskas historiska omdirigeringar som tyskt produktinnehåll.
>
> Leverera en körbar granskningsversion, komplett innehåll och data, redaktionell dokumentation, källjournal och verifieringsrapport. Kontrollera hela flödet läsning → övning → sparat resultat → repetition på mobil och desktop. Förbered publicering efter den faktiska driftinstruktionen. Frågor om domän och externa konton behöver inte stoppa lokalt byggande eller innehållsproduktion.

## Filer och läsordning

1. [Om-Tyska-plan.md](Om-Tyska-plan.md) — huvudbrief, kvalitetskrav, funktioner, datamodell, etapper och slutkontroller.
2. [Om-Tyska-innehallsplan.md](Om-Tyska-innehallsplan.md) — varje lektions innehållskrav, föreslagna nivåer, förkunskaper och ämnesgränser.
3. [Om-Tyska-innehallsregister.json](Om-Tyska-innehallsregister.json) — maskinläsbar arbetslista med `planned` som startstatus.
4. [Om-Spanska-analys.md](Om-Spanska-analys.md) — verifierad lokal förebild och pedagogisk/teknisk analys.
5. [Om-Spanska-till-Om-Tyska-mappning.json](Om-Spanska-till-Om-Tyska-mappning.json) — 62 källämnen kopplade till tyska mål-ID:n.
6. [Om-Tyska-kontrollrapport.md](Om-Tyska-kontrollrapport.md) — kontroll av antalskrav, förkunskapsgraf och paketets konsistens.

**Viktigt om status:** Startprompten ovan är avsedd att beställa genomförandet i ett senare steg. Det nuvarande paketet är analys och planering. Det innehåller inte de 112 färdigskrivna genomgångarna, den färdiga övningsbanken eller den körbara tjänsten.
