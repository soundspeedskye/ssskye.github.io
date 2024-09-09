import React from "react";

const ProfileComponent = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 mt-9">
      <header className="text-center">
        <img
          src="https://soundspeedskye.github.io/ssskye.github.io/assets/images/profile_image.png"
          alt="Memoji"
          className="w-40 h-40 sm:w-60 sm:h-60 rounded-full mx-auto mb-7"
        />
        <h1 className="text-2xl sm:text-4xl font-black p-4 font-surround-air">
          상상- 그 이상의 개발자, 천하늘
        </h1>
        <p className="text-gray-600 mt-4 mb-7 leading-relaxed text-lg sm:text-xl font-pretendard">
          사용자가 가장 편한 방식으로 먼저 다가가기로 결심했습니다.
          <br />
          상상에 그치지 않고 직접 해보고, 해내는 주니어 개발자입니다.
        </p>
      </header>

      <section className="flex flex-col sm:flex-row justify-center w-full max-w-4xl mt-8">
        <div className="w-full sm:w-1/2 pr-5 text-center sm:text-right mb-8 sm:mb-0">
          <h2 className="text-xl sm:text-2xl font-semibold font-lotteria">
            Contact
          </h2>
          <p className="text-gray-700 mt-4 text-lg sm:text-xl font-surround-air">
            haneul.skye.cheon@gmail.com
          </p>
          <p className="text-gray-700 mt-1 text-lg sm:text-xl font-surround-air">
            github.com/soundspeedskye
          </p>
        </div>

        <div className="w-full sm:w-1/2 pl-5 text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-semibold font-lotteria">
            Skills
          </h2>
          <ul className="text-gray-700 mt-4 text-lg sm:text-xl">
            <li className="flex justify-center sm:justify-start items-center font-surround-air">
              Chinese
              <div className="flex ml-4">
                <span className="w-3 h-3 bg-indigo-600 rounded-full mr-1"></span>
                <span className="w-3 h-3 bg-indigo-600 rounded-full mr-1"></span>
                <span className="w-3 h-3 bg-indigo-600 rounded-full mr-1"></span>
                <span className="w-3 h-3 bg-gray-400 rounded-full mr-1"></span>
                <span className="w-3 h-3 bg-gray-400 rounded-full mr-1"></span>
              </div>
            </li>
            <li className="flex justify-center sm:justify-start items-center font-surround-air">
              PPT Design
              <div className="flex ml-4">
                <span className="w-3 h-3 bg-indigo-600 rounded-full mr-1"></span>
                <span className="w-3 h-3 bg-indigo-600 rounded-full mr-1"></span>
                <span className="w-3 h-3 bg-indigo-600 rounded-full mr-1"></span>
                <span className="w-3 h-3 bg-indigo-600 rounded-full mr-1"></span>
                <span className="w-3 h-3 bg-gray-400 rounded-full mr-1"></span>
              </div>
            </li>
            <li className="flex justify-center sm:justify-start items-center font-surround-air">
              Managing Contents
              <div className="flex ml-4">
                <span className="w-3 h-3 bg-indigo-600 rounded-full mr-1"></span>
                <span className="w-3 h-3 bg-indigo-600 rounded-full mr-1"></span>
                <span className="w-3 h-3 bg-indigo-600 rounded-full mr-1"></span>
                <span className="w-3 h-3 bg-indigo-600 rounded-full mr-1"></span>
                <span className="w-3 h-3 bg-gray-400 rounded-full mr-1"></span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="w-full max-w-4xl mt-12 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold font-lotteria">
          Program
        </h2>
        <ul className="text-gray-700 text-base sm:text-lg mt-4 flex justify-center space-x-2 sm:space-x-4 font-surround-air">
          <li>Java</li>
          <li>Bootstrap</li>
          <li>React</li>
          <li>JavaScript</li>
          <li>MySQL</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </section>
    </div>
  );
};

export default ProfileComponent;
