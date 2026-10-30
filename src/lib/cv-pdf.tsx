import React from "react";
import {
  Document,
  Font,
  Image,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { getContent } from "@/content/i18n/content";
import { UI } from "@/content/i18n/ui";
import type { Locale } from "@/lib/locale";
import tinosRegular from "@/assets/fonts/Tinos-Regular.ttf?url";
import tinosBold from "@/assets/fonts/Tinos-Bold.ttf?url";
import tinosItalic from "@/assets/fonts/Tinos-Italic.ttf?url";


// Disable ligature substitution so extractors always see the source glyphs.
Font.registerHyphenationCallback((word) => [word]);

// Alias the built-in Standard 14 Times family so fontWeight/fontStyle map
// to the right embedded font. These are the PDF core fonts, so no file is
// fetched or embedded — the PDF stays small and text extraction is clean.
Font.register({
  family: "CvSerif",
  fonts: [
    { src: "Times-Roman" },
    { src: "Times-Bold", fontWeight: "bold" },
    { src: "Times-Italic", fontStyle: "italic" },
  ],
});

// Times (Standard 14) lacks ő/ű, so non-English CVs embed Tinos — a
// Times-metric open font with full Latin Extended coverage.
const abs = (u: string) => (typeof window !== "undefined" ? new URL(u, window.location.href).href : u);
Font.register({
  family: "CvSerifExt",
  fonts: [
    { src: abs(tinosRegular) },
    { src: abs(tinosBold), fontWeight: "bold" },
    { src: abs(tinosItalic), fontStyle: "italic" },
  ],
});

const styles = StyleSheet.create({
  page: {
    // Built-in Standard 14 PDF font — no embedding needed, guaranteed
    // ToUnicode mapping so extractors read clean text.
    fontFamily: "CvSerif",
    fontSize: 10,
    color: "#111",
    paddingTop: 50,
    paddingBottom: 50,
    paddingHorizontal: 56,
    lineHeight: 1.25,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 0.75,
    borderBottomWidth: 0.75,
    borderColor: "#999",
    paddingVertical: 10,
    marginBottom: 12,
  },
  headerText: { flexGrow: 1, flexShrink: 1 },
  name: { fontSize: 24, fontWeight: "bold", marginBottom: 14, letterSpacing: 0.3 },
  linkRow: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  link: { fontSize: 10, color: "#1a3d7c", textDecoration: "underline" },
  sep: { fontSize: 10, color: "#888", marginHorizontal: 6 },
  meta: { fontSize: 10, color: "#444" },
  photo: {
    width: 84,
    height: 84,
    marginLeft: 16,
    objectFit: "cover",
    borderWidth: 0.5,
    borderColor: "#999",
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 7,
    marginBottom: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: "#999",
    paddingBottom: 3,
  },
  entry: { marginBottom: 5 },
  entryTitle: { fontSize: 11, fontWeight: "bold" },
  entryMeta: { fontSize: 9, color: "#444", marginBottom: 2 },
  bullet: { flexDirection: "row", marginBottom: 1 },
  bulletMark: { width: 10 },
  bulletText: { flex: 1 },
  tags: { fontSize: 9.5, color: "#555", marginTop: 3, fontStyle: "italic" },
  listItem: { flexDirection: "row", marginBottom: 2 },
  inlineLink: { fontSize: 9, color: "#1a3d7c", textDecoration: "underline", marginRight: 5 },
});

export interface CvDocProps {
  locale?: Locale;
  includePhoto: boolean;
  photoDataUrl?: string;
}

export function CvDoc({ locale = "en", includePhoto, photoDataUrl }: CvDocProps) {
  const t = UI[locale];
  const {
    awards,
    education,
    experience,
    googleCertificationGroups,
    languages,
    otherCertifications,
    selectedProjects,
  } = getContent(locale);
  const pageStyle = locale === "en" ? styles.page : [styles.page, { fontFamily: "CvSerifExt" }];
  return (
    <Document
      title="Balint Decsi — CV"
      author="Balint Decsi"
      subject={t.pdf.subject}
      creator="balintdecsi.dev"
    >
      <Page size="A4" style={pageStyle}>
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={styles.name}>{locale === "hu" ? "Décsi Bálint" : "Bálint Décsi"}</Text>
            <View style={styles.linkRow}>
              <Link src="https://balintdecsi.dev" style={styles.link}>
                balintdecsi.dev
              </Link>
              <Text style={styles.sep}>·</Text>
              <Link
                src="https://www.linkedin.com/in/balintdecsi4b6b53183"
                style={styles.link}
              >
                linkedin
              </Link>
              <Text style={styles.sep}>·</Text>
              <Link src="https://github.com/balintdecsi" style={styles.link}>
                github
              </Link>
            </View>
            <Text style={styles.meta}>{t.home.locationValue}</Text>
          </View>
          {includePhoto && photoDataUrl ? (
            <Image src={photoDataUrl} style={styles.photo} />
          ) : null}
        </View>

        <Text style={styles.sectionTitle}>{t.pdf.experience}</Text>
        {experience.map((e, i) => (
          <View key={i} style={styles.entry} wrap={false}>
            <Text style={styles.entryTitle}>{e.title}</Text>
            <Text style={styles.entryMeta}>
              {e.org} · {e.date} · {e.location}
            </Text>
            {e.bullets.map((b, j) => (
              <View key={j} style={styles.bullet}>
                <Text style={styles.bulletMark}>•</Text>
                <Text style={styles.bulletText}>{b}</Text>
              </View>
            ))}
          </View>
        ))}

      </Page>

      <Page size="A4" style={pageStyle}>
        <Text style={styles.sectionTitle}>{t.pdf.education}</Text>
        {education.map((e, i) => (
          <View key={i} style={styles.entry} wrap={false}>
            <Text style={styles.entryTitle}>{e.degree}</Text>
            <Text style={styles.entryMeta}>{e.org} · {e.date}</Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>{t.pdf.languages}</Text>
        <Text>{languages.map((language) => `${language.name} — ${language.level}`).join(" · ")}</Text>
        <Text style={styles.sectionTitle}>{t.pdf.selectedProjects}</Text>
        {selectedProjects.map((p, i) => (
          <View key={i} style={styles.entry} wrap={false}>
            <Text style={styles.entryTitle}>{p.name}</Text>
            <Text style={styles.entryMeta}>
              {p.role} · {p.client} · {p.date}
            </Text>
            <Text>{p.summary}</Text>
            {p.links.length > 0 ? (
              <View style={styles.linkRow}>
                {p.links.map((l, j) => (
                  <React.Fragment key={l.href}>
                    {j > 0 ? <Text style={styles.sep}>·</Text> : null}
                    <Link src={l.href} style={styles.link}>{l.label}</Link>
                  </React.Fragment>
                ))}
              </View>
            ) : null}
          </View>
        ))}

        <Text style={styles.sectionTitle}>{t.pdf.googleCerts}</Text>
        {googleCertificationGroups.map((group) => (
          <View key={group.title} style={styles.listItem} wrap={false}>
            <Text style={{ marginRight: 6 }}>{group.title}</Text>
            {group.certifications.map((c, i) => (
              <Link key={c.name} src={c.url ?? ""} style={styles.inlineLink}>
                [{i + 1}]
              </Link>
            ))}
          </View>
        ))}
        {otherCertifications.map((c) => (
          <Text key={c.name}>{c.name} · {c.issuer} · {c.date}</Text>
        ))}

        <Text style={styles.sectionTitle}>{t.pdf.awards}</Text>
        <Text>{awards.join(" · ")}</Text>

      </Page>
    </Document>
  );
}