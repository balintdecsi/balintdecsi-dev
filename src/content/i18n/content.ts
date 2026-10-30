import type { Locale } from "@/lib/locale";
import {
  awards,
  education,
  experience,
  googleCertificationGroups,
  languages,
  otherCertifications,
  selectedProjects,
  type Certification,
  type EducationEntry,
  type ExperienceEntry,
  type SelectedProject,
} from "@/content/cv";
import { sideProjects, type Project } from "@/content/projects";
import { demoText, liveText, mscText, thesisText, topicText, type WorkLinked, type WorkText } from "@/content/work";

/**
 * Translated CV content. Arrays follow the English source order in cv.ts /
 * work.ts index by index; links, org names, URLs and tech tags are reused
 * from the English source and never duplicated here.
 */
interface Overrides {
  experience: Pick<ExperienceEntry, "title" | "date" | "location" | "bullets">[];
  education: Pick<EducationEntry, "degree" | "org">[];
  languages: { name: string; level: string }[];
  awards: string[];
  certGroups: string[];
  otherCerts: Pick<Certification, "name" | "issuer" | "date">[];
  projects: Pick<SelectedProject, "name" | "role" | "client" | "date" | "summary" | "highlights">[];
  live: WorkText[];
  msc: WorkLinked;
  demos: WorkLinked[];
  theses: Record<string, { title: string; blurb: string }>;
  topics: Record<string, { title: string; description?: string }>;
  sideProjects: Pick<Project, "blurb">[];
}

const hu: Overrides = {
  experience: [
    {
      title: "CTO",
      date: "2026. máj. — jelenleg",
      location: "Bécs, Ausztria",
      bullets: [
        "A technológiai stratégia és megvalósítás irányítása a Proximatánál, egy bécsi hacker labban.",
        "Termék- és mérnöki döntések vezetése AI-native termékeknél, az ötlettől az éles üzemig.",
        "Tech megoldások és spinoffok építése: infrastruktúrával és erőforrásokkal támogatjuk az ambiciózus buildereket.",
      ],
    },
    {
      title: "Builder",
      date: "2025. jún. — jelenleg",
      location: "Budapest",
      bullets: [
        "Tag Magyarország első hacker space-ében.",
        "ML-alapú SaaS fejlesztése, amely képekből konzisztens karakterekkel generál stilizált képregényeket.",
        "Gyors prototipizálás Supabase, Firebase és modern full-stack eszközök segítségével.",
        "AI-ügynökök (Cursor, Gemini CLI, Copilot) használata a gyorsított, párhuzamosított fejlesztéshez.",
      ],
    },
    {
      title: "Data Engineer",
      date: "2024. máj. — 2026. júl.",
      location: "Budapest",
      bullets: [
        "Skálázható ML-megoldások és pipeline-ok fejlesztése a vezetékes üzletág számára.",
        "Modern data lakehouse építése Apache Iceberg alapon, Google Cloud Platformon.",
        "Automatizált Apache Airflow pipeline-ok fejlesztése megbízható adatbetöltéshez és -feldolgozáshoz.",
      ],
    },
    {
      title: "Advanced Analytics szakértő",
      date: "2023. okt. — 2024. ápr.",
      location: "Budapest",
      bullets: [
        "Hálózati infrastruktúra optimalizálása felügyelet nélküli (unsupervised) gépi tanulási módszerekkel.",
        "Magyarázható MI (XAI) bevezetése az üzleti bevonódás és a modelldöntésekbe vetett bizalom erősítésére.",
        "Interaktív térinformatikai vizualizációk fejlesztése a stratégiai hálózattervezés támogatására.",
      ],
    },
    {
      title: "Discover Graduate Program (pályakezdő program)",
      date: "2021. szept. — 2023. okt.",
      location: "Budapest",
      bullets: [
        "Rotációk: Data Engineer, adattárház-specialista, adatelemző, Data Scientist.",
        "Felhőmigrációs ETL pipeline-ok építése és data martok optimalizálása cloud-native lakehouse-on.",
        "Térinformatikai kiskereskedelmi adatmodellek tervezése, elemzések átültetése stakeholder riportokba.",
        "ML-modellek szállítása B2B ügyfeleknek, térinformatikai feature store és automatizált versenytárs-figyelő scraping.",
      ],
    },
    {
      title: "Kutató hallgató",
      date: "2019. jan. — 2020. jún.",
      location: "Szeged",
      bullets: [
        "Számítógépes látás (computer vision) pluginek fejlesztése automatizált biológiai képelemzéshez.",
        "Mélytanulási módszerek alkalmazása nagy áteresztőképességű mikroszkópos adatokon.",
        "Robusztus adatkezelő rendszerek tervezése és megvalósítása nagy léptékű mérésekhez.",
      ],
    },
  ],
  education: [
    { degree: "Business Analytics MSc", org: "Central European University" },
    { degree: "Molekuláris bionika BSc", org: "Szegedi Tudományegyetem" },
    { degree: "Csereév — orvosbiológiai mérnöki képzés", org: "Universidad CES, Kolumbia" },
  ],
  languages: [
    { name: "Angol", level: "felsőfok (C1)" },
    { name: "Spanyol", level: "felsőfok (C1)" },
    { name: "Német", level: "alapfok" },
    { name: "Magyar", level: "anyanyelv" },
  ],
  awards: [
    "Kiemelt Tanulmányi Ösztöndíj (Magyar Állam)",
    "Szeged Megyei Jogú Város ösztöndíja",
    "Campus Mundi ösztöndíj",
    "IT Star Award",
    "Data Rockstar",
  ],
  certGroups: ["Google Cloud: generatív MI", "Google Cloud: adat- és felhőmérnökség", "Google Cloud: ML engineering"],
  otherCerts: [
    { name: "Python Fundamentals Track", issuer: "DataCamp", date: "2021. máj." },
    { name: "EUGLOH nyári egyetem", issuer: "European University Alliance for Global Health", date: "2020. júl." },
  ],
  projects: [
    {
      name: "Budapesti albérletár-előrejelzés",
      role: "Machine Learning Engineer",
      client: "ingatlan.com (MSc capstone, CEU)",
      date: "2026. márc. — 2026. júl.",
      summary:
        "Bérleti díj-javasló modell budapesti lakásokra, hogy a hirdetők már a feltöltéskor versenyképes árat adhassanak meg, és rövidüljön a piacon töltött idő.",
      highlights: [
        "9,8% MdAPE 50 898 hirdetésen, gördülő idősoros keresztvalidációval és a legfrissebb 20% befagyasztott holdoutjával — jobb az ügyfél ≤10%-os céljánál.",
        "Térinformatikai gazdagítás Uber H3 cellákon: késleltetett WorldPop demográfia és Sentinel-2 NDVI zöldterület-index a Microsoft Planetary Computerből.",
        "Medallion (bronze→silver→gold) adattárház, SHAP/permutációs diagnosztika és egy azonnali árazási UI-terv.",
      ],
    },
    {
      name: "Közép-európai hacker space mozgalom",
      role: "Társalapító és CTO",
      client: "Proximata (Bécs) · mesh. (Budapest)",
      date: "2025. máj. — jelenleg",
      summary:
        "Builder közösség és innovációs tér, ahol a technikai tehetségek gyakorlati építésen, megbízásos munkán és inkubáción keresztül fejlődnek. A technológiai stratégiát vezetem, és AI-native termékeket viszek el az ötlettől az éles üzemig.",
      highlights: [
        "Comics Factory: ML-alapú SaaS, amely néhány referenciaképből konzisztens karakterekkel generál stilizált képregényeket.",
        "Gyors full-stack prototipizálás Supabase, Firebase és Firestore alapon; AI-ügynökök (Cursor, Gemini CLI, Copilot) a párhuzamosított szállításhoz.",
      ],
    },
    {
      name: "Szuverén adatplatform",
      role: "Data Engineer",
      client: "Deutsche Telekom",
      date: "2024. máj. — 2026. júl.",
      summary:
        "Egy 20 éves, érzékeny ügyféladatokkal teli és szigorú uniós szabályozás alá eső telkós adatvagyon átalakítása rugalmas, cloud-native lakehouse-zá.",
      highlights: [
        "Apache Iceberg lakehouse Google Cloudon, automatizált Airflow adatbetöltéssel a vezetékes üzletág számára.",
        "Skálázható ML-megoldások és pipeline-ok GitLab CI/CD-n keresztül szállítva.",
      ],
    },
    {
      name: "Hazai értékesítési hálózat optimalizálása",
      role: "Data Scientist",
      client: "Vodafone Magyarország (B2B: telkó és bank)",
      date: "2022. dec. — 2024. ápr.",
      summary:
        "Zöldmezős térinformatikai gépi tanulás a hazai kiskereskedelmi hálózat optimalizálására Magyarország legnagyobb telkó- és bankcégeinél. Kis csapattal fedtük le a teljes adat- és ML-modellezést, a feature store-tól az ügyfélprezentációig.",
      highlights: [
        "ML-modellek end-to-end szállítása külső B2B ügyfeleknek, egyedi térinformatikai és helyalapú feature store-ra építve.",
        "Unsupervised modellek a hálózati infrastruktúra optimalizálására, XAI-jal a modelldöntésekbe vetett üzleti bizalomért.",
        "Automatizált web scraping versenytárs-figyeléshez és interaktív térinformatikai vizualizációk a stratégiai hálózattervezéshez.",
      ],
    },
    {
      name: "Vodafone Magyarország adatmigráció",
      role: "Data Engineer",
      client: "Vodafone Magyarország",
      date: "2021. szept. — 2022. szept.",
      summary:
        "Magyarország második legnagyobb telkócége — a UPC Magyarország felvásárlása után ~3,8 millió lakossági és üzleti előfizető — adat- és analitikai platformjának átköltöztetése Google Cloudra.",
      highlights: [
        "ETL pipeline-ok építése a kritikus on-premise adatok felhőbe migrálásához.",
        "Optimalizált data martok tervezése és megvalósítása cloud-native lakehouse architektúrán.",
        "Együttműködés cross-funkcionális stakeholderekkel a technikai adatigények meghatározásában.",
      ],
    },
  ],
  live: [
    {
      name: "Proximata",
      role: "Társalapító és CTO — AI-native termékek laborja",
      summary:
        "Bécsi hacker lab, amely AI-native termékeket épít. Társalapítóként CTO-ként vezetem a technológiai stratégiát — az infrastruktúrától a venture buildingig és a spinoffokig.",
    },
    {
      name: "Open Drone Space",
      role: "Open source szemléletű térkép drónpilótáknak — data pipeline engineer",
      summary:
        "Open source szemléletű térkép drónpilóták számára, amely Magyarország statikus drónos légtérrétegeit mutatja (tiltott zónák, repülőtéri zónák, légtér). Én építettem az adat-pipeline-okat, amelyek tucatnyi forrásból, eltérő gyakorisággal scrapelnek és töltenek be adatot.",
    },
    {
      name: "Skills",
      role: "Globális skill-könyvtár az AI-ügynökeimnek",
      summary:
        "A projekteken átívelő globális skillek, amelyeket az ügynökeimhez használok — újrahasznosítható, verziókezelt skill-definíciók, amelyeken minden ügynökbeállításom osztozik.",
    },
  ],
  msc: {
    name: "MSc capstone — budapesti albérletár-előrejelzés",
    role: "ingatlan.com × CEU · end-to-end modellezési riport",
    summary:
      "Az MSc Business Analytics capstone-om nyilvános összefoglalója: időbeli validáció, térinformatikai gazdagítás (WorldPop + Sentinel-2 NDVI H3 cellákon), modell-ranglista, SHAP diagnosztika és termékjavaslatok.",
    linkLabel: "riport megnyitása",
  },
  demos: [
    {
      name: "Comics Factory",
      role: "ML-alapú SaaS stilizált képregényekhez, konzisztens karakterekkel",
      summary:
        "Stilizált képregények generálása konzisztens karakterekkel, néhány referenciaképből. Magyarország első hacker space-ében készült Supabase, Firebase és modern képgeneráló pipeline-ok segítségével.",
      linkLabel: "comicsfactory.tech",
    },
    {
      name: "CEU FeedForward",
      role: "Anonim hallgatói visszajelző platform a CEU-nak",
      summary:
        "Egy biztonságos, GDPR-kompatibilis hallgatói visszajelző platform MVP demója — regisztráció hitelesített @student.ceu.edu címmel, strukturált értékelések, szabad szöveges megjegyzések és intézményi dashboardok.",
      linkLabel: "demo megnyitása",
    },
    {
      name: "PDF → Word",
      role: "PDF konvertálása .docx-be, teljesen a böngészőben",
      summary:
        "Húzz be egy PDF-et, és tölts le egy szerkeszthető .docx-et. Teljesen kliensoldalon fut a pdf.js segítségével — egyetlen fájl sem hagyja el a gépedet.",
      linkLabel: "eszköz megnyitása",
    },
    {
      name: "Unibridge",
      role: "Beilleszkedést segítő társ nemzetközi hallgatóknak Bécsben",
      summary:
        "Többnyelvű prototípus, amely végigvezeti az új hallgatókat a lakhatás, az egészségbiztosítás, a vízum és a helyi ügyintézés lépésein. Közjót szolgáló civic tech kísérletként készült.",
      linkLabel: "demo megnyitása",
    },
  ],
  theses: {
    "ceu-public-thesis": {
      title: "MSc capstone — budapesti albérletár-előrejelzés (ingatlan.com)",
      blurb:
        "A CEU Business Analytics capstone-om nyilvános anyagai az ingatlan.com-mal: Ft/m² alapú bérletidíj-modell a hirdetésfeltöltési folyamathoz, időrendi keresztvalidációval (legjobb eredmény: 9,84% MdAPE). A repó a CEU ETD nyilvános összefoglalóját (LaTeX, CC BY 4.0) és a ~21 diás ügyfélprezentációt tartalmazza. A teljes pipeline, az adatok és a technikai riport NDA alatt, a privát repóban maradnak.",
    },
    THESIS: {
      title: "BSc szakdolgozat — molekuláris bionika (Szegedi Tudományegyetem)",
      blurb:
        "A Szegedi Tudományegyetemen írt molekuláris bionika BSc szakdolgozatom kiegészítő MATLAB forráskódja: az írott dolgozathoz tartozó elemző szkriptek.",
    },
  },
  topics: {
    foss: { title: "Open source hozzájárulások" },
    "side-project": { title: "Mellékprojektek", description: "Saját fejlesztések és eszközök." },
    hackathon: { title: "Hackathonok", description: "Hétvégi buildek és versenyanyagok." },
    msc: { title: "MSc tárgyak", description: "CEU Business Analytics MSc beadandók és projektek." },
    bsc: { title: "BSc tárgyak", description: "Szegedi Tudományegyetem, molekuláris bionika." },
    assignment: { title: "Egyéb beadandók" },
  },
  sideProjects: [
    {
      blurb:
        "ML-alapú SaaS, amely néhány referenciaképből konzisztens karakterekkel generál stilizált képregényeket. Magyarország első hacker space-ében készült Supabase, Firebase és modern képgeneráló pipeline-ok segítségével.",
    },
  ],
};

const de: Overrides = {
  experience: [
    {
      title: "CTO",
      date: "Mai 2026 — heute",
      location: "Wien, Österreich",
      bullets: [
        "Verantwortung für technische Strategie und Umsetzung bei Proximata, einem AI-native Hacker Lab in Wien.",
        "Steuerung von Produkt- und Engineering-Entscheidungen für AI-native Produkte — vom Konzept bis in die Produktion.",
        "Aufbau von Tech-Lösungen und Spinoffs, indem ambitionierte Builder Infrastruktur und Ressourcen erhalten.",
      ],
    },
    {
      title: "Builder",
      date: "Juni 2025 — heute",
      location: "Budapest, Ungarn",
      bullets: [
        "Mitglied des ersten Hackerspace Ungarns.",
        "Entwicklung eines ML-getriebenen SaaS, das aus Bildern stilisierte Comics mit konsistenten Figuren generiert.",
        "Rapid Prototyping mit Supabase, Firebase und modernen Full-Stack-Tools.",
        "Einsatz von AI Agents (Cursor, Gemini CLI, Copilot) für beschleunigte, parallelisierte Entwicklung.",
      ],
    },
    {
      title: "Data Engineer",
      date: "Mai 2024 — Juli 2026",
      location: "Budapest, Ungarn",
      bullets: [
        "Entwicklung skalierbarer ML-Lösungen und Pipelines für das Festnetzgeschäft.",
        "Aufbau eines modernen Data Lakehouse mit Apache Iceberg auf der Google Cloud Platform.",
        "Entwicklung automatisierter Apache-Airflow-Pipelines für robuste Datenaufnahme und -verarbeitung.",
      ],
    },
    {
      title: "Advanced Analytics Expert",
      date: "Okt. 2023 — Apr. 2024",
      location: "Budapest, Ungarn",
      bullets: [
        "Optimierung der Netzinfrastruktur mit Methoden des Unsupervised Machine Learning.",
        "Einführung von Explainable AI (XAI), um Akzeptanz und Vertrauen des Business in Modellentscheidungen zu stärken.",
        "Entwicklung interaktiver Geodaten-Visualisierungen zur Unterstützung der strategischen Netzplanung.",
      ],
    },
    {
      title: "Discover Graduate Program (Traineeprogramm)",
      date: "Sept. 2021 — Okt. 2023",
      location: "Budapest, Ungarn",
      bullets: [
        "Rotationen: Data Engineer, Data Warehouse Specialist, Data Analyst, Data Scientist.",
        "Aufbau von ETL-Pipelines für die Cloud-Migration und Optimierung von Data Marts auf einem Cloud-nativen Lakehouse.",
        "Entwurf geobasierter Datenmodelle für den Retail und Aufbereitung der Analysen in Stakeholder-Reports.",
        "Lieferung von ML-Modellen für B2B-Kund:innen, eines Geo-Feature-Stores und automatisierten Competitive-Intelligence-Scrapings.",
      ],
    },
    {
      title: "Studentischer Forschungsmitarbeiter",
      date: "Jan. 2019 — Juni 2020",
      location: "Szeged, Ungarn",
      bullets: [
        "Entwicklung von Computer-Vision-Plugins für die automatisierte biologische Bildanalyse.",
        "Anwendung von Deep-Learning-Methoden auf Hochdurchsatz-Mikroskopiedaten.",
        "Konzeption und Umsetzung robuster Datenmanagementsysteme für großskalige Messreihen.",
      ],
    },
  ],
  education: [
    { degree: "MSc Business Analytics", org: "Central European University" },
    { degree: "BSc Molekulare Bionik", org: "Universität Szeged" },
    { degree: "Auslandssemester — Biomedizinische Technik", org: "Universidad CES, Kolumbien" },
  ],
  languages: [
    { name: "Englisch", level: "verhandlungssicher (C1)" },
    { name: "Spanisch", level: "verhandlungssicher (C1)" },
    { name: "Deutsch", level: "Grundkenntnisse" },
    { name: "Ungarisch", level: "Muttersprache" },
  ],
  awards: [
    "Leistungsstipendium des ungarischen Staates",
    "Stipendium der Stadt Szeged",
    "Campus-Mundi-Stipendium",
    "IT Star Award",
    "Data Rockstar",
  ],
  certGroups: ["Google Cloud: Generative AI", "Google Cloud: Data & Cloud Engineering", "Google Cloud: ML Engineering"],
  otherCerts: [
    { name: "Python Fundamentals Track", issuer: "DataCamp", date: "Mai 2021" },
    { name: "EUGLOH Summer School", issuer: "European University Alliance for Global Health", date: "Juli 2020" },
  ],
  projects: [
    {
      name: "Mietpreisprognose für Budapest",
      role: "Machine Learning Engineer",
      client: "ingatlan.com (MSc-Capstone, CEU)",
      date: "März 2026 — Juli 2026",
      summary:
        "Mietpreis-Empfehlungsmodell für Budapester Wohnungen, damit Vermieter:innen schon beim Inserieren wettbewerbsfähig bepreisen und die Vermarktungsdauer sinkt.",
      highlights: [
        "9,8 % MdAPE auf 50.898 Inseraten mit rollierender Zeitreihen-Kreuzvalidierung und eingefrorenem Holdout der neuesten 20 % — besser als das Kundenziel von ≤10 %.",
        "Geodaten-Anreicherung auf Uber-H3-Zellen: verzögerte WorldPop-Demografie und Sentinel-2-NDVI (Grünflächenindex) über Microsoft Planetary Computer.",
        "Medallion-Warehouse (Bronze→Silver→Gold) mit SHAP-/Permutations-Diagnostik als Basis für ein Instant-Pricing-UI-Konzept.",
      ],
    },
    {
      name: "Mitteleuropäische Hackerspace-Bewegung",
      role: "Co-Founder & CTO",
      client: "Proximata (Wien) · mesh. (Budapest)",
      date: "Mai 2025 — heute",
      summary:
        "Builder-Community und Innovation Space, in dem technische Talente durch praktisches Bauen, Auftragsprojekte und Inkubation wachsen. Ich verantworte die technische Strategie und bringe AI-native Produkte vom Konzept in die Produktion.",
      highlights: [
        "Comics Factory: ML-getriebenes SaaS, das aus wenigen Referenzbildern stilisierte Comics mit konsistenten Figuren generiert.",
        "Rapid Full-Stack Prototyping mit Supabase, Firebase und Firestore; AI Agents (Cursor, Gemini CLI, Copilot) für parallelisierte Delivery.",
      ],
    },
    {
      name: "Souveräne Datenplattform",
      role: "Data Engineer",
      client: "Deutsche Telekom",
      date: "Mai 2024 — Juli 2026",
      summary:
        "Transformation eines 20 Jahre gewachsenen Telko-Datenbestands — voller sensibler Kundendaten und unter strenger EU-Regulierung — in ein agiles, Cloud-natives Lakehouse.",
      highlights: [
        "Apache-Iceberg-Lakehouse auf Google Cloud mit automatisierter Airflow-Ingestion für das Festnetzgeschäft.",
        "Skalierbare ML-Lösungen und Pipelines, ausgeliefert über GitLab CI/CD.",
      ],
    },
    {
      name: "Optimierung des Filialnetzes in Ungarn",
      role: "Data Scientist",
      client: "Vodafone Ungarn (B2B: Telko & Banking)",
      date: "Dez. 2022 — Apr. 2024",
      summary:
        "Greenfield-Geo-Machine-Learning zur Optimierung des Filialnetzes bei Ungarns größten Telko- und Bankunternehmen. Ein kleines Team deckte Data und ML-Modellierung end-to-end ab — vom Feature Store bis zur Präsentation beim Kunden.",
      highlights: [
        "End-to-end-Lieferung von ML-Modellen für externe B2B-Kund:innen auf einem eigenen Geo- und Location-Feature-Store.",
        "Unsupervised-Modelle zur Optimierung der Netzinfrastruktur, mit Explainable AI (XAI) für Vertrauen in Modellentscheidungen.",
        "Automatisiertes Web Scraping für Competitive Intelligence und interaktive Geodaten-Visualisierungen für die strategische Netzplanung.",
      ],
    },
    {
      name: "Datenmigration bei Vodafone Ungarn",
      role: "Data Engineer",
      client: "Vodafone Ungarn",
      date: "Sept. 2021 — Sept. 2022",
      summary:
        "Migration der Daten- und Analytics-Plattform von Ungarns zweitgrößtem Telko — nach der Übernahme von UPC Ungarn rund 3,8 Mio. Privat- und Geschäftskund:innen — auf Google Cloud.",
      highlights: [
        "Aufbau von ETL-Pipelines zur Migration kritischer On-Premise-Daten in Cloud-Umgebungen.",
        "Konzeption und Umsetzung optimierter Data Marts auf einer Cloud-nativen Lakehouse-Architektur.",
        "Abstimmung technischer Datenanforderungen mit cross-funktionalen Stakeholdern.",
      ],
    },
  ],
  live: [
    {
      name: "Proximata",
      role: "Co-Founder & CTO — Lab für AI-native Produkte",
      summary:
        "AI-native Hacker Lab in Wien. Ich habe Proximata mitgegründet und verantworte als CTO die technische Strategie — von der Infrastruktur bis zu Venture Building und Spinoffs.",
    },
    {
      name: "Open Drone Space",
      role: "Open-Source-orientierte Karte für Drohnenpilot:innen — Data Pipeline Engineer",
      summary:
        "Eine Open-Source-orientierte Karte für Drohnenpilot:innen mit Ungarns statischen Luftraumlayern für Drohnen (Flugverbotszonen, Flugplatzzonen, Lufträume). Ich habe die Datenpipelines gebaut, die ein Dutzend Quellen in unterschiedlichen Intervallen scrapen und abrufen.",
    },
    {
      name: "Skills",
      role: "Globale Skill-Library für meine AI Agents",
      summary:
        "Die globalen Skills, die ich projektübergreifend für meine Agents nutze — wiederverwendbare, versionierte Skill-Definitionen, die sich alle meine Agent-Setups teilen.",
    },
  ],
  msc: {
    name: "MSc-Capstone — Mietpreisprognose für Budapest",
    role: "ingatlan.com × CEU · End-to-end-Modellierungsreport",
    summary:
      "Öffentliche Zusammenfassung meines MSc-Business-Analytics-Capstones: zeitliche Validierung, Geodaten-Anreicherung (WorldPop + Sentinel-2-NDVI auf H3), Modell-Leaderboard, SHAP-Diagnostik und Produktempfehlungen.",
    linkLabel: "Report lesen",
  },
  demos: [
    {
      name: "Comics Factory",
      role: "ML-getriebenes SaaS für stilisierte Comics mit konsistenten Figuren",
      summary:
        "Generiert stilisierte Comics mit konsistenten Figuren aus wenigen Referenzbildern. Entstanden im ersten Hackerspace Ungarns mit Supabase, Firebase und modernen Image-Gen-Pipelines.",
      linkLabel: "comicsfactory.tech",
    },
    {
      name: "CEU FeedForward",
      role: "Anonyme Feedback-Plattform für Studierende der CEU",
      summary:
        "MVP-Demo einer sicheren, DSGVO-konformen Feedback-Plattform für Studierende — Registrierung mit verifizierter @student.ceu.edu-Adresse, strukturierte Bewertungen, Freitextkommentare und Dashboards für die Hochschule.",
      linkLabel: "Demo öffnen",
    },
    {
      name: "PDF → Word",
      role: "PDF in .docx umwandeln — komplett im Browser",
      summary:
        "PDF hineinziehen und eine bearbeitbare .docx herunterladen. Läuft vollständig clientseitig mit pdf.js — keine Datei verlässt den eigenen Rechner.",
      linkLabel: "Tool öffnen",
    },
    {
      name: "Unibridge",
      role: "Onboarding-Begleiter für internationale Studierende in Wien",
      summary:
        "Mehrsprachiger Prototyp, der neue Studierende durch Wohnungssuche, Krankenversicherung, Visum und Behördenwege führt. Entstanden als gemeinnütziges Civic-Tech-Experiment.",
      linkLabel: "Demo öffnen",
    },
  ],
  theses: {
    "ceu-public-thesis": {
      title: "MSc-Capstone — Mietpreisprognose für Budapest (ingatlan.com)",
      blurb:
        "Öffentliche Ergebnisse meines CEU-Business-Analytics-Capstones mit ingatlan.com: ein Mietpreismodell (HUF/m²) für den Inserat-Upload, validiert mit zeitlich geordneter Kreuzvalidierung (bestes Ergebnis 9,84 % MdAPE). Das Repo enthält die öffentliche CEU-ETD-Zusammenfassung (LaTeX, CC BY 4.0) und das ~21-seitige Pitch-Deck für den Kunden. Vollständige Pipeline, Daten und technischer Report bleiben unter NDA im privaten Repo.",
    },
    THESIS: {
      title: "Bachelorarbeit — Molekulare Bionik (Universität Szeged)",
      blurb:
        "Ergänzender MATLAB-Quellcode zu meiner Bachelorarbeit in Molekularer Bionik an der Universität Szeged — die Analyse-Skripte zur schriftlichen Arbeit.",
    },
  },
  topics: {
    foss: { title: "Open-Source-Beiträge" },
    "side-project": { title: "Side Projects", description: "Eigene Builds und Tools." },
    hackathon: { title: "Hackathons", description: "Wochenend-Builds und Wettbewerbsbeiträge." },
    msc: { title: "MSc-Kursarbeiten", description: "Aufgaben und Projekte aus dem CEU MSc Business Analytics." },
    bsc: { title: "BSc-Kursarbeiten", description: "Universität Szeged, Molekulare Bionik." },
    assignment: { title: "Sonstige Aufgaben" },
  },
  sideProjects: [
    {
      blurb:
        "ML-getriebenes SaaS, das aus wenigen Referenzbildern stilisierte Comics mit konsistenten Figuren generiert. Entstanden im ersten Hackerspace Ungarns mit Supabase, Firebase und modernen Image-Gen-Pipelines.",
    },
  ],
};

const es: Overrides = {
  experience: [
    {
      title: "CTO",
      date: "may. 2026 — actualidad",
      location: "Viena, Austria",
      bullets: [
        "Liderazgo de la estrategia y la ejecución técnica en Proximata, un hacker lab con sede en Viena.",
        "Dirección de las decisiones de producto e ingeniería en productos AI-native, desde el concepto hasta producción.",
        "Creación de soluciones tecnológicas y spinoffs, dotando de infraestructura y recursos a builders ambiciosos.",
      ],
    },
    {
      title: "Builder",
      date: "jun. 2025 — actualidad",
      location: "Budapest, Hungría",
      bullets: [
        "Miembro del primer hacker space de Hungría.",
        "Desarrollo de un SaaS basado en ML que genera cómics estilizados con personajes consistentes a partir de imágenes.",
        "Prototipado rápido con Supabase, Firebase y herramientas full-stack modernas.",
        "Uso de agentes de IA (Cursor, Gemini CLI, Copilot) para un desarrollo acelerado y en paralelo.",
      ],
    },
    {
      title: "Data Engineer",
      date: "may. 2024 — jul. 2026",
      location: "Budapest, Hungría",
      bullets: [
        "Desarrollo de soluciones y pipelines de ML escalables para el negocio de telefonía fija.",
        "Construcción de un data lakehouse moderno con Apache Iceberg en Google Cloud Platform.",
        "Desarrollo de pipelines automatizados en Apache Airflow para una ingesta y un procesamiento de datos robustos.",
      ],
    },
    {
      title: "Experto en Analítica Avanzada",
      date: "oct. 2023 — abr. 2024",
      location: "Budapest, Hungría",
      bullets: [
        "Optimización de la infraestructura de red con técnicas de Machine Learning no supervisado.",
        "Implantación de IA explicable (XAI) para impulsar la adopción por parte del negocio y la confianza en las decisiones del modelo.",
        "Desarrollo de visualizaciones geoespaciales interactivas para la planificación estratégica de la red.",
      ],
    },
    {
      title: "Discover Graduate Program (programa de graduados)",
      date: "sept. 2021 — oct. 2023",
      location: "Budapest, Hungría",
      bullets: [
        "Rotaciones: Data Engineer, especialista en Data Warehouse, Data Analyst y Data Scientist.",
        "Construcción de pipelines ETL para la migración a cloud y optimización de data marts en un lakehouse cloud-native.",
        "Diseño de modelos de datos geoespaciales para retail y traducción de los análisis en informes para stakeholders.",
        "Entrega de modelos de ML para clientes B2B, un feature store geoespacial y scraping automatizado de inteligencia competitiva.",
      ],
    },
    {
      title: "Becario de investigación (grado)",
      date: "ene. 2019 — jun. 2020",
      location: "Szeged, Hungría",
      bullets: [
        "Desarrollo de plugins de visión por computador para el análisis automatizado de imágenes biológicas.",
        "Aplicación de técnicas de deep learning a datos de microscopía de alto rendimiento.",
        "Diseño e implementación de sistemas robustos de gestión de datos para mediciones a gran escala.",
      ],
    },
  ],
  education: [
    { degree: "MS en Business Analytics", org: "Central European University" },
    { degree: "Grado en Biónica Molecular", org: "Universidad de Szeged" },
    { degree: "Intercambio — Ingeniería Biomédica", org: "Universidad CES, Colombia" },
  ],
  languages: [
    { name: "Inglés", level: "avanzado (C1)" },
    { name: "Español", level: "avanzado (C1)" },
    { name: "Alemán", level: "básico" },
    { name: "Húngaro", level: "nativo" },
  ],
  awards: [
    "Beca de Estudios Destacados del Estado húngaro",
    "Beca municipal de Szeged",
    "Beca Campus Mundi",
    "IT Star Award",
    "Data Rockstar",
  ],
  certGroups: ["Google Cloud: IA generativa", "Google Cloud: ingeniería de datos y cloud", "Google Cloud: ingeniería de ML"],
  otherCerts: [
    { name: "Python Fundamentals Track", issuer: "DataCamp", date: "may. 2021" },
    { name: "Escuela de verano EUGLOH", issuer: "European University Alliance for Global Health", date: "jul. 2020" },
  ],
  projects: [
    {
      name: "Predicción de precios de alquiler en Budapest",
      role: "Machine Learning Engineer",
      client: "ingatlan.com (proyecto final de MSc, CEU)",
      date: "mar. 2026 — jul. 2026",
      summary:
        "Modelo de sugerencia de alquiler para pisos en Budapest, para que los propietarios fijen un precio competitivo al publicar el anuncio y reduzcan el tiempo en el mercado.",
      highlights: [
        "9,8 % de MdAPE sobre 50.898 anuncios con validación cruzada temporal deslizante y un holdout congelado del 20 % más reciente, mejorando el objetivo del cliente (≤10 %).",
        "Enriquecimiento geoespacial sobre celdas Uber H3: demografía WorldPop con desfase y NDVI de Sentinel-2 (índice de vegetación) vía Microsoft Planetary Computer.",
        "Data warehouse Medallion (bronze→silver→gold) y diagnósticos SHAP/permutación para un diseño de UI de precio instantáneo.",
      ],
    },
    {
      name: "Movimiento de hacker spaces en Europa Central",
      role: "Cofundador y CTO",
      client: "Proximata (Viena) · mesh. (Budapest)",
      date: "may. 2025 — actualidad",
      summary:
        "Comunidad de builders y espacio de innovación donde el talento técnico crece construyendo, con proyectos para clientes e incubación. Lidero la estrategia técnica y llevo productos AI-native del concepto a producción.",
      highlights: [
        "Comics Factory: SaaS basado en ML que genera cómics estilizados con personajes consistentes a partir de unas pocas imágenes de referencia.",
        "Prototipado full-stack rápido con Supabase, Firebase y Firestore; agentes de IA (Cursor, Gemini CLI, Copilot) para entregas en paralelo.",
      ],
    },
    {
      name: "Plataforma de datos soberana",
      role: "Data Engineer",
      client: "Deutsche Telekom",
      date: "may. 2024 — jul. 2026",
      summary:
        "Transformación de un patrimonio de datos de telecomunicaciones de 20 años — lleno de datos sensibles de clientes y sujeto a una estricta regulación europea — en un lakehouse ágil y cloud-native.",
      highlights: [
        "Lakehouse con Apache Iceberg en Google Cloud e ingesta automatizada con Airflow para el negocio de telefonía fija.",
        "Soluciones y pipelines de ML escalables desplegados mediante GitLab CI/CD.",
      ],
    },
    {
      name: "Optimización de la red comercial en Hungría",
      role: "Data Scientist",
      client: "Vodafone Hungría (B2B: telecomunicaciones y banca)",
      date: "dic. 2022 — abr. 2024",
      summary:
        "Machine Learning geoespacial desde cero para optimizar la red de puntos de venta de las mayores empresas de telecomunicaciones y banca de Hungría. Un equipo pequeño cubrió de extremo a extremo los datos y el modelado de ML, desde el feature store hasta la presentación al cliente.",
      highlights: [
        "Entrega de extremo a extremo de modelos de ML para clientes B2B externos, sobre un feature store geoespacial y de localización a medida.",
        "Modelos no supervisados para optimizar la infraestructura de red, con IA explicable (XAI) para generar confianza en las decisiones del modelo.",
        "Web scraping automatizado de inteligencia competitiva y visualizaciones geoespaciales interactivas para la planificación estratégica de la red.",
      ],
    },
    {
      name: "Migración de datos de Vodafone Hungría",
      role: "Data Engineer",
      client: "Vodafone Hungría",
      date: "sept. 2021 — sept. 2022",
      summary:
        "Migración a Google Cloud de la plataforma de datos y analítica del segundo operador de telecomunicaciones de Hungría — unos 3,8 millones de abonados residenciales y empresariales tras la adquisición de UPC Hungría.",
      highlights: [
        "Construcción de pipelines ETL para migrar datos críticos on-premise a entornos cloud.",
        "Diseño e implementación de data marts optimizados sobre una arquitectura lakehouse cloud-native.",
        "Colaboración con stakeholders multidisciplinares para definir los requisitos técnicos de datos.",
      ],
    },
  ],
  live: [
    {
      name: "Proximata",
      role: "Cofundador y CTO — laboratorio de productos AI-native",
      summary:
        "Hacker lab con sede en Viena que construye productos AI-native. Cofundé Proximata y lidero la estrategia técnica como CTO: desde la infraestructura hasta el venture building y los spinoffs.",
    },
    {
      name: "Open Drone Space",
      role: "Mapa con espíritu open source para pilotos de drones — data pipeline engineer",
      summary:
        "Un mapa con espíritu open source para pilotos de drones que muestra las capas estáticas del espacio aéreo de Hungría para drones (zonas prohibidas, zonas de aeródromo, espacio aéreo). Diseñé los pipelines de datos que extraen y descargan información de una docena de fuentes con distintas frecuencias.",
    },
    {
      name: "Skills",
      role: "Biblioteca global de skills para mis agentes de IA",
      summary:
        "Las skills globales que uso con mis agentes en distintos proyectos: definiciones reutilizables y versionadas que comparten todas mis configuraciones de agentes.",
    },
  ],
  msc: {
    name: "Proyecto final de MSc — predicción de alquileres en Budapest",
    role: "ingatlan.com × CEU · informe de modelado de extremo a extremo",
    summary:
      "Resumen público de mi proyecto final del MSc en Business Analytics: validación temporal, enriquecimiento geoespacial (WorldPop + NDVI de Sentinel-2 sobre H3), ranking de modelos, diagnósticos SHAP y recomendaciones de producto.",
    linkLabel: "leer informe",
  },
  demos: [
    {
      name: "Comics Factory",
      role: "SaaS basado en ML para cómics estilizados con personajes consistentes",
      summary:
        "Genera cómics estilizados con personajes consistentes a partir de unas pocas imágenes de referencia. Creado en el primer hacker space de Hungría con Supabase, Firebase y pipelines modernos de generación de imágenes.",
      linkLabel: "comicsfactory.tech",
    },
    {
      name: "CEU FeedForward",
      role: "Plataforma de feedback estudiantil anónimo para la CEU",
      summary:
        "Demo MVP de una plataforma de feedback estudiantil segura y conforme al RGPD: registro con un correo verificado @student.ceu.edu, valoraciones estructuradas, comentarios libres y paneles para la institución.",
      linkLabel: "abrir demo",
    },
    {
      name: "PDF → Word",
      role: "Convierte un PDF a .docx, todo en el navegador",
      summary:
        "Arrastra un PDF y descarga un .docx editable. Funciona íntegramente en el navegador con pdf.js: ningún archivo sale de tu equipo.",
      linkLabel: "abrir herramienta",
    },
    {
      name: "Unibridge",
      role: "Guía de bienvenida para estudiantes internacionales en Viena",
      summary:
        "Prototipo multilingüe que acompaña a los nuevos estudiantes en vivienda, seguro médico, visado y trámites locales. Creado como experimento de civic tech de interés público.",
      linkLabel: "abrir demo",
    },
  ],
  theses: {
    "ceu-public-thesis": {
      title: "Proyecto final de MSc — predicción de alquileres en Budapest (ingatlan.com)",
      blurb:
        "Entregables públicos de mi proyecto final del MSc en Business Analytics de la CEU con ingatlan.com: un modelo de precio de alquiler (HUF/m²) para el flujo de publicación de anuncios, validado con validación cruzada temporal (mejor resultado: 9,84 % de MdAPE). El repositorio incluye el resumen público CEU ETD (LaTeX, CC BY 4.0) y la presentación de ~21 diapositivas para el cliente. El pipeline completo, los datos y el informe técnico siguen bajo NDA en el repositorio privado.",
    },
    THESIS: {
      title: "Trabajo de fin de grado — Biónica Molecular (Universidad de Szeged)",
      blurb:
        "Código fuente MATLAB complementario de mi TFG en Biónica Molecular en la Universidad de Szeged: los scripts de análisis que acompañan a la memoria escrita.",
    },
  },
  topics: {
    foss: { title: "Contribuciones open source" },
    "side-project": { title: "Proyectos personales", description: "Desarrollos y herramientas propias." },
    hackathon: { title: "Hackathons", description: "Proyectos de fin de semana y participaciones en competiciones." },
    msc: { title: "Asignaturas del MSc", description: "Trabajos y proyectos del MSc en Business Analytics de la CEU." },
    bsc: { title: "Asignaturas del grado", description: "Universidad de Szeged, Biónica Molecular." },
    assignment: { title: "Otros trabajos" },
  },
  sideProjects: [
    {
      blurb:
        "SaaS basado en ML que genera cómics estilizados con personajes consistentes a partir de unas pocas imágenes de referencia. Creado en el primer hacker space de Hungría con Supabase, Firebase y pipelines modernos de generación de imágenes.",
    },
  ],
};

const OVERRIDES: Partial<Record<Locale, Overrides>> = { hu, de, es };

export function getContent(locale: Locale) {
  const o = OVERRIDES[locale];
  const groups = googleCertificationGroups.map((g, i) => ({ ...g, title: o?.certGroups[i] ?? g.title }));
  return {
    experience: experience.map((e, i) => ({ ...e, ...o?.experience[i] })),
    education: education.map((e, i) => ({ ...e, ...o?.education[i] })),
    languages: o?.languages ?? languages,
    awards: o?.awards ?? awards,
    googleCertificationGroups: groups,
    otherCertifications: otherCertifications.map((c, i) => ({ ...c, ...o?.otherCerts[i] })),
    selectedProjects: selectedProjects.map((p, i) => ({ ...p, ...o?.projects[i] })),
    live: liveText.map((w, i) => ({ ...w, ...o?.live[i] })),
    msc: o?.msc ?? mscText,
    demos: demoText.map((w, i) => ({ ...w, ...o?.demos[i] })),
    theses: o?.theses ?? thesisText,
    topics: o?.topics ?? topicText,
    sideProjects: sideProjects.map((p, i) => ({ ...p, ...o?.sideProjects[i] })),
  };
}

export type LocalizedContent = ReturnType<typeof getContent>;
