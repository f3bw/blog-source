/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import "./StaggerButton.css"; // Create a separate CSS file if needed

const StaggerButton = () => {
  useEffect(() => {
    const initButtonCharacterStagger = () => {
      const offsetIncrement = 0.01; // Transition offset increment in seconds
      const buttons = document.querySelectorAll("[data-button-animate-chars]");

      buttons.forEach((button) => {
        const text = button.textContent; // Get the button's text content
        button.innerHTML = ""; // Clear the original content

        [...text].forEach((char, index) => {
          const span = document.createElement("span");
          span.textContent = char;
          span.style.transitionDelay = `${index * offsetIncrement}s`;

          // Handle spaces explicitly
          if (char === " ") {
            span.style.whiteSpace = "pre"; // Preserve space width
          }

          button.appendChild(span);
        });
      });
    };

    // Initialize Button Character Stagger Animation
    initButtonCharacterStagger();
  }, []);

  return (
    <a href="#" aria-label="Staggering button" className="btn-animate-chars">
      <div className="btn-animate-chars__bg"></div>
      <span data-button-animate-chars="" className="btn-animate-chars__text">
        Staggering Button
      </span>
    </a>
  );
};

export default StaggerButton;
