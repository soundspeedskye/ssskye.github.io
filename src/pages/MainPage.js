// src/pages/MainPage.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaSkyatlas } from "react-icons/fa";
import AboutPage from "./AboutPage";
import ProjectPage from "./ProjectPage";
import VideoPage from "./VideoPage";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";

const MainPage = () => {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <Router>
      <div className="flex flex-row font-sans">
        <nav className="flex flex-col bg-indigo-300 p-3 text-xl font-light tracking-wide h-1920 relative z-50">
          <div className="mt-3 mb-5 flex items-center justify-center">
            <Link to="/">
              <FaSkyatlas className="text-white" size={50} />
            </Link>
          </div>
          <ul className="flex flex-col list-none m-0 p-0">
            <li className="mb-4">
              <Link
                to="/about"
                className="text-white no-underline px-4 py-2 hover:bg-gray-700 hover:rounded-full block text-center font-lotteria"
              >
                About
              </Link>
            </li>
            <li
              className="mb-4 relative"
              onMouseEnter={() => setShowProjects(true)}
              onMouseLeave={() => setShowProjects(false)}
            >
              <span className="text-white no-underline px-4 py-2 hover:bg-gray-700 hover:rounded-full cursor-pointer block text-center font-lotteria">
                Project
              </span>
              {showProjects && (
                <ul className="absolute left-full top-0 mt-0 w-48 bg-white shadow-lg z-30 font-surround-air">
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/project1" className="text-black no-underline">
                      Project 1
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/project2" className="text-black no-underline">
                      Project 2
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-4">
              <Link
                to="/video"
                className="text-white no-underline px-4 py-2 hover:bg-gray-700 hover:rounded-full block text-center font-lotteria"
              >
                Video
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col flex-1 relative z-30">
          <div className="flex-1 bg-gray-100 p-0">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route
                path="/project1"
                element={<ProjectPage project="project1" />}
              />
              <Route
                path="/project2"
                element={<ProjectPage project="project2" />}
              />
              <Route path="/video" element={<VideoPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default MainPage;
