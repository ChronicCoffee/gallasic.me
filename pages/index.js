


import Head from 'next/head';
import Footer from '../components/Footer';
import HeroParallax from '../components/HeroParallax';
import NavbarMenu from '../components/NavbarMenu';

export default function Home() {
  return (
    <>
      <Head>
        <title>Noah Gallasic - Portfolio</title>
      </Head>

      {/* Navbar */}
      <NavbarMenu />

      <main className="pt-24">
        {/* Hero Section */}
        <HeroParallax />

        {/* About Section */}
        <section id="about" className="py-24 bg-gradient-to-br from-gray-900 to-blue-900">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-4xl font-bold mb-6 text-teal-300">About Me</h2>
            <p className="text-gray-300 text-lg">I'm Noah Gallasic, a dedicated developer with a passion for creating innovative solutions and beautiful user experiences. Welcome to my portfolio where you can explore my projects and skills.</p>
          </div>
        </section>

        {/* Projects Preview Section */}
        <section id="projects" className="py-24 bg-gray-950">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-10 text-center text-teal-300">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-gray-900 rounded-xl shadow-lg p-8 text-left">
                <h3 className="text-2xl font-semibold mb-2 text-teal-400">Project 1</h3>
                <p className="mb-4 text-gray-400">Description of your first project goes here.</p>
              </div>
              <div className="bg-gray-900 rounded-xl shadow-lg p-8 text-left">
                <h3 className="text-2xl font-semibold mb-2 text-teal-400">Project 2</h3>
                <p className="mb-4 text-gray-400">Description of your second project goes here.</p>
              </div>
              <div className="bg-gray-900 rounded-xl shadow-lg p-8 text-left">
                <h3 className="text-2xl font-semibold mb-2 text-teal-400">Project 3</h3>
                <p className="mb-4 text-gray-400">Description of your third project goes here.</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <a href="/projects" className="inline-block bg-teal-500 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-teal-600 transition font-semibold">See All Projects</a>
            </div>
          </div>
        </section>

        {/* Skills Preview Section */}
        <section id="skills" className="py-24 bg-gradient-to-br from-blue-900 to-teal-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-10 text-center text-teal-300">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-gray-900 rounded-xl shadow-lg p-8 text-left">
                <h3 className="text-2xl font-semibold mb-2 text-teal-400">Frontend</h3>
                <p className="text-gray-300">HTML, CSS, JavaScript, React</p>
              </div>
              <div className="bg-gray-900 rounded-xl shadow-lg p-8 text-left">
                <h3 className="text-2xl font-semibold mb-2 text-teal-400">Backend</h3>
                <p className="text-gray-300">Node.js, Python, Database Management</p>
              </div>
              <div className="bg-gray-900 rounded-xl shadow-lg p-8 text-left">
                <h3 className="text-2xl font-semibold mb-2 text-teal-400">Tools</h3>
                <p className="text-gray-300">Git, VS Code, Design Software</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <a href="/skills" className="inline-block bg-teal-500 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-teal-600 transition font-semibold">See All Skills</a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gray-950">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="text-4xl font-bold mb-6 text-teal-300">Get In Touch</h2>
            <p className="mb-8 text-gray-300">I'd love to hear from you! Feel free to reach out for collaborations or just to say hello.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <a href="mailto:noahgallasic@email.com" className="bg-teal-500 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-teal-600 transition">Email Me</a>
              <a href="https://github.com/ChronicCoffee" className="bg-gray-900 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-gray-800 transition">GitHub</a>
              <a href="https://linkedin.com/in/yourprofile" className="bg-blue-600 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
