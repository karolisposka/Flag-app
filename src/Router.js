import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import React, {useState} from "react";
import Home from "./pages/Home";
import { themeContext } from "./context";
import { darkTheme, lightTheme } from "./theme";
import Navigation from "./components/navigation/Navigation";
import Country from "./pages/Country";


const Router = () => {
  const [theme, setTheme] = useState('dark');
  return (
    <themeContext.Provider value={[theme, setTheme]}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme} >
        <BrowserRouter>
        <Navigation/>
          <Routes>
            <Route exact path="/" >
                <Route index element={<Home/>}/>
                <Route exact path=':title' element={<Country/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </themeContext.Provider>
  );
};

export default Router;
