import React from "react";
import Star from "../Star/Star";

type FilmStars = {
  count: number;
};

const Stars = ({ count = 0 }: FilmStars): React.JSX.Element => {
  const starsArr = Array(count).fill(0);

  return (
    <div className="stars-container">
      <ul className="card-body-stars u-clearfix">
        {starsArr.map((item, index) => {
          if (starsArr.length < 0 || starsArr.length > 5) {
            return <></>;
          } else
            return (
              <li key={index}>
                <Star />
              </li>
            );
        })}
      </ul>
    </div>
  );
};

export default Stars;
