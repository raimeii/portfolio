export default function Home() {
  return (
    <div className="min-h-screen pt-12">
      <main className="container mx-auto px-4 lg:py-24 text-center">
        <section id="head">
          <h1 className="text-4xl sm:text-5xl font-bold pb-4 text-text">Hey! I&apos;m Allen.</h1>
          <p className="text-lg sm:text-xl pb-8 text-text">Nice of you to stumble on into here!</p>
        </section>

        <section id="about-me" className="border-2 bg-background px-6 py-10 rounded-xl border-opacity-30 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold pb-4 text-text">About Me</h2>
          <p className="text-lg text-text leading-relaxed">
            Hi! I&apos;m a software engineer passionate about designing and building robust, efficient applications.
            I enjoy solving complex problems and creating solutions that are both reliable and user-friendly.
            I have a strong interest in IoT and machine learning, where I focus on transforming ideas into impactful, real-world applications.
          </p>

          <h3 className="text-2xl font-bold text-text pt-12">Education</h3>

          <p className="text-lg text-text leading-loose max-w-3xl mx-auto text-center">
            Bachelor of Software Engineering and Bachelor of Project Management (Combined) <br/> The University of Sydney
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-10">
            <div className="flex-1">
              <h4 className="text-xl font-semibold text-text pb-2">Skills</h4>
              <p className="text-text text-left space-y-1">
                <span><strong>Programming Languages:</strong>&nbsp;Python, Java, C</span><br />
                <span><strong>Frameworks & Libraries:</strong>&nbsp;React, Next.js, Tailwind CSS, Express.js, PyTorch</span><br />
                <span><strong>Backend & API Development:</strong>&nbsp;Node.js, Django, RESTful API Design</span><br />
                <span><strong>Databases:</strong>&nbsp;PostgreSQL, MongoDB</span><br />
                <span><strong>Tools & Platforms:</strong>&nbsp;Git, Microsoft Project, Excel</span><br />
                <span><strong>Software Development:</strong>&nbsp;Full-Stack Web Development, Software Testing, CI/CD</span><br />
                <span><strong>Methodologies:</strong>&nbsp;Agile & Scrum Project Management, Cross-Functional Collaboration</span>
              </p>
            </div>

            <div className="flex-1">
              <h4 className="text-xl font-semibold text-text pb-2">Interests</h4>
              <p className="text-text text-left space-y-1">
                <span><strong>Model kits:</strong>&nbsp;Building and painting Gundam model kits. Big fan of Char Aznable&apos;s mobile suits, Universal Century, and Cosmic Era kits.</span><br />
                <span><strong>Trading Card Games:</strong>&nbsp;Riftbound TCG, Magic: The Gathering, and One Piece TCG.</span><br />
                <span><strong>Gaming:</strong>&nbsp;Love a good single-player RPG. My favourites include The Witcher series, Cyberpunk: 2077, and the Elder Scrolls series.</span><br />
              </p>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
