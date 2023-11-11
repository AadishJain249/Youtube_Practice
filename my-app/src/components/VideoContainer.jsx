import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_API } from "../store/constant";
import VideoCard from "./VideoCard";
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
    <div className="flex flex-wrap">
      {videos.map((vid) => (
          <Link to={"/watch?v=" + vid.id}>
            <VideoCard key={vid.id} info={vid}></VideoCard>
          </Link>
      ))}
    </div>
  );
}
export default VideoContainer;
