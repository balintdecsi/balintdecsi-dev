import {
  Document,
  Font,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import {
  awards,
  certifications,
  education,
  experience,
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
    fontSize: 11,
    color: "#111",
    paddingTop: 64,
    paddingBottom: 64,
    paddingHorizontal: 56,
    lineHeight: 1.4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 0.75,
    borderBottomWidth: 0.75,
    borderColor: "#999",
    paddingVertical: 12,
    marginBottom: 18,
  },
  headerText: { flexGrow: 1, flexShrink: 1 },
  name: { fontSize: 22, fontWeight: "bold", marginBottom: 4 },
  meta: { fontSize: 9.5, color: "#444" },
  photo: {
    width: 72,
    height: 72,
    marginLeft: 16,
    objectFit: "cover",
    borderWidth: 0.5,
    borderColor: "#999",
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 14,
    marginBottom: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: "#999",
    paddingBottom: 3,
  },
  entry: { marginBottom: 10 },
  entryTitle: { fontSize: 12, fontWeight: "bold" },
  entryMeta: { fontSize: 9.5, color: "#444", marginBottom: 3 },
  bullet: { flexDirection: "row", marginBottom: 1.5 },
  bulletMark: { width: 10 },
  bulletText: { flex: 1 },
  tags: { fontSize: 9.5, color: "#555", marginTop: 3, fontStyle: "italic" },
  listItem: { flexDirection: "row", marginBottom: 2 },
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
        <View style={styles.header} fixed>
          <View style={styles.headerText}>
            <Text style={styles.name}>Balint Decsi</Text>
            <Text style={styles.meta}>
              balintdecsi.dev · linkedin.com/in/balintdecsi4b6b53183 · github.com/balintdecsi
            </Text>
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
            {e.tags.length > 0 ? (
              <Text style={styles.tags}>{e.tags.join(" · ")}</Text>
            ) : null}
          </View>
        ))}

        <Text style={styles.sectionTitle}>Education</Text>
        {education.map((e, i) => (
          <View key={i} style={styles.entry} wrap={false}>
            <Text style={styles.entryTitle}>{e.degree}</Text>
            <Text style={styles.entryMeta}>
              {e.org} · {e.date}
            </Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Certifications</Text>
        {certifications.map((c, i) => (
          <View key={i} style={styles.listItem}>
            <Text style={styles.bulletMark}>•</Text>
            <Text style={styles.bulletText}>{c}</Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Awards & scholarships</Text>
        {awards.map((a, i) => (
          <View key={i} style={styles.listItem}>
            <Text style={styles.bulletMark}>•</Text>
            <Text style={styles.bulletText}>{a}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );
}