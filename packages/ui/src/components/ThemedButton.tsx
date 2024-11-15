/** @jsxImportSource @emotion/react */
import React from "react";
import { useThemeContext } from "../contexts/ThemeContext";

const ThemedButton: React.FC = () => {
  const { theme } = useThemeContext();

  return (
    <button
      css={{
        backgroundColor: theme.colors.primary,
        color: theme.colors.text,
        padding: "0.5rem 1rem",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      Themed Button
    </button>
  );
};

export default ThemedButton;
