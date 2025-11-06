"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Save, Plus, FileDown, FileText } from "lucide-react";
import { createClient } from "@/lib/supabaseClient";
import { exportPDF, exportDOCX } from "@/lib/exportResume";

const supabase = createClient();

export default function ResumeBuilder() {
  const [resume, setResume] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    summary: "",
    experiences: [{ company: "", role: "", duration: "", description: "" }],
  });

  const addExperience = () =>
    setResume({
      ...resume,
      experiences: [
        ...resume.experiences,
        { company: "", role: "", duration: "", description: "" },
      ],
    });

  const handleChange = (index: number, field: string, value: string) => {
    const updated = [...resume.experiences];
    (updated as any)[index][field] = value;
    setResume({ ...resume, experiences: updated });
  };

  // ✅ Save Resume to Supabase
  const saveResume = async () => {
    const { data: user } = await supabase.auth.getUser();
    const payload = {
      user_id: user?.user?.id,
      data: resume,
      updated_at: new Date().toISOString(),
    };
    const { error } = await supabase.from("resume").upsert(payload, {
      onConflict: "user_id",
    });
    alert(error ? "❌ Error saving resume" : "✅ Resume saved successfully!");
  };

  return (
    <section className="p-8 space-y-6">
      <h2 className="text-2xl font-semibold">Resume Builder</h2>

      {/* Personal Info */}
      <div className="grid grid-cols-2 gap-4 max-w-3xl">
        <Input
          placeholder="Full Name"
          value={resume.name}
          onChange={(e) => setResume({ ...resume, name: e.target.value })}
        />
        <Input
          placeholder="Title"
          value={resume.title}
          onChange={(e) => setResume({ ...resume, title: e.target.value })}
        />
        <Input
          placeholder="Email"
          value={resume.email}
          onChange={(e) => setResume({ ...resume, email: e.target.value })}
        />
        <Input
          placeholder="Phone"
          value={resume.phone}
          onChange={(e) => setResume({ ...resume, phone: e.target.value })}
        />
      </div>

      {/* Summary */}
      <Textarea
        placeholder="Professional Summary"
        rows={4}
        value={resume.summary}
        onChange={(e) => setResume({ ...resume, summary: e.target.value })}
        className="max-w-3xl"
      />

      {/* Experience */}
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Experience</h3>
        {resume.experiences.map((exp, i) => (
          <div key={i} className="grid grid-cols-3 gap-3 max-w-3xl">
            <Input
              placeholder="Company"
              value={exp.company}
              onChange={(e) => handleChange(i, "company", e.target.value)}
            />
            <Input
              placeholder="Role"
              value={exp.role}
              onChange={(e) => handleChange(i, "role", e.target.value)}
            />
            <Input
              placeholder="Duration"
              value={exp.duration}
              onChange={(e) => handleChange(i, "duration", e.target.value)}
            />
            <Textarea
              placeholder="Description"
              rows={2}
              value={exp.description}
              onChange={(e) => handleChange(i, "description", e.target.value)}
              className="col-span-3"
            />
          </div>
        ))}

        <Button onClick={addExperience} variant="outline" className="flex items-center gap-2">
          <Plus size={16} /> Add Experience
        </Button>
      </div>

      {/* Actions */}
      <div className="flex gap-4 mt-8">
        <Button onClick={saveResume} className="bg-blue-600 hover:bg-blue-700">
          <Save size={16} className="mr-2" /> Save Resume
        </Button>

        <Button
          onClick={() => exportPDF(resume)}
          variant="outline"
          className="flex items-center gap-2"
        >
          <FileDown size={16} /> Download PDF
        </Button>

        <Button
          onClick={() => exportDOCX(resume)}
          variant="outline"
          className="flex items-center gap-2"
        >
          <FileText size={16} /> Download DOCX
        </Button>
      </div>
    </section>
  );
}
