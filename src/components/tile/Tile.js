import React from "react";

export const Tile = ({object}) => {
  return (
    <div className="tile-container" >
        {Object.values(object).map((value, index) => 
            <p className={`${index === 0 ? "tile-title" : ""} tile`} key={index}>{value}</p>
          )
        }
    </div>
  );
};