/** @jsxImportSource @emotion/react */
import React from "react";
import { useThemeContext } from "../../contexts/ThemeContext";

const ThemeToggleButton: React.FC = () => {
  const { toggleTheme } = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      css={{ cursor: "pointer", padding: "0.5rem 1rem" }}
    >
      Toggle Theme
    </button>
  );
};

export default ThemeToggleButton;
