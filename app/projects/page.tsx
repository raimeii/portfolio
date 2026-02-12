import { cookies } from "next/headers";
import { createClient } from "@/util/supabase/server";
import Image from "next/image"

export default async function Projects() {
    const supabase = createClient(cookies());
    const { data: projects, error } = await supabase.from('projects').select('*').order('id', { ascending: true });

    if (error) {
      console.error("Supabase error:", error);
    }
    console.log(projects)
    projects?.forEach(p => console.log("Image URL:", p.img)); 
    //? is optional chaining, run if not null
    return (
        <div className="min-h-screen pt-16">
        <main className="container mx-auto px-4 py-48 text-center">
            <section id="projects">
            <h1 className="text-5xl font-bold mb-12 text-text">Projects</h1>
            </section>
            <section id="projects-grid">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {projects?.map((project) => (
                      <div
                        key={project.id}
                        className="border bg-background rounded-xl p-6 text-left shadow hover:shadow-lg transition"
                      >
                        {project.img && (
                          <div className="relative w-full h-48 mb-4">
                            <Image
                              src={project.img}
                              alt={project.title}
                              fill
                              className="object-cover rounded-xl"
                            />
                          </div>
                        )}
                        <h2 className="text-2xl font-semibold mb- text-text">
                          {project.title}
                        </h2>
                        <p className="text-text mb-2">{project.description}</p>
                        <p className="text-text mb-2">{"Stack: " + project.stack?.join(", ")}</p>

                        {project.link &&(
                          <a
                            href={project.link}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            View Repository

                          </a>
                        )}
                        {project.live &&(
                          <a
                            href={project.link}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            View Live

                          </a>
                        )}  
                      </div>
                    ))}

                </div>

            </section>
        </main>
        </div>
    )
}
