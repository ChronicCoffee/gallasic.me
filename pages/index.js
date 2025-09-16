import Head from "next/head";
import Footer from "../components/Footer";
import HeroParallax from "../components/HeroParallax";
import NavbarMenu from "../components/NavbarMenu";

export default function Home() {

  return (
    <>
      <Head>
        <title>Noah Gallasic - Portfolio</title>
      </Head>
      {/* Navbar */}
      <NavbarMenu />
      <main className="pt-32 min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526]">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-32 px-4">
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-12 max-w-2xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
              Noah Gallasic
            </h1>
            <p className="mb-8 text-lg text-gray-200 font-medium">
              Building beautiful, performant web experiences.<br />
              Developer, designer, and digital explorer.
            </p>
            <a
              href="#projects"
              className="inline-block bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              View My Work
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-300">About Me</h2>
            <p className="text-gray-300 text-lg">
              Hi, I'm Noah. I love crafting digital products that blend creativity and technology. My focus is on clean code, delightful UI, and impactful user experiences.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-teal-300">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[1,2,3].map((i) => (
                <div key={i} className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-8 text-left hover:scale-[1.03] transition-transform">
                  <h3 className="text-xl font-semibold mb-2 text-teal-400">Project {i}</h3>
                  <p className="mb-4 text-gray-300">A short description of project {i}.</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a
                href="/projects"
                className="inline-block bg-gradient-to-r from-teal-400 to-blue-500 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform font-semibold"
              >
                See All Projects
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-teal-300">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-8 text-left">
                <h3 className="text-xl font-semibold mb-2 text-teal-400">Frontend</h3>
                <p className="text-gray-300">HTML, CSS, JavaScript, React, Next.js, Tailwind</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-8 text-left">
                <h3 className="text-xl font-semibold mb-2 text-teal-400">Backend</h3>
                <p className="text-gray-300">Node.js, Python, Express, REST APIs, Databases</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-8 text-left">
                <h3 className="text-xl font-semibold mb-2 text-teal-400">Tools</h3>
                <p className="text-gray-300">Git, VS Code, Figma, Docker</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <a
                href="/skills"
                className="inline-block bg-gradient-to-r from-teal-400 to-blue-500 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform font-semibold"
              >
                See All Skills
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-300">Get In Touch</h2>
            <p className="mb-8 text-gray-300">Let's connect! Reach out for collaborations or just to say hi.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <a
                href="mailto:noahgallasic@email.com"
                className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform"
              >
                Email Me
              </a>
              <a
                href="https://github.com/ChronicCoffee"
                className="bg-white/10 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-white/20 transition"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                className="bg-blue-600 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
