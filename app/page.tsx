export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-r from-slate-500 to-slate-800 text-white pt-16">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-48 text-center">
        <section id="home">
          <h1 className="text-5xl font-bold text-white mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl text-red-200 mb-8">I&apos;m a passionate developer ready to showcase my work.</p>
          <button className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-500 transition-colors">View My Work</button>
        </section>
      </main>
    </div>
  );
}
