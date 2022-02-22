import React, { FC, useState } from "react";
import { Rating } from "./Rating";

const StarsRating: FC = () => {
  const fillColorArray = [
    "#f17a45",
    "#f17a45",
    "#f19745",
    "#f19745",
    "#f1a545",
    "#f1a545",
    "#f1b345",
    "#f1b345",
    "#f1d045",
    "#f1d045",
  ];

  const tooltipArray = [
    "Terrible",
    "Terrible+",
    "Bad",
    "Bad+",
    "Average",
    "Average+",
    "Great",
    "Great+",
    "Awesome",
    "Awesome+",
  ];

  const [rating1, setRating1] = useState(0);
  const handleRating1 = (rate: number) => setRating1(rate);
  return (
    <div>
      <Rating
        onClick={handleRating1}
        ratingValue={rating1}
        size={50}
        transition
        allowHalfIcon
        showTooltip
        tooltipArray={tooltipArray}
        fillColorArray={fillColorArray}
      />
    </div>
  );
};

export default StarsRating;
