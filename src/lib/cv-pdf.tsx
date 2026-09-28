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
import {
  awards,
  education,
  experience,
  googleCertificationGroups,
  languages,
  otherCertifications,
  selectedProjects,
} from "@/content/cv";


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
  name: { fontSize: 24, fontWeight: "bold", marginBottom: 8, letterSpacing: 0.3 },
  linkRow: { flexDirection: "row", alignItems: "center", marginBottom: 5 },
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
  includePhoto: boolean;
  photoDataUrl?: string;
}

export function CvDoc({ includePhoto, photoDataUrl }: CvDocProps) {
  return (
    <Document
      title="Balint Decsi — CV"
      author="Balint Decsi"
      subject="Curriculum Vitae"
      creator="balintdecsi.dev"
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={styles.name}>Bálint Décsi</Text>
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
            <Text style={styles.meta}>Vienna, Austria / Budapest, Hungary</Text>
          </View>
          {includePhoto && photoDataUrl ? (
            <Image src={photoDataUrl} style={styles.photo} />
          ) : null}
        </View>

        <Text style={styles.sectionTitle}>Experience</Text>
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

      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>Education</Text>
        {education.map((e, i) => (
          <View key={i} style={styles.entry} wrap={false}>
            <Text style={styles.entryTitle}>{e.degree}</Text>
            <Text style={styles.entryMeta}>{e.org} · {e.date}</Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Languages</Text>
        <Text>{languages.map((language) => `${language.name} — ${language.level}`).join(" · ")}</Text>
        <Text style={styles.sectionTitle}>Selected projects</Text>
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

        <Text style={styles.sectionTitle}>Google Cloud certifications</Text>
        {googleCertificationGroups.map((group) => (
          <View key={group.title} style={styles.listItem} wrap={false}>
            <Text style={{ fontWeight: "bold", marginRight: 6 }}>{group.title}</Text>
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

        <Text style={styles.sectionTitle}>Awards & scholarships</Text>
        <Text>{awards.join(" · ")}</Text>

      </Page>
    </Document>
  );
}