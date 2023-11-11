import React from "react";

const VideoCard = ({ info }) => {
  if (info == null) {
    return;
  }
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <>
      <div class="p-2 m-2 w-72 h-90 bg-white border border-gray-200 dark:border-gray-700 shadow-lg">
        <img src={thumbnails.medium.url} alt="" className="rounded-lg  "></img>
        <p className="font-bold   text-gray-700 dark:text-gray-400">{title}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {channelTitle}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {statistics.viewCount} views
        </p>
      </div>
    </>
  );
};

export default VideoCard;
