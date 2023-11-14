import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_API } from "../store/constant";
import VideoCard,{AdVideoCard} from "./VideoCard";
function VideoContainer() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  async function getVideos() {
    const res = await fetch(YOUTUBE_API);
    const data = await res.json();
    setVideos(data.items);
  }
  return (
    <div className="flex flex-wrap ml-12">
      {videos[0] && <AdVideoCard info={videos[0]}/>}
      {videos.map((vid) => (
          <Link key={vid.id} to={"/watch?v=" + vid.id}>
            <VideoCard  info={vid}></VideoCard>
          </Link>
      ))}
    </div>
  );
}
export default VideoContainer;
