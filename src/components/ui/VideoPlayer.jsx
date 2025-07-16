import { useState } from "react";

export default function VideoPlayer({ videoUrl, thumbnailUrl }) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="relative mx-auto max-w-2xl">
      {/* Thumbnail View */}
      {!showVideo && (
        <div
          className="cursor-pointer rounded-xl border-4 border-yellow-500 overflow-hidden relative"
          onClick={() => setShowVideo(true)}
        >
          <img
            src={thumbnailUrl}
            alt="Video Thumbnail"
            className="w-full object-cover"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                className="w-8 h-8 ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          {/* Watch video label */}
          <div className="absolute bottom-4 right-4 bg-yellow-500 text-white px-4 py-1 font-semibold text-sm rounded">
            Watch our video
          </div>
        </div>
      )}

      {/* Video Player View */}
      {showVideo && (
        <div className="relative rounded-xl overflow-hidden border-4 border-yellow-500">
          <video controls autoPlay className="w-full rounded-xl">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Close Button */}
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-8 h-8 text-center"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
