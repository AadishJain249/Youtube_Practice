import React from "react";
import { useDispatch } from "react-redux";
import { showSide } from "../store/appSlice";
function Header() {
  const dispatch=useDispatch()
  const handleChange=()=>{
    dispatch(showSide())
  }
  return (
    <div className="grid grid-flow-col p-2  shadow-lg m-2">
      <div className="flex col-span-1">
        <img
          className="w-10 h-10  cursor-pointer"
          alt=""
          onClick={()=>handleChange()}
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        ></img>
        <img
          className="w-25 h-5 mt-2.5 pl-2.5"
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
        ></img>
      </div>

      <div className=" col-span-10 px-10 flex ml-20">
        <input
          className=" w-1/2 border  border-gray-400 p-2 rounded-l-full  "
          type="text"
        />
        <button className="border border-gray-400 px-5 py-2  bg-gray-100 rounded-r-full">
          🔍
        </button>
      </div>
      <div className="col-span-1 flex">
        <img
          className="w-8 h-8"
          alt=""
          src="https://i.pinimg.com/originals/c0/e4/a3/c0e4a31cb6c4e2dc11ac40a928c5e47a.png"
        ></img>
      </div>
      <div className="col-span-1 ">
        <img
          className="w-8 h-8"
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
        ></img>
      </div>
    </div>
  );
}

export default Header;
