import React from "react";
import "./BubbleButtonIcon.css";

const BubbleButtonIcon = () => {
  return (
    <div className="btn-group">
      <a href="#" className="btn-bubble-arrow w-inline-block">
        <div className="btn-bubble-arrow__arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="100%"
            className="btn-bubble-arrow__arrow-svg"
          >
            <polyline
              points="18 8 18 18 8 18"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="1.5"
            ></polyline>
            <line
              x1="18"
              y1="18"
              x2="5"
              y2="5"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="1.5"
            ></line>
          </svg>
        </div>
        <div className="btn-bubble-arrow__arrow is--duplicate">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="100%"
            className="btn-bubble-arrow__arrow-svg"
          >
            <polyline
              points="18 8 18 18 8 18"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="1.5"
            ></polyline>
            <line
              x1="18"
              y1="18"
              x2="5"
              y2="5"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="1.5"
            ></line>
          </svg>
        </div>
      </a>
    </div>
  );
};

export default BubbleButtonIcon;
