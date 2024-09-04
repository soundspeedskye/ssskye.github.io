import React from "react";

const VideoPlayerComponent = () => {
  return (
    <div className="space-y-8">
      <div className="border-2 border-indigo-400 p-4 rounded-lg bg-gray-100">
        <p className="mt-4 mb-4 text-center text-lg text-gray-800 font-move-sans">
          NIMONEMO DEMO VIDEO
        </p>
        <div className="aspect-w-4 aspect-h-3">
          <iframe
            className="rounded-lg w-full h-full"
            style={{ height: "600px" }}
            src="https://www.youtube.com/embed/eRX9UAozuA8?list=PLOxo9D4D-nZ1be2K7FOd1mcvSxFB0lGe0&index=1"
            title="Nimonemo Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="border-2 border-indigo-400 p-4 rounded-lg bg-gray-100">
        <p className="mt-4 mb-4 text-center text-lg text-gray-800 font-move-sans">
          DMA DEMO VIDEO
        </p>
        <div className="aspect-w-4 aspect-h-3">
          <iframe
            className="rounded-lg w-full h-full"
            style={{ height: "600px" }}
            src="https://www.youtube.com/embed/7jut9Qcvbrw?list=PLOxo9D4D-nZ1be2K7FOd1mcvSxFB0lGe0&index=2"
            title="DMA Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerComponent;
