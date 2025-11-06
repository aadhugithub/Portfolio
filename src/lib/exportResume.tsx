import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { pdf, Page, Text, View, Document as PDFDoc } from "@react-pdf/renderer";
import { createClient } from "@/lib/supabaseClient";

const supabase = createClient();

/** Generate and upload DOCX */
export async function exportDOCX(resume: any) {
  const doc = new Document({
    sections: [
      {
        children: [
          new Paragraph({ text: resume.name, heading: "Heading1" }),
          new Paragraph({ text: resume.title }),
          new Paragraph({ text: `${resume.email} • ${resume.phone}` }),
          new Paragraph({ text: resume.summary }),
          ...resume.experiences.map(
            (exp: any) =>
              new Paragraph({
                children: [
                  new TextRun({ text: `${exp.company} - ${exp.role} (${exp.duration})`, bold: true }),
                  new TextRun({ text: `\n${exp.description}` }),
                ],
              })
          ),
        ],
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  const fileName = `${resume.name.replace(/\s/g, "_")}_resume.docx`;

  // ✅ Upload to Supabase Storage
  const { data, error } = await supabase.storage
    .from("resumes")
    .upload(fileName, blob, { upsert: true, contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });

  if (error) console.error("DOCX upload error:", error);
  else console.log("DOCX uploaded:", data);

  saveAs(blob, fileName);
}

/** Generate and upload PDF */
export async function exportPDF(resume: any) {
  const PDF = (
    <PDFDoc>
      <Page style={{ padding: 30 }}>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{resume.name}</Text>
          <Text>{resume.title}</Text>
          <Text>{resume.email} • {resume.phone}</Text>
          <Text style={{ marginTop: 10 }}>{resume.summary}</Text>
          <View style={{ marginTop: 20 }}>
            {resume.experiences.map((exp: any, i: number) => (
              <View key={i} style={{ marginBottom: 10 }}>
                <Text style={{ fontWeight: "bold" }}>
                  {exp.company} — {exp.role} ({exp.duration})
                </Text>
                <Text>{exp.description}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </PDFDoc>
  );

  const blob = await pdf(PDF).toBlob();
  const fileName = `${resume.name.replace(/\s/g, "_")}_resume.pdf`;

  // ✅ Upload to Supabase Storage
  const { data, error } = await supabase.storage
    .from("resumes")
    .upload(fileName, blob, { upsert: true, contentType: "application/pdf" });

  if (error) console.error("PDF upload error:", error);
  else console.log("PDF uploaded:", data);

  saveAs(blob, fileName);
}
