"use client";

import React, { useState } from "react";
import Image from "next/image";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  coverImage: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  title,
  coverImage,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full pt-[56.25%] group">
      {!isPlaying ? (
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={coverImage}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <button
            onClick={handlePlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-lg p-4 hover:bg-red-700 transition-colors opacity-0 group-hover:opacity-100"
            aria-label="Play video"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      ) : (
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default YouTubeEmbed;
