import ThemedButton from "./components/ThemedButton";
import { ThemeProvider } from "./contexts/ThemeContext";
export const App = () => {
  return (
    <>
      <ThemeProvider>
        <ThemedButton />
      </ThemeProvider>
    </>
  );
};
