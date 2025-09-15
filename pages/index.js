
import Head from 'next/head';
import Footer from '../components/Footer';
import {
  HeroParallax,
  NavbarMenu,
  Cards,
  FlipWords,
  Sparkles,
  StickyScrollReveal,
  LinkPreview,
  GithubGlobe,
  StatefulButton,
  GlowingStarsEffect,
  AuroraBackground,
  GlowingEffect,
} from 'aceternity-ui';

export default function Home() {
  return (
    <>
      <Head>
        <title>Noah Gallasic - Portfolio</title>
      </Head>

      {/* Navbar */}
      <NavbarMenu
        logo={<img src="/favicon.ico" alt="Logo" className="w-8 h-8 rounded-full" />}
        links={[
          { label: 'About', href: '#about' },
          { label: 'Projects', href: '#projects' },
          { label: 'Skills', href: '#skills' },
          { label: 'Contact', href: '#contact' },
        ]}
        className="fixed w-full z-50"
      />

      <main className="pt-24">
        {/* Hero Section */}
        <HeroParallax
          title="Welcome to My Portfolio"
          subtitle={<FlipWords words={["Web Developer", "Designer", "Creator"]} />}
          description="I'm Noah Gallasic, a passionate developer creating amazing digital experiences."
          cta={{ label: "View My Work", href: "#projects" }}
          background={<AuroraBackground />}
          effect={<GlowingStarsEffect />}
        />

        {/* About Section */}
        <section id="about" className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 relative">
          <Sparkles>
            <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
              <h2 className="text-4xl font-bold mb-6 text-teal-300">About Me</h2>
              <p className="text-gray-300 text-lg">I'm Noah Gallasic, a dedicated developer with a passion for creating innovative solutions and beautiful user experiences. Welcome to my portfolio where you can explore my projects and skills.</p>
            </div>
          </Sparkles>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-gray-950 relative">
          <StickyScrollReveal>
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-10 text-center text-teal-300">My Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <Cards title="Project 1" description="Description of your first project goes here." link={<LinkPreview url="#" />} />
                <Cards title="Project 2" description="Description of your second project goes here." link={<LinkPreview url="#" />} />
                <Cards title="Project 3" description="Description of your third project goes here." link={<LinkPreview url="#" />} />
              </div>
            </div>
          </StickyScrollReveal>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-gradient-to-br from-blue-900 to-teal-900 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-10 text-center text-teal-300">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <Cards title="Frontend" description={<FlipWords words={["HTML", "CSS", "JavaScript", "React"]} />} />
              <Cards title="Backend" description={<FlipWords words={["Node.js", "Python", "Database Management"]} />} />
              <Cards title="Tools" description={<FlipWords words={["Git", "VS Code", "Design Software"]} />} />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gray-950 relative">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="text-4xl font-bold mb-6 text-teal-300">Get In Touch</h2>
            <p className="mb-8 text-gray-300">I'd love to hear from you! Feel free to reach out for collaborations or just to say hello.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <StatefulButton label="Email Me" onClick={() => window.location.href = 'mailto:noahgallasic@email.com'} />
              <GithubGlobe username="ChronicCoffee" />
              <a href="https://linkedin.com/in/yourprofile" className="bg-blue-600 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with Glowing Effect */}
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-teal-900 text-white py-8 mt-24 shadow-inner">
        <GlowingEffect />
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Noah Gallasic. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
