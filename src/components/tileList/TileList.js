import React from "react";
import {Tile} from '../tile/Tile';

export const TileList = ({list, handleDelete}) => {
  return (
    <div className="tileList">
      {list.map((itemObj, index) => 
        <Tile 
          itemObj={itemObj}
          index={index}
          key={`tile-${index}`} 
          handleDelete={handleDelete}
        />
      )}
    </div>
    
  );
};
