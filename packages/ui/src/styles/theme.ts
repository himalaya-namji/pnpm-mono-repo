export type ThemeType = {
  colors: {
    background: string;
    text: string;
    primary: string;
  };
};

export const lightTheme: ThemeType = {
  colors: {
    background: "#FFFFFF",
    text: "#000000",
    primary: "#1E90FF",
  },
};

export const darkTheme: ThemeType = {
  colors: {
    background: "#000000",
    text: "#FFFFFF",
    primary: "#FF6347",
  },
};
