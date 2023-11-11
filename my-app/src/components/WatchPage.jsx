import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../store/appSlice";
import { useSearchParams } from "react-router-dom";
const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleMenu());
  }, []);

  return (
    <div className="ml-20 pt-5 px-5">
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default WatchPage;