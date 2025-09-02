import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Noah Gallasic - Portfolio</title>
      </Head>

      <Header />

      <main className="pt-20">
        <section className="hero">
          <div className="hero-content">
            <h2 className="text-indigo-600 text-5xl font-extrabold">Welcome to My Portfolio</h2>
            <p>I'm Noah Gallasic, a passionate developer creating amazing digital experiences</p>
            <a href="#projects" className="cta-button">View My Work</a>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <h2>About Me</h2>
            <p>I'm Noah Gallasic, a dedicated developer with a passion for creating innovative solutions and beautiful user experiences. Welcome to my portfolio where you can explore my projects and skills.</p>
          </div>
        </section>

        <section id="projects" className="projects">
          <div className="container">
            <h2>My Projects</h2>
            <div className="project-grid">
              <div className="project-card">
                <h3>Project 1</h3>
                <p>Description of your first project goes here.</p>
                <a href="#" className="project-link">View Project</a>
              </div>
              <div className="project-card">
                <h3>Project 2</h3>
                <p>Description of your second project goes here.</p>
                <a href="#" className="project-link">View Project</a>
              </div>
              <div className="project-card">
                <h3>Project 3</h3>
                <p>Description of your third project goes here.</p>
                <a href="#" className="project-link">View Project</a>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills">
          <div className="container">
            <h2>Skills</h2>
            <div className="skills-grid">
              <div className="skill-item">
                <h3>Frontend</h3>
                <p>HTML, CSS, JavaScript, React</p>
              </div>
              <div className="skill-item">
                <h3>Backend</h3>
                <p>Node.js, Python, Database Management</p>
              </div>
              <div className="skill-item">
                <h3>Tools</h3>
                <p>Git, VS Code, Design Software</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <h2>Get In Touch</h2>
            <p>I'd love to hear from you! Feel free to reach out for collaborations or just to say hello.</p>
            <div className="contact-info">
              <a href="mailto:noahgallasic@email.com" className="contact-link">Email Me</a>
              <a href="https://github.com/ChronicCoffee" className="contact-link">GitHub</a>
              <a href="https://linkedin.com/in/yourprofile" className="contact-link">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
