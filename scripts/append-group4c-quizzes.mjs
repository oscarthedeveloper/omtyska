import fs from 'node:fs';
import path from 'node:path';

const quizzes = {
  '/docs/fordjupning/syntax/subjektlosa-satser-och-olika-es': {
    lessonId: 'X047',
    href: '/docs/fordjupning/syntax/subjektlosa-satser-och-olika-es',
    title: 'Snabbkoll: Subjektlösa satser och olika es',
    questions: [
      {
        id: 'x047-q1',
        context: 'Radering av förfälts-es vid omflyttning.',
        prompt: 'Vad händer med ordet "es" i passivsatsen "Es wird heute getanzt", när tidsadverbialet "heute" flyttas till plats 1?',
        options: [
          'Det raderas spårlöst: "Heute wird getanzt."',
          'Det måste behållas: *"Heute wird es getanzt."',
          'Det förvandlas till ett personligt pronomen i dativ.',
          'Det flyttas till slutet efter verbet.'
        ],
        answer: 0,
        explanation: 'Ett förfälts-es (Vorfeld-es) fungerar enbart som en platshållare i förfältet. Så fort ett annat led tar plats 1 raderas es obligatoriskt: "Heute wird getanzt".',
        feedback: [
          'Helt rätt! Platshållar-es försvinner spårlöst så fort förfältet är fyllt.',
          'Fel. Att behålla es i mittfältet (*Heute wird es getanzt) är ett mycket vanligt skandinaviskt fel.',
          'Fel. Det ändrar inte kasus eller funktion.',
          'Fel. Det kan inte flyttas till efterfältet.'
        ]
      },
      {
        id: 'x047-q2',
        context: 'Kvasi-argumentiskt väder-es.',
        prompt: 'Varför kan ordet "es" INTE raderas ur meningen "Gestern hat es den ganzen Tag geregnet"?',
        options: [
          'Eftersom väder-es är ett obligatoriskt kvasi-argument som krävs av verbets lexikala valens.',
          'Eftersom gestern slutar på bokstaven n.',
          'Eftersom geregnet är ett svagt verb.',
          'Det går alldeles utmärkt att stryka es här.'
        ],
        answer: 0,
        explanation: 'Meteorologiska verb (regnen, schneien, donnern) har es som ett fast syntaktiskt argument som ALDRIG kan raderas, oavsett ordföljd.',
        feedback: [
          'Korrekt! Väder-es är ett obligatoriskt syntaktiskt argument.',
          'Fel. Bokstavsändelser påverkar inte syntaxen.',
          'Fel. Böjningstypen är irrelevant här.',
          'Fel. *Gestern hat den ganzen Tag geregnet är helt ogrammatiskt.'
        ]
      },
      {
        id: 'x047-q3',
        context: 'Genuint subjektlösa satser vid upplevelser.',
        prompt: 'Vilken mening representerar en genuint subjektlös sats i modern tyska?',
        options: [
          'Mir ist schwindlig. (dativkomplement utan grammatiskt subjekt).',
          'Ich bin müde.',
          'Er liest das Buch.',
          'Das Wetter ist schön.'
        ],
        answer: 0,
        explanation: '"Mir ist schwindlig" är en klassisk subjektlös upplevelsesats där upplevaren står i dativ och satsen helt saknar nominativsubjekt.',
        feedback: [
          'Helt rätt! Satsen saknar grammatiskt subjekt och verbet steht i opersonlig 3:e person singular.',
          'Fel. Ich är subjekt.',
          'Fel. Er är subjekt.',
          'Fel. Das Wetter är subjekt.'
        ]
      },
      {
        id: 'x047-q4',
        context: 'Korrelat-es framför dass-satser.',
        prompt: 'Vad är funktionen hos ordet "es" i satsen "Ich bedaure es sehr, dass du nicht kommen kannst"?',
        options: [
          'Det är ett korrelat (katoforisk platshållare) som förebådar den efterföljande dass-satsen.',
          'Det är ett anaforiskt pronomen som syftar på gårdagen.',
          'Det är ett förfälts-es.',
          'Det är ett reflexivt pronomen.'
        ],
        answer: 0,
        explanation: 'Korrelat-es står i mittfältet och representerar den underordnade satsen som följer i efterfältet.',
        feedback: [
          'Korrekt! Korrelat-es förebådar dass-satsen i efterfältet.',
          'Fel. Det syftar inte bakåt utan framåt på bisatsen.',
          'Fel. Det står i mittfältet, inte förfältet.',
          'Fel. Reflexivpronomen i 1:a person är mich/mir.'
        ]
      },
      {
        id: 'x047-q5',
        context: 'Subjektlöst passiv med dativ.',
        prompt: 'Hur ser den korrekta passivsatsen ut för "Man half den verletzten Personen sofort"?',
        options: [
          'Den verletzten Personen wurde sofort geholfen. (subjektlöst med bevarad dativ).',
          '*Den verletzten Personen wurden sofort geholfen.',
          '*Die verletzten Personen wurden geholfen.',
          '*Es wurden den verletzten Personen geholfen.'
        ],
        answer: 0,
        explanation: 'Dativobjektet förblir i dativ och kan inte bli subjekt; verbet står i opersonlig singularis (wurde): "Den verletzten Personen wurde sofort geholfen".',
        feedback: [
          'Helt rätt! Dativkomplement i förfältet + singularis wurde.',
          'Fel. Pluralformen wurden är felaktig eftersom satsen saknar nominativsubjekt.',
          'Fel. Dativ får aldrig göras till nominativsubjekt i Vorgangspassiv.',
          'Fel. Es raderas och plural wurden är felaktig.'
        ]
      },
      {
        id: 'x047-q6',
        context: 'Svensk interferens vid "frysa".',
        prompt: 'Hur översätts den svenska meningen "Jag fryser" korrekt med tyskans subjektlösa ackusativkonstruktion?',
        options: [
          'Mich friert. (eller: Mir ist kalt).',
          '*Ich friere mich.',
          '*Es friert mich nicht aber ich.',
          '*Mir friert das Wetter.'
        ],
        answer: 0,
        explanation: 'Fysiologiska köldupplevelser uttrycks traditionellt subjektlöst med ackusativ (Mich friert) eller dativ (Mir ist kalt).',
        feedback: [
          'Korrekt! Mich friert / Mir ist kalt är klassiska idiomatiska uttryck.',
          'Fel. Frieren är inte ett reflexivt verb.',
          'Fel. Helt förvrängd ordföljd.',
          'Fel. Ogrammatisk blandning.'
        ]
      }
    ]
  },
  '/docs/fordjupning/syntax/kongruensens-gransfall': {
    lessonId: 'X048',
    href: '/docs/fordjupning/syntax/kongruensens-gransfall',
    title: 'Snabbkoll: Kongruensens gränsfall',
    questions: [
      {
        id: 'x048-q1',
        context: 'Kollektiva substantiv och formell kongruens.',
        prompt: 'Vilket verbformeringsval är korrekt i meningen "Die Polizei [...] den flüchtigen Täter"?',
        options: [
          'sucht (singularis, eftersom Polizei är ett grammatiskt singularsubstantiv).',
          '*suchen (pluralis, eftersom polisen består av flera poliser).',
          '*suchten sein (förvrängd form).',
          '*haben gesucht (plural).'
        ],
        answer: 0,
        explanation: 'Tyskan kräver strikt formell grammatisk kongruens: kollektiva singularsubstantiv som Polizei, Familie, Team och Regierung fordrar alltid verbet i singularis.',
        feedback: [
          'Helt rätt! "Die Polizei sucht" – strikt singularis är ett krav i tysk grammatik.',
          'Fel. Att använda plural efter kollektiver är en engelsk/svensk interferens.',
          'Fel. Ogrammatisk form.',
          'Fel. Hjälpverbet måste stå i singularis (hat gesucht).'
        ]
      },
      {
        id: 'x048-q2',
        context: 'Disjunktiv samordning och närhetsprincipen.',
        prompt: 'Hur böjs verbet i satsen "Weder der Lehrer noch die Schüler [...] Bescheid"?',
        options: [
          'wussten (pluralis, eftersom "die Schüler" står närmast verbet).',
          'wusste (singularis).',
          'wisse (konjunktiv I).',
          'wüsste (konjunktiv II utan orsak).'
        ],
        answer: 0,
        explanation: 'Vid disjunktiv samordning med weder ... noch gäller närhetsprincipen: verbet kongruerar med det subjekt som står omedelbart närmast verbet (die Schüler -> wussten).',
        feedback: [
          'Korrekt! Närhetsprincipen styr kongruensen med die Schüler.',
          'Fel. Wusste skulle krävas om der Lehrer stod närmast verbet.',
          'Fel. Konjunktiv behövs inte i enkelt påstående.',
          'Fel. Hypotetisk form passar inte här.'
        ]
      },
      {
        id: 'x048-q3',
        context: 'Samordnade subjekt med personhierarki.',
        prompt: 'Vilken verbform krävs i meningen "Du und ich [...] morgen nach Berlin"?',
        options: [
          'fahren (1:a person plural, eftersom "du und ich" motsvarar "wir").',
          '*fährst (2:a person singular efter du).',
          '*fahre (1:a person singular efter ich).',
          '*fahrt (2:a person plural efter ihr).'
        ],
        answer: 0,
        explanation: 'Samordnade subjekt med olika personer följer hierarkin 1 > 2 > 3: du och jag = vi (wir), vilket kräver 1:a person plural (fahren).',
        feedback: [
          'Helt rätt! Du und ich = wir fahren.',
          'Fel. Man kan inte böja verbet enbart efter du.',
          'Fel. Man kan inte böja verbet enbart efter ich.',
          'Fel. Fahrt används för "du und er" (= ihr), inte "du und ich".'
        ]
      },
      {
        id: 'x048-q4',
        context: 'Kvantitetsfraser i singularis.',
        prompt: 'Hur lyder den rekommenderade skriftnormen för meningen "Ein Großteil der Beschäftigten [...] an dem Streik teil"?',
        options: [
          'nahm (singularis, i formell kongruens med "ein Großteil").',
          'nahmen (pluralis, tolereras men är mindre formellt).',
          'genommen haben (infinitiv).',
          'nehmt (2:a person plural).'
        ],
        answer: 0,
        explanation: 'I vårdad tysk sakprosa kongruerar verbet med huvudordet ein Großteil i singularis: nahm.',
        feedback: [
          'Korrekt! Formell kongruens med ein Großteil kräver singularis.',
          'Fel. Pluralformen nahmen förekommer visserligen i journalistik men singularis är den strikta rekommenderade normen.',
          'Fel. Finit verb krävs.',
          'Fel. Felaktig personform.'
        ]
      },
      {
        id: 'x048-q5',
        context: 'Boktitlar och verk i plural.',
        prompt: 'Hur böjs verbet i satsen "Goethes Die Leiden des jungen Werthers [...] ein Welterfolg"?',
        options: [
          'war / ist (singularis, eftersom titeln syftar på ett enskilt litterärt verk).',
          '*waren / sind (pluralis på grund av ordet Leiden).',
          '*worden sein.',
          '*gewesen sind.'
        ],
        answer: 0,
        explanation: 'När ett subjekt är en boktitel eller ett konstverk i plural refererar det semantiskt och pragmatiskt till en enhet, vilket styr singularis: war ein Welterfolg.',
        feedback: [
          'Helt rätt! Romanen är en enskild bok, därför singularis.',
          'Fel. Att böja efter Leiden i titeln är ett felaktigt mekaniskt synsätt.',
          'Fel. Förvrängd tempusform.',
          'Fel. Pluralformen är felaktig.'
        ]
      },
      {
        id: 'x048-q6',
        context: 'Fasta formelpar som enhet.',
        prompt: 'Varför står verbet i singular i uttrycket "Kuddelmuddel und Chaos herrschte überall"?',
        options: [
          'Eftersom de två samordnade substantiven uppfattas som en sammanhållen begreppsmässig helhet.',
          'Eftersom Chaos är ett låneord från grekiskan.',
          'Eftersom herrschte är ett modalt hjälpverb.',
          'Det är ett tryckfel i alla tyska ordböcker.'
        ],
        answer: 0,
        explanation: 'Fasta formler och begreppsmässiga enheter (Brot und Butter, Kuddelmuddel und Chaos) styr ofta singular verb.',
        feedback: [
          'Korrekt! Samordnade substantiv som bildar en enhetlig massa tar regelbundet singularis.',
          'Fel. Etymologin har ingen inverkan på kongruensen här.',
          'Fel. Herrschen är ett vanligt fullverb.',
          'Fel. Detta är ett fullständigt erkänt fenomen i Duden Band 4.'
        ]
      }
    ]
  },
  '/docs/fordjupning/syntax/koordination-pa-flera-nivaer': {
    lessonId: 'X049',
    href: '/docs/fordjupning/syntax/koordination-pa-flera-nivaer',
    title: 'Snabbkoll: Koordination på flera nivåer',
    questions: [
      {
        id: 'x049-q1',
        context: 'Dubbelkonjunktionen weder ... noch.',
        prompt: 'Vilket alternativ är grammatiskt korrekt i meningen "Er trinkt [...] Alkohol"?',
        options: [
          'weder Kaffee noch (utan något ord för nicht).',
          '*nicht weder Kaffee noch.',
          '*nicht Kaffee weder noch.',
          '*weder Kaffee noch nicht.'
        ],
        answer: 0,
        explanation: 'weder ... noch är i sig fullständigt negativt och tillåter ALDRIG något extra ord för inte (nicht).',
        feedback: [
          'Helt rätt! "Er trinkt weder Kaffee noch Alkohol" – ingen dubbelnegation!',
          'Fel. *Nicht weder är en allvarlig skandinavism.',
          'Fel. Ogrammatisk ordföljd.',
          'Fel. Nicht får inte läggas till.'
        ]
      },
      {
        id: 'x049-q2',
        context: 'Kommatecken vid sowohl ... als auch.',
        prompt: 'Ska man sätta kommatecken i frasen "Er spricht sowohl Deutsch als auch Englisch"?',
        options: [
          'Nej, vid sowohl ... als auch råder strikt kommateckenförbud vid enkla fraser.',
          'Ja, det måste alltid sättas ett komma före als auch.',
          'Ja, men bara om meningen är skriven med versaler.',
          'Kommatecken sätts efter sowohl.'
        ],
        answer: 0,
        explanation: 'I tysk rättskrivning sätts ALDRIG kommatecken mellan leden i sowohl ... als auch när det rör sig om ord- eller fraskoordination.',
        feedback: [
          'Korrekt! Inget kommatecken vid sowohl ... als auch.',
          'Fel. Att sätta komma före als auch är ett klassiskt interpunktionsfel.',
          'Fel. Typografi påverkar inte interpunktion.',
          'Fel. Komma sätts inte efter sowohl.'
        ]
      },
      {
        id: 'x049-q3',
        context: 'Asymmetrisk koordination (SLF).',
        prompt: 'Vad kännetecknar SLF-koordinationen i meningen "Gestern kam der Mann nach Hause und las die Zeitung"?',
        options: [
          'Subjektet "der Mann" i första satsens mittfält delas med andra satsen trots att första satsen har inversion och andra satsen saknar uttalat subjekt.',
          'Meningen är ogrammatisk eftersom andra satsen saknar subjekt.',
          'Verbet las är ett partikelverb.',
          'Ordet und fungerar som en subjunktion som kräver verbet sist.'
        ],
        answer: 0,
        explanation: 'SLF-koordination (Subjektlücke in finiten Sätzen) innebär att ett subjekt delas mellan en sats med inversion och en sats med verb i början.',
        feedback: [
          'Helt rätt! SLF-koordination är fullt etablerad och frekvent i tysk syntax.',
          'Fel. Meningen är fullständigt grammatisk och idiomatisk.',
          'Fel. Lesen är ett starkt grundverb.',
          'Fel. Und är en samordnande konjunktion.'
        ]
      },
      {
        id: 'x049-q4',
        context: 'Obligatoriskt komma före sondern.',
        prompt: 'Vilken interpunktionsregel gäller i konstruktionen "nicht nur ..., sondern auch ..."?',
        options: [
          'Ett kommatecken före sondern är ALLTID obligatoriskt.',
          'Kommatecken är förbjudet.',
          'Kommatecken sätts bara om verbet är oregelbundet.',
          'Ett semikolon måste alltid användas.'
        ],
        answer: 0,
        explanation: 'Före den adversativa konjunktionen sondern är kommatecknet strikt obligatoriskt i tysk rättskrivning.',
        feedback: [
          'Korrekt! Kommatecken före sondern är obligatoriskt.',
          'Fel. Kommatecken är tvärtom tvingande.',
          'Fel. Verbböjning har ingenting med interpunktion att göra.',
          'Fel. Semikolon krävs inte.'
        ]
      },
      {
        id: 'x049-q5',
        context: 'Morfemkoordination med bindestreck.',
        prompt: 'Hur skrivs samordningen av "Einfuhr" och "Ausfuhr" korrekt på tysk morfemnivå?',
        options: [
          'Ein- und Ausfuhr (med bindestreck efter det första samordnade förledet).',
          '*Ein und Ausfuhr (utan bindestreck).',
          '*Ein/Ausfuhr (med snedstreck).',
          '*Einausfuhr.'
        ],
        answer: 0,
        explanation: 'När ett gemensamt efterled samordnas med två förled sätts ett bindestreck (Ergänzungsstrich) efter det första förledet: Ein- und Ausfuhr.',
        feedback: [
          'Helt rätt! Ergänzungsstrich är standardiserat: Ein- und Ausfuhr.',
          'Fel. Bindestrecket är obligatoriskt för att visa att fuhr är utelämnat.',
          'Fel. Snedstreck används inte på detta sätt i löpande text.',
          'Fel. Sammanskrivning förvanskar orden.'
        ]
      },
      {
        id: 'x049-q6',
        context: 'Inversion vid konjunktionaladverb.',
        prompt: 'Vilken ordföljd krävs efter konjunktionaladverbet "einerseits" i satsens förfält?',
        options: [
          'Omvänd ordföljd (inversion): Einerseits verstehe ich seine Sorgen... (verbet på plats 2).',
          'Rak ordföljd: *Einerseits ich verstehe seine Sorgen...',
          'Verb i slutet som i en bisats.',
          'Obligatoriskt förfälts-es framför verbet.'
        ],
        answer: 0,
        explanation: 'Einerseits är ett konjunktionaladverb som intar Vorfeld (position 1) och därmed framtvingar omedelbar inversion av verbet på position 2: Einerseits verstehe ich.',
        feedback: [
          'Korrekt! Einerseits verstehe ich – konjunktionaladverb ger inversion.',
          'Fel. Rak ordföljd är ett typiskt svenskt interferensfel (*Einerseits ich verstehe).',
          'Fel. Einerseits bildar inte bisats.',
          'Fel. Inget es behövs.'
        ]
      }
    ]
  },
  '/docs/fordjupning/syntax/ellips-gapping-och-gemensamma-satsled': {
    lessonId: 'X050',
    href: '/docs/fordjupning/syntax/ellips-gapping-och-gemensamma-satsled',
    title: 'Snabbkoll: Ellips, gapping och gemensamma satsled',
    questions: [
      {
        id: 'x050-q1',
        context: 'Definition av gapping.',
        prompt: 'Vad kallas fenomenet i meningen "Peter kauft Äpfel und Maria Birnen", där verbet "kauft" utelämnas i det andra ledet?',
        options: [
          'Gapping (verbellips i samordnade satser).',
          'Högernoddelning (Right Node Raising).',
          'Zeugma.',
          'Scrambling.'
        ],
        answer: 0,
        explanation: 'Gapping innebär att ett finit verb i mitten av en samordnad sats utelämnas när det kan rekonstrueras ur första ledet.',
        feedback: [
          'Helt rätt! Gapping är den vedertagna lingvistiska termen för denna verbellips.',
          'Fel. Högernoddelning rör delning av element i slutet av båda satserna.',
          'Fel. Zeugma är en felaktig eller humoristisk sammankoppling.',
          'Fel. Scrambling är omordning inom mittfältet.'
        ]
      },
      {
        id: 'x050-q2',
        context: 'Högernoddelning (RNR) och kasuskompatibilitet.',
        prompt: 'Varför är satsen *"Er half und sie unterstützte den verletzten Mann" ogrammatisk på tyska?',
        options: [
          'Eftersom helfen kräver dativ (dem Mann) medan unterstützen kräver ackusativ (den Mann); kasuskollisionen spärrar delning av objektet.',
          'Eftersom helfen är ett oregelbundet verb.',
          'Eftersom den verletzten Mann är för långt.',
          'Eftersom sie måste stå först.'
        ],
        answer: 0,
        explanation: 'Ett gemensamt efterställt objekt kan endast delas om båda verben styr samma kasus. Helfen kräver dativ och unterstützen ackusativ, vilket omöjliggör högernoddelning.',
        feedback: [
          'Korrekt! Kasuskollision gör högernoddelning omöjlig: Er half dem Mann und unterstützte ihn.',
          'Fel. Verbböjningen i sig är inte problemet, utan kasuskravet.',
          'Fel. Längden har ingen betydelse för den syntaktiska spärren.',
          'Fel. Ordföljden mellan satserna är inte felet.'
        ]
      },
      {
        id: 'x050-q3',
        context: 'Rekonstruerbarhetskravet för ellips.',
        prompt: 'Vad är det grundläggande kravet för att en grammatisk ellips ska vara tillåten i tysk syntax?',
        options: [
          'Det utelämnade elementet måste vara entydigt och utan motsägelse rekonstruerbart ur kontexten.',
          'Meningen måste innehålla minst tre verb.',
          'Ellips får bara förekomma i passiva satser.',
          'Alla utelämnade ord måste ersättas med tankstreck.'
        ],
        answer: 0,
        explanation: 'En ellips är grammatisk endast om lyssnaren/läsaren omedelbart och otvetydigt kan återställa den fullständiga strukturen.',
        feedback: [
          'Helt rätt! Rekonstruerbarhet (Rekonstruierbarkeit) är grundkravet för all grammatisk ellips.',
          'Fel. Antalet verb har ingen betydelse.',
          'Fel. Ellipser förekommer i alla diateser.',
          'Fel. Tankstreck används inte vid vanlig gapping eller samordningsellips.'
        ]
      },
      {
        id: 'x050-q4',
        context: 'Prepositionskollision vid gemensamma komplement.',
        prompt: 'Hur korrigeras det felaktiga uttrycket *"Er protestierte und kämpfte für die Gerechtigkeit"?',
        options: [
          'Er protestierte gegen das Unrecht und kämpfte für die Gerechtigkeit. (Båda prepositionerna måste uttryckas eftersom protestieren styr gegen).',
          'Er protestierte für die Gerechtigkeit.',
          'Er kämpfte gegen für die Gerechtigkeit.',
          'Meningen är redan helt felfri.'
        ],
        answer: 0,
        explanation: 'Protestieren styr prepositionen gegen och kämpfen styr für; man kan inte stryka gegen eftersom protestieren für inte existerar i denna betydelse.',
        feedback: [
          'Korrekt! Båda prepositionerna och deras respektive argument måste skrivas ut.',
          'Fel. Man kan inte säga *protestieren für.',
          'Fel. Dubbla prepositioner i rad är ogrammatiskt här.',
          'Fel. Meningen innehåller en allvarlig prepositionskollision.'
        ]
      },
      {
        id: 'x050-q5',
        context: 'Förfältsellips i vardagsspråk.',
        prompt: 'Vilken mening innehåller en typisk talspråklig förfältsellips (Vorfeldellipse)?',
        options: [
          'Habe heute leider keine Zeit. (Subjektet Ich har utelämnats i förfältet).',
          'Er liest ein Buch.',
          'Gestern ging er nach Hause.',
          'Dass er kommt, freut mich.'
        ],
        answer: 0,
        explanation: 'I ledig tysk dialog kan förfältet utelämnas helt när subjektet är uppenbart: "[Ich] Habe heute leider keine Zeit".',
        feedback: [
          'Helt rätt! Typisk tysk Vorfeldellipse i vardagskommunikation.',
          'Fel. Här finns ett fullt uttalat subjekt Er.',
          'Fel. Här är förfältet Gestern fullt uttalat.',
          'Fel. Hela dass-satsen står i förfältet.'
        ]
      },
      {
        id: 'x050-q6',
        context: 'Stilistiskt felaktigt Zeugma.',
        prompt: 'Vad innebär ett zeugma i tysk stilistik?',
        options: [
          'Att ett verb samordnas med två objekt men endast passar semantiskt eller idiomatiskt till det ena.',
          'Att två prepositioner sätts i följd.',
          'Att ett substantiv saknar artikel.',
          'Att en mening avslutas med frågetecken i stället för punkt.'
        ],
        answer: 0,
        explanation: 'Ett zeugma uppstår när ett ord kopplas till två andra led i olika betydelser ("Er nahm den Hut und Abschied" eller "Er schlug die Scheibe und den Weg ein").',
        feedback: [
          'Korrekt! Ett zeugma förbinder två semantiskt inkompatibla betydelser till samma verb.',
          'Fel. Detta rör prepositionssyntax.',
          'Fel. Detta rör nollartikel.',
          'Fel. Detta är interpunktion.'
        ]
      }
    ]
  }
};

const filePath = path.join(process.cwd(), 'data', 'learning-quizzes.ts');
let content = fs.readFileSync(filePath, 'utf8');

for (const [key, quizData] of Object.entries(quizzes)) {
  if (content.includes(`'${key}': {`) || content.includes(`"${key}": {`)) {
    console.log(`Quiz for ${key} already exists, skipping...`);
    continue;
  }
  const formattedQuiz = `  '${key}': ${JSON.stringify(quizData, null, 2).replace(/\n/g, '\n  ')},\n`;
  const insertIndex = content.lastIndexOf('};');
  if (insertIndex !== -1) {
    content = content.slice(0, insertIndex) + formattedQuiz + content.slice(insertIndex);
    console.log(`Appended quiz for ${key}`);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Finished updating learning-quizzes.ts with Group 4C quizzes.');
