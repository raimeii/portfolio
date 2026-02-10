import { cookies } from "next/headers";
import { createClient } from "@/util/supabase/server";

export default async function Projects() {
    const supabase = createClient(cookies());
    const { data: projects } = await supabase.from('projects').select('*');

    return (
        <div className="min-h-screen pt-16">
        <main className="container mx-auto px-4 py-48 text-center">
            <section id="projects">
            <h1 className="text-5xl font-bold mb-4 text-text">Projects</h1>
            </section>


            <section id="projects-grid">
                <div className="grid grid-cols-3 gap-4">
                    {projects?.map((project) => (
                      <div
                        key={project.id}
                        className="border bg-background rounded-xl p-6 text-left shadow hover:shadow-lg transition"
                      >
                        <h2 className="text-2xl font-semibold mb-2 text-text">
                          {project.title}
                        </h2>
                        <p className="text-text">{project.description}</p>
                      </div>
                    ))}

                </div>

            </section>
        </main>
        </div>
    )
}
