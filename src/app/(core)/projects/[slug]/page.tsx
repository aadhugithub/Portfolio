import { projects } from "@/lib/projects";

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // ✅ await params
  const project = projects.find((p) => p.slug === slug);

  if (!project)
    return <div className="p-10 text-white">Project not found.</div>;

  return (
    <div className="min-h-screen bg-dark text-light p-10 flex flex-col gap-6">
      <h1 className="text-4xl font-bold text-primary">{project.title}</h1>
      <p className="text-gray-300 max-w-2xl">{project.description}</p>

      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="rounded-2xl shadow-glow w-full max-w-3xl"
        />
      )}

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline mt-4"
      >
        Visit Project ↗
      </a>
    </div>
  );
}
