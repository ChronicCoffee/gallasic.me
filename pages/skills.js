import Head from 'next/head';
import NavbarMenu from '../components/NavbarMenu';
import Footer from '../components/Footer';

export default function Skills() {
  return (
    <>
      <Head>
        <title>Skills - Noah Gallasic</title>
      </Head>
      <NavbarMenu />
      <main className="pt-24 pb-24 min-h-screen bg-gradient-to-br from-blue-900 to-teal-900">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-10 text-center text-teal-300">Skills</h1>
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
        </div>
      </main>
      <Footer />
    </>
  );
}
