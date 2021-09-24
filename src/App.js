import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/utils/globalStyles";
import { lightTheme, darkTheme } from "./components/utils/Theme";
import { useDarkMode } from "./components/hooks/useDarkMode";
import Header from "./components/Header";
import Main from "./components/Main";
import Attr from "./components/Attr";

function App() {
  // Theme logic
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Header theme={theme} themeToggler={themeToggler} />
        <Main />
        <Attr />
      </>
    </ThemeProvider>
  );
}

export default App;
