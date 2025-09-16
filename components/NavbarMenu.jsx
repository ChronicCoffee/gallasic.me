import React from "react";

export default function NavbarMenu() {
  return (
    <header className="fixed w-full z-50 bg-gradient-to-r from-gray-900 via-blue-900 to-teal-900 shadow-lg rounded-b-xl">
      <nav className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-3">
          <img src="/favicon.ico" alt="Logo" className="w-8 h-8 rounded-full" />
          <span className="text-2xl font-bold tracking-tight">Noah Gallasic</span>
        </div>
        <ul className="flex gap-8 text-lg">
          <li><a href="#about" className="hover:text-teal-400 transition">About</a></li>
          <li><a href="/projects" className="hover:text-teal-400 transition">Projects</a></li>
          <li><a href="/skills" className="hover:text-teal-400 transition">Skills</a></li>
          <li><a href="#contact" className="hover:text-teal-400 transition">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
