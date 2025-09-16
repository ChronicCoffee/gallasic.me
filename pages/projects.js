import Head from "next/head";
import NavbarMenu from "../components/NavbarMenu";
import Footer from "../components/Footer";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Noah Gallasic</title>
      </Head>
      <NavbarMenu />
      <main className="pt-24 pb-24 min-h-screen bg-gray-950">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-10 text-center text-teal-300">
            My Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-900 rounded-xl shadow-lg p-8 text-left">
              <h3 className="text-2xl font-semibold mb-2 text-teal-400">
                Project 1
              </h3>
              <p className="mb-4 text-gray-400">
                Description of your first project goes here.
              </p>
              <a
                href="#"
                className="inline-block bg-teal-500 text-white px-4 py-2 rounded-xl hover:bg-teal-600 transition"
              >
                View Project
              </a>
            </div>
            <div className="bg-gray-900 rounded-xl shadow-lg p-8 text-left">
              <h3 className="text-2xl font-semibold mb-2 text-teal-400">
                Project 2
              </h3>
              <p className="mb-4 text-gray-400">
                Description of your second project goes here.
              </p>
              <a
                href="#"
                className="inline-block bg-teal-500 text-white px-4 py-2 rounded-xl hover:bg-teal-600 transition"
              >
                View Project
              </a>
            </div>
            <div className="bg-gray-900 rounded-xl shadow-lg p-8 text-left">
              <h3 className="text-2xl font-semibold mb-2 text-teal-400">
                Project 3
              </h3>
              <p className="mb-4 text-gray-400">
                Description of your third project goes here.
              </p>
              <a
                href="#"
                className="inline-block bg-teal-500 text-white px-4 py-2 rounded-xl hover:bg-teal-600 transition"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
