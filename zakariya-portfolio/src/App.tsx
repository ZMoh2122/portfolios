// src/App.tsx
import React from "react";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between p-4 md:p-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-b-3xl shadow-lg max-h-32 md:max-h-36">
        {/* Text Section */}
        <div className="text-center md:text-left space-y-1 md:flex-1">
          <h2 className="text-lg font-semibold opacity-80">
            Zakariya's Portfolio
          </h2>
          <h1 className="text-xl md:text-2xl font-bold">Zakariya Mohamed</h1>
          <p className="text-sm md:text-md font-medium">
            Junior React Front-End Developer
          </p>
        </div>

        {/* Profile Image Box (Tiny, handles portrait image) */}
        <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-lg shadow-lg overflow-hidden mt-2 md:mt-0 flex-shrink-0">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-full h-full object-contain"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 max-w-4xl mx-auto space-y-8 mt-6">
        {/* Summary Section */}
        <section id="summary" className="space-y-2">
          <h2 className="text-2xl font-bold">Summary</h2>
          <p className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-4 rounded-lg shadow-inner text-gray-800">
            I am a Junior React Frontend Developer with experience building and
            refining responsive web interfaces using React, TypeScript,
            JavaScript, TailwindCSS, HTML, and CSS. I enjoy working in
            collaborative teams, learning from senior developers, and
            contributing clean, maintainable code to real-world projects like
            the one I'm currently working on: classroom management system
            (TCMS). I’m comfortable working with Git, following existing code
            standards, and iterating on UI and UX based on feedback to deliver
            small, reliable improvements.
          </p>
        </section>

        {/* Work Experience Section */}
        <section id="work" className="space-y-4">
          <h2 className="text-2xl font-bold">💼 Work Experience</h2>

          {/* Luul-Solutions Internship */}
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-semibold text-lg">Luul-Solutions Internship</h3>
            <p className="mt-2 text-gray-700 text-sm">
              Contributed to TCMS, a web-based teaching and classroom management
              system, building and refining student and teacher dashboards using
              React, TypeScript, and TailwindCSS.
            </p>
          </div>

          {/* Walmart Front-End Associate */}
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-semibold text-lg">
              Walmart Front-End Associate
            </h3>
            <p className="mt-2 text-gray-700 text-sm">
              Delivered customer service by operating cash registers and
              monitoring self-checkout stations. Assisted customers with
              transactions, addressed questions, and helped ensure a smooth and
              efficient checkout process. Contributed to store operations by
              retrieving carts and keeping the front-end area clean and
              organized.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="space-y-4">
          <h2 className="text-2xl font-bold">🎓 Education</h2>

          {/* Fast-Track Technology Academy */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg">
              Fast-Track Technology Academy – Developing Course
            </h3>
            <p className="mt-2 text-gray-700 text-sm">
              Completed the Academy's 6 month bootcamp training learning
              developing and programming skills.
            </p>
          </div>

          {/* Augsburg University */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg">
              Augsburg University – Computer Science
            </h3>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
