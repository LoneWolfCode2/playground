import "./App.css";
import { Paper, Box } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./scenes/globals/TopBar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <TopBar />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
