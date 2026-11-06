# Om Tyska — Språk & Bildning

Designbeskrivning och riktlinjer för fortsatt utveckling · 6 november 2026

## Idén

**En svensk ingång till det tyska.** Om Tyska får formen av ett öppet bildningsverk: en plats för språk, läsning, tanke och så småningom litteratur, musik och kulturhistoria. Grammatikan är den första stora delen i ett vidare redaktionellt sammanhang.

Den nya startsidans huvudfras är **”Det tyska. I alla dess former.”** Den låter identiteten växa med innehållet. Underraden **”Språk · Bildning · Kultur”** anger den långsiktiga riktningen. De faktiska ingångarna leder fortfarande till den befintliga grammatikan, lärstigen, språkanteckningarna och övningarna.

## Läsning av Design-mappen

Samtliga tretton JPG-bilder i referensmappen har granskats i en kontaktkarta. Några av de tydligaste influenserna:

| Referensfil i Design | Vad som förs vidare |
| --- | --- |
| `270c325835ec21c616c05988b2d4efc2.jpg` | Varm pappersgrund, blå gravyr, stora lugna ytor och ett strikt rutnät med tunna linjer. |
| `ea702a07c05ca20e5ae6ef1450719007.jpg` | Innehållsförteckningen som form: numrerade avsnitt, typografisk hierarki och prickade förbindelser. |
| `1a80e6a7d79f6351ff7077dc58b8a740.jpg` | Boktryck, marginalanteckningar och ett redaktionellt snarare än dekorativt användande av linjer. |
| `0dfdfd58c75680b07ae8f195246c7f26.jpg` | Kombinationen av förklarande struktur, typografi och precisa små etiketter. |
| `18b74452111a4d6c96966d2505a2dc6b.jpg` | Koboltblått som stark sammanhållande accent och tydliga fält med inverterad text. |
| `4fc93d0fca699df76b4e552656291fe1.jpg`, `bd3cead165b8a9c7b145d433e9fbd4d8.jpg` och `b8d5311f3252c8ed0d03f99302dbe01f.jpg` | Den klassiska skulpturen, materialen och den museala objektkänslan. |
| Övriga rutnäts- och tekniska referenser | Ordnade informationsytor, hårfina avdelare, tydlig navigering och en konsekvent detaljskala. |

Bildmappens kombination av klassiska motiv och exakt grafisk konstruktion blir utgångspunkt för en modern, humanistisk bokkänsla. Renässansprägeln kommer genom gravyr, seriftypografi och sidans proportioner. Den romantiska naturtonen får ett första uttryck i ekkvisten och den stillsamma bildvärlden.

## Palett

| Funktion | Värde | Användning |
| --- | --- | --- |
| Papper | `#F5F1E7` | Gemensam grund på startsida, lässidor och navigation. |
| Koboltblått | `#2544B8` | Ordmärke, huvudrubriker, länkar, knappar och större färgfält. |
| Mörk kobolt | `#182D88` | Hover och mörkare accent. |
| Text | `#252D3B` | Löptext och gränssnitt där blått inte ska dominera. |
| Dämpad text | `#5D645E` | Beskrivningar, sekundära etiketter och mindre information. |
| Pappersskugga | `#ECE8DC` | Faktarutor och lätt markerade ytor. |
| Linje | `#B9C1CF` | Avdelare, tabeller och bokliknande struktur. |

Grammatikens pedagogiska kasus- och satsdelsfärger behålls som ett separat betydelsebärande system. Textetiketterna ska alltid bära samma information som färgerna.

## Typografi och sidrytm

**Georgia** ger huvudrubriker och lästext en tydlig bokkaraktär. Kursiv används i huvudfraser och redaktionella betoningar. **Helvetica Neue/Arial** håller gränssnitt, knappar och tabeller funktionella. **Courier New** används sparsamt för små kapitelnummer och referensetiketter. Systemtypsnitten gör grundformen oberoende av externa fontanrop.

Startsidan använder stora rubriker, gott om papper, få tydliga linjer och en synlig innehållsförteckning. Lässidorna har en lugnare rytm med seriftext, tydliga avsnitt, tabellrubriker och separata förkunskaps-/övningsrutor. Små tekniska etiketter ska förbli sekundära; själva läsningen och de centrala handlingarna får inte krympa till dekorativ mikrografik.

Knappar och kort har raka eller mycket svagt rundade hörn. Skuggor spelar liten roll. Struktur, avstånd och tryckfärg skapar hierarkin.

## Märke och illustration

Ordmärket är **Om Tyska.**, tillsammans med ett enkelt radiellt press-/kompassliknande emblem. Emblemet fungerar även som favicon. Kombinationen kan växa till bokrygg, avsnittssigill och små redaktionella märken.

Startsidan har en ny illustration: en klassisk byst med drapering, öppen bok och ekkvist, i blå gravyrstil. Figuren är ett genererat bildningsmotiv, inte ett porträtt som tillskrivs en historisk tysk person.

Illustrationen skapades med det inbyggda ImageGen-verktyget, med två av användarens bilder som stil- och motivreferens. Den sparade originalbilden har kopierats till projektet som en WebP för användning på webben. Referensbilderna har inte publicerats som webbplatsens egna skärmbilder eller layout.

**Slutlig bildfil i projektet:** `/Users/oscarpagerup/Desktop/Git Repo/Om-Tyska/public/brand/bildning-gravyr.webp`.

**Emblem/favikon:** `/Users/oscarpagerup/Desktop/Git Repo/Om-Tyska/public/brand/mark.svg` samt komponenten `components/BrandEmblem.tsx`.

### Slutlig bildprompt

> Create a refined editorial engraving illustration for a Swedish website about the German language, German culture and humanistic Bildung. Reference image 1 is composition/style only: take its precise cobalt-blue copperplate engraving on warm blank paper and classical scholarly atmosphere, not its website layout. Reference image 2 is subject/mood only: classical sculptural head, wavy hair, thoughtful profile. New original composition: a sculptural classical poet/scholar bust seen in three-quarter profile looking LEFT, on a short stone plinth, framed subtly by oak leaves at lower right and a small open book at base. Upper torso clad in classical drapery, calm dignified face. Engraving fine crosshatched lines like Renaissance copperplate or antique German book frontispiece. One single deep cobalt blue ink (#203bb5) with fine light blue line modulation. Plain uniform warm ivory background (#f3efe4), enormous negative space not necessary because this will be cropped into a web layout. Portrait composition aspect 4:5, complete bust and plinth visible. No text, no lettering, no borders, no diagram, no website mockup, no gradient, no photorealistic 3D render, no heraldic/political symbols. Restrained highly crafted library print.

## Vad som byggts i den befintliga tjänsten

- Ny startsida med bredare identitet, illustrerad öppning, tre vägar in, innehållsförteckning, språkfrågor och övningsavdelning.
- Nytt ordmärke, emblem och favicon.
- Ny gemensam palett och typografisk grund.
- Omarbetad huvudmeny, mobilmeny, sidfot och läslägeskontroll.
- Anpassad läsform på grammatiksidorna, ämnesmenyn och grammatiköversikten.
- Tangentbordsgenväg till sökning och stängning av menyer med Escape, tillsammans med bevarad sökfunktion.
- En felaktig jämförelselänk i grammatiköversikten och Mer-länken i sidfoten leder nu till befintliga ingångar.

De centrala filerna är `app/page.tsx`, `app/page.module.css`, `app/globals.css`, `app/layout.tsx`, `site.config.ts`, navigerings-/sidfotskomponenterna samt lässidornas och grammatiköversiktens CSS. Undervisningstexter och övningsdata har inte skrivits om som del av rebranden.

## Nästa steg: kultur med samma identitet

Kulturinnehållet skrivs senare. Följande är designriktlinjer för den kommande utbyggnaden:

**Verkutdrag:** använd en egen titelplåt med verkets namn, författare, utgåva och eventuell översättare. Läsningen ska få en lugn textspalt. Tyska original och svenska kommentarer behöver tydligt skilda textroller. Noter kan ligga i marginalen på bred skärm och under texten på mobil. Bibliografisk proveniens och rättigheter ska framgå när materialet publiceras.

**Essä och recension:** en stor serifrubrik, kort ingress, redaktionell byline och ett sammanhållet bildmotiv. Använd verk-/personmetadata som saklig kontext. Långa texter ska återanvända samma avsnitt, innehållsförteckning och läsrytm som grammatikan.

**Musik och idéhistoria:** bygg objektplåtar för verk, kompositör, epok och källmaterial. Bild- och ljudmaterial ska ha egna bildtexter, krediter och kontroller för användaren. En framtida musiksida ska inte starta ljud automatiskt.

**Kulturbibliotek:** låt titlar, verk och teman bilda ett redaktionellt register med numrering och tunna linjer. Lägg till kultur som egen navigeringsingång när det finns verkligt innehåll att läsa. Grammatikan fortsätter att vara direkt åtkomlig.

För Goethe, Werther, Wagner och andra kommande ämnen kan nya bildplåtar, boktitelmotiv, naturgravyrer och historiska objekt utvecklas inom samma palett. Använd verkliga porträtt med korrekt attribution när en bestämd person avbildas. Det befintliga generella bystmotivet ska inte ges en sådan identitet i efterhand.

## Mobil och rörelse

Vid smal skärm staplas inledning och gravyr, innehållsförteckningen blir en spalt och de tre vägarna in blir vertikala rader. Mobilmenyn kan öppnas och stängas separat från sökning. Tabeller får rulla i sin egen behållare så att textspalten inte blir bredare än skärmen.

Hover är ett komplement. Viktiga handlingar ska fungera med tryck och tangentbord. Rörelsen är återhållsam och respekterar användarens inställning för reducerad rörelse.
