import React from "react";

const VideoCard = ({ info }) => {
  if (info == null) {
    return;
  }
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  if(statistics.viewCount<100000)
  {
    statistics.viewCount/=1000;
    statistics.viewCount+="k"
  }
  if(statistics.viewCount>=100000)
  {
    statistics.viewCount/=100000;
    statistics.viewCount+='M';
  }
  return (
    <>
      <div className="p-2 m-2 w-72 h-90 bg-white border border-gray-200 shadow-lg">
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
// higher order component
export const AdVideoCard=({info})=>{
  return(
    <div className="">
      <VideoCard info={info}></VideoCard>
    </div>
  )
}
export default VideoCard;
