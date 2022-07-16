import React from "react";

export const Tile = ({ itemObj, index, handleDelete }) => {
  return (
    <div className="tile-container" key="tile-container">
      {Object.values(itemObj).map((value, index) => {
        return (
          index === 0 && (
            <div className="tile-title-container" key="title-container">
              <p className="tile-title" key={index}>
                {value}
              </p>
              <i
                key="delete-button"
                id={index}
                role="button"
                className="fa fa-trash-o"
                onClick={handleDelete}
              ></i>
            </div>
          )
        );
      })}
      <div className="tile-text-container">
        {Object.values(itemObj).map((value, index) => {
          return (
            index > 0 && (
              <p className="tile-text" key={index}>
                {value}
              </p>
            )
          );
        })}
      </div>
    </div>
  );
};
