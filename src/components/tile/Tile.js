import React from "react";

export const Tile = ({object}) => {

  //const objectVal = Object.values(object).map(item => item + "$");
  //console.log(objectVal);

  return (
    <div className="tile-container" >
        {

          Object.values(object).map((value, index) =>
             
            <p className={index === 0 ? "tile-title" : "title"} key={index}>{ value }</p>
          )

        }
    </div>
  );
};