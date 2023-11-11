import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSpaceShuttle } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function SideBar() {
  const showSideBar=useSelector((state)=>state.app.flag)
  if(!showSideBar)
    return null;
  return (
    <div className="p-10 w-48 shadow-lg">
      <ul>
        <li>
            <img
              className="w-21 h-4 mt-1.5"
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
            ></img>
        </li>
        <div className="flex mr-3 mt-7">
          <FontAwesomeIcon className="mt-1" icon={faHome}></FontAwesomeIcon>
          <Link to="/"><li className="ml-1">Home</li></Link>
        </div>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className="font-bold pt-5">Your Channel</h1>
      <ul>
        <li>History</li>
        <li>Your Videos</li>
        <li>Downloads</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <div className="flex mr-3 ">
          <FontAwesomeIcon
            className="mt-1"
            icon={faSpaceShuttle}
          ></FontAwesomeIcon>
          <li className="ml-1">Nasa</li>
        </div>

        <li>Tseries</li>
        <li>Speed Records</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
}

export default SideBar;
