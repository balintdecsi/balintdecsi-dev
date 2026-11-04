import { gigText, type GigText } from "@/content/freelance";
import type { Locale } from "@/lib/locale";

/**
 * Translated gig copy for the freelance page. Each array follows the English
 * source in src/content/freelance.ts index by index (gigs, packages, feature
 * rows, extras, FAQ …); links, prices and package names are shared from there.
 */
const hu: GigText[] = [
  {
    title: "BigQuery adat-pipeline-ok Airflow-val és dbt-vel, Google Cloudon",
    short: "Adat-pipeline-ok Google Cloudon",
    pitch:
      "Éles üzemre kész BigQuery pipeline-ok, amelyekben az elemzőid megbízhatnak, anélkül hogy teljes munkaidős adatcsapatot kellene felvenned. Öt évig dolgoztam távközlési adatplatformokon: a Vodafone Magyarország elemzési rendszereinek Google Cloudra költöztetésén, valamint a Deutsche Telekom GCP-n futó, szuverén Apache Iceberg lakehouse-án. Mindkettőről nyilvános Google Cloud-esettanulmány készült.",
    packages: [
      "1 forrás betöltése BigQuerybe, tesztelt dbt-modell, napi ütemezés és rövid átadási leírás",
      "Legfeljebb 3 forrás, Airflow DAG-ok, tesztelt dbt-modellek stagingtől data martokig, riasztás, dokumentáció",
      "Legfeljebb 6 forrás, lakehouse BigQueryben és GCS-en vagy Icebergben, CI/CD, adatminőség, költségoptimalizálás",
    ],
    features: [
      "Táblák / modellek",
      "Forráskód",
      "Adatforrások bekötése",
      "API-integráció",
      "Formázás és adattisztítás",
      "Dokumentáció",
      "Adatminőség-ellenőrzés",
      "Unit tesztek",
      "Ütemező beállítása",
    ],
    extras: [
      "Expressz teljesítés",
      "További adatforrás",
      "További tábla vagy modell",
      "Looker Studio dashboard",
      "Terraform a beállításhoz",
      "Plusz javítási kör",
    ],
    build: [
      "Adatbetöltés API-kból, adatbázisokból, fájlokból, GA4-ből, hirdetési fiókokból és SaaS-eszközökből BigQuerybe",
      "Ütemezés Apache Airflow-val vagy Cloud Composerrel",
      "dbt-modellek (staging, intermediate, mart) tesztekkel és dokumentációval",
      "Rétegzett (medallion) és lakehouse-felépítés GCS-en, BigQueryben és Icebergben",
      "Adatminőség-ellenőrzés, riasztások és CI/CD (GitLab vagy GitHub)",
      "Költségoptimalizálás: particionálás, klaszterezés, lekérdezés-optimalizálás",
    ],
    steps: [
      "Megosztod a céljaidat, az adatforrásokat és a hozzáférést a saját GCP-projektedhez.",
      "Egy egyszerű architektúraábrával rögzítem a feladatot.",
      "A saját Git-tárolódban építem, tesztelem és dokumentálom a megoldást.",
      "Átadó megbeszélés és írásos üzemeltetési leírás.",
    ],
    note: "Minden kód a tiéd. GDPR-tudatos, EU-s működés, igény szerint titoktartási szerződéssel. Kérlek, rendelés előtt írj nekem, hogy pontosíthassuk az adatforrásokat és a feladatot.",
    metadata: ["Szakterület", "Technológia"],
    faq: [
      {
        q: "Mit kell biztosítanom?",
        a: "Egy GCP-projektet beállított számlázással, IAM-hozzáférést nekem, hozzáférési adatokat minden forráshoz, és egy rövid leírást arról, milyen kérdésekre kell választ adniuk az adatoknak.",
      },
      {
        q: "Ki fizeti a Google Cloud költségeit?",
        a: "Te, a saját projektedben. Alacsony költségre tervezek (particionálás, inkrementális modellek), és átadáskor megbecsülöm a havi költséget.",
      },
      {
        q: "Megkapom a kódot?",
        a: "Igen. Minden a saját Git-tárolódban lesz: a pipeline-ok, a dbt-projekt, a dokumentáció és az üzemeltetési leírás.",
      },
      {
        q: "Snowflake, Databricks vagy DuckDB is szóba jöhet?",
        a: "Igen, de a Google Cloud a szakterületem. Írd meg, milyen eszközökkel dolgozol, és még rendelés előtt visszajelzek.",
      },
      {
        q: "Hogyan kezeled az érzékeny adatokat?",
        a: "Csak a szükséges minimális jogosultságokkal dolgozom, nem másolok adatot a projekteden kívülre, és igény szerint titoktartási szerződést kötünk. Az EU-ban működöm, és megszoktam a GDPR hatálya alá eső távközlési adatokat.",
      },
      {
        q: "Mi számít javítási körnek?",
        a: "Az egyeztetett feladaton belüli módosítások. Az új források és modellek extrának számítanak, vagy egyedi ajánlatba kerülnek.",
      },
      {
        q: "Csak a mostani rendszerem átvilágítására van szükségem.",
        a: "Írj nekem: egyedi ajánlatként 3 napos architektúra-, költség- és megbízhatósági átvilágítást vállalok, fontossági sorrendbe állított fejlesztési tervvel.",
      },
    ],
    requirements: [
      "Milyen üzleti kérdéseket vagy riportokat kell támogatniuk az adatoknak?",
      "Az adatforrásaid: típus, hozzávetőleges mennyiség és hozzáférési mód (API, adatbázis, fájlok).",
      "Kész van már a GCP-projekted, tudsz IAM-hozzáférést adni, és melyik régiót használod?",
      "Milyen eszközök vannak már használatban (Airflow, dbt, Looker, Git-szolgáltató)?",
      "Vannak-e személyes vagy érzékeny adatok, határidők vagy megfelelőségi előírások?",
    ],
    related: [
      "Deutsche Telekom-esettanulmány (Google Cloud)",
      "Vodafone Magyarország-esettanulmány (Google Cloud)",
    ],
    coverAlt:
      "Ábra: az API-kból, adatbázisokból, fájlokból, a GA4-ből és SaaS-eszközökből érkező adatok egy adattárház raw, staging és marts rétegébe kerülnek. Mindegyik réteg tesztelt, és az Airflow naponta ütemezi őket. Innen dashboardokba, ML-modellekbe és alkalmazásokba jutnak.",
  },
  {
    title: "Egyedi AI-ügynökök és RAG-alkalmazások a céges adataidon",
    short: "AI-ügynökök és RAG-alkalmazások",
    pitch:
      "AI-ügynök, amely a saját adataidon dolgozik, nem csak egy demó: a dokumentumaidból válaszol, használja az eszközeidet, és élesben is megbízható marad. Egy bécsi, AI-native mérnöki labor társalapítója és CTO-ja vagyok, előtte öt évig dolgoztam adatmérnökként távközlési adatplatformokon. Ezért az ügynökeimet adattermékként építem: tesztelve, naplózva, a költségeket kordában tartva.",
    packages: [
      "Igényfelmérés és működő prototípus: 1 ügynök vagy RAG-alkalmazás a dokumentumaidon vagy 1 adatforráson",
      "Ügynök vagy RAG-alkalmazás, legfeljebb 3 integráció, tesztek, biztonsági korlátok, naplózás és élesítés",
      "Többlépéses vagy hangalapú ügynök, legfeljebb 6 integráció, monitorozás, költség-dashboard és átadás",
    ],
    features: [
      "AI-modell bekötése az alkalmazásodba",
      "Forráskód",
      "Adatbázis-integráció",
      "Részletes kódkommentek",
    ],
    extras: [
      "Expressz teljesítés",
      "További eszköz vagy integráció",
      "További nyelv",
      "Hangalapú csatorna (ElevenLabs)",
      "AI-modell finomhangolása",
      "Plusz javítási kör",
    ],
    build: [
      "RAG-asszisztensek a dokumentumaid, a weboldalad vagy a tudásbázisod alapján",
      "Eszközöket használó ügynökök: CRM, adatbázis, e-mail, Slack, naptárak, API-k",
      "Hangalapú ügynökök (ElevenLabs) időpontfoglaláshoz és ügyfélszolgálathoz",
      "Ügynökök, amelyek biztonságosan kérdeznek le az adattárházadból (BigQuery, Postgres)",
      "Tesztkérdéssorok, biztonsági korlátok, monitorozás és költség-dashboardok",
    ],
    steps: [
      "Meghatározzuk a felhasználási esetet, és hogy milyen a jó válasz.",
      "Elkészítem a prototípust a valódi adataidon.",
      "Megerősítem: tesztek, biztonsági korlátok, élesítés.",
      "Átadás dokumentációval és bemutatóval.",
    ],
    note: "A kód és az API-kulcsok a tiéd. GDPR-tudatos, EU-s működés. Kérlek, rendelés előtt írd meg, mire használnád az ügynököt.",
    metadata: ["AI-motor", "Programozási nyelv"],
    faq: [
      {
        q: "Milyen AI-modelleket használsz?",
        a: "Alapértelmezés szerint Claude, OpenAI, Gemini és Grok; ha az adatoknak a saját infrastruktúrádon kell maradniuk, nyílt súlyú modellek. A felhasználási eset és a költség alapján választok.",
      },
      {
        q: "Ki fizeti az API-használatot?",
        a: "Te, a saját API-kulcsaiddal és fiókjaiddal. Indulás előtt megbecsülöm a havi használati költséget.",
      },
      {
        q: "Mi van, ha az ügynök rossz választ ad?",
        a: "A válaszok a te tartalmadon alapulnak, és egy tesztkérdéssoron ellenőrzöm őket. Ha az ügynök bizonytalan, nem válaszol, és át tudja adni a kérdést egy embernek.",
      },
      {
        q: "Biztonságban vannak az adataim?",
        a: "Az adataid a saját fiókjaidban maradnak. Választható EU-s tárhely, nincs modelltanítás az adataidon, igény szerint titoktartási szerződés.",
      },
      {
        q: "Mire van szükséged az induláshoz?",
        a: "A felhasználási esetre, mintadokumentumokra vagy adathozzáférésre, a bekötendő eszközök listájára, és 10–20 példakérdésre a jó válaszokkal.",
      },
      { q: "Megkapom a forráskódot?", a: "Igen, a saját Git-tárolódban, telepítési útmutatóval." },
      {
        q: "Tovább tudod fejleszteni a meglévő ügynökömet?",
        a: "Igen: átvilágítom, tesztkérdéssort készítek hozzá, és kijavítom a megbízhatósági hibákat. Egyedi ajánlatért írj nekem.",
      },
      {
        q: "Mi számít javítási körnek?",
        a: "Az egyeztetett feladaton belüli módosítások. Az új integrációk és csatornák extrának számítanak.",
      },
    ],
    requirements: [
      "A felhasználási eset, és hogy ki fogja használni az ügynököt.",
      "Milyen adatokat vagy dokumentumokat használjon, és hogyan férek hozzájuk.",
      "Milyen eszközökhöz vagy rendszerekhez kell kapcsolódnia.",
      "Melyik AI-szolgáltatót és tárhelyet szeretnéd (vagy mindegy), és te adod-e az API-kulcsokat.",
      "Milyen nyelveken beszéljen az ügynök.",
      "Esetleges adatvédelmi korlátozások.",
      "10–20 példakérdés az ideális válaszokkal.",
    ],
    related: ["proximata.io", "Az AI-ügynökeim skill-könyvtára a GitHubon"],
    coverAlt:
      "Ábra: a dokumentumaidból, a weboldaladból, a CRM-edből és az adatbázisodból kap adatot egy Claude, GPT vagy Gemini alapú ügynök, amely megtalálja a megfelelő részeket, következtet belőlük, és a naptáradon, az e-maileden, a Slacken és az API-kon keresztül cselekszik. Mellette egy mintaválasz, amely megjelöli a forrását.",
  },
  {
    title: "Térinformatikai elemzés és telephelyválasztás Pythonnal, H3-mal és webes térképekkel",
    short: "Térinformatikai elemzés és telephelyválasztás",
    pitch:
      "Hol érdemes üzletet nyitni, befektetni vagy terjeszkedni? A helyadatokból világos válaszokat készítek: pontozott helyszíneket, magyarázható modelleket és megosztható interaktív térképeket. Egy országos távközlési cég üzleti ügyfeleinek térinformatikai gépi tanulási jellemzőket és hálózattervezési térképeket készítettem. Budapesti albérletár-modellt építettem Uber H3 hexagonrácson, Sentinel-2 műholdas zöldterület- és WorldPop népességadatokkal (9,8% mediánhiba 50 000 hirdetésen).",
    packages: [
      "1 terület, legfeljebb 3 nyílt adatréteg H3 rácson, interaktív térkép, adatfájlok és rövid összefoglaló",
      "Legfeljebb 10 helyszín, 8 helyszíni jellemző, magyarázható pontozás, webes térkép, notebook és prezentáció",
      "Pipeline a saját és nyílt adatokra, előrejelző modell SHAP-magyarázatokkal és élesített webes térkép",
    ],
    features: ["Térképek", "Prezentációs diák"],
    extras: [
      "Expressz teljesítés",
      "További terület vagy város",
      "További adatforrás",
      "Élesítés és tárhely beállítása",
      "Ütemezett adatfrissítés",
      "Ügyfélnek bemutatható prezentáció",
      "Plusz javítási kör",
    ],
    build: [
      "Telephelyválasztás és vonzáskörzet-elemzés (lakosság, versenytársak, POI-k, utazási idő szerinti elérhetőségi zónák)",
      "H3 hexagonrácson számolt helyszíni jellemzők gépi tanuláshoz",
      "Műholdas és nyílt adatok: Sentinel-2, WorldPop, OpenStreetMap, Eurostat",
      "Magyarázható pontozás és előrejelző modellek (XGBoost, SHAP)",
      "Interaktív webes térképek (Leaflet, kepler.gl) automatikus adatfrissítéssel",
      "Ingatlanpiaci helyelemzés: bérleti díj, hozam, környékminőség",
    ],
    steps: [
      "Elmondod, milyen döntést kell meghoznod, melyik területről van szó, és milyen helyszín- vagy ügyféladataid vannak.",
      "Rendelés előtt ellenőrzöm, milyen nyílt adatok érhetők el a területedre.",
      "Reprodukálható kóddal elkészítem a jellemzőket, a pontozást vagy a modellt, és a térképet.",
      "Megkapod a térképet, a notebookokat és az adatfájlokat nyílt formátumban (GeoParquet, GeoJSON, CSV).",
    ],
    note: "EU-s működés. Kérlek, rendelés előtt írj nekem, hogy ellenőrizhessem, milyen adatok érhetők el a területedre.",
    metadata: ["Eszköz"],
    faq: [
      {
        q: "Milyen adatokra van szükségem?",
        a: "A helyszíneidre vagy az ügyféladataidra, ha vannak. A nyílt adatokat én szerzem be: OpenStreetMap, WorldPop, Sentinel-2, Eurostat és nemzeti statisztikák.",
      },
      {
        q: "Milyen területekkel tudsz dolgozni?",
        a: "Bárhol, ahol jók a nyílt adatok; Európában a legerősebb a lefedettség. Rendelés előtt ellenőrzöm, milyen adatok érhetők el a területedre.",
      },
      {
        q: "Megkapom a kódot és az adatokat?",
        a: "Igen: a notebookokat, a szkripteket és az eredményeket GeoParquet, GeoJSON és CSV formátumban.",
      },
      {
        q: "Beágyazható a térkép a weboldalamba?",
        a: "Igen, beágyazható webes térképként, vagy az élesítési extrával a saját felhődben is futhat.",
      },
      {
        q: "Tudod rendszeresen frissíteni az adatokat?",
        a: "Igen, az ütemezett adatfrissítés extrával; a folyamatos üzemeltetés egyedi ajánlattal megoldható.",
      },
      {
        q: "Hogyan kezeled az ügyfelek helyadatait?",
        a: "A saját fiókjaidban maradnak, és csak a projekthez használom őket. EU-s működés, igény szerint titoktartási szerződéssel.",
      },
      {
        q: "Mi számít javítási körnek?",
        a: "Az egyeztetett területen, rétegeken és jellemzőkön belüli módosítások. Az új területek és adatforrások extrának számítanak.",
      },
    ],
    requirements: [
      "Milyen döntést kell támogatnia az elemzésnek (helyszínválasztás, befektetés, terjeszkedés, tervezés)?",
      "Melyik terület vagy területek, és ha vannak, a szóba jöhető helyszínek vagy az ügyfeleid helyszínei.",
      "Milyen adataid vannak (formátum, méret), és mit szerezzek be én.",
      "Kívánt eredmény: riport, interaktív térkép, modell vagy mindhárom; és hogy beágyazzuk-e egy weboldalba.",
      "Határidők és adatvédelmi korlátozások.",
    ],
    related: ["opendrone.space", "Budapesti albérletár-modell (MSc capstone)"],
    coverAlt:
      "Borító: „Térinformatikai elemzés H3 hexagonokon” felirat egy hexagonrács felett, alatta: telephelyválasztás, webes térképek, magyarázható térinformatikai ML, valamint Python, H3, GeoPandas és Leaflet.",
  },
  {
    title: "Egyedi céges weboldalak időpontfoglalással és AI-chatbottal",
    short: "Egyedi céges weboldalak",
    pitch:
      "Gyors, profi weboldal, amely nemcsak jól mutat, hanem dolgozik is: időpontot foglal, e-mailt küld, és ha kell, AI-asszisztenssel válaszol az ügyfeleidnek. Válaszd ki, melyik szintre van szükséged. Launch: gyors, akadálymentes, keresőoptimalizált oldal, egy nap alatt élesítve. Grow: ehhez jön egy háttérrendszer saját időpontfoglaló naptárral, e-mailt küldő kapcsolati űrlappal és szerkeszthető tartalommal. Automate: mindez egy AI-asszisztenssel, amely a tartalmaidból válaszol és időpontot foglal.",
    packages: [
      "Gyors, akadálymentes oldal 3 menüponttal, SEO- és közösségi metaadatokkal, élesítve",
      "Legfeljebb 4 oldal háttérrendszerrel: saját foglalási naptár, e-mailes kapcsolati űrlap, szerkeszthető tartalom",
      "A Grow minden eleme, plusz AI-asszisztens, amely a tartalmaidból válaszol és időpontot foglal",
    ],
    features: [
      "Oldalak",
      "Integrációk (e-mail, naptár, analitika…)",
      "Tartalomfeltöltés",
      "Feliratkozási űrlap",
      "Automatikus visszaigazolás (foglalás és kapcsolatfelvétel)",
      "Sebességoptimalizálás",
      "Tárhely beállítása",
      "Közösségimédia-ikonok",
    ],
    extras: [
      "Expressz teljesítés",
      "További oldal",
      "További nyelv (a szöveget te adod)",
      "GDPR-csomag (adatvédelmi tájékoztató, süti-hozzájárulás)",
      "Stripe-fizetés a foglalásokhoz",
      "Domain és e-mail beállítása (DNS)",
      "Plusz javítási kör",
    ],
    build: [
      "Többnyelvű oldalak: angol, német, magyar, spanyol",
      "Saját időpontfoglaló naptárak, amelyek szinkronizálnak a Google Calendarral vagy a cal.com-mal",
      "Kapcsolati űrlapok e-mailes visszaigazolással és emlékeztetőkkel",
      "Tartalom, amelyet adminfelületen te magad szerkeszthetsz",
      "AI-asszisztensek, amelyek csak a tartalmaidból válaszolnak, és szükség esetén átadják neked a kérdést",
      "Akadálymentesség, sebesség és SEO alapból; EU-s tárhely is választható",
    ],
    steps: [
      "Elküldöd a céljaidat és 2–3 weboldalt, ami tetszik.",
      "Visszaigazolom a csomagot, és hogy mire van szükségem tőled: logó, szövegek, fotók, szolgáltatások.",
      "Elkészítem az oldalt, és megosztok egy előnézetet, amit véleményezhetsz.",
      "Élesítem az oldalt, és átadom a Git-tárolót, valamint minden fiók adminhozzáférését.",
    ],
    note: "Tiszta kód, amely a tiéd, a saját fiókjaidon üzemeltetve. Kérlek, rendelés előtt írd meg a céljaidat, és küldj néhány weboldalt, ami tetszik.",
    metadata: ["Weboldal típusa", "Programozási nyelvek", "Weboldal funkciói"],
    faq: [
      {
        q: "Ki fizeti a tárhelyet, a domaint és az AI-használatot?",
        a: "Te, a saját fiókjaidon (jellemzően havi néhány euró; az AI-használat a forgalomtól függ). Mindent én állítok be neked.",
      },
      {
        q: "Az enyém lesz a kód?",
        a: "Igen. Megkapod a Git-tárolót és minden fiók adminhozzáférését.",
      },
      {
        q: "Szinkronizálható a foglalás a Google Calendarral?",
        a: "Igen. A foglalások szinkronizálhatók a Google Calendarral vagy a cal.com-mal, e-mailes visszaigazolással és emlékeztetőkkel.",
      },
      {
        q: "Mi van, ha az AI-asszisztens rosszul válaszol?",
        a: "Csak a tartalmaidból válaszol. Ha bizonytalan, nem válaszol, hanem e-mailben átadja neked a kérdést.",
      },
      {
        q: "Milyen nyelvű lehet az oldalam?",
        a: "Bármilyen; angolul, németül, magyarul és spanyolul dolgozom. A további nyelvek extrának számítanak.",
      },
      {
        q: "Megfelel a GDPR előírásainak?",
        a: "EU-s tárhelyrégiókat használok, és a GDPR-extrával adatvédelmi tájékoztatót és süti-hozzájárulást is készítek. A jogi szöveg átnézése a jogászod feladata.",
      },
      {
        q: "Mire van szükséged az induláshoz?",
        a: "A logódra, a szövegeidre, a fotóidra, a szolgáltatásaid listájára és 2–3 weboldalra, ami tetszik. Még nincsenek szövegeid? Szólj, és ehhez igazítjuk a tervet.",
      },
      {
        q: "Mi számít javítási körnek?",
        a: "Egy kör módosítás az átadott dizájnon vagy tartalmon, a csomag keretein belül. Az új oldalak és funkciók extrának számítanak.",
      },
      {
        q: "Át tudod tervezni a meglévő weboldalamat?",
        a: "Igen. Küldd el a linket, és megmondom, melyik csomag illik hozzá.",
      },
    ],
    requirements: [
      "Mire szolgál a weboldal, és kik a látogatóid.",
      "A logód, a szövegeid, a fotóid és a szolgáltatásaid listája (vagy hogy mi hiányzik még).",
      "2–3 weboldal, ami tetszik, és hogy mi tetszik bennük.",
      "Van-e már domained és tárhelyed, és milyen nyelvekre van szükséged.",
      "Grow és Automate esetén: hogyan működjön a foglalás (szolgáltatások, időtartamok, elérhetőség, naptár); Automate esetén: milyen dokumentumokat vagy GYIK-et használjon az asszisztens.",
    ],
    related: ["dominiksarkany.com", "opendrone.space"],
    coverAlt:
      "Borító: „1 nap alatt élesben – gyors, kétnyelvű, akadálymentes” felirat egy laptop és egy telefon mellett, amelyeken egy sportpszichológus kétnyelvű weboldala látszik.",
  },
];

const de: GigText[] = [
  {
    title: "BigQuery-Datenpipelines mit Airflow und dbt auf Google Cloud",
    short: "Datenpipelines auf Google Cloud",
    pitch:
      "Produktionsreife BigQuery-Pipelines, auf die sich Ihre Analyst:innen verlassen können, ohne dass Sie ein Vollzeit-Datenteam einstellen müssen. Ich habe fünf Jahre an Telko-Datenplattformen gearbeitet: an der Analytics-Migration von Vodafone Ungarn auf Google Cloud und am souveränen Apache-Iceberg-Lakehouse der Deutschen Telekom auf GCP, beide in öffentlichen Case Studies von Google Cloud beschrieben.",
    packages: [
      "1 Quelle in BigQuery, ein getestetes dbt-Modell, tägliche Ausführung und kurze Übergabedoku",
      "Bis zu 3 Quellen, Airflow-DAGs, dbt von Staging bis Marts mit Tests, Alerting und Dokumentation",
      "Bis zu 6 Quellen, Lakehouse auf BigQuery und GCS oder Iceberg, CI/CD, Datenqualität, Kostenoptimierung",
    ],
    features: [
      "Tabellen / Modelle",
      "Quellcode",
      "Anbindung von Datenquellen",
      "API-Integration",
      "Formatierung und Bereinigung",
      "Dokumentation",
      "Data-Quality-Checks",
      "Unit-Tests",
      "Orchestrator-Setup",
    ],
    extras: [
      "Expresslieferung",
      "Zusätzliche Datenquelle",
      "Zusätzliche Tabelle oder zusätzliches Modell",
      "Looker-Studio-Dashboard",
      "Terraform für das Setup",
      "Zusätzliche Überarbeitung",
    ],
    build: [
      "Datenaufnahme aus APIs, Datenbanken, Dateien, GA4, Ads und SaaS-Tools in BigQuery",
      "Orchestrierung mit Apache Airflow oder Cloud Composer",
      "dbt-Modelle (Staging, Intermediate, Marts) mit Tests und Doku",
      "Medallion- und Lakehouse-Architekturen auf GCS, BigQuery und Iceberg",
      "Data-Quality-Checks, Alerting und CI/CD (GitLab oder GitHub)",
      "Kostenoptimierung: Partitionierung, Clustering, Query-Optimierung",
    ],
    steps: [
      "Sie nennen mir Ziele und Quellen und geben mir Zugriff auf Ihr eigenes GCP-Projekt.",
      "Ich bestätige den Umfang mit einem einfachen Architekturdiagramm.",
      "Ich baue, teste und dokumentiere in Ihrem Repository.",
      "Übergabegespräch und ein schriftliches Runbook.",
    ],
    note: "Der gesamte Code gehört Ihnen. In der EU ansässig, DSGVO-bewusst, NDA auf Anfrage. Bitte schreiben Sie mir vor der Bestellung, damit ich Ihre Quellen und den Umfang bestätigen kann.",
    metadata: ["Fachgebiet", "Technologie"],
    faq: [
      {
        q: "Was muss ich bereitstellen?",
        a: "Ein GCP-Projekt mit aktivierter Abrechnung, IAM-Zugriff für mich, Zugangsdaten für jede Quelle und eine kurze Beschreibung der Fragen, die die Daten beantworten sollen.",
      },
      {
        q: "Wer trägt die Kosten für Google Cloud?",
        a: "Sie, in Ihrem eigenen Projekt. Ich plane auf niedrige Kosten hin (Partitionierung, inkrementelle Modelle) und schätze bei der Übergabe die monatlichen Kosten.",
      },
      {
        q: "Bekomme ich den Code?",
        a: "Ja. Alles liegt in Ihrem Git-Repository: Pipelines, dbt-Projekt, Doku und Runbook.",
      },
      {
        q: "Können Sie auch mit Snowflake, Databricks oder DuckDB arbeiten?",
        a: "Ja, aber Google Cloud ist mein Schwerpunkt. Schreiben Sie mir Ihren Stack, dann bestätige ich das vor Ihrer Bestellung.",
      },
      {
        q: "Wie gehen Sie mit sensiblen Daten um?",
        a: "Zugriff nach dem Least-Privilege-Prinzip, keine Kopien von Daten außerhalb Ihres Projekts, NDA auf Anfrage. Ich bin in der EU ansässig und mit Telko-Daten unter der DSGVO vertraut.",
      },
      {
        q: "Was zählt als Überarbeitung?",
        a: "Änderungen innerhalb des vereinbarten Umfangs. Neue Quellen oder neue Modelle sind Extras oder ein individuelles Angebot.",
      },
      {
        q: "Ich brauche nur ein Audit meines aktuellen Setups.",
        a: "Schreiben Sie mir: Als individuelles Angebot biete ich ein 3-tägiges Audit zu Architektur, Kosten und Zuverlässigkeit mit priorisierter Roadmap an.",
      },
    ],
    requirements: [
      "Welche Geschäftsfragen oder Reports sollen diese Daten unterstützen?",
      "Ihre Datenquellen: Art, ungefähres Volumen und Zugriffsweg (API, Datenbank, Dateien).",
      "Ist Ihr GCP-Projekt bereit, können Sie IAM-Zugriff gewähren, und in welcher Region liegt es?",
      "Welche Tools sind bereits im Einsatz (Airflow, dbt, Looker, Git-Anbieter)?",
      "Gibt es personenbezogene oder sensible Daten, Fristen oder Compliance-Vorgaben?",
    ],
    related: [
      "Case Study Deutsche Telekom (Google Cloud)",
      "Case Study Vodafone Ungarn (Google Cloud)",
    ],
    coverAlt:
      "Diagramm: APIs, Datenbanken, Dateien, GA4 und SaaS-Tools fließen in einem Warehouse in die Schichten Raw, Staging und Marts, jede getestet und täglich von Airflow orchestriert, und weiter zu Dashboards, ML-Modellen und Apps.",
  },
  {
    title: "Individuelle AI Agents und RAG-Apps auf Basis Ihrer Unternehmensdaten",
    short: "AI Agents und RAG-Apps",
    pitch:
      "Ein AI Agent, der mit Ihren Daten arbeitet, nicht nur eine Demo: Er antwortet auf Basis Ihrer Dokumente, nutzt Ihre Tools und läuft zuverlässig in Produktion. Ich bin Co-Founder und CTO eines AI-native Engineering Labs in Wien und Data Engineer mit fünf Jahren Erfahrung mit Telko-Datenplattformen. Deshalb baue ich Agents wie Datenprodukte: getestet, geloggt und mit Kostenkontrolle.",
    packages: [
      "Scoping plus funktionierender Prototyp: 1 Agent oder RAG-App auf Basis Ihrer Doku oder 1 Datenquelle",
      "Agent oder RAG-App mit bis zu 3 Integrationen, Evals, Guardrails, Logging und Deployment",
      "Mehrstufiger Agent oder Voice Agent, bis zu 6 Integrationen, Monitoring, Kosten-Dashboard, Übergabe",
    ],
    features: [
      "Modellintegration in Ihre App",
      "Quellcode",
      "Datenbankanbindung",
      "Ausführliche Code-Kommentare",
    ],
    extras: [
      "Expresslieferung",
      "Zusätzliches Tool oder zusätzliche Integration",
      "Zusätzliche Sprache",
      "Sprachkanal (ElevenLabs)",
      "Fine-Tuning des AI-Modells",
      "Zusätzliche Überarbeitung",
    ],
    build: [
      "RAG-Assistenten auf Basis Ihrer Dokumente, Website oder Wissensdatenbank",
      "Agents, die Tools nutzen: CRM, Datenbank, E-Mail, Slack, Kalender, APIs",
      "Voice Agents (ElevenLabs) für Buchungen und Support",
      "Agents, die Ihr Data Warehouse sicher abfragen (BigQuery, Postgres)",
      "Evaluation-Sets, Guardrails, Monitoring und Kosten-Dashboards",
    ],
    steps: [
      "Wir definieren den Use Case und wie gute Antworten aussehen.",
      "Ich baue einen Prototyp mit Ihren echten Daten.",
      "Ich mache ihn robust: Evals, Guardrails, Deployment.",
      "Übergabe mit Doku und Walkthrough.",
    ],
    note: "Code und API-Keys gehören Ihnen. In der EU ansässig und DSGVO-bewusst. Bitte schreiben Sie mir zuerst Ihren Use Case.",
    metadata: ["AI-Engine", "Programmiersprache"],
    faq: [
      {
        q: "Welche AI-Modelle verwenden Sie?",
        a: "Standardmäßig Claude, OpenAI, Gemini und Grok; Open-Weight-Modelle, wenn Daten auf Ihrer Infrastruktur bleiben müssen. Ich wähle je nach Use Case und Kosten.",
      },
      {
        q: "Wer zahlt die API-Nutzung?",
        a: "Sie, mit Ihren eigenen API-Keys und Konten. Die monatlichen Nutzungskosten schätze ich vor dem Start.",
      },
      {
        q: "Was, wenn der Agent falsch antwortet?",
        a: "Die Antworten stützen sich auf Ihre Inhalte und werden mit einem Evaluation-Set getestet. Ist der Agent unsicher, verweigert er die Antwort und kann an einen Menschen übergeben.",
      },
      {
        q: "Sind meine Daten sicher?",
        a: "Ihre Daten bleiben in Ihren Konten. EU-Hosting-Optionen, kein Training mit Ihren Daten, NDA auf Anfrage.",
      },
      {
        q: "Was brauchen Sie für den Start?",
        a: "Den Use Case, Beispieldokumente oder Datenzugriff, die anzubindenden Tools und 10–20 Beispielfragen mit guten Antworten.",
      },
      { q: "Bekomme ich den Quellcode?", a: "Ja, in Ihrem Repository, mit Setup-Anleitung." },
      {
        q: "Können Sie einen Agent verbessern, den ich bereits habe?",
        a: "Ja: Ich kann ihn prüfen, Evals aufbauen und Zuverlässigkeitsprobleme beheben. Schreiben Sie mir für ein individuelles Angebot.",
      },
      {
        q: "Was zählt als Überarbeitung?",
        a: "Änderungen innerhalb des vereinbarten Umfangs. Neue Integrationen oder Kanäle sind Extras.",
      },
    ],
    requirements: [
      "Der Use Case und wer den Agent nutzen wird.",
      "Welche Daten oder Dokumente er nutzen soll und wie ich darauf zugreifen kann.",
      "Mit welchen Tools oder Systemen er verbunden werden muss.",
      "Bevorzugter AI-Anbieter und bevorzugtes Hosting (oder keine Präferenz) und ob Sie API-Keys bereitstellen.",
      "Welche Sprachen der Agent sprechen soll.",
      "Etwaige Datenschutzvorgaben.",
      "10–20 Beispielfragen mit idealen Antworten.",
    ],
    related: ["proximata.io", "Meine Agent-Skills-Bibliothek auf GitHub"],
    coverAlt:
      "Diagramm: Ihre Dokumente, Website, CRM und Datenbank speisen einen Agent, der auf Claude, GPT oder Gemini läuft, die passenden Textstellen findet, sie auswertet und über Ihren Kalender, E-Mail, Slack und APIs Aktionen ausführt, dazu eine Beispielantwort mit Quellenangabe.",
  },
  {
    title: "Location Intelligence und Standortwahl mit Python, H3 und Webkarten",
    short: "Location Intelligence und Standortwahl",
    pitch:
      "Wo sollten Sie eröffnen, investieren oder expandieren? Ich mache aus Standortdaten klare Antworten: bewertete Standorte, erklärbare Modelle und interaktive Karten zum Teilen. Für B2B-Kund:innen eines nationalen Telekommunikationsanbieters habe ich Geo-ML-Features und Karten zur Netzplanung gebaut, außerdem ein Budapester Mietpreismodell auf Uber-H3-Hexagonen mit Sentinel-2-Daten zum Grünanteil und WorldPop-Bevölkerungsdaten (9,8 % medianer Fehler bei 50.000 Inseraten).",
    packages: [
      "1 Gebiet, bis zu 3 Open-Data-Layer auf H3-Raster, interaktive Karte, Datendateien und Kurzbericht",
      "Bis zu 10 Standorte, 8 Standortmerkmale, erklärbares Scoring, Webkarte, Notebook und Folien",
      "Pipeline für Ihre Daten und Open Data, Prognosemodell mit SHAP-Erklärungen, gehostete Webkarte",
    ],
    features: ["Karten", "Präsentationsfolien"],
    extras: [
      "Expresslieferung",
      "Zusätzliches Gebiet oder zusätzliche Stadt",
      "Zusätzliche Datenquelle",
      "Deployment und Hosting-Setup",
      "Zeitgesteuerte Datenaktualisierung",
      "Foliensatz für Kundenpräsentationen",
      "Zusätzliche Überarbeitung",
    ],
    build: [
      "Standortwahl und Einzugsgebietsanalyse (Bevölkerung, Mitbewerber, POIs, Isochronen nach Reisezeit)",
      "Standortmerkmale auf H3-Hexagonraster, bereit für Machine Learning",
      "Satellitendaten und Open Data: Sentinel-2, WorldPop, OpenStreetMap, Eurostat",
      "Erklärbares Scoring und Prognosemodelle (XGBoost, SHAP)",
      "Interaktive Webkarten (Leaflet, kepler.gl) mit automatischer Datenaktualisierung",
      "Standortanalysen für Immobilien: Miete, Rendite, Lagequalität",
    ],
    steps: [
      "Sie nennen mir die Entscheidung, das Gebiet und vorhandene Standort- oder Kundendaten.",
      "Ich prüfe vor Ihrer Bestellung, welche offenen Daten für Ihr Gebiet verfügbar sind.",
      "Ich baue Features, Scores oder Modell und die Karte in reproduzierbarem Code.",
      "Sie erhalten Karte, Notebooks und Datendateien in offenen Formaten (GeoParquet, GeoJSON, CSV).",
    ],
    note: "In der EU ansässig. Bitte schreiben Sie mir vor der Bestellung, damit ich die Datenlage für Ihr Gebiet prüfen kann.",
    metadata: ["Tool"],
    faq: [
      {
        q: "Welche Daten brauche ich?",
        a: "Ihre Standorte oder Kundendaten, falls vorhanden. Offene Daten beschaffe ich: OpenStreetMap, WorldPop, Sentinel-2, Eurostat und nationale Statistiken.",
      },
      {
        q: "Welche Gebiete können Sie abdecken?",
        a: "Überall, wo es gute offene Daten gibt; Europa ist am besten abgedeckt. Vor Ihrer Bestellung bestätige ich die Datenlage für Ihr Gebiet.",
      },
      {
        q: "Bekomme ich Code und Daten?",
        a: "Ja: Notebooks, Skripte und Ergebnisse in GeoParquet, GeoJSON und CSV.",
      },
      {
        q: "Kann ich die Karte auf meiner Website einbetten?",
        a: "Ja, als einbettbare Webkarte oder, mit dem Deployment-Extra, in Ihrer eigenen Cloud gehostet.",
      },
      {
        q: "Können Sie die Daten regelmäßig aktualisieren?",
        a: "Ja, mit dem Extra für zeitgesteuerte Datenaktualisierung; laufendes Hosting ist als individuelles Angebot möglich.",
      },
      {
        q: "Wie gehen Sie mit Standortdaten von Kund:innen um?",
        a: "Die Daten bleiben in Ihren Konten und werden nur für das Projekt verwendet. In der EU ansässig, NDA auf Anfrage.",
      },
      {
        q: "Was zählt als Überarbeitung?",
        a: "Änderungen im Rahmen des vereinbarten Gebiets, der Layer und der Features. Neue Gebiete oder Datenquellen sind Extras.",
      },
    ],
    requirements: [
      "Welche Entscheidung soll die Analyse unterstützen (Standortwahl, Investition, Expansion, Planung)?",
      "Welches Gebiet bzw. welche Gebiete, und Ihre möglichen Standorte oder Kundenstandorte, falls vorhanden.",
      "Welche Daten Sie haben (Format, Größe) und welche ich beschaffen soll.",
      "Gewünschtes Ergebnis: Bericht, interaktive Karte, Modell oder alle drei; und ob es auf einer Website eingebettet werden soll.",
      "Fristen und Datenschutzvorgaben.",
    ],
    related: ["opendrone.space", "Budapester Mietpreismodell (MSc-Capstone)"],
    coverAlt:
      "Titelbild: „Location intelligence on H3 hexagons“ über einem Hexagonraster; Standortwahl, Webkarten und erklärbares Geo-ML mit Python, H3, GeoPandas und Leaflet.",
  },
  {
    title: "Individuelle Firmenwebsites mit Buchungsfunktion und AI-Chatbot",
    short: "Individuelle Firmenwebsites",
    pitch:
      "Eine schnelle, professionelle Website, die mehr kann als gut aussehen: Buchungen annehmen, E-Mails verschicken und Ihren Kund:innen mit einem AI-Assistenten antworten. Wählen Sie die passende Stufe — Launch bringt in einem Tag eine schnelle, barrierefreie Website mit SEO live; Grow ergänzt ein Backend mit individuellem Buchungskalender, E-Mails aus dem Kontaktformular und bearbeitbaren Inhalten; Automate ergänzt einen AI-Assistenten, der auf Basis Ihrer Inhalte antwortet und Termine bucht.",
    packages: [
      "Schnelle Website mit 3 Menübereichen, SEO und Social-Meta-Tags, barrierefrei, live geschaltet",
      "Bis zu 4 Seiten plus Backend: individueller Buchungskalender, Kontaktformular mit E-Mail, bearbeitbare Inhalte",
      "Alles aus Grow plus AI-Assistent, der auf Basis Ihrer Inhalte antwortet und Termine bucht",
    ],
    features: [
      "Seiten",
      "Integrationen (E-Mail, Kalender, Analytics…)",
      "Einpflegen der Inhalte",
      "Opt-in-Formular",
      "Autoresponder (Buchungs- und Kontaktbestätigungen)",
      "Geschwindigkeitsoptimierung",
      "Hosting-Setup",
      "Social-Media-Icons",
    ],
    extras: [
      "Expresslieferung",
      "Zusätzliche Seite",
      "Zusätzliche Sprache (Sie liefern den Text)",
      "DSGVO-Paket (Datenschutzseite, Cookie-Consent)",
      "Stripe-Zahlungen für Buchungen",
      "DNS-Setup für Domain und E-Mail",
      "Zusätzliche Überarbeitung",
    ],
    build: [
      "Mehrsprachige Websites: Englisch, Deutsch, Ungarisch, Spanisch",
      "Individuelle Buchungskalender, die sich mit Google Calendar oder cal.com synchronisieren",
      "Kontaktformulare mit Bestätigungs- und Erinnerungs-E-Mails",
      "Inhalte, die Sie selbst in einem Admin-Panel bearbeiten können",
      "AI-Assistenten, die nur auf Basis Ihrer Inhalte antworten und an Sie übergeben",
      "Barrierefreiheit, Performance und SEO inklusive; EU-Hosting-Optionen",
    ],
    steps: [
      "Sie schicken mir Ihre Ziele und 2–3 Websites, die Ihnen gefallen.",
      "Ich bestätige das Paket und was ich von Ihnen brauche: Logo, Texte, Fotos, Leistungen.",
      "Ich baue die Website und teile eine Vorschau für Ihr Feedback.",
      "Ich schalte die Website live und übergebe das Repository und Admin-Zugriff auf alle Konten.",
    ],
    note: "Sauberer Code, der Ihnen gehört, gehostet auf Ihren eigenen Konten. Bitte schreiben Sie mir vor der Bestellung Ihre Ziele und Beispiel-Websites, die Ihnen gefallen.",
    metadata: ["Website-Typ", "Programmiersprachen", "Website-Funktionen"],
    faq: [
      {
        q: "Wer zahlt Hosting, Domain und AI-Nutzung?",
        a: "Sie, über Ihre eigenen Konten (meist ein paar Euro im Monat; die AI-Nutzung hängt vom Traffic ab). Ich richte alles für Sie ein.",
      },
      {
        q: "Gehört mir der Code?",
        a: "Ja. Sie erhalten das Repository und Admin-Zugriff auf alle Konten.",
      },
      {
        q: "Lassen sich Buchungen mit Google Calendar synchronisieren?",
        a: "Ja. Buchungen lassen sich mit Google Calendar oder cal.com synchronisieren, mit Bestätigungs- und Erinnerungs-E-Mails.",
      },
      {
        q: "Was, wenn der AI-Assistent falsch antwortet?",
        a: "Er antwortet nur auf Basis Ihrer Inhalte, verweigert bei Unsicherheit die Antwort und übergibt per E-Mail an Sie.",
      },
      {
        q: "Welche Sprachen kann meine Website haben?",
        a: "Jede beliebige; ich arbeite auf Englisch, Deutsch, Ungarisch und Spanisch. Zusätzliche Sprachen sind ein Extra.",
      },
      {
        q: "Ist die Website DSGVO-konform?",
        a: "Ich nutze EU-Hosting-Regionen und kann mit dem DSGVO-Extra eine Datenschutzseite und Cookie-Consent ergänzen. Die rechtliche Prüfung der Texte ist Sache Ihrer Rechtsberatung.",
      },
      {
        q: "Was brauchen Sie für den Start?",
        a: "Ihr Logo, Texte, Fotos, Leistungen und 2–3 Websites, die Ihnen gefallen. Noch keine Texte? Sagen Sie es mir, dann planen wir das ein.",
      },
      {
        q: "Was zählt als Überarbeitung?",
        a: "Eine Runde Änderungen am gelieferten Design oder an den Inhalten im Rahmen des Pakets. Neue Seiten oder Funktionen sind Extras.",
      },
      {
        q: "Können Sie meine bestehende Website neu gestalten?",
        a: "Ja. Schicken Sie mir den Link, dann bestätige ich das passende Paket.",
      },
    ],
    requirements: [
      "Wofür die Website gedacht ist und wer Ihre Besucher:innen sind.",
      "Ihr Logo, Texte, Fotos und eine Liste Ihrer Leistungen (oder was noch fehlt).",
      "2–3 Websites, die Ihnen gefallen, und was Ihnen daran gefällt.",
      "Ob Sie bereits Domain und Hosting haben und welche Sprachen Sie brauchen.",
      "Für Grow und Automate: wie Buchungen funktionieren sollen (Leistungen, Dauer, Verfügbarkeit, Kalender); für Automate, welche Dokumente oder FAQs der Assistent nutzen soll.",
    ],
    related: ["dominiksarkany.com", "opendrone.space"],
    coverAlt:
      "Titelbild: „Live in 1 day — fast, bilingual, accessible“ neben einem Laptop und einem Smartphone, die die zweisprachige Website eines Sportpsychologen zeigen.",
  },
];

const es: GigText[] = [
  {
    title: "Pipelines de datos en BigQuery con Airflow y dbt en Google Cloud",
    short: "Pipelines de datos en Google Cloud",
    pitch:
      "Pipelines de BigQuery listos para producción en los que tus analistas pueden confiar, sin contratar un equipo de datos a tiempo completo. He trabajado cinco años en plataformas de datos de telecomunicaciones: la migración de analítica de Vodafone Hungría a Google Cloud y el lakehouse soberano de Deutsche Telekom sobre Apache Iceberg en GCP, ambos recogidos en casos de estudio públicos de Google Cloud.",
    packages: [
      "1 fuente a BigQuery, un modelo dbt con tests, ejecución diaria y un breve documento de traspaso",
      "Hasta 3 fuentes, DAGs de Airflow, dbt de staging a marts con tests, alertas y documentación",
      "Hasta 6 fuentes, lakehouse en BigQuery y GCS o Iceberg, CI/CD, calidad de datos, ajuste de costes",
    ],
    features: [
      "Tablas / modelos",
      "Código fuente",
      "Conexión a fuentes de datos",
      "Integración de API",
      "Formato y limpieza",
      "Documentación",
      "Controles de calidad de datos",
      "Pruebas unitarias",
      "Configuración del orquestador",
    ],
    extras: [
      "Entrega extrarrápida",
      "Fuente de datos adicional",
      "Tabla o modelo adicional",
      "Dashboard de Looker Studio",
      "Terraform para la configuración",
      "Revisión adicional",
    ],
    build: [
      "Ingesta desde APIs, bases de datos, archivos, GA4, plataformas de anuncios y herramientas SaaS hacia BigQuery",
      "Orquestación con Apache Airflow o Cloud Composer",
      "Modelos dbt (staging, intermediate, marts) con tests y documentación",
      "Arquitecturas medallion y lakehouse en GCS, BigQuery e Iceberg",
      "Controles de calidad de datos, alertas y CI/CD (GitLab o GitHub)",
      "Ajuste de costes: particionado, clustering, optimización de consultas",
    ],
    steps: [
      "Me cuentas tus objetivos y fuentes y me das acceso a tu propio proyecto de GCP.",
      "Confirmo el alcance con un diagrama de arquitectura sencillo.",
      "Construyo, pruebo y documento en tu repositorio.",
      "Llamada de traspaso y un runbook por escrito.",
    ],
    note: "Todo el código es tuyo. Trabajo desde la UE, tengo en cuenta el RGPD y firmo un NDA si lo pides. Escríbeme antes de hacer el pedido para confirmar tus fuentes y el alcance.",
    metadata: ["Especialidad", "Tecnología"],
    faq: [
      {
        q: "¿Qué tengo que aportar?",
        a: "Un proyecto de GCP con facturación activa, acceso IAM para mí, credenciales de cada fuente y una breve descripción de las preguntas que deben responder los datos.",
      },
      {
        q: "¿Quién paga los costes de Google Cloud?",
        a: "Tú, en tu propio proyecto. Diseño pensando en un coste bajo (particionado, modelos incrementales) y en el traspaso te doy una estimación del gasto mensual.",
      },
      {
        q: "¿Me quedo con el código?",
        a: "Sí. Todo queda en tu repositorio Git: pipelines, proyecto dbt, documentación y runbook.",
      },
      {
        q: "¿Puedes trabajar con Snowflake, Databricks o DuckDB?",
        a: "Sí, pero mi especialidad es Google Cloud. Escríbeme con tu stack y te lo confirmo antes de que hagas el pedido.",
      },
      {
        q: "¿Cómo tratas los datos sensibles?",
        a: "Acceso con mínimo privilegio, ningún dato se copia fuera de tu proyecto y NDA si lo pides. Trabajo desde la UE y estoy acostumbrado a datos de telecomunicaciones sujetos al RGPD.",
      },
      {
        q: "¿Qué cuenta como revisión?",
        a: "Cambios dentro del alcance acordado. Las fuentes o modelos nuevos son extras o una oferta personalizada.",
      },
      {
        q: "Solo necesito una auditoría de mi configuración actual.",
        a: "Escríbeme: como oferta personalizada hago una auditoría de 3 días de arquitectura, costes y fiabilidad, con una hoja de ruta priorizada.",
      },
    ],
    requirements: [
      "¿Qué preguntas de negocio o informes deben apoyar estos datos?",
      "Tus fuentes de datos: tipo, volumen aproximado y método de acceso (API, base de datos, archivos).",
      "¿Está listo tu proyecto de GCP, puedes darme acceso IAM y en qué región está?",
      "¿Qué herramientas usas ya (Airflow, dbt, Looker, proveedor de Git)?",
      "¿Hay datos personales o sensibles, plazos o requisitos de cumplimiento normativo?",
    ],
    related: [
      "Caso de estudio de Deutsche Telekom (Google Cloud)",
      "Caso de estudio de Vodafone Hungría (Google Cloud)",
    ],
    coverAlt:
      "Diagrama: APIs, bases de datos, archivos, GA4 y herramientas SaaS fluyen hacia las capas raw, staging y marts de un almacén de datos, cada una con tests y orquestada a diario por Airflow, y de ahí a dashboards, modelos de ML y apps.",
  },
  {
    title: "Agentes de IA y apps RAG a medida con los datos de tu empresa",
    short: "Agentes de IA y apps RAG",
    pitch:
      "Un agente de IA que trabaja con tus datos, no solo una demo: responde a partir de tus documentos, usa tus herramientas y es fiable en producción. Soy cofundador y CTO de un laboratorio de ingeniería AI-native en Viena e ingeniero de datos con cinco años en plataformas de datos de telecomunicaciones, así que construyo mis agentes como productos de datos: probados, con logs y con el coste bajo control.",
    packages: [
      "Alcance y prototipo funcional: 1 agente o app RAG sobre tus documentos o 1 fuente de datos",
      "Agente o app RAG con hasta 3 integraciones, evals, guardrails, logging y despliegue",
      "Agente multipaso o de voz, hasta 6 integraciones, monitorización, dashboard de costes y traspaso",
    ],
    features: [
      "Integración del modelo en tu app",
      "Código fuente",
      "Integración con base de datos",
      "Comentarios detallados en el código",
    ],
    extras: [
      "Entrega extrarrápida",
      "Herramienta o integración adicional",
      "Idioma adicional",
      "Canal de voz (ElevenLabs)",
      "Fine-tuning del modelo de IA",
      "Revisión adicional",
    ],
    build: [
      "Asistentes RAG sobre tus documentos, tu web o tu base de conocimiento",
      "Agentes que usan herramientas: CRM, base de datos, email, Slack, calendarios, APIs",
      "Agentes de voz (ElevenLabs) para reservas y atención al cliente",
      "Agentes que consultan de forma segura tu almacén de datos (BigQuery, Postgres)",
      "Conjuntos de evaluación, guardrails, monitorización y dashboards de costes",
    ],
    steps: [
      "Definimos el caso de uso y cómo es una buena respuesta.",
      "Construyo un prototipo con tus datos reales.",
      "Lo refuerzo: evals, guardrails, despliegue.",
      "Traspaso con documentación y un recorrido guiado.",
    ],
    note: "El código y tus claves de API son tuyos. Trabajo desde la UE y tengo en cuenta el RGPD. Escríbeme primero con tu caso de uso.",
    metadata: ["Motor de IA", "Lenguaje de programación"],
    faq: [
      {
        q: "¿Qué modelos de IA usas?",
        a: "Por defecto Claude, OpenAI, Gemini y Grok; modelos de pesos abiertos cuando los datos deben quedarse en tu infraestructura. Elijo según el caso de uso y el coste.",
      },
      {
        q: "¿Quién paga el uso de la API?",
        a: "Tú, con tus propias claves de API y cuentas. Antes de empezar te doy una estimación del coste mensual de uso.",
      },
      {
        q: "¿Y si el agente da una respuesta incorrecta?",
        a: "Las respuestas se basan en tu contenido y se prueban con un conjunto de evaluación; si el agente no está seguro, se abstiene y puede pasar el caso a una persona.",
      },
      {
        q: "¿Están seguros mis datos?",
        a: "Tus datos se quedan en tus cuentas. Opciones de alojamiento en la UE, sin entrenar con tus datos y NDA si lo pides.",
      },
      {
        q: "¿Qué necesitas para empezar?",
        a: "El caso de uso, documentos de ejemplo o acceso a los datos, las herramientas que hay que conectar y 10–20 preguntas de ejemplo con buenas respuestas.",
      },
      {
        q: "¿Me quedo con el código fuente?",
        a: "Sí, en tu repositorio, con instrucciones de instalación.",
      },
      {
        q: "¿Puedes mejorar un agente que ya tengo?",
        a: "Sí: puedo auditarlo, crear evals y corregir problemas de fiabilidad. Escríbeme y te hago una oferta personalizada.",
      },
      {
        q: "¿Qué cuenta como revisión?",
        a: "Cambios dentro del alcance acordado. Las integraciones o canales nuevos son extras.",
      },
    ],
    requirements: [
      "El caso de uso y quién va a usar el agente.",
      "Qué datos o documentos debe usar y cómo puedo acceder a ellos.",
      "A qué herramientas o sistemas debe conectarse.",
      "Proveedor de IA y alojamiento preferidos (o sin preferencia), y si vas a facilitar las claves de API.",
      "En qué idiomas debe hablar el agente.",
      "Cualquier restricción de privacidad.",
      "10–20 preguntas de ejemplo con sus respuestas ideales.",
    ],
    related: ["proximata.io", "Mi biblioteca de skills para agentes en GitHub"],
    coverAlt:
      "Diagrama: tus documentos, tu web, tu CRM y tu base de datos alimentan a un agente que funciona con Claude, GPT o Gemini, encuentra los fragmentos adecuados, razona sobre ellos y actúa con tu calendario, email, Slack y APIs, junto a una respuesta de ejemplo que cita su fuente.",
  },
  {
    title: "Location intelligence y selección de ubicaciones con Python, H3 y mapas web",
    short: "Location intelligence y selección de ubicaciones",
    pitch:
      "¿Dónde deberías abrir, invertir o expandirte? Convierto datos de ubicación en respuestas claras: ubicaciones con puntuación, modelos explicables y mapas interactivos que puedes compartir. Desarrollé variables geoespaciales para ML y mapas de planificación de red para los clientes B2B de una operadora nacional de telecomunicaciones, y un modelo de alquileres de Budapest sobre hexágonos H3 de Uber con datos de vegetación de Sentinel-2 y de población de WorldPop (error mediano del 9,8 % en 50.000 anuncios).",
    packages: [
      "1 zona, hasta 3 capas de datos abiertos en malla H3, mapa interactivo, archivos de datos y conclusiones",
      "Hasta 10 ubicaciones, 8 variables de ubicación, puntuación explicable, mapa web, notebook y diapositivas",
      "Pipeline con tus datos y datos abiertos, modelo predictivo con explicaciones SHAP y mapa web alojado",
    ],
    features: ["Mapas", "Diapositivas de presentación"],
    extras: [
      "Entrega extrarrápida",
      "Zona o ciudad adicional",
      "Fuente de datos adicional",
      "Configuración de despliegue y alojamiento",
      "Actualización programada de datos",
      "Presentación lista para clientes",
      "Revisión adicional",
    ],
    build: [
      "Selección de ubicaciones y análisis del área de influencia (población, competencia, POIs, isócronas de tiempo de viaje)",
      "Variables de ubicación en malla hexagonal H3, listas para Machine Learning",
      "Datos satelitales y abiertos: Sentinel-2, WorldPop, OpenStreetMap, Eurostat",
      "Puntuación explicable y modelos predictivos (XGBoost, SHAP)",
      "Mapas web interactivos (Leaflet, kepler.gl) con actualización automática de datos",
      "Análisis inmobiliario de ubicación: alquiler, rentabilidad, calidad del barrio",
    ],
    steps: [
      "Me cuentas la decisión, la zona y las ubicaciones o datos de clientes que tengas.",
      "Antes de que hagas el pedido, compruebo qué datos abiertos hay para tu zona.",
      "Construyo las variables, las puntuaciones o el modelo y el mapa, con código reproducible.",
      "Recibes el mapa, los notebooks y los archivos de datos en formatos abiertos (GeoParquet, GeoJSON, CSV).",
    ],
    note: "Trabajo desde la UE. Escríbeme antes de hacer el pedido para que compruebe la disponibilidad de datos en tu zona.",
    metadata: ["Herramienta"],
    faq: [
      {
        q: "¿Qué datos necesito?",
        a: "Tus ubicaciones o datos de clientes, si los tienes. Yo consigo los datos abiertos: OpenStreetMap, WorldPop, Sentinel-2, Eurostat y estadísticas nacionales.",
      },
      {
        q: "¿Qué zonas puedes cubrir?",
        a: "Cualquier zona con buenos datos abiertos; Europa es donde la cobertura es más sólida. Confirmo la disponibilidad de datos para tu zona antes de que hagas el pedido.",
      },
      {
        q: "¿Me quedo con el código y los datos?",
        a: "Sí: notebooks, scripts y resultados en GeoParquet, GeoJSON y CSV.",
      },
      {
        q: "¿Se puede insertar el mapa en mi web?",
        a: "Sí, como mapa web insertable, o alojado en tu propia nube con el extra de despliegue.",
      },
      {
        q: "¿Puedes actualizar los datos con regularidad?",
        a: "Sí, con el extra de actualización programada de datos; el alojamiento continuo se puede acordar como oferta personalizada.",
      },
      {
        q: "¿Cómo tratas los datos de ubicación de clientes?",
        a: "Se quedan en tus cuentas y solo se usan para el proyecto. Trabajo desde la UE y firmo un NDA si lo pides.",
      },
      {
        q: "¿Qué cuenta como revisión?",
        a: "Cambios dentro de la zona, las capas y las variables acordadas. Las zonas o fuentes de datos nuevas son extras.",
      },
    ],
    requirements: [
      "¿Qué decisión debe apoyar el análisis (elección de ubicación, inversión, expansión, planificación)?",
      "Qué zona o zonas, y tus ubicaciones candidatas o de clientes, si las tienes.",
      "Qué datos tienes (formato, tamaño) y cuáles debo conseguir yo.",
      "Resultado preferido: informe, mapa interactivo, modelo o los tres; y si quieres insertarlo en una web.",
      "Plazos y restricciones de privacidad de datos.",
    ],
    related: ["opendrone.space", "Modelo de alquileres de Budapest (trabajo fin de máster)"],
    coverAlt:
      "Portada: «Location intelligence en hexágonos H3» sobre una malla hexagonal; selección de ubicaciones, mapas web y geo ML explicable con Python, H3, GeoPandas y Leaflet.",
  },
  {
    title: "Webs a medida para negocios con reservas y un chatbot de IA",
    short: "Webs a medida para negocios",
    pitch:
      "Una web rápida y profesional que hace algo más que verse bien: acepta reservas, envía emails y puede responder a tus clientes con un asistente de IA. Elige el nivel que necesitas: con Launch tienes una web rápida y accesible con SEO publicada en un día; Grow añade un backend con calendario de reservas a medida, emails del formulario de contacto y contenido editable; Automate añade un asistente de IA que responde a partir de tu contenido y reserva citas.",
    packages: [
      "Web rápida con 3 secciones en el menú, SEO y metadatos para redes sociales, accesible y publicada",
      "Hasta 4 páginas y backend: calendario de reservas a medida, formulario de contacto con email, contenido editable",
      "Todo lo de Grow más un asistente de IA que responde a partir de tu contenido y reserva citas",
    ],
    features: [
      "Páginas",
      "Integraciones (email, calendario, analítica…)",
      "Carga de contenido",
      "Formulario de suscripción",
      "Respuesta automática (confirmaciones de reserva y contacto)",
      "Optimización de velocidad",
      "Configuración del hosting",
      "Iconos de redes sociales",
    ],
    extras: [
      "Entrega extrarrápida",
      "Página adicional",
      "Idioma adicional (tú aportas el texto)",
      "Pack RGPD (página de privacidad, consentimiento de cookies)",
      "Pagos con Stripe para reservas",
      "Configuración de DNS de dominio y email",
      "Revisión adicional",
    ],
    build: [
      "Webs multilingües: inglés, alemán, húngaro, español",
      "Calendarios de reservas a medida que se sincronizan con Google Calendar o cal.com",
      "Formularios de contacto con confirmaciones y recordatorios por email",
      "Contenido que puedes editar tú mismo en un panel de administración",
      "Asistentes de IA que solo responden a partir de tu contenido y te derivan la conversación",
      "Accesibilidad, rendimiento y SEO de serie; opciones de hosting en la UE",
    ],
    steps: [
      "Me envías tus objetivos y 2–3 webs que te gusten.",
      "Confirmo el paquete y lo que necesito de ti: logo, textos, fotos, servicios.",
      "Construyo la web y te comparto una vista previa para que me des tu opinión.",
      "La publico y te entrego el repositorio y acceso de administrador a todas las cuentas.",
    ],
    note: "Código limpio que es tuyo, alojado en tus propias cuentas. Escríbeme antes de hacer el pedido con tus objetivos y las webs de ejemplo que te gusten.",
    metadata: ["Tipo de web", "Lenguajes de programación", "Funciones de la web"],
    faq: [
      {
        q: "¿Quién paga el hosting, el dominio y el uso de IA?",
        a: "Tú, en tus propias cuentas (normalmente unos pocos euros al mes; el uso de IA depende del tráfico). Yo te lo configuro todo.",
      },
      {
        q: "¿El código es mío?",
        a: "Sí. Recibes el repositorio y acceso de administrador a todas las cuentas.",
      },
      {
        q: "¿Se pueden sincronizar las reservas con Google Calendar?",
        a: "Sí. Las reservas se pueden sincronizar con Google Calendar o cal.com, con confirmaciones y recordatorios por email.",
      },
      {
        q: "¿Y si el asistente de IA responde mal?",
        a: "Solo responde a partir de tu contenido, se abstiene si no está seguro y te pasa la consulta por email.",
      },
      {
        q: "¿En qué idiomas puede estar mi web?",
        a: "En cualquiera; yo trabajo en inglés, alemán, húngaro y español. Los idiomas adicionales son un extra.",
      },
      {
        q: "¿Cumple el RGPD?",
        a: "Uso regiones de hosting en la UE y puedo añadir una página de privacidad y el consentimiento de cookies con el extra RGPD. La revisión de los textos legales le corresponde a tu abogado.",
      },
      {
        q: "¿Qué necesitas para empezar?",
        a: "Tu logo, textos, fotos, servicios y 2–3 webs que te gusten. ¿Aún no tienes textos? Dímelo y lo planificamos.",
      },
      {
        q: "¿Qué cuenta como revisión?",
        a: "Una ronda de cambios en el diseño o el contenido entregados, dentro del alcance del paquete. Las páginas o funciones nuevas son extras.",
      },
      {
        q: "¿Puedes rediseñar mi web actual?",
        a: "Sí. Envíame el enlace y te confirmo el paquete adecuado.",
      },
    ],
    requirements: [
      "Para qué es la web y quiénes son tus visitantes.",
      "Tu logo, textos, fotos y lista de servicios (o lo que aún falta).",
      "2–3 webs que te gusten y qué te gusta de ellas.",
      "Si ya tienes dominio y hosting, y qué idiomas necesitas.",
      "Para Grow y Automate: cómo deben funcionar las reservas (servicios, duración, disponibilidad, calendario); para Automate, qué documentos o preguntas frecuentes debe usar el asistente.",
    ],
    related: ["dominiksarkany.com", "opendrone.space"],
    coverAlt:
      "Portada: «En línea en 1 día — rápida, bilingüe, accesible» junto a un portátil y un móvil que muestran la web bilingüe de un psicólogo deportivo.",
  },
];

const GIG_TEXT: Record<Locale, GigText[]> = { en: gigText, hu, de, es };

export function getGigText(locale: Locale): GigText[] {
  return GIG_TEXT[locale];
}
