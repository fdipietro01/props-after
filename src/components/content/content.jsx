import React from "react";
import {Images} from "../../assets/index"
import "./content.css"

export const Content = () => {
  return (
    <div>
      <ul className="contentList">
        <li><p>Rick&Morty</p> <img src={Images[0]}/></li>
        <li><p>Breaking Bad</p><img src={Images[1]}/></li>
        <li><p>WestWorld</p><img src={Images[2]}/></li>
        <li><p>Squid Game</p><img src={Images[3]}/></li>
      </ul>
    </div>
  );
};
